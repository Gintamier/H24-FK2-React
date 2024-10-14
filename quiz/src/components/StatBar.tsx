type Props = {
  currentQuestion: number;
  totalQuestions: number;
  correct: number;
  incorrect: number;
};

function StatBar(props: Props) {
  return (
    <div className="flex flex-row space-x-5 border bg-gray-900 text-white p-5 rounded-md w-fit mx-auto mt-5 justify-center">
      <p>
        Question {props.currentQuestion}/{props.totalQuestions}
      </p>
      <p>Correct: {props.correct}</p>
      <p>Incorrect: {props.incorrect}</p>
    </div>
  );
}

export default StatBar;
