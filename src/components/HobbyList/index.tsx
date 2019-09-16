import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import Hobby from '../../interfaces/Hobby.interface'
import HobbyItem from '../HobbyItem'
import { HobbyState } from '../../redux/reducers/hobbies'
import { deleteHobby } from '../../redux/reducers/hobbies/actions'

type HobbyListProps = {
  hobbies: Array<Hobby>
  deleteHobby: Function // or deleteHobby(id: string | number): void
}

const HobbyList: FunctionComponent<HobbyListProps> = (props: HobbyListProps) => {
  const { hobbies, deleteHobby } = props

  const elements = hobbies.map((item, index) => {
    return (
      <li key={index}>
        <HobbyItem hobby={item} onDeleted={() => deleteHobby(item.id)} />
      </li>
    )
  })
  const content = elements.length ? elements : <h4>this user dose no't have any hobbies</h4>

  return <ul className="list-group hobby-list">{content}</ul>
}
// HobbyState
const mapStateToProps = (state: any) => ({
  hobbies: state.hobbies.hobbies,
})

export default connect(
  mapStateToProps,
  { deleteHobby },
)(HobbyList)
