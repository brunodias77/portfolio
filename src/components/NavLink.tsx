import Link from "next/link";

interface NavLinkProps {
    href: string;
    title: string;

}

const NavLink = ({ href, title }: NavLinkProps) => {
    return (
        <Link href={href} className="">
            {title}
        </Link>
    )
}
export default NavLink;