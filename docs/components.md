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
  <p>Ved å fortsette på dette nettstedet godkjenner du bruken av informasjonskapsler. Les mer om hvordan vi håndtere informasjonen i vår <a href="#"personvernerklæring</a></p>
  <button>Det er ok!</button>
</div>
{% endcapture %}
{% include example.html content=example %}
