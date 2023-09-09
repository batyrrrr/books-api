import { ThunkConfig } from "@/providers/store-provider"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Book, getCategory, getPageNum, getSearch, getSort, getStartIndex } from '@/entities/fetchAllBooks';

interface fetchAllBooksProps {
  replace?: boolean
}

export const fetchAllBooks = createAsyncThunk<Book[], fetchAllBooksProps, ThunkConfig<string>>('fetchBooks/fetchAllBooks', async (props, thunkApi) => {

  const { extra, rejectWithValue, getState } = thunkApi

  const category = getCategory(getState())
  const maxResults = getPageNum(getState())
  const sort = getSort(getState())
  const search = getSearch(getState())
  const startIndex = getStartIndex(getState())

  try {
    const response = await extra.api.get('/volumes', {
      params: {
        q: `${search}&subject/${category}`,
        startIndex,
        maxResults,
        orderBy: sort,
        printType: 'books'
      }
    })
    if (!response.data) {
      return rejectWithValue('Книги не найдены')
    }
    return response.data.items as Book[]

  } catch (error) {
    console.log(error)
    return rejectWithValue('Ошибка при получении книг')
  }
})