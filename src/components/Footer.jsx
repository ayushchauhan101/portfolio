function FooterButton(props) {
	return <button className="footer-btn">{props.children}</button>
}

function Footer() {
	return (
		<section id="footer">
			<div className="items">
				<FooterButton>Cloudfare pages</FooterButton>
				<FooterButton>Github</FooterButton>
				<FooterButton>Contact us</FooterButton>
			</div>
		</section>
	)
}

export default Footer
