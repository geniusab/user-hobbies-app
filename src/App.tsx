import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'

import UseList from './components/UserList'
import './App.scss'

import User from './interfaces/User.interface'
import { addHobby, addUser } from './redux/actions'
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
  const [hobbies, setSelectedHobbies] = useState<any>([])

  useEffect(() => {
    console.log('hobbies_', hobbies)
    if (selected) {
      const [hobbies] = users.filter((obj: User) => obj.id === selected)
      if (hobbies) {
        setSelectedHobbies(hobbies.hobbies)
      }
    } else {
      setSelectedHobbies([])
    }
  }, [selected, users])

  const countUser = users.length
  return (
    <div className="App">
      <Header count={countUser} />
      <hr />
      <div className="wrap">
        <div className="elem">
          <AddUser addUser={addUser} />
          <UseList users={users} />
        </div>
        <div className="elem">
          <AddHobby addHobby={addHobby} />
          <HobbyList />
        </div>
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
