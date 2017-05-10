import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar className="header">

                <Nav>
                    <NavItem eventKey={1} href="#">Women</NavItem>
                    <NavItem eventKey={2} href="#">Men</NavItem>

                </Nav>
                <Navbar.Header>
                    <Navbar.Brand className="navbarBrand">
                        <a href="#">Mode</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavDropdown eventKey={3} title="Profile" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>My Orders</MenuItem>
                        <MenuItem eventKey={3.2}>My Account</MenuItem>
                        <MenuItem eventKey={3.3}>Subscriptions</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.4}>Log Out</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar>
        )
    }
}


export default Header;