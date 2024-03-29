import * as ReactBootStrap from "react-bootstrap"
import { Link } from 'react-router-dom';

function Header(){

  return (
     <div className="navigation">
      <ReactBootStrap.Navbar sticky="top" collapseOnSelect expand="lg" bg="light" variant="light">
        <ReactBootStrap.Navbar.Brand as={Link} to="/">Home</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link as={Link} to="/todoodle">Todoodle</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/users">All Users</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link as={Link} to="/login">Logout</ReactBootStrap.Nav.Link>
            {/* <div id="logout"> {user.token && <Button variant="secondary" onClick={logout}>Logout</Button>}</div> */}
            <ReactBootStrap.Nav.Link eventKey={2} as={Link} to="/">
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};


export default Header;