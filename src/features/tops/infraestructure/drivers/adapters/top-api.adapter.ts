import { notUndefinedOrNull } from "@core/infraestructure/errors/field-not-provided.validator.service";
import { Routes } from "@core/routes/routes";
import { Application, Request, Response } from "express";
import { GetTop10UseCase } from "../../../application/user-case/get-top-10.use-case";
import { TopApiPort } from "../ports/top-api.port";

export class TopApiAdapter extends Routes implements TopApiPort {
  static readonly ROUTE = "top";
  static readonly ALBUM_ROUTE = "album";

  constructor(
    private app: Application,
    private getTop10UseCase: GetTop10UseCase
  ) {
    super(TopApiAdapter.ROUTE);
    this.app.get(
      `${this.route}/:topNumber/${TopApiAdapter.ALBUM_ROUTE}`,
      this.getTop10Albums.bind(this)
    );
  }

  async getTop10Albums(request: Request, response: Response) {
    let topNumber: number;
    try {
      topNumber = this.getTopNumber(request.params?.topNumber);
    } catch (error) {
      return response.status(400).json(error);
    }

    try {
      const top10Albums = await this.getTop10UseCase.execute(topNumber);
      response.json(top10Albums);
    } catch (error) {
      return response.status(500).json(error);
    }
  }

  private getTopNumber(topNumberParam: string) {
    let topNumber = Number.parseInt(notUndefinedOrNull(topNumberParam));
    if (topNumber < 0) {
      throw new Error("topNumber must be a positive integer");
    }
    return topNumber;
  }
}
