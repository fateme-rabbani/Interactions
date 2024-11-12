import { ReactElement } from "react";

interface InteractionsProps {
  selectedInteraction: ReactElement | null;
}
const Interactions = ({ selectedInteraction }: InteractionsProps) => {
  return (
    <div className="flex flex-col gap-2 p-5">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="Question">Question</label>
          <input type="text" id="Question" />
        </div>

        {selectedInteraction}

        <div className="flex flex-col gap-2">
          <label htmlFor="solution">solution</label>
          <input type="text" id="solution" />
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
                  value={i}
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
};

export default Interactions;
