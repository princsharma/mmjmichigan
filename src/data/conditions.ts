export type ConditionVariant = "heart" | "brain" | "spark" | "bone" | "eye";

export type Condition = {
  name: string;
  variant: ConditionVariant;
};

export type ConditionGroupId =
  | "mental-health"
  | "chronic-pain"
  | "neurological"
  | "other";

export type ConditionGroup = {
  id: ConditionGroupId;
  label: string;
  description: string;
  items: Condition[];
};

// Source: Michigan Cannabis Regulatory Agency — debilitating medical conditions
// recognized under the Michigan Medical Marihuana Act (MMMA). Writer to fact-check
// before launch; this list reflects publicly listed CRA categories.
export const CONDITION_GROUPS: ConditionGroup[] = [
  {
    id: "mental-health",
    label: "Mental Health",
    description:
      "Behavioral and psychiatric conditions recognized under the MMMA for medical cannabis treatment.",
    items: [
      { name: "Post-Traumatic Stress Disorder (PTSD)", variant: "spark" },
      { name: "Autism Spectrum Disorder", variant: "heart" },
      { name: "Obsessive-Compulsive Disorder (OCD)", variant: "brain" },
    ],
  },
  {
    id: "chronic-pain",
    label: "Chronic Pain",
    description:
      "Long-term pain conditions that have not been adequately controlled by conventional treatment.",
    items: [
      { name: "Severe and Chronic Pain", variant: "heart" },
      { name: "Severe and Persistent Muscle Spasms", variant: "spark" },
      { name: "Severe Nausea", variant: "heart" },
      { name: "Cachexia or Wasting Syndrome", variant: "heart" },
    ],
  },
  {
    id: "neurological",
    label: "Neurological",
    description:
      "Neurological and progressive nervous-system conditions qualifying under Michigan law.",
    items: [
      { name: "Amyotrophic Lateral Sclerosis (ALS)", variant: "spark" },
      { name: "Alzheimer's Disease", variant: "brain" },
      { name: "Cerebral Palsy", variant: "brain" },
      { name: "Multiple Sclerosis", variant: "bone" },
      { name: "Parkinson's Disease", variant: "brain" },
      { name: "Seizures / Epilepsy", variant: "spark" },
      { name: "Tourette's Syndrome", variant: "spark" },
    ],
  },
  {
    id: "other",
    label: "Other Conditions",
    description:
      "Additional debilitating conditions explicitly recognized under the Michigan Medical Marihuana Program.",
    items: [
      { name: "Cancer", variant: "heart" },
      { name: "Glaucoma", variant: "eye" },
      { name: "HIV / AIDS", variant: "heart" },
      { name: "Hepatitis C", variant: "heart" },
      { name: "Crohn's Disease", variant: "heart" },
      { name: "Inflammatory Bowel Disease", variant: "heart" },
      { name: "Ulcerative Colitis", variant: "heart" },
      { name: "Rheumatoid Arthritis", variant: "bone" },
      { name: "Spinal Cord Injury", variant: "bone" },
      { name: "Nail-Patella Syndrome", variant: "bone" },
      { name: "Chronic Liver Disease (Hepatitis C)", variant: "heart" },
      { name: "Arthritis", variant: "bone" },
    ],
  },
];
