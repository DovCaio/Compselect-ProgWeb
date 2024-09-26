import BookBox from "../BookBox"
import Img from "@/assets/images/simplebook.webp"
import BookCatalogStyle from "./BookCatalog.module.css"



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BooksCatalog({cBooks}){


    return (

        <div className={BookCatalogStyle.bookCatalog}>

            {
                Object.entries(cBooks).map(category => {
                    return <div key={category[0]}>
                        <div>
                            <h2>{category[0]}</h2>

                        </div>
                        <div>

                            {category[1].map((book) => <BookBox img={Img} key={book.name} {...book}/>)}
                        </div>
                    </div>

                })
            }

            
        </div>

    )

}