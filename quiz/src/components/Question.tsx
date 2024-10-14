import { Question } from "@/types/types";
import Answers from "./Answers";

type Props = {
  question: Question;
  onSubmit: (correct: boolean) => void;
};

function QuestionComp(props: Props) {
  return (
    <div className="flex flex-col items-center pb-5">
      <h3 className="text-2xl font-bold text-center mt-5 w-80">
        {props.question.question}
      </h3>
      <Answers question={props.question} onSubmit={props.onSubmit} />
    </div>
  );
}

export default QuestionComp;
