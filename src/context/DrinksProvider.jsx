import axios from "axios";
import { createContext, useEffect, useState } from "react";

const DrinksContext = createContext()

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkId, setDrinkId] = useState(null)
    const [recipe, setRecipe] = useState({})
    const [loading, setLoading] = useState(false)

    useEffect(()=> {
        const getRecipe = async () => {
            if(!drinkId) return
            setLoading(true)
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`

                const {data} = await axios(url)
                setRecipe(data.drinks[0])
            } catch (err) {
                console.error(err)
            }finally{
                setLoading(false)
            }
        }

        getRecipe()
    }, [drinkId])

    const getDrinks = async param => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${param.name}&c=${param.category}`
            const { data } = await axios(url)
            setDrinks(data.drinks)
        } catch (err) {
            console.error(err)
        }
    }

    const handleDrinkIdClick = id => {
        setDrinkId(id)
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    return (
        <DrinksContext.Provider
            value={{
                loading,
                drinks,
                modal,
                recipe,
                getDrinks,
                handleModalClick,
                handleDrinkIdClick
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export {
    DrinksProvider
}

export default DrinksContext