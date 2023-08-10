import { Button } from "@/components/Button";
import { Navigation } from "@/components/Navigation";
import { WebsiteCard } from "@/components/WebsiteCard";
import { fetcher } from "@/utils/fetcher";
import { ACTION_VIEW } from "@/utils/websiteCard";
import { useSession } from "next-auth/react";
import useSWR from "swr";

export default function Page() {
  const { data: session } = useSession();
  const { data, isLoading, mutate } = useSWR(`/api/ws/`, fetcher);

  if (!data || isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
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

        {data.map((website) => (
          <WebsiteCard
            title={website.title}
            slug={website.slug}
            action={ACTION_VIEW}
            key={website._id}
            websiteId={website._id}
            mutate={mutate}
          />
        ))}
      </main>
    </>
  );
}
