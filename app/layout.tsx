import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VPN Censorship Detector — Monitor VPN Blocks in Your Country",
  description: "Real-time monitoring of VPN accessibility by country with alternative recommendations for privacy-conscious users in restricted regions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0724b5e1-0e1a-46af-8814-21c377eec395"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
