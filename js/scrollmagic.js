
    var Controller = new ScrollMagic.Controller();

    var Scene = new ScrollMagic.Scene({
        triggerElement:'#content'
    })
    .setClassToggle('.holder','fade-in')
    .addIndicators()
    .addTo(Controller);
