import React, { useState, FunctionComponent, ChangeEvent } from 'react';
import User from "../../../interfaces/User.interface";
import {connect} from 'react-redux';
import uuidv1 from 'uuid/v1';
import './styles.scss'
// import { addUser } from "../../../redux/actions";

type AddUser = {
    addUser: Function
}

const AddUser:FunctionComponent<AddUser> = ({addUser}) => {
    const [name, setName] = useState('');

    const reset = () => {
        setName('');
    };
    const add = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (name.trim() !== '') {
            console.log(12222);
            const user: User = {
                id: uuidv1(),
                first_name: name,
                hobbies: [],
            };
            addUser(user)
            reset()
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    return (
        <form className="form-user" onSubmit={(event) => add(event)}>
            <div className="group">
                <input className="input" type="text" value={name} onChange={handleChange}/>
                <button className="btn btn-primary" type="submit">Add</button>
            </div>
        </form>
    )
}

export default AddUser