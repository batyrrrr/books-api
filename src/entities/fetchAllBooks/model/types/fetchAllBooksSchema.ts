import { EntityState } from "@reduxjs/toolkit"
import { Book, CategoryKinds, SortKinds } from "./fetchBooks"

export interface BooksSchema extends EntityState<Book> {
  isLoading?: boolean
  error?: string
  pages?: number
  category?: CategoryKinds
  sort?: SortKinds
  startIndex?: number
  searchText?: string
  search?: string
  hasMore?: boolean
  _inited: boolean
}

export interface BookDetailsSchema {
  isLoading?: boolean
  error?: string
  data?: Book
}