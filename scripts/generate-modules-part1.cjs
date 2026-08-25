const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '../src/data/modules');
fs.mkdirSync(modulesDir, { recursive: true });

const modules = [
  {
    id: 1,
    number: 1,
    title: "Módulo 1 — Biografia e Identidade",
    subtitle: "Marcadores temporais, presente/pretérito, aumentativo/diminutivo e regras de acentuação e til (~)",
    thematicContext: "Biografia e Autobiografia — Falando de si e do outro",
    estimatedMinutes: 45,
    grammarTopics: [
      {
        id: "m1-g1",
        title: "Marcadores Temporais na Biografia",
        category: "Morfossintaxe",
        summary: "Marcadores temporais situam acontecimentos cronologicamente em textos biográficos e autobiográficos.",
        rules: [
          {
            title: "Tipos de Marcadores Temporais",
            description: "Dividem-se em passado pontual, duração, frequência e sucessão cronológica.",
            table: {
              headers: ["Função", "Expressões Típicas", "Exemplo de Uso"],
              rows: [
                ["Origem / Marco inicial", "Em [ano], Na década de, Desde que, Aos [idade] anos", "Em 1995, começou seus estudos."],
                ["Sucessão temporal", "Depois disso, Mais tarde, Em seguida, Anos depois", "Anos depois, mudou-se para São Paulo."],
                ["Duração / Simultaneidade", "Durante aquele período, Enquanto isso, Ao longo de", "Durante a infância, viveu no campo."],
                ["Marco recente / Atual", "Atualmente, Hoje em dia, Recentemente, Nos últimos anos", "Atualmente, trabalha como professora."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Em 1988, Clarice publicou seu primeiro livro de crônicas.",
            en: "In 1988, Clarice published her first chronicle book.",
            highlight: "Em 1988"
          },
          {
            pt: "Aos vinte anos, ela se formou em Letras na Universidade Federal.",
            en: "At age twenty, she graduated in Literature at the Federal University.",
            highlight: "Aos vinte anos"
          },
          {
            pt: "Mais tarde, decidiu se mudar para o exterior para fazer doutorado.",
            en: "Later on, she decided to move abroad to pursue a doctorate.",
            highlight: "Mais tarde"
          }
        ],
        contrastNotes: "No português brasileiro falado, 'daí' e 'aí' são muito usados informalmente como marcadores de sucessão temporal ('Aí ele chegou...'), mas em textos biográficos formais prefere-se 'em seguida', 'posteriormente' ou 'logo após'."
      },
      {
        id: "m1-g2",
        title: "Verbos no Presente e Pretérito do Indicativo (Falar de si e do outro)",
        category: "Morfologia Verbal",
        summary: "Contraste entre o Presente (fatos habituais, dados biográficos atuais) e o Pretérito Perfeito (ações concluídas no passado).",
        rules: [
          {
            title: "Conjugação no Presente vs. Pretérito Perfeito",
            description: "Destaque para a 1ª pessoa (eu - autobiografia) e a 3ª pessoa (ele/ela - biografia de terceiros).",
            table: {
              headers: ["Pessoa", "Presente (Viver / Ter / Fazer)", "Pretérito Perfeito (Viver / Ter / Fazer)"],
              rows: [
                ["Eu", "vivo / tenho / faço", "vivi / tive / fiz"],
                ["Ele / Ela / Você", "vive / tem / faz", "viveu / teve / fez"],
                ["Nós", "vivemos / temos / fazemos", "vivemos / tivemos / fizemos"],
                ["Eles / Elas / Vocês", "vivem / têm / fazem", "viveram / tiveram / fizeram"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Eu nasci em Salvador, mas hoje moro em Curitiba.",
            en: "I was born in Salvador, but today I live in Curitiba.",
            highlight: "nasci / moro"
          },
          {
            pt: "Machado de Assis nasceu no Rio de Janeiro e fundou a Academia Brasileira de Letras.",
            en: "Machado de Assis was born in Rio de Janeiro and founded the Brazilian Academy of Letters.",
            highlight: "nasceu / fundou"
          },
          {
            pt: "Nós estudamos português todos os dias porque queremos viajar pelo Brasil.",
            en: "We study Portuguese every day because we want to travel around Brazil.",
            highlight: "estudamos / queremos"
          }
        ],
        contrastNotes: "Note que 'nós vivemos' / 'nós estudamos' tem a mesma grafia no presente e no pretérito perfeito regular. O contexto e os marcadores temporais indicam o tempo."
      },
      {
        id: "m1-g3",
        title: "Graus do Substantivo: Aumentativo e Diminutivo",
        category: "Morfologia",
        summary: "Além de indicar tamanho físico real, o diminutivo (-inho/-zinho) e aumentativo (-ão/-zão) expressam afeto, intimidade, desprezo ou ênfase no Brasil.",
        rules: [
          {
            title: "Formação Sintética Regular",
            description: "Adiciona-se sufixo diretamente ao radical da palavra.",
            items: [
              "Diminutivo regular: amigo → amiguinho; casa → casinha; café → cafezinho; mãe → mãezinha",
              "Aumentativo regular: casa → casarão; amigo → amigão; problema → problemão",
              "Uso afetivo / pragmático: 'um cafezinho' (convite simpático), 'rapidinho' (atenuação de tempo), 'meu amorzinho' (carinho)",
              "Uso pejorativo: 'jornaleco', 'livreco', 'palavrório'"
            ]
          }
        ],
        examples: [
          {
            pt: "Vamos tomar um cafezinho enquanto conversamos sobre o projeto?",
            en: "Shall we have a quick coffee while we talk about the project?",
            highlight: "cafezinho"
          },
          {
            pt: "Ele é um amigão meu de infância, sempre nos ajudamos.",
            en: "He is a great friend of mine from childhood; we always help each other.",
            highlight: "amigão"
          },
          {
            pt: "Espere só um minutinho, por favor!",
            en: "Wait just a little minute, please!",
            highlight: "minutinho"
          }
        ]
      },
      {
        id: "m1-g4",
        title: "Acentuação Gráfica e Uso do Til (~)",
        category: "Fonética e Ortografia",
        summary: "O til (~) não é acento tônico no sentido estrito, mas um sinal de nasalização das vogais 'a' e 'o' (ex.: maçã, pão, corações).",
        rules: [
          {
            title: "Regras Fundamentais do Til e Acentuação",
            description: "O til marca som nasal. Se a palavra tiver outro acento gráfico (agudo ou circunflexo), a sílaba tônica será a do acento, não a do til.",
            items: [
              "Sílaba com til tônica: amanhã, capitão, alemão, irmão, fogão",
              "Sílaba com til átona (quando há acento gráfico): bênção (tônica em bên-), órfão (tônica em ór-), sótão (tônica em só-)",
              "Acento agudo (´): indica vogal aberta tônica (café, você não, avó, está)",
              "Acento circunflexo (^): indica vogal fechada tônica (você, avô, lâmpada, mês)"
            ]
          }
        ],
        examples: [
          {
            pt: "A mãe comprou pães frescos e maçãs na feira da manhã.",
            en: "The mother bought fresh bread and apples at the morning street market.",
            highlight: "mãe / pães / maçãs / manhã"
          },
          {
            pt: "O menino órfão recebeu a bênção do bispo.",
            en: "The orphan boy received the bishop's blessing.",
            highlight: "órfão / bênção"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Apresentação Pessoal, Biografia e Trajetória",
      culturalNotes: "No Brasil, a apresentação pessoal informal geralmente inclui origem geográfica (estado/cidade), ocupação atual e laços afetivos ou familiares.",
      dialogue: [
        {
          speaker: "Mariana",
          text: "Olá! Meu nome é Mariana, nasci em Belo Horizonte, mas me mudei para Porto Alegre aos 18 anos.",
          translation: "Hello! My name is Mariana, I was born in Belo Horizonte, but I moved to Porto Alegre at age 18."
        },
        {
          speaker: "Carlos",
          text: "Prazer, Mariana! Eu sou o Carlos. Sou arquiteto e atualmente trabalho com restauração histórica.",
          translation: "Nice to meet you, Mariana! I'm Carlos. I'm an architect and currently work with historical restoration."
        }
      ],
      thematicWords: [
        { word: "Trajetória profissional", translation: "Career path / trajectory", example: "Sua trajetória profissional começou na indústria química." },
        { word: "Data de nascimento", translation: "Date of birth", example: "Informe sua data de nascimento no formulário." },
        { word: "Naturalidade", translation: "Place of birth / hometown", example: "Minha naturalidade é Salvador, Bahia." },
        { word: "Formação acadêmica", translation: "Academic background", example: "Ele possui formação acadêmica em Engenharia Civil." },
        { word: "Conquista", translation: "Achievement / accomplishment", example: "Ganhar a bolsa de estudos foi sua maior conquista." }
      ],
      usefulPhrases: [
        { phrase: "Eu me formei em...", translation: "I graduated in...", situation: "Descrever formação acadêmica" },
        { phrase: "Atualmente, dedico meu tempo a...", translation: "Currently, I dedicate my time to...", situation: "Falar de ocupações presentes" },
        { phrase: "Desde pequeno(a), sempre tive interesse por...", translation: "Since I was little, I have always had an interest in...", situation: "Contar memórias de infância" }
      ]
    },
    practice: [
      {
        id: "m1-p1",
        type: "multiple-choice",
        question: "Complete com o marcador temporal e verbo adequados: 'Em 2015, Gabriela ________ o curso de Medicina e ________ a trabalhar no hospital regional.'",
        options: [
          "concluiu / começou",
          "conclui / começa",
          "concluirá / começará",
          "concluía / começava"
        ],
        correctAnswer: 0,
        explanation: "'Em 2015' é um marco temporal de passado pontual já concluído, exigindo verbos no Pretérito Perfeito do Indicativo (concluiu / começou)."
      },
      {
        id: "m1-p2",
        type: "multiple-choice",
        question: "Qual das frases abaixo utiliza o diminutivo com valor de POLIDEZ / ATENUAÇÃO, e não de tamanho físico estrito?",
        options: [
          "O cachorrinho pequeno cabe na caixa.",
          "Você poderia esperar só um minutinho na recepção?",
          "Comprei um copinho de plástico de 50 ml.",
          "A formiguinha andou sobre a mesa."
        ],
        correctAnswer: 1,
        explanation: "'Um minutinho' expressa gentileza e ameniza a espera, característica comum no português falado brasileiro."
      },
      {
        id: "m1-p3",
        type: "multiple-choice",
        question: "Na palavra 'órfão', qual é a sílaba tônica e por que a palavra é acentuada?",
        options: [
          "A sílaba tônica é 'fão' por causa do til.",
          "A sílaba tônica é 'ór' (paroxítona terminada em -ão com acento agudo).",
          "A palavra é oxítona com dupla acentuação tônica.",
          "A sílaba tônica é átona em ambas as partes."
        ],
        correctAnswer: 1,
        explanation: "O til marca som nasal. A sílaba tônica é a portadora do acento agudo 'ór'. Sendo paroxítona terminada em ditongo nasal (-ão), recebe acento agudo na penúltima sílaba."
      },
      {
        id: "m1-p4",
        type: "fill-in-blank",
        question: "Preencha a lacuna com a forma correta do verbo 'fazer' no Pretérito Perfeito (1ª pessoa do singular): 'Ontem eu ________ uma pesquisa completa sobre a biografia do escritor.'",
        options: ["fiz", "fazi", "fazia", "faço"],
        correctAnswer: 0,
        explanation: "A 1ª pessoa do singular do verbo 'fazer' no pretérito perfeito do indicativo é irregular: 'eu fiz'."
      },
      {
        id: "m1-p5",
        type: "multiple-choice",
        question: "Assinale a opção em que TODAS as palavras possuem som nasal grafado com til (~):",
        options: [
          "coração, capitães, maçã, alemães",
          "campo, dente, canção, café",
          "homem, jardim, você, bênção",
          "irmão, livro, lâmpada, ponte"
        ],
        correctAnswer: 0,
        explanation: "Todas as palavras de 'coração, capitães, maçã, alemães' contêm til (~) marcando a vogal/ditongo nasal."
      }
    ]
  },
  {
    id: 2,
    number: 2,
    title: "Módulo 2 — Hospedagem e Viagens",
    subtitle: "Vocabulário de hotelaria e passagens aéreas; contraste entre Presente e Futuro do Indicativo",
    thematicContext: "Hospedagem, Reservas e Passagens Aéreas",
    estimatedMinutes: 45,
    grammarTopics: [
      {
        id: "m2-g1",
        title: "Presente vs. Futuro do Indicativo no Planejamento de Viagens",
        category: "Morfologia Verbal",
        summary: "Como expressar ações futuras em português: Futuro Simples (do Presente), Futuro Composto Perifrástico (ir + infinitivo) e Presente com valor de futuro.",
        rules: [
          {
            title: "As Três Maneiras de Falar do Futuro",
            description: "No Brasil, a forma perifrástica (ir + infinitivo) é a mais frequente no dia a dia.",
            table: {
              headers: ["Estrutura", "Formação", "Frequência e Registro", "Exemplo"],
              rows: [
                ["Futuro Imediato / Perifrástico", "Verbo IR (presente) + Infinitivo", "Mais natural e comum no dia a dia", "Eu vou viajar amanhã cedo."],
                ["Futuro do Presente (Simples)", "Radical + -ei, -ás, -á, -emos, -ão", "Formal, escrito, avisos oficiais", "O voo partirá às 14h30."],
                ["Presente com valor de Futuro", "Verbo no Presente + Marcador temporal", "Comum para eventos já programados", "Viajo no próximo sábado."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Amanhã nós vamos fazer o check-in no hotel ao meio-dia.",
            en: "Tomorrow we are going to check in at the hotel at noon.",
            highlight: "vamos fazer"
          },
          {
            pt: "A companhia aérea confirmará a emissão dos bilhetes por e-mail.",
            en: "The airline company will confirm ticket issuance by email.",
            highlight: "confirmará"
          },
          {
            pt: "Chego a Florianópolis na sexta-feira e fico até domingo.",
            en: "I arrive in Florianópolis on Friday and stay until Sunday.",
            highlight: "Chego / fico"
          }
        ],
        contrastNotes: "Na fala diária de quase todo o Brasil, 'eu vou comprar' substitui 'eu comprarei'. O futuro simples é reservado para escrita formal, jornalismo e anúncios formais."
      },
      {
        id: "m2-g2",
        title: "Expressões de Tempo Futuro e Condições de Reserva",
        category: "Sintaxe e Vocabulário",
        summary: "Expressões que projetam planos de viagem, prazos de cancelamento e datas de estadia.",
        rules: [
          {
            title: "Locuções Temporais de Futuro",
            description: "Marcadores que situam a data da viagem.",
            items: [
              "No próximo mês / na próxima semana / no ano que vem",
              "Daqui a dois dias / daqui a três semanas (marcação de tempo decorrido até o evento)",
              "Até o dia [data] / a partir de [data] (limites de estadia ou cancelamento)",
              "Com antecedência (ex.: reservar com antecedência de 30 dias)"
            ]
          }
        ],
        examples: [
          {
            pt: "Daqui a três semanas, vou tirar férias e viajar para o Nordeste.",
            en: "In three weeks, I'm going to take a vacation and travel to the Northeast.",
            highlight: "Daqui a três semanas"
          },
          {
            pt: "O cancelamento é gratuito até 48 horas antes da data da hospedagem.",
            en: "Cancellation is free up to 48 hours before the stay date.",
            highlight: "até 48 horas antes"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Hotel, Pousada e Compra de Passagens Aéreas",
      culturalNotes: "No Brasil, pousadas são muito populares em cidades históricas e praias, oferecendo acomodações charmosas muitas vezes com café da manhã regional farto incluído na diária.",
      dialogue: [
        {
          speaker: "Recepcionista",
          text: "Boa tarde! Seja bem-vindo à Pousada Sol e Mar. O senhor tem reserva?",
          translation: "Good afternoon! Welcome to Pousada Sol e Mar. Do you have a reservation, sir?"
        },
        {
          speaker: "Hóspede",
          text: "Boa tarde! Tenho sim, em nome de Lucas Silveira. Gostaria de um quarto com cama de casal e vista para o mar.",
          translation: "Good afternoon! Yes, under the name of Lucas Silveira. I'd like a room with a double bed and sea view."
        },
        {
          speaker: "Recepcionista",
          text: "Perfeito! A diária inclui café da manhã servido das 7h às 10h. O check-out é às 12h.",
          translation: "Perfect! The daily rate includes breakfast served from 7 to 10 AM. Check-out is at 12 PM."
        }
      ],
      thematicWords: [
        { word: "Diária", translation: "Daily rate / night stay", example: "Quanto custa a diária do quarto duplo?" },
        { word: "Pensão completa", translation: "Full board (all meals included)", example: "O resort opera em sistema de pensão completa." },
        { word: "Escala / Conexão", translation: "Layover / Connecting flight", example: "O voo faz uma conexão de duas horas em Brasília." },
        { word: "Franquia de bagagem", translation: "Baggage allowance", example: "Minha passagem inclui franquia de bagagem despachada de 23 kg." },
        { word: "Poltrona / Assento", translation: "Seat (on plane/bus)", example: "Prefiro assento na janela ou no corredor?" }
      ],
      usefulPhrases: [
        { phrase: "Gostaria de fazer o check-in / check-out.", translation: "I would like to check in / check out.", situation: "Na recepção do hotel" },
        { phrase: "A que horas é servido o café da manhã?", translation: "What time is breakfast served?", situation: "Perguntar sobre horários" },
        { phrase: "Tem taxa de cancelamento?", translation: "Is there a cancellation fee?", situation: "Consultar condições de compra" }
      ]
    },
    practice: [
      {
        id: "m2-p1",
        type: "multiple-choice",
        question: "Em uma conversa informal entre amigos sobre uma viagem planejada para o fim de semana, qual estrutura é a MAIS NATURAL no português brasileiro falado?",
        options: [
          "Nós viajaremos para a praia no sábado de manhã.",
          "Nós vamos viajar para a praia no sábado de manhã.",
          "Nós haveremos de viajar para a praia.",
          "Nós viajaríamos para a praia no sábado."
        ],
        correctAnswer: 1,
        explanation: "No português brasileiro falado natural, a perífrase 'vamos viajar' (ir + infinitivo) é disparada a mais comum para expressar planos futuros."
      },
      {
        id: "m2-p2",
        type: "multiple-choice",
        question: "Qual termo refere-se à taxa de estadia referente a um dia de hospedagem em hotel ou pousada no Brasil?",
        options: ["Diária", "Passagem", "Conexão", "Franquia"],
        correctAnswer: 0,
        explanation: "'Diária' é o termo técnico e cotidiano usado para designar o valor cobrado por um dia/noite de hospedagem."
      },
      {
        id: "m2-p3",
        type: "fill-in-blank",
        question: "Complete a frase com a preposição correta de tempo futuro: 'O nosso voo para Salvador vai decolar ________ dez minutos.'",
        options: ["daqui a", "há", "desde", "atrás de"],
        correctAnswer: 0,
        explanation: "'Daqui a' expressa tempo futuro decorrido a partir do momento atual ('daqui a dez minutos' = in ten minutes)."
      },
      {
        id: "m2-p4",
        type: "multiple-choice",
        question: "Qual a diferença entre 'voo direto' e 'voo com conexão'?",
        options: [
          "No voo com conexão o passageiro troca de aeronave; no voo direto não há troca.",
          "No voo direto o avião pousa em todas as cidades do caminho.",
          "Voo direto sempre inclui bagagem grátis.",
          "Não há diferença entre os dois termos no Brasil."
        ],
        correctAnswer: 0,
        explanation: "No voo com conexão o passageiro precisa desembarcar e trocar de avião em um aeroporto intermediário."
      },
      {
        id: "m2-p5",
        type: "multiple-choice",
        question: "Complete com o verbo no Futuro do Presente Simples (escrita formal de bilhete): 'Informamos que o hotel ________ o hóspede a partir das 14 horas.'",
        options: ["receberá", "recebeu", "recebesse", "receberia"],
        correctAnswer: 0,
        explanation: "Em comunicados formais escritos, utiliza-se o Futuro do Presente Simples do indicativo: 'o hotel receberá'."
      }
    ]
  },
  {
    id: 3,
    number: 3,
    title: "Módulo 3 — Aeroporto e Acentuação",
    subtitle: "Vocabulário de aeroporto e regras de acentuação de oxítonas e proparoxítonas",
    thematicContext: "Procedimentos de Aeroporto, Alfândega e Embarque",
    estimatedMinutes: 50,
    grammarTopics: [
      {
        id: "m3-g1",
        title: "Sílaba Tônica e Classificação das Palavras",
        category: "Fonética e Fonologia",
        summary: "A sílaba tônica é aquela pronunciada com maior intensidade na palavra. Conforme sua posição, classifica-se em oxítona, paroxítona ou proparoxítona.",
        rules: [
          {
            title: "Classificação quanto à Posição da Sílaba Tônica",
            description: "Conta-se sempre do final para o início da palavra.",
            table: {
              headers: ["Classificação", "Posição da Sílaba Tônica", "Exemplos sem acento", "Exemplos com acento"],
              rows: [
                ["Oxítona", "Última sílaba", "brasil, voar, hotel, rapaz", "café, sofá, avô, você, amapá"],
                ["Paroxítona", "Penúltima sílaba (maioria em PT)", "mala, passagem, bilhete, viagem", "fácil, táxi, tórax, açúcar"],
                ["Proparoxítona", "Antepenúltima sílaba", "(Não há proparoxítonas sem acento)", "número, aeroporto não, tráfego, alfândega"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "O ho-tel fica perto da es-ta-ção.",
            en: "The hotel is near the station.",
            highlight: "ho-tel (oxítona) / es-ta-ção (oxítona)"
          },
          {
            pt: "A al-fân-de-ga in-spe-ci-o-nou a ba-ga-gem.",
            en: "Customs inspected the luggage.",
            highlight: "al-fân-de-ga (proparoxítona)"
          }
        ]
      },
      {
        id: "m3-g2",
        title: "Regras de Acentuação: Oxítonas e Proparoxítonas",
        category: "Ortografia Oficial",
        summary: "Regras claras determinam quando oxítonas devem receber acento gráfico e a regra de ouro das proparoxítonas.",
        rules: [
          {
            title: "1. Regra das Proparoxítonas (Regra Absoluta)",
            description: "TODAS as palavras proparoxítonas são obrigatoriamente acentuadas na língua portuguesa.",
            items: [
              "Exemplos: al-fân-de-ga, nú-me-ro, prá-ti-co, úl-ti-mo, mé-di-co, lâm-pa-da, ô-ni-bus, gra-má-ti-ca"
            ]
          },
          {
            title: "2. Regra das Oxítonas",
            description: "Acentuam-se as palavras oxítonas terminadas em:",
            table: {
              headers: ["Terminação", "Exemplos com Acento Agudo (Aberto)", "Exemplos com Acento Circunflexo (Fechado)"],
              rows: [
                ["-a, -as", "Pará, maracujá, sofás", "crachá"],
                ["-e, -es", "café, você (fechado), jacarés", "você, ipê, filé"],
                ["-o, -os", "cipó, dominó, avó", "avô, metrô, compô-los"],
                ["-em, -ens", "também, alguém, parabéns, armazéns", "(apenas agudo)"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "O passageiro pegou o crachá e foi direto para o portão de embarque.",
            en: "The passenger took his badge and went straight to the boarding gate.",
            highlight: "crachá (oxítona em -a)"
          },
          {
            pt: "O número do voo para Belém é JJ-3420.",
            en: "The flight number to Belém is JJ-3420.",
            highlight: "número (proparoxítona) / Belém (oxítona em -em)"
          },
          {
            pt: "Parabéns pela viagem tranquila no novo avião!",
            en: "Congratulations on the smooth trip on the new airplane!",
            highlight: "Parabéns (oxítona em -ens)"
          }
        ],
        contrastNotes: "Oxítonas terminadas em -i, -u, -r, -l, -z NÃO recebem acento gráfico, a menos que se enquadrem na regra dos hiatos: 'partir', 'urubu', 'saci', 'hotel', 'rapaz' (sem acento)."
      }
    ],
    vocabulary: {
      situationTitle: "Procedimentos de Aeroporto, Raio-X e Alfândega",
      culturalNotes: "Nos aeroportos brasileiros, o processo de embarque nacional exige apenas documento oficial com foto (RG, CNH ou Passaporte). Voos internacionais exigem passaporte válido e, se aplicável, visto consular.",
      dialogue: [
        {
          speaker: "Agente de Aeroporto",
          text: "Passageiros do voo 1450 com destino a Salvador, embarque imediato pelo portão 12.",
          translation: "Passengers of flight 1450 bound for Salvador, immediate boarding through gate 12."
        },
        {
          speaker: "Passageiro",
          text: "Com licença, onde fica a esteira para retirada de bagagem?",
          translation: "Excuse me, where is the baggage claim carousel?"
        },
        {
          speaker: "Agente",
          text: "Fica logo após o controle da Polícia Federal, à sua direita.",
          translation: "It is right after Federal Police control, to your right."
        }
      ],
      thematicWords: [
        { word: "Cartão de embarque", translation: "Boarding pass", example: "Apresente seu cartão de embarque na entrada do portão." },
        { word: "Portão de embarque", translation: "Boarding gate", example: "O portão de embarque mudou para o número 7." },
        { word: "Esteira de bagagem", translation: "Baggage carousel", example: "Minha mala demorou para aparecer na esteira." },
        { word: "Alfândega", translation: "Customs", example: "Tive que declarar os eletrônicos na alfândega." },
        { word: "Detector de metais / Raio-X", translation: "Metal detector / X-ray", example: "Coloque líquidos e notebook na bandeja do raio-X." }
      ],
      usefulPhrases: [
        { phrase: "Qual é o portão de embarque para...?", translation: "What is the boarding gate for...?", situation: "Localizar o portão" },
        { phrase: "Minha bagagem foi extraviada.", translation: "My luggage was lost/misplaced.", situation: "Reclamar bagagem" },
        { phrase: "Tenho algo a declarar à Receita Federal?", translation: "Do I have anything to declare to Customs/Tax Revenue?", situation: "Na alfândega" }
      ]
    },
    practice: [
      {
        id: "m3-p1",
        type: "multiple-choice",
        question: "Qual das seguintes palavras é PROPAROXÍTONA e, portanto, obrigatoriamente acentuada?",
        options: ["Alfândega", "Bagagem", "Aviação", "Terminal"],
        correctAnswer: 0,
        explanation: "Al-fân-de-ga tem a antepenúltima sílaba tônica ('fân'). Pela regra geral, todas as proparoxítonas são acentuadas."
      },
      {
        id: "m3-p2",
        type: "multiple-choice",
        question: "Assinale o grupo em que TODAS as palavras são oxítonas acentuadas pelas regras terminadas em -a(s), -e(s), -o(s) ou -em(ens):",
        options: [
          "sofá, você, metrô, armazém",
          "lápis, táxi, açúcar, vírus",
          "árvore, lâmpada, pássaro, número",
          "papel, cantar, hotel, feliz"
        ],
        correctAnswer: 0,
        explanation: "'sofá' (em -a), 'você' (em -e), 'metrô' (em -o) e 'armazém' (em -em) são todas oxítonas acentuadas conforme a regra oficial."
      },
      {
        id: "m3-p3",
        type: "fill-in-blank",
        question: "A palavra 'parabéns' recebe acento gráfico porque é uma ________ terminada em '-ens'.",
        options: ["oxítona", "paroxítona", "proparoxítona", "monossílaba"],
        correctAnswer: 0,
        explanation: "Pa-ra-béns tem a última sílaba tônica ('béns'), sendo uma oxítona terminada em '-ens'."
      },
      {
        id: "m3-p4",
        type: "multiple-choice",
        question: "Por que as palavras 'hotel', 'urubu' e 'saci' NÃO recebem acento gráfico?",
        options: [
          "Porque são oxítonas terminadas em -l, -u e -i, que não levam acento pela regra geral.",
          "Porque são paroxítonas.",
          "Porque são proparoxítonas irregulares.",
          "Porque perderam o acento no acordo ortográfico."
        ],
        correctAnswer: 0,
        explanation: "Oxítonas terminadas em consoantes como -l, -r, -z ou vogais -i e -u não recebem acento na norma padrão (exceção para hiatos como baú, açaí)."
      },
      {
        id: "m3-p5",
        type: "multiple-choice",
        question: "No aeroporto, onde o passageiro deve retirar sua bagagem despachada após o voo?",
        options: ["Na esteira de bagagens", "No detector de metais", "Na sala de embarque", "No balcão de check-in"],
        correctAnswer: 0,
        explanation: "A retirada de bagagem despachada ocorre na esteira ('esteira de bagagens') na área de desembarque."
      }
    ]
  },
  {
    id: 4,
    number: 4,
    title: "Módulo 4 — Clima, Imperativo e Paroxítonas",
    subtitle: "Imperativo afirmativo, adjuntos adverbiais, provérbios sobre clima e acentuação de paroxítonas",
    thematicContext: "Previsão do Tempo, Recomendações e Sabedoria Popular",
    estimatedMinutes: 50,
    grammarTopics: [
      {
        id: "m4-g1",
        title: "Imperativo Afirmativo (Conselhos, Instruções e Recomendações)",
        category: "Morfologia e Sintaxe Verbal",
        summary: "O modo imperativo é usado para dar instruções, ordens, conselhos e fazer pedidos cordiais.",
        rules: [
          {
            title: "Formação do Imperativo Afirmativo (Você / Vocês / Nós)",
            description: "No português brasileiro falado e formal, 'você' e 'vocês' derivam diretamente do Presente do Subjuntivo.",
            table: {
              headers: ["Pessoa", "Verbos em -AR (Levar)", "Verbos em -ER (Beber)", "Verbos em -IR (Abrir)"],
              rows: [
                ["Você", "leve! (leve o guarda-chuva)", "beba! (beba bastante água)", "abra! (abra a janela)"],
                ["Nós", "levemos! (vamos levar)", "bebamos! (vamos beber)", "abramos! (vamos abrir)"],
                ["Vocês", "levem!", "bebam!", "abram!"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Leve um casaco pesado porque a temperatura vai cair à noite!",
            en: "Take a heavy coat because the temperature will drop at night!",
            highlight: "Leve"
          },
          {
            pt: "Beba bastante líquido nos dias secos de verão.",
            en: "Drink plenty of fluids on dry summer days.",
            highlight: "Beba"
          },
          {
            pt: "Não saia de casa sem conferir a previsão meteorológica.",
            en: "Don't leave home without checking the weather forecast.",
            highlight: "Não saia"
          }
        ],
        contrastNotes: "No Brasil, a forma 'Você' (do subjuntivo: 'fale', 'coma', 'venha') é a forma padrão para instruções e conselhos. A 2ª pessoa gramatical 'Tu' clássica ('fala tu') é ouvida regionalmente no Sul e Norte, mas 'Você' é universalmente compreendido."
      },
      {
        id: "m4-g2",
        title: "Adjuntos Adverbiais na Descrição Climática",
        category: "Sintaxe",
        summary: "Adjuntos adverbiais modificam verbos, adjetivos ou outros advérbios, indicando circunstâncias de tempo, lugar, modo, intensidade e causa.",
        rules: [
          {
            title: "Principais Circunstâncias Adverbiais",
            description: "Exemplos aplicados a descrições do tempo e clima.",
            table: {
              headers: ["Circunstância", "Expressão / Adjunto", "Exemplo"],
              rows: [
                ["Tempo", "pela manhã, ontem à tarde, de repente", "Choveu torrencialmente pela manhã."],
                ["Lugar", "no litoral, no interior, na serra", "Faz muito frio na serra gaúcha."],
                ["Modo", "lentamente, com força, suavemente", "O vento soprava com intensidade."],
                ["Intensidade", "bastante, excessivamente, muito", "O clima estava excessivamente úmido."],
                ["Causa", "devido à frente fria, por causa do calor", "O voo atrasou por causa da neblina."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "De repente, o céu escureceu no litoral por causa da tempestade.",
            en: "Suddenly, the sky darkened on the coast because of the storm.",
            highlight: "De repente (tempo) / no litoral (lugar) / por causa da tempestade (causa)"
          }
        ]
      },
      {
        id: "m4-g3",
        title: "Acentuação das Palavras Paroxítonas",
        category: "Ortografia Oficial",
        summary: "A maioria das palavras do português são paroxítonas (sílaba tônica na penúltima). Por isso, SÓ são acentuadas as paroxítonas que têm terminações específicas.",
        rules: [
          {
            title: "Terminações de Paroxítonas Acentuadas",
            description: "Acentuam-se paroxítonas terminadas em: -r, -x, -n, -l (regra mnemônica 'ROUXINOL'), -i(s), -us, -um(uns), -ps, e ditongos crescentes.",
            table: {
              headers: ["Terminação", "Exemplos"],
              rows: [
                ["-r, -x, -n, -l", "açúcar, caráter, tórax, clímax, próton, pólen, fácil, amável, fóssil"],
                ["-i, -is, -us", "táxi, júri, lápis, grátis, vírus, bônus"],
                ["-um, -uns, -ã(s), -ão(s)", "álbum, álbuns, órfã, órgãos, sótão"],
                ["-ps", "bíceps, fórceps"],
                ["Ditongo oral (crescente/decrescente)", "história, água, relógio, colégio, série, língua"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "A previsão indica que o clima na serra será amável e agradável.",
            en: "The forecast indicates the weather in the mountains will be lovely and pleasant.",
            highlight: "amável (paroxítona em -l)"
          },
          {
            pt: "Pegue o táxi para o colégio antes que a chuva comece.",
            en: "Take the taxi to school before the rain starts.",
            highlight: "táxi (paroxítona em -i) / colégio (paroxítona terminada em ditongo)"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Previsão do Tempo, Estações e Ditos Populares",
      culturalNotes: "O Brasil possui grande variedade climática: clima equatorial na Amazônia, semiárido no Nordeste, tropical no Sudeste/Centro-Oeste e subtropical no Sul (com ocorrência de geadas e até neve nas serras).",
      dialogue: [
        {
          speaker: "Apresentador",
          text: "Boa noite! A previsão para amanhã alerta para pancadas de chuva isoladas e calor intenso à tarde.",
          translation: "Good evening! Tomorrow's forecast warns of isolated rain showers and intense heat in the afternoon."
        },
        {
          speaker: "Morador",
          text: "Como diz o ditado: 'Depois da tempestade sempre vem a bonança'. Melhor levar o guarda-chuva!",
          translation: "As the saying goes: 'After the storm always comes the calm'. Better take the umbrella!"
        }
      ],
      thematicWords: [
        { word: "Pancada de chuva", translation: "Sudden heavy shower / rain shower", example: "Ocorrência de pancadas de chuva no fim da tarde." },
        { word: "Sensação térmica", translation: "Wind chill / thermal sensation", example: "A temperatura é de 32°C, mas a sensação térmica chega a 38°C." },
        { word: "Neblina / Nevoeiro", translation: "Fog / mist", example: "O aeroporto fechou para pousos devido à neblina espessa." },
        { word: "Mormaço", translation: "Muggy / overcast humid heat", example: "Mesmo sem sol direto, esse mormaço queima a pele." },
        { word: "Estiagem", translation: "Dry spell / drought season", example: "O período de estiagem deixou os reservatórios baixos." }
      ],
      usefulPhrases: [
        { phrase: "Depois da tempestade vem a bonança.", translation: "After the storm comes the calm.", situation: "Provérbio popular de otimismo" },
        { phrase: "São Pedro não colaborou hoje!", translation: "Saint Peter didn't cooperate today! (meaning: it rained on our plans)", situation: "Expressão bem-humorada sobre chuva" },
        { phrase: "Está um calor de rachar!", translation: "It's scorching hot!", situation: "Expressão coloquial brasileira" }
      ]
    },
    practice: [
      {
        id: "m4-p1",
        type: "multiple-choice",
        question: "Transforme o conselho no modo IMPERATIVO AFIRMATIVO (tratando a pessoa por 'você'): '(Proteger-se) do sol e (beber) muita água.'",
        options: [
          "Proteja-se do sol e beba muita água.",
          "Protege-se do sol e bebe muita água.",
          "Protejam-se do sol e bebam muita água.",
          "Protegendo do sol e bebendo muita água."
        ],
        correctAnswer: 0,
        explanation: "Para o pronome 'você', o imperativo afirmativo dos verbos 'proteger' (2ª conjugação) e 'beber' (2ª conjugação) é formado com a vogal temática 'a': 'Proteja-se' e 'beba'."
      },
      {
        id: "m4-p2",
        type: "multiple-choice",
        question: "Qual das alternativas contém APENAS palavras paroxítonas que devem ser acentuadas?",
        options: [
          "tórax, açúcar, história, táxi",
          "café, parabéns, cipó, maracujá",
          "lâmpada, médico, sábado, física",
          "mala, casa, janela, parede"
        ],
        correctAnswer: 0,
        explanation: "tórax (em -x), açúcar (em -r), história (em ditongo oral), táxi (em -i) são todas paroxítonas acentuadas pelas regras específicas."
      },
      {
        id: "m4-p3",
        type: "fill-in-blank",
        question: "Na frase 'Choveu torrencialmente no litoral durante a madrugada', a expressão 'durante a madrugada' classifica-se como adjunto adverbial de ________.",
        options: ["tempo", "lugar", "modo", "intensidade"],
        correctAnswer: 0,
        explanation: "'Durante a madrugada' indica o momento cronológico em que a ação ocorreu, tratando-se de adjunto adverbial de tempo."
      },
      {
        id: "m4-p4",
        type: "multiple-choice",
        question: "O que significa a expressão popular brasileira 'está um mormaço'?",
        options: [
          "Está um tempo nublado e abafado/quente com alta umidade.",
          "Está caindo uma tempestade de granizo congelante.",
          "O vento está extremamente seco e frio.",
          "O céu está completamente azul sem nenhuma nuvem."
        ],
        correctAnswer: 0,
        explanation: "'Mormaço' é o calor abafado e úmido típico de dias nublados no Brasil."
      },
      {
        id: "m4-p5",
        type: "multiple-choice",
        question: "Assinale a opção correta quanto à concordância do imperativo: 'Por favor, ________ a janela e não ________ a porta bater.'",
        options: [
          "abra / deixe",
          "abre / deixa",
          "abra / deixa",
          "abri / deixais"
        ],
        correctAnswer: 0,
        explanation: "Mantendo a uniformidade de tratamento na 3ª pessoa ('você'): 'abra' (imperativo afirmativo) e 'não deixe' (imperativo negativo)."
      }
    ]
  },
  {
    id: 5,
    number: 5,
    title: "Módulo 5 — Serviços Bancários e Pronomes",
    subtitle: "Vocabulário bancário, pronomes de tratamento e oblíquos, verbo 'solicitar' e acentuação de ditongos e hiatos",
    thematicContext: "Serviços Bancários, Câmbio e Correspondência Formal",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m5-g1",
        title: "Pronomes de Tratamento e Formalidade em Atendimento",
        category: "Morfologia e Pragmática",
        summary: "Uso de 'Senhor / Senhora', 'Você' e fórmulas de cortesia em ambientes bancários e institucionais.",
        rules: [
          {
            title: "Níveis de Formalidade e Concordância",
            description: "Embora se refiram à pessoa com quem se fala (2ª pessoa do discurso), todos os pronomes de tratamento exigem concordância verbal na 3ª pessoa.",
            table: {
              headers: ["Pronome de Tratamento", "Abreviatura", "Contexto de Uso", "Concordância Verbal"],
              rows: [
                ["O Senhor / A Senhora", "Sr. / Sra.", "Atendimento bancário, clientes mais velhos ou respeito formal", "O senhor precisa de ajuda? (3ª pessoa)"],
                ["Vossa Senhoria", "V. Sa.", "Correspondências comerciais e ofícios formais", "Vossa Senhoria solicitou o extrato."],
                ["Você / Vocês", "você", "Atendimento em fintechs / bancos digitais modernos", "Você pode transferir via Pix pelo app."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "A senhora poderia digitar sua senha no teclado, por favor?",
            en: "Could you type your password on the keypad, ma'am, please?",
            highlight: "A senhora poderia digitar"
          },
          {
            pt: "Vimos por meio desta solicitar a atualização cadastral de Vossa Senhoria.",
            en: "We hereby request Your Lordship's/Your Honor's registration update.",
            highlight: "solicitar a atualização"
          }
        ]
      },
      {
        id: "m5-g2",
        title: "Pronomes Oblíquos Retomando Referentes Textuais",
        category: "Sintaxe",
        summary: "Os pronomes oblíquos átonos (o, a, os, as / me, te, se, nos, lhe, lhes) evitam repetições desnecessárias ao retomar termos já mencionados.",
        rules: [
          {
            title: "Variações dos Pronomes Diretos (o, a, os, as)",
            description: "Adaptações fonéticas conforme a terminação do verbo anterior.",
            table: {
              headers: ["Condição do Verbo", "Transformação do Pronome", "Exemplo"],
              rows: [
                ["Verbo termina em -r, -s ou -z", "Corta a terminação + lo, la, los, las", "solicitar + o = solicitá-lo; fazer + a = fazê-la"],
                ["Verbo termina em som nasal (-m, -ão)", "Vira no, na, nos, nas", "entregaram + o = entregaram-no; retêm + as = retêm-nas"],
                ["Verbo transitivo indireto (pede 'a')", "Usa-se LHE / LHES", "Pagar ao gerente → Pagar-lhe"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "O cliente pediu o comprovante e o atendente entregou-o imediatamente.",
            en: "The client asked for the receipt and the clerk handed it over immediately.",
            highlight: "entregou-o"
          },
          {
            pt: "Preciso abrir uma conta corrente e pretendo fazê-lo ainda hoje.",
            en: "I need to open a checking account and I intend to do it today.",
            highlight: "fazê-lo"
          }
        ]
      },
      {
        id: "m5-g3",
        title: "Verbo 'Solicitar' e a Locução 'Vir (aux.) + Solicitar'",
        category: "Sintaxe Formal e Correspondência",
        summary: "Expressões consagradas no registro epistolar e em cartas de requerimento no Brasil.",
        rules: [
          {
            title: "Uso de 'Venho por meio desta solicitar...'",
            description: "Fórmula padrão para iniciar requerimentos oficiais, contestações bancárias ou pedidos de documentos.",
            items: [
              "Venho solicitar o cancelamento da tarifa cobrada indevidamente.",
              "Vimos por meio deste solicitar a prorrogação do prazo de pagamento."
            ]
          }
        ],
        examples: [
          {
            pt: "Venho por meio desta solicitar a emissão de um novo cartão com chip.",
            en: "I hereby request the issuance of a new chip card.",
            highlight: "Venho por meio desta solicitar"
          }
        ]
      },
      {
        id: "m5-g4",
        title: "Acentuação Gráfica: Ditongos e Hiatos",
        category: "Ortografia Oficial",
        summary: "Regras do Novo Acordo Ortográfico para ditongos abertos (éi, ói) e hiatos tônicos (i, u).",
        rules: [
          {
            title: "Regra dos Hiatos Tônicos (I e U)",
            description: "Acentuam-se 'i' e 'u' tônicos quando formam hiato com a vogal anterior, sozinhos na sílaba ou com 's', desde que não seguidos de 'nh'.",
            items: [
              "Recebem acento: sa-ú-de, sa-í-da, pa-ís, ba-ú, ju-í-zes",
              "Não recebem acento: ra-iz (termina em z), sa-ir (termina em r), ra-i-nha (seguido de nh)"
            ]
          },
          {
            title: "Ditongos Abertos (ÉI, ÓI)",
            description: "Com o Acordo Ortográfico, só são acentuados em palavras oxítonas ou monossílabos.",
            items: [
              "Oxítonas/monossílabos (COM acento): he-rói, pa-péis, cons-trói, céu",
              "Paroxítonas (SEM acento): i-dei-a, pla-tei-a, ji-boi-a, as-sem-blei-a"
            ]
          }
        ],
        examples: [
          {
            pt: "Para abrir a conta no país, é preciso apresentar comprovante de residência.",
            en: "To open an account in the country, you must provide proof of residence.",
            highlight: "pa-ís (hiato tônico)"
          },
          {
            pt: "Minha ideia é pagar todas as faturas pelo débito automático.",
            en: "My idea is to pay all invoices via direct debit.",
            highlight: "ideia (paroxítona com ditongo aberto - sem acento)"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Transações Bancárias, Pix e Câmbio no Brasil",
      culturalNotes: "No Brasil, o Pix é o sistema de pagamentos instantâneos mais popular, gratuito para pessoas físicas e funcionando 24 horas por dia, 7 dias por semana por meio de chaves (CPF, e-mail, telefone ou chave aleatória).",
      dialogue: [
        {
          speaker: "Cliente",
          text: "Bom dia! Eu gostaria de fazer uma transferência para outra conta, mas não sei se aceita Pix.",
          translation: "Good morning! I'd like to make a transfer to another account, but I don't know if it takes Pix."
        },
        {
          speaker: "Gerente",
          text: "Bom dia! O Pix é aceito em todo o país. O senhor pode cadastrar sua chave no aplicativo do banco agora mesmo.",
          translation: "Good morning! Pix is accepted nationwide. You can register your key in the bank app right now, sir."
        }
      ],
      thematicWords: [
        { word: "Chave Pix", translation: "Pix key (instant payment identifier)", example: "Qual é a sua chave Pix para eu transferir o dinheiro?" },
        { word: "Extrato bancário", translation: "Bank statement", example: "Tirei um extrato dos últimos 30 dias no caixa eletrônico." },
        { word: "Caixa eletrônico / ATM", translation: "ATM machine", example: "Vou ao caixa eletrônico sacar duzentos reais." },
        { word: "Conta corrente / Conta poupança", translation: "Checking account / Savings account", example: "O salário é depositado na conta corrente." },
        { word: "Taxa de câmbio", translation: "Exchange rate", example: "A taxa de câmbio do dólar para o real oscilou bastante hoje." }
      ],
      usefulPhrases: [
        { phrase: "Gostaria de solicitar um empréstimo / financiamento.", translation: "I would like to apply for a loan / financing.", situation: "Consultar crédito" },
        { phrase: "O caixa eletrônico engoliu meu cartão!", translation: "The ATM swallowed my card!", situation: "Relatar problema urgente" },
        { phrase: "Qual é o limite diário para saques e transferências?", translation: "What is the daily limit for withdrawals and transfers?", situation: "Consultar limites" }
      ]
    },
    practice: [
      {
        id: "m5-p1",
        type: "multiple-choice",
        question: "Junte o verbo 'solicitar' no infinitivo com o pronome 'o' referindo-se ao documento: 'O advogado precisa do documento e vai ________ ao banco amanhã.'",
        options: ["solicitá-lo", "solicitar-o", "solicita-no", "solicitar-lhe"],
        correctAnswer: 0,
        explanation: "Verbos terminados em -r perdem a consoante e recebem o pronome com 'l' (solicitar + o = solicitá-lo, com acento agudo por virar oxítona em -a)."
      },
      {
        id: "m5-p2",
        type: "multiple-choice",
        question: "Assinale a alternativa em que a palavra destacada NÃO deve levar acento gráfico de acordo com o Novo Acordo Ortográfico:",
        options: ["A ide-ia de pagar com Pix é ótima.", "A sa-ú-de financeira da empresa vai bem.", "Ele viajou pelo pa-ís inteiro.", "O ba-ú antigo foi aberto."],
        correctAnswer: 0,
        explanation: "Ditongos abertos (ei, oi) em palavras paroxítonas como 'ideia', 'plateia', 'jiboia' perderam o acento gráfico no Acordo Ortográfico."
      },
      {
        id: "m5-p3",
        type: "fill-in-blank",
        question: "Complete a correspondência formal: 'Venho por meio desta ________ a devolução do valor cobrado.'",
        options: ["solicitar", "solicitando", "solicitei", "solicita"],
        correctAnswer: 0,
        explanation: "A fórmula de correspondência formal utiliza a locução verbal com verbo no infinitivo: 'Venho por meio desta solicitar...'"
      },
      {
        id: "m5-p4",
        type: "multiple-choice",
        question: "Por que a palavra 'saúde' recebe acento gráfico?",
        options: [
          "Porque a vogal 'u' é tônica, forma hiato com a vogal anterior 'a' e está sozinha na sílaba.",
          "Porque é uma oxítona terminada em -e.",
          "Porque é uma proparoxítona.",
          "Porque possui ditongo aberto."
        ],
        correctAnswer: 0,
        explanation: "Pela regra dos hiatos: 'i' e 'u' tônicos formando hiato com vogal anterior e sozinhos na sílaba (sa-ú-de) são acentuados."
      },
      {
        id: "m5-p5",
        type: "multiple-choice",
        question: "No contexto financeiro brasileiro moderno, o que é o 'Pix'?",
        options: [
          "O sistema oficial de transferências instantâneas e gratuitas do Banco Central do Brasil.",
          "Um imposto federal sobre compras com cartão.",
          "Uma taxa de cancelamento de cartão de crédito.",
          "O papel moeda físico emitido pela Casa da Moeda."
        ],
        correctAnswer: 0,
        explanation: "O Pix é o sistema de pagamentos e transferências eletrônicas instantâneas criado pelo Banco Central do Brasil."
      }
    ]
  },
  {
    id: 6,
    number: 6,
    title: "Módulo 6 — Agendamento, Telefone e Fonética Nasal",
    subtitle: "Agendar compromissos, infinitivo, 'ir + ter que + inf.', linguagem telefônica, conectivos e nasalização",
    thematicContext: "Agendamento de Consultas, Interlocução Telefônica e Justificativas",
    estimatedMinutes: 50,
    grammarTopics: [
      {
        id: "m6-g1",
        title: "Agendar Compromissos: O Infinitivo e a Locução 'Ir + Ter que + Infinitivo'",
        category: "Morfossintaxe",
        summary: "Expressar obrigações futuras e remarcação de compromissos no cotidiano pessoal e profissional.",
        rules: [
          {
            title: "Estruturas de Obrigação e Agendamento",
            description: "Comparativo das formas de expressar necessidade ou dever.",
            table: {
              headers: ["Estrutura", "Grau de Obrigação", "Exemplo"],
              rows: [
                ["Ter que + Infinitivo", "Obrigação geral no presente", "Tenho que confirmar o horário da consulta."],
                ["Ir + ter que + Infinitivo", "Obrigação inevitável no futuro", "Amanhã eu vou ter que remarcar nossa reunião."],
                ["Precisar + Infinitivo", "Necessidade prática", "Preciso agendar uma consulta com o cardiologista."],
                ["Dever + Infinitivo", "Dever moral ou recomendação", "Você deve chegar com 15 minutos de antecedência."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Infelizmente, amanhã vou ter que viajar a trabalho e não poderei comparecer.",
            en: "Unfortunately, tomorrow I'm going to have to travel for work and won't be able to attend.",
            highlight: "vou ter que viajar"
          },
          {
            pt: "Gostaria de agendar uma consulta para a próxima terça-feira às 14 horas.",
            en: "I would like to schedule an appointment for next Tuesday at 2 PM.",
            highlight: "agendar uma consulta"
          }
        ]
      },
      {
        id: "m6-g2",
        title: "Linguagem e Expressões de Interlocução Telefônica",
        category: "Pragmática e Comunicação Oral",
        summary: "Fórmulas padrão de abertura, espera, identificação e encerramento em chamadas telefônicas no Brasil.",
        rules: [
          {
            title: "Frases Típicas ao Telefone",
            description: "Convenções brasileiras para ligações formais e informais.",
            table: {
              headers: ["Momento", "Expressão em Português", "Tradução / Função"],
              rows: [
                ["Atendimento", "Alô! / Pronto! / Clínica Saúde, bom dia!", "Hello! / Answering call"],
                ["Quem fala?", "Quem fala, por favor? / Quem gostaria?", "Who is speaking, please?"],
                ["Pedir para falar com alguém", "Gostaria de falar com o Dr. Marcos, por favor.", "May I speak with Dr. Marcos, please?"],
                ["Pedir para aguardar", "Só um instante, vou transferir a ligação.", "Just a moment, I'll transfer the call."],
                ["Recado", "Ele não pode atender no momento. Quer deixar recado?", "He can't take it now. Want to leave a message?"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Alô, bom dia! Aqui é o Fernando. Gostaria de falar com a secretária, por gentileza.",
            en: "Hello, good morning! This is Fernando speaking. I'd like to speak with the receptionist, please.",
            highlight: "Aqui é o Fernando / Gostaria de falar"
          }
        ]
      },
      {
        id: "m6-g3",
        title: "Conectivos em Justificativas e Explicações",
        category: "Coesão Textual",
        summary: "Conectivos causais e explicativos para justificar atrasos, faltas ou reagendamentos.",
        rules: [
          {
            title: "Principais Conectivos Explicativos e Causais",
            description: "Usados para ligar a justificativa ao fato.",
            items: [
              "porque / pois (ex.: Não fui porque tive um imprevisto)",
              "já que / visto que / uma vez que (ex.: Já que o médico se atrasou, vou remarcar)",
              "devido a / por causa de (ex.: O atraso ocorreu devido ao trânsito intenso)",
              "portanto / por isso (conclusivos: Estava chovendo muito, por isso me atrasei)"
            ]
          }
        ],
        examples: [
          {
            pt: "Não poderei ir à aula hoje porque tive uma emergência familiar.",
            en: "I won't be able to go to class today because I had a family emergency.",
            highlight: "porque"
          },
          {
            pt: "Visto que a reunião foi cancelada, podemos adiantar o relatório.",
            en: "Since the meeting was canceled, we can work ahead on the report.",
            highlight: "Visto que"
          }
        ]
      },
      {
        id: "m6-g4",
        title: "Fonética: A Nasalização no Português Brasileiro",
        category: "Fonética e Fonologia",
        summary: "A nasalidade é uma das marcas mais distintivas do português brasileiro. O ar ressoa simultaneamente pela boca e pelas fossas nasais.",
        rules: [
          {
            title: "Mecanismos de Produção dos Sons Nasais",
            description: "Grafias que produzem o som nasal.",
            items: [
              "Vogal com til (~): ã, õ (irmã, maçã, pão, corações)",
              "Vogal seguida de 'm' ou 'n' na mesma sílaba: campo, tempo, cinto, sombra, mundo, canto",
              "Dígrafo 'nh': ninho, caminho, carinho, banho",
              "Dica de pronúncia: o velo palatino abaixa, permitindo que parte do fluxo de ar passe pelo nariz."
            ]
          }
        ],
        examples: [
          {
            pt: "O cão comeu o pão com presunto no jardim da mansão.",
            en: "The dog ate the bread with ham in the mansion garden.",
            highlight: "cão / pão / com / presunto / jardim / mansão (todos sons nasais)"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Consultas Médicas, Agendamentos e Chamadas Telefônicas",
      culturalNotes: "No Brasil, é comum ligar para consultórios ou enviar mensagens de WhatsApp profissional para agendar, confirmar ou desmarcar consultas. A pontualidade é esperada, mas imprevistos de trânsito em grandes capitais são frequentes.",
      dialogue: [
        {
          speaker: "Secretária",
          text: "Consultório Dr. Roberto, bom dia! Em que posso ajudar?",
          translation: "Dr. Roberto's office, good morning! How may I help you?"
        },
        {
          speaker: "Paciente",
          text: "Bom dia! Eu precisava remarcar minha consulta de quinta-feira, pois vou ter que fazer uma viagem de última hora.",
          translation: "Good morning! I needed to reschedule my Thursday appointment, as I'm going to have to make a last-minute trip."
        },
        {
          speaker: "Secretária",
          text: "Sem problemas! Temos horário disponível para a próxima segunda-feira às 15 horas. Fica bom para o senhor?",
          translation: "No problem! We have an opening next Monday at 3 PM. Does that work for you, sir?"
        }
      ],
      thematicWords: [
        { word: "Agendamento", translation: "Scheduling / booking", example: "Recebi a confirmação do agendamento por mensagem." },
        { word: "Remarcar / Desmarcar", translation: "Reschedule / Cancel appointment", example: "Preciso remarcar minha consulta para outra data." },
        { word: "Imprevisto", translation: "Unforeseen event / contingency", example: "Tive um imprevisto no trânsito e vou me atrasar 10 minutos." },
        { word: "Transferir a ligação", translation: "Transfer the call", example: "Aguarde na linha enquanto transfiro a ligação para o setor responsável." },
        { word: "Comprovante de comparecimento", translation: "Proof of attendance (medical excuse note)", example: "O médico me deu um atestado e um comprovante de comparecimento." }
      ],
      usefulPhrases: [
        { phrase: "Gostaria de agendar um horário com o(a) especialista.", translation: "I'd like to book an appointment with the specialist.", situation: "Marcar consulta" },
        { phrase: "Sinto muito pelo imprevisto, podemos remarcar?", translation: "I'm sorry for the unforeseen issue, could we reschedule?", situation: "Pedir desculpas por reagendamento" },
        { phrase: "A ligação está falhando / cortando.", translation: "The call is breaking up / dropping.", situation: "Problema técnico na chamada" }
      ]
    },
    practice: [
      {
        id: "m6-p1",
        type: "multiple-choice",
        question: "Complete a justificativa com o conectivo causal mais adequado: 'O aluno não pôde comparecer à prova ________ estava hospitalizado.'",
        options: ["porque", "portanto", "contudo", "embora"],
        correctAnswer: 0,
        explanation: "'Porque' introduz a oração causal que justifica o motivo da ausência do aluno."
      },
      {
        id: "m6-p2",
        type: "multiple-choice",
        question: "Qual frase expressa uma obrigação inevitável no FUTURO utilizando a locução 'ir + ter que + infinitivo'?",
        options: [
          "Amanhã nós vamos ter que refazer todo o planejamento.",
          "Nós temos que fazer o trabalho agora.",
          "Nós tivemos que sair mais cedo ontem.",
          "Nós teríamos que ir se houvesse tempo."
        ],
        correctAnswer: 0,
        explanation: "'Vamos ter que refazer' é a estrutura exata de 'ir + ter que + infinitivo' projetada para o futuro."
      },
      {
        id: "m6-p3",
        type: "fill-in-blank",
        question: "Ao atender o telefone no Brasil de maneira padrão, a palavra mais comumente dita é '________!'.",
        options: ["Alô", "Diga", "Ouça", "Fale"],
        correctAnswer: 0,
        explanation: "'Alô!' é a saudação padrão universal ao atender telefone no Brasil."
      },
      {
        id: "m6-p4",
        type: "multiple-choice",
        question: "Qual das palavras abaixo NÃO possui som nasal em nenhuma de suas sílabas?",
        options: ["Pássaro", "Coração", "Ponte", "Manta"],
        correctAnswer: 0,
        explanation: "'Pássaro' possui apenas vogais orais ('pá-ssa-ro'). 'Coração' (ão), 'Ponte' (on), e 'Manta' (an) possuem vogais nasais."
      },
      {
        id: "m6-p5",
        type: "multiple-choice",
        question: "Quando você liga para um consultório e pede para esperar na linha, a secretária costuma dizer:",
        options: [
          "Só um instante, por favor.",
          "Vá embora agora.",
          "Desligue imediatamente.",
          "Não me ligue mais."
        ],
        correctAnswer: 0,
        explanation: "'Só um instante, por favor' é a fórmula cordial e padrão de solicitação de espera em atendimentos telefônicos."
      }
    ]
  }
];

modules.forEach(mod => {
  const filePath = path.join(modulesDir, `module${mod.id.toString().padStart(2, '0')}.json`);
  fs.writeFileSync(filePath, JSON.stringify(mod, null, 2), 'utf-8');
  console.log(`Generated ${filePath}`);
});
