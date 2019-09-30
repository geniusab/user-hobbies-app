import React, { FunctionComponent, useEffect, useState } from 'react'
import User from './interfaces/User.interface'
// redux
import { connect } from 'react-redux'
import { postUserRequest, getUserRequest, deleteUserRequest } from './store/users/actions'
import { postHobbyRequest } from './store/hobbies/actions'
// components
import Header from './components/Header'
import UseList from './components/UserList'
import AddUser from './components/Form/AddUser'
import HobbyList from './components/HobbyList'
import AddHobby from './components/Form/AddHobby'
// containers
import { Container, ContentWrap } from './containers/Container'
import Row from './containers/Row'
import DataTable from './containers/shared/DataTable'
import { ApplicationState } from './store'
import styled from 'styled-components'

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
  const TableTH = ['Passion', 'Hobby', 'Year', 'Action']
  const { selected, getUserRequest, postUserRequest, postHobbyRequest, deleteUserRequest } = props
  const content = selected ? (
    <>
      <AddHobby addHobby={postHobbyRequest} userId={selected} />
      <DataTable columns={TableTH}>
        <HobbyList />
      </DataTable>
    </>
  ) : (
    <Container mt_20>
      <h2>Chose user</h2>
    </Container>
  )

  const countUser = props.users.length

  useEffect(() => {
    getUserRequest()
    setUsers(users)
  }, [getUserRequest, users])

  return (
    <>
      <Header count={countUser} />
      <Container mt_20>
        <Row>
          {/* users */}
          <WrapUser>
            <AddUser addUser={postUserRequest} />
            <UseList deleteUser={deleteUserRequest} />
          </WrapUser>
          {/* hobbies */}
          <ContentWrap margin={'mlr_16'}>{content}</ContentWrap>
        </Row>
      </Container>
    </>
  )
}
// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ users, hobbies }: ApplicationState) => ({
  users: users.users,
  selected: hobbies.selected,
})

export default connect(
  mapStateToProps,
  { getUserRequest, postUserRequest, postHobbyRequest, deleteUserRequest },
)(App)

const WrapUser = styled.div`
  min-width: 276px;
  position: relative;
`
