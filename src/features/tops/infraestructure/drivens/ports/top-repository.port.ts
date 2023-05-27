import { AlbumRepository } from "../models/album-repository.model";

export interface TopRepositoryPort {
  getTop10Albums(topNumber: number): Promise<AlbumRepository[]>;
}
