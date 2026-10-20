# Weekend Oven Sitemap

These are planned project files, not existing HTML pages.

```text
Weekend Oven
|
+-- Home                         index.html
|   +-- Featured brownie ------> recipes/brownies.html
|   +-- View all recipes ------> recipes/index.html
|
+-- Recipes                      recipes/index.html
|   +-- Chocolate Brownies ----> recipes/brownies.html
|   +-- Lemon Cookies ---------> recipes/lemon-cookies.html
|
+-- About                        about.html
    +-- Project purpose
    +-- Recipe and photo credits
```

## Shared navigation

Every page has Home, Recipes, and About in the same order. The project name
links to Home. Each recipe page also links back to the recipe index and to the
other recipe under Related Recipe.

| Starting page | Link | Destination |
| --- | --- | --- |
| Any page | Home / Weekend Oven | Home |
| Any page | Recipes | Recipe index |
| Any page | About | About and credits |
| Home or recipe index | Chocolate Brownies | Brownie recipe |
| Home or recipe index | Lemon Cookies | Cookie recipe |
| Brownie recipe | Related Recipe | Cookie recipe |
| Cookie recipe | Related Recipe | Brownie recipe |

Inside each recipe page, Ingredients and Method links go to `#ingredients`
and `#method` on that same page. Those are sections, not extra pages.

## Main visitor journey

Home -> Recipes -> Chocolate Brownies -> Ingredients -> Method.

A visitor can also open the featured brownie recipe directly from Home.
No navigation depends on JavaScript or hover alone.
