import React, {ReactNode} from 'react'
import Head from 'next/head'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({children, title = 'Команда КВН БОРЦЫ'}: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <script src="https://ticketscloud.org/static/scripts/widget/tcwidget.js"></script>
        </Head>
        <main className={'container mx-auto'}>
            {children}
        </main>
        <footer>
        </footer>
    </div>
)

export default Layout
