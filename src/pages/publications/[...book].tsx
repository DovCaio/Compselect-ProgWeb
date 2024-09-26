import { useRouter } from "next/router";
import React from "react";

export default function Page(){

    const router = useRouter()
    console.log(router.query)
    return (


        <p>Post: {router.query.book}</p>

    )

}