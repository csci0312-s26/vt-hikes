import { Link } from "react-router";
import { HikeView } from "~/components/hikeView";
import { getHike } from "~/data/data_utils";
import type { Route } from "./+types/hike";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
	const hikeData = await getHike(params.town, params.hike);
	if (!hikeData) {
		throw new Response("Not Found", { status: 404 });
	}
	return { hikeData: hikeData };
}

export default function Hike({ loaderData }: Route.ComponentProps) {
	const { hike, town } = loaderData.hikeData;

	return (
		<div>
			<h3>{hike.name}</h3>
			<p>
				<Link to="/">Hikes</Link> &gt;{" "}
				<Link to={`/towns/${town.id}`}>{town.town}</Link> &gt; {hike.name}
			</p>
			<HikeView hike={hike} />
		</div>
	);
}
