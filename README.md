# Português Intermediário — Guia de Gramática e Recursos

> **Guia de estudo autônomo, prático e mobile-first** consolidando todos os tópicos gramaticais, unidades temáticas, diálogos situacionais e exercícios de fixação do curso de certificação *"Língua Portuguesa e Cultura Brasileira para Estrangeiros — Intermediário"* (IFRS / Rede e-Tec Brasil, 18 módulos).

---

## 🌟 Funcionalidades e Arquitetura

- **📱 Mobile-First & PWA Completo**:
  - Layout otimizado para celulares com barra de navegação inferior aderente (*sticky bottom nav*).
  - Suporte completo a PWA com `manifest.webmanifest`, ícones de alta resolução (192px, 512px, apple-touch-icon) e Service Worker (`sw.js`) para funcionamento **100% offline** após o primeiro carregamento.
  - Instalável via **"Adicionar à Tela de Início"** no Android (Chrome) e iOS (Safari).
- **📚 Separação Total entre Dados e Apresentação**:
  - Conteúdo estruturado em arquivos JSON tipados (`src/data/modules/module01.json` a `module18.json`), permitindo editar regras, exemplos e vocabulário sem alterar o código React.
- **⚡ 18 Módulos Completos com Três Seções Cada**:
  1. **Gramática**: Explicações em linguagem direta, quadros de regras, tabelas comparativas e frases de exemplo autênticas em português com tradução em inglês e botões de pronúncia em áudio (*Web Speech API pt-BR*).
  2. **Vocabulário & Situação**: Contexto cultural brasileiro, diálogos situacionais, termos temáticos e expressões idiomáticas do cotidiano.
  3. **Pratique**: Exercícios interativos de fixação com gabarito comentado instantâneo, dicas e cálculo automático de desempenho.
- **🔍 Busca Instantânea & Índice Remissivo de A–Z**:
  - Modal de busca global (`Cmd+K` / `Ctrl+K`) com busca por tópicos, regras e vocabulário.
  - Glossário alfabético de A–Z com navegação direta para o ponto exato de cada módulo.
- **🌓 Tema Claro / Escuro**: Alternância suave e persistência automática no `localStorage`.
- **🎯 Metas & Checklist do Certificado**: Acompanhamento de progresso de estudo e checklist dos requisitos de aprovação (nota ≥ 60% no Moodle IFRS).

---

## 🚀 Como Executar Localmente

### Pré-requisitos
- Node.js (v18+)
- npm (v9+)

### Comandos:
```bash
# 1. Entrar na pasta do projeto
cd /home/haluck/.gemini/antigravity/scratch/portugues-intermediario

# 2. Instalar dependências
npm install

# 3. Iniciar servidor de desenvolvimento local
npm run dev

# 4. Construir o pacote estático de produção
npm run build

# 5. Visualizar localmente a versão final construída
npm run preview
```

---

## 🌐 Instruções de Publicação (Deploy)

### Opção 1: Publicação no GitHub Pages (Recomendado)

O repositório já inclui o fluxo automatizado em `.github/workflows/deploy.yml` e configuração de caminhos relativos no `vite.config.ts`.

#### Passo a Passo para Publicar:

