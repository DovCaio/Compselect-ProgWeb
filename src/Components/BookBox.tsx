import Image from "next/image";
import BookBoxStyle from "./BookBox.module.css"
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BookBox({img, name, description, author, agePublication, type}: any){

    const router = useRouter()

    const changeRouter = (img, name, description, author, agePublication, type) => {
        router.push(`/publications/${name}/${description}/${author}/${agePublication}/${type}/${encodeURIComponent(img.src)}`)
    }

    return (

        <div className={BookBoxStyle.bookbox} onClick={() => changeRouter(img, name, description, author, agePublication, type)}>
            <Image src={img} alt="Image de um livro" width="1000" height="1000"/>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>

            </div>
        </div>

    )

}