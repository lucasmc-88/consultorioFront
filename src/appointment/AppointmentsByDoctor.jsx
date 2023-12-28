import React, { useState, useEffect } from 'react';

const AppointmentsByDoctor = (/*{ doctorId }*/) => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const doctorId = '657aed2ff0e1efa02e7c208b'

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

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Citas del Doctor {doctorId}</h2>
            <ul>
                {appointments.map((appointment) => (
                    <li key={appointment._id}>
                        Date: {appointment.date}, Time: {appointment.time}, Status: {appointment.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentsByDoctor;
