import styles from '../styles/Card.module.css'

const CardItem = ({ title, id }) => {
    return (
        <div className={styles.card}>
            <div className={styles.heading}>
                {id}. {title.title} <span>- {title.duration}</span>
            </div>
            <div className={styles.description}>
                {title.description}
            </div>
        </div>
    )
}

export default CardItem
