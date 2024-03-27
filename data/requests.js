// full response query for separate rows with movies
export const netflixPageQueries = {
    originals:  `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_networks=213`,
    trendingNow: `/trending/all/week?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    
    kids: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=10762`,
    dramas: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=18`,
};

export const tvshowsPageQueries = {
    topRatedTvShows: `/tv/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    animation: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=16`,
    comediesTvShows: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=35`,
    documentaries: `/discover/tv?api_key=${process.env.TMDB_API_KEY}&with_genres=99`,
};

export const moviesPageQueries = {
    topRatedMovies: `/movie/top_rated?api_key=${process.env.TMDB_API_KEY}&language=en-US`,
    actionMovies: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=28`,
    comedyMovies: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=35`,
    horrorMovies: `/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=27`
};

