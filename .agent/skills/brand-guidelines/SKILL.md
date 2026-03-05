# Santa Rosa Brand Guidelines

## Purpose

To provide official brand guidelines, colors, typography, and design patterns for the "Santa Rosa" project. Use this skill when:
- Creating new UI components or pages
- Implementing design-consistent styling
- Selecting colors, fonts, and visual effects
- Applying animations and transitions
- Maintaining consistency between light and dark modes

## Triggers

This skill should be used when the user mentions:
- "Santa Rosa brand"
- "Santa Rosa design guidelines"
- "colors for Santa Rosa"
- "typography for Santa Rosa"
- "Santa Rosa styles"
- "brand guidelines for santarosa-landing"

## Brand Identity

The "Santa Rosa" project is a modern, high-craft web application with a focus on visual impact, utilizing deep purples, bright yellows, and smooth interactive elements.

## Core Typography

| Usage | Font Family | Source |
| :--- | :--- | :--- |
| **Primary Sans-serif** | `Poppins` | Google Fonts |
| **Display / Headlines** | `Edo` | `/fonts/edo.ttf` |
| **Accent / Cursive** | `Permanent Marker` | Google Fonts |

### Implementation Details

```css
/* Custom font Edo */
@font-face {
    font-family: "Edo";
    src: url("/fonts/edo.ttf") format("truetype");
}
```

## Color Palette

The project uses a theme-aware color system using HSL variables for core UI elements and a specific brand palette for decorative and identity-driven elements.

### Brand Palette (Hex)

- **Dark Purple:** `#0D164D` (Primary Brand Color)
- **White:** `#FFFFFF`
- **Light Purple:** `#384594`
- **Red:** `#D50F17`
- **Yellow:** `#FFDB4A` (Secondary Brand Color / Accents)
- **Dark Green:** `#000F00`

### Semantic HSL Variables (Light/Dark Mode)

| Variable | Light Mode (HSL) | Dark Mode (HSL) |
| :--- | :--- | :--- |
| `--background` | `0 0% 98%` | `200 20% 8%` |
| `--foreground` | `200 15% 15%` | `0 0% 98%` |
| `--primary` | `271 81% 56%` | `271 81% 65%` |
| `--secondary` | `48 96% 53%` | `48 96% 60%` |
| `--destructive` | `0 84% 60%` | `0 84% 60%` |
| `--border` | `200 15% 90%` | `200 15% 20%` |

## Visual Language

### Gradients

The project heavily features custom gradients for a refined, modern look.

- **Hero Gradient:** `linear-gradient(135deg, hsl(271 81% 56%) 0%, hsl(271 70% 45%) 50%, hsl(271 60% 35%) 100%)`
- **Card Gradient:** `linear-gradient(135deg, hsl(271 81% 56% / 0.05) 0%, hsl(48 96% 53% / 0.05) 100%)`
- **CTA Gradient:** `linear-gradient(135deg, hsl(48 96% 53%) 0%, hsl(45 95% 50%) 100%)`

### Shadows and Depth

- **Small Shadow:** `0 2px 4px hsl(271 81% 56% / 0.05)`
- **Medium Shadow:** `0 4px 12px hsl(271 81% 56% / 0.1)`
- **Large Shadow:** `0 8px 24px hsl(271 81% 56% / 0.15)`
- **Glow Shadow:** `0 0 40px hsl(271 81% 56% / 0.2)`

### Transitions

- **Smooth:** `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Bounce:** `all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)`

## Animations

The project uses several key animations for "alive" UI experiences:

- `fade-in`: Opacity 0 to 1 with slight upward movement.
- `fade-in-up`: More pronounced upward movement with opacity transition.
- `scale-in`: Slight scale-up (0.9 to 1) with opacity.
- `slide-in-right`: Slide from right to left with opacity.
- `pulse-glow`: Looping opacity and scale pulse for interactive elements.

## Design Principles

1. **High Contrast:** Ensure text is legible against brand backgrounds, especially when using primary purple and secondary yellow.
2. **Dynamic Depth:** Use gradients and shadows to create a sense of layering and interactivity.
3. **Intentional Motion:** Use animations to guide the user's focus during page transitions or loading.
4. **Theme Consistency:** Always use the defined HSL variables to ensure seamless light/dark mode switching.
5. **Bold Accents:** Use the brand yellow (`secondary`) sparingly for CTA buttons and key highlights.

## Best Practices

- **Tailwind Usage:** Use semantic classes (e.g., `bg-primary`, `text-secondary`) instead of hardcoded hex values whenever possible.
- **Font Selection:** Use `Edo` for main hero headlines, `Poppins` for body text and navigation, and `Permanent Marker` for decorative emphasis.
- **Iconography:** Maintain consistent stroke weight and style throughout the application.
