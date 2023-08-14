export const ABOUT = "about";
export const SPECIAL = "special";
export const OPENING_HOURS = "hours";

export function getTitleBySectionName(sectionName) {
  switch (sectionName) {
    case ABOUT:
      return "About Us";
    case SPECIAL:
      return "Special Offers";
    case OPENING_HOURS:
      return "Opening Hours";
  }
}
