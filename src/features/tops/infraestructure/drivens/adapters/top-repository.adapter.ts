import albumData from "../../../../../data/album.json";
import { AlbumRepository } from "../models/album-repository.model";
import { TopRepositoryPort } from "../ports/top-repository.port";

export class TopRepositoryAdapter implements TopRepositoryPort {
  private albumsRepository: AlbumRepository[];

  constructor() {
    this.albumsRepository = albumData as unknown as AlbumRepository[];
  }

  async getTopAlbums(topNumber: number): Promise<AlbumRepository[]> {
    if (!this.albumsRepository) {
      return Promise.resolve([]);
    }

    // Sort by top listens
    this.albumsRepository.sort((a, b) => b.listens - a.listens);

    const maxTopNumber =
      topNumber > this.albumsRepository.length
        ? this.albumsRepository.length
        : topNumber;
    return Promise.resolve(this.albumsRepository.slice(0, maxTopNumber));
  }
}
