import React, { FunctionComponent } from 'react'
import './styles.scss'
import Hobby from '../../interfaces/Hobby.interface'

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
        <button type="button" className="btn btn-danger" onClick={props.onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </td>
    </>
  )
}

export default HobbyItem
