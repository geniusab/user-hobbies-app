import styled from 'styled-components'

export const WrapList = styled.ul`
  max-height: 400px;
  overflow-y: auto;
  position: relative;
  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.borders};
  }
`
