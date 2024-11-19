import { ExamInteractionComponent } from "../ExamInteraction";

const TrueOrFalseInteractionExam: ExamInteractionComponent<
  "TrueOrFalse"
> = () => {
  const handleChange = (isTrue: boolean) => {
    return isTrue;
  };

  return (
    <div className="flex flex-col gap-3">
      <span>answer</span>
      <div className="flex gap-5">
        <div className="flex gap-2">
          <input
            type="radio"
            id="true"
            name="answer"
            value="true"
            checked={true}
            onChange={() => handleChange(true)}
          />
          <label htmlFor="true">true</label>
        </div>
        <div className="flex gap-2">
          <input
            type="radio"
            id="false"
            name="answer"
            value="false"
            checked={false}
            onChange={() => handleChange(false)}
          />
          <label htmlFor="false">false</label>
        </div>
      </div>
    </div>
  );
};

export default TrueOrFalseInteractionExam;