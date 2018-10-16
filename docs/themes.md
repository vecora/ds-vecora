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

Theme classes can be applied to any box, and applies to everything inside that box, but not the box itself. To apply the theme to a whole page it must be applied to the `html` element, like so:

```html
<html lang="en" class="theme-dark">
```

## Live switch between themes

<div id="theme-switcher">

  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="theme-default" name="theme-class" class="custom-control-input" v-on:change="switchTheme('')">
    <label class="custom-control-label" for="theme-default">Default</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="theme-dark" name="theme-class" class="custom-control-input" v-on:change="switchTheme('theme-dark')">
    <label class="custom-control-label" for="theme-dark">Dark</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="theme-corporate" name="theme-class" class="custom-control-input" v-on:change="switchTheme('theme-corporate')">
    <label class="custom-control-label" for="theme-corporate">Corporate</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="theme-sales" name="theme-class" class="custom-control-input" v-on:change="switchTheme('theme-sales')">
    <label class="custom-control-label" for="theme-sales">Sales</label>
  </div>

</div>


## Colors

<div class="gradients">
  <div class="gradient gradient-1"></div>
  <div class="gradient gradient-2"></div>
  <div class="gradient gradient-3"></div>
  <div class="gradient gradient-4"></div>
  <div class="gradient gradient-5"></div>
  <div class="gradient gradient-6"></div>
  <div class="gradient gradient-7"></div>
  <div class="gradient gradient-8"></div>
</div>


### Gradients

### UI colors

#### Accent colors
