import { FC } from "react";
import { Interaction, InteractionInfo, InteractionType } from "../../App";

import FreeResponseInteractionExam from "../FreeResponse/InteractionExam";
import MatchingInteractionExam from "../Maching/InteractionExam";
import MultipleChoiceInteractionExam from "../MultipleChoice/InteractionExam";
import TrueOrFalseInteractionExam from "../TrueOrFalse/InteractionExam";

export interface ExamInteractionProps<Type extends InteractionType> {
  value: Interaction<Type>;
  onChange(value: Interaction<Type>): void;
}

export interface InteractionComponentProps<Type extends InteractionType> {
  interactionInfo: InteractionInfo<Type>;
  value: ResponseData<Type>;
  onChange(value: ResponseData<Type>): void;
}

export type ExamInteractionComponent<Type extends InteractionType> = FC<
  InteractionComponentProps<Type>
>;

const interactionComponents = {
  FreeResponse: FreeResponseInteractionExam,
  MultipleChoice: MultipleChoiceInteractionExam,
  TrueOrFalse: TrueOrFalseInteractionExam,
  Matching: MatchingInteractionExam,
};

export default function ExamInteraction<Type extends InteractionType>({
  value,
  onChange,
}: ExamInteractionProps<Type>) {
  const ExamComponents = interactionComponents[
    value.type
  ] as ExamInteractionComponent<Type>;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex gap-5 items-center">
        <div className="bg-[#16AE9E] rounded-full size-[60px] flex items-center justify-center text-white border shadow-[0_0_0_0.5px] shadow-grey-400 bg-clip-content p-2">
          100
        </div>
        <div className="flex gap-5 text-[#16AE9E]">
          <span>MARK</span>
          <span>IGNOR</span>
          <span>REPORT</span>
        </div>
      </div>
      <button className="bg-[#16AE9E] rounded-xl px-2 self-end">
        subQuestion
      </button>
      <div>{value.question}</div>
      <div>
        Lorem سلام ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor?
      </div>
      <ExamComponents
        value={value.interactionInfo}
        onChange={(interactionInfo) => onChange({ ...value, interactionInfo })}
      />
      <div className="border w-fit border-[#16AE9E] px-2 rounded-xl text-[#16AE9E]">
        Score 1.5
      </div>
    </div>
  );
}
