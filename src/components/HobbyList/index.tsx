import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import Hobby from '../../interfaces/Hobby.interface'
import HobbyItem from '../HobbyItem'
// import { HobbyState } from '../../store/hobbies'
import { deleteHobbyRequest } from '../../store/hobbies/actions'

type HobbyListProps = {
  hobbies: Array<Hobby>
  deleteHobbyRequest: Function // or deleteHobby(id: string | number): void
  selected: string | number
}

const HobbyList: FunctionComponent<HobbyListProps> = (props: HobbyListProps) => {
  const { hobbies, deleteHobbyRequest, selected } = props

  const elements = hobbies.map((item, index) => {
    return (
      <li key={index}>
        <HobbyItem hobby={item} onDeleted={() => deleteHobbyRequest(item.id, selected)} />
      </li>
    )
  })
  const content = elements.length ? elements : <h4>this user dose no't have any hobbies</h4>

  return <ul className="list-group hobby-list">{content}</ul>
}
// HobbyState
const mapStateToProps = (state: any) => ({
  hobbies: state.hobbies.hobbies,
  selected: state.hobbies.selected,
})

export default connect(
  mapStateToProps,
  { deleteHobbyRequest },
)(HobbyList)
