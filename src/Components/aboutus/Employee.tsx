import Image from "next/image"
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Employee ({img, name, function_, linkedin, instagram}: any){

    return (

        <div className="employee">

            <div>
                <Image src={img} width={1000} height={1000} alt="Imagen do funcionario"></Image>
            </div>

            <div>

                <p>{name}</p>
                <p className="function-employee">{function_}</p>
                <div className="socials-media-employee">
                    <Link href={linkedin} target="_blank" className="linkedin">
                        <FaLinkedin size="20px"/>

                    </Link>
                    <Link href={instagram} target="_blank" className="instagram">
                        <FaInstagram size="20px"/>
                    </Link>
                </div>
            </div>


        </div>

    )

}