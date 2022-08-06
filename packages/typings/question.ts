export interface Choice {
    text: string
}

export interface Question {
    id: number
    text: string
    choices: Choice[]
}
