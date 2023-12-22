import React, { useState, useEffect } from 'react';
import { Container, Card, ListGroup } from 'react-bootstrap';

const DoctorDetail = ({ doctorId }) => {
    const [doctor, setDoctor] = useState(null);
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchDoctorDetail = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/doctor/detail/${doctorId}`);
                const data = await response.json();

                if (response.ok) {
                    setDoctor(data.doctor);
                    setAppointments(data.availableAppointments);
                } else {
                    console.error('Error al obtener los detalles del médico:', data.error);
                }
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        };

        fetchDoctorDetail();
    }, [doctorId]);

    return (
        <Container className="mt-4">
            {doctor ? (
                <Card>
                    <Card.Header>
                        <Card.Title>{doctor.name}</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <strong>Especialidad:</strong> {doctor.specialtyId.name}
                        </Card.Text>
                        <Card.Text>
                            <strong>Género:</strong> {doctor.gender === 'f' ? 'Femenino' : 'Masculino'}
                        </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item variant="info">
                                <strong>Turnos disponibles:</strong>
                            </ListGroup.Item>
                            {appointments.map((appointment) => (
                                <ListGroup.Item key={appointment._id}>{appointment.date}</ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card.Body>
                </Card>
            ) : (
                <p>Cargando detalles del médico...</p>
            )}
        </Container>
    );
};

export default DoctorDetail;
