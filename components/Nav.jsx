"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
const Links = [
    {
        name: "home",
        path: "/", 
    },
    {
        name: "resume",
        path: "/resume", 
    },
    {
        name: "work",
        path: "/work", 
    },
    {
        name: "contact",
        path: "/contact", 
    },
]


export default function Nav() {
const pathname = usePathname();

return (
    <nav className="flex gap-8">
    {Links.map((links , index ) => {
        return <Link className={`${links.path === pathname && "text-accent border-b-2 border-accent" }
            capitalize font-medium hover:text-accent transition-all`} href={links.path} key={index}>{links.name}</Link>
    })}
    </nav>
)
}
