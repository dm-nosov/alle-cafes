import { Navigation } from "@/components/Navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Image from "next/image";
import { headingFont } from "@/fonts";
import { useEffect } from "react";
import { HeroHeading } from "@/components/HeroHeading";
import { Footer } from "@/components/Footer";

const HeroText = styled.p`
  font-size: 24px;
  font-weight: 300;
  text-align: center;
  padding: 0;
  margin: 0.25rem 1rem 1rem 1rem;
`;
const ImageWrapper = styled.div`
  position: relative;
  height: 256px;
`;

export default function Page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/admin");
    }
  }, [status]);

  if (status !== "unauthenticated") {
    return null;
  }
  return (
    <>
      <header>
        <Navigation session={session} />
      </header>
      <main>
        <hgroup>
          <HeroHeading className={headingFont.className}>
            Cafe owner? Add your cafe
          </HeroHeading>
          <HeroText>
            and enjoy the benefits of free online marketing, SEO and web
            presence.
          </HeroText>
        </hgroup>

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
      <Footer />
    </>
  );
}
