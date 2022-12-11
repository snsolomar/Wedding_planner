const Row = (props) => {
  console.log(props);
  const handleClick = () => {
    props.setSelectedGuest(props.guest);
  };

  return <tr onClick={handleClick}>{props.guest.name}</tr>;
};

export default Row;
