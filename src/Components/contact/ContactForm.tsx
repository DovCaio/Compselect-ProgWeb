
export default function ContactForm(){

    return (
        <section className="contact-form">

            <h2>Formulário de Contato</h2>
            <form action="">
                <label htmlFor="name">Nome:</label>
                <input type="text" placeholder="Nome" id="name"/>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Email" id="email"/>
                <label htmlFor="telefone">Telefone:</label>
                <input type="text" placeholder="Telefone" id="telefone"/>
                <label htmlFor="assunto">Assunto</label>
                <input type="text" placeholder="Assunto" id="assunto" />
                <label htmlFor="message">Mensagem</label>
                <textarea placeholder="Mensagem" id="message"></textarea>
            </form>
        </section>
    )
}