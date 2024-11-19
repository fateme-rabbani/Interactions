import { ExamInteractionComponent } from "../ExamInteraction";

const MultipleChoiceInteractionExam: ExamInteractionComponent<
  "MultipleChoice"
> = () => {
  const value = {
    choices: [
      { id: "1", content: "Choice 1", isCorrect: false },
      { id: "2", content: "Choice 2", isCorrect: true },
    ],
  };
  return (
    <div className="flex flex-col gap-5">
      {value.choices.map((choice, i) => (
        <div key={i}>
          <div className="flex gap-3">
            <span>{i + 1}</span>
            <input
              type="checkbox"
              id={`enable-${choice.id}`}
              checked={choice.isCorrect}
              onChange={(e) => {
                return e.target.checked;
              }}
            />
            <span>{choice.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceInteractionExam;
