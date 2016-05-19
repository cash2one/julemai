var reg = {
    init: function(){
        var _width = document.body.clientWidth,
            _scale = parseFloat(_width/1170)>1?1:parseFloat(_width/1170);
        $('.reg-way').css({
            '-webkit-transform':'scale('+_scale+','+_scale+')',
            '-moz-transform':'scale('+_scale+','+_scale+')',
            '-ms-transform':'scale('+_scale+','+_scale+')',
            'transform':'scale('+_scale+','+_scale+')'
        })

    }
}
$(function(){
    reg.init();
    window.addEventListener('resize',function(){
        reg.init();
    })
})