import Menu from "./Menu"
import HeaderStyle from "./Header.module.css"
import Link from "next/link"
import Image from "next/image"
import WebSiteLogo from "@/assets/images/logoDoSite.png"
export default function Header (){

    return (
        <header className={HeaderStyle.header}>
            <Link href="/">
                <h1 className="logo">Compselects</h1>
                <Image src={WebSiteLogo} width={250} height={80} alt="Logo do site"/>
            </Link>
            <Menu></Menu>

        </header>
    )


}