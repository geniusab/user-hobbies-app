import React from 'react';
import User from "../../interfaces/User.interface";
import './styles.scss'
import HobbyList from "../List/Hobby";


const UserCard = (props: User) => {
    const {first_name, hobbies} = props;
    // let _year = year.toLocaleString();

    return (
        <div className="wrap">
            <div className="user">{first_name}</div>
            <HobbyList hobbies={hobbies}/>
            {/*<button className="btn btn-danger">Delete</button>*/}
        </div>

    )

}

export default UserCard;