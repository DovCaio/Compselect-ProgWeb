"use client"
import Image from "next/image"
import PostStyle from "./Post.module.css"
import { useRouter } from "next/navigation"
import  transformNameInPath  from "@/utils/transformNameInPath";
//No backend teriamos um texto links e os comentários que serão requisitados quando clickarmos no post
//Assim precisamos de uma link dinâmico para blogs.

export default function Post({tittle, image, summary}: any) {

    const router = useRouter()

    const goToDinamicPage = () => {

        router.push(`/blog/${transformNameInPath(tittle)}/${encodeURIComponent(image.src)}`)

    }

    return (

        <div className={PostStyle.post} onClick={() => goToDinamicPage()}>
            <Image src={image} width={1000} height={1000} alt="Imagem do autor"></Image>
            <h3>{tittle}</h3>
            <p>{summary}</p>
        </div>

    )


}