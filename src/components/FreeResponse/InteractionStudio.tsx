import { StudioInteractionComponent } from "../../App";
import { FreeResponseInteractionInfo } from "./type";

const FreeResponseInteractionStudio: StudioInteractionComponent<
  FreeResponseInteractionInfo
> = ({ value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor="correctAnswer">correctAnswer</label>
    <input
      type="text"
      id="correctAnswer"
      onChange={(e) =>
        onChange({
          correctAnswer: e.target.value,
        })
      }
      value={value.correctAnswer}
    />
  </div>
);
export default FreeResponseInteractionStudio;
