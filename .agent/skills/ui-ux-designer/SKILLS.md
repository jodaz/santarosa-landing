---
name: ui-ux-designer
description: Enforces the Santa Rosa 10K (santarosa-landing) design system for Next.js, Tailwind, and shadcn/ui. Ensures visual consistency, brand correctness, and a premium, vibrant landing page aesthetic.
---

# UI/UX Designer Skill — Santa Rosa 10K

## When to use this skill
- When creating or editing any landing page section or component.
- When adding new UI elements (cards, buttons, sections, badges, modals, icons).
- When adjusting spacing, typography, colors, or animations.
- When designing responsive layouts that must look premium on mobile and desktop.

---

## Necessary Inputs
- The component or section to create/modify.
- Context within the page (hero, info section, gallery, etc.).
- Target device (Desktop, Tablet, Mobile) — default to responsive mobile-first.

---

## Workflow

1. **Identify scope** — Determine which section or shadcn/ui component is affected.
2. **Apply Tailwind tokens** — Use brand colors, fonts, and animation classes from `tailwind.config.ts`.
3. **Reuse shadcn/ui** — Use components from `src/components/ui/` as the base for atomic elements.
4. **Follow Glassmorphism patterns** — All sections and cards should feel "alive" with gradients, blurs, and borders.
5. **Verify responsiveness** — Ensure components use `container` and responsive padding.

---

## Design Tokens

### Brand Palette (Tailwind `brand`)

| Role | Token | Value |
|---|---|---|
| Deep Base | `brand-dark-purple` | `#0D164D` |
| Primary Accent | `brand-light-purple` | `#384594` |
| Action/Urgency | `brand-red` | `#D50F17` |
| Highlight/CTA | `brand-yellow` | `#FFDB4A` |
| Contrast Deep | `brand-dark-green` | `#000F00` |

**Theme Colors (shadcn/ui context):**
- **Background**: White (Light) / `hsl(0 0% 3.9%)` (Dark)
- **Primary**: Brand Dark Purple / White
- **Secondary**: Custom gradients or light purple variants.

**Gradients:**
- `gradient-hero`: Used for the main header/hero section.
- `gradient-cta`: High-impact gradient for "Register" buttons.
- `gradient-card`: Subtle depth for info cards.

---

### Typography

| Category | Tailwind Class | Font Family | Usage |
|---|---|---|---|
| **Body/Sans** | `font-sans` | `Poppins` | General text, descriptions, navigation. |
| **Accent/Marker** | `font-permanent` | `Permanent Marker` | Subtitles, handwritten-style callouts. |
| **Display/Edo** | `font-edo` (custom) | `Edo` | Large section headings, high-impact titles. |

- **Font Sizes**: 
  - Hero Title: `text-5xl` to `text-7xl`, `font-black`.
  - Section Headings: `text-3xl` to `text-4xl`, `font-bold`.
  - Body: `text-base` or `text-lg`.

---

### UI Components & Spacing

#### Common Layout Spacing
- **Container**: `container mx-auto px-4`.
- **Vertical Spacing**: `py-10` to `py-20` for sections.
- **Gaps**: `gap-6` for grids, `gap-4` for button rows.

#### Glassmorphism Rules
- **Backgrounds**: Use `bg-white/20` or `bg-white/10` with `backdrop-blur-sm` or `backdrop-blur-md`.
- **Borders**: All "floating" elements must have a thin border: `border border-white/30` or `border-white/20`.
- **Shadows**: Use `shadow-lg` or `shadow-xl` for depth.

---

### Animations

Always apply entrance animations to make the page feel dynamic:
- `animate-fade-in`: Subtle appearance.
- `animate-fade-in-up`: Content rising into view.
- `animate-scale-in`: Pop-in effect for cards or badges.
- `animate-pulse-glow`: Continuous low-frequency glow for CTA containers.

---

### Iconography
- **Library**: `lucide-react`.
- **Default size**: `w-5 h-5` (small) or `w-8 h-8` (large display).
- **Style**: Match the color of the text (`text-foreground` or `text-white`).

---

## Component Implementation Rules

### 1. Hero Section
- Must include a background image with a gradient overlay (`bg-gradient-to-br from-primary/90 ...`).
- High-contrast typography using the `Edo` (display) font for the mission name.
- Explicit CTA buttons with `bg-gradient-cta`.

### 2. Cards & Grids
- **Padding**: `p-6` or `p-8`.
- **Border Radius**: `rounded-2xl` (modern rounded look).
- **Hover**: Include `hover:scale-105 transition-all duration-300`.

### 3. Navigation
- Sticky/Fixed: `fixed top-0 z-50`.
- Background: `bg-card/95 backdrop-blur-md`.
- Highlight current item with `text-primary`.

---

## Output Format

When applying this skill:
1. Provide the React component code using Tailwind CSS utility classes.
2. Use shadcn/ui components (`Button`, `Card`, etc.) as the structural base.
3. Ensure semantic HTML (`section`, `h1`, `nav`).
4. Include comments for accessibility (ARIA labels) and critical UX decisions.

---

## UI/UX Best Practices for This Project
- **Vibration**: Use the yellow and red brand colors sparingly as high-energy highlights.
- **Deep Blacks/Purples**: Use the dark-purple base for a professional, "night-mode" premium feel.
- **Text Clarity**: Ensure sufficient contrast (White on Dark Purple, Black on Yellow).
- **Interactive States**: Every button must have a clear `:hover` and `:active` state change.