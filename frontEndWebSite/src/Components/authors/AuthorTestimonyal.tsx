import Image from "next/image"
import { FaStar } from "react-icons/fa6"
import { FaRegStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import { PropsWithoutRef } from "react"
import AuthorTestimonyalStyle from "./AuthorTestimonyal.module.css"
export default function AuthorTestimonyal(props: PropsWithoutRef<{name: string, img: string, testimonyal: string, numberOfStars: number}>) {
    const stars = []
    let substractStars = props.numberOfStars;
    for (let i = 0; i < 5; i++) {
        if (substractStars > 0.5) {
            substractStars -= 1
            stars.push( <FaStar/>)
        }
        else if(substractStars <= 0.5 && substractStars > 0) {
            substractStars -= 0.5
            stars.push( <FaStarHalf/>)
        }
        else
            stars.push( <FaRegStar/>)
        }

    return (
        <section className={AuthorTestimonyalStyle.testimonyal}>
            <div>
                <Image src={props.img} width={1000} height={1000} alt="Imagem do autor"></Image>
                <h3>{props.name}</h3>
                <div className={AuthorTestimonyalStyle.stars}>

                    {
                        stars
                    }
                </div>
            </div>
            <p>
                {props.testimonyal}
            </p>
        </section>
    )
}