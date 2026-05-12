export type RenewalStep = {
  num: number;
  icon: "login" | "doc" | "check";
  title: string;
  description: string;
};

export const RENEWAL_STEPS: RenewalStep[] = [
  {
    num: 1,
    icon: "login",
    title: "Log Into the CRA Patient Portal",
    description:
      "Sign in to your Michigan Medical Marihuana Program account on the Cannabis Regulatory Agency portal before your card's expiration date.",
  },
  {
    num: 2,
    icon: "doc",
    title: "Refresh Your Physician Certification",
    description:
      "If your physician certification has expired, schedule a renewal evaluation with a Michigan-licensed cannabis physician to confirm continued eligibility.",
  },
  {
    num: 3,
    icon: "check",
    title: "Submit and Pay the State Fee",
    description:
      "Complete your renewal application online, pay the state registration fee, and submit it to the CRA. Michigan medical marihuana cards are typically valid for two years.",
  },
];
