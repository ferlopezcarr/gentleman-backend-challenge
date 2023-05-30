import { notUndefinedOrNull } from "@core/domain/services/field-not-provided-validator.service";

import { AlbumCategory } from "./album-category.model";
import { AlbumDescription } from "./album-description.model";
import { Listen } from "./listen.model";
import { Singer } from "./singer.model";

export class Album {
  private category: AlbumCategory;
  private description: AlbumDescription;
  private creationDate: Date;
  private singer: Singer;
  private listens: Listen;

  constructor(
    category: AlbumCategory,
    description: AlbumDescription,
    creationDate: Date,
    singer: Singer,
    listens: Listen,
  ) {
    this.category = notUndefinedOrNull(category);
    this.description = notUndefinedOrNull(description);
    this.creationDate = notUndefinedOrNull(creationDate);
    this.singer = notUndefinedOrNull(singer);
    this.listens = notUndefinedOrNull(listens);
  }

  getCategory(): AlbumCategory {
    return this.category;
  }

  getDescription(): AlbumDescription {
    return this.description;
  }

  getCreationDate(): Date {
    return this.creationDate;
  }

  getSinger(): Singer {
    return this.singer;
  }

  getListens(): Listen {
    return this.listens;
  }
}
