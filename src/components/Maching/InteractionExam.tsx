import { ExamInteractionComponent } from "../ExamInteraction";

const MatchingInteractionExam: ExamInteractionComponent<"Matching"> = ({
  value,
  onChange,
}) => {
  const optionsList = ["match 1", "match 2", "match 3"];
  return (
    <div className="flex flex-col gap-3">
      <span>Match the following Countries with their Capitals:</span>
      {value.maching.map((item, i) => (
        <div key={i} className="flex gap-5">
          <span>{item.firstVal}</span>
          <select
            value={item.secondVal}
            onChange={(e) => {
              console.log(e.target.value);
              onChange({
                ...value,
                maching: value.maching.map((mach) =>
                  mach.id === item.id
                    ? { ...mach, secondVal: e.target.value }
                    : mach
                ),
              });
            }}
          >
            {optionsList.map((val, index) => (
              <option key={index} value={val}>
                {val}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default MatchingInteractionExam;
