import QuestionComp from "@/components/Question";
import StatBar from "@/components/StatBar";
import quizzes from "@/data/questions.json";
import Reset from "@/components/Reset";
import { shuffleArray } from "@/components/ShuffleQuestions";
import { useState } from "react";

export default function Home() {
  const [selectedQuizIdx, setSelectedQuizIdx] = useState<number | null>(null);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [waitingToAdvance, setWaitingToAdvance] = useState(false);
  const [randomizedQuestions, setRandomizedQuestions] = useState<Question[]>(
    []
  );
  const [hasShuffled, setHasShuffled] = useState(false);

  const allQuizzes: Quiz[] = quizzes.quizzes;

  const selectQuiz = (quizIdx: number) => {
    setSelectedQuizIdx(quizIdx);
    reset(false, quizIdx);
  };

  const onSubmit = (correct: boolean) => {
    if (correct) setCorrectAnswers((prev) => prev + 1);
    else setIncorrectAnswers((prev) => prev + 1);
    setWaitingToAdvance(true);
  };

  const advance = () => {
    setWaitingToAdvance(false);
    setCurrentQuestionIdx((prev) => prev + 1);
  };

  const reset = (backToSelection: boolean = true, quizIdx: number = -1) => {
    setCurrentQuestionIdx(0);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setHasShuffled(false);
    if (backToSelection) {
      setSelectedQuizIdx(null);
    } else if (quizIdx >= 0) {
      const selectedQuiz = allQuizzes[quizIdx];
      if (selectedQuiz) {
        setRandomizedQuestions(selectedQuiz.questions);
      }
    }
  };

  if (selectedQuizIdx === null) {
    return (
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Select a Quiz</h1>
        {allQuizzes.map((quiz, index) => (
          <button
            key={index}
            onClick={() => selectQuiz(index)}
            className="text-white bg-blue-700 hover:bg-blue-800 font-bold py-2 px-4 rounded mb-2"
          >
            {quiz.title}
          </button>
        ))}
      </div>
    );
  }

  if (!hasShuffled && randomizedQuestions.length > 0) {
    setRandomizedQuestions((prevQuestions) => {
      const shuffled = shuffleArray([...prevQuestions]);
      setHasShuffled(true);
      return shuffled;
    });
  }

  if (currentQuestionIdx >= randomizedQuestions.length) {
    return (
      <Reset
        totalQuestions={randomizedQuestions.length}
        correctAnswers={correctAnswers}
        onPress={() => reset(true)}
      />
    );
  }

  const selectedQuiz = allQuizzes[selectedQuizIdx];

  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-semibold my-5 mb-0 animate-pulse underline">
        {selectedQuiz.title}
      </h2>

      <StatBar
        currentQuestion={currentQuestionIdx + 1}
        totalQuestions={randomizedQuestions.length}
        correct={correctAnswers}
        incorrect={incorrectAnswers}
      />

      <QuestionComp
        question={randomizedQuestions[currentQuestionIdx]}
        onSubmit={onSubmit}
      />

      {waitingToAdvance && (
        <button
          onClick={advance}
          className="text-white bg-blue-700 hover:bg-blue-800 font-bold py-2 px-4 rounded mt-4"
        >
          Next Question...
        </button>
      )}
    </div>
  );
}
