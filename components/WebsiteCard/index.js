import { useState } from "react";
import { WebsiteCardView } from "../WebsiteCardView";
import { WebsiteCardEdit } from "../WebsiteCardEdit";
import { ACTION_EDIT, ACTION_VIEW, ACTION_ADD } from "@/utils/websiteCard";
import { WebsiteCardNew } from "../WebsiteCardNew";

export function WebsiteCard({ title, slug, action, websiteId, mutate }) {
  const [cardAction, setCardAction] = useState(action);

  let cardView = null;

  switch (cardAction) {
    case ACTION_VIEW:
      cardView = (
        <WebsiteCardView
          title={title}
          slug={slug}
          changeCardAction={setCardAction}
          websiteId={websiteId}
          mutate={mutate}
        />
      );
      break;
    case ACTION_EDIT:
      cardView = (
        <WebsiteCardEdit
          title={title}
          slug={slug}
          changeCardAction={setCardAction}
          websiteId={websiteId}
          mutate={mutate}
        />
      );
      break;
    case ACTION_ADD:
      cardView = <WebsiteCardNew changeCardAction={setCardAction} />;
      break;
  }

  return <>{cardView}</>;
}
