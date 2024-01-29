import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './NavBar.css';

function NavBar() {
    return (
        <NavBar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Laxman Mohanarajan</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Container>
        </NavBar>
        // <p>fuck you</p>
    )
}

export default NavBar