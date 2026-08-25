const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '../src/data/modules');

const modules = [
  {
    id: 13,
    number: 13,
    title: "Módulo 13 — Regência Verbal e Transitividade",
    subtitle: "Regência de verbos de movimento e estáticos, pronomes oblíquos e transitividade verbal",
    thematicContext: "Deslocamento Urbano, Transporte Público e Relações de Dependência Sintática",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m13-g1",
        title: "Regência Verbal: Conceito e Verbos Fundamentais",
        category: "Sintaxe de Regência",
        summary: "A regência verbal estuda a relação entre o verbo e seus complementos (objeto direto sem preposição vs. objeto indireto com preposição exigida).",
        rules: [
          {
            title: "Tabela de Regência de Verbos Chave",
            description: "Diferenças fundamentais entre o uso formal culto e o uso coloquial no Brasil.",
            table: {
              headers: ["Verbo", "Norma Culta / Padrão", "Uso Coloquial no Brasil", "Exemplo Padrão"],
              rows: [
                ["Assistir (ver / presenciar)", "Transitivo Indireto (pede preposição 'A')", "Usa-se como direto ('assistir o filme')", "Assistimos AO filme no cinema."],
                ["Ir / Chegar / Voltar (movimento)", "Exigem preposição 'A' ou 'PARA'", "Comumente usado com 'EM' ('fui no banco')", "Fui AO banco. / Cheguei À rodoviária."],
                ["Obedecer / Desobedecer", "Transitivo Indireto (pede 'A')", "Frequentemente sem preposição na fala", "O motorista obedeceu À sinalização."],
                ["Preferir", "Pede preposição 'A' (sem 'do que')", "Uso de 'mais... do que'", "Prefiro o metrô AO ônibus."],
                ["Aspirar (desejar / almejar)", "Transitivo Indireto (pede 'A')", "Confundido com aspirar pó (direto)", "O jovem aspira A um cargo público."],
                ["Visar (ter por objetivo)", "Transitivo Indireto (pede 'A')", "Usado sem preposição", "A lei visa AO bem-estar coletivo."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Todos os dias vou ao trabalho de metrô e chego à estação central às 8h.",
            en: "Every day I go to work by subway and arrive at the central station at 8 AM.",
            highlight: "vou ao trabalho / chego à estação"
          },
          {
            pt: "Eles assistiram ao espetáculo de teatro no centro cultural.",
            en: "They watched the theater play at the cultural center.",
            highlight: "assistiram ao espetáculo"
          }
        ],
        contrastNotes: "No Brasil, dizer 'vou no mercado' é universal na língua falada cotidiana. No entanto, em redações, provas formais e escrita profissional, a norma culta prescreve 'vou ao mercado'."
      },
      {
        id: "m13-g2",
        title: "Regência de Verbos de Movimento vs. Verbos Estáticos",
        category: "Sintaxe Espacial",
        summary: "Verbos que indicam deslocamento pedem preposições dinâmicas (a, para); verbos estáticos pedem preposições de permanência (em).",
        rules: [
          {
            title: "Contraste Dinâmico vs. Estático",
            description: "Adequação da preposição ao tipo de processo verbal.",
            table: {
              headers: ["Tipo de Verbo", "Preposição Adequada", "Exemplos"],
              rows: [
                ["Movimento (ir, vir, voltar, retornar, chegar)", "A / PARA", "Vou a São Paulo. / Chegamos à rodoviária. / Retornei ao país."],
                ["Estático / Permanência (estar, morar, residir, ficar)", "EM (no, na, nos, nas)", "Moro em Curitiba. / Ficamos no hotel. / Permaneceu na sala."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Moro em Salvador há cinco anos, mas viajo a Brasília todo mês a trabalho.",
            en: "I have lived in Salvador for five years, but I travel to Brasília every month for work.",
            highlight: "Moro em / viajo a"
          }
        ]
      },
      {
        id: "m13-g3",
        title: "Pronomes Oblíquos e Transitividade (O/A vs. LHE)",
        category: "Morfossintaxe",
        summary: "Substituição de complementos diretos e indiretos pelos pronomes adequados.",
        rules: [
          {
            title: "Emprego Correto de O/A e LHE",
            description: "Critério de transitividade verbal.",
            items: [
              "Objeto Direto (sem preposição): o, a, os, as (ex.: Eu convidei o amigo → Eu o convidei)",
              "Objeto Indireto (com preposição 'a'): lhe, lhes (ex.: Eu obedeci ao chefe → Eu lhe obedeci; Entreguei a carta ao professor → Entreguei-lhe a carta)",
              "Atenção: Não se usa 'lhe' com verbos que pedem preposições diferentes de 'a' (ex.: gostar de → gosto dele, nunca 'gosto-lhe')."
            ]
          }
        ],
        examples: [
          {
            pt: "O policial viu o pedestre e avisou-o sobre o perigo; em seguida, entregou-lhe o documento.",
            en: "The police officer saw the pedestrian and warned him about the danger; then, he handed him the document.",
            highlight: "avisou-o (direto) / entregou-lhe (indireto: a ele)"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Mobilidade Urbana, Trânsito e Transporte Coletivo",
      culturalNotes: "Grandes capitais brasileiras contam com redes de metrô (como São Paulo e Rio de Janeiro), sistemas de BRT (ônibus de trânsito rápido pioneiros em Curitiba) e ciclovias em expansão. O Bilhete Único é o cartão eletrônico integrado de transporte.",
      dialogue: [
        {
          speaker: "Usuário",
          text: "Com licença, esta linha de ônibus vai até o centro financeiro da cidade?",
          translation: "Excuse me, does this bus line go all the way to the city's financial center?"
        },
        {
          speaker: "Cobrador",
          text: "Vai sim! Você pode pagar com dinheiro ou encostar o cartão de transporte no validador.",
          translation: "Yes it does! You can pay with cash or tap your transit card on the validator."
        }
      ],
      thematicWords: [
        { word: "Bilhete Único / Cartão de transporte", translation: "Integrated transit card", example: "Recarreguei meu bilhete único no aplicativo." },
        { word: "Faixa exclusiva de ônibus", translation: "Dedicated bus lane", example: "Os ônibus circulam mais rápido na faixa exclusiva." },
        { word: "Horário de pico / Horário de ponta", translation: "Rush hour", example: "O metrô fica lotado durante o horário de pico da tarde." },
        { word: "Integração tarifária", translation: "Fare integration / transfer discount", example: "A integração permite pegar metrô e ônibus com desconto." },
        { word: "Ciclovia / Ciclofaixa", translation: "Bike lane / cycle path", example: "Pedalar pela ciclovia da orla é muito agradável." }
      ],
      usefulPhrases: [
        { phrase: "Onde posso recarregar o cartão de transporte?", translation: "Where can I top up the transit card?", situation: "Estações de metrô e terminais" },
        { phrase: "Este ônibus passa perto da estação de trem?", translation: "Does this bus pass near the train station?", situation: "Orientação de rotas" },
        { phrase: "Prefiro me deslocar a pé do que enfrentar o congestionamento.", translation: "I prefer walking than facing traffic congestion.", situation: "Opinião sobre transporte" }
      ]
    },
    practice: [
      {
        id: "m13-p1",
        type: "multiple-choice",
        question: "De acordo com a norma culta da regência verbal, assinale a opção CORRETA para o verbo 'assistir' no sentido de ver/presenciar:",
        options: [
          "Ontem nós assistimos ao filme premiado no cinema.",
          "Ontem nós assistimos o filme premiado no cinema.",
          "Ontem nós assistimos no filme premiado.",
          "Ontem nós assistimos com o filme premiado."
        ],
        correctAnswer: 0,
        explanation: "No sentido de presenciar/ver, o verbo 'assistir' é transitivo indireto e rege a preposição 'a': assistir ao filme."
      },
      {
        id: "m13-p2",
        type: "multiple-choice",
        question: "Qual preposição deve ser usada com o verbo 'chegar' na norma padrão de movimento?",
        options: ["Cheguei à estação às 7h.", "Cheguei na estação às 7h.", "Cheguei de a estação.", "Cheguei sobre a estação."],
        correctAnswer: 0,
        explanation: "Verbos de movimento como 'chegar' e 'ir' exigem a preposição 'a' (ou 'para') na norma culta (chegar à estação)."
      },
      {
        id: "m13-p3",
        type: "fill-in-blank",
        question: "Complete com o pronome adequado: 'Encontrei o professor e entreguei-________ o trabalho final.'",
        options: ["lhe", "o", "a", "no"],
        correctAnswer: 0,
        explanation: "'Entregar' algo 'a alguém' pede objeto indireto de pessoa, substituído pelo pronome 'lhe' (entreguei a ele = entreguei-lhe)."
      },
      {
        id: "m13-p4",
        type: "multiple-choice",
        question: "Qual a construção correta com o verbo 'preferir' segundo a norma padrão?",
        options: [
          "Prefiro caminhar a pegar o trânsito pesado.",
          "Prefiro mais caminhar do que pegar o trânsito.",
          "Prefiro antes caminhar que pegar trânsito.",
          "Prefiro mil vezes caminhar do que trânsito."
        ],
        correctAnswer: 0,
        explanation: "O verbo 'preferir' rege a preposição 'a' e rejeita termos intensificadores como 'mais', 'muito' ou 'do que' (Prefiro X a Y)."
      },
      {
        id: "m13-p5",
        type: "multiple-choice",
        question: "Qual a diferença de regência entre 'morar' e 'ir'?",
        options: [
          "'Morar' é estático e rege preposição 'em'; 'Ir' indica movimento e rege 'a/para'.",
          "Ambos regem a mesma preposição 'em'.",
          "'Morar' exige preposição 'a' e 'ir' exige 'de'.",
          "Não há diferença sintática entre eles."
        ],
        correctAnswer: 0,
        explanation: "Verbos estáticos (morar, residir) regem 'em' (Moro em Salvador); verbos de movimento (ir, chegar) regem 'a' ou 'para' (Vou a Salvador)."
      }
    ]
  },
  {
    id: 14,
    number: 14,
    title: "Módulo 14 — Cinema, Sinopse e Uso do Hífen",
    subtitle: "Gêneros cinematográficos, sinopse, gostos e preferências, adjetivos qualificadores e uso do hífen",
    thematicContext: "Cinema Brasileiro, Audiovisual, Crítica de Filmes e Novas Regras do Hífen",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m14-g1",
        title: "Gênero Sinopse e Expressão de Gostos e Preferências",
        category: "Tipologia Textual e Estilística",
        summary: "A sinopse apresenta uma síntese envolvente do enredo sem revelar o desfecho (spoiler), empregando adjetivos expressivos e verbos no presente do indicativo.",
        rules: [
          {
            title: "Características da Sinopse de Cinema",
            description: "Convenções de escrita do gênero cinematográfico.",
            items: [
              "Tempo verbal dominante: Presente do Indicativo (efeito de imediatismo: 'O protagonista descobre um segredo...')",
              "Adjetivação expressiva: instigante, comovente, arrebatador, intrigante, aclamado",
              "Expressões de avaliação crítica: 'Uma obra-prima do cinema nacional', 'Com atuações memoráveis', 'Vale muito a pena conferir'"
            ]
          }
        ],
        examples: [
          {
            pt: "O filme 'Central do Brasil' conta a emocionante jornada de Dora e Josué pelo interior do Nordeste em busca de um pai desconhecido.",
            en: "The movie 'Central Station' tells the moving journey of Dora and Josué through the Northeastern countryside in search of an unknown father.",
            highlight: "conta / emocionante jornada"
          },
          {
            pt: "Sou apaixonado por documentários históricos, mas não sou muito chegado a filmes de terror.",
            en: "I am passionate about historical documentaries, but I'm not really into horror movies.",
            highlight: "apaixonado por / não sou muito chegado a"
          }
        ]
      },
      {
        id: "m14-g2",
        title: "Adjetivos: Posição, Concordância e Grau",
        category: "Morfossintaxe",
        summary: "A posição do adjetivo (antes ou depois do substantivo) pode alterar o sentido objetivo vs. afetivo no português brasileiro.",
        rules: [
          {
            title: "Mudança de Sentido pela Posição do Adjetivo",
            description: "Comparativo semântico da anteposição do adjetivo.",
            table: {
              headers: ["Antes do Substantivo (Subjetivo/Afetivo)", "Depois do Substantivo (Literal/Objetivo)"],
              rows: [
                ["Um grande homem (homem notável, admirável)", "Um homem grande (homem de alta estatura física)"],
                ["Um velho amigo (amigo de longa data)", "Um amigo velho (amigo de idade avançada)"],
                ["Um simples filme (apenas um filme, despretensioso)", "Um filme simples (filme descomplicado, de enredo fácil)"],
                ["Pobre ator (digno de compaixão / desafortunado)", "Ator pobre (sem recursos financeiros)"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Fernanda Montenegro é uma grande atriz do cinema brasileiro.",
            en: "Fernanda Montenegro is a great/distinguished actress of Brazilian cinema.",
            highlight: "grande atriz (admirável)"
          }
        ]
      },
      {
        id: "m14-g3",
        title: "O Uso do Hífen no Novo Acordo Ortográfico",
        category: "Ortografia Oficial",
        summary: "Regra mnemônica do hífen: 'Os iguais se repelem (com hífen), os diferentes se atraem (sem hífen)'.",
        rules: [
          {
            title: "Regras Fundamentais do Hífen em Prefixos",
            description: "Prefixos como micro-, auto-, anti-, super-, inter-, sub-, pré-, pós-.",
            table: {
              headers: ["Condição", "Regra do Hífen", "Exemplos"],
              rows: [
                ["Letras iguais (fim do prefixo = início da palavra)", "USA HÍFEN (-)", "micro-ondas, anti-inflamatório, sobre-humano (com h sempre), inter-regional"],
                ["Letras diferentes", "JUNTA SEM HÍFEN", "autoescola, infraestrutura, antiaéreo, semicírculo"],
                ["Prefixo termina em vogal + palavra começa com R ou S", "JUNTA E DOBRA 'RR' OU 'SS'", "antirreflexo (anti+reflexo), minissaia (mini+saia), ultrassom (ultra+som)"],
                ["Prefixos tônicos: pré-, pós-, pró- (com acento)", "USA HÍFEN", "pré-estreia, pós-graduação, pró-ativo"],
                ["Com a letra 'H'", "SEMPRE USA HÍFEN", "super-homem, anti-higiênico, pré-história"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "A pré-estreia do filme exibiu imagens em ultrassom e efeitos antirreflexo impressionantes.",
            en: "The film's pre-premiere displayed ultrasound footage and impressive anti-reflective effects.",
            highlight: "pré-estreia / ultrassom / antirreflexo"
          },
          {
            pt: "Comprei um micro-ondas novo e matriculei-me na autoescola.",
            en: "I bought a new microwave and enrolled in driving school.",
            highlight: "micro-ondas (iguais) / autoescola (diferentes)"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Cinema Brasileiro, Festivais e Audiovisual",
      culturalNotes: "O cinema brasileiro tem marcos históricos como o Cinema Novo de Glauber Rocha e a 'Retomada' dos anos 1990 (Central do Brasil, Cidade de Deus, O Auto da Compadecida, Bacurau), com forte presença em festivais internacionais como Cannes, Berlim e o Festival de Gramado.",
      dialogue: [
        {
          speaker: "Crítico",
          text: "O que você achou da direção de fotografia desse novo longa-metragem brasileiro?",
          translation: "What did you think of the cinematography in this new Brazilian feature film?"
        },
        {
          speaker: "Cineasta",
          text: "Achei esplêndida! O roteiro é instigante e as atuações foram aclamadas pelo público na pré-estreia.",
          translation: "I thought it was splendid! The screenplay is gripping and the acting was acclaimed by the audience at the preview."
        }
      ],
      thematicWords: [
        { word: "Longa-metragem / Curta-metragem", translation: "Feature film / Short film", example: "O festival premiou o melhor curta-metragem universitário." },
        { word: "Roteiro / Roteirista", translation: "Screenplay / Screenwriter", example: "O roteiro foi adaptado de um romance clássico da literatura." },
        { word: "Direção de fotografia", translation: "Cinematography / DP", example: "A iluminação da direção de fotografia valorizou o sertão nordestino." },
        { word: "Trilha sonora", translation: "Soundtrack", example: "A trilha sonora do filme inclui músicas de Tom Jobim e Caetano Veloso." },
        { word: "Dublado vs. Legendado", translation: "Dubbed vs. Subtitled", example: "Você prefere assistir ao filme dublado ou legendado?" }
      ],
      usefulPhrases: [
        { phrase: "O filme prendeu minha atenção do início ao fim.", translation: "The movie held my attention from beginning to end.", situation: "Elogio a um filme" },
        { phrase: "Não dei nada pelo filme no começo, mas me surpreendeu positivamente!", translation: "I didn't expect much at first, but it positively surprised me!", situation: "Impressão inesperada" },
        { phrase: "A atuação da atriz principal foi impecável.", translation: "The lead actress's performance was flawless.", situation: "Crítica artística" }
      ]
    },
    practice: [
      {
        id: "m14-p1",
        type: "multiple-choice",
        question: "De acordo com as regras do Novo Acordo Ortográfico sobre o hífen, qual das palavras está grafada CORRETAMENTE?",
        options: ["Micro-ondas", "Microondas", "Auto-escola", "Antiinflamatório"],
        correctAnswer: 0,
        explanation: "Prefixos terminados na mesma vogal que inicia a palavra seguinte exigem hífen ('os iguais se repelem'): micro-ondas, anti-inflamatório."
      },
      {
        id: "m14-p2",
        type: "multiple-choice",
        question: "Quando o prefixo termina em vogal e a segunda palavra começa com 'R' ou 'S', o que acontece?",
        options: [
          "Junta-se a palavra sem hífen e dobra-se o 'r' ou 's' (ex.: antirreflexo, minissaia).",
          "Usa-se hífen obrigatoriamente (ex.: anti-reflexo).",
          "Elimina-se a consoante 'r' ou 's'.",
          "Acentua-se a vogal anterior."
        ],
        correctAnswer: 0,
        explanation: "Pela nova regra, prefixo terminado em vogal + palavra com R/S junta sem hífen e dobra a consoante: antessala, ultrassom, antirreflexo, minissaia."
      },
      {
        id: "m14-p3",
        type: "fill-in-blank",
        question: "Na frase 'Ele é um grande ator', a expressão 'grande ator' significa que ele é um ator ________.",
        options: ["admirável e talentoso", "de estatura física muito alta", "pesado", "antigo"],
        correctAnswer: 0,
        explanation: "A anteposição do adjetivo 'grande' antes do substantivo confere sentido valorativo e figurado (notável, talentoso)."
      },
      {
        id: "m14-p4",
        type: "multiple-choice",
        question: "Qual das opções apresenta a grafia CORRETA para prefixos tônicos acentuados (pré, pós, pró)?",
        options: ["Pré-estreia e pós-graduação", "Preestreia e posgraduacao", "Préestreia e pósgraduação", "Pre-estreia e pos-graduação"],
        correctAnswer: 0,
        explanation: "Prefixos com acento gráfico próprio (pré-, pós-, pró-) são sempre seguidos de hífen: pré-estreia, pós-graduação, pró-ativo."
      },
      {
        id: "m14-p5",
        type: "multiple-choice",
        question: "Em uma sinopse de cinema, qual o tempo verbal comumente utilizado para relatar a trama e dar sensação de dinamismo imediato?",
        options: ["Presente do Indicativo", "Pretérito Mais-que-perfeito", "Futuro do Pretérito", "Imperfeito do Subjuntivo"],
        correctAnswer: 0,
        explanation: "O Presente do Indicativo (chamado presente histórico ou narrativo) é a escolha padrão nas sinopses para aproximar a história do leitor."
      }
    ]
  },
  {
    id: 15,
    number: 15,
    title: "Módulo 15 — Narrativa e Pontuação Expressiva",
    subtitle: "Estrutura da narrativa, contraste Pretérito Perfeito x Imperfeito, marcadores temporais e reticências (...)",
    thematicContext: "Crônicas Literárias Brasileiras, Contos e Narrativas de Suspense",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m15-g1",
        title: "Contraste Fundamental: Pretérito Perfeito x Pretérito Imperfeito",
        category: "Morfologia Verbal e Narratologia",
        summary: "O domínio da alternância entre o Perfeito (fio condutor da ação em primeiro plano) e o Imperfeito (cenário, estado e pano de fundo) é a chave da fluência narrativa em português.",
        rules: [
          {
            title: "Funções Narrativas dos Tempos do Passado",
            description: "Como articular o primeiro plano e o segundo plano de um conto ou crônica.",
            table: {
              headers: ["Tempo Verbal", "Papel na Narrativa", "Exemplo Típico"],
              rows: [
                ["Pretérito Imperfeito", "Pano de fundo (background): descreve o clima, estado emocional, ações contínuas ou habituais", "A noite estava escura e o vento soprava forte pelas árvores..."],
                ["Pretérito Perfeito", "Primeiro plano (foreground): ação pontual que avança a história e quebra o estado anterior", "...quando, subitamente, uma porta se abriu com estrondo."],
                ["Pretérito Mais-que-perfeito", "Ação anterior a outra ação do passado (passado do passado)", "Ele percebeu que alguém já entrara / tinha entrado na casa."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Era uma tarde ensolarada e as crianças brincavam tranquilas no jardim, quando um trovão retumbou no horizonte.",
            en: "It was a sunny afternoon and the children were playing peacefully in the garden, when a thunderclap rumbled on the horizon.",
            highlight: "Era / brincavam (imperfeito) vs. retumbou (perfeito)"
          }
        ],
        contrastNotes: "Na fala brasileira moderna, o Mais-que-perfeito composto ('tinha feito', 'havia chegado') é quase 100% predominante em relação à forma sintética literária ('fizera', 'chegara')."
      },
      {
        id: "m15-g2",
        title: "Marcadores Temporais em Narrativas",
        category: "Coesão e Sequenciação Temporal",
        summary: "Recursos linguísticos para acelerar o ritmo, criar suspense ou marcar transições cronológicas.",
        rules: [
          {
            title: "Marcadores de Sequenciação Narrativa",
            description: "Expressões que organizam o fluxo dos acontecimentos.",
            items: [
              "Início / Contexto: 'Tudo começou quando...', 'Era uma vez...', 'Em uma manhã de outono...'",
              "Clímax / Quebra: 'De repente...', 'Subitamente...', 'No exato instante em que...'",
              "Desenlace / Desfecho: 'Por fim...', 'Finalmente...', 'Desde aquele dia em diante...'"
            ]
          }
        ],
        examples: [
          {
            pt: "No exato instante em que ele pegou a chave, as luzes do corredor se apagaram.",
            en: "At the exact instant he grabbed the key, the hallway lights went out.",
            highlight: "No exato instante em que"
          }
        ]
      },
      {
        id: "m15-g3",
        title: "Pontuação Expressiva: O Uso das Reticências (...)",
        category: "Pontuação e Estilística",
        summary: "As reticências indicam suspensão de pensamento, hesitação, continuidade subentendida ou suspense.",
        rules: [
          {
            title: "Funções Estilísticas das Reticências",
            description: "Quando e como utilizar reticências em textos narrativos e diálogos.",
            table: {
              headers: ["Efeito de Sentido", "Contexto de Uso", "Exemplo"],
              rows: [
                ["Hesitação / Dúvida", "A personagem hesita ao falar", "— Eu... eu não sei como te dizer isso..."],
                ["Suspense / Quebra proposital", "Deixa o leitor esperando o desfecho", "Abriu a gaveta devagar e lá estava... a carta misteriosa."],
                ["Ideia em aberto / Prolongamento", "Sinaliza que algo continua", "Pensou nos erros do passado, nos dias que não voltam mais..."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Ele olhou para a velha fotografia e murmurou: — Se ao menos eu tivesse coragem...",
            en: "He looked at the old photograph and murmured: — If only I had courage...",
            highlight: "tivesse coragem..."
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "A Crônica Brasileira: Cotidiano e Poesia Urbana",
      culturalNotes: "A crônica é um dos gêneros mais representativos da literatura brasileira, nascida nos jornais diários. Mestres como Rubem Braga, Clarice Lispector, Fernando Sabino e Luis Fernando Verissimo transformam pequenos episódios da vida urbana em reflexões poéticas e bem-humoradas.",
      dialogue: [
        {
          speaker: "Leitor",
          text: "Adoro as crônicas de Rubem Braga! A maneira como ele descreve um simples passarinho na janela é pura poesia.",
          translation: "I love Rubem Braga's chronicles! The way he describes a simple little bird on the window is pure poetry."
        },
        {
          speaker: "Amiga",
          text: "Verdade! Ele combina pretérito imperfeito para criar a atmosfera e reticências para deixar o pensamento flutuando no ar...",
          translation: "True! He combines the imperfect tense to create atmosphere and ellipses to leave the thought floating in the air..."
        }
      ],
      thematicWords: [
        { word: "Crônica", translation: "Chronicle (short literary narrative on everyday life)", example: "Li uma crônica comovente sobre as ruas do Rio de Janeiro." },
        { word: "Enredo", translation: "Plot / storyline", example: "O enredo do conto gira em torno de um mal-entendido cômico." },
        { word: "Desfecho / Clímax", translation: "Outcome / Climax", example: "O desfecho da história surpreendeu todos os leitores." },
        { word: "Ponto de vista narrativo", translation: "Narrative point of view (1st or 3rd person)", example: "A narrativa em primeira pessoa transmite grande intimidade." },
        { word: "Suspense", translation: "Suspense / tension", example: "O autor soube manter o suspense até a última linha." }
      ],
      usefulPhrases: [
        { phrase: "Era uma daquelas noites em que nada parecia real...", translation: "It was one of those nights when nothing seemed real...", situation: "Início evocativo de conto" },
        { phrase: "Subitamente, o silêncio foi quebrado por um ruído estranho.", translation: "Suddenly, the silence was broken by a strange noise.", situation: "Momento de clímax" },
        { phrase: "E assim se passaram os anos...", translation: "And so the years went by...", situation: "Fecho com reticências" }
      ]
    },
    practice: [
      {
        id: "m15-p1",
        type: "multiple-choice",
        question: "Assinale a opção em que a frase apresenta a combinação perfeita de PANO DE FUNDO (imperfeito) e AÇÃO PONTUAL (perfeito):",
        options: [
          "Enquanto o sol se punha no horizonte, o viajante avistou a aldeia distante.",
          "O viajante avistou a aldeia e o sol se pôs.",
          "O sol se punha e o viajante caminhava.",
          "O viajante tinha avistado a aldeia quando o sol se poria."
        ],
        correctAnswer: 0,
        explanation: "'Enquanto o sol se punha' (imperfeito, descrição de cenário) harmoniza perfeitamente com 'o viajante avistou' (perfeito, evento pontual que quebra o estado)."
      },
      {
        id: "m15-p2",
        type: "multiple-choice",
        question: "Qual o principal efeito expressivo das RETICÊNCIAS (...) na frase '— Eu pretendia dizer toda a verdade, mas quando olhei para ela...'?",
        options: [
          "Indicar hesitação e interrupção do pensamento com ideia suspensa.",
          "Marcar o fim definitivo de uma lista de compras.",
          "Substituir o ponto de interrogação em uma pergunta direta.",
          "Indicar que a frase é uma citação acadêmica da ABNT."
        ],
        correctAnswer: 0,
        explanation: "As reticências assinalam corte ou suspensão proposital do fluxo discursivo, convidando o leitor a subentender o restante."
      },
      {
        id: "m15-p3",
        type: "fill-in-blank",
        question: "Qual conectivo temporal indica uma quebra súbita na narrativa? 'O rapaz caminhava sozinho quando, ________, ouviu passos atrás de si.'",
        options: ["de repente", "desde que", "antigamente", "à medida que"],
        correctAnswer: 0,
        explanation: "'De repente' expressa instantaneidade e quebra abrupta, essencial para o ritmo narrativo."
      },
      {
        id: "m15-p4",
        type: "multiple-choice",
        question: "O gênero literário 'crônica', muito popular no Brasil, caracteriza-se fundamentalmente por:",
        options: [
          "Textos curtos inspirados no cotidiano, com linguagem próxima do leitor, humor ou reflexão lírica.",
          "Tratados científicos formais de cem páginas com estatísticas complexas.",
          "Roteiros de peças teatrais escritas em versos medievais.",
          "Contratos jurídicos assinados perante tabelião."
        ],
        correctAnswer: 0,
        explanation: "A crônica brasileira é marcada pela brevidade, sensibilidade diante de pequenos fatos cotidianos e tom de conversa com o leitor."
      },
      {
        id: "m15-p5",
        type: "multiple-choice",
        question: "No passado do passado ('passado anterior a outro passado'), qual forma é mais comum na linguagem falada brasileira moderna?",
        options: [
          "A forma composta com tinha + particípio (ex.: 'Quando cheguei, ele já tinha saído').",
          "A forma simples arcaica (ex.: 'ele já saíra').",
          "O futuro do presente.",
          "O presente contínuo."
        ],
        correctAnswer: 0,
        explanation: "Na língua falada e escrita cotidiana, o mais-que-perfeito composto ('tinha saído') é a forma natural de expressar o passado anterior."
      }
    ]
  },
  {
    id: 16,
    number: 16,
    title: "Módulo 16 — Roteiros, Passado Irregular e Gerúndio",
    subtitle: "Verbos irregulares no passado, presente contínuo (estar + gerúndio), descrição de destinos e apóstrofo",
    thematicContext: "Ecoturismo Brasileiro, Roteiros de Viagem e Relato de Aventuras",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m16-g1",
        title: "Verbos Irregulares Chave no Pretérito Perfeito",
        category: "Morfologia Verbal",
        summary: "Domínio dos verbos irregulares fundamentais: ir/ser (fui), ter (tive), estar (estive), fazer (fiz), trazer (trouxe), ver (vi), vir (vim), saber (soube), poder (pude), pôr (pus).",
        rules: [
          {
            title: "Guia de Irregularidades do Pretérito Perfeito",
            description: "Radicais modificados no passado concluído.",
            table: {
              headers: ["Verbo", "Eu", "Ele / Ela / Você", "Nós", "Eles / Elas / Vocês"],
              rows: [
                ["Ir / Ser", "fui", "foi", "fomos", "foram"],
                ["Ter", "tive", "teve", "tivemos", "tiveram"],
                ["Estar", "estive", "esteve", "estivemos", "estiveram"],
                ["Fazer", "fiz", "fez", "fizemos", "fizeram"],
                ["Trazer", "trouxe", "trouxe", "trouxemos", "trouxeram"],
                ["Vir", "vim", "veio", "viemos", "vieram"],
                ["Ver", "vi", "viu", "vimos", "viram"],
                ["Pôr", "pus", "pôs", "pusemos", "puseram"],
                ["Saber", "soube", "soube", "soubemos", "souberam"],
                ["Poder", "pude", "pôde (com acento diferencial)", "pudemos", "puderam"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "No ano passado estive na Chapada Diamantina e fiz trilhas inesquecíveis.",
            en: "Last year I was in Chapada Diamantina and did unforgettable hiking trails.",
            highlight: "estive / fiz"
          },
          {
            pt: "Nós trouxemos lembrancinhas de Salvador e vimos o pôr do sol no Farol da Barra.",
            en: "We brought souvenirs from Salvador and saw the sunset at Barra Lighthouse.",
            highlight: "trouxemos / vimos"
          }
        ],
        contrastNotes: "Cuidado com 'vir' (eu vim, ele veio) e 'ver' (eu vi, ele viu). Outro ponto: 'pôde' (passado com circunflexo) vs. 'pode' (presente com som aberto)."
      },
      {
        id: "m16-g2",
        title: "Presente Contínuo: A Estrutura 'Estar + Gerúndio'",
        category: "Morfologia e Aspecto Verbal",
        summary: "No Brasil, ações em andamento são quase exclusivamente expressas por 'estar + gerúndio' (-ando, -endo, -indo), diferentemente de Portugal ('a + infinitivo').",
        rules: [
          {
            title: "Formação do Gerúndio Brasileiro",
            description: "Terminações regulares do gerúndio.",
            table: {
              headers: ["Conjugação", "Terminação do Gerúndio", "Exemplo em Contexto"],
              rows: [
                ["1ª (-AR: viajar)", "-ANDO", "Estou viajando pelo litoral de Alagoas."],
                ["2ª (-ER: viver)", "-ENDO", "Estamos vivendo uma experiência transformadora."],
                ["3ª (-IR: curtir)", "-INDO", "Eles estão curtindo cada momento do passeio."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Neste momento, estou apreciando as cataratas em Foz do Iguaçu.",
            en: "Right now, I am appreciating the waterfalls in Foz do Iguaçu.",
            highlight: "estou apreciando"
          }
        ]
      },
      {
        id: "m16-g3",
        title: "O Uso do Apóstrofo (') na Língua Portuguesa",
        category: "Ortografia e Fonética",
        summary: "O apóstrofo marca a elisão (supressão) de uma vogal em palavras compostas ou poesia.",
        rules: [
          {
            title: "Casos Consagrados do Apóstrofo",
            description: "Quando empregar o apóstrofo na língua padrão.",
            items: [
              "Combinações com 'de': d'água (olho-d'água, gota-d'água, pau-d'alho)",
              "Nomes próprios e expressões históricas: Santa Bárbara d'Oeste, Vozes d'África",
              "Não se usa apóstrofo em contrações comuns que viraram palavras únicas: 'daqui' (não d'aqui), 'deste' (não d'este), 'naquela' (não n'aquela)."
            ]
          }
        ],
        examples: [
          {
            pt: "Fizemos uma parada para beber água em uma nascente de olho-d'água límpido.",
            en: "We made a stop to drink water at a clear freshwater spring.",
            highlight: "olho-d'água"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Ecoturismo, Trilhas e Roteiros de Aventura no Brasil",
      culturalNotes: "O Brasil abriga destinos de ecoturismo de fama mundial como Bonito (MS - rios de águas cristalinas para flutuação), Lençóis Maranhenses (MA - dunas e lagoas de água doce), Fernando de Noronha (PE - santuário marinho) e Chapada dos Veadeiros (GO - cachoeiras e cânions).",
      dialogue: [
        {
          speaker: "Guia de Ecoturismo",
          text: "Bem-vindos! O nosso roteiro de hoje inclui uma caminhada de quatro quilômetros até a cachoeira principal, com parada para banho.",
          translation: "Welcome! Our itinerary today includes a four-kilometer hike to the main waterfall, with a stop for swimming."
        },
        {
          speaker: "Turista",
          text: "Incrível! Ontem eu fiz a flutuação no rio e pude ver dezenas de cardumes coloridos. Que experiência!",
          translation: "Incredible! Yesterday I did the river snorkeling and was able to see dozens of colorful schools of fish. What an experience!"
        }
      ],
      thematicWords: [
        { word: "Roteiro turístico", translation: "Tour itinerary / travel route", example: "Montamos um roteiro completo de cinco dias pelas cidades históricas." },
        { word: "Trilha ecológica", translation: "Ecological hiking trail", example: "A trilha exige calçado fechado e protetor solar." },
        { word: "Cachoeira / Cascata", translation: "Waterfall", example: "A queda d'água da cachoeira tem mais de 50 metros de altura." },
        { word: "Flutuação", translation: "Snorkeling / river floating", example: "A flutuação no Rio da Prata é famosa pela visibilidade cristalina." },
        { word: "Preservação ambiental", translation: "Environmental conservation", example: "O parque cobra taxa de preservação para manter a infraestrutura." }
      ],
      usefulPhrases: [
        { phrase: "Estamos fazendo um roteiro de ecoturismo pelo interior.", translation: "We are doing an ecotourism itinerary through the interior.", situation: "Descrever viagem em andamento" },
        { phrase: "Ontem pude contemplar uma vista panorâmica deslumbrante.", translation: "Yesterday I was able to contemplate a breathtaking panoramic view.", situation: "Relato com verbo irregular" },
        { phrase: "Essa foi a gota-d'água para decidirmos viajar!", translation: "That was the last straw (idiom) that made us decide to travel!", situation: "Expressão idiomática com apóstrofo" }
      ]
    },
    practice: [
      {
        id: "m16-p1",
        type: "multiple-choice",
        question: "Assinale a opção com a conjugação correta dos verbos irregulares no Pretérito Perfeito para 'Eu': '(trazer) o mapa, (fazer) a reserva e (pôr) a mochila no carro.",
        options: [
          "Trouxe o mapa, fiz a reserva e pus a mochila no carro.",
          "Trazi o mapa, fazi a reserva e ponhi a mochila no carro.",
          "Trouxera o mapa, fizera a reserva e posera a mochila.",
          "Trago o mapa, faço a reserva e ponho a mochila."
        ],
        correctAnswer: 0,
        explanation: "1ª pessoa do singular do Pretérito Perfeito: Eu trouxe (trazer), Eu fiz (fazer), Eu pus (pôr)."
      },
      {
        id: "m16-p2",
        type: "multiple-choice",
        question: "Como o português brasileiro expressa uma ação que está ocorrendo no momento da fala?",
        options: [
          "Com o verbo 'estar' + Gerúndio (ex.: 'Estou curtindo a viagem').",
          "Com o verbo 'estar' + a + Infinitivo (ex.: 'Estou a curtir').",
          "Com o particípio isolado.",
          "Com o pretérito mais-que-perfeito."
        ],
        correctAnswer: 0,
        explanation: "No Brasil, a forma padrão do presente contínuo é 'estar + gerúndio' (estou viajando, estamos descansando)."
      },
      {
        id: "m16-p3",
        type: "fill-in-blank",
        question: "Complete com a forma do pretérito de 'vir': 'Ontem meus amigos ________ de Belo Horizonte para nos visitar.'",
        options: ["vieram", "viram", "viam", "vêm"],
        correctAnswer: 0,
        explanation: "A 3ª pessoa do plural do verbo 'vir' no pretérito perfeito é 'vieram'. ('Viram' é do verbo ver)."
      },
      {
        id: "m16-p4",
        type: "multiple-choice",
        question: "Em qual dos vocábulos a seguir o apóstrofo (') foi empregado CORRETAMENTE para marcar a elisão vocálica consagrada?",
        options: ["Olho-d'água", "D'aqui", "N'aquela", "C'asa"],
        correctAnswer: 0,
        explanation: "Expressões consagradas como 'olho-d'água', 'pau-d'alho' e 'gota-d'água' mantêm o apóstrofo na língua padrão."
      },
      {
        id: "m16-p5",
        type: "multiple-choice",
        question: "Qual o valor do acento diferencial na forma verbal 'pôde' ('Ele não pôde vir ontem')?",
        options: [
          "Diferenciar o pretérito perfeito com som fechado ('pôde') do presente com som aberto ('pode').",
          "Indicar que a palavra é proparoxítona.",
          "Indicar plural.",
          "Não tem função gramatical."
        ],
        correctAnswer: 0,
        explanation: "'Pôde' (com circunflexo, vogal fechada) marca o passado / pretérito perfeito; 'pode' (sem acento, vogal aberta) marca o presente."
      }
    ]
  },
  {
    id: 17,
    number: 17,
    title: "Módulo 17 — Diversidade Cultural e Texto Dissertativo",
    subtitle: "Estrutura dissertativa-argumentativa (Introdução, Desenvolvimento, Conclusão), expressões argumentativas e encontros consonantais",
    thematicContext: "Diversidade Étnico-Cultural Brasileira, Cidadania e Ensaios de Opinião",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m17-g1",
        title: "Estrutura do Texto Dissertativo-Argumentativo",
        category: "Tipologia Textual e Redação",
        summary: "A redação dissertativo-argumentativa (padrão ENEM/Celpe-Bras) defende uma tese por meio de argumentos consistentes e proposta de intervenção.",
        rules: [
          {
            title: "Os Três Pilares da Redação Argumentativa",
            description: "Articulação lógica dos parágrafos.",
            table: {
              headers: ["Parte do Texto", "Função Estrutural", "Recursos Linguísticos Chave"],
              rows: [
                ["Introdução", "Apresenta o tema, contextualiza e formula a Tese central", "Sabe-se que... / No cenário contemporâneo... / Torna-se imperativo discutir..."],
                ["Desenvolvimento (D1 e D2)", "Sustenta a tese com dados, repertório sociocultural e causas/efeitos", "Em primeiro plano... / Ademais... / É perceptível que... / Constata-se que..."],
                ["Conclusão", "Reafirma a tese e apresenta proposta de intervenção detalhada", "Portanto, cabe ao Poder Público... / Infere-se, portanto, que... / Com o intuito de..."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "É perceptível que a valorização da herança afro-brasileira e indígena enriquece a identidade nacional e combate o preconceito estrutural.",
            en: "It is noticeable that the appreciation of Afro-Brazilian and indigenous heritage enriches national identity and combats structural prejudice.",
            highlight: "É perceptível que"
          }
        ]
      },
      {
        id: "m17-g2",
        title: "Expressões Argumentativas e Operadores Discursivos",
        category: "Coesão e Argumentação",
        summary: "Fórmulas de autoridade, concessão e refutação para elevar a qualidade do discurso opinativo.",
        rules: [
          {
            title: "Arsenal de Conectivos e Expressões Argumentativas",
            description: "Expressões indispensáveis para debates e redações formais.",
            table: {
              headers: ["Intenção Discursiva", "Expressões Típicas"],
              rows: [
                ["Constatação evidente", "É notório que..., É perceptível que..., Percebe-se que..., Constata-se que..."],
                ["Relevância / Destaque", "É relevante destacar que..., Cumpre ressaltar que..., Vale salientar que..."],
                ["Contra-argumentação", "Alguns pensam que..., Contudo há que se considerar que..., Embora muitos afirmem..."],
                ["Causa e Efeito", "Em decorrência de..., Haja vista que..., Por conseguinte..."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "É relevante enfatizar que a pluralidade cultural brasileira não é homogênea, mas construída por múltiplos saberes regionais.",
            en: "It is relevant to emphasize that Brazilian cultural plurality is not homogeneous, but constructed by multiple regional knowledges.",
            highlight: "É relevante enfatizar que"
          }
        ]
      },
      {
        id: "m17-g3",
        title: "Encontros Consonantais e Fonética",
        category: "Fonética e Ortografia",
        summary: "O encontro consonantal é a sequência de duas ou mais consoantes na palavra sem vogal intermediária, onde CADA consoante preserva seu som audível (diferente do dígrafo).",
        rules: [
          {
            title: "Tipos de Encontros Consonantais",
            description: "Classificação em perfeitos (inseparáveis) e imperfeitos (separáveis).",
            table: {
              headers: ["Tipo", "Características", "Separação Silábica", "Exemplos"],
              rows: [
                ["Perfeito (Inseparável)", "Consoante + L ou R na mesma sílaba", "Ficam na mesma sílaba", "prá-ti-ca, bra-sil, cla-ro, flo-res, pla-no"],
                ["Imperfeito (Separável)", "Consoantes que pertencem a sílabas distintas", "Ficam em sílabas separadas", "ad-vo-ga-do, dig-no, ob-je-to, ét-ni-co, rit-mo"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "O Brasil tem um ritmo cultural próprio formado pela mistura de povos dignos.",
            en: "Brazil has its own cultural rhythm formed by the blend of worthy peoples.",
            highlight: "Bra-sil (br), rit-mo (tm), pró-prio (pr), dig-nos (gn)"
          }
        ],
        contrastNotes: "Diferença vital: em dígrafos (ch, lh, nh, rr, ss) há duas letras para UM som. No encontro consonantal (pr, bl, tm, gn, ct) ouvem-se as DUAS consoantes claramente."
      }
    ],
    vocabulary: {
      situationTitle: "Patrimônio Cultural, Matrizes Étnicas e Cidadania",
      culturalNotes: "A cultura brasileira é fruto da confluência de matrizes indígenas originárias, africanas de diversas etnias trazidas durante a diáspora, colonizadores portugueses e sucessivas levas de imigrantes (italianos, alemães, japoneses, sírio-libaneses, entre outros). Esse mosaico moldou a culinária, a música, as artes e as expressões linguísticas.",
      dialogue: [
        {
          speaker: "Socióloga",
          text: "Percebe-se que a valorização do patrimônio imaterial, como o samba de roda e o frevo, fortalece o sentimento de cidadania.",
          translation: "It is perceived that the valorization of intangible heritage, such as samba de roda and frevo, strengthens the sense of citizenship."
        },
        {
          speaker: "Estudante",
          text: "Com certeza! É relevante que as escolas abordem a história das culturas afro-brasileiras e indígenas nas salas de aula.",
          translation: "Certainly! It is relevant that schools address the history of Afro-Brazilian and indigenous cultures in classrooms."
        }
      ],
      thematicWords: [
        { word: "Patrimônio imaterial", translation: "Intangible cultural heritage", example: "O ofício das baianas de acarajé é reconhecido como patrimônio imaterial." },
        { word: "Matriz africana e indígena", translation: "African and indigenous roots / matrix", example: "A língua e a culinária brasileiras guardam profundas raízes de matriz africana." },
        { word: "Pluralidade cultural", translation: "Cultural diversity / plurality", example: "A pluralidade cultural é uma das maiores riquezas do povo brasileiro." },
        { word: "Ações afirmativas", translation: "Affirmative action / quotas", example: "A política de cotas nas universidades é uma ação afirmativa de inclusão." },
        { word: "Identidade nacional", translation: "National identity", example: "A música popular reflete a complexa identidade nacional." }
      ],
      usefulPhrases: [
        { phrase: "É perceptível que as políticas de inclusão geram impactos positivos.", translation: "It is noticeable that inclusion policies generate positive impacts.", situation: "Argumentação formal" },
        { phrase: "Cumpre ressaltar a importância histórica dos povos originários.", translation: "It is necessary to highlight the historical importance of indigenous peoples.", situation: "Abertura de parágrafo argumentativo" },
        { phrase: "Infere-se, portanto, a urgência de medidas governamentais.", translation: "One infers, therefore, the urgency of governmental measures.", situation: "Conclusão de ensaio" }
      ]
    },
    practice: [
      {
        id: "m17-p1",
        type: "multiple-choice",
        question: "Qual das frases a seguir utiliza um operador argumentativo formal de CONSTATAÇÃO para iniciar um parágrafo dissertativo?",
        options: [
          "É perceptível que a diversidade cultural enriquece o patrimônio nacional.",
          "Eu acho muito legal a diversidade do Brasil.",
          "E aí, gente, vamos falar de cultura hoje?",
          "Mudando de assunto, a festa estava ótima."
        ],
        correctAnswer: 0,
        explanation: "'É perceptível que...' é uma fórmula dissertativa clássica de impessoalidade e constatação argumentativa recomendada em redações formais."
      },
      {
        id: "m17-p2",
        type: "multiple-choice",
        question: "Qual a diferença entre um DÍGRAFO e um ENCONTRO CONSONANTAL?",
        options: [
          "No dígrafo duas letras representam um único som; no encontro consonantal cada consoante mantém seu som individual.",
          "Dígrafo é sempre separado; encontro consonantal nunca se separa.",
          "Dígrafos só existem em palavras estrangeiras.",
          "Não há diferença, são sinônimos perfeitos."
        ],
        correctAnswer: 0,
        explanation: "No dígrafo (ex.: 'ch', 'ss', 'lh') há 2 letras para 1 fonema. No encontro consonantal (ex.: 'pr', 'bl', 'tm') ouvem-se claramente os 2 sons consonantais."
      },
      {
        id: "m17-p3",
        type: "fill-in-blank",
        question: "Complete a proposta de intervenção dissertativa: '________, torna-se imperativo que o Ministério da Educação promova projetos culturais nas escolas.'",
        options: ["Portanto", "Contudo", "Mas", "Embora"],
        correctAnswer: 0,
        explanation: "'Portanto' é a conjunção conclusiva padrão para introduzir a proposta de intervenção no parágrafo final da dissertação."
      },
      {
        id: "m17-p4",
        type: "multiple-choice",
        question: "Assinale a alternativa que contém apenas palavras com ENCONTROS CONSONANTAIS SEPARÁVEIS (imperfeitos) na divisão silábica:",
        options: [
          "ad-vo-ga-do, rit-mo, dig-no, ob-je-to",
          "bra-sil, flo-res, pla-no, cla-ro",
          "chu-va, ni-nho, car-ro, pás-sa-ro",
          "quei-jo, guer-ra, á-gua, san-gue"
        ],
        correctAnswer: 0,
        explanation: "Em 'ad-vo-ga-do' (dv), 'rit-mo' (tm), 'dig-no' (gn) e 'ob-je-to' (bj), as consoantes de sons distintos separam-se em sílabas diferentes."
      },
      {
        id: "m17-p5",
        type: "multiple-choice",
        question: "Qual é o objetivo principal de uma 'proposta de intervenção' na conclusão de uma dissertação-argumentativa?",
        options: [
          "Apresentar uma solução prática e viável para o problema discutido, indicando agente, ação, meio e finalidade.",
          "Contar uma piada engraçada para descontrair a banca.",
          "Fazer um resumo biográfico de quem escreveu o texto.",
          "Repetir a primeira frase do texto sem acrescentar nada novo."
        ],
        correctAnswer: 0,
        explanation: "A proposta de intervenção deve detalhar ações concretas de melhoria social com agentes claros e finalidade pública."
      }
    ]
  },
  {
    id: 18,
    number: 18,
    title: "Módulo 18 — Direitos, Cidadania e a Crase",
    subtitle: "Constituição e direitos, abaixo-assinado, conjunções de finalidade, preposições e o guia definitivo da crase",
    thematicContext: "Cidadania Ativa, Direitos Fundamentais, Abaixo-Assinado e Síntese Gramatical",
    estimatedMinutes: 60,
    grammarTopics: [
      {
        id: "m18-g1",
        title: "O Guia Definitivo do Uso e Não Uso da Crase (à / às)",
        category: "Sintaxe e Ortografia Fundamental",
        summary: "A crase é a fusão da preposição 'a' com o artigo feminino 'a(s)' ou pronomes demonstrativos (aquele, aquela, aquilo).",
        rules: [
          {
            title: "1. Regra Prática de Substituição (Mascete do Masculino)",
            description: "Para saber se há crase diante de palavra feminina, troque a palavra feminina por uma masculina equivalente. Se virar 'AO', usa-se crase com acento grave (`à`).",
            table: {
              headers: ["Frase Feminina", "Teste com Masculino", "Resultado da Crase"],
              rows: [
                ["Vou à escola.", "Vou AO colégio.", "Tem crase (à escola)"],
                ["Entreguei o documento à diretora.", "Entreguei o documento AO diretor.", "Tem crase (à diretora)"],
                ["Conheço a cidade.", "Conheço O bairro (não vira AO).", "NÃO tem crase (apenas artigo 'a')"],
                ["Dirigi-me à estação.", "Dirigi-me AO terminal.", "Tem crase (à estação)"]
              ]
            }
          },
          {
            title: "2. Casos Proibidos da Crase (NUNCA Ocorre Crase)",
            description: "Situações onde o acento grave é terminantemente proibido.",
            items: [
              "Antes de palavras masculinas: andar a pé, andar a cavalo, pagar a prazo, bife a cavalo",
              "Antes de verbos: começou a chorar, disposto a ajudar, pôs-se a cantar",
              "Antes de pronomes pessoais, de tratamento e indefinidos: disse a ela, pediu a você, solicitou a Vossa Senhoria, entregou a qualquer pessoa (exceção: dona, senhora, senhorita)",
              "Entre palavras repetidas em expressões: cara a cara, dia a dia, gota a gota, frente a frente",
              "Quando a preposição 'a' estiver no singular antes de palavra feminina no plural: 'Refiro-me a pessoas honestas' (sem crase; com crase seria: 'às pessoas')"
            ]
          },
          {
            title: "3. Casos Facultativos da Crase",
            description: "O uso do acento grave é opcional nestas 3 situações (regra mnemônica 'NOME DE MULHER, PRONOME POSSESSIVO E ATÉ'):",
            items: [
              "Antes de nomes próprios femininos: Enviei flores a Mariana / Enviei flores à Mariana.",
              "Antes de pronomes possessivos femininos singulares: Refiro-me a sua mãe / Refiro-me à sua mãe.",
              "Depois da preposição 'até': Fui até a praia / Fui até à praia."
            ]
          }
        ],
        examples: [
          {
            pt: "Todos têm direito à educação pública e acesso à saúde de qualidade.",
            en: "Everyone has the right to public education and access to quality healthcare.",
            highlight: "à educação / à saúde (direito ao estudo / acesso ao hospital)"
          },
          {
            pt: "Eles começaram a redigir o documento e entregaram o pedido a ela sem demora.",
            en: "They started to draft the document and delivered the petition to her without delay.",
            highlight: "a redigir (antes de verbo) / a ela (antes de pronome pessoal)"
          }
        ]
      },
      {
        id: "m18-g2",
        title: "Conjunções e Locuções de Finalidade",
        category: "Sintaxe das Orações Subordinadas",
        summary: "Expressam o propósito, objetivo ou meta de uma ação.",
        rules: [
          {
            title: "Locuções Finais e Modos Verbais",
            description: "Uso com Subjuntivo ou Infinitivo.",
            table: {
              headers: ["Locução Final", "Regência e Modo Verbal", "Exemplo"],
              rows: [
                ["A fim de que / Para que", "Exige Verbo no Subjuntivo (sujeitos diferentes)", "Organizamos o abaixo-assinado a fim de que as autoridades ouçam a comunidade."],
                ["A fim de / Para", "Exige Verbo no Infinitivo (mesmo sujeito)", "Reunimo-nos para reivindicar melhorias no transporte."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Os moradores protocolaram a petição a fim de garantir a reforma da praça.",
            en: "The residents filed the petition in order to guarantee the square's renovation.",
            highlight: "a fim de garantir"
          }
        ],
        contrastNotes: "Atenção ortográfica: 'a fim de' (com espaço = propósito/objetivo) vs. 'afim' (junto = semelhante, com afinidade, ex.: ideias afins)."
      },
      {
        id: "m18-g3",
        title: "Gênero Textual Abaixo-Assinado e Vocabulário Constitucional",
        category: "Cidadania e Documentos Públicos",
        summary: "O abaixo-assinado é um instrumento coletivo legítimo de petição popular previsto nos direitos de cidadania.",
        rules: [
          {
            title: "Estrutura Padrão de um Abaixo-Assinado",
            description: "Norma para criação de petições comunitárias.",
            items: [
              "1. Vocativo / Destinatário: autoridade competente (ex.: 'Ao Excelentíssimo Senhor Prefeito')",
              "2. Corpo do texto: identificação do grupo de cidadãos, exposição detalhada da demanda e fundamentação legal",
              "3. Fecho formal: local, data e lista de signatários com nome legível, CPF e assinatura"
            ]
          }
        ],
        examples: [
          {
            pt: "Nós, abaixo-assinados, cidadãos residentes no bairro, vimos solicitar a instalação de semáforo no cruzamento da Avenida Brasil.",
            en: "We, the undersigned, citizens residing in the neighborhood, hereby request the installation of a traffic light at the intersection of Avenida Brasil.",
            highlight: "Nós, abaixo-assinados"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Cidadania, Constituição de 1988 e Direitos Fundamentais",
      culturalNotes: "A Constituição Brasileira de 1988, conhecida como a 'Constituição Cidadã', consolidou garantias fundamentais como o SUS (Sistema Único de Saúde gratuito e universal), educação pública, voto direto e universal aos 16 anos (facultativo) e proteção aos direitos humanos e ao consumidor (PROCON).",
      dialogue: [
        {
          speaker: "Líder Comunitário",
          text: "Estamos colhendo assinaturas no abaixo-assinado a fim de que a linha de ônibus seja estendida até o novo posto de saúde.",
          translation: "We are collecting signatures on the petition in order for the bus line to be extended to the new health clinic."
        },
        {
          speaker: "Morador",
          text: "Excelente iniciativa! O acesso à saúde é um direito garantido pela Constituição a todos os cidadãos.",
          translation: "Excellent initiative! Access to healthcare is a right guaranteed by the Constitution to all citizens."
        }
      ],
      thematicWords: [
        { word: "Abaixo-assinado", translation: "Petition (collective signed document)", example: "O abaixo-assinado reuniu mais de mil assinaturas de moradores." },
        { word: "Direitos fundamentais", translation: "Fundamental rights", example: "O direito à vida, à liberdade e à igualdade são direitos fundamentais." },
        { word: "SUS (Sistema Único de Saúde)", translation: "Unified Health System (Brazil's free public healthcare)", example: "O SUS garante atendimento médico e vacinação gratuita a qualquer pessoa." },
        { word: "Órgão competente", translation: "Competent authority / agency", example: "O documento foi encaminhado ao órgão competente para análise." },
        { word: "Cidadania ativa", translation: "Active citizenship", example: "Participar das audiências públicas da cidade é um exercício de cidadania ativa." }
      ],
      usefulPhrases: [
        { phrase: "Nós, abaixo-assinados, vimos por meio deste reivindicar...", translation: "We, the undersigned, hereby demand...", situation: "Início de abaixo-assinado" },
        { phrase: "É assegurado a todos o direito de petição aos poderes públicos.", translation: "The right to petition public authorities is guaranteed to all.", situation: "Artigo constitucional" },
        { phrase: "Todos os cidadãos têm direito à ampla defesa e ao contraditório.", translation: "All citizens have the right to full defense and adversary proceedings.", situation: "Garantia jurídica" }
      ]
    },
    practice: [
      {
        id: "m18-p1",
        type: "multiple-choice",
        question: "Assinale a alternativa em que o uso do acento grave indicativo de CRASE está CORRETO:",
        options: [
          "O acesso à saúde pública é garantido a todos os cidadãos.",
          "O cidadão começou à reclamar dos serviços.",
          "Eles foram à pé até o tribunal.",
          "Entreguei a petição à ele ontem."
        ],
        correctAnswer: 0,
        explanation: "1. 'acesso à saúde' tem crase porque pede preposição 'a' + artigo feminino 'a' (teste: acesso ao hospital). 2, 3 e 4 estão erradas porque não há crase antes de verbo ('reclamar'), palavra masculina ('pé') ou pronome pessoal ('ele')."
      },
      {
        id: "m18-p2",
        type: "multiple-choice",
        question: "Em qual dos casos abaixo o uso da crase é FACULTATIVO (opcional)?",
        options: [
          "Antes de pronome possessivo feminino singular (ex.: Entreguei o documento a/à minha advogada).",
          "Antes de verbos no infinitivo.",
          "Antes de palavras masculinas.",
          "Em expressões com palavras repetidas como 'gota a gota'."
        ],
        correctAnswer: 0,
        explanation: "A crase é facultativa antes de pronomes possessivos femininos no singular (minha, tua, sua, nossa), antes de nomes próprios femininos e após a preposição 'até'."
      },
      {
        id: "m18-p3",
        type: "fill-in-blank",
        question: "Complete com a locução conjuntiva de finalidade correta: 'Os cidadãos se reuniram ________ que o prefeito ouvisse as reivindicações.'",
        options: ["a fim de", "afim de", "a fim", "afins de"],
        correctAnswer: 0,
        explanation: "'A fim de que' (separado) expressa finalidade / objetivo e rege o subjuntivo ('ouvisse')."
      },
      {
        id: "m18-p4",
        type: "multiple-choice",
        question: "Por que NÃO há crase na frase 'Fizemos uma caminhada a pé pelo parque'?",
        options: [
          "Porque 'pé' é uma palavra masculina (não aceita o artigo feminino 'a').",
          "Porque 'pé' é um verbo.",
          "Porque a frase está no pretérito.",
          "Porque parques municipais proíbem acento."
        ],
        correctAnswer: 0,
        explanation: "Nunca ocorre crase antes de substantivos masculinos ('a pé', 'a cavalo', 'a prazo', 'a bordo')."
      },
      {
        id: "m18-p5",
        type: "multiple-choice",
        question: "O que é a 'Constituição Cidadã' de 1988 no Brasil?",
        options: [
          "A lei máxima do país, promulgada em 1988, que consolidou a democracia e os direitos sociais fundamentais.",
          "Um código de trânsito para motoristas de ônibus.",
          "Um livro de culinária tradicional brasileira.",
          "Um estatuto exclusivo para diplomatas estrangeiros."
        ],
        correctAnswer: 0,
        explanation: "A Constituição Federal de 1988 é a Carta Magna do Brasil que restabeleceu a ordem democrática e consagrou amplos direitos humanos e sociais."
      }
    ]
  }
];

modules.forEach(mod => {
  const filePath = path.join(modulesDir, `module${mod.id.toString().padStart(2, '0')}.json`);
  fs.writeFileSync(filePath, JSON.stringify(mod, null, 2), 'utf-8');
  console.log(`Generated ${filePath}`);
});
