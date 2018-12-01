---
layout: default
title: More components
description:
---




## Cookie message

Should be implemented right before scripts at the end of the `body` element on every page. Everything else is handled automagically by JavaScript.

Stores an information capsule in `localStorage.cookieMessageStatus` to keep track of accepted status.

<button class="button" id="cookieMessageToggle">Activate cookie message</button>

Can also be toggled from the console by setting `localStorage.cookieMessageStatus` to `"accepted"` or `undefined`.

{% capture code %}
<div class="cookie-message">
  <p>By using this website you accept that we use information capsules. Read more about how we handle your personal information in our <a href="#">privacy statement</a>.</p>
  <button class="button primary">That's okey!</button>
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
<sg-currency v-bind:amount="1995.25"></sg-currency>
{% endcapture %}
{% include example.html content=example %}

Add the class `money-show-decimals` to show decimals.

### Observe

Format numbers as currency on the fly. Other scripts can just read or write raw numbers from `innerHTML`.

TODO: Add an interactive example
