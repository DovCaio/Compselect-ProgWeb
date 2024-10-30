import { FaStar } from "react-icons/fa"; //Estrela completa
import { FaStarHalf } from "react-icons/fa"; //Meia estrela
import { FaRegStar } from "react-icons/fa"; //Estrela vazia
import Testimonyal from "./Testimonyal";

const testimonyals = [
    {
        text : "A experiência com a Editora Compselects foi incrível do começo ao fim. Eles transformaram meu manuscrito em um livro que superou minhas expectativas. O cuidado com os detalhes, o suporte personalizado e o profissionalismo da equipe tornaram todo o processo tranquilo e gratificante. Com certeza publicarei meus próximos trabalhos com eles!",
        author : "Maria Santos",
        stars : 5,
        job : "Escritora à 8 anos"
    },
    {
        text : "Trabalhar com a Editora Compselects foi um sonho realizado. Além de uma edição impecável, eles me ajudaram com estratégias de marketing e divulgação, o que fez toda a diferença para o sucesso do meu livro. A equipe é atenciosa, profissional e sempre disposta a escutar minhas ideias. Recomendo 100%!",
        author : "Rafael Martins",
        stars : 4.5,
        job : "Escritor à 15 anos"
    },
    {
        text: "Depois de muito pesquisar, encontrei na Editora Compselects um verdadeiro parceiro literário. O suporte durante a revisão, o design da capa e a diagramação foram incríveis! Eles entenderam minha visão e a transformaram em algo muito melhor do que eu imaginava. Meu livro não seria o mesmo sem o talento e dedicação dessa equipe fantástica!",
        author: "Carla Mendes",
        stars: 5,
        job: "Escritora à 20 anos"
    }
]

export default function Testimonyals(){

    return (

        <div className="testimony">

            <h2>
                Depoimentos de nossos clientes
            </h2>

            <div>

                {
                    testimonyals.map((testimonyal, index) => {
                        return <Testimonyal key={index} {...testimonyal}/>
                    })
                }
                 
                

            </div>

        </div>

    )

}