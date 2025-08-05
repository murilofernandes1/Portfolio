import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Poppins } from "next/font/google";
import "../app/globals.css";
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
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
