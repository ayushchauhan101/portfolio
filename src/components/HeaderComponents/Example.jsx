import { Fragment } from "react"
import { Menu } from "@headlessui/react"

const links = [
	{ href: "#profile", label: "Profile" },
	{ href: "#skills", label: "Skills" },
	{ href: "#projects", label: "Projects" },
	{ href: "footer", label: "Footer" },
]

function MenuBar() {
	return (
		
			<Menu>
				<Menu.Button>Go to</Menu.Button>
				<Menu.Items>
					{links.map((link) => (
						<Menu.Item key={link.href} as={Fragment}>
							{({ active }) => (
								<a
									href={link.href}
									className={`${
										active ? "bg-blue-500 text-white" : "bg-white text-black"
									}`}
								>
									{link.label}
								</a>
							)}
						</Menu.Item>
					))}
				</Menu.Items>
			</Menu>
		
	)
}

export default MenuBar
