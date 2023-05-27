import { FieldNotProvidedException } from "./field-not-provided.exception";

export const notUndefinedOrNull = <T>(field: T | undefined | null): T => {
  if (field === undefined || field === null) {
    throw new FieldNotProvidedException();
  }
  return field;
}