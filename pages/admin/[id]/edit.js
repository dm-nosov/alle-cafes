import { Header } from "@/components/Header";
import { SectionEditor } from "@/components/SectionEditor";
import { SectionViewer } from "@/components/SectionViewer";
import { TopAdminToolbar } from "@/components/TopAdminToolbar";
import { ABOUT, SPECIAL, OPENING_HOURS } from "@/utils/content.js";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "@/utils/fetcher";
import { useEffect } from "react";
import { ProductCategoryCard } from "@/components/ProductCategoryCard/index";
import { categories, products } from "@/utils/productData";
import { ACTION_EDIT, ACTION_VIEW } from "@/utils/websiteCard";
import { cinzel } from "@/fonts";

export default function Page() {
  const router = useRouter();
  const { id: websiteId } = router.query;
  const preview = useWebsiteContentStore((state) => state.isPreview);

  const updateSection = useWebsiteContentStore((state) => state.updateSection);
  const { data, isLoading } = useSWR(
    `/api/ws/${websiteId}/editor-content`,
    fetcher
  );

  useEffect(() => {
    if (data) {
      for (const sectionName of [ABOUT, SPECIAL, OPENING_HOURS]) {
        if (data[sectionName]) {
          updateSection(
            sectionName,
            JSON.parse(data[sectionName].json),
            data[sectionName].html
          );
        }
      }
    }
  }, [data]);

  return (
    <>
      <TopAdminToolbar websiteId={websiteId} />
      <Header />
      <main>
        {!preview && (
          <>
            <SectionEditor
              sectionName={ABOUT}
              data={data}
              isLoading={isLoading}
            />
            <h2 className={cinzel.className}>Menu</h2>
            {categories.map((category) => (
              <ProductCategoryCard
                categoryName={category.categoryName}
                key={category.categoryId}
                action={ACTION_EDIT}
                products={products}
              />
            ))}
            <SectionEditor
              sectionName={SPECIAL}
              data={data}
              isLoading={isLoading}
            />
            <SectionEditor
              sectionName={OPENING_HOURS}
              data={data}
              isLoading={isLoading}
            />
          </>
        )}
        {preview && <SectionViewer websiteId={websiteId} />}
      </main>
    </>
  );
}
