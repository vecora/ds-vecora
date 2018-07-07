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

{% capture example %}
<div class="cookie-message">
  <p>Ved bruke dette nettstedet godtar du at vi lagrer informasjonskapsler i din nettleser. Les mer om hvorfor, og hvordan vi håndterer dine personopplysninger i vår <a href="#">personvernerklæring</a>.</p>
  <button>OK</button>
</div>
{% endcapture %}
{% include example.html content=example %}
