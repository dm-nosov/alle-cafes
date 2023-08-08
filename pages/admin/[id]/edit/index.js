import { Header } from "@/components/Header";
import { SectionEditor } from "@/components/SectionEditor";
import { SectionViewer } from "@/components/SectionViewer";
import { TopAdminToolbar } from "@/components/TopAdminToolbar";
import { ABOUT, SPECIAL, OPPENING_HOURS } from "@/utils/content.js";
import { useWebsiteContentStore } from "@/store/WebsiteContent";

export default function Page() {
  const preview = useWebsiteContentStore((state) => state.isPreview);
  return (
    <>
      <TopAdminToolbar />
      <Header />
      <main>
        {!preview && (
          <>
            <SectionEditor sectionName={ABOUT} />
            <SectionEditor sectionName={SPECIAL} />
            <SectionEditor sectionName={OPPENING_HOURS} />
          </>
        )}
        {preview && <SectionViewer />}
      </main>
    </>
  );
}
