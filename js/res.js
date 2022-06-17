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

$(document).ready(function () {

    let language = defaultLang == 'cn' ? langCN : langJP;
     // 设置a标签的href
     $('.tel_tokyo')[0].href = language['addr_japan_call'];
     $('.tel_qiyu')[0].href = language['addr_japan_sub_call'];

    $('#fullpage').fullpage({
        //options here
        anchors: ['res', 'rent', 'management', 'migrate', 'root'],
        verticalCentered: false,
        scrollOverflow: true,

        afterLoad(origin, destination, direction) {
            /* do nothing */
        },
        onLeave(origin, destination, direction) {
            /* do nothing */
        }
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
    $('.section:nth-child(-n+4)').append($img);


    ////第一屏
    // 売買
    var data_res = [{
            "iconFont": "icon-fangyuanguanli",
            "titleText": "01",
            "contentText": "",
        }, {
            "iconFont": "icon-zijianfangjuzhuqingkuang",
            "titleText": "02",
            "contentText": "",
        }, {
            "iconFont": "icon-dingzhi-home",
            "titleText": "03",
            "contentText": "",
        }, {
            "iconFont": "icon-jianfangdaikuan",
            "titleText": "04",
            "contentText": "",
        },
        {
            "iconFont": "icon-touzi",
            "titleText": "05",
            "contentText": "",
        }
    ];

    drawOneHtml($('.PROPERTY-one .property-grid'), data_res);

    function drawOneHtml(id, data) {
        for (var i in data) {
            list = data[i];
            var className = "propertylistMiddle";
            if (i == 0) {
                className = "propertylistLeft";
            } else if (i == data.length) {
                className = "propertylistRight";
            } else {
                className = "propertylistMiddle";
            }
            var html = '<div class="propertylist propertylist-' + i + ' ' + className + '">';
            html = html + '<div class="propertylistIcon">';
            html = html + '<div class="listIcon">';
            html = html + '<i class="iconfont ' + list.iconFont + '"></i>';
            html = html + '</div>';
            html = html + '</div>';
            html = html + '<div class="propertyDetail">'
            html = html + '<h1 lang="res_trade_item' + i + '" class="listContent">' + list.contentText + '</h1>';
            html = html + '</div></div>';

            id.append(html);
        };
    }


    // 第二屏
    // 賃貸
    var data_rent = [{
            "iconFont": "icon-lease",
            "titleText": "01",
            "contentText": "",
        }, {
            "iconFont": "icon-haiwaiyouxue-3-copy",
            "titleText": "02",
            "contentText": "",
        }, {
            "iconFont": "icon-baozhengren",
            "titleText": "03",
            "contentText": "",
        }, {
            "iconFont": "icon-xueshengsushe-copy",
            "titleText": "04",
            "contentText": "",
        },
        {
            "iconFont": "icon-a-1_yishoufangmaifangfuwu",
            "titleText": "05",
            "contentText": "",
        }
    ];

    drawTwoHtml($('.PROPERTY-two .property-grid'), data_rent);

    function drawTwoHtml(id, data) {
        for (var i in data) {
            list = data[i];
            var className = "propertylistMiddle";
            if (i == 0) {
                className = "propertylistLeft";
            } else if (i == data.length) {
                className = "propertylistRight";
            } else {
                className = "propertylistMiddle";
            }
            var html = '<div class="propertylist propertylist-' + i + ' ' + className + '">';
            html = html + '<div class="propertylistIcon">';
            html = html + '<div class="listIcon">';
            html = html + '<i class="iconfont ' + list.iconFont + '"></i>';
            html = html + '</div>';
            html = html + '</div>';
            html = html + '<div class="propertyDetail">'
            html = html + '<h1 lang="res_lease_item' + i + '" class="listContent">' + list.contentText + '</h1>';
            html = html + '</div></div>';

            id.append(html);
        };
    }


    //第三屏
    // 管理
    var data_management = [{
            "iconFont": "icon-fangwuzulin3",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon-seal",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon-data-copy",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon-data02",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon-Patrol",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon--hours",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon-danbaoquan",
            "titleText": "",
            "contentText": "",
        },
        {
            "iconFont": "icon-revenue",
            "titleText": "",
            "contentText": "",
        }
    ];

    drawThreeHtml($('.PROPERTY-three .property-grid'), data_management);

    function drawThreeHtml(id, data) {
        for (var i in data) {

            list = data[i];
            var className = "propertylistMiddle";
            if (i == 0 || i == 4) {
                className = "propertylistLeft";
            } else if (i == 3 || i == 7) {
                className = "propertylistRight";
            } else {
                className = "propertylistMiddle";
            }
            var html = '<div class="propertylist propertylist-' + i + ' ' + className + '">';
            html = html + '<div class="propertylistIcon">';
            html = html + '<div class="listIcon">';
            html = html + '<i class="iconfont ' + list.iconFont + '"></i>';
            html = html + '</div>';
            html = html + '<div class="blocktitle">';
            html = html + '<h1 lang="res_mag_t_item' + i + '" class="listTitle">' + list.titleText + '</h1>';
            html = html + '</div>';
            html = html + '</div>';
            html = html + '<div class="propertyDetail">'
            html = html + '<h1 lang="res_mag_c_item' + i + '" class="listContent">' + list.contentText + '</h1>';
            html = html + '</div></div>';

            id.append(html);
        };
    }

    allLangChange();

});