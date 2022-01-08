import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content="Get top 10 Netflix recommendations based on your favorite Netflix titles!"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;1,100;1,300&family=Ubuntu+Mono:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <div className={styles.container}>
                <main className={styles.container}>
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
