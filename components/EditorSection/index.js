import { cinzel } from "@/fonts";
import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

const initContent = {
  About: [
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
  "Special Offers": [
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
  "Opening Hours": [
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
};

export function EditorSection({ title }) {
  const editor = useBlockNote({
    initialContent: initContent[title],
    onEditorContentChange: (editor) => {
      console.log(JSON.stringify(editor.topLevelBlocks));
    },
  });
  return (
    <>
      <h2 className={cinzel.className}>{title}</h2>
      <BlockNoteView editor={editor} />
    </>
  );
}
