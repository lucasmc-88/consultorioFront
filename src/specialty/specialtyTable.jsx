import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const SpecialtyTable = () => {
    const [specialties, setSpecialties] = useState([]);

    useEffect(() => {
        const fetchSpecialties = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/specialty');
                if (!response.ok) {
                    throw new Error('Error al obtener especialidades');
                }

                const data = await response.json();
                setSpecialties(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSpecialties();
    }, []);

    return (
        <div style={{ textAlign: 'center', maxWidth: '80%', margin: '0 auto' }}>
            <h1>Lista de Especialidades</h1>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className="col-1">#</th>
                        <th className="col-11">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {specialties.map((specialty, index) => (
                        <tr key={index + 1}>
                            <td>{index + 1}</td>
                            <td>{specialty.name}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default SpecialtyTable;
