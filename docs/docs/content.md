---
layout: default
title: Content
description:
---

**Resources**

* [Deep dive CSS: font metrics, line-height and vertical-align](https://iamvdo.me/en/blog/css-font-metrics-line-height-and-vertical-align)

## Typography

For text to be properly aligned with the 8 point grid, text should never be outside the proper tags (i.e. as a child of `body`, `main`, `article` etc.)

<div class="" style="padding: calc(2 * var(--unit));">
  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

  <p class="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

{% capture code %}
<p class="lead"></p>
<p class="small"></p>
{% endcapture %}
{% include code.html content=code %}

### Headlines

{% capture example %}
<h1>Headline 1</h1>
<h2>Headline 2</h2>
<h3>Headline 3</h3>
<h4>Headline 4</h4>
<h5>Headline 5</h5>
<h6>Headline 6</h6>
{% endcapture %}
{% include example.html content=example %}

Can also be applied with the `.h1` to `.h6` classes

{% capture example %}
<h1 class="display-1">Display 1</h1>
<h2 class="display-2">Display 2</h2>
{% endcapture %}
{% include example.html content=example %}

### Justify

`justify`

### Mute

{% capture example %}
<p class="mute">Muted text</p>
{% endcapture %}
{% include example.html content=example %}

`unmute`

### Emphasize

{% capture example %}
This is <em>emphasized</em>.
{% endcapture %}
{% include example.html content=example %}

### Quotation marks

Bootstrap has support for `<q>` elements, but it only supports english quotation marks. Now one level of Norwegian quotation marks can be achieved as well by setting the `lang` attribute to `no`, `nb`, `nn`, `nb-NO`, or `nn-NO`. The `lang` attribute can be set on any element, but should normaly be set on the `html` element.

{% capture example %}
<q lang="no">This text has Norwegian quotation marks.</q>
{% endcapture %}
{% include example.html content=example %}

### Hyphenate

This is a standard HTML entity, but still worth mentioning. Useful for hardcoded headlines.

{% capture example %}
<h1>Hidden&shy;breakpoint</h1>
{% endcapture %}
{% include example.html content=example %}


## Links

{% capture example %}
<a href="#">Defualt styling</a>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
External <a href="#" class="external">link</a>.
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
Doesn't look like a <a href="#" class="incognito">link</a>, but is.
{% endcapture %}
{% include example.html content=example %}

For muted text, incognito class is applied by default.
{% capture example %}
<p class="mute">Muted text with a <a href="#">link</a> within.</p>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<a href="#" class="underline">Underline styling</a>
{% endcapture %}
{% include example.html content=example %}

{% capture example %}
<a href="#" class="underline muted">Muted underline styling</a>
{% endcapture %}
{% include example.html content=example %}

## Lists

### Unstyled

{% capture example %}
<ul class="unstyled">
  <li>List item 1</li>
  <li>List item 2
    <ul class="unstyled">
      <li>List item 2.1</li>
      <li>List item 2.2</li>
    </ul>
  </li>
  <li>List item 3</li>
</ul>

{% endcapture %}
{% include example.html content=example %}

### Inline

{% capture example %}
<ul class="inline">
  <li><a href="#" class="link">Link 1</a></li>
  <li><a href="#" class="link">Link 2</a></li>
  <li><a href="#" class="link">Link 3</a></li>
</ul>

{% endcapture %}
{% include example.html content=example %}

### Description lists

## Tables

### Sorting

{% capture example %}
<table class="table sortable">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>40</td>
      <td>Ronald Reagan</td>
    </tr>
    <tr>
      <td>16</td>
      <td>Abraham Lincoln</td>
    </tr>
    <tr>
      <td>32</td>
      <td>Franklin D. Roosevelt</td>
    </tr>
    <tr>
      <td>44</td>
      <td>Barack Obama</td>
    </tr>
    <tr>
      <td>1</td>
      <td>George Washington</td>
    </tr>
    <tr>
      <td>28</td>
      <td>Woodrow Wilson</td>
    </tr>
    <tr>
      <td>35</td>
      <td>John F. Kennedy</td>
    </tr>
    <tr>
      <td>26</td>
      <td>Theodore Roosevelt</td>
    </tr>
  </tbody>
</table>
{% endcapture %}
{% include example.html content=example %}

### Filtering
