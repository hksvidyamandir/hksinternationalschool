# Programme selection and consistent header colours

## Findings
- The four programme circles float at different heights, with a 96px gap before their shared detail area. This makes the selected programme and its content feel disconnected.
- Selection relies mostly on colour and an animated ring; hover looks similar to selection. All four controls are keyboard tab stops and lack arrow-key navigation.
- The top contact bar uses navy while the school’s orange is already used for accents and calls to action.

## Programme experience
- Keep the four circular school-photo cards, their names, grade ranges and existing descriptions. Align them on one baseline and stop continuous floating within this section.
- Use one consistent orange selection ring and a small check indicator outside the circle. Keep unselected cards navy with restrained borders; hover must not look selected. Do not add an arrow inside the circles.
- Reduce the separation and add a thin orange connection from the selected card to the top edge of the content below on desktop. Repeat the selected programme’s number, name and grade range in the detail area.
- Keep one shared detail area directly below the full row. Update its photo, heading, grade range, description and programme link together, with a short fade and stable dimensions rather than a shifting layout.
- Support click, tap, Left/Right arrows, Home/End and a single keyboard entry point for the programme choices. Associate each choice with its own accessible detail panel.
- At widths through 767px, retain a two-column card grid, compact spacing and a stacked photo/content area. Omit desktop connector lines where two rows would make them ambiguous; the check indicator and matching heading maintain the connection. After a deliberate tap, bring the detail heading into view only when it is offscreen, accounting for the fixed header.
- Keep the initial Early Years selection, existing programme text and academics destination; no automatic switching or invented school information.

## Header and colour consistency
- Change only the top contact/quick-link bar to the original theme orange, using dark navy text/icons for readable contrast.
- Use navy for hover/focus emphasis rather than orange-on-orange. Preserve all links, logo, Vidhya labels, navigation layout and current desktop/mobile visibility.
- Reuse the existing orange/navy tokens throughout the changes. Preserve the darker-orange CTA default and theme-orange hover rule; do not recolour unrelated sections.

## Technical approach
- Extract the programme interaction into a small browser-safe component using the existing design-system Tabs and Button controls.
- Keep styles scoped to the programme section; reduced-motion preferences disable transition/scroll animation. Preserve other homepage motion and all route metadata.
- Record the selection-component convention in AGENTS.md and track both requested changes in the roadmap.

## Verification
- Exercise all four choices and confirm the corresponding photo, number, heading, grade and description update together, including repeated selections and keyboard navigation.
- Check 320, 375, 767, 768, 1206 and 1440px widths for clipping, overlap, stable content sizing and a clear selected state; verify reduced-motion behaviour.
- Check header contrast and contact/navigation links; run programme interaction tests plus existing routing/SEO tests and inspect preview error logs.