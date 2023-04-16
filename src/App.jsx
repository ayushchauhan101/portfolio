import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import JumpTo from "./components/JumpTo"

function App() {
	return (
		// global container
		<div className="main">
			<div className="background">
				<div className="website-container">
					<Header />
					<JumpTo />
					<Body />
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default App
