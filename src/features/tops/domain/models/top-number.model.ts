import { isNaturalNumber, notUndefinedOrNull } from "@core/domain/services";

export class TopNumber {
  private topNumber: number;

  constructor(topNumber: number) {
    notUndefinedOrNull(topNumber);
    this.topNumber = isNaturalNumber(topNumber);
  }

  getTopNumber(): number {
    return this.topNumber;
  }
}
