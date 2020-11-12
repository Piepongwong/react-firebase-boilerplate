import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useContext } from "react";
import { firebaseContext } from "contexts/FirebaseProvider";
import useNotification from "hooks/useNotification";
import { Link } from "react-router-dom";
export default function Navigation(props) {
  let { user, firebase } = useContext(firebaseContext);
  let { pushNotification } = useNotification();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">
            <Link to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <div className="d-flex">
          {!user ? (
            <>
              <Nav.Item>
                <Link to="/authentication">
                  <button className="btn btn-primary">Login/Signup</button>
                </Link>
              </Nav.Item>
            </>
          ) : (
            <Nav.Item>
              <button
                className="btn btn-primary"
                onClick={() => {
                  firebase
                    .auth()
                    .signOut()
                    .catch(function (error) {
                      pushNotification({ error: true, message: error.message });
                    });
                }}
              >
                Logout
              </button>
            </Nav.Item>
          )}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
