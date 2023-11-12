function maxWidth50() { return $(window).width() < 950; }

//返回顶部
$('#backtop').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 300)
});

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

function slideNav(ele) { // #nav li //下拉菜单
    $(ele).hover(function () {
        $(this).find("dl").stop().slideToggle();
        $(this).toggleClass("current");
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
var tab_num_cat_li = $('.TAB_CLICK.NUM_CAT li');
if (tab_num_cat_li.length) {
    tab_num_cat_li.click(function (e) {
        if (maxWidth50()) {
            e.stopPropagation();
            var tab = $(this).parent(".TAB_CLICK");
            var con = tab.data("id");
            var on = tab.find("li").index(this);
            $(this).addClass('on').siblings(tab.find("li")).removeClass('on');
            var txt = $(this).find('.con').text();
            $(".g-tit-m1 .select-ul").text(txt);
            tab.slideUp(500, function () {
                tab.prev('.select-ul').removeClass('active');
            });
            $(con).eq(on).show().siblings(con).hide();
        }
    });
}
// 小屏选项卡
var m_tab_select = $('.g-tit-m1 .select-ul');
if (m_tab_select.length) {
    m_tab_select.click(function (e) {
        if (maxWidth50()) {
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


//按钮-换一批点击事件
var btnChangeNumber = $('.g-mzw-btn-m1');
if (btnChangeNumber.length) {
    btnChangeNumber.click(function () {
        let _t = $(this).find(".icon-rotate");
        _t.addClass('active');
        let times = setTimeout(function () {
            _t.removeClass('active');
            clearTimeout(times);
        }, 500); 
    });
}

//客服
$('.m-snv-fix li.qq').click(function () {
    if (maxWidth50()) {
        $('.m-snv-fix .phone-popup.qq').fadeIn(200);
        $('body').addClass('ofh');
        return false;
    }
});
var m_wx_btn = $('.m-snv-fix li.wx');
m_wx_btn.click(function () {
    if (maxWidth50()) {
        $('.m-snv-fix .phone-popup.wx').fadeIn(200);
        $('body').addClass('ofh');
        return false;
    }
});
$('.m-snv-fix .phone-popup .popup .close,.m-snv-fix .phone-popup .black').click(function () {
    $('.m-snv-fix .phone-popup').fadeOut(200);
    $('body').removeClass('ofh');
});

// 400套餐-弹窗
var taocan_tanchuang = $('.m-mzw-table-m1.models1 .g-mzw-btn-m2');
if (taocan_tanchuang.length) {
    taocan_tanchuang.click(function (e) {
        if (maxWidth50()) {
            e.preventDefault();
            let tr = $(this).parents('tr');
            let tc = $('.m-taocan-m1.style1');
            let td1 = tr.find('.td1').text();
            let td4 = tr.find('.td4').text();
            let td5 = tr.find('.td5 .pe-hide a').text();
            let td5a = tr.find('.td5 .pc-hide a').attr("href");
            tc.find('.tit2').text(td1);
            tc.find('.m3').text(td4);
            if (td5) { tc.find('.g-mzw-btn-m4').text(td5); } else { /*tc.find('.url').attr("href", "/choose.asp");*/ tc.find('.g-mzw-btn-m4').text("开始选号"); }
            if (td5a) { tc.find('.url').attr("href", td5a); } else { /*tc.find('.url').attr("href", "/choose.asp");*/ }
            tc.show();
            $("body").addClass("mzw-ofh");
        }
    });
}
var taocan_exit = $('.m-taocan-m1.style1 .exit');
if (taocan_exit.length) {
    taocan_exit.click(function () {
        if (maxWidth50()) {
            $(this).parents('.m-taocan-m1').hide();
            $("body").removeClass("mzw-ofh");
        }
    });
}

// 附加功能资费-弹窗
var fujia_tanchuang = $('.m-mzw-table-m1.models3 .g-mzw-btn-m2');
if (fujia_tanchuang.length) {
    fujia_tanchuang.click(function (e) {
        if (maxWidth50()) {
            e.preventDefault();
            let tr = $(this).parents('tr');
            let tc = $('.m-taocan-m1.style2');
            let td1 = tr.find('.td1').text();
            let td2 = tr.find('.td2').text();
            tc.find('.tit').text(td1);
            tc.find('.m1').text(td2);
            tc.show();
            $("body").addClass("mzw-ofh");
        }
    });
}
var fujia_exit = $('.m-taocan-m1.style2 .exit');
if (fujia_exit.length) {
    fujia_exit.click(function () {
        if (maxWidth50()) {
            $(this).parents('.m-taocan-m1').hide();
            $("body").removeClass("mzw-ofh");
        }
    });
}

var nav_m3_icon = $('.nav-m3 .icon');
if (nav_m3_icon.length) {
    nav_m3_icon.click(function () {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            $(this).siblings('.subnav-m1').stop().slideDown(300);
        } else {
            $(this).siblings('.subnav-m1').stop().slideUp(300);
        }
    });
}

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
            c.html("<p style='height:" + h + "px ; width: " + w + "px;'><img src='/2022/assets/images/loading.gif' style='max-width:32px;display:block;margin:" + (h / 10) + "px auto;' border=0 /></p>");
        },
        success: function (html) {
            c.html(html);
        }
    });
}

function Load_More(id, addID, url, page, param, lmText) {
    var lm = $("#" + id + " .more");
    page++;
    $.ajax({
        error: function (err) { page--; lm.text(err); },
        type: "POST",
        url: url,
        data: "page=" + page + "&"+ param,
        cache: false,
        dataType: "html",
        beforeSend: function () { lm.html("<img src='/2022/assets/images/loading.gif' style='max-width:32px;' border=0 />"); },
        success: function (html) {
            lm.text(lmText);
            $("#" + addID).append(html);
        }
    });
    return page;
}

function openWxWarp(obj) {

    $(obj).closest('.m-taocan-m1').hide();
    $("body").removeClass("mzw-ofh");

    $('.m-snv-fix .phone-popup.wx').fadeIn(200);
    $('body').addClass('ofh');
    e.preventDefault(); e.stopPropagation();
    return false;
}


$(document).ready(function () {

    //var link = document.createElement("link");
    //link.type = "text/css";
    //link.rel = "stylesheet";
    //link.href = "/2022/assets/css/PingFangSCM.css";
    //document.getElementsByTagName("head")[0].appendChild(link);

    var ul_picktel_con = $('.ul-picktel .con');
    if (ul_picktel_con.length) {
        $(document).on("mouseenter mouseleave", ".ul-picktel .con", function (e) {
            if (!maxWidth50()) {
                if (e.type == "mouseenter") {
                    $(this).parent('li').addClass('on');
                    $(this).find('.more').stop().fadeIn(300);
                } else if (e.type == "mouseleave") {
                    $(this).parent('li').removeClass('on');
                    $(this).find('.more').stop().fadeOut(300);
                }
            }
        });
    }

    var changeNumberList = $("#changeNumberList");
    if (changeNumberList.length) {
        $(document).on("click", "#changeNumberList", function (e) {
            getajax("/2022/ajax/AjaxReloadNumber.asp", "theType=400&f=index", "#indexnum");
        });
    }

    var changeNumberListTJ = $("#changeNumberListTJ");
    if (changeNumberListTJ.length) {
        $(document).on("click", "#changeNumberListTJ", function (e) {
            getajax("/2022/ajax/AjaxReloadNumber.asp", "theType=400&f=choose&cate=tj", "#tabnum");
        });
    }

    var changeNumberListYYS = $("#changeNumberListYYS1,#changeNumberListYYS2");
    if (changeNumberListYYS.length) {
        $(document).on("click", "#changeNumberListYYS1,#changeNumberListYYS2", function (e) {
            if ($("#tabYYS1:visible").length > 0) getajax("/2022/ajax/AjaxReloadNumber.asp", "theType=1&f=choose&cate=yys", "#tabYYS1");
            if ($("#tabYYS2:visible").length > 0) getajax("/2022/ajax/AjaxReloadNumber.asp", "theType=2&f=choose&cate=yys", "#tabYYS2");
            if ($("#tabYYS3:visible").length > 0) getajax("/2022/ajax/AjaxReloadNumber.asp", "theType=3&f=choose&cate=yys", "#tabYYS3");
            if ($("#tabYYS4:visible").length > 0) getajax("/2022/ajax/AjaxReloadNumber.asp", "theType=4&f=choose&cate=yys", "#tabYYS4");
            if ($("#tabYYS5:visible").length > 0) getajax("/2022/ajax/AjaxReloadNumber.asp", "theType=5&f=choose&cate=yys", "#tabYYS5");
            if ($("#tabYYS6:visible").length > 0) getajax("/2022/ajax/AjaxReloadNumber.asp", "theType=6&f=choose&cate=yys", "#tabYYS6");
            if ($("#tabYYS7:visible").length > 0) getajax("/2022/ajax/AjaxReloadNumber.asp", "theType=7&f=choose&cate=yys", "#tabYYS7");
        });
    }

    var btnchangecase = $("#changecase");
    if (btnchangecase.length) {
        btnchangecase.click(function () {
            page = Load_More("changecase", "caselist", "/2022/ajax/AjaxReloadList.asp", page, "theType=case", "点击查看更多");
        });
    }

    var btnchangenews = $("#changenews");
    if (btnchangenews.length) {
        btnchangenews.click(function () {
            page = Load_More("changenews", "newslist", "/2022/ajax/AjaxReloadList.asp", page, "theType=news", "点击查看更多");
        });
    }

    var changehelp = $("#changehelp");
    if (changehelp.length) {
        changehelp.click(function () {
            page = Load_More("changehelp", "helplist", "/2022/ajax/AjaxReloadList.asp", page, "theType=help", "点击查看更多");
        });
    }

    var btnP400 = $("#p400_1,#p400_2,#p400_3,#p400_4");
    if (btnP400.length) {
        btnP400.click(function (e) {
            P400 = Load_More(this.id, 'ul400', thePage, P400, '', '加载更多');
            this.focus();
        });
    }

    var needOpenWx = $(".needOpenWx");
    if (needOpenWx.length) {
        $(document).on("click", ".needOpenWx", function (e) {
            return openWxWarp(this);
        });
    }
});





