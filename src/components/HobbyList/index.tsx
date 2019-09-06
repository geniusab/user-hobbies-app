import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import UserItem from '../UserItem'
import User from '../../interfaces/User.interface'
import Hobby from '../../interfaces/Hobby.interface'
import HobbyItem from '../HobbyItem'
import { UsersState } from '../../redux/reducer'

type HobbyListProps = {
  hobbies: Array<Hobby>
  // selected: any
  // onDeleted: (event: React.MouseEvent) => void
  // onSelected: (event: React.MouseEvent) => void
}

const HobbyList: FunctionComponent<HobbyListProps> = (props: HobbyListProps) => {
  const { hobbies } = props

  const elements = hobbies.map((item, index) => {
    return (
      <li key={index}>
        <HobbyItem hobby={item} />
      </li>
    )
  })
  const content = elements.length ? elements : <h4>this user dose no't have any hobbies</h4>

  return <ul className="list-group user-list">{content}</ul>
}

// const mapStateToProps = (state: UsersState) => ({
//     users: state.users,
//     selected: state.selected
// })

// export default connect(
//     mapStateToProps,
//     {},
// )(HobbyList)
export default HobbyList
