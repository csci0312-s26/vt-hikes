import type { HikeType } from "~/data/data_utils";

interface HikeViewParamsType {
	hike: HikeType;
}

export function HikeView({ hike }: HikeViewParamsType) {
	return (
		<div>
			<h3>{hike.name}</h3>
			<p>
				<b>Difficulty</b>: {hike.difficulty}
			</p>
			<p>{hike.description}</p>
		</div>
	);
}
