import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";
import { NotFound } from "./pages/NotFound";
import SearchApp from "./pages/SearchApp";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/",
				element: <Home />,
				index: true,
			},
			{
				path: "/movies",
				element: <SearchApp />,
			},
		],
	},
]);
