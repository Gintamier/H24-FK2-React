import QuestionComp from "@/components/Question";
import StatBar from "@/components/StatBar";
import questions from "@/data/questions.json";
import Reset from "@/components/Reset";
import { Questions } from "@/types/types";
import { useState } from "react";

export default function Home() {
  const allQuestions = questions as Questions;

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const [waitingToAdvance, setWaitingToAdvance] = useState(false);

  const onSubmit = (correct: boolean) => {
    if (correct) setCorrectAnswers(correctAnswers + 1);
    else setIncorrectAnswers(incorrectAnswers + 1);

    setWaitingToAdvance(true);
  };

  const advance = () => {
    setWaitingToAdvance(false);
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  };

  const reset = () => {
    setCurrentQuestionIdx(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
  };

  if (currentQuestionIdx >= allQuestions.questions.length)
    return (
      <Reset
        totalQuestions={allQuestions.questions.length}
        correctAnswers={correctAnswers}
        onPress={reset}
      />
    );

  return (
    <div className="flex flex-col items-center justify-center">
      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={allQuestions.questions.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />
      <QuestionComp
        question={allQuestions.questions[currentQuestionIdx]}
        onSubmit={onSubmit}
      />
      {waitingToAdvance && (
        <button
          onClick={advance}
          className="text-white bg-blue-700 hover:bg-blue-800 font-bold py-2 px-4 rounded"
        >
          Next Question...
        </button>
      )}
    </div>
  );
}
