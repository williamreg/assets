function maxWidth950() { return $(window).width() < 950; }

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

function getajax(url, poststr, content) {
    var c = $(content);
    $.ajax({
        error: function () { c.html("没有更多号码了"); },
        type: "POST",
        url: url,
        data: poststr,
        cache: false,
        dataType: "html",
        beforeSend: function () {
            var h = c.innerHeight(), w = c.innerWidth();
            c.html("<p style='height:" + h + "px ; width: " + w + "px;'><img src='/template/www4009com/assets/images/loading.gif' style='max-width:32px;display:block;margin:" + (h / 10) + "px auto;' border=0 /></p>");
        },
        success: function (html) {
            c.html(html);
        }
    });
}

function Load_More(id, addID, url, page, param) {
    var lm = $("#" + id+" .more");
    page++;
    $.ajax({
        error: function (err) { page--; lm.text(err); },
        type: "POST",
        url: url + "/" + page,
        data: param,
        cache: false,
        dataType: "html",
        beforeSend: function () { lm.html("<img src='/template/www4009com/assets/images/loading.gif' style='max-width:32px;' border=0 />"); },
        success: function (html) {
            lm.text("点击查看更多");
            $("#" + addID).append(html);
        }
    });
    return page;
}

// 手机-导航-二级-开启
$('.header .hdr-pe .g-btn-nav-m1').click(function () {
    $(this).parents('.header').addClass('active-pe');
    $('.m-snv-fix').hide();
});
//手机-导航-二级-关闭
$('.header .hdr-pe .g-btn-exit-m1').click(function () {
    $(this).parents('.header').removeClass('active-pe');
    $('.m-snv-fix').show();
});

$('.m-snv-fix .phone-popup .popup .close,.m-snv-fix .phone-popup .black').click(function () {
    $('.m-snv-fix .phone-popup').fadeOut(200);
    $('body').removeClass('ofh');
});

//客服
$('.m-snv-fix li.qq').click(function () {
    if (maxWidth950()) {
        $(this).parents('ul').siblings('.phone-popup.qq').fadeIn(200)
        $('body').addClass('ofh')
        return false;
    }
});
$('.m-snv-fix li.wx').click(function () {
    if (maxWidth950()) {
        $(this).parents('ul').siblings('.phone-popup.wx').fadeIn(200)
        $('body').addClass('ofh')
        return false;
    }
});
$('.m-pictxt-m1 .newbtn,.g-btn-m3,.btnPicknumber').click(function (e) {
    $(this).parents('.m-taocan-m1').hide();
    if (maxWidth950()) {
        $('.m-snv-fix').find('.phone-popup.wx').fadeIn(200);
        $('body').addClass('ofh');
    }
    else
    {
        $('.m-snv-fix').find('.phone-popup.onlyidx').fadeIn(200)
        $('body').addClass('ofh');
    }
    e.preventDefault();e.stopPropagation();
    return false;
});

$(document).ready(function () {

    //返回顶部
    $('#backtop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 300);
    });

    var picktel = $(".ul-picktel .con");
    if (picktel.length) {
        $(document).on("mouseenter mouseleave", ".ul-picktel .con", function (e) {
            if (e.type == "mouseenter") {
                $(this).parent('li').addClass('on');
                $(this).find('.more').stop().fadeIn(300);
            } else if (e.type == "mouseleave") {
                $(this).parent('li').removeClass('on');
                $(this).find('.more').stop().fadeOut(300);
            }
        });
    }

    var m_select_ul = $(".g-tit-m1 .select-ul");
    if (m_select_ul.length) {
        $(".g-tit-m1 .select-ul").click(function () {
            if (maxWidth950()) {
                let _this = $(this);
                let istrue = _this.hasClass('active');
                if (istrue) {
                    _this.next('ul').slideUp(500, function () {
                        _this.removeClass('active');
                    });
                } else {
                    _this.addClass('active');
                    _this.next('ul').slideDown(500);
                }
            }
        });
    }

    // 选项卡 点击切换-表格-手机
    var tab_click_li = $(".TAB_CLICK li");
    if (tab_click_li.length) {
        tab_click_li.click(function (e) {
            var tab = $(this).parent(".TAB_CLICK");
            var con = tab.data("id");
            var on = tab.find("li").index(this);
            $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
            $(con).eq(on).show().siblings(con).hide();
        });
    }


});
