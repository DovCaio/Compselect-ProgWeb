"use client"
import { Calendar, Badge } from "rsuite"
import 'rsuite/Calendar/styles/index.css';

const events = [
    {
    name: "Hackathon Literário",
    description: "Uma maratona onde participantes são desafiados a criar ideias para novos livros ou capítulos sobre temas emergentes em computação, como inteligência artificial, blockchain, ou cibersegurança.",
    target: "Estudantes e profissionais de computação interessados em contribuir com novas ideias para publicações.",
    activitys: [
      "Palestras de autores",
      "Oficinas de escrita técnica",
      "Sessões de feedback com editores"
    ],
    date: "2024-11-10",
    hour: "02:00 pm"

  },    
  {
    name: "Conferência de Autores e Educadores",
    description: "Um evento para reunir autores de livros didáticos de computação, professores, e educadores, com o intuito de trocar ideias sobre os desafios e as melhores práticas para o ensino de computação.",
    target: "Autores, professores, e profissionais da área de ensino de computação.",
    activitys: [
      "Painéis de discussão",
      "Workshops práticos",
      "Networking com autores renomados"
    ],
    date: "2024-12-05",
    hour: "08:30 am"

  },
  {
    name: "Semana de Lançamento de Livros Interativa",
    description: "Uma semana dedicada ao lançamento de novos títulos sobre temas atuais de computação, como programação funcional, desenvolvimento de software, e aprendizado de máquina.",
    target: "Estudantes, desenvolvedores, e profissionais interessados em novas publicações.",
    activitys: [
      "Sessões de autógrafos",
      "Entrevistas com autores",
      "Espaço interativo para leitores conhecerem os novos livros"
    ],
    date: "2025-01-15",
    hour: "10:00 am"
  },
  {
    name: "Encontro de Estudantes e Profissionais de Computação",
    description: "Um evento voltado para universitários e profissionais em início de carreira, focando na aplicação prática do conteúdo dos livros da editora no mercado de trabalho.",
    target: "Estudantes de ciência da computação, desenvolvedores e engenheiros de software em início de carreira.",
    activitys: [
      "Palestras sobre como aplicar o conteúdo dos livros em projetos reais",
      "Mentorias com autores",
      "Exposições sobre tecnologias emergentes"
    ],
    date: "2025-02-20",
    hour: "10:00 pm"
  }

]


export default function CalendarEvents(){

    const isEventDate = (date) => {
        return events.some((event) => {
            const  eventDate = new Date(event.date)
            console.log(eventDate.getDate(), date.getDate(), eventDate.getMonth(), date.getMonth(), eventDate.getFullYear(), date.getFullYear())
            return eventDate.getDate() === date.getDate() &&
            eventDate.getMonth() === date.getMonth() &&
            eventDate.getFullYear() === date.getFullYear()
        })
    
    }

    return (
        <section>
            <Calendar renderCell={date => {
                if(isEventDate(date)){
                    return <Badge content="." style={{color: "var(--color5)", fontSize: "2rem"}}/>
                }
                return null
            }} /> 
        </section>
    )
}