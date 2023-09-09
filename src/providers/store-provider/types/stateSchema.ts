import { BookDetailsSchema, BooksSchema } from "@/entities/fetchAllBooks/model/types/fetchAllBooksSchema"

export interface StateSchema {
  books: BooksSchema
  bookDetails: BookDetailsSchema
}