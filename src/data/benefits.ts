export type Benefit = {
  icon: "tag" | "home" | "store" | "shield-check";
  title: string;
  description: string;
  tag: string;
};

export const BENEFITS: Benefit[] = [
  {
    icon: "tag",
    title: "Lower Tax on Medical Cannabis",
    description:
      "Registered patients in Michigan purchase from medical-licensed dispensaries with reduced tax exposure compared to adult-use retail — your card can save you on every transaction.",
    tag: "Save More",
  },
  {
    icon: "home",
    title: "Home Cultivation up to 12 Plants",
    description:
      "Under the Michigan Medical Marihuana Act, a registered qualifying patient may cultivate up to 12 marihuana plants in an enclosed, locked facility for personal medical use.",
    tag: "Grow at Home",
  },
  {
    icon: "store",
    title: "Statewide Provisioning Centers",
    description:
      "Access lab-tested medical cannabis flower, concentrates, and edibles at state-licensed provisioning centers across Michigan — from Detroit to the Upper Peninsula.",
    tag: "Statewide Access",
  },
  {
    icon: "shield-check",
    title: "Legal Protection Under the MMMA",
    description:
      "A valid Michigan medical marihuana card provides legal protection for the medical use of cannabis under Michigan's Medical Marihuana Act (MMMA) of 2008 for qualifying patients.",
    tag: "Legally Protected",
  },
];
