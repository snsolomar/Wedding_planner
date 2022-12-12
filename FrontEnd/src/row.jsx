import { useState,useEffect } from 'react'
const Row = (props) => {
    const [guestId, setGuestId] = useState()

    // const handleId = () => {
    //     console.log(props.selectedGuest.id)
    //     setGuestId(props.selectedGuest.id)
        
    // }
  console.log(props);
  const handleClick = () => {
    props.setSelectedGuest(props.guest);
  };

  return <tr onClick={handleClick}>{props.guest.name}</tr>;
};

export default Row;

