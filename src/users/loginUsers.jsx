// LoginUser.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from '../authContext/AuthContext';

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData); // Llama a la función de inicio de sesión del contexto de autenticación
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formEmail">
        <Form.Label>Dirección de correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="Ingresa tu correo electrónico" name="email" onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control type="password" placeholder="Ingresa tu contraseña" name="password" onChange={handleChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Iniciar sesión
      </Button>
    </Form>
  );
};

export default LoginUser;
