import { notUndefinedOrNull } from "@core/infraestructure/errors/field-not-provided.validator.service";

export class SingerNameApi {
  private name: string;

  constructor(name: string) {
    notUndefinedOrNull(name);
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
