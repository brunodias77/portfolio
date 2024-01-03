"use client"
import { useState } from "react";
import Link from "next/link";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import NavLink from "./NavLink";


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
        <nav className="mx-auto top-0 left-0 right-0 bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-7 py-2">
                <Link href={"/"}
                    className="text-2xl md:text-5xl flex items-center justify-center text-white font-semibold">
                    <Image src={Logo} alt="Logo Bruno Dias" height={60} width={60} />
                    <span className="font-black text-xl">Bruno Dias</span>
                </Link>


                <div className="menu hidden md:block md:w-auto">
                    <ul className="flex align-center justify-center text-white font-bold gap-8">
                        {navLinks.map((link) => (
                            <li key={link.title} className="hover:text-green_400">
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>


                <nav className="hidden lg:block">
                    <ul className="flex align-center justify-between text-text_gray_100 text-xs font-light gap-4">
                        <li><a href="https://github.com/brunodias77" className="flex items-center justify-center hover:text-green_400"><AiFillGithub size={20} color="white" /> <span className="ml-1">Github</span></a></li>
                        <li><a href="" className="flex items-center justify-center"><AiFillLinkedin size={20} color="white" /> <span className="ml-1">Linkedin</span></a></li>
                        <li ><a href="https://www.instagram.com/brunodias_dev/" className="flex items-center justify-center"><AiFillInstagram size={20} color="white" /> <span className="ml-1">Instagram</span></a></li>

                    </ul>
                </nav>


                <div className="mobile-menu  md:hidden">
                    {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)}>
                            <FaBars size={20} color="white" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)}>
                            <FaXmark size={20} color="white" />
                        </button>
                    )
                    }
                </div>
            </div>

        </nav >
    )
};

export default NavBar;