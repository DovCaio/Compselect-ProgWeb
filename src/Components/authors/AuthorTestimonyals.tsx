import Avatar1 from "@/assets/images/Avatar1.webp"
import Avatar2 from "@/assets/images/Avatar2.webp"
import AuthorTestimonyal from "./AuthorTestimonyal";
const testimonyals = [
    {
      author: "Emanuela Martins",
      img: Avatar2,
      stars: 5,
      testimonyal: "Publicar com essa editora foi uma experiência excelente. O suporte técnico e editorial que recebi durante todo o processo garantiu que meu livro estivesse não apenas correto tecnicamente, mas também acessível para o público. A equipe me ajudou a transformar ideias complexas em algo claro e direto."
    },
    {
      author: "Carla Mendes",
      img: Avatar2,
      stars: 4.5,
      testimonyal: "A editora cuidou de todos os detalhes, desde a revisão técnica até a diagramação. Além disso, o alcance global das versões impressa e digital do meu livro superou minhas expectativas. Recebi feedback positivo de leitores de várias partes do mundo, e a equipe sempre esteve ao meu lado."
    },
    {
      author: "Pedro Fernandes",
      img: Avatar1,
      stars: 5,
      testimonyal: "Fiquei impressionado com o marketing que a editora ofereceu. Eles fizeram com que meu livro ganhasse grande visibilidade nas principais plataformas, e o retorno financeiro foi muito bom. A parceria com a editora me deu tranquilidade em todo o processo de publicação."
    }
  ];
  

export default function AuthorTestimonyals()  {


    return (

        <section className="author-testimonyals">

                <h2>Depoimentos</h2>

                <section className="testimonyals">

                    {testimonyals.map((testimonyal, index) => {
                        return <AuthorTestimonyal key={index} name={testimonyal.author} img={testimonyal.img.src} testimonyal={testimonyal.testimonyal} numberOfStars={testimonyal.stars}/>
                    })}

                </section>
        </section>
    )
}
