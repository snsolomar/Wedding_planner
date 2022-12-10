import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'

const Guest = (props) => {
  return (
    <Table striped bordered hover>
      <tbody className="rows">
        {/* <tr>{props.selectedGuest.name}</tr> */}
        <tr>Phone</tr>
        <tr>Relation</tr>
        <Button variant="success"
                    onClick= {() => (
                        props.setCurrentView('Update')
                        )}
        >Update</Button>{" "}
      </tbody>
    </Table>
  );
};

export default Guest;
