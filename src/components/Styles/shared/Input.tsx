import styled from 'styled-components'

interface Props {
  one?: boolean
}

const InputWrap = styled.div<Props>`
  border-radius: 2px;
  color: ${props => (props.one ? props.theme.input.font : props.theme.input.color)};
  background-color: ${props => (props.one ? 'transparent' : props.theme.input.background)};
  color: ${props => props.theme.input.color};
  // General Styles Input
  input {
    color: inherit;
    width: 100%;
    border-bottom: ${props => (props.one ? '1px dotted #666' : 'none')};
  }
`
export default InputWrap
