import { Application, Request, Response, NextFunction, json } from "express";
import { MiddlewarePort } from "../../ports/middleware.port";

export class BodyParserMiddlewareApiAdapter implements MiddlewarePort {
  constructor(app: Application) {
    app.use(json());
  }

  public intercept(
    request: Request,
    response: Response,
    next: NextFunction
  ): void {
    next();
  }
}
