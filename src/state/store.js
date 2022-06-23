import { configureStore } from '@reduxjs/toolkit'

import { ColumnApi } from './api-slices/column-api.slice'
import { CardApi } from './api-slices/card-api.slice'

export const store = configureStore({
  reducer: {
    [ColumnApi.reducerPath]: ColumnApi.reducer,
    [CardApi.reducerPath]: CardApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ColumnApi.middleware)
      .concat(CardApi.middleware),
})
