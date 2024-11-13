import { StudioInteractionProps } from "../Interactions";

let id = 0;
const makeId = () => (++id).toString();

export default function MatchingInteractionStudio({
  value,
  onChange,
}: StudioInteractionProps<"Matching">) {
  const handleTextChangeFirst = (id: string, val: string) => {
    onChange({
      ...value,
      interactionInfo: {
        ...value.interactionInfo,
        maching: value.interactionInfo.maching.map((item) =>
          item.id === id ? { ...item, firstVal: val } : item
        ),
      },
    });
  };

  const handleTextChangeSecond = (id: string, val: string) => {
    onChange({
      ...value,
      interactionInfo: {
        ...value.interactionInfo,
        maching: value.interactionInfo.maching.map((item) =>
          item.id === id ? { ...item, secondVal: val } : item
        ),
      },
    });
  };

  const addChoice = () => {
    onChange({
      ...value,
      interactionInfo: {
        ...value.interactionInfo,
        maching: [
          ...value.interactionInfo.maching,
          { id: makeId(), firstVal: "", secondVal: "" },
        ],
      },
    });
  };
  return (
    <div className="flex flex-col gap-3">
      {value.interactionInfo.maching.map((item, i) => (
        <div key={i}>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <span>matchPairComplementQ #{i}</span>
              <input
                type="text"
                value={item.firstVal}
                onChange={(e) => handleTextChangeFirst(item.id, e.target.value)}
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
}
