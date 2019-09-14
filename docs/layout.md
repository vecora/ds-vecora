---
layout: default
title: Layout
description:
---

Three layout systems: columns, grid, and flex. All layout systems currently use CSS flexbox under the hood. Templates may apply additional styles to change the order of boxes etc., but beware that using CSS Grid for the grid layout system may be investigated, and subsequently changed, in the future.

**Resources**
* CSS-Tricks' [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* CSS-Tricks' [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)


## Container

[fig 1]

{% capture code %}
<div class="container"></div>
{% endcapture %}
{% include code.html content=code %}

### Margins

`margins` or `no-margins` affects the left and right visual margins of the container. Margins are 4 <a href="">units</a> wide. Defaults to `margins`. Both classes may be needed when building <a href="">complex layouts</a>. Vertical margins are called <a href="">spacing</a>.

{% capture code %}
<div class="container no-margins"></div>
{% endcapture %}
{% include code.html content=code %}

### Max width

`max-width-*` where `*` can be any of the <a href="">available resolution segments</a>.

{% capture code %}
<div class="container max-width-hd"></div>
{% endcapture %}
{% include code.html content=code %}

### ?Height?

?not implemented?

`container-100vh`

`container-100vh--center`

`container-100vh__footer`

## Columns

Boxes and columns are incompatible layout systems. [Explain the use of the flex class, that it opens up the possibility of future layout systems, for example a grid based one, still using the container class.]

The columns may have additional classes from `two` to `eleven` to manipulate the widths. Default is 1.

This example has a six column layout, where the middle column span four columns.

[fig 3.]

{% capture code %}
<div class="container columns">
  <div class="column"></div>
  <div class="column four"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

### Gaps

`gaps` or `no-gaps` may be applied to the container. Defaults to `gaps`, but both classes may be needed when building <a href="">complex layouts</a>.

### Break points

Columns can be stacked on top of each other at certain break points.

`break-*` where `*` can be any of the <a href="">available resolution segments</a>.

{% capture code %}
<div class="container columns break-medium">
  <div class="column"></div>
  <div class="column four"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

### ?Offset?

## Grid

Boxes and columns are incompatible layout systems.

Adding `flex` gives the container additional super powers.

{% capture code %}
<div class="container grid">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

[fig 2]

This produces three equally spaced boxes. The container may contain any number of boxes.

### Responsiveness

When any `columns-*-n` class is applied, the mobile first principle is applied. The default number of columns is set to one. `columns-xs-2` will set the numder of columns to two for body widths above `xs`, and so on.

[fig 5]

{% capture code %}
<div class="container grid columns-xs-2 columns-medium-3 columns-xl-4">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

#### ?Magic columns?

Shorthands for common responsive column layouts.

{% capture code %}
<div class="container magic-4">
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
  <div class="cell"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

### Gaps

`gaps` or `no-gaps` may be applied to the container. Defaults to `gaps`, but both classes may be needed when building <a href="">complex layouts</a>.

### Inset

`inset` or `no-inset` may be applied to the container. Defaults to `no-inset`, but both classes may be needed when building <a href="">complex layouts</a>.

### Borders

`inner-borders` may be applied to the container. This will also apply `no-gaps` and `inset` by default.

## Flex

{% capture code %}
<div class="container flex">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

### Position

`top`, `right`, `bottom`, `left`, and `center`. Top and bottom positioning only applies of the container has height set.

### Direction

`ltr`, and `rtl`.

### ?Responsiveness?

## Complex layouts

### ?Nesting?

Containers can be nested inside boxes.

{% capture code %}
<div class="container flex">
  <div class="column"></div>
  <div class="column"></div>
  <div class="column flex">
    <div class="column"></div>
    <div class="column"></div>
  </div>
</div>
{% endcapture %}
{% include code.html content=code %}

Combine break points and nesting to create complex responsive layouts.

[fig 4] [demo]


## Utilities

### Sticky

Global modifier `sticky` sticks to the top by default. `sticky bottom` sticks it to the bottom. Keep in mind the quirkiness of `position: sticky` in combination with `overflow` and `flex`. None of the built in flex behaviour conflicts with sticky.

[Demo](docs/demos/sticky.html)

### Hide

Global modifiers `hide-below-*` and `hide-above-*`


## Resolutions

| Segment        | Width  | Height | Name   | Ratio |
|----------------|--------|--------|--------|-------|
| `3xs`          |  480px |  320px |        |   4:3 |
| `2xs`          |  640px |  480px |        |   4:3 |
| `xs`           |  800px |  600px | SVGA   |   4:3 |
| `small`        | 1024px |  768px | XGA    |   4:3 |
| `medium`       | 1280px |  800px |        | 16:10 |
| `large`        | 1440px |  900px |        | 16:10 |
| `xl`           | 1680px | 1050px | WSXGA+ | 16:10 |
| `2xl` or `fhd` | 1920px | 1080px | FHD    |  16:9 |
| `3xl`          | 2560px | 1440px |        |  16:9 |
| `hd`           | 1280px |  720px | HD     |       |
| `uhd`          | 3840px | 2160px | UHD    |       |
| `2k`           | 2048px | 1080px | 2K     |       |
| `4k`           | 4096px | 2160px | 4K     |       |
| `5k`           | 5120px | 2880px | 5K     |       |
