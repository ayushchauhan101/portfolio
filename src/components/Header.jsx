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
				{/* Mobile Menu */}
				<div className="md:invisible">
					<MobileMenuBar />
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
