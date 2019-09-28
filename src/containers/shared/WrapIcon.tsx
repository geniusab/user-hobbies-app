import styled from 'styled-components'

const WrapIcon = styled.button`
  cursor: pointer;
  background-color: ${props => props.theme.colors.brand};
  color: ${props => props.theme.colors.white};
  border-radius: 40px;
  padding: 8px;
  width: 40px;
  height: 40px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  outline: none;
  border: 0;
  overflow: hidden;
  transform: translate(0);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  i {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.brand};
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
`

export default WrapIcon
