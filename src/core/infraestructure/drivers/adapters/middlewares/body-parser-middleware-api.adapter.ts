import bodyParser from "body-parser";
import { Application, Request, Response, NextFunction } from "express";
import { MiddlewarePort } from "../../ports/middleware.port";

export class BodyParserMiddlewareApiAdapter implements MiddlewarePort {
  constructor(app: Application) {
    app.use(bodyParser.json());
  }

  public intercept(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    next();
  }
}
