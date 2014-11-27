var pageProductEffect = function() {
    var a = $('[data-getDetail="more"]'),
    b = $('[data-mersale="true"]'),
    c = $("#goods_images li"),
    d = $(".detail-box"),
    g = {
        init: function() {
            var a = $(this),
            b = {
                elem: a,
                clsName: a.attr("class"),
                size: parseInt(a.data("size"), 10),
                input: a.parent().next().filter('input[name="size"]'),
                pars: a.parent(),
                parent: a.parent().parent(),
                index: a.parent().children().index(this),
                margeAuto: ($(window).innerWidth() - (.9 * $(window).innerWidth() + 2)) / 2,
                top: a.position().top + parseInt(a.css("marginTop")) - 60,
                left: a.position().left + (a.innerWidth() / 2 - 15) - ($(window).innerWidth() - (.9 * $(window).innerWidth() + 2)) / 2 + 15,
                getsize: a.parent().data("mersale"),
                stock: a.data("sizestock")
            };
            if(b.elem.hasClass('select')) {
                b.elem.removeClass('select');
            } else {
                b.elem.addClass("select").siblings("li").filter(".choose").removeClass("select").parent().next().filter('input[name="size"]').val(b.size);
            }
            // "choose" == b.clsName && b.elem.addClass("select").siblings("li").filter(".choose").removeClass("select").parent().next().filter('input[name="size"]').val(b.size),
            // b.getsize && (void 0 == b.pars.data("saveData") ? g.getSize(b) : g.saveSize(b.pars.data("saveData"), b))
        }
    },
    h = {
        init: function() {
            var a = $(this),
            b = $("#Photo-modal"),
            d = {
                elem: a,
                index: c.index(this),
                top: $(document).scrollTop(),
                model: b.attr("id"),
                imgList: $("img.Touch_mer_biglImg"),
                point: b.find("#Photo-pagination").children().filter("em")
            };
            h.open(d)
        },
        open: function(a) {
            hawk.showDialog({
                modal: "#" + a.model,
                width: 320,
                setClass: "ui-modal-center",
                isCenter: !1,
                top: 0,
                closeBtn: !1,
                modalHide: !0,
                overClose: !1,
                overOpacity: .9
            }),
            window.bigImgReview = new Swipe(document.getElementById("Photo-slide"), {
                startSlide: a.index,
                callback: function(b, c) {
                    index = c,
                    a.imgList.eq(index).hasClass("active") || hawk.loadcheck(a.imgList.eq(index), {
                        oncomplete: function(a, b, c) {
                            this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.attr("src", c).fadeIn(1e3).addClass("active") : a.attr("src", b).fadeIn(1e3).addClass("active")
                        }
                    }),
                    a.point.filter(":eq(" + index + ")").addClass("on").siblings().removeClass("on")
                }
            }),
            a.imgList.each(function() {
                hawk.loadcheck(a.imgList.eq(a.index), {
                    oncomplete: function(a, b, c) {
                        this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.attr("src", c).fadeIn(1e3).addClass("active") : a.attr("src", b).fadeIn(1e3).addClass("active")
                    }
                }),
                $(this).bind("error",
                function() {
                    var b = a.imgList.index(this);
                    h.checkNote.call($(this), b, a.point, window.bigImgReview)
                })
            }),
            a.point.filter(":eq(" + a.index + ")").addClass("on").siblings().removeClass("on")
        },
        slide: function() {
            var a = {
                obj: document.getElementById("goods_images"),
                imgList: $("img.smallImg"),
                point: $("#pro_pagination").children().filter("em"),
                index: 0
            },
            b = new Swipe(a.obj, {
                Distance: 62,
                callback: function(b, c) {
                    var d = c + 1;
                    a.imgList.eq(d).length && !a.imgList.eq(d).hasClass("active") && hawk.loadcheck(a.imgList.eq(d), {
                        oncomplete: function(a, b, c) {
                            this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.hide().attr("src", c).fadeIn(1e3).addClass("active") : a.hide().attr("src", b).fadeIn(1e3).addClass("active")
                        }
                    }),
                    a.point.eq(c).addClass("on").siblings().removeClass("on")
                }
            });
            a.point.eq(a.index).addClass("on").siblings().removeClass("on"),
            hawk.loadcheck(a.imgList.eq(a.index), {
                oncomplete: function(a, b, c) {
                    this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.attr("src", c).fadeIn().addClass("active") : a.attr("src", b).fadeIn().addClass("active")
                }
            }),
            hawk.loadcheck(a.imgList.eq(a.index + 1), {
                oncomplete: function(a, b, c) {
                    this.width == this.height && 1 == this.width || this.width == this.height && 0 == this.width ? a.attr("src", c).fadeIn().addClass("active") : a.attr("src", b).fadeIn().addClass("active")
                }
            }),
            a.imgList.each(function() {
                $(this).bind("error",
                function() {
                    var c = a.imgList.index(this);
                    h.checkNote.call($(this), c, a.point, b)
                })
            })
        }
        // ,
        // checkNote: function(a, b, c) {
        //     this.parent().remove(),
        //     b.eq(a).remove(),
        //     c.setup()
        // }
    },
    i = {
        init: function() {
            var a = $(this),
            b = {
                elem: a,
                shopcart: a.parent().prev(),
                obj: $("[data-mersale]").parent(),
                jump: a.data("addjump"),
                anItem: a.data("animate"),
                product_id: $('input[name="product_id"]').val(),
                size: $('input[name="size"]').length ? $('input[name="size"]').val() : "",
                num: $('input[name="num"]').val(),
                channel_id: $('input[name="channel_id"]').val(),
                cat_id: $('input[name="cat_id"]').val(),
                warehouse: $('input[name="warehouse"]').val(),
                product_name: $('input[name="product_name"]').val(),
                small_image: $('input[name="small_image"]').val(),
                vipshop_price: $('input[name="vipshop_price"]').val(),
                market_price: $('input[name="market_price"]').val(),
                agio: $('input[name="agio"]').val(),
                back_url: encodeURIComponent(location.href)
            };
            i.add(b)
        }
    },
    j = {
        set: function() {
            c.length && h.slide()
        },
        login: function() {
            var a = $('[data-addcart="true"]');
            a.length && a.data("loginaddcart") && i.loginInit()
        }
    },
    k = {
        events: function() {
            b.off("click.choice.size", "li").on("click.choice.size", "li", g.init),
            c.off("click.show.photo").on("click.show.photo", h.init),
            d.off("click.add.cart", '[data-addcart="true"]').on("click.add.cart", '[data-addcart="true"]', i.init)
        }
    },
    n = {
        init: function() {
            k.events(),    // 大图
            j.set(),
            // 向上工具
            VIP.util.backToTopFix({
                right: 10,
                bottom: 68
            })
        }
    };
    return {
        init: n.init
    }
} ();
$(function() {
    pageProductEffect.init()
});