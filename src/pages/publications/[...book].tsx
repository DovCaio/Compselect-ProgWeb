import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
import DinamicPublicationStyle from "@/pages/publications/dinamic_publications.module.css"
export default function Page(){

    const router = useRouter()
    const book = router.query.book

    const [loaded, setLoaded] = React.useState(false)

    useEffect(() => {
        if(router.isReady){

            setLoaded(true)
        }
    }, [router.isReady])

    const render  = () =>  {

        return <>
            <div className={DinamicPublicationStyle.image}>
                <Image src={book[5]} alt="Imagem do livro" width={1000} height={1000}/>
            </div>
            <div className={DinamicPublicationStyle.informations}>

                <h2>{book[0]}</h2>
                <p className={DinamicPublicationStyle.description}>{book[1]}</p>
                <p>Autor: {book[2]}</p>
                <p>Ano de publicação: {book[3]}</p>
                <p>Tipo: {book[4]}</p>

            </div>

        </>

    }

    return (
        <div className={DinamicPublicationStyle.dinamicPublication}>
            {
                loaded ? render() : "Carregando..."
            }
        </div>
        

        

    )

}