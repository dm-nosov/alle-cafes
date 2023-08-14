import { SectionViewerPublic } from "@/components/SectionViewerPublic";
import { fetcher } from "@/utils/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import Head from "next/head";
import { Header } from "@/components/Header";

export default function Page({ staticWebsiteContent }) {
  const router = useRouter();
  const { slug: websiteSlug } = router.query;
  const { data, isLoading } = useSWR(`/api/ws-public/${websiteSlug}`, fetcher);

  let siteContent = staticWebsiteContent ? staticWebsiteContent : data;

  if (isLoading) return null;

  return (
    <>
      <Head>
        <title>{siteContent?.title}</title>
        <meta name="description" content={siteContent?.title}></meta>
      </Head>
      <Header />
      {data && (
        <SectionViewerPublic websiteContent={siteContent.editorContent} />
      )}
    </>
  );
}

/* 
Uncomment this when SSG can be possible (outside Vercel)
export async function getStaticPaths() {
  const res = await fetch(
    "https://alle-cafes-git-feature-view-website-dm-nosov.vercel.app/api/ws-public/"
  );
  const websites = await res.json();

  const paths = websites.map((website) => ({
    params: { slug: website.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://alle-cafes-git-feature-view-website-dm-nosov.vercel.app/api/ws-public/${params.slug}`
  );
  const staticWebsiteContent = await res.json();

  return { props: { staticWebsiteContent } };
} */