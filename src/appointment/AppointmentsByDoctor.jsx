import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const AppointmentsByDoctor = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const doctorId = '657aed2ff0e1efa02e7c208b';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/appointment/doctorId/${doctorId}`);
                const data = await response.json();
                console.log(data);
                setAppointments(data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching data');
                setLoading(false);
            }
        };

        fetchData();
    }, [doctorId]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // Aquí puedes realizar acciones con los datos del formulario, como enviarlos al servidor
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <Container>
            <Row className="mt-4">
                <Col>
                    <h2>Citas del Doctor {doctorId}</h2>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <Form onSubmit={handleFormSubmit}>
                    <Form.Group controlId="formDate">
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" placeholder="Seleccione la fecha" />
                        </Form.Group>
                        <Form.Group controlId="formTime">
                            <Form.Label>Hora</Form.Label>
                            <Form.Control type="time" placeholder="Seleccione la hora" />
                        </Form.Group>
                        <Button variant="dark" type="submit">
                            Agendar Cita
                        </Button>
                    </Form>
                </Col>
            </Row>
            <Row className="mt-4 bg-dark text-white p-4">
                <Col>
                    <ul>
                        {appointments.map((appointment) => (
                            <li key={appointment._id}>
                                Date: {appointment.date}, Time: {appointment.time}, Status: {appointment.status}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default AppointmentsByDoctor;
