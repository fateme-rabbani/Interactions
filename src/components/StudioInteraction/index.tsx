import { FC } from "react";
import { Interaction, InteractionInfo, InteractionType } from "../../App";

export default function StudioInteraction<Type extends InteractionType>({
  value,
  onChange,
}: StudioInteractionProps<Type>) {
  const StudioComponent = interactionComponents[
    value.type
  ] as StudioInteractionComponent<Type>;

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

        <StudioComponent
          value={value.interactionInfo}
          onChange={(interactionInfo) =>
            onChange({ ...value, interactionInfo })
          }
        />

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
