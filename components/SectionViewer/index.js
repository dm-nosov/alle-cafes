import { SectionPreview } from "@/components/SectionPreview";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import {
  ABOUT,
  OPPENING_HOURS,
  SPECIAL,
  getTitleBySectionName,
} from "@/utils/content";
export function SectionViewer() {
  const websiteContent = useWebsiteContentStore((state) => state.content);
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
        title={getTitleBySectionName(OPPENING_HOURS)}
        content={websiteContent[OPPENING_HOURS].html}
      />
    </>
  );
}
