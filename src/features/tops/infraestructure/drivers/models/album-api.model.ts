import { notUndefinedOrNull } from "@core/domain/services";

import { AlbumCategoryApi } from "./album-category-api.model";
import { AlbumDescriptionApi } from "./album-description-api.model";
import { ListenApi } from "./listen-api.model";
import { SingerApi } from "./singer-api.model";

export class AlbumApi {
  private category: AlbumCategoryApi;
  private description: AlbumDescriptionApi;
  private creationDate: Date;
  private singer: SingerApi;
  private listens: ListenApi;

  constructor(
    category: AlbumCategoryApi,
    description: AlbumDescriptionApi,
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

  getCategory(): AlbumCategoryApi {
    return this.category;
  }

  getDescription(): AlbumDescriptionApi {
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
