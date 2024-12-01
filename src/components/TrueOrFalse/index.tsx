import { InteractionMeta } from "../../App";
import TrueOrFalseInteractionExam from "./InteractionExam";
import TrueOrFalseInteractionStudio from "./InteractionStudio";
import { TrueOrFalseInteractionInfo, TrueOrFalseResponseData } from "./type";

const trueOrFalseInteractionMeta: InteractionMeta<
  TrueOrFalseInteractionInfo,
  TrueOrFalseResponseData
> = {
  label: "trueOrFalse",
  studioComponent: TrueOrFalseInteractionStudio,
  examComponent: TrueOrFalseInteractionExam,
};
export default trueOrFalseInteractionMeta;
