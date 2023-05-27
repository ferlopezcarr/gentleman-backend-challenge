import { SingerRepository } from "../../../../singer/infraestructure/driven/models/singer-repository.model";

export interface AlbumRepository {
  category: string;
  description: string;
  creationDate: Date;
  singer: SingerRepository;
  listens: number;
}