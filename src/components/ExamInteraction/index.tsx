import {
  ExamInteractionComponent,
  ExamInteractionComponentProps,
  InteractionInfo,
  interactionMetas,
  InteractionType,
  ResponseData,
} from "../../App";

export default function ExamInteraction<Type extends InteractionType>({
  interactionInfo,
  value,
  onChange,
}: ExamInteractionComponentProps<InteractionInfo<Type>, ResponseData<Type>>) {
  // const ExamComponent = interactionMetas[value.type]
  //   .examComponent as unknown as ExamInteractionComponent<
  //   InteractionInfo<Type>,
  //   ResponseData<Type>
  // >;
  const ExamComponent = interactionMetas[value.type]
    .examComponent as ExamInteractionComponent<
    InteractionInfo<Type>,
    ResponseData<Type>
  >;

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
      <div>{interactionInfo}</div>
      <div>
        Lorem سلام ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor?
      </div>
      <ExamComponent
        interactionInfo={interactionInfo}
        value={value}
        onChange={(value) => onChange(value)}
      />
      <div className="border w-fit border-[#16AE9E] px-2 rounded-xl text-[#16AE9E]">
        Score 1.5
      </div>
    </div>
  );
}
