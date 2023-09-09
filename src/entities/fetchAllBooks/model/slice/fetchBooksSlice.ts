import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Book, CategoryKinds, SortKinds, } from "../types/fetchBooks";
import { StateSchema } from "@/providers/store-provider";
import { BooksSchema } from "../types/fetchAllBooksSchema";
import { fetchAllBooks } from '@/entities/fetchAllBooks';

const booksAdapter = createEntityAdapter<Book>({
  selectId: (book) => book.id
})

export const getBooksAdapter = booksAdapter.getSelectors<StateSchema>((state) => state.books || booksAdapter.getInitialState())

export const fetchBooksSlice = createSlice({
  name: 'fetchBooks',
  initialState: booksAdapter.getInitialState<BooksSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    // pagination
    pages: 30,
    sort: SortKinds.RELEVANCE,
    category: CategoryKinds.ALL,
    search: '',
    hasMore: true,
    startIndex: undefined,
    _inited: false
  }),
  reducers: {
    setSort: (state, action: PayloadAction<SortKinds>) => {
      state.sort = action.payload
    },
    setCategory: (state, action: PayloadAction<CategoryKinds>) => {
      state.category = action.payload
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.pages = action.payload
    },
    setStartIndex: (state, action: PayloadAction<number>) => {
      state.startIndex = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setInited: (state, action: PayloadAction<boolean>) => {
      state._inited = action.payload
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllBooks.pending, (state, action) => {
        state.isLoading = true
        if (action.meta.arg.replace) {
          booksAdapter.removeAll(state)
        }
      })
      .addCase(fetchAllBooks.fulfilled, (state, action) => {
        state.isLoading = false
        if (action.payload) {
          if (action.meta.arg.replace) {
            booksAdapter.setAll(state, action.payload)
          } else {
            booksAdapter.addMany(state, action.payload)
          }
          if (state.pages) {
            state.hasMore = action.payload.length >= state.pages
          }
        }

      })
      .addCase(fetchAllBooks.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
})

export const { actions: BooksActions } = fetchBooksSlice
export const { reducer: Booksreducer } = fetchBooksSlice