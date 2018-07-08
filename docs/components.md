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

Should be implemented right before scripts at the end of the `body` element on every page.

<button class="btn btn-primary">Activate cookie message</button>

{% capture example %}
<div class="cookie-message">
  <button class="btn btn-primary float-right">Det er OK!</button>
  <p>Ved bruke dette nettstedet godtar du at vi lagrer informasjonskapsler i din nettleser. Les mer om hvorfor, og hvordan vi håndterer dine personopplysninger i vår <a href="#">personvernerklæring</a>.</p>
</div>
{% endcapture %}
{% include example.html content=example %}
