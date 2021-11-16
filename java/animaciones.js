jQuery(() => {
    var productos = $(".container__favoritos-box");
        $(window).scroll(function() {
            if (productos) {
                productos = $(".container__favoritos-box");
            }
            var scroll = jQuery(window).scrollTop();
            for (let i = 0; i < productos.length; i++) {
                let alturaProducto = $(`#${i+1}`).offset().top;

                if((alturaProducto - 450) < scroll){
                    $(`#${i+1}`).animate({opacity: 1},2250);
                }
            }
        });
});
