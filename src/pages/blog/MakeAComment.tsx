import PostStyle from "./dinamic_post.module.css"

export default function MakeAComment() {

    return (
        <form className={PostStyle.form}>
            <h3>
                Deixe seu Cometários
            </h3>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" />
            <label htmlFor="message">Comentário:</label>
            <textarea id="message"></textarea>
            <input type="submit" value="Enviar" />
        </form>
    )
}