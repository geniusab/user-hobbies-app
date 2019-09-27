import styled from 'styled-components'

interface PropsButton {
  danger?: boolean
  primary?: boolean
  color?: string
}

const ButtonM = styled('button')`
  background-color: ${(props: PropsButton | any) => {
    switch (props.color) {
      case 'danger':
        return '#ab003c'
      case 'primary':
        return '#1769aa'
      default:
        return props.theme.colors.brand
    }
  }};
  color: ${props => props.theme.colors.white};
  text-transform: uppercase;
  box-sizing: border-box;
  position: relative;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border: none;
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  min-width: 64px;
  line-height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  overflow: visible;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.brand};
  }
`

export default ButtonM
