import { Request, Response, NextFunction } from "express";

export interface MiddlewarePort {
  intercept(request: Request, response: Response, next: NextFunction): void;
}
