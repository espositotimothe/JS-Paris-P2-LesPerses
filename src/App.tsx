import { useState } from "react";
import type { Question } from "./components/Themedif";
import "./App.css";
import Themedif from "./components/Themedif";
// import QuizMain from "./components/quiz-components/QuizMain";

function App() {
	const [data, setData] = useState<Question[] | null>(null);
	return (
		<>
			<Themedif data={data} setData={setData} />
			<Header />
			<Question />
		</>
	);
}
export default App;
