---
layout: default
title: Themes
description:
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
