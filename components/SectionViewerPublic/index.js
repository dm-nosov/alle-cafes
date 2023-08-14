import { SectionPreview } from "@/components/SectionPreview";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import {
  ABOUT,
  OPENING_HOURS,
  SPECIAL,
  getTitleBySectionName,
} from "@/utils/content";
export function SectionViewerPublic({ websiteContent }) {
  return (
    <>
      <SectionPreview
        title={getTitleBySectionName(ABOUT)}
        content={websiteContent[ABOUT].html}
      />
      <SectionPreview
        title={getTitleBySectionName(SPECIAL)}
        content={websiteContent[SPECIAL].html}
      />
      <SectionPreview
        title={getTitleBySectionName(OPENING_HOURS)}
        content={websiteContent[OPENING_HOURS].html}
      />
    </>
  );
}
