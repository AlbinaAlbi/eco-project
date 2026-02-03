import { useTranslatedText } from './useResponsiveText';

export interface useQuestionCommomListProps {
  id: number;
  questionKey: string | string[];
  answerKey: string | string[];
}

export const useQuestionCommomList = (): useQuestionCommomListProps[] => {
  const questionFirst = useTranslatedText('questionCommomList.questionFirst');
  const answerFirst = useTranslatedText('questionCommomList.answerFirst');

  const questionSecond = useTranslatedText('questionCommomList.questionSecond');
  const answerSecond = useTranslatedText('questionCommomList.answerSecond');

  const questionThird = useTranslatedText('questionCommomList.questionThird');
  const answerThird = useTranslatedText('questionCommomList.answerThird');

  const questionFourth = useTranslatedText('questionCommomList.questionFourth');
  const answerFourth = useTranslatedText('questionCommomList.answerFourth');

  const questionFifth = useTranslatedText('questionCommomList.questionFifth');
  const answerFifth = useTranslatedText('questionCommomList.answerFifth');

  const questionSixth = useTranslatedText('questionCommomList.questionSixth');
  const answerSixth = useTranslatedText('questionCommomList.answerSixth');

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
