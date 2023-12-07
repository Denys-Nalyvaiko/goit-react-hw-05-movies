const API = Object.freeze({
  BASE_URL: 'https://api.themoviedb.org/3',
  AUTH_TOKEN:
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTU2NjY2YTM4MDg5YTViYWJkZTYxMDY0M2Q5ZjFiMiIsInN1YiI6IjY1MTZkODJmOWI4NjE2MDBjNWNhODViMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Z7svSSg1PRCQecW87TtoFDZ2Q6FReUtt3L8XvXbN6c4',
  ENDPOINT: Object.freeze({
    TRENDING: '/trending/movie/day',
    SEARCH_MOVIE: '/search/movie',
  }),
});

export default API;
