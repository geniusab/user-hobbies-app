import React, { FunctionComponent } from 'react'
import User from '../../interfaces/User.interface'
import styled from 'styled-components'

type UserItemProps = {
  user: User
  selected: string | number
  onDeleted: (event: React.MouseEvent) => void
  onSelected: (event: React.MouseEvent) => void
  loading: boolean
}
interface Props {
  selected?: boolean
}

const UserItem: FunctionComponent<UserItemProps> = (props: UserItemProps) => {
  const { user, onDeleted, onSelected, selected, loading } = props

  return (
    <UserWrap>
      <UserName selected={selected === user.id} onClick={onSelected}>
        {' '}
        {user.name}
      </UserName>
      <Button type="button" disabled={loading} onClick={onDeleted} className="btn btn-danger">
        <i className="fa fa-trash-o" />
      </Button>
    </UserWrap>
  )
}

export default UserItem

const UserWrap = styled('div')`
  display: flex;
  margin-bottom: 8px;
`

const UserName = styled('span')`
  height: 48px;
  font-family: inherit;
  font-size: 1.125rem;
  line-height: 36px;
  color: #999;
  background: ${(props: Props) => (props.selected ? '#333' : 'white')};
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: keep-all;
  padding: 0 8px;
  margin-right: 8px;
  transition: background-color ease-in 0.15s, ease-out color 0.1s;
  border-bottom: 1px solid ${props => props.theme.colors.borders};
`

const Button = styled('button')`
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};
  &:disabled {
    opacity: 0.25;
  }
  &:hover,
  &:focus {
    background-color: #333;
    color: ${props => props.theme.colors.white};
    i {
      color: ${props => props.theme.colors.brand};
    }
  }
`
