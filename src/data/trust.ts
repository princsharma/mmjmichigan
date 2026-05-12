export type TrustChip = {
  icon: "lock" | "check" | "user";
  label: string;
};

export const HERO_TRUST: TrustChip[] = [
  { icon: "lock", label: "HIPAA-Compliant" },
  { icon: "check", label: "Money-Back Guarantee" },
  { icon: "user", label: "Michigan-Licensed Doctors" },
];

export const CERT_BADGES = [
  { icon: "check" as const, label: "Board-Certified" },
  { icon: "lock" as const, label: "HIPAA Compliant" },
  { icon: "scale" as const, label: "MMMA Compliant" },
];

export const CTA_CHIPS = [
  { icon: "clock" as const, label: "Same-Day Appointments" },
  { icon: "monitor" as const, label: "100% Online Process" },
  { icon: "lock" as const, label: "100% Confidential" },
  { icon: "user" as const, label: "Michigan-Licensed Physicians" },
];
