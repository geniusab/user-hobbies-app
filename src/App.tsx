import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'

import UseList from './components/UserList'
import './App.scss'

import User from './interfaces/User.interface'
import { addHobby, addUser, loadRequest, loadRequestPost } from './redux/reducers/actions'
import AddUser from './components/Form/AddUser'
import HobbyList from './components/HobbyList'
import AddHobby from './components/Form/AddHobby'

type AppProps = {
  users: Array<User>
  loadRequestPost: Function
  addHobby: Function
  loadRequest: Function
  selected: Number | String
}

const App: FunctionComponent<AppProps> = props => {
  const [users, setUsers] = useState([])
  const { selected, loadRequestPost, addHobby, loadRequest } = props
  const content = selected ? (
    <>
      {' '}
      <AddHobby addHobby={addHobby} />
      <HobbyList />
    </>
  ) : (
    <div>Chose user</div>
  )
  const ClassNames = selected ? 'elem elem-100' : 'elem not_found'
  const countUser = props.users.length

  useEffect(() => {
    loadRequest()
    setUsers(users)
  }, [setUsers])

  return (
    <div className="App">
      <Header count={countUser} />
      <hr />
      <div className="wrap">
        <div className="elem">
          <AddUser addUser={loadRequestPost} />
          <UseList />
        </div>
        <div className={ClassNames}>{content}</div>
      </div>
      <hr />
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  users: state.users,
  selected: state.selected,
})

export default connect(
  mapStateToProps,
  { loadRequestPost, addHobby, loadRequest },
)(App)
