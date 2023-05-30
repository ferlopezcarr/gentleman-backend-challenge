import { Application, Request, Response } from "express";
import { RouterPort } from "@core/infraestructure/drivers/ports/router.port";

export class HealthRouterApiAdapter extends RouterPort {
  private readonly HEALTH_ROUTE = "health";

  constructor(private app: Application) {
    super();
    const route = this.getApiPath(this.HEALTH_ROUTE);
    this.app.get(route, this.defaultRoute);
  }

  private defaultRoute(req: Request, res: Response) {
    res.status(200).send({
      message: "OK",
    });
  }
}
