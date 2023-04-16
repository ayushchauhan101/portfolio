import MenuBar from "./HeaderComponents/MenuBar"
import MobileMenuBar from "./HeaderComponents/MobileMenuBar"

function Header() {
	return (
		<header>
			<div className="header-div card">
				{/* Title */}
				<div>
					<section id="home">
						<h1>Pragma</h1>
						<p className="text-center">Built on react + vite + tailwind</p>
					</section>
				</div>
				{/* Dropdown Menu */}
				<div>
					<MenuBar />
				</div>
			</div>
		</header>
	)
}

export default Header
