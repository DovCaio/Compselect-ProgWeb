import Menu from "./Menu"
import HeaderStyle from "./Header.module.css"
import Link from "next/link"

export default function Header (){

    return (
        <header className={HeaderStyle.header}>
            <Link href="/">
                <h1 className="logo">Compselects</h1>
            </Link>

            <Menu></Menu>

        </header>
    )


}