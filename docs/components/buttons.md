---
layout: default
title: Buttons
description:
---

Buttons styles are similar to bootstrap, but are rewritten. Bootstrap styles are not used.


## Basic usage

{% capture example %}
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<a href="#" class="btn btn-danger">Danger</a>
<a href="#" class="btn btn-warning">Warning</a>
<a href="#" class="btn btn-info">Info</a>
{% endcapture %}
{% include example.html content=example %}

## Outline buttons

{% capture example %}
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-secondary">Secondary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-light">Light</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
{% endcapture %}
{% include example.html content=example %}


## Sizes

### Large

{% capture example %}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-secondary btn-lg">Large button</button>
{% endcapture %}
{% include example.html content=example %}

### Small

{% capture example %}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{% endcapture %}
{% include example.html content=example %}

## Appear as link

{% capture example %}
<button type="button" class="btn btn-link">Link</button>
{% endcapture %}
{% include example.html content=example %}

## States

## Fluid
