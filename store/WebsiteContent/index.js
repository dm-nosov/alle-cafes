import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useWebsiteContentStore = create(
  devtools((set) => ({
    isPreview: false,
    websiteId: "",
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
    setWebsiteId: (newWebsiteId) =>
      set(
        () => ({
          websiteId: newWebsiteId,
        }),
        false,
        "websiteContent/setWebsiteId"
      ),
    resetContent: () =>
      set(
        {
          content: {
            about: { json: null, html: "" },
            special: { json: null, html: "" },
            hours: { json: null, html: "" },
          },
        },
        false,
        "websiteContent/resetContent"
      ),
    resetPreview: () =>
      set(
        () => ({
          isPreview: false,
        }),
        false,
        "websiteContent/resetPreview"
      ),
  }))
);
