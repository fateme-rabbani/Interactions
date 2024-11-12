import { useState } from "react";

interface MatchItem {
  id: number;
  firstVal: string;
  secondVal: string;
}

let id = 0;
const makeId = () => ++id;

const MatchingInteractionStudio = () => {
  const [value, setValue] = useState<MatchItem[]>([
    { id: makeId(), firstVal: "test1", secondVal: "test2" },
  ]);

  const handleTextChangefirst = (id: number, val: string) => {
    setValue(
      value.map((item) => (item.id === id ? { ...item, firstVal: val } : item))
    );
  };

  const handleTextChangeSecond = (id: number, val: string) => {
    setValue(
      value.map((item) => (item.id === id ? { ...item, secondVal: val } : item))
    );
  };

  const addChoice = () => {
    setValue([...value, { id: makeId(), firstVal: "", secondVal: "" }]);
  };
  return (
    <div className="flex flex-col gap-3">
      {value.map((item, i) => (
        <div key={i}>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <span>matchPairComplementQ #{i}</span>
              <input
                type="text"
                value={item.firstVal}
                onChange={(e) => handleTextChangefirst(item.id, e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span>matchPairComplementA #{i}</span>
              <input
                type="text"
                value={item.secondVal}
                onChange={(e) =>
                  handleTextChangeSecond(item.id, e.target.value)
                }
              />
            </div>
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
        onClick={() => addChoice()}
      >
        add choice
      </button>
    </div>
  );
};

export default MatchingInteractionStudio;
