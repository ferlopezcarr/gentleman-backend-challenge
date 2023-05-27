import { Request, Response } from 'express';

export interface TopApiPort {
  getTop10Albums(request: Request, response: Response): void;
}