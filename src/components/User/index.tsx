import React from 'react';
import User from "../../interfaces/User.interface";



const UserCard = (props: User) => {
    const {first_name, hobby, passion, year} = props;


    return (
        <tr>
            <td>{first_name}</td>
            <td>{passion}</td>
            <td>{hobby}</td>
            <td>{year}</td>
            <td>Delete</td>
        </tr>

    )

}

export default UserCard;