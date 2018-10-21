---
layout: default
title: Design
description: Themes are meant to, together with layouts, give a greater sense of order while browsing around the site, by visually telling the user what section he is viewing.
---

## Themes

### Classes

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

### Live switch between themes

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



### Gradients

<div class="docs-gradients-container">
  <div class="docs-gradient-item"><div class="docs-gradient docs-gradient-1"></div><div class="docs-color-codes"></div></div>
  <div class="docs-gradient-item"><div class="docs-gradient docs-gradient-2"></div><div class="docs-color-codes"></div></div>
  <div class="docs-gradient-item"><div class="docs-gradient docs-gradient-3"></div><div class="docs-color-codes"></div></div>
  <div class="docs-gradient-item"><div class="docs-gradient docs-gradient-4"></div><div class="docs-color-codes"></div></div>
  <div class="docs-gradient-item"><div class="docs-gradient docs-gradient-5"></div><div class="docs-color-codes"></div></div>
  <div class="docs-gradient-item"><div class="docs-gradient docs-gradient-6"></div><div class="docs-color-codes"></div></div>
  <div class="docs-gradient-item"><div class="docs-gradient docs-gradient-7"></div><div class="docs-color-codes"></div></div>
  <div class="docs-gradient-item"><div class="docs-gradient docs-gradient-8"></div><div class="docs-color-codes"></div></div>
</div>

Gradients can be played with [here](https://www.css-gradient.com/).

#### Moving gradient background

<div class="docs-gradients-container">
  <div class="docs-gradient-item">
    <div class="moving-gradient-bg"></div>
  </div>
</div>

### UI colors

NOTES:
background
shadow
Text color [$sg-text-color]


#### Accent colors

NOTES:
blue
orange
(only for corporate and sales themes?)


## Logo

Default color is text color.

{% capture example %}
<div class="logo"></div>
{% endcapture %}
{% include example.html content=example %}

### Outline

{% capture example %}
<div class="logo outline"></div>
{% endcapture %}
{% include example.html content=example %}

### Sizes

{% capture example %}
<div class="logo massive"></div>
{% endcapture %}
{% include example.html content=example %}

### Usage in text
