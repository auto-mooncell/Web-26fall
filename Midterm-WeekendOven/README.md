# Weekend Oven

A three-page baking journal developed from the Week 5 proposal and the
chocolate brownie recipe from Weeks 1-3.

## Open the website

[Home](index.html) | [Chocolate Brownies](recipe.html) | [About and kitchen notes](about.html)

Open `index.html` directly in a browser, or use VS Code's Live Server.
No npm install, build step, or server is required. Images and CSS are local.

## Structure

```text
Midterm-WeekendOven/
|-- index.html           Home, featured recipe, and kitchen notes
|-- recipe.html          Ingredients, method, and baking note
|-- about.html           Journal story, kitchen notes, and credits
|-- css/style.css        Shared styles, media queries, and print styles
|-- img/                 Local photographs and the Lucide print icon
`-- README.md
```

Home links to the brownie page and to About. Recipes in the shared navigation
links to `index.html#recipes`, a section on Home rather than a fourth page.
Every page links back to Home. About includes the notes referenced on Home.

The original five-page proposal has been reduced to three pages. A second
recipe and a separate recipe-index page can be added later. There is no claim
that the instructor has approved this revision yet.

## Course concepts used

- Semantic HTML, heading hierarchy, lists, images with alt text, and links.
- External CSS, selectors, typography, colors, and reusable classes.
- Margin, padding, borders, `box-sizing: border-box`, and percentage widths.
- Flexbox for navigation, recipe features, recipe columns, and notes.
- Relative/absolute positioning for image captions and small labels.
- A local photograph as the full-width homepage background.
- Hover transitions, visible keyboard focus, and reduced-motion support.
- Media queries that turn paired layouts into a single column on mobile.
- Native ingredient checkboxes and print CSS. The only JavaScript is the
  print button's `window.print()` call; navigation and content work without it.

## Content

The recipe is adapted from my [Week 3 brownie page](../Week03/index.html).
The new version specifies a pan size, approximate preparation time and yield,
and optional walnuts. The recipe has not been independently tested as part of
this website project; the photographs are illustrative, not my baking results.

## Photography and icon credits

| Local file | Photographer and source | Use |
| --- | --- | --- |
| img/hands-and-dough.jpg | [Andy Barbour / Pexels](https://www.pexels.com/photo/woman-sculpts-a-dough-for-baking-6963715/) | Homepage background and journal photos |
| img/chocolate-brownies.jpg | [Arwen / Unsplash](https://unsplash.com/photos/close-up-of-a-freshly-baked-chocolate-brownie-fxLLu1IpDjU) | Homepage brownie feature |
| img/brownies.jpg | [Toa Heftiba / Unsplash](https://unsplash.com/photos/sliced-baked-brownies-on-foiled-tray-WPRuXYLNY68) | Recipe photo |
| img/baking-counter.jpg | [Debora Silveira / Pexels](https://www.pexels.com/photo/close-up-of-dough-and-flour-on-kitchen-counter-36912597/) | Subtle kitchen-notes background |
| img/printer.svg | [Lucide](https://github.com/lucide-icons/lucide/blob/main/icons/printer.svg) | Print button |

Photography is available under the [Pexels License](https://www.pexels.com/license/)
and [Unsplash License](https://unsplash.com/license). Photographer links also
appear on the About page. The Lucide icon uses the ISC License (included below).

```text
ISC License

Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part
of Feather (MIT). All other copyright (c) for Lucide are held by Lucide
Contributors 2022.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION
OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN
CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
```

## Remaining work

Get instructor feedback on the scope and layout, practice explaining the CSS,
and test the recipe before describing it as tested. This is a working first
version for review, not a record of instructor approval or a submitted project.
