import { cinzel } from "@/fonts";
import "@blocknote/core/style.css";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import { getTitleBySectionName } from "@/utils/content";
import useSWR from "swr";
import { WrappedBlocknote } from "../WrappedBlocknote";
import { useEffect } from "react";
import { fetcher } from "@/utils/fetcher";
export function SectionEditor({ sectionName }) {
  const websiteId = useWebsiteContentStore((state) => state.websiteId);
  const updateSection = useWebsiteContentStore((state) => state.updateSection);
  const { data, isLoading } = useSWR(
    `/api/ws/${websiteId}/editor-content`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      updateSection(
        sectionName,
        JSON.parse(data[sectionName].json),
        data[sectionName].html
      );
    }
  }, [data]);
  const sectionData = data ? JSON.parse(data[sectionName].json) : [];

  if (!data || isLoading) {
    return (
      <>
        <h2 className={cinzel.className}>
          {getTitleBySectionName(sectionName)}
        </h2>
        <p>Loading...</p>
      </>
    );
  }

  return (
    <>
      <h2 className={cinzel.className}>{getTitleBySectionName(sectionName)}</h2>
      <WrappedBlocknote sectionName={sectionName} sectionData={sectionData} />
    </>
  );
}
