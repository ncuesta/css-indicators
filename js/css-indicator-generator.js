(function ($) {
    var types = {
        'spinner': {
            content: '<span class="bar"></span>',
            usesMultiplier: true,
            multiplierOption: 'bars'
        },
        'bouncer': {
            content: '<span class="ball"></span>',
            usesMultiplier: false
        }
        
    };
    var Indicator = function (element, options) {
        this.options = $.extend({}, $.fn.indicator.defaults, options);
        this.$target = $(element);

        this.convert();
    };

    Indicator.prototype.convert = function () {
        var classes = ['indicator', this.options.type, this.options.size, this.options.extra].join(' '),
            content = this.getContent();

        this.$target.addClass(classes).html(content);
    };

    Indicator.prototype.getContent = function () {
        var typeInfo = types[this.options.type],
            content = typeInfo.content;

        if (typeInfo.usesMultiplier) {
            var times = this.options[typeInfo.multiplierOption] + 1;

            content = new Array(times).join(content);
        }

        return content;
    };
    
    // jQuery plugin definition
    $.fn.indicator = function (opts) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('indicator'),
                options = typeof opts == 'object' && opts;

            if (!data) {
                $this.data('indicator', new Indicator(this, options));
            }
        });
    };

    $.fn.indicator.Constructor = Indicator;

    $.fn.indicator.defaults = {
        type:  'spinner',   // The theme to use: 'spinner' or 'bouncer'.
        size:  'normal',    // The size: 'small', 'medium', 'normal', 'large', 'x-large'.
        extra: '',          // Extra classes to define on the container.
        bars:  9            // Only valid for spinner theme.
    };

})(window.jQuery);