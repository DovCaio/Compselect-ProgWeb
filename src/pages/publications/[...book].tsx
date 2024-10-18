import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import { useEffect } from "react";
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
        
            <h2>{book[0]}</h2>
            <Image src={(`/${book[1]}`)} width={100} height={100} alt="Imagem do livro" />
            <p>Descrição: {book[2]}</p>
            <p>Autor: {book[3]}</p>
            <p>Ano de publicação: {book[4]}</p>
            <p>Tipo: {book[5]}</p>

        </>

    }

    return (
        <div>
            {
                loaded ? render() : "Carregando..."
            }
        </div>
        

        

    )

}