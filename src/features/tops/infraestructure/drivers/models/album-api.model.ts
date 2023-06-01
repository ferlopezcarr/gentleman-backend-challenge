import { notUndefinedOrNull } from "@core/domain/services";

export class AlbumApi {
  private category: string;
  private description: string;
  private creationDate: Date;
  private singer: string;
  private listens: number;

  constructor(
    category: string,
    description: string,
    creationDate: Date,
    singer: string,
    listens: number,
  ) {
    this.category = notUndefinedOrNull(category);
    this.description = notUndefinedOrNull(description);
    this.creationDate = notUndefinedOrNull(creationDate);
    this.singer = notUndefinedOrNull(singer);
    this.listens = notUndefinedOrNull(listens);
  }

  public getCategory(): string {
    return this.category;
  }

  public getDescription(): string {
    return this.description;
  }

  public getCreationDate(): Date {
    return this.creationDate;
  }

  public getSinger(): string {
    return this.singer;
  }

  public getListens(): number {
    return this.listens;
  }
}
