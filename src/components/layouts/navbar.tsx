import Link from "next/link"

const NavbarComponent = () => {

    const links = [{
        name: "About",
        href: "/"
    }, {
        name: "Portfolio",
        href: "/"
    }, {
        name: "Contact",
        href: "/"
    }
    ]

    return <>
        <nav className="sm:w-5/6 mx-auto flex items-center gap-4 justify-between py-4 sm:py-3 border border-[#262626] bg-[#1B1B1B] rounded-lg px-4 sm:px-3 text-base sm:text-lg uppercase font-semibold ">
            {links.map(({ name, href }) => (
                <Link href={href} key={name} className="text-white hover:text-[#E63E21]">
                    {name}
                </Link>
            ))}
        </nav>
    </>
}
export default NavbarComponent