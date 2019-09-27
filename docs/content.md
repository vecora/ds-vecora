---
layout: default
title: Content
description:
---

## Typography

For text to be properly aligned with the 8 point grid, text should never be outside the proper tags (i.e. as a child of `body`, `main`, `article` etc.)

<div class="" style="padding: 16px;">
  <p class="size-25">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

  <p class="size-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p class="size-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<br><hr><br>

<div class="" style="padding: 16px;">
  <p class="size-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

  <p class="size-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p class="size-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

<br><hr><br>

<div class="" style="padding: 16px;">
  <p class="size-15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

  <p class="size-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

  <p class="size-9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
</div>

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
