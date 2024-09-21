"use client"
import "./Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
export default function Footer (){
    const sizeItens:string = "1.3rem"

    const  backToTop = () => {

        window.scrollTo({top:0, behavior: "smooth"})

    }

    return (

        <footer>

            <div className="back-to-top" onClick={ () => backToTop()}>
                Voltar para o inicio
            </div>

            <div>

                <div>

                    <h3>About us</h3>
                    <p>
                    A Compselects é dedicada a publicar obras de qualidade que inspiram, educam e entretêm. Com uma paixão pela literatura e um compromisso com a excelência, buscamos trazer novas vozes e histórias ao mundo.
                    </p>

                </div>

                <div className="div-services">

                    <h3>Nossos serviços</h3>
                    <ul>

                        <li>
                            Publicação de Livros: Trabalhamos com autores para transformar manuscritos em livros publicados.
                        </li>

                        <li>
                            Edição e Revisão: Oferecemos serviços profissionais de edição e revisão para garantir a qualidade das obras.
                        </li>

                        <li>
                            Distribuição: Distribuímos nossos livros em várias plataformas e livrarias, tanto físicas quanto digitais
                        </li>

                    </ul>

                </div>

                <div>
                    <h3>Fique conectado</h3>

                    <ul className="links">

                        <li>

                            <a href="https://www.facebook.com" target="_blank" >
                                <FaFacebook size={sizeItens}/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank">
                                <FaSquareInstagram size={sizeItens}/>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.twitter.com" target="_blank">
                                <FaXTwitter size={sizeItens}/>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com" target="_blank">
                                <FaYoutube size={sizeItens}/>
                            </a>
                        </li>

                    </ul>


                </div>

            </div>

            <div className="rights" >

                <span>&copy;Caio Jhonatan Alves Pereira 2024. Todos os direiros reservados.</span>

            </div>

        </footer>

    )

}