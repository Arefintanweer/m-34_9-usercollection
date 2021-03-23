import logo from './logo.svg';
import './App.css';
import Users from './components/Users/Users';
import { useState,useEffect } from 'react';

function App() {
  const [users,setUsers]=useState([]);
  const [count,setCount]= useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(data=>setUsers(data))
  }, []);

  const handlePlusButton = (user) =>{
    const newCount = [...count,user];
    setCount(newCount);
  }

  return (
    <div className="App">
      <h1>User Added : {count.length} </h1>
      {
        users.map(user => <Users user={user} key={user.id} handlePlusButton={handlePlusButton}></Users>)
      }
    </div>
  );
}

export default App;
