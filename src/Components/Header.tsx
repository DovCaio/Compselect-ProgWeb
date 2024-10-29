import Menu from "./Menu"
import HeaderStyle from "./Header.module.css"
import Link from "next/link"
import Image from "next/image"
import WebSiteLogo from "@/assets/images/logoDoSite.png"
import { IoIosMenu } from "react-icons/io";
export default function Header (){

    return (
        <header className={HeaderStyle.header}>
            <Link href="/">
                <h1 className="logo">Compselects</h1>
                <Image src={WebSiteLogo} width={250} height={80} alt="Logo do site"/>
            </Link>
            <IoIosMenu className={HeaderStyle.menuIcon}/>
            <Menu></Menu>

        </header>
    )


}