"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const NavbarComponent = () => {

    const links = [{
        name: "About",
        href: "/"
    }, {
        name: "Portfolio",
        href: "/portfolio"
    }, {
        name: "Contact",
        href: "/contact"
    }
    ]

    // usePathname hook will give you the current path.
    const pathName = usePathname();    
    return <>
        <nav className="sm:w-5/6 mx-auto flex items-center gap-4 justify-between py-4 sm:py-3 border border-[#262626] bg-[#1B1B1B] rounded-lg px-4 sm:px-3 text-base sm:text-lg uppercase font-semibold ">
            {links.map(({ name, href }) => (
                <Link href={href} key={name} className={`${pathName === href ? "text-orange-500" : "text-white hover:text-orange-500"}`}>
                    {name}
                </Link>
            ))}
        </nav>
    </>
}
export default NavbarComponent