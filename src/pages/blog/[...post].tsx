import { useRouter  } from "next/router";
import { useEffect, useState } from "react";
export default function PostBlog() {
    
    const router = useRouter()
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if(router.isReady){
            setLoaded(true)
        }
    }, [router.isReady])
    const post = router.query.post

    const render  = () =>  {
        return <>
            <h2>{post[0]}</h2>
            </>
    }

    return (

        <section>
            {loaded ? render() : <> CARREGANDO...</>}
        </section>

    )

}