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


## Cookie message

Should be implemented right before scripts at the end of the `body` element on every page. Everything else is handled automagically by JavaScript.

<button class="btn btn-primary" id="cookieMessageToggle">Activate cookie message</button>

```
<div class="cookie-message">
  <button class="btn btn-primary float-right">That's okey!</button>
  <p>By using this website you accept that we use information capsules. Read more about how we handle your personal information in our <a href="#">privacy statement</a>.</p>
</div>
```
