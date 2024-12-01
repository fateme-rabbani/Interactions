import { InteractionMeta } from "../../App";
import MultipleChoiceInteractionExam from "./InteractionExam";
import MultipleChoiceInteractionStudio from "./InteractionStudio";
import {
  MultipleChoiceInteractionInfo,
  MultipleChoiceResponseData,
} from "./type";

const multipleChoiceInteractionMeta: InteractionMeta<
  MultipleChoiceInteractionInfo,
  MultipleChoiceResponseData
> = {
  label: "multipleChoice",
  studioComponent: MultipleChoiceInteractionStudio,
  examComponent: MultipleChoiceInteractionExam,
};
export default multipleChoiceInteractionMeta;
