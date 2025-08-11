"use client"
import { usePathname } from "next/navigation"
import { Sheet , SheetContent , SheetTrigger } from "./ui/sheet"
import Link from "next/link"
import {CiMenuFries} from "react-icons/ci"
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

export default function MobileNav() {
    const pathname = usePathname();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent" ></CiMenuFries>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                <h1 className="text-4xl font-semibold">
                    saeed<span className="text-accent">.</span>
                </h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8 ">
                {Links.map((link , index)=> {
                    return <Link className={`${link.path === pathname && "text-accent border-b-2 border-accent" } text-xl capitalize hover:text-accent transition-all`} href={link.path} key={index}>{link.name}</Link>
                })}
            </nav>
            </SheetContent>
    </Sheet>
  )
}
//
