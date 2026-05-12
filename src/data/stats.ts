export type Stat = {
  icon: "users" | "star" | "clock" | "check";
  value: string;
  label: string;
};

export const STATS: Stat[] = [
  { icon: "users", value: "5,000+", label: "Patients Served" },
  { icon: "star", value: "4.9/5", label: "Average Rating" },
  { icon: "clock", value: "24hrs", label: "Avg. Appointment" },
  { icon: "check", value: "98%", label: "Success Rate" },
];
