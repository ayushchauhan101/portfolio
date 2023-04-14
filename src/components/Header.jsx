function HeaderButton(props) {
	return <button className="header-btn">{props.children}</button>
}

function Header() {
	return (
		<header>
			<div className="header-div" >
				<div className="mb-6 md:mb-10 mt-6 md:mt-12">
					<h1>Pragma.com</h1>
				</div>

				<div className="flex flex-col items-center">
					<HeaderButton>
						<a href="#profile">Go to Profile</a>
					</HeaderButton>
					<HeaderButton>
						<a href="#skills">Go to Skills</a>
					</HeaderButton>
					<HeaderButton>
						<a href="#projects">Go to Projects</a>
					</HeaderButton>
					<HeaderButton>
						<a href="#footer">Go to Footer</a>
					</HeaderButton>
				</div>
			</div>
		</header>
	)
}

export default Header
