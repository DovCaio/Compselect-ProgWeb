import Image from "next/image";
import BookBoxStyle from "./BookBox.module.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BookBox({img, name, description, author, agePublication, type}: any){


    return (

        <div className={BookBoxStyle.bookbox}>
            <Image src={img} alt="Image de um livro" width="1000" height="1000"/>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p>Autor: {author}</p>
                <p>Ano de publicação: {agePublication}</p>
                <p>Tipo: {type}</p>
            </div>
        </div>

    )

}