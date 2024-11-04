import Image from 'next/image'
import Link from 'next/link'
import AuthorBoxStyle from "./AuthorBox.module.css"
import { PropsWithoutRef } from 'react'
export default function AuthorBox(props : PropsWithoutRef<{name: string, img: string, biograpy: string, linkForPublications: string}>) {

    return (

        <section className={AuthorBoxStyle.autorBox}>

            <h3>{props.name}</h3>
            <Image src={props.img} width={1000} height={1000} alt="Imagem do autor"/>
            <p>{props.biograpy}</p>
            <Link href={props.linkForPublications} target="_blank">Publicações</Link>
        </section>  

    )

}