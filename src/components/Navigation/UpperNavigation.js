import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';

// Imported LogoIcon, TodoIcon, StoreIcon Components. 
import LogoIcon  from './../../assests/svg/LogoIcon';
import TodoIcon from './../../assests/svg/TodoIcon';
import StoreIcon from './../../assests/svg/StoreIcon';


// Import Navigation CSS.
import './navigationStyles.scss';


 export default class UpperNavigation extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
           <Navbar fixed="top" bg="dark" expand="lg" className="common-navbar-container">
                <Navbar.Brand className="common-navbar-brand" as={NavLink} to="/todo-app/">
                    <LogoIcon 
                        size="50"
                        color="#61DAFB"
                        className="brand-logo"
                    />
                    <span>Placement Cell Application</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-nav-control" />
                <Navbar.Collapse id="basic-nav-control" className="common-navbar-collapse">
                    <Nav className="ml-auto">
                        <Nav.Link as={NavLink} to="/admin_login/" activeClassName="active" className="nav-link-right">
                            <span>Admin Login</span>
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/student_login/" activeClassName="active" className="nav-link-right">
                            <span>Student Login</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
           </Navbar> 
        )
    }
}

