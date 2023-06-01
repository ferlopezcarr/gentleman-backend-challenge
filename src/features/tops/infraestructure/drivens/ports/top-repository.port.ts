import { AlbumRepository } from "../models/album-repository.model";

export interface TopRepositoryPort {
  getAlbums(): Promise<AlbumRepository[]>;
}
