import React, { FunctionComponent } from 'react'
import Hobby from '../../interfaces/Hobby.interface'
import { WrapIcon } from '../../containers/shared'

type HobbyItemProps = {
  hobby: Hobby
  onDeleted: (event: React.MouseEvent) => void
}

const HobbyItem: FunctionComponent<HobbyItemProps> = (props: HobbyItemProps) => {
  const { passion, hobby, createdAt } = props.hobby

  let classNames = 'item-label'
  return (
    <>
      <td className={classNames}>{passion}</td>
      <td className={classNames}>{hobby}</td>
      <td className={classNames}>{new Date(createdAt).getFullYear()}</td>
      <td>
        <WrapIcon type="button" onClick={props.onDeleted}>
          <i className="fa fa-trash-o" />
        </WrapIcon>
      </td>
    </>
  )
}

export default HobbyItem
