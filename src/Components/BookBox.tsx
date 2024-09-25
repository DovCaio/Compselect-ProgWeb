import Image from "next/image";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BookBox({img, name, description, author, agePublication, type}: any){


    return (

        <div className="bookbox">
            <Image src={img} alt="Image de um livro" width="1000" height="1000"/>
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
                <span>{author}</span>
                <span>{agePublication}</span>
                <span>{type}</span>
            </div>
        </div>

    )

}