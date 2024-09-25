
import SearchFieldStyle from "./SearchField.module.css"
export default function SearchField(){


    return (

        <div className={SearchFieldStyle.searchfield}>

            <div>
                <label htmlFor="search">Pesquisar: </label>
                <input type="text" name="search" id="search" />
                <button type="button">Procurar</button>
            </div>

        </div>

    )

}