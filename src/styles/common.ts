import { css } from 'styled-components'

export default css`
  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    background: ${props => props.theme.colors.body};
    color: ${props => props.theme.colors.font};
  }
  table {
    width: 100%;
    font-size: 85%;
    border-collapse: collapse;
  }
`
