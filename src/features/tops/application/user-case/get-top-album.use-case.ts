import { TopNumber } from "../../domain/models/top-number.model";
import { TopRepositoryPort } from "../../infraestructure/drivens/ports/top-repository.port";

export class GetTopAlbumUseCase {
  constructor(private topRepositoryPort: TopRepositoryPort) {}

  async execute(topNumber: TopNumber): Promise<Object[]> {
    return this.topRepositoryPort.getTopAlbums(topNumber);
  }
}
