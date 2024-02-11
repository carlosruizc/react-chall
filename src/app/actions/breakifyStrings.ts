import type { Dispatch } from "redux"
import type { BreakifyResult } from "../../Views/Breakify/components/utils/functions"
import { handleBreakify } from "../../Views/Breakify/components/utils/functions"

export interface BreakifySuccessAction {
  type: "BREAKIFY_SUCCESS"
  payload: BreakifyResult[]
}

export const breakifyStrings =
  (inputs: string[]) => (dispatch: Dispatch<BreakifySuccessAction>) => {
    const results = inputs.map(input => handleBreakify(input))
    dispatch({
      type: "BREAKIFY_SUCCESS",
      payload: results,
    })
  }
