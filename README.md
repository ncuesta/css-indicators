# css-indicators

Pure CSS3 work indicators (a.k.a. Ajax loaders).

## Usage

Download either [the minified](https://raw.github.com/ncuesta/css-indicators/master/build/indicator.min.css) or [the regular](https://raw.github.com/ncuesta/css-indicators/master/build/indicator.css) version of the CSS file and include it in your page:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <!-- This is the important bit -->
    <link rel="stylesheet" media="screen" href="css/indicator.min.css" />
</head>
<body>
</body>
</html>
```

And then add the needed markup for the themed indicator (see below).

## Indicator themes

### Spinner

This theme displays an animated spinner with bars.

#### The markup

This indicator requires the following markup (please note that the specific classes
described in the next section might change for your particular use case):

```html
<!-- The spinner needs a container element -->
<span class="spinner normal bars-9">
    <!-- And a set of bars to draw, in this case 9 as .bars-9 requires -->
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
    <span class="bar"></span>
</span>
```

#### The CSS

This indicator uses the `.spinner` class name, and relies on two groups of classes
to define its particular looks: one for the size and another one for the number of
bars it should show.

For the size (this one is optional) you can either use: `.small`, `.medium`,
`.normal` (the default size), `.large` and `.x-large`.

For the number of bars you must use a class that indicates how many bar elements
the spinner has in the form `.bars-X`, where `X` is a number between `3` and `36`.

## License

**css-indicators** is licensed under the **MIT** License. Here you have the boring
legal stuff:

```
Copyright (c) 2012 José Nahuel Cuesta Luengo

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```