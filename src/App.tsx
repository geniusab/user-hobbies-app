import React, { useState } from 'react';

import Header from './components/Header'
import List from "./components/List";
import './App.scss';

import Forms from "./components/Form";

const Users = [
    {
        id: 1,
        first_name: 'Andre',
        hobbies: [
            {
                passion: 'High',
                hobby: 'Listening to music',
                year: new Date('2015-1-4'),
            },
            {
                passion: 'Medium',
                hobby: 'Playing football',
                year: new Date('2015-1-4')
            }
        ],

    },
    {
        id: 2,
        first_name: 'Peter',
        hobbies: [
            {
                passion: 'High',
                hobby: 'Listening to music',
                year: new Date('2015-1-4'),
            }
        ]
    },
    {
        id: 3,
        first_name: 'Markus',
        hobbies: [
            {
                passion: 'High',
                hobby: 'Listening to music',
                year: new Date('2015-1-4'),
            },
            {
                passion: 'Medium',
                hobby: 'Playing football',
                year: new Date('2015-1-4')
            },
            {
                passion: 'Low',
                hobby: 'Going to Concert',
                year: new Date('2013-6-4')
            }
        ]

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

    const addHobby = (id: string, hobby: any) => {

        // setUsers([...users, newUser])
    }

    return (
        <div className="App">
            <Header/>
            {/*<AddUser addUser={addUser}/>*/}
            {/*<FormAdd addUser={addUser}/>*/}
            <Forms addUser={addUser} addHobby={addHobby}/>
            <List users={users}  />
        </div>
    );
}

export default App;
