import { Link } from "react-router-dom";
import React from "react";
import * as ReactBootStrap from "react-bootstrap";

function Nav() {
  return (
    <>
      <div>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <ReactBootStrap.Navbar.Brand as={Link} to="/menu">
            Home
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
              <ReactBootStrap.Nav.Link as={Link} to="/">
                Home
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link as={Link} to="/profile">
                Profile
              </ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link as={Link} to="/users">
                All Users
              </ReactBootStrap.Nav.Link>
              {/* <div id="logout"> {user.token && <Button variant="secondary" onClick={logout}>Logout</Button>}</div> */}
              <ReactBootStrap.Nav.Link
                eventKey={2}
                href="#home"
              ></ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </div>
    </>
  );
}
export default Nav;
