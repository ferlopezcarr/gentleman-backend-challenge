import { Request, Response } from 'express';

export interface AlbumApiPort {
  getAlbumTop10(request: Request, response: Response): void;
}