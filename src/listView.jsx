import Table from "react-bootstrap/Table";

const ListView = (props) => {
  return (
    <Table striped bordered hover>
      <tbody className="rows">
        <tr
               onClick= {() => (
                // console.log(props)
                props.setCurrentView('Guest')
              )}
        >Row</tr>
        <tr>Row</tr>
        <tr>Row</tr>
      </tbody>
    </Table>
  );
};

export default ListView;
