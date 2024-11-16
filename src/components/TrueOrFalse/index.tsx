import { StudioInteractionProps } from "../StudioInteraction";

export default function TrueOrFalseInteractionStudio({
  value,
  onChange,
}: StudioInteractionProps<"TrueOrFalse">) {
  const handleChange = (isTrue: boolean) => {
    onChange({
      ...value,
      interactionInfo: { isTrue },
    });
  };

  return (
    <div className="flex flex-col gap-3">
      <span>answer</span>
      <div className="flex gap-5">
        <div className="flex gap-2">
          <input
            type="radio"
            id="true"
            name="answer"
            value="true"
            checked={value.interactionInfo.isTrue === true}
            onChange={() => handleChange(true)}
          />
          <label htmlFor="true">true</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="false"
            name="answer"
            value="false"
            checked={value.interactionInfo.isTrue === false}
            onChange={() => handleChange(false)}
          />
          <label htmlFor="false">false</label>
        </div>
      </div>
    </div>
  );
}
