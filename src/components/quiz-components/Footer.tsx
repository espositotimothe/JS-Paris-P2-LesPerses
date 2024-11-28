import "./Footer.css";
import facebook from "../../images/facebook_blanc_SF.png";
import instagram from "../../images/instagram_blanc_SF.png";
import twitter from "../../images/twitter_blanc_SF.png";

function Footer() {
	return (
		<div className="footer-component">
			<div className="footer-mentions">
				<p>© 2024 Qui Vuit Débugger Des Millions.</p>
				<p className="mention-2">Tous droits réservés.</p>
			</div>
			<div className="social-media-list">
				<a
					href="https://facebook.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="social-media" src={facebook} alt="facebook" />
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
					<img className="social-media" src={twitter} alt="twitter" />
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img className="social-media" src={instagram} alt="instagram" />
				</a>
			</div>
		</div>
	);
}

export default Footer;
