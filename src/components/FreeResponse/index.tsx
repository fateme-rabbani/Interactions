import { StudioInteractionComponent } from "../StudioInteraction";

const FreeResponseInteractionStudio: StudioInteractionComponent<
  "FreeResponse"
> = ({ value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor="correctAnswer">correctAnswer</label>
    <input
      type="text"
      id="correctAnswer"
      onChange={(e) =>
        onChange({
          ...value,
          interactionInfo: { correctAnswer: e.target.value },
        })
      }
      value={value.interactionInfo.correctAnswer}
    />
  </div>
);
export default FreeResponseInteractionStudio;
