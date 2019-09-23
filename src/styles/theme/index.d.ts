// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface Theme {
    colors: {
      white: string
      body: string
      font: string
      brand: string

      tableOdd: string
      borders: string
    }
    breakpoints: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
  }
}
