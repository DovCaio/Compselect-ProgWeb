export default function SubmissionForm(){
    return (
        <section className="submission-form" id="submission-form">
                <h2>Formulário de Submissão</h2>
                <form action="submit">
                    <div>
                        <div>
                            <label htmlFor="name">Nome:</label>
                            <input type="text" id="name" />

                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" />

                        </div>

                    </div>

                    <div>
                        <div>
                            <label htmlFor="contry">País:</label>
                            <input type="text" id="contry" />
                        </div>

                        <div>
                            <label htmlFor="city">Cidade:</label>
                            <input type="text" id="city" />
                        </div>
                    </div>

                    <div>
                        <div>
                            <label htmlFor="neighborhood">Bairro:</label>
                            <input type="text" id="neighborhood" />
                        </div>
                        <div>
                            <label htmlFor="street">Rua:</label>
                            <input type="text" id="street" />
                        </div>
                    </div>

                    <div className="file-div">
                        <p>Arraste o arquivo aqui ou </p>
                        <p> <span> Selecione</span> um arquivo</p>
                    </div>
                </form>

            </section>
    )
}