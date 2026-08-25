export interface ExampleSentence {
  pt: string;
  en: string;
  highlight?: string;
  note?: string;
}

export interface GrammarRule {
  title: string;
  description: string;
  table?: {
    headers: string[];
    rows: string[][];
  };
  items?: string[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  category: string;
  summary: string;
  rules: GrammarRule[];
  examples: ExampleSentence[];
  contrastNotes?: string;
}

export interface ThematicWord {
  word: string;
  translation: string;
  example: string;
  note?: string;
}

export interface UsefulPhrase {
  phrase: string;
  translation: string;
  situation: string;
}

export interface DialogueLine {
  speaker: string;
  text: string;
  translation: string;
}

export interface ModuleVocabulary {
  situationTitle: string;
  culturalNotes: string;
  dialogue?: DialogueLine[];
  thematicWords: ThematicWord[];
  usefulPhrases: UsefulPhrase[];
}

export interface PracticeExercise {
  id: string;
  type: 'multiple-choice' | 'fill-in-blank' | 'true-false';
  question: string;
  promptPortuguese?: string;
  options?: string[];
  correctAnswer: string | number;
  explanation: string;
  hint?: string;
}

export interface ModuleData {
  id: number;
  number: number;
  title: string;
  subtitle: string;
  thematicContext: string;
  estimatedMinutes: number;
  grammarTopics: GrammarTopic[];
  vocabulary: ModuleVocabulary;
  practice: PracticeExercise[];
}

export interface GrammarIndexEntry {
  id: string;
  term: string;
  category: string;
  shortDefinition: string;
  moduleId: number;
  moduleTitle: string;
  topicId: string;
  keywords: string[];
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'pronuncia' | 'escrita' | 'conversacao' | 'cultura' | 'geral';
  skillName: string;
  verified: boolean;
  notes?: string;
}

export interface CertificateMilestone {
  id: string;
  title: string;
  description: string;
  type: 'module' | 'practice' | 'review' | 'final';
  targetValue?: number;
}
