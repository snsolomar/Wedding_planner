import Button from 'react-bootstrap/Button';
import { useState,useEffect } from 'react'

const Update = (props) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [relation, setRelation] = useState("");
    const [guestId, setGuestId] = useState()

    const handleId = () => {
        console.log(props.selectedGuest.id)
        setGuestId(props.selectedGuest.id)
        console.log(guestId)
    }
    
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
        const newGuestInfo = {
            name: name,
            phone: phone,
            relation: relation
        };
        fetch("http://localhost:3000/api/guest/" + (guestId), {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newGuestInfo)
        })
        .then(response => response.json())
        .then((data) => console.log(data))
    }

    return (
      <form >
        <table className="createContainer">
        <tr>
          <input placeholder="Name" value={name}
          onChange= {handleName}/>
        </tr>
          <tr>
          <input placeholder="Phone" value={phone}
          onChange= {handlePhone}/>
        </tr>
        <tr>
          <input placeholder="Relation" value={relation}
          onChange= {handleRelation}/>
        </tr>
          <tr>
            <Button variant="success"
                onClick= {() => {
                    handleId()
                    handlePost()
                    props.setUpdate(false)
                    props.setSelectedGuest([])
                }

                    }
            >Update</Button>{' '}
          </tr>
        </table>
      </form>
    );
  };
  
  export default Update;

//   import Button from 'react-bootstrap/Button';
// import { useState } from 'react'

// const Create = (props) => {
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [relation, setRelation] = useState("");
//     const handleName = (e) => {
//         setName(e.target.value)
//         console.log(e.target.value)
//     }
//     const handlePhone = (e) => {
//         setPhone(e.target.value)
//     }
//     const handleRelation = (e) => {
//         setRelation(e.target.value)
//     }
//     const handlePost = () => {
//         const newGuest = {
//             name: name,
//             phone: phone,
//             relation: relation
//         };
//         fetch("http://localhost:3000/api/guest", {
//             method: "POST",
//             headers: {
//                 "Content-type": "application/json"
//             },
//             body: JSON.stringify(newGuest)
//         })
//         .then(response => response.json())
//         .then((data) => console.log(data))

      

//     }
    
//   return (
//     <form >
//       <table className="createContainer">
//         <tr>
//           <input placeholder="name" value={name}
//           onChange= {handleName}/>
//         </tr>
//         <tr>
//           <input placeholder="phone number" value={phone}
//           onChange= {handlePhone}/>
//         </tr>
//         <tr>
//           <input placeholder="relation" value={relation}
//           onChange= {handleRelation}/>
//         </tr>
//         <tr>
//          <Button variant="success"
//             onClick= {() => {
//                 handlePost();
//                 props.setReRender(true);
//                 props.setUpdate(false);
//                 props.setCreate(false);
                
//             }}
//          >Create</Button>{' '}
//         </tr>
//       </table>
//     </form>
//   );
// };

// export default Create;