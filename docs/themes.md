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

## Switch between themes

<div id="theme-switcher">

  <div class="custom-control custom-radio" v-on:click="switchTheme('', $event)">
    <input type="radio" id="theme-default" name="theme-class" class="custom-control-input">
    <label class="custom-control-label" for="theme-default">Default</label>
  </div>
  <div class="custom-control custom-radio" v-on:click="switchTheme('theme-dark', $event)">
    <input type="radio" id="theme-dark" name="theme-class" class="custom-control-input">
    <label class="custom-control-label" for="theme-dark">Dark</label>
  </div>
  <div class="custom-control custom-radio" v-on:click="switchTheme('theme-corporate', $event)">
    <input type="radio" id="theme-corporate" name="theme-class" class="custom-control-input">
    <label class="custom-control-label" for="theme-dark">Corporate</label>
  </div>
  <div class="custom-control custom-radio" v-on:click="switchTheme('theme-sales', $event)">
    <input type="radio" id="theme-sales" name="theme-class" class="custom-control-input">
    <label class="custom-control-label" for="theme-dark">Sales</label>
  </div>

</div>
