import { useState, createContext } from "react"

export const QueryContext = createContext()

export const QueryProvider = (props) => {
    const [query, setQuery] = useState('You')

    return (
        <QueryContext.Provider value={[query, setQuery]}>
            {props.children}
        </QueryContext.Provider>
    )
}
