---
layout: default
title: Introduction
description:
---

Bootstrap has a class name convention where all classes are prefixed whatever they belong to. We <em>do not</em> use the same class name convention for our own classes [we use something similar to Semantic UI]. <- Bootstrap will be phased out and naming convention will be transitioned to BEM.

[ [The Atomic Workflow](http://atomicdesign.bradfrost.com/chapter-4/) ]

## Browser support

| Chrome | Edge | Firefox | Safari for macOS | Safari for iOS |
|--------|------|---------|--------|----------------|
| 49 <span class="small">(early 2016)</span> | 15 <span class="small">(early 2017)</span> | 62 <span class="small">(early 2020)</span> | 11 <span class="small">(late 2017)</span>  | 11 <span class="small">(late 2017)</span> |

Minimum browser support is dictated by the use of CSS variables, the <code>::selection</code> pseudo-element without prefixes, and the JavaScript keyword <code>let</code>. Other features, like CSS filters, may be tested for, and so degrades well in browsers that don't support them. Internet Explorer ceased development in 2013 and will never be supported.

## Starter template

{% capture code %}
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" lang="nb-NO" class="">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <title>Vecora</title>
  <base href="">
  <link rel="stylesheet" href="styles.css">
</head>

<body>

  <header id="header">
  </header>

  <main id="content" role="main">
  </main>

  <footer id="footer">
    <!-- Sticks to the bottom automagically. -->
  </footer>

  <div class="cookie-message">
    <button class="primary float-right">That's okey!</button>
    <p>By using this website you accept that we use information capsules. Read more about how we handle your personal information in our <a href="#">privacy statement</a>.</p>
  </div>

  <script src="scripts.js"></script>
  <script async defer src="//maps.googleapis.com/maps/api/js?key=AIzaSyDAC2otWTUAVKGqsOyNNOgztuH64LFBNQs&callback=Maps.init"></script>
</body>

</html>
{% endcapture %}
{% include code.html content=code %}


## BEM

[BEM](http://getbem.com/)

[Read tutorial at CSS Tricks](https://css-tricks.com/bem-101/)

## 8 point grid

We use the variable `$unit` to set sizes and margins, etc. 1 unit = 8px. Half units may be used for UI design, and in other places where increments of 8px simply are too large.
