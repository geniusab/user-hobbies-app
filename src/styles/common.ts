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
  // Forms
  // ==========================================================================

  // Text Inputs + Textarea
  input {
    padding: 0px 8px;
    height: 3rem;
    font-size: 1rem;
    background: none;
    border: none;
    border-bottom: 0;
    border-radius: 0;
    outline: none;
    // box-sizing: content-box;
    box-sizing: border-box;
    line-height: 1.1875em;
    font-family: inherit;
    &[type='date'] {
      padding: 0.8rem 1rem;
    }
  }
  select {
    padding: 0 8px;
    width: 100%;
    height: 3rem;
    background-color: transparent;
    box-sizing: content-box;
    -webkit-tap-highlight-color: transparent;
    border: none;
    outline: none;
    vertical-align: middle;
    text-transform: capitalize;
  }
`
