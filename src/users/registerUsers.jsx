// Register.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterUsers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implementa la lógica de registro aquí
        console.log('Datos de registro:', formData);
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ingresa tu nombre" name="name" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formEmail">
                <Form.Label>Dirección de correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Ingresa tu correo electrónico" name="email" onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingresa tu contraseña" name="password" onChange={handleChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Registrarse
            </Button>
        </Form>
    );
};

export default RegisterUsers;
