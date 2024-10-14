import { useEffect } from "react";

export const shuffleArray = <T,>(array: T[]): T[] => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ShuffleQuestions: React.FC<ShuffleQuestionsProps> = ({
  questions,
  setShuffledQuestions,
  shouldShuffle,
}) => {
  useEffect(() => {
    if (shouldShuffle) {
      const shuffled = shuffleArray([...questions]);
      setShuffledQuestions(shuffled);
    }
  }, [questions, setShuffledQuestions, shouldShuffle]);

  return null;
};

export default ShuffleQuestions;
