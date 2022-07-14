const key = '1120d18690db9b1f002b33ed88e43691'



const requests = {
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=1120d18690db9b1f002b33ed88e43691&language=en-US&page=1`,
    requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=1120d18690db9b1f002b33ed88e43691&language=en-US&page=1`,
    requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=1120d18690db9b1f002b33ed88e43691&language=en-US&page=2`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=1120d18690db9b1f002b33ed88e43691&language=en-US&query=horror&page=1&include_adult=false`,
    requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=1120d18690db9b1f002b33ed88e43691&language=en-US&page=1`,
};
export default requests