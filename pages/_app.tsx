import React from 'react'
import {AppProps} from 'next/app'

import '../styles/index.css'
import Script from "next/script";
import Layout from "../hocs/Layout";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Script strategy="lazyOnload" src='https://ticketscloud.org/static/scripts/widget/tcwidget.js'/>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp;