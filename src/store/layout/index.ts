import { Reducer } from 'redux'
import { LayoutState, LayoutActionTypes } from './types'

// Type-safe initialState!
export const initialState: LayoutState = {
  theme: 'light',
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<LayoutState> = (state = initialState, action) => {
  switch (action.type) {
    case LayoutActionTypes.SET_THEME: {
      console.log(action.payload)
      return { ...state, theme: action.payload }
    }
    default: {
      return state
    }
  }
}

export default reducer
