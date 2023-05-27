export interface AlbumRepositoryPort {
  getTop10(): Promise<Object[]>;
}
