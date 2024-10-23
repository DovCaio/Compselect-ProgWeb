"use client"
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import footerStyle from "./Footer.module.css"
import Link from "next/link";
export default function Footer (){
    const sizeItens:string = "1.3rem"

    const  backToTop = () => {

        window.scrollTo({top:0, behavior: "smooth"})

    }

    return (

        <footer className={footerStyle.footer}>

            <div className={footerStyle.backToTop} onClick={ () => backToTop()}>
                Voltar para o inicio
            </div>

            <div>

                <div>

                    <h3>Contato</h3>
                    <p>
                        Email: contact@compselects.com
                    </p>
                    <p>
                        Telefone: 123 456 789
                    </p>

                </div>

                <div className={footerStyle.divServices}>

                    <h3>Links rápidos</h3>
                    <ul>

                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutus">
                                Sobre nós
                            </Link>
                        </li>
                        <li>
                            <Link href="/publications">
                                Publicações
                            </Link>
                        </li>
                        <li>
                            <Link href="/authors">
                                Autores
                            </Link>
                        </li>
                        <li>
                            <Link href="/submissions">
                                Submissões
                            </Link>
                        </li>
                        <li>
                            <Link href="/events">
                                Eventos
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                Blogs
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                Contato
                            </Link>
                        </li>



                    </ul>

                </div>

                <div>
                    <h3>Fique conectado</h3>

                    <ul className={footerStyle.socials}>

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

                <div>
                    <h3>Assine nosso newsletter.</h3>
                    <form>
                        <div>
                            <label htmlFor="emailnewsletter">Email:</label>
                            <input type="email" id="emailnewsletter"/>
                        </div>
                        <div>
                            <label htmlFor="checkboxnewsletter">Deseja receber emails?</label>
                            <input type="checkbox" id="checkboxnewsletter"/>
                        </div>

                        <input type="submit" value="Assinar" />
                    </form>

                </div>

            </div>

            <div className={footerStyle.copyright} >

                <span>&copy;Caio Jhonatan Alves Pereira 2024. Todos os direiros reservados.</span>

            </div>

        </footer>

    )

}