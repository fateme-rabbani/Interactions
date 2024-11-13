import { StudioInteractionProps } from "../Interactions";

let id = 0;
const makeId = () => (++id).toString();

export default function MultipleChoiceInteractionStudio({
  value,
  onChange,
}: StudioInteractionProps<"MultipleChoice">) {
  const handleEnable = (id: string, isCorrect: boolean) => {
    onChange({
      ...value,
      interactionInfo: {
        ...value.interactionInfo,
        choices: value.interactionInfo.choices.map((item) =>
          item.id === id ? { ...item, isCorrect } : item
        ),
      },
    });
  };

  const handleTextChange = (id: string, content: string) => {
    onChange({
      ...value,
      interactionInfo: {
        ...value.interactionInfo,
        choices: value.interactionInfo.choices.map((item) =>
          item.id === id ? { ...item, content } : item
        ),
      },
    });
  };

  const addChoice = () => {
    onChange({
      ...value,
      interactionInfo: {
        ...value.interactionInfo,
        choices: [
          ...value.interactionInfo.choices,
          { id: makeId(), content: "", isCorrect: false },
        ],
      },
    });
  };

  const removeChoice = (id: string) => {
    onChange({
      ...value,
      interactionInfo: {
        ...value.interactionInfo,
        choices: value.interactionInfo.choices.filter((item) => item.id !== id),
      },
    });
  };

  return (
    <div className="flex flex-col gap-5">
      {value.interactionInfo.choices.map((item, i) => (
        <div key={i}>
          <span>#choice{item.id}</span>
          <div className="flex gap-3">
            <input
              type="checkbox"
              id={`enable-${item.id}`}
              checked={item.isCorrect}
              onChange={(e) => handleEnable(item.id, e.target.checked)}
            />
            <input
              type="text"
              value={item.content}
              onChange={(e) => handleTextChange(item.id, e.target.value)}
            />
            <button
              style={{
                background: "#ECFEFD",
                padding: 5,
                borderRadius: 5,
                width: 120,
              }}
              onClick={() => removeChoice(item.id)}
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
        onClick={addChoice}
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
}
