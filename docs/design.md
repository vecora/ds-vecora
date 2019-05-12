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

### UI colors

NOTES:
background
shadow
Text color [$sg-text-color]


### Accent colors

NOTES:
blue
orange
(only for corporate and sales themes?)


## Gradients

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

### Animated gradients

<div class="docs-gradients-container">
  <div class="docs-gradient-item">
    <div class="docs-gradient moving-gradient-bg"></div>
  </div>
</div>

#### In text

{% capture example %}
<h1 class="display-2 moving-gradient-bg">Animated gradient</h1>
{% endcapture %}
{% include example.html content=example %}

#### In logo

{% capture example %}
<div class="vecora logo huge outline center moving-gradient-bg"></div>
{% endcapture %}
{% include example.html content=example %}


## Logo

Default color is text color.

{% capture example %}
<div class="vecora logo"></div>
{% endcapture %}
{% include example.html content=example %}

### Outline

{% capture example %}
<div class="vecora logo outline"></div>
{% endcapture %}
{% include example.html content=example %}

### Sizes

| Class      | Height | Width |
| ---------- | ------ | ------|
| `nano`     |   24px |  15px |
| `tiny`     |   32px |  20px |
| `small`    |   48px |  30px |
| _no class_ |   64px |  40px |
| `large`    |   96px |  60px |
| `big`      |  128px |  80px |
| `huge`     |  256px | 160px |
| `massive`  |  512px | 320px |


{% capture example %}
<div class="vecora logo huge center"></div>
{% endcapture %}
{% include example.html content=example %}

### Usage in text

## Video background

{% capture example %}
<div class="video-background">
  <video>
    <source src="waterfall.webm" type="video/webm">
    <source src="waterfall.mp4" type="video/mp4">
  </video>
  <div class="content"></div>
</div>
{% endcapture %}
{% include example.html content=example %}
