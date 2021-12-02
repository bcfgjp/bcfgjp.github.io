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
        anchors: ['map', 'school', 'school2'],
        verticalCentered: false,
        scrollOverflow: true,

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
    $('.section:nth-child(-n+4)').append($img);

    // 数据
    var data = [{
            "iconFont": "icon-xuexiao1",
            "titleText": "大学·大学院",
            "contentText": "留学生が入学可能な日本の大学は、国立、公立（都道府県市立等）と私立とに分かれています。4年制大学は、学部で構成されており、人文学科系、社会科学系、自然科学系に大きく分けられ、さらに学部が学科（英文学科、法学科、経済学科など）に分かれています。大学院では、それらの系統・学部によって、「修士」「博士」「専門職学位」の学位が授与されます。",
        },
        {
            "iconFont": "icon-cz-zyjn",
            "titleText": "専門学校(専門課程を置く専修学校)",
            "contentText": "専門学校は「社会ですぐに役立つ職業能力を養う」ことを目的とするため、職業と密接に結びついた教育を行い、仕事に必要な知識や技術を学びます。なお、専門学校は、美容師、看護師、栄養士、インテリアデザイナーなどの課程を置いています。",
        },
        {
            "iconFont": "icon-haiwaiyouxue",
            "titleText": "語学留学",
            "contentText": "外国語を学ぶ中に、積極的にコミュニケーションが取れる自分になるのは大切ですが、外国語環境があれば成功に一足早くたどり着くでしょう。日本で日本語を勉強すれば、日本語環境に囲まれて、語学力はもちろん、リアルな日本文化生活をも体験することができます。そして、1~2年にわたる日本語学習によって、帰国後進学であれ就職であれ、競争力をより多くたかくなり、将来の可能性をもより広くなります。",
        },
        {
            "iconFont": "icon-xuexiao-",
            "titleText": "芸術留学",
            "contentText": "日本社会は深刻な少子高齢化によって、人手不足の問題がますます厳重になっています。それに取り組むため、2019年4月、日本政府は日本で就労する外国人向けの在留資格「特定技能」を新設します。その在留資格申請が複雑しないです。また、「特定技能」で日本の永住権を取得することもできます。",
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
        html = html + '<h1 class="listTitle">' + list.titleText + '</h1>';
        html = html + '</div>';
        html = html + '</div>';
        html = html + '<div class="studyDetail">'
        html = html + '<h1 class="listContent">' + list.contentText + '</h1>';
        html = html + '</div></div>'
        $('.STUDY-two .study-grid').append(html);

    };

});