---
layout: default
title: Design
description: Themes are meant to, together with layouts, give a greater sense of order while browsing around the site, by visually telling the user what section he is viewing.
---



## Video background

{% capture example %}
<div class="video-background">
  <video>
    <source src="waterfall.webm" type="video/webm">
    <source src="waterfall.mp4" type="video/mp4">
  </video>
  <div class="content"></div>
</div>
{% endcapture %}
{% include example.html content=example %}
