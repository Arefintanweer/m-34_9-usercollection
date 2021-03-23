import React from 'react';
const Users = (props) => {
  const {name,phone,email,website} = props.user;
  const divStyle = {
    border: '1px solid red'
  }
  const handlePlusButton = props.handlePlusButton;
  return (
    <div style={divStyle}>
      <h4>This is : {name}</h4>
      <p>phone : {phone}</p>
      <p>email : {email}</p>
      <p>website : {website}</p>
      <button onClick={() => handlePlusButton(props.user)}>+</button>
    </div>
  );
};

export default Users;