import { useContext } from "react"
import { QueryContext } from "./QueryContext"
import styles from '../styles/Search.module.css'

const SearchBox = () => {
    const [query, setQuery] = useContext(QueryContext)

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const { currentTarget = {} } = e
        const fields = Array.from(currentTarget?.elements)
        const fieldQuery = fields.find(field => field.name === 'searchBox')

        const value = fieldQuery.value || ''
        setQuery(value)
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleOnSubmit} className={styles.searchForm}>
                <input name="searchBox" type="search" defaultValue="You" />
                <button type="submit">Suggest titles</button>
            </form>
        </div>
    )
}

export default SearchBox
