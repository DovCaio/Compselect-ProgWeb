import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import transformPathInName from "@/utils/transformPathInName";
import ImageGenericEvent from "@/assets/images/ImagemGenericaEventoComputacao.webp"
import Image from "next/image";
import DinamicEventStyle from "./dinamic_events.module.css"

const evento =  {
    name: "Hackathon Literário",
    description: "Uma maratona onde participantes são desafiados a criar ideias para novos livros ou capítulos sobre temas emergentes em computação, como inteligência artificial, blockchain, ou cibersegurança.",
    target: "Estudantes e profissionais de computação interessados em contribuir com novas ideias para publicações.",
    activitys: [
      "Palestras de autores",
      "Oficinas de escrita técnica",
      "Sessões de feedback com editores"
    ],
    image: ImageGenericEvent,
    date: "2024-10-10",
    hour: "02:00pm",
    locale: "Brasil, São Paulo, SP, 04567-890"

  }
export default function Page(){
    const router = useRouter()
    const [loaded, setLoaded] = React.useState(false)
    useEffect(() => {
        if(router.isReady){
            setLoaded(true)
        }
    }, [router.isReady])
    const event = router.query.event
    
    const render  = () =>  {
        return <section className={DinamicEventStyle.event}>
                <Image src={evento.image} alt="Imagem do evento" />
                <h2>{transformPathInName(event[0])}</h2>
                <div className={DinamicEventStyle.infos}>
                    <p className={DinamicEventStyle.dateHourLocale}>
                        <span className={DinamicEventStyle.date}>{evento.date.split("-").reverse().join("/")} </span>
                        <span className={DinamicEventStyle.hour}>{evento.hour} </span>
                        <span className={DinamicEventStyle.locale}>{evento.locale} </span>
                    </p>
                    <p>{evento.description}</p>
                    <p>Alvo do evento: {evento.target}</p>
                    <p>Atividades: {evento.activitys.map((item, index) => <span key={index}>{item}</span>)}</p>
                </div>
            </section>
    }


    return (
        loaded ? render() : <> CARREGANDO...</>
    )
}