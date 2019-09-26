import styled from 'styled-components'

export const Input = styled.input`
  // General Styles
  color: ${props => props.theme.input.color};
  background: none;
  border: none;
  border-bottom: 0;
  border-radius: 0;
  outline: none;
  height: ${props => props.theme.input.height};
  width: 100%;
  font-size: ${props => props.theme.input.fontSize};
  margin: ${props => props.theme.input.margin};
  border-bottom: ${props => props.theme.input.borderBottom};
  box-shadow: none;
  box-sizing: content-box;
  transition: box-shadow 0.3s, border 0.3s;
  line-height: 1.1875em;
  font-family: inherit;
  padding: 6px 8px 7px;
  &:focus {
    transition: width 0.3s;
    width: 120%;
  }
`

export const InputWrap = styled.div`
  border-radius: 4px;

  background-color: rgba(255, 255, 255, 0.15);
`
