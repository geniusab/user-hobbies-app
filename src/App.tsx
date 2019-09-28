import React, { FunctionComponent, useEffect, useState } from 'react'
import { connect } from 'react-redux'

import User from './interfaces/User.interface'
import { postUserRequest, getUserRequest, deleteUserRequest } from './store/users/actions'
import { postHobbyRequest } from './store/hobbies/actions'

import Header from './components/Header'
import UseList from './components/UserList'
import AddUser from './components/Form/AddUser'
import HobbyList from './components/HobbyList'
import AddHobby from './components/Form/AddHobby'

import { Container, ContentWrap } from './containers/Container'
// containers
import Row from './containers/Row'
import DataTable from './containers/shared/DataTable'
import { ApplicationState } from './store'

type AppProps = {
  users: Array<User>
  getUserRequest: Function
  postUserRequest: Function
  deleteUserRequest: Function
  postHobbyRequest: Function

  selected: number | string
}

const App: FunctionComponent<AppProps> = props => {
  const [users, setUsers] = useState([])

  const { selected, getUserRequest, postUserRequest, postHobbyRequest, deleteUserRequest } = props
  const content = selected ? (
    <>
      <AddHobby addHobby={postHobbyRequest} userId={selected} />
      <DataTable columns={['Passion', 'Hobby', 'Year', 'Action']}>
        <HobbyList />
      </DataTable>
    </>
  ) : (
    <AddHobby addHobby={postHobbyRequest} userId={selected} />
  )

  const countUser = props.users.length

  useEffect(() => {
    getUserRequest()
    setUsers(users)
  }, [getUserRequest, users])

  return (
    <div>
      <Header count={countUser} />
      <Container mt_20>
        <Row>
          {/* users */}
          <div>
            <AddUser addUser={postUserRequest} />
            <UseList deleteUser={deleteUserRequest} />
          </div>
          {/* hobbies */}
          <ContentWrap margin={'mlr_16'}>{content}</ContentWrap>
        </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = ({ users, hobbies }: ApplicationState) => ({
  users: users.users,
  selected: hobbies.selected,
})

export default connect(
  mapStateToProps,
  { getUserRequest, postUserRequest, postHobbyRequest, deleteUserRequest },
)(App)
