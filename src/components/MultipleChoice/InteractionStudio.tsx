import { StudioInteractionComponent } from "../../App";
import { MultipleChoiceInteractionInfo } from "./type";

let id = 0;
const makeId = () => (++id).toString();

const MultipleChoiceInteractionStudio: StudioInteractionComponent<
  MultipleChoiceInteractionInfo
> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-5">
      {value.choices.map((choice, i) => (
        <div key={i}>
          <span>#choice{choice.id}</span>
          <div className="flex gap-3">
            <input
              type="checkbox"
              id={`enable-${choice.id}`}
              checked={!!choice.isCorrect}
              onChange={(e) => {
                onChange({
                  ...value,
                  choices: value.choices.map((item) =>
                    item.id === choice.id
                      ? { ...item, isCorrect: e.target.checked }
                      : item
                  ),
                });
              }}
            />
            <input
              type="text"
              value={choice.content}
              onChange={(e) => {
                onChange({
                  ...value,
                  choices: value.choices.map((item) =>
                    item.id === choice.id
                      ? { ...item, content: e.target.value }
                      : item
                  ),
                });
              }}
            />
            <button
              style={{
                background: "#ECFEFD",
                padding: 5,
                borderRadius: 5,
                width: 120,
              }}
              onClick={() => {
                onChange({
                  ...value,
                  choices: value.choices.filter(
                    (item) => item.id !== choice.id
                  ),
                });
              }}
            >
              remove
            </button>
          </div>
        </div>
      ))}

      <button
        style={{
          background: "#ECFEFD",
          padding: 5,
          borderRadius: 5,
          width: 120,
        }}
        onClick={() => {
          onChange({
            ...value,
            choices: [
              ...value.choices,
              { id: makeId(), content: "", isCorrect: false },
            ],
          });
        }}
      >
        add choice
      </button>
      <label className="relative inline-block w-12 h-6">
        <input type="checkbox" className="opacity-0 w-0 h-0 peer" />
        <span className="absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-blue-500 transition-all"></span>
        <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-all"></span>
      </label>
    </div>
  );
};

export default MultipleChoiceInteractionStudio;
