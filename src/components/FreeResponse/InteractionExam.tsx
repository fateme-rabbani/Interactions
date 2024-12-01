import { ExamInteractionComponent } from "../../App";
import { FreeResponseInteractionInfo, FreeResponseResponseData } from "./type";

const FreeResponseInteractionExam: ExamInteractionComponent<
  FreeResponseInteractionInfo,
  FreeResponseResponseData
> = ({ value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor="answer">answer</label>
    <input
      type="text"
      id="answer"
      onChange={(e) =>
        onChange({
          answer: e.target.value,
        })
      }
      value={value.answer}
    />
  </div>
);
export default FreeResponseInteractionExam;
