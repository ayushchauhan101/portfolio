import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import JumpTo from "./components/JumpTo"

function App() {
	return (
		// global container
		<div className="main">
			<div className="background">
				<div className="m-2 mb-4 flex flex-col justify-between space-x-0 space-y-8 rounded-md p-1 md:m-8 md:mb-16 md:space-y-16 md:p-4">
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
