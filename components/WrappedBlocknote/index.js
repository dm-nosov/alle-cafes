import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import styled from "styled-components";

const BlockNoteWrapper = styled.div`
  border: 1px dashed var(--editor-background);
  margin: 1em;
`;

export function WrappedBlocknote({ sectionName, sectionData }) {
  const updateSection = useWebsiteContentStore((state) => state.updateSection);

  const stateSectionData = useWebsiteContentStore(
    (state) => state.content[sectionName].json
  );

  const editor = useBlockNote({
    initialContent: stateSectionData ? stateSectionData : sectionData,
    onEditorContentChange: async (editor) => {
      updateSection(
        sectionName,
        editor.topLevelBlocks,
        await editor.blocksToHTML(editor.topLevelBlocks)
      );
    },
  });

  return (
    <BlockNoteWrapper>
      <BlockNoteView editor={editor} />
    </BlockNoteWrapper>
  );
}
