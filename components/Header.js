import React from 'react'
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>TENFLIX</h1>
            <h3 className={styles.subheading}>
                Get top 10 similar suggestions based on the plot, genre, cast, and directors of your favorite Netflix title.
            </h3>
        </header>
    )
}

export default Header
