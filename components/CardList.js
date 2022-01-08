import CardItem from "./CardItem"
import { QueryContext } from "./QueryContext"
import styles from '../styles/Card.module.css'
import { useState, useEffect, useContext } from "react"

const CardList = () => {
    const [titles, setTitles] = useState([]);
    const [query, setQuery] = useContext(QueryContext)
    const [titleFound, setTitleFound] = useState(true)

    const getTitles = async (query) => {
        const responsePromise = await fetch(`http://localhost:5000/recommend?title=${query}`)
        
        if (responsePromise.status !== 200) {
            setTitles([])
            setTitleFound(false)
            return
        }
        setTitleFound(true)
        const dataPromise = await responsePromise.json()
        const data = await dataPromise.data
        setTitles(data)
    }
    
    useEffect(() => {
        getTitles(query)
    }, [query])

    return titleFound ? (
        <div className={styles.container}>
            {titles.map((title, index) => <CardItem title = {title} id={index+1} key={index} />)}
        </div>
    ) : (
        <div className={styles.container}>
            <p className={styles.notFound}>
                Sorry! Title not found!
            </p>
        </div>)
}



export default CardList
