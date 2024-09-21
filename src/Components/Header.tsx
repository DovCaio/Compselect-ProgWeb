import Menu from "./Menu"
import "./Header.css"
import Link from "next/link"

export default function Header (){

    return (
        <header className="header">
            <Link href="/">
                <h1 className="logo">Compselects</h1>
            </Link>

            <Menu></Menu>

        </header>
    )


}