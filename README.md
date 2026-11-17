# Portfólio

Portfólio com Next.js App Router, React e TypeScript. Home com navegação visual, painéis de projetos, apresentação e contato.

## Desenvolvimento

```sh
npm ci
npm run dev
```

Os painéis podem ser acessados diretamente por `/#projects`, `/#about` e `/#contact`. Voltar e avançar no navegador acompanham a abertura dos painéis.

Antes de publicar, configure `NEXT_PUBLIC_SITE_URL` com o domínio final, incluindo `https://`. O arquivo `.env.example` mostra o formato. Essa variável define os endereços absolutos usados nas prévias de compartilhamento; em desenvolvimento, o padrão é `http://localhost:3000`.

## Verificação

```sh
npm run lint
npm run build
```

## Estrutura

- `src/app/layout.tsx`: layout raiz e metadados de compartilhamento.
- `src/app/page.tsx`: home, conteúdo editável em `profile` e comportamento dos painéis.
- `src/app/page.module.css`: composição da página e dos painéis.
- `src/app/globals.css`: estilos globais mínimos.
- `public/social-preview.png`: imagem de compartilhamento, em 1200 × 630 px.
- `public/personal-portrait.png`: retrato do cabeçalho.
- `src/app/icon.png`: ícone da aba, derivado do retrato.
- `docs/home.md`: decisões de design e implementação.

Para recriar a imagem de compartilhamento após alterar o retrato ou os textos, execute `node scripts/create-social-preview.mjs`.
