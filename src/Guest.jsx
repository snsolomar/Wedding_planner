import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'

const Guest = (props) => {
  return (
    <Table striped bordered hover>
      <tbody className="rows">
        <tr>Name</tr>
        <tr>Phone</tr>
        <tr>Relation</tr>
        <Button variant="success">Update</Button>{" "}
      </tbody>
    </Table>
  );
};

export default Guest;
