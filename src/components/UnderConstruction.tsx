import "./UnderConstruction.css";
import under from "../images/page-en-construction.png";
export default function UnderConstruction() {
	return (
		<div className="construction-container">
			<h1 className="construction-title">🚧 Oops ! 🚧</h1>
			<img
				src={under}
				alt="page-en-construction"
				className="construction-image"
			/>
			<p className="construction-text">
				On a les outils, les plans (presque lisibles), et une équipe de
				développeurs avec plus de caféine que de sommeil. Mais promis, cette
				page sera bientôt aussi belle que vos plus beaux rêves... ou presque !
				En attendant, n’hésitez pas à rafraîchir la page. On ne sait jamais,
				peut-être qu’une licorne passera par là pour accélérer le chantier. 🦄💻
			</p>

			<h2 className="construction-subtitle">
				Revenez vite, on vous prépare du lourd ! (Enfin, on essaie...)
			</h2>
		</div>
	);
}
