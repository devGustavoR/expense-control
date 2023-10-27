import type { Metadata } from "next";
import { Bai_Jamjuree as BaiJamjuree, Poppins, Roboto } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: "300",
  variable: '--font-roboto',
})

const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-bai-Jamjuree",
});

export const metadata: Metadata = {
  title: "Expense Control",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${poppins.className} ${baiJamjuree.className} ${roboto.className} text-gray-50`}
      >
        {children}
      </body>
    </html>
  );
}
