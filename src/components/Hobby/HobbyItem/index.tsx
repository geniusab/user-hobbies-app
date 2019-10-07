import React, { FunctionComponent } from 'react'
// interface
import Hobby from '../../../interfaces/Hobby.interface'
// containers
import { WrapIcon } from '../../Styles/shared/index'

type HobbyItemProps = {
  hobby: Hobby
  isLoading: boolean
  deleteId: boolean
  onDeleted: (event: React.MouseEvent) => void
}

const HobbyItem: FunctionComponent<HobbyItemProps> = (props: HobbyItemProps) => {
  const { passion, hobby, createdAt } = props.hobby
  const { isLoading, onDeleted, deleteId } = props

  return (
    <>
      <td>{passion}</td>
      <td>{hobby}</td>
      <td>{new Date(createdAt).getFullYear()}</td>
      <td>
        <WrapIcon disabled={isLoading} type="button" onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </WrapIcon>
        {deleteId ? ' loading...' : ''}
      </td>
    </>
  )
}

export default HobbyItem
