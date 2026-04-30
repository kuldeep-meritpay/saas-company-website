# Design Brief

## Direction

Modern SaaS tech-forward showcase — professional, high-conversion landing site blending editorial clarity with bold digital confidence inspired by Stripe and Shopify.

## Tone

Refined boldness: minimal restraint on hero and featured sections, maximum impact with electric blue/purple accents, sophisticated glassmorphism without over-decoration.

## Differentiation

Gradient-accent CTAs with interactive scale/hover, glassmorphic hero overlay section, layered card-based product showcase, smooth entrance animations, dual theme (dark/light) with seamless toggle.

## Color Palette

| Token      | OKLCH          | Role                                |
|------------|----------------|-------------------------------------|
| background | 0.98 0.008 230 | Light mode: cool off-white          |
| foreground | 0.18 0.015 230 | Light mode: deep cool text          |
| primary    | 0.50 0.20 260  | Light mode: electric blue, CTAs     |
| accent     | 0.60 0.18 290  | Light mode: vivid purple highlights |
| card       | 1.0 0.004 230  | Light mode: white card surface      |
| primary (dark) | 0.70 0.24 260  | Dark mode: bright electric blue     |
| accent (dark) | 0.75 0.22 290  | Dark mode: vivid purple accents     |
| background (dark) | 0.14 0.018 260  | Dark mode: deep charcoal           |

## Typography

- Display: Space Grotesk — hero headlines, section headings, badges; modern geometric weight and rhythm
- Body: DM Sans — paragraphs, labels, UI text; clean geometric forms, excellent legibility in both themes
- Scale: hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold`, label `text-xs font-semibold uppercase tracking-wider`, body `text-base`

## Elevation & Depth

Multi-layer card hierarchy: cards have soft borders and shadow-elevated for presence; glassmorphic overlays use backdrop-blur with semi-transparent backgrounds; hero section combines gradient background with elevated glass card.

## Structural Zones

| Zone    | Background           | Border                | Notes                          |
|---------|----------------------|----------------------|--------------------------------|
| Header  | card background      | border-b subtle      | Fixed, theme toggle visible    |
| Hero    | gradient overlay     | transparent           | Full-height, glassmorphic card |
| Content | alternating bg/muted | none                  | Odd sections: bg-muted/20     |
| Cards   | card surface         | border subtle         | shadow-elevated, 8-12px radius |
| Footer  | muted/40             | border-t subtle       | Darker zone, cohesive closing  |

## Spacing & Rhythm

Spacious gap rhythm: sections separated by `gap-16 md:gap-20`; content padding `px-4 md:px-8`; cards use consistent internal padding `p-6 md:p-8`; alternating section backgrounds create visual breathing room.

## Component Patterns

- **Buttons**: Primary gradient (electric blue → purple), 8px radius, scale on hover. Secondary: outline style with border-primary, fills on hover. Consistent 44px minimum touch target.
- **Cards**: Rounded 8-12px, subtle border, shadow-elevated; optional glass-blur for overlay sections
- **Badges**: Compact uppercase labels, accent color background, pill-shaped (full radius)

## Motion

- Entrance: fade-in-up (0.5s ease-out) staggered on section load; applies to cards and hero overlay
- Hover: button scale(1.05) + shadow-lg (200ms smooth transition); card shadow intensify on hover
- Decorative: none — all motion serves functional clarity and feedback

## Constraints

- No generic defaults: all colors derived from OKLCH tokens, no arbitrary hex/rgb
- No full-page gradient backgrounds: depth layering via card elevation and zone background variation
- Animations are purposeful only: entrance + interaction feedback, no arbitrary floating or pulsing
- Maintain AA+ contrast in both light and dark modes; dark mode backgrounds precisely calibrated for text readability

## Signature Detail

Gradient-to-gradient button system: primary CTA transitions electric blue → purple with interactive scale and elevation, instantly differentiating high-conversion elements from outline secondary actions and reinforcing brand confidence.

