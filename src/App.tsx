import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'
import List from './components/List'
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
    if (selected) {
      const [hobbies] = users.filter((obj: User) => obj.id === selected)
      if (hobbies) {
        setSelectedHobbies(hobbies.hobbies)
      }
    } else {
      setSelectedHobbies([])
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
          <AddHobby addHobby={addHobby} />
          <HobbyList hobbies={hobbies} />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  users: state.users,
  selected: state.selected,
  hobbies: state.hobbies,
})

export default connect(
  mapStateToProps,
  { addUser, addHobby },
)(App)
