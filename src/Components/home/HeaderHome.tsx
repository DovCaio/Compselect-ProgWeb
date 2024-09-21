"use client"

import SendBook from "./SendBook"

import { useState } from "react"



export default function HeaderHome(){

    const [changeDisplay, setchangeDisplay] = useState("none")

    const showSendBook = () => {

        setchangeDisplay("flex")

    }

    return (

        <header className="header-home">
                
                <div className="apresentation-home">
                    <h2>Transformando palavras em mundos: descubra o poder da leitura com a nossa editora.</h2>

                    <span onClick={() => showSendBook()}>
                        Envie Seu Manuscrito.
                    </span>

                    <SendBook changeDisplay={changeDisplay} setChangeDisplay={setchangeDisplay}/>
                </div>      
                
            </header>

    )

}