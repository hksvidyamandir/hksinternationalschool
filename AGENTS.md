<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Site nav and contact details live in src/lib/site.ts; every route builds head() via src/lib/seo.ts — keeps menu, footer and SEO consistent.
- Scraped school photos are CDN asset pointers exposed through src/assets/site/index.ts — import `img` rather than raw files.
- `img.logo` is the original stacked logo (favicon source); `img.logoFull` is a horizontal rearrangement of the same artwork pixels for header and footer.
- Homepage presentation and interactive sections live in a dedicated browser-safe site component with scoped global styles, keeping the index route focused on page metadata.
- HeroFilm plays a CDN-hosted, pre-rendered looping photo-and-doodle film; caption and scene controls follow video time, and reduced-motion pauses autoplay.
- FamilyStories owns a five-card accordion and accessible reading dialogs; centre expansion is restored after pointer exit, touch selects before opening, and editorial school stories are distinguished from parent quotes because additional testimonials must not be invented. School photos are contextual imagery, not portraits of the quoted parents.
- Homepage motion is progressively enhanced through useHomeMotion and scoped CSS; keep content visible without JavaScript, preserve existing transforms, and bypass motion for reduced-motion preferences.
- ExperienceStories owns staggered quote-and-photo story cards; distinguish actual parent quotes from school editorial stories and link each card to a relevant existing page.
- Scope mobile layout refinements to max-width: 767px and use minmax(0, 1fr) tracks for text beside fixed controls; preserve existing desktop breakpoints above that boundary.
- VidyaIcons provides browser-safe decorative SVG icons through the shared Vidya data so desktop and mobile labels use the same artwork.
- AdvantageIcon owns the advantage section's decorative SVG artwork, keeping its icon set separate from navigation icons.
- CTA colors use shared semantic tokens and the site-cta treatment; section-specific actions share that treatment so button states remain consistent without changing navigation controls.
- ProgrammeSelector owns programme data and accessible controlled Tabs with matched detail panels; scoped selection styles keep every programme visibly connected to its content without changing other homepage sections.
- Photo shading uses the shared neutral photo-black token (photo-shade utility); keep brand-colour section surfaces and interactive selection accents separate from image overlays.
- VisitChooser shares virtual visit and campus tour choices across the hero, Our Campus and final admissions visit controls; validated /contact?visit= links carry the choice into the enquiry form and message.
- CurriculumShowcase owns a manually controlled four-card accordion with the first card initially expanded and hover, focus and tap selection; no timer changes the user's selection.
- Keep the curriculum accordion concise; the lower HKS Pillars section displays the detailed Vidya descriptions and activity lists so full information remains readable without hover.
- LifeGallery owns the eight school-life photos and an accessible image dialog with contained full-image rendering, keyboard navigation and focus restoration, keeping gallery interactions separate from page links.
- SchoolChat provides a right-side, session-only school FAQ chat using browser-safe school-chat replies and shared contact details; it never claims to be a live agent or invents fees.
