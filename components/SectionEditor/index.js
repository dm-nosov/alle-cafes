import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { cinzel } from "@/fonts";
import "@blocknote/core/style.css";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import { useEffect } from "react";
import { getTitleBySectionName } from "@/pages/utils/content";

const initContent = {
  about: {
    json: [
      {
        id: "a7fda7eb-6632-48e0-a7f4-d07471906ef4",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "At Café Serendipity, we believe in the magic of unexpected moments and delightful encounters. Our cozy little café is more than just a place to grab a cup of coffee; it's a haven where friendships are forged, creative ideas are sparked, and cherished memories are made",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "a7fda7eb-6632-48e0-a7f4-d07471906ef5",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "We take pride in serving only the finest quality coffee beans, carefully sourced from sustainable and ethical suppliers. Our skilled baristas craft each beverage with love and precision, ensuring that every sip takes you on a delightful journey of flavors and aromas. From classic espresso-based drinks to unique signature blends, we have something to.",
            styles: {},
          },
        ],
        children: [],
      },
    ],
    html: `<p class="_inlineContent_xgzwr_240">At Café Serendipity, we believe in the magic of unexpected moments and delightful encounters. Our cozy little café is more than just a place to grab a cup of coffee; it's a haven where friendships are forged, creative ideas are sparked, and cherished memories are made</p><p class="_inlineContent_xgzwr_240">We take pride in serving only the finest quality coffee beans, carefully sourced from sustainable and ethical suppliers. Our skilled baristas craft each beverage with love and precision, ensuring that every sip takes you on a delightful journey of flavors and aromas. From classic espresso-based drinks to unique signature blends, we have something to.</p><p class="_inlineContent_xgzwr_240"></p>`,
  },
  special: {
    json: [
      {
        id: "a7fda7eb-6632-48e0-a7f4-d07471906ef4",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "🍫 ",
            styles: {},
          },
          {
            type: "text",
            text: "Chocolate Lovers' Paradise",
            styles: {
              bold: true,
            },
          },
          {
            type: "text",
            text: " 🍫 ",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "6a14224b-4690-49bb-a381-45f5ecd82cd5",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "For all the chocolate enthusiasts out there, we have created a mouthwatering assortment of chocolate-infused delights. From velvety-rich chocolate truffles to decadent double chocolate muffins, each bite is a blissful celebration of cocoa goodness. ",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "08abe1e9-9d43-4ed8-98c7-1b64466bc5d0",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "Features: ",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "b6c66212-e38e-4ec6-ac1f-f1dd2b6011d8",
        type: "bulletListItem",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "Finest ingredients",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "93f0ff4e-5046-4c4b-ba50-07e1abc3362e",
        type: "bulletListItem",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "Best selection",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "aafafd24-b02b-484c-85e7-daaec591be49",
        type: "bulletListItem",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "Astonishing price",
            styles: {},
          },
        ],
        children: [],
      },
      {
        id: "1289590c-fbde-4206-b896-aff7adec36b6",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "Pair your favorite chocolate treat with our specialty coffee or hot chocolate for the ultimate indulgence.",
            styles: {},
          },
        ],
        children: [],
      },
    ],
    html: `<p class="_inlineContent_xgzwr_240">🍫 <strong>Chocolate Lovers' Paradise</strong> 🍫 </p><p class="_inlineContent_xgzwr_240">For all the chocolate enthusiasts out there, we have created a mouthwatering assortment of chocolate-infused delights. From velvety-rich chocolate truffles to decadent double chocolate muffins, each bite is a blissful celebration of cocoa goodness. </p><p class="_inlineContent_xgzwr_240">Features: </p><ul><li><p class="_inlineContent_xgzwr_240">Finest ingredients</p></li><li><p class="_inlineContent_xgzwr_240">Best selection</p></li><li><p class="_inlineContent_xgzwr_240">Astonishing price</p></li></ul><p class="_inlineContent_xgzwr_240">Pair your favorite chocolate treat with our specialty coffee or hot chocolate for the ultimate indulgence.</p><p class="_inlineContent_xgzwr_240"></p>`,
  },
  hours: {
    json: [
      {
        id: "a7fda7eb-6632-48e0-a7f4-d07471906ef4",
        type: "paragraph",
        props: {
          textColor: "default",
          backgroundColor: "default",
          textAlignment: "left",
        },
        content: [
          {
            type: "text",
            text: "We are temporary closed! Fr-Mon 8:00 bis 16:00",
            styles: {},
          },
        ],
        children: [],
      },
    ],
    html: `<p class="_inlineContent_xgzwr_240">We are temporary closed! Fr-Mon 8:00 bis 16:00</p><p class="_inlineContent_xgzwr_240"></p>`,
  },
};

export function SectionEditor({ sectionName }) {
  const updateSection = useWebsiteContentStore((state) => state.updateSection);
  const sectionContent = useWebsiteContentStore(
    (state) => state.content[sectionName]
  );

  console.log("sectionContent", sectionName, sectionContent);

  useEffect(() => {
    updateSection(
      sectionName,
      initContent[sectionName].json,
      initContent[sectionName].html
    );
    console.log("updateSection useEffect");
  }, []);

  const initialContent =
    sectionContent && sectionContent.json
      ? sectionContent.json
      : initContent[sectionName].json;

  console.log("initialContent", sectionName, initialContent);
  const editor = useBlockNote({
    initialContent: initialContent,
    onEditorContentChange: async (editor) => {
      updateSection(
        sectionName,
        editor.topLevelBlocks,
        await editor.blocksToHTML(editor.topLevelBlocks)
      );
    },
  });

  return (
    <>
      <h2 className={cinzel.className}>{getTitleBySectionName(sectionName)}</h2>
      {initialContent && <BlockNoteView editor={editor} />}
    </>
  );
}
