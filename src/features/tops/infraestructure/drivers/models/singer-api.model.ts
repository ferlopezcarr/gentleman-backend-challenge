import { notUndefinedOrNull } from "@core/domain/services";
import { SingerNameApi } from "./singer-name-api.model";

export class SingerApi {
  private name: SingerNameApi;

  constructor(name: SingerNameApi) {
    this.name = notUndefinedOrNull(name);
  }

  public getName(): SingerNameApi {
    return this.name;
  }
}
