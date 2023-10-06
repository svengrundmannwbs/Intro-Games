import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation } from "react-router-dom";
import "../App.css";

function NavBar() {
  const location = useLocation();
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar id="basic-navbar-nav">
          <Nav activeKey={location.pathname}>
            <Nav.Link href="./" eventKey="/">
              Start
            </Nav.Link>
            <Nav.Link href="./articles" eventKey="/articles">
              Articles
            </Nav.Link>
            <Nav.Link href="./games" eventKey="/games">
              Games
            </Nav.Link>
            <Nav.Link href="./search" eventKey="/search">
              Archive
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}

export default NavBar;
