import type { Metadata } from "next";
import "./globals.css";
import { minhaFonte} from "@/app/font/font"


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
    <html lang="pt-br">
      <body className={`${minhaFonte.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
