import React from "react";
import Layout from "@/Components/Layout";
import "@/style/global.css"
import "@/style/normalize.css"
import "./globals.css";

export default function layout({children}: {children: React.ReactNode}){
  return (
    <html lang="en">
      <body>

        <Layout>
          {children}

        </Layout>
      </body>
    </html>
  );
}
