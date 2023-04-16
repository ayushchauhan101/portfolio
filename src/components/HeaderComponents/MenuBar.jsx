import { Fragment } from "react"
import { Menu } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

import links from "./links"

function MenuBar() {
	return (
		<Menu>
			<Menu.Button className="mt-5 h-12 w-32 rounded-md bg-black text-2xl font-bold text-white shadow-xl transition duration-200 hover:scale-110 dark:bg-slate-300 dark:text-black">
				Go to
				<ChevronDownIcon
					className="-mr-1 ml-2 h-10 w-5 bg-black text-2xl font-bold text-white dark:bg-slate-300 dark:text-black"
					aria-hidden="true"
				/>
			</Menu.Button>
			<Menu.Items>
				<div className="mt-4 flex flex-col space-y-2">
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