/*
 * Todo o texto da página fica aqui. Para alterar conteúdo, edite este arquivo:
 * os componentes só cuidam da apresentação.
 */

export const hero = {
  title: 'ESG TEGRAM',
  headline: 'Logística eficiente, desenvolvimento responsável',
  text: 'No TEGRAM, conectamos a produção agrícola aos mercados nacionais e internacionais com foco em segurança, eficiência operacional, proteção ambiental e desenvolvimento das comunidades do entorno.',
  scrollLabel: 'Role para explorar',
  scrollTarget: '#pilares',
};

export const pillars = {
  title: 'Três pilares, um mesmo compromisso',
  linkLabel: 'Conhecer',
  items: [
    { id: 'ambiente', label: 'Meio ambiente', headline: 'Operar com responsabilidade e reduzir impactos', highlight: 'Compostagem comunitária' },
    { id: 'pessoas', label: 'Pessoas e comunidades', headline: 'Desenvolver oportunidades no território', highlight: 'Jovem Tech, em parceria com a FAPEMA' },
    { id: 'governanca', label: 'Governança', headline: 'Trabalhar com segurança, ética e conformidade', highlight: 'Licença e Sistema de Gestão Integrado' },
  ],
};

export const environment = {
  id: 'ambiente',
  title: 'Meio ambiente',
  intro: 'Trabalhamos para reduzir os impactos das operações portuárias, prevenir a poluição e promover o uso responsável dos recursos.',
  topics: [
    'Licenciamento ambiental',
    'Monitoramento da qualidade do ar',
    'Controle de poeira, drenagem e efluentes',
    'Gestão e destinação de resíduos',
    'Compostagem comunitária',
    'Educação ambiental',
    'Gestão de carbono',
  ],
  editorial: {
    title: 'Resíduos que retornam à terra',
    text: 'Resíduos orgânicos e grãos deixam de ser descarte e voltam ao solo como composto, em uma parceria que une operação portuária e agricultura familiar.',
    facts: [
      { term: 'Destino', description: 'Pátio de Compostagem Laranjeiras' },
      { term: 'Parceiros', description: 'Associação dos Pequenos Produtores de Laranjeiras, Vale e JC Ambiental' },
    ],
  },
};

export const people = {
  id: 'pessoas',
  title: 'Pessoas e comunidades',
  intro: 'Acreditamos que o desenvolvimento da operação deve contribuir para a formação profissional, a geração de oportunidades e a melhoria da qualidade de vida nas comunidades próximas ao Porto do Itaqui.',
  topics: [
    'Capacitação profissional',
    'Bolsas de estudo',
    'Inovação e pesquisa',
    'Educação ambiental',
    'Voluntariado',
    'Relacionamento com comunidades',
    'Igualdade salarial entre mulheres e homens',
    'Segurança e saúde ocupacional',
  ],
  highlights: [
    {
      id: 'jovem-tech',
      variant: 'primary',
      big: 'FAPEMA',
      bigSize: 'small',
      title: 'Jovem Tech',
      text: 'Programa realizado em parceria com a FAPEMA e outras instituições, apoiando bolsas de estudo, pesquisa, inovação e soluções para o ambiente portuário.',
    },
    {
      id: 'igualdade-salarial',
      variant: 'plain',
      big: '134,9%',
      title: 'Igualdade salarial',
      text: 'No TEGRAM, o salário contratual mediano das mulheres equivale a 134,9% do recebido pelos homens.',
      source: 'Fonte: Relatório de Transparência e Igualdade Salarial (MTE).',
    },
  ],
};

export const governance = {
  id: 'governanca',
  title: 'Governança',
  intro: 'Nossa governança ESG é baseada em conformidade, gestão de riscos, segurança, transparência e melhoria contínua.',
  topics: [
    'Cumprimento da legislação',
    'Sistema de Gestão Integrado',
    'Gestão de impactos ambientais',
    'Prevenção de acidentes',
    'Preparação para emergências',
    'Capacitação',
    'Melhoria contínua',
    'Transparência',
  ],
  safety: {
    title: 'Segurança em primeiro lugar',
    text: 'Participamos de treinamentos da CPATP e de simulados integrados de emergência, preparando equipes e operação para agir com rapidez e proteger pessoas.',
  },
  recognition: {
    title: 'Reconhecimento e carbono',
    text: 'O TEGRAM foi destaque ESG no Porto do Itaqui, com reconhecimentos em Meio Ambiente, Responsabilidade Social e na categoria Operadora Portuária.',
    awardsAlt: 'Troféus do prêmio ESG do Porto do Itaqui conquistados pelo TEGRAM',
    sealAlt: 'Selo Prata 2025 do Programa Brasileiro GHG Protocol',
    sealText: 'Selo Prata 2025 do Programa Brasileiro GHG Protocol, com inventário completo de emissões.',
  },
};

export const indicators = {
  title: 'Indicadores',
  intro: 'Mostramos o que já é verificável e deixamos claro o que ainda está em construção.',
  /* Use "value" somente para números fornecidos. Não inventar métricas. */
  items: [
    { value: '134,9%', label: 'salário contratual mediano das mulheres em relação ao dos homens' },
    { label: 'Parceria com a FAPEMA', detail: 'Bolsas, pesquisa e inovação no Jovem Tech' },
    { label: 'Jovens pesquisadores apoiados', detail: 'Programa Jovem Tech' },
    { label: 'Ações de segurança e treinamento', detail: 'CPATP e simulados de emergência' },
    { label: 'Compostagem comunitária', detail: 'Pátio de Compostagem Laranjeiras' },
    { label: 'Indicadores ambientais em estruturação', detail: 'Dados serão publicados quando validados' },
  ],
};

export const transparency = {
  id: 'transparencia',
  title: 'Transparência ESG',
  intro: 'Documentos e informações públicas sobre nossa operação, programas e políticas.',
  linkLabel: 'Visualizar documento →',
  /* Troque os "href" pelos endereços reais dos PDFs. */
  documents: [
    { label: 'Licença de Operação nº 1101853/2024', href: '#' },
    { label: 'Certificado de Aprovação do Corpo de Bombeiros', href: '#' },
    { label: 'Documentos institucionais', href: '#' },
    { label: 'Políticas e procedimentos', href: '#' },
    { label: 'Informações sobre programas sociais e ambientais', href: '#' },
    { label: 'Relatório de Transparência e Igualdade Salarial', note: 'Publicação do MTE', href: '#' },
  ],
};

export const commitments = {
  title: 'Nossos compromissos',
  items: [
    'Redução dos impactos ambientais',
    'Gestão de resíduos e economia circular',
    'Desenvolvimento das comunidades',
    'Formação profissional',
    'Segurança e saúde ocupacional',
    'Mensuração de emissões de carbono',
    'Melhoria contínua da governança',
  ],
};

export const footer = {
  id: 'contato',
  description: 'Terminal de grãos do Porto do Itaqui, São Luís, Maranhão.',
  columns: [
    { title: 'Navegação', links: [{ label: 'O Terminal', href: '#' }, { label: 'Operação', href: '#' }, { label: 'Certificações', href: '#' }] },
    { title: 'ESG', links: [{ label: 'Meio ambiente', href: '#ambiente' }, { label: 'Pessoas', href: '#pessoas' }, { label: 'Governança', href: '#governanca' }, { label: 'Transparência', href: '#transparencia' }] },
    { title: 'Contato', links: [{ label: 'Fale conosco', href: '#' }, { label: 'LinkedIn', href: '#' }, { label: 'Instagram', href: '#' }] },
  ],
  copyright: '© TEGRAM. Todos os direitos reservados.',
};
