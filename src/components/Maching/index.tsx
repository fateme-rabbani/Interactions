import { InteractionMeta } from "../../App";
import MatchingInteractionExam from "./InteractionExam";
import MatchingInteractionStudio from "./InteractionStudio";
import { MatchingInteractionInfo, MatchingResponseData } from "./type";

const matchingInteractionMeta: InteractionMeta<
  MatchingInteractionInfo,
  MatchingResponseData
> = {
  label: "matching",
  studioComponent: MatchingInteractionStudio,
  examComponent: MatchingInteractionExam,
};
export default matchingInteractionMeta;
