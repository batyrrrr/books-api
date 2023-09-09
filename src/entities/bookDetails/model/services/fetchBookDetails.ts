import { Book } from "@/entities/fetchAllBooks"
import { ThunkConfig } from "@/providers/store-provider"
import { createAsyncThunk } from "@reduxjs/toolkit"


export const fetchBookDetails = createAsyncThunk<Book, string, ThunkConfig<string>>('bookDetails/fetchBookDetails', async (bookId, thunkApi) => {

  const { extra, rejectWithValue } = thunkApi

  try {
    const response = await extra.api.get<Book>(`/volumes/${bookId}`)

    if (!response.data) {
      return rejectWithValue('Ошибка при получении данных книги')
    }
    return response.data

  } catch (error) {
    console.log(error)
    return rejectWithValue('Ошибка при получении данных книги')
  }
})