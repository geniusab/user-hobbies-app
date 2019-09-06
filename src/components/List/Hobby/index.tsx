import React, { useState } from 'react'

import Hobby from '../../../interfaces/Hobby.interface'
import User from '../../../interfaces/User.interface'
import './styles.scss'

const HobbyList = (props: any) => {
  const { hobbies } = props
  // console.log(props);

  const items = hobbies.map((item: any, key: any) => {
    return (
      <tr key={key}>
        <td>{item.passion}</td>
        <td>{item.hobby}</td>
        {/*<td>{item.year.toLocaleString()}</td>*/}
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  })

  const not_found = (
    <tr>
      <td>passion</td>
      <td>hobby</td>
      <td>year</td>
      <td>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  )

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
        <tbody className="ant-table-tbody">{items.length ? items : not_found}</tbody>
      </table>
    </div>
  )
}

export default HobbyList