1. **Crie um novo repositório no seu GitHub**:
   - Acesse [github.com/new](https://github.com/new).
   - Nomeie o repositório (ex.: `portugues-intermediario`).
   - Deixe-o como **Public** (Público).

2. **Inicialize o Git e envie os arquivos**:
   ```bash
   cd /home/haluck/.gemini/antigravity/scratch/portugues-intermediario
   git init
   git add .
   git commit -m "feat: Português Intermediário PWA study app"
   git branch -M main
   git remote add origin https://github.com/<SEU-USUARIO>/<SEU-REPOSITORIO>.git
   git push -u origin main
   ```

3. **Ative o GitHub Pages nas configurações do repositório**:
   - No GitHub, acesse a aba **Settings** (Configurações) do seu repositório.
   - No menu lateral esquerdo, clique em **Pages**.
   - Na seção **Build and deployment > Source**, selecione **GitHub Actions**.
   - O workflow `.github/workflows/deploy.yml` será disparado automaticamente.
   - Em cerca de 1 a 2 minutos, o site estará publicado na URL pública:
     ```
     https://<SEU-USUARIO>.github.io/<SEU-REPOSITORIO>/
     ```

---

### Opção 2: Publicação no Cloudflare Pages (Alternativa com Banda Ilimitada)

Caso deseje banda estática ilimitada ou não queira usar o GitHub Pages:
1. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Clique em **Create Application** > **Pages** > **Connect to Git**.
3. Selecione o repositório `portugues-intermediario`.
4. Configure os parâmetros de build:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Clique em **Save and Deploy**. O deploy é instantâneo e receberá uma URL `https://portugues-intermediario.pages.dev`.

---

## 📲 Como Instalar no Celular (PWA) e Usar Offline

### No Android (Google Chrome):
1. Abra a URL pública do site no Chrome pelo celular.
2. Toque no menu de três pontos (⋮) no canto superior direito.
3. Toque em **"Adicionar à tela inicial"** ou **"Instalar aplicativo"**.
4. O app será instalado com ícone próprio na sua grade de aplicativos, abrindo sem a barra de endereços do navegador (*display: standalone*).

### No iOS (Apple Safari):
1. Abra a URL pública do site no Safari no iPhone.
2. Toque no botão de compartilhamento (ícone de quadrado com seta para cima na barra inferior).
3. Role a lista e toque em **"Adicionar à Tela de Início"**.
4. Toque em **Adicionar**. O ícone de alta resolução aparecerá na tela do seu iPhone.

### Teste do Modo Offline:
- Após abrir as páginas do site pela primeira vez no celular, ative o **Modo Avião** (desconecte o Wi-Fi e dados móveis).
- Abra o aplicativo instalado ou recarregue a página no navegador.
- O site continuará funcionando perfeitamente, exibindo o indicador `"Modo Offline Ativo"`.

---

## 🗂️ Estrutura de Conteúdo e Edição

Todos os dados de conteúdo estão separados da lógica de interface:

```
src/data/
├── modules/
│   ├── module01.json   # Módulo 1: Biografia, marcadores temporais, presente/pretérito, aumentativo/diminutivo, til
│   ├── module02.json   # Módulo 2: Hospedagem, passagens aéreas, presente vs futuro
│   ├── module03.json   # Módulo 3: Aeroporto, sílaba tônica, oxítonas e proparoxítonas
│   ├── module04.json   # Módulo 4: Clima, imperativo afirmativo, adjuntos adverbiais, paroxítonas
│   ├── module05.json   # Módulo 5: Serviços bancários, pronomes de tratamento e oblíquos, verbo solicitar, hiatos
│   ├── module06.json   # Módulo 6: Agendamento, telefone, ir+ter que+infinitivo, conectivos, nasalização
│   ├── module07.json   # Módulo 7: Festas e culinária, receitas, conotação, dígrafos
│   ├── module08.json   # Módulo 8: Meio ambiente, descarte, conectivos argumentativos, sugestões
│   ├── module09.json   # Módulo 9: Ambiente escolar, formalidade, interjeições, particípio, grafia x/ch
│   ├── module10.json   # Módulo 10: Resumo acadêmico, impessoalidade, referenciação textual
│   ├── module11.json   # Módulo 11: Pretérito imperfeito, progresso/simultâneo, conectivos, 4 porquês
│   ├── module12.json   # Módulo 12: Normas de proibição/obrigação/permissão, concordância, denotação/metáfora, oralidade
│   ├── module13.json   # Módulo 13: Regência verbal, verbos de movimento vs estáticos, pronomes oblíquos
│   ├── module14.json   # Módulo 14: Cinema, sinopse, gostos, adjetivos, novo acordo do hífen
│   ├── module15.json   # Módulo 15: Narrativa, pretérito perfeito x imperfeito, marcadores, reticências
│   ├── module16.json   # Módulo 16: Verbos irregulares no passado, estar+gerúndio, roteiros, apóstrofo
│   ├── module17.json   # Módulo 17: Diversidade cultural, texto dissertativo, operadores argumentativos, encontros consonantais
│   └── module18.json   # Módulo 18: Direitos e cidadania, abaixo-assinado, finalidade, guia da crase
├── grammarIndex.ts     # Registro remissivo alfabético de A–Z
├── resourcesData.ts    # Curadoria de links externos e ferramentas
└── certificateMilestones.ts # Checklist das metas do certificado
```

---

## 🔍 Itens para Revisão Manual do Usuário

1. **Links Externos de Apoio**:
   - Os links da página **Recursos** para ferramentas consagradas (VOLP/ABL, Conjugação.com.br, Dicio, Forvo, Tá Falado, Celpe-Bras) foram configurados.
   - Links institucionais internos (como o Moodle IFRS e podcasts específicos) estão sinalizados com a etiqueta de aviso `"Requer Verificação Manual"` para você testar periodicamente.
2. **Exercícios de Fixação**:
   - Como os exercícios originais do curso fechado do Moodle são de uso restrito, foram elaborados **exercícios inéditos e autorais** para cada um dos 18 módulos com explicações gramaticais e pedagógicas completas.
3. **Passos Finais de Publicação**:
   - Conforme destacado no roteiro acima, execute os comandos do bloco `git init`, `git remote add` e `git push` no seu terminal para colocar o site no ar sob o seu usuário do GitHub.
