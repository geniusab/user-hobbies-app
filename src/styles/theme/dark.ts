import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  colors: {
    white: '#fff',
    body: '#121212',
    font: '#999',

    brand: '#333333',

    borders: '#7d7e7f',
    tableOdd: '#3b3b38',
  },

  widths: {
    xl: '1140px',
  },

  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },

  // 10. Forms
  // ==========================================================================

  // Text Inputs + Textarea
  input: {
    height: '1.1875em',
    background: '#999',
    fontSize: '16px',
    marginBottom: '8px',
    color: '#222',
    borderBottom: '1px solid #3b3b38',
  },
}

export default lightTheme
