import Employee from "./Employee"
import Woman1 from "../../assets/images/attractive-1869761_640.jpg"
import Woman2 from "../../assets/images/woman-5612838_640.jpg"
import Woman3 from "../../assets/images/woman-7115624_640.jpg"
import Men1 from "../../assets/images/portrait-3157821_640.jpg"
import Men2 from "../../assets/images/beard-1845166_640.jpg"
export default function Team(){

    return (

      <div className="aboutus">
        <h2>Nosso time</h2>
        
        <p>Na Compselect, somos apaixonados por histórias, ideias e pela arte de transformar
           palavras em experiências inesquecíveis. Nosso time é formado por profissionais dedicados
            que trabalham em conjunto para garantir que cada livro, artigo ou publicação reflita 
            qualidade, criatividade e inovação.</p>

        <div className="team">

            <Employee img={Woman1} name="Ana Costa" function_="Editora-chefe" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>
            <Employee img={Men1} name="Lucas Pereira" function_="Designer Gráfico" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>
            <Employee img={Woman2} name="Mariana Oliveira" function_="Coordenadora de Marketing" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>
            <Employee img={Men2} name="Roberto Souza" function_="Revisor de Texto" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>
            <Employee img={Woman3} name="Carla Nunes" function_="Gerente de Publicações" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>

        </div>
      </div>

    )

}