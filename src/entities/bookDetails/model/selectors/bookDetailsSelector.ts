import { StateSchema } from "@/providers/store-provider";

export const bookDetailsIsLoading = ((state: StateSchema) => state.bookDetails.isLoading)
export const bookDetailsError = ((state: StateSchema) => state.bookDetails.error)
export const bookDetailsData = ((state: StateSchema) => state.bookDetails.data)