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
    <div class="icon facebook" style="margin: 0 auto;"></div>
    <pre class="small" style="margin-top: 10px;">facebook</pre>
  </div>
  <div class="text-center">
    <div class="icon instagram" style="margin: 0 auto;"></div>
    <pre class="small" style="margin-top: 10px;>instagram</pre>
  </div>
  <div class="text-center">
    <div class="icon linkedin" style="margin: 0 auto;"></div>
    <pre class="small" style="margin-top: 10px;>linkedin</pre>
  </div>
  <div class="text-center">
    <div class="icon github" style="margin: 0 auto;"></div>
    <pre class="small" style="margin-top: 10px;>github</pre>
  </div>
  <div class="text-center">
    <div class="icon youtube" style="margin: 0 auto;"></div>
    <pre class="small" style="margin-top: 10px;>youtube</pre>
  </div>
  <div class="text-center">
    <div class="icon slack" style="margin: 0 auto;"></div>
    <pre class="small" style="margin-top: 10px;>slack</pre>
  </div>
</div>



## Link

{% capture example %}
<a href="#" class="icon facebook">Vecora at Facebook</a>
{% endcapture %}
{% include example.html content=example %}
