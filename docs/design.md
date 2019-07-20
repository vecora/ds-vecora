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
    <div class="docs-gradient --moving-background-gradient"></div>
  </div>
</div>

#### In text

{% capture example %}
<h1 class="display-2 --moving-background-gradient">Animated gradient</h1>
{% endcapture %}
{% include example.html content=example %}

#### In logo

{% capture example %}
<div class="logo logo--huge logo--outline logo--center --moving-background-gradient"></div>
{% endcapture %}
{% include example.html content=example %}


## Logo

Default color is text color.

{% capture example %}
<div class="logo"></div>
{% endcapture %}
{% include example.html content=example %}

### Outline

{% capture example %}
<div class="logo logo--outline"></div>
{% endcapture %}
{% include example.html content=example %}

### Sizes

| Class            | Height | Width |
| ---------------- | ------ | ------|
| `logo--nano`     |   24px |  15px |
| `logo--tiny`     |   32px |  20px |
| `logo--small`    |   48px |  30px |
| _no class_       |   64px |  40px |
| `logo--large`    |   96px |  60px |
| `logo--big`      |  128px |  80px |
| `logo--huge`     |  256px | 160px |
| `logo--massive`  |  512px | 320px |

Pixels sizes assumes 1 [unit](docs/introduction/#eight-point-grid) = 8px.

{% capture example %}
<div class="logo logo--huge logo--center"></div>
{% endcapture %}
{% include example.html content=example %}

### Art logos

{% capture example %}
<div class="logo logo--large logo--art_3d-stripes"></div><br>
<div class="logo logo--large logo--art_glitch"></div><br>
<div class="logo logo--large logo--art_stripes-2"></div><br>
<div class="logo logo--large logo--art_3d-shadow"></div><br>
<div class="logo logo--large logo--art_stripes"></div><br>
<div class="logo logo--large logo--art_3d-stripes-2"></div><br>
<div class="logo logo--large logo--art_pixelated"></div>
{% endcapture %}
{% include example.html content=example %}

#### With colors

{% capture example %}
<div class="logo logo--large logo--art_3d-stripes_color"></div><br>
<div class="logo logo--large logo--art_glitch_color"></div><br>
<div class="logo logo--large logo--art_stripes-2_color"></div><br>
<div class="logo logo--large logo--art_3d-shadow_color"></div><br>
<div class="logo logo--large logo--art_stripes_color"></div><br>
<div class="logo logo--large logo--art_sticker_color"></div><br>
<div class="logo logo--large logo--art_3d-stripes-2_color"></div>
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


## Animation

### Scroll trigger

{% capture example %}
<div data-scroll class="vecora">
  <h1 class="vecora animate left">Triggered headline</h1>
  <p class="vecora animate right delay">Lorem ipsum triggered paragraph.</p>
</div>
{% endcapture %}
{% include example.html content=example %}

#### Delay

| Class           | Length |
| --------------- | ------ |
| `short-delay`   |  100ms |
| `shorter-delay` |  250ms |
| `delay`         |  500ms |
| `longer-delay`  |     1s |
| `long-delay`    |     2s |

All these classes can be follow by an integer `delay-*`. The delay will then be `500ms × integer`. This is useful to trigger a series of animations one after another.

#### Travel distance

| Class              | Distance |
| ------------------ | -------- |
| `short-distance`   |     24px |
| `shorter-distance` |     48px |
| _no class_         |     96px |
| `longer-distance`  |    256px |
| `long-distance`    |    512px |
