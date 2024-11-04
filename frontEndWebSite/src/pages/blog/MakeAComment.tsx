import PostStyle from "./dinamic_post.module.css"
import { FaInfoCircle } from "react-icons/fa";
import {Popover, Whisper, Button} from "rsuite"
import "rsuite/Popover/styles/index.css"

export default function MakeAComment() {

    const infosAboutComment = () => {

        return (

            <Whisper followCursor speaker={<Popover>Depois de enviado o comentário é necessário a confirmação de email, depois seu comentário sera avaliado e só assim postado.</Popover>}>
                <Button>
                    <FaInfoCircle/>
                </Button>
            </Whisper>
        )

    }
    return (
        <form className={PostStyle.form}>
            <h3>
                Deixe seu Cometários <span>{infosAboutComment()}</span>
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