import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import transformPathInName from "@/utils/transformPathInName";
export default function Page(){
    const router = useRouter()
    const [loaded, setLoaded] = React.useState(false)
    useEffect(() => {
        if(router.isReady){
            setLoaded(true)
        }
    }, [router.isReady])
    const event = router.query.event
    
    const render  = () =>  {
        return <>
            <h2>{transformPathInName(event[0])}</h2>
            </>
    }
    return (
        loaded ? render() : <> CARREGANDO...</>
    )
}