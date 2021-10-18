import React from "react";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    onLoggedOut = () => {
        localStorage.clear();
        window.open('/', '_self');
    }

    render() {
        const { user } = this.props;
        const profile = `/users/${user}`;

        if (!user) return null;

        return (
            <Navbar collapseOnSelect expand="lg" bg="light" className="navbar-static-top">
                <Navbar.Brand href="/">

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} to={'/'}>Movies</Nav.Link>
                        <Nav.Link as={Link} to={profile}>My Account</Nav.Link>
                        <Nav.Link onClick={() => { this.onLoggedOut() }}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Navbar;