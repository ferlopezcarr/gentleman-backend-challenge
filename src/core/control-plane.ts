import { Application } from "express";
import { RouterPort } from "./infraestructure/drivers/ports/router.port";

export class ControlPlane {
  protected router!: RouterPort;

  constructor(readonly app: Application) {
  }
  
  public getRouter(): RouterPort {
    return this.router;
  }
}
