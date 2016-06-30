(function ($) {
        $.fn.dropdown = function () {
            var $optionTag = this;
            $optionTag.hide();
            var optionsArray = [];
            var options = $optionTag.children();
            for (var i = 0; i < options.length; i++) {
                optionsArray.push({
                    option: options[i].innerHTML,
                    value: options[i].value
                });
            }
            var $container = $('<div>').addClass('list-container');
            var $ul = $('<ul>').addClass('list-options');
            var $selectionContainer = $('<li>')
                    .addClass('list-selectionContainer')
                    .text('CHOOSE OPTION')
                    .attr('data-value','not-selected')
                    .appendTo($ul);
            for (var j = 0; j < optionsArray.length; j++) {
                var currOption = $('<li>')
                        .text(optionsArray[j].option)
                        .attr('data-value',optionsArray[j].value)
                        .on('click', function () {
                            $target = $(this);
                            $('.list-options li[selected]').removeAttr('selected');
                            $target.attr('selected', 'selected');
                            $selectionContainer.text($target.text());
                            $selectionContainer.attr('data-value', $target.attr('data-value'));
                          //  $('.list-options li:not(.list-selectionContainer)').slideUp('fast');
                        })
                        .appendTo($ul);
            }
            $allOptions = $selectionContainer.siblings().hide();
            $selectionContainer.on('click', function () {
                $allOptions.slideToggle();
            })
            $ul.appendTo($container);
            $container.appendTo($('body'));
        };
        $('#dropdown').dropdown();
    }(jQuery));