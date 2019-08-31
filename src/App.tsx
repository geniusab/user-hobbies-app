import React from 'react';

import './App.css';
import Header from './components/Header'
import List from "./components/List";
import FormAdd from "./components/Form";

const Users = [
    {
        id: 1,
        first_name: 'Andre',
        passion: 'Medium',
        hobby: 'Playing football',
        year: '2015-1-4'//new Date('2015-1-4'),//new Date(1933, 3, 21),
    },
    // {
    //     id: 2,
    //     first_name: 'Peter',
    //     passion: 'High',
    //     hobby: 'Listening to music',
    //     year: new Date('2015-1-4'),
    // },
    // {
    //     id: 3,
    //     first_name: 'Markus',
    //     passion: 'Low',
    //     hobby: 'Going to Concert',
    //     year: new Date('2013-6-4'),
    // }
]

function App() {
    return (
        <div className="App">
            <Header/>
            <FormAdd/>
            <List users={Users}/>
        </div>
    );
}

export default App;
