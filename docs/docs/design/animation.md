---
layout: default
title: Animation
description:
---


## Scroll trigger

{% capture example %}
<div data-scroll class="vecora">
  <h1 class="vecora animate left">Triggered headline</h1>
  <p class="vecora animate right delay">Lorem ipsum triggered paragraph.</p>
</div>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<div data-scroll class="vecora">
  <div class="logo logo--huge logo--center vecora animate center"></div>
</div>
{% endcapture %}
{% include example.html content=example %}


### Delay

| Class           | Length |
| --------------- | ------ |
| `short-delay`   |  100ms |
| `shorter-delay` |  250ms |
| `delay`         |  500ms |
| `longer-delay`  |     1s |
| `long-delay`    |     2s |

All these classes can be follow by an integer `delay-*`. The delay will then be `500ms × integer`. This is useful to trigger a series of animations one after another.

### Travel distance

| Class              | Distance |
| ------------------ | -------- |
| `short-distance`   |     24px |
| `shorter-distance` |     48px |
| _no class_         |     96px |
| `longer-distance`  |    256px |
| `long-distance`    |    512px |

## SVG animation

[ [CSS-Tricks' A Guide to SVG Animations (SMIL)](https://css-tricks.com/guide-svg-animations-smil/) ]

[ [Snap.svg](http://snapsvg.io) ]
