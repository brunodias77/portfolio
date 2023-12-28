"use client"
import Image from "next/image";
import Logo from "../../public/logo.svg";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const Header = () => {
    return (
        <header className=" w-full mt-7">
            <div className="flex items-center justify-between px-72">
                <div className="flex items-center justify-center text-white">
                    <Image src={Logo} alt="Logo Bruno Dias" height={60} width={60} />
                    <span className="font-black text-xl">Bruno Dias</span>
                </div>
                <nav>
                    <ul className="flex align-center justify-center text-white font-bold">
                        <li className="px-3 text-green_400"><Link href={"#"}>&lt; Home &gt;</Link></li>
                        <li className="px-3">About</li>
                        <li className="px-3">Work</li>
                        <li className="px-3">Contact</li>
                    </ul>
                </nav>

                <nav>
                    <ul className="flex align-center justify-between text-text_gray_100 text-xs font-light">
                        <li className="flex items-center justify-center"><AiFillGithub size={20} color="white" /> <span className="ml-2">Github</span></li>
                        <li className="flex items-center justify-center"><AiFillLinkedin size={20} color="white" /> <span className="ml-2">Linkedin</span></li>
                        <li className="flex items-center justify-center"><AiFillInstagram size={20} color="white" /> <span className="ml-2">Instagram</span></li>

                    </ul>
                </nav>

            </div>

        </header>
    )
};

export default Header;