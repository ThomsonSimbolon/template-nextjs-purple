# Design Tokens Reference

Complete design system documentation for the Purple AI Admin Dashboard theme. Use these tokens to ensure consistency across all components and pages.

---

## Color Palette

### Background Colors
| Token | Value | Usage |
|-------|-------|-------|
| `background.DEFAULT` | `#0B0A17` | Main app background |
| `background.secondary` | `#120F2E` | Navbar, sidebar, secondary surfaces |
| `surface` | `#2D1E5F` | Cards, tables, elevated components |

### Brand Colors
| Token | Value | Usage |
|-------|-------|-------|
| `primary` | `#5B31D6` | Primary actions, active states, focus rings |
| `accent` | `#8B5CF6` | Hover states, highlights, secondary branding |

### Text Colors
| Token | Value | Usage |
|-------|-------|-------|
| `text.primary` | `#FFFFFF` | Primary content, headings |
| `text.secondary` | `#D1D5DB` | Descriptions, labels |
| `text.muted` | `#6B7280` | Placeholders, muted content |

### Status Colors
| Color | Shades | Usage |
|-------|--------|-------|
| Green | `green-400`, `green-500` | Success states, completed |
| Yellow | `yellow-400`, `yellow-500` | Warnings, pending |
| Red | `red-400`, `red-500` | Errors, destructive actions |
| Blue | `blue-400`, `blue-500` | Info, neutral notifications |

---

## Spacing Scale

### Standard Spacing
| Purpose | Value | Example Usage |
|---------|-------|---------------|
| Card padding | `p-8` (32px) | Primary card containers |
| Section padding | `p-6 lg:p-8` | Responsive page content |
| Input padding | `px-4 py-3` | Form inputs, search bars |
| Button padding (md) | `px-4 py-2.5` | Standard button size |

### Margin & Gaps
| Purpose | Value | Example Usage |
|---------|-------|---------------|
| Page header bottom | `mb-10` (40px) | After PageHeader component |
| Major section gap | `mb-12` (48px) | Between stats grid and tables |
| Related items | `mb-8` (32px) | Between form sections |
| Grid gap | `gap-6` (24px) | Stat cards, chart grids |
| Flex gap | `gap-4` (16px) | Icon + text pairs |

---

## Typography

### Heading Hierarchy
```typescript
// Page Title (h1)
className="text-3xl sm:text-4xl font-bold text-white tracking-tight"

// Section Title (h2)
className="text-xl font-semibold text-white"

// Card/Subsection Title (h3)
className="text-lg font-semibold text-white"

// Stat Value
className="text-4xl font-bold text-white"
```

### Font Weights
- `font-bold` (700) - Page titles, stat values
- `font-semibold` (600) - Section headers, active nav items, badges
- `font-medium` (500) - Labels, table headers

### Text Sizing
- Page descriptions: `text-base` (16px)
- Body text: `text-sm` (14px)
- Labels: `text-sm` or `text-xs` (14px or 12px)
- Table headers: `text-xs uppercase tracking-wider`

---

## Shadows & Effects

### Box Shadows
```css
/* Default purple glow */
shadow-glow: 0 0 20px rgba(139, 92, 246, 0.3)

/* Large purple glow (hover states) */
shadow-glow-lg: 0 0 30px rgba(139, 92, 246, 0.4)

/* Subtle elevation */
shadow-sm: Tailwind default small shadow
```

### Border Opacity Patterns
- Default: `border-primary/20` - Subtle purple tint
- Hover: `border-primary/40` - Medium emphasis
- Active/Strong: `border-primary/50` - Higher emphasis
- Table borders: `border-surface/20` to `border-surface/50`

---

## Border Radius

| Size | Class | Pixels | Usage |
|------|-------|--------|-------|
| Extra Large | `rounded-xl` | 12px | Cards, buttons, inputs, modals |
| Large | `rounded-lg` | 8px | Small cards, nav items |
| Full | `rounded-full` | 100% | Badges, avatars, icon containers |

---

## Transitions & Animations

### Standard Transitions
```typescript
// Color transitions (default)
"transition-colors"

// Multiple properties (buttons, cards)
"transition-all duration-200"

// Shadows only (hover glows)
"transition-shadow duration-300"

// Transform only (scales, rotations)
"transition-transform"
```

### Micro-interactions
```typescript
// Button press feedback
"active:scale-95"

// Sidebar collapse icon
"group-hover:scale-110"

// Loading spinner
"animate-spin"
```

---

## Component Patterns

