---
layout: default
title: Brand
description:
---

Default color is text color.

{% capture example %}
<div class="logo"></div>
{% endcapture %}
{% include example.html content=example %}

## Sizes

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

## In text

## Outline

{% capture example %}
<div class="logo logo--outline"></div>
{% endcapture %}
{% include example.html content=example %}

## Art logos

{% capture example %}
<div class="logo logo--large logo--art_3d-shadow"></div>
{% endcapture %}
{% include example.html content=example %}

<div class="container grid no-margins columns-nano-2 columns-3xs-3 columns-xs-4 columns-xl-5 columns-fhd-5">
  <div class="cell text-center">
    <div class="logo logo--large logo--art_3d-stripes logo--center"></div>
    <pre class="small" style="margin-top: 10px;">3d-stripes</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_glitch logo--center"></div>
    <pre class="small" style="margin-top: 10px;">glitch</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_stripes-2 logo--center"></div>
    <pre class="small" style="margin-top: 10px;">stripes-2</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_3d-shadow logo--center"></div>
    <pre class="small" style="margin-top: 10px;">3d-shadow</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_3d-stripes-2 logo--center"></div>
    <pre class="small" style="margin-top: 10px;">3d-stripes-2</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_pixelated logo--center"></div>
    <pre class="small" style="margin-top: 10px;">pixelated</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_stripes logo--center"></div>
    <pre class="small" style="margin-top: 10px;">stripes</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_times logo--center"></div>
    <pre class="small" style="margin-top: 10px;">times</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_80s-shapes logo--center"></div>
    <pre class="small" style="margin-top: 10px;">80s-shapes</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_ascii logo--center"></div>
    <pre class="small" style="margin-top: 10px;">ascii</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_sticker logo--center"></div>
    <pre class="small" style="margin-top: 10px; margin-bottom: 0;">sticker</pre>
    <pre class="small" style="margin-top: 0;">sticker-negative</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_stripe logo--center"></div>
    <pre class="small" style="margin-top: 10px;">stripe</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_80s-font logo--center"></div>
    <pre class="small" style="margin-top: 10px;">80s-font</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_isometric logo--center"></div>
    <pre class="small" style="margin-top: 10px;">isometric</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_3d-sheet logo--center"></div>
    <pre class="small" style="margin-top: 10px;">3d-sheet</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_80s-shapes-2 logo--center"></div>
    <pre class="small" style="margin-top: 10px;">80s-shapes-2</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_stripe-2 logo--center"></div>
    <pre class="small" style="margin-top: 10px;">stripe-2</pre>
  </div>
  <div class="cell text-center">
    <div class="logo logo--large logo--art_hippie logo--center"></div>
    <pre class="small" style="margin-top: 10px;">hippie</pre>
  </div>
</div>


### Art logos with color

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
