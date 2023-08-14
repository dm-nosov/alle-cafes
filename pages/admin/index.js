import { Navigation } from "@/components/Navigation";
import { Skeleton } from "@/components/Skeleton";
import { WebsiteCard } from "@/components/WebsiteCard";
import { fetcher } from "@/utils/fetcher";
import { ACTION_VIEW, ACTION_ADD } from "@/utils/websiteCard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";

export default function Page() {
  const { data: session } = useSession();
  const { data, isLoading, error, mutate } = useSWR(`/api/ws/`, fetcher);
  const router = useRouter();

  useEffect(() => {
    if (!session && typeof session != "undefined") {
      router.push("/");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }
  return (
    <>
      <header>
        <Navigation session={session} />
      </header>
      <main>
        <hgroup>
          <h1>Websites</h1>
        </hgroup>

        {data &&
          data.map((website) => (
            <WebsiteCard
              title={website.title}
              slug={website.slug}
              action={ACTION_VIEW}
              key={website._id}
              websiteId={website._id}
              mutate={mutate}
            />
          ))}
        {isLoading && <Skeleton $height={7} />}
        <WebsiteCard
          title="Your title"
          slug="your-slug"
          action={ACTION_ADD}
          websiteId={null}
          mutate={mutate}
        />
      </main>
    </>
  );
}
