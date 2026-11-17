# Home do portfólio

## Direção visual

- Fundo branco suave `#fdfdfb`, fonte Arial e textos em inglês e minúsculas.
- Retrato no centro do cabeçalho, sem nome ou subtítulo ao lado.
- Navegação central em coluna: projects, about e contact.
- Azul `#2448b8`, vermelho `#b92d24` e verde `#246b46`, respectivamente.
- Pequenas inclinações, espaço em branco e traços decorativos finos.
- Seta com deslocamento discreto e sublinhado animado no hover e foco. Respeitar movimento reduzido.
- Rodapé centralizado com o nome nas três cores, ano automático e copyright.

## Painéis

Os painéis usam diálogo nativo, título na cor da seção e traços decorativos acompanhando essa cor. Abrem por `/#projects`, `/#about` e `/#contact`.

- **projects:** estado vazio com “oops, i haven’t added anything here yet.” até haver projetos para apresentar.
- **about:** apresentação, linha do tempo profissional em ordem de início mais recente e formação. Corpo de texto em 16 px, com largura de até 360 px na apresentação.
- **contact:** endereço de e-mail, botão de cópia e links para LinkedIn e GitHub. Feedback de sucesso ou falha anunciado por uma região de status acessível.

Conteúdo editável no objeto `profile`, em `src/app/page.tsx`.

## Navegação e acessibilidade

- Links da home suportam acesso direto às seções e abertura em outra aba.
- Voltar e avançar no navegador acompanham a abertura dos painéis.
- Fechar um painel acessado diretamente remove o hash sem sair da página ou descartar a query string.
- Botão, Escape e clique fora fecham o diálogo.
- Foco retorna à entrada correspondente; fundo sem rolagem enquanto o painel está aberto.
- Foco visível nos controles e links. Layout responsivo sem depender de hover.

## Imagens em uso

| Arquivo | Uso |
| --- | --- |
| `public/personal-portrait.png` | Retrato transparente, com cabelo azul arredondado, nariz verde e brinco vermelho; sem boca. Exibido em 96 px no desktop e 80 px no celular. |
| `src/app/icon.png` | Ícone da aba, derivado do retrato, em 256 × 256 px. |
| `public/social-preview.png` | Imagem de compartilhamento, em 1200 × 630 px, com retrato e nome nas três cores. |

Para recriar a imagem de compartilhamento, executar `node scripts/create-social-preview.mjs`.

## Publicação

Configurar `NEXT_PUBLIC_SITE_URL` com o domínio final antes do build de produção. O formato está em `.env.example`; o padrão local é `http://localhost:3000`.

Descrição, Open Graph e Twitter configurados em `src/app/layout.tsx`.

## Validação

- Verificações de código: `npm run lint` e `npm run build`.
- Navegação validada no Chrome: links diretos, voltar/avançar, Escape, clique fora, foco, bloqueio de rolagem, query strings e hashes desconhecidos.
- Cópia do e-mail verificada com API simulada nos cenários de sucesso e rejeição, sem alterar o clipboard do usuário.
- Revisão visual em desktop de 1440 × 1000 e celular de 360 × 800, sem rolagem horizontal nem erros de execução.
- Metadados renderizados e disponibilidade da imagem de compartilhamento conferidos.

Estudos, imagens de referência e arquivos temporários de validação foram removidos; permanecem apenas as imagens utilizadas pelo site.
