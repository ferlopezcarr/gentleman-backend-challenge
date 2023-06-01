import albumData from "../../../../../data/album.json";
import { AlbumRepository } from "../models/album-repository.model";
import { TopRepositoryPort } from "../ports/top-repository.port";

export class TopRepositoryAdapter implements TopRepositoryPort {
  private albumsRepository: AlbumRepository[];

  constructor() {
    this.albumsRepository = albumData as unknown as AlbumRepository[];
  }

  async getAlbums(): Promise<AlbumRepository[]> {
    if (!this.albumsRepository) {
      return Promise.resolve([]);
    }
    return Promise.resolve(this.albumsRepository);
  }
}
