import { ExamInteractionComponent } from "../../App";
import { MatchingInteractionInfo, MatchingResponseData } from "./type";

const MatchingInteractionExam: ExamInteractionComponent<
  MatchingInteractionInfo,
  MatchingResponseData
> = ({ interactionInfo, value, onChange }) => {
  const optionsList = ["match 1", "match 2", "match 3"];

  return (
    <div className="flex flex-col gap-3">
      <span>Match the following Countries with their Capitals:</span>
      {interactionInfo.maching.map((item, i) => (
        <div key={i} className="flex gap-5 items-center">
          <span>{item.firstVal}</span>
          <select
            onChange={(e) => {
              const selectedValue = e.target.value;
              onChange({
                ...value,
                selectedMatchMap: {
                  ...value.selectedMatchMap,
                  [item.id]: selectedValue,
                },
              });
            }}
          >
            {optionsList.map((optionItem, i) => (
              <option key={i} value={optionItem}>
                {optionItem}
              </option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default MatchingInteractionExam;
