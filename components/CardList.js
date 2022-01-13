import { useState, useEffect, useContext } from "react"
import CardItem from "./CardItem"
import { QueryContext } from "./QueryContext"
import styles from '../styles/Card.module.css'
import WarningText from "./WarningText"

const errorMessages = require('./WarningMessages')

const CardList = () => {
    const [titles, setTitles] = useState([]);
    const [query, setQuery] = useContext(QueryContext)
    const [titleFound, setTitleFound] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')

    const getTitles = async (query) => {
        try {
            const responsePromise = await fetch(`http://localhost:5000/recommend?title=${query}`)
            
            if (responsePromise.status === 404) {
                setTitles([])
                setTitleFound(false)
                setErrorMessage(errorMessages.TITLE_NOT_FOUND)
                return
            }
            setTitleFound(true)
            const dataPromise = await responsePromise.json()
            const data = await dataPromise.data
            setTitles(data)
        }
        catch {
            setTitleFound(false)
            setErrorMessage(errorMessages.CONNECTION_ERROR)
        }
    }
    
    useEffect(() => {
        getTitles(query)
    }, [query, errorMessage])

    return titleFound ? (
        <div className={styles.container}>
            {titles.map((title, index) => <CardItem title = {title} id={index+1} key={index} />)}
        </div>
    ) : (
        <WarningText message={errorMessage} />
        )
}



export default CardList