### Standard Card
```typescript
className="bg-surface rounded-xl p-8 border border-primary/20 shadow-sm hover:shadow-glow transition-shadow duration-300"
```

### Table Container
```typescript
className="bg-surface rounded-xl border border-primary/20 overflow-hidden shadow-sm hover:shadow-glow transition-shadow duration-300"
```

### Table Header Row
```typescript
className="border-b border-surface/50 bg-background-secondary/20"
```

### Table Header Cell
```typescript
className="text-left px-6 py-4 text-text-secondary text-xs font-bold uppercase tracking-wider"
```

### Table Data Row
```typescript
className="border-b border-surface/20 last:border-0 hover:bg-surface/50 transition-colors duration-150"
```

### Table Data Cell
```typescript
className="px-6 py-5 text-text-primary"
```

### Primary Button
```typescript
className="px-4 py-2.5 bg-primary hover:bg-accent text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg active:scale-95 transition-all duration-200"
```

### Form Input
```typescript
className="w-full px-4 py-3 bg-surface rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
```

### Search Input
```typescript
className="w-full pl-10 pr-4 py-3 bg-surface rounded-xl border border-primary/20 text-white placeholder:text-text-muted focus:outline-none focus:border-primary transition-colors"
```

### Badge (Medium)
```typescript
className="px-3.5 py-1.5 text-sm font-semibold rounded-full border"

// Variants
"bg-green-500/20 text-green-400 border-green-500/50" // Success
"bg-yellow-500/20 text-yellow-400 border-yellow-500/50" // Warning
"bg-red-500/20 text-red-400 border-red-500/50" // Error
```

---

## Layout Patterns

### Page Container (Applied in layout.tsx)
```typescript
<main className="p-6 lg:p-8">
  <div className="max-w-[1600px] mx-auto">
    {children}
  </div>
</main>
```

### PageHeader
```typescript
<PageHeader
  title="Page Title"
  description="Optional description"
  actions={<Button>Action</Button>}
/>
// Renders with: mb-10, text-3xl sm:text-4xl
```

### Stats Grid
```typescript
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
  <StatCard ... />
</div>
```

### Two-Column Grid
```typescript
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
  <Card />
  <Card />
</div>
```

### Vertical Stack
```typescript
<div className="space-y-8">
  <Section />
  <Section />
</div>
```

---

## State Patterns

### Loading State
```typescript
import { LoadingState } from '@/components/ui/LoadingState';

<LoadingState message="Loading..." />
<LoadingState size="lg" fullScreen />
```

### Empty State
```typescript
import { EmptyState } from '@/components/ui/EmptyState';

<EmptyState
  title="No items found"
  description="Get started by adding your first item."
  action={{ label: "Add Item", onClick: handleAdd }}
/>
```

### Error State
```typescript
import { ErrorState } from '@/components/ui/ErrorState';

<ErrorState
  message="Failed to load data"
  onRetry={handleRetry}
/>
```

---

## Gradients

### Purple Gradient (Utility Class)
```css
.gradient-purple {
  background: linear-gradient(135deg, #5B31D6 0%, #8B5CF6 100%);
}
```

Usage: Icon backgrounds, stat card icons, decorative elements

### Text Gradient (Utility Class)
```css
.text-gradient {
  background: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

Usage: Logo text, decorative headings

---

## Best Practices

### Do's ✅
- Use semantic color tokens (`bg-surface`, `text-primary`) over hardcoded values
- Apply consistent spacing scale (`gap-6`, `mb-12`, `p-8`)
- Use hover states on interactive elements (`hover:shadow-glow`)
- Add subtle transitions (`transition-shadow duration-300`)
- Maintain visual hierarchy with font sizes (4xl → xl → lg)

### Don'ts ❌
- Don't use arbitrary spacing values outside the scale
- Don't mix padding sizes within the same component type
- Don't add complex animations without approval
- Don't use colors outside the defined palette
- Don't skip hover/active states on clickable elements

---

## Quick Reference

### Most Common Class Combinations

**Card:**
```
bg-surface rounded-xl p-8 border border-primary/20 shadow-sm hover:shadow-glow transition-shadow duration-300
```

**Section Title:**
```
text-xl font-semibold text-white mb-6
```

**Interactive Row:**
```
border-b border-surface/20 hover:bg-surface/50 transition-colors px-6 py-5
```

**Primary Action:**
```
px-4 py-2.5 bg-primary hover:bg-accent text-white font-medium rounded-xl shadow-glow hover:shadow-glow-lg active:scale-95
```
