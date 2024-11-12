import { useState } from "react";

interface MultiItem {
  id: number;
  value: string;
  isEnable: boolean;
}

let id = 0;
const makeId = () => ++id;

const MultipleChoiceInteractionStudio = () => {
  const [value, setValue] = useState<MultiItem[]>([
    { id: makeId(), value: "test", isEnable: false },
  ]);

  const handleEnable = (id: number, isEnable: boolean) => {
    setValue(
      value.map((item) => (item.id === id ? { ...item, isEnable } : item))
    );
  };

  const handleTextChange = (id: number, newValue: string) => {
    setValue(
      value.map((item) =>
        item.id === id ? { ...item, value: newValue } : item
      )
    );
  };

  const addChoice = () => {
    setValue([...value, { id: makeId(), value: "", isEnable: false }]);
  };

  const removeChoice = (id: number) => {
    setValue(value.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col gap-5">
      {value.map((item, i) => (
        <div key={i}>
          <span>#choice{item.id}</span>
          <div className="flex gap-3">
            <input
              type="checkbox"
              id={`enable-${item.id}`}
              checked={item.isEnable}
              onChange={(e) => handleEnable(item.id, e.target.checked)}
            />
            <input
              type="text"
              value={item.value}
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
};

export default MultipleChoiceInteractionStudio;
