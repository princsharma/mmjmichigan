export type PricingPlan = {
  id: "new" | "renewal" | "caregiver";
  popular: boolean;
  title: string;
  subtitle: string;
  price: number;
  icon: "doc" | "refresh" | "users";
  features: string[];
  ctaLabel: string;
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "new",
    popular: true,
    title: "New MMJ Card",
    subtitle: "Complete Michigan evaluation & certification",
    price: 149,
    icon: "doc",
    features: [
      "Online consultation with a Michigan-licensed physician",
      "Signed Michigan MMJ physician certification",
      "Personalized treatment guidance",
      "Help submitting through the CRA patient portal",
      "100% money-back guarantee if not approved",
    ],
    ctaLabel: "Apply for Your MMJ Card",
  },
  {
    id: "renewal",
    popular: false,
    title: "Card Renewal",
    subtitle: "Two-year MMMP renewal",
    price: 129,
    icon: "refresh",
    features: [
      "Quick renewal consultation",
      "Updated physician certification for the MMMP",
      "Treatment plan review",
      "Same-day appointments available",
      "7-day patient support",
    ],
    ctaLabel: "Renew Your MMJ Card",
  },
  {
    id: "caregiver",
    popular: false,
    title: "Caregiver Add-On",
    subtitle: "Designate a primary caregiver",
    price: 49,
    icon: "users",
    features: [
      "Caregiver eligibility review",
      "Help with the CRA caregiver application",
      "Document checklist for caregiver registration",
      "Add up to the state-allowed number of patients",
      "Bundle discount with new card purchase",
    ],
    ctaLabel: "Add a Caregiver",
  },
];
