import './App.css';
import React,{ useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import Wrapper from './helpers/Wrapper';

function App() {
    const [userslist,setuserslist] = useState([]);
    const AddUserHandler = (uName,uAge) => {
        setuserslist((prevUsersList)=>{
            return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}];
        })
    }
    return (
        <Wrapper>
            <AddUser onAddUser={AddUserHandler}/>
            <UserList users={userslist} />
        </Wrapper>
    );
}

export default App;
