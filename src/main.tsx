import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./reset.css";
import "./index.css";
import App from "./App.tsx";
import Themedif, { type Question } from "./components/Themedif.tsx";
import UnderConstruction from "./components/UnderConstruction.tsx";
import Header from "./components/quiz-components/Header.tsx";
import Questions from "./components/quiz-components/Questions.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: "/", element: <Header /> },
			{
				path: "/Themedif",
				element: (
					<Themedif
						setData={(_value: Question[] | null): void => {
							throw new Error("Function not implemented.");
						}}
						data={null}
					/>
				),
			},
			{
				path: "/Questions",
				element: <Questions data={null} />,
			},

			{
				path: "/Millions",
				element: <UnderConstruction />,
			},
		],
	},
]);

createRoot(document.getElementById("root") as HTMLElement).render(
	<RouterProvider router={router} />,
);
