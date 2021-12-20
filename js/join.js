// window.onload = function() {
//     new fullpage('#fullpage', {
//         //options here
//         anchors: ['res', 'it', 'study', 'ad', 'lastPage'],
//         menu: '#myMenu'
//     });
// }

$(document).ready(function () {

    let language = defaultLang == 'cn' ? langCN : langJP;
    // 设置a标签的href
    $('.tel_tokyo')[0].href = language['addr_japan_call'];
    
    allLangChange();
    
    var slideIndex = 1;
    sliding = false;
    $('#fullpage').fullpage({
        //options here
        anchors: ['join'],
        verticalCentered: false,
        scrollOverflow: true,

        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3: false,
        scrollingSpeed: 920,
        controlArrows: true,
        loopHorizontal: false,
        slidesNavigation: true,
        // SlidesNavPosition: 'top',
        resize: true,

        afterLoad(origin, destination, direction) {
            /* do nothing */
        },
        onLeave(origin, destination, direction) {
            /* do nothing */
        }
    });


    // setInterval(function(){
    //     fullpage_api.moveSlideRight();
    //   },5000)


    $('.header .back').on('click', function () {
        fullpage_api.moveTo(1);
    })

    // 构建元素img添加到section中
    var $img = $('<img src="../images/next.svg">');
    $img.addClass('z');
    $img.on('click', function () {
        fullpage_api.moveSectionDown();
    })
    // $('.section:nth-child(-n+4)').append($img);

});