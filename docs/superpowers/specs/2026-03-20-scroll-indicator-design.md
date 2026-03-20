# Scroll Indicator com Patinhas - Design Spec

**Date:** 2026-03-20
**Component:** Hero Scroll Indicator
**Project:** Ana Caroline Portfolio - Pet Grooming

## Overview

Redesign do indicador de scroll no componente Hero para um visual mais elaborado que combine com o tema pet grooming e o design system existente (glassmorphism + paleta rosa/magenta).

## Contexto

- **Localização:** `components/Hero.tsx` (linhas 273-301)
- **Stack:** React + Framer Motion + React Icons
- **Tema:** Pet grooming profissional
- **Paleta:** #ad1457 (primary-dark), #e91e63 (primary), #f48fb1 (primary-light)

## Componente Atual

```tsx
<motion.div>
  <span>Continue rolando</span>
  <span>↓</span>
</motion.div>
```

- Texto simples com seta
- Animação bounce básica
- Pouco destaque visual

## Design Proposto

### Estrutura Visual

Container vertical glassmorphism (60px × 100px):

- Background: `rgba(255, 255, 255, 0.65)`
- Backdrop filter: `blur(20px)`
- Border: `1px solid rgba(255, 255, 255, 0.5)`
- Border radius: `16px`
- Box shadow: `0 8px 32px rgba(233, 30, 99, 0.15)`
- Padding: `16px 12px`

Conteúdo interno:
- 3 ícones `FaPaw` (react-icons) alinhados verticalmente
- Espaçamento de 12px entre patinhas
- Tamanho: 18px cada
- Texto "Continue rolando" abaixo do container

### Cores e Estados

**Estado Inativo (default):**
- Color: `rgba(173, 20, 87, 0.25)`
- Opacity: 0.25
- Transform: `scale(1)`

**Estado Ativo (destaque):**
- Color: `#ad1457`
- Opacity: 1
- Transform: `scale(1.1)`
- Filter: `drop-shadow(0 0 8px rgba(233, 30, 99, 0.6))`

### Animação

**Sequência de iluminação (infinita):**

```
Patinha 1: acende (300ms) → mantém (300ms) → apaga (300ms)
Patinha 2: acende (300ms) → mantém (300ms) → apaga (300ms)
Patinha 3: acende (300ms) → mantém (300ms) → apaga (300ms)
Loop reinicia
```

- Duração total do ciclo: 1.8s
- Easing: `easeInOut`
- Delay entre patinhas: 600ms

**Animação do container:**
- Fade in inicial: delay 1.2s, duration 0.6s
- Bounce vertical: `y: [0, 8, 0]`, 2s loop, easeInOut

### Responsividade

- Mobile (< 576px): Container 50px × 85px, patinhas 14px
- Desktop: Valores padrão especificados acima

## Component Structure

```tsx
<motion.div className="scroll-indicator-container">
  <motion.div className="glassmorphism-box">
    {[0, 1, 2].map((index) => (
      <motion.div
        key={index}
        className="paw-icon"
        animate={{
          opacity: activeIndex === index ? 1 : 0.25,
          scale: activeIndex === index ? 1.1 : 1,
        }}
      >
        <FaPaw />
      </motion.div>
    ))}
  </motion.div>
  <span className="scroll-text">Continue rolando</span>
</motion.div>
```

## Variants Framer Motion

```tsx
const pawVariants = {
  active: {
    color: '#ad1457',
    opacity: 1,
    scale: 1.1,
    filter: 'drop-shadow(0 0 8px rgba(233, 30, 99, 0.6))',
  },
  inactive: {
    color: 'rgba(173, 20, 87, 0.25)',
    opacity: 0.25,
    scale: 1,
    filter: 'none',
  },
}
```

## Alternativas Consideradas

1. **Mouse Scroll Minimalista** - Descartado: menos on-brand para pet grooming
2. **Setas em Cascata Premium** - Descartado: patinhas mais temáticas para o nicho

## Critérios de Sucesso

- [ ] Combina visualmente com o design system existente
- [ ] Animação fluida sem jarras
- [ ] Funciona em mobile e desktop
- [ ] Código limpo e reutilizável
- [ ] Mantém delay de entrada (1.2s) para não sobrecarregar animações iniciais

## Arquivos a Modificar

- `components/Hero.tsx` - Substituir linhas 273-301
