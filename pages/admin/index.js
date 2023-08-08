import { Navigation } from "@/components/Navigation";
import { WebsiteCard } from "@/components/WebsiteCard";
import { signOut, useSession } from "next-auth/react";

export default function Page() {
  const websites = [{ name: "Kurze Pause", id: 1 }];
  const { data: session } = useSession();
  return (
    <>
      <header>
        <Navigation session={session} />
      </header>
      <main>
        <h1>Websites</h1>
        {websites.map((website) => (
          <WebsiteCard name={website.name} key={website.id} />
        ))}
      </main>
    </>
  );
}
