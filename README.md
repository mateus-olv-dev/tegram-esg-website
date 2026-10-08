# TEGRAM ESG

Página institucional de ESG do TEGRAM (React + Vite). O header do site não faz parte deste projeto.

## Rodar
```
npm install
npm run dev      # desenvolvimento
npm run build    # gera /dist
```

## Estrutura
```
src/
  data/content.js      Todo o texto da página (edite aqui para mudar conteúdo)
  components/          Uma seção por arquivo (Hero, Pillars, Environment, People, Governance, Indicators, Transparency, Commitments, Footer)
    ui/                Peças reutilizáveis (Section, SplitIntro, TopicList, EditorialBlock, Highlight)
  styles/tokens.css    Cores, fontes e espaçamentos
  styles/*.css         Um arquivo de estilo por bloco (BEM simples: .bloco__elemento--modificador)
  assets/              Imagens
```

## Como alterar
- **Texto, números, documentos**: `src/data/content.js`. Links dos documentos: campo `href` em `transparency.documents`.
- **Cores e fontes**: `src/styles/tokens.css`.
- **Novo destaque ou card**: adicione um item em `people.highlights` (ou crie outro componente em `ui/`).
- **Indicadores**: use `value` apenas para números oficiais; nunca inventar métricas.
- **Header sticky**: ajuste `--anchor-offset` em `tokens.css` para a altura real do seu header.
- **Hero**: troque `assets/hero.jpg` por uma foto em alta resolução (a atual é um recorte de baixa resolução).
