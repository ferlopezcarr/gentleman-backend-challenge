import { SingerRepository } from "./singer-repository.model";

export interface AlbumRepository {
  category: string;
  description: string;
  creationDate: Date;
  singer: SingerRepository;
  listens: number;
}