import { EditorSection } from "@/components/EditorSection";
import { Header } from "@/components/Header";
import { heebo } from "@/fonts";

export default function Page() {
  return (
    <main className={heebo.className}>
      <Header />
      <EditorSection title="About" />
      <EditorSection title="Special Offers" />
      <EditorSection title="Opening Hours" />
    </main>
  );
}
