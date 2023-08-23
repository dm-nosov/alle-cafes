import { SectionViewerPublic } from "@/components/SectionViewerPublic";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";
import { Header } from "@/components/Header";
import { Skeleton } from "@/components/Skeleton";

export default function Page() {
  const router = useRouter();
  const { slug: websiteSlug } = router.query;
  const { data, isLoading } = useSWR(`/api/ws-public/${websiteSlug}`, fetcher);

  return (
    <>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.title}></meta>
      </Head>
      <Header />
      {data && (
        <SectionViewerPublic
          websiteContent={data.editorContent}
          categories={data.categories}
        />
      )}
      {isLoading && <Skeleton $height={10} />}
    </>
  );
}
