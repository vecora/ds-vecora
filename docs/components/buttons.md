---
layout: default
title: Buttons
description:
---

Buttons styles are similar to bootstrap, but are rewritten. Bootstrap styles are not used.

Button classes can be applied to `button` or `a` elements.

## Basic usage

These buttons change with the theme.

{% capture example %}
<button class=" primary">Primary</button>
<button>Default</button>
{% endcapture %}
{% include example.html content=example %}

## Colors

Force specific theme color.

These buttons won't change with the theme.

{% capture example %}
<button type="button" class="button default">Default</button>
<a href="#" class="button sales">Sales</a>
<a href="#" class="button corporate">Corporate</a>
{% endcapture %}
{% include example.html content=example %}

Functional colors.

{% capture example %}
<button type="button" class="button success">Success</button>
<a href="#" class="button danger">Danger</a>
{% endcapture %}
{% include example.html content=example %}

## Outline

{% capture example %}
<button type="button" class="button outline">Primary</button>
{% endcapture %}
{% include example.html content=example %}


## Sizes

{% capture example %}
<button class="primary small">Small button</button>
<button class="primary">Normal button</button>
<button class="primary big">Big button</button>
<button class="primary massive">Massive button</button>
{% endcapture %}
{% include example.html content=example %}

## Appear as link

{% capture example %}
<button type="button" class="button link">Link</button>
{% endcapture %}
{% include example.html content=example %}

## States

NOTE:
Disabled
In progress

## Fluid

{% capture example %}
<button type="button" class="button primary fluid">Fluid button</button>
{% endcapture %}
{% include example.html content=example %}
