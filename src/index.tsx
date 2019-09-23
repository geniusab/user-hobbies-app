import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { GlobalStyle } from './styles'
import * as themes from './styles/theme'

import { ThemeProvider } from 'styled-components'
import ThemLayout from './containers/ThemLayout'

const Root = () => {
  return (
    <Provider store={store}>
      <ThemLayout>
        {({ theme }) => (
          <ThemeProvider theme={themes[theme]}>
            <>
              <GlobalStyle />
              <App />
            </>
          </ThemeProvider>
        )}
      </ThemLayout>
    </Provider>
  )
}
render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
