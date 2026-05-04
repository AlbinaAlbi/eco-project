import { Description } from '../Description';
import { TagAndTitle } from '../TagAndTitle';
import { useSectionHeader } from '../../hooks/useSectionHeader';
import { SECTION_HEADERS } from '../../locales/sectionHeaders';

export const VolunteerHeader = () => {
  const { tagKey, titleKey, descriptionKey, tagColor, titleColor } = SECTION_HEADERS.volunteer;
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
