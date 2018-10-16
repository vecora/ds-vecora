---
layout: default
title: Buttons
description:
---

Buttons styles are similar to bootstrap, but are rewritten. Bootstrap styles are not used.




{% capture example %}
<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<a href="#" class="btn btn-danger">Danger</a>
<a href="#" class="btn btn-warning">Warning</a>
<a href="#" class="btn btn-info">Info</a>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<button type="button" class="btn btn-link">Link</button>
{% endcapture %}
{% include example.html content=example %}
