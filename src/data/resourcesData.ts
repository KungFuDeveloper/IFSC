import { ResourceItem } from './types';

export const LEARNING_RESOURCES: ResourceItem[] = [
  // Pronúncia e Fonética
  {
    id: "res-forvo-pt",
    title: "Forvo Pronúncia (Português do Brasil)",
    description: "Guia de pronúncias gravadas por falantes nativos de diversas regiões do Brasil.",
    url: "https://pt.forvo.com/languages/pt/",
    category: "pronuncia",
    skillName: "Pronúncia & Fonética",
    verified: true,
    notes: "Excelente para consultar a pronúncia regional de vogais abertas, fechadas e sons nasais."
  },
  {
    id: "res-fonetica-ufrgs",
    title: "Laboratório de Fonética e Fonologia (UFRGS/USP)",
    description: "Recursos descritivos e áudios sobre os padrões acústicos e entoacionais do português brasileiro.",
    url: "https://www.ufrgs.br/laboratoriodefonetica/",
    category: "pronuncia",
    skillName: "Pronúncia & Fonética",
    verified: false,
    notes: "TODO: Verificar disponibilidade do servidor universitário periodicamente."
  },
  {
    id: "res-tafalado",
    title: "Tá Falado — Brazilian Portuguese Pronunciation (UT Austin)",
    description: "Podcasts e lições focadas em pronúncia e contrastes fonéticos entre espanhol e português brasileiro.",
    url: "https://www.coerll.utexas.edu/brazilpod/tafalado/",
    category: "pronuncia",
    skillName: "Pronúncia & Fonética",
    verified: true,
    notes: "Referência acadêmica gratuita excelente para falantes de espanhol e inglês."
  },

  // Escrita, Gramática e Dicionários
  {
    id: "res-conjugacao-com-br",
    title: "Conjugação.com.br",
    description: "Conjugador completo de todos os verbos regulares e irregulares da língua portuguesa nos modos e tempos verbais.",
    url: "https://www.conjugacao.com.br/",
    category: "escrita",
    skillName: "Escrita & Gramática",
    verified: true,
    notes: "Ferramenta essencial para consultar particípios irregulares e tempos do subjuntivo."
  },
  {
    id: "res-dicio",
    title: "Dicio — Dicionário Online de Português",
    description: "Definições contemporâneas, exemplos em frases, divisão silábica, etimologia e rimas.",
    url: "https://www.dicio.com.br/",
    category: "escrita",
    skillName: "Escrita & Gramática",
    verified: true,
    notes: "Muito ágil para consultas rápidas no celular."
  },
  {
    id: "res-academia-brasileira-letras",
    title: "Vocabulário Ortográfico da Língua Portuguesa (VOLP - ABL)",
    description: "A fonte oficial definitiva da Academia Brasileira de Letras para grafia e acentuação no Brasil.",
    url: "https://www.academia.org.br/nossa-lingua/busca-no-vocabulario",
    category: "escrita",
    skillName: "Escrita & Gramática",
    verified: true,
    notes: "Autoridade máxima para dúvidas de hífen e acentuação gráfica oficial."
  },
  {
    id: "res-sinonimos",
    title: "Sinônimos.com.br",
    description: "Dicionário de sinônimos e antônimos para enriquecer a referenciação e o vocabulário em redações.",
    url: "https://www.sinonimos.com.br/",
    category: "escrita",
    skillName: "Escrita & Gramática",
    verified: true,
    notes: "Ótimo para evitar repetições em textos acadêmicos e resumos."
  },

  // Conversação, Notícias e Audição
  {
    id: "res-rfi-portugues",
    title: "RFI Brasil (Rádio França Internacional em Português)",
    description: "Noticiário internacional e podcasts com locução clara e vocabulário formal de alta qualidade.",
    url: "https://www.rfi.fr/br/",
    category: "conversacao",
    skillName: "Conversação & Escuta",
    verified: true,
    notes: "Excelente para treino de compreensão auditiva intermediária e avançada."
  },
  {
    id: "res-cafe-brasil",
    title: "Podcast Café Brasil",
    description: "Podcasts culturais e ensaísticos abordando cidadania, reflexões e comportamento no Brasil.",
    url: "https://portalcafebrasil.com.br/todos/podcasts/",
    category: "conversacao",
    skillName: "Conversação & Escuta",
    verified: false,
    notes: "TODO: Usuário pode verificar episódios favoritos e ajustar velocidade no agregador."
  },
  {
    id: "res-folha-podcasts",
    title: "Podcasts Folha de S.Paulo / Estadão",
    description: "Notícias diárias, debates sobre economia, política e sociedade com jornalistas brasileiros.",
    url: "https://www1.folha.uol.com.br/podcasts/",
    category: "conversacao",
    skillName: "Conversação & Escuta",
    verified: true,
    notes: "Excelente para vocabulário de atualidades e temas do Celpe-Bras."
  },

  // Cultura e Sociedade Brasileira
  {
    id: "res-itau-cultural",
    title: "Enciclopédia Itaú Cultural de Arte e Cultura Brasileira",
    description: "Acervo monumental sobre literatura, artes visuais, cinema, teatro e música brasileira.",
    url: "https://enciclopedia.itaucultural.org.br/",
    category: "cultura",
    skillName: "Cultura & Sociedade",
    verified: true,
    notes: "Referência indispensável para pesquisas biográficas de artistas e escritores brasileiros."
  },
  {
    id: "res-museu-lingua-portuguesa",
    title: "Museu da Língua Portuguesa",
    description: "Exposições virtuais e artigos sobre a evolução e a diversidade da língua portuguesa no mundo.",
    url: "https://www.museudalinguaportuguesa.org.br/",
    category: "cultura",
    skillName: "Cultura & Sociedade",
    verified: true,
    notes: "Localizado na Estação da Luz em São Paulo, com rico acervo digital."
  },
  {
    id: "res-ifrs-redetec",
    title: "Portal IFRS / Rede e-Tec Brasil",
    description: "Plataforma oficial dos cursos MOOC abertos do Instituto Federal do Rio Grande do Sul.",
    url: "https://moodle.ifrs.edu.br/",
    category: "geral",
    skillName: "Curso Oficial",
    verified: false,
    notes: "TODO: Acesso à plataforma do curso oficial (exige login institucional de aluno)."
  },
  {
    id: "res-celpe-bras-inep",
    title: "Certificado Celpe-Bras (INEP / MEC)",
    description: "Informações oficiais sobre o exame de proficiência em língua portuguesa para estrangeiros.",
    url: "https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/celpe-bras",
    category: "geral",
    skillName: "Certificação Oficial",
    verified: true,
    notes: "Exame oficial de proficiência aceito no Brasil para pós-graduação e revalidação de diplomas."
  }
];
