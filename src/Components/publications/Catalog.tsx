import SearchField from "./SearchField"
import CatalogStyle from "./Catalog.module.css"
export default function Catalog(){


    return ( 

        <div className={CatalogStyle.catalog}>

            <h1>Catalogo</h1>

            <SearchField></SearchField>

            <div>

                <h2>Algoritmos e Estruturas de Dados</h2>

            </div>

            <div>

                <h2>Programação</h2>

            </div>

            <div>

                <h2>Sistemas operacionais</h2>

            </div>

            <div>

                <h2>Redes de computadores</h2>

            
            </div>

            <div>

                <h2>Banco de dados</h2>

            </div>

            <div>

                <h2>Inteligência artificial</h2>

            </div>

            <div>


                <h2>Engenharia de software</h2>

            </div>

        </div>

    )

}   