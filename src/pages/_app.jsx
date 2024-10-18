import Layout  from "@/Components/Layout"
import "@/style/global.css"
import "@/style/normalize.css"

export default function MyApp({Component, pageProps}){

    return (
       
        <body>
            
        <Layout>
            <Component {...pageProps}/>
        </Layout>
        </body>
        

    )

}