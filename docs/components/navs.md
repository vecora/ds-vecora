---
layout: default
title: Navs
description:
---

## Navbar

[Alts for blog and legal] [Demo](docs/demos/navbar.html)

{% capture example %}
<nav class="vecora navbar">
  <div class="container">
    <a href="/" class="logo">Hjem</a>
  	<ul>
      <li class="active"><a href="#">Services</a></li>
  		<li><a href="#">Works</a></li>
      <li><a href="#">Support</a></li>
      <li><a href="#">Contact</a></li>
  	</ul>
  </div>
</nav>
{% endcapture %}
{% include example.html content=example %}

### Fixed


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
