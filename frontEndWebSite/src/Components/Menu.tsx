"use client"
import { IoIosMenu } from "react-icons/io";
import Link from "next/link"
import { usePathname } from "next/navigation"
import "@/style/active.css"
import HeaderStyle from "./Header.module.css"
import { useState } from "react";
import React from "react";
export default function Menu(){
    const pathName = usePathname()

    const [displayMenu, setDisplayMenu] = useState("") 

    const displayTheMenu = () => {
        if (displayMenu === HeaderStyle.menuBox){
            setDisplayMenu("")
        }else {

            setDisplayMenu(HeaderStyle.menuBox)

        }
    }

    return (
        <>
        <IoIosMenu className={HeaderStyle.menuIcon} onClick={() => displayTheMenu()}/> 

        <nav className={`${HeaderStyle.menu} ${displayMenu}`}>
            <ul>

                <li className={pathName === "/" ? "active" : ""}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={pathName === "/aboutus" ? "active" : ""}>
                    <Link href="/aboutus">
                        Sobre Nós    
                    </Link>
                </li>
                <li className={pathName?.indexOf("/publications") > -1? "active" : ""}>
                    <Link href="/publications">
                        Publicações
                    </Link>
                </li>
                <li className={pathName === "/authors" ? "active" : ""}>
                    <Link href="/authors">
                        Autores
                    </Link>
                </li>
                <li className={pathName === "/submissions" ? "active" : ""}>
                    <Link href="/submissions">
                        Submissões
                    </Link>
                </li>
                <li className={pathName?.indexOf("/events") > -1  ? "active" : ""}>
                    <Link href="/events">
                        Eventos
                    </Link>
                </li>
                <li className={pathName?.indexOf("/blog") > -1  ? "active" : ""}>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
                <li className={pathName === "/contact" ? "active" : ""}>
                    <Link href="/contact">
                        Contato
                    </Link>
                </li>

            </ul>

        </nav>
        </>
        
    )

}