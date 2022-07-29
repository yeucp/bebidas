import {Modal, Image} from 'react-bootstrap'
import useDrinks from '../hooks/useDrinks';

const ModalDrink = () => {
    const { loading, recipe, modal, handleModalClick } = useDrinks()

    const showIngredients = () => {
        let ingredients = []

        for(let i = 1; i < 16; i++){
            if(recipe[`strIngredient${i}`]){
                ingredients.push(
                    <li key={`li-${i}`}>{recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}</li>
                )
            }
        }

        return ingredients
    }
    return (
        !loading && (
            <Modal show={modal} onHide={handleModalClick}>
            <Image 
                src={recipe.strDrinkThumb}
                alt={`Imagen receta ${recipe.strDrink}`}
            />
            <Modal.Header>
                <Modal.Title>
                    {recipe.strDrink}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='P-3'>
                    <h2>Intruciones</h2>
                    {recipe.strInstructions}
                    <h2>Ingredientes y cantidad</h2>
                    <ul>{showIngredients()}</ul>
                </div>
            </Modal.Body>
        </Modal>
        )
    );
};

export default ModalDrink;