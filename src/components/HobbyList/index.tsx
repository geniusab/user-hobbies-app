import React, { FunctionComponent } from 'react'
import { connect } from 'react-redux'

import Hobby from '../../interfaces/Hobby.interface'
import HobbyItem from '../HobbyItem'
// import { HobbyState } from '../../store/hobbies'
import { deleteHobbyRequest } from '../../store/hobbies/actions'

type HobbyListProps = {
  hobbies: Array<Hobby>
  deleteHobbyRequest: Function // or deleteHobby(id: string | number): void
  selected: string | number
  loading: boolean
}

const HobbyList: FunctionComponent<HobbyListProps> = (props: HobbyListProps) => {
  const { selected, loading, hobbies, deleteHobbyRequest } = props

  const elements = hobbies.map((item, index) => {
    return (
      <tr key={index}>
        <HobbyItem hobby={item} onDeleted={() => deleteHobbyRequest(item.id, selected)} />
      </tr>
    )
  })
  const hobbiesContent = elements.length ? (
    elements
  ) : (
    <tr>
      <td colSpan={4}>This user does not have any hobbies.</td>
    </tr>
  )
  const content = loading ? (
    <tr>
      <td colSpan={4}>loading...</td>
    </tr>
  ) : (
    hobbiesContent
  )

  return <>{content}</>
}
// HobbyState
const mapStateToProps = (state: any) => ({
  hobbies: state.hobbies.hobbies,
  selected: state.hobbies.selected,
  loading: state.hobbies.loading,
})

export default connect(
  mapStateToProps,
  { deleteHobbyRequest },
)(HobbyList)
