import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'

import './styles.scss'
import UserItem from '../UserItem'
import ListUser from '../../interfaces/ListUsers'
import { deleteUser, selectedUser } from '../../redux/actions'
import User from '../../interfaces/User.interface'
import { UsersState } from '../../redux/reducer'

const UseList = (props: any): any => {
  const { users, selected, deleteUser, selectedUser } = props

  const elements = users.map((item: any) => {
    return (
      <li key={item.id}>
        <UserItem selected={selected} user={item} onDeleted={() => deleteUser(item.id)} onSelected={() => selectedUser(item.id)} />
      </li>
    )
  })
  const content = elements.length ? elements : <h4>not found users</h4>

  return <ul className="list-group user-list">{content}</ul>
}

const mapStateToProps = (state: UsersState) => ({
  users: state.users,
  selected: state.selected,
})

export default connect(
  mapStateToProps,
  { deleteUser, selectedUser },
)(UseList)
