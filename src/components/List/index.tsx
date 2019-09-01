import React from 'react';
import UserCard from "../User";
import ListUser from "../../interfaces/ListUsers";
import './styles.scss'


const List = (props: ListUser) => {
    const {users} = props;
    return (
        <div className="ant-table">
            <table>
                <thead className="ant-table-thead">
                <tr>
                    <th>Name</th>
                    <th>Passion</th>
                    <th>Hobby</th>
                    <th>Year</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className="ant-table-tbody">
                {
                    users.map((item) => {
                        return (
                            <UserCard
                                key={item.id}
                                first_name={item.first_name}
                                hobby={item.hobby}
                                passion={item.passion}
                                year={item.year}
                            />
                        )
                    })
                }

                </tbody>
            </table>
        </div>
    )
};

export default List