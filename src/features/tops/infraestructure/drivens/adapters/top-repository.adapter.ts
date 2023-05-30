import { AlbumRepository } from "../models/album-repository.model";
import { TopRepositoryPort } from "../ports/top-repository.port";

export class TopRepositoryAdapter implements TopRepositoryPort {
  static readonly DEFAULT_TOP = 10;

  private albumsRepository: AlbumRepository[] = [];

  constructor() {}

  async getTopAlbums(): Promise<AlbumRepository[]> {
    if (!this.albumsRepository) {
      return Promise.resolve([]);
    }

    this.albumsRepository.sort((a, b) => a.listens - b.listens);
    return Promise.resolve(
      this.albumsRepository.slice(0, TopRepositoryAdapter.DEFAULT_TOP)
    );
  }
}
