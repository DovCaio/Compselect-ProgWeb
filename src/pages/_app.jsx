import Layout  from "@/Components/Layout"
import "@/style/global.css"
import "@/style/normalize.css"
import appStyle from "@/pages/_app.module.css"

export default function MyApp({Component, pageProps}){

    return (
       
        <div className={appStyle.app}>
            <Layout>
                <Component {...pageProps}/>
            </Layout>    
        </div>
        
        

    )

}