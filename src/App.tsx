import { useState } from "react";
import StudioInteraction from "./components/StudioInteraction";
import ExamInteraction from "./components/ExamInteraction";

const questionTypes = ["studio", "exam"] as const;

export type QuestionType = (typeof questionTypes)[number];

const interactionTypes = [
  "FreeResponse",
  "MultipleChoice",
  "TrueOrFalse",
  "Matching",
] as const;

export type InteractionType = (typeof interactionTypes)[number];

interface FreeResponseInteractionInfo {
  correctAnswer: string;
}

interface MultipleChoiceInteractionInfo {
  choices: { id: string; content: string; isCorrect: boolean }[];
}

interface MachingInteractionInfo {
  maching: { id: string; firstVal: string; secondVal: string }[];
}

interface TrueOrFalseInteractionInfo {
  isTrue: boolean;
}

interface FreeResponseResponseData {
  answer: string;
}

interface MultipleChoiceResponseData {
  selectedChoices: string[];
}

interface MachingResponseData {
  selectedMatchMap: Record<string, string>;
}

interface TrueOrFalseResponseData {
  isTrueOrFalse: boolean | null;
}

type InteractionTypeMap = {
  FreeResponse: {
    interactionInfo: FreeResponseInteractionInfo;
    responseData: FreeResponseResponseData;
  };
  MultipleChoice: {
    interactionInfo: MultipleChoiceInteractionInfo;
    responseData: MultipleChoiceResponseData;
  };
  Matching: {
    interactionInfo: MachingInteractionInfo;
    responseData: MachingResponseData;
  };
  TrueOrFalse: {
    interactionInfo: TrueOrFalseInteractionInfo;
    responseData: TrueOrFalseResponseData;
  };
};

export type InteractionInfo<Type extends InteractionType> =
  InteractionTypeMap[Type]["interactionInfo"];

export type ResponseData<Type extends InteractionType> =
  InteractionTypeMap[Type]["responseData"];

export interface Interaction<Type extends InteractionType> {
  type: Type;
  question: string;
  solution?: string;
  difficulty?: string;
  interactionInfo: InteractionInfo<Type>;
  responseData: ResponseData<Type>;
}

export default function App() {
  const [selectedQuestionType, setSelectedQuestionType] =
    useState<QuestionType | null>(null);
  const [selectedInteractionType, setSelectedInteractionType] =
    useState<InteractionType | null>(null);
  const [interactionData, setInteractionData] =
    useState<Interaction<InteractionType> | null>(null);

  return (
    <div className="flex flex-col gap-20 w-full p-10">
      {!selectedInteractionType && (
        <>
          {questionTypes.map((questionType) => (
            <div className="flex flex-col gap-5">
              <span className="p-5 rounded bg-slate-500 self-center">
                {questionType}
              </span>
              {interactionTypes.map((interactionType, i) => (
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
        </>
      )}

      {selectedInteractionType && (
        <>
          {interactionData && selectedQuestionType === "studio" ? (
            <StudioInteraction
              value={interactionData}
              onChange={setInteractionData}
            />
          ) : interactionData && selectedQuestionType === "exam" ? (
            <ExamInteraction
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
      type === "Matching" || type === "FreeResponse" ? "0" : "1"
    }`,
  };

  switch (type) {
    case "FreeResponse":
      return {
        ...baseData,
        type: "FreeResponse",
        interactionInfo: {
          correctAnswer: "Sample Correct Answer",
        },
        responseData: {
          answer: "",
        },
      };
    case "MultipleChoice":
      return {
        ...baseData,
        type: "MultipleChoice",
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
    case "TrueOrFalse":
      return {
        ...baseData,
        type: "TrueOrFalse",
        interactionInfo: {
          isTrue: true,
        },
        responseData: {
          isTrueOrFalse: null,
        },
      };
    case "Matching":
      return {
        ...baseData,
        type: "Matching",
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
