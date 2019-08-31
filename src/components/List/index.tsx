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
                    <th className=""><span className="ant-table-header-column"><div><span
                        className="ant-table-column-title">Hobby</span></div></span></th>
                    <th className=""><span className="ant-table-header-column"><div><span
                        className="ant-table-column-title">Year</span></div></span>
                    </th>
                    <th className=""><span className="ant-table-header-column"><div><span
                        className="ant-table-column-title">Action</span></div></span></th>
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
                                // passion={item.passion}
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