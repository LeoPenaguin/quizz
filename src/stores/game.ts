import { Themes } from '@packages/typings'
import type { Question } from '@packages/typings'
import { defineStore } from 'pinia'

export const useGameStore = defineStore({
  id: 'game',
  state: () => ({
    counterSteps: 4,
    counterDuration: 5000,
    questionDuration: 5,
    questions: [
      {
        position: 1,
        theme: Themes.CULTURE,
        text: "L'expansion de l'Univers est la solution théorique trouvée par",
        choices: [
          { text: 'Edwin Hubble' },
          { text: 'Alexander Friedmann' },
          { text: 'Albert Einstein' },
          { text: 'Harlow Shapley' },
        ],
      },
      {
        position: 2,
        theme: Themes.MUSIC,
        text: 'Lequel de ces groupes est originaire de Altkirch, en Alsace',
        choices: [{ text: 'Placebo' }, { text: 'Caravan Palace' }, { text: 'Last Train' }, { text: 'Chats Sauvages' }],
      },
      {
        position: 3,
        theme: Themes.MOVIE,
        text: "Peter Jackson n'a pas réalisé ",
        choices: [
          { text: 'Bad Taste' },
          { text: 'Smelling poops' },
          { text: 'King Kong' },
          { text: 'Le Seigneur des anneaux' },
        ],
      },
      {
        position: 3,
        theme: Themes.GAME,
        text: 'Quelle affirmation est fausse',
        choices: [
          { text: 'Hollow Knight se déroule à Hallownest' },
          { text: 'Hollow Knight est un Roguelike' },
          { text: "Dans Hollow Knight, L'apparence des personnages tient de l'insectoïde" },
          { text: '1 + 1 = 2' },
        ],
      },
    ] as Question[],
    questionPosition: 1,
  }),
  actions: {
    setNextQuestion() {
      this.questionPosition += 1
    },
    resetQuestion() {
      this.questionPosition = 1
    },
  },
  getters: {
    currentQuestion(state) {
      return state.questions.find((question) => question.position === state.questionPosition)
    },
  },
})
