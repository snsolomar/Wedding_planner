import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import ListView from './listView';
import { useState } from 'react'

function StaticNav(props) {
    const [guestId, setGuestId] = useState()

    const handleId = () => {
        console.log(props.selectedGuest.id)
        setGuestId(props.selectedGuest.id)        
    }
    

    const handleDelete = async() => {
        await fetch(`${props.url}/api/guest/${guestId}`, {
            method: "DELETE",
            mode: "cors"
        })
        .then(response => response.json())
        

    }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"
        onClick= {() => {
            props.setUpdate(false);
            props.setCreate(false);
            props.setSelectedGuest([])
        }
          }
        >Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Button variant="outline-success"
                            onClick= {() => {
                                console.log('clicked');
                                props.setCreate(true)
                                // props.setCurrentView(ListView)
                            }}
            >Create</Button>
            <Button variant="outline-secondary"
                            onClick= {() => {
                                handleId()
                                console.log(guestId)
                                handleDelete()
                                props.setGuestId()
                                props.setUpdate(false)
                                
                            }}
                            >Delete</Button>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StaticNav;