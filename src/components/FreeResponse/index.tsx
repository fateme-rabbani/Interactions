import { InteractionMeta } from "../../App";
import FreeResponseInteractionExam from "./InteractionExam";
import FreeResponseInteractionStudio from "./InteractionStudio";
import { FreeResponseInteractionInfo, FreeResponseResponseData } from "./type";

const freeResponseInteractionMeta: InteractionMeta<
  FreeResponseInteractionInfo,
  FreeResponseResponseData
> = {
  label: "freeResponse",
  studioComponent: FreeResponseInteractionStudio,
  examComponent: FreeResponseInteractionExam,
};
export default freeResponseInteractionMeta;
