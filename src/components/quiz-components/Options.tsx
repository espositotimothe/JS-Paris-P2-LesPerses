// import React, { useEffect, useState } from "react";

// type Quiz = {
// 		_id: string;
// 		question: string;
// 		answer: string;
// 		badAnswers: string[];
// 		category: string;
// 		difficulty: "facile" | "normal" | "difficile";
// };

// export default function Options() {
//   const [quiz, setQuiz] = useState<Quiz | null>(null);

//   useEffect(() => {
// 		fetch("https://quizzapi.jomoreschi.fr/api/v1/quiz")
// 			.then((response) => response.json())
// 			.then((data) => {
        
// 				if (Array.isArray(data.quizzes) && data.quizzes.length > 0) {
// 					setQuiz(data.quizzes[0]); // On prend le premier quiz
// 				} else {
// 					console.error("Aucun quiz trouvé");
// 				}
// 			})
// 			.catch((error) => console.error("Erreur lors de la récupération du quiz :", error));
// 	}, []);


// 	return (
// 			<div className="options">
// 				<button  type="button" className="option">Option 1</button>
// 				<button type="button" className="option">Option 2</button>
// 				<button type="button" className="option">Option 3</button>
// 				<button type="button" className="option">Option 4</button>
// 			</div>
// 	);
// }
