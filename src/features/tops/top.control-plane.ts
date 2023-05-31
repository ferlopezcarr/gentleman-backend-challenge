import { Application } from "express";
import { GetTopAlbumsUseCase } from "./application/user-case/get-top-albums.use-case";
import { TopRepositoryAdapter } from "./infraestructure/drivens/adapters/top-repository.adapter";
import { TopApiAdapter } from "./infraestructure/drivers/adapters/top-api.adapter";
import { ControlPlane } from "@core/control-plane";

export class TopControlPlane extends ControlPlane {
  constructor(readonly app: Application) {
    super(app);

    // Driven Adapters
    const albumRepositoryAdapter = new TopRepositoryAdapter();

    // Use Case
    const getTopAlbumsUseCase = new GetTopAlbumsUseCase(albumRepositoryAdapter);

    // Drivers Adapters
    this.router = new TopApiAdapter(app, getTopAlbumsUseCase);
  }
}
