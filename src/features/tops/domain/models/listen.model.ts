import {
  isIntegerNumber,
  minNumber,
  notUndefinedOrNull,
} from "@core/domain/services";

export class Listen {
  private static readonly MIN_LISTEN = 0;

  private listen: number;

  constructor(listen: number) {
    notUndefinedOrNull(listen);
    isIntegerNumber(listen);
    this.listen = minNumber(listen, Listen.MIN_LISTEN);
  }

  public getListen(): number {
    return this.listen;
  }
}
