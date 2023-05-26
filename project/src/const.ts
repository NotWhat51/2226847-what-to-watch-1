export enum AppRoute {
    MainPage = '/',
    SignIn = '/login',
    MyList = '/mylist',
    Film = '/films/:id',
    AddReview = '/films/:id/review',
    Player = '/player/:id',
    NotFound = '*'
}

export enum AuthStatus {
    Auth = 'AUTH',
    NoAuth = 'NO_AUTH',
    Unknown = 'UNKNOWN'
}

export const ALL_GENRE = 'All genres';
export const DEFAULT_GENRE = ALL_GENRE;
export const FILM_IN_PAGE = 8;
