import axios from "axios";
import { createContext, useEffect, useState } from "react";

const CategoriesContext = createContext()

const CategoriesProvider = ({children}) => {

    const [categories , setCategories] = useState([])

    useEffect(()=> {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
            const {data} = await axios(url)
            setCategories(data.drinks)
        }
        getCategories()
    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
            {children}
        </CategoriesContext.Provider>
    )
}

export {
    CategoriesProvider
}

export default CategoriesContext