export const TMDB_API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_ACCESS_TOKEN}`
    }
}

export const NOW_PLAYING_ENDPOINT = "https://api.themoviedb.org/3/movie/now_playing?language=en-US";
export const EMBED_VIDEO_ENPOINT = "https://www.youtube.com/embed/";

export const MOVIE_VIDEO_ENDPOINT = "https://api.themoviedb.org/3/movie/";