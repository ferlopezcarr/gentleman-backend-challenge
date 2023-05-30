import { Application, NextFunction, Request, Response } from "express";
import { MiddlewarePort } from "../../ports/middleware.port";

export class LoggerMiddleware implements MiddlewarePort {
  constructor(app: Application) {
    app.use(this.intercept.bind(this));
  }

  public intercept(request: Request, response: Response, next: NextFunction) {
    console.log(
      `[${new Date().toISOString()}] ${request.method} ${request.path}`
    );
    next();
  }
}
