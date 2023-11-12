function maxWidth50() { return $(window).width() < 950; }

// 手机-导航-二级-开启
$('.header .hdr-pe .g-btn-nav-m1').click(function () {
    $(this).parents('.header').addClass('active-pe');
    $('.m-snv-fix').hide();
    $("body").addClass("mzw-ofh");
});

//手机-导航-二级-关闭
$('.header .hdr-pe .g-btn-exit-m1').click(function () {
    $(this).parents('.header').removeClass('active-pe');
    $('.m-snv-fix').show();
    $("body").removeClass("mzw-ofh");
});

// 选项卡
var tab_li = $('.TAB_CLICK li');
if (tab_li.length) {
    tab_li.click(function (e) {
        var tab = $(this).parent(".TAB_CLICK");
        var con = tab.data("id");
        var on = tab.find("li").index(this);
        $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
        $(con).eq(on).show().siblings(con).hide();
    });
}

//返回顶部
$('#backtop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 300)
});


function OpenWx() {
    var input = document.getElementById("openWx");
    input.select();
    input.setSelectionRange(0, input.value.length), document.execCommand('Copy');
    alert("复制微信号码成功请到微信中添加客服微信");
    var locatUrl = "weixin://";
    if (/ipad|iphone|mac/i.test(navigator.userAgent)) {
        var ifr = document.createElement("iframe");
        ifr.src = locatUrl;
        ifr.style.display = "none";
        document.body.appendChild(ifr);
    } else {
        window.location.href = locatUrl;
    }
    return false;
}

var btnToZ_pop_01 = $('.banner .btn');
if (btnToZ_pop_01.length) {
    btnToZ_pop_01.on('click', function (event) {
        $('.z-pop_01').stop().fadeToggle();
        $('body').addClass('ofh');
    });
}
var btnToZ_pop_01_Popup_exit = $('.z-popCont_01 .popup-exit');
if (btnToZ_pop_01_Popup_exit.length) {
    btnToZ_pop_01_Popup_exit.on('click', function (event) {
        $('.z-pop_01').stop().fadeOut();
        $('body').removeClass('ofh');
    });
}
var btn_kf_openQQ = $(".m-snv-fix li.qq .con");
if (btn_kf_openQQ.length) {
    btn_kf_openQQ.click(function () {
        if (maxWidth50()) {
            $(".m-mzw-popup-m1.qq").fadeIn(200);
            $('body').addClass('ofh')
            return false;
        }
    })
}
var btn_kf_openWx = $(".m-snv-fix li.wx .con, .openWx");
if (btn_kf_openWx.length) {
    btn_kf_openWx.click(function () {
        //if (maxWidth50()) {
            $(".m-mzw-popup-m1.wx").fadeIn(200);
            $('body').addClass('ofh');
            return false;
        //}
    })
}
var btn_kf_close = $(".m-mzw-popup-m1 .popup-exit");
if (btn_kf_close.length) {
    btn_kf_close.click(function () {
        $(this).parents(".m-mzw-popup-m1").hide();
        $('body').removeClass('ofh');
        return false;
    })
}
var z_bangzhu_01_dt = $(".z-bangzhu_01 dt");
if (z_bangzhu_01_dt.length) {
    z_bangzhu_01_dt.on('click', function (event) {
        $(this).parents('dl').toggleClass('on').siblings('dd').stop().slideToggle().parents('dl').siblings('dl').removeClass('on').find('dd').stop().slideDown();
    });
}
