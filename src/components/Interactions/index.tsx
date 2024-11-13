import { Interaction, InteractionType } from "../../App";
// import FillTheBlankInteractionStudio from "../FillTheBlank";
import FreeResponseInteractionStudio from "../FreeResponse";
import MatchingInteractionStudio from "../Maching";
import MultipleChoiceInteractionStudio from "../MultipleChoice";
import TrueOrFalseInteractionStudio from "../TrueOrFalse";

export interface StudioInteractionProps<Type extends InteractionType> {
  value: Interaction<Type>;
  onChange(value: Interaction<Type>): void;
}

export default function Interactions<Type extends InteractionType>({
  value,
  onChange,
}: StudioInteractionProps<Type>) {
  const renderInteractionComponent = () => {
    switch (value.type) {
      case "FreeResponse":
        return (
          <FreeResponseInteractionStudio
            value={value as Interaction<"FreeResponse">}
            onChange={onChange as (value: Interaction<"FreeResponse">) => void}
          />
        );
      case "MultipleChoice":
        return (
          <MultipleChoiceInteractionStudio
            value={value as Interaction<"MultipleChoice">}
            onChange={
              onChange as (value: Interaction<"MultipleChoice">) => void
            }
          />
        );
      case "TrueOrFalse":
        return (
          <TrueOrFalseInteractionStudio
            value={value as Interaction<"TrueOrFalse">}
            onChange={onChange as (value: Interaction<"TrueOrFalse">) => void}
          />
        );
      case "Matching":
        return (
          <MatchingInteractionStudio
            value={value as Interaction<"Matching">}
            onChange={onChange as (value: Interaction<"Matching">) => void}
          />
        );
      // case "FillTheBlank":
      //   return (
      //     <FillTheBlankInteractionStudio
      //       value={value}
      //       onChange={onChange}
      //     />
      //   );
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col gap-2 p-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="Question">Question</label>
          <input
            type="text"
            id="Question"
            value={value.question}
            onChange={(e) => onChange({ ...value, question: e.target.value })}
          />
        </div>

        {renderInteractionComponent()}
        <div className="flex flex-col gap-2">
          <label htmlFor="solution">solution</label>
          <input
            type="text"
            id="solution"
            value={value.solution}
            onChange={(e) => onChange({ ...value, solution: e.target.value })}
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 border p-5 rounded">
        Difficulty
        <div className="flex gap-4">
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="radio"
                  id={`difficulty-${i}`}
                  name="difficulty"
                  value={`difficulty-${i}`}
                  checked={`difficulty-${i}` === value.difficulty}
                  onChange={(e) =>
                    onChange({ ...value, difficulty: e.target.value })
                  }
                />
                <label htmlFor={`difficulty-${i}`}>difficulty{i}</label>
              </div>
            ))}
        </div>
        <label htmlFor="tag">tags</label>
        <select name="tag" id="tag">
          <option value="physics">Physics</option>
          <option value="history">History</option>
          <option value="chemistry">Chemistry</option>
        </select>
      </div>
    </div>
  );
}
