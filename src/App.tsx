import { useState } from "react";
import StudioInteraction from "./components/StudioInteraction";

// wide - narrow

// string - 'FreeResponse' | 'Gholam'

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

export type InteractionInfo<Type extends InteractionType> =
  Type extends "FreeResponse"
    ? FreeResponseInteractionInfo
    : Type extends "MultipleChoice"
    ? MultipleChoiceInteractionInfo
    : Type extends "Matching"
    ? MachingInteractionInfo
    : Type extends "TrueOrFalse"
    ? TrueOrFalseInteractionInfo
    : never;

export interface Interaction<Type extends InteractionType> {
  type: Type;
  question: string;
  solution: string;
  difficulty: string;
  interactionInfo: InteractionInfo<Type>;
}

export default function App() {
  const [selectedInteractionType, setSelectedInteractionType] =
    useState<InteractionType | null>(null);
  const [interactionData, setInteractionData] =
    useState<Interaction<InteractionType> | null>(null);

  return (
    <div className="flex flex-col gap-20 w-full p-10">
      {!selectedInteractionType && (
        <div className="flex flex-col gap-5">
          {interactionTypes.map((interactionType, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedInteractionType(interactionType);
                setInteractionData(initialData(interactionType));
              }}
              style={{ background: "#ECFEFD", padding: 5, borderRadius: 5 }}
            >
              {interactionType}
            </button>
          ))}
        </div>
      )}

      {selectedInteractionType && interactionData && (
        <>
          <StudioInteraction
            value={interactionData}
            onChange={setInteractionData}
          />
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

const initialData = (type: InteractionType): Interaction<InteractionType> => {
  switch (type) {
    case "FreeResponse":
      return {
        type: "FreeResponse",
        question: "Example Question for FreeResponse",
        solution: "Sample Solution",
        difficulty: "difficulty-0",
        interactionInfo: { correctAnswer: "Sample Correct Answer" },
      };
    case "MultipleChoice":
      return {
        type: "MultipleChoice",
        question: "Example Question for MultipleChoice",
        solution: "Sample Solution",
        difficulty: "difficulty-1",
        interactionInfo: {
          choices: [
            { id: "1", content: "Choice 1", isCorrect: false },
            { id: "2", content: "Choice 2", isCorrect: true },
          ],
        },
      };
    case "TrueOrFalse":
      return {
        type: "TrueOrFalse",
        question: "Example Question for TrueOrFalse",
        solution: "Sample Solution",
        difficulty: "difficulty-2",
        interactionInfo: { isTrue: true },
      };
    case "Matching":
      return {
        type: "Matching",
        question: "Example Question for Matching",
        solution: "Sample Solution",
        difficulty: "difficulty-0",
        interactionInfo: {
          maching: [
            { id: "1", firstVal: "Item 1", secondVal: "Match 1" },
            { id: "2", firstVal: "Item 2", secondVal: "Match 2" },
          ],
        },
      };
    default:
      throw new Error("Unknown interaction type");
  }
};
