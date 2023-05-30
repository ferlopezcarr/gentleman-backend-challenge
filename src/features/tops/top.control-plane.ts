import { Application } from "express";
import { GetTopAlbumUseCase } from "./application/user-case/get-top-album.use-case";
import { TopApiAdapter } from "./infraestructure/drivers/adapters/top-api.adapter";
import { TopRepositoryAdapter } from "./infraestructure/drivens/adapters/top-repository.adapter";

export class TopControlPlane {
  constructor(private app: Application) {
    // Driven Adapters
    const albumRepositoryAdapter = new TopRepositoryAdapter();

    // Use Case
    const getTopAlbumUseCase = new GetTopAlbumUseCase(albumRepositoryAdapter);

    // Drivers Adapters
    new TopApiAdapter(this.app, getTopAlbumUseCase);
  }
}
