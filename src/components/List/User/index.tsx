import React, { useState } from 'react';
import ListUser from "../../../interfaces/ListUsers";
import './styles.scss'

const UserCardList = (props: ListUser): any => {
    const {users, onItemSelected} = props;

    return (
        <div className="wrap">
            <ul>
                {
                    users.map((item) => {
                        return (
                            <li key={item.id}
                                onClick={() => {
                                    console.log(item.id);
                                    onItemSelected(item.id)}
                                }>
                                {item.first_name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )

}

UserCardList.defaultProps = {
    onItemSelected: () => {}
};

export default UserCardList;