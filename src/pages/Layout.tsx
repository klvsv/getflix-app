import { Outlet } from "react-router-dom";
import "./../styles/main.scss";

export const Layout = () => {
	return (
		<>
			<header>
			<h1 className="getflixTitle">Getflix</h1>
			</header>
			<main>
				<Outlet />
			</main>
			<footer></footer>
		</>
	);
};
