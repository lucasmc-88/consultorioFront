import {Container, Nav, Navbar} from 'react-bootstrap';

function NavBarGeneral() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Emprender Mujer</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/doctorList">Doctores</Nav.Link>
                        <Nav.Link href="/DoctorDropdown">Detalles de doctores</Nav.Link>
                        <Nav.Link href="/specialtyTable">Especialidades</Nav.Link>
                        <Nav.Link href="/videos">Videos</Nav.Link>
                        <Nav.Link href="/courses">Cursos</Nav.Link>
                        <Nav.Link href="/questions">Preguntas</Nav.Link>
                        <Nav.Link href="/users">Usuarios</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBarGeneral;