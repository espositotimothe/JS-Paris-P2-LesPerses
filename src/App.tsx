import { useState } from "react";
import type { Question } from "./components/Themedif";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.tsx";
import Themedif from "./components/Themedif";

function App() {
	const [data, setData] = useState<Question[] | null>(null);
	return (
		<div>
			<NavBar />

			<Themedif data={data} setData={setData} />
		</div>
	);
}
export default App;
