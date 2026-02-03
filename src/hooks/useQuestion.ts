import { useTranslatedText } from './useResponsiveText';

export interface useQuestionProps {
  id: number;
  questionKey: string | string[];
  answerKey: string | string[];
}

export const useQuestion = (): useQuestionProps[] => {
  const questionFirst = useTranslatedText('questionList.questionFirst');
  const answerFirst = useTranslatedText('questionList.answerFirst');

  const questionSecond = useTranslatedText('questionList.questionSecond');
  const answerSecond = useTranslatedText('questionList.answerSecond');

  const questionThird = useTranslatedText('questionList.questionThird');
  const answerThird = useTranslatedText('questionList.answerThird');

  const questionFourth = useTranslatedText('questionList.questionFourth');
  const answerFourth = useTranslatedText('questionList.answerFourth');

  const questionFifth = useTranslatedText('questionList.questionFifth');
  const answerFifth = useTranslatedText('questionList.answerFifth');

  const questionSixth = useTranslatedText('questionList.questionSixth');
  const answerSixth = useTranslatedText('questionList.answerSixth');

  return [
    {
      id: 1,
      questionKey: questionFirst,
      answerKey: answerFirst,
    },
    {
      id: 2,
      questionKey: questionSecond,
      answerKey: answerSecond,
    },
    {
      id: 3,
      questionKey: questionThird,
      answerKey: answerThird,
    },
    {
      id: 4,
      questionKey: questionFourth,
      answerKey: answerFourth,
    },
    {
      id: 5,
      questionKey: questionFifth,
      answerKey: answerFifth,
    },
    {
      id: 6,
      questionKey: questionSixth,
      answerKey: answerSixth,
    },
  ];
};
