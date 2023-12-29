"use client"
import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Image from "next/image";



const navLinks = [
    {
        title: "Home",
        path: "#",
    },
    {
        title: "About",
        path: "#",
    },
    {
        title: "Work",
        path: "#",
    },
    {
        title: "Contact",
        path: "#",
    },
];

const NavBar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#8fce99] bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link href={"/"}
                    className="text-2xl md:text-5xl flex items-center justify-center text-white font-semibold">
                    <Image src={Logo} alt="Logo Bruno Dias" height={60} width={60} />
                    <span className="font-black text-xl">Bruno Dias</span>
                </Link>

                <div className="mobile-menu">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)}
                        >button</button>
                    ) : "navbar esta aberta"}
                </div>

                <div className="menu">
                    <span>Menu</span>
                </div>
            </div>

        </nav>
    )
};

export default NavBar;