export class MinLengthExceededException extends Error {
  constructor(minLength: number) {
    super(`Invalid length, length must be at least ${minLength}`);
  }
}

export class MaxLengthExceededException extends Error {
  constructor(maxLength: number) {
    super(`Invalid length, length must be at most ${maxLength}`);
  }
}