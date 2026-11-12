# Refine the HKS top menu

## Design
- Replace the four standard icons with a coordinated set of custom line-drawn icons: a seedling over field rows, a ball with a trophy, an open book with a compass, and a heritage pavilion. Keep the exact Vidhya names and existing brand colours; add no new descriptions or pages.
- Make “Admissions Open 2026–27” visually quieter with a lighter charcoal tone and medium-weight lettering, while keeping it readable on the white header. Do not use near-white text that disappears against the background.
- Add a subtle, thin horizontal divider between the Vidhya/admissions row and the main navigation, spanning the navigation area rather than cutting through the logo.
- Preserve the existing logo, desktop navigation, contact strip and menu destinations.

## Phone menu: up to 767px
- Keep the logo and menu toggle in a stable two-column header with comfortable touch targets.
- Arrange the four icon-and-name labels in a two-column grid inside the opened menu, with no clipped names or horizontal scrolling.
- Place the admissions label below the four labels, followed by the same thin divider and the navigation links.
- Make the complete navigation available: expandable page groups, Apply Now, enquiry, campus tour, application, phone and email links. Keep long email text contained and readable.
- Ensure the opened menu scrolls within the available screen height; close it after choosing a destination, and support Escape and clear keyboard focus.
- Limit new mobile layout overrides to 767px and below, preserving the established presentation from 768px upward.

## Technical approach
- Create a small, browser-safe custom SVG icon module with a consistent stroke weight and shared sizing; connect it to the existing Vidhya data in `src/lib/site.ts`.
- Refine `SiteHeader` using existing Button components and semantic colour/border tokens. Keep the SVG icons decorative because each already has a visible name.
- Record the icon-module convention in `AGENTS.md` and track the implementation in the existing roadmap.
- Leave page content and existing page-specific SEO metadata unchanged.

## Verification
- Check the header at 320, 375, 390, 640 and 767px, plus the 768px boundary and desktop widths including the current 1206px view.
- Exercise menu opening, grouped links, Escape, destination navigation, contact links and scrolling; verify no clipped controls or horizontal overflow.
- Run the existing navigation and SEO tests and review preview error logs before finishing.