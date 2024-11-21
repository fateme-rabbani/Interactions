import { ExamInteractionComponent } from "../ExamInteraction";

const MultipleChoiceInteractionExam: ExamInteractionComponent<
  "MultipleChoice"
> = ({ interactionInfo, value, onChange }) => {
  return (
    <div className="flex flex-col gap-5">
      {interactionInfo.choices.map((choice, i) => (
        <div key={i}>
          <div className="flex gap-3 items-center">
            <span>{i + 1}</span>
            <input
              type="checkbox"
              id={`choice-${choice.id}`}
              onChange={(e) => {
                onChange({
                  ...value,
                  selectedChoices: e.target.checked
                    ? [...value.selectedChoices, choice.id]
                    : value.selectedChoices.filter((id) => id !== choice.id),
                });
              }}
            />
            <label htmlFor={`choice-${choice.id}`}>{choice.content}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceInteractionExam;
