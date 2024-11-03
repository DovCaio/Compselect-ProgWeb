import { useRouter  } from "next/router";
import { useEffect, useState } from "react";
import transformPathInName from "@/utils/transformPathInName";
import Image from "next/image";
import Link from "next/link";
import GenericImagePost from "@/assets/images/ImagemGenericaPostComputacao.webp"
import PostStyle from "./dinamic_post.module.css"
import Queue from "@/utils/Queue";
const postExample = {

    date : "10/10/2021",
    image_banner: GenericImagePost,
    content: {

        images: [
            GenericImagePost.src,
            GenericImagePost.src,
            GenericImagePost.src
        ],
    
        texts: [
            "Texto do primeiro post",
            "Texto do segundo post",
            "Texto do terceiro post"
        ],
        links: [
            "https://google.com",
            "https://google.com",
            "https://google.com"
        ]
    },
    sequenceOfContent: [
        1,
        0,
        2,
        0, 
        0,
        1,
        1,
        2,
        2
    ],
    comments: [
        {
            author: "Matheus",
            comment: "Muito bom!",
            date: "10/10/2021"
        },
        {
            author: "Lucas",
            comment: "Muito bom!",
            date: "10/10/2021"
        }
    ]

}

export default function PostBlog() {

    const router = useRouter()
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if(router.isReady){
            setLoaded(true)
        }
    }, [router.isReady])
    const post = router.query.post

    function whenLoaded(){
        if( postExample.sequenceOfContent.length !== (postExample.content.texts.length + 
                                                    postExample.content.images.length + 
                                                    postExample.content.links.length
        )){
           console.log("Isso Não deveria acontecer! erro!") 
        }

        const queueImages = new Queue()
        const queueTexts = new Queue()
        const queueLinks = new Queue()
        const contentAux = []

        for(let i = 0; i < postExample.content.images.length; i++){
            queueImages.push(postExample.content.images[i])
        }

        for(let i = 0; i < postExample.content.texts.length; i++){
            queueTexts.push(postExample.content.texts[i])
        }

        for(let i = 0; i < postExample.content.links.length; i++){
            queueLinks.push(postExample.content.links[i])
        }


        for(let i = 0; i < postExample.sequenceOfContent.length; i++){
        
            switch(postExample.sequenceOfContent[i]){

                case 0:
                    contentAux.push(<Image src={queueImages.pop()} alt="Imagem relativo ao conteudo do post" width={1000} height={1000}/>)
                    break
                case 1:
                    contentAux.push(<p>{queueTexts.pop()}</p>)
                    break
                case 2:
                    const link = queueLinks.pop()
                    contentAux.push(<Link href={link}>{link}</Link>)
                    break
                default:
                    console.log("Isso nao deveria acontecer!")
                    break

            }
            
        }

        return contentAux
    }


    const render  = () =>  {
        return( 
            <section className={PostStyle.dinamicPost}>
                <header className={PostStyle.header}>
                    <Image className={PostStyle.banner} src={decodeURIComponent(post[1])} alt="Image do post" width={1000} height={1000}/>
                    <h2>{transformPathInName(post[0])}</h2>
                </header>
                <main className={PostStyle.content}>
                    {
                        whenLoaded()
                    }
                </main>

                <footer>
                    <p>{postExample.date}</p>
                    <div>

                    </div>
                </footer>
            </section>
        )
    }

    return (

        <section>
            {loaded ? render() : <> CARREGANDO...</>}
        </section>

    )

}