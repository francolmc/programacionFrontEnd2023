import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">Todo list</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
