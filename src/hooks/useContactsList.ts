import { useTranslatedText } from './useResponsiveText';
import email from '../imgs/Email.svg';
import user from '../imgs/User.svg';
import folder from '../imgs/Folder.svg';

export interface ContactsListProps {
  id: number;
  descriptionKey: string | string[];
  email: string;
  img: string;
}

export const useContactsList = (): ContactsListProps[] => {
  const questionsDescription = useTranslatedText('contactsList.questionsDescription');
  const joiningDescription = useTranslatedText('contactsList.joiningDescription');
  const reachedDescription = useTranslatedText('contactsList.reachedDescription');

  return [
    {
      id: 1,
      descriptionKey: questionsDescription,
      email: 'Info@ecoculture.org',
      img: email,
    },
    {
      id: 2,
      descriptionKey: joiningDescription,
      email: 'volunteers@ecofuture.org',
      img: user,
    },
    {
      id: 3,
      descriptionKey: reachedDescription,
      email: 'projects@ecofuture.org',
      img: folder,
    },
  ];
};
