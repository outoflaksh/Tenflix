import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.navItem}>
                <a href='https://github.com/outoflaksh/Tenflix' target='_blank'>View source</a>
            </div>
        </div>
    )
}

export default Navbar
