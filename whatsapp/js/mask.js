$.jMaskGlobals.watchDataMask = true;

 $('.date').mask("00/00/0000");
    $('.unmask').on('click', function(){
        $('.date').unmask();
    });
    $('.load-div').on('click', function(){
        $('body')
            .append('<div data-mask="00/00/0000">123123123</div>')
            .append('<input type="text" data-mask="00/00/0000" value="123123123"/>')
            .append('<input type="text" class="date" value="12312321"/> ');
    });