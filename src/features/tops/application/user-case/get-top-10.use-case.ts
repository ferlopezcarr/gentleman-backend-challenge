import { TopRepositoryPort } from "../../infraestructure/drivens/ports/top-repository.port";

export class GetTop10UseCase {
  constructor(private topRepositoryPort: TopRepositoryPort) {}

  async execute(topNumber: number): Promise<Object[]> {
    return this.topRepositoryPort.getTop10Albums(topNumber);
  }
}
