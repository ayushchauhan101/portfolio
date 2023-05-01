import { Fragment } from "react"
import { Menu } from "@headlessui/react"

import links from "./links"

const arrowDown = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 24 24"
		fill="currentColor"
		className="drop-arrow ml-3"
	>
		<path
			fillRule="evenodd"
			d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
			clipRule="evenodd"
		/>
	</svg>
)

function MenuBar() {
	return (
		<Menu>
			<Menu.Button className="h-16 min-w-full rounded-md bg-black p-1 my-4 text-2xl font-bold text-white drop-shadow-xl dark:bg-slate-300 dark:text-black md:w-40">
				More
				{arrowDown}
			</Menu.Button>
			<Menu.Items>
				<Menu.Item>
					{({ active }) => (
						<div className="menu-items bg-slate-400/20 pb-1 text-center hover:scale-100">
							<p className=" border-b-2 border-slate-800 text-center">
								Ayush Chauhan
							</p>
							ayush.chauhan0008@gmail.com
							<br />
							+91 729 1001 389
						</div>
					)}
				</Menu.Item>
				<div className="mt-4 flex flex-col space-y-2 items-center">
					{links.map((link) => (
						<Menu.Item key={link.href} as={Fragment}>
							{({ active }) => (
								<a
									href={link.href}
									className={`${
										active ? "bg-slate-400 text-white" : "bg-inherit text-black"
									} menu-items`}
								>
									<p>{link.label}</p>
								</a>
							)}
						</Menu.Item>
					))}
				</div>
			</Menu.Items>
		</Menu>
	)
}

export default MenuBar
