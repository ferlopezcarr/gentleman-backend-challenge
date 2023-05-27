import { AlbumRepository } from "../models/album-repository";
import { AlbumRepositoryPort } from "../ports/album-repository.port";
export class AlbumRepositoryAdapter implements AlbumRepositoryPort {
  static readonly DEFAULT_TOP = 10;

  private albumsRepository: AlbumRepository[] = [];

  constructor() {}

  async getTop10(): Promise<AlbumRepository[]> {
    if (!this.albumsRepository) {
      return Promise.resolve([]);
    }

    const top10Albums: AlbumRepository[] = [];

    for (let albumRepository of this.albumsRepository) {
      if (top10Albums.length < AlbumRepositoryAdapter.DEFAULT_TOP) {
        top10Albums.push(albumRepository);
      } else {
        const top10AlbumIndex = top10Albums.findIndex(
          (top10AlbumTemp) => top10AlbumTemp.listens < albumRepository.listens
        );
        if (top10AlbumIndex >= 0) {
          top10Albums[top10AlbumIndex] = albumRepository;
        }
      }
    }

    return Promise.resolve(top10Albums);
  }
}
