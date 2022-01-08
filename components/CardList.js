import CardItem from "./CardItem"
import { QueryContext } from "./QueryContext"
import styles from '../styles/Card.module.css'
import { useState, useEffect, useContext } from "react"

const CardList = () => {
    const [titles, setTitles] = useState([]);
    const [query, setQuery] = useContext(QueryContext)

    const getTitles = async (query) => {
        const responsePromise = await fetch(`http://localhost:5000/recommend?title=${query}`)
        const dataPromise = await responsePromise.json()
        const data = await dataPromise.data
        setTitles(data)
    }
    
    useEffect(() => {
        getTitles(query)
    }, [query])

    return (
        <div className={styles.container}>
            {titles.map((title, index) => <CardItem title = {title} id={index+1} key={index} />)}
        </div>
    )
}



export default CardList
