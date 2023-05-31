import { AlbumRepository } from "../models/album-repository.model";

export interface TopRepositoryPort {
  getTopAlbums(topNumber: number): Promise<AlbumRepository[]>;
}
