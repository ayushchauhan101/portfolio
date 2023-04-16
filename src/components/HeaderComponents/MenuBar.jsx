import { Fragment } from "react"
import { Menu } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"

import links from "./links"

function MenuBar() {
	return (
		<Menu>
			<Menu.Button className="min-w-full rounded-md bg-black p-1 text-2xl font-bold text-white shadow-black drop-shadow-xl dark:bg-slate-300 dark:text-black md:w-40">
				More
				<ChevronDownIcon
					className="-mr-1 ml-2 h-10 w-5 bg-black text-2xl font-bold text-white dark:bg-slate-300 dark:text-black"
					aria-hidden="true"
				/>
			</Menu.Button>
			<Menu.Items>
				<Menu.Item>
					{({ active }) => (
						<div className="menu-items bg-slate-400/20 pb-1 text-center">
							<p className=" border-b-2 border-slate-800 text-center">
								Ayush Chauhan
							</p>
							ayush.chauhan0008@gmail.com
							<br />
							+91 729 1001 389
						</div>
					)}
				</Menu.Item>
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
