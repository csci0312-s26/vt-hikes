import {
	index,
	layout,
	type RouteConfig,
	route,
} from "@react-router/dev/routes";

export default [
	layout("layouts/sidebar.tsx", [
		index("routes/home.tsx"),
		route("towns/:town", "routes/town.tsx"),
		route("towns/:town/:hike", "routes/hike.tsx"),
	]),

	route("about", "routes/about.tsx"),
] satisfies RouteConfig;
