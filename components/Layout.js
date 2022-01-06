import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Header from './Header'

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
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
            </Head>
            <Header />
            <div className={styles.container}>
                <main className={styles.container}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
