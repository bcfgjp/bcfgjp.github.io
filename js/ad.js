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

var data_res_QA = [{
        "QText": "Q: 返品は可能ですか？",
        "AText": "A: 受注製造の為、お客様のご都合によるご返品・交換はご遠慮下さい。 当社は、本サービス製品の品質管理については、不良のある場合は、商品到着後１週間以内に限り弊社が送料負担の上、良品と交換いたします。汚れ・ピンホールなどは一定の許容範囲内においてご了承いただく場合がございます。納期等の理由で再印刷等を行わない場合は、商品代金の全額を返金させていただきます。損害が発生した場合でもお支払いは出来ませんことをご了承下さい。",
    }, {
        "QText": "Q: 納品後に文字の誤りを見つけました。作り直しは可能ですか？",
        "AText": "A: 納品後に、誤字・脱字を発見された場合につきましては、利用規約、デザイン構成サービスページ④にもございますように、申し訳ございませんが当店では責任を負いかねます。(お客様に最終確認を行っていただいたうえで、データの作成・印刷・納品を行っておりますのでご了承ください。)",
    }, {
        "QText": "Q: デザインをお願いすることは可能ですか？",
        "AText": "A: 弊社はWEB製作事業部や看板製作事業部を主体とした会社ですので、インクジェット出力だけでなく、ディレクション、デザインを含めたトータルサポートも可能です。長年培われた看板業務、デザイン制作の経験から、確かな成果のある広告物の制作を承っております。「見た目にもこだわりたい」「効果のある広告をつくりたい」などとお考えの方は、是非弊社にお気軽にご相談下さい。",
    }
];

var data_res_business = [{
        "bgImg": "url(../images/img/ad/business/business-1.jpg)",
        "titleText": "BEACON",
    }, {
        "bgImg": "url(../images/img/ad/business/business-2.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/business/business-3.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/business/business-4.jpg)",
        "titleText": "",
    },
    {
        "bgImg": "url(../images/img/ad/business/business-5.jpg)",
        "titleText": "",
    },
    {
        "bgImg": "url(../images/img/ad/business/business-6.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/business/business-7.jpg)",
        "titleText": "",
    },
    {
        "bgImg": "url(../images/img/ad/business/business-8.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/business/business-9.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/business/business-10.jpg)",
        "titleText": "",
    },
    {
        "bgImg": "url(../images/img/ad/business/business-11.jpg)",
        "titleText": "",
    }
];

var data_res_store = [{
    "bgImg": "url(../images/img/ad/store/store-1.jpg)",
    "titleText": "BEACON",
}];
var data_res_handbill = [{
        "bgImg": "url(../images/img/ad/handbill/handbill-1.png)",
        "titleText": "BEACON",
    }, {
        "bgImg": "url(../images/img/ad/handbill/handbill-2.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/handbill/handbill-3.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/handbill/handbill-4.jpg)",
        "titleText": "",
    },
    {
        "bgImg": "url(../images/img/ad/handbill/handbill-5.jpg)",
        "titleText": "",
    },
    {
        "bgImg": "url(../images/img/ad/handbill/handbill-6.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/handbill/handbill-7.jpg)",
        "titleText": "",
    }
];
var data_res_luminous = [{
        "bgImg": "url(../images/img/ad/luminous/luminous-1.jpg)",
        "titleText": "BEACON",
    }, {
        "bgImg": "url(../images/img/ad/luminous/luminous-2.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/luminous/luminous-3.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/luminous/luminous-4.jpg)",
        "titleText": "",
    },
    {
        "bgImg": "url(../images/img/ad/luminous/luminous-5.jpg)",
        "titleText": "",
    },
    {
        "bgImg": "url(../images/img/ad/luminous/luminous-6.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/luminous/luminous-7.jpg)",
        "titleText": "",
    },
    {
        "bgImg": "url(../images/img/ad/luminous/luminous-8.jpg)",
        "titleText": "",
    }, {
        "bgImg": "url(../images/img/ad/luminous/luminous-9.jpg)",
        "titleText": "",
    }
];
var data_res_board = [{
    "bgImg": "url(../images/img/ad/board/board-1.jpg)",
    "titleText": "BEACON",
}];
var data_res_print = [{
    "bgImg": "url(../images/img/ad/print/print-1.jpg)",
    "titleText": "BEACON",
}];

$(document).ready(function () {

    // 必须放在  $('#fullpage').fullpage 这之前，否则不能显示
    drawHtml($('#ad-one'), data_res_business);
    drawHtml($('#ad-two'), data_res_luminous);
    drawHtml($('#ad-three'), data_res_print);
    drawHtml($('#ad-four'), data_res_handbill);
    drawHtml($('#ad-five'), data_res_store);
    drawHtml($('#ad-six'), data_res_board);

    var slideIndex = 1;
    sliding = false;
    $('#fullpage').fullpage({
        //options here
        anchors: ['ad', 'ad2', 'ad3', 'ad4', 'ad5', 'ad6', 'ad7', 'ad8'],
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

    drawQAHtml($('.QAContent'), data_res_QA);
    function drawQAHtml(id, data) {
        var html = ''; 
        for (var i in data) {
            list = data[i];
            var index = parseInt(i) + 1;
            var html = '<div class="QA QA-' + index + '" >';
            html = html + '<h1 lang="ad_QText_' + i + '" class="question">' + list.QText + '</h1>';
            html = html + '<h1 lang="ad_AText_' + i + '" class="answer">' + list.AText + '</h1>';
            html = html + '</div>';
            id.append(html);
        };
    }

    allLangChange();

});