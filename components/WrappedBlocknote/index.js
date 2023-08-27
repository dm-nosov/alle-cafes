import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import styled from "styled-components";

const BlockNoteWrapper = styled.div`
  border: 1px dashed var(--editor-background);
  margin: 1rem;
`;

export function WrappedBlocknote({ sectionName, sectionData }) {
  const updateSection = useWebsiteContentStore((state) => state.updateSection);

  const editor = useBlockNote({
    initialContent: sectionData,
    onEditorContentChange: async (editor) => {
      let jsonContent = [...editor.topLevelBlocks];

      if (jsonContent && jsonContent.length > 0) {
        jsonContent = jsonContent.filter(
          (contentBlock) =>
            contentBlock.content?.length > 0 ||
            contentBlock.children?.length > 0
        );
      }

      updateSection(
        sectionName,
        jsonContent,
        await editor.blocksToHTML(jsonContent)
      );
    },
  });
  return (
    <BlockNoteWrapper>
      {editor?.topLevelBlocks && <BlockNoteView editor={editor} />}
    </BlockNoteWrapper>
  );
}
