import Button from 'react-bootstrap/Button';
import { useState } from 'react'

const Create = (props) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [relation, setRelation] = useState("");
    const handleName = (e) => {
        setName(e.target.value)
        console.log(e.target.value)
    }
    const handlePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleRelation = (e) => {
        setRelation(e.target.value)
    }
    const handlePost = () => {
        const newGuest = {
            name: name,
            phone: phone,
            relation: relation
        };
        fetch("http://localhost:3000/api/guest", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newGuest)
        })
        .then(response => response.json())
        .then((data) => console.log(data))
    }
    
  return (
    <form >
      <table className="createContainer">
        <tr>
          <input placeholder="name" value={name}
          onChange= {handleName}/>
        </tr>
        <tr>
          <input placeholder="phone number" value={phone}
          onChange= {handlePhone}/>
        </tr>
        <tr>
          <input placeholder="relation" value={relation}
          onChange= {handleRelation}/>
        </tr>
        <tr>
         <Button variant="success"
            onClick= {() => {
                handlePost();
                props.setReRender(true);
                props.setUpdate(false);
                props.setCreate(false);
                
            }}
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
