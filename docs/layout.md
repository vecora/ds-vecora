---
layout: default
title: Layout
description:
---

## Container

[fig 1]

{% capture code %}
<div class="container"></div>
{% endcapture %}
{% include code.html content=code %}

### Gutters

Gutters are there by default. Gutters are 4 units wide.

#### No gutters

{% capture code %}
<div class="container no-gutters"></div>
{% endcapture %}
{% include code.html content=code %}

[Not fully implemented. Works for containers, but does not cascade down to columns and boxes.]

### Max width

`max-width-*` where `*` can be any of the <a href="">available resolution segments</a>.

{% capture code %}
<div class="container max-width-hd"></div>
{% endcapture %}
{% include code.html content=code %}

### [Height]

[not implemented]

## Columns

Boxes and columns are incompatible layout systems.

The columns may have additional classes from `two` to `eleven` to manipulate the widths. Default is 1.

This example has a six column layout, where the middle column span four columns.

[fig 3.]

{% capture code %}
<div class="container flex">
  <div class="column"></div>
  <div class="column four"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

### Break points

Columns can turn into stacked boxes at certain break points.

`break-*` where `*` can be any of the <a href="">available resolution segments</a>.

{% capture code %}
<div class="container flex break-medium">
  <div class="column"></div>
  <div class="column four"></div>
  <div class="column"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

### Nesting

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

## Boxes

Boxes and columns are incompatible layout systems.

Adding `flex` gives the container additional super powers.

{% capture code %}
<div class="container flex">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

[fig 2]

This produces three equally spaced boxes. The container may contain any number of boxes.

### Responsiveness

When any `columns-*-n` class is applied, the mobile first principle is applied. The default number of columns is set to one. `columns-xs-2` will set the numder of columns to two for body widths above `xs`, and so on.

[fig 5]

{% capture code %}
<div class="container flex columns-xs-2 columns-medium-3 columns-xl-4">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
{% endcapture %}
{% include code.html content=code %}

#### Magic columns

Shorthands for common responsive column layouts.

{% capture code %}
<div class="container flex magic-columns-4">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
{% endcapture %}
{% include code.html content=code %}


### [Borders, inner and outer]

### Order

[Can be set at template level]

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



## Note on traditional columns.


..........


Using flexbox. [Read tutorial at CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Max widths

Helper classes to provide wider containers than the grid system allows, but still limit the max width. To accomplish this, use `container-fluid` together with these classes:

| Class            | Width  |
| ---------------- |--------|
| `max-width-hd`   | 1920px |
| `max-width-2k`   | 2048px |
| `max-width-wqhd` | 2560px |  
| `max-width-uhd`  | 3840px |
| `max-width-4k`   | 4096px |


### Grid borders


## Containers

### Sticky

[Demo](docs/demos/sticky.html)

### Full view height

`container-100vh`

`container-100vh--center`

`container-100vh__footer`
