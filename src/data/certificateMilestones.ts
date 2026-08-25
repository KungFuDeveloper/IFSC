import { CertificateMilestone } from './types';

export const CERTIFICATE_MILESTONES: CertificateMilestone[] = [
  {
    id: "ms-m1-m6",
    title: "Bloco 1: Fundamentos e Situações Cotidianas (Módulos 1–6)",
    description: "Revisar biografias, hospedagem, aeroporto, imperativo, serviços bancários e comunicação telefônica.",
    type: "module",
    targetValue: 6
  },
  {
    id: "ms-m7-m12",
    title: "Bloco 2: Cultura, Meio Ambiente e Discurso (Módulos 7–12)",
    description: "Revisar culinária/dígrafos, conectivos ecológicos, vida escolar, resumos acadêmicos, pretérito imperfeito e concordância.",
    type: "module",
    targetValue: 6
  },
  {
    id: "ms-m13-m18",
    title: "Bloco 3: Sintaxe Avançada, Narrativa e Cidadania (Módulos 13–18)",
    description: "Dominar regência verbal, cinema/hífen, alternância narrativa, verbos irregulares, texto dissertativo e regras da crase.",
    type: "module",
    targetValue: 6
  },
  {
    id: "ms-practice-80",
    title: "Meta de Prática: 80% de Acertos nos Exercícios",
    description: "Resolver os exercícios interativos de todos os 18 módulos mantendo aproveitamento médio superior a 80%.",
    type: "practice"
  },
  {
    id: "ms-az-review",
    title: "Consulta Completa ao Guia Gramatical de A–Z",
    description: "Revisar todos os 35+ tópicos de referência cruzada na página Gramática de A–Z.",
    type: "review"
  },
  {
    id: "ms-course-grade",
    title: "Requisito Oficial IFRS: Nota Final ≥ 60%",
    description: "Atingir nota igual ou superior a 60% nas avaliações oficiais do ambiente Moodle IFRS/Rede e-Tec para emissão do certificado.",
    type: "final"
  }
];
