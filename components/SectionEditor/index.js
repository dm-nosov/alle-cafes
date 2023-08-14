import { cinzel } from "@/fonts";
import "@blocknote/core/style.css";
import { getTitleBySectionName } from "@/utils/content";
import { WrappedBlocknote } from "../WrappedBlocknote";
import { Skeleton } from "../Skeleton";

export function SectionEditor({ sectionName, data, isLoading }) {
  const sectionData =
    data && sectionName in data ? JSON.parse(data[sectionName].json) : null;
  return (
    <>
      <h2 className={cinzel.className}>{getTitleBySectionName(sectionName)}</h2>
      {isLoading && <Skeleton $height={10} />}
      {sectionData && (
        <WrappedBlocknote sectionName={sectionName} sectionData={sectionData} />
      )}
    </>
  );
}
