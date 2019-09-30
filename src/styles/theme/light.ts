import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  colors: {
    body: '#fff', // wrap color
    brand: '#ebebea', // inner color
    danger: '#f44336', // red color
    green: '#61b25a',

    white: '#000',

    font: '#1a1a1a',

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

  // Forms
  // ==========================================================================

  // Text Inputs + Textarea
  input: {
    background: 'rgba(0, 0, 0, 0.15)',
    color: '#222',
    borderBottom: '1px solid #3b3b38',
  },
  button: {
    hover: '#b9b9b6', // color darken(brand, 20%)
  },
}

export default lightTheme
