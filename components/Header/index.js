import Image from "next/image";
import styled from "styled-components";
import { cinzel } from "@/fonts";

const StyledHeroBlock = styled.header`
  position: relative;
  height: 360px;
  @media (max-width: 420px) {
    height: 200px;
  }
`;

const HeroText = styled.h1`
  position: absolute;
  left: 50%;
  top: 50%;
  padding: 0 1rem;
  text-align: center;
  transform: translate(-50%, -50%);
  text-shadow: 2px 1px 5px black;
  color: white;
`;

export function Header() {
  return (
    <StyledHeroBlock className={cinzel.className}>
      <Image
        src="/img/hero-image.png"
        width={0}
        height={0}
        fill={true}
        priority={true}
        alt="Picture of the author"
        sizes="(max-width: 768px) 100vw"
        style={{ objectFit: "cover" }}
        quality={90}
      />
      <HeroText>Kurze Pause</HeroText>
    </StyledHeroBlock>
  );
}
