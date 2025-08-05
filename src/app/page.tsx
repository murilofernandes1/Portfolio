import { Metadata } from "next";
import "../app/styles/home.css";
export const metadata: Metadata = {
  title: "Murilo Fernandes Vaz",
  openGraph: {
    title: "Portfolio Murilo Fernandes Vaz",
  },
};
export default function Home() {
  return (
    <>
      <div className="container">
        <h1>Murilo Fernandes Vaz</h1>
        <h2>Desenvolvedor Front End</h2>
      </div>
    </>
  );
}
