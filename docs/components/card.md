---
layout: default
title: Card
description:
---

## Card

{% capture example %}
<a href="#" class="vecora card">
  <div class="cover">
    <div class="photo" style="background-image: url(https://placekitten.com/320/320)"></div>
    <div class="content">
      <h3 class="heading">Brand name</h3>
      <h4 class="tagline">Short clickbait summary of what we did</h4>
    </div>
  </div>
  <div class="article">
    <p class="excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</a>
{% endcapture %}
{% include example.html content=example %}
