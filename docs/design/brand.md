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
<div class="logo logo--large logo--art_3d-stripes"></div><br>
<div class="logo logo--large logo--art_glitch"></div><br>
<div class="logo logo--large logo--art_stripes-2"></div><br>
<div class="logo logo--large logo--art_3d-shadow"></div><br>
<div class="logo logo--large logo--art_stripes"></div><br>
<div class="logo logo--large logo--art_3d-stripes-2"></div><br>
<div class="logo logo--large logo--art_pixelated"></div>
{% endcapture %}
{% include example.html content=example %}

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
