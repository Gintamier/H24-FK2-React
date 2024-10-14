type Props = {
  totalQuestions: number;
  correctAnswers: number;
  onPress: () => void;
};

function Reset(props: Props) {
  return (
    <div className="border bg-gray-900 text-white p-5 rounded-md w-fit mx-auto mt-5 text-center">
      <h1 className="text-2xl font-bold mb-5">
        You scored: {(props.correctAnswers / props.totalQuestions) * 100}%
      </h1>
      <button
        className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
        onClick={props.onPress}
      >
        Press to Try Again!
      </button>
    </div>
  );
}

export default Reset;
