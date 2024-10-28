import React from "react";
import Layout from "@/Components/Layout";
import "@/style/global.css"
import "@/style/normalize.css"
import "./globals.css";
import { Suspense } from "react";
import Loading from "@/Components/Loading";

export default function layout({children}: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body>

        <Layout>

          <Suspense fallback={<Loading/>}>

            {children}
          </Suspense>

        </Layout>
      </body>
    </html>
  );
}
