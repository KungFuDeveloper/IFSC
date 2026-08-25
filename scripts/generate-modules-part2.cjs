const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, '../src/data/modules');

const modules = [
  {
    id: 7,
    number: 7,
    title: "Módulo 7 — Culinária, Receitas e Dígrafos",
    subtitle: "Gênero receita culinária, verbos de preparo, linguagem conotativa e estudo dos dígrafos",
    thematicContext: "Festas Populares, Tradições Gastronômicas Brasileiras e Culinária Regional",
    estimatedMinutes: 50,
    grammarTopics: [
      {
        id: "m7-g1",
        title: "Gênero Textual Receita e Verbos de Preparo",
        category: "Tipologia Textual e Modos Verbais",
        summary: "Receitas culinárias utilizam o modo Imperativo ou o Infinitivo para guiar o leitor passo a passo no preparo de pratos.",
        rules: [
          {
            title: "Estrutura Padrão da Receita e Alternância Verbal",
            description: "A receita é dividida em 'Ingredientes' (quantidades e medidas) e 'Modo de Preparo' (instruções cronológicas).",
            table: {
              headers: ["Forma Verbal", "Uso no Modo de Preparo", "Exemplo"],
              rows: [
                ["Imperativo (Você / Vocês)", "Comum em receitas publicadas no Brasil", "Bata os ovos, acrescente a farinha e leve ao forno."],
                ["Infinitivo Impessoal", "Comum em embalagens e livros técnicos", "Bater os ovos, acrescentar a farinha e assar em forno médio."],
                ["Presente do Indicativo", "Tom explicativo ou tutorial narrado", "Você mistura tudo até formar uma massa homogênea."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Pique a cebola bem fininha e refogue no azeite até dourar.",
            en: "Chop the onion very fine and sauté in olive oil until golden brown.",
            highlight: "Pique / refogue"
          },
          {
            pt: "Deixe a massa descansar por vinte minutos antes de abrir.",
            en: "Let the dough rest for twenty minutes before rolling it out.",
            highlight: "Deixe"
          }
        ]
      },
      {
        id: "m7-g2",
        title: "Linguagem Conotativa (Figurada) vs. Denotativa na Gastronomia",
        category: "Semântica",
        summary: "Expressões idiomáticas de base gastronômica usadas no dia a dia no Brasil.",
        rules: [
          {
            title: "Expressões Conotativas Brasileiras",
            description: "Metáforas culinárias populares no discurso cotidiano.",
            table: {
              headers: ["Expressão Conotativa", "Significado Figurado", "Exemplo de Uso"],
              rows: [
                ["Dar com os burros n'água", "Fracassar em um plano", "Ele tentou convencer o chefe mas deu com os burros n'água."],
                ["Pisar em ovos", "Agir com extrema cautela", "O clima estava tenso e todos pisavam em ovos na reunião."],
                ["Encher linguiça", "Falar ou escrever muito sem conteúdo", "O texto do trabalho está apenas enchendo linguiça."],
                ["Pão-duro", "Pessoa excessivamente avarenta / sovina", "Ele não quis pagar o refrigerante porque é pão-duro."],
                ["Torta de climão", "Situação social embaraçosa ou constrangedora", "Ficou uma torta de climão quando revelaram o segredo."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Não precisa pisar em ovos comigo, pode falar a verdade com franqueza.",
            en: "You don't need to walk on eggshells with me, you can speak the truth frankly.",
            highlight: "pisar em ovos"
          }
        ]
      },
      {
        id: "m7-g3",
        title: "Estudo dos Dígrafos na Língua Portuguesa",
        category: "Fonética e Ortografia",
        summary: "Dígrafo é o encontro de duas letras que representam um ÚNICO fonema (som).",
        rules: [
          {
            title: "Dígrafos Consonantais e Vocálicos",
            description: "Diferença entre dígrafos separáveis e inseparáveis na divisão silábica.",
            table: {
              headers: ["Tipo de Dígrafo", "Letras", "Comportamento na Separação Silábica", "Exemplos"],
              rows: [
                ["Inseparáveis", "ch, lh, nh, gu*, qu*", "Ficam na mesma sílaba", "chu-va, mi-lho, ni-nho, gui-a, quei-jo"],
                ["Separáveis", "rr, ss, sc, sç, xc", "Ficam em sílabas diferentes", "car-ro, pás-sa-ro, des-cer, nas-ço, ex-ce-to"],
                ["Vocálicos", "am/an, em/en, im/in, om/on, um/un", "Vogal nasalizada", "tam-pa, can-to, lem-po, cin-to, pon-te, mun-do"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "O cozinheiro assou o frango com alho e cheiro-verde.",
            en: "The cook roasted the chicken with garlic and fresh herbs.",
            highlight: "co-zi-nhei-ro (nh), as-sou (ss), fran-go (an), a-lho (lh), chei-ro (ch)"
          }
        ],
        contrastNotes: "*gu e qu só são dígrafos quando a letra 'u' NÃO é pronunciada (ex.: guerra, queijo = dígrafos; água, tranquilo = não são dígrafos, pois o 'u' soa)."
      }
    ],
    vocabulary: {
      situationTitle: "Festas Juninas, Feijoada e Culinária Brasileira",
      culturalNotes: "As Festas Juninas no Brasil celebram São João, Santo Antônio e São Pedro com comidas típicas de milho (pamonha, canjica, curau, bolo de milho), quentão e fogueira. A feijoada brasileira, acompanhada de arroz, couve refogada, farofa e laranjas, é prato nacional emblemático.",
      dialogue: [
        {
          speaker: "Dona Maria",
          text: "Para a feijoada ficar saborosa, deixe o feijão preto de molho na véspera e cozinhe as carnes em fogo brando.",
          translation: "For the feijoada to be tasty, soak the black beans the night before and cook the meats over low heat."
        },
        {
          speaker: "Turista",
          text: "Hum, o cheiro está irresistível! Qual é a receita dessa farofa crocante?",
          translation: "Mmm, the aroma is irresistible! What is the recipe for this crunchy farofa?"
        }
      ],
      thematicWords: [
        { word: "Refogar", translation: "Sauté / fry lightly with seasonings", example: "Refogue o alho e a cebola no azeite antes de colocar o arroz." },
        { word: "Untar a forma", translation: "Grease the baking pan", example: "Unte a forma com manteiga e polvilhe com farinha." },
        { word: "Pitada de sal", translation: "Pinch of salt", example: "Adicione apenas uma pitadinha de sal à massa do bolo." },
        { word: "Fogo brando / Fogo médio", translation: "Low heat / Medium heat", example: "Cozinhe o doce em fogo brando mexendo sem parar." },
        { word: "Ponto de fio / Ponto de calda", translation: "Syrup stage / Thread stage", example: "Desligue o fogo quando a calda atingir o ponto de fio." }
      ],
      usefulPhrases: [
        { phrase: "Mexa até desgrudar do fundo da panela.", translation: "Stir until it unsticks from the bottom of the pan (brigadeiro test).", situation: "Instrução de doces típicos" },
        { phrase: "Sirva ainda quente acompanhado de arroz.", translation: "Serve while still hot with a side of rice.", situation: "Finalização de pratos" },
        { phrase: "Isso está de comer rezando!", translation: "This is heavenly / divine food!", situation: "Elogiar um prato" }
      ]
    },
    practice: [
      {
        id: "m7-p1",
        type: "multiple-choice",
        question: "Na frase 'O cozinheiro preparou um prato maravilhoso', quantas ocorrências de DÍGRAFOS existem nas palavras 'cozinheiro' e 'maravilhoso'?",
        options: [
          "Dois dígrafos (nh em cozinheiro e lh em maravilhoso)",
          "Nenhum dígrafo",
          "Quatro dígrafos",
          "Apenas um dígrafo"
        ],
        correctAnswer: 0,
        explanation: "'cozinheiro' tem o dígrafo inseparável 'nh' e 'maravilhoso' tem o dígrafo inseparável 'lh'."
      },
      {
        id: "m7-p2",
        type: "multiple-choice",
        question: "Assinale a opção em que a palavra destacada possui um DÍGRAFO SEPARÁVEL na divisão silábica:",
        options: [
          "O carro (car-ro) chegou ao restaurante.",
          "A chuva (chu-va) estragou a festa.",
          "O ninho (ni-nho) do pássaro caiu.",
          "O queijo (quei-jo) estava fresco."
        ],
        correctAnswer: 0,
        explanation: "'rr' e 'ss' são dígrafos separáveis cujas letras ficam em sílabas distintas (car-ro, pás-sa-ro)."
      },
      {
        id: "m7-p3",
        type: "fill-in-blank",
        question: "Complete a instrução culinária no Imperativo: '________ (Picar) o tomate em cubos e ________ (misturar) com a salsa.'",
        options: ["Pique / misture", "Pica / mistura", "Piquei / misturei", "Piquem / misturais"],
        correctAnswer: 0,
        explanation: "No imperativo afirmativo (tratamento você): Pique (do verbo picar) e misture (do verbo misturar)."
      },
      {
        id: "m7-p4",
        type: "multiple-choice",
        question: "O que significa a expressão idiomática culinária 'pisar em ovos'?",
        options: [
          "Agir com extremo cuidado para não ofender ou irritar alguém em uma situação delicada.",
          "Preparar uma omelete sofisticada.",
          "Caminhar descalço na granja.",
          "Gastar dinheiro de maneira impulsiva."
        ],
        correctAnswer: 0,
        explanation: "'Pisar em ovos' significa ter muita cautela e tato diante de uma situação sensível."
      },
      {
        id: "m7-p5",
        type: "multiple-choice",
        question: "Em qual das palavras abaixo as letras 'gu' NÃO formam um dígrafo (isto é, a letra 'u' é pronunciada)?",
        options: ["Água", "Guerra", "Guia", "Foguete"],
        correctAnswer: 0,
        explanation: "Em 'água' o som do 'u' é claramente pronunciado (ditongo 'ua'), portanto não é dígrafo. Em guerra, guia e foguete o 'u' é mudo, constituindo dígrafo."
      }
    ]
  },
  {
    id: 8,
    number: 8,
    title: "Módulo 8 — Meio Ambiente e Argumentação",
    subtitle: "Vocabulário de ecologia e reciclagem, conectivos argumentativos e expressões de sugestão e possibilidade",
    thematicContext: "Sustentabilidade, Descarte Consciente e Debates Ambientais",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m8-g1",
        title: "Conectivos Argumentativos (Preposições, Conjunções e Locuções)",
        category: "Sintaxe e Coesão Textual",
        summary: "Conectivos estruturam argumentos, estabelecendo relações de oposição, concessão, causa, consequência e adição.",
        rules: [
          {
            title: "Quadro Geral dos Conectivos Argumentativos",
            description: "Classificação por sentido discursivo.",
            table: {
              headers: ["Relação Semântica", "Conectivos e Locuções", "Exemplo em Contexto"],
              rows: [
                ["Oposição / Adversidade", "mas, porém, contudo, todavia, no entanto", "O projeto é promissor, contudo faltam recursos."],
                ["Concessão (quebra de expectativa)", "embora, apesar de que, ainda que, mesmo que", "Embora haja leis rígidas, o desmatamento continua."],
                ["Causa", "porque, visto que, já que, devido a, em virtude de", "O rio secou em virtude do desperdício de água."],
                ["Consequência / Conclusão", "portanto, por conseguinte, logo, desse modo", "Reciclamos os resíduos, portanto reduzimos o lixo."],
                ["Adição / Soma", "além disso, não só... como também, ademais", "Protegemos as nascentes; além disso, plantamos árvores."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Apesar de a cidade ter coleta seletiva, muitos moradores ainda misturam o lixo orgânico com o reciclável.",
            en: "Although the city has selective collection, many residents still mix organic waste with recyclables.",
            highlight: "Apesar de"
          },
          {
            pt: "A poluição dos oceanos aumentou; portanto, devemos banir os plásticos descartáveis.",
            en: "Ocean pollution has increased; therefore, we must ban single-use plastics.",
            highlight: "portanto"
          }
        ],
        contrastNotes: "'Embora' exige verbo no Subjuntivo ('Embora chova...', 'Embora houvesse...'), enquanto 'Apesar de' costuma vir com infinitivo ou substantivo ('Apesar da chuva...', 'Apesar de chover...')."
      },
      {
        id: "m8-g2",
        title: "Expressões de Sugestão, Hipótese e Possibilidade",
        category: "Modalização Discursiva",
        summary: "Fórmulas diplomáticas para propor ações ecológicas e debater soluções.",
        rules: [
          {
            title: "Graus de Certeza e Sugestão",
            description: "Modulação de assertividade em discussões e redações.",
            items: [
              "Sugestão direta: 'Uma alternativa viável seria...', 'Poderíamos implementar...'",
              "Possibilidade / Hipótese: 'É provável que...', 'É possível que tenhamos resultados...'",
              "Necessidade urgente: 'É imperativo que se reduza...', 'Torna-se indispensável...'"
            ]
          }
        ],
        examples: [
          {
            pt: "Seria interessante se a universidade criasse postos de compostagem comunitária.",
            en: "It would be interesting if the university created community composting spots.",
            highlight: "Seria interessante se"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Sustentabilidade, Coleta Seletiva e Energia Limpa",
      culturalNotes: "O Brasil tem uma das matrizes elétricas mais limpas do mundo, com grande participação de hidrelétricas, energia eólica (destaque no Nordeste) e solar. No entanto, o país enfrenta grandes desafios na gestão de resíduos sólidos urbanos e conservação da Amazônia e do Cerrado.",
      dialogue: [
        {
          speaker: "Ambientalista",
          text: "Se separarmos os resíduos eletrônicos corretamente, evitaremos que metais pesados contaminem o lençol freático.",
          translation: "If we separate electronic waste properly, we will prevent heavy metals from contaminating the water table."
        },
        {
          speaker: "Cidadão",
          text: "Concordo plenamente! Além disso, a prefeitura poderia instalar mais pontos de entrega voluntária nos bairros.",
          translation: "I completely agree! In addition, city hall could install more voluntary drop-off points in neighborhoods."
        }
      ],
      thematicWords: [
        { word: "Coleta seletiva", translation: "Waste sorting / selective waste collection", example: "O caminhão da coleta seletiva passa às terças-feiras." },
        { word: "Lixo orgânico vs. reciclável", translation: "Organic waste vs. recyclable waste", example: "Restos de comida devem ir para a lixeira orgânica." },
        { word: "Pegada de carbono", translation: "Carbon footprint", example: "Usar transporte público diminui nossa pegada de carbono." },
        { word: "Lençol freático", translation: "Water table / groundwater", example: "O chorume dos lixões pode contaminar o lençol freático." },
        { word: "Energia renovável / limpa", translation: "Renewable / clean energy", example: "A energia solar é uma fonte renovável abundante no Brasil." }
      ],
      usefulPhrases: [
        { phrase: "É imprescindível que adotemos medidas de consumo consciente.", translation: "It is essential that we adopt conscious consumption measures.", situation: "Debates e ensaios argumentativos" },
        { phrase: "Por um lado..., por outro lado...", translation: "On the one hand..., on the other hand...", situation: "Contraponto de ideias" },
        { phrase: "Diante do exposto, propõe-se que...", translation: "In light of the above, it is proposed that...", situation: "Conclusão de proposta ambiental" }
      ]
    },
    practice: [
      {
        id: "m8-p1",
        type: "multiple-choice",
        question: "Assinale a opção que preenche a frase estabelecendo uma relação de CONCESSÃO: '________ a cidade tenha leis rigorosas contra o descarte ilegal, ainda vemos entulho nas ruas.'",
        options: ["Embora", "Portanto", "Porque", "Conforme"],
        correctAnswer: 0,
        explanation: "'Embora' introduz oração subordinada concessiva, expressando fato que se contrapõe à ideia principal sem impedi-la."
      },
      {
        id: "m8-p2",
        type: "multiple-choice",
        question: "Qual conectivo indica relação de CONSEQUÊNCIA / CONCLUSÃO?",
        options: ["Portanto", "Todavia", "Visto que", "Apesar de"],
        correctAnswer: 0,
        explanation: "'Portanto' é uma conjunção conclusiva/consecutiva, ligando uma consequência lógica à premissa anterior."
      },
      {
        id: "m8-p3",
        type: "fill-in-blank",
        question: "Complete com a locução adversativa adequada: 'O investimento em energia solar é alto; ________, a economia a longo prazo compensa o gasto.'",
        options: ["no entanto", "porque", "já que", "a fim de que"],
        correctAnswer: 0,
        explanation: "'No entanto' expressa oposição/contraste (adversidade) entre o custo inicial e a economia futura."
      },
      {
        id: "m8-p4",
        type: "multiple-choice",
        question: "Qual é o termo em português para o líquido escuro e poluente resultante da decomposição de lixo em aterros?",
        options: ["Chorume", "Compostagem", "Efluente solar", "Biodigestor"],
        correctAnswer: 0,
        explanation: "'Chorume' é o líquido resultante da decomposição de resíduos orgânicos, que deve ser tratado para não poluir o solo e a água."
      },
      {
        id: "m8-p5",
        type: "multiple-choice",
        question: "Assinale a frase em que o conectivo foi empregado INCORRETAMENTE:",
        options: [
          "Reciclamos todo o papel, porque não tínhamos nenhuma preocupação ambiental.",
          "Protegemos as matas ciliares, pois elas preservam os cursos d'água.",
          "O clima está mudando; por isso, eventos extremos são mais comuns.",
          "Ainda que seja difícil, precisamos diminuir o uso de plástico descartável."
        ],
        correctAnswer: 0,
        explanation: "Em 'Reciclamos todo o papel, porque não tínhamos nenhuma preocupação', o conectivo 'porque' estabelece uma contradição lógica com o sentido da oração."
      }
    ]
  },
  {
    id: 9,
    number: 9,
    title: "Módulo 9 — Ambiente Escolar, Particípio e Grafia X/CH",
    subtitle: "Formalidade acadêmica, interjeições expressivas, particípio ('deveria ter feito') e o caso ortográfico x/ch",
    thematicContext: "Vida Acadêmica, Relações Escolares e Sentimentos de Arrependimento",
    estimatedMinutes: 50,
    grammarTopics: [
      {
        id: "m9-g1",
        title: "Particípio e Formas Nominais (Expressão de Arrependimento e Dever)",
        category: "Morfologia Verbal e Tempos Compostos",
        summary: "Uso da locução 'Deveria / Poderia + ter + Particípio' para expressar hipóteses não realizadas no passado, arrependimento ou crítica construtiva.",
        rules: [
          {
            title: "Estruturas de Arrependimento no Passado",
            description: "Combinação do Futuro do Pretérito do auxiliar com particípio passado.",
            table: {
              headers: ["Estrutura", "Sentido", "Exemplo"],
              rows: [
                ["Deveria ter + particípio", "Obrigação moral ou conselho não cumprido no passado", "Eu deveria ter estudado mais para o exame final."],
                ["Poderia ter + particípio", "Possibilidade que não se concretizou", "Nós poderíamos ter entregue o artigo ontem."],
                ["Teria sido melhor + infinitivo", "Avaliação retrospectiva", "Teria sido melhor conversar com o orientador antes."]
              ]
            }
          },
          {
            title: "Particípios Regulares e Irregulares (Abundantes)",
            description: "Verbos com duplo particípio usam a forma regular com TER/HAVER e a irregular com SER/ESTAR.",
            table: {
              headers: ["Verbo", "Com TER / HAVER (Regular em -do)", "Com SER / ESTAR (Irregular)", "Exemplos"],
              rows: [
                ["Imprimir", "tinha imprimido", "foi impresso", "Ele tinha imprimido o trabalho. / O livro foi impresso."],
                ["Entregar", "tinha entregado", "foi entregue", "Ela tinha entregado a tese. / A nota foi entregue."],
                ["Salvar", "havia salvado", "estava salvo", "Tinha salvado o arquivo. / O arquivo estava salvo."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Eu deveria ter prestado mais atenção nas instruções do professor.",
            en: "I should have paid more attention to the professor's instructions.",
            highlight: "deveria ter prestado"
          },
          {
            pt: "O relatório já tinha sido impresso quando percebemos o erro.",
            en: "The report had already been printed when we noticed the error.",
            highlight: "tinha sido impresso"
          }
        ]
      },
      {
        id: "m9-g2",
        title: "Formalidade vs. Informalidade e Interjeições",
        category: "Sociolinguística e Pragmática",
        summary: "Distinção entre a linguagem formal acadêmica e o registro coloquial estudantil repleto de interjeições (Ufa!, Eita!, Oxente!, Caramba!).",
        rules: [
          {
            title: "Interjeições Populares no Brasil",
            description: "Palavras que traduzem estados emotivos imediatos.",
            table: {
              headers: ["Interjeição", "Sentimento Expressado", "Exemplo de Uso"],
              rows: [
                ["Ufa!", "Alívio após tensão ou esforço", "Ufa! Entreguei o TCC a tempo!"],
                ["Eita! / Eita nós!", "Surpresa, susto ou espanto", "Eita! Esqueci que a prova é amanhã!"],
                ["Caramba! / Puxa!", "Admiração, indignação ou surpresa", "Puxa, a nota de corte foi altíssima."],
                ["Oxente! / Vixe!", "Espanto regional (Nordeste)", "Oxente! Como o prazo acabou tão rápido?"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Ufa! Finalmente terminamos as apresentações do seminário!",
            en: "Phew! We finally finished the seminar presentations!",
            highlight: "Ufa!"
          }
        ]
      },
      {
        id: "m9-g3",
        title: "Ortografia: O Caso do X vs. CH",
        category: "Ortografia Oficial",
        summary: "Regras sistemáticas para saber quando grafar com 'X' ou com 'CH'.",
        rules: [
          {
            title: "Regras do Uso do X",
            description: "Emprega-se a letra 'X' nos seguintes casos consagrados:",
            items: [
              "1. Depois de ditongo: caixa, frouxo, peixe, ameixa, queixa, faixa",
              "2. Depois da sílaba inicial 'EN-': enxada, enxaqueca, enxame, enxugar (exceção: palavras derivadas de primitivas com ch, como encher [cheio], encharcar [charco])",
              "3. Depois da sílaba inicial 'ME-': mexer, mexicano, mexilhão (exceção: mecha de cabelo)",
              "4. Palavras de origem indígena ou africana: xavante, xaxim, xará, xingar"
            ]
          }
        ],
        examples: [
          {
            pt: "Depois do ditongo 'ei', escreve-se peixe com 'x', assim como caixa com 'x'.",
            en: "After the diphthong 'ei', 'peixe' is written with 'x', as is 'caixa' with 'x'.",
            highlight: "peixe / caixa"
          },
          {
            pt: "Por favor, não mexa nas gavetas antes de enxugar o chão molhado.",
            en: "Please do not touch the drawers before wiping the wet floor dry.",
            highlight: "mexa (após me-) / enxugar (após en-)"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Vida Universitária, Seminários e Provas",
      culturalNotes: "No ensino superior brasileiro, o Trabalho de Conclusão de Curso (TCC) ou Monografia é requisito obrigatório na maioria das graduações, defendido perante banca examinadora. As notas variam de 0 a 10, exigindo geralmente média mínima 6,0 ou 7,0 para aprovação.",
      dialogue: [
        {
          speaker: "Aluno A",
          text: "Eita! Você viu que o professor prorrogou a entrega do artigo para sexta?",
          translation: "Whoa! Did you see that the professor extended the paper deadline to Friday?"
        },
        {
          speaker: "Aluno B",
          text: "Ufa, que alívio! Eu deveria ter começado a bibliografia semana passada, mas fiquei sobrecarregado.",
          translation: "Phew, what a relief! I should have started the bibliography last week, but I was overwhelmed."
        }
      ],
      thematicWords: [
        { word: "Banca examinadora", translation: "Examination board / evaluation committee", example: "A banca examinadora aprovou a dissertação com louvor." },
        { word: "Trabalho de Conclusão de Curso (TCC)", translation: "Senior thesis / capstone project", example: "Estou na fase final de redação do meu TCC." },
        { word: "Grade curricular", translation: "Curriculum / course schedule", example: "Confira as disciplinas obrigatórias na grade curricular do curso." },
        { word: "Monitoria", translation: "Teaching assistantship / tutoring", example: "Fui selecionado para a monitoria de Língua Portuguesa." },
        { word: "Trancar a matrícula", translation: "Defer / freeze enrollment", example: "Por motivos de saúde, ele precisou trancar a matrícula este semestre." }
      ],
      usefulPhrases: [
        { phrase: "Eu deveria ter me planejado com antecedência.", translation: "I should have planned ahead.", situation: "Expressar arrependimento por prazo" },
        { phrase: "Solicito revisão da correção da questão número 3.", translation: "I request a grade review for question number 3.", situation: "Requerimento formal acadêmico" },
        { phrase: "Tirei a nota necessária para passar direto.", translation: "I got the required grade to pass without finals.", situation: "Comemoração de aprovação" }
      ]
    },
    practice: [
      {
        id: "m9-p1",
        type: "multiple-choice",
        question: "Assinale a frase que expressa um sentimento de ARREPENDIMENTO ou dever não realizado no passado:",
        options: [
          "Eu deveria ter revisado o texto antes de enviá-lo para a banca.",
          "Eu vou revisar o texto amanhã pela manhã.",
          "Eu reviso o texto todos os dias com atenção.",
          "Eu deverei revisar se houver tempo livre."
        ],
        correctAnswer: 0,
        explanation: "'Deveria ter revisado' (dever no futuro do pretérito + ter + particípio) expressa com exatidão arrependimento retrospectivo."
      },
      {
        id: "m9-p2",
        type: "multiple-choice",
        question: "De acordo com as regras ortográficas do 'X', qual palavra está grafada CORRETAMENTE com X após ditongo?",
        options: ["Caixa", "Caicha", "Peiche", "Queicha"],
        correctAnswer: 0,
        explanation: "Após ditongos (ai, ei, ou), usa-se 'x' (caixa, peixe, queixa, frouxo)."
      },
      {
        id: "m9-p3",
        type: "fill-in-blank",
        question: "Qual interjeição expressa alívio após a superação de um momento difícil? '________! O prazo da prova foi estendido!'",
        options: ["Ufa", "Ai", "Psiu", "Credo"],
        correctAnswer: 0,
        explanation: "'Ufa!' é a interjeição clássica da língua portuguesa para expressar alívio ou desabafo de cansaço."
      },
      {
        id: "m9-p4",
        type: "multiple-choice",
        question: "Por que o verbo 'encher' se escreve com CH, mesmo iniciando com 'en-'?",
        options: [
          "Porque é uma palavra derivada do adjetivo 'cheio' (que se escreve com ch).",
          "Porque é uma exceção arbitrária sem motivo etimológico.",
          "Porque todas as palavras começadas por 'en' são grafadas com ch.",
          "Porque o acordo ortográfico aboliu o x nessa palavra."
        ],
        correctAnswer: 0,
        explanation: "Palavras derivadas de primitivas com ch mantêm o dígrafo ch na família de palavras (cheio → encher, enchente, enchimento)."
      },
      {
        id: "m9-p5",
        type: "multiple-choice",
        question: "Escolha a forma correta do particípio: 'O orientador já havia ________ todos os artigos submetidos.'",
        options: ["entregado", "entregue", "entregado ou entregue (ambos aceitos com ter/haver)", "entregando"],
        correctAnswer: 2,
        explanation: "Com os auxiliares ter/haver, a norma tradicional prefere o particípio regular (entregado), mas a variante irregular (entregue) é amplamente aceita no Brasil contemporâneo."
      }
    ]
  },
  {
    id: 10,
    number: 10,
    title: "Módulo 10 — Resumo Acadêmico e Referenciação",
    subtitle: "Estrutura do resumo acadêmico (abstract), impessoalidade do discurso e elementos de referenciação textual",
    thematicContext: "Escrita Científica, Publicações Acadêmicas e Artigos",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m10-g1",
        title: "Estrutura do Resumo Acadêmico (Gênero Abstract)",
        category: "Gêneros Textuais Acadêmicos",
        summary: "O resumo acadêmico sintetiza os pontos nucleares de uma pesquisa: contextualização/objetivo, metodologia, resultados e conclusão.",
        rules: [
          {
            title: "Componentes Canônicos de um Resumo",
            description: "Normas da ABNT para redação de resumos em parágrafo único.",
            table: {
              headers: ["Seção do Resumo", "Função Comunicativa", "Frases Típicas"],
              rows: [
                ["Objetivo", "Declara o propósito do estudo", "O presente artigo tem como objetivo analisar... / Este trabalho investiga..."],
                ["Metodologia", "Descreve o método e corpus", "Trata-se de uma pesquisa qualitativa documental... / Adotou-se o método..."],
                ["Resultados", "Apresenta os achados principais", "Os resultados apontam que... / Constatou-se que..."],
                ["Conclusão / Contribuição", "Fecha com as implicações", "Conclui-se que o modelo proposto contribui para..."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Este estudo investiga o impacto do bilinguismo na aquisição de segunda língua. Para tanto, aplicou-se um questionário a cinquenta alunos.",
            en: "This study investigates the impact of bilingualism on second language acquisition. To that end, a questionnaire was administered to fifty students.",
            highlight: "Este estudo investiga / Para tanto, aplicou-se"
          }
        ]
      },
      {
        id: "m10-g2",
        title: "Impessoalidade x Pessoalidade na Escrita Científica",
        category: "Estilística e Morfossintaxe",
        summary: "Mecanismos sintáticos para conferir tom objetivo e neutro ao texto acadêmico.",
        rules: [
          {
            title: "Recursos de Impessoalização",
            description: "Como evitar a primeira pessoa do singular ('eu fiz') em textos científicos.",
            table: {
              headers: ["Recurso Sintático", "Como Construir", "Exemplo"],
              rows: [
                ["Voz Passiva Sintética (com SE)", "Verbo transitivo direto + pronome se apassivador", "Analisaram-se os dados coletados. / Observou-se a variação."],
                ["Voz Passiva Analítica", "Verbo ser + particípio passado", "Os questionários foram aplicados em três escolas."],
                ["Sujeito Inanimado / Agente Instrumental", "O próprio texto ou método assume a ação", "A pesquisa demonstra que... / A tabela 2 ilustra..."],
                ["Plural de Modéstia (1ª pessoa plural)", "Verbo no nós institucional", "Concluímos que mais estudos são necessários."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Verificou-se que a maioria dos participantes atingiu o nível intermediário.",
            en: "It was verified that the majority of participants reached the intermediate level.",
            highlight: "Verificou-se"
          }
        ]
      },
      {
        id: "m10-g3",
        title: "Elementos de Referenciação Textual e Anáfora",
        category: "Coesão Referencial",
        summary: "Pronomes demonstrativos (este, esse, aquele), sinônimos e hiperônimos que evitam a repetição e constroem a cadeia coesiva.",
        rules: [
          {
            title: "Uso dos Demonstrativos na Referenciação",
            description: "Diferença entre o que já foi dito (anáfora) e o que será anunciado (catáfora).",
            items: [
              "Esse / essa / isso (Anáfora): retoma algo já citado no texto ('O aquecimento global afeta a agricultura. Esse fenômeno gera crises...')",
              "Este / esta / isto (Catáfora / Termo presente): introduz algo a seguir ('O objetivo principal é este: reduzir a emissão de gases')",
              "Este ... aquele: quando há dois termos citados, 'este' refere-se ao mais próximo (último) e 'aquele' ao mais distante (primeiro)."
            ]
          }
        ],
        examples: [
          {
            pt: "A gramática e a literatura são fundamentais: esta enriquece a sensibilidade, aquela estrutura o raciocínio linguístico.",
            en: "Grammar and literature are fundamental: the latter enriches sensitivity, the former structures linguistic reasoning.",
            highlight: "esta (literatura) / aquela (gramática)"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Redação de Artigos Científicos, Dissertações e Resumos",
      culturalNotes: "No meio acadêmico brasileiro, a ABNT (Associação Brasileira de Normas Técnicas) estabelece os padrões para citações diretas, indiretas, referências bibliográficas e estrutura de resumos.",
      dialogue: [
        {
          speaker: "Orientadora",
          text: "O seu resumo está bem estruturado, mas recomendo impessoalizar as frases substituindo 'nós fizemos entrevistas' por 'foram realizadas entrevistas'.",
          translation: "Your abstract is well-structured, but I recommend depersonalizing the sentences by replacing 'we did interviews' with 'interviews were conducted'."
        },
        {
          speaker: "Mestrando",
          text: "Entendido, professora! Vou reescrever utilizando a partícula apassivadora 'se'.",
          translation: "Understood, professor! I will rewrite it using the passive particle 'se'."
        }
      ],
      thematicWords: [
        { word: "Palavras-chave", translation: "Keywords", example: "O artigo deve incluir de três a cinco palavras-chave separadas por ponto." },
        { word: "Corpus de pesquisa", translation: "Research corpus / dataset", example: "O corpus é constituído por 100 notícias de jornais digitais." },
        { word: "Estado da arte", translation: "State of the art / literature review", example: "O capítulo 2 faz um levantamento do estado da arte sobre o tema." },
        { word: "Citação direta / indireta", translation: "Direct quote / Paraphrase", example: "Citações diretas longas exigem recuo de 4 cm e fonte reduzida." },
        { word: "Relevância social", translation: "Social relevance", example: "O projeto destaca-se pela sua alta relevância social." }
      ],
      usefulPhrases: [
        { phrase: "Os dados coletados evidenciam uma correlação positiva entre...", translation: "The collected data demonstrate a positive correlation between...", situation: "Apresentação de resultados científicos" },
        { phrase: "Em suma, os achados sugerem que...", translation: "In summary, the findings suggest that...", situation: "Síntese de conclusões" },
        { phrase: "Para futuras investigações, sugere-se que...", translation: "For future research, it is suggested that...", situation: "Trabalhos futuros" }
      ]
    },
    practice: [
      {
        id: "m10-p1",
        type: "multiple-choice",
        question: "Transforme a frase 'Nós analisamos cinquenta amostras no laboratório' para a voz passiva sintética impessoal adequada a um artigo científico:",
        options: [
          "Analisaram-se cinquenta amostras no laboratório.",
          "Analisou-se cinquenta amostras no laboratório.",
          "Nós tínhamos analisado cinquenta amostras.",
          "Cinquenta amostras analisamos nós."
        ],
        correctAnswer: 0,
        explanation: "Na voz passiva sintética com sujeito paciente no plural ('cinquenta amostras'), o verbo concorda no plural: 'Analisaram-se cinquenta amostras'."
      },
      {
        id: "m10-p2",
        type: "multiple-choice",
        question: "Em relação ao uso anafórico no texto acadêmico, qual pronome deve ser usado para retomar um conceito ou termo que ACABOU de ser mencionado no parágrafo?",
        options: ["Esse / essa / isso", "Aquele / aquela / aquilo", "O mesmo (como pronome pessoal)", "Cujo"],
        correctAnswer: 0,
        explanation: "'Esse / essa / isso' são os pronomes demonstrativos anafóricos por excelência na norma padrão para retomar termos precedentes."
      },
      {
        id: "m10-p3",
        type: "fill-in-blank",
        question: "Complete o trecho do resumo científico: 'A presente pesquisa ________ como objetivo principal avaliar o índice de evasão escolar.'",
        options: ["tem", "temos", "tiveram", "tendo"],
        correctAnswer: 0,
        explanation: "Com o sujeito inanimado na 3ª pessoa do singular ('A presente pesquisa'), usa-se 'tem'."
      },
      {
        id: "m10-p4",
        type: "multiple-choice",
        question: "Qual das alternativas contém a sequência padrão dos elementos de um resumo acadêmico (abstract)?",
        options: [
          "Contexto/Objetivo → Metodologia → Resultados → Conclusão",
          "Bibliografia → Agradecimentos → Anexos → Resultados",
          "Opinião pessoal → Piadas → Metodologia → Conclusão",
          "Resultados → Bibliografia → Metodologia → Título"
        ],
        correctAnswer: 0,
        explanation: "A estrutura canônica exigida pelas normas acadêmicas é: Objetivo/Contexto, Metodologia, Resultados e Conclusão."
      },
      {
        id: "m10-p5",
        type: "multiple-choice",
        question: "Por que se recomenda evitar a 1ª pessoa do singular ('eu acho', 'eu pesquisei') em artigos científicos?",
        options: [
          "Para garantir a impessoalidade, objetividade e foco nos dados e na metodologia da pesquisa.",
          "Porque é gramaticalmente proibido usar pronomes na língua portuguesa.",
          "Porque os computadores não leem a letra 'e'.",
          "Porque a ABNT proíbe qualquer verbo no tempo presente."
        ],
        correctAnswer: 0,
        explanation: "A escrita científica preza pela neutralidade e rigor empírico, priorizando a evidência sobre impressões subjetivas individuais."
      }
    ]
  },
  {
    id: 11,
    number: 11,
    title: "Módulo 11 — Pretérito Imperfeito e os Quatro Porquês",
    subtitle: "Pretérito imperfeito (ações em progresso e simultâneas), conectivos de expansão de relatos e o uso dos porquês",
    thematicContext: "Relatos do Passado, Histórias de Vida e Explicações Causais",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m11-g1",
        title: "Pretérito Imperfeito do Indicativo (Ações em Progresso e Simultaneidade)",
        category: "Morfologia Verbal",
        summary: "O Pretérito Imperfeito descreve hábitos passados, estados contínuos, ações em progresso no passado interrompidas por outra ou ações simultâneas.",
        rules: [
          {
            title: "Usos Típicos do Pretérito Imperfeito",
            description: "Casos em que o imperfeito é indispensável no relato de experiências passadas.",
            table: {
              headers: ["Função Semântica", "Estrutura / Marcador", "Exemplo"],
              rows: [
                ["Ação contínua interrompida", "Imperfeito + quando + Pretérito Perfeito", "Eu lia um livro quando o telefone tocou."],
                ["Ações simultâneas no passado", "Imperfeito + enquanto + Imperfeito", "Enquanto ela cozinhava, ele lavava a louça."],
                ["Hábito no passado", "Costumava + inf. ou Imperfeito direto", "Na infância, nós brincávamos na rua todos os dias."],
                ["Descrição de cenário/estado", "Imperfeito de verbos estativos (ser, estar, ter, haver)", "O dia estava ensolarado e havia muitas pessoas no parque."]
              ]
            }
          },
          {
            title: "Conjugação Regular do Pretérito Imperfeito",
            description: "Terminações características para verbos regulares.",
            table: {
              headers: ["Pessoa", "Verbos em -AR (Cantar)", "Verbos em -ER / -IR (Comer / Abrir)"],
              rows: [
                ["Eu", "cantava", "comia / abria"],
                ["Ele / Ela / Você", "cantava", "comia / abria"],
                ["Nós", "cantávamos", "comíamos / abríamos"],
                ["Eles / Elas / Vocês", "cantavam", "comiam / abriam"]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Enquanto nós estudávamos na biblioteca, começou uma chuva torrencial.",
            en: "While we were studying in the library, a heavy downpour started.",
            highlight: "estudávamos (imperfeito) / começou (perfeito)"
          },
          {
            pt: "Antigamente, as pessoas escreviam cartas com frequência.",
            en: "In the past, people used to write letters frequently.",
            highlight: "escreviam"
          }
        ]
      },
      {
        id: "m11-g2",
        title: "O Uso dos Quatro Porquês na Língua Portuguesa",
        category: "Ortografia e Sintaxe",
        summary: "Regra definitiva para diferenciar: por que, porque, por quê e porquê.",
        rules: [
          {
            title: "Guia Rápido dos Porquês",
            description: "Critérios sintáticos e de pontuação para cada forma.",
            table: {
              headers: ["Forma", "Classificação Sintática", "Quando Usar", "Exemplo"],
              rows: [
                ["Por que (separado sem acento)", "Preposição 'por' + pronome 'que'", "Início de perguntas diretas/indiretas OU equivale a 'pelo qual / por qual razão'", "Por que você faltou à aula ontem? / Não sei por que ele se atrasou."],
                ["Porque (junto sem acento)", "Conjunção explicativa ou causal", "Em respostas e justificativas (equivale a 'pois', 'já que')", "Faltei porque tive uma consulta médica."],
                ["Por quê (separado com acento)", "Preposição + pronome tônico no fim de frase", "Fim de frase ou isolado antes de pontuação", "Eles não compareceram à reunião. Por quê?"],
                ["Porquê (junto com acento)", "Substantivo masculino (acompanha artigo/pronome)", "Significa 'o motivo', 'a razão'", "Não entendi o porquê de tanta confusão."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "— Por que você não me avisou? — Porque fiquei sem bateria. — Sem bateria, por quê? — Não sei o porquê, mas descarregou rápido.",
            en: "— Why didn't you let me know? — Because I ran out of battery. — Out of battery, why? — I don't know the reason why, but it discharged quickly.",
            highlight: "Por que / Porque / por quê / o porquê"
          }
        ]
      },
      {
        id: "m11-g3",
        title: "Conectivos para Expandir Relatos Pessoais",
        category: "Coesão Textual",
        summary: "Expressões que dinamizam relatos autobiográficos e narrativas.",
        rules: [
          {
            title: "Conectivos de Expansão Narrativa",
            description: "Dão ritmo e detalhamento ao discurso.",
            items: [
              "Para além disso / Somado a isso (expansão aditiva)",
              "Naquela época / Naquele tempo (contextualização de época)",
              "De repente / Inesperadamente (quebra de expectativa / clímax)",
              "Com o passar dos anos / Posteriormente (progressão temporal)"
            ]
          }
        ],
        examples: [
          {
            pt: "Naquela época morávamos no interior; com o passar dos anos, mudamo-nos para a capital.",
            en: "At that time we lived in the countryside; with the passing of the years, we moved to the capital.",
            highlight: "Naquela época / com o passar dos anos"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Memórias, Histórias de Família e Conversas Nostálgicas",
      culturalNotes: "No Brasil, contar 'causos' (histórias pitorescas de família ou de cidade pequena) ao redor de uma mesa com café fresco e bolo de fubá é um traço afetivo marcante da cultura brasileira, especialmente em Minas Gerais, no Sul e no Nordeste.",
      dialogue: [
        {
          speaker: "Vovô",
          text: "Na minha época, a gente não tinha celular nem internet. Nós brincávamos de esconde-esconde até o anoitecer.",
          translation: "In my time, we didn't have cell phones or internet. We used to play hide-and-seek until nightfall."
        },
        {
          speaker: "Neto",
          text: "E por que vocês voltavam para casa tão pontualmente?",
          translation: "And why did you return home so punctually?"
        },
        {
          speaker: "Vovô",
          text: "Porque quando a vovó chamava na janela, ninguém ousava desobedecer!",
          translation: "Because when grandma called out the window, nobody dared to disobey!"
        }
      ],
      thematicWords: [
        { word: "Causo", translation: "Folk story / anecdote (typical Brazilian storytelling)", example: "Meu avô adorava contar causos de assombração da fazenda." },
        { word: "Saudade", translation: "Longing / nostalgia (deep emotional feeling)", example: "Tenho muita saudade dos tempos em que morava perto da praia." },
        { word: "Antigamente", translation: "In the old days / formerly", example: "Antigamente a cidade era muito mais tranquila." },
        { word: "Infância", translation: "Childhood", example: "Passei toda a minha infância brincando na casa dos meus primos." },
        { word: "Recordação / Lembrança", translation: "Memory / keepsake", example: "Essa foto antiga é uma lembrança preciosa da família." }
      ],
      usefulPhrases: [
        { phrase: "Naquela época, as coisas funcionavam de forma bem diferente.", translation: "At that time, things worked in a very different way.", situation: "Comparar épocas" },
        { phrase: "Bateu uma saudade enorme daqueles passeios de domingo!", translation: "A huge wave of nostalgia hit me for those Sunday outings!", situation: "Expressar saudade viva" },
        { phrase: "Não consigo entender o porquê de tudo ter mudado tão depressa.", translation: "I can't understand the reason why everything changed so quickly.", situation: "Reflexão sobre mudanças" }
      ]
    },
    practice: [
      {
        id: "m11-p1",
        type: "multiple-choice",
        question: "Assinale a alternativa que preenche CORRETAMENTE as lacunas com os porquês: '— ________ você não veio ontem? — Não vim ________ fiquei doente. — Mas não avisou por ________? — Esqueci o ________ de avisar.'",
        options: [
          "Por que / porque / quê / porquê",
          "Porque / por que / que / por quê",
          "Por quê / por que / quê / porque",
          "Por que / por que / por que / por que"
        ],
        correctAnswer: 0,
        explanation: "1. 'Por que' (início de pergunta direta); 2. 'porque' (resposta/justificativa); 3. 'quê' após a preposição por no fim da oração ('por quê'); 4. 'porquê' com artigo ('o porquê', substantivo)."
      },
      {
        id: "m11-p2",
        type: "multiple-choice",
        question: "Complete a frase com os verbos no Pretérito Imperfeito e Perfeito: 'Enquanto nós ________ futebol, ________ a chover forte.'",
        options: [
          "jogávamos / começou",
          "jogamos / começava",
          "jogaríamos / começa",
          "jogávamos / começasse"
        ],
        correctAnswer: 0,
        explanation: "A ação em andamento no passado leva Pretérito Imperfeito ('jogávamos'), e a ação pontual que a interrompeu leva Pretérito Perfeito ('começou')."
      },
      {
        id: "m11-p3",
        type: "fill-in-blank",
        question: "Qual forma do porquê funciona como substantivo e aceita plural ('os porquês')?",
        options: ["porquê", "porque", "por que", "por quê"],
        correctAnswer: 0,
        explanation: "'Porquê' é o substantivo masculino que aceita artigos e plurais (ex.: os porquês da vida)."
      },
      {
        id: "m11-p4",
        type: "multiple-choice",
        question: "Qual das frases abaixo retrata um hábito costumeiro no passado?",
        options: [
          "Todos os verões nós viajávamos para a casa de praia dos nossos tios.",
          "Ontem viajei para a praia às oito da manhã.",
          "Viajarei para a praia no próximo ano.",
          "Se eu viajasse, ficaria muito feliz."
        ],
        correctAnswer: 0,
        explanation: "'Viajávamos' no pretérito imperfeito expressa repetição habitual de ações ao longo do passado."
      },
      {
        id: "m11-p5",
        type: "multiple-choice",
        question: "Por que se acentua 'por quê' no final da frase 'Você não comeu nada. Por quê?'?",
        options: [
          "Porque a palavra 'quê' torna-se um monossílabo tônico em posição final antes do ponto.",
          "Porque é uma proparoxítona.",
          "Porque toda pergunta exige acento circunflexo no português.",
          "Porque é uma forma derivada de verbo."
        ],
        correctAnswer: 0,
        explanation: "No final de frase antes de pontuação, o pronome 'que' ganha força fonética e passa a ser monossílabo tônico terminado em -e, recebendo acento circunflexo (por quê)."
      }
    ]
  },
  {
    id: 12,
    number: 12,
    title: "Módulo 12 — Normas, Concordância e Sentido Figurado",
    subtitle: "Expressões de proibição, obrigação e permissão, concordância nominal, denotação x conotação e oralidade",
    thematicContext: "Regras de Convivência, Sinalização, Figuras de Linguagem e Fonética Oral",
    estimatedMinutes: 55,
    grammarTopics: [
      {
        id: "m12-g1",
        title: "Expressões de Proibição, Obrigatoriedade e Permissão",
        category: "Morfossintaxe e Modalização",
        summary: "Estruturas regulatórias aplicadas a placas, avisos públicos e normas institucionais.",
        rules: [
          {
            title: "Quadro de Modalizadores Deônticos",
            description: "Expressões de dever, permissão e veto.",
            table: {
              headers: ["Categoria", "Estruturas Frequentes", "Exemplo Prático"],
              rows: [
                ["Proibição / Veto", "É proibido + substantivo / Não é permitido / Fica vedado", "É proibido fumar neste recinto. / Proibida a entrada."],
                ["Obrigação", "É obrigatório / Deve-se + infinitivo / É indispensável", "É obrigatório o uso de capacete de segurança."],
                ["Permissão / Liberação", "É permitido / É livre o acesso / Pode-se", "É permitida a circulação de animais de estimação."]
              ]
            }
          },
          {
            title: "Concordância em 'É Proibido / É Permitido / É Bom / É Necessário'",
            description: "Regra clássica de concordância nominal.",
            items: [
              "Sem artigo diante do substantivo: fica no masculino singular ('É proibido entrada de estranhos', 'Cerveja é bom')",
              "Com artigo ou pronome modificador: concorda com o substantivo ('É proibida A entrada', 'Esta cerveja é boa', 'São necessárias AS reformas')"
            ]
          }
        ],
        examples: [
          {
            pt: "É proibido fumar na área interna do edifício.",
            en: "Smoking is prohibited in the indoor area of the building.",
            highlight: "É proibido"
          },
          {
            pt: "É proibida a permanência de veículos não autorizados na garagem.",
            en: "The staying of unauthorized vehicles in the garage is prohibited.",
            highlight: "É proibida a permanência"
          }
        ]
      },
      {
        id: "m12-g2",
        title: "Concordância Nominal Essencial",
        category: "Sintaxe de Concordância",
        summary: "Regras de concordância de adjetivos, particípios e palavras como 'mesmo', 'próprio', 'obrigado', 'meio' e 'bastante'.",
        rules: [
          {
            title: "Casos Especiais de Concordância",
            description: "Ajustes de gênero e número.",
            table: {
              headers: ["Palavra / Expressão", "Regra", "Exemplo Correto"],
              rows: [
                ["Obrigado / Obrigada", "Concorda com o sexo do emissor", "O homem diz 'Muito obrigado'; a mulher diz 'Muito obrigada'."],
                ["Mesmo(s) / Próprio(s)", "Concordam com a pessoa a que se referem", "Elas mesmas prepararam o relatório."],
                ["Meio (adjetivo) vs. Meio (advérbio)", "Adjetivo = metade (meia xícara); Advérbio = um pouco (ela está meio cansada - invariável)", "Tomou meia xícara de café porque estava meio preocupada."],
                ["Bastante (adjetivo vs advérbio)", "Antes de substantivo = muitos/as (bastantes livros); Antes de adjetivo/verbo = muito (invariável)", "Eles leram bastantes livros e estudaram bastante."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "A diretora mesma assinou os documentos e disse: 'Muito obrigada pelo empenho'.",
            en: "The director herself signed the documents and said: 'Thank you very much for your effort'.",
            highlight: "mesma / obrigada"
          }
        ]
      },
      {
        id: "m12-g3",
        title: "Sentido Denotativo x Conotativo e Metáfora",
        category: "Semântica e Estilística",
        summary: "Denotação é o sentido literal e objetivo do dicionário; Conotação é o sentido figurado, poético ou metafórico.",
        rules: [
          {
            title: "Contraste Denotação vs. Conotação",
            description: "Identificação no discurso cotidiano e literário.",
            table: {
              headers: ["Frase", "Tipo de Sentido", "Explicação"],
              rows: [
                ["O coração é um órgão que bombeia sangue.", "Denotativo (Literal)", "Sentido biológico real do termo coração."],
                ["Aquele médico tem um coração de ouro.", "Conotativo (Metafórico)", "Metáfora que significa bondade, generosidade extrema."]
              ]
            }
          }
        ],
        examples: [
          {
            pt: "Ele quebrou o copo de cristal (denotativo) vs. Ele quebrou o silêncio da reunião (conotativo).",
            en: "He broke the glass cup (literal) vs. He broke the silence of the meeting (figurative).",
            highlight: "quebrou o silêncio"
          }
        ]
      },
      {
        id: "m12-g4",
        title: "Alterações de Vogais na Oralidade Brasileira",
        category: "Fonética e Variação Linguística",
        summary: "Fenômenos comuns no português falado, como a redução vocálica das pretônicas e postônicas ('menino' soa 'mininu', 'leite' soa 'leiti') e monotongação ('peixe' soa 'pexe').",
        rules: [
          {
            title: "Fenômenos Fonéticos da Fala Brasileira",
            description: "Compreender para aprimorar a escuta e conversação.",
            items: [
              "Alçamento vocálico: 'e' e 'o' átonos finais pronunciados como [i] e [u] (ponte → [põtʃi], carro → [karu])",
              "Palatalização de 't' e 'd' antes de [i]: 'tia' soa [tʃia], 'dia' soa [dʒia] na maior parte do Brasil",
              "Monotongação na fala rápida: 'ouro' → 'oro', 'caixa' → 'caxa'"
            ]
          }
        ],
        examples: [
          {
            pt: "Na fala coloquial, 'leite quente' soa como [leiti kẽti] na pronúncia do Sudeste.",
            en: "In colloquial speech, 'leite quente' sounds like [leiti kẽti] in Southeastern Brazilian pronunciation.",
            highlight: "redução vocálica e palatalização"
          }
        ]
      }
    ],
    vocabulary: {
      situationTitle: "Regulamentos, Condomínios e Placas de Trânsito",
      culturalNotes: "Em condomínios residenciais e repartições públicas no Brasil, regras de silêncio (geralmente após as 22h) e descarte de lixo são expressas por comunicados oficiais fixados nos elevadores e áreas comuns.",
      dialogue: [
        {
          speaker: "Síndico",
          text: "Senhores moradores, lembramos que é proibido o uso da piscina após as 20 horas para manutenção.",
          translation: "Dear residents, we remind you that the use of the pool after 8 PM is prohibited for maintenance."
        },
        {
          speaker: "Moradora",
          text: "Muito obrigada pelo aviso. Vou avisar meus familiares que estão de visita.",
          translation: "Thank you very much for the notice. I will let my visiting relatives know."
        }
      ],
      thematicWords: [
        { word: "Normas de convivência", translation: "Community living rules / guidelines", example: "As normas de convivência garantem o respeito entre vizinhos." },
        { word: "Síndico(a)", translation: "Building manager / HOA president", example: "O síndico convocou uma assembleia extraordinária." },
        { word: "Vedado / Interditado", translation: "Forbidden / Closed off", example: "Acesso interditado para reformas estruturais." },
        { word: "Infração / Multa", translation: "Violation / Fine", example: "O desrespeito às regras poderá acarretar multa condominial." },
        { word: "Alvará de funcionamento", translation: "Operating license / permit", example: "O estabelecimento comercial possui alvará regularizado." }
      ],
      usefulPhrases: [
        { phrase: "É expressamente proibida a entrada de pessoas não autorizadas.", translation: "Entry of unauthorized persons is strictly prohibited.", situation: "Placas e sinalização de segurança" },
        { phrase: "Fica assegurado o direito de...", translation: "The right to... is hereby guaranteed.", situation: "Artigos de regimento interno" },
        { phrase: "Ela ficou meio chateada com a situação.", translation: "She felt somewhat upset about the situation.", situation: "Expressão de estado emocional (meio invariável)" }
      ]
    },
    practice: [
      {
        id: "m12-p1",
        type: "multiple-choice",
        question: "Assinale a opção com a concordância nominal CORRETA de acordo com a norma culta:",
        options: [
          "É proibida a entrada de animais no estabelecimento.",
          "É proibido a entrada de animais no estabelecimento.",
          "É proibidas as entradas de pessoas.",
          "Entrada de animais é proibida (sem artigo)."
        ],
        correctAnswer: 0,
        explanation: "Havendo o artigo feminino definido 'a' diante de 'entrada', a concordância é obrigatória no feminino: 'É proibida a entrada'."
      },
      {
        id: "m12-p2",
        type: "multiple-choice",
        question: "Uma mulher, ao agradecer um favor, deve dizer:",
        options: ["Muito obrigada", "Muito obrigado", "Muito obrigados", "Muito me obrigado"],
        correctAnswer: 0,
        explanation: "O adjetivo 'obrigado/a' concorda em gênero com quem fala. Mulheres dizem 'Muito obrigada'."
      },
      {
        id: "m12-p3",
        type: "fill-in-blank",
        question: "Complete com a forma correta do advérbio 'meio': 'A secretária estava ________ preocupada com o prazo do relatório.'",
        options: ["meio", "meia", "meios", "meias"],
        correctAnswer: 0,
        explanation: "Quando 'meio' tem valor de advérbio (significando 'um pouco'), é invariável: 'meio preocupada'."
      },
      {
        id: "m12-p4",
        type: "multiple-choice",
        question: "Qual das frases a seguir apresenta sentido CONOTATIVO (figurado)?",
        options: [
          "Aquele negociador tem nervos de aço.",
          "A ponte foi construída com vigas de aço.",
          "O copo de vidro quebrou no chão da cozinha.",
          "A água ferve a cem graus Celsius ao nível do mar."
        ],
        correctAnswer: 0,
        explanation: "'Nervos de aço' é uma metáfora (sentido conotativo) que expressa calma e resistência sob extrema pressão."
      },
      {
        id: "m12-p5",
        type: "multiple-choice",
        question: "Assinale a frase em que 'bastante' está flexionado no plural CORRETAMENTE como adjetivo (equivalendo a 'muitos/muitas'):",
        options: [
          "Eles tinham bastantes motivos para comemorar.",
          "Elas estavam bastantes cansadas da viagem.",
          "Nós estudamos bastantes para o exame.",
          "Eles moram bastantes longe do centro."
        ],
        correctAnswer: 0,
        explanation: "Quando modifica um substantivo ('motivos'), 'bastante' funciona como pronome/adjetivo indefinido e vai para o plural ('bastantes motivos' = muitos motivos)."
      }
    ]
  }
];

modules.forEach(mod => {
  const filePath = path.join(modulesDir, `module${mod.id.toString().padStart(2, '0')}.json`);
  fs.writeFileSync(filePath, JSON.stringify(mod, null, 2), 'utf-8');
  console.log(`Generated ${filePath}`);
});
