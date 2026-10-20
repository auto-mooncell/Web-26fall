# City, Remembered

A small photo archive about everyday urban details in New York, Tokyo, and
Paris: streets, storefronts, signs, and people rather than famous landmarks.
It is aimed at people who like photography, design, and travel, and asks them
to slow down and notice the places they usually walk past.

This is the built version of the proposal in
[`Week05/city-memory/`](../Week05/city-memory/README.md).

**Live site:** https://auto-mooncell.github.io/Web-26fall/Midterm/
(available once this folder is pushed and GitHub Pages is turned on for the repository)

## Pages

- [Home](index.html): hero, three city previews, the archive idea, a story preview, and the "Share a memory" contact form
- [City Album](atlas.html): a three-frame route slideshow, then eight photographs per city in anchored sections (`#new-york`, `#tokyo`, `#paris`): five shown at first, three more behind a "Show more" button, plus a full credits list
- [Photo Story](story.html): a short New York photo essay

## Sitemap and wireframe

![Sitemap](../Week05/city-memory/sitemap.png)

![Desktop home wireframe](../Week05/city-memory/wireframe-desktop.png)

The finished site follows the proposal's three-page structure. Changes from
the proposal: eight photos per city instead of three (five visible, three behind "Show more"), a contact form on the
home page, and one small JavaScript slideshow on the album page.

## Course concepts used

- Semantic HTML: `header`, `nav`, `main`, `section`, `article`, `figure`/`figcaption`, `footer`, and real heading levels
- Alt text written for what each photograph actually shows
- CSS variables at `:root` for every colour, with a light accent for dark sections so text stays readable
- Flexbox for the header, navigation, buttons, and captions
- CSS Grid for the city cards, the album (one large frame plus a 2 × 2 block), the story layout, and the form
- Positioning for text over the hero and the city cards
- Media queries at `960px` and `768px`; everything stacks to one column on a phone
- Transitions and hover transforms on buttons, cards, and the slideshow
- A FormSpree contact form (Week 7): labels tied to inputs with `for`/`id`, `name` on every field, `required`, `method="POST"`
- A native `<details>`/`<summary>` element for "Show more" frames, with a small `@keyframes` fade-in (no JavaScript)
- `prefers-reduced-motion` support: every animation below is switched off for people who ask for less motion

## Motion and ambient light

