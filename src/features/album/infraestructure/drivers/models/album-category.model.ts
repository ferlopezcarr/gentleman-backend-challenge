import { notUndefinedOrNull } from "@core/infraestructure/errors/field-not-provided.validator.service";

export class AlbumCategory {
  private category: string;

  constructor(category: string) {
    notUndefinedOrNull(category);
    // validate empty string
    this.category = category;
  }

  public getCategory(): string {
    return this.category;
  }
}