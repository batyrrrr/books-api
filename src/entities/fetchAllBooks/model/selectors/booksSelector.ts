import { StateSchema } from "@/providers/store-provider";
import { CategoryKinds, SortKinds } from "../types/fetchBooks";

export const getBooksIsLoading = (state: StateSchema) => state.books.isLoading
export const getBooksError = (state: StateSchema) => state.books.error

// pagination
export const getPageNum = (state: StateSchema) => state.books.pages || 30
export const getStartIndex = (state: StateSchema) => state.books.startIndex || 0
export const getSort = (state: StateSchema) => state.books.sort || SortKinds.RELEVANCE
export const getCategory = (state: StateSchema) => state.books.category || CategoryKinds.COMPUTERS
export const getSearch = (state: StateSchema) => state.books.search || ''
export const getHasMore = (state: StateSchema) => state.books.hasMore
export const getInited = (state: StateSchema) => state.books._inited 
