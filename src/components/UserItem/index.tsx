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

export interface SelectedAttributeProps {
  selected?: boolean
}

const UserItem: FunctionComponent<UserItemProps> = (props: UserItemProps) => {
  const { user, onDeleted, onSelected, selected, loading } = props

  return (
    <UserWrap selected={selected === user.id}>
      <UserName onClick={onSelected}>{user.name}</UserName>
      <Button type="button" disabled={loading} onClick={onDeleted} className="btn btn-danger">
        <i className="fa fa-trash-o" />
      </Button>
    </UserWrap>
  )
}

export default UserItem

const UserWrap = styled('div')<SelectedAttributeProps>`
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
  margin-top: 4px;
  margin-bottom: 4px;
  border-radius: 2px;
  overflow: hidden;
  padding: 0 8px;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  background-color: ${props => (props.selected ? props.theme.colors.borders : props.theme.colors.brand)};
  border-bottom: 1px solid ${props => (props.selected ? props.theme.colors.danger : props.theme.colors.borders)};
  color: ${props => (props.selected ? props.theme.colors.brand : props.theme.colors.white)};
  align-items: center;
  &:hover,
  &:focus {
    color: ${props => (props.selected ? props.theme.colors.font : props.theme.colors.white)};
    background-color: rgba(255, 255, 255, 0.1);
  }
`

const UserName = styled('span')`
  cursor: pointer;
  height: 48px;
  font-family: inherit;
  font-size: 1.125rem;
  display: flex;
  align-items: center;
  width: 220px;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: keep-all;
  padding: 0 8px;
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
      color: ${props => props.theme.colors.white};
    }
  }
`
