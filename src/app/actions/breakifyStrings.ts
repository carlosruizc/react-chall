import { Dispatch } from "redux"
import { handleBreakify } from "../../Views/Breakify/components/utils/functions"
import { BreakifyResult } from "../../Views/Breakify/components/utils/functions"

export interface breakifyStringAction {
  type: "BREAKIFY_SUCCESS"
  payload: BreakifyResult
}

export const breakifyStrings = (inputs: string[]) => (dispatch: Dispatch) => {
  const results = inputs.map(input => handleBreakify(input))
  dispatch({ type: "BREAKIFY_SUCCESS", payload: results })
}
