import { Book, BookDetailsSchema } from "@/entities/fetchAllBooks";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchBookDetails } from "../services/fetchBookDetails";

const initialState: BookDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const BookDetailsSlice = createSlice({
  name: 'bookDetails',
  initialState,
  reducers: {

  },
  extraReducers: (builder) =>
    builder.addCase(fetchBookDetails.pending, (state) => {
      state.isLoading = true
      state.error = undefined
    })
      .addCase(fetchBookDetails.fulfilled, (state, action: PayloadAction<Book>) => {
        state.isLoading = false,
          state.data = action.payload
        state.error = undefined
      })
      .addCase(fetchBookDetails.rejected, (state, action) => {
        state.isLoading = false,
          state.error = action.payload
      })
})

export const { actions: BookDetailsActions } = BookDetailsSlice
export const { reducer: BookDetailsReducer } = BookDetailsSlice