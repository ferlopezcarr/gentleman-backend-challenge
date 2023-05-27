import { Application } from "express";
import { GetTop10UseCase } from "./application/user-case/get-top-10.use-case";
import { TopApiAdapter } from "./infraestructure/drivers/adapters/top-api.adapter";
import { TopRepositoryAdapter } from "./infraestructure/drivens/adapters/top-repository.adapter";

export class TopControlPlane {
  constructor(private app: Application) {
    // Driven Adapters
    const albumRepositoryAdapter = new TopRepositoryAdapter();

    // Use Case
    const getTop10UseCase = new GetTop10UseCase(albumRepositoryAdapter);

    // Drivers Adapters
    new TopApiAdapter(this.app, getTop10UseCase);
  }
}
