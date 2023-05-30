import { BodyParserMiddlewareApiAdapter } from "@core/infraestructure/drivers/adapters/middlewares/body-parser-middleware-api.adapter";
import { CorsMiddleware } from "@core/infraestructure/drivers/adapters/middlewares/cors-middleware-api.adapter";
import { LoggerMiddleware } from "@core/infraestructure/drivers/adapters/middlewares/logger-middleware-api.adapter";
import { MiddlewarePort } from "@core/infraestructure/drivers/ports/middleware.port";
import { HealthRouterApiAdapter } from "@core/infraestructure/drivers/adapters/routes/health-router-api.adapter";
import { MainRouterApiAdapter } from "@core/infraestructure/drivers/adapters/routes/main-router-api.adapter";
import express from "express";
import { TopControlPlane } from "./features/tops/top.control-plane";
import { RouterPort } from "@core/infraestructure/drivers/ports/router.port";

export default class App {
  public expressApp: express.Application;
  public port: number;

  private middlewares: MiddlewarePort[];
  private routers: RouterPort[];

  constructor(port: number) {
    this.expressApp = express(); //run the express instance and store in app
    this.port = port;

    this.middlewares = [
      new BodyParserMiddlewareApiAdapter(this.expressApp),
      new LoggerMiddleware(this.expressApp),
      new CorsMiddleware(this.expressApp),
    ];

    this.routers = [
      new MainRouterApiAdapter(this.expressApp),
      new HealthRouterApiAdapter(this.expressApp),
    ];

    new TopControlPlane(this.expressApp);
  }

  public listen() {
    this.expressApp.listen(this.port, () => {
      console.log("--------------------------------------------------");
      console.log(`Server listening on: http://localhost:${this.port}`);
      console.log("--------------------------------------------------");
    });
  }
}
