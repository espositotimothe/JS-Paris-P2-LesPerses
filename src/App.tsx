import { useState } from "react";
import type { Question } from "./components/Themedif";
import "./App.css";
import Themedif from "./components/Themedif";

function App() {
	const [data, setData] = useState<Question[] | null>(null);
	return (
		<div>
			<Themedif data={data} setData={setData} />
		</div>
	);
}
export default App;
