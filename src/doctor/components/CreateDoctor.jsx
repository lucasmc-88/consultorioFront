import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreateDoctorForm = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [specialtyId, setSpecialtyId] = useState('');
    const [gender, setGender] = useState('');
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {

        const fetchSpecialties = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/specialty');
                if (response.ok) {
                    const specialtiesData = await response.json();
                    setSpecialties(specialtiesData);
                } else {
                    console.error('Error al obtener las especialidades:', response.status);
                }
            } catch (error) {
                console.error('Error en la solicitud:', error);
            }
        };

        fetchSpecialties();
    }, []);

    const handleCreateDoctor = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/doctor/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    name,
                    specialtyId,
                    gender,
                }),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Médico creado exitosamente:', result.createddoctors);

            } else {
                console.error('Error al crear el médico:', response.status);

            }
        } catch (error) {
            console.error('Error en la solicitud:', error);

        }
        navigate('/doctorList');
    };
    return (
        <div style={{ background: '#343a40', color: 'white', maxWidth: '600px', margin: 'auto', marginTop: '50px', padding: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>Crear Nuevo Médico</h2>
            <Form>
                <Form.Group controlId="formName">
                    <Form.Label>Nombre:</Form.Label>
                    <Form.Control
                        size="lg"
                        type="text"
                        placeholder="Ingresa el nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formSpecialty">
                    <Form.Label>Especialidad:</Form.Label>
                    <Form.Control
                        size="lg"
                        as="select"
                        value={specialtyId}
                        onChange={(e) => setSpecialtyId(e.target.value)}
                    >
                        <option value="" disabled>
                            Selecciona una especialidad
                        </option>
                        {specialties.map((specialty) => (
                            <option key={specialty._id} value={specialty._id}>
                                {specialty.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formGender">
                    <Form.Label>Género:</Form.Label>
                    <Form.Control
                        size="lg"
                        as="select"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="" disabled>
                            Selecciona el género
                        </option>
                        <option value="f">Femenino</option>
                        <option value="m">Masculino</option>
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" size="lg" style={{ marginTop: '10px' }} onClick={handleCreateDoctor}>
                    Crear Médico
                </Button>
            </Form>
        </div>

    );
};
export default CreateDoctorForm;
