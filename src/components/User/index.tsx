import React from 'react';
import User from "../../interfaces/User.interface";
import './styles.scss'


const UserCard = (props: User) => {
    const {first_name, hobby, passion, year} = props;
    let _year = year.toLocaleString();

    return (
        <tr>
            <td>{first_name}</td>
            <td>{passion}</td>
            <td>{hobby}</td>
            <td>{_year}</td>
            <td><button className="btn btn-danger">Delete</button></td>
        </tr>

    )

}

export default UserCard;