import MenuBar from "./HeaderComponents/Example"

function HeaderButton(props) {
	return <button className="header-btn">{props.children}</button>
}

function Header() {
	function clickHandler(e) {}
	return (
		<header>
			<div className="header-div">
				<div>
					<section id="home">
						<h1>Pragma</h1>
						<p className="text-center">Built on react + vite + tailwind</p>
					</section>
				</div>
				<div className="flex flex-col items-center md:invisible">
					<HeaderButton>
						<a href="#profile" onClick={clickHandler}>
							Go to Profile
						</a>
					</HeaderButton>
					<HeaderButton>
						<a href="#skills" onClick={clickHandler}>
							Go to Skills
						</a>
					</HeaderButton>
					<HeaderButton>
						<a href="#projects" onClick={clickHandler}>
							Go to Projects
						</a>
					</HeaderButton>
					<HeaderButton>
						<a href="#footer" onClick={clickHandler}>
							Go to Footer
						</a>
					</HeaderButton>
				</div>
				<div className="invisible md:visible">
					<MenuBar />
				</div>
			</div>
		</header>
	)
}

export default Header
