import { ExamInteractionComponent } from "../ExamInteraction";

const MultipleChoiceInteractionExam: ExamInteractionComponent<
  "MultipleChoice"
> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col gap-5">
      {value.choices.map((choice, i) => (
        <div key={i}>
          <div className="flex gap-3">
            <span>{i + 1}</span>
            <input
              type="checkbox"
              id={`enable-${choice.id}`}
              checked={!!choice.isCorrect}
              onChange={(e) => {
                onChange({
                  ...value,
                  choices: value.choices.map((item) =>
                    item.id === choice.id
                      ? { ...item, isCorrect: e.target.checked }
                      : { ...item, isCorrect: false }
                  ),
                });
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
