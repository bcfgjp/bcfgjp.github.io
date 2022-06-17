// window.onload = function() {
//     new fullpage('#fullpage', {
//         //options here
//         anchors: ['res', 'it', 'study', 'ad', 'lastPage'],
//         menu: '#myMenu'
//     });
// }

function startup() {
    if ($(window).width() === 375 && $(window).height() > 724 && window.devicePixelRatio === 3) {
        $('.mapshape img').css({
            'width': '120%'
        });
        $('.maptext').css({
            'top': '10%',
            'height': '60%',
        });
    }

    if ($(window).width() >= $(window).height() && $(window).width() <= 1024) {
        $('.mapshape img').css({
            'width': '80%',
            // 'transform':'rotate('+20+'deg)'
            'transform': 'rotate(10deg)  translate(90px, -100px)'
        });
    }
}

$(document).ready(function () {

    var flag = true;
    var flag1 = true;

    $('#fullpage').fullpage({
        //options here
        anchors: ['map', 'school', 'abroad'],
        verticalCentered: false,
        scrollOverflow: true,

        onLeave: function (index, nextIndex, direction) {
            var t = setTimeout(
                function () {
                    var color = '#fff';
                    if (nextIndex.index == 1 || nextIndex.index == 2) {
                        color = '#000'
                    }
                    $('.backhome a').css({
                        'color': color
                    });
                }, 350);
        },

        //在谷歌浏览器的的控制台查看结果
        afterLoad: function (anchorLink, index) {
            //var indexV = index.index;
            // console.log(indexV);
        }

    });

    $('.header .back').on('click', function () {
        fullpage_api.moveTo(1);
    })

    // 添加点击波纹事件
    $('.BEACON div a').on('click', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;
        var $span = $('<span></span>');
        $span.css({
            left: x,
            top: y
        }).addClass('damaskeen');
        $(this).append($span);
        setTimeout(function () {
            $span.remove();
        }, 1000)
    })

    // 构建元素img添加到section中
    var $img = $('<img src="../images/next.svg">');
    $img.addClass('z');
    $img.on('click', function () {
        fullpage_api.moveSectionDown();
    })
    $('.section:nth-child(-n+2)').append($img);

    // 数据
    var data = [{
            "iconFont": "icon-xuexiao1",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon-cz-zyjn",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon-haiwaiyouxue",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon-xuexiao-",
            "titleText": "",
            "contentText": "",
        }
    ];

    var sum = 0;
    var perCount = 2;
    var pageNumber = 1;
    for (var i in data) {
        sum += 1;
        list = data[i];
        var className = "studylistRight";
        if (i % 2 == 0) {
            className = "studylistLeft";
        }
        var html = '<div class="studylist studylist-' + i + ' ' + className + '">';
        html = html + '<div class="studylistIcon">';
        html = html + '<div class="listIcon">';
        html = html + '<i class="iconfont ' + list.iconFont + '"></i>';
        html = html + '</div>';
        html = html + '<div class="blocktitle">';
        html = html + '<h1 lang="study_sort_' + i + '" class="listTitle">' + list.titleText + '</h1>';
        html = html + '</div>';
        html = html + '</div>';
        html = html + '<div class="studyDetail">'
        html = html + '<h1 lang="study_sort_' + i + '_detail' + '" class="listContent">' + list.contentText + '</h1>';
        html = html + '</div></div>'
        $('.STUDY-two .study-grid').append(html);

    };

    //需要放在最后
    allLangChange();

});