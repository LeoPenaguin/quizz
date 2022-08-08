export interface Choice {
    text: string
}

export enum Themes {
    CULTURE = 'culture',
    MOVIE = 'movie',
    MUSIC = 'music',
    GAME = 'game',
}

export interface Question {
    position: number
    theme: Themes
    text: string
    choices: Choice[]
}
