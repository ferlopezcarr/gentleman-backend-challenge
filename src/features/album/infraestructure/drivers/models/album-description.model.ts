import { notUndefinedOrNull } from "@core/infraestructure/errors/field-not-provided.validator.service";

export class AlbumDescription {
  private description: string;

  constructor(description: string) {
    notUndefinedOrNull(description);
    // validate empty string
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }
}