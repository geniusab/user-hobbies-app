import React, { FunctionComponent } from 'react'
import Hobby from '../../interfaces/Hobby.interface'
import { WrapIcon } from '../../containers/shared'

type HobbyItemProps = {
  hobby: Hobby
  isLoading: boolean
  onDeleted: (event: React.MouseEvent) => void
}

const HobbyItem: FunctionComponent<HobbyItemProps> = (props: HobbyItemProps) => {
  const { passion, hobby, createdAt } = props.hobby
  const { isLoading } = props

  return (
    <>
      <td>{passion}</td>
      <td>{hobby}</td>
      <td>{new Date(createdAt).getFullYear()}</td>
      <td>
        <WrapIcon disabled={isLoading} type="button" onClick={props.onDeleted}>
          <i className="fa fa-trash-o" />
        </WrapIcon>
      </td>
    </>
  )
}

export default HobbyItem
