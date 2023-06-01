import { notUndefinedOrNull } from "@core/domain/services";
import { Album } from "../../domain/models";
import { TopNumber } from "../../domain/models/top-number.model";
import { TopRepositoryPort } from "../../infraestructure/drivens/ports/top-repository.port";
import { createAlbumFromRepositoryEntity } from "../services/album-factory.service";
import { sortAlbumsByTopListens } from "../services/album.service";

export class GetTopAlbumsUseCase {
  constructor(private topRepositoryPort: TopRepositoryPort) {}

  async execute(topNumber: TopNumber): Promise<Album[]> {
    notUndefinedOrNull(topNumber);

    let albumsFromRepository = (await this.topRepositoryPort.getAlbums()).map(
      (albumFromRepositoryTemp) =>
        createAlbumFromRepositoryEntity(albumFromRepositoryTemp)
    );
    if (!albumsFromRepository) {
      return [];
    }

    // Sort by top listens
    albumsFromRepository = sortAlbumsByTopListens(albumsFromRepository);

    const maxTopNumber =
      topNumber.getTopNumber() > albumsFromRepository.length
        ? albumsFromRepository.length
        : topNumber.getTopNumber();

    return albumsFromRepository.slice(0, maxTopNumber);
  }
}
