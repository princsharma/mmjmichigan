export type Testimonial = {
  initials: string;
  name: string;
  location: string;
  text: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    initials: "AW",
    name: "Amanda W.",
    location: "Detroit, MI",
    text: "The telehealth visit was easy and I had my physician certification the same day. The team walked me through the CRA portal application step by step — much smoother than I expected.",
    rating: 5,
  },
  {
    initials: "MR",
    name: "Marcus R.",
    location: "Grand Rapids, MI",
    text: "I was apprehensive about going through this process, but the Michigan doctor was patient, professional, and clearly knew the MMMA inside and out. They answered every question I had about chronic pain treatment.",
    rating: 5,
  },
  {
    initials: "PL",
    name: "Priya L.",
    location: "Ann Arbor, MI",
    text: "Two-year card, fully online, and a real Michigan-licensed physician on the call. The pricing was exactly what was quoted up front, no surprises, and the renewal process they explained is just as simple.",
    rating: 5,
  },
  {
    initials: "DK",
    name: "David K.",
    location: "Lansing, MI",
    text: "After dealing with severe muscle spasms for years, I finally have a legal path. The care coordinator even helped me upload my ID to the CRA portal correctly. Worth every dollar.",
    rating: 5,
  },
];
