import Table from "react-bootstrap/Table";
import Row from "./row";

const ListView = (props) => {
    // console.log(props.selectedGuest)
  return (
    <Table striped bordered hover>
      <tbody className="rows">
      {props.guestList.map((guest, i) => (
        <Row key={i} {...props} guest={guest}/>
        ))}
      </tbody>
    </Table>
  );
};

// {props.data.map((item) =>
//     <tr key={item.name} {...props}>(item.name)</tr>
// )}

export default ListView;

//count=0;
//while (count < guest.length) {
//     return (
//         <tr></tr>
//     )
// }


