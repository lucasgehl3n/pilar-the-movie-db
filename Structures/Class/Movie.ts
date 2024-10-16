
export default class Movie {
    title: string = '';
    poster_path: string = '';
    overview: string = '';
    vote_average: number = 0;
    release_date: string = '';
    genres: string[] = [];
    runtime: number = 0;
    status: string = '';
    tagline: string = '';
    backdrop_path: string = '';
    vote_count: number = 0;

    constructor(data: { [key: string]: any }) {
        Object.assign(this, data);
    }
}