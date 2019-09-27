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
  selected?: boolean | string
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
  cursor: pointer;
  height: 48px;
  font-family: inherit;
  font-size: 1.125rem;
  line-height: 36px;
  color: #999;
  background: ${(props: Props) => (props.selected ? 'red' : 'blue')};
  width: 150px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: keep-all;
  padding: 0 8px;
  margin-right: 8px;
  //transition: background-color ease-in 0.15s, ease-out color 0.1s;
  border-bottom: 1px solid ${props => props.theme.colors.borders};
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const Button = styled('button')`
  display: inline-block;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};
  padding: 0.25rem 0.5rem;
  border: 1px solid ${props => props.theme.colors.brand};
  border-radius: 3px;
  &:disabled {
    opacity: 0.87;
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
