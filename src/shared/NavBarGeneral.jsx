import {Container, Nav, Navbar} from 'react-bootstrap';

function NavBarGeneral() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Consultorio</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/doctorList">Doctores</Nav.Link>
                        <Nav.Link href="/DoctorDropdown">Detalles de doctores</Nav.Link>
                        <Nav.Link href="/specialtyTable">Especialidades</Nav.Link>
                        <Nav.Link href="/CreateDoctor">Crear Doctor</Nav.Link>
                        <Nav.Link href="/AppointmentsByDoctor">Busqueda citas</Nav.Link>
                        {/* <Nav.Link href="/UpdateDoctor">Actualizar Doctor</Nav.Link> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarGeneral;