---
layout: default
title: Layout Demos
description:
---

{% assign pageUrl = '/ds-vecora' | append: page.url %}


<div class="container grid no-margins columns-nano-2 columns-3xs-3 columns-xs-4 columns-xl-5 columns-fhd-5">

  <div class="cell text-center">
    <div class="swatch magenta nano"></div>
    <pre class="small" style="margin-top: 10px;">content</pre>
  </div>
  <div class="cell text-center">
    <div class="swatch azure nano"></div>
    <pre class="small" style="margin-top: 10px;">margin</pre>
  </div>
  <div class="cell text-center">
    <div class="swatch green nano"></div>
    <pre class="small" style="margin-top: 10px;">spacing</pre>
  </div>
  <div class="cell text-center">
    <div class="swatch green nano"></div>
    <pre class="small" style="margin-top: 10px;">inset</pre>
  </div>

</div>


## Container

{% capture code %}
<div class="container"></div>
{% endcapture %}
{% include code.html content=code %}

<div class="container" style="background-color: #FFCF98;">
  <div style="background-color: #69DCFF;">Basic container</div>
</div>


### Margins

{% capture code %}
<div class="container no-margins"></div>
{% endcapture %}
{% include code.html content=code %}

<div class="container no-margins" style="background-color: #FFCF98;">
  Basic container with no margins. Not so usefull unless the container contains something.
</div>

**[Examples with complex layouts where parent has no margins but children do.]**


### Max width


## Columns

{% capture code %}
<div class="container columns">
  <div class="column"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container columns" style="background-color: #FFCF98;">
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
</div>

{% capture code %}
<div class="container columns">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container columns" style="background-color: #FFCF98;">
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
</div>



{% capture code %}
<div class="container columns">
  <div class="column"></div>
  <div class="column four"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container columns" style="background-color: #FFCF98;">
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column four">
    <div class="text-center" style="background-color: #69DCFF;">4</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
</div>

### No margins

{% capture code %}
<div class="container columns no-margins">
  <div class="column"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container columns no-margins" style="background-color: #FFCF98;">
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
</div>


### No gaps

{% capture code %}
<div class="container columns no-gaps">
  <div class="column"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container columns no-gaps" style="background-color: #FFCF98;">
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
</div>



### No margins and no gaps

{% capture code %}
<div class="container columns no-margin no-gaps">
  <div class="column"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container columns no-margin no-gaps" style="background-color: #FFCF98;">
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="column">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
</div>




## Grid


{% capture code %}
<div class="container grid">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container grid" style="background-color: #FFCF98;">
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">2</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">3</div>
  </div>
</div>

### Responsiveness

{% capture code %}
<div class="container grid columns-medium-3">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container grid columns-medium-3" style="background-color: #FFCF98;">
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">2</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">3</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">4</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">5</div>
  </div>
</div>


### No margin

{% capture code %}
<div class="container grid no-margin columns-medium-3">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container grid no-margin columns-medium-3" style="background-color: #FFCF98;">
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">2</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">3</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">4</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">5</div>
  </div>
</div>


### No margin

{% capture code %}
<div class="container grid no-margin columns-medium-3">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

<div class="container grid no-margin columns-medium-3" style="background-color: #FFCF98;">
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">1</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">2</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">3</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">4</div>
  </div>
  <div class="cell">
    <div class="text-center" style="background-color: #69DCFF;">5</div>
  </div>
</div>

### Inset
