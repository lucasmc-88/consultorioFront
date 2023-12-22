import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const DoctorList = () => {
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

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Lista de Doctores</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                        <th>Género</th>
                    </tr>
                </thead>
                <tbody>
                    {doctors.map((doctor, index) => (
                        <tr key={doctor._id}>
                            <td>{index + 1}</td>
                            <td>{doctor.name}</td>
                            <td>{doctor.specialtyId.name}</td>
                            <td>{doctor.gender}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DoctorList;
