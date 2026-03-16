# Tailwind CSS Cheat Sheet


## Responsive Prefixes

Tailwind is **mobile-first**. Write the mobile style, then override for larger screens.

| Prefix | Breakpoint |
|---|---|
| (none) | All screens (mobile default) |
| `sm:` | ≥ 640px |
| `md:` | ≥ 768px |
| `lg:` | ≥ 1024px |
| `xl:` | ≥ 1280px |

**Example:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns