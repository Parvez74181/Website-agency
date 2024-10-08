import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import {} from "@/utils/SmoothScrolling";
import MaskCursor from "@/components/MaskCursor";
import { AppWrapper } from "@/context/context";
import { AOSInit } from "@/components/AOSInit";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AppWrapper>
          <AOSInit />
          <MaskCursor />
          <Navbar />
          {children}
        </AppWrapper>
      </body>
    </html>
  );
}
