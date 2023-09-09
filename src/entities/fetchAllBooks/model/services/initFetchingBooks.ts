import { ThunkConfig } from "@/providers/store-provider";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getInited } from "../selectors/booksSelector";
import { fetchAllBooks } from "./fetchAllBooks";


export const initFetchingBooks = createAsyncThunk<void, void, ThunkConfig<string>>('fetchBooks/initFetchingBooks', async (_, thunkApi) => {
  const { dispatch, getState } = thunkApi
  const inited = getInited(getState())
  if (!inited) {
    dispatch(fetchAllBooks({}))
  }
})