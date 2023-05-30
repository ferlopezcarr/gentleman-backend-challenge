export class EmptyStringException extends Error {
  constructor() {
    super("Field cannot be empty");
  }
}