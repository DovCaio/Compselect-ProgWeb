"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import HeaderStyle from "./Header.module.css"

export default function Menu(){
    const pathName = usePathname()

    console.log(pathName)


    return (
        <nav>
            <ul>

                <li className={pathName === "/" ? HeaderStyle.active : ""}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={pathName === "/aboutus" ? HeaderStyle.active : ""}>
                    <Link href="/aboutus">
                        Sobre Nós    
                    </Link>
                </li>
                <li className={pathName === "/publications" ? HeaderStyle.active : ""}>
                    <Link href="/publications">
                        Publicações
                    </Link>
                </li>
                <li className={pathName === "/authors" ? HeaderStyle.active : ""}>
                    <Link href="/authors">
                        Autores
                    </Link>
                </li>
                <li className={pathName === "/submissions" ? HeaderStyle.active : ""}>
                    <Link href="/submissions">
                        Submissões
                    </Link>
                </li>
                <li className={pathName === "/events" ? HeaderStyle.active : ""}>
                    <Link href="/events">
                        Eventos
                    </Link>
                </li>
                <li className={pathName === "/blog" ? HeaderStyle.active : ""}>
                    <Link href="/blog">
                        Blog
                    </Link>
                </li>
                <li className={pathName === "/contact" ? HeaderStyle.active : ""}>
                    <Link href="/contact">
                        Contato
                    </Link>
                </li>

            </ul>

        </nav>
        
    )

}