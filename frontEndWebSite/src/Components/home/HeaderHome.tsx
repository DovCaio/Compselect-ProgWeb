"use client"
import {useRouter} from "next/navigation"
import React from "react"

export default function HeaderHome(){

    const router = useRouter()

    const goToSubmission = () => {
        router.push("/submissions#submission-form")

    }

    return (

        <header className="header-home">
                
                <div className="apresentation-home">
                    <h2>Transformando palavras em mundos: descubra o poder da leitura com a nossa editora.</h2>

                    <span onClick={() => goToSubmission()}>
                        Envie Seu Manuscrito.
                    </span>

                </div>      
                
            </header>

    )

}