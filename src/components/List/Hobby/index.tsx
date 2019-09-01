import React, { useState } from 'react';

import Hobby from "../../../interfaces/Hobby.interface";
import User from "../../../interfaces/User.interface";
import './styles.scss'

const HobbyList = (props: any) => {
    const {hobbies} = props;

    // const {selected, setSelected} = useState(null)

    return (
        <div className="ant-table">
            <table>
                <thead className="ant-table-thead">
                <tr>
                    <th>Passion</th>
                    <th>Hobby</th>
                    <th>Year</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className="ant-table-tbody">
                {
                    hobbies.map((item: any) => {
                        return (
                            <tr>
                                <td>{item.passion}</td>
                                <td>{item.hobby}</td>
                                <td>{item.year.toLocaleString()}</td>
                                <td>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
};

export default HobbyList