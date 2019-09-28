import styled from 'styled-components'

const SelectWrap = styled.div`
  border-radius: 2px;
  color: ${props => props.theme.input.color};
  background-color: rgba(255, 255, 255, 0.15);
  // General Styles Input
  select {
    color: inherit;
    width: 100%;
  }
  option {
    background-color: ${props => props.theme.colors.brand};
  }
`

export default SelectWrap
