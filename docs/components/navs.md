---
layout: default
title: Navs
description:
---

## Navbar

[Alts for blog and legal] [Demo](docs/demos/navbar.html)

{% capture example %}
<nav class="vecora navbar" role="navigation">
  <div class="toggler" data-label-open="Menu" data-label-close="Close"></div>
  <a href="/" class="brand">Hjem</a>
  <ul>
    <li class="active"><a href="#">Services</a></li>
    <li><a href="#">Works</a></li>
    <li><a href="#">Support</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

### Force responsive mode

[Demo](docs/demos/magazine.html)

{% capture example %}
<nav class="vecora navbar force-responsive-mode" role="navigation">
  <div class="toggler" data-label-open="Menu" data-label-close="Close"></div>
  <a href="/" class="brand">Hjem</a>
  <ul>
    <li class="active"><a href="#">Services</a></li>
    <li><a href="#">Works</a></li>
    <li><a href="#">Support</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}

*NOTE:* The burger doesn't show up because the mutation observer in _navbar.js_ only listens for one navbar.

### Sticky

The `sticky` class may be applied. For reasons explained [here](https://medium.com/@elad/css-position-sticky-how-it-really-works-54cd01dc2d46), `sticky` doesn't necessarily go on the navbar itself. It may go on the header, for example.

## Breadcrumbs

{% capture example %}
<nav class="crumbs">
  <ul>
    <li class="home"><a href="#">Home</a></li>
  	<li><a href="#">Services</a></li>
    <li><a href="#">Subservice</a></li>
    <li><a href="#">Active</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}



## Sidenav

{% capture example %}
<nav class="sidenav">
  <ul>
    <li><a href="#">Item 1</a></li>
  	<li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a>
      <ul>
        <li class="active"><a href="#">Subitem 1</a></li>
        <li><a href="#">Subitem 2</a></li>
        <li><a href="#">Subitem 3</a></li>
      </ul>
    </li>
    <li><a href="#">Item 4</a></li>
  </ul>
</nav>
{% endcapture %}
{% include example.html content=example %}
