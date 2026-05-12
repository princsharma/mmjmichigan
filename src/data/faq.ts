export type FaqGroupId =
  | "getting-started"
  | "eligibility"
  | "card-and-renewal"
  | "legal-and-use";

export type FaqItem = {
  question: string;
  answer: string;
  group: FaqGroupId;
};

export type FaqGroup = {
  id: FaqGroupId;
  label: string;
};

export const FAQ_GROUPS: FaqGroup[] = [
  { id: "getting-started", label: "Getting Started" },
  { id: "eligibility", label: "Eligibility" },
  { id: "card-and-renewal", label: "Card & Renewal" },
  { id: "legal-and-use", label: "Legal & Use" },
];

export const FAQS: FaqItem[] = [
  {
    group: "getting-started",
    question: "How do I get a Michigan medical marijuana card online?",
    answer:
      "You can apply for your Michigan medical marihuana card by completing an online evaluation with a Michigan-licensed physician. If approved, you'll register through the Michigan Medical Marihuana Program (MMMP) on the Cannabis Regulatory Agency (CRA) portal and pay the state registration fee.",
  },
  {
    group: "getting-started",
    question: "How much does the Michigan MMJ card cost?",
    answer:
      "Total cost includes a physician evaluation fee (starting at $129 for renewals and $149 for new patients with us) plus a separate state registration fee paid directly to the Cannabis Regulatory Agency. Please verify the current CRA fee on the official Michigan.gov website before applying.",
  },
  {
    group: "getting-started",
    question: "How long does the approval process take?",
    answer:
      "The physician evaluation is typically completed the same day. State processing times through the CRA vary, but many Michigan patients receive their card within a few weeks.",
  },
  {
    group: "card-and-renewal",
    question: "How long is a Michigan medical marihuana card valid?",
    answer:
      "Michigan medical marihuana cards issued through the MMMP are typically valid for two years from the date of issue. You will need to renew with the CRA — and obtain an updated physician certification — before expiration to maintain uninterrupted access.",
  },
  {
    group: "card-and-renewal",
    question: "Can I designate a caregiver in Michigan?",
    answer:
      "Yes. Under the Michigan Medical Marihuana Act, a qualifying patient may designate a primary caregiver who is at least 21 years old and has agreed to assist with the patient's medical use of marihuana. Caregivers must register separately with the CRA and meet eligibility requirements.",
  },
  {
    group: "card-and-renewal",
    question: "What if my card expires?",
    answer:
      "If your card expires, you'll lose state-issued legal protections until it is renewed. Re-register through the CRA patient portal as soon as possible. If your physician certification has also expired, you'll need a fresh evaluation before resubmitting.",
  },
  {
    group: "eligibility",
    question: "Who qualifies for a Michigan medical marihuana card?",
    answer:
      "To qualify, you must be a Michigan resident, be at least 18 years old (minors may apply with a parent or guardian acting as primary caregiver), and have a debilitating medical condition recognized under the MMMA, such as cancer, glaucoma, HIV/AIDS, PTSD, severe chronic pain, severe nausea, or one of the other listed conditions.",
  },
  {
    group: "eligibility",
    question: "What documents do I need to apply?",
    answer:
      "You typically need a Michigan-issued driver's license or state ID showing a Michigan address, a signed physician certification from your evaluation, and the state application fee. Caregivers must also submit a background check.",
  },
  {
    group: "legal-and-use",
    question: "Can I grow medical marihuana at home in Michigan?",
    answer:
      "Yes. Under the MMMA, a registered qualifying patient may cultivate up to 12 marihuana plants in an enclosed, locked facility for personal medical use, in compliance with state and local regulations.",
  },
  {
    group: "legal-and-use",
    question: "Can I use medical marihuana in public in Michigan?",
    answer:
      "No. Public consumption of marihuana — medical or recreational — is not permitted in Michigan. Use is restricted to private property where consumption is allowed.",
  },
  {
    group: "legal-and-use",
    question: "Does Michigan honor out-of-state medical marijuana cards?",
    answer:
      "Michigan allows visiting qualifying patients with a valid out-of-state registry identification card to purchase medical marihuana from licensed Michigan provisioning centers, but exact reciprocity rules and product limits may change — confirm the current CRA guidance before traveling.",
  },
];
