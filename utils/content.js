export const ABOUT = "about";
export const SPECIAL = "special";
export const OPPENING_HOURS = "hours";

export function getTitleBySectionName(sectionName) {
  switch (sectionName) {
    case ABOUT:
      return "About Us";
    case SPECIAL:
      return "Special Offers";
    case OPPENING_HOURS:
      return "Opening Hours";
  }
}
