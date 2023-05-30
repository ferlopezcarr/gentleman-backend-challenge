import { notEmptyString, notUndefinedOrNull } from "@core/domain/services";

export class AlbumCategory {
  private category: string;

  constructor(category: string) {
    notUndefinedOrNull(category);
    this.category = notEmptyString(category);
  }

  public getCategory(): string {
    return this.category;
  }
}
