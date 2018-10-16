---
layout: default
title: Buttons
description:
---

Buttons styles are similar to bootstrap, but are rewritten. Bootstrap styles are not used.

Button classes can be applied to `button` or `a` elements.

## Basic usage

Primary and secondary buttons change with the theme.

{% capture example %}
<button type="button" class="button focus">Focus</button>
<button type="button" class="button">Default</button>
{% endcapture %}
{% include example.html content=example %}

## Colors

{% capture example %}
<button type="button" class="btn btn-primary">Default</button>
<a href="#" class="btn btn-warning">Sales</a>
<a href="#" class="btn btn-info">Corporate</a>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button type="button" class="btn btn-success">Success</button>
<a href="#" class="btn btn-danger">Danger</a>
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

### Large

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

## Fluid
