# SmartSocket Frontend

Bem-vindo(a) ao repositório **SmartSocket**! Este projeto consiste em um frontend desenvolvido em **Next.js (versão 13)** que utiliza a abordagem **App Router**, juntamente com **Tailwind CSS** e componentes do **shadcn UI** para criar uma interface moderna, responsiva e altamente customizável.

## Estrutura de Pastas

Abaixo está um resumo da arquitetura de diretórios do projeto:
```bash
FRONTEND-MAIN/
├─ .next/                   # Diretório gerado após o build (arquivos compilados)
├─ node_modules/            # Dependências do projeto instaladas
├─ public/                  # Arquivos estáticos (imagens, favicon, etc.)
├─ src/
│  ├─ app/
│  │  ├─ home/
│  │  │  ├─ dashboard/
│  │  │  │  ├─ energy/
│  │  │  │  │  └─ _components/
│  │  │  │  │     ├─ ConsumptionBarChart.tsx
│  │  │  │  │     ├─ DailyConsumptionDonutChart.tsx
│  │  │  │  │     ├─ DeviceSwitch.tsx
│  │  │  │  │     ├─ HourlyVsDailyDonutChart.tsx
│  │  │  │  │     └─ mwh.tsx
│  │  │  │  ├─ page.tsx
│  │  │  │  └─ layout.tsx
│  │  │  ├─ page.tsx
│  │  │  └─ layout.tsx
│  │  └─ ...                # Outras rotas/páginas
│  ├─ components/
│  │  ├─ common/            # Componentes reutilizáveis em todo o projeto
│  │  ├─ layout/            # Componentes de layout global
│  │  │  ├─ header/
│  │  │  ├─ navbar/
│  │  │  └─ sidebar/
│  │  └─ ui/                # Componentes UI (shadcn) e abstrações visuais
│  ├─ lib/                 # Código utilitário, funções auxiliares, etc.
│  ├─ types/               # Definições de tipos TypeScript
│  ├─ globals.css          # Estilos globais (Tailwind CSS)
│  ├─ layout.tsx           # Layout raiz do Next.js (se aplicável)
│  └─ page.tsx             # Página raiz do projeto (se aplicável)
├─ package.json
├─ next-env.d.ts
├─ next.config.mjs         # Configurações do Next.js
└─ ...
```

### Principais Pastas

- **`src/app/`**  
  Diretório base do **Next.js 13** onde ficam as rotas (páginas) e **layouts**.  
  - **`home/`**: Agrupa a página inicial (`page.tsx`) e o layout específico (`layout.tsx`).  
  - **`dashboard/`**: Contém a tela de “Dashboard de Dispositivos” (`page.tsx`) e o layout relacionado.  
    - **`energy/`**: Concentra subcomponentes de gráficos e telas de análise de consumo.  
      - **`_components/`**: Componentes específicos de chart, device switch, etc.

- **`src/components/`**  
  Onde ficam componentes que podem ser reutilizados em diversas partes do projeto.  
  - **`common/`**: Componentes genéricos ou helpers para o projeto.  
  - **`layout/`**: Componentes que fazem parte do layout global (por exemplo, **navbar**, **header**, **sidebar**).  
  - **`ui/`**: Componentes estilizados do **shadcn UI** e abstrações de interface.

- **`src/lib/`**  
  Pode conter funções utilitárias, helpers de data, formatação, requests HTTP etc.

- **`src/types/`**  
  Definições de tipos e interfaces TypeScript, por exemplo, **interfaces** de dados de dispositivos, respostas de API, etc.

- **`public/`**  
  Arquivos estáticos (imagens, ícones, etc.) que podem ser acessados via rota direta (por exemplo, `/logo.png`).

---

## Tecnologias e Ferramentas

- **Next.js 13**: Framework React que possibilita renderização híbrida (SSR, SSG), App Router e mais.
- **Tailwind CSS**: Biblioteca de utilitários CSS para criação de layouts responsivos e consistentes.
- **shadcn UI**: Coleção de componentes UI estilizados com Tailwind, trazendo acessibilidade e personalização.
- **TypeScript**: Tipagem estática para maior robustez e manutenção do código.
- **Lucide React**: Biblioteca de ícones minimalistas e customizáveis para React.

---

## Como Executar

1. **Instale as dependências**:
```bash
   npm install
```
2. **Execute o servidor de desenvolvimento:**:
```bash
    npm run dev
```

3. **Build de produção:**:
```bash
    npm run build
    npm run start
```

## Como Executar

### Funcionalidades Principais
- Página Home:

- Mostra o logotipo, nome do sistema (SmartSocket) e ícones para navegação (Devices, Relatórios, Dashboard).

- Layout Global:
Navbar com:
Troca de tema (dark/light).

- Menu do usuário (perfil, configurações, sair).

- Menu de configurações (cadastrar dispositivo, etc.).

- Rodapé com direitos reservados.

- Dashboard:

- Lista mockada de dispositivos com status (ligado/desligado) e consumo de energia.

- Switch para controlar estado do dispositivo (ligado ou desligado).

- Ações para ver detalhes de consumo em tempo real (rota /home/dashboard/energy).

- Páginas de Gráficos:

- Diversos componentes de gráfico (BarChart, DonutChart etc.) mostrando consumo por hora, dia, etc.

- Uso do Recharts + shadcn UI para tooltips e estilização.

- Customização
Temas (Dark/Light):
O projeto utiliza classes do Tailwind e suporte do shadcn UI para alternar entre temas escuro e claro.

- Estilos Globais:
Definidos em globals.css, utilizando variáveis CSS do shadcn e configurações personalizadas do Tailwind.

- Rotas:
Podem ser adaptadas de acordo com suas necessidades, bastando criar novos diretórios dentro de src/app.

## Contribuição     

1. **Faça um fork do projeto.**:

2. **Crie uma nova branch para sua feature ou correção de bug:**:
```bash
    git checkout -b feature/minha-feature
```

3. **Faça o commit das suas alterações:**:
```bash
    git commit -m "Minha feature incrível"
```

4. **Faça o push para o repositório remoto:**:
```bash
    git push origin feature/minha-feature
```

4. **Abra um Pull Request para revisão.**:
```bash
    git push origin feature/minha-feature
```

## Licença
Este projeto está sob licença MIT. Sinta-se à vontade para utilizá-lo e adaptá-lo conforme suas necessidades.