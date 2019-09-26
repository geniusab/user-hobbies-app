import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  colors: {
    white: '#000',
    body: '#fff',
    font: '#1a1a1a',

    brand: '#ebebea',

    borders: '#333',
    tableOdd: '#e5e5e3',
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
    background: '#1a1a1a',
    fontSize: '16px',
    marginBottom: '8px',
    color: '#e5e5e3',
    borderBottom: '1px solid #ebebea',
  },
}

export default lightTheme
