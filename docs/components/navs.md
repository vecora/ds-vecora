---
layout: default
title: Navs
description:
---

## Navbar

{% capture example %}
<nav class="navbar sticky">
  <a href="/">
    <svg width="100%" height="100%" viewBox="0 0 1505 941" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
      <g transform="matrix(4.16667,0,0,4.16667,659.662,940.158)">
          <path d="M0,-225.638L67.177,-225.638L-45.575,0L-158.319,-225.638L-90.629,-225.638L-45.575,-135.256L0,-225.638Z" style="fill-rule:nonzero;"/>
      </g>
      <g transform="matrix(4.16667,0,0,4.16667,1175.46,657.575)">
          <path d="M0,-89.999L-33.925,-157.818L-67.773,-90.04L-33.817,-22.264L11.317,67.819L78.944,67.819L0,-89.999Z" style="fill-rule:nonzero;"/>
      </g>
    </svg>
  </a>

	<ul>
    <li class="nav-item active"><a href="#">Services</a></li>
		<li class="nav-item"><a href="#">Our work</a></li>
    <li class="nav-item"><a href="#">Support</a></li>
    <li class="nav-item"><a href="#">Contact</a></li>
	</ul>
</nav>
{% endcapture %}
{% include example.html content=example %}
