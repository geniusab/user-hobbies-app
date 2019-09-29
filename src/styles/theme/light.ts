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
    background: 'rgba(0, 0, 0, 0.15)',
    color: '#222',
    borderBottom: '1px solid #3b3b38',
  },
}

export default lightTheme
