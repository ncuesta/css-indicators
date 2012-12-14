(function ($, themes) {
    // Indicator constructor.
    var Indicator = function (element, options) {
        this.options = $.extend({}, $.fn.indicator.defaults, options);
        this.$target = $(element);

        this.convert();
    };

    // Add the required attributes and content to the current element
    // in order to turn it into a css-indicator as defined by the
    // already set options.
    Indicator.prototype.convert = function () {
        var classes = ['indicator', this.options.theme, this.options.size, this.options.extra].join(' '),
            content = this.getContent();

        this.$target.addClass(classes).html(content);
    };

    // Get the HTML content for the theme according to the options
    // set to the instance of the Indicator.
    //
    // @return string
    Indicator.prototype.getContent = function () {
        var themeInfo = themes[this.options.theme],
            content   = themeInfo.content,
            times;

        if (themeInfo.usesMultiplier) {
            times   = this.options[themeInfo.multiplierOption] + 1;
            content = new Array(times).join(content);
        }

        return content;
    };

    // jQuery plugin definition.
    //
    // Usage:
    // <code>
    //   // Using defaults
    //   $('#my-indicator').indicator();
    //   // Just indicating the theme
    //   $('#my-indicator').indicator('bouncer');
    //   // Indicating a hash of options
    //   $('#my-indicator').indicator({ theme: 'loopy', size: 'small' });
    // </code>
    $.fn.indicator = function (opts) {
        var options = { theme: opts };

        if (typeof opts == 'object') {
            options = opts;
        }

        return this.each(function () {
            new Indicator(this, options);
        });
    };
    $.fn.indicator.Constructor = Indicator;
    $.fn.indicator.defaults = {
        theme: 'spinner',   // The theme to use: 'spinner' or 'bouncer'.
        size:  'normal',    // The size: 'small', 'medium', 'normal', 'large', 'x-large'.
        extra: '',          // Extra classes to define on the container.
        bars:  9            // Only valid for the 'spinner' theme.
    };
})
(
    window.jQuery,
    // Themes definitions
    {
        // Spinner theme
        'spinner': {
            content:          '<span class="bar"></span>',
            usesMultiplier:   true,
            multiplierOption: 'bars'
        },
        // Bouncer theme
        'bouncer': {
            content: '<span class="ball"></span>'
        },
        // Pulsar theme
        'pulsar': {
            content: '<span class="ball"></span>'
        },
        // Squared theme
        'squared': {
            content: '<span class="square"></span>'
        },
        // Loopy theme
        'loopy': {
            content: ''
        }
    }
);