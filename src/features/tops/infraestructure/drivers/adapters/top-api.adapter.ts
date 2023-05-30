import { notUndefinedOrNull } from "@core/domain/services/field-not-provided-validator.service";
import { RouterPort } from "@core/infraestructure/drivers/ports/router.port";
import { Application, Request, Response } from "express";
import { GetTopAlbumUseCase } from "../../../application/user-case/get-top-album.use-case";
import { TopApiPort } from "../ports/top-api.port";
import { TopNumber } from "../../../domain/models/top-number.model";

export class TopApiAdapter extends RouterPort implements TopApiPort {
  private readonly ROUTE = "top";
  private readonly ALBUM_ROUTE = "album";

  constructor(
    private app: Application,
    private getTopUseCase: GetTopAlbumUseCase
  ) {
    super();
    const route = this.getApiPath(this.ROUTE);

    // TOP N Albums
    this.app.get(
      `${route}/:topNumber/${this.ALBUM_ROUTE}`,
      this.getTopAlbums.bind(this)
    );
  }

  async getTopAlbums(request: Request, response: Response) {
    let topNumber: TopNumber;
    try {
      topNumber = this.getTopNumber(request.params?.topNumber);
    } catch (error) {
      return response.status(400).json(error);
    }

    try {
      const topAlbums = await this.getTopUseCase.execute(topNumber);
      response.json(topAlbums);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  private getTopNumber(topNumberParam: string): TopNumber {
    return new TopNumber(Number.parseInt(notUndefinedOrNull(topNumberParam)));
  }
}
