import { Header } from "@/components/Header";
import { SectionEditor } from "@/components/SectionEditor";
import { SectionViewer } from "@/components/SectionViewer";
import { inter } from "@/fonts";
import { ABOUT, SPECIAL, OPPENING_HOURS } from "@/pages/utils/content.js";
import { useWebsiteContentStore } from "@/store/WebsiteContent";

export default function Page() {
  const preview = useWebsiteContentStore((state) => state.isPreview);
  const togglePreview = useWebsiteContentStore((state) => state.togglePreview);
  return (
    <main className={inter.className}>
      <Header />
      <button onClick={togglePreview}>Toggle</button>
      {!preview && (
        <>
          <SectionEditor sectionName={ABOUT} />
          <SectionEditor sectionName={SPECIAL} />
          <SectionEditor sectionName={OPPENING_HOURS} />
        </>
      )}
      {preview && <SectionViewer />}
    </main>
  );
}
