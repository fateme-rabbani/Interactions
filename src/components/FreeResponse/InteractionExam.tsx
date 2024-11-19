import { ExamInteractionComponent } from "../ExamInteraction";

const FreeResponseInteractionExam: ExamInteractionComponent<"FreeResponse"> = ({
  value,
  onChange,
}) => (
  <div className="flex flex-col gap-2">
    <label htmlFor="answer">answer</label>
    <input
      type="text"
      id="answer"
      onChange={(e) =>
        onChange({
          correctAnswer: e.target.value,
        })
      }
      value={value.correctAnswer}
    />
  </div>
);
export default FreeResponseInteractionExam;
