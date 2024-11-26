import { StudioInteractionComponent } from "../StudioInteraction";

const FreeResponseInteractionStudio: StudioInteractionComponent<
  "freeResponse"
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
