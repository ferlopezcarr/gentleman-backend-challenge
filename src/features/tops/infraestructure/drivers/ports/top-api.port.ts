import { Request, Response } from 'express';

export interface TopApiPort {
  getTopAlbums(request: Request, response: Response): void;
}