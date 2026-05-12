import type { IconName } from "@/components/Icon/Icon";

export type FeaturePair = {
  icon: IconName;
  title: string;
  subtitle: string;
};

export const CONNECT_DOCTOR_FEATURES: FeaturePair[] = [
  {
    icon: "clock",
    title: "24-Hour Appointments",
    subtitle: "Quick scheduling for Michigan residents",
  },
  {
    icon: "lock",
    title: "100% Confidential",
    subtitle: "HIPAA-compliant telehealth platform",
  },
  {
    icon: "user",
    title: "Michigan Licensed",
    subtitle: "Board-certified, MI-licensed physicians",
  },
];

export const BOTTOM_CTA_FEATURES: FeaturePair[] = [
  {
    icon: "clock",
    title: "Same-Day Appointments",
    subtitle: "Flexible scheduling across Michigan",
  },
  {
    icon: "monitor",
    title: "100% Online Process",
    subtitle: "No in-person visits required",
  },
  {
    icon: "user",
    title: "Michigan-Licensed Doctors",
    subtitle: "Board-certified medical marijuana physicians",
  },
];
