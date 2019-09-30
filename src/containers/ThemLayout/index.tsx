import React from 'react'
import { ThemeColors } from '../../store/layout/types'
import { useDispatch, useSelector } from 'react-redux'
import * as layoutActions from '../../store/layout/actions'

// Redux-specific props.
type LayoutContainerProps = {
  theme: ThemeColors
  setTheme: (theme: ThemeColors) => void
}

// Wrapper props for render/children callback.
type LayoutContainerRenderProps = {
  render?: (props: LayoutContainerProps) => React.ReactElement
  children?: (props: LayoutContainerProps) => React.ReactElement
}

const ThemLayout: React.FC<LayoutContainerRenderProps> = ({ render, children }) => {
  // We can use Hooks to call in our selector/dispatch functions.
  const { theme } = useSelector((state: any) => state.layout)
  const dispatch = useDispatch()

  // Create the `setTheme` handler. We use the `dispatch` we got from `useDispatch()` to create said selector.
  const setTheme = (color: ThemeColors) => dispatch(layoutActions.setTheme(color))

  // Create a render/children props wrapper with the above variables set as a callback.
  if (render) {
    return render({ theme, setTheme })
  }

  if (children) {
    return children({ theme, setTheme })
  }

  return null
}

export default ThemLayout
