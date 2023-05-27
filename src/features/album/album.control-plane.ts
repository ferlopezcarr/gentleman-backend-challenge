import { Application } from "express";
import { GetTop10UseCase } from "./application/user-case/get-top-10.use-case";
import { AlbumApiAdapter } from "./infraestructure/drivers/adapters/album-api.adapter";
import { AlbumRepositoryAdapter } from "./infraestructure/drivens/adapters/album-repository.adapter";

export class AlbumControlPlane {
    constructor(
        private app: Application,
    ) {
        // Driven Adapters
        const albumRepositoryAdapter = new AlbumRepositoryAdapter();

        // Use Case
        const getTop10UseCase = new GetTop10UseCase(albumRepositoryAdapter);

        // Drivers Adapters
        new AlbumApiAdapter(this.app, getTop10UseCase);
    }
}