import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header'
import List from "./components/List";
import FormAdd from "./components/Form";
import User from "./interfaces/User.interface";

const Users = [
    {
        id: 1,
        first_name: 'Andre',
        passion: 'Medium',
        hobby: 'Playing football',
        year: new Date('2015-1-4'),  //new Date(1933, 3, 21),
    },
    {
        id: 2,
        first_name: 'Peter',
        passion: 'High',
        hobby: 'Listening to music',
        year: new Date('2015-1-4'),
    },
    {
        id: 3,
        first_name: 'Markus',
        passion: 'Low',
        hobby: 'Going to Concert',
        year: new Date('2013-6-4'),
    }
]

function App() {

    const [users, setUsers] = useState(Users);

    // useEffect(() => {
    //     setUsers()
    // }, [setUsers])

    const addUser = (newUser: any) => {
        setUsers([...users, newUser])
    }

    return (
        <div className="App">
            <Header/>
            <FormAdd addUser={addUser}/>
            <List users={users}/>
        </div>
    );
}

export default App;
