import { Link, Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap"
import '../css/NavBar.css';
const NavigationBar = () => {
    return (
        <>
            <Navbar expand="lg" className="navigationBar" variant="dark">
                <Container>
                    <Navbar.Brand className="navTitle" as={Link} to="/home">PiggyPay</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav NavButton">
                    <Nav className="me-auto navItems">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/debit_accounts">Cuentas de Debito</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    );
}

export default NavigationBar