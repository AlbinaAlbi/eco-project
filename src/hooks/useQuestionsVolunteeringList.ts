import { useTranslatedText } from './useResponsiveText';

export interface QuestionsVolunteeringProps {
  id: number;
  questionKey: string | string[];
  answerKey: string | string[];
}

export const useQuestionsVolunteeringList = (): QuestionsVolunteeringProps[] => {
  const questionFirst = useTranslatedText('questionsVolunteering.questionFirst');
  const answerFirst = useTranslatedText('questionsVolunteering.answerFirst');

  const questionSecond = useTranslatedText('questionsVolunteering.questionSecond');
  const answerSecond = useTranslatedText('questionsVolunteering.answerSecond');

  const questionThird = useTranslatedText('questionsVolunteering.questionThird');
  const answerThird = useTranslatedText('questionsVolunteering.answerThird');

  const questionFourth = useTranslatedText('questionsVolunteering.questionFourth');
  const answerFourth = useTranslatedText('questionsVolunteering.answerFourth');

  const questionFifth = useTranslatedText('questionsVolunteering.questionFifth');
  const answerFifth = useTranslatedText('questionsVolunteering.answerFifth');

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
  ];
};
