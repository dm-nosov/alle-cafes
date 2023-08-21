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
import { ACTION_ADD, ACTION_EDIT, ACTION_VIEW } from "@/utils/websiteCard";
import { cinzel } from "@/fonts";
import { Skeleton } from "@/components/Skeleton";

export default function Page() {
  const router = useRouter();
  const { id: websiteId } = router.query;
  const preview = useWebsiteContentStore((state) => state.isPreview);

  const updateSection = useWebsiteContentStore((state) => state.updateSection);
  const setWebsiteId = useWebsiteContentStore((state) => state.setWebsiteId);

  const { data, isLoading } = useSWR(
    `/api/ws/${websiteId}/editor-content`,
    fetcher
  );

  const {
    data: categoriesData,
    isLoading: isLoadingCategories,
    mutate: mutateCategories,
  } = useSWR(`/api/ws/${websiteId}/categories`, fetcher);

  useEffect(() => {
    if (data) {
      setWebsiteId(websiteId);
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
            {isLoadingCategories && <Skeleton $height={6} />}
            {!isLoadingCategories &&
              categoriesData.categories?.map((category) => (
                <ProductCategoryCard
                  categoryName={category.name}
                  key={category.name}
                  action={ACTION_EDIT}
                  category={category}
                  mutateCategories={mutateCategories}
                />
              ))}

            <ProductCategoryCard action={ACTION_ADD} categoryId={0} />

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
        {preview && (
          <SectionViewer
            websiteId={websiteId}
            categories={categoriesData.categories}
          />
        )}
      </main>
    </>
  );
}
