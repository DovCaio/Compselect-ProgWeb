import Image from "next/image";
import BookBoxStyle from "./BookBox.module.css"
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BookBox({img, name, description, author, agePublication, type}: any){

    const router = useRouter()

    const changeRouter = (img, name, description, author, agePublication, type) => {
        localStorage.setItem("imageOfBook", img)
        router.push(`/publications/${name}/${description}/${author}/${agePublication}/${type}`)
    }

    return (

        <div className={BookBoxStyle.bookbox} onClick={() => changeRouter(img, name, description, author, agePublication, type)}>
            <Image src={img} alt="Image de um livro" width="1000" height="1000"/>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <p ><span>Autor:</span> {author}</p>
                <p><span>Ano de publicação:</span> {agePublication}</p>
                <p><span>Tipo:</span> {type}</p>
            </div>
        </div>

    )

}