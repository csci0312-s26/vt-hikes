import data from "~/data/hikes.json";

export interface HikeType {
	slug: string;
	name: string;
	difficulty: string;
	description: string;
}

export function getTowns() {
	const towns = data.map((t) => ({ id: t.id, town: t.town }));
	return towns;
}

export function getTownData(town: string) {
	const townData = data.find((t) => t.id === town);

	return townData ? townData : null;
}

export function getHike(townId: string, hikeId: string) {
	const townData = data.find((t) => t.id === townId);
	if (!townData) {
		return null;
	} else {
		const hike = townData.hikes.find((h) => h.slug === hikeId);
		return hike
			? { hike: hike, town: { id: townId, town: townData.town } }
			: null;
	}
}
