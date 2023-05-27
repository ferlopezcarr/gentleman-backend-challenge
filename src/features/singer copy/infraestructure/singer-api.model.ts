import { notUndefinedOrNull } from "@core/infraestructure/errors/field-not-provided.validator.service";
import { SingerNameApi } from "./model/singer-name-api.model";

export class SingerApi {
  private name: SingerNameApi;

  constructor(name: SingerNameApi) {
    notUndefinedOrNull(name)
    this.name = name;
  }

  public getName(): SingerNameApi {
    return this.name;
  }
}