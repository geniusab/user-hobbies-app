import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'

import UseList from './components/UserList'
import './App.scss'

import User from './interfaces/User.interface'
import { addHobby, addUser } from './redux/reducers/actions'
import AddUser from './components/Form/AddUser'
import HobbyList from './components/HobbyList'
import AddHobby from './components/Form/AddHobby'

type AppProps = {
  users: Array<User>
  addUser: Function
  addHobby: Function
  selected: Number | String
}

const App: FunctionComponent<AppProps> = props => {
  const { users, selected, addUser, addHobby } = props
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
  const countUser = users.length
  return (
    <div className="App">
      <Header count={countUser} />
      <hr />
      <div className="wrap">
        <div className="elem">
          <AddUser addUser={addUser} />
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
  { addUser, addHobby },
)(App)
