import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Inter } from "next/font/google";
import "../app/globals.css";
const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialised">
        <>
          <Header />
          {children}
          <Footer />
        </>
      </body>
    </html>
  );
}
