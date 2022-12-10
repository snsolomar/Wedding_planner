import Button from 'react-bootstrap/Button';

const Create = (props) => {
  return (
    <form >
      <table className="createContainer">
        <tr>
          <input placeholder="name" />
        </tr>
        <tr>
          <input placeholder="phone number" />
        </tr>
        <tr>
          <input placeholder="relation" />
        </tr>
        <tr>
         <Button variant="success"
            onClick= {() => (
            props.setCurrentView('ListView')
            )}
         >Create</Button>{' '}
        </tr>
      </table>
    </form>
  );
};

export default Create;

// const Create = (props) => {
//     return (
//         <form className="createContainer">
//             <input placeholder="name"/>
//             <input placeholder="phone number"/>
//             <input placeholder="relation"/>
//             <button type="submit" id="createButton" placeholder="create"/>
//         </form>

//       );
//     }

// export default Create;
