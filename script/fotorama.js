$('#fotorama').fotorama({
    width: '100%',
    ratio: 1920/600,
    loop: true,
    fit: 'cover'
});



$(window).on('resize load', function(){
    if ($(window).innerWidth() <= 320){
        $('#fotorama').fotorama({
            width: '100%',
            ratio: 320/240,
            loop: true,
            fit: 'cover'
        });
    }
})