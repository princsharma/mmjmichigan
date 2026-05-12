export type WhyUsItem = {
  num: string;
  icon: "shield-check" | "clock" | "home" | "dollar" | "lock" | "support";
  title: string;
  description: string;
};

export const WHY_US: WhyUsItem[] = [
  {
    num: "01",
    icon: "shield-check",
    title: "Michigan-Licensed Doctors",
    description:
      "Every consultation is conducted by a Michigan-licensed physician familiar with the Michigan Medical Marihuana Program (MMMP) and Cannabis Regulatory Agency requirements.",
  },
  {
    num: "02",
    icon: "clock",
    title: "Convenient Telehealth Evaluations",
    description:
      "Complete your MMJ evaluation securely from anywhere in Michigan — no clinic visit required. Same-day appointments are typically available.",
  },
  {
    num: "03",
    icon: "home",
    title: "Trusted by Michigan Patients",
    description:
      "Patients across Detroit, Grand Rapids, Lansing, Ann Arbor, and beyond rely on us for compassionate, state-compliant medical cannabis evaluations.",
  },
  {
    num: "04",
    icon: "dollar",
    title: "Honest, Flat Pricing",
    description:
      "Transparent upfront pricing for the physician evaluation. State application fees through the CRA portal are paid separately and disclosed clearly.",
  },
  {
    num: "05",
    icon: "lock",
    title: "HIPAA-Compliant Platform",
    description:
      "Your medical history and identification documents are protected by a HIPAA-compliant infrastructure built for privacy from the ground up.",
  },
  {
    num: "06",
    icon: "support",
    title: "7-Day Patient Support",
    description:
      "Our Michigan care coordinators help with scheduling, document upload, and CRA registration — so you never get stuck mid-application.",
  },
];
