import MenuBar from "./HeaderComponents/MenuBar"
import MobileMenuBar from "./HeaderComponents/MobileMenuBar"

function Header() {
	return (
		<header>
			<div className="card header-div">
				{/* Title */}
				<div>
					<section id="home">
						<h1>Pragma</h1>
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
