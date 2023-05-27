import { Application, Request, Response } from 'express';
import { Routes } from "../../../../../core/routes/routes";
import { GetTop10UseCase } from "../../../application/user-case/get-top-10.use-case";
import { AlbumApiPort } from "../ports/album-api.port";
import { AlbumControlPlane } from '../../../album.control-plane';

export class AlbumApiAdapter extends Routes implements AlbumApiPort {

  static readonly ROUTE = "album";

  constructor(
    private app: Application,
    private getTop10UseCase: GetTop10UseCase
  ) {
    super(AlbumApiAdapter.ROUTE);
    this.app.get(`${this.route}/top10`, this.getAlbumTop10.bind(this));
  }

  async getAlbumTop10(request: Request, response: Response) {    
    this.getTop10UseCase.execute().then((albums) => {
      response.json(albums);
    });
  }

}