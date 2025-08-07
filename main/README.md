# 📦 Projeto React + Vite + Shadcn + pnpm

Este projeto usa `pnpm` como gerenciador de pacotes e está configurado com Vite para otimização, Shadcn para componentes UI e ferramentas como Jest para testes unitários.

## 🛠️ Pré-requisitos

Certifique-se de ter o `pnpm` instalado. Caso não tenha, instale-o com o seguinte comando:

```bash
npm install -g pnpm
```

## ⚡ Execução em Desenvolvimento

1. Instale as dependências:
   ```bash
   pnpm install
   ```

2. Execute o ambiente de desenvolvimento:
   ```bash
   pnpm dev
   ```

Isso iniciará o servidor de desenvolvimento no `http://localhost:3000`.

## 🚀 Execução em Produção

1. Gere a build de produção:
   ```bash
   pnpm build
   ```

2. Para testar a build de produção localmente:
   ```bash
   pnpm preview
   ```

A aplicação estará disponível em `http://localhost:5000`.

## 📚 Documentação do Código com TSDoc

O projeto utiliza TSDoc para documentação automatizada do código. Siga estes passos para gerar e visualizar a documentação:

### 1. Gerar Documentação

Execute o seguinte comando para gerar a documentação:
```bash
pnpm docs
```

Isso criará uma pasta docs/ com toda a documentação em formato HTML.

### 2. Estrutura da Documentação

A documentação inclui:

- Componentes UI
- Hooks customizados
- Utilitários e funções
- Tipos e interfaces
- Serviços e API clients

### 3. Como Documentar seu Código

Adicione comentários JSDoc/TSDoc aos seus componentes e funções:

```ts
/**
 * Botão primário reutilizável
 * @component
 * @param {ButtonProps} props - Propriedades do botão
 * @param {ReactNode} props.children - Conteúdo do botão
 * @param {() => void} [props.onClick] - Handler de clique
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Tamanho do botão
 * @example
 * <PrimaryButton onClick={() => console.log('Clicked')} size="lg">
 *   Clique Aqui
 * </PrimaryButton>
 */
export const PrimaryButton = ({ children, onClick, size = 'md' }) => (
  <button className={`btn-${size}`} onClick={onClick}>
    {children}
  </button>
);
```

## 💻 Usando o Shadcn UI

Este projeto utiliza o **Shadcn** para componentes de UI reutilizáveis e estilizados. Você pode facilmente adicionar novos componentes usando a estrutura de `shadcn/ui`.

### Exemplo: Adicionando um Botão

1. Importe o componente `Button`:
   ```tsx
   import { Button } from 'components/ui/button';
   ```

2. Utilize o componente `Button` no seu código:
   ```tsx
   <Button onClick={() => alert('Clique no botão!')}>Clique Aqui</Button>
   ```

Para mais componentes, consulte a pasta `src/components/ui`.

## 🧪 Rodando os Testes Unitários

1. Certifique-se de que as dependências de desenvolvimento estão instaladas:
   ```bash
   pnpm install
   ```

2. Para rodar os testes unitários com Jest, execute:
   ```bash
   pnpm test
   ```

3. Caso deseje rodar os testes em modo interativo (watch), execute:
   ```bash
   pnpm test --watch
   ```

### Estrutura de Testes

Os testes estão localizados na pasta `src/components/features`, onde cada feature tem seus próprios testes. Para componentes compartilhados, os testes podem ser encontrados na pasta `src/components/shared`.

## 📂 Estrutura do Projeto

Aqui está um resumo da estrutura do projeto:

