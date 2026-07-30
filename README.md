# rafa.pro.br — RafaMass Blueprint Portfolio

Código-fonte de [rafa.pro.br](https://rafa.pro.br), portfólio de Rafael Massena.

A identidade pública é **Rafa Mass**. `rfmss` permanece como matrícula técnica, nome de usuário e assinatura de código.

## Assinatura visual

O site usa o RafaMass Blueprint System: papel gesso sobre palco técnico, linhas cyan de construção, tinta preta, uma interrupção vermelhão, metadados monoespaçados e sombras físicas sem suavização corporativa.

A regra não é copiar um tabuleiro em toda interface. É transportar a mesma gramática:

- estrutura precisa antes do ornamento;
- função acima do efeito;
- uma ruptura visual por composição;
- metadados técnicos como segunda voz;
- movimento curto, explicável e opcional;
- nenhum framework, fonte remota ou dependência visual.

Leia [ASSINATURA-VISUAL.md](docs/ASSINATURA-VISUAL.md).

## Projetos principais

- [Escrevaral](https://escrevaral.com) — oficina local para escrita e português brasileiro;
- [Dirlizanu](https://rfmss.github.io/dirlizanu/) — quebra-cabeça deslizante com matrizes auditadas;
- [Boletos Mil](https://rfmss.github.io/boletosmil/) — organização doméstica local-first.

## Arquitetura

```text
index.html                          conteúdo e estrutura semântica
assets/css/rafamass-blueprint.css  fundações reutilizáveis da assinatura
assets/css/portfolio.css           composição específica do portfólio
assets/js/portfolio.js             demonstração local, revelações e PWA
assets/boletosmil.svg               marca técnica do projeto
manifest.json                       metadados da PWA
sw.js                               cache offline
```

## Implementação

- HTML, CSS e JavaScript vanilla;
- nenhuma etapa de build;
- fontes do sistema;
- conteúdo utilizável sem JavaScript;
- `prefers-reduced-motion` respeitado;
- manifesto e service worker para funcionamento offline;
- domínio personalizado por `CNAME`;
- métricas anônimas por GoatCounter, sem publicidade.

## Desenvolvimento local

```bash
python3 -m http.server 4173
```

Abra `http://localhost:4173`.

Não abra o arquivo diretamente pelo sistema de arquivos: o service worker precisa de uma origem HTTP.

## Adicionar um projeto

1. Classifique-o como projeto principal, produto em destaque ou arquivo.
2. Escreva o problema e a função antes de listar tecnologias.
3. Use até cinco sinais técnicos curtos.
4. Reserve o vermelhão para um único ponto de atenção.
5. Teste em 320, 375, 768, 1024 e telas com pouca altura.
6. Atualize `CORE` em `sw.js` ao adicionar assets.

## Licença

O sistema visual e o código deste repositório são distribuídos sob licença MIT.

## Contato

[rafamass@proton.me](mailto:rafamass@proton.me)
