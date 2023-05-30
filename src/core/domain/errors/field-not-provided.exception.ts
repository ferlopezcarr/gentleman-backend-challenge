export class FieldNotProvidedException extends Error {
  constructor() {
    super("Field not provided");
  }
}