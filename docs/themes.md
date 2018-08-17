---
layout: default
title: Themes
description: Themes are meant to, together with layouts, give a greater sense of order while browsing around the site, by visually telling the user what section he is viewing.
---

## Classes

| Theme     | Class              |
| --------- |--------------------|
| Default   | No class required. |
| Dark      | `theme-dark`       |  
| Corporate | `theme-corporate`  |
| Sales     | `theme-sales`      |

Theme classes can be applied any box, and applies to everything inside that box, but not the box itself. To apply the theme to a whole page it must be applied to the `html` element, like so:

```html
<html lang="en" class="theme-dark">
```

## Theme switcher

<ul class="nav nav-pills" id="theme-switcher">
  <li class="nav-item">
    <a href="#" class="nav-link active" v-on:click.prevent="switchTheme('', $event)">Default</a>
  </li>
  <li class="nav-item">
    <a href="#" class="nav-link" v-on:click.prevent="switchTheme('theme-dark', $event)">Dark</a>
  </li>
  <li class="nav-item">
    <button class="nav-link" v-on:click.prevent="switchTheme('theme-corporate', $event)">Corporate</button>
  </li>
  <li class="nav-item">
    <button class="nav-link" v-on:click.prevent="switchTheme('theme-sales', $event)">Sales</button>
  </li>
</ul>
