export type Step = {
  icon: "user" | "calendar" | "video" | "shield-check";
  title: string;
  description: string;
};

export const STEPS: Step[] = [
  {
    icon: "user",
    title: "Create Your Account",
    description:
      "Sign up and share your basic information to begin your Michigan medical marijuana card evaluation. Takes under three minutes.",
  },
  {
    icon: "calendar",
    title: "Schedule Your Appointment",
    description:
      "Pick a convenient time to meet with a Michigan-licensed cannabis physician for your telehealth evaluation.",
  },
  {
    icon: "video",
    title: "Attend Your MMJ Evaluation",
    description:
      "Speak with a Michigan MMJ doctor over a secure video or audio call. The physician reviews your medical history and confirms whether you have a qualifying debilitating medical condition under the MMMA.",
  },
  {
    icon: "shield-check",
    title: "Register With the State",
    description:
      "If approved, you'll receive a physician certification to submit to the Michigan Cannabis Regulatory Agency (CRA) through the MMMP patient portal, along with the state registration fee, to receive your Michigan medical marihuana card.",
  },
];
