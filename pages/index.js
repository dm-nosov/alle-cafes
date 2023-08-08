import { Navigation } from "@/components/Navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import { cinzel } from "@/fonts";

const HeroHeading = styled.h1`
  font-size: 32px;
  text-align: center;
  padding: 0;
  margin-bottom: 0;
`;
const HeroText = styled.p`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  padding: 0;
  margin: 0.25em 1em 1em 1em;
`;
const ImageWrapper = styled.div`
  position: relative;
  height: 256px;
`;

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <></>;
  } else if (status === "authenticated") {
    router.push("/admin");
  } else
    return (
      <>
        <header>
          <Navigation session={session} />
        </header>
        <main>
          <HeroHeading className={cinzel.className}>
            Cafe owner? Add your cafe
          </HeroHeading>
          <HeroText>
            and enjoy the benefits of free online marketing, SEO and web
            presence.
          </HeroText>
          <ImageWrapper>
            <Image
              src="/img/alle-cafes-logo.svg"
              width={0}
              height={0}
              fill={true}
              priority={true}
              alt="Add your cafe to our catalog"
              style={{ objectFit: "contain" }}
            />
          </ImageWrapper>
        </main>
      </>
    );
}
