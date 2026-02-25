import { Link, Outlet } from "react-router";
import { getTowns } from "~/data/data_utils";
import styles from "~/styles/sidebar.module.css";
import type { Route } from "./+types/sidebar";

export async function clientLoader() {
	const towns = await getTowns();

	return { towns };
}

export default function SidebarLayout({ loaderData }: Route.ComponentProps) {
	const { towns } = loaderData;

	return (
		<div className={styles.container}>
			<div id="sidebar">
				<Link to="about">About Vermont Hikes</Link>

				<hr />
				<nav>
					{towns.length ? (
						<ul>
							{towns.map((town) => (
								<li key={town.id}>
									<Link to={`towns/${town.id}`}>{town.town}</Link>
								</li>
							))}
						</ul>
					) : (
						<p>
							<i>No towns</i>
						</p>
					)}
				</nav>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}
