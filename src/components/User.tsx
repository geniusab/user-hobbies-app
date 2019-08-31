import React from 'react';
import User from "../interfaces/User.interface";


const UserCard = (props: User) => {
    return <h1>{props.first_name}</h1>
}

export default UserCard;