export interface MultipleChoiceInteractionInfo {
  choices: { id: string; content: string; isCorrect: boolean }[];
}

export interface MultipleChoiceResponseData {
  selectedChoices: string[];
}
