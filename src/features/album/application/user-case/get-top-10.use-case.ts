import { AlbumRepositoryPort } from "../../infraestructure/drivens/ports/album-repository.port";

export class GetTop10UseCase {
    constructor(
      private albumRepository: AlbumRepositoryPort,
    ) {
    }

    async execute(): Promise<Object[]> {
      return this.albumRepository.getTop10();
    }
}	