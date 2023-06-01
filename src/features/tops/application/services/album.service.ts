import { Album } from "../../domain/models";

export const sortAlbumsByTopListens = (albums: Album[]): Album[] =>
  albums.sort(
    (a, b) => b.getListens().getListen() - a.getListens().getListen()
  );
