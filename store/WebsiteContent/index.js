import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useWebsiteContentStore = create(
  devtools((set) => ({
    isPreview: false,
    websiteId: "64cb80bd20e44f875166aed3",
    content: {
      about: { json: null, html: "" },
      special: { json: null, html: "" },
      hours: { json: null, html: "" },
    },
    updateSection: (sectionName, jsonContent, htmlContent) =>
      set(
        produce((state) => {
          state.content[sectionName].json = jsonContent;
          state.content[sectionName].html = htmlContent;
        }),
        false,
        "websiteContent/updateSection"
      ),
    togglePreview: () =>
      set(
        (state) => ({
          isPreview: !state.isPreview,
        }),
        false,
        "websiteContent/togglePreview"
      ),
  }))
);
