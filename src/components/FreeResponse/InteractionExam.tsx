import { ExamInteractionComponent } from "../ExamInteraction";

const FreeResponseInteractionExam: ExamInteractionComponent<
  "FreeResponse"
> = () => (
  <div className="flex flex-col gap-2">
    <label htmlFor="answer">answer</label>
    <input type="text" id="answer" onChange={(e) => e.target.value} value={1} />
  </div>
);
export default FreeResponseInteractionExam;
