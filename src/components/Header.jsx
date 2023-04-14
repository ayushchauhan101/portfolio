function HeaderButton(props) {
	return <button className="header-btn">{props.children}</button>
}

function Header() {

	// empty function to not trigger click upon first render
	function clickHandler(e){
		
	}

	return (
		<header>
			<div className="header-div" >
				<div>
					<h1>Pragma</h1>
					<p className="text-center">Built on react + vite + tailwind</p>
				</div>

				<div className="flex flex-col items-center">
					<HeaderButton>
						<a href="#profile" onClick={clickHandler}>Go to Profile</a>
					</HeaderButton>
					<HeaderButton>
						<a href="#skills" onClick={clickHandler}>Go to Skills</a>
					</HeaderButton>
					<HeaderButton>
						<a href="#projects" onClick={clickHandler}>Go to Projects</a>
					</HeaderButton>
					<HeaderButton>
						<a href="#footer" onClick={clickHandler}>Go to Footer</a>
					</HeaderButton>
				</div>
			</div>
		</header>
	)
}

export default Header
