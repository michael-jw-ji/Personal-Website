import { createContext, useContext } from "react";

/* One set of pages, two skins. `base` prefixes every internal route so the
   same pages can be served at "/" and under "/testing" without linking out
   of whichever version the visitor is in. `variant` gates the few pieces of
   markup only one skin draws; everything else is CSS. */
export type Site = { base: string; variant: "flight" | "mono" };

export const SiteContext = createContext<Site>({ base: "", variant: "flight" });

export const useSite = () => {
  const site = useContext(SiteContext);
  return { ...site, to: (path: string) => `${site.base}${path}` || "/" };
};
