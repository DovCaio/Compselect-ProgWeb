import Layout  from "@/Components/Layout"
import "@/style/global.css"
import "@/style/normalize.css"
import appStyle from "@/pages/_app.module.css"
import { useState, useEffect } from "react";
import Loading from "@/Components/Loading";
import { Router } from "next/router";

export default function MyApp({Component, pageProps}){


    const [loading, setloading] = useState(false);

    useEffect(() => {
        
        const handleStart = () => {
            setloading(true)
        }
        const handleComplete = () => {
            setloading(false)
        }

        Router.events.on('routeChangeStart', handleStart)
        Router.events.on('routeChangeComplete', handleComplete)
        Router.events.on("routeChangeError", handleComplete)

        return () => {
            Router.events.off('routeChangeStart', handleStart)
            Router.events.off('routeChangeComplete', handleComplete)
            Router.events.off("routeChangeError", handleComplete)
        }


    }, [])

    const rederPage = () => {
        return (
            <div className={appStyle.app}>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>    
            </div>)
    }


    return (
        <>
            {loading ? <Loading/> : rederPage()}
        </>
        
    )

}