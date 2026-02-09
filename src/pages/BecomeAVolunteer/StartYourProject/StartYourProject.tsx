import { Description } from '../../../components/Description';
import { TagAndTitle } from '../../../components/TagAndTitle';
import { useSectionHeader } from '../../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../../locales/sectionHeaders';

export const StartYourProject = () => {
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } =
    SECTION_HEADERS.startYourProject;
  const { tag, title, description } = useSectionHeader({
    tagKey,
    titleKey,
    descriptionKey,
  });

  return (
    <div>
      <TagAndTitle tag={tag} title={title} tagColor={tagColor} titleColor={titleColor} />
      <Description title={description} />
    </div>
  );
};
