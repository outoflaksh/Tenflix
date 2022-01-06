import styles from '../styles/Card.module.css'

const CardItem = ({ props, id }) => {
    return (
        <div className={styles.card}>
            <div className={styles.heading}>
                {id}. {props.title} <span>- {props.duration}</span>
            </div>
            <div className={styles.description}>
                {props.description}
            </div>
        </div>
    )
}

export default CardItem
