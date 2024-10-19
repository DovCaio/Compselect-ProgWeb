"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "@/style/active.css"

export default function Menu(){
    const pathName = usePathname()

    console.log(pathName)


    return (
        <nav>
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
                <li className={pathName === "/events" ? "active" : ""}>
                    <Link href="/events">
                        Eventos
                    </Link>
                </li>
                <li className={pathName === "/blog" ? "active" : ""}>
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
        
    )

}