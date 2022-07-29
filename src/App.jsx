import { Container } from "react-bootstrap"
import DrinksList from "./components/DrinksList"
import ModalDrink from "./components/ModalDrink"
import RecipeForm from "./components/RecipeForm"
import { CategoriesProvider } from "./context/CategoriesProvider"
import { DrinksProvider } from "./context/DrinksProvider"

function App() {

  return (
    <DrinksProvider>
    <CategoriesProvider>
      <header className="py-5">
        <h1>Buscador de bebidas</h1>
      </header>
      <Container className="mt-5">
        <RecipeForm/>
        <DrinksList/>
        <ModalDrink/>
      </Container>
    </CategoriesProvider>
    </DrinksProvider>
  )
}

export default App
