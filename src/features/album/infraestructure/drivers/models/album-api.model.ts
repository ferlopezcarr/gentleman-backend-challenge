import { notUndefinedOrNull } from "@core/infraestructure/errors/field-not-provided.validator.service";

import { AlbumCategory } from "./album-category.model";
import { AlbumDescription } from "./album-description.model";
import { ListenApi } from "./listen-api.model";
import { SingerApi } from "../../../../singer copy/infraestructure/singer-api.model";

export class AlbumApi {
  private category: AlbumCategory;
  private description: AlbumDescription;
  private creationDate: Date;
  private singer: SingerApi;
  private listens: ListenApi;

  constructor(
    category: AlbumCategory,
    description: AlbumDescription,
    creationDate: Date,
    singer: SingerApi,
    listens: ListenApi,
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

  getSinger(): SingerApi {
    return this.singer;
  }

  getListens(): ListenApi {
    return this.listens;
  }
}
