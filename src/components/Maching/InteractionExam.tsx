import { ExamInteractionComponent } from "../ExamInteraction";

const MatchingInteractionExam: ExamInteractionComponent<"Matching"> = () => {
  const value = {
    maching: [
      {
        id: "1",
        firstVal: "Item 1",
        secondVal: ["Match 1", "Match 2", "Match 3", "Match 4"],
      },
      {
        id: "2",
        firstVal: "Item 2",
        secondVal: ["Match 5", "Match 6", "Match 7", "Match 8"],
      },
    ],
  };
  return (
    <div className="flex flex-col gap-3">
      <span>Match the following Countries with their Capitals:</span>
      {value.maching.map((item, i) => (
        <div key={i} className="flex gap-5">
          <span>{item.firstVal}</span>
          <select>
            {item.secondVal.map((val) => (
              <option value={val}>{val}</option>
            ))}
          </select>
        </div>
      ))}
    </div>
  );
};

export default MatchingInteractionExam;
