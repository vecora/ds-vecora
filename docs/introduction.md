---
layout: default
title: Index
description:
---

The documentation should be compatible and tested towards modern browsers &mdash; newest versions of Chrome, Firefox, Safari, and Edge, on all platforms.

The style guide itself should also be compatible with IE11.

Based on <a href="https://getbootstrap.com/">Bootstrap 4</a>.

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
  </footer>

  <div class="cookie-message">
    <button class="btn btn-primary float-right">That's okey!</button>
    <p>By using this website you accept that we use information capsules. Read more about how we handle your personal information in our <a href="#">privacy statement</a>.</p>
  </div>

  <script src="scripts.js"></script>
  <script async defer src="//maps.googleapis.com/maps/api/js?key=AIzaSyDAC2otWTUAVKGqsOyNNOgztuH64LFBNQs&callback=Maps.init"></script>
</body>

</html>
{% endcapture %}
{% include code.html content=code %}
