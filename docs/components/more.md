---
layout: default
title: More components
description:
---




## Cookie message

Should be implemented right before scripts at the end of the `body` element on every page. Everything else is handled automagically by JavaScript.

<button class="button" id="cookieMessageToggle">Activate cookie message</button>

{% capture code %}
<div class="cookie-message">
  <button class="btn btn-primary float-right">That's okey!</button>
  <p>By using this website you accept that we use information capsules. Read more about how we handle your personal information in our <a href="#">privacy statement</a>.</p>
</div>
{% endcapture %}
{% include code.html content=code %}


## Map

{% capture example %}
<div class="map" data-lat="58.855319" data-lng="5.740239" data-zoom="14"></div>
{% endcapture %}
{% include example.html content=example %}


## Money

This component relies on [Accounting.js](http://openexchangerates.github.io/accounting.js/).

{% capture example %}
<span class="money" data-amount="1995.25">1995.25</span>
{% endcapture %}
{% include example.html content=example %}

Add the class `money-show-decimals` to show decimals.

### Observe

Format numbers as currency on the fly. Other scripts can just read or write raw numbers from `innerHTML`.

TODO: Add an interactive example
