// import { useState } from "react";

// import Interactions from "./components/Interactions";

// export type InteractionType =
//   | "FreeResponse"
//   | "MultipleChoice"
//   | "Matching"
//   | "TrueOrFalse"
//   | "FillTheBlank";

// interface FreeResponseInteractionInfo {
//   correctAnswer: string;
// }

// interface MultipleChoiceInteractionInfo {
//   choices: { id: string; content: string; isCorrect: boolean }[];
// }

// interface MachingInteractionInfo {
//   maching: { id: string; firstVal: string; secondVal: string }[];
// }

// interface TrueOrFalseInteractionInfo {
//   isTrue: boolean;
// }

// interface FillTheBlankInteractionInfo {
//   id: string;
// }

// export type InteractionInfo<Type extends InteractionType> =
//   Type extends "FreeResponse"
//     ? FreeResponseInteractionInfo
//     : Type extends "MultipleChoice"
//     ? MultipleChoiceInteractionInfo
//     : Type extends "Matching"
//     ? MachingInteractionInfo
//     : Type extends "TrueOrFalse"
//     ? TrueOrFalseInteractionInfo
//     : Type extends "FillTheBlank"
//     ? FillTheBlankInteractionInfo
//     : never;
// export interface Interaction<Type extends InteractionType> {
//   type: Type;
//   question: string;
//   solution: string;
//   interactionInfo: InteractionInfo<Type>;
// }

// const interactionList: InteractionType[] = [
//   "FreeResponse",
//   "MultipleChoice",
//   "TrueOrFalse",
//   "Matching",
//   "FillTheBlank",
// ];

// function App() {
//   const [selectedInteraction, setSelectedInteraction] = useState<string | null>(
//     null
//   );
//   // const [data,setData]=useState()

//   return (
//     <div className="flex flex-col gap-20 w-full p-10">
//       {!selectedInteraction && (
//         <div className="flex flex-col gap-5">
//           {interactionList.map((item, i) => (
//             <button
//               key={i}
//               onClick={() => setSelectedInteraction(item)}
//               style={{ background: "#ECFEFD", padding: 5, borderRadius: 5 }}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       )}

//       {selectedInteraction && (
//         <>
//           <Interactions
//             value={
//               selectedInteraction === "FreeResponse"
//                 ? {
//                     type: "FreeResponse",
//                     question: "Example Question for FreeResponse",
//                     solution: "Sample Solution",
//                     interactionInfo: { correctAnswer: "Sample Correct Answer" },
//                   }
//                 : selectedInteraction === "MultipleChoice"
//                 ? {
//                     type: "MultipleChoice",
//                     question: "Example Question for MultipleChoice",
//                     solution: "Sample Solution",
//                     interactionInfo: {
//                       choices: [
//                         { id: "1", content: "Choice 1", isCorrect: false },
//                         { id: "2", content: "Choice 2", isCorrect: true },
//                       ],
//                     },
//                   }
//                 : selectedInteraction === "TrueOrFalse"
//                 ? {
//                     type: "TrueOrFalse",
//                     question: "Example Question for TrueOrFalse",
//                     solution: "Sample Solution",
//                     interactionInfo: { isTrue: true },
//                   }
//                 : selectedInteraction === "Matching"
//                 ? {
//                     type: "Matching",
//                     question: "Example Question for Matching",
//                     solution: "Sample Solution",
//                     interactionInfo: {
//                       maching: [
//                         { id: "1", firstVal: "Item 1", secondVal: "Match 1" },
//                         { id: "2", firstVal: "Item 2", secondVal: "Match 2" },
//                       ],
//                     },
//                   }
//                 : {
//                     type: "FillTheBlank",
//                     question: "Example Question for FillTheBlank",
//                     solution: "Sample Solution",
//                     interactionInfo: {
//                       id: "1",
//                     },
//                   }
//             }
//             onChange={(val) => {
//               return val;
//             }}
//           />
//           <div className="flex gap-4 justify-end">
//             <button
//               style={{ background: "#ECFEFD", padding: 10, borderRadius: 5 }}
//               onClick={() => setSelectedInteraction(null)}
//             >
//               back
//             </button>
//             <button
//               style={{ background: "#1AC0AE", padding: 10, borderRadius: 5 }}
//             >
//               submit
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default App;

import { useState } from "react";
import Interactions from "./components/Interactions";

export type InteractionType =
  | "FreeResponse"
  | "MultipleChoice"
  | "Matching"
  | "TrueOrFalse"
  | "FillTheBlank";

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

interface FillTheBlankInteractionInfo {
  id: string;
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
    : Type extends "FillTheBlank"
    ? FillTheBlankInteractionInfo
    : never;

export interface Interaction<Type extends InteractionType> {
  type: Type;
  question: string;
  solution: string;
  difficulty: string;
  interactionInfo: InteractionInfo<Type>;
}

const interactionList: InteractionType[] = [
  "FreeResponse",
  "MultipleChoice",
  "TrueOrFalse",
  "Matching",
  "FillTheBlank",
];

function App() {
  const [selectedInteraction, setSelectedInteraction] =
    useState<InteractionType | null>(null);
  const [interactionData, setInteractionData] =
    useState<Interaction<InteractionType> | null>(null);

  const handleInteractionChange = (newData: Interaction<InteractionType>) => {
    setInteractionData(newData);
  };

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
      case "FillTheBlank":
        return {
          type: "FillTheBlank",
          question: "Example Question for FillTheBlank",
          solution: "Sample Solution",
          difficulty: "difficulty-3",
          interactionInfo: {
            id: "1",
          },
        };
      default:
        throw new Error("Unknown interaction type");
    }
  };

  return (
    <div className="flex flex-col gap-20 w-full p-10">
      {!selectedInteraction && (
        <div className="flex flex-col gap-5">
          {interactionList.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                setSelectedInteraction(item);
                setInteractionData(initialData(item));
              }}
              style={{ background: "#ECFEFD", padding: 5, borderRadius: 5 }}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {selectedInteraction && interactionData && (
        <>
          <Interactions
            value={interactionData}
            onChange={handleInteractionChange}
          />
          <div className="flex gap-4 justify-end">
            <button
              style={{ background: "#ECFEFD", padding: 10, borderRadius: 5 }}
              onClick={() => setSelectedInteraction(null)}
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

export default App;
