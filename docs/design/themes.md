---
layout: default
title: Themes
description:
---

## Classes

| Theme     | Class              |
| --------- |--------------------|
| Default   | No class required. |
| Dark      | `--dark`           |  
| Corporate | `--corporate`      |
| Sales     | `--sales`          |
| Sales     | `--book`           |



Theme classes can be applied to any element, and applies to everything inside that element, _but not the element itself_. To apply the theme to a whole page it must be applied to the `html` element, like so:

```html
<html lang="en" class="--book">
```

## Live switch between themes

<div id="theme-switcher">

  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="--default" name="theme-class" class="custom-control-input" v-on:change="switchTheme('')">
    <label class="custom-control-label" for="theme-default">Default</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="--dark" name="theme-class" class="custom-control-input" v-on:change="switchTheme('--dark')">
    <label class="custom-control-label" for="--dark">Dark</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="--corporate" name="theme-class" class="custom-control-input" v-on:change="switchTheme('--corporate')">
    <label class="custom-control-label" for="theme-corporate">Corporate</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="--sales" name="theme-class" class="custom-control-input" v-on:change="switchTheme('--sales')">
    <label class="custom-control-label" for="theme-sales">Sales</label>
  </div>
  <div class="custom-control custom-radio custom-control-inline">
    <input type="radio" id="--book" name="theme-class" class="custom-control-input" v-on:change="switchTheme('--book')">
    <label class="custom-control-label" for="theme-sales">Book</label>
  </div>

</div>
