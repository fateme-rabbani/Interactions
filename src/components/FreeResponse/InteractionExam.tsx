import { ExamInteractionComponent } from "../ExamInteraction";

const FreeResponseInteractionExam: ExamInteractionComponent<"freeResponse"> = ({
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
          answer: e.target.value,
        })
      }
      value={value.answer}
    />
  </div>
);
export default FreeResponseInteractionExam;
