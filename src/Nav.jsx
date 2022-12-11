import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'

function StaticNav(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"
        onClick= {() => (
            props.setSelectedGuest([])
          )}
        >Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-success"
                            onClick= {(props) => {
                                console.log('clicked');
                                props.setSelectedGuest([])
                            }}
            >Create</Button>
            <Button variant="outline-secondary">Delete</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StaticNav;