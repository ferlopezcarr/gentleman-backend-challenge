import { notUndefinedOrNull } from "@core/infraestructure/errors/field-not-provided.validator.service";

export class ListenApi {
  private listen: number;

  constructor(listen: number) {
    notUndefinedOrNull(listen);
    if (!Number.isSafeInteger(listen) || listen < 0) {
      // custom error
      throw new Error("Listen must be a positive integer");
    }
    this.listen = listen;
  }

  public getListen(): number {
    return this.listen;
  }
}
