import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link, NavLink} from 'react-router-dom';

// Imported LogoIcon, TodoIcon, StoreIcon Components. 
import LogoIcon  from './../../assests/svg/LogoIcon';
import TodoIcon from './../../assests/svg/TodoIcon';
import StoreIcon from './../../assests/svg/StoreIcon';


class AsideNavbar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Nav className="flex-column">
                <Nav.Link>Add Placement</Nav.Link>
                <Nav.Link>Search Placement</Nav.Link>
                <Nav.Link>View Student Applied</Nav.Link>
                <Nav.Link as={NavLink} to="/add_student/">Add Student</Nav.Link>
            </Nav>
        )
    }
}

export default AsideNavbar;