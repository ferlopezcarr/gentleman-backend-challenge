export class NotNumberException extends Error {
  constructor() {
    super("Not a number");
  }
}

export class NotIntegerNumberException extends Error {
  constructor() {
    super("Not an integer number");
  }
}

export class NotFloatNumberException extends Error {
  constructor() {
    super("Not a float number");
  }
}

export class NotNaturalNumberException extends Error {
  constructor() {
    super("Not a natural number");
  }
}

export class InvalidMinNumberException extends Error {
  constructor(readonly min: number) {
    super(`"Invalid value, value must be at least ${min}`);
  }
}

export class InvalidMaxNumberException extends Error {
  constructor(readonly max: number) {
    super(`Invalid value, value must be at most ${max}`);
  }
}