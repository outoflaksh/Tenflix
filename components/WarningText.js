import styles from '../styles/Card.module.css'

const WarningText = ({message}) => {
    return (
        <div className={styles.container}>
            <p className={styles.notFound}>
                {message}
            </p>
        </div>
    )
}

export default WarningText
