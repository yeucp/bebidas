import {Col, Card, Button} from "react-bootstrap/";
import useDrinks from "../hooks/useDrinks";

const Drink = ({drink}) => {
    const { handleModalClick, handleDrinkIdClick } = useDrinks()

    return (
        <Col md={3} lg={4}>
            <Card className="mb-4">
                <Card.Img
                    variant="top"
                    src={drink.strDrinkThumb}
                    alt={`Imagen de ${drink.strDrink}`}
                />
                <Card.Body>
                    <Card.Title>
                        {drink.strDrink}
                    </Card.Title>
                    <Button
                        className="w-100 text-uppercase mt-2"
                        variant="warning"
                        onClick={() => {
                            handleModalClick()
                            handleDrinkIdClick(drink.idDrink)
                        }}
                    >Ver receta</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Drink;