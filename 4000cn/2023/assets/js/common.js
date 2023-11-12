function maxWidth950() { return $(window).width() < 951; }

function OpenWx() {
    var input = document.getElementById("wx");
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

// 手机-导航-二级-开启
var header_nav_open = $(".header .hdr-pe .g-btn-nav-m1");
if (header_nav_open.length) {
    header_nav_open.click(function (e) {
        $(this).parents('.header').addClass('active-pe');
        $('.m-snv-fix').hide();
        $("body").addClass("mzw-ofh");
    });
}

//手机-导航-二级-关闭
var header_nav_exit = $(".header .hdr-pe .g-btn-exit-m1");
if (header_nav_exit.length) {
    header_nav_exit.click(function (e) {
        $(this).parents('.header').removeClass('active-pe');
        $('.m-snv-fix').show();
        $("body").removeClass("mzw-ofh");
    });
}

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

var btn_show_qq = $(".m-snv-fix li.qq .con");
if (btn_show_qq.length) {
    btn_show_qq.click(function () {
        if (maxWidth950()) {
            $(".m-mzw-popup-m1.qq").show();
            $('body').addClass('ofh')
            return false;
        }
    });
}

var btn_show_wx = $(".m-snv-fix li.wx .con");
if (btn_show_wx.length) {
    btn_show_wx.click(function () {
        if (maxWidth950()) {
            $(".m-mzw-popup-m1.wx").show();
            $('body').addClass('ofh');
            return false;
        }
    });
}

var btn_popup_exit_m1 = $(".m-mzw-popup-m1 .popup-exit");
if (btn_popup_exit_m1.length) {
    btn_popup_exit_m1.click(function () {
        if (maxWidth950()) {
            $(this).parents(".m-mzw-popup-m1").hide();
            $('body').removeClass('ofh')
        }
    });
}

var btn_open_wx_banli = $(".banner-cont .btn, .open_wx_banli");
if (btn_open_wx_banli.length) {
    btn_open_wx_banli.on('click', function (event) {
        $('.z-pop_01').stop().fadeToggle();
        $('body').addClass('ofh');
    });
}

var btn_open_wx_banli_exit = $(".z-popCont_01 .popup-exit");
if (btn_open_wx_banli_exit.length) {
    btn_open_wx_banli_exit.on('click', function (event) {
        $('.z-pop_01').stop().fadeOut();
        $('body').removeClass('ofh');
    });
}
