# Luknet — Landing Page Futurista

## What This Is

Landing page da Luknet, empresa de software e desenvolvimento, passando por um redesign completo para transmitir uma identidade visual futurista e premium. O objetivo é transformar a página atual em uma experiência imersiva e impactante com estética dark, elementos 3D animados e tipografia bold.

## Core Value

Causar impacto visual imediato nos primeiros segundos — o visitante deve sentir que a Luknet é uma empresa tech de ponta antes de ler uma palavra.

## Requirements

### Validated

- ✓ Landing page com seções: Header, Hero, Serviços, Diferenciais, Notícias, Contato, Footer — existente
- ✓ Stack React + TypeScript + Vite + Tailwind CSS — existente
- ✓ Biblioteca de animação (motion) instalada — existente
- ✓ Suporte a dark mode (next-themes) — existente
- ✓ Formulário de contato com react-hook-form — existente

### Active

- [ ] Tema dark como padrão global (fundo preto/quase preto)
- [ ] Paleta de cores roxo/violeta com acentos neon
- [ ] Hero section com elemento 3D central flutuando e animado
- [ ] Partículas e efeitos de profundidade em toda a página
- [ ] Tipografia bold e headlines de impacto em todas as seções
- [ ] Animações de entrada impactantes (scroll-triggered, não sutis)
- [ ] Redesign do Header com estilo glassmorphism dark
- [ ] Redesign da seção de Serviços com cards 3D/holográficos
- [ ] Redesign da seção de Diferenciais com visual futurista
- [ ] Redesign da seção de Notícias/Blog
- [ ] Redesign do Contato e Footer
- [ ] Novos textos e copys alinhados ao posicionamento tech premium

### Out of Scope

- Backend ou API — foco exclusivo em frontend/visual
- Autenticação de usuários — não é landing page com login
- Mobile app — web only
- Internacionalização — apenas pt-BR por ora

## Context

Codebase existente em React 18 + TypeScript + Vite + Tailwind CSS v4. Já possui a biblioteca `motion` (Framer Motion fork) instalada para animações. Stack madura, sem necessidade de grandes mudanças de dependências — a biblioteca `three.js` ou similar pode ser adicionada para elementos 3D. Componentes Radix UI disponíveis como primitivos de UI.

Referência visual: estilo Viture neckband landing page — dark, elementos 3D flutuando, neon, tipografia bold impactante, animações contínuas.

## Constraints

- **Tech Stack**: Manter React + TypeScript + Vite + Tailwind — não migrar framework
- **Conteúdo**: Atualizar textos e copys junto com o redesign visual
- **Performance**: Animações impactantes mas sem travar em hardware médio
- **Deploy**: SPA estática, sem servidor necessário

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Dark theme como padrão | Identidade futurista exige fundo escuro | — Pending |
| Roxo/violeta como cor primária | Premium, inovação, diferencia de azul genérico de tech | — Pending |
| Animações impactantes (não sutis) | Usuário quer impacto, não elegância discreta | — Pending |
| Manter stack atual | Evitar reescrita; motion já instalado | — Pending |

---
*Last updated: 2026-03-14 after initialization*
