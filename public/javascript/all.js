function setBackAct(a) {
    var b = "";
    switch (a) {
    case "topHeaderUserHome":
        b = "user.html";
        break;
    case "topHeaderCart":
        b = "cart.html";
        break;
    case "topHeaderLogistics":
        b = "user-order-list-unreceive.html"
    }
    "" != b && (document.cookie = "WAP[back_act]=" + b)
} !
function(a, b) {
    function c() {}
    function d() {}
    function e() {}
    a.VIP = a.VIP || {}; {
        var f = VIP.util = {},
        g = VIP.tmpl = {};
        VIP.page = ""
    }
    $.extend(f, {
        navFix: function(b, c) {
            function d() {
                i = $(this).scrollTop(),
                i > g ? f() : e()
            }
            function e() {
                c.hide(),
                j.removeClass("nav_fix")
            }
            function f() {
                c.show(),
                j.addClass("nav_fix")
            } {
                var g, h, i, j = $(b),
                c = $(c ? c: ".nav_placeholder");
                $(a).scrollTop()
            }
            return j.length ? (g = j.offset().top, h = j.outerHeight(), c.css({
                height: h
            }), $(window).on("scroll resize",
            function() {
                d()
            }), d(), void j.on("touchmove",
            function(a) {
                a.preventDefault()
            })) : !1
        },
        backToTopFix: function(a) {
            function b() {
                d = c(),
                $(this).scrollTop() > d ? e.addClass("backtop-fixed") : e.removeClass("backtop-fixed")
            }
            function c() {
                return 2 * $(window).height()
            }
            var d, e = $(".backtop"),
            a = a || {},
            f = a.right,
            g = a.bottom;
            return e.length ? ($(window).on("scroll resize",
            function() {
                b()
            }), f && g && e.css({
                right: f,
                bottom: g
            }), void b()) : !1
        },
        pullLoadMore: function(a, b) {
            function c() {
                var c = $(window).height(),
                d = $(window).scrollTop(),
                e = $("body").height();
                c + d + b + 60 >= e && (Mar.Seed.request("link", "click", "more-information_btn"), $(window).off("scroll.pullLoadMore resize.pullLoadMore"), a())
            }
            var b = b || 0;
            $(window).on("scroll.pullLoadMore resize.pullLoadMore",
            function() {
                c()
            }),
            c()
        },
        downloadApp: {
            init: function() {
                window.downloadAppConfig && (this.cfg = window.downloadAppConfig, this.btnLink = $("." + this.cfg.cls), this.btnClose = $("span", this.btnLink), this.bindEvents())
            },
            bindEvents: function() {
                var a = this;
                this.btnClose.click(function(b) {
                    var c = h.Get("WAP[clientClose2]") || 0;
                    b.stopPropagation(),
                    a.btnLink.fadeOut(),
                    h.Del("WAP[clientClose]"),
                    h.Set("WAP[clientClose2]", Number(c) + 1, "", "", "/"),
                    Mar.Seed.request("link", "click", a.cfg.page + "_top_client_close_btn")
                }),
                this.btnLink.click(function() {
                    location.href = a.cfg.url,
                    Mar.Seed.request("link", "click", a.cfg.page + "_top_client_download_btn")
                })
            }
        },
        getUserType: function() {
            var a;
            return window.userType && (a = window.userType.slice(0, 1).toLowerCase()),
            a
        }
    }),
    $.extend(g, {
        getBrandList: function(a) {
            var b = "",
            c = this;
            return $.each(a.data,
            function(d, e) {
                var f = e;
                b += 0 == f.brand_id ? c.getBrandTit(f) : c.getBrandItem({
                    data: f,
                    cName: a.cName
                })
            }),
            b
        },
        getBrandTit: function(a) {
            return '<div class="shop_tit clearfix">/<h1>' + a.brand_name + "</h1><span>" + a.detailurl + "</span></div>"
        },
        getBrandItem: function(a) {
            var b = a.data,
            c = a.cName,
            d = b.pms_activetips ? " | " + b.pms_activetips: "",
            e = b.banner_image_url ? '<div class="mark"><img width="88" src="' + b.banner_image_url + '" ></div>': "",
            f = "<span></span>" !== b.agio && b.agio ? b.agio: "",
            g = "",
            h = "";
            return (d || f) && (g += '<div class="goods_msg"><div class="discout"><span class="text">', g += f, g += d, g += "</span></div></div>"),
            h += '<div class="shop_list">                <div class="pic">                    <a href="' + b.detailurl + '" class="itemList">                        <img width="302" height="145" src="view/touch/images/common/loading_l_brand.gif"                        data-brandid="209559" data-original="' + b.index_image2 + '"                        data-onerror="' + b.index_image + '"                         class="' + c + '"                         style="display: block;">                    </a>                    ' + g + "                    " + e + '                </div>                <div class="shop_info clearfix">                    <p class="fl s_brand_name">' + b.brand_name + '</p>                    <div class="fr">                        <span></span>仅剩' + b.leave_time + "                    </div>                </div>            </div>"
        }
    }),
    function() {
        var b = [{
            ev: "click",
            selector: ".J_backToPrev",
            callback: function() {
                var b = window.location.href;
                a.history.go(/#top/.test(b) ? -2 : -1)
            }
        },
        {
            ev: "click",
            selector: ".J_loadMore",
            callback: function() {
                VIP.pager.isDone = !1,
                VIP.pager.load()
            }
        }];
        $.each(b,
        function(a, b) {
            $("body").delegate(b.selector, b.ev, b.callback)
        });
        var c = [{
            ev: "loadMore",
            selector: "",
            callback: function(a, b) {
                VIP.pager.load(a, b)
            }
        },
        {
            ev: "scroll",
            selector: "",
            callback: function() {
                var a = $(this).scrollTop();
                $(this).trigger("loadMore"),
                $(this).trigger("processTip", {
                    sTop: a
                }),
                $(this).trigger("fixingTitle", {
                    sTop: a
                })
            }
        }];
        $.each(c,
        function(b, c) {
            $(a).delegate(c.selector, c.ev, c.callback)
        })
    } (),
    VIP.localStorage = {
        init: function() {
            try {
                window.localStorage.setItem("testLs", 1),
                window.localStorage.getItem("testLs"),
                window.localStorage.removeItem("testLs"),
                VIP.localStorage = localStorage
            } catch(a) {}
        },
        setItem: $.noop,
        getItem: $.noop,
        removeItem: $.noop,
        clear: $.noop
    },
    VIP.localStorage.init();
    var h = function() {
        var a = {
            raw: function(a) {
                return a
            },
            decoded: function(a) {
                return decodeURIComponent(a.replace(/\+/g, " "))
            },
            converted: function(b) {
                0 === b.indexOf('"') && (b = b.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
                try {
                    return a.json ? JSON.parse(b) : b
                } catch(c) {}
            },
            Set: function(b, c, d, e, f) {
                if (void 0 !== c) {
                    if ("number" == typeof d) {
                        var g = expires = new Date;
                        expires.setTime(g.getTime() + 36e5 * d)
                    }
                    return c = a.json ? JSON.stringify(c) : String(c),
                    document.cookie = [b, "=", a.raws ? c: encodeURIComponent(c), d ? ";expires=" + expires.toUTCString() : "", e ? ";domain=" + e: "", f ? ";path=" + f: ""].join("")
                }
            },
            Get: function(b) {
                for (var c = a.raws ? a.raw: a.decoded, d = document.cookie.split("; "), e = b ? void 0 : {},
                f = 0, g = d.length; g > f; f++) {
                    var h = d[f].split("="),
                    i = c(h.shift()),
                    j = c(h.join("="));
                    if (i && i === b) {
                        e = a.converted(j);
                        break
                    }
                    b || (e[b] = a.converted(j))
                }
                return e
            },
            Del: function(a) {
                var b = new Date;
                b.setTime(b.getTime() - 1e4),
                document.cookie = a + "=a; expires=" + b.toGMTString()
            }
        },
        b = {
            versions: function() {
                {
                    var a, b = navigator.userAgent.toLowerCase();
                    navigator.appVersion
                }
                return {
                    trident: b.indexOf("trident") > -1,
                    presto: b.indexOf("presto") > -1,
                    webKit: b.indexOf("applewebkit") > -1,
                    gecko: b.indexOf("gecko") > -1 && -1 == b.indexOf("khtml"),
                    isMobile: !!b.match(/applewebkit.*mobile.*/) || !!b.match(/applewebkit/),
                    isIos: !!b.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                    isAndroid: b.indexOf("android") > -1 || b.indexOf("linux") > -1,
                    isIPhone: b.indexOf("iphone") > -1 || b.indexOf("mac") > -1,
                    isIPad: b.indexOf("ipad") > -1,
                    isSafari: (a = b.match(/version\/([\d.]+).*safari/)) ? a[1] : 0,
                    webApp: -1 == b.indexOf("safari")
                }
            },
            language: (navigator.browserLanguage || navigator.language).toLowerCase(),
            devicesInfo: function() {
                var a = document.body,
                b = window;
                return {
                    cWidth: a.clientWidth,
                    cHeight: a.clientHeight,
                    sWidth: b.screen.width,
                    sHeight: b.screen.height,
                    offWidth: a.offsetWidth,
                    offHeight: a.offsetHeight,
                    acWidth: b.screen.availWidth,
                    acHeight: b.screen.availHeight,
                    wWidth: b.innerWidth,
                    wHeight: b.innerHeight,
                    wOri: b.orientation
                }
            }
        };
        return {
            Get: a.Get,
            Set: a.Set,
            Del: a.Del,
            Browser: b.versions
        }
    } ();
    a.Cookie = h,
    VIP.scroller = function() {
        var b = $(a).scrollTop();
        return {
            getScrollTop: function() {
                return b
            },
            setScrollTop: function(a) {
                b = a
            }
        }
    } (),
    $.extend(c.prototype, {
        page: {
            offset: 0,
            limit: 10
        },
        originalOffset: 10,
        txtNoMoreData: '<div class="more_btn loading">^_^，亲，没有更多了</div>',
        txtGetMoreData: '<div class="more_btn loading">查看更多在售品牌..</div>',
        txtLoading: '<div class="more_btn loading"><img src="view/touch/images/common/loading-big.gif" alt="loading" />加载中</div>',
        threshold: 1e3,
        more: $(".J_pager_more"),
        config: function(a) {
            $.extend(this, a),
            this.originalOffset = this.el.data("offset"),
            this.page.offset = this.getOffset(),
            this.imageClassName = this.el.data("img-class"),
            this.isInitialized = !0,
            this.sendMars(),
            this.init()
        },
        getOffset: function() {
            var a, b, c = this.page.limit,
            d = this.originalOffset;
            return d >= c ? (b = d % c, a = d - b) : a = 0,
            a
        },
        sendMars: function() {
            return this.mars ? void Mar.Seed.request("link", "click", this.mars, this.page.offset) : !1
        },
        load: function() {
            return ! this.isInitialized || this.isLoading || this.isDone || !this.isInView() ? !1 : (this._beforePage(), void this.getData())
        },
        isInView: function() {
            var b = this.more;
            return b.length ? b.offset().top - $(a).scrollTop() - $(a).height() < this.threshold ? !0 : void 0 : !1
        },
        getData: function() {
            var a;
            a = $.extend(this.reqData, this.page),
            $.ajax({
                url: this.url,
                data: this.reqData,
                dataType: "json",
                success: $.proxy(this.handleSuccess, this),
                error: $.proxy(this.handleError, this)
            })
        },
        filterData: function(a) {
            var b = this.page.offset,
            c = this.originalOffset;
            return c > b && (a = a.slice(c - b)),
            a
        },
        handleSuccess: function(a) {
            a && a.result ? a.data && a.data.length ? this.render(this.filterData(a.data), a) : this.isDone = !0 : this.handleError(),
            this._afterPage()
        },
        handleError: function() {
            this.error(),
            this.isLoading = !1
        },
        error: function() {
            this.more.html("网络延时，请重试")
        },
        beforePage: function() {
            this.more.html(this.txtLoading)
        },
        afterPage: function() {
            this.isDone ? this.more.html(this.txtNoMoreData) : ($("." + this.imageClassName).slice(this.page.offset).lazyload({
                effect: "fadeIn",
                effect_speed: 100,
                threshold: 1e3
            }), this.more.html(this.txtGetMoreData))
        },
        _beforePage: function() {
            this.beforePage(),
            this.isLoading = !0
        },
        _afterPage: function() {
            this.afterPage(),
            this.isLoading = !1,
            this.setPage({
                offset: this.page.offset + this.page.limit
            }),
            this.sendMars()
        },
        setPage: function(a) {
            $.extend(this.page, a)
        },
        render: $.noop,
        init: $.noop,
        isLoading: !1,
        isDone: !1,
        isInitialized: !1
    }),
    VIP.pager = new c,
    $.extend(d.prototype, {
        titleSelector: ".J_title_fixer_title",
        contentSelector: ".J_title_fixer_content",
        fixedTitleSelector: ".J_title_fixer_fixed_title",
        config: function(b) {
            $.extend(this, b),
            this.titleList = $(this.titleSelector, this.el),
            this.contentList = $(this.contentSelector, this.el),
            this.fixedTitle = $(this.fixedTitleSelector, this.el),
            this.bindEvent(),
            $(a).trigger("fixingTitle", {
                sTop: $(a).scrollTop()
            })
        },
        scroller: a,
        addTitle: function(a) {
            this.titleList.push(a)
        },
        addContent: function(a) {
            this.contentList.push(a)
        },
        bindEvent: function() {
            var b = this,
            c = this.scroller;
            c === a ? $(a).on("fixingTitle", $.proxy(this.handleScroll, this)) : c.on("scroll",
            function(a) {
                b.handleScroll(a, {
                    sTop: c.scrollTop()
                })
            })
        },
        showTitle: function(a) {
            this.fixedTitle.html(a).show()
        },
        hideTitle: function() {
            this.fixedTitle.hide()
        },
        handleScroll: function(a, b) {
            var c = this.getMatchedContent(b),
            d = c.k,
            e = $(c.v),
            f = $(this.titleList[d]);
            return f ? void(e.length ? e != this.curContent && (this.curContent = e, this.showTitle(f.html(), f)) : this.hideTitle()) : !1
        },
        getMatchedContent: function(a) {
            var b, c, d = this.contentList,
            e = a.sTop;
            return d.each(function(a) {
                var d = $(this),
                f = d.offset().top,
                g = d.height();
                return e >= f && f + g > e ? (b = d, c = a, !1) : void 0
            }),
            {
                k: c,
                v: b
            }
        },
        init: $.noop
    }),
    VIP.TitleFixer = d,
    $.extend(e.prototype, {
        itemSelector: ".J_process_tip_item",
        tipHTML: '            <div class="scroll_tips_right">              <span class="i_clock"></span>              <div class="scroll_info">                <p class="J_title"></p>                <p><span class="J_cur"></span> / <span class="J_total"></span></p>              </div>            </div>        ',
        el: $(b.body),
        scroller: a,
        init: function(b) {
            $.extend(this, b),
            this.beforeInit(),
            this.tip = $(this.tipHTML),
            this.el.append(this.tip),
            this.bindEvent(),
            $(a).trigger("processTip", {
                sTop: $(a).scrollTop()
            })
        },
        bindEvent: function() {
            $(a).on("processTip", $.proxy(this.handleScroll, this))
        },
        showTip: function() {
            var a = this;
            this.tip.show(),
            this.interval && clearInterval(this.interval),
            this.interval = setTimeout(function() {
                a.tip.hide()
            },
            2e3)
        },
        hideTip: function() {
            this.tip.hide()
        },
        beforeInit: function() {
            this.data = [{
                title: "今日新品",
                count: this.el.data("tcount")
            },
            {
                title: "昨日上线",
                count: this.el.data("ycount")
            },
            {
                title: "最后疯抢",
                count: this.el.data("lcount")
            }]
        },
        setTip: function(a, b) {
            for (var c, d, e, f = 0,
            g = 0; g < this.data.length; g++) if (f += this.data[g].count, f > b) {
                c = this.data[g];
                break
            }
            c && (d = c.title, e = b - (f - c.count) + 1, f = c.count),
            this.tip.find(".J_title").text(d),
            this.tip.find(".J_cur").text(e),
            this.tip.find(".J_total").text(f)
        },
        isInView: function(a) {
            var b = this.el,
            c = b.offset().top,
            d = b.height();
            return a >= c - 200 && c + d - 200 > a ? !0 : !1
        },
        handleScroll: function(a, b) {
            var c, d = $(this.itemSelector, this.el),
            e = b.sTop,
            f = this.isInView(e);
            f ? (d.each(function(a) {
                var b = $(this),
                d = b.offset().top,
                f = b.height();
                return e >= d - 200 && d + f - 200 > e ? (c = b, key = a, !1) : void 0
            }), c && (this.showTip(), this.setTip(c, key))) : this.hideTip()
        },
        getMatchedContent: function(a) {
            var b, c, d = this.contentList,
            e = a.sTop;
            return d.each(function(a) {
                var d = $(this),
                f = d.offset().top,
                g = d.height();
                return e >= f && f + g > e ? (b = d, c = a, !1) : void 0
            }),
            {
                k: c,
                v: b
            }
        }
    }),
    VIP.ProcessTip = e
} (window, document),
function() {
    var a = this,
    b = a._,
    c = {},
    d = Array.prototype,
    e = Object.prototype,
    f = Function.prototype,
    g = d.push,
    h = d.slice,
    i = d.concat,
    j = e.toString,
    k = e.hasOwnProperty,
    l = d.forEach,
    m = d.map,
    n = d.reduce,
    o = d.reduceRight,
    p = d.filter,
    q = d.every,
    r = d.some,
    s = d.indexOf,
    t = d.lastIndexOf,
    u = Array.isArray,
    v = Object.keys,
    w = f.bind,
    x = function(a) {
        return a instanceof x ? a: this instanceof x ? void(this._wrapped = a) : new x(a)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x,
    x.VERSION = "1.6.0";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null == a) return a;
        if (l && a.forEach === l) a.forEach(b, d);
        else if (a.length === +a.length) {
            for (var e = 0,
            f = a.length; f > e; e++) if (b.call(d, a[e], e, a) === c) return
        } else for (var g = x.keys(a), e = 0, f = g.length; f > e; e++) if (b.call(d, a[g[e]], g[e], a) === c) return;
        return a
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d: m && a.map === m ? a.map(b, c) : (y(a,
        function(a, e, f) {
            d.push(b.call(c, a, e, f))
        }), d)
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)),
        e ? a.reduce(b, c) : a.reduce(b);
        if (y(a,
        function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
        }), !e) throw new TypeError(z);
        return c
    },
    x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)),
        e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length
        }
        if (y(a,
        function(h, i, j) {
            i = g ? g[--f] : --f,
            e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
        }), !e) throw new TypeError(z);
        return c
    },
    x.find = x.detect = function(a, b, c) {
        var d;
        return A(a,
        function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0
        }),
        d
    },
    x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d: p && a.filter === p ? a.filter(b, c) : (y(a,
        function(a, e, f) {
            b.call(c, a, e, f) && d.push(a)
        }), d)
    },
    x.reject = function(a, b, c) {
        return x.filter(a,
        function(a, d, e) {
            return ! b.call(c, a, d, e)
        },
        c)
    },
    x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e: q && a.every === q ? a.every(b, d) : (y(a,
        function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c
        }), !!e)
    };
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e: r && a.some === r ? a.some(b, d) : (y(a,
        function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c: void 0
        }), !!e)
    };
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a,
        function(a) {
            return a === b
        })
    },
    x.invoke = function(a, b) {
        var c = h.call(arguments, 2),
        d = x.isFunction(b);
        return x.map(a,
        function(a) {
            return (d ? b: a[b]).apply(a, c)
        })
    },
    x.pluck = function(a, b) {
        return x.map(a, x.property(b))
    },
    x.where = function(a, b) {
        return x.filter(a, x.matches(b))
    },
    x.findWhere = function(a, b) {
        return x.find(a, x.matches(b))
    },
    x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        var d = -1 / 0,
        e = -1 / 0;
        return y(a,
        function(a, f, g) {
            var h = b ? b.call(c, a, f, g) : a;
            h > e && (d = a, e = h)
        }),
        d
    },
    x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        var d = 1 / 0,
        e = 1 / 0;
        return y(a,
        function(a, f, g) {
            var h = b ? b.call(c, a, f, g) : a;
            e > h && (d = a, e = h)
        }),
        d
    },
    x.shuffle = function(a) {
        var b, c = 0,
        d = [];
        return y(a,
        function(a) {
            b = x.random(c++),
            d[c - 1] = d[b],
            d[b] = a
        }),
        d
    },
    x.sample = function(a, b, c) {
        return null == b || c ? (a.length !== +a.length && (a = x.values(a)), a[x.random(a.length - 1)]) : x.shuffle(a).slice(0, Math.max(0, b))
    };
    var B = function(a) {
        return null == a ? x.identity: x.isFunction(a) ? a: x.property(a)
    };
    x.sortBy = function(a, b, c) {
        return b = B(b),
        x.pluck(x.map(a,
        function(a, d, e) {
            return {
                value: a,
                index: d,
                criteria: b.call(c, a, d, e)
            }
        }).sort(function(a, b) {
            var c = a.criteria,
            d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return - 1
            }
            return a.index - b.index
        }), "value")
    };
    var C = function(a) {
        return function(b, c, d) {
            var e = {};
            return c = B(c),
            y(b,
            function(f, g) {
                var h = c.call(d, f, g, b);
                a(e, h, f)
            }),
            e
        }
    };
    x.groupBy = C(function(a, b, c) {
        x.has(a, b) ? a[b].push(c) : a[b] = [c]
    }),
    x.indexBy = C(function(a, b, c) {
        a[b] = c
    }),
    x.countBy = C(function(a, b) {
        x.has(a, b) ? a[b]++:a[b] = 1
    }),
    x.sortedIndex = function(a, b, c, d) {
        c = B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h
        }
        return f
    },
    x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
    },
    x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length: x.keys(a).length
    },
    x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : 0 > b ? [] : h.call(a, 0, b)
    },
    x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b))
    },
    x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
    },
    x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b)
    },
    x.compact = function(a) {
        return x.filter(a, x.identity)
    };
    var D = function(a, b, c) {
        return b && x.every(a, x.isArray) ? i.apply(c, a) : (y(a,
        function(a) {
            x.isArray(a) || x.isArguments(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
        }), c)
    };
    x.flatten = function(a, b) {
        return D(a, b, [])
    },
    x.without = function(a) {
        return x.difference(a, h.call(arguments, 1))
    },
    x.partition = function(a, b, c) {
        b = B(b);
        var d = [],
        e = [];
        return y(a,
        function(a) { (b.call(c, a) ? d: e).push(a)
        }),
        [d, e]
    },
    x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a,
        f = [],
        g = [];
        return y(e,
        function(c, d) { (b ? d && g[g.length - 1] === c: x.contains(g, c)) || (g.push(c), f.push(a[d]))
        }),
        f
    },
    x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    },
    x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a),
        function(a) {
            return x.every(b,
            function(b) {
                return x.contains(b, a)
            })
        })
    },
    x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a,
        function(a) {
            return ! x.contains(b, a)
        })
    },
    x.zip = function() {
        for (var a = x.max(x.pluck(arguments, "length").concat(0)), b = new Array(a), c = 0; a > c; c++) b[c] = x.pluck(arguments, "" + c);
        return b
    },
    x.object = function(a, b) {
        if (null == a) return {};
        for (var c = {},
        d = 0,
        e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c
    },
    x.indexOf = function(a, b, c) {
        if (null == a) return - 1;
        var d = 0,
        e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b),
            a[d] === b ? d: -1;
            d = 0 > c ? Math.max(0, e + c) : c
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (; e > d; d++) if (a[d] === b) return d;
        return - 1
    },
    x.lastIndexOf = function(a, b, c) {
        if (null == a) return - 1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c: a.length; e--;) if (a[e] === b) return e;
        return - 1
    },
    x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0),
        c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;) f[e++] = a,
        a += c;
        return f
    };
    var E = function() {};
    x.bind = function(a, b) {
        var c, d;
        if (w && a.bind === w) return w.apply(a, h.call(arguments, 1));
        if (!x.isFunction(a)) throw new TypeError;
        return c = h.call(arguments, 2),
        d = function() {
            if (! (this instanceof d)) return a.apply(b, c.concat(h.call(arguments)));
            E.prototype = a.prototype;
            var e = new E;
            E.prototype = null;
            var f = a.apply(e, c.concat(h.call(arguments)));
            return Object(f) === f ? f: e
        }
    },
    x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            for (var c = 0,
            d = b.slice(), e = 0, f = d.length; f > e; e++) d[e] === x && (d[e] = arguments[c++]);
            for (; c < arguments.length;) d.push(arguments[c++]);
            return a.apply(this, d)
        }
    },
    x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        if (0 === b.length) throw new Error("bindAll must be passed function names");
        return y(b,
        function(b) {
            a[b] = x.bind(a[b], a)
        }),
        a
    },
    x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity),
        function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
        }
    },
    x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c)
        },
        b)
    },
    x.defer = function(a) {
        return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
    },
    x.throttle = function(a, b, c) {
        var d, e, f, g = null,
        h = 0;
        c || (c = {});
        var i = function() {
            h = c.leading === !1 ? 0 : x.now(),
            g = null,
            f = a.apply(d, e),
            d = e = null
        };
        return function() {
            var j = x.now();
            h || c.leading !== !1 || (h = j);
            var k = b - (j - h);
            return d = this,
            e = arguments,
            0 >= k ? (clearTimeout(g), g = null, h = j, f = a.apply(d, e), d = e = null) : g || c.trailing === !1 || (g = setTimeout(i, k)),
            f
        }
    },
    x.debounce = function(a, b, c) {
        var d, e, f, g, h, i = function() {
            var j = x.now() - g;
            b > j ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), f = e = null))
        };
        return function() {
            f = this,
            e = arguments,
            g = x.now();
            var j = c && !d;
            return d || (d = setTimeout(i, b)),
            j && (h = a.apply(f, e), f = e = null),
            h
        }
    },
    x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b: (c = !0, b = a.apply(this, arguments), a = null, b)
        }
    },
    x.wrap = function(a, b) {
        return x.partial(b, a)
    },
    x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments,
            c = a.length - 1; c >= 0; c--) b = [a[c].apply(this, b)];
            return b[0]
        }
    },
    x.after = function(a, b) {
        return function() {
            return--a < 1 ? b.apply(this, arguments) : void 0
        }
    },
    x.keys = function(a) {
        if (!x.isObject(a)) return [];
        if (v) return v(a);
        var b = [];
        for (var c in a) x.has(a, c) && b.push(c);
        return b
    },
    x.values = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = a[b[e]];
        return d
    },
    x.pairs = function(a) {
        for (var b = x.keys(a), c = b.length, d = new Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]];
        return d
    },
    x.invert = function(a) {
        for (var b = {},
        c = x.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d];
        return b
    },
    x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort()
    },
    x.extend = function(a) {
        return y(h.call(arguments, 1),
        function(b) {
            if (b) for (var c in b) a[c] = b[c]
        }),
        a
    },
    x.pick = function(a) {
        var b = {},
        c = i.apply(d, h.call(arguments, 1));
        return y(c,
        function(c) {
            c in a && (b[c] = a[c])
        }),
        b
    },
    x.omit = function(a) {
        var b = {},
        c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b
    },
    x.defaults = function(a) {
        return y(h.call(arguments, 1),
        function(b) {
            if (b) for (var c in b) void 0 === a[c] && (a[c] = b[c])
        }),
        a
    },
    x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({},
        a) : a
    },
    x.tap = function(a, b) {
        return b(a),
        a
    };
    var F = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped),
        b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return ! 1;
        switch (e) {
        case "[object String]":
            return a == String(b);
        case "[object Number]":
            return a != +a ? b != +b: 0 == a ? 1 / a == 1 / b: a == +b;
        case "[object Date]":
        case "[object Boolean]":
            return + a == +b;
        case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
        }
        if ("object" != typeof a || "object" != typeof b) return ! 1;
        for (var f = c.length; f--;) if (c[f] == a) return d[f] == b;
        var g = a.constructor,
        h = b.constructor;
        if (g !== h && !(x.isFunction(g) && g instanceof g && x.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return ! 1;
        c.push(a),
        d.push(b);
        var i = 0,
        k = !0;
        if ("[object Array]" == e) {
            if (i = a.length, k = i == b.length) for (; i--&&(k = F(a[i], b[i], c, d)););
        } else {
            for (var l in a) if (x.has(a, l) && (i++, !(k = x.has(b, l) && F(a[l], b[l], c, d)))) break;
            if (k) {
                for (l in b) if (x.has(b, l) && !i--) break;
                k = !i
            }
        }
        return c.pop(),
        d.pop(),
        k
    };
    x.isEqual = function(a, b) {
        return F(a, b, [], [])
    },
    x.isEmpty = function(a) {
        if (null == a) return ! 0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a) if (x.has(a, b)) return ! 1;
        return ! 0
    },
    x.isElement = function(a) {
        return ! (!a || 1 !== a.nodeType)
    },
    x.isArray = u ||
    function(a) {
        return "[object Array]" == j.call(a)
    },
    x.isObject = function(a) {
        return a === Object(a)
    },
    y(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]"
        }
    }),
    x.isArguments(arguments) || (x.isArguments = function(a) {
        return ! (!a || !x.has(a, "callee"))
    }),
    "function" != typeof / . / &&(x.isFunction = function(a) {
        return "function" == typeof a
    }),
    x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a))
    },
    x.isNaN = function(a) {
        return x.isNumber(a) && a != +a
    },
    x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
    },
    x.isNull = function(a) {
        return null === a
    },
    x.isUndefined = function(a) {
        return void 0 === a
    },
    x.has = function(a, b) {
        return k.call(a, b)
    },
    x.noConflict = function() {
        return a._ = b,
        this
    },
    x.identity = function(a) {
        return a
    },
    x.constant = function(a) {
        return function() {
            return a
        }
    },
    x.property = function(a) {
        return function(b) {
            return b[a]
        }
    },
    x.matches = function(a) {
        return function(b) {
            if (b === a) return ! 0;
            for (var c in a) if (a[c] !== b[c]) return ! 1;
            return ! 0
        }
    },
    x.times = function(a, b, c) {
        for (var d = Array(Math.max(0, a)), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d
    },
    x.random = function(a, b) {
        return null == b && (b = a, a = 0),
        a + Math.floor(Math.random() * (b - a + 1))
    },
    x.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var G = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    G.unescape = x.invert(G.escape);
    var H = {
        escape: new RegExp("[" + x.keys(G.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(G.unescape).join("|") + ")", "g")
    };
    x.each(["escape", "unescape"],
    function(a) {
        x[a] = function(b) {
            return null == b ? "": ("" + b).replace(H[a],
            function(b) {
                return G[a][b]
            })
        }
    }),
    x.result = function(a, b) {
        if (null == a) return void 0;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c
    },
    x.mixin = function(a) {
        y(x.functions(a),
        function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [this._wrapped];
                return g.apply(a, arguments),
                M.call(this, c.apply(x, a))
            }
        })
    };
    var I = 0;
    x.uniqueId = function(a) {
        var b = ++I + "";
        return a ? a + b: b
    },
    x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var J = /(.)^/,
    K = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "   ": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({},
        c, x.templateSettings);
        var e = new RegExp([(c.escape || J).source, (c.interpolate || J).source, (c.evaluate || J).source].join("|") + "|$", "g"),
        f = 0,
        g = "__p+='";
        a.replace(e,
        function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(L,
            function(a) {
                return "\\" + K[a]
            }),
            c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"),
            d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"),
            e && (g += "';\n" + e + "\n__p+='"),
            f = h + b.length,
            b
        }),
        g += "';\n",
        c.variable || (g = "with(obj||{}){\n" + g + "}\n"),
        g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g)
        } catch(h) {
            throw h.source = g,
            h
        }
        if (b) return d(b, x);
        var i = function(a) {
            return d.call(this, a, x)
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}",
        i
    },
    x.chain = function(a) {
        return x(a).chain()
    };
    var M = function(a) {
        return this._chain ? x(a).chain() : a
    };
    x.mixin(x),
    y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments),
            "shift" != a && "splice" != a || 0 !== c.length || delete c[0],
            M.call(this, c)
        }
    }),
    y(["concat", "join", "slice"],
    function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return M.call(this, b.apply(this._wrapped, arguments))
        }
    }),
    x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0,
            this
        },
        value: function() {
            return this._wrapped
        }
    }),
    "function" == typeof define && define.amd && define("underscore", [],
    function() {
        return x
    })
}.call(this),
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
} (function(a) {
    function b(a) {
        return h.raw ? a: encodeURIComponent(a)
    }
    function c(a) {
        return h.raw ? a: decodeURIComponent(a)
    }
    function d(a) {
        return b(h.json ? JSON.stringify(a) : String(a))
    }
    function e(a) {
        0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return a = decodeURIComponent(a.replace(g, " ")),
            h.json ? JSON.parse(a) : a
        } catch(b) {}
    }
    function f(b, c) {
        var d = h.raw ? b: e(b);
        return a.isFunction(c) ? c(d) : d
    }
    var g = /\+/g,
    h = a.cookie = function(e, g, i) {
        if (void 0 !== g && !a.isFunction(g)) {
            if (i = a.extend({},
            h.defaults, i), "number" == typeof i.expires) {
                var j = i.expires,
                k = i.expires = new Date;
                k.setTime( + k + 864e5 * j)
            }
            return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path: "", i.domain ? "; domain=" + i.domain: "", i.secure ? "; secure": ""].join("")
        }
        for (var l = e ? void 0 : {},
        m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
            var p = m[n].split("="),
            q = c(p.shift()),
            r = p.join("=");
            if (e && e === q) {
                l = f(r, g);
                break
            }
            e || void 0 === (r = f(r)) || (l[q] = r)
        }
        return l
    };
    h.defaults = {},
    a.removeCookie = function(b, c) {
        return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({},
        c, {
            expires: -1
        })), !a.cookie(b))
    }
}),
function(a, b, c, d) {
    var e = a(b);
    a.fn.lazyload = function(f) {
        function g() {
            var b = 0;
            k.each(function() {
                var c = a(this);
                if (!l.skip_invisible || c.is(":visible")) if (a.abovethetop(this, l) || a.leftofbegin(this, l));
                else if (a.belowthefold(this, l) || a.rightoffold(this, l)) {
                    if (++b > l.failure_limit) return ! 1
                } else c.trigger("appear"),
                b = 0
            })
        }
        function h(a) {
            return a && a.width > 1 && a.height > 1
        }
        function i(b) {
            var c = a.trim(b.attr("data-" + l.error_attribute));
            c && a("<img />").bind("load",
            function() {
                b.hide().attr("src", c)[l.effect](l.effect_speed)
            }).attr("src", c)
        }
        var j, k = this,
        l = {
            threshold: 0,
            failure_limit: 0,
            event: "scroll",
            effect: "show",
            container: b,
            data_attribute: "original",
            error_attribute: "onerror",
            skip_invisible: !0,
            appear: null,
            load: null,
            placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
        };
        return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(l, f)),
        j = l.container === d || l.container === b ? e: a(l.container),
        0 === l.event.indexOf("scroll") && j.bind(l.event,
        function() {
            return g()
        }),
        this.each(function() {
            var b = this,
            c = a(b);
            b.loaded = !1,
            (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", l.placeholder),
            c.one("appear",
            function() {
                if (!this.loaded) {
                    if (l.appear) {
                        var d = k.length;
                        l.appear.call(b, d, l)
                    }
                    a("<img />").bind("load",
                    function() {
                        var d = c.attr("data-" + l.data_attribute);
                        c.hide(),
                        c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"),
                        c[l.effect](l.effect_speed),
                        b.loaded = !0;
                        var e = a.grep(k,
                        function(a) {
                            return ! a.loaded
                        });
                        if (k = a(e), l.load) {
                            var f = k.length;
                            l.load.call(b, f, l)
                        }
                        h(this) || i(c)
                    }).bind("error",
                    function() {
                        i(c)
                    }).attr("src", c.attr("data-" + l.data_attribute))
                }
            }),
            0 !== l.event.indexOf("scroll") && c.bind(l.event,
            function() {
                b.loaded || c.trigger("appear")
            })
        }),
        e.bind("resize",
        function() {
            g()
        }),
        /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow",
        function(b) {
            b.originalEvent && b.originalEvent.persisted && k.each(function() {
                a(this).trigger("appear")
            })
        }),
        a(c).ready(function() {
            g()
        }),
        this
    },
    a.belowthefold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight: e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(),
        g <= a(c).offset().top - f.threshold
    },
    a.rightoffold = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(),
        g <= a(c).offset().left - f.threshold
    },
    a.abovethetop = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top,
        g >= a(c).offset().top + f.threshold + a(c).height()
    },
    a.leftofbegin = function(c, f) {
        var g;
        return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left,
        g >= a(c).offset().left + f.threshold + a(c).width()
    },
    a.inviewport = function(b, c) {
        return ! (a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
    },
    a.extend(a.expr[":"], {
        "below-the-fold": function(b) {
            return a.belowthefold(b, {
                threshold: 0
            })
        },
        "above-the-top": function(b) {
            return ! a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-screen": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-screen": function(b) {
            return ! a.rightoffold(b, {
                threshold: 0
            })
        },
        "in-viewport": function(b) {
            return a.inviewport(b, {
                threshold: 0
            })
        },
        "above-the-fold": function(b) {
            return ! a.belowthefold(b, {
                threshold: 0
            })
        },
        "right-of-fold": function(b) {
            return a.rightoffold(b, {
                threshold: 0
            })
        },
        "left-of-fold": function(b) {
            return ! a.rightoffold(b, {
                threshold: 0
            })
        }
    })
} (jQuery, window, document);
var hawk = function() {
    var a = ($('[data-client="down"]'), $('[data-dismiss="down"]')),
    b = $('[data-depot="true"]'),
    c = $('[data-shopcart="true"]'),
    d = {
        getButtons: function(a) {
            if (a.buttons !== !0 && !$.isArray(a.buttons)) return ! 1;
            if (a.buttons === !0) switch (a.type) {
            case "question":
                a.buttons = ["取消", "确定"];
                break;
            case "confirm":
                a.buttons = ["取消", "确定"];
                break;
            case "submit":
                a.buttons = ["取消", "提交"];
                break;
            case "ordersubmit":
                a.buttons = ["取消", "确定"];
                break;
            case "defined":
                a.buttons = null != a.buttonsCus ? a.buttonsCus: ["取消", "确定"];
                break;
            default:
                a.buttons = ["确定"]
            }
            return a.buttons.reverse()
        },
        getType: function(a) {
            switch (a.type) {
            case "confirm":
            case "error":
            case "info":
            case "question":
            case "warning":
            case "submit":
            case "ordersubmit":
                return a.type.charAt(0).toUpperCase() + a.type.slice(1).toLowerCase();
            default:
                return ! 1
            }
        },
        init: function() {
            var a, b = {
                modal: null,
                modalHide: !1,
                width: 300,
                top: 43,
                animate_speed: "fast",
                effect: "fadeIn",
                autoClose: !1,
                setClass: !1,
                closeBtn: !0,
                closeCall: !1,
                buttons: !1,
                buttonsCus: null,
                position: "center",
                setPosition: 100,
                setResize: !0,
                isCenter: !0,
                autoCall: !1,
                onAutoComplete: null,
                onCloseCallBack: !1,
                onCloseComplete: null,
                onCancleComplete: null,
                autoCall: !1,
                onAutoComplete: null,
                centerMessage: !0,
                message: "",
                isLoading: !1,
                loading: '<span class="ui-clockout">                            <span class="ui-clockin">                             <span class="ui-swing1"></span>                             <span class="ui-swing2"></span>                             <span class="ui-clockcirle"></span>                           </span>                       </span>',
                type: null,
                tipTool: !1,
                tipsArrow: "top",
                tipsLeft: "",
                title: null,
                inserTarget: null,
                source: !1,
                overAnimate: !0,
                overShow: !0,
                overClose: !0,
                overOpacity: .6,
                overZindex: null,
                animation: !1,
                animationFunction: null
            },
            c = this,
            e = {};
            "string" == typeof arguments[0] && (e.message = arguments[0]),
            ("object" == typeof arguments[0] || "object" == typeof arguments[1]) && (e = $.extend(e, "object" == typeof arguments[0] ? arguments[0] : arguments[1]));
            var f = $.extend(!0, {},
            b, e);
            c.Init = function() {
                var b, e = isNaN(e) ? f.width: parseInt(f.width, 10);
                if (f.overShow && (c.overlayer = $("<div>", {
                    "class": "modal-backdrop fade"
                }).css({
                    top: 0,
                    left: 0,
                    zIndex: f.overZindex ? f.overZindex: ""
                }), f.overClose && c.overlayer.on("click.overlayer.close",
                function() {
                    c.close()
                }), c.overlayer.appendTo(document.body), f.overAnimate ? c.overlayer.animate({
                    opacity: f.overOpacity
                }) : c.overlayer.addClass("in")), null == f.modal) {
                    if (c.modal = f.tipTool ? $("<div>", {
                        "class": "modal hide" + (f.setClass ? " " + f.setClass: "") + " " + f.tipsArrow
                    }) : $("<div>", {
                        "class": "modal hide" + (f.setClass ? " " + f.setClass: "")
                    }), e == f.width && e.toString() == f.width.toString() && c.modal.css({
                        width: f.width
                    }), !f.buttons && f.autoClose && c.modal.attr("data-modalindex", Math.floor(999999 * Math.random())), f.tipTool && (c.tipsArrow = $("<div>", {
                        "class": "arrow"
                    }).appendTo(c.modal)), f.title && (b = $("<div>", {
                        "class": "modal-header"
                    }).html("<h3>" + f.title + "</h3>").appendTo(c.modal)), c.container = $("<div>", {
                        "class": "modal-body" + (f.title ? "": " modal-body-noTitle") + (d.getButtons(f) ? "": " modal-body-noBotton")
                    }).appendTo(c.modal), c.message = $("<div>", {
                        "class": "modal-message" + ("" != d.getType(f) ? " modal-Icon modal-" + d.getType(f) : "")
                    }), "" != f.message ? f.centerMessage ? $("<div>").html(f.message).appendTo(c.message) : c.message.html(f.message) : f.centerMessage ? f.isLoading && $("<div>", {
                        style: "text-align:center"
                    }).html(f.loading).appendTo(c.message) : f.isLoading && c.message.html(f.loading), f.source && "object" == typeof f.source) {
                        var h = f.centerMessage ? $("div:first", c.message) : c.message;
                        for (var i in f.source) switch (i) {
                        case "ajax":
                            var j = "string" == typeof f.source[i] ? {
                                url: f.source[i]
                            }: f.source[i],
                            k = $("<div>", {
                                "class": "modal-Preloader progress-striped active"
                            }).html('<div class="bar"></div>').appendTo(h);
                            j.success = function(a) {
                                k.fadeOut(function() {
                                    h.append(a)
                                }),
                                g(!1)
                            },
                            $.ajax(j);
                            break;
                        case "iframe":
                            var l = {
                                width: "100%",
                                height: "100%",
                                marginheight: "0",
                                marginwidth: "0",
                                frameborder: "0"
                            },
                            m = $.extend(!0, {},
                            l, "string" == typeof f.source[i] ? {
                                src: f.source[i]
                            }: f.source[i]);
                            h.append($("<iframe>").attr(m));
                            break;
                        case "inline":
                            console.log(f.source[i]),
                            h.append(f.source[i])
                        }
                    }
                    var n = d.getButtons(f);
                    if (n && (c.footer = $("<div>", {
                        "class": "modal-footer"
                    }).appendTo(c.modal), "question" == f.type ? $.each(n,
                    function(a, b) {
                        var d = $("<a>", {
                            href: "javascript:void(0)",
                            "class": "btn",
                            "data-dismiss": "modal"
                        }).html(b);
                        "确定" === d.html() ? d.off("click.modal.close").on("click.modal.close",
                        function() {
                            f.onDoComplete && "function" == typeof f.onDoComplete && f.onDoComplete($(this), {
                                oncomplete: function(a) {
                                    a ? c.close(void 0 !== b.caption ? b.caption: b, a) : c.close()
                                }
                            })
                        }) : d.off("click.modal.close").on("click.modal.close",
                        function() {
                            c.close()
                        }),
                        d.appendTo(c.footer)
                    }) : "confirm" == f.type ? $.each(n,
                    function(a, b) {
                        var d = $("<a>", {
                            href: "javascript:void(0)",
                            "class": "btn",
                            "data-dismiss": "modal"
                        }).html(b);
                        "确定" === d.html() ? d.off("click.modal.close").on("click.modal.close",
                        function() {
                            f.onCloseCallBack && f.onDoComplete && "function" == typeof f.onDoComplete && f.onDoComplete($(this), {
                                oncomplete: function(a) {
                                    a ? c.close($(this), a.toString()) : c.close()
                                }
                            })
                        }) : d.off("click.modal.close").on("click.modal.close",
                        function() {
                            c.close()
                        }),
                        d.appendTo(c.footer)
                    }) : "submit" == f.type ? $.each(n,
                    function(a, b) {
                        var d = $("<a>", {
                            href: "javascript:void(0)",
                            "class": "btn",
                            "data-dismiss": "modal"
                        }).html(b);
                        "提交" === d.html() ? (d.attr("data-submitForm", "true"), d.off("click.modal.close").on("click.modal.close",
                        function() {
                            {
                                var a = $(this); ({
                                    elem: a,
                                    Submit: a.attr("data-submitForm")
                                })
                            }
                            f.onCloseComplete && "function" == typeof f.onCloseComplete && f.onCloseComplete(b, $(this))
                        })) : d.off("click.modal.close").on("click.modal.close",
                        function() {
                            c.close()
                        }),
                        d.appendTo(c.footer)
                    }) : "ordersubmit" == f.type ? $.each(n,
                    function(a, b) {
                        var d = $("<a>", {
                            href: "javascript:void(0)",
                            "class": "btn",
                            "data-dismiss": "modal"
                        }).html(b);
                        "确定" === d.html() ? (d.attr("data-submitOrder", "true"), d.off("click.modal.close").on("click.modal.close",
                        function() {
                            {
                                var a = $(this); ({
                                    elem: a,
                                    Submit: a.attr("data-submitForm")
                                })
                            }
                            f.onCloseCallBack && f.onCloseComplete && "function" == typeof f.onCloseComplete && f.onCloseComplete(b, $(this))
                        })) : (d.attr("data-modalCancle", "true"), d.off("click.modal.close").on("click.modal.close",
                        function() {
                            {
                                var a = $(this); ({
                                    elem: a,
                                    Cancle: a.attr("data-modalCancle")
                                })
                            }
                            f.onCloseCallBack && f.onCancleComplete && "function" == typeof f.onCancleComplete ? f.onCancleComplete(b, $(this)) : c.close()
                        })),
                        d.appendTo(c.footer)
                    }) : "defined" == f.type ? $.each(n,
                    function(a, b) {
                        if ("object" == typeof b) {
                            var d = $("<a>", {
                                href: "javascript:void(0)",
                                "class": "btn",
                                mars_sead: b.mars_sead,
                                "data-dismiss": b.attribute
                            }).html(b.name);
                            "boolean" != typeof d.data("dismiss") || d.data("dismiss") ? "boolean" == typeof d.data("dismiss") && d.data("dismiss") ? (2 === f.buttonsPos && d.addClass(f.buttonsStyle), d.off("click.modal.close").on("click.modal.close",
                            function() {
                                f.onDoCompleteTo && "function" == typeof f.onDoCompleteTo && f.onDoCompleteTo($(this), {
                                    oncomplete: function(a) {
                                        a ? c.close($(this), a.toString()) : c.close()
                                    }
                                })
                            })) : (f.buttonsPos > 2 && d.addClass(f.buttonsStyle), d.off("click.modal.close").on("click.modal.close",
                            function() {
                                c.close()
                            })) : (1 === f.buttonsPos && d.addClass(f.buttonsStyle), d.off("click.modal.close").on("click.modal.close",
                            function() {
                                f.onDoComplete && "function" == typeof f.onDoComplete && f.onDoComplete($(this), {
                                    oncomplete: function(a) {
                                        a ? c.close($(this), a.toString()) : c.close()
                                    }
                                })
                            }))
                        } else {
                            var d = $("<a>", {
                                href: "javascript:void(0)",
                                "class": "btn",
                                "data-dismiss": "modal"
                            }).html(b);
                            d.off("click.modal.close").on("click.modal.close",
                            function() {
                                c.close()
                            })
                        }
                        d.appendTo(c.footer)
                    }) : $.each(n,
                    function(a, b) {
                        var d = $("<a>", {
                            href: "javascript:void(0)",
                            "class": "btn",
                            "data-dismiss": "modal"
                        }).html(b);
                        d.off("click.modal.close").on("click.modal.close",
                        function() {
                            c.close()
                        }),
                        d.appendTo(c.footer)
                    }), c.footer.appendTo(c.modal)), f.closeBtn) {
                        $('<a href="javascript:void(0)" class="closeBtn" ' + (f.closeCover && "" != f.closeCover ? 'mars_sead="' + f.closeCover + '"': "") + "><span>×</span></a>").on("click.modal.closeBtn",
                        function(a) {
                            a.preventDefault(),
                            f.closeCall && f.onCloseComplete && "function" == typeof f.onCloseComplete ? f.onCloseComplete($(this), {
                                oncomplete: function(a) {
                                    a ? c.close($(this), a.toString()) : c.close()
                                }
                            }) : c.close()
                        }).prependTo(b ? b: c.message)
                    }
                    c.message.appendTo(c.container),
                    c.modal.appendTo(null != f.inserTarget ? "" + f.inserTarget: document.body),
                    f.setResize && $(window).on("resize.modal",
                    function() {
                        clearTimeout(a),
                        a = setTimeout(function() {
                            g()
                        },
                        100)
                    })
                } else {
                    c.modal = $(f.modal);
                    var b = c.modal.children().filter(".modal-header");
                    if (e == f.width && e.toString() == f.width.toString() && c.modal.css({
                        width: f.width
                    }).addClass(f.setClass), f.closeBtn && !c.modal.find('[data-dismiss="closeModal"]').length) {
                        $('<a href="javascript:void(0)" class="closeBtn" data-dismiss="closeModal" mars_sead="home_province_close_btn">×</a>').off("click.modal.closeBtn").on("click.modal.closeBtn",
                        function(a) {
                            a.preventDefault(),
                            c.close()
                        }).prependTo(b)
                    } else c.modal.find('[data-dismiss="closeModal"]').off("click.modal.closeBtn").on("click.modal.closeBtn",
                    function(a) {
                        a.preventDefault(),
                        c.close()
                    });
                    c.modal.undelegate("click.dismiss.modal").delegate('[data-dismiss="modal"]', "click.dismiss.modal",
                    function() {
                        f.onDoComplete && "function" == typeof f.onDoComplete && f.onDoComplete($(this), {
                            oncomplete: function() {
                                c.close()
                            }
                        })
                    }),
                    f.setResize && $(window).on("resize.modal",
                    function() {
                        clearTimeout(a),
                        a = setTimeout(function() {
                            g(!1)
                        },
                        100)
                    })
                }
                f.autoClose !== !1 && (c.modal.bind("click",
                function() {
                    clearTimeout(c.setTimes),
                    c.close()
                }), c.setTimes = setTimeout(c.close, f.autoClose)),
                f.autoCall && f.onAutoComplete && "function" == typeof f.onAutoComplete && f.onAutoComplete({
                    callback: function() {
                        c.close()
                    }
                }),
                f.animation && "function" == typeof f.animationFunction && f.animationFunction(c.modal),
                g(!1)
            },
            c.close = function(a) {
                var b;
                $(window).off("resize.modal"),
                $(document).off("resize.modal"),
                b = arguments[1] ? arguments[1] : void 0,
                c.overlayer && c.overlayer.fadeOut(f.animate_speed,
                function() {
                    $(this).remove()
                }),
                "fadeIn" === f.effect ? c.modal.fadeOut(f.animate_speed,
                function() {
                    f.modalHide ? $(this).hide() : $(this).remove(),
                    f.onCloseComplete && "function" == typeof f.onCloseComplete && b && "string" == typeof b && f.onCloseComplete(void 0 !== a ? a: "")
                }) : "animate" === f.effect && c.modal.animate({
                    top: 0,
                    opacity: 0
                },
                f.animate_speed,
                function() {
                    f.modalHide ? $(this).hide() : $(this).remove(),
                    f.onCloseComplete && "function" == typeof f.onCloseComplete && b && "string" == typeof b && f.onCloseComplete(void 0 !== a ? a: "")
                })
            };
            var g = function() {
                var a = $(window).width(),
                b = $(window).height(),
                d = c.modal.outerWidth(),
                e = c.modal.outerHeight(),
                g = {
                    left: 0,
                    top: 0,
                    right: a - d,
                    bottom: b - e,
                    center: (a - d) / 2,
                    middle: (b - e) / 2
                };
                c[0] = void 0,
                c[1] = void 0,
                f.tipTool && $.isArray(f.position) && 2 == f.position.length && "object" == typeof f.position ? ($.each(f.position,
                function(a, b) {
                    $.each(b,
                    function(b, d) {
                        c[a] = d + "px",
                        c.modal.css(b, c[a]).fadeIn(f.animate_speed)
                    })
                }), c.tipsArrow.css("left", "" != f.tipsLeft ? f.tipsLeft: 0)) : $.isArray(f.position) && 2 == f.position.length && "object" == typeof f.position && $.each(f.position,
                function(a, b) {
                    $.each(b,
                    function(b, d) {
                        c[a] = d + "px",
                        c.modal.css(b, c[a]).fadeIn(f.animate_speed)
                    })
                }),
                (void 0 === c[0] || void 0 === c[1]) && (c[0] = g.center, c[1] = g.middle, "boolean" == typeof arguments[0] && arguments[0] === !1 || 0 === f.setPosition ? f.isCenter ? "fadeIn" === f.effect ? c.modal.css({
                    left: c[0],
                    top: c[1],
                    visibility: "visible"
                }).fadeIn(f.animate_speed) : "animate" === f.effect && c.modal.css({
                    left: c[0],
                    top: "-25%",
                    visibility: "visible",
                    opacity: 0
                }).show().animate({
                    left: c[0],
                    top: c[1],
                    opacity: 1
                },
                f.animate_speed) : c.modal.css({
                    left: c[0],
                    top: f.top,
                    visibility: "visible"
                }).fadeIn(f.animate_speed) : (c.modal.stop(!0), c.modal.css({
                    left: c[0],
                    visibility: "visible"
                }).animate({
                    left: c[0],
                    top: c[1]
                },
                f.setPosition)))
            };
            return c.Init()
        }
    },
    e = {
        init: function() {
            var a = {
                startTime: 0,
                endTime: 0,
                nowTime: 0,
                milliSec: !1,
                interval: 1e3,
                container: null,
                zeroDigit: !0,
                unitFormat: {
                    day: !1,
                    hour: !1,
                    min: !0,
                    sec: !0
                },
                unitClass: {
                    day: "",
                    hour: "",
                    min: "",
                    sec: ""
                },
                timeStamp: {
                    day: "天",
                    hour: "时",
                    min: "分",
                    sec: "秒"
                },
                startTips: "",
                endTips: "",
                stopTips: "",
                block: $("<span></span>"),
                action: "",
                callback: !1,
                callbackFunction: null,
                halfwayTime: !0,
                onDoCallback: !1,
                onDoComplete: null
            },
            b = this,
            c = {};
            "string" == typeof arguments[0] && (c.elem = arguments[0]),
            ("object" == typeof arguments[0] || "object" == typeof arguments[1]) && (c = $.extend(c, "object" == typeof arguments[0] ? arguments[0] : arguments[1]));
            var d = $.extend(!0, {},
            a, c),
            e = 86400,
            f = 3600,
            g = 60;
            b.model = d.elem,
            b.init = function() {
                var a = this.setCountDown();
                b.container = null != d.container ? b.model.find(d.container) : b.model,
                a.startTime && a.startTime > 0 &&
                function c() {
                    var e, f, g = {};
                    d.onDoCallback && "function" == typeof d.onDoComplete && b.stopCountDown(),
                    f = a.nowTime < a.startTime ? a.startTime - (a.nowTime = a.nowTime === Math.round((new Date).getTime() / 1e3) ? a.nowTime: Math.round((new Date).getTime() / 1e3)) : a.endTime - a.nowTime,
                    b.container.html("");
                    for (var h in d.unitFormat)"day" == h && d.unitFormat[h] && (g.day = i(f)),
                    "hour" == h && d.unitFormat[h] && (g.hour = j(f)),
                    "min" == h && d.unitFormat[h] && (g.min = k(f)),
                    "sec" == h && d.unitFormat[h] && (g.sec = l(f)),
                    d.milliSec && "msec" == h && d.unitFormat[h] && (g.msec = m(f));
                    if (a.nowTime < a.startTime) d.startTips && (e = d.startTips);
                    else {
                        if (! (a.endTime >= a.nowTime)) {
                            if (d.stopTips) e = d.stopTips,
                            b.container.html(e);
                            else switch (d.action) {
                            case "defined":
                                d.callback && "function" == typeof d.callbackFunction && d.callbackFunction.call(b.container);
                                break;
                            case "remain":
                                d.callback && "function" == typeof d.callbackFunction && d.callbackFunction.call(b.container),
                                !$('[data-getvercode="code"]').length && p('<p style="text-align:center">可去购物车历史重新抢购哦！</p>', {
                                    title: '<i class="i-icon-tips"></i>商品已超时',
                                    setClass: "ui-modal-btn-tips",
                                    buttons: !0,
                                    type: "defined",
                                    overClose: !1,
                                    closeCover: "close-pop-cart-empty-imm-check_btn",
                                    buttonsCus: [{
                                        name: "立即查看",
                                        attribute: !0,
                                        mars_sead: "pop-cart-empty-imm-check_btn"
                                    }],
                                    buttonsPos: 2,
                                    buttonsStyle: "btn-purple",
                                    onDoCompleteTo: function(a, b) {
                                        b.oncomplete(!1),
                                        self.location.href = "cart-history.html"
                                    }
                                });
                                break;
                            case "refresh":
                                for (var h in g) g[h] = "00",
                                d.block.clone().addClass(d.unitClass[h]).html(g[h]).appendTo(b.container),
                                d.timeStamp && d.block.clone().text(d.timeStamp[h]).appendTo(b.container);
                                d.callback && "function" == typeof d.callbackFunction && d.callbackFunction.call(b.container);
                                break;
                            default:
                                for (var h in g) g[h] = "00",
                                d.block.clone().addClass(d.unitClass[h]).html(g[h]).appendTo(b.container),
                                d.timeStamp && d.block.clone().text(d.timeStamp[h]).appendTo(b.container)
                            }
                            return clearTimeout(setTimer),
                            !1
                        }
                        d.endTips && (e = d.endTips)
                    }
                    b.container.html(e);
                    for (var h in g) d.block.clone().addClass(d.unitClass[h]).html(g[h]).appendTo(b.container),
                    d.timeStamp && d.block.clone().text(d.timeStamp[h]).appendTo(b.container);
                    a.nowTime = a.nowTime + d.interval / 1e3,
                    d.halfwayTime && 300 === f && p('<p style="text-align:center">您的购物车只剩 <span class="fontred">5分钟</span> 时间，立即结算？</p>', {
                        title: '<i class="i-icon-tips"></i>唯品会友情提醒您',
                        setClass: "ui-modal-btn-tips",
                        buttons: !0,
                        type: "defined",
                        overClose: !1,
                        closeCover: "cart-close_btn",
                        buttonsCus: [{
                            name: "取消",
                            attribute: !1,
                            mars_sead: "cart-delete_btn"
                        },
                        {
                            name: "确定",
                            attribute: !0,
                            mars_sead: "cart-sure_btn"
                        }],
                        buttonsPos: 2,
                        buttonsStyle: "btn-purple",
                        onDoComplete: function(a, b) {
                            b.oncomplete(!1)
                        },
                        onDoCompleteTo: function(a, b) {
                            b.oncomplete(!1),
                            self.location.href = "cart.html"
                        }
                    }),
                    setTimer = setTimeout(c, d.interval),
                    $.data(b.container[0], "timer", setTimer)
                } ()
            },
            b.setCountDown = function() {
                var a = {};
                return a.startTime = isNaN(d.startTime) ? Date.parse(d.startTime.replace(/-/g, "/")) / 1e3: Math.round(d.startTime),
                a.endTime = isNaN(d.endTime) ? Date.parse(d.endTime.replace(/-/g, "/")) / 1e3: Math.round(d.endTime),
                a.nowTime = Math.round(0 === d.nowTime ? (new Date).getTime() / 1e3: d.nowTime),
                a.startTime && !d.endTime && !d.nowTime && (a.endTime = a.startTime + a.nowTime),
                a
            },
            b.stopCountDown = function() {
                d.onDoComplete(b.container, {
                    complete: function(a) {
                        return a ? clearTimeout($.data(b.container[0], "timer")) : setTimeout($.data(b.container[0], "timer", setTimer)),
                        !1
                    }
                })
            };
            var h = function(a, b) {
                return a && 10 > b ? b = "0" + b: b
            },
            i = function(a) {
                var b = a / e;
                return h(d.zeroDigit, Math.floor(b))
            },
            j = function(a) {
                var b = a / f % 24;
                return h(d.zeroDigit, Math.floor(b))
            },
            k = function(a) {
                var b = a / g % 60;
                return h(d.zeroDigit, Math.floor(b))
            },
            l = function(a) {
                var b = a % 60;
                return h(d.zeroDigit, Math.floor(b))
            },
            m = function(a) {
                var b = 1e3 * a / 100 % 10;
                return Math.floor(b)
            };
            return b.init()
        }
    },
    f = {
        init: function(a) {
            var b = {
                elem: "",
                mode: 1,
                width: 100,
                imgSrc: "",
                isCenter: !0,
                animateSpeed: 1e3,
                endCallback: null
            },
            c = this,
            d = $.extend(!0, {},
            b, a);
            c.Init = function() {
                c.para = f(d.elem),
                d.overShow && (c.overlayer = $("<div>", {
                    "class": "modal-backdrop fade"
                }).css({
                    top: 0,
                    left: 0
                }), d.overClose && c.overlayer.on("click.overlayer.close",
                function() {
                    c.close()
                }), c.overlayer.appendTo(document.body), d.overAnimate ? c.overlayer.animate({
                    opacity: d.overOpacity
                }) : c.overlayer.addClass("in")),
                c.modal = $("<div />", {
                    "class": "ui-model-animation hide"
                }),
                d.imgSrc.appendTo(c.modal),
                c.modal.appendTo(document.body),
                e()
            };
            var e = function() {
                var a = $(window).width(),
                b = $(window).height(),
                e = c.modal.outerWidth(),
                f = c.modal.outerHeight(),
                g = {
                    left: 0,
                    top: 0,
                    right: a - e,
                    bottom: b - f,
                    center: (a - e) / 2,
                    middle: (b - f) / 2
                };
                c[0] = void 0,
                c[1] = void 0,
                (void 0 === c[0] || void 0 === c[1]) && (c[0] = g.center, c[1] = g.middle, d.isCenter ? c.modal.css({
                    left: c[0],
                    top: c[1],
                    visibility: "visible",
                    opacity: 1
                }).show().animate({
                    width: c.para.endWidth,
                    top: c.para.endOffset.top - c.para.top - c.para.endHeight / 5,
                    left: c.para.endOffset.left - 2
                },
                d.animateSpeed,
                function() {
                    "function" == typeof d.endCallback && d.endCallback(c.modal)
                }) : c.modal.css({
                    left: c[0],
                    top: d.top,
                    visibility: "visible"
                }).fadeIn(d.animate_speed))
            },
            f = function(a) {
                var b = {
                    endOffset: a.offset(),
                    endWidth: a.outerWidth(),
                    endHeight: a.outerHeight(),
                    top: $(document).scrollTop()
                };
                return b
            };
            return c.Init()
        }
    },
    g = {
        raw: function(a) {
            return a
        },
        decoded: function(a) {
            return decodeURIComponent(a.replace(/\+/g, " "))
        },
        converted: function(a) {
            0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return g.json ? JSON.parse(a) : a
            } catch(b) {}
        },
        Set: function(a, b, c, d, e) {
            if (void 0 !== b) {
                if ("number" == typeof c) {
                    var f = expires = new Date;
                    expires.setTime(f.getTime() + 36e5 * c)
                }
                return b = g.json ? JSON.stringify(b) : String(b),
                document.cookie = [a, "=", g.raws ? b: encodeURIComponent(b), c ? ";expires=" + expires.toUTCString() : "", d ? ";domain=" + d: "", e ? ";path=" + e: ""].join("")
            }
        },
        Get: function(a) {
            for (var b = g.raws ? g.raw: g.decoded, c = document.cookie.split("; "), d = a ? void 0 : {},
            e = 0, f = c.length; f > e; e++) {
                var h = c[e].split("="),
                i = b(h.shift()),
                j = b(h.join("="));
                if (i && i === a) {
                    d = g.converted(j);
                    break
                }
                a || (d[a] = g.converted(j))
            }
            return d
        },
        Del: function(a, b, c) {
            var d = new Date(0),
            e = g.Get(a);
            null != e && (document.cookie = [g.raws ? a: encodeURIComponent(a), "=", ";expires=" + d.toUTCString(), b ? ";domain=" + b: "", c ? ";path=" + c: ""].join(""))
        }
    },
    h = {
        versions: function() {
            {
                var a, b = navigator.userAgent.toLowerCase();
                navigator.appVersion
            }
            return {
                trident: b.indexOf("trident") > -1,
                presto: b.indexOf("presto") > -1,
                webKit: b.indexOf("applewebkit") > -1,
                gecko: b.indexOf("gecko") > -1 && -1 == b.indexOf("khtml"),
                isMobile: !!b.match(/applewebkit.*mobile.*/) || !!b.match(/applewebkit/),
                isIos: !!b.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
                isAndroid: b.indexOf("android") > -1 || b.indexOf("linux") > -1,
                isIPhone: b.indexOf("iphone") > -1 || b.indexOf("mac") > -1,
                isIPad: b.indexOf("ipad") > -1,
                isSafari: (a = b.match(/version\/([\d.]+).*safari/)) ? a[1] : 0,
                webApp: -1 == b.indexOf("safari")
            }
        },
        language: (navigator.browserLanguage || navigator.language).toLowerCase(),
        devicesInfo: function() {
            var a = document.body,
            b = window;
            return {
                cWidth: a.clientWidth,
                cHeight: a.clientHeight,
                sWidth: b.screen.width,
                sHeight: b.screen.height,
                offWidth: a.offsetWidth,
                offHeight: a.offsetHeight,
                acWidth: b.screen.availWidth,
                acHeight: b.screen.availHeight,
                wWidth: b.innerWidth,
                wHeight: b.innerHeight,
                wOri: b.orientation
            }
        }
    },
    i = {
        lazyload: function(a) {
            $(a).lazyload({
                effect: "fadeIn",
                effect_speed: 100
            })
        },
        lazyloadindex: function(a, b) {
            setTimeout(function() {
                $(a).slice(b).lazyload({
                    effect: "fadeIn",
                    effect_speed: 100
                })
            },
            50)
        },
        loadcheck: function(a, b) {
            var c = new Image,
            d = a.data("original"),
            e = a.data("onerror"),
            f = b.oncomplete;
            c.src = "string" == typeof d ? d: e,
            c.onload = c.onerror = c.onreadystatechange = function() {
                return c && c.readyState && "loaded" != c.readyState && "complete" != c.readyState ? !1 : void f.call({
                    width: c.width,
                    height: c.height
                },
                a, d, e)
            }
        }
    },
    j = {
        error: function(a, b, c, d, e) {
            var f = arguments[5] ? arguments[5] : !1,
            g = 0,
            h = !1,
            i = a.attr("class") || "",
            j = "",
            e = e || 2;
            a.hasClass(b) && a.removeClass(b),
            c ? a = a: a.children().filter(":eq(" + d + ")"),
            f && $("body,html").animate({
                scrollTop: a.offset().top - f
            },
            200),
            h || (h = setInterval(function() {
                g++,
                j = g % 2 ? i + " " + b: i,
                a.attr("class", j),
                g == 2 * e && (clearInterval(h), a.attr("class", i))
            },
            200))
        }
    },
    k = {
        empty: function(a) {
            return "" == $.trim(a) ? 0 : 1
        },
        dataType: {
            e: /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/,
            m: /^13[0-9]{9}$|14[0-9]{9}|15[0-9]{9}$|18[0-9]{9}$/,
            s: /^[A-Za-z]{6,20}$/,
            c: /^[\u4e00-\u9fa5]{1,8}$/
        }
    },
    l = {
        tiggerDowninit: function() {
            a.click(l.tiggerClienHide)
        },
        tiggerClienHide: function() {
            var a = $(this),
            b = g.Get("WAP[clientClose]") || 0,
            c = {
                elem: a,
                pars: a.parent()
            };
            c.pars.fadeOut(),
            g.Set("WAP[clientClose]", Number(b) + 1, "", "", "/")
        }
    },
    m = {
        set: function(a) {
            var b = a.dom,
            c = a.c,
            d = a.type;
            g.Set("m_vip_province", $(b.elem).attr("data_mars"), 26280, ".vip.com"),
            1 === d ? VIP.localStorage.setItem("changing_warehouse_type", 1) : $(b.elem).hasClass("J_guess_warehouse") ? VIP.localStorage.setItem("changing_warehouse_type", 2) : VIP.localStorage.setItem("changing_warehouse_type", 3);
            var e = hawk.showDialog('正切换至"' + decodeURI(b.area) + '"...', {
                title: void 0,
                overClose: !1,
                setClass: "ui-modal-black",
                buttons: !1,
                overShow: !1,
                closeBtn: !1
            });
            c && c.oncomplete(!0),
            $.ajax({
                url: "index.php?",
                data: {
                    m: "ajax",
                    act: "select_warehouse",
                    wh: b.posi,
                    p_area: b.area
                },
                type: "POST",
                success: function(a) {
                    location.href = a && null != a && void 0 != a ? a: a
                },
                error: function() {
                    hawk.showDialog("网络延时，请刷新页面重试！", {
                        setClass: "ui-error",
                        position: [{
                            top: 0
                        },
                        {
                            left: 0
                        }],
                        overClose: !1,
                        overShow: !1,
                        width: "100%",
                        autoClose: 3e3
                    }),
                    e.close()
                }
            })
        },
        toDo: function(a, b) {
            var c = a,
            d = {
                elem: c,
                area: encodeURI($.trim(c.text().toString())),
                posi: c.attr("data-positions").toString(),
                hascart: parseInt(c.parents("[data-hascart]").data("hascart")),
                Gcookie: $.cookie("WAP[p_wh]")
            };
            d.hascart && d.Gcookie && d.Gcookie !== d.posi ? hawk.showDialog("更换收货地址后，购物车将会被清空，是否确认需要更换？", {
                title: "唯品会友情提醒您",
                overClose: !1,
                buttons: !0,
                type: "question",
                onDoComplete: function(a, c) {
                    d.posi && m.set({
                        dom: d,
                        c: b
                    }),
                    c.oncomplete(!1)
                }
            }) : d.posi && m.set({
                dom: d,
                c: b
            })
        },
        show: function(a) {
            var b = arguments[1] ? arguments[1] : {};
            hawk.showDialog({
                modal: a,
                setClass: "ui-modal-fade",
                overClose: !1,
                width: "90%",
                isCenter: !1,
                top: 90,
                closeBtn: b.closeBtn,
                modalHide: b.modalHide,
                onDoComplete: function(a, b) {
                    m.toDo(a, b)
                }
            }),
            $(a).css({
                top: $(window).scrollTop() + 90
            })
        },
        init: function() {
            var a = $(this),
            b = {
                elem: a,
                obj: "#" + $("body,html").find("[data-moadl]").attr("id"),
                closeBtn: !0,
                modalHide: !0
            };
            m.show(b.obj, b)
        },
        bind: function() {
            b.off("click.select.depot").on("click.select.depot", m.init)
        }
    },
    n = {
        init: function() {
            var a = {
                elem: c.find(".flow_cart_time"),
                startTime: parseInt(c.attr("shopcarttime")),
                timeStamp: {
                    min: ":",
                    sec: ""
                },
                action: "remain",
                callback: !0,
                callbackFunction: function() {
                    this.html("").add(this.prev().html("")).hide()
                }
            }; ! isNaN(a.startTime) && a.startTime > 0 && q(a)
        }
    },
    o = {
        blackDialog: function(a, b, c) {
            p(a, {
                width: 260,
                title: "" != b ? b: "友情提示",
                overClose: !1,
                closeBtn: !1,
                setClass: "ui-modal-black",
                buttons: !1,
                overShow: !1,
                autoClose: c ? c: 1500
            })
        },
        redDialog: function(a) {
            p(a, {
                setClass: "ui-error",
                position: [{
                    top: 0
                },
                {
                    left: 0
                }],
                overClose: !1,
                overShow: !1,
                width: "100%",
                autoClose: 3e3
            })
        }
    },
    p = function(a, b, c) {
        return new d.init(a, b, c)
    },
    q = function(a, b) {
        return new e.init(a, b)
    },
    r = function(a) {
        return new f.init(a)
    },
    s = function(a) {
        this.$el = a,
        this.$el.attr(this.statusAttr, "available")
    };
    s.prototype.statusAttr = "data-barrier",
    s.prototype.isAvailable = function() {
        return "available" === this.$el.attr(this.statusAttr)
    },
    s.prototype.isTerminated = function() {
        return "terminated" === this.$el.attr(this.statusAttr)
    },
    s.prototype.acquireLock = function() {
        if (this.isTerminated()) throw new Error("Lock already terminated");
        this.$el.attr(this.statusAttr, "locked")
    },
    s.prototype.releaseLock = function() {
        if (this.isTerminated()) throw new Error("Lock already terminated");
        this.$el.attr(this.statusAttr, "available")
    },
    s.prototype.terminate = function() {
        this.$el.attr(this.statusAttr, "terminated")
    };
    var t = {
        isElementInViewport: function(a) {
            var b = $(window).scrollTop(),
            c = b + $(window).height(),
            d = a.position().top,
            e = d + a.height(),
            f = d >= b && c >= d && c >= e && e >= b;
            return f
        },
        createBarrier: function(a) {
            return new s(a)
        }
    };
    return {
        util: t,
        browser: h.versions,
        showDialog: p,
        blackDialog: o.blackDialog,
        redDialog: o.redDialog,
        countDown: q,
        animate: r,
        download: l.tiggerDowninit,
        depot: m,
        flicker: j.error,
        lazyload: i.lazyload,
        lazyloadindex: i.lazyloadindex,
        loadcheck: i.loadcheck,
        runCartTime: n.init,
        validate: k,
        Get: g.Get,
        Set: g.Set,
        Del: g.Del
    }
} ();