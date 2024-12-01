export interface MatchingInteractionInfo {
  maching: { id: string; firstVal: string; secondVal: string }[];
}

export interface MatchingResponseData {
  selectedMatchMap: Record<string, string>;
}
