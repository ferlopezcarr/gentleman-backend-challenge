import { notUndefinedOrNull } from "@core/domain/services";
import { SingerName } from "./singer-name.model";

export class Singer {
  private name: SingerName;

  constructor(name: SingerName) {
    this.name = notUndefinedOrNull(name);
  }

  public getName(): SingerName {
    return this.name;
  }
}
