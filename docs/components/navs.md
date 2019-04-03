---
layout: default
title: Navs
description:
---

## Navbar

[Alts for blog and legal]

{% capture example %}
<nav class="navbar">
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
