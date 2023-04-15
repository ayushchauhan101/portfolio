const skills = [
	{ items: "Python, HTML, JavaScript, CSS" },
	{ items: "Express, Django, Flask" },
	{ items: "Node, nvm, Jest, npm, yarn" },
	{ items: "React, create-react-app, viteJs" },
	{ items: "Deploy, cloudfare-Pages, workers, vercel" },
	{ items: "Tailwind, Bootstrap, styled-components" },
	{ items: "Mongo, mongoose, SQL" },
	{ items: "Pandas, Openpyxl, JSON, BSON, Excel" },
	{ items: "BeautifulSoup, scrapy, selenium" },
	{ items: "Rest-API, Routers, HTTP, Axios, Fetch" },
	{ items: "Bcrypt, CORS, morgan" },
	{ items: "Git, GitHub, GitLens" },
	{ items: "VsCode, PyCharm, Postman, HoppScotch" },
]

function Skills() {
	return (
		<div className="card">
			<section id="skills">
				<h2>Skills</h2>
				<div className="flex flex-col items-center">
					<ol>
						{skills.map((skill, i) => (
							<li key={i}>

							<p>{skill.items}</p>
							</li>
						))}
					</ol>
				</div>
			</section>
		</div>
	)
}

export default Skills
