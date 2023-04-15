import links from "./links"

function MobileMenuBar() {

	return (
		<div className="flex flex-col items-center">
			{links.map((link) => 
            <a href={link.href} key={link.href} className="menu-items">
                <p>{link.label}</p>
            </a>
            )}
		</div>
	)
}

export default MobileMenuBar
