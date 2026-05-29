import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulletproof Vest",
  description: "Bulletproof Vest Instruction Guidelines",
};

export default function VestsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
