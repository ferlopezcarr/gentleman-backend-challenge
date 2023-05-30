import { EmptyStringException } from "../errors";

export const notEmptyString = (field: string): string => {
  if (field.length === 0) {
    throw new EmptyStringException();
  }
  return field;
}