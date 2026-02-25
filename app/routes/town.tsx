import { Link, Outlet } from "react-router";
import { getTownData } from "~/data/data_utils";
import type { Route } from "./+types/town";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
	const townData = await getTownData(params.town);
	if (!townData) {
		throw new Response("Not Found", { status: 404 });
	}
	return { townData };
}

export default function Town({ loaderData }: Route.ComponentProps) {
	const { townData } = loaderData;

	const hikes = townData.hikes.map((h) => (
		<li key={h.slug}>
			<Link to={h.slug}>{h.name}</Link>
		</li>
	));

	return (
		<div>
			<h2>{townData.town}</h2>
			<p>
				<Link to="/">Hikes</Link> &gt; {townData.town}
			</p>
			<h3>Hikes</h3>
			{hikes.length ? (
				<ul>{hikes}</ul>
			) : (
				<p>
					<i>No hikes</i>
				</p>
			)}

			<Outlet />
		</div>
	);
}
