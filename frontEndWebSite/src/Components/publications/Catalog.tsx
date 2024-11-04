"use client"

import SearchField from "./SearchField"
import CatalogStyle from "./Catalog.module.css"
import BooksCatalog from "./BooksCatalog.jsx"
import { useState } from "react"




  

export default function Catalog(){
    const [books, setBooks] = useState({})
    return ( 

        <div className={CatalogStyle.catalog}>

            <h1>Catálogo</h1>

            <SearchField setBooks={setBooks}></SearchField>

            <BooksCatalog cBooks={books}/>

            
        </div>

        
    )

}   