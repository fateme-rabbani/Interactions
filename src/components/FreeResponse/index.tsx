import { StudioInteractionProps } from "../Interactions";

export default function FreeResponseInteractionStudio({
  value,
  onChange,
}: StudioInteractionProps<"FreeResponse">) {
  return (
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
}
