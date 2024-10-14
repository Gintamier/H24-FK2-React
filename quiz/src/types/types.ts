type Question = {
  question: string;
  choices: string[];
  correctAnswerIdx: number;
};

type Quiz = {
  title: string;
  questions: Question[];
};

type ShuffleQuestionsProps = {
  questions: Question[];
  setShuffledQuestions: (shuffled: Question[]) => void;
  shouldShuffle: boolean;
};
