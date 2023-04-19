import ProjectLinks from "./GithubButton"

function Projects() {
	return (
		<div className="card min-h-fit">
			<section id="projects">
				<h2>Projects</h2>
				<div className="flex flex-row min-h-fit snap-x snap-mandatory items-center justify-between space-x-4 overflow-scroll p-4 leading-loose">
					<div className="h-full w-full shrink-0 snap-center">
						<b> BlogSite </b> <br />
						<ProjectLinks
							link={" https://github.com/ayushchauhan101/blogs_CRUD"}
						/>
						<ul className="mylists">
							<li>A complex API built on ExpressJS.</li>
							<li>
								CRUD functionalities as well as password hash storing for user
								authentication.
							</li>
							<li>
								Multiple version and branch control with github and gitlens
								extension.
							</li>
							<li>Successfully tested by JestJs testing library.</li>
							<li>
								Hoppscotch and Postman client used for assessing the API and
								server.
							</li>
						</ul>
					</div>

					<div className="h-full w-full shrink-0 snap-center">
						<b>
							Mobile Recharge <br />
						</b>
						<ProjectLinks link="https://github.com/ayushchauhan101/django_website_api" />
						<ul className="mylists">
							<li>Website and Api built on Django and DjangoRestFramework.</li>
							<li>
								Api requested from locally built REST api and handled in python.
							</li>
							<li>Front end designed with TailwindCSS.</li>
						</ul>
					</div>

					<div className="h-full w-full shrink-0 snap-center">
						<b>
							Login/Signup Page <br />
						</b>
						<ProjectLinks
							link={"https://github.com/ayushchauhan101/React_login_page"}
						/>
						<ul className="mylists">
							<li>
								A login and signup landing page built on ReactJs and
								TailwindCSS.
							</li>
							<li>ES6 module implementation instead of common JS.</li>
							<li>Dark mode and screen reader friendly.</li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Projects
