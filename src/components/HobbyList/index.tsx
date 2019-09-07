import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import Hobby from '../../interfaces/Hobby.interface'
import HobbyItem from '../HobbyItem'
import { UsersState } from '../../redux/reducer'

type HobbyListProps = {
  hobbies: Array<Hobby>
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

  return <ul className="list-group hobby-list">{content}</ul>
}

const mapStateToProps = (state: UsersState) => ({
  hobbies: state.hobbies,
})

export default connect(
  mapStateToProps,
  {},
)(HobbyList)
// export default HobbyList
