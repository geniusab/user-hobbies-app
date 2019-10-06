import styled from 'styled-components'

export interface SelectedAttributeProps {
  selected?: boolean
}

export const UserWrap = styled('div')<SelectedAttributeProps>`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
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

export const UserName = styled('span')`
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

export const Button = styled('button')`
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
    opacity: 0.25;
  }
  &:hover,
  &:focus {
    background-color: ${props => props.theme.button.hover};

    color: ${props => props.theme.colors.brand};
    i {
      color: ${props => props.theme.colors.font};
    }
  }
`
