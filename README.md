# rfmss. — Rafael Massena

Código-fonte de [rafa.pro.br](https://rafa.pro.br), portfólio de Rafael Massena —
Rafa Mass como identidade pública e `rfmss` como identificador técnico.

## Trabalho principal

O site apresenta o [Escrevaral](https://escrevaral.com), uma oficina gratuita e
offline-first para escritores brasileiros. O projeto explora processamento do
português brasileiro por regras auditáveis, privacidade local e ferramentas de
escrita sem conta obrigatória.

## Implementação

- HTML, CSS e JavaScript vanilla;
- nenhuma etapa de build ou framework;
- fontes do sistema, sem fontes externas;
- temas claro e escuro e suporte a `prefers-reduced-motion`;
- manifesto e service worker para uso offline;
- domínio personalizado por `CNAME`;
- métricas de visita anônimas pelo GoatCounter, sem cookies de publicidade.

## Desenvolvimento local

Como o service worker exige uma origem HTTP, visualize o site com um servidor
local em vez de abrir o HTML diretamente:

```bash
python -m http.server 4173
```

Depois, abra <http://localhost:4173>.

## Contato

[rafamass@proton.me](mailto:rafamass@proton.me)
