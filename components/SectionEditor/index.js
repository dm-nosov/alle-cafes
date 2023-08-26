import { headingFont } from "@/fonts";
import "@blocknote/core/style.css";
import { getTitleBySectionName } from "@/utils/content";
import { WrappedBlocknote } from "../WrappedBlocknote";
import { Skeleton } from "../Skeleton";
import { useWebsiteContentStore } from "@/store/WebsiteContent";

export function SectionEditor({ sectionName, isLoading }) {
  const sectionData = useWebsiteContentStore(
    (state) => state.content[sectionName].json
  );
  return (
    <>
      <h2 className={headingFont.className}>
        {getTitleBySectionName(sectionName)}
      </h2>
      {isLoading && <Skeleton $height={10} />}
      {sectionData && (
        <WrappedBlocknote sectionName={sectionName} sectionData={sectionData} />
      )}
    </>
  );
}
