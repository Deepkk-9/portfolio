import Link from "next/link";
import { Button } from "./ui/button"
import Image from "next/image";
import alienIcon from "../public/alienIcon.svg"

// components
import Nav from "./Nav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white ">
            <div className="container mx-auto flex justify-between items-center">

                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Alien
                        <span className="text-accent">
                            {/* <Image src={alienIcon} alt="." /> */}
                            .
                        </span>
                    </h1>
                </Link>

                {/* desktop nav & hire me button*/}
                {/* <div className="hidden xl:flex"> */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href="/contact">
                        <Button>Hire Me</Button>
                    </Link>
                </div>

                {/* mobile nav */}
                <div className="xl:hidden">mobile nav</div>
            </div>
        </header>
    )
}

export default Header