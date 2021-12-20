// window.onload = function() {
//     new fullpage('#fullpage', {
//         //options here
//         anchors: ['res', 'it', 'study', 'ad', 'lastPage'],
//         menu: '#myMenu'
//     });
// }

function startup() {

    if ($(window).width() === 375 && $(window).height() > 724 && window.devicePixelRatio === 3) {
        // $('.propertylist').css({
        //     'height': '32%',
        // });
    }
    // var listheight = $('.propertylist:nth-child(1)')[0].clientHeight;
    // var contentheight = $('.propertylist:nth-child(4) .listContent')[0].clientHeight;
    // var contentY = $('.propertylist:nth-child(4) .listContent')[0].offsetTop;
    // var top = (listheight - contentY - contentheight) / 2 + listheight * 0.05;

    // $('.listIcon').css({
    //     'margin-top': top,
    // });
}

var data_res_business_1 = [{
        "bgImg": "url(../images/img/medic/10.jpg)",
        "titleText": "BEACON",
    }, {
        "bgImg": "url(../images/img/medic/11.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/medic/12.jpg)",
        "titleText": "",
    }
];

var data_res_business_2 = [{
    "bgImg": "url(../images/img/medic/20.jpg)",
        "titleText": "BEACON",
    }
];
var data_res_business_3 = [{
    "bgImg": "url(../images/img/medic/30.jpg)",
        "titleText": "BEACON",
    }
];


$(document).ready(function () {

    // 必须放在  $('#fullpage').fullpage 这之前，否则不能显示
    drawHtml($('#medic-one'), data_res_business_1);
    drawHtml($('#medic-two'), data_res_business_2);
    drawHtml($('#medic-three'), data_res_business_3);

    var slideIndex = 1;
    sliding = false;
    $('#fullpage').fullpage({
        //options here
        anchors: ['medicine1', 'medicine2', 'medicine3'],
        verticalCentered: false,

        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3: false,
        scrollingSpeed: 920,
        controlArrows: true,
        loopHorizontal: false,
        slidesNavigation: true,
        // SlidesNavPosition: 'top',
        resize: true,
        scrollOverflow: true,

        afterLoad(origin, destination, direction) {
            /* do nothing */
        },
        onLeave: function (index, nextIndex, direction) {
            var t = setTimeout(
                function () {
                    var color = '#fff';
                    if (nextIndex.index == 4 || nextIndex.index == 5 || nextIndex.index == 6 || nextIndex.index == 7) {
                        color = '#000'
                    }
                    $('.backhome a').css({
                        'color': color
                    });
                }, 350);
        },
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


    function drawHtml(id, data) {
        var html = ''; // '<div class="section" id="section-one">';
        for (var i in data) {
            list = data[i];
            var index = parseInt(i) + 1;
            var html = '<div class="slide slide-ad' + index + '" ';
            html = html + 'style="background-image:' + list.bgImg + ';"' + '>';
            html = html + '<h1 class="adTitle">' + list.titleText + '</h1>';
            html = html + '</div>';
            id.append(html);
        };
        //html = html + '</div>';
    }

    allLangChange();

});