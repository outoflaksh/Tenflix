import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
            name="description"
            content="Get top 10 Netflix recommendations based on your favorite Netflix titles!"
            />
            </Head>
            <div className={styles.container}>
                <main className={styles.container}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
