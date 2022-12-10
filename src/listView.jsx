import Table from "react-bootstrap/Table";

const ListView = (props) => {
    // console.log(props.selectedGuest)
  return (
    <Table striped bordered hover>
      <tbody className="rows">
      {props.guestList.map((item) => (
        <tr key={item.id} 
        onClick= {() => {
            fetch(`http://localhost:3000/api/guest/${item.id}`)
            .then(response => response.json())
            .then((data) => props.setSelectedGuest(data))
            console.log(props)
            props.setCurrentView('Guest')  
        }}
        {...props}>{item.name}</tr>
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


