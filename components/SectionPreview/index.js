import { headingFont } from "@/fonts";
import { styled } from "styled-components";

const StyledArticle = styled.article`
  padding: 0 1rem;
`;

export function SectionPreview({ title, content }) {
  return (
    <>
      <h2 className={headingFont.className}>{title}</h2>
      <StyledArticle
        dangerouslySetInnerHTML={{ __html: content }}
      ></StyledArticle>
    </>
  );
}
