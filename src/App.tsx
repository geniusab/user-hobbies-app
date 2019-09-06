import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'
import List from './components/List'
import UseList from './components/UserList'
import './App.scss'

import Forms from './components/Form'
import mock_users from './service/mock'
import User from './interfaces/User.interface'
import { addUser } from './redux/actions'
import AddUser from './components/Form/AddUser'
import HobbyList from './components/HobbyList'

type AppProps = {
  users: Array<User>
  addUser: Function
  selected: Number | String
}

const App: FunctionComponent<AppProps> = props => {
  const { users, selected, addUser } = props
  const [select_hobbies, setSelectedHobbies] = useState<any>([])

  useEffect(() => {
    if (selected) {
      const [hobbies] = users.filter((obj: User) => obj.id === selected)

      if (hobbies) {
        setSelectedHobbies(hobbies.hobbies)
      }
    }
  }, [selected])

  return (
    <div className="App">
      <List users={users} />
      <hr />
      <div className="wrap">
        <div className="elem">
          <AddUser addUser={addUser} />
          <UseList users={users} />
        </div>
        <div className="elem">
          <HobbyList hobbies={select_hobbies} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  users: state.users,
  selected: state.selected,
})

export default connect(
  mapStateToProps,
  { addUser },
)(App)
