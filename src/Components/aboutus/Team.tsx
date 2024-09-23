import Employee from "./Employee"
import Woman from "../../assets/images/attractive-1869761_640.jpg"
export default function Team(){

    return (

      <div className="aboutus">
        <h2>Nosso time</h2>
        
        <p>Na Compselect, somos apaixonados por histórias, ideias e pela arte de transformar
           palavras em experiências inesquecíveis. Nosso time é formado por profissionais dedicados
            que trabalham em conjunto para garantir que cada livro, artigo ou publicação reflita 
            qualidade, criatividade e inovação.</p>

        <div>

            <Employee img={Woman} name="Rosangela" function_="daedea" linkedin="https://www.linkedin.com" instagram="https://www.instagram.com"/>

        </div>
      </div>

    )

}