import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentloop — Practical intelligence for the agent era",
  description:
    "A practical field guide to AI agents, automation, developer tools, browser workflows, and the technologies shaping what comes next.",
  alternates: { canonical: "https://agentloop.in/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
