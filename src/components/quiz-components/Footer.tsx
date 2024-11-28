import "./Footer.css";

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
					<img
						className="social-media"
						src="src/images/facebook_blanc_SF.png"
						alt="facebook"
					/>
				</a>
				<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
					<img
						className="social-media"
						src="src/images/twitter_blanc_SF.png"
						alt="twitter"
					/>
				</a>
				<a
					href="https://instagram.com"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						className="social-media"
						src="src/images/instagram_blanc_SF.png"
						alt="instagram"
					/>
				</a>
			</div>
		</div>
	);
}

export default Footer;
