---
layout: default
title: Social proofing
description:
---


## Rating

Rating goes from 0 to 5 with increments of 0.5.

{% capture example %}
<div class="rating" data-value="3">Rated 3 out of 5</div>
{% endcapture %}
{% include example.html content=example %}


## Review

{% capture example %}
<div class="vecora review">
  <blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <footer>
      <img src="https://placekitten.com/400/400">
      <p><cite title=""><em>Richard Habsburg</em></cite>, CEO of Norigy Inc.</p>
    </footer>
  </blockquote>
</div>
{% endcapture %}
{% include example.html content=example %}
