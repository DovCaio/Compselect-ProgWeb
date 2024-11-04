import Header from "./Header";
import Footer from "./Footer"; 

import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren){

    return (
        <>
            <Header/>


                {props.children}

            <Footer/>
        </>
        
    )

    


}