var crossWise = document.querySelector('.crosswise');
var li = crossWise.querySelector('li');
var overSpread = document.querySelector('.overspread');
var lines = document.querySelector('.line');
var lic = document.querySelector('.right-border');
var lis = document.querySelectorAll('.right-border li');
var flag = true;
lines.addEventListener('click', function () {
    listenerLis();
})

overSpread.addEventListener('click', function () {
    if (flag == false) {
        listenerLis();
    }
})

lic.addEventListener('click', function () {
    if (flag == false) {
        listenerLis();
    }
})

function listenerLis() {
    for (var i = 0; i < lis.length; i++) {
        if (lis[i].style.animation) {
            lis[i].style.animation = '';
            flag = true;
        } else {
            lis[i].style.animation = ' sidleIn 0.5s ease-in-out ' + (i * 0.1 + 0.3) + 's forwards';
            flag = false;
        }
    }
}
overSpread.addEventListener('mousedown', function (e) {
    var x = e.pageX;
    var spaceX = 0;
    var num = li.offsetLeft;
    overSpread.addEventListener('mousemove', move)

    function move(e) {
        spaceX = e.pageX - x;
        var count = spaceX / 2 + num;
        var str = spaceX + num;
        if (str >= 0) {
            count = 0;
        } else if (str <= -window.innerWidth) {
            count = -window.innerWidth;
        }
        li.style.left = count + 'px';
        if (spaceX > 0) {
            if (li.offsetLeft >= (-window.innerWidth * 0.45)) {
                $('.page-break li').eq(0).children().click();
            } else if (li.offsetLeft >= (-window.innerWidth * 0.95)) {
                $('.page-break li').eq(1).children().click();
            }
        } else if (spaceX < 0) {
            if (li.offsetLeft <= (-window.innerWidth * 0.55)) {
                $('.page-break li').eq(2).children().click();
            } else if (li.offsetLeft <= (-window.innerWidth * 0.05)) {
                $('.page-break li').eq(1).children().click();
            }
        }
        //          if (spaceX > 0) {
        //        if (li.offsetLeft <= (-window.innerWidth * 0.45) && li.offsetLeft >= (-window.innerWidth * 0.55)){
        //            $('.page-break li').eq(0).children().click();
        //        } else if (li.offsetLeft <= (-window.innerWidth * 0.95) && li.offsetLeft >= (-window.innerWidth * 1.05)) {
        //            $('.page-break li').eq(1).children().click();
        //        }
        //    } else if (spaceX < 0) {
        //        if (li.offsetLeft <= (-window.innerWidth * 0.45) && li.offsetLeft >= (-window.innerWidth * 0.55)) {
        //            $('.page-break li').eq(2).children().click();
        //        } else if (li.offsetLeft === 0) {
        //            $('.page-break li').eq(1).children().click();
        //        }
        //    }
    }
    overSpread.addEventListener('mouseup', function () {
        overSpread.removeEventListener('mousemove', move)
    })

})


/* for phone and pad */
overSpread.addEventListener('touchstart', function (e) {
    var _touch = e.touches[0];
    var x = _touch.pageX; //_touch.clientX; 
    var spaceX = 0;
    var num = li.offsetLeft;
    overSpread.addEventListener('touchmove', move, false)

    function move(e) {
        var _move = e.touches[0];
        spaceX = _move.pageX - x; //_move.clientX - x;
        var count = spaceX / 2 + num;
        var str = spaceX + num;
        if (str >= 0) {
            count = 0;
        } else if (str <= -window.innerWidth) {
            count = -window.innerWidth;
        }
        li.style.left = count + 'px';
        if (spaceX > 0) {
            if (li.offsetLeft >= (-window.innerWidth * 0.45)) {
                $('.page-break li').eq(0).children().click();
            } else if (li.offsetLeft >= (-window.innerWidth * 0.95)) {
                $('.page-break li').eq(1).children().click();
            }
        } else if (spaceX < 0) {
            if (li.offsetLeft <= (-window.innerWidth * 0.55)) {
                $('.page-break li').eq(2).children().click();
            } else if (li.offsetLeft <= (-window.innerWidth * 0.05)) {
                $('.page-break li').eq(1).children().click();
            }
        }
        else {
            ///alert("no moving ")
        }
    }
    overSpread.addEventListener('touchend', function () {
        console.log("touchend")
    }, false)

}, false)