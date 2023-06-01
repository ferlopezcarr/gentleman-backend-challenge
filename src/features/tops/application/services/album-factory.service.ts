import {
  Album,
  AlbumCategory,
  AlbumDescription,
  Listen,
  Singer,
  SingerName,
} from "../../domain/models";
import { AlbumRepository } from "../../infraestructure/drivens/models/album-repository.model";
import { AlbumApi } from "../../infraestructure/drivers/models/album-api.model";

export const createAlbumApiFromEntity = (albumRepository: Album) => {
  return new AlbumApi(
    albumRepository.getCategory().getCategory(),
    albumRepository.getDescription().getDescription(),
    albumRepository.getCreationDate(),
    albumRepository.getSinger().getName().getName(),
    albumRepository.getListens().getListen()
  );
};

export const createAlbumFromRepositoryEntity = (
  albumRepository: AlbumRepository
) => {
  return new Album(
    new AlbumCategory(albumRepository.category),
    new AlbumDescription(albumRepository.description),
    new Date(albumRepository.creationDate),
    new Singer(new SingerName(albumRepository.singer.name)),
    new Listen(albumRepository.listens)
  );
};
