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
<button type="button" class="button primary">Primary</button>
<button type="button" class="button">Secondary</button>
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

Function colors.

{% capture example %}
<button type="button" class="button success">Success</button>
<a href="#" class="button danger">Danger</a>
{% endcapture %}
{% include example.html content=example %}

## Outline buttons

{% capture example %}
<button type="button" class="button primary outline">Primary</button>
<button type="button" class="button outline">Default</button>
<button type="button" class="button success outline">Success</button>
<a href="#" class="button danger outline">Danger</a>
<a href="#" class="button sales outline">Sales</a>
<a href="#" class="button corporate outline">Corporate</a>
{% endcapture %}
{% include example.html content=example %}


## Sizes

{% capture example %}
<button type="button" class="button small">Small button</button>
<button type="button" class="button">Normal button</button>
<button type="button" class="button big">Big button</button>
<button type="button" class="button massive">Massive button</button>
{% endcapture %}
{% include example.html content=example %}

## Appear as link

{% capture example %}
<button type="button" class="btn btn-link">Link</button>
{% endcapture %}
{% include example.html content=example %}

## States

NOTE:
Disabled
In progress

## Fluid

{% capture example %}
<button type="button" class="button fluid">Normal button</button>
{% endcapture %}
{% include example.html content=example %}
