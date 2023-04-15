import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import JumpTo from "./components/JumpTo"

function App() {
	return (
		// global container
		<div className="main  dark:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
			<div className="mx-4 flex flex-col space-y-8 bg-white/50 dark:bg-slate-800/80">
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
