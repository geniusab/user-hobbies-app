import React, { useState } from 'react';
import User from "../../interfaces/User.interface";
import uuidv1 from 'uuid/v1';


const FormAdd = () => {

    const [value, setValue] = useState('');

    const add = (name: string): any => {
        const user: User = {
            id: uuidv1(),
            first_name: name,
            hobby: '',
            year: new Date('21.09.1999')
        }
        console.log(user);

    };
    const handleChange = (e: any) => {
        setValue(e.target.value)
    };



    return (
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={add(value)}>Add</button>
        </div>
    )
}

export default FormAdd