# Assinatura visual RafaMass

## Nome oficial

**RafaMass Blueprint System**

A assinatura surgiu no Dirlizanu e passou a ser o sistema visual público de Rafa Mass. Ela não pertence a um gênero específico de produto. Pode vestir jogos, oficinas de escrita, ferramentas domésticas e páginas editoriais sem transformar tudo no mesmo layout.

## Ideia central

O sistema combina quatro campos:

1. **oficina** — objetos que parecem construídos, ajustados e testados;
2. **arquivo** — dossiês, códigos, registros e metadados;
3. **blueprint** — linhas de construção que tornam a estrutura visível;
4. **impressão** — papel, tinta, pressão, desalinhamento controlado e matéria.

A interface deve parecer precisa antes de parecer expressiva. A ruptura vem depois da estrutura.

## Paleta

| Token | Função | Valor-base |
|---|---|---|
| `--rm-stage` | palco técnico | `#171a1d` |
| `--rm-paper` | papel gesso | `#f3eee4` |
| `--rm-ink` | tinta principal | `#161817` |
| `--rm-cyan-strong` | construção e foco | `#36a7d2` |
| `--rm-cyan-pale` | campo técnico claro | `#d8f0f8` |
| `--rm-vermilion` | ruptura principal | `#ff5a19` |

O vermelhão não é cor de botão-padrão. Ele identifica o elemento que deve interromper a composição: peça-sinal, carimbo, marca, alerta decisivo ou chamada única.

## Tipografia

O sistema não depende de fontes externas.

- display: Arial/Helvetica para massa, impacto e leitura imediata;
- editorial: Georgia para pensamento, narrativa e texto longo;
- técnica: Courier New para códigos, coordenadas e metadados.

A mistura é deliberada. Uma única família tipográfica reduziria o contraste entre voz humana e voz do sistema.

## Geometria

- superfícies principais podem ter cantos moderados;
- comandos devem ser quase retangulares;
- elementos móveis ou táteis podem ganhar profundidade física;
- sombras são deslocamentos rígidos, não névoa decorativa;
- linhas internas devem indicar montagem, não ornamentação aleatória.

## Hierarquia

Ordem recomendada:

1. objeto ou conteúdo principal;
2. estado e informação necessária;
3. comandos;
4. metadados;
5. ornamento.

Quando metadados ou molduras competem com o objeto, eles devem desaparecer, encolher ou perder contraste primeiro.

## Componentes públicos

O arquivo `assets/css/rafamass-blueprint.css` expõe:

- `.rm-surface` — folha ou aparato principal;
- `.rm-meta-strip` — faixa de estado e dados;
- `.rm-command` — comando físico retangular;
- `.rm-key` — objeto tátil claro;
- `.rm-key-signal` — objeto tátil vermelhão;
- `.rm-dossier` — documento de arquivo;
- `.rm-blueprint-grid` — campo de construção;
- `.rm-kicker` — metadado técnico;
- `.rm-rule` — corte editorial;
- `.rm-signal` — interrupção de alta prioridade.

Use dentro de um contêiner com `data-rm-blueprint`:

```html
<body data-rm-blueprint>
  <article class="rm-surface">
    <span class="rm-kicker">Projeto 01</span>
    <h1>Objeto principal</h1>
    <a class="rm-command" href="#">Abrir</a>
  </article>
</body>
```

## Movimento

O movimento deve explicar montagem, transição ou resposta.

Aceitável:

- uma linha que desenha o contorno;
- uma placa que assenta;
- uma peça que segue diretamente o ponteiro;
- uma seção que aparece uma vez;
- um carimbo curto na conclusão.

Evitar:

- animações infinitas;
- paralaxe ornamental;
- elementos flutuando sem função;
- atrasos que impedem leitura ou interação;
- vários efeitos concorrendo no mesmo instante.

Sempre respeitar `prefers-reduced-motion`.

## Responsividade

Não existe “desktop espremido”. A composição deve mudar de natureza.

- títulos reduzem antes de quebrar palavras importantes;
- grades viram uma coluna;
- metadados secundários cedem;
- áreas táteis preservam pelo menos 40–44 px;
- nenhum objeto pode gerar rolagem horizontal;
- largura e altura do `visualViewport` devem ser consideradas em interfaces de tela única;
- páginas editoriais podem rolar verticalmente, mas não devem esconder conteúdo para “caber”.

## Como adicionar um projeto ao portfólio

### Projeto principal

Use estudo de caso: problema, método, evidência e acesso.

### Produto em destaque

Inclua:

- código de catálogo;
- função em uma frase;
- miniatura visual própria;
- até cinco sinais técnicos;
- acesso ao produto e ao repositório.

### Arquivo

Use uma apresentação menor. O objetivo é preservar a memória do trabalho sem competir com os produtos atuais.

## Anti-padrões

Não usar:

- glassmorphism;
- botões-cápsula como padrão;
- gradientes macios usados apenas para “embelezar”;
- sombras difusas em todos os cartões;
- cor de destaque sorteada;
- vermelhão em vários CTAs;
- bordas e molduras em todas as camadas;
- personagens, balões ou grafismos de quadrinhos sem função;
- fontes remotas só para imitar personalidade.

## Licença

O RafaMass Blueprint System é distribuído sob licença MIT. A identidade pode ser reutilizada nos projetos de Rafa Mass e estudada por outras pessoas, desde que a licença seja preservada.
