import { useState } from "react";
import type { Question } from "./components/Themedif";
import "./App.css";
import Themedif from "./components/Themedif";
import Footer from "./components/quiz-components/Footer";
import Header from "./components/quiz-components/Header";
import Questions from "./components/quiz-components/Questions";
function App() {
	const [data, setData] = useState<Question[] | null>(null);
	return (
		<>
			<Header />
			{/* <Themedif data={data} setData={setData} /> */}
			<Footer />
		</>
	);
}
export default App;
