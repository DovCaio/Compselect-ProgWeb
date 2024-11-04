import { IoCloseSharp } from "react-icons/io5";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SendBook({changeDisplay, setChangeDisplay}: any){

    const closeSelf = () => {

        setChangeDisplay("none")

    }

    return (

        <div  style={{display: changeDisplay}} className="send-book">

            <button className="close-button" onClick={() => closeSelf()}>
                <IoCloseSharp className="x" size={"2.5rem"}/>
            </button>
            <h3>Envie Seu Manuscrito</h3>

            <div>

                <form action="">
                    <label htmlFor="authorName">Nome:</label>
                    <input type="text" id="authorName" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" />

                    <label htmlFor="telefone">Telefone:</label>
                    <input type="text" id="telefone"  />
                    
                    <label htmlFor="telefone">Endereço:</label>
                    <input type="text" id="telefone"  />


                    <div>

                        <button type="submit" className="submit-button">Enviar</button>
                        <button type="reset" className="reset-button">Cancelar</button>

                    </div>

                </form>

            </div>

        </div>

    )

}