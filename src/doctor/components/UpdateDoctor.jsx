import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const UpdateDoctor = () => {
    const { doctorId } = useParams();
    const location = useLocation();
    const { doctorData } = location.state || {};

    const [name, setName] = useState('');
    const [specialtyId, setSpecialtyId] = useState('');
    const [gender, setGender] = useState('');
    const [specialties, setSpecialties] = useState([]); 

    useEffect(() => {
       
        const fetchSpecialties = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/specialty');
                const data = await response.json();
                setSpecialties(data);
            } catch (error) {
                console.error('Error al obtener las especialidades:', error);
            }
        };

        fetchSpecialties();
    }, []); 

    useEffect(() => {
       
        if (doctorData) {
            setName(doctorData.name);
            setSpecialtyId(doctorData.specialtyId);
            setGender(doctorData.gender);
        }
    }, [doctorData]);

    const navigate = useNavigate();

    const handleUpdateDoctor = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/doctor/update/${doctorId}`, {
                method: 'PATCH',
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
                console.log('Médico actualizado exitosamente');
            } else {
                console.error('Error al actualizar el médico:', response.status);
            }
        } catch (error) {
            console.error('Error en la solicitud:', error);
        }
        navigate('/doctorList');
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', marginTop: '50px' }}>
            <h2 style={{ textAlign: 'center' }}>Actualizar Médico</h2>
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

                <Button variant="primary" size="lg" onClick={handleUpdateDoctor}>
                    Actualizar Médico
                </Button>
            </Form>
        </div>
    );
};

export default UpdateDoctor;