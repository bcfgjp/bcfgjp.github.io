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

var data_it_app = [{
    "bgImg": "url(../images/img/IT/IT-app-1.png)",
    "titleText": "",
}];

var data_it_mini = [{
    "bgImg": "url(../images/img/IT/IT-mini-1.jpg)",
    "titleText": "",
}];

var data_it_web = [{
    "bgImg": "url(../images/img/IT/IT-web-1.png)",
    "titleText": "",
}];


$(document).ready(function () {

    // 必须放在  $('#fullpage').fullpage 这之前，否则不能显示
    drawHtml($('#IT-one'), data_it_app);
    drawHtml($('#IT-two'), data_it_mini);
    drawHtml($('#IT-three'), data_it_web);

    $('#fullpage').fullpage({
        //options here
        anchors: ['app', 'mini', 'web'],
        verticalCentered: false,
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
        onLeave: function (index, nextIndex, direction) {
            var t = setTimeout(
                function () {
                    var color = '#fff';
                    if (nextIndex.index == 1) {
                        color = '#000'
                    }
                    $('.backhome a').css({
                        'color': color
                    });
                }, 350);
        },
    });

    $('.header .back').on('click', function () {
        fullpage_api.moveTo(1);
    })

    // 构建元素img添加到section中
    var $img = $('<img src="../images/next.svg">');
    $img.addClass('z');
    $img.on('click', function () {
        fullpage_api.moveSectionDown();
    })
    $('.section:nth-child(-n+2)').append($img);


    function drawHtml(id, data) {
        var html = '';
        for (var i in data) {
            list = data[i];
            var index = parseInt(i) + 1;
            var html = '<div class="slide slide-IT' + index + '" ';
            html = html + 'style="background-image:' + list.bgImg + ';"' + '>';
            html = html + '<h1 class="ITTitle">' + list.titleText + '</h1>';
            html = html + '</div>';
            id.append(html);
        };
    }

});