---
layout: default
title: Icons
description:
---


## Basics

Default color is text color.

{% capture example %}
<div class="icon facebook"></div>
{% endcapture %}
{% include example.html content=example %}

<div style="display: flex;">
  <div class="text-center">
    <div class="icon facebook"></div>
    <p>facebook</p>
  </div>
  <div class="text-center">
    <div class="icon instagram"></div>
    <p>facebook</p>
  </div>
  <div class="text-center">
    <div class="icon linkedin"></div>
    <p>facebook</p>
  </div>
</div>

<div class="icon instagram" style="display: inline-block; margin: 0 15px 15px 0;"></div>
<div class="icon linkedin" style="display: inline-block; margin: 0 15px 15px 0;"></div>
<div class="icon github" style="display: inline-block; margin: 0 15px 15px 0;"></div>
<div class="icon youtube" style="display: inline-block; margin: 0 15px 15px 0;"></div>
<div class="icon slack" style="display: inline-block; margin: 0 15px 15px 0;"></div>

## Link

{% capture example %}
<a href="#" class="icon facebook">Vecora at Facebook</a>
{% endcapture %}
{% include example.html content=example %}
