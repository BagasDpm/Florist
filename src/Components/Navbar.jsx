import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Form,
  Stack,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function NavbarLayout() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/login");
  }
  function flowerClick() {
    navigate("/flower-bouqet");
  }
  function specialClick() {
    navigate("/special-bouqet");
  }
  function moneyClick() {
    navigate("/money-bouqet");
  }
  function snackClick() {
    navigate("/snack-bouqet");
  }
  function homeClick() {
    navigate("/");
  }
  function cartClick() {
    navigate("/cart");
  }
  
  return (
    <Navbar
      data-bs-theme="light"
      expand="lg"
      className="mb-5"
      style={{ backgroundColor: "#FFBADB" }}
    >
      <Container>
        <img width={"150px"} src={require("../Asset/icon.png")}></img>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Category" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={(e) => flowerClick()}>
                Flower Bouquet
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => specialClick()}>
                Special Occasion Bouqet
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => moneyClick()}>
                Money bouquet
              </NavDropdown.Item>
              <NavDropdown.Item onClick={(e) => snackClick()}>
                Snack bouquet
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="home-click" onClick={(e) => homeClick()}>Home</Nav.Link>
            <Nav.Link className="" onClick={(e) => cartClick()}>Cart</Nav.Link>
          </Nav>

          <Stack direction="horizontal" gap={3}>
            <Form.Control className="me-auto" placeholder="Search here.." />
            <Button variant="light">Search</Button>
            <div className="vr" />
            <Button onClick={(e) => handleClick()} variant="outline-danger">
              Login
            </Button>
          </Stack>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
