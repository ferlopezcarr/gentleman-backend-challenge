import { TopNumber } from "../../../domain/models/top-number.model";
import { AlbumRepository } from "../models/album-repository.model";

export interface TopRepositoryPort {
  getTopAlbums(topNumber: TopNumber): Promise<AlbumRepository[]>;
}
