import { StudioInteractionComponent } from "../StudioInteraction";

let id = 0;
const makeId = () => (++id).toString();

const MatchingInteractionStudio: StudioInteractionComponent<"matching"> = ({
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-3">
      {value.maching.map((item, i) => (
        <div key={i}>
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <span>matchPairComplementQ #{i}</span>
              <input
                type="text"
                value={item.firstVal}
                onChange={(e) => {
                  onChange({
                    ...value,
                    maching: value.maching.map((mach) =>
                      mach.id === item.id
                        ? { ...mach, firstVal: e.target.value }
                        : mach
                    ),
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <span>matchPairComplementA #{i}</span>
              <input
                type="text"
                value={item.secondVal}
                onChange={(e) => {
                  onChange({
                    ...value,
                    maching: value.maching.map((mach) =>
                      mach.id === item.id
                        ? { ...mach, secondVal: e.target.value }
                        : mach
                    ),
                  });
                }}
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
        onClick={() => {
          onChange({
            ...value,
            maching: [
              ...value.maching,
              { id: makeId(), firstVal: "", secondVal: "" },
            ],
          });
        }}
      >
        add choice
      </button>
    </div>
  );
};

export default MatchingInteractionStudio;
