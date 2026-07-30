# Prévias dos projetos

## Regra

Os quadros do portfólio devem representar a interface real do produto. Não usar ilustrações genéricas quando a aplicação já possui identidade e tela próprias.

## Dirlizanu

`assets/dirlizanu-preview.svg` registra:

- palco técnico escuro;
- aparato de papel;
- chassis cyan;
- peças claras e táteis;
- peça 15 vermelhão;
- indicação de matriz com solução auditada.

A prévia não executa o jogo e não pretende ser uma captura literal. Ela preserva a composição reconhecível da versão pública.

## Pomodoro

`assets/pomodoro-preview.svg` registra:

- aparato temporal Blueprint;
- relógio `25:00` como primeiro foco;
- alternância timer livre/ciclo;
- selo de tomate vermelhão;
- comandos neutros;
- metadados de relógio absoluto, persistência e funcionamento offline.

## Manutenção

Ao alterar profundamente um produto:

1. conferir a versão publicada;
2. atualizar a prévia no mesmo PR ou em PR imediatamente posterior;
3. preservar o aspecto do quadro existente;
4. não exibir funções inexistentes;
5. atualizar a lista `CORE` de `sw.js` ao criar ou renomear assets;
6. testar em 320, 375, 768 e 1024 px;
7. garantir texto alternativo objetivo.

As prévias são SVGs locais para manter nitidez, baixo peso e funcionamento offline.
