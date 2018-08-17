---
layout: default
title: Components
description:
---

## Forms

### Range


{% capture example %}
<form>
  <input type="range" min="0" max="100" value="50" step="1">
</form>
{% endcapture %}
{% include example.html content=example %}


## Social proofing

### Review

{% capture example %}
<div class="review">
  <img src="">
  <div class="stars">4.5 out of 5 stars</div>
  <blockquote>
    <p>Lorem ipsum dolor sit amet.</p>
    <footer>
      <cite title="">Gunnar Grafse</cite>
    </footer>
  </blockquote>
</div>
{% endcapture %}
{% include example.html content=example %}


## Cookie message

Should be implemented right before scripts at the end of the `body` element on every page. Everything else is handled automagically by JavaScript.

<button class="btn btn-primary" id="cookieMessageToggle">Activate cookie message</button>

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
