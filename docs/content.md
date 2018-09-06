---
layout: default
title: Content
description:
---

## Typography

### Emphasize

{% capture example %}
This is <em>emphasized</em>.
{% endcapture %}
{% include example.html content=example %}

### Quotation marks

Bootstrap has support for `<q>` elements, but it only supports english quotation marks. Now one level of Norwegian quotation marks can be achieved as well by setting the lang attribute to `no`, `nb`, `nn`, `nb-NO`, or `nn-NO`. The `lang` attribute can be set on any element, but should normaly be set on the `html` element.

{% capture example %}
<q lang="no">This text has Norwegian quotation marks.</q>
{% endcapture %}
{% include example.html content=example %}

### Hyphenate

{% capture example %}
<h1>Hidden&shy;breakpoint</h1>
{% endcapture %}
{% include example.html content=example %}
