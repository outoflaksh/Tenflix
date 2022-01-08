import { useContext } from "react"
import { QueryContext } from "./QueryContext"

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
        <div>
            <form onSubmit={handleOnSubmit}>
                <input name="searchBox" type="search" />
                <button type="submit">Suggest titles</button>
            </form>
        </div>
    )
}

export default SearchBox
