import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1>ERRO 404, PÁGINA NÃO ENCONTRADA!</h1>
      <Link href="/">Voltar para home</Link>
    </div>
  );
}
