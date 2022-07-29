import { useState } from "react";
import {Button, Form, Row, Col, Alert} from "react-bootstrap/";
import useCategories from "../hooks/useCategories";
import useDrinks from "../hooks/useDrinks";


const RecipeForm = () => {
    const [search, setSearch] = useState({
        name: '',
        category: ''
    })

    const [alert, setAlert] = useState('')

    const {name, category} = search

    const {categories} = useCategories()
    const {getDrinks} = useDrinks()

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(search).includes('')){
            setAlert('Todos los campos son obligatorios')
            return
        }
        setAlert('')
        getDrinks(search)
    }
    
    return (
        <Form 
            onSubmit={handleSubmit}
        >
            {alert && <Alert variant="danger" className="text-center">{alert}</Alert>}
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="name">Nombre bebida</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: Tequila, Vodka, etc."
                            id="name"
                            name="name"
                            value={name}
                            onChange={e => setSearch({
                                ...search,
                                [e.target.name]: e.target.value
                            })}
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group className="mb-3">
                        <Form.Label htmlFor="category">Categoría</Form.Label>
                        <Form.Select
                            id="category"
                            name="category"
                            value={category}
                            onChange={e => setSearch({
                                ...search,
                                [e.target.name]: e.target.value
                            })}
                        >
                            <option>Selecciona una categoría</option>
                            {categories.map(category => (
                                <option
                                    key={category.strCategory}
                                    value={category.strCategory}
                                >
                                    {category.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                        type="submit"
                        variant="danger"
                        className="text-uppercase w-100"
                    >
                        Buscar bebidas
                    </Button>
                </Col>
            </Row>
        </Form>
    );
};
export default RecipeForm;