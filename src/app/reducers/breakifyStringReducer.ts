import { breakifyStringAction } from "../actions/breakifyStrings"

interface BreakifyState {
  identifiedElement: string[][]
  substringsArray: string[][][]
}

const initialState: BreakifyState = {
  identifiedElement: [],
  substringsArray: [[]],
}

export const breakifyStringReducer = (
  state: BreakifyState = initialState,
  action: breakifyStringAction,
): BreakifyState => {
  switch (action.type) {
    case "BREAKIFY_SUCCESS": {
      const payload = action.payload
      if (Array.isArray(payload)) {
        return {
          ...state,
          identifiedElement: payload.map(result => result.identifiedElement),
          substringsArray: payload.map(result => result.substringsArray),
        }
      }
      return state
    }

    default:
      return state
  }
}
