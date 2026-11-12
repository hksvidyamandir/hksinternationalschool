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
- FamilyStories owns the homepage testimonial cards and accessible reading dialogs; school photos are contextual imagery, not portraits of the quoted parents.
- Homepage motion is progressively enhanced through useHomeMotion and scoped CSS; keep content visible without JavaScript, preserve existing transforms, and bypass motion for reduced-motion preferences.
- ExperienceStories owns staggered quote-and-photo story cards; distinguish actual parent quotes from school editorial stories and link each card to a relevant existing page.
- Scope mobile layout refinements to max-width: 767px and use minmax(0, 1fr) tracks for text beside fixed controls; preserve existing desktop breakpoints above that boundary.
- VidhyaIcons provides browser-safe decorative SVG icons through the shared Vidhya data so desktop and mobile labels use the same artwork.
