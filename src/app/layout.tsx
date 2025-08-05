import { Header } from "../components/header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialised">
        <>
          <Header />
          {children}
          <h1>Este é um rodapé</h1>
        </>
      </body>
    </html>
  );
}
