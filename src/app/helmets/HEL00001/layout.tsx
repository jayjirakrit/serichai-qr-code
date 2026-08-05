import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ballistic Helmet",
  description: "Ballistic Helmet Instruction Guidelines",
};

export default function HelmentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
