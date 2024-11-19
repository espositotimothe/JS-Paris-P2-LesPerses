import { useState } from "react";
import type { Question } from "./components/Themedif";
import "./App.css";
import Themedif from "./components/Themedif";
import Header from "./components/quiz-components/Header";

function App() {
	const [data, setData] = useState<Question[] | null>(null);
	return (
		<>
			<Header />

			{/* <Themedif data={data} setData={setData} /> */}
		</>
	);
}
export default App;
