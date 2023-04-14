import Profile from "./bodyComponents/Profile"
import Skills from "./bodyComponents/Skills"
import Education from "./bodyComponents/Educations"
import Projects from "./bodyComponents/Projects"

function Body() {
	return (
		<div className="flex flex-col space-x-0 space-y-2 px-5">
            <Profile />
			<Skills />
			<Projects />
		</div>
	)
}

export default Body