```bash
src/
├── api/                         # Tudo relacionado a chamadas API
│   ├── client.ts                # Configuração do cliente HTTP (Axios/fetch)
│   ├── services.ts              # Serviços API organizados por domínio
│   └── endpoints.ts             # Constantes com endpoints da API
│
├── assets/                      # Arquivos estáticos
│   ├── images/                  # Imagens do projeto
│   ├── fonts/                   # Fontes customizadas
│   └── svgs/                    # SVGs como componentes React
│
├── auth/                        # Autenticação
│   ├── auth.ts                  # Lógica principal de autenticação
│   ├── useAuth.ts               # Hook para autenticação
│   └── types.ts                 # Tipos relacionados a auth
│
├── cache/                       # Cache (React Query)
│   ├── queryClient.ts           # Configuração do QueryClient
│   └── keys.ts                  # Chaves para queries/mutations
│
├── components/                  # Componentes UI
│   ├── ui/                      # Componentes shadcn/ui
│   │   └── button.tsx           # Componente Button personalizado
│   │
│   ├── shared/                  # Componentes reutilizáveis
│   │   └── Card/                # Componente Card
│   │       ├── index.tsx        # Implementação
│   │       └── types.ts         # Tipos específicos
│   │
│   └── features/                # Componentes por feature
│       └── Dashboard/           # Ex: componentes específicos do dashboard
│           └── components/
│               └── *.test.tsx   # Testes dos componentes específicos
│
├── config/                      # Configurações globais
│   ├── app.ts                   # Configurações do aplicativo
│   └── theme.ts                 # Configurações de tema (Tailwind)
│
├── test-utils/
│   ├── renderWithProviders.tsx  # Wrapper para testes com providers
│   └── testData.ts              # Dados mockados para testes
│
├── contexts/                    # Contextos adicionais
│   └── ThemeContext.tsx         # Contexto para tema dark/light
│
├── hooks/                       # Hooks customizados
│   ├── useApi.ts                # Hook para chamadas API
│   └── useToast.ts              # Hook para notificações
│
├── i18n/                        # Internacionalização
│   ├── locales/                 # Traduções
│   │   ├── en/                  # Inglês
│   │   │   └── translation.json
│   │   └── pt/                  # Português
│   │       └── translation.json
│   └── index.ts                 # Configuração do i18n
│
├── lib/                         # Utilitários e libs
│   ├── utils.ts                 # Funções utilitárias
│   └── constants.ts             # Constantes globais
│
├── pages/                       # Páginas/rotas
│   ├── Home/                    # Página Home
│   │   ├── index.tsx            # Componente
│   │   └── hooks.ts             # Lógica específica
│   └── Dashboard/               # Página Dashboard
│       ├── components/          # Componentes específicos
│       └── index.tsx
│
├── providers/                   # Providers da aplicação
│   ├── AuthProvider.tsx         # Provider de autenticação
│   ├── QueryClientProvider.tsx  # Provider do React Query
│   └── AppProviders.tsx         # Agrupa todos providers
│
├── routes/                      # Configuração de rotas
│   ├── index.tsx                # Rotas principais
│   ├── ProtectedRoute.tsx       # Rota protegida
│   └── publicRoutes.tsx         # Rotas públicas
│
├── stores/                      # Estado global
│   └── useUserStore.ts          # Store para dados do usuário
│
├── types/                       # Tipos globais
│   ├── api.d.ts                 # Tipos da API
│   └── global.d.ts              # Tipos globais
│
├── App.tsx                      # Componente raiz
├── index.css                    # Estilos globais
├── main.tsx                     # Ponto de entrada
└── vite-env.d.ts                # Tipos do Vite
```

## 🔧 Ferramentas Sugeridas

- **Shadcn UI**: Biblioteca de componentes UI reutilizáveis.
- **Jest**: Para testes unitários.
- **Vite**: Para bundling e servidor de desenvolvimento.
- **pnpm**: Gerenciador de pacotes.

## 📚 Documentação

Caso queira saber mais sobre cada parte do sistema, confira a documentação nas seções apropriadas, como **Tratamento de Erros**, **Internacionalização**, e **Estrutura do Projeto**.

## 🚨 Observações

- Lembre-se de atualizar as dependências periodicamente para manter o projeto em dia.
- Certifique-se de que todas as novas features tenham testes unitários associados.
