import { SectionPreview } from "@/components/SectionPreview";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import {
  ABOUT,
  OPENING_HOURS,
  SPECIAL,
  getTitleBySectionName,
} from "@/utils/content";
import { ProductCategoryCard } from "../ProductCategoryCard";
import { ACTION_PREVIEW, ACTION_SHOW_EMPTY } from "@/utils/websiteCard";
import { headingFont } from "@/fonts";
export function SectionViewerPublic({ websiteContent, categories }) {
  return (
    <main>
      <SectionPreview
        title={getTitleBySectionName(ABOUT)}
        content={websiteContent[ABOUT].html}
      />

      <h2 className={headingFont.className}>Menu</h2>
      {categories.map((category) => (
        <ProductCategoryCard
          key={category.name}
          action={ACTION_PREVIEW}
          category={category}
          isPublicPreview={true}
        />
      ))}
      {categories.length === 0 && (
        <ProductCategoryCard action={ACTION_SHOW_EMPTY} />
      )}
      <SectionPreview
        title={getTitleBySectionName(SPECIAL)}
        content={websiteContent[SPECIAL].html}
      />
      <SectionPreview
        title={getTitleBySectionName(OPENING_HOURS)}
        content={websiteContent[OPENING_HOURS].html}
      />
    </main>
  );
}
