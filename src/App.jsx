import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {
	return (
		// global container
		<div className="main bg-charlie-brown bg-scroll">

			<div className="flex flex-col pt-4 px-4 mx-4 space-y-8 bg-white/90 dark:bg-slate-800/80">

				<div className="flex flex-col justify-between space-x-0 space-y-8 md:space-y-16 rounded-md m-2 mb-4 p-1 md:m-8 md:mb-16 md:p-4">
					<Header />
					<Body />
					<Footer />
				</div>
				
			</div>

		</div>
	)
}

export default App
