import { BodyParserMiddleware } from "@core/infraestructure/drivers/adapters/middlewares/body-parser.middleware";
import { CorsMiddleware } from "@core/infraestructure/drivers/adapters/middlewares/cors.middleware";
import { LoggerMiddleware } from "@core/infraestructure/drivers/adapters/middlewares/logger.middleware";
import { Middleware } from "@core/infraestructure/drivers/ports/middleware.port";
import express from "express";
import { HealthRoutes } from "./core/routes/health.routes";
import { MainRoutes } from "./core/routes/main.routes";
import { Routes } from "./core/routes/routes";
import { TopControlPlane } from "./features/tops/top.control-plane";

export default class App {
  public expressApp: express.Application;
  public port: number;

  private middlewares: Middleware[] = [];
  private routes: Routes[] = [];

  constructor(port: number) {
    this.expressApp = express(); //run the express instance and store in app
    this.port = port;

    this.initMiddlewares(this.expressApp);
    this.initRoutes(this.expressApp);

    new TopControlPlane(this.expressApp);
  }

  /**
   * Init Middlewares
   * @param app 
   */
  private initMiddlewares(app: express.Application) {
    new BodyParserMiddleware(app);
    this.middlewares = [new LoggerMiddleware(app), new CorsMiddleware(app)];
  }

  /**
   * Init Routes
   * @param app 
   */
  private initRoutes(app: express.Application) {
    this.routes = [
      new MainRoutes(this.expressApp),
      new HealthRoutes(this.expressApp),
    ];
  }

  public listen() {
    this.expressApp.listen(this.port, () => {
      console.log("--------------------------------------------------");
      console.log(`Server listening on: http://localhost:${this.port}`);
      console.log("--------------------------------------------------");
    });
  }
}

//export default App;
