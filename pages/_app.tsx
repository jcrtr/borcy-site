import React from 'react'
import {AppProps} from 'next/app'

import '../styles/index.css'
import Script from "next/script";
import Layout from "../hocs/Layout";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default MyApp;