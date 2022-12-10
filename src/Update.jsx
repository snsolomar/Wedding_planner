import Button from 'react-bootstrap/Button';

const Update = (props) => {
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
            >Update</Button>{' '}
          </tr>
        </table>
      </form>
    );
  };
  
  export default Update;