- **Ambient light**, inspired by [bilibili-ambilight](https://github.com/iceorange-dev/bilibili-ambilight):
  that extension paints a blurred, enlarged copy of the video behind the player so its colours spill
  onto the page. Here it is pure CSS. Each photo sits in a `.glow` wrapper with a second copy of
  itself (`.glow-light`) behind it (`z-index: -1`), blurred with `filter: blur() saturate()` and
  enlarged with `transform: scale()`. On the dark bands (the album slideshow, the home archive
  section, and the story's opening photo) it is always on, with a slow `@keyframes` "breathing"
  scale. When the slideshow changes frame, the light dims and returns with the new photo's colours.
- **Hover:** album and story photos lift and light up the space around them, most strongly in the dark Tokyo section.
- **Page openings:** the home hero photo slowly pulls back (`scale(1.12)` → `scale(1)`) while the title lines rise in one after another (`animation-delay`).
- **Scroll reveal:** cards fade up as they enter the screen using CSS `animation-timeline: view()`, with later columns slightly delayed. Browsers that do not support it simply show the cards.

## JavaScript

`js/site.js` does two things, both commented in the file:

1. **Mobile menu:** the Menu button toggles a class on the navigation and keeps `aria-expanded` in sync.
2. **Route slideshow:** a `routeData` object holds three frames per city. Clicking a city, an arrow, or a thumbnail changes `activeCity` / `activeFrame`, and `render()` copies that frame's image and text into the page, and gives the ambient light behind it the same photo. The arrows use `(frame + step + count) % count` so going back from the first frame wraps to the last.

Everything else, including the album and navigation, works without JavaScript.

## Contact form setup

The form posts to FormSpree. Before it can send email:

1. Create a form at [formspree.io](https://formspree.io/).
2. Replace `YOUR_FORM_ID` in the `action` of the form in `index.html` with your form's ID.
3. Submit a test message and confirm it arrives.

## Images

All photographs are by other photographers (none are mine). They were resized
to at most 1600px and compressed to roughly 100–500 KB each.

| File | Photographer / license | Source |
| --- | --- | --- |
| `new-york.jpg` | Aaron Sebastian / Unsplash License | [Unsplash](https://unsplash.com/photos/new-york-street-during-daytime-XWl8Pu3HrgY) |
| `nyc-diner.jpg` | Frank Schulenburg / CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Brooklyn_Diner,_New_York_City_(2024)-L1006207.jpg) |
| `nyc-park.jpg` | Jet Lowe / Public domain | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Central_Park_New_York_City_New_York_23_cropped.jpg) |
| `nyc-ferry.jpg` | Jakub Hałun / CC BY 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Liberty_Island_Ferry_Terminal,_New_York_City,_20231003_1438_1942.jpg) |
| `nyc-brooklyn-bridge.jpg` | Unsplash License (photographer to confirm) | [Unsplash image](https://images.unsplash.com/photo-1522083165195-3424ed129620) |
| `nyc-street.jpg` | Mike Peel / CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:At_New_York_City_2024_366.jpg) |
| `nyc-midtown-skyline.jpg` | Unsplash License (photographer to confirm) | [Unsplash image](https://images.unsplash.com/photo-1534430480872-3498386e7856) |
| `nyc-empire-evening.jpg` | Unsplash License (photographer to confirm) | [Unsplash image](https://images.unsplash.com/photo-1485871981521-5b1fd3805eee) |
| `tokyo.jpg` | James Pere / Unsplash License | [Unsplash](https://unsplash.com/photos/a-man-and-woman-walking-down-a-street-XkQv2du-RCU) |
| `tokyo-cups.jpg` | Basile Morin / CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cream_and_red_coffee_cup-shaped_balconies,_Niimi_Tableware,_Kappabashi_Dougu_Street,_Tokyo,_Japan.jpg) |
| `tokyo-mirrors.jpg` | Basile Morin / CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Street_crowd_reflecting_in_the_polyhedral_mirrors_of_the_station_Tokyu_Plaza_Omotesando,_Harajuku,_Tokyo,_Japan.jpg) |
| `tokyo-akihabara.jpg` | Ximonic / CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Akihabara_Main_Street_open_for_pedestrians,_Chiyoda,_Tokyo,_2024_May.jpg) |
| `tokyo-hiroo.jpg` | Syced / CC0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pedestrian-only_afternoon_in_Hiroo_%E5%BA%83%E5%B0%BE%E5%95%86%E5%BA%97%E8%A1%97.jpg) |
| `tokyo-akihabara-neon.jpg` | Unsplash License (photographer to confirm) | [Unsplash image](https://images.unsplash.com/photo-1540959733332-eab4deabeeaf) |
| `tokyo-curves.jpg` | Unsplash License (photographer and location to confirm) | [Unsplash image](https://images.unsplash.com/photo-1518005020951-eccb494ad742) |
| `tokyo-tower-rain.jpg` | Unsplash License (photographer to confirm) | [Unsplash image](https://images.unsplash.com/photo-1536098561742-ca998e48cbcc) |
| `paris.jpg` | T (@tanyabarrow) / Unsplash License | [Unsplash](https://unsplash.com/photos/parisian-street-with-cafes-and-apartment-buildings-LLPnMGoedUM) |
| `paris-rue.jpg` | JLPC / CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Paris_Rue_R%C3%A9aumur_2013.jpg) |
| `paris-cafe-gare.jpg` | Styx / CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Caf%C3%A9_de_la_Gare_Paris.jpg) |
| `paris-trocadero.jpg` | Lionel Allorge / CC BY-SA 3.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Place_du_Trocad%C3%A9ro-et-du-11-Novembre_%C3%A0_Paris_le_23_avril_2015_-_36.jpg) |
| `paris-pont-alexandre.jpg` | Unsplash License (photographer to confirm) | [Unsplash image](https://images.unsplash.com/photo-1499856871958-5b9627545d1a) |
| `paris-eiffel-seine.jpg` | Unsplash License (photographer to confirm) | [Unsplash image](https://images.unsplash.com/photo-1502602898657-3e91760cbb34) |
| `paris-eiffel-above.jpg` | Unsplash License (photographer to confirm) | [Unsplash image](https://images.unsplash.com/photo-1511739001486-6bfe10ce785f) |
| `paris-notre-dame.jpg` | Dietmar Rabich / CC BY-SA 4.0 | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Paris,_Notre_Dame_--_2014_--_1458-65.jpg) |

## Inspiration

- [Thisispaper Travel Guides](https://www.thisispaper.com/guides): city-based browsing, large images, short descriptions
- [Getty 12 Sunsets](https://12sunsets.getty.edu/map/): photographs tied to place; the album's route slideshow is a much smaller take on this
- [My NYC in Color](https://mynycincolor.com/): themed collections of everyday city life

The site borrows these ideas, not their layouts, code, or images.

## Next steps

- Confirm the photographer names for the Unsplash images marked above, and where `tokyo-curves.jpg` was taken
- Replace more stock photos with my own photographs
- Turn submitted memories into captions in the album
