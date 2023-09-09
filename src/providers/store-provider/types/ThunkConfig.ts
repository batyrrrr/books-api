import { ExtraRg } from "./extraArg"
import { StateSchema } from "./stateSchema"

export type ThunkConfig<T> = {
  rejectValue: T
  extra: ExtraRg,
  state: StateSchema
}