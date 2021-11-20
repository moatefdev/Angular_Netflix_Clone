export interface IMediaBox {
  poster?: string;
  title: string;
}

export interface IAllMovies {
  [key: string]: Array<any>;
}
export interface IRegisterForm {
  name: string;
  username: string;
  email: string;
  hash: string | number;
}
