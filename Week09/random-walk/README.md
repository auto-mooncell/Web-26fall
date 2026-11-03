# Random City Walk

Week 09 homework: the Thursday show-page generator, rebuilt around the cities
from my midterm, [City, Remembered](../../Midterm/README.md). Every reload picks
a city, the weather, a group size and a three-to-six-stop route, then works out
the distance, the time and what everyone spends. Nothing on the page is typed
into the HTML; the script at the bottom of `index.html` fills in every element.

[Open the page](index.html)

## Where each requirement is

| Requirement | In `index.html` |
| --- | --- |
| Three or more arrays of different lengths | Section 1: `cities` (4), `stops` (8), `weathers` (5), `days` (3), `accents` (5), `taglines` (3) |
| `pickRandom()` and `randomBetween()` | Section 2, used throughout section 3 |
| Real arithmetic | Section 4: walking time from distance ÷ speed, total minutes, spend per person, group total, amount over budget |
| `.toFixed(2)` only for display | Money is added up as numbers and formatted only when it is written to the page |
| Two booleans from comparisons | Section 6: `needsAJacket`, `isLongWalk`, `isOverBudget` |
| `if / else if / else`, all three reachable | Section 7. Over 300 reloads: over budget 120, a long day 66, an easy afternoon 114 |
| Ternary for a value | Section 8: `jacketNote`, `peopleWord` (so it never says "1 people"), `timeText`; also the stripe class and the clock's leading zero |
| Template literal with three or more variables | Section 9: `summary`, `whereWhen`, `finePrint` |
| `for` loop building a list with `innerHTML` | Section 5: the route |
| `%` doing something | Striped rows (`i % 2`), minutes past the hour (`arrival % 60`, `totalMinutes % 60`), and `(startIndex + i) % stops.length` so a walk never repeats a stop |
| Everything via `textContent` / `innerHTML` | Section 10 |
| Random image | The city's photo, chosen with the same index as the city so they always match |
| Random accent colour | Last line of section 10, with `var(--accent)` in the stylesheet |

## Edge cases checked

I reloaded the page 300 times with a script and checked every result: no
`undefined`, `NaN` or `[object Object]`, no long decimals, no negative amounts,
no "1 people", no clock times like `14:5`, no repeated stops, and the photo
always loaded. A walk under an hour prints as "57 min" rather than "0 h 57 min".

## Photos

The four photos are resized copies from the midterm, credited on the page:
Aaron Sebastian / Unsplash (New York), James Pere / Unsplash (Tokyo),
JLPC / CC BY-SA 3.0 (Paris), and SSYoung / CC BY-SA 4.0 (Shanghai).
