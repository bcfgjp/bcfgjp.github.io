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

    $('#fullpage').fullpage({
        //options here
        anchors: ['res', 'rent', 'management', 'root'],
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
    $('.section:nth-child(-n+3)').append($img);


    ////第一屏
    // 売買
    var data_res = [{
            "iconFont": "icon-fangyuanguanli",
            "titleText": "01",
            "contentText": "高いコストパフォーマンスの投資物件",
        }, {
            "iconFont": "icon-kehuguanli",
            "titleText": "02",
            "contentText": "オーダーメイド住宅のご提案",
        }, {
            "iconFont": "icon-revenue",
            "titleText": "03",
            "contentText": "中古住宅のリフォーム・リノベーション",
        }, {
            "iconFont": "icon-kehuguanli",
            "titleText": "04",
            "contentText": "外国籍のお客さま向けのローンサービス",
        },
        {
            "iconFont": "icon-kehuguanli",
            "titleText": "05",
            "contentText": "移住者向けの不動産投資ライフプランのご提案",
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
            html = html + '<h1 class="listContent">' + list.contentText + '</h1>';
            html = html + '</div></div>';

            id.append(html);
        };
    }


    // 第二屏
    // 賃貸
    var data_rent = [{
            "iconFont": "icon-meishu",
            "titleText": "01",
            "contentText": "高級住宅の賃貸サービス",
        }, {
            "iconFont": "icon-kehuguanli",
            "titleText": "02",
            "contentText": "留学生向け即入居可能物件の紹介サービス",
        }, {
            "iconFont": "icon-kehuguanli",
            "titleText": "03",
            "contentText": "外国籍のお客さま向け、賃貸保証システム",
        }, {
            "iconFont": "icon-kehuguanli",
            "titleText": "04",
            "contentText": "学生寮・シェアハウスの提供サービス",
        },
        {
            "iconFont": "icon-kehuguanli",
            "titleText": "05",
            "contentText": "UR団地・公営住宅の申請代行サービス",
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
            html = html + '<h1 class="listContent">' + list.contentText + '</h1>';
            html = html + '</div></div>';

            id.append(html);
        };
    }


    //第三屏
    // 管理
    var data_management = [{
            "iconFont": "icon-kehuguanli",
            "titleText": "利益の最大化",
            "contentText": "プロによる知識や経験を活かして、委託した物件の高い稼働率を保証、オーナーさまの利益を最大化します。",
        },
        {
            "iconFont": "icon-seal",
            "titleText": "入居者の厳格審査",
            "contentText": "貸主さまに安心して賃貸経営していただけるよう、厳格な審査手順を実施して、入居者の品格や支払い能力を確保します。",
        },
        {
            "iconFont": "icon-data-copy",
            "titleText": "つぎはコスト削減を！",
            "contentText": "お客様のご要望にお応えいたして、物件のメンテナンス費用を削減します。",
        },
        {
            "iconFont": "icon-data02",
            "titleText": "安心して任せて",
            "contentText": "行き届いたサービスを提供している一方、豊富な情報を生かして質の高い賃貸物件をお客様にお届け致し、安定な投資収益率を確保します。",
        },
        {
            "iconFont": "icon-Patrol",
            "titleText": "安全性の保証",
            "contentText": "重大な事故を未然に防ぐため、お客様の物件を定期的に巡回し、不備がないか点検し、建物や設備の異常などの早期発見につとめます。",
        },
        {
            "iconFont": "icon--hours",
            "titleText": "いつでもそばにいる！",
            "contentText": "緊急事態発生時において迅速かつ的確に対応を行うために、管理チームは24時間の緊急対応を支援し、いつでもお客様のそばにいることができます。",
        },
        {
            "iconFont": "icon-fangyuanguanli",
            "titleText": "メンテナンスの心配は不要です",
            "contentText": "様々な物件を管理してきた経験と実績があるので、物件の日常メンテナンスの実施など、オーナー様が安心できるきめ細かなサービスを提供しています。",
        },
        {
            "iconFont": "icon-revenue",
            "titleText": "収支管理のプロがお手伝い",
            "contentText": "物件に関する各種の収支（水、電気、ガスなど）について、操作指示、納付通知、支払代行などのサービスをも提供することもできます。",
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
            html = html + '<h1 class="listTitle">' + list.titleText + '</h1>';
            html = html + '</div>';
            html = html + '</div>';
            html = html + '<div class="propertyDetail">'
            html = html + '<h1 class="listContent">' + list.contentText + '</h1>';
            html = html + '</div></div>';

            id.append(html);
        };
    }

});