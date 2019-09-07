import React, { FunctionComponent } from 'react'
import './styles.scss'
import Hobby from '../../interfaces/Hobby.interface'

type HobbyItemProps = {
  hobby: Hobby
  // selected: any
  // onDeleted: (event: React.MouseEvent) => void
  // onSelected: (event: React.MouseEvent) => void
}

const HobbyItem: FunctionComponent<HobbyItemProps> = (props: HobbyItemProps) => {
  const { passion, hobby, year } = props.hobby
  let classNames = 'item-label'
  return (
    <div className="user-item">
      <span className={classNames}>{passion}</span>
      <span className={classNames}>{hobby}</span>
      <span className={classNames}>
        {year.toLocaleString('ru', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })}
      </span>
      <button type="button" className="btn btn-danger">
        <i className="fa fa-trash-o" />
      </button>
    </div>
  )
}

export default HobbyItem
