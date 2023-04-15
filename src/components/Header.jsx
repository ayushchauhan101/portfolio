import MenuBar from "./HeaderComponents/MenuBar"

function Header() {
	return (
		<header>
			<div className="header-div">
				{/* Title */}
				<div>
					<section id="home">
						<h1>Pragma</h1>
						<p className="text-center">Built on react + vite + tailwind</p>
					</section>
				</div>
				{/* Dropdown Menu */}
				<div className="collapse md:visible">
					<MenuBar />
				</div>
			</div>
		</header>
	)
}

export default Header
