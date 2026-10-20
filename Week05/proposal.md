# Weekend Oven: Midterm Proposal

## 1. Concept and audience

Weekend Oven is a small baking journal for beginners who want to make something
to share on a weekend. The site will combine clear recipes with the visual
rhythm of an editorial food magazine.

The central task is simple: choose a recipe, check the ingredients, and follow
the steps without searching through unrelated material. Each recipe will keep
its practical information close to the top and offer direct links to
Ingredients and Method.

I will expand my existing chocolate brownie page into five static pages:

1. Home: a featured brownie recipe and links to the recipe collection.
2. Recipes: a small index with two recipe entries.
3. Chocolate Brownies: the recipe developed in Weeks 1-3.
4. Lemon Cookies: a second recipe page using the same layout.
5. About: the purpose of the journal and a list of content/image credits.

The second recipe and its photo still need to be prepared and credited. There
will be no accounts, shop, database, or JavaScript-dependent search.

## 2. Inspiration and visual direction

Reference website: [Food52](https://food52.com/).
Specific reference: [Alice Medrich's Best Cocoa Brownies editorial article](https://food52.com/blog/5926-alice-medrich-s-best-cocoa-brownies).

Food52 connects food writing with recipes. I want to carry that relationship
into a much smaller site: a short introduction should create interest, while
the actual recipe should stay easy to reach. The reference is a design and
content inspiration; I will use my own layouts and recipe text rather than
copying the article.

My proposed design choices are:

- A clear serif title paired with readable sans-serif navigation and body text.
- Generous spacing, thin dividers, and visible section headings.
- A featured food photograph with the project name and a short caption over it.
- Smaller recipe images and concise titles in an orderly collection below.
- White (#FFFFFF), charcoal (#242424), cherry red (#B52D42), and sage green
  (#526B55). The red marks links; sage supports secondary labels.

The large featured photo will use text only in a sufficiently quiet area. If
the image does not provide enough contrast, I will move the title into a plain
band above it rather than sacrifice readability.

## 3. Skills I can demonstrate and will use

My existing work provides concrete starting points:

| Skill | Evidence | Planned use |
| --- | --- | --- |
| Semantic HTML | Week03/index.html uses header, nav, main, article, figure, section, aside, and footer | Clear page and recipe structure |
| Lists and anchor links | The brownie page has ingredient/step lists and section links | Ingredients, Method, and jump links |
| Images and alt text | Week02 and Week03 include a local brownie photograph | Recipe photos with appropriate descriptions |
| External CSS and the box model | Week03/styles.css includes margin, padding, borders, and border-box | Consistent spacing and predictable widths |
| Flexbox | Week03/styles.css uses flex for the header and navigation | Shared navigation and a wrapping recipe index |

Positioning, hover/focus states, and text over a hero photo have appeared in
class. I plan to use them, but still need to practice implementing them myself.
For this small site I will use a visible, simple navigation instead of adding a
dropdown that the content does not need.

## 4. What I still need to learn

- How to choose media-query breakpoints based on when the content stops fitting.
- How to keep navigation usable and text readable on a narrow phone screen.
- How relative and absolute positioning work together for text over a photo.
- How to crop images consistently without stretching them.
- How to provide visible keyboard focus and check text/background contrast.
- How to reuse styles across five pages without accidentally changing all of them.

The existing Week 3 CSS contains a media query, but I need to understand and
adapt that rule rather than assume responsive layout is already mastered.

## 5. Structure and layouts

The [sitemap](site-map.md) records all five pages and their links. The
[wireframes](wireframe.md) show desktop and mobile Home layouts and a reusable
recipe-page layout. Every rectangle represents a planned content region;
photograph placeholders are deliberately low fidelity.

On desktop the recipe page places ingredients beside the numbered method.
On mobile they become one column, with Ingredients before Method. The Home
recipe index changes from two columns to one when the entries no longer fit.

## 6. Build plan after instructor approval

1. Confirm that the topic and five-page scope are appropriate.
2. Prepare the second recipe, photographs, descriptive alt text, and credits.
3. Build the shared header/footer, recipe index, and two recipe pages with HTML.
4. Add the box model, typography, flexbox, and photograph treatment in one stylesheet.
5. Add and test mobile layouts, keyboard navigation, and every page/anchor link.
6. Commit and push the project to my personal GitHub repository.

Questions for feedback: Is a two-recipe journal enough content for this scope?
Is the featured-image layout manageable at my current level? Should I simplify
the recipe layout before implementing it?
