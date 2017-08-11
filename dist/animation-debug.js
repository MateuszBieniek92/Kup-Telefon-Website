$(function () {

    const mobile = window.matchMedia("screen and (max-width: 450px)");
    const tablet = window.matchMedia("screen and (min-width: 451px) and (max-width: 999px)");
    const desktop = window.matchMedia("screen and (min-width: 1000px)");

    const mobilePhone = $('.mobile-phone');
    const greenPanel = $('.mobile-phone');

    const mobileDataDestination = $('.data');
    const $paginationBtn = $('.products-btn');

    function loadData() {
        $(function () {
            mobilePhones.products.forEach(function (item) {
                // main panel
                const mobileData = $('<div class="mobile-phone col-xs-12 col-sm-4 col-md-3 col-lg-3">', {
                    class: 'item',
                    "data-id": item.id
                });
                const name = $('<p class="mobile-header">').text(item.name);
                const image = $('<div class="mobile-image">');
                const value = $('<p class="mobile-price">').text(item.price.value + ' ' + item.price.currency);
                // green panel
                const greenPanel = $('<div class="green-panel">');

                const greenHeader = $('<p class="green-header">').text(item.name);
                const greenInfo = $('<div class="green-info">');
                const screen = $('<p>').text('Ekran ' + item.information.display);
                const camera = $('<p>').text('Aparat ' + item.information.camera);
                const battery = $('<p>').text('Bateria ' + item.information.battery);
                const memory = $('<p>').text('Pamięć ' + item.information.memory);
                const greenPrice = $('<p class="green-price">').text(item.price.value + ' ' + item.price.currency);
                const cartBtn = $('<button class="cart-btn">');
                const divCart = $('<div class="cart">');
                const cartSvg = $(' <svg id="Warstwa_1" data-name="Warstwa 1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 50.68 50.68"><title>a</title><path d="M4.67,19.12a2.22,2.22,0,1,0,2.22-2.22A2.22,2.22,0,0,0,4.67,19.12Zm11.11,0A2.22,2.22,0,1,0,18,16.89,2.22,2.22,0,0,0,15.78,19.12ZM8.61,13.86l12.3-3.51a0.63,0.63,0,0,0,.43-0.57V3.67H5.67V1.78a0.45,0.45,0,0,0-.44-0.44H1.78a0.45,0.45,0,0,0-.44.44V3.56H3.5L5.68,13.62l0.21,1v1.67a0.45,0.45,0,0,0,.44.44H20.89a0.45,0.45,0,0,0,.44-0.44V14.67H8.84C7.56,14.67,7.54,14.17,8.61,13.86Z" style="fill:#ffffff"/>');
                const compareBtn = $('<button class="compare-btn">').text('PORÓWNAJ');

                divCart.append(cartSvg)
                cartBtn.append(divCart);
                greenInfo.append(screen, camera, battery, memory);
                greenPanel.append(greenHeader, greenInfo, greenPrice, cartBtn, compareBtn);

                if (item.id <= 4) {
                    mobileData.append(name, greenPanel, image, value);
                    mobileDataDestination.append(mobileData);
                }

                $paginationBtn.on('click', function () {
                    mobileData.append(name, greenPanel, image, value);
                    mobileDataDestination.append(mobileData);
                });

            })
        });
    }

    // hamburger btn

    const $hamburgerBtn = $('.hamburger');
    const $menu = $('.menu');
    const $searchForm = $('.search-input').find('input');
    const $searchInput = $('.search-input');
    const $searchBtn = $('.magnifier');
    const $filterInput = $('.search');

    function toggleMenu() {
        if ($menu.css('display') === 'block') {
            $menu.slideUp();
        } else {
            $menu.slideDown().css({
                "display": "block",
                "width": "99vw",
            });
        }
    }

    function slideMenu() {
        $menu.animate({
                'margin-left': '30em'
            }, 500,
            function () {
                $(this).slideToggle('fast').delay();
            }
        );
    }

    if (mobile.matches || tablet.matches) {
        $hamburgerBtn.on('click', function () {
            if ($searchInput.css('display') == 'block') {
                $searchInput.css('display', 'none');
                toggleMenu();
            } else if ($searchInput.css('display') == 'none') {
                toggleMenu();
            } else if ($searchInput.css('display') == 'none' && $menu.css('display') == 'none') {
                toggleMenu();
            } else if ($menu.css('display') == 'block') {
                  toggleMenu();
            }
            event.stopPropagation();
        });
    } else if (desktop.matches) {
        $hamburgerBtn.on('click', function (event) {
            if ($searchInput.css('display') == 'block') {
                $searchInput.css('display', 'none');
                slideMenu();
            } else if ($searchInput.css('display') == 'none') {
                slideMenu();
            } else if ($searchInput.css('display') == 'none' && $menu.css('display') == 'none') {
                slideMenu();
            }
            event.stopPropagation();
        });
    }

    // scroll 

    const $detailsBtn = $('.details-btn');

    if (mobile.matches) {
        $detailsBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 1321
            }, 1000);
        });

    } else if (tablet.matches) {
        $detailsBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 1318
            }, 1000);
        });
    } else if (desktop.matches) {

        $detailsBtn.on('click', function () {
            $('html, body').animate({
                scrollTop: 697
            }, 1000);
        });
    }

    // search btn

    $searchBtn.click(function (event) {
        const $inputVal = $filterInput.val();

        if ($inputVal.length <= 0) {

            if ($searchInput.css('display') == 'none' && $menu.css('display') == 'none') {
                $searchInput.slideToggle("slow");
                $menu.css('display', 'none');
            } else if ($menu.css('display') == 'none') {
                event.stopPropagation();
                slideMenu();
                $searchInput.slideToggle("slow");
                $filterInput.val('');
            } else if ($menu.css('display') == 'block') {
                slideMenu();
                $searchInput.delay(1000).slideToggle("slow");
            }
            event.stopPropagation();
        } else {
            $('html, body').animate({
                scrollTop: 697
            }, 1000);

        }
    });

    // search on enter key

    $filterInput.keypress(function (e) {
        if (e.which == 13) {
            if (mobile.matches) {
                $('html, body').animate({
                    scrollTop: 1321
                }, 1000);
                return false;
            } else if (tablet.matches) {
                $('html, body').animate({
                    scrollTop: 1318
                }, 1000);
                return false;

            } else if (desktop.matches) {

                $('html, body').animate({
                    scrollTop: 697
                }, 1000);

            }
        }

    });

    // sticky menu

    const $sticky = $('.stickyBar');
    const $ul = $sticky.find('.menu');
    const top = $ul.offset().top;

    $(function () {


        $(window).on('scroll', function () {
            const pix = $(document).scrollTop();
            //            console.log('scroll: ' + pix);

            if (pix > top) {
                $sticky.addClass('sticky');
            } else {
                $sticky.removeClass('sticky');
            }
        })
    });

    $(window).on('rezise', function () {
        if ($sticky.hasClass('sticky')) {
            pix = $ul.offset().top;
        } else {
            pix = $sticky.offset().top;
        }

        const pix = $(document).scrollTop();

        if (pix > top) {
            $sticky.addClass('sticky');
        } else {
            $sticky.removeClass('sticky');
        }
    });

    //functions start 

    loadData();

});
