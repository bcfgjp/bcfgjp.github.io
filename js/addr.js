// window.onload = function() {
//     new fullpage('#fullpage', {
//         //options here
//         anchors: ['res', 'it', 'study', 'ad', 'lastPage'],
//         menu: '#myMenu'
//     });
// }

$(document).ready(function () {

    allLangChange();

    $('.backhome a').css({
        'color': '#000'
    });

    let language = defaultLang == 'cn' ? langCN : langJP;
    // 设置a标签的href
    $('.tel_tokyo')[0].href = language['addr_japan_call'];
    $('.tel_qiyu')[0].href = language['addr_japan_sub_call'];
    $('.tel_weihai')[0].href = language['addr_china_call'];
    $('.email_tokyo')[0].href = language['addr_japan_mailto'];
    $('.email_qiyu')[0].href = language['addr_japan_sub_mailto'];
    $('.email_weihai')[0].href = language['addr_china_mailto'];

    var slideIndex = 1;
    sliding = false;
    $('#fullpage').fullpage({
        //options here
        anchors: ['addr'],
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


    /* 高德 map Weihai */
    function initializeGaodeMapWeihai() {
        var map = new AMap.Map('container_china', {
            resizeEnable: true,
            zooms: [4, 18],
            zoom: 14, //级别
            center: [122.171884, 37.420937],
            position: [122.171884, 37.420937],
        });
        AMap.plugin([
            'AMap.ToolBar',
        ], function () {
            // 在图面添加工具条控件，工具条控件集成了缩放、平移、定位等功能按钮在内的组合控件
            map.addControl(new AMap.ToolBar({
                // 简易缩放模式，默认为 false
                liteStyle: true
            }));
        });
        var startIcon = new AMap.Icon({
            size: new AMap.Size(35, 35), // 图标尺寸
            image: '../images/img/icon.png',
            imageSize: new AMap.Size(25, 25), // 图标所用图片大小
            imageOffset: new AMap.Pixel(0, 0)
        });
        var marker = new AMap.Marker({
            position: map.getCenter(),
            // icon: '../images/img/icon.png',
            offset: new AMap.Pixel(-8, -10),
            icon: startIcon,
        });
        marker.setMap(map);
        marker.setTitle('灯塔(山东)信息技术有限责任公司'); // 设置鼠标划过点标记显示的文字提示

        if (AMap.UA.mobile) {
            // document.getElementsByClassName('info')[0].style.display='none';
        }
        $('.appgaode').on('click', function () {
            marker.markOnAMAP({
                name: '灯塔(山东)信息技术有限责任公司',
                position: marker.getPosition()
            })
            // $('.app-gaode')[0].href = "https://gaode.com/regeo?lng=122.171884&lat=37.420937&name=灯塔(山东)信息技术有限责任公司&adcode="
        })
    }


    /*google map Tokyo*/
    function initializeGoogleMapTokyo() {
        var mapProp = {
            center: new google.maps.LatLng(35.68986929632759, 139.7706344925692),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var startIcon = {
            url: '../images/img/icon.png',
            scaledSize: new google.maps.Size(25, 25),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
        };
        var map = new google.maps.Map(document.getElementById("container_tokyo"), mapProp);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: startIcon
        });
        marker.setMap(map);
        marker.setTitle('BEACON株式会社 本社');

        $('.apptokyo').on('click', function () {
            //map.panTo(marker.getPosition());
            $('.apptokyo')[0].href = "https://www.google.com/maps/place/BEACON%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BE/@35.689972,139.7688129,17z/data=!4m5!3m4!1s0x0:0x56074d2a515c6544!8m2!3d35.6898619!4d139.770625";
        })
    }

     /*google map komagome*/
     function initializeGoogleMapKomagome() {
        var mapProp = {
            center: new google.maps.LatLng(35.741145, 139.747393),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var startIcon = {
            url: '../images/img/icon.png',
            scaledSize: new google.maps.Size(25, 25),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
        };
        var map = new google.maps.Map(document.getElementById("container_komagome"), mapProp);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: startIcon
        });
        marker.setMap(map);
        marker.setTitle('BEACON株式会社 北区支店');

        $('.apptokomagome').on('click', function () {
            //map.panTo(marker.getPosition());
            $('.apptokomagome')[0].href = "https://www.google.com/maps/place/1-ch%C5%8Dme-6-6+Nishigahara,+Kita+City,+Tokyo+114-0024/@35.7408921,139.7451934,17z/data=!4m13!1m7!3m6!1s0x60188d92283ff9b1:0x686b8e6658b6cf92!2s1-ch%C5%8Dme-6-6+Nishigahara,+Kita+City,+Tokyo+114-0024!3b1!8m2!3d35.7408921!4d139.7473821!3m4!1s0x60188d92283ff9b1:0x686b8e6658b6cf92!8m2!3d35.7408921!4d139.7473821";
        })
    }


    /*google map Qiyu*/
    function initializeGoogleMapQiyu() {
        var mapProp = {
            center: new google.maps.LatLng(35.83580481082419, 139.80770479213783),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var startIcon = {
            url: '../images/img/icon.png',
            scaledSize: new google.maps.Size(25, 25),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(0, 0)
        };
        var map = new google.maps.Map(document.getElementById("container_qiyu"), mapProp);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            icon: startIcon
        });
        marker.setMap(map);
        marker.setTitle('BEACON株式会社 広告事業所');

        $('.appqiyu').on('click', function () {
            $('.appqiyu')[0].href = "https://www.google.com/maps/place/%E5%B7%BD%E5%B1%8B/@35.8357194,139.8054114,17z/data=!4m5!3m4!1s0x60189123f5528673:0xe53dd5f5597436b3!8m2!3d35.8355725!4d139.8074002";
        })
    }

    var fullHref = window.location.href;
    var reg = RegExp(/.com/);
    if (!fullHref.match(reg)) {
        // 不包含
        $('.nav_tokyo').css({
            'display': 'block'
        });
        $('#container_tokyo').css({
            'display': 'block'
        });
        $('.nav_komagome').css({
            'display': 'block'
        });
        $('#container_komagome').css({
            'display': 'block'
        });
        $('.nav_qiyu').css({
            'display': 'block'
        });
        $('#container_qiyu').css({
            'display': 'block'
        });
        $('.nav_china').css({
            'display': 'block'
        });
        $('#container_china').css({
            'display': 'block'
        });
        initializeGoogleMapTokyo();
        initializeGoogleMapKomagome();
        initializeGoogleMapQiyu();
        initializeGaodeMapWeihai();
        // window.onunload = GUnload;
    }
    else {
        $('.nav_tokyo').css({
            'display': 'none'
        });
        $('#container_tokyo').css({
            'display': 'none',
        });
        $('.nav_komagome').css({
            'display': 'none'
        });
        $('#container_komagome').css({
            'display': 'none',
        });
        $('.nav_qiyu').css({
            'display': 'none'
        });
        $('#container_qiyu').css({
            'display': 'none'
        });
        $('nav_china').css({
            'display': 'block'
        });
        $('#container_china').css({
            'display': 'block'
        });
        initializeGaodeMapWeihai();
    }

});