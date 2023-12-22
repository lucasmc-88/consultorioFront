import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import DoctorDetail from './DoctorDetail';

const DoctorDropdown = () => {
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/doctor');
                const data = await response.json();
                setDoctors(data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener la lista de doctores:', error);
                setLoading(false);
            }
        };

        fetchDoctors();
    }, []);

    const handleDoctorChange = (event) => {
        setSelectedDoctor(event.target.value);
    };

    return (
        <Container className="mt-4">
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Form>
                        <Form.Group controlId="doctorDropdown">
                            <Form.Label>Selecciona un doctor:</Form.Label>
                            <Form.Control as="select" onChange={handleDoctorChange}>
                                <option value="">Seleccionar doctor</option>
                                {doctors.map((doctor) => (
                                    <option key={doctor._id} value={doctor._id}>
                                        {doctor.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Form>

                    {selectedDoctor && (
                        <DoctorDetail doctorId={selectedDoctor} />
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default DoctorDropdown;

