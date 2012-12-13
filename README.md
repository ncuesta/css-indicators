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

And then you can use the provided JS helper (in the form of a jQuery plugin) or add the
needed markup for the themed indicator (see below).

## jQuery plugin

`css-indicators` comes bundled with a tiny but handy [jQuery](http://jquery.com) plugin.

By using it, you won't have to go through the hassle of dealing with the correct markup
for each indicator theme. You'll just have to do a `$('#my-indicator').indicator()`
optionally specified with a couple of options.

### Usage

After you've included the CSS file for the indicators, you will need to add
[the JS file](https://raw.github.com/ncuesta/css-indicators/master/js/css-indicator-generator.js)
or its [minified version](https://raw.github.com/ncuesta/css-indicators/master/js/css-indicator-generator.min.js)
to your jQuery-enabled page. **Remember to add it after your jQuery `<script>` tag!**

Once you have included the JS file, you can then use it with any existing element on the page:

```js
jQuery(function($) {
    // With the default options
    $('#default-indicator').indicator();
    //  -> Will produce a 'spinner', 'normal', with 9 bars.

    // Only specifying the theme
    $('#themed-indicator').indicator('bouncer');

    // Providing a hash of options
    $('#customized-indicator').indicator({ theme: 'bouncer', size: 'x-large' });
});
```

### Available options

The available options for the plugin are:

* `theme`: The theme to use: `'spinner'` (default) or `'bouncer'`.
* `size`: The size: `'small'`, `'medium'`, `'normal'` (default), `'large'`, `'x-large'`.
* `extra`: Extra classes to define on the container. Defaults to `''` (an empty string).
* `bars`:  Number of child bars to add to the `spinner` theme. Only valid for that theme. Defaults to `9`.

## Indicator themes

### Global CSS class names

First of all, you should know that every indicator must have the `.indicator` class
name.

For every indicator theme you can specify its size via a class name. This is optional,
and will default to a sensible value. Available sizes are: `.small`, `.medium`,
`.normal` (the default size), `.large` and `.x-large`.

### Spinner

This theme displays an animated spinner with bars.

#### The markup

This indicator requires the following markup (please note that the specific classes
described in the next section might change for your particular use case):

```html
<!-- The spinner needs a container element -->
<span class="indicator spinner normal bars-9">
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

This indicator uses the `.spinner` class name, and relies on a class that states
the number of bars it should show.

For the number of bars you must use a class that indicates how many bar elements
the spinner has in the form `.bars-X`, where `X` is a number between `3` and `36`.

### Bouncer

This theme displays a nice little ball bouncing up and down in a neverending loop.

#### The markup

This indicator requires the following markup (please note that the specific classes
described in the next section might change for your particular use case):

```html
<!-- The bouncer needs a container element -->
<span class="indicator bouncer normal with-floor">
    <!-- And the ball that will be bouncing inside the container -->
    <span class="ball"></span>
</span>
```

#### The CSS

This indicator uses the `.bouncer` class and can have a floor to give a more
"realistic" look via the optional `.with-floor` class.

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