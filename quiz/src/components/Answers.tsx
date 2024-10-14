import { useState, useEffect } from "react";
import { Question } from "@/types/types";
import Answer from "./Answer";

type Props = {
  question: Question;
  onSubmit: (correct: boolean) => void;
};

function Answers(props: Props) {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
  }, [props.question]);

  const onPress = (idx: number) => {
    setShowAnswer(true);
    props.onSubmit(props.question.correctAnswerIdx === idx);
  };

  return (
    <div className="grid grid-cols-2 gap-4 w-fit mx-auto mt-5">
      {props.question.choices.map((choice, idx) => {
        let color = "";

        if (showAnswer && props.question.correctAnswerIdx === idx)
          color = "green";
        else if (showAnswer) color = "red";

        return (
          <Answer
            text={choice}
            onPress={() => onPress(idx)}
            color={color}
            disabled={showAnswer}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default Answers;
