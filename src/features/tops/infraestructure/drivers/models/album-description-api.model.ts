import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class AlbumDescriptionApi {
  private description: string;

  constructor(description: string) {
    notUndefinedOrNull(description);
    this.description = notEmptyString(description);
  }

  public getDescription(): string {
    return this.description;
  }
}
