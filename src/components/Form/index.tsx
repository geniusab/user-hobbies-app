import React, { useState, FunctionComponent, ChangeEvent } from 'react';

import './styles.scss'
import AddForm from "./AddHobby";
import AddUser from "./AddUser";

type FormAddProps = {
    addUser: Function,
    addHobby: Function
}

const Forms: FunctionComponent<FormAddProps> = ({addUser, addHobby}): any => {
    return (
        <div className="wrap-form">
            <AddUser addUser={addUser}/>
            <AddForm addHobby={addHobby}/>
        </div>

    )
}


export default Forms