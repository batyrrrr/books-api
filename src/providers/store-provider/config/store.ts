import { ReducersMapObject, configureStore } from "@reduxjs/toolkit"
import { ExtraRg, StateSchema } from '@/providers/store-provider';
import { BookDetailsReducer } from "@/entities/bookDetails";
import { $api } from "@/shared/api/api";
import { Booksreducer } from "@/entities/fetchAllBooks";
import { useDispatch } from "react-redux";

const rootReducer: ReducersMapObject<StateSchema> = {
  books: Booksreducer,
  bookDetails: BookDetailsReducer
}

const extraArg: ExtraRg = {
  api: $api
}


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: extraArg
    }

  })
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch