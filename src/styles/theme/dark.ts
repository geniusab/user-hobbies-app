import { DefaultTheme } from 'styled-components'

const lightTheme: DefaultTheme = {
  colors: {
    body: '#212121', // wrap color
    brand: '#333333', // inner color
    danger: '#f44336', // red color
    green: '#61b25a',

    white: '#fff',

    font: '#999',

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
    background: '#999',
    color: '#fff',
    borderBottom: '1px solid #3b3b38',
  },
}

export default lightTheme
