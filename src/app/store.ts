import { configureStore } from "@reduxjs/toolkit"
import { breakifyStringReducer } from "./reducers/breakifyStringReducer"

const store = configureStore({
  reducer: {
    // @ts-ignore
    breakifyString: breakifyStringReducer,
  },
})

export type AppStore = typeof store

export type RootState = {
  breakifyString: ReturnType<typeof breakifyStringReducer>
}
export type AppDispatch = AppStore["dispatch"]

export default store
