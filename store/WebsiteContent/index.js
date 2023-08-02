import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useWebsiteContentStore = create(
  devtools((set) => ({
    isPreview: false,
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
        })
      ),
    togglePreview: () =>
      set((state) => ({
        isPreview: !state.isPreview,
      })),
  }))
);
