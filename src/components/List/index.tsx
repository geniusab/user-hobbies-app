import React, { useState } from 'react';
import UserCard from "../User";
import ListUser from "../../interfaces/ListUsers";
// import './Hobby/styles.scss'


const List = (props: ListUser) => {
    const {users} = props;

    // const {selected, setSelected} = useState(null)

    return (
        <div className="ant-table">
            {
                users.map((item) => {
                    return (
                        <UserCard
                            key={item.id}
                            first_name={item.first_name}
                            hobbies={item.hobbies}
                        />
                    )
                })
            }
                {/*{*/}
                    {/*users.map((item) => {*/}
                        {/*return (*/}
                            {/*<div onClick={() => setUser(item)}>{item.first_name}</div>*/}
                        {/*)*/}
                    {/*})*/}
                {/*}*/}
                {/*{*/}
                    {/*user.hobbies.map((item) => {*/}
                        {/*return (*/}
                            {/*<UserCard*/}
                                {/*key={item.id}*/}
                                {/*first_name={item.first_name}*/}
                                {/*hobbies={item.hobbies}*/}
                            {/*/>*/}
                        {/*)*/}
                    {/*})*/}
                {/*}*/}

        </div>
    )
};

export default List