import { cinzel } from "@/fonts";
import { styled } from "styled-components";

const StyledArticle = styled.article`
  padding: 0 64px;
`;

export function SectionPreview({ title, content }) {
  return (
    <>
      <h2 className={cinzel.className}>{title}</h2>
      <StyledArticle
        dangerouslySetInnerHTML={{ __html: content }}
      ></StyledArticle>
    </>
  );
}
