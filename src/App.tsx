/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, FC } from "react";
import StudioInteraction from "./components/StudioInteraction";
import ExamInteraction from "./components/ExamInteraction";
import freeResponseInteractionMeta from "./components/FreeResponse";
import multipleChoiceInteractionMeta from "./components/MultipleChoice";
import matchingInteractionMeta from "./components/Maching";
import trueOrFalseInteractionMeta from "./components/TrueOrFalse";

const questionTypes = ["studio", "exam"] as const;

export type QuestionType = (typeof questionTypes)[number];

export interface StudioInteractionComponentProps<
  interactionInfo extends object
> {
  value: interactionInfo;
  onChange(value: interactionInfo): void;
}

export type StudioInteractionComponent<interactionInfo extends object> = FC<
  StudioInteractionComponentProps<interactionInfo>
>;

export interface ExamInteractionComponentProps<
  interactionInfo extends object,
  responseData extends object
> {
  interactionInfo: interactionInfo;
  value: responseData;
  onChange(value: responseData): void;
}

export type ExamInteractionComponent<
  interactionInfo extends object,
  responseData extends object
> = FC<ExamInteractionComponentProps<interactionInfo, responseData>>;

export interface InteractionMeta<
  interactionInfo extends object,
  responseData extends object
> {
  label: string;
  studioComponent: StudioInteractionComponent<interactionInfo>;
  examComponent: ExamInteractionComponent<interactionInfo, responseData>;
}

export const interactionMetas = {
  freeResponse: freeResponseInteractionMeta,
  multipleChoice: multipleChoiceInteractionMeta,
  matching: matchingInteractionMeta,
  trueOrFalse: trueOrFalseInteractionMeta,
} as const satisfies Record<string, InteractionMeta<any, any>>;

export type InteractionType = keyof typeof interactionMetas;

export type InteractionInfo<Type extends InteractionType> =
  (typeof interactionMetas)[Type] extends InteractionMeta<infer II, any>
    ? II
    : object;

export type ResponseData<Type extends InteractionType> =
  (typeof interactionMetas)[Type] extends InteractionMeta<any, infer RD>
    ? RD
    : object;

export interface Interaction<Type extends InteractionType> {
  type: Type;
  question: string;
  solution?: string;
  difficulty?: string;
  interactionInfo: InteractionInfo<Type>;
  responseData: ResponseData<Type>;
}

export default function App() {
  // TODO: rename to 'mode'
  const [selectedQuestionType, setSelectedQuestionType] =
    useState<QuestionType | null>(null);
  const [selectedInteractionType, setSelectedInteractionType] =
    useState<InteractionType | null>(null);

  const [interactionData, setInteractionData] = useState<
    Interaction<InteractionType>
  >(null as never);

  const [responseData, setResponseData] = useState<
    ResponseData<InteractionType>
  >(null as never);

  return (
    <div className="flex flex-col gap-20 w-full p-10">
      {!selectedInteractionType &&
        questionTypes.map((questionType) => (
          <div key={questionType} className="flex flex-col gap-5">
            <span className="p-5 rounded bg-slate-500 self-center">
              {questionType}
            </span>
            {(
              Object.keys(interactionMetas) as Array<
                keyof typeof interactionMetas
              >
            ).map((interactionType, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedInteractionType(interactionType);
                  setSelectedQuestionType(questionType);
                  setInteractionData(
                    initialInteractionData(interactionType, questionType)
                  );
                }}
                style={{ background: "#ECFEFD", padding: 5, borderRadius: 5 }}
              >
                {interactionType}
              </button>
            ))}
          </div>
        ))}

      {selectedInteractionType && (
        <>
          {interactionData && selectedQuestionType === "studio" ? (
            <StudioInteraction
              value={interactionData}
              onChange={setInteractionData}
            />
          ) : interactionData && selectedQuestionType === "exam" ? (
            <ExamInteraction
              interactionInfo={interactionData.interactionInfo}
              value={interactionData}
              onChange={setInteractionData}
            />
          ) : null}

          <div className="flex gap-4 justify-end">
            <button
              style={{ background: "#ECFEFD", padding: 10, borderRadius: 5 }}
              onClick={() => setSelectedInteractionType(null)}
            >
              back
            </button>
            <button
              style={{ background: "#1AC0AE", padding: 10, borderRadius: 5 }}
              onClick={() => console.log(interactionData)}
            >
              submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

const initialInteractionData = (
  type: InteractionType,
  mode: QuestionType
): Interaction<InteractionType> & {
  responseData: ResponseData<InteractionType>;
} => {
  const isStudio = mode === "studio";

  const baseData = {
    question: isStudio ? `Example Question for ${type}` : "Parent Question",
    solution: "Sample Solution",
    difficulty: `difficulty-${
      type === "matching" || type === "freeResponse" ? "0" : "1"
    }`,
  };

  switch (type) {
    case "freeResponse":
      return {
        ...baseData,
        type: "freeResponse",
        interactionInfo: {
          correctAnswer: "Sample Correct Answer",
        },
        responseData: {
          answer: "",
        },
      };
    case "multipleChoice":
      return {
        ...baseData,
        type: "multipleChoice",
        interactionInfo: {
          choices: [
            { id: "1", content: "Choice 1", isCorrect: false },
            { id: "2", content: "Choice 2", isCorrect: true },
          ],
        },
        responseData: {
          selectedChoices: [],
        },
      };
    case "trueOrFalse":
      return {
        ...baseData,
        type: "trueOrFalse",
        interactionInfo: {
          isTrue: true,
        },
        responseData: {
          isTrueOrFalse: null,
        },
      };
    case "matching":
      return {
        ...baseData,
        type: "matching",
        interactionInfo: {
          maching: [
            { id: "1", firstVal: "Item 1", secondVal: "Match 1" },
            { id: "2", firstVal: "Item 2", secondVal: "Match 2" },
          ],
        },
        responseData: {
          selectedMatchMap: {},
        },
      };
    default:
      throw new Error("Unknown interaction type");
  }
};
