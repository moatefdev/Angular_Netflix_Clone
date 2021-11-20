export class ApiConfig {
  static apiUrl = 'https://api.themoviedb.org/3/';
  static apiKey = '12896835cbf0b549947060cc74b5ed27';
  static trending = `${ApiConfig.apiUrl}trending/all/day?api_key=${ApiConfig.apiKey}`;
  static trailer = `videos?api_key=${ApiConfig.apiKey}&language=en-US`;
  static nowPlaying = `${ApiConfig.apiUrl}movie/now_playing?api_key=${ApiConfig.apiKey}&language=en-US&page=1`;
  static popular = `${ApiConfig.apiUrl}movie/popular?api_key=${ApiConfig.apiKey}&language=en-US&page=1`;
  static topRated = `${ApiConfig.apiUrl}movie/top_rated?api_key=${ApiConfig.apiKey}&language=en-US&page=1`;
  static upComing = `${ApiConfig.apiUrl}movie/upcoming?api_key=${ApiConfig.apiKey}&language=en-US&page=1`;
  static fetchAction = `discover/movie?api_key=${ApiConfig.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate`;
  static fetchComedy = `discover/movie?api_key=${ApiConfig.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=35&with_watch_monetization_types=flatrate`;
  static fetchHorror = `discover/movie?api_key=${ApiConfig.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27&with_watch_monetization_types=flatrate`;
  static genres = `genre/movie/list?api_key=${ApiConfig.apiKey}&language=en-US`;
  static specificGenre = `${ApiConfig.apiUrl}discover/movie?api_key=${ApiConfig.apiKey}&language=en-US&page=1&with_genres=`;
  static popularTVShows = `tv/popular?api_key=${ApiConfig.apiKey}`;
  static tvTrailer = `videos?api_key=${ApiConfig.apiKey}&language=en-US`;
  static similarMedia = `/similar?api_key=${ApiConfig.apiKey}&language=en-US&page=1`;
  static credits = `/credits?api_key=${ApiConfig.apiKey}&language=en-US`;
}
// static posters = 'https://image.tmdb.org/t/p/w500/ttpKJ7XQxDZV252KNEHXtykYT41.jpg'

// https://api.themoviedb.org/3/movie/451048/

// &page=1&with_genres=1&with_watch_monetization_types=flatrate

// https://api.themoviedb.org/3/discover/movie?api_key=12896835cbf0b549947060cc74b5ed2728
