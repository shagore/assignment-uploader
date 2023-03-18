(function($) {
    $.fn.marquee = function(options) {
        var settings = $.extend({
            duration: 5000,
            delay: 0,
            gap: 20,
            direction: 'left',
            easing: 'linear'
        }, options);

        return this.each(function() {
            var $marquee = $(this);
            var $marqueeInner = $marquee.children(':first');
            var containerWidth = $marquee.width();
            var innerWidth = $marqueeInner.width();
            var animationWidth = innerWidth + settings.gap;
            var resetWidth = innerWidth + containerWidth;

            if (settings.direction === 'left') {
                $marqueeInner.css('margin-right', settings.gap + 'px');
            } else {
                $marqueeInner.css('margin-left', settings.gap + 'px');
            }

            function animate() {
                if (settings.direction === 'left') {
                    $marqueeInner.animate({
                        'margin-left': '-' + animationWidth + 'px'
                    }, settings.duration, settings.easing, function() {
                        $marqueeInner.css('margin-left', containerWidth + settings.gap + 'px');
                        animate();
                    });
                } else {
                    $marqueeInner.animate({
                        'margin-left': containerWidth + 'px'
                    }, settings.duration, settings.easing, function() {
                        $marqueeInner.css('margin-left', '-' + animationWidth + 'px');
                        animate();
                    });
                }
            }

            function reset() {
                if (settings.direction === 'left') {
                    $marqueeInner.css('margin-left', '0px');
                } else {
                    $marqueeInner.css('margin-left', '-' + resetWidth + 'px');
                }
            }

            animate();

            $marquee.hover(function() {
                $marqueeInner.stop();
            }, function() {
                animate();
            });
        });
    };
})(jQuery);
