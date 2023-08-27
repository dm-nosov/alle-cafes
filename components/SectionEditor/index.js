import { headingFont } from "@/fonts";
import "@blocknote/core/style.css";
import { getTitleBySectionName } from "@/utils/content";
import { WrappedBlocknote } from "../WrappedBlocknote";
import { Skeleton } from "../Skeleton";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import { useEffect, useState } from "react";

export function SectionEditor({ sectionName, isLoading }) {
  const sectionData = useWebsiteContentStore(
    (state) => state.content[sectionName].json
  );

  const [showBlocknote, setShowBlocknote] = useState(true);

  useEffect(() => {
    async function rerenderBlockNote() {
      setShowBlocknote(false);
      await new Promise((resolve) => setTimeout(resolve, 50));
      setShowBlocknote(true);
    }
    // A dirty hack to re-render the third-party component BlockNoteView which caches
    rerenderBlockNote();
  }, []);
  return (
    <>
      <h2 className={headingFont.className}>
        {getTitleBySectionName(sectionName)}
      </h2>
      {isLoading && <Skeleton $height={10} />}
      {sectionData && showBlocknote && (
        <WrappedBlocknote sectionName={sectionName} sectionData={sectionData} />
      )}
    </>
  );
}
