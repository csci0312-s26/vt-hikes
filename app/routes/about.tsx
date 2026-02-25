import { Link } from "react-router";

export default function About() {
	return (
		<div id="about">
			<Link to="/">← Return to home</Link>
			<h1>About Vermont Hikes</h1>

			<div>
				<p>
					This is a demo illustrating some of the features of React Router's
					router configuration. The data consists of a list of hikes from around
					Vermont. These should be taken with a grain of salt because they were
					assembled by Gemini and not fully vetted for accuracy.
				</p>
			</div>
		</div>
	);
}
