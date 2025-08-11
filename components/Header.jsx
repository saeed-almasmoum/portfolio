import Link from "next/link";

import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Saeed
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* pc nav  */}
        <div className="hidden xl:flex items-center gap-8">
        <Nav>
        </Nav>
        <Link href="/contact">
        <Button>
          hire me
        </Button>
        </Link>
        </div>

        {/* mobile nav  */}
        <div className="xl:hidden ">
        <MobileNav></MobileNav>
        </div>

      </div>
    </header>
  );
}
