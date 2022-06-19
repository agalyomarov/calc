/* https://mrrk.ru/wp-content/themes/industrial/js/slick.min.js */
try {
    !(function(i) {
        "use strict";
        "function" == typeof define && define.amd ?
            define(["jquery"], i) :
            "undefined" != typeof exports ?
            (module.exports = i(require("jquery"))) :
            i(jQuery);
    })(function(i) {
        "use strict";
        var e = window.Slick || {};
        ((e = (function() {
            var e = 0;
            return function(t, o) {
                var s,
                    n = this;
                (n.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: i(t),
                    appendDots: i(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(e, t) {
                        return i('<button type="button" />').text(t + 1);
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: 0.35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3,
                }),
                (n.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1,
                }),
                i.extend(n, n.initials),
                    (n.activeBreakpoint = null),
                    (n.animType = null),
                    (n.animProp = null),
                    (n.breakpoints = []),
                    (n.breakpointSettings = []),
                    (n.cssTransitions = !1),
                    (n.focussed = !1),
                    (n.interrupted = !1),
                    (n.hidden = "hidden"),
                    (n.paused = !0),
                    (n.positionProp = null),
                    (n.respondTo = null),
                    (n.rowCount = 1),
                    (n.shouldClick = !0),
                    (n.$slider = i(t)),
                    (n.$slidesCache = null),
                    (n.transformType = null),
                    (n.transitionType = null),
                    (n.visibilityChange = "visibilitychange"),
                    (n.windowWidth = 0),
                    (n.windowTimer = null),
                    (s = i(t).data("slick") || {}),
                    (n.options = i.extend({}, n.defaults, o, s)),
                    (n.currentSlide = n.options.initialSlide),
                    (n.originalSettings = n.options),
                    void 0 !== document.mozHidden ?
                    ((n.hidden = "mozHidden"),
                        (n.visibilityChange = "mozvisibilitychange")) :
                    void 0 !== document.webkitHidden &&
                    ((n.hidden = "webkitHidden"),
                        (n.visibilityChange = "webkitvisibilitychange")),
                    (n.autoPlay = i.proxy(n.autoPlay, n)),
                    (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
                    (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
                    (n.changeSlide = i.proxy(n.changeSlide, n)),
                    (n.clickHandler = i.proxy(n.clickHandler, n)),
                    (n.selectHandler = i.proxy(n.selectHandler, n)),
                    (n.setPosition = i.proxy(n.setPosition, n)),
                    (n.swipeHandler = i.proxy(n.swipeHandler, n)),
                    (n.dragHandler = i.proxy(n.dragHandler, n)),
                    (n.keyHandler = i.proxy(n.keyHandler, n)),
                    (n.instanceUid = e++),
                    (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                    n.registerBreakpoints(),
                    n.init(!0);
            };
        })()).prototype.activateADA = function() {
            this.$slideTrack
                .find(".slick-active")
                .attr({ "aria-hidden": "false" })
                .find("a, input, button, select")
                .attr({ tabindex: "0" });
        }),
        (e.prototype.addSlide = e.prototype.slickAdd =
            function(e, t, o) {
                var s = this;
                if ("boolean" == typeof t)(o = t), (t = null);
                else if (t < 0 || t >= s.slideCount) return !1;
                s.unload(),
                    "number" == typeof t ?
                    0 === t && 0 === s.$slides.length ?
                    i(e).appendTo(s.$slideTrack) :
                    o ?
                    i(e).insertBefore(s.$slides.eq(t)) :
                    i(e).insertAfter(s.$slides.eq(t)) :
                    !0 === o ?
                    i(e).prependTo(s.$slideTrack) :
                    i(e).appendTo(s.$slideTrack),
                    (s.$slides = s.$slideTrack.children(this.options.slide)),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function(e, t) {
                        i(t).attr("data-slick-index", e);
                    }),
                    (s.$slidesCache = s.$slides),
                    s.reinit();
            }),
        (e.prototype.animateHeight = function() {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.animate({ height: e }, i.options.speed);
            }
        }),
        (e.prototype.animateSlide = function(e, t) {
            var o = {},
                s = this;
            s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ?
                !1 === s.options.vertical ?
                s.$slideTrack.animate({ left: e },
                    s.options.speed,
                    s.options.easing,
                    t
                ) :
                s.$slideTrack.animate({ top: e },
                    s.options.speed,
                    s.options.easing,
                    t
                ) :
                !1 === s.cssTransitions ?
                (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
                    i({ animStart: s.currentLeft }).animate({ animStart: e }, {
                        duration: s.options.speed,
                        easing: s.options.easing,
                        step: function(i) {
                            (i = Math.ceil(i)), !1 === s.options.vertical ?
                                ((o[s.animType] = "translate(" + i + "px, 0px)"),
                                    s.$slideTrack.css(o)) :
                                ((o[s.animType] = "translate(0px," + i + "px)"),
                                    s.$slideTrack.css(o));
                        },
                        complete: function() {
                            t && t.call();
                        },
                    })) :
                (s.applyTransition(),
                    (e = Math.ceil(e)), !1 === s.options.vertical ?
                    (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)") :
                    (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
                    s.$slideTrack.css(o),
                    t &&
                    setTimeout(function() {
                        s.disableTransition(), t.call();
                    }, s.options.speed));
        }),
        (e.prototype.getNavTarget = function() {
            var e = this,
                t = e.options.asNavFor;
            return t && null !== t && (t = i(t).not(e.$slider)), t;
        }),
        (e.prototype.asNavFor = function(e) {
            var t = this.getNavTarget();
            null !== t &&
                "object" == typeof t &&
                t.each(function() {
                    var t = i(this).slick("getSlick");
                    t.unslicked || t.slideHandler(e, !0);
                });
        }),
        (e.prototype.applyTransition = function(i) {
            var e = this,
                t = {};
            !1 === e.options.fade ?
                (t[e.transitionType] =
                    e.transformType +
                    " " +
                    e.options.speed +
                    "ms " +
                    e.options.cssEase) :
                (t[e.transitionType] =
                    "opacity " + e.options.speed + "ms " + e.options.cssEase), !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }),
        (e.prototype.autoPlay = function() {
            var i = this;
            i.autoPlayClear(),
                i.slideCount > i.options.slidesToShow &&
                (i.autoPlayTimer = setInterval(
                    i.autoPlayIterator,
                    i.options.autoplaySpeed
                ));
        }),
        (e.prototype.autoPlayClear = function() {
            var i = this;
            i.autoPlayTimer && clearInterval(i.autoPlayTimer);
        }),
        (e.prototype.autoPlayIterator = function() {
            var i = this,
                e = i.currentSlide + i.options.slidesToScroll;
            i.paused ||
                i.interrupted ||
                i.focussed ||
                (!1 === i.options.infinite &&
                    (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ?
                        (i.direction = 0) :
                        0 === i.direction &&
                        ((e = i.currentSlide - i.options.slidesToScroll),
                            i.currentSlide - 1 == 0 && (i.direction = 1))),
                    i.slideHandler(e));
        }),
        (e.prototype.buildArrows = function() {
            var e = this;
            !0 === e.options.arrows &&
                ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
                    (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
                    e.slideCount > e.options.slidesToShow ?
                    (e.$prevArrow
                        .removeClass("slick-hidden")
                        .removeAttr("aria-hidden tabindex"),
                        e.$nextArrow
                        .removeClass("slick-hidden")
                        .removeAttr("aria-hidden tabindex"),
                        e.htmlExpr.test(e.options.prevArrow) &&
                        e.$prevArrow.prependTo(e.options.appendArrows),
                        e.htmlExpr.test(e.options.nextArrow) &&
                        e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite &&
                        e.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true")) :
                    e.$prevArrow
                    .add(e.$nextArrow)
                    .addClass("slick-hidden")
                    .attr({ "aria-disabled": "true", tabindex: "-1" }));
        }),
        (e.prototype.buildDots = function() {
            var e,
                t,
                o = this;
            if (!0 === o.options.dots) {
                for (
                    o.$slider.addClass("slick-dotted"),
                    t = i("<ul />").addClass(o.options.dotsClass),
                    e = 0; e <= o.getDotCount(); e += 1
                )
                    t.append(
                        i("<li />").append(o.options.customPaging.call(this, o, e))
                    );
                (o.$dots = t.appendTo(o.options.appendDots)),
                o.$dots.find("li").first().addClass("slick-active");
            }
        }),
        (e.prototype.buildOut = function() {
            var e = this;
            (e.$slides = e.$slider
                .children(e.options.slide + ":not(.slick-cloned)")
                .addClass("slick-slide")),
            (e.slideCount = e.$slides.length),
            e.$slides.each(function(e, t) {
                    i(t)
                        .attr("data-slick-index", e)
                        .data("originalStyling", i(t).attr("style") || "");
                }),
                e.$slider.addClass("slick-slider"),
                (e.$slideTrack =
                    0 === e.slideCount ?
                    i('<div class="slick-track"/>').appendTo(e.$slider) :
                    e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                e.$slideTrack.css("opacity", 0),
                (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
                (e.options.slidesToScroll = 1),
                i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                e.setupInfinite(),
                e.buildArrows(),
                e.buildDots(),
                e.updateDots(),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ), !0 === e.options.draggable && e.$list.addClass("draggable");
        }),
        (e.prototype.buildRows = function() {
            var i,
                e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            if (
                ((o = document.createDocumentFragment()),
                    (n = l.$slider.children()),
                    l.options.rows > 1)
            ) {
                for (
                    r = l.options.slidesPerRow * l.options.rows,
                    s = Math.ceil(n.length / r),
                    i = 0; i < s; i++
                ) {
                    var d = document.createElement("div");
                    for (e = 0; e < l.options.rows; e++) {
                        var a = document.createElement("div");
                        for (t = 0; t < l.options.slidesPerRow; t++) {
                            var c = i * r + (e * l.options.slidesPerRow + t);
                            n.get(c) && a.appendChild(n.get(c));
                        }
                        d.appendChild(a);
                    }
                    o.appendChild(d);
                }
                l.$slider.empty().append(o),
                    l.$slider
                    .children()
                    .children()
                    .children()
                    .css({
                        width: 100 / l.options.slidesPerRow + "%",
                        display: "inline-block",
                    });
            }
        }),
        (e.prototype.checkResponsive = function(e, t) {
            var o,
                s,
                n,
                r = this,
                l = !1,
                d = r.$slider.width(),
                a = window.innerWidth || i(window).width();
            if (
                ("window" === r.respondTo ?
                    (n = a) :
                    "slider" === r.respondTo ?
                    (n = d) :
                    "min" === r.respondTo && (n = Math.min(a, d)),
                    r.options.responsive &&
                    r.options.responsive.length &&
                    null !== r.options.responsive)
            ) {
                s = null;
                for (o in r.breakpoints)
                    r.breakpoints.hasOwnProperty(o) &&
                    (!1 === r.originalSettings.mobileFirst ?
                        n < r.breakpoints[o] && (s = r.breakpoints[o]) :
                        n > r.breakpoints[o] && (s = r.breakpoints[o]));
                null !== s ?
                    null !== r.activeBreakpoint ?
                    (s !== r.activeBreakpoint || t) &&
                    ((r.activeBreakpoint = s),
                        "unslick" === r.breakpointSettings[s] ?
                        r.unslick(s) :
                        ((r.options = i.extend({},
                                r.originalSettings,
                                r.breakpointSettings[s]
                            )), !0 === e && (r.currentSlide = r.options.initialSlide),
                            r.refresh(e)),
                        (l = s)) :
                    ((r.activeBreakpoint = s),
                        "unslick" === r.breakpointSettings[s] ?
                        r.unslick(s) :
                        ((r.options = i.extend({},
                                r.originalSettings,
                                r.breakpointSettings[s]
                            )), !0 === e && (r.currentSlide = r.options.initialSlide),
                            r.refresh(e)),
                        (l = s)) :
                    null !== r.activeBreakpoint &&
                    ((r.activeBreakpoint = null),
                        (r.options = r.originalSettings), !0 === e && (r.currentSlide = r.options.initialSlide),
                        r.refresh(e),
                        (l = s)),
                    e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
            }
        }),
        (e.prototype.changeSlide = function(e, t) {
            var o,
                s,
                n,
                r = this,
                l = i(e.currentTarget);
            switch (
                (l.is("a") && e.preventDefault(),
                    l.is("li") || (l = l.closest("li")),
                    (n = r.slideCount % r.options.slidesToScroll != 0),
                    (o = n ?
                        0 :
                        (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
                    e.data.message)
            ) {
                case "previous":
                    (s =
                        0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
                    r.slideCount > r.options.slidesToShow &&
                        r.slideHandler(r.currentSlide - s, !1, t);
                    break;
                case "next":
                    (s = 0 === o ? r.options.slidesToScroll : o),
                    r.slideCount > r.options.slidesToShow &&
                        r.slideHandler(r.currentSlide + s, !1, t);
                    break;
                case "index":
                    var d =
                        0 === e.data.index ?
                        0 :
                        e.data.index || l.index() * r.options.slidesToScroll;
                    r.slideHandler(r.checkNavigable(d), !1, t),
                        l.children().trigger("focus");
                    break;
                default:
                    return;
            }
        }),
        (e.prototype.checkNavigable = function(i) {
            var e, t;
            if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
                i = e[e.length - 1];
            else
                for (var o in e) {
                    if (i < e[o]) {
                        i = t;
                        break;
                    }
                    t = e[o];
                }
            return i;
        }),
        (e.prototype.cleanUpEvents = function() {
            var e = this;
            e.options.dots &&
                null !== e.$dots &&
                (i("li", e.$dots)
                    .off("click.slick", e.changeSlide)
                    .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                    .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility &&
                    e.$dots.off("keydown.slick", e.keyHandler)),
                e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows &&
                e.slideCount > e.options.slidesToShow &&
                (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                    e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility &&
                    (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
                        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                e.$list.off("click.slick", e.clickHandler),
                i(document).off(e.visibilityChange, e.visibility),
                e.cleanUpSlideEvents(), !0 === e.options.accessibility &&
                e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect &&
                i(e.$slideTrack).children().off("click.slick", e.selectHandler),
                i(window).off(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    e.orientationChange
                ),
                i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                i("[draggable!=true]", e.$slideTrack).off(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
        }),
        (e.prototype.cleanUpSlideEvents = function() {
            var e = this;
            e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.cleanUpRows = function() {
            var i,
                e = this;
            e.options.rows > 1 &&
                ((i = e.$slides.children().children()).removeAttr("style"),
                    e.$slider.empty().append(i));
        }),
        (e.prototype.clickHandler = function(i) {
            !1 === this.shouldClick &&
                (i.stopImmediatePropagation(),
                    i.stopPropagation(),
                    i.preventDefault());
        }),
        (e.prototype.destroy = function(e) {
            var t = this;
            t.autoPlayClear(),
                (t.touchObject = {}),
                t.cleanUpEvents(),
                i(".slick-cloned", t.$slider).detach(),
                t.$dots && t.$dots.remove(),
                t.$prevArrow &&
                t.$prevArrow.length &&
                (t.$prevArrow
                    .removeClass("slick-disabled slick-arrow slick-hidden")
                    .removeAttr("aria-hidden aria-disabled tabindex")
                    .css("display", ""),
                    t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
                t.$nextArrow &&
                t.$nextArrow.length &&
                (t.$nextArrow
                    .removeClass("slick-disabled slick-arrow slick-hidden")
                    .removeAttr("aria-hidden aria-disabled tabindex")
                    .css("display", ""),
                    t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
                t.$slides &&
                (t.$slides
                    .removeClass(
                        "slick-slide slick-active slick-center slick-visible slick-current"
                    )
                    .removeAttr("aria-hidden")
                    .removeAttr("data-slick-index")
                    .each(function() {
                        i(this).attr("style", i(this).data("originalStyling"));
                    }),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slideTrack.detach(),
                    t.$list.detach(),
                    t.$slider.append(t.$slides)),
                t.cleanUpRows(),
                t.$slider.removeClass("slick-slider"),
                t.$slider.removeClass("slick-initialized"),
                t.$slider.removeClass("slick-dotted"),
                (t.unslicked = !0),
                e || t.$slider.trigger("destroy", [t]);
        }),
        (e.prototype.disableTransition = function(i) {
            var e = this,
                t = {};
            (t[e.transitionType] = ""), !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
        }),
        (e.prototype.fadeSlide = function(i, e) {
            var t = this;
            !1 === t.cssTransitions ?
                (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
                    t.$slides
                    .eq(i)
                    .animate({ opacity: 1 }, t.options.speed, t.options.easing, e)) :
                (t.applyTransition(i),
                    t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
                    e &&
                    setTimeout(function() {
                        t.disableTransition(i), e.call();
                    }, t.options.speed));
        }),
        (e.prototype.fadeSlideOut = function(i) {
            var e = this;
            !1 === e.cssTransitions ?
                e.$slides
                .eq(i)
                .animate({ opacity: 0, zIndex: e.options.zIndex - 2 },
                    e.options.speed,
                    e.options.easing
                ) :
                (e.applyTransition(i),
                    e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
        }),
        (e.prototype.filterSlides = e.prototype.slickFilter =
            function(i) {
                var e = this;
                null !== i &&
                    ((e.$slidesCache = e.$slides),
                        e.unload(),
                        e.$slideTrack.children(this.options.slide).detach(),
                        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
                        e.reinit());
            }),
        (e.prototype.focusHandler = function() {
            var e = this;
            e.$slider
                .off("focus.slick blur.slick")
                .on("focus.slick blur.slick", "*", function(t) {
                    t.stopImmediatePropagation();
                    var o = i(this);
                    setTimeout(function() {
                        e.options.pauseOnFocus &&
                            ((e.focussed = o.is(":focus")), e.autoPlay());
                    }, 0);
                });
        }),
        (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
            function() {
                return this.currentSlide;
            }),
        (e.prototype.getDotCount = function() {
            var i = this,
                e = 0,
                t = 0,
                o = 0;
            if (!0 === i.options.infinite)
                if (i.slideCount <= i.options.slidesToShow) ++o;
                else
                    for (; e < i.slideCount;)
                        ++o,
                        (e = t + i.options.slidesToScroll),
                        (t +=
                            i.options.slidesToScroll <= i.options.slidesToShow ?
                            i.options.slidesToScroll :
                            i.options.slidesToShow);
            else if (!0 === i.options.centerMode) o = i.slideCount;
            else if (i.options.asNavFor)
                for (; e < i.slideCount;)
                    ++o,
                    (e = t + i.options.slidesToScroll),
                    (t +=
                        i.options.slidesToScroll <= i.options.slidesToShow ?
                        i.options.slidesToScroll :
                        i.options.slidesToShow);
            else
                o =
                1 +
                Math.ceil(
                    (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
                );
            return o - 1;
        }),
        (e.prototype.getLeft = function(i) {
            var e,
                t,
                o,
                s,
                n = this,
                r = 0;
            return (
                (n.slideOffset = 0),
                (t = n.$slides.first().outerHeight(!0)), !0 === n.options.infinite ?
                (n.slideCount > n.options.slidesToShow &&
                    ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
                        (s = -1), !0 === n.options.vertical &&
                        !0 === n.options.centerMode &&
                        (2 === n.options.slidesToShow ?
                            (s = -1.5) :
                            1 === n.options.slidesToShow && (s = -2)),
                        (r = t * n.options.slidesToShow * s)),
                    n.slideCount % n.options.slidesToScroll != 0 &&
                    i + n.options.slidesToScroll > n.slideCount &&
                    n.slideCount > n.options.slidesToShow &&
                    (i > n.slideCount ?
                        ((n.slideOffset =
                                (n.options.slidesToShow - (i - n.slideCount)) *
                                n.slideWidth *
                                -1),
                            (r =
                                (n.options.slidesToShow - (i - n.slideCount)) * t * -1)) :
                        ((n.slideOffset =
                                (n.slideCount % n.options.slidesToScroll) *
                                n.slideWidth *
                                -1),
                            (r = (n.slideCount % n.options.slidesToScroll) * t * -1)))) :
                i + n.options.slidesToShow > n.slideCount &&
                ((n.slideOffset =
                        (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
                    (r = (i + n.options.slidesToShow - n.slideCount) * t)),
                n.slideCount <= n.options.slidesToShow &&
                ((n.slideOffset = 0), (r = 0)), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ?
                (n.slideOffset =
                    (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
                    (n.slideWidth * n.slideCount) / 2) :
                !0 === n.options.centerMode && !0 === n.options.infinite ?
                (n.slideOffset +=
                    n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
                    n.slideWidth) :
                !0 === n.options.centerMode &&
                ((n.slideOffset = 0),
                    (n.slideOffset +=
                        n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
                (e = !1 === n.options.vertical ?
                    i * n.slideWidth * -1 + n.slideOffset :
                    i * t * -1 + r), !0 === n.options.variableWidth &&
                ((o =
                        n.slideCount <= n.options.slidesToShow ||
                        !1 === n.options.infinite ?
                        n.$slideTrack.children(".slick-slide").eq(i) :
                        n.$slideTrack
                        .children(".slick-slide")
                        .eq(i + n.options.slidesToShow)),
                    (e = !0 === n.options.rtl ?
                        o[0] ?
                        -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) :
                        0 :
                        o[0] ?
                        -1 * o[0].offsetLeft :
                        0), !0 === n.options.centerMode &&
                    ((o =
                            n.slideCount <= n.options.slidesToShow ||
                            !1 === n.options.infinite ?
                            n.$slideTrack.children(".slick-slide").eq(i) :
                            n.$slideTrack
                            .children(".slick-slide")
                            .eq(i + n.options.slidesToShow + 1)),
                        (e = !0 === n.options.rtl ?
                            o[0] ?
                            -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) :
                            0 :
                            o[0] ?
                            -1 * o[0].offsetLeft :
                            0),
                        (e += (n.$list.width() - o.outerWidth()) / 2))),
                e
            );
        }),
        (e.prototype.getOption = e.prototype.slickGetOption =
            function(i) {
                return this.options[i];
            }),
        (e.prototype.getNavigableIndexes = function() {
            var i,
                e = this,
                t = 0,
                o = 0,
                s = [];
            for (!1 === e.options.infinite ?
                (i = e.slideCount) :
                ((t = -1 * e.options.slidesToScroll),
                    (o = -1 * e.options.slidesToScroll),
                    (i = 2 * e.slideCount)); t < i;

            )
                s.push(t),
                (t = o + e.options.slidesToScroll),
                (o +=
                    e.options.slidesToScroll <= e.options.slidesToShow ?
                    e.options.slidesToScroll :
                    e.options.slidesToShow);
            return s;
        }),
        (e.prototype.getSlick = function() {
            return this;
        }),
        (e.prototype.getSlideCount = function() {
            var e,
                t,
                o = this;
            return (
                (t = !0 === o.options.centerMode ?
                    o.slideWidth * Math.floor(o.options.slidesToShow / 2) :
                    0), !0 === o.options.swipeToSlide ?
                (o.$slideTrack.find(".slick-slide").each(function(s, n) {
                        if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                            return (e = n), !1;
                    }),
                    Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) :
                o.options.slidesToScroll
            );
        }),
        (e.prototype.goTo = e.prototype.slickGoTo =
            function(i, e) {
                this.changeSlide({ data: { message: "index", index: parseInt(i) } },
                    e
                );
            }),
        (e.prototype.init = function(e) {
            var t = this;
            i(t.$slider).hasClass("slick-initialized") ||
                (i(t.$slider).addClass("slick-initialized"),
                    t.buildRows(),
                    t.buildOut(),
                    t.setProps(),
                    t.startLoad(),
                    t.loadSlider(),
                    t.initializeEvents(),
                    t.updateArrows(),
                    t.updateDots(),
                    t.checkResponsive(!0),
                    t.focusHandler()),
                e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(),
                t.options.autoplay && ((t.paused = !1), t.autoPlay());
        }),
        (e.prototype.initADA = function() {
            var e = this,
                t = Math.ceil(e.slideCount / e.options.slidesToShow),
                o = e.getNavigableIndexes().filter(function(i) {
                    return i >= 0 && i < e.slideCount;
                });
            e.$slides
                .add(e.$slideTrack.find(".slick-cloned"))
                .attr({ "aria-hidden": "true", tabindex: "-1" })
                .find("a, input, button, select")
                .attr({ tabindex: "-1" }),
                null !== e.$dots &&
                (e.$slides
                    .not(e.$slideTrack.find(".slick-cloned"))
                    .each(function(t) {
                        var s = o.indexOf(t);
                        i(this).attr({
                                role: "tabpanel",
                                id: "slick-slide" + e.instanceUid + t,
                                tabindex: -1,
                            }), -1 !== s &&
                            i(this).attr({
                                "aria-describedby": "slick-slide-control" + e.instanceUid + s,
                            });
                    }),
                    e.$dots
                    .attr("role", "tablist")
                    .find("li")
                    .each(function(s) {
                        var n = o[s];
                        i(this).attr({ role: "presentation" }),
                            i(this)
                            .find("button")
                            .first()
                            .attr({
                                role: "tab",
                                id: "slick-slide-control" + e.instanceUid + s,
                                "aria-controls": "slick-slide" + e.instanceUid + n,
                                "aria-label": s + 1 + " of " + t,
                                "aria-selected": null,
                                tabindex: "-1",
                            });
                    })
                    .eq(e.currentSlide)
                    .find("button")
                    .attr({ "aria-selected": "true", tabindex: "0" })
                    .end());
            for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
                e.$slides.eq(s).attr("tabindex", 0);
            e.activateADA();
        }),
        (e.prototype.initArrowEvents = function() {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow
                    .off("click.slick")
                    .on("click.slick", { message: "previous" }, i.changeSlide),
                    i.$nextArrow
                    .off("click.slick")
                    .on("click.slick", { message: "next" }, i.changeSlide), !0 === i.options.accessibility &&
                    (i.$prevArrow.on("keydown.slick", i.keyHandler),
                        i.$nextArrow.on("keydown.slick", i.keyHandler)));
        }),
        (e.prototype.initDotEvents = function() {
            var e = this;
            !0 === e.options.dots &&
                (i("li", e.$dots).on(
                        "click.slick", { message: "index" },
                        e.changeSlide
                    ), !0 === e.options.accessibility &&
                    e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots &&
                !0 === e.options.pauseOnDotsHover &&
                i("li", e.$dots)
                .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
                .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
        }),
        (e.prototype.initSlideEvents = function() {
            var e = this;
            e.options.pauseOnHover &&
                (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
                    e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
        }),
        (e.prototype.initializeEvents = function() {
            var e = this;
            e.initArrowEvents(),
                e.initDotEvents(),
                e.initSlideEvents(),
                e.$list.on(
                    "touchstart.slick mousedown.slick", { action: "start" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchmove.slick mousemove.slick", { action: "move" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchend.slick mouseup.slick", { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on(
                    "touchcancel.slick mouseleave.slick", { action: "end" },
                    e.swipeHandler
                ),
                e.$list.on("click.slick", e.clickHandler),
                i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility &&
                e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect &&
                i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                i(window).on(
                    "orientationchange.slick.slick-" + e.instanceUid,
                    i.proxy(e.orientationChange, e)
                ),
                i(window).on(
                    "resize.slick.slick-" + e.instanceUid,
                    i.proxy(e.resize, e)
                ),
                i("[draggable!=true]", e.$slideTrack).on(
                    "dragstart",
                    e.preventDefault
                ),
                i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                i(e.setPosition);
        }),
        (e.prototype.initUI = function() {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots &&
                i.slideCount > i.options.slidesToShow &&
                i.$dots.show();
        }),
        (e.prototype.keyHandler = function(i) {
            var e = this;
            i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                (37 === i.keyCode && !0 === e.options.accessibility ?
                    e.changeSlide({
                        data: { message: !0 === e.options.rtl ? "next" : "previous" },
                    }) :
                    39 === i.keyCode &&
                    !0 === e.options.accessibility &&
                    e.changeSlide({
                        data: { message: !0 === e.options.rtl ? "previous" : "next" },
                    }));
        }),
        (e.prototype.lazyLoad = function() {
            function e(e) {
                i("img[data-lazy]", e).each(function() {
                    var e = i(this),
                        t = i(this).attr("data-lazy"),
                        o = i(this).attr("data-srcset"),
                        s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                        r = document.createElement("img");
                    (r.onload = function() {
                        e.animate({ opacity: 0 }, 100, function() {
                            o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                                e.attr("src", t).animate({ opacity: 1 }, 200, function() {
                                    e.removeAttr(
                                        "data-lazy data-srcset data-sizes"
                                    ).removeClass("slick-loading");
                                }),
                                n.$slider.trigger("lazyLoaded", [n, e, t]);
                        });
                    }),
                    (r.onerror = function() {
                        e
                            .removeAttr("data-lazy")
                            .removeClass("slick-loading")
                            .addClass("slick-lazyload-error"),
                            n.$slider.trigger("lazyLoadError", [n, e, t]);
                    }),
                    (r.src = t);
                });
            }
            var t,
                o,
                s,
                n = this;
            if (
                (!0 === n.options.centerMode ?
                    !0 === n.options.infinite ?
                    (s =
                        (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                        n.options.slidesToShow +
                        2) :
                    ((o = Math.max(
                            0,
                            n.currentSlide - (n.options.slidesToShow / 2 + 1)
                        )),
                        (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide)) :
                    ((o = n.options.infinite ?
                            n.options.slidesToShow + n.currentSlide :
                            n.currentSlide),
                        (s = Math.ceil(o + n.options.slidesToShow)), !0 === n.options.fade &&
                        (o > 0 && o--, s <= n.slideCount && s++)),
                    (t = n.$slider.find(".slick-slide").slice(o, s)),
                    "anticipated" === n.options.lazyLoad)
            )
                for (
                    var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++
                )
                    r < 0 && (r = n.slideCount - 1),
                    (t = (t = t.add(d.eq(r))).add(d.eq(l))),
                    r--,
                    l++;
            e(t),
                n.slideCount <= n.options.slidesToShow ?
                e(n.$slider.find(".slick-slide")) :
                n.currentSlide >= n.slideCount - n.options.slidesToShow ?
                e(
                    n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)
                ) :
                0 === n.currentSlide &&
                e(
                    n.$slider
                    .find(".slick-cloned")
                    .slice(-1 * n.options.slidesToShow)
                );
        }),
        (e.prototype.loadSlider = function() {
            var i = this;
            i.setPosition(),
                i.$slideTrack.css({ opacity: 1 }),
                i.$slider.removeClass("slick-loading"),
                i.initUI(),
                "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
        }),
        (e.prototype.next = e.prototype.slickNext =
            function() {
                this.changeSlide({ data: { message: "next" } });
            }),
        (e.prototype.orientationChange = function() {
            var i = this;
            i.checkResponsive(), i.setPosition();
        }),
        (e.prototype.pause = e.prototype.slickPause =
            function() {
                var i = this;
                i.autoPlayClear(), (i.paused = !0);
            }),
        (e.prototype.play = e.prototype.slickPlay =
            function() {
                var i = this;
                i.autoPlay(),
                    (i.options.autoplay = !0),
                    (i.paused = !1),
                    (i.focussed = !1),
                    (i.interrupted = !1);
            }),
        (e.prototype.postSlide = function(e) {
            var t = this;
            t.unslicked ||
                (t.$slider.trigger("afterChange", [t, e]),
                    (t.animating = !1),
                    t.slideCount > t.options.slidesToShow && t.setPosition(),
                    (t.swipeLeft = null),
                    t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility &&
                    (t.initADA(),
                        t.options.focusOnChange &&
                        i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
        }),
        (e.prototype.prev = e.prototype.slickPrev =
            function() {
                this.changeSlide({ data: { message: "previous" } });
            }),
        (e.prototype.preventDefault = function(i) {
            i.preventDefault();
        }),
        (e.prototype.progressiveLazyLoad = function(e) {
            e = e || 1;
            var t,
                o,
                s,
                n,
                r,
                l = this,
                d = i("img[data-lazy]", l.$slider);
            d.length ?
                ((t = d.first()),
                    (o = t.attr("data-lazy")),
                    (s = t.attr("data-srcset")),
                    (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
                    ((r = document.createElement("img")).onload = function() {
                        s && (t.attr("srcset", s), n && t.attr("sizes", n)),
                            t
                            .attr("src", o)
                            .removeAttr("data-lazy data-srcset data-sizes")
                            .removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(),
                            l.$slider.trigger("lazyLoaded", [l, t, o]),
                            l.progressiveLazyLoad();
                    }),
                    (r.onerror = function() {
                        e < 3 ?
                            setTimeout(function() {
                                l.progressiveLazyLoad(e + 1);
                            }, 500) :
                            (t
                                .removeAttr("data-lazy")
                                .removeClass("slick-loading")
                                .addClass("slick-lazyload-error"),
                                l.$slider.trigger("lazyLoadError", [l, t, o]),
                                l.progressiveLazyLoad());
                    }),
                    (r.src = o)) :
                l.$slider.trigger("allImagesLoaded", [l]);
        }),
        (e.prototype.refresh = function(e) {
            var t,
                o,
                s = this;
            (o = s.slideCount - s.options.slidesToShow), !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
                s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                (t = s.currentSlide),
                s.destroy(!0),
                i.extend(s, s.initials, { currentSlide: t }),
                s.init(),
                e || s.changeSlide({ data: { message: "index", index: t } }, !1);
        }),
        (e.prototype.registerBreakpoints = function() {
            var e,
                t,
                o,
                s = this,
                n = s.options.responsive || null;
            if ("array" === i.type(n) && n.length) {
                s.respondTo = s.options.respondTo || "window";
                for (e in n)
                    if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
                        for (t = n[e].breakpoint; o >= 0;)
                            s.breakpoints[o] &&
                            s.breakpoints[o] === t &&
                            s.breakpoints.splice(o, 1),
                            o--;
                        s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
                    }
                s.breakpoints.sort(function(i, e) {
                    return s.options.mobileFirst ? i - e : e - i;
                });
            }
        }),
        (e.prototype.reinit = function() {
            var e = this;
            (e.$slides = e.$slideTrack
                .children(e.options.slide)
                .addClass("slick-slide")),
            (e.slideCount = e.$slides.length),
            e.currentSlide >= e.slideCount &&
                0 !== e.currentSlide &&
                (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                e.registerBreakpoints(),
                e.setProps(),
                e.setupInfinite(),
                e.buildArrows(),
                e.updateArrows(),
                e.initArrowEvents(),
                e.buildDots(),
                e.updateDots(),
                e.initDotEvents(),
                e.cleanUpSlideEvents(),
                e.initSlideEvents(),
                e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect &&
                i(e.$slideTrack).children().on("click.slick", e.selectHandler),
                e.setSlideClasses(
                    "number" == typeof e.currentSlide ? e.currentSlide : 0
                ),
                e.setPosition(),
                e.focusHandler(),
                (e.paused = !e.options.autoplay),
                e.autoPlay(),
                e.$slider.trigger("reInit", [e]);
        }),
        (e.prototype.resize = function() {
            var e = this;
            i(window).width() !== e.windowWidth &&
                (clearTimeout(e.windowDelay),
                    (e.windowDelay = window.setTimeout(function() {
                        (e.windowWidth = i(window).width()),
                        e.checkResponsive(),
                            e.unslicked || e.setPosition();
                    }, 50)));
        }),
        (e.prototype.removeSlide = e.prototype.slickRemove =
            function(i, e, t) {
                var o = this;
                if (
                    ((i =
                            "boolean" == typeof i ?
                            !0 === (e = i) ?
                            0 :
                            o.slideCount - 1 :
                            !0 === e ?
                            --i :
                            i),
                        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
                )
                    return !1;
                o.unload(), !0 === t ?
                    o.$slideTrack.children().remove() :
                    o.$slideTrack.children(this.options.slide).eq(i).remove(),
                    (o.$slides = o.$slideTrack.children(this.options.slide)),
                    o.$slideTrack.children(this.options.slide).detach(),
                    o.$slideTrack.append(o.$slides),
                    (o.$slidesCache = o.$slides),
                    o.reinit();
            }),
        (e.prototype.setCSS = function(i) {
            var e,
                t,
                o = this,
                s = {};
            !0 === o.options.rtl && (i = -i),
                (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
                (s[o.positionProp] = i), !1 === o.transformsEnabled ?
                o.$slideTrack.css(s) :
                ((s = {}), !1 === o.cssTransitions ?
                    ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                        o.$slideTrack.css(s)) :
                    ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                        o.$slideTrack.css(s)));
        }),
        (e.prototype.setDimensions = function() {
            var i = this;
            !1 === i.options.vertical ?
                !0 === i.options.centerMode &&
                i.$list.css({ padding: "0px " + i.options.centerPadding }) :
                (i.$list.height(
                        i.$slides.first().outerHeight(!0) * i.options.slidesToShow
                    ), !0 === i.options.centerMode &&
                    i.$list.css({ padding: i.options.centerPadding + " 0px" })),
                (i.listWidth = i.$list.width()),
                (i.listHeight = i.$list.height()), !1 === i.options.vertical && !1 === i.options.variableWidth ?
                ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
                    i.$slideTrack.width(
                        Math.ceil(
                            i.slideWidth * i.$slideTrack.children(".slick-slide").length
                        )
                    )) :
                !0 === i.options.variableWidth ?
                i.$slideTrack.width(5e3 * i.slideCount) :
                ((i.slideWidth = Math.ceil(i.listWidth)),
                    i.$slideTrack.height(
                        Math.ceil(
                            i.$slides.first().outerHeight(!0) *
                            i.$slideTrack.children(".slick-slide").length
                        )
                    ));
            var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
            !1 === i.options.variableWidth &&
                i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
        }),
        (e.prototype.setFade = function() {
            var e,
                t = this;
            t.$slides.each(function(o, s) {
                    (e = t.slideWidth * o * -1), !0 === t.options.rtl ?
                        i(s).css({
                            position: "relative",
                            right: e,
                            top: 0,
                            zIndex: t.options.zIndex - 2,
                            opacity: 0,
                        }) :
                        i(s).css({
                            position: "relative",
                            left: e,
                            top: 0,
                            zIndex: t.options.zIndex - 2,
                            opacity: 0,
                        });
                }),
                t.$slides
                .eq(t.currentSlide)
                .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
        }),
        (e.prototype.setHeight = function() {
            var i = this;
            if (
                1 === i.options.slidesToShow &&
                !0 === i.options.adaptiveHeight &&
                !1 === i.options.vertical
            ) {
                var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
                i.$list.css("height", e);
            }
        }),
        (e.prototype.setOption = e.prototype.slickSetOption =
            function() {
                var e,
                    t,
                    o,
                    s,
                    n,
                    r = this,
                    l = !1;
                if (
                    ("object" === i.type(arguments[0]) ?
                        ((o = arguments[0]), (l = arguments[1]), (n = "multiple")) :
                        "string" === i.type(arguments[0]) &&
                        ((o = arguments[0]),
                            (s = arguments[1]),
                            (l = arguments[2]),
                            "responsive" === arguments[0] &&
                            "array" === i.type(arguments[1]) ?
                            (n = "responsive") :
                            void 0 !== arguments[1] && (n = "single")),
                        "single" === n)
                )
                    r.options[o] = s;
                else if ("multiple" === n)
                    i.each(o, function(i, e) {
                        r.options[i] = e;
                    });
                else if ("responsive" === n)
                    for (t in s)
                        if ("array" !== i.type(r.options.responsive))
                            r.options.responsive = [s[t]];
                        else {
                            for (e = r.options.responsive.length - 1; e >= 0;)
                                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                                r.options.responsive.splice(e, 1),
                                e--;
                            r.options.responsive.push(s[t]);
                        }
                l && (r.unload(), r.reinit());
            }),
        (e.prototype.setPosition = function() {
            var i = this;
            i.setDimensions(),
                i.setHeight(), !1 === i.options.fade ?
                i.setCSS(i.getLeft(i.currentSlide)) :
                i.setFade(),
                i.$slider.trigger("setPosition", [i]);
        }),
        (e.prototype.setProps = function() {
            var i = this,
                e = document.body.style;
            (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
            "top" === i.positionProp ?
                i.$slider.addClass("slick-vertical") :
                i.$slider.removeClass("slick-vertical"),
                (void 0 === e.WebkitTransition &&
                    void 0 === e.MozTransition &&
                    void 0 === e.msTransition) ||
                (!0 === i.options.useCSS && (i.cssTransitions = !0)),
                i.options.fade &&
                ("number" == typeof i.options.zIndex ?
                    i.options.zIndex < 3 && (i.options.zIndex = 3) :
                    (i.options.zIndex = i.defaults.zIndex)),
                void 0 !== e.OTransform &&
                ((i.animType = "OTransform"),
                    (i.transformType = "-o-transform"),
                    (i.transitionType = "OTransition"),
                    void 0 === e.perspectiveProperty &&
                    void 0 === e.webkitPerspective &&
                    (i.animType = !1)),
                void 0 !== e.MozTransform &&
                ((i.animType = "MozTransform"),
                    (i.transformType = "-moz-transform"),
                    (i.transitionType = "MozTransition"),
                    void 0 === e.perspectiveProperty &&
                    void 0 === e.MozPerspective &&
                    (i.animType = !1)),
                void 0 !== e.webkitTransform &&
                ((i.animType = "webkitTransform"),
                    (i.transformType = "-webkit-transform"),
                    (i.transitionType = "webkitTransition"),
                    void 0 === e.perspectiveProperty &&
                    void 0 === e.webkitPerspective &&
                    (i.animType = !1)),
                void 0 !== e.msTransform &&
                ((i.animType = "msTransform"),
                    (i.transformType = "-ms-transform"),
                    (i.transitionType = "msTransition"),
                    void 0 === e.msTransform && (i.animType = !1)),
                void 0 !== e.transform &&
                !1 !== i.animType &&
                ((i.animType = "transform"),
                    (i.transformType = "transform"),
                    (i.transitionType = "transition")),
                (i.transformsEnabled =
                    i.options.useTransform && null !== i.animType && !1 !== i.animType);
        }),
        (e.prototype.setSlideClasses = function(i) {
            var e,
                t,
                o,
                s,
                n = this;
            if (
                ((t = n.$slider
                        .find(".slick-slide")
                        .removeClass("slick-active slick-center slick-current")
                        .attr("aria-hidden", "true")),
                    n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode)
            ) {
                var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
                (e = Math.floor(n.options.slidesToShow / 2)), !0 === n.options.infinite &&
                    (i >= e && i <= n.slideCount - 1 - e ?
                        n.$slides
                        .slice(i - e + r, i + e + 1)
                        .addClass("slick-active")
                        .attr("aria-hidden", "false") :
                        ((o = n.options.slidesToShow + i),
                            t
                            .slice(o - e + 1 + r, o + e + 2)
                            .addClass("slick-active")
                            .attr("aria-hidden", "false")),
                        0 === i ?
                        t
                        .eq(t.length - 1 - n.options.slidesToShow)
                        .addClass("slick-center") :
                        i === n.slideCount - 1 &&
                        t.eq(n.options.slidesToShow).addClass("slick-center")),
                    n.$slides.eq(i).addClass("slick-center");
            } else
                i >= 0 && i <= n.slideCount - n.options.slidesToShow ?
                n.$slides
                .slice(i, i + n.options.slidesToShow)
                .addClass("slick-active")
                .attr("aria-hidden", "false") :
                t.length <= n.options.slidesToShow ?
                t.addClass("slick-active").attr("aria-hidden", "false") :
                ((s = n.slideCount % n.options.slidesToShow),
                    (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
                    n.options.slidesToShow == n.options.slidesToScroll &&
                    n.slideCount - i < n.options.slidesToShow ?
                    t
                    .slice(o - (n.options.slidesToShow - s), o + s)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false") :
                    t
                    .slice(o, o + n.options.slidesToShow)
                    .addClass("slick-active")
                    .attr("aria-hidden", "false"));
            ("ondemand" !== n.options.lazyLoad &&
                "anticipated" !== n.options.lazyLoad) ||
            n.lazyLoad();
        }),
        (e.prototype.setupInfinite = function() {
            var e,
                t,
                o,
                s = this;
            if (
                (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite &&
                    !1 === s.options.fade &&
                    ((t = null), s.slideCount > s.options.slidesToShow))
            ) {
                for (
                    o = !0 === s.options.centerMode ?
                    s.options.slidesToShow + 1 :
                    s.options.slidesToShow,
                    e = s.slideCount; e > s.slideCount - o; e -= 1
                )
                    (t = e - 1),
                    i(s.$slides[t])
                    .clone(!0)
                    .attr("id", "")
                    .attr("data-slick-index", t - s.slideCount)
                    .prependTo(s.$slideTrack)
                    .addClass("slick-cloned");
                for (e = 0; e < o + s.slideCount; e += 1)
                    (t = e),
                    i(s.$slides[t])
                    .clone(!0)
                    .attr("id", "")
                    .attr("data-slick-index", t + s.slideCount)
                    .appendTo(s.$slideTrack)
                    .addClass("slick-cloned");
                s.$slideTrack
                    .find(".slick-cloned")
                    .find("[id]")
                    .each(function() {
                        i(this).attr("id", "");
                    });
            }
        }),
        (e.prototype.interrupt = function(i) {
            var e = this;
            i || e.autoPlay(), (e.interrupted = i);
        }),
        (e.prototype.selectHandler = function(e) {
            var t = this,
                o = i(e.target).is(".slick-slide") ?
                i(e.target) :
                i(e.target).parents(".slick-slide"),
                s = parseInt(o.attr("data-slick-index"));
            s || (s = 0),
                t.slideCount <= t.options.slidesToShow ?
                t.slideHandler(s, !1, !0) :
                t.slideHandler(s);
        }),
        (e.prototype.slideHandler = function(i, e, t) {
            var o,
                s,
                n,
                r,
                l,
                d = null,
                a = this;
            if (
                ((e = e || !1), !(
                    (!0 === a.animating && !0 === a.options.waitForAnimate) ||
                    (!0 === a.options.fade && a.currentSlide === i)
                ))
            )
                if (
                    (!1 === e && a.asNavFor(i),
                        (o = i),
                        (d = a.getLeft(o)),
                        (r = a.getLeft(a.currentSlide)),
                        (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft), !1 === a.options.infinite &&
                        !1 === a.options.centerMode &&
                        (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                )
                    !1 === a.options.fade &&
                    ((o = a.currentSlide), !0 !== t ?
                        a.animateSlide(r, function() {
                            a.postSlide(o);
                        }) :
                        a.postSlide(o));
                else if (!1 === a.options.infinite &&
                !0 === a.options.centerMode &&
                (i < 0 || i > a.slideCount - a.options.slidesToScroll)
            )
                !1 === a.options.fade &&
                ((o = a.currentSlide), !0 !== t ?
                    a.animateSlide(r, function() {
                        a.postSlide(o);
                    }) :
                    a.postSlide(o));
            else {
                if (
                    (a.options.autoplay && clearInterval(a.autoPlayTimer),
                        (s =
                            o < 0 ?
                            a.slideCount % a.options.slidesToScroll != 0 ?
                            a.slideCount - (a.slideCount % a.options.slidesToScroll) :
                            a.slideCount + o :
                            o >= a.slideCount ?
                            a.slideCount % a.options.slidesToScroll != 0 ?
                            0 :
                            o - a.slideCount :
                            o),
                        (a.animating = !0),
                        a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                        (n = a.currentSlide),
                        (a.currentSlide = s),
                        a.setSlideClasses(a.currentSlide),
                        a.options.asNavFor &&
                        (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                        l.options.slidesToShow &&
                        l.setSlideClasses(a.currentSlide),
                        a.updateDots(),
                        a.updateArrows(), !0 === a.options.fade)
                )
                    return (!0 !== t ?
                        (a.fadeSlideOut(n),
                            a.fadeSlide(s, function() {
                                a.postSlide(s);
                            })) :
                        a.postSlide(s),
                        void a.animateHeight()
                    );
                !0 !== t ?
                    a.animateSlide(d, function() {
                        a.postSlide(s);
                    }) :
                    a.postSlide(s);
            }
        }),
        (e.prototype.startLoad = function() {
            var i = this;
            !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots &&
                i.slideCount > i.options.slidesToShow &&
                i.$dots.hide(),
                i.$slider.addClass("slick-loading");
        }),
        (e.prototype.swipeDirection = function() {
            var i,
                e,
                t,
                o,
                s = this;
            return (
                (i = s.touchObject.startX - s.touchObject.curX),
                (e = s.touchObject.startY - s.touchObject.curY),
                (t = Math.atan2(e, i)),
                (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
                o <= 45 && o >= 0 ?
                !1 === s.options.rtl ?
                "left" :
                "right" :
                o <= 360 && o >= 315 ?
                !1 === s.options.rtl ?
                "left" :
                "right" :
                o >= 135 && o <= 225 ?
                !1 === s.options.rtl ?
                "right" :
                "left" :
                !0 === s.options.verticalSwiping ?
                o >= 35 && o <= 135 ?
                "down" :
                "up" :
                "vertical"
            );
        }),
        (e.prototype.swipeEnd = function(i) {
            var e,
                t,
                o = this;
            if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
                return (o.scrolling = !1), !1;
            if (
                ((o.interrupted = !1),
                    (o.shouldClick = !(o.touchObject.swipeLength > 10)),
                    void 0 === o.touchObject.curX)
            )
                return !1;
            if (
                (!0 === o.touchObject.edgeHit &&
                    o.$slider.trigger("edge", [o, o.swipeDirection()]),
                    o.touchObject.swipeLength >= o.touchObject.minSwipe)
            ) {
                switch ((t = o.swipeDirection())) {
                    case "left":
                    case "down":
                        (e = o.options.swipeToSlide ?
                            o.checkNavigable(o.currentSlide + o.getSlideCount()) :
                            o.currentSlide + o.getSlideCount()),
                        (o.currentDirection = 0);
                        break;
                    case "right":
                    case "up":
                        (e = o.options.swipeToSlide ?
                            o.checkNavigable(o.currentSlide - o.getSlideCount()) :
                            o.currentSlide - o.getSlideCount()),
                        (o.currentDirection = 1);
                }
                "vertical" != t &&
                    (o.slideHandler(e),
                        (o.touchObject = {}),
                        o.$slider.trigger("swipe", [o, t]));
            } else
                o.touchObject.startX !== o.touchObject.curX &&
                (o.slideHandler(o.currentSlide), (o.touchObject = {}));
        }),
        (e.prototype.swipeHandler = function(i) {
            var e = this;
            if (!(!1 === e.options.swipe ||
                    ("ontouchend" in document && !1 === e.options.swipe) ||
                    (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
                ))
                switch (
                    ((e.touchObject.fingerCount =
                            i.originalEvent && void 0 !== i.originalEvent.touches ?
                            i.originalEvent.touches.length :
                            1),
                        (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold), !0 === e.options.verticalSwiping &&
                        (e.touchObject.minSwipe =
                            e.listHeight / e.options.touchThreshold),
                        i.data.action)
                ) {
                    case "start":
                        e.swipeStart(i);
                        break;
                    case "move":
                        e.swipeMove(i);
                        break;
                    case "end":
                        e.swipeEnd(i);
                }
        }),
        (e.prototype.swipeMove = function(i) {
            var e,
                t,
                o,
                s,
                n,
                r,
                l = this;
            return (
                (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null), !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
                ((e = l.getLeft(l.currentSlide)),
                    (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
                    (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
                    (l.touchObject.swipeLength = Math.round(
                        Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
                    )),
                    (r = Math.round(
                        Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
                    )), !l.options.verticalSwiping && !l.swiping && r > 4 ?
                    ((l.scrolling = !0), !1) :
                    (!0 === l.options.verticalSwiping &&
                        (l.touchObject.swipeLength = r),
                        (t = l.swipeDirection()),
                        void 0 !== i.originalEvent &&
                        l.touchObject.swipeLength > 4 &&
                        ((l.swiping = !0), i.preventDefault()),
                        (s =
                            (!1 === l.options.rtl ? 1 : -1) *
                            (l.touchObject.curX > l.touchObject.startX ? 1 : -1)), !0 === l.options.verticalSwiping &&
                        (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
                        (o = l.touchObject.swipeLength),
                        (l.touchObject.edgeHit = !1), !1 === l.options.infinite &&
                        ((0 === l.currentSlide && "right" === t) ||
                            (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                        ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                            (l.touchObject.edgeHit = !0)), !1 === l.options.vertical ?
                        (l.swipeLeft = e + o * s) :
                        (l.swipeLeft =
                            e + o * (l.$list.height() / l.listWidth) * s), !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade &&
                        !1 !== l.options.touchMove &&
                        (!0 === l.animating ?
                            ((l.swipeLeft = null), !1) :
                            void l.setCSS(l.swipeLeft))))
            );
        }),
        (e.prototype.swipeStart = function(i) {
            var e,
                t = this;
            if (
                ((t.interrupted = !0),
                    1 !== t.touchObject.fingerCount ||
                    t.slideCount <= t.options.slidesToShow)
            )
                return (t.touchObject = {}), !1;
            void 0 !== i.originalEvent &&
                void 0 !== i.originalEvent.touches &&
                (e = i.originalEvent.touches[0]),
                (t.touchObject.startX = t.touchObject.curX =
                    void 0 !== e ? e.pageX : i.clientX),
                (t.touchObject.startY = t.touchObject.curY =
                    void 0 !== e ? e.pageY : i.clientY),
                (t.dragging = !0);
        }),
        (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
            function() {
                var i = this;
                null !== i.$slidesCache &&
                    (i.unload(),
                        i.$slideTrack.children(this.options.slide).detach(),
                        i.$slidesCache.appendTo(i.$slideTrack),
                        i.reinit());
            }),
        (e.prototype.unload = function() {
            var e = this;
            i(".slick-cloned", e.$slider).remove(),
                e.$dots && e.$dots.remove(),
                e.$prevArrow &&
                e.htmlExpr.test(e.options.prevArrow) &&
                e.$prevArrow.remove(),
                e.$nextArrow &&
                e.htmlExpr.test(e.options.nextArrow) &&
                e.$nextArrow.remove(),
                e.$slides
                .removeClass("slick-slide slick-active slick-visible slick-current")
                .attr("aria-hidden", "true")
                .css("width", "");
        }),
        (e.prototype.unslick = function(i) {
            var e = this;
            e.$slider.trigger("unslick", [e, i]), e.destroy();
        }),
        (e.prototype.updateArrows = function() {
            var i = this;
            Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows &&
                i.slideCount > i.options.slidesToShow &&
                !i.options.infinite &&
                (i.$prevArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"),
                    i.$nextArrow
                    .removeClass("slick-disabled")
                    .attr("aria-disabled", "false"),
                    0 === i.currentSlide ?
                    (i.$prevArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"),
                        i.$nextArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false")) :
                    i.currentSlide >= i.slideCount - i.options.slidesToShow &&
                    !1 === i.options.centerMode ?
                    (i.$nextArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"),
                        i.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false")) :
                    i.currentSlide >= i.slideCount - 1 &&
                    !0 === i.options.centerMode &&
                    (i.$nextArrow
                        .addClass("slick-disabled")
                        .attr("aria-disabled", "true"),
                        i.$prevArrow
                        .removeClass("slick-disabled")
                        .attr("aria-disabled", "false")));
        }),
        (e.prototype.updateDots = function() {
            var i = this;
            null !== i.$dots &&
                (i.$dots.find("li").removeClass("slick-active").end(),
                    i.$dots
                    .find("li")
                    .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
                    .addClass("slick-active"));
        }),
        (e.prototype.visibility = function() {
            var i = this;
            i.options.autoplay &&
                (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
        }),
        (i.fn.slick = function() {
            var i,
                t,
                o = this,
                s = arguments[0],
                n = Array.prototype.slice.call(arguments, 1),
                r = o.length;
            for (i = 0; i < r; i++)
                if (
                    ("object" == typeof s || void 0 === s ?
                        (o[i].slick = new e(o[i], s)) :
                        (t = o[i].slick[s].apply(o[i].slick, n)),
                        void 0 !== t)
                )
                    return t;
            return o;
        });
    });
} catch (e) {
    console.error("An error has occurred: " + e.stack);
}
/* https://mrrk.ru/wp-content/themes/industrial/js/jquery.swipebox.js */
try {
    /*! Swipebox v1.4.1 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
    (function(window, document, $, undefined) {
        $.swipebox = function(elem, options) {
            var ui,
                defaults = {
                    useCSS: !0,
                    useSVG: !0,
                    initialIndexOnArray: 0,
                    removeBarsOnMobile: !0,
                    hideCloseButtonOnMobile: !1,
                    hideBarsDelay: 3000,
                    videoMaxWidth: 1140,
                    vimeoColor: "cccccc",
                    beforeOpen: null,
                    afterOpen: null,
                    afterClose: null,
                    nextSlide: null,
                    prevSlide: null,
                    loopAtEnd: !1,
                    autoplayVideos: !1,
                    queryStringData: {},
                    toggleClassOnLoad: "",
                },
                plugin = this,
                elements = [],
                $elem,
                selector = elem.selector,
                $selector = $(selector),
                isMobile = navigator.userAgent.match(
                    /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
                ),
                isTouch =
                isMobile !== null ||
                document.createTouch !== undefined ||
                "ontouchstart" in window ||
                "onmsgesturechange" in window ||
                navigator.msMaxTouchPoints,
                supportSVG = !!document.createElementNS &&
                !!document.createElementNS("http://www.w3.org/2000/svg", "svg")
                .createSVGRect,
                winWidth = window.innerWidth ? window.innerWidth : $(window).width(),
                winHeight = window.innerHeight ?
                window.innerHeight :
                $(window).height(),
                currentX = 0,
                html =
                '<div id="swipebox-overlay">\
					<div id="swipebox-container">\
						<div id="swipebox-slider"></div>\
						<div id="swipebox-top-bar">\
							<div id="swipebox-title"></div>\
						</div>\
						<div id="swipebox-bottom-bar">\
							<div id="swipebox-arrows">\
								<a id="swipebox-prev"></a>\
								<a id="swipebox-next"></a>\
							</div>\
						</div>\
						<a id="swipebox-close"></a>\
					</div>\
			</div>';
            plugin.settings = {};
            $.swipebox.close = function() {
                ui.closeSlide();
            };
            $.swipebox.extend = function() {
                return ui;
            };
            plugin.init = function() {
                plugin.settings = $.extend({}, defaults, options);
                if ($.isArray(elem)) {
                    elements = elem;
                    ui.target = $(window);
                    ui.init(plugin.settings.initialIndexOnArray);
                } else {
                    $(document).on("click", selector, function(event) {
                        if (event.target.parentNode.className === "slide current") {
                            return !1;
                        }
                        if (!$.isArray(elem)) {
                            ui.destroy();
                            $elem = $(selector);
                            ui.actions();
                        }
                        elements = [];
                        var index, relType, relVal;
                        if (!relVal) {
                            relType = "data-rel";
                            relVal = $(this).attr(relType);
                        }
                        if (!relVal) {
                            relType = "rel";
                            relVal = $(this).attr(relType);
                        }
                        if (relVal && relVal !== "" && relVal !== "nofollow") {
                            $elem = $selector.filter("[" + relType + '="' + relVal + '"]');
                        } else {
                            $elem = $(selector);
                        }
                        $elem.each(function() {
                            var title = null,
                                href = null;
                            if ($(this).attr("title")) {
                                title = $(this).attr("title");
                            }
                            if ($(this).attr("href")) {
                                href = $(this).attr("href");
                            }
                            elements.push({ href: href, title: title });
                        });
                        index = $elem.index($(this));
                        event.preventDefault();
                        event.stopPropagation();
                        ui.target = $(event.target);
                        ui.init(index);
                    });
                }
            };
            ui = {
                init: function(index) {
                    if (plugin.settings.beforeOpen) {
                        plugin.settings.beforeOpen();
                    }
                    this.target.trigger("swipebox-start");
                    $.swipebox.isOpen = !0;
                    this.build();
                    this.openSlide(index);
                    this.openMedia(index);
                    this.preloadMedia(index + 1);
                    this.preloadMedia(index - 1);
                    if (plugin.settings.afterOpen) {
                        plugin.settings.afterOpen();
                    }
                },
                build: function() {
                    var $this = this,
                        bg;
                    $("body").append(html);
                    if (supportSVG && plugin.settings.useSVG === !0) {
                        bg = $("#swipebox-close").css("background-image");
                        bg = bg.replace("png", "svg");
                        $("#swipebox-prev, #swipebox-next, #swipebox-close").css({
                            "background-image": bg,
                        });
                    }
                    if (isMobile && plugin.settings.removeBarsOnMobile) {
                        $("#swipebox-bottom-bar, #swipebox-top-bar").remove();
                    }
                    $.each(elements, function() {
                        $("#swipebox-slider").append('<div class="slide"></div>');
                    });
                    $this.setDim();
                    $this.actions();
                    if (isTouch) {
                        $this.gesture();
                    }
                    $this.keyboard();
                    $this.animBars();
                    $this.resize();
                },
                setDim: function() {
                    var width,
                        height,
                        sliderCss = {};
                    if ("onorientationchange" in window) {
                        window.addEventListener(
                            "orientationchange",
                            function() {
                                if (window.orientation === 0) {
                                    width = winWidth;
                                    height = winHeight;
                                } else if (
                                    window.orientation === 90 ||
                                    window.orientation === -90
                                ) {
                                    width = winHeight;
                                    height = winWidth;
                                }
                            }, !1
                        );
                    } else {
                        width = window.innerWidth ? window.innerWidth : $(window).width();
                        height = window.innerHeight ?
                            window.innerHeight :
                            $(window).height();
                    }
                    sliderCss = { width: width, height: height };
                    $("#swipebox-overlay").css(sliderCss);
                },
                resize: function() {
                    var $this = this;
                    $(window)
                        .resize(function() {
                            $this.setDim();
                        })
                        .resize();
                },
                supportTransition: function() {
                    var prefixes =
                        "transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(
                            " "
                        ),
                        i;
                    for (i = 0; i < prefixes.length; i++) {
                        if (
                            document.createElement("div").style[prefixes[i]] !== undefined
                        ) {
                            return prefixes[i];
                        }
                    }
                    return !1;
                },
                doCssTrans: function() {
                    if (plugin.settings.useCSS && this.supportTransition()) {
                        return !0;
                    }
                },
                gesture: function() {
                    var $this = this,
                        index,
                        hDistance,
                        vDistance,
                        hDistanceLast,
                        vDistanceLast,
                        hDistancePercent,
                        vSwipe = !1,
                        hSwipe = !1,
                        hSwipMinDistance = 10,
                        vSwipMinDistance = 50,
                        startCoords = {},
                        endCoords = {},
                        bars = $("#swipebox-top-bar, #swipebox-bottom-bar"),
                        slider = $("#swipebox-slider");
                    bars.addClass("visible-bars");
                    $this.setTimeout();
                    $("body")
                        .bind("touchstart", function(event) {
                            $(this).addClass("touching");
                            index = $("#swipebox-slider .slide").index(
                                $("#swipebox-slider .slide.current")
                            );
                            endCoords = event.originalEvent.targetTouches[0];
                            startCoords.pageX = event.originalEvent.targetTouches[0].pageX;
                            startCoords.pageY = event.originalEvent.targetTouches[0].pageY;
                            $("#swipebox-slider").css({
                                "-webkit-transform": "translate3d(" + currentX + "%, 0, 0)",
                                transform: "translate3d(" + currentX + "%, 0, 0)",
                            });
                            $(".touching").bind("touchmove", function(event) {
                                event.preventDefault();
                                event.stopPropagation();
                                endCoords = event.originalEvent.targetTouches[0];
                                if (!hSwipe) {
                                    vDistanceLast = vDistance;
                                    vDistance = endCoords.pageY - startCoords.pageY;
                                    if (Math.abs(vDistance) >= vSwipMinDistance || vSwipe) {
                                        var opacity = 0.75 - Math.abs(vDistance) / slider.height();
                                        slider.css({ top: vDistance + "px" });
                                        slider.css({ opacity: opacity });
                                        vSwipe = !0;
                                    }
                                }
                                hDistanceLast = hDistance;
                                hDistance = endCoords.pageX - startCoords.pageX;
                                hDistancePercent = (hDistance * 100) / winWidth;
                                if (!hSwipe &&
                                    !vSwipe &&
                                    Math.abs(hDistance) >= hSwipMinDistance
                                ) {
                                    $("#swipebox-slider").css({
                                        "-webkit-transition": "",
                                        transition: "",
                                    });
                                    hSwipe = !0;
                                }
                                if (hSwipe) {
                                    if (0 < hDistance) {
                                        if (0 === index) {
                                            $("#swipebox-overlay").addClass("leftSpringTouch");
                                        } else {
                                            $("#swipebox-overlay")
                                                .removeClass("leftSpringTouch")
                                                .removeClass("rightSpringTouch");
                                            $("#swipebox-slider").css({
                                                "-webkit-transform": "translate3d(" +
                                                    (currentX + hDistancePercent) +
                                                    "%, 0, 0)",
                                                transform: "translate3d(" +
                                                    (currentX + hDistancePercent) +
                                                    "%, 0, 0)",
                                            });
                                        }
                                    } else if (0 > hDistance) {
                                        if (elements.length === index + 1) {
                                            $("#swipebox-overlay").addClass("rightSpringTouch");
                                        } else {
                                            $("#swipebox-overlay")
                                                .removeClass("leftSpringTouch")
                                                .removeClass("rightSpringTouch");
                                            $("#swipebox-slider").css({
                                                "-webkit-transform": "translate3d(" +
                                                    (currentX + hDistancePercent) +
                                                    "%, 0, 0)",
                                                transform: "translate3d(" +
                                                    (currentX + hDistancePercent) +
                                                    "%, 0, 0)",
                                            });
                                        }
                                    }
                                }
                            });
                            return !1;
                        })
                        .bind("touchend", function(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            $("#swipebox-slider").css({
                                "-webkit-transition": "-webkit-transform 0.4s ease",
                                transition: "transform 0.4s ease",
                            });
                            vDistance = endCoords.pageY - startCoords.pageY;
                            hDistance = endCoords.pageX - startCoords.pageX;
                            hDistancePercent = (hDistance * 100) / winWidth;
                            if (vSwipe) {
                                vSwipe = !1;
                                if (
                                    Math.abs(vDistance) >= 2 * vSwipMinDistance &&
                                    Math.abs(vDistance) > Math.abs(vDistanceLast)
                                ) {
                                    var vOffset =
                                        vDistance > 0 ? slider.height() : -slider.height();
                                    slider.animate({ top: vOffset + "px", opacity: 0 },
                                        300,
                                        function() {
                                            $this.closeSlide();
                                        }
                                    );
                                } else {
                                    slider.animate({ top: 0, opacity: 1 }, 300);
                                }
                            } else if (hSwipe) {
                                hSwipe = !1;
                                if (
                                    hDistance >= hSwipMinDistance &&
                                    hDistance >= hDistanceLast
                                ) {
                                    $this.getPrev();
                                } else if (
                                    hDistance <= -hSwipMinDistance &&
                                    hDistance <= hDistanceLast
                                ) {
                                    $this.getNext();
                                }
                            } else {
                                if (!bars.hasClass("visible-bars")) {
                                    $this.showBars();
                                    $this.setTimeout();
                                } else {
                                    $this.clearTimeout();
                                    $this.hideBars();
                                }
                            }
                            $("#swipebox-slider").css({
                                "-webkit-transform": "translate3d(" + currentX + "%, 0, 0)",
                                transform: "translate3d(" + currentX + "%, 0, 0)",
                            });
                            $("#swipebox-overlay")
                                .removeClass("leftSpringTouch")
                                .removeClass("rightSpringTouch");
                            $(".touching").off("touchmove").removeClass("touching");
                        });
                },
                setTimeout: function() {
                    if (plugin.settings.hideBarsDelay > 0) {
                        var $this = this;
                        $this.clearTimeout();
                        $this.timeout = window.setTimeout(function() {
                            $this.hideBars();
                        }, plugin.settings.hideBarsDelay);
                    }
                },
                clearTimeout: function() {
                    window.clearTimeout(this.timeout);
                    this.timeout = null;
                },
                showBars: function() {
                    var bars = $("#swipebox-top-bar, #swipebox-bottom-bar");
                    if (this.doCssTrans()) {
                        bars.addClass("visible-bars");
                    } else {
                        $("#swipebox-top-bar").animate({ top: 0 }, 500);
                        $("#swipebox-bottom-bar").animate({ bottom: 0 }, 500);
                        setTimeout(function() {
                            bars.addClass("visible-bars");
                        }, 1000);
                    }
                },
                hideBars: function() {
                    var bars = $("#swipebox-top-bar, #swipebox-bottom-bar");
                    if (this.doCssTrans()) {
                        bars.removeClass("visible-bars");
                    } else {
                        $("#swipebox-top-bar").animate({ top: "-50px" }, 500);
                        $("#swipebox-bottom-bar").animate({ bottom: "-50px" }, 500);
                        setTimeout(function() {
                            bars.removeClass("visible-bars");
                        }, 1000);
                    }
                },
                animBars: function() {
                    var $this = this,
                        bars = $("#swipebox-top-bar, #swipebox-bottom-bar");
                    bars.addClass("visible-bars");
                    $this.setTimeout();
                    $("#swipebox-slider").click(function() {
                        if (!bars.hasClass("visible-bars")) {
                            $this.showBars();
                            $this.setTimeout();
                        }
                    });
                    $("#swipebox-bottom-bar").hover(
                        function() {
                            $this.showBars();
                            bars.addClass("visible-bars");
                            $this.clearTimeout();
                        },
                        function() {
                            if (plugin.settings.hideBarsDelay > 0) {
                                bars.removeClass("visible-bars");
                                $this.setTimeout();
                            }
                        }
                    );
                },
                keyboard: function() {
                    var $this = this;
                    $(window).bind("keyup", function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        if (event.keyCode === 37) {
                            $this.getPrev();
                        } else if (event.keyCode === 39) {
                            $this.getNext();
                        } else if (event.keyCode === 27) {
                            $this.closeSlide();
                        }
                    });
                },
                actions: function() {
                    var $this = this,
                        action = "touchend click";
                    if (elements.length < 2) {
                        $("#swipebox-bottom-bar").hide();
                        if (undefined === elements[1]) {
                            $("#swipebox-top-bar").hide();
                        }
                    } else {
                        $("#swipebox-prev").bind(action, function(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            $this.getPrev();
                            $this.setTimeout();
                        });
                        $("#swipebox-next").bind(action, function(event) {
                            event.preventDefault();
                            event.stopPropagation();
                            $this.getNext();
                            $this.setTimeout();
                        });
                    }
                    $("#swipebox-close").bind(action, function() {
                        $this.closeSlide();
                    });
                },
                setSlide: function(index, isFirst) {
                    isFirst = isFirst || !1;
                    var slider = $("#swipebox-slider");
                    currentX = -index * 100;
                    if (this.doCssTrans()) {
                        slider.css({
                            "-webkit-transform": "translate3d(" + -index * 100 + "%, 0, 0)",
                            transform: "translate3d(" + -index * 100 + "%, 0, 0)",
                        });
                    } else {
                        slider.animate({ left: -index * 100 + "%" });
                    }
                    $("#swipebox-slider .slide").removeClass("current");
                    $("#swipebox-slider .slide").eq(index).addClass("current");
                    this.setTitle(index);
                    if (isFirst) {
                        slider.fadeIn();
                    }
                    $("#swipebox-prev, #swipebox-next").removeClass("disabled");
                    if (index === 0) {
                        $("#swipebox-prev").addClass("disabled");
                    } else if (
                        index === elements.length - 1 &&
                        plugin.settings.loopAtEnd !== !0
                    ) {
                        $("#swipebox-next").addClass("disabled");
                    }
                },
                openSlide: function(index) {
                    $("html").addClass("swipebox-html");
                    if (isTouch) {
                        $("html").addClass("swipebox-touch");
                        if (plugin.settings.hideCloseButtonOnMobile) {
                            $("html").addClass("swipebox-no-close-button");
                        }
                    } else {
                        $("html").addClass("swipebox-no-touch");
                    }
                    $(window).trigger("resize");
                    this.setSlide(index, !0);
                },
                preloadMedia: function(index) {
                    var $this = this,
                        src = null;
                    if (elements[index] !== undefined) {
                        src = elements[index].href;
                    }
                    if (!$this.isVideo(src)) {
                        setTimeout(function() {
                            $this.openMedia(index);
                        }, 1000);
                    } else {
                        $this.openMedia(index);
                    }
                },
                openMedia: function(index) {
                    var $this = this,
                        src,
                        slide;
                    if (elements[index] !== undefined) {
                        src = elements[index].href;
                    }
                    if (index < 0 || index >= elements.length) {
                        return !1;
                    }
                    slide = $("#swipebox-slider .slide").eq(index);
                    if (!$this.isVideo(src)) {
                        slide.addClass("slide-loading");
                        $this.loadMedia(src, function() {
                            slide.removeClass("slide-loading");
                            slide.html(this);
                        });
                    } else {
                        slide.html($this.getVideo(src));
                    }
                },
                setTitle: function(index) {
                    var title = null;
                    $("#swipebox-title").empty();
                    if (elements[index] !== undefined) {
                        title = elements[index].title;
                    }
                    if (title) {
                        $("#swipebox-top-bar").show();
                        $("#swipebox-title").append(title);
                    } else {
                        $("#swipebox-top-bar").hide();
                    }
                },
                isVideo: function(src) {
                    if (src) {
                        if (
                            src.match(
                                /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                            ) ||
                            src.match(/vimeo\.com\/([0-9]*)/) ||
                            src.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/)
                        ) {
                            return !0;
                        }
                        if (src.toLowerCase().indexOf("swipeboxvideo=1") >= 0) {
                            return !0;
                        }
                    }
                },
                parseUri: function(uri, customData) {
                    var a = document.createElement("a"),
                        qs = {};
                    a.href = decodeURIComponent(uri);
                    if (a.search) {
                        qs = JSON.parse(
                            '{"' +
                            a.search
                            .toLowerCase()
                            .replace("?", "")
                            .replace(/&/g, '","')
                            .replace(/=/g, '":"') +
                            '"}'
                        );
                    }
                    if ($.isPlainObject(customData)) {
                        qs = $.extend(qs, customData, plugin.settings.queryStringData);
                    }
                    return $.map(qs, function(val, key) {
                        if (val && val > "") {
                            return encodeURIComponent(key) + "=" + encodeURIComponent(val);
                        }
                    }).join("&");
                },
                getVideo: function(url) {
                    var iframe = "",
                        youtubeUrl = url.match(
                            /((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                        ),
                        youtubeShortUrl = url.match(
                            /(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/
                        ),
                        vimeoUrl = url.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),
                        qs = "";
                    if (youtubeUrl || youtubeShortUrl) {
                        if (youtubeShortUrl) {
                            youtubeUrl = youtubeShortUrl;
                        }
                        qs = ui.parseUri(url, {
                            autoplay: plugin.settings.autoplayVideos ? "1" : "0",
                            v: "",
                        });
                        iframe =
                            '<iframe width="560" height="315" src="//' +
                            youtubeUrl[1] +
                            "/embed/" +
                            youtubeUrl[2] +
                            "?" +
                            qs +
                            '" frameborder="0" allowfullscreen></iframe>';
                    } else if (vimeoUrl) {
                        qs = ui.parseUri(url, {
                            autoplay: plugin.settings.autoplayVideos ? "1" : "0",
                            byline: "0",
                            portrait: "0",
                            color: plugin.settings.vimeoColor,
                        });
                        iframe =
                            '<iframe width="560" height="315"  src="//player.vimeo.com/video/' +
                            vimeoUrl[1] +
                            "?" +
                            qs +
                            '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
                    } else {
                        iframe =
                            '<iframe width="560" height="315" src="' +
                            url +
                            '" frameborder="0" allowfullscreen></iframe>';
                    }
                    return (
                        '<div class="swipebox-video-container" style="max-width:' +
                        plugin.settings.videoMaxWidth +
                        'px"><div class="swipebox-video">' +
                        iframe +
                        "</div></div>"
                    );
                },
                loadMedia: function(src, callback) {
                    if (src.trim().indexOf("#") === 0) {
                        callback.call(
                            $("<div>", { class: "swipebox-inline-container" }).append(
                                $(src).clone().toggleClass(plugin.settings.toggleClassOnLoad)
                            )
                        );
                    } else {
                        if (!this.isVideo(src)) {
                            var img = $("<img>").on("load", function() {
                                callback.call(img);
                            });
                            img.attr("src", src);
                        }
                    }
                },
                getNext: function() {
                    var $this = this,
                        src,
                        index = $("#swipebox-slider .slide").index(
                            $("#swipebox-slider .slide.current")
                        );
                    if (index + 1 < elements.length) {
                        src = $("#swipebox-slider .slide")
                            .eq(index)
                            .contents()
                            .find("iframe")
                            .attr("src");
                        $("#swipebox-slider .slide")
                            .eq(index)
                            .contents()
                            .find("iframe")
                            .attr("src", src);
                        index++;
                        $this.setSlide(index);
                        $this.preloadMedia(index + 1);
                        if (plugin.settings.nextSlide) {
                            plugin.settings.nextSlide();
                        }
                    } else {
                        if (plugin.settings.loopAtEnd === !0) {
                            src = $("#swipebox-slider .slide")
                                .eq(index)
                                .contents()
                                .find("iframe")
                                .attr("src");
                            $("#swipebox-slider .slide")
                                .eq(index)
                                .contents()
                                .find("iframe")
                                .attr("src", src);
                            index = 0;
                            $this.preloadMedia(index);
                            $this.setSlide(index);
                            $this.preloadMedia(index + 1);
                            if (plugin.settings.nextSlide) {
                                plugin.settings.nextSlide();
                            }
                        } else {
                            $("#swipebox-overlay").addClass("rightSpring");
                            setTimeout(function() {
                                $("#swipebox-overlay").removeClass("rightSpring");
                            }, 500);
                        }
                    }
                },
                getPrev: function() {
                    var index = $("#swipebox-slider .slide").index(
                            $("#swipebox-slider .slide.current")
                        ),
                        src;
                    if (index > 0) {
                        src = $("#swipebox-slider .slide")
                            .eq(index)
                            .contents()
                            .find("iframe")
                            .attr("src");
                        $("#swipebox-slider .slide")
                            .eq(index)
                            .contents()
                            .find("iframe")
                            .attr("src", src);
                        index--;
                        this.setSlide(index);
                        this.preloadMedia(index - 1);
                        if (plugin.settings.prevSlide) {
                            plugin.settings.prevSlide();
                        }
                    } else {
                        $("#swipebox-overlay").addClass("leftSpring");
                        setTimeout(function() {
                            $("#swipebox-overlay").removeClass("leftSpring");
                        }, 500);
                    }
                },
                nextSlide: function() {},
                prevSlide: function() {},
                closeSlide: function() {
                    $("html").removeClass("swipebox-html");
                    $("html").removeClass("swipebox-touch");
                    $(window).trigger("resize");
                    this.destroy();
                },
                destroy: function() {
                    $(window).unbind("keyup");
                    $("body").unbind("touchstart");
                    $("body").unbind("touchmove");
                    $("body").unbind("touchend");
                    $("#swipebox-slider").unbind();
                    $("#swipebox-overlay").remove();
                    if (!$.isArray(elem)) {
                        elem.removeData("_swipebox");
                    }
                    if (this.target) {
                        this.target.trigger("swipebox-destroy");
                    }
                    $.swipebox.isOpen = !1;
                    if (plugin.settings.afterClose) {
                        plugin.settings.afterClose();
                    }
                },
            };
            plugin.init();
        };
        $.fn.swipebox = function(options) {
            if (!$.data(this, "_swipebox")) {
                var swipebox = new $.swipebox(this, options);
                this.data("_swipebox", swipebox);
            }
            return this.data("_swipebox");
        };
    })(window, document, jQuery);
} catch (e) {
    console.error("An error has occurred: " + e.stack);
}
/* https://mrrk.ru/wp-content/themes/industrial/js/functions.js */
try {
    ("use strict");
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player("ytplayer", {
            events: {
                onReady: function() {
                    player.mute();
                },
            },
        });
    }
    $("aside .menu li.current-menu-item")
        .prev("li")
        .find("a")
        .css("border-bottom", "0");
    $(".new_file_title").click(function() {
        $(this).parent().find("input[name=file-96]").click();
    });
    $("input[name=file-96]").change(function(e) {
        var fileName = e.target.files[0].name;
        $(".new_file_title").removeClass("no_image").text(fileName);
    });
    $(".ost_zay").click(function(e) {
        $(".cc_fon,.cc_modal").fadeIn(300);
    });
    $(".cc_fon,.cc_close").click(function(e) {
        $(".cc_fon,.cc_modal").fadeOut(300);
    });
    jQuery(function($) {
        $(document).on("click", ".sv_razv", function() {
            var text = $(this).children("span").text();
            $(this).toggleClass("open");
            $(this).prev(".uslugi_content").toggleClass("closed");
            $(this)
                .children("span")
                .text(text == "Развернуть" ? "Свернуть" : "Развернуть");
            $(this)
                .children("i")
                .html(text == "Развернуть" ? "&#9650;" : "&#9660;");
            $("html,body").animate({ scrollTop: $(this).prev(".uslugi_content").offset().top - 100 },
                0
            );
        });
        if ($(".aside_calc_banner").length) {
            var stickyTop = $(".aside_calc_banner").offset().top;
        }
        var banner_height = 450;
        $(window).scroll(function() {
            // var bluerow = $(".blue-row:visible").offset().top - 115;
            // var rizn = bluerow - stickyTop;
            // if ($(window).width() < 1000) {
            //     return !1;
            // }
            // var windowTop = $(window).scrollTop() + 78;
            // var mrg = windowTop - stickyTop + 15;
            // if (mrg < 0) {
            //     mrg = 0;
            // }
            // if (stickyTop < windowTop) {
            //     if (rizn - (mrg + banner_height) < 1) {
            //         mrg = bluerow - 405 - stickyTop;
            //     }
            //     $(".aside_calc_banner").css("transform", "translate(0," + mrg + "px)");
            // } else {
            //     $(".aside_calc_banner").css("transform", "translate(0,0)");
            // }
            // console.log(
            //     "Отступ: " +
            //     mrg +
            //     " Прокрутка окна: " +
            //     windowTop +
            //     " Синня полоска: " +
            //     bluerow +
            //     " Раница: " +
            //     rizn
            // );
        });
        $(".main_gallery_block").slick({
            infinite: !0,
            loop: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: !0,
            speed: 1000,
            arrows: !1,
            autoplay: !0,
            autoplaySpeed: 1500,
            pauseOnFocus: !1,
            responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: !0,
                    prevArrow: '<div class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path d="M11.433 15.992L22.69 5.712c.393-.39.393-1.03 0-1.42-.393-.39-1.03-.39-1.423 0l-11.98 10.94c-.21.21-.3.49-.285.76-.015.28.075.56.284.77l11.98 10.94c.393.39 1.03.39 1.424 0 .393-.4.393-1.03 0-1.42l-11.257-10.29" fill="#ffffff" opacity="0.8" fill-rule="evenodd"/></svg></div>',
                    nextArrow: '<div class="slick-next slick-arrow"><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M10.722 4.293c-.394-.39-1.032-.39-1.427 0-.393.39-.393 1.03 0 1.42l11.283 10.28-11.283 10.29c-.393.39-.393 1.02 0 1.42.395.39 1.033.39 1.427 0l12.007-10.94c.21-.21.3-.49.284-.77.014-.27-.076-.55-.286-.76L10.72 4.293z" fill="#ffffff" opacity="0.8" fill-rule="evenodd"/></svg></div>',
                },
            }, ],
        });
        $(".pbf-it").click(function() {
            $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top - 120 + "px" }, { duration: 500, easing: "swing" });
            return !1;
        });
        if (window.location.hash) {
            $("html, body").animate({ scrollTop: $(window.location.hash).offset().top - 120 + "px" }, { duration: 500, easing: "swing" });
        }
        var iframe = $("#vimeoplayer");
        if (iframe.length) {
            var player = $f(iframe[0]);
            player.addEvent("ready", function() {
                player.api("setVolume", 0);
            });
        }
        var isMobile = !1;
        $.support.placeholder = "placeholder" in document.createElement("input");
        var screenLarge = 1200,
            screenMedium = 992,
            screenSmall = 768;
        if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                navigator.userAgent
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                navigator.userAgent.substr(0, 4)
            )
        )
            isMobile = !0;
        $('[data-toggle="collapse"]').on("click", function() {
            $(this).blur();
        });
        $("#commentform .form-submit").append(
            '<button class="btn btn-md" type="reset">' +
            anps.reset_button +
            "</button>"
        );
        $(".searchform").on("click", function(e) {
            if ($(e.target).is("div")) {
                $(this).find("#searchsubmit").click();
            }
        });
        $('.searchform input[type="text"]').attr(
            "placeholder",
            anps.search_placeholder
        );
        $(window).on("grid:items:added", function() {
            $(".vc_btn3-left")
                .find("a")
                .attr("class", "btn btn-md btn-gradient btn-shadow");
        });
        if ($(".megamenu-wrapper").length) {
            $(".megamenu-wrapper").each(function() {
                var megaMenu = $(this);
                megaMenu
                    .children("ul")
                    .wrap('<div class="megamenu" />')
                    .children()
                    .unwrap();
                var cols = megaMenu.find(".megamenu").children().length;
                megaMenu
                    .find(".megamenu")
                    .children()
                    .each(function() {
                        var title = $(this).children("a:first-of-type");
                        $(this)
                            .find("ul")
                            .removeClass("sub-menu")
                            .prepend(
                                '<li><span class="megamenu-title">' +
                                title.text() +
                                "</span></li>"
                            );
                        title.remove();
                        $(this).find("li").attr("style", "");
                        $(this).replaceWith(
                            '<div class="col-lg-' +
                            12 / cols +
                            '">' +
                            $(this).html() +
                            "</div>"
                        );
                    });
            });
        }
        if ($(".owl-carousel.general").length) {
            $(".owl-carousel.general").each(function() {
                var owl = $(this);
                var number_items = $(this).attr("data-col");
                owl.owlCarousel({
                    loop: !1,
                    margin: 30,
                    responsiveClass: !0,
                    responsive: {
                        0: { items: 1, nav: !1, slideBy: 1 },
                        600: { items: 2, nav: !1, slideBy: 1 },
                        992: { items: number_items, nav: !1, slideBy: 1 },
                    },
                });
                owl
                    .siblings()
                    .find(".owlnext")
                    .on("click", function() {
                        owl.trigger("next.owl.carousel");
                    });
                owl
                    .siblings()
                    .find(".owlprev")
                    .on("click", function() {
                        owl.trigger("prev.owl.carousel");
                    });
            });
        }
        $(".recent-news[data-owlcolumns]").each(function() {
            var el = $(this);
            var owl = $(".owl-carousel", this);
            var owlcolumns = el.data("owlcolumns");
            var owlSettings = {
                loop: !0,
                margin: 30,
                responsiveClass: !0,
                rtl: $('html[dir="rtl"]').length > 0,
                stagePadding: 2,
                responsive: {
                    0: { items: 1, slideBy: 1 },
                    500: { items: 2, slideBy: 2 },
                    992: { items: owlcolumns, slideBy: owlcolumns },
                },
            };
            owl.owlCarousel(owlSettings);
            owl
                .siblings()
                .find(".owlnext")
                .on("click", function() {
                    owl.trigger("next.owl.carousel");
                });
            owl
                .siblings()
                .find(".owlprev")
                .on("click", function() {
                    owl.trigger("prev.owl.carousel");
                });
        });
        $(".testimonials .owl-carousel, .anps-twitter .owl-carousel").each(
            function() {
                var el = $(this);
                var owlSettings = {
                    loop: !1,
                    margin: 0,
                    responsiveClass: !0,
                    mouseDrag: !1,
                    touchDrag: !1,
                    rtl: $('html[dir="rtl"]').length > 0,
                    responsive: {
                        0: { items: 1, nav: !1, slideBy: 1 },
                        1170: { items: 2, nav: !1, slideBy: 1 },
                    },
                };
                if (el.children("li").length > 1) {
                    owlSettings.loop = !0;
                    owlSettings.navigation = !0;
                    owlSettings.mouseDrag = !0;
                    owlSettings.touchDrag = !0;
                }
                el.owlCarousel(owlSettings);
                el.parents(".testimonials, .anps-twitter")
                    .find(".owlnext")
                    .on("click", function() {
                        el.trigger("next.owl.carousel");
                    });
                el.parents(".testimonials, .anps-twitter")
                    .find(".owlprev")
                    .on("click", function() {
                        el.trigger("prev.owl.carousel");
                    });
            }
        );

        function resetPagination(items, itemClass, perPage) {
            var pageTemp = 0;
            items.find(itemClass).each(function(item) {
                var tempClass = $(this).attr("class");
                $(this).attr("class", tempClass.replace(/(page-[1-9][0-9]*)/g, ""));
            });
            items.find(itemClass).each(function(index) {
                if (index % perPage === 0) {
                    pageTemp += 1;
                }
                items
                    .find(itemClass)
                    .eq(index)
                    .addClass("page-" + pageTemp);
            });
        }
        window.onload = function() {
            $(".projects").each(function() {
                var items = $(this).find(".projects-content");
                var itemClass = ".projects-item";
                var filter = $(this).find(".filter");
                var initialFilter = "";
                var hash = window.location.hash.replace("#", "");
                if (hash && filter.find('[data-filter="' + hash + '"]').length) {
                    initialFilter = "." + hash;
                    filter.find(".selected").removeClass("selected");
                    filter.find('[data-filter="' + hash + '"]').addClass("selected");
                }
                if ($(this).find(".projects-pagination").length) {
                    var pageNum = 1;
                    var perPage = 3;
                    var numPages = Math.ceil(items.find(itemClass).length / perPage);
                    if (window.innerWidth < screenSmall) {
                        perPage = 2;
                    } else if (window.innerWidth < screenMedium) {
                        perPage = 4;
                    } else if (items.find(itemClass).hasClass("col-md-3")) {
                        perPage = 4;
                    }
                    if (numPages < 2) {
                        $(".projects-pagination").css("visibility", "hidden");
                    } else {
                        $(".projects-pagination").css("visibility", "visible");
                    }
                    $(window).on("resize", function() {
                        if (window.innerWidth < screenSmall) {
                            perPage = 2;
                        } else if (window.innerWidth < screenMedium) {
                            perPage = 4;
                        } else if (items.find(itemClass).hasClass("col-md-3")) {
                            perPage = 4;
                        } else {
                            perPage = 3;
                        }
                        filter.find(".selected").click();
                    });
                    resetPagination(items, itemClass, perPage);
                    items.isotope({
                        itemSelector: itemClass,
                        layoutMode: "fitRows",
                        filter: ".page-" + pageNum + initialFilter,
                        transitionDuration: ".3s",
                        hiddenStyle: { opacity: 0 },
                        visibleStyle: { opacity: 1 },
                    });
                    filter.find("button").on("click", function(e) {
                        var value = $(this).attr("data-filter");
                        value = value != "*" ? "." + value : value;
                        pageNum = 1;
                        numPages = Math.ceil(
                            items.find(itemClass + value).length / perPage
                        );
                        if (numPages < 2) {
                            $(".projects-pagination").css("visibility", "hidden");
                        } else {
                            $(".projects-pagination").css("visibility", "visible");
                        }
                        resetPagination(items, itemClass + value, perPage);
                        items.isotope({ filter: value + ".page-1" });
                        filter.find(".selected").removeClass("selected");
                        $(this).addClass("selected");
                    });
                    $(".projects-pagination button").on("click", function() {
                        var value = $(".filter .selected").attr("data-filter");
                        value = value != "*" ? "." + value : value;
                        if ($(this).hasClass("prev")) {
                            if (pageNum - 1 == 0) {
                                pageNum = numPages;
                            } else {
                                pageNum -= 1;
                            }
                        } else {
                            if (pageNum + 1 > numPages) {
                                pageNum = 1;
                            } else {
                                pageNum += 1;
                            }
                        }
                        items.isotope({ filter: value + ".page-" + pageNum });
                    });
                } else {
                    items.isotope({
                        itemSelector: itemClass,
                        layoutMode: "fitRows",
                        filter: initialFilter,
                    });
                    filter.find("button").on("click", function(e) {
                        var value = $(this).attr("data-filter");
                        value = value != "*" ? "." + value : value;
                        items.isotope({ filter: value });
                        filter.find(".selected").removeClass("selected");
                        $(this).addClass("selected");
                    });
                }
                $(".projects .filter-dark").parents(".vc_row").addClass("bg-dark");
            });
        };

        function moveNav() {
            if (!$(".ghost-nav-wrap").length) {
                $("body").prepend(
                    '<div class="ghost-nav-wrap empty site-navigation"></div>'
                );
            }
            if (
                window.innerWidth < screenLarge &&
                $(".ghost-nav-wrap").hasClass("empty")
            ) {
                $(".header-wrap .logo + *").css("margin-top", "21px");
                $("nav.site-navigation .mobile-wrap")
                    .detach()
                    .appendTo(".ghost-nav-wrap");
                if ($(".large-above-menu")) {
                    $(".large-above-menu").detach().insertAfter(".site-search");
                    $(".mini-cart").detach().insertAfter(".burger");
                } else {
                    $(".header-wrap").append($(".mini-cart"));
                }
                $(".ghost-nav-wrap").removeClass("empty");
                $(".main-menu .menu-item-has-children").each(function() {
                    $("> ul", this).hide();
                    $(".megamenu").hide();
                });
            } else if (
                window.innerWidth > screenLarge - 1 &&
                !$(".ghost-nav-wrap").hasClass("empty")
            ) {
                if ($(".large-above-menu")) {
                    if ($(".preheader-wrap").length) {
                        $(".large-above-menu").detach().appendTo(".preheader-wrap");
                    } else {
                        $(".large-above-menu").detach().insertAfter(".header-wrap .logo");
                    }
                }
                $(".ghost-nav-wrap .mobile-wrap")
                    .detach()
                    .appendTo("nav.site-navigation");
                $(".ghost-nav-wrap").addClass("empty");
                $(".main-menu .menu-item-has-children").each(function() {
                    $("> ul", this).show();
                    $(".megamenu").show();
                });
                if ($(".widget_anpsminicart").length) {
                    $(".widget_anpsminicart").append($(".mini-cart"));
                } else {
                    $(".main-menu").append($(".mini-cart"));
                }
            }
            if (
                window.innerWidth > screenLarge - 1 &&
                $("html").hasClass("show-menu")
            ) {
                $(".burger").toggleClass("active");
                $("html").removeClass("show-menu");
            }
        }
        moveNav();
        $(window).resize(function() {
            moveNav();
            if ($("body").hasClass("stickyheader")) {
                setSticky();
            }
        });
        $(".burger").on("click", function() {
            $(".burger").toggleClass("active");
            $(window).scrollTop(0);
            $(this).blur();
            $("html").toggleClass("show-menu");
            if (!$("html").hasClass("show-menu")) {
                window.menuJustClosed = !0;
                setTimeout(window.vc_fullWidthRow, 300);
            } else {
                window.menuJustOpened = !0;
            }
            $(window).trigger("resize");
        });
        $(".main-menu .menu-item-has-children").each(function() {
            $(this).append(
                '<span class="mobile-showchildren"><i class="fa fa-angle-down"></i></span>'
            );
        });
        $(".mobile-showchildren").on("click", function() {
            $(this).siblings("ul, .megamenu").toggle("300");
        });

        function setSticky() {
            var topbarHeight = 0,
                headerHeight = 0,
                adminBarHeight = 0;
            var $stickyEl = $(".site-header");
            if ($(".top-bar").length) {
                topbarHeight = $(".top-bar").outerHeight();
            }
            headerHeight = $(".site-header").outerHeight();
            if ($(".site-header").hasClass("full-width")) {
                headerHeight = $(".header-wrap").outerHeight();
            }
            if ($("#wpadminbar").length) {
                adminBarHeight = $("#wpadminbar").outerHeight();
            }
            var offset = topbarHeight;
            var topOffsetSticky = adminBarHeight;
            if ($("header.bottom").length) {
                offset += $(window).innerHeight();
                offset -= headerHeight;
            }
            if (offset <= 0) {
                offset = 1;
            }
            if ($(".preheader-wrap").length) {
                offset += $(".preheader-wrap").innerHeight();
                $stickyEl = $(".header-wrap");
            }
            if (window.innerWidth > screenLarge - 1) {
                var headerwaypoint = new Waypoint({
                    element: $("body"),
                    handler: function(direction) {
                        if (direction == "down" && window.innerWidth > screenLarge - 1) {
                            $stickyEl.addClass("sticky");
                            if (!$stickyEl.hasClass("transparent")) {
                                $(".site-main").css("padding-top", headerHeight + "px");
                            }
                            if (topOffsetSticky != "0") {
                                $stickyEl.css({ top: adminBarHeight + "px" });
                            }
                        } else if ($stickyEl.hasClass("sticky")) {
                            $stickyEl.removeClass("sticky");
                            $(".site-main").css("padding-top", "0");
                            $stickyEl.stop(!0).css("top", "");
                        }
                        verticalCenterHeaderClassic();
                    },
                    offset: -offset,
                });
            }
        }
        $(window).on("load", function() {
            if ($("body").hasClass("stickyheader")) {
                setSticky();
            }
        });
        $(".menu-search-toggle").on("click", function() {
            $(".menu-search-form").toggleClass("hide");
            $(this).blur();
        });
        var openGallery = !1;

        function changeThumb(el, ind) {
            var $gallery = el.parents(".gallery-fs");
            var ccc = $(".owl-item.active").length;
            $(".gallery-fs-thumbnails").trigger("to.owl.carousel", [
                ind - ccc,
                0, !0,
            ]);
            if (!el.hasClass("selected")) {
                $gallery.find("> figure > img").attr("src", el.attr("href"));
                $gallery.find("> figure > figcaption").html(el.attr("title"));
                $gallery.find("> figure > .above_gallery_title").html(el.attr("title"));
                $gallery
                    .find(".gallery-fs-thumbnails .selected")
                    .removeClass("selected");
                el.addClass("selected");
            }
        }

        function changeThumbMy(ind) {
            var $gallery = $(".gallery-fs");
            var el = $(".owl-item:eq(" + ind + ") a");
            $gallery.find("> figure > img").attr("src", el.attr("href"));
            $gallery.find("> figure > figcaption").html(el.attr("title"));
            $gallery.find("> figure > .above_gallery_title").html(el.attr("title"));
            $gallery.find(".gallery-fs-thumbnails .selected").removeClass("selected");
            el.addClass("selected");
        }
        var thumbCol = 6;
        var galleryParent = $(".gallery-fs").parents('[class*="col-"]');
        var galleryParentSize = Math.floor(
            (galleryParent.outerWidth() / galleryParent.parent().outerWidth()) * 100
        );
        if (galleryParentSize < 60) {
            thumbCol = 5;
        }
        if (galleryParentSize == 100) {
            thumbCol = 9;
        }
        var navText = [
            '<i class="fa fa-angle-left"></i>',
            '<i class="fa fa-angle-right"></i>',
        ];
        if ($('html[dir="rtl"]').length) {
            navText.reverse();
        }
        $(".gallery-fs-thumbnails").owlCarousel({
            loop: !1,
            margin: 17,
            nav: !0,
            loop: !0,
            navText: navText,
            rtl: $('html[dir="rtl"]').length > 0,
            autoplay: !0,
            autoplayTimeout: 3000,
            autoplayHoverPause: !1,
            responsive: {
                0: { items: 2 },
                600: { items: 4 },
                1000: { items: thumbCol },
            },
        });
        $(".gallery-fs-thumbnails").on("changed.owl.carousel", function(event) {
            var currentItem = event.item.index;
            changeThumbMy(event.item.index);
        });
        $(".gallery-fs-thumbnails a").swipebox({
            hideBarsDelay: -1,
            afterOpen: function() {
                if (!openGallery) {
                    $.swipebox.close();
                }
                openGallery = !1;
            },
            nextSlide: function() {
                var index = $(".gallery-fs-thumbnails .owl-item a.selected")
                    .parent()
                    .index();
                if (index < $(".gallery-fs-thumbnails .owl-item").length - 1) {
                    changeThumb(
                        $(".gallery-fs-thumbnails .owl-item")
                        .eq(index + 1)
                        .children("a")
                    );
                }
            },
            prevSlide: function() {
                var index = $(".gallery-fs-thumbnails .owl-item a.selected")
                    .parent()
                    .index();
                if (index > 0) {
                    changeThumb(
                        $(".gallery-fs-thumbnails .owl-item")
                        .eq(index - 1)
                        .children("a")
                    );
                }
            },
        });
        $(".gallery-fs-thumbnails .owl-item a").on("click", function() {
            var ind = $(this).parent(".owl-item").index();
            changeThumb($(this), ind);
        });
        $(".gallery-fs-fullscreen").on("click", function(e) {
            e.preventDefault();
            openGallery = !0;
            var $gallery = $(this).parents(".gallery-fs");
            if ($gallery.find(".gallery-fs-thumbnails").length) {
                $gallery
                    .find(".gallery-fs-thumbnails .owl-item a.selected")
                    .eq(0)
                    .click();
            }
        });
        if (!$(".gallery-fs-thumbnails").length) {
            $(".gallery-fs-fullscreen").css({ right: "21px" });
            $(".gallery-fs-fullscreen").swipebox({ hideBarsDelay: 1 });
        }
        //   $('.gallery a').magnificPopup({ type: 'image', gallery: { enabled: !0 } });
        $(window).on("load", function() {
            if ($(".fixed-footer").length) {
                fixedFooter();
                $(window).on("resize", function() {
                    fixedFooter();
                });
            }
        });

        function fixedFooter() {
            $(".site-main").css("margin-bottom", $(".site-footer").innerHeight());
        }
        $('.quantity input[type="button"]').on("click", function(e) {
            var field = $(this).parent().find(".quantity-field"),
                val = parseInt(field.val(), 10),
                step = parseInt(field.attr("step"), 10) || 0,
                min = parseInt(field.attr("min"), 10) || 1,
                max = parseInt(field.attr("max"), 10) || 0;
            if ($(this).val() === "+" && (val < max || !max)) {
                field.val(val + step);
            } else if ($(this).val() === "-" && val > min) {
                field.val(val - step);
            }
        });
        $(".featured-lightbox-link").swipebox({ hideBarsDelay: 1 });
        if (!$.support.placeholder) {
            $("[placeholder]")
                .on("focus", function() {
                    if ($(this).val() == $(this).attr("placeholder")) {
                        $(this).val("");
                    }
                })
                .on("blur", function() {
                    if ($(this).val() == "") {
                        $(this).val($(this).attr("placeholder"));
                    }
                })
                .blur();
            $("[placeholder]")
                .parents("form")
                .on("submit", function() {
                    if ($("[placeholder]").parents("form").find(".alert")) {
                        return !1;
                    }
                    $(this)
                        .find("[placeholder]:not(.alert)")
                        .each(function() {
                            if ($(this).val() == $(this).attr("placeholder")) {
                                $(this).val("");
                            }
                        });
                });
        }
        jQuery.fn.isOnScreen = function() {
            var win = jQuery(window);
            var viewport = { top: win.scrollTop(), left: win.scrollLeft() };
            viewport.right = viewport.left + win.width();
            viewport.bottom = viewport.top + win.height();
            var bounds = this.offset();
            bounds.right = bounds.left + this.outerWidth();
            bounds.bottom = bounds.top + this.outerHeight();
            return !(
                viewport.right < bounds.left ||
                viewport.left > bounds.right ||
                viewport.bottom < bounds.top ||
                viewport.top > bounds.bottom
            );
        };

        function checkForOnScreen() {
            $(".counter-number").each(function(index) {
                if (!$(this).hasClass("animated") &&
                    $(".counter-number").eq(index).isOnScreen()
                ) {
                    $(".counter-number").eq(index).countTo({ speed: 5000 });
                    $(".counter-number").eq(index).addClass("animated");
                }
            });
        }
        checkForOnScreen();
        $(window).scroll(function() {
            checkForOnScreen();
        });

        function pageHeaderVideoSize() {
            $(".page-header iframe").height($(window).width() / 1.77777777778);
        }
        if ($(".page-header").length) {
            pageHeaderVideoSize();
            $(window).on("resize", pageHeaderVideoSize);
            if (isMobile) {
                $(".page-header").find(".page-header-video").remove();
            }
            if ($("#ytplayer")) {
                $("body").append('<script src="https://www.youtube.com/player_api">');
            }
        }

        function isFloat(n) {
            return parseFloat(n.match(/^-?\d*(\.\d+)?$/)) > 0;
        }

        function checkCoordinates(str) {
            if (!str) {
                return !1;
            }
            str = str.split(",");
            var isCoordinate = !0;
            if (
                str.length !== 2 ||
                !isFloat(str[0].trim()) ||
                !isFloat(str[1].trim())
            ) {
                isCoordinate = !1;
            }
            return isCoordinate;
        }
        $(".map").each(function() {
            var gmap = {
                zoom: $(this).attr("data-zoom") ?
                    parseInt($(this).attr("data-zoom")) :
                    15,
                address: $(this).attr("data-address"),
                markers: $(this).attr("data-markers"),
                icon: $(this).attr("data-icon"),
                typeID: $(this).attr("data-type"),
                ID: $(this).attr("id"),
                styles: $(this).attr("data-styles") ?
                    JSON.parse($(this).attr("data-styles")) :
                    "",
            };
            var gmapScroll = $(this).attr("data-scroll") ?
                $(this).attr("data-scroll") :
                "false";
            var markersArray = [];
            var bound = new google.maps.LatLngBounds();
            if (gmapScroll == "false") {
                gmap.draggable = !1;
                gmap.scrollwheel = !1;
            }
            if (gmap.markers) {
                gmap.markers = gmap.markers.split("|");
                gmap.markers.forEach(function(marker) {
                    if (marker) {
                        marker = $.parseJSON(marker);
                        if (checkCoordinates(marker.address)) {
                            marker.latLng = marker.address.split(",");
                            delete marker.address;
                        }
                        markersArray.push(marker);
                    }
                });
                $("#" + gmap.ID).gmap3({
                    map: {
                        options: {
                            zoom: gmap.zoom,
                            draggable: gmap.draggable,
                            scrollwheel: gmap.scrollwheel,
                            mapTypeId: google.maps.MapTypeId[gmap.typeID],
                            styles: gmap.styles,
                        },
                    },
                    marker: {
                        values: markersArray,
                        options: { draggable: !1 },
                        callback: function(results) {
                            var center = null;
                            if (
                                typeof results[0].position.lat !== "function" ||
                                typeof results[0].position.lng !== "function"
                            ) {
                                return !1;
                            }
                            results.forEach(function(m, i) {
                                if (markersArray[i].center) {
                                    center = new google.maps.LatLng(
                                        m.position.lat(),
                                        m.position.lng()
                                    );
                                } else {
                                    bound.extend(
                                        new google.maps.LatLng(m.position.lat(), m.position.lng())
                                    );
                                }
                            });
                            if (!center) {
                                center = bound.getCenter();
                            }
                            $(this).gmap3("get").setCenter(center);
                        },
                        events: {
                            click: function(marker, event, context) {
                                if (!context.data) {
                                    return !1;
                                }
                                var map = $(this).gmap3("get"),
                                    infowindow = $(this).gmap3({ get: { name: "infowindow" } });
                                if (infowindow) {
                                    if (context.data) {
                                        infowindow.open(map, marker);
                                        infowindow.setContent(decodeURIComponent(context.data));
                                    }
                                } else {
                                    $(this).gmap3({
                                        infowindow: {
                                            anchor: marker,
                                            options: { content: decodeURIComponent(context.data) },
                                        },
                                    });
                                }
                            },
                        },
                    },
                });
            }
            if (gmap.address) {
                if (checkCoordinates(gmap.address)) {
                    $("#" + gmap.ID).gmap3({
                        map: {
                            options: {
                                zoom: gmap.zoom,
                                draggable: gmap.draggable,
                                scrollwheel: gmap.scrollwheel,
                                mapTypeId: google.maps.MapTypeId[gmap.typeID],
                                center: gmap.address.split(","),
                                styles: gmap.styles,
                            },
                        },
                        marker: {
                            latLng: gmap.address.split(","),
                            options: { icon: gmap.icon },
                        },
                    });
                } else {
                    $("#" + gmap.ID).gmap3({
                        map: {
                            options: {
                                zoom: gmap.zoom,
                                draggable: gmap.draggable,
                                scrollwheel: gmap.scrollwheel,
                                mapTypeId: google.maps.MapTypeId[gmap.typeID],
                                styles: gmap.styles,
                            },
                        },
                        getlatlng: {
                            address: gmap.address,
                            callback: function(results) {
                                if (!results) return;
                                $(this)
                                    .gmap3("get")
                                    .setCenter(
                                        new google.maps.LatLng(
                                            results[0].geometry.location.lat(),
                                            results[0].geometry.location.lng()
                                        )
                                    );
                                $(this).gmap3({
                                    marker: {
                                        latLng: results[0].geometry.location,
                                        options: { icon: gmap.icon },
                                    },
                                });
                            },
                        },
                    });
                }
            }
        });
        var $calendars = $(".calendar_wrap table");

        function calendarSize() {
            $calendars.each(function() {
                var $calendarTD = $(this).find("td");
                var $calendarTH = $(this).find("th");
                $calendarTD.css("line-height", $calendarTH.width() + "px");
            });
        }
        calendarSize();
        $(window).on("resize", calendarSize);
        $(".post-carousel").owlCarousel({
            loop: !0,
            margin: 0,
            nav: !0,
            navText: [
                '<i class="fa fa-chevron-left"></i>',
                '<i class="fa fa-chevron-right"></i>',
            ],
            responsive: { 0: { items: 1 } },
        });
        $("body").on("added_to_cart", function(e) {
            $(".added_to_cart").addClass("btn btn-md btn-light");
        });
        $(".ordering select").on("change", function() {
            $(this).parents(".ordering").submit();
        });

        function demoNotice() {
            $(".site-header, .woocommerce-demo-store .top-bar").css(
                "margin-top",
                $(".demo_store_wrapper").innerHeight()
            );
        }
        if ($(".demo_store_wrapper").length) {
            $(window).on("resize", demoNotice);
            demoNotice();
        }
        $(
            "select.dropdown_product_cat, select.dropdown_layered_nav_color, .widget_archive select, .widget_categories select"
        ).wrap('<div class="select-wrapper"></div>');
        $("#review_form").on("reset", function() {
            $(this).find(".stars").removeClass("selected");
            $(this).find(".stars .active").removeClass("active");
        });

        function verticalCenterHeaderClassic() {
            if (
                $("header.classic:not(.center)").length &&
                window.innerWidth > screenLarge
            ) {
                $(".header-wrap .logo + *").css("margin-top", "0");
                var hHeight = $(".header-wrap").height();
                var childrenHeight = 0;
                $(".header-wrap")
                    .children(":not(.logo)")
                    .each(function() {
                        childrenHeight += $(this).height();
                    });
                var childrenMargin = (hHeight - childrenHeight) / 2;
                $(".header-wrap .logo + *").css("margin-top", childrenMargin + "px");
            }
            if (
                $("header.classic.center").length &&
                window.innerWidth > screenLarge
            ) {
                $(".header-wrap .logo").css("margin-top", "0");
                var hHeight = $(".header-wrap").height();
                var childrenHeight = 0;
                $(".header-wrap")
                    .children()
                    .each(function() {
                        childrenHeight += $(this).height();
                    });
                var childrenMargin = (hHeight - childrenHeight) / 2;
                $(".header-wrap .logo").css("margin-top", childrenMargin + "px");
            }
            if (
                $("header.classic:not(.center)").length &&
                window.innerWidth < screenLarge
            ) {
                $(".header-wrap .logo + *").css("margin-top", "21px");
            }
        }
        verticalCenterHeaderClassic();
        $(window).resize(function() {
            verticalCenterHeaderClassic();
        });
        window.vc_rowBehaviour = function() {
            function fullWidthRow() {
                var $elements = $('[data-vc-full-width="true"]');
                $.each($elements, function(key, item) {
                        var verticalOffset = 0;
                        if ($(".vertical-menu").length && window.innerWidth > 992) {
                            verticalOffset = $(".site-header.vertical").innerWidth();
                        }
                        var boxedOffset = 0;
                        if ($("body.boxed").length && window.innerWidth > 992) {
                            boxedOffset =
                                ($("body").innerWidth() - $(".site-main").innerWidth()) / 2;
                        }
                        var $el = $(this);
                        $el.addClass("vc_hidden");
                        var $el_full = $el.next(".vc_row-full-width");
                        $el_full.length ||
                            ($el_full = $el.parent().next(".vc_row-full-width"));
                        var el_margin_left = parseInt($el.css("margin-left"), 10),
                            el_margin_right = parseInt($el.css("margin-right"), 10),
                            offset = 0 - $el_full.offset().left - el_margin_left,
                            width = $(window).width() - verticalOffset - boxedOffset * 2;
                        if (
                            ($el.css({
                                position: "relative",
                                left: offset + verticalOffset + boxedOffset,
                                "box-sizing": "border-box",
                                width: width,
                            }), !$el.data("vcStretchContent"))
                        ) {
                            var padding = -1 * offset - verticalOffset - boxedOffset;
                            0 > padding && (padding = 0);
                            var paddingRight =
                                width -
                                padding -
                                $el_full.width() +
                                el_margin_left +
                                el_margin_right;
                            0 > paddingRight && (paddingRight = 0),
                                $el.css({
                                    "padding-left": padding + "px",
                                    "padding-right": paddingRight + "px",
                                });
                        }
                        $el.attr("data-vc-full-width-init", "true"),
                            $el.removeClass("vc_hidden");
                    }),
                    $(document).trigger("vc-full-width-row", $elements);
            }
            window.vc_fullWidthRow = fullWidthRow;

            function parallaxRow() {
                var vcSkrollrOptions,
                    callSkrollInit = !1;
                return (
                    window.vcParallaxSkroll && window.vcParallaxSkroll.destroy(),
                    $(".vc_parallax-inner").remove(),
                    $("[data-5p-top-bottom]").removeAttr(
                        "data-5p-top-bottom data-30p-top-bottom"
                    ),
                    $("[data-vc-parallax]").each(function() {
                        var skrollrSpeed,
                            skrollrSize,
                            skrollrStart,
                            skrollrEnd,
                            $parallaxElement,
                            parallaxImage,
                            youtubeId;
                        (callSkrollInit = !0),
                        "on" === $(this).data("vcParallaxOFade") &&
                            $(this)
                            .children()
                            .attr("data-5p-top-bottom", "opacity:0;")
                            .attr("data-30p-top-bottom", "opacity:1;"),
                            (skrollrSize = 100 * $(this).data("vcParallax")),
                            ($parallaxElement = $("<div />")
                                .addClass("vc_parallax-inner")
                                .appendTo($(this))),
                            $parallaxElement.height(skrollrSize + "%"),
                            (parallaxImage = $(this).data("vcParallaxImage")),
                            (youtubeId = vcExtractYoutubeId(parallaxImage)),
                            youtubeId ?
                            insertYoutubeVideoAsBackground($parallaxElement, youtubeId) :
                            "undefined" != typeof parallaxImage &&
                            $parallaxElement.css(
                                "background-image",
                                "url(" + parallaxImage + ")"
                            ),
                            (skrollrSpeed = skrollrSize - 100),
                            (skrollrStart = -skrollrSpeed),
                            (skrollrEnd = 0),
                            $parallaxElement
                            .attr("data-bottom-top", "top: " + skrollrStart + "%;")
                            .attr("data-top-bottom", "top: " + skrollrEnd + "%;");
                    }),
                    callSkrollInit && window.skrollr ?
                    ((vcSkrollrOptions = {
                            forceHeight: !1,
                            smoothScrolling: !1,
                            mobileCheck: function() {
                                return !1;
                            },
                        }),
                        (window.vcParallaxSkroll = skrollr.init(vcSkrollrOptions)),
                        window.vcParallaxSkroll) :
                    !1
                );
            }

            function fullHeightRow() {
                var $element = $(".vc_row-o-full-height:first");
                if ($element.length) {
                    var $window, windowHeight, offsetTop, fullHeight;
                    ($window = $(window)),
                    (windowHeight = $window.height()),
                    (offsetTop = $element.offset().top),
                    windowHeight > offsetTop &&
                        ((fullHeight = 100 - offsetTop / (windowHeight / 100)),
                            $element.css("min-height", fullHeight + "vh"));
                }
                $(document).trigger("vc-full-height-row", $element);
            }

            function fixIeFlexbox() {
                var ua = window.navigator.userAgent,
                    msie = ua.indexOf("MSIE ");
                (msie > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) &&
                $(".vc_row-o-full-height").each(function() {
                    "flex" === $(this).css("display") &&
                        $(this).wrap('<div class="vc_ie-flexbox-fixer"></div>');
                });
            }
            var $ = window.jQuery;
            $(window)
                .off("resize.vcRowBehaviour")
                .on("resize.vcRowBehaviour", fullWidthRow)
                .on("resize.vcRowBehaviour", fullHeightRow),
                fullWidthRow(),
                fullHeightRow(),
                fixIeFlexbox(),
                vc_initVideoBackgrounds(),
                parallaxRow();
        };
        if (typeof revapi1 !== "undefined") {
            revapi1.bind("revolution.slide.onloaded", function(e) {
                function revCustomArrows() {
                    if (window.innerWidth > 1199) {
                        var margin = ($(window).width() - 1140) / 2;
                        if ($(".boxed").length) {
                            margin = 30;
                        }
                        leftArrow.css({ "margin-left": margin, "margin-right": 0 });
                        rightArrow.css({
                            "margin-left": margin + leftArrow.innerWidth() + spacing,
                        });
                    } else if (window.innerWidth > 1000) {
                        leftArrow.css({
                            "margin-left": 0,
                            "margin-right": rightArrow.innerWidth() + spacing,
                        });
                        rightArrow.css({ "margin-left": 0 });
                    } else {
                        leftArrow.css({
                            "margin-left": -leftArrow.innerWidth() - spacing / 2,
                            "margin-right": 0,
                        });
                        rightArrow.css({ "margin-left": spacing / 2 });
                    }
                }
                if ($(".tparrows.custom").length) {
                    var leftArrow = $(".tp-leftarrow.custom"),
                        rightArrow = $(".tp-rightarrow.custom"),
                        spacing = 12;
                    $(window).on("resize", revCustomArrows);
                    revCustomArrows();
                }
            });
        }
    });
} catch (e) {
    console.error("An error has occurred: " + e.stack);
}
/* https://mrrk.ru/wp-content/themes/industrial/js/owlcarousel/owl.carousel.js */
try {
    /**
     * Owl carousel
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     * @todo Lazy Load Icon
     * @todo prevent animationend bubling
     * @todo itemsScaleUp
     * @todo Test Zepto
     * @todo stagePadding calculate wrong active classes
     */
    (function($, window, document, undefined) {
        var drag, state, e;
        /**
         * Template for status information about drag and touch events.
         * @private
         */
        drag = {
            start: 0,
            startX: 0,
            startY: 0,
            current: 0,
            currentX: 0,
            currentY: 0,
            offsetX: 0,
            offsetY: 0,
            distance: null,
            startTime: 0,
            endTime: 0,
            updatedX: 0,
            targetEl: null,
        };

        /**
         * Template for some status informations.
         * @private
         */
        state = {
            isTouch: false,
            isScrolling: false,
            isSwiping: false,
            direction: false,
            inMotion: false,
        };

        /**
         * Event functions references.
         * @private
         */
        e = {
            _onDragStart: null,
            _onDragMove: null,
            _onDragEnd: null,
            _transitionEnd: null,
            _resizer: null,
            _responsiveCall: null,
            _goToLoop: null,
            _checkVisibile: null,
        };

        /**
         * Creates a carousel.
         * @class The Owl Carousel.
         * @public
         * @param {HTMLElement|jQuery} element - The element to create the carousel for.
         * @param {Object} [options] - The options
         */
        function Owl(element, options) {
            /**
             * Current settings for the carousel.
             * @public
             */
            this.settings = null;

            /**
             * Current options set by the caller including defaults.
             * @public
             */
            this.options = $.extend({}, Owl.Defaults, options);

            /**
             * Plugin element.
             * @public
             */
            this.$element = $(element);

            /**
             * Caches informations about drag and touch events.
             */
            this.drag = $.extend({}, drag);

            /**
             * Caches some status informations.
             * @protected
             */
            this.state = $.extend({}, state);

            /**
             * @protected
             * @todo Must be documented
             */
            this.e = $.extend({}, e);

            /**
             * References to the running plugins of this carousel.
             * @protected
             */
            this._plugins = {};

            /**
             * Currently suppressed events to prevent them from beeing retriggered.
             * @protected
             */
            this._supress = {};

            /**
             * Absolute current position.
             * @protected
             */
            this._current = null;

            /**
             * Animation speed in milliseconds.
             * @protected
             */
            this._speed = null;

            /**
             * Coordinates of all items in pixel.
             * @todo The name of this member is missleading.
             * @protected
             */
            this._coordinates = [];

            /**
             * Current breakpoint.
             * @todo Real media queries would be nice.
             * @protected
             */
            this._breakpoint = null;

            /**
             * Current width of the plugin element.
             */
            this._width = null;

            /**
             * All real items.
             * @protected
             */
            this._items = [];

            /**
             * All cloned items.
             * @protected
             */
            this._clones = [];

            /**
             * Merge values of all items.
             * @todo Maybe this could be part of a plugin.
             * @protected
             */
            this._mergers = [];

            /**
             * Invalidated parts within the update process.
             * @protected
             */
            this._invalidated = {};

            /**
             * Ordered list of workers for the update process.
             * @protected
             */
            this._pipe = [];

            $.each(
                Owl.Plugins,
                $.proxy(function(key, plugin) {
                    this._plugins[key[0].toLowerCase() + key.slice(1)] = new plugin(this);
                }, this)
            );

            $.each(
                Owl.Pipe,
                $.proxy(function(priority, worker) {
                    this._pipe.push({
                        filter: worker.filter,
                        run: $.proxy(worker.run, this),
                    });
                }, this)
            );

            this.setup();
            this.initialize();
        }

        /**
         * Default options for the carousel.
         * @public
         */
        Owl.Defaults = {
            items: 3,
            loop: false,
            center: false,

            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            freeDrag: false,

            margin: 0,
            stagePadding: 0,

            merge: false,
            mergeFit: true,
            autoWidth: false,

            startPosition: 0,
            rtl: false,

            smartSpeed: 250,
            fluidSpeed: false,
            dragEndSpeed: false,

            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: window,
            responsiveClass: false,

            fallbackEasing: "swing",

            info: false,

            nestedItemSelector: false,
            itemElement: "div",
            stageElement: "div",

            // Classes and Names
            themeClass: "owl-theme",
            baseClass: "owl-carousel",
            itemClass: "owl-item",
            centerClass: "center",
            activeClass: "active",
        };

        /**
         * Enumeration for width.
         * @public
         * @readonly
         * @enum {String}
         */
        Owl.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer",
        };

        /**
         * Contains all registered plugins.
         * @public
         */
        Owl.Plugins = {};

        /**
         * Update pipe.
         */
        Owl.Pipe = [{
                filter: ["width", "items", "settings"],
                run: function(cache) {
                    cache.current =
                        this._items && this._items[this.relative(this._current)];
                },
            },
            {
                filter: ["items", "settings"],
                run: function() {
                    var cached = this._clones,
                        clones = this.$stage.children(".cloned");

                    if (
                        clones.length !== cached.length ||
                        (!this.settings.loop && cached.length > 0)
                    ) {
                        this.$stage.children(".cloned").remove();
                        this._clones = [];
                    }
                },
            },
            {
                filter: ["items", "settings"],
                run: function() {
                    var i,
                        n,
                        clones = this._clones,
                        items = this._items,
                        delta = this.settings.loop ?
                        clones.length - Math.max(this.settings.items * 2, 4) :
                        0;

                    for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
                        if (delta > 0) {
                            this.$stage
                                .children()
                                .eq(items.length + clones.length - 1)
                                .remove();
                            clones.pop();
                            this.$stage.children().eq(0).remove();
                            clones.pop();
                        } else {
                            clones.push(clones.length / 2);
                            this.$stage.append(
                                items[clones[clones.length - 1]].clone().addClass("cloned")
                            );
                            clones.push(items.length - 1 - (clones.length - 1) / 2);
                            this.$stage.prepend(
                                items[clones[clones.length - 1]].clone().addClass("cloned")
                            );
                        }
                    }
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function() {
                    var rtl = this.settings.rtl ? 1 : -1,
                        width = (this.width() / this.settings.items).toFixed(3),
                        coordinate = 0,
                        merge,
                        i,
                        n;

                    this._coordinates = [];
                    for (
                        i = 0, n = this._clones.length + this._items.length; i < n; i++
                    ) {
                        merge = this._mergers[this.relative(i)];
                        merge =
                            (this.settings.mergeFit &&
                                Math.min(merge, this.settings.items)) ||
                            merge;
                        coordinate +=
                            (this.settings.autoWidth ?
                                this._items[this.relative(i)].width() + this.settings.margin :
                                width * merge) * rtl;

                        this._coordinates.push(coordinate);
                    }
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function() {
                    var i,
                        n,
                        width = (this.width() / this.settings.items).toFixed(3),
                        css = {
                            width: Math.abs(this._coordinates[this._coordinates.length - 1]) +
                                this.settings.stagePadding * 2,
                            "padding-left": this.settings.stagePadding || "",
                            "padding-right": this.settings.stagePadding || "",
                        };

                    this.$stage.css(css);

                    css = {
                        width: this.settings.autoWidth ?
                            "auto" :
                            width - this.settings.margin,
                    };
                    css[this.settings.rtl ? "margin-left" : "margin-right"] =
                        this.settings.margin;

                    if (!this.settings.autoWidth &&
                        $.grep(this._mergers, function(v) {
                            return v > 1;
                        }).length > 0
                    ) {
                        for (i = 0, n = this._coordinates.length; i < n; i++) {
                            css.width =
                                Math.abs(this._coordinates[i]) -
                                Math.abs(this._coordinates[i - 1] || 0) -
                                this.settings.margin;
                            this.$stage.children().eq(i).css(css);
                        }
                    } else {
                        this.$stage.children().css(css);
                    }
                },
            },
            {
                filter: ["width", "items", "settings"],
                run: function(cache) {
                    cache.current &&
                        this.reset(this.$stage.children().index(cache.current));
                },
            },
            {
                filter: ["position"],
                run: function() {
                    this.animate(this.coordinates(this._current));
                },
            },
            {
                filter: ["width", "position", "items", "settings"],
                run: function() {
                    var rtl = this.settings.rtl ? 1 : -1,
                        padding = this.settings.stagePadding * 2,
                        begin = this.coordinates(this.current()) + padding,
                        end = begin + this.width() * rtl,
                        inner,
                        outer,
                        matches = [],
                        i,
                        n;

                    for (i = 0, n = this._coordinates.length; i < n; i++) {
                        inner = this._coordinates[i - 1] || 0;
                        outer = Math.abs(this._coordinates[i]) + padding * rtl;

                        if (
                            (this.op(inner, "<=", begin) && this.op(inner, ">", end)) ||
                            (this.op(outer, "<", begin) && this.op(outer, ">", end))
                        ) {
                            matches.push(i);
                        }
                    }

                    this.$stage
                        .children("." + this.settings.activeClass)
                        .removeClass(this.settings.activeClass);
                    this.$stage
                        .children(":eq(" + matches.join("), :eq(") + ")")
                        .addClass(this.settings.activeClass);

                    if (this.settings.center) {
                        this.$stage
                            .children("." + this.settings.centerClass)
                            .removeClass(this.settings.centerClass);
                        this.$stage
                            .children()
                            .eq(this.current())
                            .addClass(this.settings.centerClass);
                    }
                },
            },
        ];

        /**
         * Initializes the carousel.
         * @protected
         */
        Owl.prototype.initialize = function() {
            this.trigger("initialize");

            this.$element
                .addClass(this.settings.baseClass)
                .addClass(this.settings.themeClass)
                .toggleClass("owl-rtl", this.settings.rtl);

            // check support
            this.browserSupport();

            if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
                var imgs, nestedSelector, width;
                imgs = this.$element.find("img");
                nestedSelector = this.settings.nestedItemSelector ?
                    "." + this.settings.nestedItemSelector :
                    undefined;
                width = this.$element.children(nestedSelector).width();

                if (imgs.length && width <= 0) {
                    this.preloadAutoWidthImages(imgs);
                    return false;
                }
            }

            this.$element.addClass("owl-loading");

            // create stage
            this.$stage = $(
                "<" + this.settings.stageElement + ' class="owl-stage"/>'
            ).wrap('<div class="owl-stage-outer">');

            // append stage
            this.$element.append(this.$stage.parent());

            // append content
            this.replace(this.$element.children().not(this.$stage.parent()));

            // set view width
            this._width = this.$element.width();

            // update view
            this.refresh();

            this.$element.removeClass("owl-loading").addClass("owl-loaded");

            // attach generic events
            this.eventsCall();

            // attach generic events
            this.internalEvents();

            // attach custom control events
            this.addTriggerableEvents();

            this.trigger("initialized");
        };

        /**
         * Setups the current settings.
         * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
         * @todo Support for media queries by using `matchMedia` would be nice.
         * @public
         */
        Owl.prototype.setup = function() {
            var viewport = this.viewport(),
                overwrites = this.options.responsive,
                match = -1,
                settings = null;

            if (!overwrites) {
                settings = $.extend({}, this.options);
            } else {
                $.each(overwrites, function(breakpoint) {
                    if (breakpoint <= viewport && breakpoint > match) {
                        match = Number(breakpoint);
                    }
                });

                settings = $.extend({}, this.options, overwrites[match]);
                delete settings.responsive;

                // responsive class
                if (settings.responsiveClass) {
                    this.$element
                        .attr("class", function(i, c) {
                            return c.replace(/\b owl-responsive-\S+/g, "");
                        })
                        .addClass("owl-responsive-" + match);
                }
            }

            if (this.settings === null || this._breakpoint !== match) {
                this.trigger("change", {
                    property: { name: "settings", value: settings },
                });
                this._breakpoint = match;
                this.settings = settings;
                this.invalidate("settings");
                this.trigger("changed", {
                    property: { name: "settings", value: this.settings },
                });
            }
        };

        /**
         * Updates option logic if necessery.
         * @protected
         */
        Owl.prototype.optionsLogic = function() {
            // Toggle Center class
            this.$element.toggleClass("owl-center", this.settings.center);

            // if items number is less than in body
            if (this.settings.loop && this._items.length < this.settings.items) {
                this.settings.loop = false;
            }

            if (this.settings.autoWidth) {
                this.settings.stagePadding = false;
                this.settings.merge = false;
            }
        };

        /**
         * Prepares an item before add.
         * @todo Rename event parameter `content` to `item`.
         * @protected
         * @returns {jQuery|HTMLElement} - The item container.
         */
        Owl.prototype.prepare = function(item) {
            var event = this.trigger("prepare", { content: item });

            if (!event.data) {
                event.data = $("<" + this.settings.itemElement + "/>")
                    .addClass(this.settings.itemClass)
                    .append(item);
            }

            this.trigger("prepared", { content: event.data });

            return event.data;
        };

        /**
         * Updates the view.
         * @public
         */
        Owl.prototype.update = function() {
            var i = 0,
                n = this._pipe.length,
                filter = $.proxy(function(p) {
                    return this[p];
                }, this._invalidated),
                cache = {};

            while (i < n) {
                if (
                    this._invalidated.all ||
                    $.grep(this._pipe[i].filter, filter).length > 0
                ) {
                    this._pipe[i].run(cache);
                }
                i++;
            }

            this._invalidated = {};
        };

        /**
         * Gets the width of the view.
         * @public
         * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
         * @returns {Number} - The width of the view in pixel.
         */
        Owl.prototype.width = function(dimension) {
            dimension = dimension || Owl.Width.Default;
            switch (dimension) {
                case Owl.Width.Inner:
                case Owl.Width.Outer:
                    return this._width;
                default:
                    return (
                        this._width - this.settings.stagePadding * 2 + this.settings.margin
                    );
            }
        };

        /**
         * Refreshes the carousel primarily for adaptive purposes.
         * @public
         */
        Owl.prototype.refresh = function() {
            if (this._items.length === 0) {
                return false;
            }

            var start = new Date().getTime();

            this.trigger("refresh");

            this.setup();

            this.optionsLogic();

            // hide and show methods helps here to set a proper widths,
            // this prevents scrollbar to be calculated in stage width
            this.$stage.addClass("owl-refresh");

            this.update();

            this.$stage.removeClass("owl-refresh");

            this.state.orientation = window.orientation;

            this.watchVisibility();

            this.trigger("refreshed");
        };

        /**
         * Save internal event references and add event based functions.
         * @protected
         */
        Owl.prototype.eventsCall = function() {
            // Save events references
            this.e._onDragStart = $.proxy(function(e) {
                this.onDragStart(e);
            }, this);
            this.e._onDragMove = $.proxy(function(e) {
                this.onDragMove(e);
            }, this);
            this.e._onDragEnd = $.proxy(function(e) {
                this.onDragEnd(e);
            }, this);
            this.e._onResize = $.proxy(function(e) {
                this.onResize(e);
            }, this);
            this.e._transitionEnd = $.proxy(function(e) {
                this.transitionEnd(e);
            }, this);
            this.e._preventClick = $.proxy(function(e) {
                this.preventClick(e);
            }, this);
        };

        /**
         * Checks window `resize` event.
         * @protected
         */
        Owl.prototype.onThrottledResize = function() {
            window.clearTimeout(this.resizeTimer);
            this.resizeTimer = window.setTimeout(
                this.e._onResize,
                this.settings.responsiveRefreshRate
            );
        };

        /**
         * Checks window `resize` event.
         * @protected
         */
        Owl.prototype.onResize = function() {
            if (!this._items.length) {
                return false;
            }

            if (this._width === this.$element.width()) {
                return false;
            }

            if (this.trigger("resize").isDefaultPrevented()) {
                return false;
            }

            this._width = this.$element.width();

            this.invalidate("width");

            this.refresh();

            this.trigger("resized");
        };

        /**
         * Checks for touch/mouse drag event type and add run event handlers.
         * @protected
         */
        Owl.prototype.eventsRouter = function(event) {
            var type = event.type;

            if (type === "mousedown" || type === "touchstart") {
                this.onDragStart(event);
            } else if (type === "mousemove" || type === "touchmove") {
                this.onDragMove(event);
            } else if (type === "mouseup" || type === "touchend") {
                this.onDragEnd(event);
            } else if (type === "touchcancel") {
                this.onDragEnd(event);
            }
        };

        /**
         * Checks for touch/mouse drag options and add necessery event handlers.
         * @protected
         */
        Owl.prototype.internalEvents = function() {
            var isTouch = isTouchSupport(),
                isTouchIE = isTouchSupportIE();

            if (this.settings.mouseDrag) {
                this.$stage.on(
                    "mousedown",
                    $.proxy(function(event) {
                        this.eventsRouter(event);
                    }, this)
                );
                this.$stage.on("dragstart", function() {
                    return false;
                });
                this.$stage.get(0).onselectstart = function() {
                    return false;
                };
            } else {
                this.$element.addClass("owl-text-select-on");
            }

            if (this.settings.touchDrag && !isTouchIE) {
                this.$stage.on(
                    "touchstart touchcancel",
                    $.proxy(function(event) {
                        this.eventsRouter(event);
                    }, this)
                );
            }

            // catch transitionEnd event
            if (this.transitionEndVendor) {
                this.on(
                    this.$stage.get(0),
                    this.transitionEndVendor,
                    this.e._transitionEnd,
                    false
                );
            }

            // responsive
            if (this.settings.responsive !== false) {
                this.on(window, "resize", $.proxy(this.onThrottledResize, this));
            }
        };

        /**
         * Handles touchstart/mousedown event.
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragStart = function(event) {
            var ev, isTouchEvent, pageX, pageY, animatedPos;

            ev = event.originalEvent || event || window.event;

            // prevent right click
            if (ev.which === 3 || this.state.isTouch) {
                return false;
            }

            if (ev.type === "mousedown") {
                this.$stage.addClass("owl-grab");
            }

            this.trigger("drag");
            this.drag.startTime = new Date().getTime();
            this.speed(0);
            this.state.isTouch = true;
            this.state.isScrolling = false;
            this.state.isSwiping = false;
            this.drag.distance = 0;

            pageX = getTouches(ev).x;
            pageY = getTouches(ev).y;

            // get stage position left
            this.drag.offsetX = this.$stage.position().left;
            this.drag.offsetY = this.$stage.position().top;

            if (this.settings.rtl) {
                this.drag.offsetX =
                    this.$stage.position().left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin;
            }

            // catch position // ie to fix
            if (this.state.inMotion && this.support3d) {
                animatedPos = this.getTransformProperty();
                this.drag.offsetX = animatedPos;
                this.animate(animatedPos);
                this.state.inMotion = true;
            } else if (this.state.inMotion && !this.support3d) {
                this.state.inMotion = false;
                return false;
            }

            this.drag.startX = pageX - this.drag.offsetX;
            this.drag.startY = pageY - this.drag.offsetY;

            this.drag.start = pageX - this.drag.startX;
            this.drag.targetEl = ev.target || ev.srcElement;
            this.drag.updatedX = this.drag.start;

            // to do/check
            // prevent links and images dragging;
            if (
                this.drag.targetEl.tagName === "IMG" ||
                this.drag.targetEl.tagName === "A"
            ) {
                this.drag.targetEl.draggable = false;
            }

            $(document).on(
                "mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",
                $.proxy(function(event) {
                    this.eventsRouter(event);
                }, this)
            );
        };

        /**
         * Handles the touchmove/mousemove events.
         * @todo Simplify
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.onDragMove = function(event) {
            var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

            if (!this.state.isTouch) {
                return;
            }

            if (this.state.isScrolling) {
                return;
            }

            ev = event.originalEvent || event || window.event;

            pageX = getTouches(ev).x;
            pageY = getTouches(ev).y;

            // Drag Direction
            this.drag.currentX = pageX - this.drag.startX;
            this.drag.currentY = pageY - this.drag.startY;
            this.drag.distance = this.drag.currentX - this.drag.offsetX;

            // Check move direction
            if (this.drag.distance < 0) {
                this.state.direction = this.settings.rtl ? "right" : "left";
            } else if (this.drag.distance > 0) {
                this.state.direction = this.settings.rtl ? "left" : "right";
            }
            // Loop
            if (this.settings.loop) {
                if (
                    this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) &&
                    this.state.direction === "right"
                ) {
                    this.drag.currentX -=
                        (this.settings.center && this.coordinates(0)) -
                        this.coordinates(this._items.length);
                } else if (
                    this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) &&
                    this.state.direction === "left"
                ) {
                    this.drag.currentX +=
                        (this.settings.center && this.coordinates(0)) -
                        this.coordinates(this._items.length);
                }
            } else {
                // pull
                minValue = this.settings.rtl ?
                    this.coordinates(this.maximum()) :
                    this.coordinates(this.minimum());
                maxValue = this.settings.rtl ?
                    this.coordinates(this.minimum()) :
                    this.coordinates(this.maximum());
                pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
                this.drag.currentX = Math.max(
                    Math.min(this.drag.currentX, minValue + pull),
                    maxValue + pull
                );
            }

            // Lock browser if swiping horizontal

            if (this.drag.distance > 8 || this.drag.distance < -8) {
                if (ev.preventDefault !== undefined) {
                    ev.preventDefault();
                } else {
                    ev.returnValue = false;
                }
                this.state.isSwiping = true;
            }

            this.drag.updatedX = this.drag.currentX;

            // Lock Owl if scrolling
            if (
                (this.drag.currentY > 16 || this.drag.currentY < -16) &&
                this.state.isSwiping === false
            ) {
                this.state.isScrolling = true;
                this.drag.updatedX = this.drag.start;
            }

            this.animate(this.drag.updatedX);
        };

        /**
         * Handles the touchend/mouseup events.
         * @protected
         */
        Owl.prototype.onDragEnd = function(event) {
            var compareTimes, distanceAbs, closest;

            if (!this.state.isTouch) {
                return;
            }

            if (event.type === "mouseup") {
                this.$stage.removeClass("owl-grab");
            }

            this.trigger("dragged");

            // prevent links and images dragging;
            this.drag.targetEl.removeAttribute("draggable");

            // remove drag event listeners

            this.state.isTouch = false;
            this.state.isScrolling = false;
            this.state.isSwiping = false;

            // to check
            if (this.drag.distance === 0 && this.state.inMotion !== true) {
                this.state.inMotion = false;
                return false;
            }

            // prevent clicks while scrolling

            this.drag.endTime = new Date().getTime();
            compareTimes = this.drag.endTime - this.drag.startTime;
            distanceAbs = Math.abs(this.drag.distance);

            // to test
            if (distanceAbs > 3 || compareTimes > 300) {
                this.removeClick(this.drag.targetEl);
            }

            closest = this.closest(this.drag.updatedX);

            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(closest);
            this.invalidate("position");
            this.update();

            // if pullDrag is off then fire transitionEnd event manually when stick
            // to border
            if (!this.settings.pullDrag &&
                this.drag.updatedX === this.coordinates(closest)
            ) {
                this.transitionEnd();
            }

            this.drag.distance = 0;

            $(document).off(".owl.dragEvents");
        };

        /**
         * Attaches `preventClick` to disable link while swipping.
         * @protected
         * @param {HTMLElement} [target] - The target of the `click` event.
         */
        Owl.prototype.removeClick = function(target) {
            this.drag.targetEl = target;
            $(target).on("click.preventClick", this.e._preventClick);
            // to make sure click is removed:
            window.setTimeout(function() {
                $(target).off("click.preventClick");
            }, 300);
        };

        /**
         * Suppresses click event.
         * @protected
         * @param {Event} ev - The event arguments.
         */
        Owl.prototype.preventClick = function(ev) {
            if (ev.preventDefault) {
                ev.preventDefault();
            } else {
                ev.returnValue = false;
            }
            if (ev.stopPropagation) {
                ev.stopPropagation();
            }
            $(ev.target).off("click.preventClick");
        };

        /**
         * Catches stage position while animate (only CSS3).
         * @protected
         * @returns
         */
        Owl.prototype.getTransformProperty = function() {
            var transform, matrix3d;

            transform = window
                .getComputedStyle(this.$stage.get(0), null)
                .getPropertyValue(this.vendorName + "transform");
            // var transform = this.$stage.css(this.vendorName + 'transform')
            transform = transform.replace(/matrix(3d)?\(|\)/g, "").split(",");
            matrix3d = transform.length === 16;

            return matrix3d !== true ? transform[4] : transform[12];
        };

        /**
         * Gets absolute position of the closest item for a coordinate.
         * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
         * @protected
         * @param {Number} coordinate - The coordinate in pixel.
         * @return {Number} - The absolute position of the closest item.
         */
        Owl.prototype.closest = function(coordinate) {
            var position = -1,
                pull = 30,
                width = this.width(),
                coordinates = this.coordinates();

            if (!this.settings.freeDrag) {
                // check closest item
                $.each(
                    coordinates,
                    $.proxy(function(index, value) {
                        if (coordinate > value - pull && coordinate < value + pull) {
                            position = index;
                        } else if (
                            this.op(coordinate, "<", value) &&
                            this.op(coordinate, ">", coordinates[index + 1] || value - width)
                        ) {
                            position = this.state.direction === "left" ? index + 1 : index;
                        }
                        return position === -1;
                    }, this)
                );
            }

            if (!this.settings.loop) {
                // non loop boundries
                if (this.op(coordinate, ">", coordinates[this.minimum()])) {
                    position = coordinate = this.minimum();
                } else if (this.op(coordinate, "<", coordinates[this.maximum()])) {
                    position = coordinate = this.maximum();
                }
            }

            return position;
        };

        /**
         * Animates the stage.
         * @public
         * @param {Number} coordinate - The coordinate in pixels.
         */
        Owl.prototype.animate = function(coordinate) {
            this.trigger("translate");
            this.state.inMotion = this.speed() > 0;

            if (this.support3d) {
                this.$stage.css({
                    transform: "translate3d(" + coordinate + "px" + ",0px, 0px)",
                    transition: this.speed() / 1000 + "s",
                });
            } else if (this.state.isTouch) {
                this.$stage.css({
                    left: coordinate + "px",
                });
            } else {
                this.$stage.animate({
                        left: coordinate,
                    },
                    this.speed() / 1000,
                    this.settings.fallbackEasing,
                    $.proxy(function() {
                        if (this.state.inMotion) {
                            this.transitionEnd();
                        }
                    }, this)
                );
            }
        };

        /**
         * Sets the absolute position of the current item.
         * @public
         * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
         * @returns {Number} - The absolute position of the current item.
         */
        Owl.prototype.current = function(position) {
            if (position === undefined) {
                return this._current;
            }

            if (this._items.length === 0) {
                return undefined;
            }

            position = this.normalize(position);

            if (this._current !== position) {
                var event = this.trigger("change", {
                    property: { name: "position", value: position },
                });

                if (event.data !== undefined) {
                    position = this.normalize(event.data);
                }

                this._current = position;

                this.invalidate("position");

                this.trigger("changed", {
                    property: { name: "position", value: this._current },
                });
            }

            return this._current;
        };

        /**
         * Invalidates the given part of the update routine.
         * @param {String} part - The part to invalidate.
         */
        Owl.prototype.invalidate = function(part) {
            this._invalidated[part] = true;
        };

        /**
         * Resets the absolute position of the current item.
         * @public
         * @param {Number} position - The absolute position of the new item.
         */
        Owl.prototype.reset = function(position) {
            position = this.normalize(position);

            if (position === undefined) {
                return;
            }

            this._speed = 0;
            this._current = position;

            this.suppress(["translate", "translated"]);

            this.animate(this.coordinates(position));

            this.release(["translate", "translated"]);
        };

        /**
         * Normalizes an absolute or a relative position for an item.
         * @public
         * @param {Number} position - The absolute or relative position to normalize.
         * @param {Boolean} [relative=false] - Whether the given position is relative or not.
         * @returns {Number} - The normalized position.
         */
        Owl.prototype.normalize = function(position, relative) {
            var n = relative ?
                this._items.length :
                this._items.length + this._clones.length;

            if (!$.isNumeric(position) || n < 1) {
                return undefined;
            }

            if (this._clones.length) {
                position = ((position % n) + n) % n;
            } else {
                position = Math.max(
                    this.minimum(relative),
                    Math.min(this.maximum(relative), position)
                );
            }

            return position;
        };

        /**
         * Converts an absolute position for an item into a relative position.
         * @public
         * @param {Number} position - The absolute position to convert.
         * @returns {Number} - The converted position.
         */
        Owl.prototype.relative = function(position) {
            position = this.normalize(position);
            position = position - this._clones.length / 2;
            return this.normalize(position, true);
        };

        /**
         * Gets the maximum position for an item.
         * @public
         * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
         * @returns {Number}
         */
        Owl.prototype.maximum = function(relative) {
            var maximum,
                width,
                i = 0,
                coordinate,
                settings = this.settings;

            if (relative) {
                return this._items.length - 1;
            }

            if (!settings.loop && settings.center) {
                maximum = this._items.length - 1;
            } else if (!settings.loop && !settings.center) {
                maximum = this._items.length - settings.items;
            } else if (settings.loop || settings.center) {
                maximum = this._items.length + settings.items;
            } else if (settings.autoWidth || settings.merge) {
                revert = settings.rtl ? 1 : -1;
                width = this.$stage.width() - this.$element.width();
                while ((coordinate = this.coordinates(i))) {
                    if (coordinate * revert >= width) {
                        break;
                    }
                    maximum = ++i;
                }
            } else {
                throw "Can not detect maximum absolute position.";
            }

            return maximum;
        };

        /**
         * Gets the minimum position for an item.
         * @public
         * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
         * @returns {Number}
         */
        Owl.prototype.minimum = function(relative) {
            if (relative) {
                return 0;
            }

            return this._clones.length / 2;
        };

        /**
         * Gets an item at the specified relative position.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
         */
        Owl.prototype.items = function(position) {
            if (position === undefined) {
                return this._items.slice();
            }

            position = this.normalize(position, true);
            return this._items[position];
        };

        /**
         * Gets an item at the specified relative position.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
         */
        Owl.prototype.mergers = function(position) {
            if (position === undefined) {
                return this._mergers.slice();
            }

            position = this.normalize(position, true);
            return this._mergers[position];
        };

        /**
         * Gets the absolute positions of clones for an item.
         * @public
         * @param {Number} [position] - The relative position of the item.
         * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
         */
        Owl.prototype.clones = function(position) {
            var odd = this._clones.length / 2,
                even = odd + this._items.length,
                map = function(index) {
                    return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
                };

            if (position === undefined) {
                return $.map(this._clones, function(v, i) {
                    return map(i);
                });
            }

            return $.map(this._clones, function(v, i) {
                return v === position ? map(i) : null;
            });
        };

        /**
         * Sets the current animation speed.
         * @public
         * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
         * @returns {Number} - The current animation speed in milliseconds.
         */
        Owl.prototype.speed = function(speed) {
            if (speed !== undefined) {
                this._speed = speed;
            }

            return this._speed;
        };

        /**
         * Gets the coordinate of an item.
         * @todo The name of this method is missleanding.
         * @public
         * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
         * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
         */
        Owl.prototype.coordinates = function(position) {
            var coordinate = null;

            if (position === undefined) {
                return $.map(
                    this._coordinates,
                    $.proxy(function(coordinate, index) {
                        return this.coordinates(index);
                    }, this)
                );
            }

            if (this.settings.center) {
                coordinate = this._coordinates[position];
                coordinate +=
                    ((this.width() -
                            coordinate +
                            (this._coordinates[position - 1] || 0)) /
                        2) *
                    (this.settings.rtl ? -1 : 1);
            } else {
                coordinate = this._coordinates[position - 1] || 0;
            }

            return coordinate;
        };

        /**
         * Calculates the speed for a translation.
         * @protected
         * @param {Number} from - The absolute position of the start item.
         * @param {Number} to - The absolute position of the target item.
         * @param {Number} [factor=undefined] - The time factor in milliseconds.
         * @returns {Number} - The time in milliseconds for the translation.
         */
        Owl.prototype.duration = function(from, to, factor) {
            return (
                Math.min(Math.max(Math.abs(to - from), 1), 6) *
                Math.abs(factor || this.settings.smartSpeed)
            );
        };

        /**
         * Slides to the specified item.
         * @public
         * @param {Number} position - The position of the item.
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.to = function(position, speed) {
            if (this.settings.loop) {
                var distance = position - this.relative(this.current()),
                    revert = this.current(),
                    before = this.current(),
                    after = this.current() + distance,
                    direction = before - after < 0 ? true : false,
                    items = this._clones.length + this._items.length;

                if (after < this.settings.items && direction === false) {
                    revert = before + this._items.length;
                    this.reset(revert);
                } else if (after >= items - this.settings.items && direction === true) {
                    revert = before - this._items.length;
                    this.reset(revert);
                }
                window.clearTimeout(this.e._goToLoop);
                this.e._goToLoop = window.setTimeout(
                    $.proxy(function() {
                        this.speed(this.duration(this.current(), revert + distance, speed));
                        this.current(revert + distance);
                        this.update();
                    }, this),
                    30
                );
            } else {
                this.speed(this.duration(this.current(), position, speed));
                this.current(position);
                this.update();
            }
        };

        /**
         * Slides to the next item.
         * @public
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.next = function(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) + 1, speed);
        };

        /**
         * Slides to the previous item.
         * @public
         * @param {Number} [speed] - The time in milliseconds for the transition.
         */
        Owl.prototype.prev = function(speed) {
            speed = speed || false;
            this.to(this.relative(this.current()) - 1, speed);
        };

        /**
         * Handles the end of an animation.
         * @protected
         * @param {Event} event - The event arguments.
         */
        Owl.prototype.transitionEnd = function(event) {
            // if css2 animation then event object is undefined
            if (event !== undefined) {
                event.stopPropagation();

                // Catch only owl-stage transitionEnd event
                if (
                    (event.target || event.srcElement || event.originalTarget) !==
                    this.$stage.get(0)
                ) {
                    return false;
                }
            }

            this.state.inMotion = false;
            this.trigger("translated");
        };

        /**
         * Gets viewport width.
         * @protected
         * @return {Number} - The width in pixel.
         */
        Owl.prototype.viewport = function() {
            var width;
            if (this.options.responsiveBaseElement !== window) {
                width = $(this.options.responsiveBaseElement).width();
            } else if (window.innerWidth) {
                width = window.innerWidth;
            } else if (
                document.documentElement &&
                document.documentElement.clientWidth
            ) {
                width = document.documentElement.clientWidth;
            } else {
                throw "Can not detect viewport width.";
            }
            return width;
        };

        /**
         * Replaces the current content.
         * @public
         * @param {HTMLElement|jQuery|String} content - The new content.
         */
        Owl.prototype.replace = function(content) {
            this.$stage.empty();
            this._items = [];

            if (content) {
                content = content instanceof jQuery ? content : $(content);
            }

            if (this.settings.nestedItemSelector) {
                content = content.find("." + this.settings.nestedItemSelector);
            }

            content
                .filter(function() {
                    return this.nodeType === 1;
                })
                .each(
                    $.proxy(function(index, item) {
                        item = this.prepare(item);
                        this.$stage.append(item);
                        this._items.push(item);
                        this._mergers.push(
                            item
                            .find("[data-merge]")
                            .andSelf("[data-merge]")
                            .attr("data-merge") * 1 || 1
                        );
                    }, this)
                );

            this.reset(
                $.isNumeric(this.settings.startPosition) ?
                this.settings.startPosition :
                0
            );

            this.invalidate("items");
        };

        /**
         * Adds an item.
         * @todo Use `item` instead of `content` for the event arguments.
         * @public
         * @param {HTMLElement|jQuery|String} content - The item content to add.
         * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
         */
        Owl.prototype.add = function(content, position) {
            position =
                position === undefined ?
                this._items.length :
                this.normalize(position, true);

            this.trigger("add", { content: content, position: position });

            if (this._items.length === 0 || position === this._items.length) {
                this.$stage.append(content);
                this._items.push(content);
                this._mergers.push(
                    content
                    .find("[data-merge]")
                    .andSelf("[data-merge]")
                    .attr("data-merge") * 1 || 1
                );
            } else {
                this._items[position].before(content);
                this._items.splice(position, 0, content);
                this._mergers.splice(
                    position,
                    0,
                    content
                    .find("[data-merge]")
                    .andSelf("[data-merge]")
                    .attr("data-merge") * 1 || 1
                );
            }

            this.invalidate("items");

            this.trigger("added", { content: content, position: position });
        };

        /**
         * Removes an item by its position.
         * @todo Use `item` instead of `content` for the event arguments.
         * @public
         * @param {Number} position - The relative position of the item to remove.
         */
        Owl.prototype.remove = function(position) {
            position = this.normalize(position, true);

            if (position === undefined) {
                return;
            }

            this.trigger("remove", {
                content: this._items[position],
                position: position,
            });

            this._items[position].remove();
            this._items.splice(position, 1);
            this._mergers.splice(position, 1);

            this.invalidate("items");

            this.trigger("removed", { content: null, position: position });
        };

        /**
         * Adds triggerable events.
         * @protected
         */
        Owl.prototype.addTriggerableEvents = function() {
            var handler = $.proxy(function(callback, event) {
                return $.proxy(function(e) {
                    if (e.relatedTarget !== this) {
                        this.suppress([event]);
                        callback.apply(this, [].slice.call(arguments, 1));
                        this.release([event]);
                    }
                }, this);
            }, this);

            $.each({
                    next: this.next,
                    prev: this.prev,
                    to: this.to,
                    destroy: this.destroy,
                    refresh: this.refresh,
                    replace: this.replace,
                    add: this.add,
                    remove: this.remove,
                },
                $.proxy(function(event, callback) {
                    this.$element.on(
                        event + ".owl.carousel",
                        handler(callback, event + ".owl.carousel")
                    );
                }, this)
            );
        };

        /**
         * Watches the visibility of the carousel element.
         * @protected
         */
        Owl.prototype.watchVisibility = function() {
            // test on zepto
            if (!isElVisible(this.$element.get(0))) {
                this.$element.addClass("owl-hidden");
                window.clearInterval(this.e._checkVisibile);
                this.e._checkVisibile = window.setInterval(
                    $.proxy(checkVisible, this),
                    500
                );
            }

            function isElVisible(el) {
                return el.offsetWidth > 0 && el.offsetHeight > 0;
            }

            function checkVisible() {
                if (isElVisible(this.$element.get(0))) {
                    this.$element.removeClass("owl-hidden");
                    this.refresh();
                    window.clearInterval(this.e._checkVisibile);
                }
            }
        };

        /**
         * Preloads images with auto width.
         * @protected
         * @todo Still to test
         */
        Owl.prototype.preloadAutoWidthImages = function(imgs) {
            var loaded, that, $el, img;

            loaded = 0;
            that = this;
            imgs.each(function(i, el) {
                $el = $(el);
                img = new Image();

                img.onload = function() {
                    loaded++;
                    $el.attr("src", img.src);
                    $el.css("opacity", 1);
                    if (loaded >= imgs.length) {
                        that.state.imagesLoaded = true;
                        that.initialize();
                    }
                };

                img.src =
                    $el.attr("src") ||
                    $el.attr("data-src") ||
                    $el.attr("data-src-retina");
            });
        };

        /**
         * Destroys the carousel.
         * @public
         */
        Owl.prototype.destroy = function() {
            if (this.$element.hasClass(this.settings.themeClass)) {
                this.$element.removeClass(this.settings.themeClass);
            }

            if (this.settings.responsive !== false) {
                $(window).off("resize.owl.carousel");
            }

            if (this.transitionEndVendor) {
                this.off(
                    this.$stage.get(0),
                    this.transitionEndVendor,
                    this.e._transitionEnd
                );
            }

            for (var i in this._plugins) {
                this._plugins[i].destroy();
            }

            if (this.settings.mouseDrag || this.settings.touchDrag) {
                this.$stage.off("mousedown touchstart touchcancel");
                $(document).off(".owl.dragEvents");
                this.$stage.get(0).onselectstart = function() {};
                this.$stage.off("dragstart", function() {
                    return false;
                });
            }

            // remove event handlers in the ".owl.carousel" namespace
            this.$element.off(".owl");

            this.$stage.children(".cloned").remove();
            this.e = null;
            this.$element.removeData("owlCarousel");

            this.$stage.children().contents().unwrap();
            this.$stage.children().unwrap();
            this.$stage.unwrap();
        };

        /**
         * Operators to calculate right-to-left and left-to-right.
         * @protected
         * @param {Number} [a] - The left side operand.
         * @param {String} [o] - The operator.
         * @param {Number} [b] - The right side operand.
         */
        Owl.prototype.op = function(a, o, b) {
            var rtl = this.settings.rtl;
            switch (o) {
                case "<":
                    return rtl ? a > b : a < b;
                case ">":
                    return rtl ? a < b : a > b;
                case ">=":
                    return rtl ? a <= b : a >= b;
                case "<=":
                    return rtl ? a >= b : a <= b;
                default:
                    break;
            }
        };

        /**
         * Attaches to an internal event.
         * @protected
         * @param {HTMLElement} element - The event source.
         * @param {String} event - The event name.
         * @param {Function} listener - The event handler to attach.
         * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
         */
        Owl.prototype.on = function(element, event, listener, capture) {
            if (element.addEventListener) {
                element.addEventListener(event, listener, capture);
            } else if (element.attachEvent) {
                element.attachEvent("on" + event, listener);
            }
        };

        /**
         * Detaches from an internal event.
         * @protected
         * @param {HTMLElement} element - The event source.
         * @param {String} event - The event name.
         * @param {Function} listener - The attached event handler to detach.
         * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
         */
        Owl.prototype.off = function(element, event, listener, capture) {
            if (element.removeEventListener) {
                element.removeEventListener(event, listener, capture);
            } else if (element.detachEvent) {
                element.detachEvent("on" + event, listener);
            }
        };

        /**
         * Triggers an public event.
         * @protected
         * @param {String} name - The event name.
         * @param {*} [data=null] - The event data.
         * @param {String} [namespace=.owl.carousel] - The event namespace.
         * @returns {Event} - The event arguments.
         */
        Owl.prototype.trigger = function(name, data, namespace) {
            var status = {
                    item: { count: this._items.length, index: this.current() },
                },
                handler = $.camelCase(
                    $.grep(["on", name, namespace], function(v) {
                        return v;
                    })
                    .join("-")
                    .toLowerCase()
                ),
                event = $.Event(
                    [name, "owl", namespace || "carousel"].join(".").toLowerCase(),
                    $.extend({ relatedTarget: this }, status, data)
                );

            if (!this._supress[name]) {
                $.each(this._plugins, function(name, plugin) {
                    if (plugin.onTrigger) {
                        plugin.onTrigger(event);
                    }
                });

                this.$element.trigger(event);

                if (this.settings && typeof this.settings[handler] === "function") {
                    this.settings[handler].apply(this, event);
                }
            }

            return event;
        };

        /**
         * Suppresses events.
         * @protected
         * @param {Array.<String>} events - The events to suppress.
         */
        Owl.prototype.suppress = function(events) {
            $.each(
                events,
                $.proxy(function(index, event) {
                    this._supress[event] = true;
                }, this)
            );
        };

        /**
         * Releases suppressed events.
         * @protected
         * @param {Array.<String>} events - The events to release.
         */
        Owl.prototype.release = function(events) {
            $.each(
                events,
                $.proxy(function(index, event) {
                    delete this._supress[event];
                }, this)
            );
        };

        /**
         * Checks the availability of some browser features.
         * @protected
         */
        Owl.prototype.browserSupport = function() {
            this.support3d = isPerspective();

            if (this.support3d) {
                this.transformVendor = isTransform();

                // take transitionend event name by detecting transition
                var endVendors = [
                    "transitionend",
                    "webkitTransitionEnd",
                    "transitionend",
                    "oTransitionEnd",
                ];
                this.transitionEndVendor = endVendors[isTransition()];

                // take vendor name from transform name
                this.vendorName = this.transformVendor.replace(/Transform/i, "");
                this.vendorName =
                    this.vendorName !== "" ?
                    "-" + this.vendorName.toLowerCase() + "-" :
                    "";
            }

            this.state.orientation = window.orientation;
        };

        /**
         * Get touch/drag coordinats.
         * @private
         * @param {event} - mousedown/touchstart event
         * @returns {object} - Contains X and Y of current mouse/touch position
         */

        function getTouches(event) {
            if (event.touches !== undefined) {
                return {
                    x: event.touches[0].pageX,
                    y: event.touches[0].pageY,
                };
            }

            if (event.touches === undefined) {
                if (event.pageX !== undefined) {
                    return {
                        x: event.pageX,
                        y: event.pageY,
                    };
                }

                if (event.pageX === undefined) {
                    return {
                        x: event.clientX,
                        y: event.clientY,
                    };
                }
            }
        }

        /**
         * Checks for CSS support.
         * @private
         * @param {Array} array - The CSS properties to check for.
         * @returns {Array} - Contains the supported CSS property name and its index or `false`.
         */
        function isStyleSupported(array) {
            var p,
                s,
                fake = document.createElement("div"),
                list = array;
            for (p in list) {
                s = list[p];
                if (typeof fake.style[s] !== "undefined") {
                    fake = null;
                    return [s, p];
                }
            }
            return [false];
        }

        /**
         * Checks for CSS transition support.
         * @private
         * @todo Realy bad design
         * @returns {Number}
         */
        function isTransition() {
            return isStyleSupported([
                "transition",
                "WebkitTransition",
                "MozTransition",
                "OTransition",
            ])[1];
        }

        /**
         * Checks for CSS transform support.
         * @private
         * @returns {String} The supported property name or false.
         */
        function isTransform() {
            return isStyleSupported([
                "transform",
                "WebkitTransform",
                "MozTransform",
                "OTransform",
                "msTransform",
            ])[0];
        }

        /**
         * Checks for CSS perspective support.
         * @private
         * @returns {String} The supported property name or false.
         */
        function isPerspective() {
            return isStyleSupported([
                "perspective",
                "webkitPerspective",
                "MozPerspective",
                "OPerspective",
                "MsPerspective",
            ])[0];
        }

        /**
         * Checks wether touch is supported or not.
         * @private
         * @returns {Boolean}
         */
        function isTouchSupport() {
            return "ontouchstart" in window || !!navigator.msMaxTouchPoints;
        }

        /**
         * Checks wether touch is supported or not for IE.
         * @private
         * @returns {Boolean}
         */
        function isTouchSupportIE() {
            return window.navigator.msPointerEnabled;
        }

        /**
         * The jQuery Plugin for the Owl Carousel
         * @public
         */
        $.fn.owlCarousel = function(options) {
            return this.each(function() {
                if (!$(this).data("owlCarousel")) {
                    $(this).data("owlCarousel", new Owl(this, options));
                }
            });
        };

        /**
         * The constructor for the jQuery Plugin
         * @public
         */
        $.fn.owlCarousel.Constructor = Owl;
    })(window.Zepto || window.jQuery, window, document);

    /**
     * Lazy Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    (function($, window, document, undefined) {
        /**
         * Creates the lazy plugin.
         * @class The Lazy Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Lazy = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;

            /**
             * Already loaded items.
             * @protected
             * @type {Array.<jQuery>}
             */
            this._loaded = [];

            /**
             * Event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                "initialized.owl.carousel change.owl.carousel": $.proxy(function(e) {
                    if (!e.namespace) {
                        return;
                    }

                    if (!this._core.settings || !this._core.settings.lazyLoad) {
                        return;
                    }

                    if (
                        (e.property && e.property.name == "position") ||
                        e.type == "initialized"
                    ) {
                        var settings = this._core.settings,
                            n =
                            (settings.center && Math.ceil(settings.items / 2)) ||
                            settings.items,
                            i = (settings.center && n * -1) || 0,
                            position =
                            ((e.property && e.property.value) || this._core.current()) + i,
                            clones = this._core.clones().length,
                            load = $.proxy(function(i, v) {
                                this.load(v);
                            }, this);

                        while (i++ < n) {
                            this.load(clones / 2 + this._core.relative(position));
                            clones &&
                                $.each(
                                    this._core.clones(this._core.relative(position++)),
                                    load
                                );
                        }
                    }
                }, this),
            };

            // set the default options
            this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

            // register event handler
            this._core.$element.on(this._handlers);
        };

        /**
         * Default options.
         * @public
         */
        Lazy.Defaults = {
            lazyLoad: false,
        };

        /**
         * Loads all resources of an item at the specified position.
         * @param {Number} position - The absolute position of the item.
         * @protected
         */
        Lazy.prototype.load = function(position) {
            var $item = this._core.$stage.children().eq(position),
                $elements = $item && $item.find(".owl-lazy");

            if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
                return;
            }

            $elements.each(
                $.proxy(function(index, element) {
                    var $element = $(element),
                        image,
                        url =
                        (window.devicePixelRatio > 1 &&
                            $element.attr("data-src-retina")) ||
                        $element.attr("data-src");

                    this._core.trigger("load", { element: $element, url: url }, "lazy");

                    if ($element.is("img")) {
                        $element
                            .one(
                                "load.owl.lazy",
                                $.proxy(function() {
                                    $element.css("opacity", 1);
                                    this._core.trigger(
                                        "loaded", { element: $element, url: url },
                                        "lazy"
                                    );
                                }, this)
                            )
                            .attr("src", url);
                    } else {
                        image = new Image();
                        image.onload = $.proxy(function() {
                            $element.css({
                                "background-image": "url(" + url + ")",
                                opacity: "1",
                            });
                            this._core.trigger(
                                "loaded", { element: $element, url: url },
                                "lazy"
                            );
                        }, this);
                        image.src = url;
                    }
                }, this)
            );

            this._loaded.push($item.get(0));
        };

        /**
         * Destroys the plugin.
         * @public
         */
        Lazy.prototype.destroy = function() {
            var handler, property;

            for (handler in this.handlers) {
                this._core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != "function" && (this[property] = null);
            }
        };

        $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;
    })(window.Zepto || window.jQuery, window, document);

    /**
     * AutoHeight Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    (function($, window, document, undefined) {
        /**
         * Creates the auto height plugin.
         * @class The Auto Height Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var AutoHeight = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;

            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                "initialized.owl.carousel": $.proxy(function() {
                    if (this._core.settings.autoHeight) {
                        this.update();
                    }
                }, this),
                "changed.owl.carousel": $.proxy(function(e) {
                    if (this._core.settings.autoHeight && e.property.name == "position") {
                        this.update();
                    }
                }, this),
                "loaded.owl.lazy": $.proxy(function(e) {
                    if (
                        this._core.settings.autoHeight &&
                        e.element.closest("." + this._core.settings.itemClass) ===
                        this._core.$stage.children().eq(this._core.current())
                    ) {
                        this.update();
                    }
                }, this),
            };

            // set default options
            this._core.options = $.extend({},
                AutoHeight.Defaults,
                this._core.options
            );

            // register event handlers
            this._core.$element.on(this._handlers);
        };

        /**
         * Default options.
         * @public
         */
        AutoHeight.Defaults = {
            autoHeight: false,
            autoHeightClass: "owl-height",
        };

        /**
         * Updates the view.
         */
        AutoHeight.prototype.update = function() {
            this._core.$stage
                .parent()
                .height(this._core.$stage.children().eq(this._core.current()).height())
                .addClass(this._core.settings.autoHeightClass);
        };

        AutoHeight.prototype.destroy = function() {
            var handler, property;

            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != "function" && (this[property] = null);
            }
        };

        $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;
    })(window.Zepto || window.jQuery, window, document);

    /**
     * Video Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    (function($, window, document, undefined) {
        /**
         * Creates the video plugin.
         * @class The Video Plugin
         * @param {Owl} carousel - The Owl Carousel
         */
        var Video = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;

            /**
             * Cache all video URLs.
             * @protected
             * @type {Object}
             */
            this._videos = {};

            /**
             * Current playing item.
             * @protected
             * @type {jQuery}
             */
            this._playing = null;

            /**
             * Whether this is in fullscreen or not.
             * @protected
             * @type {Boolean}
             */
            this._fullscreen = false;

            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                "resize.owl.carousel": $.proxy(function(e) {
                    if (this._core.settings.video && !this.isInFullScreen()) {
                        e.preventDefault();
                    }
                }, this),
                "refresh.owl.carousel changed.owl.carousel": $.proxy(function(e) {
                    if (this._playing) {
                        this.stop();
                    }
                }, this),
                "prepared.owl.carousel": $.proxy(function(e) {
                    var $element = $(e.content).find(".owl-video");
                    if ($element.length) {
                        $element.css("display", "none");
                        this.fetch($element, $(e.content));
                    }
                }, this),
            };

            // set default options
            this._core.options = $.extend({}, Video.Defaults, this._core.options);

            // register event handlers
            this._core.$element.on(this._handlers);

            this._core.$element.on(
                "click.owl.video",
                ".owl-video-play-icon",
                $.proxy(function(e) {
                    this.play(e);
                }, this)
            );
        };

        /**
         * Default options.
         * @public
         */
        Video.Defaults = {
            video: false,
            videoHeight: false,
            videoWidth: false,
        };

        /**
         * Gets the video ID and the type (YouTube/Vimeo only).
         * @protected
         * @param {jQuery} target - The target containing the video data.
         * @param {jQuery} item - The item containing the video.
         */
        Video.prototype.fetch = function(target, item) {
            var type = target.attr("data-vimeo-id") ? "vimeo" : "youtube",
                id = target.attr("data-vimeo-id") || target.attr("data-youtube-id"),
                width = target.attr("data-width") || this._core.settings.videoWidth,
                height = target.attr("data-height") || this._core.settings.videoHeight,
                url = target.attr("href");

            if (url) {
                id = url.match(
                    /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                );

                if (id[3].indexOf("youtu") > -1) {
                    type = "youtube";
                } else if (id[3].indexOf("vimeo") > -1) {
                    type = "vimeo";
                } else {
                    throw new Error("Video URL not supported.");
                }
                id = id[6];
            } else {
                throw new Error("Missing video URL.");
            }

            this._videos[url] = {
                type: type,
                id: id,
                width: width,
                height: height,
            };

            item.attr("data-video", url);

            this.thumbnail(target, this._videos[url]);
        };

        /**
         * Creates video thumbnail.
         * @protected
         * @param {jQuery} target - The target containing the video data.
         * @param {Object} info - The video info object.
         * @see `fetch`
         */
        Video.prototype.thumbnail = function(target, video) {
            var tnLink,
                icon,
                path,
                dimensions =
                video.width && video.height ?
                'style="width:' +
                video.width +
                "px;height:" +
                video.height +
                'px;"' :
                "",
                customTn = target.find("img"),
                srcType = "src",
                lazyClass = "",
                settings = this._core.settings,
                create = function(path) {
                    icon = '<div class="owl-video-play-icon"></div>';

                    if (settings.lazyLoad) {
                        tnLink =
                            '<div class="owl-video-tn ' +
                            lazyClass +
                            '" ' +
                            srcType +
                            '="' +
                            path +
                            '"></div>';
                    } else {
                        tnLink =
                            '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                            path +
                            ')"></div>';
                    }
                    target.after(tnLink);
                    target.after(icon);
                };

            // wrap video content into owl-video-wrapper div
            target.wrap('<div class="owl-video-wrapper"' + dimensions + "></div>");

            if (this._core.settings.lazyLoad) {
                srcType = "data-src";
                lazyClass = "owl-lazy";
            }

            // custom thumbnail
            if (customTn.length) {
                create(customTn.attr(srcType));
                customTn.remove();
                return false;
            }

            if (video.type === "youtube") {
                path = "https://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
                create(path);
            } else if (video.type === "vimeo") {
                $.ajax({
                    type: "GET",
                    url: "https://vimeo.com/api/v2/video/" + video.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function(data) {
                        path = data[0].thumbnail_large;
                        create(path);
                    },
                });
            }
        };

        /**
         * Stops the current video.
         * @public
         */
        Video.prototype.stop = function() {
            this._core.trigger("stop", null, "video");
            this._playing.find(".owl-video-frame").remove();
            this._playing.removeClass("owl-video-playing");
            this._playing = null;
        };

        /**
         * Starts the current video.
         * @public
         * @param {Event} ev - The event arguments.
         */
        Video.prototype.play = function(ev) {
            this._core.trigger("play", null, "video");

            if (this._playing) {
                this.stop();
            }

            var target = $(ev.target || ev.srcElement),
                item = target.closest("." + this._core.settings.itemClass),
                video = this._videos[item.attr("data-video")],
                width = video.width || "100%",
                height = video.height || this._core.$stage.height(),
                html,
                wrap;

            if (video.type === "youtube") {
                html =
                    '<iframe width="' +
                    width +
                    '" height="' +
                    height +
                    '" src="https://www.youtube.com/embed/' +
                    video.id +
                    "?autoplay=1&v=" +
                    video.id +
                    '" frameborder="0" allowfullscreen></iframe>';
            } else if (video.type === "vimeo") {
                html =
                    '<iframe src="https://player.vimeo.com/video/' +
                    video.id +
                    '?autoplay=1" width="' +
                    width +
                    '" height="' +
                    height +
                    '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
            }

            item.addClass("owl-video-playing");
            this._playing = item;

            wrap = $(
                '<div style="height:' +
                height +
                "px; width:" +
                width +
                'px" class="owl-video-frame">' +
                html +
                "</div>"
            );
            target.after(wrap);
        };

        /**
         * Checks whether an video is currently in full screen mode or not.
         * @todo Bad style because looks like a readonly method but changes members.
         * @protected
         * @returns {Boolean}
         */
        Video.prototype.isInFullScreen = function() {
            // if Vimeo Fullscreen mode
            var element =
                document.fullscreenElement ||
                document.mozFullScreenElement ||
                document.webkitFullscreenElement;

            if (element && $(element).parent().hasClass("owl-video-frame")) {
                this._core.speed(0);
                this._fullscreen = true;
            }

            if (element && this._fullscreen && this._playing) {
                return false;
            }

            // comming back from fullscreen
            if (this._fullscreen) {
                this._fullscreen = false;
                return false;
            }

            // check full screen mode and window orientation
            if (this._playing) {
                if (this._core.state.orientation !== window.orientation) {
                    this._core.state.orientation = window.orientation;
                    return false;
                }
            }

            return true;
        };

        /**
         * Destroys the plugin.
         */
        Video.prototype.destroy = function() {
            var handler, property;

            this._core.$element.off("click.owl.video");

            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != "function" && (this[property] = null);
            }
        };

        $.fn.owlCarousel.Constructor.Plugins.Video = Video;
    })(window.Zepto || window.jQuery, window, document);

    /**
     * Animate Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    (function($, window, document, undefined) {
        /**
         * Creates the animate plugin.
         * @class The Navigation Plugin
         * @param {Owl} scope - The Owl Carousel
         */
        var Animate = function(scope) {
            this.core = scope;
            this.core.options = $.extend({}, Animate.Defaults, this.core.options);
            this.swapping = true;
            this.previous = undefined;
            this.next = undefined;

            this.handlers = {
                "change.owl.carousel": $.proxy(function(e) {
                    if (e.property.name == "position") {
                        this.previous = this.core.current();
                        this.next = e.property.value;
                    }
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": $.proxy(function(e) {
                    this.swapping = e.type == "translated";
                }, this),
                "translate.owl.carousel": $.proxy(function(e) {
                    if (
                        this.swapping &&
                        (this.core.options.animateOut || this.core.options.animateIn)
                    ) {
                        this.swap();
                    }
                }, this),
            };

            this.core.$element.on(this.handlers);
        };

        /**
         * Default options.
         * @public
         */
        Animate.Defaults = {
            animateOut: false,
            animateIn: false,
        };

        /**
         * Toggles the animation classes whenever an translations starts.
         * @protected
         * @returns {Boolean|undefined}
         */
        Animate.prototype.swap = function() {
            if (this.core.settings.items !== 1 || !this.core.support3d) {
                return;
            }

            this.core.speed(0);

            var left,
                clear = $.proxy(this.clear, this),
                previous = this.core.$stage.children().eq(this.previous),
                next = this.core.$stage.children().eq(this.next),
                incoming = this.core.settings.animateIn,
                outgoing = this.core.settings.animateOut;

            if (this.core.current() === this.previous) {
                return;
            }

            if (outgoing) {
                left =
                    this.core.coordinates(this.previous) -
                    this.core.coordinates(this.next);
                previous
                    .css({ left: left + "px" })
                    .addClass("animated owl-animated-out")
                    .addClass(outgoing)
                    .one(
                        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                        clear
                    );
            }

            if (incoming) {
                next
                    .addClass("animated owl-animated-in")
                    .addClass(incoming)
                    .one(
                        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                        clear
                    );
            }
        };

        Animate.prototype.clear = function(e) {
            $(e.target)
                .css({ left: "" })
                .removeClass("animated owl-animated-out owl-animated-in")
                .removeClass(this.core.settings.animateIn)
                .removeClass(this.core.settings.animateOut);
            this.core.transitionEnd();
        };

        /**
         * Destroys the plugin.
         * @public
         */
        Animate.prototype.destroy = function() {
            var handler, property;

            for (handler in this.handlers) {
                this.core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != "function" && (this[property] = null);
            }
        };

        $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;
    })(window.Zepto || window.jQuery, window, document);

    /**
     * Autoplay Plugin
     * @version 2.0.0
     * @author Bartosz Wojciechowski
     * @license The MIT License (MIT)
     */
    (function($, window, document, undefined) {
        /**
         * Creates the autoplay plugin.
         * @class The Autoplay Plugin
         * @param {Owl} scope - The Owl Carousel
         */
        var Autoplay = function(scope) {
            this.core = scope;
            this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

            this.handlers = {
                "translated.owl.carousel refreshed.owl.carousel": $.proxy(function() {
                    this.autoplay();
                }, this),
                "play.owl.autoplay": $.proxy(function(e, t, s) {
                    this.play(t, s);
                }, this),
                "stop.owl.autoplay": $.proxy(function() {
                    this.stop();
                }, this),
                "mouseover.owl.autoplay": $.proxy(function() {
                    if (this.core.settings.autoplayHoverPause) {
                        this.pause();
                    }
                }, this),
                "mouseleave.owl.autoplay": $.proxy(function() {
                    if (this.core.settings.autoplayHoverPause) {
                        this.autoplay();
                    }
                }, this),
            };

            this.core.$element.on(this.handlers);
        };

        /**
         * Default options.
         * @public
         */
        Autoplay.Defaults = {
            autoplay: false,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            autoplaySpeed: false,
        };

        /**
         * @protected
         * @todo Must be documented.
         */
        Autoplay.prototype.autoplay = function() {
            if (this.core.settings.autoplay && !this.core.state.videoPlay) {
                window.clearInterval(this.interval);

                this.interval = window.setInterval(
                    $.proxy(function() {
                        this.play();
                    }, this),
                    this.core.settings.autoplayTimeout
                );
            } else {
                window.clearInterval(this.interval);
            }
        };

        /**
         * Starts the autoplay.
         * @public
         * @param {Number} [timeout] - ...
         * @param {Number} [speed] - ...
         * @returns {Boolean|undefined} - ...
         * @todo Must be documented.
         */
        Autoplay.prototype.play = function(timeout, speed) {
            // if tab is inactive - doesnt work in <IE10
            if (document.hidden === true) {
                return;
            }

            if (
                this.core.state.isTouch ||
                this.core.state.isScrolling ||
                this.core.state.isSwiping ||
                this.core.state.inMotion
            ) {
                return;
            }

            if (this.core.settings.autoplay === false) {
                window.clearInterval(this.interval);
                return;
            }

            this.core.next(this.core.settings.autoplaySpeed);
        };

        /**
         * Stops the autoplay.
         * @public
         */
        Autoplay.prototype.stop = function() {
            window.clearInterval(this.interval);
        };

        /**
         * Pauses the autoplay.
         * @public
         */
        Autoplay.prototype.pause = function() {
            window.clearInterval(this.interval);
        };

        /**
         * Destroys the plugin.
         */
        Autoplay.prototype.destroy = function() {
            var handler, property;

            window.clearInterval(this.interval);

            for (handler in this.handlers) {
                this.core.$element.off(handler, this.handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != "function" && (this[property] = null);
            }
        };

        $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;
    })(window.Zepto || window.jQuery, window, document);

    /**
     * Navigation Plugin
     * @version 2.0.0
     * @author Artus Kolanowski
     * @license The MIT License (MIT)
     */
    (function($, window, document, undefined) {
        "use strict";
        /**
         * Creates the navigation plugin.
         * @class The Navigation Plugin
         * @param {Owl} carousel - The Owl Carousel.
         */
        var Navigation = function(carousel) {
            /**
             * Reference to the core.
             * @protected
             * @type {Owl}
             */
            this._core = carousel;

            /**
             * Indicates whether the plugin is initialized or not.
             * @protected
             * @type {Boolean}
             */
            this._initialized = false;

            /**
             * The current paging indexes.
             * @protected
             * @type {Array}
             */
            this._pages = [];

            /**
             * All DOM elements of the user interface.
             * @protected
             * @type {Object}
             */
            this._controls = {};

            /**
             * Markup for an indicator.
             * @protected
             * @type {Array.<String>}
             */
            this._templates = [];

            /**
             * The carousel element.
             * @type {jQuery}
             */
            this.$element = this._core.$element;

            /**
             * Overridden methods of the carousel.
             * @protected
             * @type {Object}
             */
            this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to,
            };

            /**
             * All event handlers.
             * @protected
             * @type {Object}
             */
            this._handlers = {
                "prepared.owl.carousel": $.proxy(function(e) {
                    if (this._core.settings.dotsData) {
                        this._templates.push(
                            $(e.content)
                            .find("[data-dot]")
                            .andSelf("[data-dot]")
                            .attr("data-dot")
                        );
                    }
                }, this),
                "add.owl.carousel": $.proxy(function(e) {
                    if (this._core.settings.dotsData) {
                        this._templates.splice(
                            e.position,
                            0,
                            $(e.content)
                            .find("[data-dot]")
                            .andSelf("[data-dot]")
                            .attr("data-dot")
                        );
                    }
                }, this),
                "remove.owl.carousel prepared.owl.carousel": $.proxy(function(e) {
                    if (this._core.settings.dotsData) {
                        this._templates.splice(e.position, 1);
                    }
                }, this),
                "change.owl.carousel": $.proxy(function(e) {
                    if (e.property.name == "position") {
                        if (!this._core.state.revert &&
                            !this._core.settings.loop &&
                            this._core.settings.navRewind
                        ) {
                            var current = this._core.current(),
                                maximum = this._core.maximum(),
                                minimum = this._core.minimum();
                            e.data =
                                e.property.value > maximum ?
                                current >= maximum ?
                                minimum :
                                maximum :
                                e.property.value < minimum ?
                                maximum :
                                e.property.value;
                        }
                    }
                }, this),
                "changed.owl.carousel": $.proxy(function(e) {
                    if (e.property.name == "position") {
                        this.draw();
                    }
                }, this),
                "refreshed.owl.carousel": $.proxy(function() {
                    if (!this._initialized) {
                        this.initialize();
                        this._initialized = true;
                    }
                    this._core.trigger("refresh", null, "navigation");
                    this.update();
                    this.draw();
                    this._core.trigger("refreshed", null, "navigation");
                }, this),
            };

            // set default options
            this._core.options = $.extend({},
                Navigation.Defaults,
                this._core.options
            );

            // register event handlers
            this.$element.on(this._handlers);
        };

        /**
         * Default options.
         * @public
         * @todo Rename `slideBy` to `navBy`
         */
        Navigation.Defaults = {
            nav: false,
            navRewind: true,
            navText: ["prev", "next"],
            navSpeed: false,
            navElement: "div",
            navContainer: false,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: true,
            dotsEach: false,
            dotData: false,
            dotsSpeed: false,
            dotsContainer: false,
            controlsClass: "owl-controls",
        };

        /**
         * Initializes the layout of the plugin and extends the carousel.
         * @protected
         */
        Navigation.prototype.initialize = function() {
            var $container,
                override,
                options = this._core.settings;

            // create the indicator template
            if (!options.dotsData) {
                this._templates = [
                    $("<div>")
                    .addClass(options.dotClass)
                    .append($("<span>"))
                    .prop("outerHTML"),
                ];
            }

            // create controls container if needed
            if (!options.navContainer || !options.dotsContainer) {
                this._controls.$container = $("<div>")
                    .addClass(options.controlsClass)
                    .appendTo(this.$element);
            }

            // create DOM structure for absolute navigation
            this._controls.$indicators = options.dotsContainer ?
                $(options.dotsContainer) :
                $("<div>")
                .hide()
                .addClass(options.dotsClass)
                .appendTo(this._controls.$container);

            this._controls.$indicators.on(
                "click",
                "div",
                $.proxy(function(e) {
                    var index = $(e.target).parent().is(this._controls.$indicators) ?
                        $(e.target).index() :
                        $(e.target).parent().index();

                    e.preventDefault();

                    this.to(index, options.dotsSpeed);
                }, this)
            );

            // create DOM structure for relative navigation
            $container = options.navContainer ?
                $(options.navContainer) :
                $("<div>")
                .addClass(options.navContainerClass)
                .prependTo(this._controls.$container);

            this._controls.$next = $("<" + options.navElement + ">");
            this._controls.$previous = this._controls.$next.clone();

            this._controls.$previous
                .addClass(options.navClass[0])
                .html(options.navText[0])
                .hide()
                .prependTo($container)
                .on(
                    "click",
                    $.proxy(function(e) {
                        this.prev(options.navSpeed);
                    }, this)
                );
            this._controls.$next
                .addClass(options.navClass[1])
                .html(options.navText[1])
                .hide()
                .appendTo($container)
                .on(
                    "click",
                    $.proxy(function(e) {
                        this.next(options.navSpeed);
                    }, this)
                );

            // override public methods of the carousel
            for (override in this._overrides) {
                this._core[override] = $.proxy(this[override], this);
            }
        };

        /**
         * Destroys the plugin.
         * @protected
         */
        Navigation.prototype.destroy = function() {
            var handler, control, property, override;

            for (handler in this._handlers) {
                this.$element.off(handler, this._handlers[handler]);
            }
            for (control in this._controls) {
                this._controls[control].remove();
            }
            for (override in this.overides) {
                this._core[override] = this._overrides[override];
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != "function" && (this[property] = null);
            }
        };

        /**
         * Updates the internal state.
         * @protected
         */
        Navigation.prototype.update = function() {
            var i,
                j,
                k,
                options = this._core.settings,
                lower = this._core.clones().length / 2,
                upper = lower + this._core.items().length,
                size =
                options.center || options.autoWidth || options.dotData ?
                1 :
                options.dotsEach || options.items;

            if (options.slideBy !== "page") {
                options.slideBy = Math.min(options.slideBy, options.items);
            }

            if (options.dots || options.slideBy == "page") {
                this._pages = [];

                for (i = lower, j = 0, k = 0; i < upper; i++) {
                    if (j >= size || j === 0) {
                        this._pages.push({
                            start: i - lower,
                            end: i - lower + size - 1,
                        });
                        (j = 0), ++k;
                    }
                    j += this._core.mergers(this._core.relative(i));
                }
            }
        };

        /**
         * Draws the user interface.
         * @todo The option `dotData` wont work.
         * @protected
         */
        Navigation.prototype.draw = function() {
            var difference,
                i,
                html = "",
                options = this._core.settings,
                $items = this._core.$stage.children(),
                index = this._core.relative(this._core.current());

            if (options.nav && !options.loop && !options.navRewind) {
                this._controls.$previous.toggleClass("disabled", index <= 0);
                this._controls.$next.toggleClass(
                    "disabled",
                    index >= this._core.maximum()
                );
            }

            this._controls.$previous.toggle(options.nav);
            this._controls.$next.toggle(options.nav);

            if (options.dots) {
                difference =
                    this._pages.length - this._controls.$indicators.children().length;

                if (options.dotData && difference !== 0) {
                    for (i = 0; i < this._controls.$indicators.children().length; i++) {
                        html += this._templates[this._core.relative(i)];
                    }
                    this._controls.$indicators.html(html);
                } else if (difference > 0) {
                    html = new Array(difference + 1).join(this._templates[0]);
                    this._controls.$indicators.append(html);
                } else if (difference < 0) {
                    this._controls.$indicators.children().slice(difference).remove();
                }

                this._controls.$indicators.find(".active").removeClass("active");
                this._controls.$indicators
                    .children()
                    .eq($.inArray(this.current(), this._pages))
                    .addClass("active");
            }

            this._controls.$indicators.toggle(options.dots);
        };

        /**
         * Extends event data.
         * @protected
         * @param {Event} event - The event object which gets thrown.
         */
        Navigation.prototype.onTrigger = function(event) {
            var settings = this._core.settings;

            event.page = {
                index: $.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: settings &&
                    (settings.center || settings.autoWidth || settings.dotData ?
                        1 :
                        settings.dotsEach || settings.items),
            };
        };

        /**
         * Gets the current page position of the carousel.
         * @protected
         * @returns {Number}
         */
        Navigation.prototype.current = function() {
            var index = this._core.relative(this._core.current());
            return $.grep(this._pages, function(o) {
                return o.start <= index && o.end >= index;
            }).pop();
        };

        /**
         * Gets the current succesor/predecessor position.
         * @protected
         * @returns {Number}
         */
        Navigation.prototype.getPosition = function(successor) {
            var position,
                length,
                options = this._core.settings;

            if (options.slideBy == "page") {
                position = $.inArray(this.current(), this._pages);
                length = this._pages.length;
                successor ? ++position : --position;
                position = this._pages[((position % length) + length) % length].start;
            } else {
                position = this._core.relative(this._core.current());
                length = this._core.items().length;
                successor
                    ?
                    (position += options.slideBy) :
                    (position -= options.slideBy);
            }
            return position;
        };

        /**
         * Slides to the next item or page.
         * @public
         * @param {Number} [speed=false] - The time in milliseconds for the transition.
         */
        Navigation.prototype.next = function(speed) {
            $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
        };

        /**
         * Slides to the previous item or page.
         * @public
         * @param {Number} [speed=false] - The time in milliseconds for the transition.
         */
        Navigation.prototype.prev = function(speed) {
            $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
        };

        /**
         * Slides to the specified item or page.
         * @public
         * @param {Number} position - The position of the item or page.
         * @param {Number} [speed] - The time in milliseconds for the transition.
         * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
         */
        Navigation.prototype.to = function(position, speed, standard) {
            var length;

            if (!standard) {
                length = this._pages.length;
                $.proxy(this._overrides.to, this._core)(
                    this._pages[((position % length) + length) % length].start,
                    speed
                );
            } else {
                $.proxy(this._overrides.to, this._core)(position, speed);
            }
        };

        $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;
    })(window.Zepto || window.jQuery, window, document);

    /**
     * Hash Plugin
     * @version 2.0.0
     * @author Artus Kolanowski
     * @license The MIT License (MIT)
     */
    (function($, window, document, undefined) {
        "use strict";
        var Hash = function(carousel) {
            this._core = carousel;
            this._hashes = {};
            this.$element = this._core.$element;
            this._handlers = {
                "initialized.owl.carousel": $.proxy(function() {
                    if (this._core.settings.startPosition == "URLHash") {
                        $(window).trigger("hashchange.owl.navigation");
                    }
                }, this),
                "prepared.owl.carousel": $.proxy(function(e) {
                    var hash = $(e.content)
                        .find("[data-hash]")
                        .andSelf("[data-hash]")
                        .attr("data-hash");
                    this._hashes[hash] = e.content;
                }, this),
            };
            this._core.options = $.extend({}, Hash.Defaults, this._core.options);
            this.$element.on(this._handlers);
            $(window).on(
                "hashchange.owl.navigation",
                $.proxy(function() {
                    var hash = window.location.hash.substring(1),
                        items = this._core.$stage.children(),
                        position =
                        (this._hashes[hash] && items.index(this._hashes[hash])) || 0;
                    if (!hash) {
                        return !1;
                    }
                    this._core.to(position, !1, !0);
                }, this)
            );
        };
        Hash.Defaults = { URLhashListener: !1 };
        Hash.prototype.destroy = function() {
            var handler, property;
            $(window).off("hashchange.owl.navigation");
            for (handler in this._handlers) {
                this._core.$element.off(handler, this._handlers[handler]);
            }
            for (property in Object.getOwnPropertyNames(this)) {
                typeof this[property] != "function" && (this[property] = null);
            }
        };
        $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;
    })(window.Zepto || window.jQuery, window, document);
} catch (e) {
    console.error("An error has occurred: " + e.stack);
}
/* https://mrrk.ru/wp-content/themes/industrial/js/jquery.min.js */
try {
    /*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
    !(function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ?
            (module.exports = a.document ?
                b(a, !0) :
                function(a) {
                    if (!a.document)
                        throw new Error("jQuery requires a window with a document");
                    return b(a);
                }) :
            b(a);
    })("undefined" != typeof window ? window : this, function(a, b) {
        var c = [],
            d = c.slice,
            e = c.concat,
            f = c.push,
            g = c.indexOf,
            h = {},
            i = h.toString,
            j = h.hasOwnProperty,
            k = {},
            l = a.document,
            m = "2.1.4",
            n = function(a, b) {
                return new n.fn.init(a, b);
            },
            o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            p = /^-ms-/,
            q = /-([\da-z])/gi,
            r = function(a, b) {
                return b.toUpperCase();
            };
        (n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return d.call(this);
            },
            get: function(a) {
                return null != a ?
                    0 > a ?
                    this[a + this.length] :
                    this[a] :
                    d.call(this);
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return (b.prevObject = this), (b.context = this.context), b;
            },
            each: function(a, b) {
                return n.each(this, a, b);
            },
            map: function(a) {
                return this.pushStack(
                    n.map(this, function(b, c) {
                        return a.call(b, c, b);
                    })
                );
            },
            slice: function() {
                return this.pushStack(d.apply(this, arguments));
            },
            first: function() {
                return this.eq(0);
            },
            last: function() {
                return this.eq(-1);
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
            },
            end: function() {
                return this.prevObject || this.constructor(null);
            },
            push: f,
            sort: c.sort,
            splice: c.splice,
        }),
        (n.extend = n.fn.extend =
            function() {
                var a,
                    b,
                    c,
                    d,
                    e,
                    f,
                    g = arguments[0] || {},
                    h = 1,
                    i = arguments.length,
                    j = !1;
                for (
                    "boolean" == typeof g && ((j = g), (g = arguments[h] || {}), h++),
                    "object" == typeof g || n.isFunction(g) || (g = {}),
                    h === i && ((g = this), h--); i > h; h++
                )
                    if (null != (a = arguments[h]))
                        for (b in a)
                            (c = g[b]),
                            (d = a[b]),
                            g !== d &&
                            (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ?
                                (e ?
                                    ((e = !1), (f = c && n.isArray(c) ? c : [])) :
                                    (f = c && n.isPlainObject(c) ? c : {}),
                                    (g[b] = n.extend(j, f, d))) :
                                void 0 !== d && (g[b] = d));
                return g;
            }),
        n.extend({
                expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(a) {
                    throw new Error(a);
                },
                noop: function() {},
                isFunction: function(a) {
                    return "function" === n.type(a);
                },
                isArray: Array.isArray,
                isWindow: function(a) {
                    return null != a && a === a.window;
                },
                isNumeric: function(a) {
                    return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
                },
                isPlainObject: function(a) {
                    return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ?
                        !1 :
                        a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ?
                        !1 :
                        !0;
                },
                isEmptyObject: function(a) {
                    var b;
                    for (b in a) return !1;
                    return !0;
                },
                type: function(a) {
                    return null == a ?
                        a + "" :
                        "object" == typeof a || "function" == typeof a ?
                        h[i.call(a)] || "object" :
                        typeof a;
                },
                globalEval: function(a) {
                    var b,
                        c = eval;
                    (a = n.trim(a)),
                    a &&
                        (1 === a.indexOf("use strict") ?
                            ((b = l.createElement("script")),
                                (b.text = a),
                                l.head.appendChild(b).parentNode.removeChild(b)) :
                            c(a));
                },
                camelCase: function(a) {
                    return a.replace(p, "ms-").replace(q, r);
                },
                nodeName: function(a, b) {
                    return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
                },
                each: function(a, b, c) {
                    var d,
                        e = 0,
                        f = a.length,
                        g = s(a);
                    if (c) {
                        if (g) {
                            for (; f > e; e++)
                                if (((d = b.apply(a[e], c)), d === !1)) break;
                        } else
                            for (e in a)
                                if (((d = b.apply(a[e], c)), d === !1)) break;
                    } else if (g) {
                        for (; f > e; e++)
                            if (((d = b.call(a[e], e, a[e])), d === !1)) break;
                    } else
                        for (e in a)
                            if (((d = b.call(a[e], e, a[e])), d === !1)) break;
                    return a;
                },
                trim: function(a) {
                    return null == a ? "" : (a + "").replace(o, "");
                },
                makeArray: function(a, b) {
                    var c = b || [];
                    return (
                        null != a &&
                        (s(Object(a)) ?
                            n.merge(c, "string" == typeof a ? [a] : a) :
                            f.call(c, a)),
                        c
                    );
                },
                inArray: function(a, b, c) {
                    return null == b ? -1 : g.call(b, a, c);
                },
                merge: function(a, b) {
                    for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                        a[e++] = b[d];
                    return (a.length = e), a;
                },
                grep: function(a, b, c) {
                    for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                        (d = !b(a[f], f)), d !== h && e.push(a[f]);
                    return e;
                },
                map: function(a, b, c) {
                    var d,
                        f = 0,
                        g = a.length,
                        h = s(a),
                        i = [];
                    if (h)
                        for (; g > f; f++)(d = b(a[f], f, c)), null != d && i.push(d);
                    else
                        for (f in a)(d = b(a[f], f, c)), null != d && i.push(d);
                    return e.apply([], i);
                },
                guid: 1,
                proxy: function(a, b) {
                    var c, e, f;
                    return (
                        "string" == typeof b && ((c = a[b]), (b = a), (a = c)),
                        n.isFunction(a) ?
                        ((e = d.call(arguments, 2)),
                            (f = function() {
                                return a.apply(b || this, e.concat(d.call(arguments)));
                            }),
                            (f.guid = a.guid = a.guid || n.guid++),
                            f) :
                        void 0
                    );
                },
                now: Date.now,
                support: k,
            }),
            n.each(
                "Boolean Number String Function Array Date RegExp Object Error".split(
                    " "
                ),
                function(a, b) {
                    h["[object " + b + "]"] = b.toLowerCase();
                }
            );

        function s(a) {
            var b = "length" in a && a.length,
                c = n.type(a);
            return "function" === c || n.isWindow(a) ?
                !1 :
                1 === a.nodeType && b ?
                !0 :
                "array" === c ||
                0 === b ||
                ("number" == typeof b && b > 0 && b - 1 in a);
        }
        var t = (function(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o,
                p,
                q,
                r,
                s,
                t,
                u = "sizzle" + 1 * new Date(),
                v = a.document,
                w = 0,
                x = 0,
                y = ha(),
                z = ha(),
                A = ha(),
                B = function(a, b) {
                    return a === b && (l = !0), 0;
                },
                C = 1 << 31,
                D = {}.hasOwnProperty,
                E = [],
                F = E.pop,
                G = E.push,
                H = E.push,
                I = E.slice,
                J = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1;
                },
                K =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                L = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                N = M.replace("w", "w#"),
                O =
                "\\[" +
                L +
                "*(" +
                M +
                ")(?:" +
                L +
                "*([*^$|!~]?=)" +
                L +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                N +
                "))|)" +
                L +
                "*\\]",
                P =
                ":(" +
                M +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                O +
                ")*)|.*)\\)|)",
                Q = new RegExp(L + "+", "g"),
                R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
                S = new RegExp("^" + L + "*," + L + "*"),
                T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
                U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
                V = new RegExp(P),
                W = new RegExp("^" + N + "$"),
                X = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + O),
                    PSEUDO: new RegExp("^" + P),
                    CHILD: new RegExp(
                        "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                        L +
                        "*(even|odd|(([+-]|)(\\d*)n|)" +
                        L +
                        "*(?:([+-]|)" +
                        L +
                        "*(\\d+)|))" +
                        L +
                        "*\\)|)",
                        "i"
                    ),
                    bool: new RegExp("^(?:" + K + ")$", "i"),
                    needsContext: new RegExp(
                        "^" +
                        L +
                        "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        L +
                        "*((?:-\\d)?\\d*)" +
                        L +
                        "*\\)|)(?=[^-]|$)",
                        "i"
                    ),
                },
                Y = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                $ = /^[^{]+\{\s*\[native \w/,
                _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                aa = /[+~]/,
                ba = /'|\\/g,
                ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
                da = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ?
                        b :
                        0 > d ?
                        String.fromCharCode(d + 65536) :
                        String.fromCharCode((d >> 10) | 55296, (1023 & d) | 56320);
                },
                ea = function() {
                    m();
                };
            try {
                H.apply((E = I.call(v.childNodes)), v.childNodes),
                    E[v.childNodes.length].nodeType;
            } catch (fa) {
                H = {
                    apply: E.length ?

                        function(a, b) {
                            G.apply(a, I.call(b));
                        } :
                        function(a, b) {
                            var c = a.length,
                                d = 0;
                            while ((a[c++] = b[d++]));
                            a.length = c - 1;
                        },
                };
            }

            function ga(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w, x;
                if (
                    ((b ? b.ownerDocument || b : v) !== n && m(b),
                        (b = b || n),
                        (d = d || []),
                        (k = b.nodeType),
                        "string" != typeof a || !a || (1 !== k && 9 !== k && 11 !== k))
                )
                    return d;
                if (!e && p) {
                    if (11 !== k && (f = _.exec(a)))
                        if ((j = f[1])) {
                            if (9 === k) {
                                if (((h = b.getElementById(j)), !h || !h.parentNode)) return d;
                                if (h.id === j) return d.push(h), d;
                            } else if (
                                b.ownerDocument &&
                                (h = b.ownerDocument.getElementById(j)) &&
                                t(b, h) &&
                                h.id === j
                            )
                                return d.push(h), d;
                        } else {
                            if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                            if ((j = f[3]) && c.getElementsByClassName)
                                return H.apply(d, b.getElementsByClassName(j)), d;
                        }
                    if (c.qsa && (!q || !q.test(a))) {
                        if (
                            ((s = r = u),
                                (w = b),
                                (x = 1 !== k && a),
                                1 === k && "object" !== b.nodeName.toLowerCase())
                        ) {
                            (o = g(a)),
                            (r = b.getAttribute("id")) ?
                            (s = r.replace(ba, "\\$&")) :
                            b.setAttribute("id", s),
                                (s = "[id='" + s + "'] "),
                                (l = o.length);
                            while (l--) o[l] = s + ra(o[l]);
                            (w = (aa.test(a) && pa(b.parentNode)) || b), (x = o.join(","));
                        }
                        if (x)
                            try {
                                return H.apply(d, w.querySelectorAll(x)), d;
                            } catch (y) {} finally {
                                r || b.removeAttribute("id");
                            }
                    }
                }
                return i(a.replace(R, "$1"), b, d, e);
            }

            function ha() {
                var a = [];

                function b(c, e) {
                    return (
                        a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                        (b[c + " "] = e)
                    );
                }
                return b;
            }

            function ia(a) {
                return (a[u] = !0), a;
            }

            function ja(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b);
                } catch (c) {
                    return !1;
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), (b = null);
                }
            }

            function ka(a, b) {
                var c = a.split("|"),
                    e = a.length;
                while (e--) d.attrHandle[c[e]] = b;
            }

            function la(a, b) {
                var c = b && a,
                    d =
                    c &&
                    1 === a.nodeType &&
                    1 === b.nodeType &&
                    (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d) return d;
                if (c)
                    while ((c = c.nextSibling))
                        if (c === b) return -1;
                return a ? 1 : -1;
            }

            function ma(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a;
                };
            }

            function na(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a;
                };
            }

            function oa(a) {
                return ia(function(b) {
                    return (
                        (b = +b),
                        ia(function(c, d) {
                            var e,
                                f = a([], c.length, b),
                                g = f.length;
                            while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
                        })
                    );
                });
            }

            function pa(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a;
            }
            (c = ga.support = {}),
            (f = ga.isXML =
                function(a) {
                    var b = a && (a.ownerDocument || a).documentElement;
                    return b ? "HTML" !== b.nodeName : !1;
                }),
            (m = ga.setDocument =
                function(a) {
                    var b,
                        e,
                        g = a ? a.ownerDocument || a : v;
                    return g !== n && 9 === g.nodeType && g.documentElement ?
                        ((n = g),
                            (o = g.documentElement),
                            (e = g.defaultView),
                            e &&
                            e !== e.top &&
                            (e.addEventListener ?
                                e.addEventListener("unload", ea, !1) :
                                e.attachEvent && e.attachEvent("onunload", ea)),
                            (p = !f(g)),
                            (c.attributes = ja(function(a) {
                                return (a.className = "i"), !a.getAttribute("className");
                            })),
                            (c.getElementsByTagName = ja(function(a) {
                                return (
                                    a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
                                );
                            })),
                            (c.getElementsByClassName = $.test(g.getElementsByClassName)),
                            (c.getById = ja(function(a) {
                                return (
                                    (o.appendChild(a).id = u), !g.getElementsByName || !g.getElementsByName(u).length
                                );
                            })),
                            c.getById ?
                            ((d.find.ID = function(a, b) {
                                    if ("undefined" != typeof b.getElementById && p) {
                                        var c = b.getElementById(a);
                                        return c && c.parentNode ? [c] : [];
                                    }
                                }),
                                (d.filter.ID = function(a) {
                                    var b = a.replace(ca, da);
                                    return function(a) {
                                        return a.getAttribute("id") === b;
                                    };
                                })) :
                            (delete d.find.ID,
                                (d.filter.ID = function(a) {
                                    var b = a.replace(ca, da);
                                    return function(a) {
                                        var c =
                                            "undefined" != typeof a.getAttributeNode &&
                                            a.getAttributeNode("id");
                                        return c && c.value === b;
                                    };
                                })),
                            (d.find.TAG = c.getElementsByTagName ?

                                function(a, b) {
                                    return "undefined" != typeof b.getElementsByTagName ?
                                        b.getElementsByTagName(a) :
                                        c.qsa ?
                                        b.querySelectorAll(a) :
                                        void 0;
                                } :
                                function(a, b) {
                                    var c,
                                        d = [],
                                        e = 0,
                                        f = b.getElementsByTagName(a);
                                    if ("*" === a) {
                                        while ((c = f[e++])) 1 === c.nodeType && d.push(c);
                                        return d;
                                    }
                                    return f;
                                }),
                            (d.find.CLASS =
                                c.getElementsByClassName &&
                                function(a, b) {
                                    return p ? b.getElementsByClassName(a) : void 0;
                                }),
                            (r = []),
                            (q = []),
                            (c.qsa = $.test(g.querySelectorAll)) &&
                            (ja(function(a) {
                                    (o.appendChild(a).innerHTML =
                                        "<a id='" +
                                        u +
                                        "'></a><select id='" +
                                        u +
                                        "-\f]' msallowcapture=''><option selected=''></option></select>"),
                                    a.querySelectorAll("[msallowcapture^='']").length &&
                                        q.push("[*^$]=" + L + "*(?:''|\"\")"),
                                        a.querySelectorAll("[selected]").length ||
                                        q.push("\\[" + L + "*(?:value|" + K + ")"),
                                        a.querySelectorAll("[id~=" + u + "-]").length ||
                                        q.push("~="),
                                        a.querySelectorAll(":checked").length ||
                                        q.push(":checked"),
                                        a.querySelectorAll("a#" + u + "+*").length ||
                                        q.push(".#.+[+~]");
                                }),
                                ja(function(a) {
                                    var b = g.createElement("input");
                                    b.setAttribute("type", "hidden"),
                                        a.appendChild(b).setAttribute("name", "D"),
                                        a.querySelectorAll("[name=d]").length &&
                                        q.push("name" + L + "*[*^$|!~]?="),
                                        a.querySelectorAll(":enabled").length ||
                                        q.push(":enabled", ":disabled"),
                                        a.querySelectorAll("*,:x"),
                                        q.push(",.*:");
                                })),
                            (c.matchesSelector = $.test(
                                (s =
                                    o.matches ||
                                    o.webkitMatchesSelector ||
                                    o.mozMatchesSelector ||
                                    o.oMatchesSelector ||
                                    o.msMatchesSelector)
                            )) &&
                            ja(function(a) {
                                (c.disconnectedMatch = s.call(a, "div")),
                                s.call(a, "[s!='']:x"),
                                    r.push("!=", P);
                            }),
                            (q = q.length && new RegExp(q.join("|"))),
                            (r = r.length && new RegExp(r.join("|"))),
                            (b = $.test(o.compareDocumentPosition)),
                            (t =
                                b || $.test(o.contains) ?

                                function(a, b) {
                                    var c = 9 === a.nodeType ? a.documentElement : a,
                                        d = b && b.parentNode;
                                    return (
                                        a === d ||
                                        !(!d ||
                                            1 !== d.nodeType ||
                                            !(c.contains ?
                                                c.contains(d) :
                                                a.compareDocumentPosition &&
                                                16 & a.compareDocumentPosition(d))
                                        )
                                    );
                                } :
                                function(a, b) {
                                    if (b)
                                        while ((b = b.parentNode))
                                            if (b === a) return !0;
                                    return !1;
                                }),
                            (B = b ?

                                function(a, b) {
                                    if (a === b) return (l = !0), 0;
                                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                                    return d ?
                                        d :
                                        ((d =
                                                (a.ownerDocument || a) === (b.ownerDocument || b) ?
                                                a.compareDocumentPosition(b) :
                                                1),
                                            1 & d ||
                                            (!c.sortDetached &&
                                                b.compareDocumentPosition(a) === d) ?
                                            a === g || (a.ownerDocument === v && t(v, a)) ?
                                            -1 :
                                            b === g || (b.ownerDocument === v && t(v, b)) ?
                                            1 :
                                            k ?
                                            J(k, a) - J(k, b) :
                                            0 :
                                            4 & d ?
                                            -1 :
                                            1);
                                } :
                                function(a, b) {
                                    if (a === b) return (l = !0), 0;
                                    var c,
                                        d = 0,
                                        e = a.parentNode,
                                        f = b.parentNode,
                                        h = [a],
                                        i = [b];
                                    if (!e || !f)
                                        return a === g ?
                                            -1 :
                                            b === g ?
                                            1 :
                                            e ?
                                            -1 :
                                            f ?
                                            1 :
                                            k ?
                                            J(k, a) - J(k, b) :
                                            0;
                                    if (e === f) return la(a, b);
                                    c = a;
                                    while ((c = c.parentNode)) h.unshift(c);
                                    c = b;
                                    while ((c = c.parentNode)) i.unshift(c);
                                    while (h[d] === i[d]) d++;
                                    return d ?
                                        la(h[d], i[d]) :
                                        h[d] === v ?
                                        -1 :
                                        i[d] === v ?
                                        1 :
                                        0;
                                }),
                            g) :
                        n;
                }),
            (ga.matches = function(a, b) {
                return ga(a, null, null, b);
            }),
            (ga.matchesSelector = function(a, b) {
                if (
                    ((a.ownerDocument || a) !== n && m(a),
                        (b = b.replace(U, "='$1']")), !(!c.matchesSelector || !p || (r && r.test(b)) || (q && q.test(b))))
                )
                    try {
                        var d = s.call(a, b);
                        if (
                            d ||
                            c.disconnectedMatch ||
                            (a.document && 11 !== a.document.nodeType)
                        )
                            return d;
                    } catch (e) {}
                return ga(b, n, null, [a]).length > 0;
            }),
            (ga.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b);
            }),
            (ga.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f =
                    e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ?
                    f :
                    c.attributes || !p ?
                    a.getAttribute(b) :
                    (f = a.getAttributeNode(b)) && f.specified ?
                    f.value :
                    null;
            }),
            (ga.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a);
            }),
            (ga.uniqueSort = function(a) {
                var b,
                    d = [],
                    e = 0,
                    f = 0;
                if (
                    ((l = !c.detectDuplicates),
                        (k = !c.sortStable && a.slice(0)),
                        a.sort(B),
                        l)
                ) {
                    while ((b = a[f++])) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1);
                }
                return (k = null), a;
            }),
            (e = ga.getText =
                function(a) {
                    var b,
                        c = "",
                        d = 0,
                        f = a.nodeType;
                    if (f) {
                        if (1 === f || 9 === f || 11 === f) {
                            if ("string" == typeof a.textContent) return a.textContent;
                            for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                        } else if (3 === f || 4 === f) return a.nodeValue;
                    } else
                        while ((b = a[d++])) c += e(b);
                    return c;
                }),
            (d = ga.selectors = {
                cacheLength: 50,
                createPseudo: ia,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": { dir: "parentNode", first: !0 },
                    " ": { dir: "parentNode" },
                    "+": { dir: "previousSibling", first: !0 },
                    "~": { dir: "previousSibling" },
                },
                preFilter: {
                    ATTR: function(a) {
                        return (
                            (a[1] = a[1].replace(ca, da)),
                            (a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da)),
                            "~=" === a[2] && (a[3] = " " + a[3] + " "),
                            a.slice(0, 4)
                        );
                    },
                    CHILD: function(a) {
                        return (
                            (a[1] = a[1].toLowerCase()),
                            "nth" === a[1].slice(0, 3) ?
                            (a[3] || ga.error(a[0]),
                                (a[4] = +(a[4] ?
                                    a[5] + (a[6] || 1) :
                                    2 * ("even" === a[3] || "odd" === a[3]))),
                                (a[5] = +(a[7] + a[8] || "odd" === a[3]))) :
                            a[3] && ga.error(a[0]),
                            a
                        );
                    },
                    PSEUDO: function(a) {
                        var b,
                            c = !a[6] && a[2];
                        return X.CHILD.test(a[0]) ?
                            null :
                            (a[3] ?
                                (a[2] = a[4] || a[5] || "") :
                                c &&
                                V.test(c) &&
                                (b = g(c, !0)) &&
                                (b = c.indexOf(")", c.length - b) - c.length) &&
                                ((a[0] = a[0].slice(0, b)), (a[2] = c.slice(0, b))),
                                a.slice(0, 3));
                    },
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(ca, da).toLowerCase();
                        return "*" === a ?

                            function() {
                                return !0;
                            } :
                            function(a) {
                                return a.nodeName && a.nodeName.toLowerCase() === b;
                            };
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return (
                            b ||
                            ((b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) &&
                                y(a, function(a) {
                                    return b.test(
                                        ("string" == typeof a.className && a.className) ||
                                        ("undefined" != typeof a.getAttribute &&
                                            a.getAttribute("class")) ||
                                        ""
                                    );
                                }))
                        );
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = ga.attr(d, a);
                            return null == e ?
                                "!=" === b :
                                b ?
                                ((e += ""),
                                    "=" === b ?
                                    e === c :
                                    "!=" === b ?
                                    e !== c :
                                    "^=" === b ?
                                    c && 0 === e.indexOf(c) :
                                    "*=" === b ?
                                    c && e.indexOf(c) > -1 :
                                    "$=" === b ?
                                    c && e.slice(-c.length) === c :
                                    "~=" === b ?
                                    (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 :
                                    "|=" === b ?
                                    e === c || e.slice(0, c.length + 1) === c + "-" :
                                    !1) :
                                !0;
                        };
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ?

                            function(a) {
                                return !!a.parentNode;
                            } :
                            function(b, c, i) {
                                var j,
                                    k,
                                    l,
                                    m,
                                    n,
                                    o,
                                    p = f !== g ? "nextSibling" : "previousSibling",
                                    q = b.parentNode,
                                    r = h && b.nodeName.toLowerCase(),
                                    s = !i && !h;
                                if (q) {
                                    if (f) {
                                        while (p) {
                                            l = b;
                                            while ((l = l[p]))
                                                if (
                                                    h ?
                                                    l.nodeName.toLowerCase() === r :
                                                    1 === l.nodeType
                                                )
                                                    return !1;
                                            o = p = "only" === a && !o && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (((o = [g ? q.firstChild : q.lastChild]), g && s)) {
                                        (k = q[u] || (q[u] = {})),
                                        (j = k[a] || []),
                                        (n = j[0] === w && j[1]),
                                        (m = j[0] === w && j[2]),
                                        (l = n && q.childNodes[n]);
                                        while (
                                            (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                                        )
                                            if (1 === l.nodeType && ++m && l === b) {
                                                k[a] = [w, n, m];
                                                break;
                                            }
                                    } else if (
                                        s &&
                                        (j = (b[u] || (b[u] = {}))[a]) &&
                                        j[0] === w
                                    )
                                        m = j[1];
                                    else
                                        while (
                                            (l = (++n && l && l[p]) || (m = n = 0) || o.pop())
                                        )
                                            if (
                                                (h ?
                                                    l.nodeName.toLowerCase() === r :
                                                    1 === l.nodeType) &&
                                                ++m &&
                                                (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                                    l === b)
                                            )
                                                break;
                                    return (m -= e), m === d || (m % d === 0 && m / d >= 0);
                                }
                            };
                    },
                    PSEUDO: function(a, b) {
                        var c,
                            e =
                            d.pseudos[a] ||
                            d.setFilters[a.toLowerCase()] ||
                            ga.error("unsupported pseudo: " + a);
                        return e[u] ?
                            e(b) :
                            e.length > 1 ?
                            ((c = [a, a, "", b]),
                                d.setFilters.hasOwnProperty(a.toLowerCase()) ?
                                ia(function(a, c) {
                                    var d,
                                        f = e(a, b),
                                        g = f.length;
                                    while (g--)(d = J(a, f[g])), (a[d] = !(c[d] = f[g]));
                                }) :
                                function(a) {
                                    return e(a, 0, c);
                                }) :
                            e;
                    },
                },
                pseudos: {
                    not: ia(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(R, "$1"));
                        return d[u] ?
                            ia(function(a, b, c, e) {
                                var f,
                                    g = d(a, null, e, []),
                                    h = a.length;
                                while (h--)(f = g[h]) && (a[h] = !(b[h] = f));
                            }) :
                            function(a, e, f) {
                                return (
                                    (b[0] = a), d(b, null, f, c), (b[0] = null), !c.pop()
                                );
                            };
                    }),
                    has: ia(function(a) {
                        return function(b) {
                            return ga(a, b).length > 0;
                        };
                    }),
                    contains: ia(function(a) {
                        return (
                            (a = a.replace(ca, da)),
                            function(b) {
                                return (
                                    (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                                );
                            }
                        );
                    }),
                    lang: ia(function(a) {
                        return (
                            W.test(a || "") || ga.error("unsupported lang: " + a),
                            (a = a.replace(ca, da).toLowerCase()),
                            function(b) {
                                var c;
                                do
                                    if (
                                        (c = p ?
                                            b.lang :
                                            b.getAttribute("xml:lang") ||
                                            b.getAttribute("lang"))
                                    )
                                        return (
                                            (c = c.toLowerCase()),
                                            c === a || 0 === c.indexOf(a + "-")
                                        );
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1;
                            }
                        );
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id;
                    },
                    root: function(a) {
                        return a === o;
                    },
                    focus: function(a) {
                        return (
                            a === n.activeElement &&
                            (!n.hasFocus || n.hasFocus()) &&
                            !!(a.type || a.href || ~a.tabIndex)
                        );
                    },
                    enabled: function(a) {
                        return a.disabled === !1;
                    },
                    disabled: function(a) {
                        return a.disabled === !0;
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return (
                            ("input" === b && !!a.checked) ||
                            ("option" === b && !!a.selected)
                        );
                    },
                    selected: function(a) {
                        return (
                            a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                        );
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0;
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a);
                    },
                    header: function(a) {
                        return Z.test(a.nodeName);
                    },
                    input: function(a) {
                        return Y.test(a.nodeName);
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return ("input" === b && "button" === a.type) || "button" === b;
                    },
                    text: function(a) {
                        var b;
                        return (
                            "input" === a.nodeName.toLowerCase() &&
                            "text" === a.type &&
                            (null == (b = a.getAttribute("type")) ||
                                "text" === b.toLowerCase())
                        );
                    },
                    first: oa(function() {
                        return [0];
                    }),
                    last: oa(function(a, b) {
                        return [b - 1];
                    }),
                    eq: oa(function(a, b, c) {
                        return [0 > c ? c + b : c];
                    }),
                    even: oa(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    odd: oa(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a;
                    }),
                    lt: oa(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a;
                    }),
                    gt: oa(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a;
                    }),
                },
            }),
            (d.pseudos.nth = d.pseudos.eq);
            for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
                d.pseudos[b] = ma(b);
            for (b in { submit: !0, reset: !0 }) d.pseudos[b] = na(b);

            function qa() {}
            (qa.prototype = d.filters = d.pseudos),
            (d.setFilters = new qa()),
            (g = ga.tokenize =
                function(a, b) {
                    var c,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = z[a + " "];
                    if (k) return b ? 0 : k.slice(0);
                    (h = a), (i = []), (j = d.preFilter);
                    while (h) {
                        (!c || (e = S.exec(h))) &&
                        (e && (h = h.slice(e[0].length) || h), i.push((f = []))),
                        (c = !1),
                        (e = T.exec(h)) &&
                        ((c = e.shift()),
                            f.push({ value: c, type: e[0].replace(R, " ") }),
                            (h = h.slice(c.length)));
                        for (g in d.filter)
                            !(e = X[g].exec(h)) ||
                            (j[g] && !(e = j[g](e))) ||
                            ((c = e.shift()),
                                f.push({ value: c, type: g, matches: e }),
                                (h = h.slice(c.length)));
                        if (!c) break;
                    }
                    return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
                });

            function ra(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d;
            }

            function sa(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = x++;
                return b.first ?

                    function(b, c, f) {
                        while ((b = b[d]))
                            if (1 === b.nodeType || e) return a(b, c, f);
                    } :
                    function(b, c, g) {
                        var h,
                            i,
                            j = [w, f];
                        if (g) {
                            while ((b = b[d]))
                                if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                        } else
                            while ((b = b[d]))
                                if (1 === b.nodeType || e) {
                                    if (
                                        ((i = b[u] || (b[u] = {})),
                                            (h = i[d]) && h[0] === w && h[1] === f)
                                    )
                                        return (j[2] = h[2]);
                                    if (((i[d] = j), (j[2] = a(b, c, g)))) return !0;
                                }
                    };
            }

            function ta(a) {
                return a.length > 1 ?

                    function(b, c, d) {
                        var e = a.length;
                        while (e--)
                            if (!a[e](b, c, d)) return !1;
                        return !0;
                    } :
                    a[0];
            }

            function ua(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
                return c;
            }

            function va(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                    (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g;
            }

            function wa(a, b, c, d, e, f) {
                return (
                    d && !d[u] && (d = wa(d)),
                    e && !e[u] && (e = wa(e, f)),
                    ia(function(f, g, h, i) {
                        var j,
                            k,
                            l,
                            m = [],
                            n = [],
                            o = g.length,
                            p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                            q = !a || (!f && b) ? p : va(p, m, a, h, i),
                            r = c ? (e || (f ? a : o || d) ? [] : g) : q;
                        if ((c && c(q, r, h, i), d)) {
                            (j = va(r, n)), d(j, [], h, i), (k = j.length);
                            while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                        }
                        if (f) {
                            if (e || a) {
                                if (e) {
                                    (j = []), (k = r.length);
                                    while (k--)(l = r[k]) && j.push((q[k] = l));
                                    e(null, (r = []), j, i);
                                }
                                k = r.length;
                                while (k--)
                                    (l = r[k]) &&
                                    (j = e ? J(f, l) : m[k]) > -1 &&
                                    (f[j] = !(g[j] = l));
                            }
                        } else(r = va(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : H.apply(g, r);
                    })
                );
            }

            function xa(a) {
                for (
                    var b,
                        c,
                        e,
                        f = a.length,
                        g = d.relative[a[0].type],
                        h = g || d.relative[" "],
                        i = g ? 1 : 0,
                        k = sa(
                            function(a) {
                                return a === b;
                            },
                            h, !0
                        ),
                        l = sa(
                            function(a) {
                                return J(b, a) > -1;
                            },
                            h, !0
                        ),
                        m = [
                            function(a, c, d) {
                                var e =
                                    (!g && (d || c !== j)) ||
                                    ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                                return (b = null), e;
                            },
                        ]; f > i; i++
                )
                    if ((c = d.relative[a[i].type])) m = [sa(ta(m), c)];
                    else {
                        if (((c = d.filter[a[i].type].apply(null, a[i].matches)), c[u])) {
                            for (e = ++i; f > e; e++)
                                if (d.relative[a[e].type]) break;
                            return wa(
                                i > 1 && ta(m),
                                i > 1 &&
                                ra(
                                    a
                                    .slice(0, i - 1)
                                    .concat({ value: " " === a[i - 2].type ? "*" : "" })
                                ).replace(R, "$1"),
                                c,
                                e > i && xa(a.slice(i, e)),
                                f > e && xa((a = a.slice(e))),
                                f > e && ra(a)
                            );
                        }
                        m.push(c);
                    }
                return ta(m);
            }

            function ya(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function(f, g, h, i, k) {
                        var l,
                            m,
                            o,
                            p = 0,
                            q = "0",
                            r = f && [],
                            s = [],
                            t = j,
                            u = f || (e && d.find.TAG("*", k)),
                            v = (w += null == t ? 1 : Math.random() || 0.1),
                            x = u.length;
                        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                            if (e && l) {
                                m = 0;
                                while ((o = a[m++]))
                                    if (o(l, g, h)) {
                                        i.push(l);
                                        break;
                                    }
                                k && (w = v);
                            }
                            c && ((l = !o && l) && p--, f && r.push(l));
                        }
                        if (((p += q), c && q !== p)) {
                            m = 0;
                            while ((o = b[m++])) o(r, s, g, h);
                            if (f) {
                                if (p > 0)
                                    while (q--) r[q] || s[q] || (s[q] = F.call(i));
                                s = va(s);
                            }
                            H.apply(i, s),
                                k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                        }
                        return k && ((w = v), (j = t)), r;
                    };
                return c ? ia(f) : f;
            }
            return (
                (h = ga.compile =
                    function(a, b) {
                        var c,
                            d = [],
                            e = [],
                            f = A[a + " "];
                        if (!f) {
                            b || (b = g(a)), (c = b.length);
                            while (c--)(f = xa(b[c])), f[u] ? d.push(f) : e.push(f);
                            (f = A(a, ya(e, d))), (f.selector = a);
                        }
                        return f;
                    }),
                (i = ga.select =
                    function(a, b, e, f) {
                        var i,
                            j,
                            k,
                            l,
                            m,
                            n = "function" == typeof a && a,
                            o = !f && g((a = n.selector || a));
                        if (((e = e || []), 1 === o.length)) {
                            if (
                                ((j = o[0] = o[0].slice(0)),
                                    j.length > 2 &&
                                    "ID" === (k = j[0]).type &&
                                    c.getById &&
                                    9 === b.nodeType &&
                                    p &&
                                    d.relative[j[1].type])
                            ) {
                                if (
                                    ((b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0]), !b)
                                )
                                    return e;
                                n && (b = b.parentNode), (a = a.slice(j.shift().value.length));
                            }
                            i = X.needsContext.test(a) ? 0 : j.length;
                            while (i--) {
                                if (((k = j[i]), d.relative[(l = k.type)])) break;
                                if (
                                    (m = d.find[l]) &&
                                    (f = m(
                                        k.matches[0].replace(ca, da),
                                        (aa.test(j[0].type) && pa(b.parentNode)) || b
                                    ))
                                ) {
                                    if ((j.splice(i, 1), (a = f.length && ra(j)), !a))
                                        return H.apply(e, f), e;
                                    break;
                                }
                            }
                        }
                        return (
                            (n || h(a, o))(
                                f,
                                b, !p,
                                e,
                                (aa.test(a) && pa(b.parentNode)) || b
                            ),
                            e
                        );
                    }),
                (c.sortStable = u.split("").sort(B).join("") === u),
                (c.detectDuplicates = !!l),
                m(),
                (c.sortDetached = ja(function(a) {
                    return 1 & a.compareDocumentPosition(n.createElement("div"));
                })),
                ja(function(a) {
                    return (
                        (a.innerHTML = "<a href='#'></a>"),
                        "#" === a.firstChild.getAttribute("href")
                    );
                }) ||
                ka("type|href|height|width", function(a, b, c) {
                    return c ?
                        void 0 :
                        a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
                }),
                (c.attributes &&
                    ja(function(a) {
                        return (
                            (a.innerHTML = "<input/>"),
                            a.firstChild.setAttribute("value", ""),
                            "" === a.firstChild.getAttribute("value")
                        );
                    })) ||
                ka("value", function(a, b, c) {
                    return c || "input" !== a.nodeName.toLowerCase() ?
                        void 0 :
                        a.defaultValue;
                }),
                ja(function(a) {
                    return null == a.getAttribute("disabled");
                }) ||
                ka(K, function(a, b, c) {
                    var d;
                    return c ?
                        void 0 :
                        a[b] === !0 ?
                        b.toLowerCase() :
                        (d = a.getAttributeNode(b)) && d.specified ?
                        d.value :
                        null;
                }),
                ga
            );
        })(a);
        (n.find = t),
        (n.expr = t.selectors),
        (n.expr[":"] = n.expr.pseudos),
        (n.unique = t.uniqueSort),
        (n.text = t.getText),
        (n.isXMLDoc = t.isXML),
        (n.contains = t.contains);
        var u = n.expr.match.needsContext,
            v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            w = /^.[^:#\[\.,]*$/;

        function x(a, b, c) {
            if (n.isFunction(b))
                return n.grep(a, function(a, d) {
                    return !!b.call(a, d, a) !== c;
                });
            if (b.nodeType)
                return n.grep(a, function(a) {
                    return (a === b) !== c;
                });
            if ("string" == typeof b) {
                if (w.test(b)) return n.filter(b, a, c);
                b = n.filter(b, a);
            }
            return n.grep(a, function(a) {
                return g.call(b, a) >= 0 !== c;
            });
        }
        (n.filter = function(a, b, c) {
            var d = b[0];
            return (
                c && (a = ":not(" + a + ")"),
                1 === b.length && 1 === d.nodeType ?
                n.find.matchesSelector(d, a) ?
                [d] :
                [] :
                n.find.matches(
                    a,
                    n.grep(b, function(a) {
                        return 1 === a.nodeType;
                    })
                )
            );
        }),
        n.fn.extend({
            find: function(a) {
                var b,
                    c = this.length,
                    d = [],
                    e = this;
                if ("string" != typeof a)
                    return this.pushStack(
                        n(a).filter(function() {
                            for (b = 0; c > b; b++)
                                if (n.contains(e[b], this)) return !0;
                        })
                    );
                for (b = 0; c > b; b++) n.find(a, e[b], d);
                return (
                    (d = this.pushStack(c > 1 ? n.unique(d) : d)),
                    (d.selector = this.selector ? this.selector + " " + a : a),
                    d
                );
            },
            filter: function(a) {
                return this.pushStack(x(this, a || [], !1));
            },
            not: function(a) {
                return this.pushStack(x(this, a || [], !0));
            },
            is: function(a) {
                return !!x(
                    this,
                    "string" == typeof a && u.test(a) ? n(a) : a || [], !1
                ).length;
            },
        });
        var y,
            z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            A = (n.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (
                        ((c =
                            "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ?
                            [null, a, null] :
                            z.exec(a)), !c || (!c[1] && b))
                    )
                        return !b || b.jquery ?
                            (b || y).find(a) :
                            this.constructor(b).find(a);
                    if (c[1]) {
                        if (
                            ((b = b instanceof n ? b[0] : b),
                                n.merge(
                                    this,
                                    n.parseHTML(
                                        c[1],
                                        b && b.nodeType ? b.ownerDocument || b : l, !0
                                    )
                                ),
                                v.test(c[1]) && n.isPlainObject(b))
                        )
                            for (c in b)
                                n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this;
                    }
                    return (
                        (d = l.getElementById(c[2])),
                        d && d.parentNode && ((this.length = 1), (this[0] = d)),
                        (this.context = l),
                        (this.selector = a),
                        this
                    );
                }
                return a.nodeType ?
                    ((this.context = this[0] = a), (this.length = 1), this) :
                    n.isFunction(a) ?
                    "undefined" != typeof y.ready ?
                    y.ready(a) :
                    a(n) :
                    (void 0 !== a.selector &&
                        ((this.selector = a.selector), (this.context = a.context)),
                        n.makeArray(a, this));
            });
        (A.prototype = n.fn), (y = n(l));
        var B = /^(?:parents|prev(?:Until|All))/,
            C = { children: !0, contents: !0, next: !0, prev: !0 };
        n.extend({
                dir: function(a, b, c) {
                    var d = [],
                        e = void 0 !== c;
                    while ((a = a[b]) && 9 !== a.nodeType)
                        if (1 === a.nodeType) {
                            if (e && n(a).is(c)) break;
                            d.push(a);
                        }
                    return d;
                },
                sibling: function(a, b) {
                    for (var c = []; a; a = a.nextSibling)
                        1 === a.nodeType && a !== b && c.push(a);
                    return c;
                },
            }),
            n.fn.extend({
                has: function(a) {
                    var b = n(a, this),
                        c = b.length;
                    return this.filter(function() {
                        for (var a = 0; c > a; a++)
                            if (n.contains(this, b[a])) return !0;
                    });
                },
                closest: function(a, b) {
                    for (
                        var c,
                            d = 0,
                            e = this.length,
                            f = [],
                            g =
                            u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++
                    )
                        for (c = this[d]; c && c !== b; c = c.parentNode)
                            if (
                                c.nodeType < 11 &&
                                (g ?
                                    g.index(c) > -1 :
                                    1 === c.nodeType && n.find.matchesSelector(c, a))
                            ) {
                                f.push(c);
                                break;
                            }
                    return this.pushStack(f.length > 1 ? n.unique(f) : f);
                },
                index: function(a) {
                    return a ?
                        "string" == typeof a ?
                        g.call(n(a), this[0]) :
                        g.call(this, a.jquery ? a[0] : a) :
                        this[0] && this[0].parentNode ?
                        this.first().prevAll().length :
                        -1;
                },
                add: function(a, b) {
                    return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
                },
                addBack: function(a) {
                    return this.add(
                        null == a ? this.prevObject : this.prevObject.filter(a)
                    );
                },
            });

        function D(a, b) {
            while ((a = a[b]) && 1 !== a.nodeType);
            return a;
        }
        n.each({
                parent: function(a) {
                    var b = a.parentNode;
                    return b && 11 !== b.nodeType ? b : null;
                },
                parents: function(a) {
                    return n.dir(a, "parentNode");
                },
                parentsUntil: function(a, b, c) {
                    return n.dir(a, "parentNode", c);
                },
                next: function(a) {
                    return D(a, "nextSibling");
                },
                prev: function(a) {
                    return D(a, "previousSibling");
                },
                nextAll: function(a) {
                    return n.dir(a, "nextSibling");
                },
                prevAll: function(a) {
                    return n.dir(a, "previousSibling");
                },
                nextUntil: function(a, b, c) {
                    return n.dir(a, "nextSibling", c);
                },
                prevUntil: function(a, b, c) {
                    return n.dir(a, "previousSibling", c);
                },
                siblings: function(a) {
                    return n.sibling((a.parentNode || {}).firstChild, a);
                },
                children: function(a) {
                    return n.sibling(a.firstChild);
                },
                contents: function(a) {
                    return a.contentDocument || n.merge([], a.childNodes);
                },
            },
            function(a, b) {
                n.fn[a] = function(c, d) {
                    var e = n.map(this, b, c);
                    return (
                        "Until" !== a.slice(-5) && (d = c),
                        d && "string" == typeof d && (e = n.filter(d, e)),
                        this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()),
                        this.pushStack(e)
                    );
                };
            }
        );
        var E = /\S+/g,
            F = {};

        function G(a) {
            var b = (F[a] = {});
            return (
                n.each(a.match(E) || [], function(a, c) {
                    b[c] = !0;
                }),
                b
            );
        }
        (n.Callbacks = function(a) {
            a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
            var b,
                c,
                d,
                e,
                f,
                g,
                h = [],
                i = !a.once && [],
                j = function(l) {
                    for (
                        b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++
                    )
                        if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                            b = !1;
                            break;
                        }
                        (d = !1),
                    h && (i ? i.length && j(i.shift()) : b ? (h = []) : k.disable());
                },
                k = {
                    add: function() {
                        if (h) {
                            var c = h.length;
                            !(function g(b) {
                                n.each(b, function(b, c) {
                                    var d = n.type(c);
                                    "function" === d
                                        ?
                                        (a.unique && k.has(c)) || h.push(c) :
                                        c && c.length && "string" !== d && g(c);
                                });
                            })(arguments),
                            d ? (f = h.length) : b && ((e = c), j(b));
                        }
                        return this;
                    },
                    remove: function() {
                        return (
                            h &&
                            n.each(arguments, function(a, b) {
                                var c;
                                while ((c = n.inArray(b, h, c)) > -1)
                                    h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                            }),
                            this
                        );
                    },
                    has: function(a) {
                        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
                    },
                    empty: function() {
                        return (h = []), (f = 0), this;
                    },
                    disable: function() {
                        return (h = i = b = void 0), this;
                    },
                    disabled: function() {
                        return !h;
                    },
                    lock: function() {
                        return (i = void 0), b || k.disable(), this;
                    },
                    locked: function() {
                        return !i;
                    },
                    fireWith: function(a, b) {
                        return (!h ||
                            (c && !i) ||
                            ((b = b || []),
                                (b = [a, b.slice ? b.slice() : b]),
                                d ? i.push(b) : j(b)),
                            this
                        );
                    },
                    fire: function() {
                        return k.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!c;
                    },
                };
            return k;
        }),
        n.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", n.Callbacks("memory")],
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c;
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this;
                        },
                        then: function() {
                            var a = arguments;
                            return n
                                .Deferred(function(c) {
                                    n.each(b, function(b, f) {
                                            var g = n.isFunction(a[b]) && a[b];
                                            e[f[1]](function() {
                                                var a = g && g.apply(this, arguments);
                                                a && n.isFunction(a.promise) ?
                                                    a
                                                    .promise()
                                                    .done(c.resolve)
                                                    .fail(c.reject)
                                                    .progress(c.notify) :
                                                    c[f[0] + "With"](
                                                        this === d ? c.promise() : this,
                                                        g ? [a] : arguments
                                                    );
                                            });
                                        }),
                                        (a = null);
                                })
                                .promise();
                        },
                        promise: function(a) {
                            return null != a ? n.extend(a, d) : d;
                        },
                    },
                    e = {};
                return (
                    (d.pipe = d.then),
                    n.each(b, function(a, f) {
                        var g = f[2],
                            h = f[3];
                        (d[f[1]] = g.add),
                        h &&
                            g.add(
                                function() {
                                    c = h;
                                },
                                b[1 ^ a][2].disable,
                                b[2][2].lock
                            ),
                            (e[f[0]] = function() {
                                return (
                                    e[f[0] + "With"](this === e ? d : this, arguments), this
                                );
                            }),
                            (e[f[0] + "With"] = g.fireWith);
                    }),
                    d.promise(e),
                    a && a.call(e, e),
                    e
                );
            },
            when: function(a) {
                var b = 0,
                    c = d.call(arguments),
                    e = c.length,
                    f = 1 !== e || (a && n.isFunction(a.promise)) ? e : 0,
                    g = 1 === f ? a : n.Deferred(),
                    h = function(a, b, c) {
                        return function(e) {
                            (b[a] = this),
                            (c[a] = arguments.length > 1 ? d.call(arguments) : e),
                            c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                        };
                    },
                    i,
                    j,
                    k;
                if (e > 1)
                    for (
                        i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++
                    )
                        c[b] && n.isFunction(c[b].promise) ?
                        c[b]
                        .promise()
                        .done(h(b, k, c))
                        .fail(g.reject)
                        .progress(h(b, j, i)) :
                        --f;
                return f || g.resolveWith(k, c), g.promise();
            },
        });
        var H;
        (n.fn.ready = function(a) {
            return n.ready.promise().done(a), this;
        }),
        n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? n.readyWait++ : n.ready(!0);
            },
            ready: function(a) {
                (a === !0 ? --n.readyWait : n.isReady) ||
                ((n.isReady = !0),
                    (a !== !0 && --n.readyWait > 0) ||
                    (H.resolveWith(l, [n]),
                        n.fn.triggerHandler &&
                        (n(l).triggerHandler("ready"), n(l).off("ready"))));
            },
        });

        function I() {
            l.removeEventListener("DOMContentLoaded", I, !1),
                a.removeEventListener("load", I, !1),
                n.ready();
        }
        (n.ready.promise = function(b) {
            return (
                H ||
                ((H = n.Deferred()),
                    "complete" === l.readyState ?
                    setTimeout(n.ready) :
                    (l.addEventListener("DOMContentLoaded", I, !1),
                        a.addEventListener("load", I, !1))),
                H.promise(b)
            );
        }),
        n.ready.promise();
        var J = (n.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) n.access(a, b, h, c[h], !0, f, g);
            } else if (
                void 0 !== d &&
                ((e = !0),
                    n.isFunction(d) || (g = !0),
                    j &&
                    (g ?
                        (b.call(a, d), (b = null)) :
                        ((j = b),
                            (b = function(a, b, c) {
                                return j.call(n(a), c);
                            }))),
                    b)
            )
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
        });
        n.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
        };

        function K() {
            Object.defineProperty((this.cache = {}), 0, {
                    get: function() {
                        return {};
                    },
                }),
                (this.expando = n.expando + K.uid++);
        }
        (K.uid = 1),
        (K.accepts = n.acceptData),
        (K.prototype = {
            key: function(a) {
                if (!K.accepts(a)) return 0;
                var b = {},
                    c = a[this.expando];
                if (!c) {
                    c = K.uid++;
                    try {
                        (b[this.expando] = { value: c }), Object.defineProperties(a, b);
                    } catch (d) {
                        (b[this.expando] = c), n.extend(a, b);
                    }
                }
                return this.cache[c] || (this.cache[c] = {}), c;
            },
            set: function(a, b, c) {
                var d,
                    e = this.key(a),
                    f = this.cache[e];
                if ("string" == typeof b) f[b] = c;
                else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);
                else
                    for (d in b) f[d] = b[d];
                return f;
            },
            get: function(a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b];
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || (b && "string" == typeof b && void 0 === c) ?
                    ((d = this.get(a, b)),
                        void 0 !== d ? d : this.get(a, n.camelCase(b))) :
                    (this.set(a, b, c), void 0 !== c ? c : b);
            },
            remove: function(a, b) {
                var c,
                    d,
                    e,
                    f = this.key(a),
                    g = this.cache[f];
                if (void 0 === b) this.cache[f] = {};
                else {
                    n.isArray(b) ?
                        (d = b.concat(b.map(n.camelCase))) :
                        ((e = n.camelCase(b)),
                            b in g ?
                            (d = [b, e]) :
                            ((d = e), (d = d in g ? [d] : d.match(E) || []))),
                        (c = d.length);
                    while (c--) delete g[d[c]];
                }
            },
            hasData: function(a) {
                return !n.isEmptyObject(this.cache[a[this.expando]] || {});
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]];
            },
        });
        var L = new K(),
            M = new K(),
            N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            O = /([A-Z])/g;

        function P(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (
                    ((d = "data-" + b.replace(O, "-$1").toLowerCase()),
                        (c = a.getAttribute(d)),
                        "string" == typeof c)
                ) {
                    try {
                        c =
                            "true" === c ?
                            !0 :
                            "false" === c ?
                            !1 :
                            "null" === c ?
                            null :
                            +c + "" === c ?
                            +c :
                            N.test(c) ?
                            n.parseJSON(c) :
                            c;
                    } catch (e) {}
                    M.set(a, b, c);
                } else c = void 0;
            return c;
        }
        n.extend({
                hasData: function(a) {
                    return M.hasData(a) || L.hasData(a);
                },
                data: function(a, b, c) {
                    return M.access(a, b, c);
                },
                removeData: function(a, b) {
                    M.remove(a, b);
                },
                _data: function(a, b, c) {
                    return L.access(a, b, c);
                },
                _removeData: function(a, b) {
                    L.remove(a, b);
                },
            }),
            n.fn.extend({
                data: function(a, b) {
                    var c,
                        d,
                        e,
                        f = this[0],
                        g = f && f.attributes;
                    if (void 0 === a) {
                        if (
                            this.length &&
                            ((e = M.get(f)), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))
                        ) {
                            c = g.length;
                            while (c--)
                                g[c] &&
                                ((d = g[c].name),
                                    0 === d.indexOf("data-") &&
                                    ((d = n.camelCase(d.slice(5))), P(f, d, e[d])));
                            L.set(f, "hasDataAttrs", !0);
                        }
                        return e;
                    }
                    return "object" == typeof a ?
                        this.each(function() {
                            M.set(this, a);
                        }) :
                        J(
                            this,
                            function(b) {
                                var c,
                                    d = n.camelCase(a);
                                if (f && void 0 === b) {
                                    if (((c = M.get(f, a)), void 0 !== c)) return c;
                                    if (((c = M.get(f, d)), void 0 !== c)) return c;
                                    if (((c = P(f, d, void 0)), void 0 !== c)) return c;
                                } else
                                    this.each(function() {
                                        var c = M.get(this, d);
                                        M.set(this, d, b), -1 !== a.indexOf("-") &&
                                            void 0 !== c &&
                                            M.set(this, a, b);
                                    });
                            },
                            null,
                            b,
                            arguments.length > 1,
                            null, !0
                        );
                },
                removeData: function(a) {
                    return this.each(function() {
                        M.remove(this, a);
                    });
                },
            }),
            n.extend({
                queue: function(a, b, c) {
                    var d;
                    return a ?
                        ((b = (b || "fx") + "queue"),
                            (d = L.get(a, b)),
                            c &&
                            (!d || n.isArray(c) ?
                                (d = L.access(a, b, n.makeArray(c))) :
                                d.push(c)),
                            d || []) :
                        void 0;
                },
                dequeue: function(a, b) {
                    b = b || "fx";
                    var c = n.queue(a, b),
                        d = c.length,
                        e = c.shift(),
                        f = n._queueHooks(a, b),
                        g = function() {
                            n.dequeue(a, b);
                        };
                    "inprogress" === e && ((e = c.shift()), d--),
                        e &&
                        ("fx" === b && c.unshift("inprogress"),
                            delete f.stop,
                            e.call(a, g, f)), !d && f && f.empty.fire();
                },
                _queueHooks: function(a, b) {
                    var c = b + "queueHooks";
                    return (
                        L.get(a, c) ||
                        L.access(a, c, {
                            empty: n.Callbacks("once memory").add(function() {
                                L.remove(a, [b + "queue", c]);
                            }),
                        })
                    );
                },
            }),
            n.fn.extend({
                queue: function(a, b) {
                    var c = 2;
                    return (
                        "string" != typeof a && ((b = a), (a = "fx"), c--),
                        arguments.length < c ?
                        n.queue(this[0], a) :
                        void 0 === b ?
                        this :
                        this.each(function() {
                            var c = n.queue(this, a, b);
                            n._queueHooks(this, a),
                                "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
                        })
                    );
                },
                dequeue: function(a) {
                    return this.each(function() {
                        n.dequeue(this, a);
                    });
                },
                clearQueue: function(a) {
                    return this.queue(a || "fx", []);
                },
                promise: function(a, b) {
                    var c,
                        d = 1,
                        e = n.Deferred(),
                        f = this,
                        g = this.length,
                        h = function() {
                            --d || e.resolveWith(f, [f]);
                        };
                    "string" != typeof a && ((b = a), (a = void 0)), (a = a || "fx");
                    while (g--)
                        (c = L.get(f[g], a + "queueHooks")),
                        c && c.empty && (d++, c.empty.add(h));
                    return h(), e.promise(b);
                },
            });
        var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            R = ["Top", "Right", "Bottom", "Left"],
            S = function(a, b) {
                return (
                    (a = b || a),
                    "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
                );
            },
            T = /^(?:checkbox|radio)$/i;
        !(function() {
            var a = l.createDocumentFragment(),
                b = a.appendChild(l.createElement("div")),
                c = l.createElement("input");
            c.setAttribute("type", "radio"),
                c.setAttribute("checked", "checked"),
                c.setAttribute("name", "t"),
                b.appendChild(c),
                (k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (b.innerHTML = "<textarea>x</textarea>"),
                (k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue);
        })();
        var U = "undefined";
        k.focusinBubbles = "onfocusin" in a;
        var V = /^key/,
            W = /^(?:mouse|pointer|contextmenu)|click/,
            X = /^(?:focusinfocus|focusoutblur)$/,
            Y = /^([^.]*)(?:\.(.+)|)$/;

        function Z() {
            return !0;
        }

        function $() {
            return !1;
        }

        function _() {
            try {
                return l.activeElement;
            } catch (a) {}
        }
        (n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    o,
                    p,
                    q,
                    r = L.get(a);
                if (r) {
                    c.handler && ((f = c), (c = f.handler), (e = f.selector)),
                        c.guid || (c.guid = n.guid++),
                        (i = r.events) || (i = r.events = {}),
                        (g = r.handle) ||
                        (g = r.handle =
                            function(b) {
                                return typeof n !== U && n.event.triggered !== b.type ?
                                    n.event.dispatch.apply(a, arguments) :
                                    void 0;
                            }),
                        (b = (b || "").match(E) || [""]),
                        (j = b.length);
                    while (j--)
                        (h = Y.exec(b[j]) || []),
                        (o = q = h[1]),
                        (p = (h[2] || "").split(".").sort()),
                        o &&
                        ((l = n.event.special[o] || {}),
                            (o = (e ? l.delegateType : l.bindType) || o),
                            (l = n.event.special[o] || {}),
                            (k = n.extend({
                                    type: o,
                                    origType: q,
                                    data: d,
                                    handler: c,
                                    guid: c.guid,
                                    selector: e,
                                    needsContext: e && n.expr.match.needsContext.test(e),
                                    namespace: p.join("."),
                                },
                                f
                            )),
                            (m = i[o]) ||
                            ((m = i[o] = []),
                                (m.delegateCount = 0),
                                (l.setup && l.setup.call(a, d, p, g) !== !1) ||
                                (a.addEventListener && a.addEventListener(o, g, !1))),
                            l.add &&
                            (l.add.call(a, k),
                                k.handler.guid || (k.handler.guid = c.guid)),
                            e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                            (n.event.global[o] = !0));
                }
            },
            remove: function(a, b, c, d, e) {
                var f,
                    g,
                    h,
                    i,
                    j,
                    k,
                    l,
                    m,
                    o,
                    p,
                    q,
                    r = L.hasData(a) && L.get(a);
                if (r && (i = r.events)) {
                    (b = (b || "").match(E) || [""]), (j = b.length);
                    while (j--)
                        if (
                            ((h = Y.exec(b[j]) || []),
                                (o = q = h[1]),
                                (p = (h[2] || "").split(".").sort()),
                                o)
                        ) {
                            (l = n.event.special[o] || {}),
                            (o = (d ? l.delegateType : l.bindType) || o),
                            (m = i[o] || []),
                            (h =
                                h[2] &&
                                new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")),
                            (g = f = m.length);
                            while (f--)
                                (k = m[f]),
                                (!e && q !== k.origType) ||
                                (c && c.guid !== k.guid) ||
                                (h && !h.test(k.namespace)) ||
                                (d && d !== k.selector && ("**" !== d || !k.selector)) ||
                                (m.splice(f, 1),
                                    k.selector && m.delegateCount--,
                                    l.remove && l.remove.call(a, k));
                            g &&
                                !m.length &&
                                ((l.teardown && l.teardown.call(a, p, r.handle) !== !1) ||
                                    n.removeEvent(a, o, r.handle),
                                    delete i[o]);
                        } else
                            for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
                }
            },
            trigger: function(b, c, d, e) {
                var f,
                    g,
                    h,
                    i,
                    k,
                    m,
                    o,
                    p = [d || l],
                    q = j.call(b, "type") ? b.type : b,
                    r = j.call(b, "namespace") ? b.namespace.split(".") : [];
                if (
                    ((g = h = d = d || l),
                        3 !== d.nodeType &&
                        8 !== d.nodeType &&
                        !X.test(q + n.event.triggered) &&
                        (q.indexOf(".") >= 0 &&
                            ((r = q.split(".")), (q = r.shift()), r.sort()),
                            (k = q.indexOf(":") < 0 && "on" + q),
                            (b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b)),
                            (b.isTrigger = e ? 2 : 3),
                            (b.namespace = r.join(".")),
                            (b.namespace_re = b.namespace ?
                                new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                                null),
                            (b.result = void 0),
                            b.target || (b.target = d),
                            (c = null == c ? [b] : n.makeArray(c, [b])),
                            (o = n.event.special[q] || {}),
                            e || !o.trigger || o.trigger.apply(d, c) !== !1))
                ) {
                    if (!e && !o.noBubble && !n.isWindow(d)) {
                        for (
                            i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode
                        )
                            p.push(g), (h = g);
                        h === (d.ownerDocument || l) &&
                            p.push(h.defaultView || h.parentWindow || a);
                    }
                    f = 0;
                    while ((g = p[f++]) && !b.isPropagationStopped())
                        (b.type = f > 1 ? i : o.bindType || q),
                        (m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle")),
                        m && m.apply(g, c),
                        (m = k && g[k]),
                        m &&
                        m.apply &&
                        n.acceptData(g) &&
                        ((b.result = m.apply(g, c)),
                            b.result === !1 && b.preventDefault());
                    return (
                        (b.type = q),
                        e ||
                        b.isDefaultPrevented() ||
                        (o._default && o._default.apply(p.pop(), c) !== !1) ||
                        !n.acceptData(d) ||
                        (k &&
                            n.isFunction(d[q]) &&
                            !n.isWindow(d) &&
                            ((h = d[k]),
                                h && (d[k] = null),
                                (n.event.triggered = q),
                                d[q](),
                                (n.event.triggered = void 0),
                                h && (d[k] = h))),
                        b.result
                    );
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b,
                    c,
                    e,
                    f,
                    g,
                    h = [],
                    i = d.call(arguments),
                    j = (L.get(this, "events") || {})[a.type] || [],
                    k = n.event.special[a.type] || {};
                if (
                    ((i[0] = a),
                        (a.delegateTarget = this), !k.preDispatch || k.preDispatch.call(this, a) !== !1)
                ) {
                    (h = n.event.handlers.call(this, a, j)), (b = 0);
                    while ((f = h[b++]) && !a.isPropagationStopped()) {
                        (a.currentTarget = f.elem), (c = 0);
                        while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                            (!a.namespace_re || a.namespace_re.test(g.namespace)) &&
                            ((a.handleObj = g),
                                (a.data = g.data),
                                (e = (
                                    (n.event.special[g.origType] || {}).handle || g.handler
                                ).apply(f.elem, i)),
                                void 0 !== e &&
                                (a.result = e) === !1 &&
                                (a.preventDefault(), a.stopPropagation()));
                    }
                    return k.postDispatch && k.postDispatch.call(this, a), a.result;
                }
            },
            handlers: function(a, b) {
                var c,
                    d,
                    e,
                    f,
                    g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (i.disabled !== !0 || "click" !== a.type) {
                            for (d = [], c = 0; h > c; c++)
                                (f = b[c]),
                                (e = f.selector + " "),
                                void 0 === d[e] &&
                                (d[e] = f.needsContext ?
                                    n(e, this).index(i) >= 0 :
                                    n.find(e, this, null, [i]).length),
                                d[e] && d.push(f);
                            d.length && g.push({ elem: i, handlers: d });
                        }
                return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
                " "
            ),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return (
                        null == a.which &&
                        (a.which = null != b.charCode ? b.charCode : b.keyCode),
                        a
                    );
                },
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
                    " "
                ),
                filter: function(a, b) {
                    var c,
                        d,
                        e,
                        f = b.button;
                    return (
                        null == a.pageX &&
                        null != b.clientX &&
                        ((c = a.target.ownerDocument || l),
                            (d = c.documentElement),
                            (e = c.body),
                            (a.pageX =
                                b.clientX +
                                ((d && d.scrollLeft) || (e && e.scrollLeft) || 0) -
                                ((d && d.clientLeft) || (e && e.clientLeft) || 0)),
                            (a.pageY =
                                b.clientY +
                                ((d && d.scrollTop) || (e && e.scrollTop) || 0) -
                                ((d && d.clientTop) || (e && e.clientTop) || 0))),
                        a.which ||
                        void 0 === f ||
                        (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                        a
                    );
                },
            },
            fix: function(a) {
                if (a[n.expando]) return a;
                var b,
                    c,
                    d,
                    e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                g ||
                    (this.fixHooks[e] = g =
                        W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
                    (d = g.props ? this.props.concat(g.props) : this.props),
                    (a = new n.Event(f)),
                    (b = d.length);
                while (b--)(c = d[b]), (a[c] = f[c]);
                return (
                    a.target || (a.target = l),
                    3 === a.target.nodeType && (a.target = a.target.parentNode),
                    g.filter ? g.filter(a, f) : a
                );
            },
            special: {
                load: { noBubble: !0 },
                focus: {
                    trigger: function() {
                        return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                    },
                    delegateType: "focusin",
                },
                blur: {
                    trigger: function() {
                        return this === _() && this.blur ? (this.blur(), !1) : void 0;
                    },
                    delegateType: "focusout",
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type &&
                            this.click &&
                            n.nodeName(this, "input") ?
                            (this.click(), !1) :
                            void 0;
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a");
                    },
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result &&
                            a.originalEvent &&
                            (a.originalEvent.returnValue = a.result);
                    },
                },
            },
            simulate: function(a, b, c, d) {
                var e = n.extend(new n.Event(), c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {},
                });
                d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
                    e.isDefaultPrevented() && c.preventDefault();
            },
        }),
        (n.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1);
        }),
        (n.Event = function(a, b) {
            return this instanceof n.Event ?
                (a && a.type ?
                    ((this.originalEvent = a),
                        (this.type = a.type),
                        (this.isDefaultPrevented =
                            a.defaultPrevented ||
                            (void 0 === a.defaultPrevented && a.returnValue === !1) ?
                            Z :
                            $)) :
                    (this.type = a),
                    b && n.extend(this, b),
                    (this.timeStamp = (a && a.timeStamp) || n.now()),
                    void(this[n.expando] = !0)) :
                new n.Event(a, b);
        }),
        (n.Event.prototype = {
            isDefaultPrevented: $,
            isPropagationStopped: $,
            isImmediatePropagationStopped: $,
            preventDefault: function() {
                var a = this.originalEvent;
                (this.isDefaultPrevented = Z),
                a && a.preventDefault && a.preventDefault();
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                (this.isPropagationStopped = Z),
                a && a.stopPropagation && a.stopPropagation();
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                (this.isImmediatePropagationStopped = Z),
                a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                    this.stopPropagation();
            },
        }),
        n.each({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout",
                    pointerenter: "pointerover",
                    pointerleave: "pointerout",
                },
                function(a, b) {
                    n.event.special[a] = {
                        delegateType: b,
                        bindType: b,
                        handle: function(a) {
                            var c,
                                d = this,
                                e = a.relatedTarget,
                                f = a.handleObj;
                            return (
                                (!e || (e !== d && !n.contains(d, e))) &&
                                ((a.type = f.origType),
                                    (c = f.handler.apply(this, arguments)),
                                    (a.type = b)),
                                c
                            );
                        },
                    };
                }
            ),
            k.focusinBubbles ||
            n.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
                var c = function(a) {
                    n.event.simulate(b, a.target, n.event.fix(a), !0);
                };
                n.event.special[b] = {
                    setup: function() {
                        var d = this.ownerDocument || this,
                            e = L.access(d, b);
                        e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
                    },
                    teardown: function() {
                        var d = this.ownerDocument || this,
                            e = L.access(d, b) - 1;
                        e
                            ?
                            L.access(d, b, e) :
                            (d.removeEventListener(a, c, !0), L.remove(d, b));
                    },
                };
            }),
            n.fn.extend({
                on: function(a, b, c, d, e) {
                    var f, g;
                    if ("object" == typeof a) {
                        "string" != typeof b && ((c = c || b), (b = void 0));
                        for (g in a) this.on(g, b, c, a[g], e);
                        return this;
                    }
                    if (
                        (null == c && null == d ?
                            ((d = b), (c = b = void 0)) :
                            null == d &&
                            ("string" == typeof b ?
                                ((d = c), (c = void 0)) :
                                ((d = c), (c = b), (b = void 0))),
                            d === !1)
                    )
                        d = $;
                    else if (!d) return this;
                    return (
                        1 === e &&
                        ((f = d),
                            (d = function(a) {
                                return n().off(a), f.apply(this, arguments);
                            }),
                            (d.guid = f.guid || (f.guid = n.guid++))),
                        this.each(function() {
                            n.event.add(this, a, d, c, b);
                        })
                    );
                },
                one: function(a, b, c, d) {
                    return this.on(a, b, c, d, 1);
                },
                off: function(a, b, c) {
                    var d, e;
                    if (a && a.preventDefault && a.handleObj)
                        return (
                            (d = a.handleObj),
                            n(a.delegateTarget).off(
                                d.namespace ? d.origType + "." + d.namespace : d.origType,
                                d.selector,
                                d.handler
                            ),
                            this
                        );
                    if ("object" == typeof a) {
                        for (e in a) this.off(e, b, a[e]);
                        return this;
                    }
                    return (
                        (b === !1 || "function" == typeof b) && ((c = b), (b = void 0)),
                        c === !1 && (c = $),
                        this.each(function() {
                            n.event.remove(this, a, c, b);
                        })
                    );
                },
                trigger: function(a, b) {
                    return this.each(function() {
                        n.event.trigger(a, b, this);
                    });
                },
                triggerHandler: function(a, b) {
                    var c = this[0];
                    return c ? n.event.trigger(a, b, c, !0) : void 0;
                },
            });
        var aa =
            /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            ba = /<([\w:]+)/,
            ca = /<|&#?\w+;/,
            da = /<(?:script|style|link)/i,
            ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
            fa = /^$|\/(?:java|ecma)script/i,
            ga = /^true\/(.*)/,
            ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            ia = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""],
            };
        (ia.optgroup = ia.option),
        (ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead),
        (ia.th = ia.td);

        function ja(a, b) {
            return n.nodeName(a, "table") &&
                n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ?
                a.getElementsByTagName("tbody")[0] ||
                a.appendChild(a.ownerDocument.createElement("tbody")) :
                a;
        }

        function ka(a) {
            return (a.type = (null !== a.getAttribute("type")) + "/" + a.type), a;
        }

        function la(a) {
            var b = ga.exec(a.type);
            return b ? (a.type = b[1]) : a.removeAttribute("type"), a;
        }

        function ma(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
        }

        function na(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (
                    L.hasData(a) &&
                    ((f = L.access(a)), (g = L.set(b, f)), (j = f.events))
                ) {
                    delete g.handle, (g.events = {});
                    for (e in j)
                        for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
                }
                M.hasData(a) && ((h = M.access(a)), (i = n.extend({}, h)), M.set(b, i));
            }
        }

        function oa(a, b) {
            var c = a.getElementsByTagName ?
                a.getElementsByTagName(b || "*") :
                a.querySelectorAll ?
                a.querySelectorAll(b || "*") :
                [];
            return void 0 === b || (b && n.nodeName(a, b)) ? n.merge([a], c) : c;
        }

        function pa(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && T.test(a.type) ?
                (b.checked = a.checked) :
                ("input" === c || "textarea" === c) &&
                (b.defaultValue = a.defaultValue);
        }
        n.extend({
                clone: function(a, b, c) {
                    var d,
                        e,
                        f,
                        g,
                        h = a.cloneNode(!0),
                        i = n.contains(a.ownerDocument, a);
                    if (!(
                            k.noCloneChecked ||
                            (1 !== a.nodeType && 11 !== a.nodeType) ||
                            n.isXMLDoc(a)
                        ))
                        for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++)
                            pa(f[d], g[d]);
                    if (b)
                        if (c)
                            for (
                                f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++
                            )
                                na(f[d], g[d]);
                        else na(a, h);
                    return (
                        (g = oa(h, "script")), g.length > 0 && ma(g, !i && oa(a, "script")), h
                    );
                },
                buildFragment: function(a, b, c, d) {
                    for (
                        var e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k = b.createDocumentFragment(),
                            l = [],
                            m = 0,
                            o = a.length; o > m; m++
                    )
                        if (((e = a[m]), e || 0 === e))
                            if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);
                            else if (ca.test(e)) {
                        (f = f || k.appendChild(b.createElement("div"))),
                        (g = (ba.exec(e) || ["", ""])[1].toLowerCase()),
                        (h = ia[g] || ia._default),
                        (f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2]),
                        (j = h[0]);
                        while (j--) f = f.lastChild;
                        n.merge(l, f.childNodes),
                            (f = k.firstChild),
                            (f.textContent = "");
                    } else l.push(b.createTextNode(e));
                    (k.textContent = ""), (m = 0);
                    while ((e = l[m++]))
                        if (
                            (!d || -1 === n.inArray(e, d)) &&
                            ((i = n.contains(e.ownerDocument, e)),
                                (f = oa(k.appendChild(e), "script")),
                                i && ma(f),
                                c)
                        ) {
                            j = 0;
                            while ((e = f[j++])) fa.test(e.type || "") && c.push(e);
                        }
                    return k;
                },
                cleanData: function(a) {
                    for (
                        var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++
                    ) {
                        if (n.acceptData(c) && ((e = c[L.expando]), e && (b = L.cache[e]))) {
                            if (b.events)
                                for (d in b.events)
                                    f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                            L.cache[e] && delete L.cache[e];
                        }
                        delete M.cache[c[M.expando]];
                    }
                },
            }),
            n.fn.extend({
                text: function(a) {
                    return J(
                        this,
                        function(a) {
                            return void 0 === a ?
                                n.text(this) :
                                this.empty().each(function() {
                                    (1 === this.nodeType ||
                                        11 === this.nodeType ||
                                        9 === this.nodeType) &&
                                    (this.textContent = a);
                                });
                        },
                        null,
                        a,
                        arguments.length
                    );
                },
                append: function() {
                    return this.domManip(arguments, function(a) {
                        if (
                            1 === this.nodeType ||
                            11 === this.nodeType ||
                            9 === this.nodeType
                        ) {
                            var b = ja(this, a);
                            b.appendChild(a);
                        }
                    });
                },
                prepend: function() {
                    return this.domManip(arguments, function(a) {
                        if (
                            1 === this.nodeType ||
                            11 === this.nodeType ||
                            9 === this.nodeType
                        ) {
                            var b = ja(this, a);
                            b.insertBefore(a, b.firstChild);
                        }
                    });
                },
                before: function() {
                    return this.domManip(arguments, function(a) {
                        this.parentNode && this.parentNode.insertBefore(a, this);
                    });
                },
                after: function() {
                    return this.domManip(arguments, function(a) {
                        this.parentNode &&
                            this.parentNode.insertBefore(a, this.nextSibling);
                    });
                },
                remove: function(a, b) {
                    for (
                        var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++
                    )
                        b || 1 !== c.nodeType || n.cleanData(oa(c)),
                        c.parentNode &&
                        (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")),
                            c.parentNode.removeChild(c));
                    return this;
                },
                empty: function() {
                    for (var a, b = 0; null != (a = this[b]); b++)
                        1 === a.nodeType && (n.cleanData(oa(a, !1)), (a.textContent = ""));
                    return this;
                },
                clone: function(a, b) {
                    return (
                        (a = null == a ? !1 : a),
                        (b = null == b ? a : b),
                        this.map(function() {
                            return n.clone(this, a, b);
                        })
                    );
                },
                html: function(a) {
                    return J(
                        this,
                        function(a) {
                            var b = this[0] || {},
                                c = 0,
                                d = this.length;
                            if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                            if (
                                "string" == typeof a &&
                                !da.test(a) &&
                                !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]
                            ) {
                                a = a.replace(aa, "<$1></$2>");
                                try {
                                    for (; d > c; c++)
                                        (b = this[c] || {}),
                                        1 === b.nodeType &&
                                        (n.cleanData(oa(b, !1)), (b.innerHTML = a));
                                    b = 0;
                                } catch (e) {}
                            }
                            b && this.empty().append(a);
                        },
                        null,
                        a,
                        arguments.length
                    );
                },
                replaceWith: function() {
                    var a = arguments[0];
                    return (
                        this.domManip(arguments, function(b) {
                            (a = this.parentNode),
                            n.cleanData(oa(this)),
                                a && a.replaceChild(b, this);
                        }),
                        a && (a.length || a.nodeType) ? this : this.remove()
                    );
                },
                detach: function(a) {
                    return this.remove(a, !0);
                },
                domManip: function(a, b) {
                    a = e.apply([], a);
                    var c,
                        d,
                        f,
                        g,
                        h,
                        i,
                        j = 0,
                        l = this.length,
                        m = this,
                        o = l - 1,
                        p = a[0],
                        q = n.isFunction(p);
                    if (
                        q ||
                        (l > 1 && "string" == typeof p && !k.checkClone && ea.test(p))
                    )
                        return this.each(function(c) {
                            var d = m.eq(c);
                            q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
                        });
                    if (
                        l &&
                        ((c = n.buildFragment(a, this[0].ownerDocument, !1, this)),
                            (d = c.firstChild),
                            1 === c.childNodes.length && (c = d),
                            d)
                    ) {
                        for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++)
                            (h = c),
                            j !== o &&
                            ((h = n.clone(h, !0, !0)), g && n.merge(f, oa(h, "script"))),
                            b.call(this[j], h, j);
                        if (g)
                            for (
                                i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++
                            )
                                (h = f[j]),
                                fa.test(h.type || "") &&
                                !L.access(h, "globalEval") &&
                                n.contains(i, h) &&
                                (h.src ?
                                    n._evalUrl && n._evalUrl(h.src) :
                                    n.globalEval(h.textContent.replace(ha, "")));
                    }
                    return this;
                },
            }),
            n.each({
                    appendTo: "append",
                    prependTo: "prepend",
                    insertBefore: "before",
                    insertAfter: "after",
                    replaceAll: "replaceWith",
                },
                function(a, b) {
                    n.fn[a] = function(a) {
                        for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                            (c = h === g ? this : this.clone(!0)),
                            n(e[h])[b](c),
                            f.apply(d, c.get());
                        return this.pushStack(d);
                    };
                }
            );
        var qa,
            ra = {};

        function sa(b, c) {
            var d,
                e = n(c.createElement(b)).appendTo(c.body),
                f =
                a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ?
                d.display :
                n.css(e[0], "display");
            return e.detach(), f;
        }

        function ta(a) {
            var b = l,
                c = ra[a];
            return (
                c ||
                ((c = sa(a, b)),
                    ("none" !== c && c) ||
                    ((qa = (
                            qa || n("<iframe frameborder='0' width='0' height='0'/>")
                        ).appendTo(b.documentElement)),
                        (b = qa[0].contentDocument),
                        b.write(),
                        b.close(),
                        (c = sa(a, b)),
                        qa.detach()),
                    (ra[a] = c)),
                c
            );
        }
        var ua = /^margin/,
            va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
            wa = function(b) {
                return b.ownerDocument.defaultView.opener ?
                    b.ownerDocument.defaultView.getComputedStyle(b, null) :
                    a.getComputedStyle(b, null);
            };

        function xa(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.style;
            return (
                (c = c || wa(a)),
                c && (g = c.getPropertyValue(b) || c[b]),
                c &&
                ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
                    va.test(g) &&
                    ua.test(b) &&
                    ((d = h.width),
                        (e = h.minWidth),
                        (f = h.maxWidth),
                        (h.minWidth = h.maxWidth = h.width = g),
                        (g = c.width),
                        (h.width = d),
                        (h.minWidth = e),
                        (h.maxWidth = f))),
                void 0 !== g ? g + "" : g
            );
        }

        function ya(a, b) {
            return {
                get: function() {
                    return a() ?
                        void delete this.get :
                        (this.get = b).apply(this, arguments);
                },
            };
        }!(function() {
            var b,
                c,
                d = l.documentElement,
                e = l.createElement("div"),
                f = l.createElement("div");
            if (f.style) {
                (f.style.backgroundClip = "content-box"),
                (f.cloneNode(!0).style.backgroundClip = ""),
                (k.clearCloneStyle = "content-box" === f.style.backgroundClip),
                (e.style.cssText =
                    "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
                e.appendChild(f);

                function g() {
                    (f.style.cssText =
                        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
                    (f.innerHTML = ""),
                    d.appendChild(e);
                    var g = a.getComputedStyle(f, null);
                    (b = "1%" !== g.top), (c = "4px" === g.width), d.removeChild(e);
                }
                a.getComputedStyle &&
                    n.extend(k, {
                        pixelPosition: function() {
                            return g(), b;
                        },
                        boxSizingReliable: function() {
                            return null == c && g(), c;
                        },
                        reliableMarginRight: function() {
                            var b,
                                c = f.appendChild(l.createElement("div"));
                            return (
                                (c.style.cssText = f.style.cssText =
                                    "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                                (c.style.marginRight = c.style.width = "0"),
                                (f.style.width = "1px"),
                                d.appendChild(e),
                                (b = !parseFloat(a.getComputedStyle(c, null).marginRight)),
                                d.removeChild(e),
                                f.removeChild(c),
                                b
                            );
                        },
                    });
            }
        })(),
        (n.swap = function(a, b, c, d) {
            var e,
                f,
                g = {};
            for (f in b)(g[f] = a.style[f]), (a.style[f] = b[f]);
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        });
        var za = /^(none|table(?!-c[ea]).+)/,
            Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
            Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
            Ca = { position: "absolute", visibility: "hidden", display: "block" },
            Da = { letterSpacing: "0", fontWeight: "400" },
            Ea = ["Webkit", "O", "Moz", "ms"];

        function Fa(a, b) {
            if (b in a) return b;
            var c = b[0].toUpperCase() + b.slice(1),
                d = b,
                e = Ea.length;
            while (e--)
                if (((b = Ea[e] + c), b in a)) return b;
            return d;
        }

        function Ga(a, b, c) {
            var d = Aa.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
        }

        function Ha(a, b, c, d, e) {
            for (
                var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0,
                    g = 0; 4 > f; f += 2
            )
                "margin" === c && (g += n.css(a, c + R[f], !0, e)),
                d ?
                ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
                    "margin" !== c &&
                    (g -= n.css(a, "border" + R[f] + "Width", !0, e))) :
                ((g += n.css(a, "padding" + R[f], !0, e)),
                    "padding" !== c &&
                    (g += n.css(a, "border" + R[f] + "Width", !0, e)));
            return g;
        }

        function Ia(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = wa(a),
                g = "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (
                    ((e = xa(a, b, f)),
                        (0 > e || null == e) && (e = a.style[b]),
                        va.test(e))
                )
                    return e;
                (d = g && (k.boxSizingReliable() || e === a.style[b])),
                (e = parseFloat(e) || 0);
            }
            return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
        }

        function Ja(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
                (d = a[g]),
                d.style &&
                ((f[g] = L.get(d, "olddisplay")),
                    (c = d.style.display),
                    b ?
                    (f[g] || "none" !== c || (d.style.display = ""),
                        "" === d.style.display &&
                        S(d) &&
                        (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) :
                    ((e = S(d)),
                        ("none" === c && e) ||
                        L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++)
                (d = a[g]),
                d.style &&
                ((b && "none" !== d.style.display && "" !== d.style.display) ||
                    (d.style.display = b ? f[g] || "" : "none"));
            return a;
        }
        n.extend({
                cssHooks: {
                    opacity: {
                        get: function(a, b) {
                            if (b) {
                                var c = xa(a, "opacity");
                                return "" === c ? "1" : c;
                            }
                        },
                    },
                },
                cssNumber: {
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: { float: "cssFloat" },
                style: function(a, b, c, d) {
                    if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                        var e,
                            f,
                            g,
                            h = n.camelCase(b),
                            i = a.style;
                        return (
                            (b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h))),
                            (g = n.cssHooks[b] || n.cssHooks[h]),
                            void 0 === c ?
                            g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ?
                            e :
                            i[b] :
                            ((f = typeof c),
                                "string" === f &&
                                (e = Ba.exec(c)) &&
                                ((c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b))),
                                    (f = "number")),
                                null != c &&
                                c === c &&
                                ("number" !== f || n.cssNumber[h] || (c += "px"),
                                    k.clearCloneStyle ||
                                    "" !== c ||
                                    0 !== b.indexOf("background") ||
                                    (i[b] = "inherit"),
                                    (g && "set" in g && void 0 === (c = g.set(a, c, d))) ||
                                    (i[b] = c)),
                                void 0)
                        );
                    }
                },
                css: function(a, b, c, d) {
                    var e,
                        f,
                        g,
                        h = n.camelCase(b);
                    return (
                        (b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h))),
                        (g = n.cssHooks[b] || n.cssHooks[h]),
                        g && "get" in g && (e = g.get(a, !0, c)),
                        void 0 === e && (e = xa(a, b, d)),
                        "normal" === e && b in Da && (e = Da[b]),
                        "" === c || c ?
                        ((f = parseFloat(e)), c === !0 || n.isNumeric(f) ? f || 0 : e) :
                        e
                    );
                },
            }),
            n.each(["height", "width"], function(a, b) {
                n.cssHooks[b] = {
                    get: function(a, c, d) {
                        return c ?
                            za.test(n.css(a, "display")) && 0 === a.offsetWidth ?
                            n.swap(a, Ca, function() {
                                return Ia(a, b, d);
                            }) :
                            Ia(a, b, d) :
                            void 0;
                    },
                    set: function(a, c, d) {
                        var e = d && wa(a);
                        return Ga(
                            a,
                            c,
                            d ?
                            Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) :
                            0
                        );
                    },
                };
            }),
            (n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
                return b ?
                    n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) :
                    void 0;
            })),
            n.each({ margin: "", padding: "", border: "Width" }, function(a, b) {
                (n.cssHooks[a + b] = {
                    expand: function(c) {
                        for (
                            var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++
                        )
                            e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                        return e;
                    },
                }),
                ua.test(a) || (n.cssHooks[a + b].set = Ga);
            }),
            n.fn.extend({
                css: function(a, b) {
                    return J(
                        this,
                        function(a, b, c) {
                            var d,
                                e,
                                f = {},
                                g = 0;
                            if (n.isArray(b)) {
                                for (d = wa(a), e = b.length; e > g; g++)
                                    f[b[g]] = n.css(a, b[g], !1, d);
                                return f;
                            }
                            return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
                        },
                        a,
                        b,
                        arguments.length > 1
                    );
                },
                show: function() {
                    return Ja(this, !0);
                },
                hide: function() {
                    return Ja(this);
                },
                toggle: function(a) {
                    return "boolean" == typeof a ?
                        a ?
                        this.show() :
                        this.hide() :
                        this.each(function() {
                            S(this) ? n(this).show() : n(this).hide();
                        });
                },
            });

        function Ka(a, b, c, d, e) {
            return new Ka.prototype.init(a, b, c, d, e);
        }
        (n.Tween = Ka),
        (Ka.prototype = {
            constructor: Ka,
            init: function(a, b, c, d, e, f) {
                (this.elem = a),
                (this.prop = c),
                (this.easing = e || "swing"),
                (this.options = b),
                (this.start = this.now = this.cur()),
                (this.end = d),
                (this.unit = f || (n.cssNumber[c] ? "" : "px"));
            },
            cur: function() {
                var a = Ka.propHooks[this.prop];
                return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
            },
            run: function(a) {
                var b,
                    c = Ka.propHooks[this.prop];
                return (
                    this.options.duration ?
                    (this.pos = b =
                        n.easing[this.easing](
                            a,
                            this.options.duration * a,
                            0,
                            1,
                            this.options.duration
                        )) :
                    (this.pos = b = a),
                    (this.now = (this.end - this.start) * b + this.start),
                    this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                    c && c.set ? c.set(this) : Ka.propHooks._default.set(this),
                    this
                );
            },
        }),
        (Ka.prototype.init.prototype = Ka.prototype),
        (Ka.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] ||
                        (a.elem.style && null != a.elem.style[a.prop]) ?
                        ((b = n.css(a.elem, a.prop, "")), b && "auto" !== b ? b : 0) :
                        a.elem[a.prop];
                },
                set: function(a) {
                    n.fx.step[a.prop] ?
                        n.fx.step[a.prop](a) :
                        a.elem.style &&
                        (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ?
                        n.style(a.elem, a.prop, a.now + a.unit) :
                        (a.elem[a.prop] = a.now);
                },
            },
        }),
        (Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
            },
        }),
        (n.easing = {
            linear: function(a) {
                return a;
            },
            swing: function(a) {
                return 0.5 - Math.cos(a * Math.PI) / 2;
            },
        }),
        (n.fx = Ka.prototype.init),
        (n.fx.step = {});
        var La,
            Ma,
            Na = /^(?:toggle|show|hide)$/,
            Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
            Pa = /queueHooks$/,
            Qa = [Va],
            Ra = {
                "*": [
                    function(a, b) {
                        var c = this.createTween(a, b),
                            d = c.cur(),
                            e = Oa.exec(b),
                            f = (e && e[3]) || (n.cssNumber[a] ? "" : "px"),
                            g =
                            (n.cssNumber[a] || ("px" !== f && +d)) &&
                            Oa.exec(n.css(c.elem, a)),
                            h = 1,
                            i = 20;
                        if (g && g[3] !== f) {
                            (f = f || g[3]), (e = e || []), (g = +d || 1);
                            do(h = h || ".5"), (g /= h), n.style(c.elem, a, g + f);
                            while (h !== (h = c.cur() / d) && 1 !== h && --i);
                        }
                        return (
                            e &&
                            ((g = c.start = +g || +d || 0),
                                (c.unit = f),
                                (c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2])),
                            c
                        );
                    },
                ],
            };

        function Sa() {
            return (
                setTimeout(function() {
                    La = void 0;
                }),
                (La = n.now())
            );
        }

        function Ta(a, b) {
            var c,
                d = 0,
                e = { height: a };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b)
                (c = R[d]), (e["margin" + c] = e["padding" + c] = a);
            return b && (e.opacity = e.width = a), e;
        }

        function Ua(a, b, c) {
            for (
                var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++
            )
                if ((d = e[f].call(c, b, a))) return d;
        }

        function Va(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l = this,
                m = {},
                o = a.style,
                p = a.nodeType && S(a),
                q = L.get(a, "fxshow");
            c.queue ||
                ((h = n._queueHooks(a, "fx")),
                    null == h.unqueued &&
                    ((h.unqueued = 0),
                        (i = h.empty.fire),
                        (h.empty.fire = function() {
                            h.unqueued || i();
                        })),
                    h.unqueued++,
                    l.always(function() {
                        l.always(function() {
                            h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
                        });
                    })),
                1 === a.nodeType &&
                ("height" in b || "width" in b) &&
                ((c.overflow = [o.overflow, o.overflowX, o.overflowY]),
                    (j = n.css(a, "display")),
                    (k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j),
                    "inline" === k &&
                    "none" === n.css(a, "float") &&
                    (o.display = "inline-block")),
                c.overflow &&
                ((o.overflow = "hidden"),
                    l.always(function() {
                        (o.overflow = c.overflow[0]),
                        (o.overflowX = c.overflow[1]),
                        (o.overflowY = c.overflow[2]);
                    }));
            for (d in b)
                if (((e = b[d]), Na.exec(e))) {
                    if (
                        (delete b[d],
                            (f = f || "toggle" === e),
                            e === (p ? "hide" : "show"))
                    ) {
                        if ("show" !== e || !q || void 0 === q[d]) continue;
                        p = !0;
                    }
                    m[d] = (q && q[d]) || n.style(a, d);
                } else j = void 0;
            if (n.isEmptyObject(m))
                "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);
            else {
                q ? "hidden" in q && (p = q.hidden) : (q = L.access(a, "fxshow", {})),
                    f && (q.hidden = !p),
                    p ?
                    n(a).show() :
                    l.done(function() {
                        n(a).hide();
                    }),
                    l.done(function() {
                        var b;
                        L.remove(a, "fxshow");
                        for (b in m) n.style(a, b, m[b]);
                    });
                for (d in m)
                    (g = Ua(p ? q[d] : 0, d, l)),
                    d in q ||
                    ((q[d] = g.start),
                        p &&
                        ((g.end = g.start),
                            (g.start = "width" === d || "height" === d ? 1 : 0)));
            }
        }

        function Wa(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (
                    ((d = n.camelCase(c)),
                        (e = b[d]),
                        (f = a[c]),
                        n.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
                        c !== d && ((a[d] = f), delete a[c]),
                        (g = n.cssHooks[d]),
                        g && "expand" in g)
                ) {
                    (f = g.expand(f)), delete a[d];
                    for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
                } else b[d] = e;
        }

        function Xa(a, b, c) {
            var d,
                e,
                f = 0,
                g = Qa.length,
                h = n.Deferred().always(function() {
                    delete i.elem;
                }),
                i = function() {
                    if (e) return !1;
                    for (
                        var b = La || Sa(),
                            c = Math.max(0, j.startTime + j.duration - b),
                            d = c / j.duration || 0,
                            f = 1 - d,
                            g = 0,
                            i = j.tweens.length; i > g; g++
                    )
                        j.tweens[g].run(f);
                    return (
                        h.notifyWith(a, [j, f, c]),
                        1 > f && i ? c : (h.resolveWith(a, [j]), !1)
                    );
                },
                j = h.promise({
                    elem: a,
                    props: n.extend({}, b),
                    opts: n.extend(!0, { specialEasing: {} }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: La || Sa(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) {
                        var d = n.Tween(
                            a,
                            j.opts,
                            b,
                            c,
                            j.opts.specialEasing[b] || j.opts.easing
                        );
                        return j.tweens.push(d), d;
                    },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
                    },
                }),
                k = j.props;
            for (Wa(k, j.opts.specialEasing); g > f; f++)
                if ((d = Qa[f].call(j, a, k, j.opts))) return d;
            return (
                n.map(k, Ua, j),
                n.isFunction(j.opts.start) && j.opts.start.call(a, j),
                n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })),
                j
                .progress(j.opts.progress)
                .done(j.opts.done, j.opts.complete)
                .fail(j.opts.fail)
                .always(j.opts.always)
            );
        }
        (n.Animation = n.extend(Xa, {
            tweener: function(a, b) {
                n.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
                for (var c, d = 0, e = a.length; e > d; d++)
                    (c = a[d]), (Ra[c] = Ra[c] || []), Ra[c].unshift(b);
            },
            prefilter: function(a, b) {
                b ? Qa.unshift(a) : Qa.push(a);
            },
        })),
        (n.speed = function(a, b, c) {
            var d =
                a && "object" == typeof a ?
                n.extend({}, a) :
                {
                    complete: c || (!c && b) || (n.isFunction(a) && a),
                    duration: a,
                    easing: (c && b) || (b && !n.isFunction(b) && b),
                };
            return (
                (d.duration = n.fx.off ?
                    0 :
                    "number" == typeof d.duration ?
                    d.duration :
                    d.duration in n.fx.speeds ?
                    n.fx.speeds[d.duration] :
                    n.fx.speeds._default),
                (null == d.queue || d.queue === !0) && (d.queue = "fx"),
                (d.old = d.complete),
                (d.complete = function() {
                    n.isFunction(d.old) && d.old.call(this),
                        d.queue && n.dequeue(this, d.queue);
                }),
                d
            );
        }),
        n.fn.extend({
                fadeTo: function(a, b, c, d) {
                    return this.filter(S)
                        .css("opacity", 0)
                        .show()
                        .end()
                        .animate({ opacity: b }, a, c, d);
                },
                animate: function(a, b, c, d) {
                    var e = n.isEmptyObject(a),
                        f = n.speed(b, c, d),
                        g = function() {
                            var b = Xa(this, n.extend({}, a), f);
                            (e || L.get(this, "finish")) && b.stop(!0);
                        };
                    return (
                        (g.finish = g),
                        e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                    );
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c);
                    };
                    return (
                        "string" != typeof a && ((c = b), (b = a), (a = void 0)),
                        b && a !== !1 && this.queue(a || "fx", []),
                        this.each(function() {
                            var b = !0,
                                e = null != a && a + "queueHooks",
                                f = n.timers,
                                g = L.get(this);
                            if (e) g[e] && g[e].stop && d(g[e]);
                            else
                                for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                            for (e = f.length; e--;)
                                f[e].elem !== this ||
                                (null != a && f[e].queue !== a) ||
                                (f[e].anim.stop(c), (b = !1), f.splice(e, 1));
                            (b || !c) && n.dequeue(this, a);
                        })
                    );
                },
                finish: function(a) {
                    return (
                        a !== !1 && (a = a || "fx"),
                        this.each(function() {
                            var b,
                                c = L.get(this),
                                d = c[a + "queue"],
                                e = c[a + "queueHooks"],
                                f = n.timers,
                                g = d ? d.length : 0;
                            for (
                                c.finish = !0,
                                n.queue(this, a, []),
                                e && e.stop && e.stop.call(this, !0),
                                b = f.length; b--;

                            )
                                f[b].elem === this &&
                                f[b].queue === a &&
                                (f[b].anim.stop(!0), f.splice(b, 1));
                            for (b = 0; g > b; b++)
                                d[b] && d[b].finish && d[b].finish.call(this);
                            delete c.finish;
                        })
                    );
                },
            }),
            n.each(["toggle", "show", "hide"], function(a, b) {
                var c = n.fn[b];
                n.fn[b] = function(a, d, e) {
                    return null == a || "boolean" == typeof a ?
                        c.apply(this, arguments) :
                        this.animate(Ta(b, !0), a, d, e);
                };
            }),
            n.each({
                    slideDown: Ta("show"),
                    slideUp: Ta("hide"),
                    slideToggle: Ta("toggle"),
                    fadeIn: { opacity: "show" },
                    fadeOut: { opacity: "hide" },
                    fadeToggle: { opacity: "toggle" },
                },
                function(a, b) {
                    n.fn[a] = function(a, c, d) {
                        return this.animate(b, a, c, d);
                    };
                }
            ),
            (n.timers = []),
            (n.fx.tick = function() {
                var a,
                    b = 0,
                    c = n.timers;
                for (La = n.now(); b < c.length; b++)
                    (a = c[b]), a() || c[b] !== a || c.splice(b--, 1);
                c.length || n.fx.stop(), (La = void 0);
            }),
            (n.fx.timer = function(a) {
                n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
            }),
            (n.fx.interval = 13),
            (n.fx.start = function() {
                Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
            }),
            (n.fx.stop = function() {
                clearInterval(Ma), (Ma = null);
            }),
            (n.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (n.fn.delay = function(a, b) {
                return (
                    (a = n.fx ? n.fx.speeds[a] || a : a),
                    (b = b || "fx"),
                    this.queue(b, function(b, c) {
                        var d = setTimeout(b, a);
                        c.stop = function() {
                            clearTimeout(d);
                        };
                    })
                );
            }),
            (function() {
                var a = l.createElement("input"),
                    b = l.createElement("select"),
                    c = b.appendChild(l.createElement("option"));
                (a.type = "checkbox"),
                (k.checkOn = "" !== a.value),
                (k.optSelected = c.selected),
                (b.disabled = !0),
                (k.optDisabled = !c.disabled),
                (a = l.createElement("input")),
                (a.value = "t"),
                (a.type = "radio"),
                (k.radioValue = "t" === a.value);
            })();
        var Ya,
            Za,
            $a = n.expr.attrHandle;
        n.fn.extend({
                attr: function(a, b) {
                    return J(this, n.attr, a, b, arguments.length > 1);
                },
                removeAttr: function(a) {
                    return this.each(function() {
                        n.removeAttr(this, a);
                    });
                },
            }),
            n.extend({
                attr: function(a, b, c) {
                    var d,
                        e,
                        f = a.nodeType;
                    if (a && 3 !== f && 8 !== f && 2 !== f)
                        return typeof a.getAttribute === U ?
                            n.prop(a, b, c) :
                            ((1 === f && n.isXMLDoc(a)) ||
                                ((b = b.toLowerCase()),
                                    (d =
                                        n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya))),
                                void 0 === c ?
                                d && "get" in d && null !== (e = d.get(a, b)) ?
                                e :
                                ((e = n.find.attr(a, b)), null == e ? void 0 : e) :
                                null !== c ?
                                d && "set" in d && void 0 !== (e = d.set(a, c, b)) ?
                                e :
                                (a.setAttribute(b, c + ""), c) :
                                void n.removeAttr(a, b));
                },
                removeAttr: function(a, b) {
                    var c,
                        d,
                        e = 0,
                        f = b && b.match(E);
                    if (f && 1 === a.nodeType)
                        while ((c = f[e++]))
                            (d = n.propFix[c] || c),
                            n.expr.match.bool.test(c) && (a[d] = !1),
                            a.removeAttribute(c);
                },
                attrHooks: {
                    type: {
                        set: function(a, b) {
                            if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                                var c = a.value;
                                return a.setAttribute("type", b), c && (a.value = c), b;
                            }
                        },
                    },
                },
            }),
            (Za = {
                set: function(a, b, c) {
                    return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
                },
            }),
            n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
                var c = $a[b] || n.find.attr;
                $a[b] = function(a, b, d) {
                    var e, f;
                    return (
                        d ||
                        ((f = $a[b]),
                            ($a[b] = e),
                            (e = null != c(a, b, d) ? b.toLowerCase() : null),
                            ($a[b] = f)),
                        e
                    );
                };
            });
        var _a = /^(?:input|select|textarea|button)$/i;
        n.fn.extend({
                prop: function(a, b) {
                    return J(this, n.prop, a, b, arguments.length > 1);
                },
                removeProp: function(a) {
                    return this.each(function() {
                        delete this[n.propFix[a] || a];
                    });
                },
            }),
            n.extend({
                propFix: { for: "htmlFor", class: "className" },
                prop: function(a, b, c) {
                    var d,
                        e,
                        f,
                        g = a.nodeType;
                    if (a && 3 !== g && 8 !== g && 2 !== g)
                        return (
                            (f = 1 !== g || !n.isXMLDoc(a)),
                            f && ((b = n.propFix[b] || b), (e = n.propHooks[b])),
                            void 0 !== c ?
                            e && "set" in e && void 0 !== (d = e.set(a, c, b)) ?
                            d :
                            (a[b] = c) :
                            e && "get" in e && null !== (d = e.get(a, b)) ?
                            d :
                            a[b]
                        );
                },
                propHooks: {
                    tabIndex: {
                        get: function(a) {
                            return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ?
                                a.tabIndex :
                                -1;
                        },
                    },
                },
            }),
            k.optSelected ||
            (n.propHooks.selected = {
                get: function(a) {
                    var b = a.parentNode;
                    return b && b.parentNode && b.parentNode.selectedIndex, null;
                },
            }),
            n.each(
                [
                    "tabIndex",
                    "readOnly",
                    "maxLength",
                    "cellSpacing",
                    "cellPadding",
                    "rowSpan",
                    "colSpan",
                    "useMap",
                    "frameBorder",
                    "contentEditable",
                ],
                function() {
                    n.propFix[this.toLowerCase()] = this;
                }
            );
        var ab = /[\t\r\n\f]/g;
        n.fn.extend({
            addClass: function(a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h = "string" == typeof a && a,
                    i = 0,
                    j = this.length;
                if (n.isFunction(a))
                    return this.each(function(b) {
                        n(this).addClass(a.call(this, b, this.className));
                    });
                if (h)
                    for (b = (a || "").match(E) || []; j > i; i++)
                        if (
                            ((c = this[i]),
                                (d =
                                    1 === c.nodeType &&
                                    (c.className ?
                                        (" " + c.className + " ").replace(ab, " ") :
                                        " ")))
                        ) {
                            f = 0;
                            while ((e = b[f++]))
                                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            (g = n.trim(d)), c.className !== g && (c.className = g);
                        }
                return this;
            },
            removeClass: function(a) {
                var b,
                    c,
                    d,
                    e,
                    f,
                    g,
                    h = 0 === arguments.length || ("string" == typeof a && a),
                    i = 0,
                    j = this.length;
                if (n.isFunction(a))
                    return this.each(function(b) {
                        n(this).removeClass(a.call(this, b, this.className));
                    });
                if (h)
                    for (b = (a || "").match(E) || []; j > i; i++)
                        if (
                            ((c = this[i]),
                                (d =
                                    1 === c.nodeType &&
                                    (c.className ?
                                        (" " + c.className + " ").replace(ab, " ") :
                                        "")))
                        ) {
                            f = 0;
                            while ((e = b[f++]))
                                while (d.indexOf(" " + e + " ") >= 0)
                                    d = d.replace(" " + e + " ", " ");
                            (g = a ? n.trim(d) : ""), c.className !== g && (c.className = g);
                        }
                return this;
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ?
                    b ?
                    this.addClass(a) :
                    this.removeClass(a) :
                    this.each(
                        n.isFunction(a) ?

                        function(c) {
                            n(this).toggleClass(a.call(this, c, this.className, b), b);
                        } :
                        function() {
                            if ("string" === c) {
                                var b,
                                    d = 0,
                                    e = n(this),
                                    f = a.match(E) || [];
                                while ((b = f[d++]))
                                    e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                            } else
                                (c === U || "boolean" === c) &&
                                (this.className &&
                                    L.set(this, "__className__", this.className),
                                    (this.className =
                                        this.className || a === !1 ?
                                        "" :
                                        L.get(this, "__className__") || ""));
                        }
                    );
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (
                        1 === this[c].nodeType &&
                        (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0
                    )
                        return !0;
                return !1;
            },
        });
        var bb = /\r/g;
        n.fn.extend({
                val: function(a) {
                    var b,
                        c,
                        d,
                        e = this[0]; {
                        if (arguments.length)
                            return (
                                (d = n.isFunction(a)),
                                this.each(function(c) {
                                    var e;
                                    1 === this.nodeType &&
                                        ((e = d ? a.call(this, c, n(this).val()) : a),
                                            null == e ?
                                            (e = "") :
                                            "number" == typeof e ?
                                            (e += "") :
                                            n.isArray(e) &&
                                            (e = n.map(e, function(a) {
                                                return null == a ? "" : a + "";
                                            })),
                                            (b =
                                                n.valHooks[this.type] ||
                                                n.valHooks[this.nodeName.toLowerCase()]),
                                            (b && "set" in b && void 0 !== b.set(this, e, "value")) ||
                                            (this.value = e));
                                })
                            );
                        if (e)
                            return (
                                (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()]),
                                b && "get" in b && void 0 !== (c = b.get(e, "value")) ?
                                c :
                                ((c = e.value),
                                    "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c)
                            );
                    }
                },
            }),
            n.extend({
                valHooks: {
                    option: {
                        get: function(a) {
                            var b = n.find.attr(a, "value");
                            return null != b ? b : n.trim(n.text(a));
                        },
                    },
                    select: {
                        get: function(a) {
                            for (
                                var b,
                                    c,
                                    d = a.options,
                                    e = a.selectedIndex,
                                    f = "select-one" === a.type || 0 > e,
                                    g = f ? null : [],
                                    h = f ? e + 1 : d.length,
                                    i = 0 > e ? h : f ? e : 0; h > i; i++
                            )
                                if (
                                    ((c = d[i]), !(
                                        (!c.selected && i !== e) ||
                                        (k.optDisabled ?
                                            c.disabled :
                                            null !== c.getAttribute("disabled")) ||
                                        (c.parentNode.disabled &&
                                            n.nodeName(c.parentNode, "optgroup"))
                                    ))
                                ) {
                                    if (((b = n(c).val()), f)) return b;
                                    g.push(b);
                                }
                            return g;
                        },
                        set: function(a, b) {
                            var c,
                                d,
                                e = a.options,
                                f = n.makeArray(b),
                                g = e.length;
                            while (g--)
                                (d = e[g]),
                                (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                            return c || (a.selectedIndex = -1), f;
                        },
                    },
                },
            }),
            n.each(["radio", "checkbox"], function() {
                (n.valHooks[this] = {
                    set: function(a, b) {
                        return n.isArray(b) ?
                            (a.checked = n.inArray(n(a).val(), b) >= 0) :
                            void 0;
                    },
                }),
                k.checkOn ||
                    (n.valHooks[this].get = function(a) {
                        return null === a.getAttribute("value") ? "on" : a.value;
                    });
            }),
            n.each(
                "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
                    " "
                ),
                function(a, b) {
                    n.fn[b] = function(a, c) {
                        return arguments.length > 0 ?
                            this.on(b, null, a, c) :
                            this.trigger(b);
                    };
                }
            ),
            n.fn.extend({
                hover: function(a, b) {
                    return this.mouseenter(a).mouseleave(b || a);
                },
                bind: function(a, b, c) {
                    return this.on(a, null, b, c);
                },
                unbind: function(a, b) {
                    return this.off(a, null, b);
                },
                delegate: function(a, b, c, d) {
                    return this.on(b, a, c, d);
                },
                undelegate: function(a, b, c) {
                    return 1 === arguments.length ?
                        this.off(a, "**") :
                        this.off(b, a || "**", c);
                },
            });
        var cb = n.now(),
            db = /\?/;
        (n.parseJSON = function(a) {
            return JSON.parse(a + "");
        }),
        (n.parseXML = function(a) {
            var b, c;
            if (!a || "string" != typeof a) return null;
            try {
                (c = new DOMParser()), (b = c.parseFromString(a, "text/xml"));
            } catch (d) {
                b = void 0;
            }
            return (
                (!b || b.getElementsByTagName("parsererror").length) &&
                n.error("Invalid XML: " + a),
                b
            );
        });
        var eb = /#.*$/,
            fb = /([?&])_=[^&]*/,
            gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            ib = /^(?:GET|HEAD)$/,
            jb = /^\/\//,
            kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            lb = {},
            mb = {},
            nb = "*/".concat("*"),
            ob = a.location.href,
            pb = kb.exec(ob.toLowerCase()) || [];

        function qb(a) {
            return function(b, c) {
                "string" != typeof b && ((c = b), (b = "*"));
                var d,
                    e = 0,
                    f = b.toLowerCase().match(E) || [];
                if (n.isFunction(c))
                    while ((d = f[e++]))
                        "+" === d[0] ?
                        ((d = d.slice(1) || "*"), (a[d] = a[d] || []).unshift(c)) :
                        (a[d] = a[d] || []).push(c);
            };
        }

        function rb(a, b, c, d) {
            var e = {},
                f = a === mb;

            function g(h) {
                var i;
                return (
                    (e[h] = !0),
                    n.each(a[h] || [], function(a, h) {
                        var j = h(b, c, d);
                        return "string" != typeof j || f || e[j] ?
                            f ?
                            !(i = j) :
                            void 0 :
                            (b.dataTypes.unshift(j), g(j), !1);
                    }),
                    i
                );
            }
            return g(b.dataTypes[0]) || (!e["*"] && g("*"));
        }

        function sb(a, b) {
            var c,
                d,
                e = n.ajaxSettings.flatOptions || {};
            for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && n.extend(!0, a, d), a;
        }

        function tb(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.contents,
                i = a.dataTypes;
            while ("*" === i[0])
                i.shift(),
                void 0 === d &&
                (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break;
                    }
            if (i[0] in c) f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break;
                    }
                    g || (g = e);
                }
                f = f || g;
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
        }

        function ub(a, b, c, d) {
            var e,
                f,
                g,
                h,
                i,
                j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            f = k.shift();
            while (f)
                if (
                    (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                        (i = f),
                        (f = k.shift()))
                )
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (((g = j[i + " " + f] || j["* " + f]), !g))
                    for (e in j)
                        if (
                            ((h = e.split(" ")),
                                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]]))
                        ) {
                            g === !0 ?
                                (g = j[e]) :
                                j[e] !== !0 && ((f = h[0]), k.unshift(h[1]));
                            break;
                        }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else
                        try {
                            b = g(b);
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f,
                            };
                        }
            }
            return { state: "success", data: b };
        }
        n.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: ob,
                    type: "GET",
                    isLocal: hb.test(pb[1]),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": nb,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript",
                    },
                    contents: { xml: /xml/, html: /html/, json: /json/ },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON",
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": n.parseJSON,
                        "text xml": n.parseXML,
                    },
                    flatOptions: { url: !0, context: !0 },
                },
                ajaxSetup: function(a, b) {
                    return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
                },
                ajaxPrefilter: qb(lb),
                ajaxTransport: qb(mb),
                ajax: function(a, b) {
                    "object" == typeof a && ((b = a), (a = void 0)), (b = b || {});
                    var c,
                        d,
                        e,
                        f,
                        g,
                        h,
                        i,
                        j,
                        k = n.ajaxSetup({}, b),
                        l = k.context || k,
                        m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                        o = n.Deferred(),
                        p = n.Callbacks("once memory"),
                        q = k.statusCode || {},
                        r = {},
                        s = {},
                        t = 0,
                        u = "canceled",
                        v = {
                            readyState: 0,
                            getResponseHeader: function(a) {
                                var b;
                                if (2 === t) {
                                    if (!f) {
                                        f = {};
                                        while ((b = gb.exec(e))) f[b[1].toLowerCase()] = b[2];
                                    }
                                    b = f[a.toLowerCase()];
                                }
                                return null == b ? null : b;
                            },
                            getAllResponseHeaders: function() {
                                return 2 === t ? e : null;
                            },
                            setRequestHeader: function(a, b) {
                                var c = a.toLowerCase();
                                return t || ((a = s[c] = s[c] || a), (r[a] = b)), this;
                            },
                            overrideMimeType: function(a) {
                                return t || (k.mimeType = a), this;
                            },
                            statusCode: function(a) {
                                var b;
                                if (a)
                                    if (2 > t)
                                        for (b in a) q[b] = [q[b], a[b]];
                                    else v.always(a[v.status]);
                                return this;
                            },
                            abort: function(a) {
                                var b = a || u;
                                return c && c.abort(b), x(0, b), this;
                            },
                        };
                    if (
                        ((o.promise(v).complete = p.add),
                            (v.success = v.done),
                            (v.error = v.fail),
                            (k.url = ((a || k.url || ob) + "")
                                .replace(eb, "")
                                .replace(jb, pb[1] + "//")),
                            (k.type = b.method || b.type || k.method || k.type),
                            (k.dataTypes = n
                                .trim(k.dataType || "*")
                                .toLowerCase()
                                .match(E) || [""]),
                            null == k.crossDomain &&
                            ((h = kb.exec(k.url.toLowerCase())),
                                (k.crossDomain = !(!h ||
                                    (h[1] === pb[1] &&
                                        h[2] === pb[2] &&
                                        (h[3] || ("http:" === h[1] ? "80" : "443")) ===
                                        (pb[3] || ("http:" === pb[1] ? "80" : "443")))
                                ))),
                            k.data &&
                            k.processData &&
                            "string" != typeof k.data &&
                            (k.data = n.param(k.data, k.traditional)),
                            rb(lb, k, b, v),
                            2 === t)
                    )
                        return v;
                    (i = n.event && k.global),
                    i && 0 === n.active++ && n.event.trigger("ajaxStart"),
                        (k.type = k.type.toUpperCase()),
                        (k.hasContent = !ib.test(k.type)),
                        (d = k.url),
                        k.hasContent ||
                        (k.data &&
                            ((d = k.url += (db.test(d) ? "&" : "?") + k.data), delete k.data),
                            k.cache === !1 &&
                            (k.url = fb.test(d) ?
                                d.replace(fb, "$1_=" + cb++) :
                                d + (db.test(d) ? "&" : "?") + "_=" + cb++)),
                        k.ifModified &&
                        (n.lastModified[d] &&
                            v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
                            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
                        ((k.data && k.hasContent && k.contentType !== !1) || b.contentType) &&
                        v.setRequestHeader("Content-Type", k.contentType),
                        v.setRequestHeader(
                            "Accept",
                            k.dataTypes[0] && k.accepts[k.dataTypes[0]] ?
                            k.accepts[k.dataTypes[0]] +
                            ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") :
                            k.accepts["*"]
                        );
                    for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
                    if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                        return v.abort();
                    u = "abort";
                    for (j in { success: 1, error: 1, complete: 1 }) v[j](k[j]);
                    if ((c = rb(mb, k, b, v))) {
                        (v.readyState = 1),
                        i && m.trigger("ajaxSend", [v, k]),
                            k.async &&
                            k.timeout > 0 &&
                            (g = setTimeout(function() {
                                v.abort("timeout");
                            }, k.timeout));
                        try {
                            (t = 1), c.send(r, x);
                        } catch (w) {
                            if (!(2 > t)) throw w;
                            x(-1, w);
                        }
                    } else x(-1, "No Transport");

                    function x(a, b, f, h) {
                        var j,
                            r,
                            s,
                            u,
                            w,
                            x = b;
                        2 !== t &&
                            ((t = 2),
                                g && clearTimeout(g),
                                (c = void 0),
                                (e = h || ""),
                                (v.readyState = a > 0 ? 4 : 0),
                                (j = (a >= 200 && 300 > a) || 304 === a),
                                f && (u = tb(k, v, f)),
                                (u = ub(k, u, v, j)),
                                j ?
                                (k.ifModified &&
                                    ((w = v.getResponseHeader("Last-Modified")),
                                        w && (n.lastModified[d] = w),
                                        (w = v.getResponseHeader("etag")),
                                        w && (n.etag[d] = w)),
                                    204 === a || "HEAD" === k.type ?
                                    (x = "nocontent") :
                                    304 === a ?
                                    (x = "notmodified") :
                                    ((x = u.state), (r = u.data), (s = u.error), (j = !s))) :
                                ((s = x), (a || !x) && ((x = "error"), 0 > a && (a = 0))),
                                (v.status = a),
                                (v.statusText = (b || x) + ""),
                                j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                                v.statusCode(q),
                                (q = void 0),
                                i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                                p.fireWith(l, [v, x]),
                                i &&
                                (m.trigger("ajaxComplete", [v, k]),
                                    --n.active || n.event.trigger("ajaxStop")));
                    }
                    return v;
                },
                getJSON: function(a, b, c) {
                    return n.get(a, b, c, "json");
                },
                getScript: function(a, b) {
                    return n.get(a, void 0, b, "script");
                },
            }),
            n.each(["get", "post"], function(a, b) {
                n[b] = function(a, c, d, e) {
                    return (
                        n.isFunction(c) && ((e = e || d), (d = c), (c = void 0)),
                        n.ajax({ url: a, type: b, dataType: e, data: c, success: d })
                    );
                };
            }),
            (n._evalUrl = function(a) {
                return n.ajax({
                    url: a,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    throws: !0,
                });
            }),
            n.fn.extend({
                wrapAll: function(a) {
                    var b;
                    return n.isFunction(a) ?
                        this.each(function(b) {
                            n(this).wrapAll(a.call(this, b));
                        }) :
                        (this[0] &&
                            ((b = n(a, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && b.insertBefore(this[0]),
                                b
                                .map(function() {
                                    var a = this;
                                    while (a.firstElementChild) a = a.firstElementChild;
                                    return a;
                                })
                                .append(this)),
                            this);
                },
                wrapInner: function(a) {
                    return this.each(
                        n.isFunction(a) ?

                        function(b) {
                            n(this).wrapInner(a.call(this, b));
                        } :
                        function() {
                            var b = n(this),
                                c = b.contents();
                            c.length ? c.wrapAll(a) : b.append(a);
                        }
                    );
                },
                wrap: function(a) {
                    var b = n.isFunction(a);
                    return this.each(function(c) {
                        n(this).wrapAll(b ? a.call(this, c) : a);
                    });
                },
                unwrap: function() {
                    return this.parent()
                        .each(function() {
                            n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
                        })
                        .end();
                },
            }),
            (n.expr.filters.hidden = function(a) {
                return a.offsetWidth <= 0 && a.offsetHeight <= 0;
            }),
            (n.expr.filters.visible = function(a) {
                return !n.expr.filters.hidden(a);
            });
        var vb = /%20/g,
            wb = /\[\]$/,
            xb = /\r?\n/g,
            yb = /^(?:submit|button|image|reset|file)$/i,
            zb = /^(?:input|select|textarea|keygen)/i;

        function Ab(a, b, c, d) {
            var e;
            if (n.isArray(b))
                n.each(b, function(b, e) {
                    c || wb.test(a) ?
                        d(a, e) :
                        Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
                });
            else if (c || "object" !== n.type(b)) d(a, b);
            else
                for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
        }
        (n.param = function(a, b) {
            var c,
                d = [],
                e = function(a, b) {
                    (b = n.isFunction(b) ? b() : null == b ? "" : b),
                    (d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
                };
            if (
                (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
                    n.isArray(a) || (a.jquery && !n.isPlainObject(a)))
            )
                n.each(a, function() {
                    e(this.name, this.value);
                });
            else
                for (c in a) Ab(c, a[c], b, e);
            return d.join("&").replace(vb, "+");
        }),
        n.fn.extend({
                serialize: function() {
                    return n.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map(function() {
                            var a = n.prop(this, "elements");
                            return a ? n.makeArray(a) : this;
                        })
                        .filter(function() {
                            var a = this.type;
                            return (
                                this.name &&
                                !n(this).is(":disabled") &&
                                zb.test(this.nodeName) &&
                                !yb.test(a) &&
                                (this.checked || !T.test(a))
                            );
                        })
                        .map(function(a, b) {
                            var c = n(this).val();
                            return null == c ?
                                null :
                                n.isArray(c) ?
                                n.map(c, function(a) {
                                    return { name: b.name, value: a.replace(xb, "\r\n") };
                                }) :
                                { name: b.name, value: c.replace(xb, "\r\n") };
                        })
                        .get();
                },
            }),
            (n.ajaxSettings.xhr = function() {
                try {
                    return new XMLHttpRequest();
                } catch (a) {}
            });
        var Bb = 0,
            Cb = {},
            Db = { 0: 200, 1223: 204 },
            Eb = n.ajaxSettings.xhr();
        a.attachEvent &&
            a.attachEvent("onunload", function() {
                for (var a in Cb) Cb[a]();
            }),
            (k.cors = !!Eb && "withCredentials" in Eb),
            (k.ajax = Eb = !!Eb),
            n.ajaxTransport(function(a) {
                var b;
                return k.cors || (Eb && !a.crossDomain) ?
                    {
                        send: function(c, d) {
                            var e,
                                f = a.xhr(),
                                g = ++Bb;
                            if (
                                (f.open(a.type, a.url, a.async, a.username, a.password),
                                    a.xhrFields)
                            )
                                for (e in a.xhrFields) f[e] = a.xhrFields[e];
                            a.mimeType &&
                                f.overrideMimeType &&
                                f.overrideMimeType(a.mimeType),
                                a.crossDomain ||
                                c["X-Requested-With"] ||
                                (c["X-Requested-With"] = "XMLHttpRequest");
                            for (e in c) f.setRequestHeader(e, c[e]);
                            (b = function(a) {
                                return function() {
                                    b &&
                                        (delete Cb[g],
                                            (b = f.onload = f.onerror = null),
                                            "abort" === a ?
                                            f.abort() :
                                            "error" === a ?
                                            d(f.status, f.statusText) :
                                            d(
                                                Db[f.status] || f.status,
                                                f.statusText,
                                                "string" == typeof f.responseText ?
                                                { text: f.responseText } :
                                                void 0,
                                                f.getAllResponseHeaders()
                                            ));
                                };
                            }),
                            (f.onload = b()),
                            (f.onerror = b("error")),
                            (b = Cb[g] = b("abort"));
                            try {
                                f.send((a.hasContent && a.data) || null);
                            } catch (h) {
                                if (b) throw h;
                            }
                        },
                        abort: function() {
                            b && b();
                        },
                    } :
                    void 0;
            }),
            n.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
                },
                contents: { script: /(?:java|ecma)script/ },
                converters: {
                    "text script": function(a) {
                        return n.globalEval(a), a;
                    },
                },
            }),
            n.ajaxPrefilter("script", function(a) {
                void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
            }),
            n.ajaxTransport("script", function(a) {
                if (a.crossDomain) {
                    var b, c;
                    return {
                        send: function(d, e) {
                            (b = n("<script>")
                                .prop({ async: !0, charset: a.scriptCharset, src: a.url })
                                .on(
                                    "load error",
                                    (c = function(a) {
                                        b.remove(),
                                            (c = null),
                                            a && e("error" === a.type ? 404 : 200, a.type);
                                    })
                                )),
                            l.head.appendChild(b[0]);
                        },
                        abort: function() {
                            c && c();
                        },
                    };
                }
            });
        var Fb = [],
            Gb = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var a = Fb.pop() || n.expando + "_" + cb++;
                    return (this[a] = !0), a;
                },
            }),
            n.ajaxPrefilter("json jsonp", function(b, c, d) {
                var e,
                    f,
                    g,
                    h =
                    b.jsonp !== !1 &&
                    (Gb.test(b.url) ?
                        "url" :
                        "string" == typeof b.data &&
                        !(b.contentType || "").indexOf(
                            "application/x-www-form-urlencoded"
                        ) &&
                        Gb.test(b.data) &&
                        "data");
                return h || "jsonp" === b.dataTypes[0] ?
                    ((e = b.jsonpCallback =
                            n.isFunction(b.jsonpCallback) ?
                            b.jsonpCallback() :
                            b.jsonpCallback),
                        h ?
                        (b[h] = b[h].replace(Gb, "$1" + e)) :
                        b.jsonp !== !1 &&
                        (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
                        (b.converters["script json"] = function() {
                            return g || n.error(e + " was not called"), g[0];
                        }),
                        (b.dataTypes[0] = "json"),
                        (f = a[e]),
                        (a[e] = function() {
                            g = arguments;
                        }),
                        d.always(function() {
                            (a[e] = f),
                            b[e] && ((b.jsonpCallback = c.jsonpCallback), Fb.push(e)),
                                g && n.isFunction(f) && f(g[0]),
                                (g = f = void 0);
                        }),
                        "script") :
                    void 0;
            }),
            (n.parseHTML = function(a, b, c) {
                if (!a || "string" != typeof a) return null;
                "boolean" == typeof b && ((c = b), (b = !1)), (b = b || l);
                var d = v.exec(a),
                    e = !c && [];
                return d ?
                    [b.createElement(d[1])] :
                    ((d = n.buildFragment([a], b, e)),
                        e && e.length && n(e).remove(),
                        n.merge([], d.childNodes));
            });
        var Hb = n.fn.load;
        (n.fn.load = function(a, b, c) {
            if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
            var d,
                e,
                f,
                g = this,
                h = a.indexOf(" ");
            return (
                h >= 0 && ((d = n.trim(a.slice(h))), (a = a.slice(0, h))),
                n.isFunction(b) ?
                ((c = b), (b = void 0)) :
                b && "object" == typeof b && (e = "POST"),
                g.length > 0 &&
                n
                .ajax({ url: a, type: e, dataType: "html", data: b })
                .done(function(a) {
                    (f = arguments),
                    g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
                })
                .complete(
                    c &&
                    function(a, b) {
                        g.each(c, f || [a.responseText, b, a]);
                    }
                ),
                this
            );
        }),
        n.each(
                [
                    "ajaxStart",
                    "ajaxStop",
                    "ajaxComplete",
                    "ajaxError",
                    "ajaxSuccess",
                    "ajaxSend",
                ],
                function(a, b) {
                    n.fn[b] = function(a) {
                        return this.on(b, a);
                    };
                }
            ),
            (n.expr.filters.animated = function(a) {
                return n.grep(n.timers, function(b) {
                    return a === b.elem;
                }).length;
            });
        var Ib = a.document.documentElement;

        function Jb(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
        }
        (n.offset = {
            setOffset: function(a, b, c) {
                var d,
                    e,
                    f,
                    g,
                    h,
                    i,
                    j,
                    k = n.css(a, "position"),
                    l = n(a),
                    m = {};
                "static" === k && (a.style.position = "relative"),
                    (h = l.offset()),
                    (f = n.css(a, "top")),
                    (i = n.css(a, "left")),
                    (j =
                        ("absolute" === k || "fixed" === k) &&
                        (f + i).indexOf("auto") > -1),
                    j ?
                    ((d = l.position()), (g = d.top), (e = d.left)) :
                    ((g = parseFloat(f) || 0), (e = parseFloat(i) || 0)),
                    n.isFunction(b) && (b = b.call(a, c, h)),
                    null != b.top && (m.top = b.top - h.top + g),
                    null != b.left && (m.left = b.left - h.left + e),
                    "using" in b ? b.using.call(a, m) : l.css(m);
            },
        }),
        n.fn.extend({
                offset: function(a) {
                    if (arguments.length)
                        return void 0 === a ?
                            this :
                            this.each(function(b) {
                                n.offset.setOffset(this, a, b);
                            });
                    var b,
                        c,
                        d = this[0],
                        e = { top: 0, left: 0 },
                        f = d && d.ownerDocument;
                    if (f)
                        return (
                            (b = f.documentElement),
                            n.contains(b, d) ?
                            (typeof d.getBoundingClientRect !== U &&
                                (e = d.getBoundingClientRect()),
                                (c = Jb(f)), {
                                    top: e.top + c.pageYOffset - b.clientTop,
                                    left: e.left + c.pageXOffset - b.clientLeft,
                                }) :
                            e
                        );
                },
                position: function() {
                    if (this[0]) {
                        var a,
                            b,
                            c = this[0],
                            d = { top: 0, left: 0 };
                        return (
                            "fixed" === n.css(c, "position") ?
                            (b = c.getBoundingClientRect()) :
                            ((a = this.offsetParent()),
                                (b = this.offset()),
                                n.nodeName(a[0], "html") || (d = a.offset()),
                                (d.top += n.css(a[0], "borderTopWidth", !0)),
                                (d.left += n.css(a[0], "borderLeftWidth", !0))), {
                                top: b.top - d.top - n.css(c, "marginTop", !0),
                                left: b.left - d.left - n.css(c, "marginLeft", !0),
                            }
                        );
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var a = this.offsetParent || Ib;
                        while (
                            a &&
                            !n.nodeName(a, "html") &&
                            "static" === n.css(a, "position")
                        )
                            a = a.offsetParent;
                        return a || Ib;
                    });
                },
            }),
            n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
                function(b, c) {
                    var d = "pageYOffset" === c;
                    n.fn[b] = function(e) {
                        return J(
                            this,
                            function(b, e, f) {
                                var g = Jb(b);
                                return void 0 === f ?
                                    g ?
                                    g[c] :
                                    b[e] :
                                    void(g ?
                                        g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) :
                                        (b[e] = f));
                            },
                            b,
                            e,
                            arguments.length,
                            null
                        );
                    };
                }
            ),
            n.each(["top", "left"], function(a, b) {
                n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
                    return c ?
                        ((c = xa(a, b)), va.test(c) ? n(a).position()[b] + "px" : c) :
                        void 0;
                });
            }),
            n.each({ Height: "height", Width: "width" }, function(a, b) {
                n.each({ padding: "inner" + a, content: b, "": "outer" + a },
                    function(c, d) {
                        n.fn[d] = function(d, e) {
                            var f = arguments.length && (c || "boolean" != typeof d),
                                g = c || (d === !0 || e === !0 ? "margin" : "border");
                            return J(
                                this,
                                function(b, c, d) {
                                    var e;
                                    return n.isWindow(b) ?
                                        b.document.documentElement["client" + a] :
                                        9 === b.nodeType ?
                                        ((e = b.documentElement),
                                            Math.max(
                                                b.body["scroll" + a],
                                                e["scroll" + a],
                                                b.body["offset" + a],
                                                e["offset" + a],
                                                e["client" + a]
                                            )) :
                                        void 0 === d ?
                                        n.css(b, c, g) :
                                        n.style(b, c, d, g);
                                },
                                b,
                                f ? d : void 0,
                                f,
                                null
                            );
                        };
                    }
                );
            }),
            (n.fn.size = function() {
                return this.length;
            }),
            (n.fn.andSelf = n.fn.addBack),
            "function" == typeof define &&
            define.amd &&
            define("jquery", [], function() {
                return n;
            });
        var Kb = a.jQuery,
            Lb = a.$;
        return (
            (n.noConflict = function(b) {
                return (
                    a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n
                );
            }),
            typeof b === U && (a.jQuery = a.$ = n),
            n
        );
    });
} catch (e) {
    console.error("An error has occurred: " + e.stack);
}
/* https://mrrk.ru/wp-content/themes/industrial/js/ion.rangeSlider.min.js */
try {
    // Ion.RangeSlider, 2.3.0, © Denis Ineshin, 2010 - 2018, IonDen.com, Build date: 2018-12-11 23:11:14
    !(function(i) {
        !jQuery && "function" == typeof define && define.amd ?
            define(["jquery"], function(t) {
                return i(t, document, window, navigator);
            }) :
            jQuery || "object" != typeof exports ?
            i(jQuery, document, window, navigator) :
            i(require("jquery"), document, window, navigator);
    })(function(a, c, l, t, _) {
        "use strict";
        var i,
            s,
            o = 0,
            e =
            ((i = t.userAgent),
                (s = /msie\s\d+/i),
                0 < i.search(s) &&
                s.exec(i).toString().split(" ")[1] < 9 &&
                (a("html").addClass("lt-ie9"), !0));
        Function.prototype.bind ||
            (Function.prototype.bind = function(o) {
                var e = this,
                    h = [].slice;
                if ("function" != typeof e) throw new TypeError();
                var r = h.call(arguments, 1),
                    n = function() {
                        if (this instanceof n) {
                            var t = function() {};
                            t.prototype = e.prototype;
                            var i = new t(),
                                s = e.apply(i, r.concat(h.call(arguments)));
                            return Object(s) === s ? s : i;
                        }
                        return e.apply(o, r.concat(h.call(arguments)));
                    };
                return n;
            }),
            Array.prototype.indexOf ||
            (Array.prototype.indexOf = function(t, i) {
                var s;
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                var o = Object(this),
                    e = o.length >>> 0;
                if (0 === e) return -1;
                var h = +i || 0;
                if ((Math.abs(h) === 1 / 0 && (h = 0), e <= h)) return -1;
                for (s = Math.max(0 <= h ? h : e - Math.abs(h), 0); s < e;) {
                    if (s in o && o[s] === t) return s;
                    s++;
                }
                return -1;
            });
        var h = function(t, i, s) {
            (this.VERSION = "2.3.0"),
            (this.input = t),
            (this.plugin_count = s),
            (this.current_plugin = 0),
            (this.calc_count = 0),
            (this.update_tm = 0),
            (this.old_from = 0),
            (this.old_to = 0),
            (this.old_min_interval = null),
            (this.raf_id = null),
            (this.dragging = !1),
            (this.force_redraw = !1),
            (this.no_diapason = !1),
            (this.has_tab_index = !0),
            (this.is_key = !1),
            (this.is_update = !1),
            (this.is_start = !0),
            (this.is_finish = !1),
            (this.is_active = !1),
            (this.is_resize = !1),
            (this.is_click = !1),
            (i = i || {}),
            (this.$cache = {
                win: a(l),
                body: a(c.body),
                input: a(t),
                cont: null,
                rs: null,
                min: null,
                max: null,
                from: null,
                to: null,
                single: null,
                bar: null,
                line: null,
                s_single: null,
                s_from: null,
                s_to: null,
                shad_single: null,
                shad_from: null,
                shad_to: null,
                edge: null,
                grid: null,
                grid_labels: [],
            }),
            (this.coords = {
                x_gap: 0,
                x_pointer: 0,
                w_rs: 0,
                w_rs_old: 0,
                w_handle: 0,
                p_gap: 0,
                p_gap_left: 0,
                p_gap_right: 0,
                p_step: 0,
                p_pointer: 0,
                p_handle: 0,
                p_single_fake: 0,
                p_single_real: 0,
                p_from_fake: 0,
                p_from_real: 0,
                p_to_fake: 0,
                p_to_real: 0,
                p_bar_x: 0,
                p_bar_w: 0,
                grid_gap: 0,
                big_num: 0,
                big: [],
                big_w: [],
                big_p: [],
                big_x: [],
            }),
            (this.labels = {
                w_min: 0,
                w_max: 0,
                w_from: 0,
                w_to: 0,
                w_single: 0,
                p_min: 0,
                p_max: 0,
                p_from_fake: 0,
                p_from_left: 0,
                p_to_fake: 0,
                p_to_left: 0,
                p_single_fake: 0,
                p_single_left: 0,
            });
            var o,
                e,
                h,
                r = this.$cache.input,
                n = r.prop("value");
            for (h in ((o = {
                        skin: "flat",
                        type: "single",
                        min: 10,
                        max: 100,
                        from: null,
                        to: null,
                        step: 1,
                        min_interval: 0,
                        max_interval: 0,
                        drag_interval: !1,
                        values: [],
                        p_values: [],
                        from_fixed: !1,
                        from_min: null,
                        from_max: null,
                        from_shadow: !1,
                        to_fixed: !1,
                        to_min: null,
                        to_max: null,
                        to_shadow: !1,
                        prettify_enabled: !0,
                        prettify_separator: " ",
                        prettify: null,
                        force_edges: !1,
                        keyboard: !0,
                        grid: !1,
                        grid_margin: !0,
                        grid_num: 4,
                        grid_snap: !1,
                        hide_min_max: !1,
                        hide_from_to: !1,
                        prefix: "",
                        postfix: "",
                        max_postfix: "",
                        decorate_both: !0,
                        values_separator: " — ",
                        input_values_separator: ";",
                        disable: !1,
                        block: !1,
                        extra_classes: "",
                        scope: null,
                        onStart: null,
                        onChange: null,
                        onFinish: null,
                        onUpdate: null,
                    }),
                    "INPUT" !== r[0].nodeName &&
                    console &&
                    console.warn &&
                    console.warn("Base element should be <input>!", r[0]),
                    ((e = {
                        skin: r.data("skin"),
                        type: r.data("type"),
                        min: r.data("min"),
                        max: r.data("max"),
                        from: r.data("from"),
                        to: r.data("to"),
                        step: r.data("step"),
                        min_interval: r.data("minInterval"),
                        max_interval: r.data("maxInterval"),
                        drag_interval: r.data("dragInterval"),
                        values: r.data("values"),
                        from_fixed: r.data("fromFixed"),
                        from_min: r.data("fromMin"),
                        from_max: r.data("fromMax"),
                        from_shadow: r.data("fromShadow"),
                        to_fixed: r.data("toFixed"),
                        to_min: r.data("toMin"),
                        to_max: r.data("toMax"),
                        to_shadow: r.data("toShadow"),
                        prettify_enabled: r.data("prettifyEnabled"),
                        prettify_separator: r.data("prettifySeparator"),
                        force_edges: r.data("forceEdges"),
                        keyboard: r.data("keyboard"),
                        grid: r.data("grid"),
                        grid_margin: r.data("gridMargin"),
                        grid_num: r.data("gridNum"),
                        grid_snap: r.data("gridSnap"),
                        hide_min_max: r.data("hideMinMax"),
                        hide_from_to: r.data("hideFromTo"),
                        prefix: r.data("prefix"),
                        postfix: r.data("postfix"),
                        max_postfix: r.data("maxPostfix"),
                        decorate_both: r.data("decorateBoth"),
                        values_separator: r.data("valuesSeparator"),
                        input_values_separator: r.data("inputValuesSeparator"),
                        disable: r.data("disable"),
                        block: r.data("block"),
                        extra_classes: r.data("extraClasses"),
                    }).values = e.values && e.values.split(",")),
                    e))
                e.hasOwnProperty(h) && ((e[h] !== _ && "" !== e[h]) || delete e[h]);
            n !== _ &&
                "" !== n &&
                ((n = n.split(
                        e.input_values_separator || i.input_values_separator || ";"
                    ))[0] &&
                    n[0] == +n[0] &&
                    (n[0] = +n[0]),
                    n[1] && n[1] == +n[1] && (n[1] = +n[1]),
                    i && i.values && i.values.length ?
                    ((o.from = n[0] && i.values.indexOf(n[0])),
                        (o.to = n[1] && i.values.indexOf(n[1]))) :
                    ((o.from = n[0] && +n[0]), (o.to = n[1] && +n[1]))),
                a.extend(o, i),
                a.extend(o, e),
                (this.options = o),
                (this.update_check = {}),
                this.validate(),
                (this.result = {
                    input: this.$cache.input,
                    slider: null,
                    min: this.options.min,
                    max: this.options.max,
                    from: this.options.from,
                    from_percent: 0,
                    from_value: null,
                    to: this.options.to,
                    to_percent: 0,
                    to_value: null,
                }),
                this.init();
        };
        (h.prototype = {
            init: function(t) {
                (this.no_diapason = !1),
                (this.coords.p_step = this.convertToPercent(this.options.step, !0)),
                (this.target = "base"),
                this.toggleInput(),
                    this.append(),
                    this.setMinMax(),
                    t ?
                    ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate()) :
                    ((this.force_redraw = !0), this.calc(!0), this.callOnStart()),
                    this.updateScene();
            },
            append: function() {
                var t =
                    '<span class="irs irs--' +
                    this.options.skin +
                    " js-irs-" +
                    this.plugin_count +
                    " " +
                    this.options.extra_classes +
                    '"></span>';
                this.$cache.input.before(t),
                    this.$cache.input.prop("readonly", !0),
                    (this.$cache.cont = this.$cache.input.prev()),
                    (this.result.slider = this.$cache.cont),
                    this.$cache.cont.html(
                        '<span class="irs"><span class="irs-line" tabindex="0"></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span>'
                    ),
                    (this.$cache.rs = this.$cache.cont.find(".irs")),
                    (this.$cache.min = this.$cache.cont.find(".irs-min")),
                    (this.$cache.max = this.$cache.cont.find(".irs-max")),
                    (this.$cache.from = this.$cache.cont.find(".irs-from")),
                    (this.$cache.to = this.$cache.cont.find(".irs-to")),
                    (this.$cache.single = this.$cache.cont.find(".irs-single")),
                    (this.$cache.line = this.$cache.cont.find(".irs-line")),
                    (this.$cache.grid = this.$cache.cont.find(".irs-grid")),
                    "single" === this.options.type ?
                    (this.$cache.cont.append(
                            '<span class="irs-bar irs-bar--single"></span><span class="irs-shadow shadow-single"></span><span class="irs-handle single"><i></i><i></i><i></i></span>'
                        ),
                        (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
                        (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
                        (this.$cache.s_single = this.$cache.cont.find(".single")),
                        (this.$cache.from[0].style.visibility = "hidden"),
                        (this.$cache.to[0].style.visibility = "hidden"),
                        (this.$cache.shad_single =
                            this.$cache.cont.find(".shadow-single"))) :
                    (this.$cache.cont.append(
                            '<span class="irs-bar"></span><span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-handle from"><i></i><i></i><i></i></span><span class="irs-handle to"><i></i><i></i><i></i></span>'
                        ),
                        (this.$cache.bar = this.$cache.cont.find(".irs-bar")),
                        (this.$cache.s_from = this.$cache.cont.find(".from")),
                        (this.$cache.s_to = this.$cache.cont.find(".to")),
                        (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
                        (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
                        this.setTopHandler()),
                    this.options.hide_from_to &&
                    ((this.$cache.from[0].style.display = "none"),
                        (this.$cache.to[0].style.display = "none"),
                        (this.$cache.single[0].style.display = "none")),
                    this.appendGrid(),
                    this.options.disable ?
                    (this.appendDisableMask(), (this.$cache.input[0].disabled = !0)) :
                    ((this.$cache.input[0].disabled = !1),
                        this.removeDisableMask(),
                        this.bindEvents()),
                    this.options.disable ||
                    (this.options.block ?
                        this.appendDisableMask() :
                        this.removeDisableMask()),
                    this.options.drag_interval &&
                    (this.$cache.bar[0].style.cursor = "ew-resize");
            },
            setTopHandler: function() {
                var t = this.options.min,
                    i = this.options.max,
                    s = this.options.from,
                    o = this.options.to;
                t < s && o === i ?
                    this.$cache.s_from.addClass("type_last") :
                    o < i && this.$cache.s_to.addClass("type_last");
            },
            changeLevel: function(t) {
                switch (t) {
                    case "single":
                        (this.coords.p_gap = this.toFixed(
                            this.coords.p_pointer - this.coords.p_single_fake
                        )),
                        this.$cache.s_single.addClass("state_hover");
                        break;
                    case "from":
                        (this.coords.p_gap = this.toFixed(
                            this.coords.p_pointer - this.coords.p_from_fake
                        )),
                        this.$cache.s_from.addClass("state_hover"),
                            this.$cache.s_from.addClass("type_last"),
                            this.$cache.s_to.removeClass("type_last");
                        break;
                    case "to":
                        (this.coords.p_gap = this.toFixed(
                            this.coords.p_pointer - this.coords.p_to_fake
                        )),
                        this.$cache.s_to.addClass("state_hover"),
                            this.$cache.s_to.addClass("type_last"),
                            this.$cache.s_from.removeClass("type_last");
                        break;
                    case "both":
                        (this.coords.p_gap_left = this.toFixed(
                            this.coords.p_pointer - this.coords.p_from_fake
                        )),
                        (this.coords.p_gap_right = this.toFixed(
                            this.coords.p_to_fake - this.coords.p_pointer
                        )),
                        this.$cache.s_to.removeClass("type_last"),
                            this.$cache.s_from.removeClass("type_last");
                }
            },
            appendDisableMask: function() {
                this.$cache.cont.append('<span class="irs-disable-mask"></span>'),
                    this.$cache.cont.addClass("irs-disabled");
            },
            removeDisableMask: function() {
                this.$cache.cont.remove(".irs-disable-mask"),
                    this.$cache.cont.removeClass("irs-disabled");
            },
            remove: function() {
                this.$cache.cont.remove(),
                    (this.$cache.cont = null),
                    this.$cache.line.off("keydown.irs_" + this.plugin_count),
                    this.$cache.body.off("touchmove.irs_" + this.plugin_count),
                    this.$cache.body.off("mousemove.irs_" + this.plugin_count),
                    this.$cache.win.off("touchend.irs_" + this.plugin_count),
                    this.$cache.win.off("mouseup.irs_" + this.plugin_count),
                    e &&
                    (this.$cache.body.off("mouseup.irs_" + this.plugin_count),
                        this.$cache.body.off("mouseleave.irs_" + this.plugin_count)),
                    (this.$cache.grid_labels = []),
                    (this.coords.big = []),
                    (this.coords.big_w = []),
                    (this.coords.big_p = []),
                    (this.coords.big_x = []),
                    cancelAnimationFrame(this.raf_id);
            },
            bindEvents: function() {
                this.no_diapason ||
                    (this.$cache.body.on(
                            "touchmove.irs_" + this.plugin_count,
                            this.pointerMove.bind(this)
                        ),
                        this.$cache.body.on(
                            "mousemove.irs_" + this.plugin_count,
                            this.pointerMove.bind(this)
                        ),
                        this.$cache.win.on(
                            "touchend.irs_" + this.plugin_count,
                            this.pointerUp.bind(this)
                        ),
                        this.$cache.win.on(
                            "mouseup.irs_" + this.plugin_count,
                            this.pointerUp.bind(this)
                        ),
                        this.$cache.line.on(
                            "touchstart.irs_" + this.plugin_count,
                            this.pointerClick.bind(this, "click")
                        ),
                        this.$cache.line.on(
                            "mousedown.irs_" + this.plugin_count,
                            this.pointerClick.bind(this, "click")
                        ),
                        this.$cache.line.on(
                            "focus.irs_" + this.plugin_count,
                            this.pointerFocus.bind(this)
                        ),
                        this.options.drag_interval && "double" === this.options.type ?
                        (this.$cache.bar.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "both")
                            ),
                            this.$cache.bar.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "both")
                            )) :
                        (this.$cache.bar.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerClick.bind(this, "click")
                            ),
                            this.$cache.bar.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerClick.bind(this, "click")
                            )),
                        "single" === this.options.type ?
                        (this.$cache.single.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "single")
                            ),
                            this.$cache.s_single.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "single")
                            ),
                            this.$cache.shad_single.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerClick.bind(this, "click")
                            ),
                            this.$cache.single.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "single")
                            ),
                            this.$cache.s_single.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "single")
                            ),
                            this.$cache.edge.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerClick.bind(this, "click")
                            ),
                            this.$cache.shad_single.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerClick.bind(this, "click")
                            )) :
                        (this.$cache.single.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, null)
                            ),
                            this.$cache.single.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, null)
                            ),
                            this.$cache.from.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "from")
                            ),
                            this.$cache.s_from.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "from")
                            ),
                            this.$cache.to.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "to")
                            ),
                            this.$cache.s_to.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "to")
                            ),
                            this.$cache.shad_from.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerClick.bind(this, "click")
                            ),
                            this.$cache.shad_to.on(
                                "touchstart.irs_" + this.plugin_count,
                                this.pointerClick.bind(this, "click")
                            ),
                            this.$cache.from.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "from")
                            ),
                            this.$cache.s_from.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "from")
                            ),
                            this.$cache.to.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "to")
                            ),
                            this.$cache.s_to.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerDown.bind(this, "to")
                            ),
                            this.$cache.shad_from.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerClick.bind(this, "click")
                            ),
                            this.$cache.shad_to.on(
                                "mousedown.irs_" + this.plugin_count,
                                this.pointerClick.bind(this, "click")
                            )),
                        this.options.keyboard &&
                        this.$cache.line.on(
                            "keydown.irs_" + this.plugin_count,
                            this.key.bind(this, "keyboard")
                        ),
                        e &&
                        (this.$cache.body.on(
                                "mouseup.irs_" + this.plugin_count,
                                this.pointerUp.bind(this)
                            ),
                            this.$cache.body.on(
                                "mouseleave.irs_" + this.plugin_count,
                                this.pointerUp.bind(this)
                            )));
            },
            pointerFocus: function(t) {
                var i, s;
                this.target ||
                    ((i = (s =
                            "single" === this.options.type ?
                            this.$cache.single :
                            this.$cache.from).offset().left),
                        (i += s.width() / 2 - 1),
                        this.pointerClick("single", {
                            preventDefault: function() {},
                            pageX: i,
                        }));
            },
            pointerMove: function(t) {
                if (this.dragging) {
                    var i =
                        t.pageX ||
                        (t.originalEvent.touches && t.originalEvent.touches[0].pageX);
                    (this.coords.x_pointer = i - this.coords.x_gap), this.calc();
                }
            },
            pointerUp: function(t) {
                this.current_plugin === this.plugin_count &&
                    this.is_active &&
                    ((this.is_active = !1),
                        this.$cache.cont.find(".state_hover").removeClass("state_hover"),
                        (this.force_redraw = !0),
                        e && a("*").prop("unselectable", !1),
                        this.updateScene(),
                        this.restoreOriginalMinInterval(),
                        (a.contains(this.$cache.cont[0], t.target) || this.dragging) &&
                        this.callOnFinish(),
                        (this.dragging = !1));
            },
            pointerDown: function(t, i) {
                i.preventDefault();
                var s =
                    i.pageX ||
                    (i.originalEvent.touches && i.originalEvent.touches[0].pageX);
                2 !== i.button &&
                    ("both" === t && this.setTempMinInterval(),
                        t || (t = this.target || "from"),
                        (this.current_plugin = this.plugin_count),
                        (this.target = t),
                        (this.is_active = !0),
                        (this.dragging = !0),
                        (this.coords.x_gap = this.$cache.rs.offset().left),
                        (this.coords.x_pointer = s - this.coords.x_gap),
                        this.calcPointerPercent(),
                        this.changeLevel(t),
                        e && a("*").prop("unselectable", !0),
                        this.$cache.line.trigger("focus"),
                        this.updateScene());
            },
            pointerClick: function(t, i) {
                i.preventDefault();
                var s =
                    i.pageX ||
                    (i.originalEvent.touches && i.originalEvent.touches[0].pageX);
                2 !== i.button &&
                    ((this.current_plugin = this.plugin_count),
                        (this.target = t),
                        (this.is_click = !0),
                        (this.coords.x_gap = this.$cache.rs.offset().left),
                        (this.coords.x_pointer = +(s - this.coords.x_gap).toFixed()),
                        (this.force_redraw = !0),
                        this.calc(),
                        this.$cache.line.trigger("focus"));
            },
            key: function(t, i) {
                if (!(
                        this.current_plugin !== this.plugin_count ||
                        i.altKey ||
                        i.ctrlKey ||
                        i.shiftKey ||
                        i.metaKey
                    )) {
                    switch (i.which) {
                        case 83:
                        case 65:
                        case 40:
                        case 37:
                            i.preventDefault(), this.moveByKey(!1);
                            break;
                        case 87:
                        case 68:
                        case 38:
                        case 39:
                            i.preventDefault(), this.moveByKey(!0);
                    }
                    return !0;
                }
            },
            moveByKey: function(t) {
                var i = this.coords.p_pointer,
                    s = (this.options.max - this.options.min) / 100;
                (s = this.options.step / s),
                t ? (i += s) : (i -= s),
                    (this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * i)),
                    (this.is_key = !0),
                    this.calc();
            },
            setMinMax: function() {
                if (this.options) {
                    if (this.options.hide_min_max)
                        return (
                            (this.$cache.min[0].style.display = "none"),
                            void(this.$cache.max[0].style.display = "none")
                        );
                    if (this.options.values.length)
                        this.$cache.min.html(
                            this.decorate(this.options.p_values[this.options.min])
                        ),
                        this.$cache.max.html(
                            this.decorate(this.options.p_values[this.options.max])
                        );
                    else {
                        var t = this._prettify(this.options.min),
                            i = this._prettify(this.options.max);
                        (this.result.min_pretty = t),
                        (this.result.max_pretty = i),
                        this.$cache.min.html(this.decorate(t, this.options.min)),
                            this.$cache.max.html(this.decorate(i, this.options.max));
                    }
                    (this.labels.w_min = this.$cache.min.outerWidth(!1)),
                    (this.labels.w_max = this.$cache.max.outerWidth(!1));
                }
            },
            setTempMinInterval: function() {
                var t = this.result.to - this.result.from;
                null === this.old_min_interval &&
                    (this.old_min_interval = this.options.min_interval),
                    (this.options.min_interval = t);
            },
            restoreOriginalMinInterval: function() {
                null !== this.old_min_interval &&
                    ((this.options.min_interval = this.old_min_interval),
                        (this.old_min_interval = null));
            },
            calc: function(t) {
                if (
                    this.options &&
                    (this.calc_count++,
                        (10 === this.calc_count || t) &&
                        ((this.calc_count = 0),
                            (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                            this.calcHandlePercent()),
                        this.coords.w_rs)
                ) {
                    this.calcPointerPercent();
                    var i = this.getHandleX();
                    switch (
                        ("both" === this.target &&
                            ((this.coords.p_gap = 0), (i = this.getHandleX())),
                            "click" === this.target &&
                            ((this.coords.p_gap = this.coords.p_handle / 2),
                                (i = this.getHandleX()),
                                this.options.drag_interval ?
                                (this.target = "both_one") :
                                (this.target = this.chooseHandle(i))),
                            this.target)
                    ) {
                        case "base":
                            var s = (this.options.max - this.options.min) / 100,
                                o = (this.result.from - this.options.min) / s,
                                e = (this.result.to - this.options.min) / s;
                            (this.coords.p_single_real = this.toFixed(o)),
                            (this.coords.p_from_real = this.toFixed(o)),
                            (this.coords.p_to_real = this.toFixed(e)),
                            (this.coords.p_single_real = this.checkDiapason(
                                this.coords.p_single_real,
                                this.options.from_min,
                                this.options.from_max
                            )),
                            (this.coords.p_from_real = this.checkDiapason(
                                this.coords.p_from_real,
                                this.options.from_min,
                                this.options.from_max
                            )),
                            (this.coords.p_to_real = this.checkDiapason(
                                this.coords.p_to_real,
                                this.options.to_min,
                                this.options.to_max
                            )),
                            (this.coords.p_single_fake = this.convertToFakePercent(
                                this.coords.p_single_real
                            )),
                            (this.coords.p_from_fake = this.convertToFakePercent(
                                this.coords.p_from_real
                            )),
                            (this.coords.p_to_fake = this.convertToFakePercent(
                                this.coords.p_to_real
                            )),
                            (this.target = null);
                            break;
                        case "single":
                            if (this.options.from_fixed) break;
                            (this.coords.p_single_real = this.convertToRealPercent(i)),
                            (this.coords.p_single_real = this.calcWithStep(
                                this.coords.p_single_real
                            )),
                            (this.coords.p_single_real = this.checkDiapason(
                                this.coords.p_single_real,
                                this.options.from_min,
                                this.options.from_max
                            )),
                            (this.coords.p_single_fake = this.convertToFakePercent(
                                this.coords.p_single_real
                            ));
                            break;
                        case "from":
                            if (this.options.from_fixed) break;
                            (this.coords.p_from_real = this.convertToRealPercent(i)),
                            (this.coords.p_from_real = this.calcWithStep(
                                this.coords.p_from_real
                            )),
                            this.coords.p_from_real > this.coords.p_to_real &&
                                (this.coords.p_from_real = this.coords.p_to_real),
                                (this.coords.p_from_real = this.checkDiapason(
                                    this.coords.p_from_real,
                                    this.options.from_min,
                                    this.options.from_max
                                )),
                                (this.coords.p_from_real = this.checkMinInterval(
                                    this.coords.p_from_real,
                                    this.coords.p_to_real,
                                    "from"
                                )),
                                (this.coords.p_from_real = this.checkMaxInterval(
                                    this.coords.p_from_real,
                                    this.coords.p_to_real,
                                    "from"
                                )),
                                (this.coords.p_from_fake = this.convertToFakePercent(
                                    this.coords.p_from_real
                                ));
                            break;
                        case "to":
                            if (this.options.to_fixed) break;
                            (this.coords.p_to_real = this.convertToRealPercent(i)),
                            (this.coords.p_to_real = this.calcWithStep(
                                this.coords.p_to_real
                            )),
                            this.coords.p_to_real < this.coords.p_from_real &&
                                (this.coords.p_to_real = this.coords.p_from_real),
                                (this.coords.p_to_real = this.checkDiapason(
                                    this.coords.p_to_real,
                                    this.options.to_min,
                                    this.options.to_max
                                )),
                                (this.coords.p_to_real = this.checkMinInterval(
                                    this.coords.p_to_real,
                                    this.coords.p_from_real,
                                    "to"
                                )),
                                (this.coords.p_to_real = this.checkMaxInterval(
                                    this.coords.p_to_real,
                                    this.coords.p_from_real,
                                    "to"
                                )),
                                (this.coords.p_to_fake = this.convertToFakePercent(
                                    this.coords.p_to_real
                                ));
                            break;
                        case "both":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            (i = this.toFixed(i + 0.001 * this.coords.p_handle)),
                            (this.coords.p_from_real =
                                this.convertToRealPercent(i) - this.coords.p_gap_left),
                            (this.coords.p_from_real = this.calcWithStep(
                                this.coords.p_from_real
                            )),
                            (this.coords.p_from_real = this.checkDiapason(
                                this.coords.p_from_real,
                                this.options.from_min,
                                this.options.from_max
                            )),
                            (this.coords.p_from_real = this.checkMinInterval(
                                this.coords.p_from_real,
                                this.coords.p_to_real,
                                "from"
                            )),
                            (this.coords.p_from_fake = this.convertToFakePercent(
                                this.coords.p_from_real
                            )),
                            (this.coords.p_to_real =
                                this.convertToRealPercent(i) + this.coords.p_gap_right),
                            (this.coords.p_to_real = this.calcWithStep(
                                this.coords.p_to_real
                            )),
                            (this.coords.p_to_real = this.checkDiapason(
                                this.coords.p_to_real,
                                this.options.to_min,
                                this.options.to_max
                            )),
                            (this.coords.p_to_real = this.checkMinInterval(
                                this.coords.p_to_real,
                                this.coords.p_from_real,
                                "to"
                            )),
                            (this.coords.p_to_fake = this.convertToFakePercent(
                                this.coords.p_to_real
                            ));
                            break;
                        case "both_one":
                            if (this.options.from_fixed || this.options.to_fixed) break;
                            var h = this.convertToRealPercent(i),
                                r = this.result.from_percent,
                                n = this.result.to_percent - r,
                                a = n / 2,
                                c = h - a,
                                l = h + a;
                            c < 0 && (l = (c = 0) + n),
                                100 < l && (c = (l = 100) - n),
                                (this.coords.p_from_real = this.calcWithStep(c)),
                                (this.coords.p_from_real = this.checkDiapason(
                                    this.coords.p_from_real,
                                    this.options.from_min,
                                    this.options.from_max
                                )),
                                (this.coords.p_from_fake = this.convertToFakePercent(
                                    this.coords.p_from_real
                                )),
                                (this.coords.p_to_real = this.calcWithStep(l)),
                                (this.coords.p_to_real = this.checkDiapason(
                                    this.coords.p_to_real,
                                    this.options.to_min,
                                    this.options.to_max
                                )),
                                (this.coords.p_to_fake = this.convertToFakePercent(
                                    this.coords.p_to_real
                                ));
                    }
                    "single" === this.options.type ?
                        ((this.coords.p_bar_x = this.coords.p_handle / 2),
                            (this.coords.p_bar_w = this.coords.p_single_fake),
                            (this.result.from_percent = this.coords.p_single_real),
                            (this.result.from = this.convertToValue(
                                this.coords.p_single_real
                            )),
                            (this.result.from_pretty = this._prettify(this.result.from)),
                            this.options.values.length &&
                            (this.result.from_value =
                                this.options.values[this.result.from])) :
                        ((this.coords.p_bar_x = this.toFixed(
                                this.coords.p_from_fake + this.coords.p_handle / 2
                            )),
                            (this.coords.p_bar_w = this.toFixed(
                                this.coords.p_to_fake - this.coords.p_from_fake
                            )),
                            (this.result.from_percent = this.coords.p_from_real),
                            (this.result.from = this.convertToValue(this.coords.p_from_real)),
                            (this.result.from_pretty = this._prettify(this.result.from)),
                            (this.result.to_percent = this.coords.p_to_real),
                            (this.result.to = this.convertToValue(this.coords.p_to_real)),
                            (this.result.to_pretty = this._prettify(this.result.to)),
                            this.options.values.length &&
                            ((this.result.from_value =
                                    this.options.values[this.result.from]),
                                (this.result.to_value = this.options.values[this.result.to]))),
                        this.calcMinMax(),
                        this.calcLabels();
                }
            },
            calcPointerPercent: function() {
                this.coords.w_rs ?
                    (this.coords.x_pointer < 0 || isNaN(this.coords.x_pointer) ?
                        (this.coords.x_pointer = 0) :
                        this.coords.x_pointer > this.coords.w_rs &&
                        (this.coords.x_pointer = this.coords.w_rs),
                        (this.coords.p_pointer = this.toFixed(
                            (this.coords.x_pointer / this.coords.w_rs) * 100
                        ))) :
                    (this.coords.p_pointer = 0);
            },
            convertToRealPercent: function(t) {
                return (t / (100 - this.coords.p_handle)) * 100;
            },
            convertToFakePercent: function(t) {
                return (t / 100) * (100 - this.coords.p_handle);
            },
            getHandleX: function() {
                var t = 100 - this.coords.p_handle,
                    i = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
                return i < 0 ? (i = 0) : t < i && (i = t), i;
            },
            calcHandlePercent: function() {
                "single" === this.options.type ?
                    (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) :
                    (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
                    (this.coords.p_handle = this.toFixed(
                        (this.coords.w_handle / this.coords.w_rs) * 100
                    ));
            },
            chooseHandle: function(t) {
                return "single" === this.options.type ?
                    "single" :
                    this.coords.p_from_real +
                    (this.coords.p_to_real - this.coords.p_from_real) / 2 <=
                    t ?
                    this.options.to_fixed ?
                    "from" :
                    "to" :
                    this.options.from_fixed ?
                    "to" :
                    "from";
            },
            calcMinMax: function() {
                this.coords.w_rs &&
                    ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100),
                        (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
            },
            calcLabels: function() {
                this.coords.w_rs &&
                    !this.options.hide_from_to &&
                    ("single" === this.options.type ?
                        ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
                            (this.labels.p_single_fake =
                                (this.labels.w_single / this.coords.w_rs) * 100),
                            (this.labels.p_single_left =
                                this.coords.p_single_fake +
                                this.coords.p_handle / 2 -
                                this.labels.p_single_fake / 2)) :
                        ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
                            (this.labels.p_from_fake =
                                (this.labels.w_from / this.coords.w_rs) * 100),
                            (this.labels.p_from_left =
                                this.coords.p_from_fake +
                                this.coords.p_handle / 2 -
                                this.labels.p_from_fake / 2),
                            (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
                            (this.labels.p_from_left = this.checkEdges(
                                this.labels.p_from_left,
                                this.labels.p_from_fake
                            )),
                            (this.labels.w_to = this.$cache.to.outerWidth(!1)),
                            (this.labels.p_to_fake =
                                (this.labels.w_to / this.coords.w_rs) * 100),
                            (this.labels.p_to_left =
                                this.coords.p_to_fake +
                                this.coords.p_handle / 2 -
                                this.labels.p_to_fake / 2),
                            (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
                            (this.labels.p_to_left = this.checkEdges(
                                this.labels.p_to_left,
                                this.labels.p_to_fake
                            )),
                            (this.labels.w_single = this.$cache.single.outerWidth(!1)),
                            (this.labels.p_single_fake =
                                (this.labels.w_single / this.coords.w_rs) * 100),
                            (this.labels.p_single_left =
                                (this.labels.p_from_left +
                                    this.labels.p_to_left +
                                    this.labels.p_to_fake) /
                                2 -
                                this.labels.p_single_fake / 2),
                            (this.labels.p_single_left = this.toFixed(
                                this.labels.p_single_left
                            ))),
                        (this.labels.p_single_left = this.checkEdges(
                            this.labels.p_single_left,
                            this.labels.p_single_fake
                        )));
            },
            updateScene: function() {
                this.raf_id &&
                    (cancelAnimationFrame(this.raf_id), (this.raf_id = null)),
                    clearTimeout(this.update_tm),
                    (this.update_tm = null),
                    this.options &&
                    (this.drawHandles(),
                        this.is_active ?
                        (this.raf_id = requestAnimationFrame(
                            this.updateScene.bind(this)
                        )) :
                        (this.update_tm = setTimeout(
                            this.updateScene.bind(this),
                            300
                        )));
            },
            drawHandles: function() {
                (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                this.coords.w_rs &&
                    (this.coords.w_rs !== this.coords.w_rs_old &&
                        ((this.target = "base"), (this.is_resize = !0)),
                        (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw) &&
                        (this.setMinMax(),
                            this.calc(!0),
                            this.drawLabels(),
                            this.options.grid &&
                            (this.calcGridMargin(), this.calcGridLabels()),
                            (this.force_redraw = !0),
                            (this.coords.w_rs_old = this.coords.w_rs),
                            this.drawShadow()),
                        this.coords.w_rs &&
                        (this.dragging || this.force_redraw || this.is_key) &&
                        ((this.old_from !== this.result.from ||
                                this.old_to !== this.result.to ||
                                this.force_redraw ||
                                this.is_key) &&
                            (this.drawLabels(),
                                (this.$cache.bar[0].style.left = this.coords.p_bar_x + "%"),
                                (this.$cache.bar[0].style.width = this.coords.p_bar_w + "%"),
                                "single" === this.options.type ?
                                ((this.$cache.bar[0].style.left = 0),
                                    (this.$cache.bar[0].style.width =
                                        this.coords.p_bar_w + this.coords.p_bar_x + "%"),
                                    (this.$cache.s_single[0].style.left =
                                        this.coords.p_single_fake + "%")) :
                                ((this.$cache.s_from[0].style.left =
                                        this.coords.p_from_fake + "%"),
                                    (this.$cache.s_to[0].style.left =
                                        this.coords.p_to_fake + "%"),
                                    (this.old_from !== this.result.from || this.force_redraw) &&
                                    (this.$cache.from[0].style.left =
                                        this.labels.p_from_left + "%"),
                                    (this.old_to !== this.result.to || this.force_redraw) &&
                                    (this.$cache.to[0].style.left =
                                        this.labels.p_to_left + "%")),
                                (this.$cache.single[0].style.left =
                                    this.labels.p_single_left + "%"),
                                this.writeToInput(),
                                (this.old_from === this.result.from &&
                                    this.old_to === this.result.to) ||
                                this.is_start ||
                                (this.$cache.input.trigger("change"),
                                    this.$cache.input.trigger("input")),
                                (this.old_from = this.result.from),
                                (this.old_to = this.result.to),
                                this.is_resize ||
                                this.is_update ||
                                this.is_start ||
                                this.is_finish ||
                                this.callOnChange(),
                                (this.is_key || this.is_click) &&
                                ((this.is_key = !1),
                                    (this.is_click = !1),
                                    this.callOnFinish()),
                                (this.is_update = !1),
                                (this.is_resize = !1),
                                (this.is_finish = !1)),
                            (this.is_start = !1),
                            (this.is_key = !1),
                            (this.is_click = !1),
                            (this.force_redraw = !1)));
            },
            drawLabels: function() {
                if (this.options) {
                    var t,
                        i,
                        s,
                        o,
                        e,
                        h = this.options.values.length,
                        r = this.options.p_values;
                    if (!this.options.hide_from_to)
                        if ("single" === this.options.type)
                            (t = h ?
                                this.decorate(r[this.result.from]) :
                                ((o = this._prettify(this.result.from)),
                                    this.decorate(o, this.result.from))),
                            this.$cache.single.html(t),
                            this.calcLabels(),
                            this.labels.p_single_left < this.labels.p_min + 1 ?
                            (this.$cache.min[0].style.visibility = "hidden") :
                            (this.$cache.min[0].style.visibility = "visible"),
                            this.labels.p_single_left + this.labels.p_single_fake >
                            100 - this.labels.p_max - 1 ?
                            (this.$cache.max[0].style.visibility = "hidden") :
                            (this.$cache.max[0].style.visibility = "visible");
                        else {
                            (s = h ?
                                (this.options.decorate_both ?
                                    ((t = this.decorate(r[this.result.from])),
                                        (t += this.options.values_separator),
                                        (t += this.decorate(r[this.result.to]))) :
                                    (t = this.decorate(
                                        r[this.result.from] +
                                        this.options.values_separator +
                                        r[this.result.to]
                                    )),
                                    (i = this.decorate(r[this.result.from])),
                                    this.decorate(r[this.result.to])) :
                                ((o = this._prettify(this.result.from)),
                                    (e = this._prettify(this.result.to)),
                                    this.options.decorate_both ?
                                    ((t = this.decorate(o, this.result.from)),
                                        (t += this.options.values_separator),
                                        (t += this.decorate(e, this.result.to))) :
                                    (t = this.decorate(
                                        o + this.options.values_separator + e,
                                        this.result.to
                                    )),
                                    (i = this.decorate(o, this.result.from)),
                                    this.decorate(e, this.result.to))),
                            this.$cache.single.html(t),
                                this.$cache.from.html(i),
                                this.$cache.to.html(s),
                                this.calcLabels();
                            var n = Math.min(
                                    this.labels.p_single_left,
                                    this.labels.p_from_left
                                ),
                                a = this.labels.p_single_left + this.labels.p_single_fake,
                                c = this.labels.p_to_left + this.labels.p_to_fake,
                                l = Math.max(a, c);
                            this.labels.p_from_left + this.labels.p_from_fake >=
                                this.labels.p_to_left ?
                                ((this.$cache.from[0].style.visibility = "hidden"),
                                    (this.$cache.to[0].style.visibility = "hidden"),
                                    (this.$cache.single[0].style.visibility = "visible"),
                                    (l =
                                        this.result.from === this.result.to ?
                                        ("from" === this.target ?
                                            (this.$cache.from[0].style.visibility = "visible") :
                                            "to" === this.target ?
                                            (this.$cache.to[0].style.visibility = "visible") :
                                            this.target ||
                                            (this.$cache.from[0].style.visibility = "visible"),
                                            (this.$cache.single[0].style.visibility = "hidden"),
                                            c) :
                                        ((this.$cache.from[0].style.visibility = "hidden"),
                                            (this.$cache.to[0].style.visibility = "hidden"),
                                            (this.$cache.single[0].style.visibility = "visible"),
                                            Math.max(a, c)))) :
                                ((this.$cache.from[0].style.visibility = "visible"),
                                    (this.$cache.to[0].style.visibility = "visible"),
                                    (this.$cache.single[0].style.visibility = "hidden")),
                                n < this.labels.p_min + 1 ?
                                (this.$cache.min[0].style.visibility = "hidden") :
                                (this.$cache.min[0].style.visibility = "visible"),
                                l > 100 - this.labels.p_max - 1 ?
                                (this.$cache.max[0].style.visibility = "hidden") :
                                (this.$cache.max[0].style.visibility = "visible");
                        }
                }
            },
            drawShadow: function() {
                var t,
                    i,
                    s,
                    o,
                    e = this.options,
                    h = this.$cache,
                    r = "number" == typeof e.from_min && !isNaN(e.from_min),
                    n = "number" == typeof e.from_max && !isNaN(e.from_max),
                    a = "number" == typeof e.to_min && !isNaN(e.to_min),
                    c = "number" == typeof e.to_max && !isNaN(e.to_max);
                "single" === e.type ?
                    e.from_shadow && (r || n) ?
                    ((t = this.convertToPercent(r ? e.from_min : e.min)),
                        (i = this.convertToPercent(n ? e.from_max : e.max) - t),
                        (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
                        (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                        (t += this.coords.p_handle / 2),
                        (h.shad_single[0].style.display = "block"),
                        (h.shad_single[0].style.left = t + "%"),
                        (h.shad_single[0].style.width = i + "%")) :
                    (h.shad_single[0].style.display = "none") :
                    (e.from_shadow && (r || n) ?
                        ((t = this.convertToPercent(r ? e.from_min : e.min)),
                            (i = this.convertToPercent(n ? e.from_max : e.max) - t),
                            (t = this.toFixed(t - (this.coords.p_handle / 100) * t)),
                            (i = this.toFixed(i - (this.coords.p_handle / 100) * i)),
                            (t += this.coords.p_handle / 2),
                            (h.shad_from[0].style.display = "block"),
                            (h.shad_from[0].style.left = t + "%"),
                            (h.shad_from[0].style.width = i + "%")) :
                        (h.shad_from[0].style.display = "none"),
                        e.to_shadow && (a || c) ?
                        ((s = this.convertToPercent(a ? e.to_min : e.min)),
                            (o = this.convertToPercent(c ? e.to_max : e.max) - s),
                            (s = this.toFixed(s - (this.coords.p_handle / 100) * s)),
                            (o = this.toFixed(o - (this.coords.p_handle / 100) * o)),
                            (s += this.coords.p_handle / 2),
                            (h.shad_to[0].style.display = "block"),
                            (h.shad_to[0].style.left = s + "%"),
                            (h.shad_to[0].style.width = o + "%")) :
                        (h.shad_to[0].style.display = "none"));
            },
            writeToInput: function() {
                "single" === this.options.type ?
                    (this.options.values.length ?
                        this.$cache.input.prop("value", this.result.from_value) :
                        this.$cache.input.prop("value", this.result.from),
                        this.$cache.input.data("from", this.result.from)) :
                    (this.options.values.length ?
                        this.$cache.input.prop(
                            "value",
                            this.result.from_value +
                            this.options.input_values_separator +
                            this.result.to_value
                        ) :
                        this.$cache.input.prop(
                            "value",
                            this.result.from +
                            this.options.input_values_separator +
                            this.result.to
                        ),
                        this.$cache.input.data("from", this.result.from),
                        this.$cache.input.data("to", this.result.to));
            },
            callOnStart: function() {
                this.writeToInput(),
                    this.options.onStart &&
                    "function" == typeof this.options.onStart &&
                    (this.options.scope ?
                        this.options.onStart.call(this.options.scope, this.result) :
                        this.options.onStart(this.result));
            },
            callOnChange: function() {
                this.writeToInput(),
                    this.options.onChange &&
                    "function" == typeof this.options.onChange &&
                    (this.options.scope ?
                        this.options.onChange.call(this.options.scope, this.result) :
                        this.options.onChange(this.result));
            },
            callOnFinish: function() {
                this.writeToInput(),
                    this.options.onFinish &&
                    "function" == typeof this.options.onFinish &&
                    (this.options.scope ?
                        this.options.onFinish.call(this.options.scope, this.result) :
                        this.options.onFinish(this.result));
            },
            callOnUpdate: function() {
                this.writeToInput(),
                    this.options.onUpdate &&
                    "function" == typeof this.options.onUpdate &&
                    (this.options.scope ?
                        this.options.onUpdate.call(this.options.scope, this.result) :
                        this.options.onUpdate(this.result));
            },
            toggleInput: function() {
                this.$cache.input.toggleClass("irs-hidden-input"),
                    this.has_tab_index ?
                    this.$cache.input.prop("tabindex", -1) :
                    this.$cache.input.removeProp("tabindex"),
                    (this.has_tab_index = !this.has_tab_index);
            },
            convertToPercent: function(t, i) {
                var s,
                    o = this.options.max - this.options.min,
                    e = o / 100;
                return o ?
                    ((s = (i ? t : t - this.options.min) / e), this.toFixed(s)) :
                    ((this.no_diapason = !0), 0);
            },
            convertToValue: function(t) {
                var i,
                    s,
                    o = this.options.min,
                    e = this.options.max,
                    h = o.toString().split(".")[1],
                    r = e.toString().split(".")[1],
                    n = 0,
                    a = 0;
                if (0 === t) return this.options.min;
                if (100 === t) return this.options.max;
                h && (n = i = h.length),
                    r && (n = s = r.length),
                    i && s && (n = s <= i ? i : s),
                    o < 0 &&
                    ((o = +(o + (a = Math.abs(o))).toFixed(n)),
                        (e = +(e + a).toFixed(n)));
                var c,
                    l = ((e - o) / 100) * t + o,
                    _ = this.options.step.toString().split(".")[1];
                return (
                    (l = _ ?
                        +l.toFixed(_.length) :
                        ((l /= this.options.step), +(l *= this.options.step).toFixed(0))),
                    a && (l -= a),
                    (c = _ ? +l.toFixed(_.length) : this.toFixed(l)) < this.options.min ?
                    (c = this.options.min) :
                    c > this.options.max && (c = this.options.max),
                    c
                );
            },
            calcWithStep: function(t) {
                var i = Math.round(t / this.coords.p_step) * this.coords.p_step;
                return 100 < i && (i = 100), 100 === t && (i = 100), this.toFixed(i);
            },
            checkMinInterval: function(t, i, s) {
                var o,
                    e,
                    h = this.options;
                return h.min_interval ?
                    ((o = this.convertToValue(t)),
                        (e = this.convertToValue(i)),
                        "from" === s ?
                        e - o < h.min_interval && (o = e - h.min_interval) :
                        o - e < h.min_interval && (o = e + h.min_interval),
                        this.convertToPercent(o)) :
                    t;
            },
            checkMaxInterval: function(t, i, s) {
                var o,
                    e,
                    h = this.options;
                return h.max_interval ?
                    ((o = this.convertToValue(t)),
                        (e = this.convertToValue(i)),
                        "from" === s ?
                        e - o > h.max_interval && (o = e - h.max_interval) :
                        o - e > h.max_interval && (o = e + h.max_interval),
                        this.convertToPercent(o)) :
                    t;
            },
            checkDiapason: function(t, i, s) {
                var o = this.convertToValue(t),
                    e = this.options;
                return (
                    "number" != typeof i && (i = e.min),
                    "number" != typeof s && (s = e.max),
                    o < i && (o = i),
                    s < o && (o = s),
                    this.convertToPercent(o)
                );
            },
            toFixed: function(t) {
                return +(t = t.toFixed(20));
            },
            _prettify: function(t) {
                return this.options.prettify_enabled ?
                    this.options.prettify && "function" == typeof this.options.prettify ?
                    this.options.prettify(t) :
                    this.prettify(t) :
                    t;
            },
            prettify: function(t) {
                return t
                    .toString()
                    .replace(
                        /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
                        "$1" + this.options.prettify_separator
                    );
            },
            checkEdges: function(t, i) {
                return (
                    this.options.force_edges &&
                    (t < 0 ? (t = 0) : 100 - i < t && (t = 100 - i)),
                    this.toFixed(t)
                );
            },
            validate: function() {
                var t,
                    i,
                    s = this.options,
                    o = this.result,
                    e = s.values,
                    h = e.length;
                if (
                    ("string" == typeof s.min && (s.min = +s.min),
                        "string" == typeof s.max && (s.max = +s.max),
                        "string" == typeof s.from && (s.from = +s.from),
                        "string" == typeof s.to && (s.to = +s.to),
                        "string" == typeof s.step && (s.step = +s.step),
                        "string" == typeof s.from_min && (s.from_min = +s.from_min),
                        "string" == typeof s.from_max && (s.from_max = +s.from_max),
                        "string" == typeof s.to_min && (s.to_min = +s.to_min),
                        "string" == typeof s.to_max && (s.to_max = +s.to_max),
                        "string" == typeof s.grid_num && (s.grid_num = +s.grid_num),
                        s.max < s.min && (s.max = s.min),
                        h)
                )
                    for (
                        s.p_values = [],
                        s.min = 0,
                        s.max = h - 1,
                        s.step = 1,
                        s.grid_num = s.max,
                        s.grid_snap = !0,
                        i = 0; i < h; i++
                    )
                        (t = +e[i]),
                        (t = isNaN(t) ? e[i] : ((e[i] = t), this._prettify(t))),
                        s.p_values.push(t);
                ("number" != typeof s.from || isNaN(s.from)) && (s.from = s.min),
                ("number" != typeof s.to || isNaN(s.to)) && (s.to = s.max),
                "single" === s.type ?
                    (s.from < s.min && (s.from = s.min),
                        s.from > s.max && (s.from = s.max)) :
                    (s.from < s.min && (s.from = s.min),
                        s.from > s.max && (s.from = s.max),
                        s.to < s.min && (s.to = s.min),
                        s.to > s.max && (s.to = s.max),
                        this.update_check.from &&
                        (this.update_check.from !== s.from &&
                            s.from > s.to &&
                            (s.from = s.to),
                            this.update_check.to !== s.to &&
                            s.to < s.from &&
                            (s.to = s.from)),
                        s.from > s.to && (s.from = s.to),
                        s.to < s.from && (s.to = s.from)),
                    ("number" != typeof s.step ||
                        isNaN(s.step) ||
                        !s.step ||
                        s.step < 0) &&
                    (s.step = 1),
                    "number" == typeof s.from_min &&
                    s.from < s.from_min &&
                    (s.from = s.from_min),
                    "number" == typeof s.from_max &&
                    s.from > s.from_max &&
                    (s.from = s.from_max),
                    "number" == typeof s.to_min && s.to < s.to_min && (s.to = s.to_min),
                    "number" == typeof s.to_max && s.from > s.to_max && (s.to = s.to_max),
                    o &&
                    (o.min !== s.min && (o.min = s.min),
                        o.max !== s.max && (o.max = s.max),
                        (o.from < o.min || o.from > o.max) && (o.from = s.from),
                        (o.to < o.min || o.to > o.max) && (o.to = s.to)),
                    ("number" != typeof s.min_interval ||
                        isNaN(s.min_interval) ||
                        !s.min_interval ||
                        s.min_interval < 0) &&
                    (s.min_interval = 0),
                    ("number" != typeof s.max_interval ||
                        isNaN(s.max_interval) ||
                        !s.max_interval ||
                        s.max_interval < 0) &&
                    (s.max_interval = 0),
                    s.min_interval &&
                    s.min_interval > s.max - s.min &&
                    (s.min_interval = s.max - s.min),
                    s.max_interval &&
                    s.max_interval > s.max - s.min &&
                    (s.max_interval = s.max - s.min);
            },
            decorate: function(t, i) {
                var s = "",
                    o = this.options;
                return (
                    o.prefix && (s += o.prefix),
                    (s += t),
                    o.max_postfix &&
                    (o.values.length && t === o.p_values[o.max] ?
                        ((s += o.max_postfix), o.postfix && (s += " ")) :
                        i === o.max && ((s += o.max_postfix), o.postfix && (s += " "))),
                    o.postfix && (s += o.postfix),
                    s
                );
            },
            updateFrom: function() {
                (this.result.from = this.options.from),
                (this.result.from_percent = this.convertToPercent(this.result.from)),
                (this.result.from_pretty = this._prettify(this.result.from)),
                this.options.values &&
                    (this.result.from_value = this.options.values[this.result.from]);
            },
            updateTo: function() {
                (this.result.to = this.options.to),
                (this.result.to_percent = this.convertToPercent(this.result.to)),
                (this.result.to_pretty = this._prettify(this.result.to)),
                this.options.values &&
                    (this.result.to_value = this.options.values[this.result.to]);
            },
            updateResult: function() {
                (this.result.min = this.options.min),
                (this.result.max = this.options.max),
                this.updateFrom(),
                    this.updateTo();
            },
            appendGrid: function() {
                if (this.options.grid) {
                    var t,
                        i,
                        s,
                        o,
                        e,
                        h,
                        r = this.options,
                        n = r.max - r.min,
                        a = r.grid_num,
                        c = 0,
                        l = 4,
                        _ = "";
                    for (
                        this.calcGridMargin(),
                        r.grid_snap && (a = n / r.step),
                        50 < a && (a = 50),
                        s = this.toFixed(100 / a),
                        4 < a && (l = 3),
                        7 < a && (l = 2),
                        14 < a && (l = 1),
                        28 < a && (l = 0),
                        t = 0; t < a + 1; t++
                    ) {
                        for (
                            o = l,
                            100 < (c = this.toFixed(s * t)) && (c = 100),
                            e = ((this.coords.big[t] = c) - s * (t - 1)) / (o + 1),
                            i = 1; i <= o && 0 !== c; i++
                        )
                            _ +=
                            '<span class="irs-grid-pol small" style="left: ' +
                            this.toFixed(c - e * i) +
                            '%"></span>';
                        (_ +=
                            '<span class="irs-grid-pol" style="left: ' + c + '%"></span>'),
                        (h = this.convertToValue(c)),
                        (_ +=
                            '<span class="irs-grid-text js-grid-text-' +
                            t +
                            '" style="left: ' +
                            c +
                            '%">' +
                            (h = r.values.length ? r.p_values[h] : this._prettify(h)) +
                            "</span>");
                    }
                    (this.coords.big_num = Math.ceil(a + 1)),
                    this.$cache.cont.addClass("irs-with-grid"),
                        this.$cache.grid.html(_),
                        this.cacheGridLabels();
                }
            },
            cacheGridLabels: function() {
                var t,
                    i,
                    s = this.coords.big_num;
                for (i = 0; i < s; i++)
                    (t = this.$cache.grid.find(".js-grid-text-" + i)),
                    this.$cache.grid_labels.push(t);
                this.calcGridLabels();
            },
            calcGridLabels: function() {
                var t,
                    i,
                    s = [],
                    o = [],
                    e = this.coords.big_num;
                for (t = 0; t < e; t++)
                    (this.coords.big_w[t] = this.$cache.grid_labels[t].outerWidth(!1)),
                    (this.coords.big_p[t] = this.toFixed(
                        (this.coords.big_w[t] / this.coords.w_rs) * 100
                    )),
                    (this.coords.big_x[t] = this.toFixed(this.coords.big_p[t] / 2)),
                    (s[t] = this.toFixed(this.coords.big[t] - this.coords.big_x[t])),
                    (o[t] = this.toFixed(s[t] + this.coords.big_p[t]));
                for (
                    this.options.force_edges &&
                    (s[0] < -this.coords.grid_gap &&
                        ((s[0] = -this.coords.grid_gap),
                            (o[0] = this.toFixed(s[0] + this.coords.big_p[0])),
                            (this.coords.big_x[0] = this.coords.grid_gap)),
                        o[e - 1] > 100 + this.coords.grid_gap &&
                        ((o[e - 1] = 100 + this.coords.grid_gap),
                            (s[e - 1] = this.toFixed(o[e - 1] - this.coords.big_p[e - 1])),
                            (this.coords.big_x[e - 1] = this.toFixed(
                                this.coords.big_p[e - 1] - this.coords.grid_gap
                            )))),
                    this.calcGridCollision(2, s, o),
                    this.calcGridCollision(4, s, o),
                    t = 0; t < e; t++
                )
                    (i = this.$cache.grid_labels[t][0]),
                    this.coords.big_x[t] !== Number.POSITIVE_INFINITY &&
                    (i.style.marginLeft = -this.coords.big_x[t] + "%");
            },
            calcGridCollision: function(t, i, s) {
                var o,
                    e,
                    h,
                    r = this.coords.big_num;
                for (o = 0; o < r && !(r <= (e = o + t / 2)); o += t)
                    (h = this.$cache.grid_labels[e][0]),
                    s[o] <= i[e] ?
                    (h.style.visibility = "visible") :
                    (h.style.visibility = "hidden");
            },
            calcGridMargin: function() {
                this.options.grid_margin &&
                    ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
                        this.coords.w_rs &&
                        ("single" === this.options.type ?
                            (this.coords.w_handle = this.$cache.s_single.outerWidth(!1)) :
                            (this.coords.w_handle = this.$cache.s_from.outerWidth(!1)),
                            (this.coords.p_handle = this.toFixed(
                                (this.coords.w_handle / this.coords.w_rs) * 100
                            )),
                            (this.coords.grid_gap = this.toFixed(
                                this.coords.p_handle / 2 - 0.1
                            )),
                            (this.$cache.grid[0].style.width =
                                this.toFixed(100 - this.coords.p_handle) + "%"),
                            (this.$cache.grid[0].style.left = this.coords.grid_gap + "%")));
            },
            update: function(t) {
                this.input &&
                    ((this.is_update = !0),
                        (this.options.from = this.result.from),
                        (this.options.to = this.result.to),
                        (this.update_check.from = this.result.from),
                        (this.update_check.to = this.result.to),
                        (this.options = a.extend(this.options, t)),
                        this.validate(),
                        this.updateResult(t),
                        this.toggleInput(),
                        this.remove(),
                        this.init(!0));
            },
            reset: function() {
                this.input && (this.updateResult(), this.update());
            },
            destroy: function() {
                this.input &&
                    (this.toggleInput(),
                        this.$cache.input.prop("readonly", !1),
                        a.data(this.input, "ionRangeSlider", null),
                        this.remove(),
                        (this.input = null),
                        (this.options = null));
            },
        }),
        (a.fn.ionRangeSlider = function(t) {
            return this.each(function() {
                a.data(this, "ionRangeSlider") ||
                    a.data(this, "ionRangeSlider", new h(this, t, o++));
            });
        }),
        (function() {
            for (
                var h = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !l.requestAnimationFrame;
                ++i
            )
                (l.requestAnimationFrame = l[t[i] + "RequestAnimationFrame"]),
                (l.cancelAnimationFrame =
                    l[t[i] + "CancelAnimationFrame"] ||
                    l[t[i] + "CancelRequestAnimationFrame"]);
            l.requestAnimationFrame ||
                (l.requestAnimationFrame = function(t, i) {
                    var s = new Date().getTime(),
                        o = Math.max(0, 16 - (s - h)),
                        e = l.setTimeout(function() {
                            t(s + o);
                        }, o);
                    return (h = s + o), e;
                }),
                l.cancelAnimationFrame ||
                (l.cancelAnimationFrame = function(t) {
                    clearTimeout(t);
                });
        })();
    });
} catch (e) {
    console.error("An error has occurred: " + e.stack);
}
/* https://mrrk.ru/wp-content/themes/industrial/js/calc.js */
try {
    (function($) {
        if ($(window).width() <= 640) {
            console.log($(window).width());
            $("table.selted_pars").each(function(index, element) {
                var pom = $(this).closest(".calc__container").find(".par_on_mob");
                $(this).detach().prependTo($(pom));
            });
            $(".calc__form__bottom").each(function(index, element) {
                var pom = $(this).closest(".calc__container").find(".par_on_mob");
                $(this).detach().appendTo($(pom));
            });
        }
        var datas = {
            Буквы: {
                options: { title: "Выберите вид изделия", type: "checkbox" },
                values: {
                    "Несветовые буквы": {
                        options: { title: "Выберите вид изделия", type: "checkbox" },
                        values: {
                            Объемные: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    Пластик: {
                                        options: {
                                            title: "Выберите вид изделия",
                                            range: "0-15&16-100&101-",
                                            type: "triple",
                                        },
                                        values: { 0: "50", 1: "60", 2: "" },
                                    },
                                    металл: {
                                        options: {
                                            title: "Выберите вид изделия",
                                            range: "0-15&16-100&101-",
                                            type: "triple",
                                        },
                                        values: { 0: "150", 1: "180", 2: "" },
                                    },
                                    акрил: {
                                        options: {
                                            title: "Выберите вид изделия",
                                            range: "0-15&16-100&101-",
                                            type: "triple",
                                        },
                                        values: { 0: "55", 1: "70", 2: "" },
                                    },
                                    АЛС: {
                                        options: {
                                            title: "Выберите вид изделия",
                                            range: "0-15&16-100&101-",
                                            type: "triple",
                                        },
                                        values: { 0: "65", 1: "80", 2: "110" },
                                    },
                                    цельноклеяные: {
                                        options: {
                                            title: "Выберите вид изделия",
                                            range: "0-15&16-100&101-",
                                            type: "triple",
                                        },
                                        values: { 0: "", 1: "", 2: "85" },
                                    },
                                    композитные: {
                                        options: {
                                            title: "Выберите вид изделия",
                                            range: "0-15&16-100&101-",
                                            type: "triple",
                                        },
                                        values: { 0: "", 1: "", 2: "100" },
                                    },
                                    "рамные баннерные": {
                                        options: {
                                            title: "Выберите вид изделия",
                                            range: "0-15&16-100&101-",
                                            type: "triple",
                                        },
                                        values: { 0: "", 1: "", 2: "100" },
                                    },
                                    "рамные акриловые": {
                                        options: {
                                            title: "Выберите вид изделия",
                                            range: "0-15&16-100&101-",
                                            type: "triple",
                                        },
                                        values: { 0: "", 1: "", 2: "110" },
                                    },
                                },
                            },
                            Плоские: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    "ПВХ 3-5 мм": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "18", 1: "18", 2: "18" },
                                    },
                                    "ПВХ 6-10 мм": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "22", 1: "22", 2: "22" },
                                    },
                                    "ПВХ 20 мм": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "42", 1: "42", 2: "42" },
                                    },
                                    "акрил 3-5 мм": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "40", 1: "40", 2: "40" },
                                    },
                                    "акрил 6-10 мм": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "62", 1: "62", 2: "62" },
                                    },
                                    "композит 3-4 мм": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "45", 1: "45", 2: "45" },
                                    },
                                },
                            },
                        },
                    },
                    "Световые буквы": {
                        options: { title: "Выберите вид изделия", type: "select" },
                        values: {
                            "контражурное свечение": {
                                options: { title: "Выберите вид изделия", type: "triple" },
                                values: { 0: "85", 1: "100", 2: "138" },
                            },
                            "комбинированная подсветка": {
                                options: {
                                    title: "Выберите вид изделия",
                                    range: "0-15&16-100&101-",
                                    type: "triple",
                                },
                                values: { 0: "100", 1: "110", 2: "150" },
                            },
                            "световые бока": {
                                options: {
                                    title: "Выберите вид изделия",
                                    range: "0-15&16-100&101-",
                                    type: "triple",
                                },
                                values: { 0: "120", 1: "140", 2: "180" },
                            },
                            "металл контражур": {
                                options: {
                                    title: "Выберите вид изделия",
                                    range: "0-15&16-100&101-",
                                    type: "triple",
                                },
                                values: { 0: "175", 1: "185", 2: "180" },
                            },
                            "пиксельное свечение": {
                                options: {
                                    title: "Выберите вид изделия",
                                    range: "0-15&16-100&101-",
                                    type: "triple",
                                },
                                values: { 0: "140", 1: "150", 2: "180" },
                            },
                            "динамическое свечение": {
                                options: {
                                    title: "Выберите вид изделия",
                                    range: "0-15&16-100&101-",
                                    type: "triple",
                                },
                                values: { 0: "200", 1: "200", 2: "220" },
                            },
                            "акрил фронтальное свечение": {
                                options: {
                                    title: "Выберите вид изделия",
                                    range: "0-15&16-100&101-",
                                    type: "triple",
                                },
                                values: { 0: "90", 1: "100", 2: "138" },
                            },
                            "полистерол фронтальное свечение": {
                                options: {
                                    title: "Выберите вид изделия",
                                    range: "0-15&16-100&101-",
                                    type: "triple",
                                },
                                values: { 0: "80", 1: "85", 2: "128" },
                            },
                        },
                    },
                },
            },
            Короба: {
                options: { title: "Выберите вид изделия", type: "select" },
                values: {
                    Несветовой: {
                        options: { title: "Выберите вид изделия", type: "select" },
                        values: {
                            "Простой формы": {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    "подложка композит": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "3500" },
                                    },
                                    цельноклеяный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "6500" },
                                    },
                                },
                            },
                            "Сложной формы": {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    "подложка композит": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "4500" },
                                    },
                                    цельноклеяный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "7500" },
                                    },
                                },
                            },
                        },
                    },
                    Световой: {
                        options: { title: "Выберите вид изделия", type: "select" },
                        values: {
                            "Простой формы": {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    "цельноклеяный акрил": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "9500" },
                                    },
                                    "композитный псевдоинкрустация": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "11500" },
                                    },
                                    "композитный инкрустация": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "14500" },
                                    },
                                    "баннерный рама": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "9500" },
                                    },
                                    "акрил рама": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "9500" },
                                    },
                                    "сотовый рама": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "9500" },
                                    },
                                },
                            },
                            "Сложной формы": {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    "цельноклеяный акрил": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "10500" },
                                    },
                                    "композитный псевдоинкрустация": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "11500" },
                                    },
                                    "композитный инкрустация": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "15500" },
                                    },
                                    "баннерный рама": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "10000" },
                                    },
                                    "акрил рама": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "10000" },
                                    },
                                    "сотовый рама": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "10000" },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            Панели: {
                options: { title: "Выберите вид изделия", type: "select" },
                values: {
                    Односторонние: {
                        options: { title: "Выберите вид изделия", type: "select" },
                        values: {
                            A4: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "4700" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "7500" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "5700" },
                                    },
                                },
                            },
                            A3: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "6200" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "7500" },
                                    },
                                },
                            },
                            A2: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "7600" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "9000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500" },
                                    },
                                },
                            },
                            A1: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "12000" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "14000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "13000" },
                                    },
                                },
                            },
                            A0: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "18000" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "22000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "20000" },
                                    },
                                },
                            },
                            AA: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "24000" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "28000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "26000" },
                                    },
                                },
                            },
                            "2AA": {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "32000" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "38000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "35000" },
                                    },
                                },
                            },
                        },
                    },
                    Двусторонние: {
                        options: { title: "Выберите вид изделия", type: "select" },
                        values: {
                            A4: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "4700" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "7500" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "5700" },
                                    },
                                },
                            },
                            A3: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "6200" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "7500" },
                                    },
                                },
                            },
                            A2: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "7600" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "9000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500" },
                                    },
                                },
                            },
                            A1: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "20000" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "14000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "20000" },
                                    },
                                },
                            },
                            A0: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "28000" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "22000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "28000" },
                                    },
                                },
                            },
                            AA: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "35000" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "28000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "35000" },
                                    },
                                },
                            },
                            "2AA": {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    фремлайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "45000" },
                                    },
                                    акрилайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "38000" },
                                    },
                                    кристалайт: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "45000" },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            "Панель-кронштейн": {
                options: { title: "Выберите вид изделия", type: "select" },
                values: {
                    двусторонний: {
                        options: { title: "Выберите вид изделия", type: "checkbox" },
                        values: {
                            Несветовые: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    объемный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500", 1: "14000" },
                                    },
                                    плоский: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "5500", 1: "10000" },
                                    },
                                    "аптечный крест": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500", 1: "14500" },
                                    },
                                    фигурный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500", 1: "10500" },
                                    },
                                },
                            },
                            Световые: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    объемный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "12500", 1: "17000" },
                                    },
                                    "аптечный крест": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "12500", 1: "17500" },
                                    },
                                    "аптечный крест пиксельный": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "17500", 1: "19500" },
                                    },
                                    "аптечный крест динамический": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "19500", 1: "22000" },
                                    },
                                    фигурный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "12500", 1: "19500" },
                                    },
                                },
                            },
                        },
                    },
                    односторонний: {
                        options: { title: "Выберите вид изделия", type: "select" },
                        values: {
                            Несветовые: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    объемный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500", 1: "12500" },
                                    },
                                    плоский: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "5500", 1: "10000" },
                                    },
                                    "аптечный крест": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500", 1: "12500" },
                                    },
                                    фигурный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "8500", 1: "12500" },
                                    },
                                },
                            },
                            Световые: {
                                options: { title: "Выберите вид изделия", type: "select" },
                                values: {
                                    объемный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "12000", 1: "15500" },
                                    },
                                    "аптечный крест": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "12000", 1: "15500" },
                                    },
                                    "аптечный крест пиксельный": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "17000", 1: "17500" },
                                    },
                                    "аптечный крест динамический": {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "19000", 1: "20500" },
                                    },
                                    фигурный: {
                                        options: { title: "Выберите вид изделия", type: "last" },
                                        values: { 0: "12000", 1: "17500" },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        };
        var datass = datas.Буквы,
            datss,
            add_pr = 0,
            rang = 0,
            kd = 1,
            pric = 0,
            price = 0,
            tab,
            tabhtml;

        function calc_tot(ind) {
            try {
                tab = $("#selted_pars" + ind);
                tab.html("");
                tabhtml = "";
                tabhtm = "";
                datss = datass;
                $(".calc__container_active .selt").each(function(index, element) {
                    if ($(this).closest(".subtab").hasClass("not_act") == !1) {
                        tabhtml +=
                            "<tr><td>" +
                            $(this).closest(".calc__form__row").find("label").text() +
                            "</td><th>" +
                            $(this).text() +
                            "</th></tr>";
                        if ($(this).data("fjs")) datss = datss.values[$(this).data("fjs")];
                        if ($(this).data("addpr") == "0" || $(this).data("addpr") == "10")
                            add_pr = parseInt($(this).data("addpr"));
                    }
                });
                tab.html(tabhtml);
                if (ind == 0) {
                    tabhtml =
                        "<tr><td>Текст</td><th>" +
                        $(".calc__container_active").find(".lett_text").val() +
                        "</th></tr>";
                    tabhtml +=
                        "<tr><td>Высота букв</td><th>" +
                        $(".calc__container_active").find(".lett_height").val() +
                        " см</th></tr>";
                    $("#cal_ri_1_4_1")
                        .find(".calc__form__item__select-item")
                        .addClass("hide");
                    if (parseInt($(".calc__form__item__input-number").val()) <= 15)
                        $("#cal_ri_1_4_1")
                        .find('.calc__form__item__select-item[data-h1="1"]')
                        .removeClass("hide");
                    if (
                        parseInt($(".calc__form__item__input-number").val()) >= 15 &&
                        parseInt($(".calc__form__item__input-number").val()) < 100
                    )
                        $("#cal_ri_1_4_1")
                        .find('.calc__form__item__select-item[data-h2="1"]')
                        .removeClass("hide");
                    if (parseInt($(".calc__form__item__input-number").val()) >= 100)
                        $("#cal_ri_1_4_1")
                        .find('.calc__form__item__select-item[data-h3="1"]')
                        .removeClass("hide");
                    if (
                        parseInt(
                            $(".calc__container_active .calc__form__item__input-number").val()
                        ) <= 15
                    )
                        rang = 1;
                    if (
                        parseInt(
                            $(".calc__container_active .calc__form__item__input-number").val()
                        ) >= 15 &&
                        parseInt($(".calc__form__item__input-number").val()) < 100
                    )
                        rang = 0;
                    if (
                        parseInt(
                            $(".calc__container_active .calc__form__item__input-number").val()
                        ) >= 100
                    )
                        rang = 2;
                    if ($("#cal_ri_1_4_2").hasClass(".curr") == !0) rang = 0;
                    pric = parseInt(datss.values[rang]) + parseInt(add_pr);
                    price =
                        parseInt(
                            $(".calc__container_active").find(".lett_text").val().length
                        ) *
                        parseInt(pric) *
                        parseInt($(".calc__container_active").find(".lett_height").val());
                    if ($(".podltab").hasClass("not_act") == !1) {
                        tabhtm += "<tr><td>Нужна подложка</td><th>Да</th></tr>";
                        tabhtm +=
                            "<tr><td>Ширина подложки</td><th>" +
                            $("#podl_width").data("from") +
                            " мм</th></tr>";
                        tabhtm +=
                            "<tr><td>Высота подложки</td><th>" +
                            $("#podl_height").data("from") +
                            " мм</th></tr>";
                        price =
                            price +
                            Math.ceil(
                                (parseInt($("#podl_width").data("from")) *
                                    Math.ceil(parseInt($("#podl_height").data("from")))) /
                                1000000
                            ) *
                            3500;
                    }
                    if (price) {
                        price = Math.ceil((price * 95) / 100);
                        $("#tot_pr1 span").text(price);
                        tab
                            .children("tbody")
                            .html(tabhtml + tab.children("tbody").html() + tabhtm);
                        $(".calc__container_active textarea#zayavka").val(
                            "<b>Заказ:</b><br /><h2>" +
                            $(".calc__item-active").text() +
                            '</h2><table class="selted_pars" id="selted_pars1" style="border-collapse:collapse;">' +
                            tab
                            .children("tbody")
                            .html()
                            .replace(
                                /<td/gi,
                                '<td style="border:1px solid #000;padding:5px;"'
                            )
                            .replace(
                                /<th/gi,
                                '<th style="border:1px solid #000;text-align:left;padding:5px;"'
                            ) +
                            "</table><br />Цена: <b>" +
                            price +
                            " руб.</b>"
                        );
                    } else {
                        $("#tot_pr1 span").text("0");
                        tab.html("");
                    }
                } else if (ind == 1) {
                    tabhtml =
                        "<tr><td>Ширина</td><th>" +
                        $("#rekl_width").val() +
                        " мм</th></tr>";
                    tabhtml +=
                        "<tr><td>Высота</td><th>" +
                        $("#rekl_height").val() +
                        " мм</th></tr>";
                    tab.children("tbody").html(tabhtml + tab.children("tbody").html());
                    pric = parseInt(datss.values[0]);
                    price = pric * Math.ceil(kd / 1000000);
                    price = Math.ceil((price * 95) / 100);
                    $("#tot_pr2 span").text(price);
                    $(".calc__container_active textarea#zayavka").val(
                        "<b>Заказ:</b><br /><h2>" +
                        $(".calc__item-active").text() +
                        '</h2><table class="selted_pars" id="selted_pars1" style="border-collapse:collapse;">' +
                        tab
                        .children("tbody")
                        .html()
                        .replace(
                            /<td/gi,
                            '<td style="border:1px solid #000;padding:5px;"'
                        )
                        .replace(
                            /<th/gi,
                            '<th style="border:1px solid #000;text-align:left;padding:5px;"'
                        ) +
                        "</table><br />Цена: <b>" +
                        price +
                        " руб.</b>"
                    );
                } else if (ind == 2) {
                    tab.children("tbody").html(tabhtml);
                    price = parseInt(datss.values[0]);
                    price = Math.ceil((price * 95) / 100);
                    $("#tot_pr3 span").text(price);
                    $(".calc__container_active textarea#zayavka").val(
                        "<b>Заказ:</b><br /><h2>" +
                        $(".calc__item-active").text() +
                        '</h2><table class="selted_pars" id="selted_pars1" style="border-collapse:collapse;">' +
                        tab
                        .children("tbody")
                        .html()
                        .replace(
                            /<td/gi,
                            '<td style="border:1px solid #000;padding:5px;"'
                        )
                        .replace(
                            /<th/gi,
                            '<th style="border:1px solid #000;text-align:left;padding:5px;"'
                        ) +
                        "</table><br />Цена: <b>" +
                        price +
                        " руб.</b>"
                    );
                } else if (ind == 3) {
                    tabhtml =
                        "<tr><td>Высота</td><th>" + $("#pk_height").val() + " мм</th></tr>";
                    tab.children("tbody").html(tabhtml + tab.children("tbody").html());
                    if (parseInt($("#pk_height").val()) <= 49) rang = 0;
                    if (parseInt($("#pk_height").val()) >= 50) rang = 1;
                    price = parseInt(datss.values[rang]);
                    price = Math.ceil((price * 95) / 100);
                    $("#tot_pr4 span").text(price);
                    $(".calc__container_active textarea#zayavka").val(
                        "<b>Заказ:</b><br /><h2>" +
                        $(".calc__item-active").text() +
                        '</h2><table class="selted_pars" id="selted_pars1" style="border-collapse:collapse;">' +
                        tab
                        .children("tbody")
                        .html()
                        .replace(
                            /<td/gi,
                            '<td style="border:1px solid #000;padding:5px;"'
                        )
                        .replace(
                            /<th/gi,
                            '<th style="border:1px solid #000;text-align:left;padding:5px;"'
                        ) +
                        "</table><br />Цена: <b>" +
                        price +
                        " руб.</b>"
                    );
                }
            } catch (err) {
                $(".calc__container_active .calc__price span").text("0");
            }
        }
        $(".kor_dimension").keyup(function() {
            kd = 1;
            $(this)
                .closest(".calc__form__row")
                .find(".kor_dimension")
                .each(function(index, element) {
                    kd = kd * parseInt($(this).val());
                });
            $("#kd").text(kd / 1000000);
            $("#kdo").text(Math.ceil(kd / 1000000));
            calc_tot(1);
        });
        $(".calc__item").click(function() {
            datass = datas[$(this).data("tip1")];
            $(".calc__container").removeClass("calc__container_active");
            $("#" + $(this).data("tab")).addClass("calc__container_active");
            $(".calc__item").removeClass("calc__item-active");
            $(this).addClass("calc__item-active");
            calc_tot($(this).data("ct"));
        });
        var let_cnt = 1,
            pric = 0,
            rang = 0;
        $("#lett_txt_1").keyup(function() {
            let_cnt = $(this).val().length;
        });
        $(".lett_height").change(function() {
            if ($(this).val() > 0)
                $("#" + $(this).data("nextsel")).removeClass("nact");
        });
        $(
            ".calc__form__item__select,.calc__form__item__icon.calc__form__item__icon-right"
        ).click(function() {
            if ($(this).closest(".calc__form__row").hasClass("nact") == !1) {
                $(".calc__form__item__select-items")
                    .not($(this).parent().find(".calc__form__item__select-items"))
                    .slideUp();
                $(this)
                    .closest(".calc__form__item")
                    .find(".calc__form__item__select-items.curr")
                    .slideToggle();
            }
        });
        $(".calc__form__item__select-item").click(function() {
            tab.html("");
            $(this).closest(".calc__form__item__select-items").slideUp();
            if ($(this).hasClass("no-nxt") == !1) {
                $(this)
                    .closest(".calc__form__row")
                    .nextAll(".calc__form__row")
                    .find(".calc__form__item__select")
                    .text("Выбрать");
                $(this)
                    .closest(".calc__form__row")
                    .nextAll(".calc__form__row")
                    .find(".calc__form__item__select-item")
                    .removeClass("selt");
                $(this)
                    .closest(".calc__form__row")
                    .nextAll(".calc__form__row")
                    .find(".calc__form__item__select")
                    .css("border-color", "#f00");
                if ($(this).data("nexts"))
                    $(
                        "#" + $(this).closest(".calc__form__row").data("nextid")
                    ).removeClass("nact");
                $("#" + $(this).closest(".calc__form__row").data("nextid"))
                    .find(".calc__form__item__select")
                    .text("Выбрать");
                $("#" + $(this).closest(".calc__form__row").data("nextid"))
                    .find(".calc__form__item__select-items")
                    .removeClass("curr");
            }
            $("#" + $(this).data("nexts")).addClass("curr");
            $(this)
                .closest(".calc__form__row")
                .find(".calc__form__item__select")
                .text($(this).text())
                .css("border-color", "#becedb");
            $(this)
                .parent()
                .find(".calc__form__item__select-item")
                .removeClass("selt");
            if ($(this).hasClass("nslt") == !1) $(this).addClass("selt");
            $(".calc__container_active .calc__price span").text("0");
            if ($(this).hasClass("calc_pr")) {
                calc_tot($(".calc__item-active").data("ct"));
            }
        });
        $(".select_calc").click(function() {
            tab.html("");
            $(this).closest(".calc__form__item__select-items").slideUp();
            console.log($(this).data("fjs"));
            if ($(this).hasClass("no-nxt") == !1) {
                $(this)
                    .closest(".calc__form__row")
                    .nextAll(".calc__form__row")
                    .find(".calc__form__item__select")
                    .text("Выбрать");
                $(this)
                    .closest(".calc__form__row")
                    .nextAll(".calc__form__row")
                    .find(".calc__form__item__select-item")
                    .removeClass("selt");
                $(this)
                    .closest(".calc__form__row")
                    .nextAll(".calc__form__row")
                    .find(".calc__form__item__select")
                    .css("border-color", "#f00");
                $("#" + $(this).closest(".calc__form__row").data("nextid"))
                    .find(".calc__form__item__select")
                    .text("Выбрать");
                $("#" + $(this).closest(".calc__form__row").data("nextid"))
                    .find(".calc__form__item__select-items")
                    .removeClass("curr");
            }
            $("#" + $(this).data("nexts")).addClass("curr");
            $(this).parent().find(".select_calc").removeClass("selt");
            if ($(this).hasClass("nslt") == !1) $(this).addClass("selt");
            $(".calc__container_active .calc__price span").text("0");
            if ($(this).hasClass("calc_pr")) {
                calc_tot($(".calc__item-active").data("ct"));
            }
        });
        $(".lett_item").click(function() {
            tab.html("");
            if ($(this).data("st")) {
                $(this).closest(".letts_select").find(".lett_item").removeClass("selt");
                $(this).addClass("selt");
                $(".subtab").addClass("not_act");
                $("#" + $(this).data("st")).removeClass("not_act");
                calc_tot(0);
            } else {
                $(this).closest(".letts_select").find(".lett_item").removeClass("selt");
                $(this).addClass("selt");
                if ($(this).hasClass("no-nxt") == !1) {
                    $(this)
                        .closest(".calc__form__row")
                        .nextAll(".calc__form__row")
                        .find(".calc__form__item__select")
                        .text("Выбрать");
                    $(this)
                        .closest(".calc__form__row")
                        .nextAll(".calc__form__row")
                        .find(".calc__form__item__select-item")
                        .removeClass("selt");
                    $(this)
                        .closest(".calc__form__row")
                        .nextAll(".calc__form__row")
                        .find(".calc__form__item__select")
                        .css("border-color", "#f00");
                    if ($(this).data("nexts"))
                        $(
                            "#" + $(this).closest(".calc__form__row").data("nextid")
                        ).removeClass("nact");
                    $("#" + $(this).closest(".calc__form__row").data("nextid"))
                        .find(".calc__form__item__select")
                        .text("Выбрать");
                    $("#" + $(this).closest(".calc__form__row").data("nextid"))
                        .find(".calc__form__item__select-items")
                        .removeClass("curr");
                }
                $("#" + $(this).data("nexts")).addClass("curr");
                $(this).parent().find(".select_calc").removeClass("selt");
                if ($(this).hasClass("nslt") == !1) $(this).addClass("selt");
                $(".calc__container_active .calc__price span").text("0");
                if ($(this).hasClass("calc_pr")) {
                    calc_tot($(".calc__item-active").data("ct"));
                }
            }
        });
        $(".podl_sel").click(function() {
            $(".podl_sel").removeClass("psact");
            $(this).addClass("psact");
            if ($(this).hasClass("li_sec")) $(".podltab").removeClass("not_act");
            else $(".podltab").addClass("not_act");
            calc_tot(0);
        });
        calc_tot(0);
        $(".lett_text,.lett_height").keyup(function() {
            calc_tot(0);
        });
        $(".lett_height").on("change", function() {
            console.log("Val:" + $(this).val());
            calc_tot(0);
        });
        $("#pk_height").keyup(function() {
            calc_tot(3);
        });
        $("#pk_height").change(function() {
            calc_tot(3);
        });
        $("#cal_row_1_3 .select_calc,#cal_row_2_3 .select_calc").click(function() {
            add_pr = parseInt($(this).data("addpr"));
            calc_tot(0);
        });

        function lett_mat_sel() {
            console.log($("#selted_pars0").html());
            $("#selted_pars0").html("");
            console.log("html: " + $("#selted_pars0").html());
            $(".calc__container_active .calc__price span").text("0");
            $("#cal_ri_1_4_1")
                .find(".calc__form__item__select-item")
                .addClass("hide");
            $("#cal_row_1_4").find(".calc__form__item__select").text("Выбрать");
            $("#cal_row_1_4")
                .find(".calc__form__item__select-item")
                .removeClass("selt");
            $("#cal_row_1_4")
                .find(".calc__form__item__select")
                .css("border-color", "#f00");
            if (parseInt($("input#lett_hght_1").val()) <= 15)
                $("#cal_ri_1_4_1")
                .find('.calc__form__item__select-item[data-h1="1"]')
                .removeClass("hide");
            if (
                parseInt($("input#lett_hght_1").val()) >= 15 &&
                parseInt($(".calc__form__item__input-number").val()) < 100
            )
                $("#cal_ri_1_4_1")
                .find('.calc__form__item__select-item[data-h2="1"]')
                .removeClass("hide");
            if (parseInt($("input#lett_hght_1").val()) >= 100)
                $("#cal_ri_1_4_1")
                .find('.calc__form__item__select-item[data-h3="1"]')
                .removeClass("hide");
        }
        $("#cal_ri_1_2_1").click(function() {
            lett_mat_sel();
        });
        $(".calc__count__button-left").click(function() {
            var input = $(this).parent().find("input");
            var count = parseInt(input.val()) - 1;
            count = count < 1 ? 1 : count;
            price = Math.ceil((price * 95) / 100);
            $("#tot_pr span").text(parseInt(price) * parseInt(input.val()));
            input.val(count);
            input.change();
            return !1;
        });
        $(".calc__count__button-right").click(function() {
            var input = $(this).parent().find("input");
            input.val(parseInt(input.val()) + 1);
            price = Math.ceil((price * 95) / 100);
            $("#tot_pr span").text(parseInt(price) * parseInt(input.val()));
            input.change();
            return !1;
        });
        $("#demo_0").ionRangeSlider({
            hide_min_max: !0,
            min: 0,
            max: 120,
            from: 21,
            step: 1,
            grid: !0,
            grid_num: 4,
            grid_snap: !1,
            postfix: " см",
            onChange: function(data) {
                $("input#lett_hght_1").val(data.from);
                lett_mat_sel();
                calc_tot(0);
            },
        });
        $("#rekl_width").ionRangeSlider({
            hide_min_max: !0,
            min: 100,
            max: 12000,
            from: 1000,
            step: 50,
            grid: !0,
            grid_num: 4,
            grid_snap: !1,
            postfix: " мм",
            onChange: function(data) {
                $("#rekl_width").val(data.from);
                kd = 1;
                $("#rekl_width")
                    .closest(".calc__form__row")
                    .find(".kor_dimension")
                    .each(function(index, element) {
                        kd = kd * parseInt($(this).val());
                    });
                $("#kd").text(kd / 1000000);
                $("#kdo").text(Math.ceil(kd / 1000000));
                calc_tot(1);
            },
        });
        $("#rekl_height").ionRangeSlider({
            hide_min_max: !0,
            min: 100,
            max: 12000,
            from: 1000,
            step: 50,
            grid: !0,
            grid_num: 4,
            grid_snap: !1,
            postfix: " мм",
            onChange: function(data) {
                $("#rekl_height").val(data.from);
                kd = 1;
                $("#rekl_height")
                    .closest(".calc__form__row")
                    .find(".kor_dimension")
                    .each(function(index, element) {
                        kd = kd * parseInt($(this).val());
                    });
                $("#kd").text(kd / 1000000);
                $("#kdo").text(Math.ceil(kd / 1000000));
                calc_tot(1);
            },
        });
        $("#podl_width").ionRangeSlider({
            hide_min_max: !0,
            min: 100,
            max: 12000,
            from: 1000,
            step: 50,
            grid: !0,
            grid_num: 4,
            grid_snap: !1,
            postfix: " мм",
            onChange: function(data) {
                $("#podl_width").val(data.from);
                kd =
                    parseInt($("#podl_width").data("from")) *
                    parseInt($("#podl_height").data("from"));
                $("#kdp").text(kd / 1000000);
                $("#kdop").text(Math.ceil(kd / 1000000));
                calc_tot(0);
            },
        });
        $("#podl_height").ionRangeSlider({
            hide_min_max: !0,
            min: 100,
            max: 12000,
            from: 1000,
            step: 50,
            grid: !0,
            grid_num: 4,
            grid_snap: !1,
            postfix: " мм",
            onChange: function(data) {
                $("#podl_height").val(data.from);
                kd =
                    parseInt($("#podl_height").data("from")) *
                    parseInt($("#podl_width").data("from"));
                $("#kdp").text(kd / 1000000);
                $("#kdop").text(Math.ceil(kd / 1000000));
                calc_tot(0);
            },
        });
        $("#pk_height").ionRangeSlider({
            hide_min_max: !0,
            min: 20,
            max: 100,
            from: 50,
            step: 1,
            grid: !0,
            grid_num: 4,
            grid_snap: !1,
            postfix: " см",
            onChange: function(data) {
                $("#rekl_height").val(data.from);
                calc_tot(3);
            },
        });
        $("#pan-form").ionRangeSlider({
            grid: !0,
            values: ["A4", "A3", "A2", "A1", "A0", "AA", "2AA"],
            onChange: function(data) {
                var vals = ["A4", "A3", "A2", "A1", "A0", "AA", "2AA"];
                $("#cal_row_4_2")
                    .find('[data-fjs="' + vals[data.from] + '"]')
                    .click();
            },
        });
    })(jQuery);
} catch (e) {
    console.error("An error has occurred: " + e.stack);
}
/* https://mrrk.ru/wp-includes/js/wp-embed.min.js */
try {
    !(function(c, d) {
        "use strict";
        var e = !1,
            n = !1;
        if (d.querySelector)
            if (c.addEventListener) e = !0;
        if (((c.wp = c.wp || {}), !c.wp.receiveEmbedMessage))
            if (
                ((c.wp.receiveEmbedMessage = function(e) {
                        var t = e.data;
                        if (t)
                            if (t.secret || t.message || t.value)
                                if (!/[^a-zA-Z0-9]/.test(t.secret)) {
                                    for (
                                        var r,
                                            a,
                                            i,
                                            s = d.querySelectorAll(
                                                'iframe[data-secret="' + t.secret + '"]'
                                            ),
                                            n = d.querySelectorAll(
                                                'blockquote[data-secret="' + t.secret + '"]'
                                            ),
                                            o = 0; o < n.length; o++
                                    )
                                        n[o].style.display = "none";
                                    for (o = 0; o < s.length; o++)
                                        if (((r = s[o]), e.source === r.contentWindow)) {
                                            if ((r.removeAttribute("style"), "height" === t.message)) {
                                                if (1e3 < (i = parseInt(t.value, 10))) i = 1e3;
                                                else if (~~i < 200) i = 200;
                                                r.height = i;
                                            }
                                            if ("link" === t.message)
                                                if (
                                                    ((a = d.createElement("a")),
                                                        (i = d.createElement("a")),
                                                        (a.href = r.getAttribute("src")),
                                                        (i.href = t.value),
                                                        i.host === a.host)
                                                )
                                                    if (d.activeElement === r)
                                                        c.top.location.href = t.value;
                                        }
                                }
                    }),
                    e)
            )
                c.addEventListener("message", c.wp.receiveEmbedMessage, !1),
                d.addEventListener("DOMContentLoaded", t, !1),
                c.addEventListener("load", t, !1);

        function t() {
            if (!n) {
                n = !0;
                for (
                    var e,
                        t,
                        r = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                        a = !!navigator.userAgent.match(/Trident.*rv:11\./),
                        i = d.querySelectorAll("iframe.wp-embedded-content"),
                        s = 0; s < i.length; s++
                ) {
                    if (!(e = i[s]).getAttribute("data-secret"))
                        (t = Math.random().toString(36).substr(2, 10)),
                        (e.src += "#?secret=" + t),
                        e.setAttribute("data-secret", t);
                    if (r || a)
                        (t = e.cloneNode(!0)).removeAttribute("security"),
                        e.parentNode.replaceChild(t, e);
                }
            }
        }
    })(window, document);
} catch (e) {
    console.error("An error has occurred: " + e.stack);
}
/* https://mrrk.ru/wp-content/themes/industrial/js/waypoints/jquery.waypoints.min.js */
try {
    /*!
                Waypoints - 4.0.0
                Copyright © 2011-2015 Caleb Troughton
                Licensed under the MIT license.
                https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
                */
    !(function() {
        "use strict";

        function t(o) {
            if (!o) throw new Error("No options passed to Waypoint constructor");
            if (!o.element)
                throw new Error("No element option passed to Waypoint constructor");
            if (!o.handler)
                throw new Error("No handler option passed to Waypoint constructor");
            (this.key = "waypoint-" + e),
            (this.options = t.Adapter.extend({}, t.defaults, o)),
            (this.element = this.options.element),
            (this.adapter = new t.Adapter(this.element)),
            (this.callback = o.handler),
            (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
            (this.enabled = this.options.enabled),
            (this.triggerPoint = null),
            (this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis,
            })),
            (this.context = t.Context.findOrCreateByElement(this.options.context)),
            t.offsetAliases[this.options.offset] &&
                (this.options.offset = t.offsetAliases[this.options.offset]),
                this.group.add(this),
                this.context.add(this),
                (i[this.key] = this),
                (e += 1);
        }
        var e = 0,
            i = {};
        (t.prototype.queueTrigger = function(t) {
            this.group.queueTrigger(this, t);
        }),
        (t.prototype.trigger = function(t) {
            this.enabled && this.callback && this.callback.apply(this, t);
        }),
        (t.prototype.destroy = function() {
            this.context.remove(this), this.group.remove(this), delete i[this.key];
        }),
        (t.prototype.disable = function() {
            return (this.enabled = !1), this;
        }),
        (t.prototype.enable = function() {
            return this.context.refresh(), (this.enabled = !0), this;
        }),
        (t.prototype.next = function() {
            return this.group.next(this);
        }),
        (t.prototype.previous = function() {
            return this.group.previous(this);
        }),
        (t.invokeAll = function(t) {
            var e = [];
            for (var o in i) e.push(i[o]);
            for (var n = 0, r = e.length; r > n; n++) e[n][t]();
        }),
        (t.destroyAll = function() {
            t.invokeAll("destroy");
        }),
        (t.disableAll = function() {
            t.invokeAll("disable");
        }),
        (t.enableAll = function() {
            t.invokeAll("enable");
        }),
        (t.refreshAll = function() {
            t.Context.refreshAll();
        }),
        (t.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight;
        }),
        (t.viewportWidth = function() {
            return document.documentElement.clientWidth;
        }),
        (t.adapters = []),
        (t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0,
        }),
        (t.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight();
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth();
            },
        }),
        (window.Waypoint = t);
    })(),
    (function() {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60);
        }

        function e(t) {
            (this.element = t),
            (this.Adapter = n.Adapter),
            (this.adapter = new this.Adapter(t)),
            (this.key = "waypoint-context-" + i),
            (this.didScroll = !1),
            (this.didResize = !1),
            (this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop(),
            }),
            (this.waypoints = { vertical: {}, horizontal: {} }),
            (t.waypointContextKey = this.key),
            (o[t.waypointContextKey] = this),
            (i += 1),
            this.createThrottledScrollHandler(),
                this.createThrottledResizeHandler();
        }
        var i = 0,
            o = {},
            n = window.Waypoint,
            r = window.onload;
        (e.prototype.add = function(t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            (this.waypoints[e][t.key] = t), this.refresh();
        }),
        (e.prototype.checkEmpty = function() {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical);
            t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
        }),
        (e.prototype.createThrottledResizeHandler = function() {
            function t() {
                e.handleResize(), (e.didResize = !1);
            }
            var e = this;
            this.adapter.on("resize.waypoints", function() {
                e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
            });
        }),
        (e.prototype.createThrottledScrollHandler = function() {
            function t() {
                e.handleScroll(), (e.didScroll = !1);
            }
            var e = this;
            this.adapter.on("scroll.waypoints", function() {
                (!e.didScroll || n.isTouch) &&
                ((e.didScroll = !0), n.requestAnimationFrame(t));
            });
        }),
        (e.prototype.handleResize = function() {
            n.Context.refreshAll();
        }),
        (e.prototype.handleScroll = function() {
            var t = {},
                e = {
                    horizontal: {
                        newScroll: this.adapter.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                    },
                    vertical: {
                        newScroll: this.adapter.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                    },
                };
            for (var i in e) {
                var o = e[i],
                    n = o.newScroll > o.oldScroll,
                    r = n ? o.forward : o.backward;
                for (var s in this.waypoints[i]) {
                    var a = this.waypoints[i][s],
                        l = o.oldScroll < a.triggerPoint,
                        h = o.newScroll >= a.triggerPoint,
                        p = l && h,
                        u = !l && !h;
                    (p || u) && (a.queueTrigger(r), (t[a.group.id] = a.group));
                }
            }
            for (var c in t) t[c].flushTriggers();
            this.oldScroll = {
                x: e.horizontal.newScroll,
                y: e.vertical.newScroll,
            };
        }),
        (e.prototype.innerHeight = function() {
            return this.element == this.element.window ?
                n.viewportHeight() :
                this.adapter.innerHeight();
        }),
        (e.prototype.remove = function(t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty();
        }),
        (e.prototype.innerWidth = function() {
            return this.element == this.element.window ?
                n.viewportWidth() :
                this.adapter.innerWidth();
        }),
        (e.prototype.destroy = function() {
            var t = [];
            for (var e in this.waypoints)
                for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
            for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
        }),
        (e.prototype.refresh = function() {
            var t,
                e = this.element == this.element.window,
                i = e ? void 0 : this.adapter.offset(),
                o = {};
            this.handleScroll(),
                (t = {
                    horizontal: {
                        contextOffset: e ? 0 : i.left,
                        contextScroll: e ? 0 : this.oldScroll.x,
                        contextDimension: this.innerWidth(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left",
                    },
                    vertical: {
                        contextOffset: e ? 0 : i.top,
                        contextScroll: e ? 0 : this.oldScroll.y,
                        contextDimension: this.innerHeight(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top",
                    },
                });
            for (var r in t) {
                var s = t[r];
                for (var a in this.waypoints[r]) {
                    var l,
                        h,
                        p,
                        u,
                        c,
                        d = this.waypoints[r][a],
                        f = d.options.offset,
                        w = d.triggerPoint,
                        y = 0,
                        g = null == w;
                    d.element !== d.element.window &&
                        (y = d.adapter.offset()[s.offsetProp]),
                        "function" == typeof f ?
                        (f = f.apply(d)) :
                        "string" == typeof f &&
                        ((f = parseFloat(f)),
                            d.options.offset.indexOf("%") > -1 &&
                            (f = Math.ceil((s.contextDimension * f) / 100))),
                        (l = s.contextScroll - s.contextOffset),
                        (d.triggerPoint = y + l - f),
                        (h = w < s.oldScroll),
                        (p = d.triggerPoint >= s.oldScroll),
                        (u = h && p),
                        (c = !h && !p), !g && u ?
                        (d.queueTrigger(s.backward), (o[d.group.id] = d.group)) :
                        !g && c ?
                        (d.queueTrigger(s.forward), (o[d.group.id] = d.group)) :
                        g &&
                        s.oldScroll >= d.triggerPoint &&
                        (d.queueTrigger(s.forward), (o[d.group.id] = d.group));
                }
            }
            return (
                n.requestAnimationFrame(function() {
                    for (var t in o) o[t].flushTriggers();
                }),
                this
            );
        }),
        (e.findOrCreateByElement = function(t) {
            return e.findByElement(t) || new e(t);
        }),
        (e.refreshAll = function() {
            for (var t in o) o[t].refresh();
        }),
        (e.findByElement = function(t) {
            return o[t.waypointContextKey];
        }),
        (window.onload = function() {
            r && r(), e.refreshAll();
        }),
        (n.requestAnimationFrame = function(e) {
            var i =
                window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                t;
            i.call(window, e);
        }),
        (n.Context = e);
    })(),
    (function() {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint;
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint;
        }

        function i(t) {
            (this.name = t.name),
            (this.axis = t.axis),
            (this.id = this.name + "-" + this.axis),
            (this.waypoints = []),
            this.clearTriggerQueues(),
                (o[this.axis][this.name] = this);
        }
        var o = { vertical: {}, horizontal: {} },
            n = window.Waypoint;
        (i.prototype.add = function(t) {
            this.waypoints.push(t);
        }),
        (i.prototype.clearTriggerQueues = function() {
            this.triggerQueues = { up: [], down: [], left: [], right: [] };
        }),
        (i.prototype.flushTriggers = function() {
            for (var i in this.triggerQueues) {
                var o = this.triggerQueues[i],
                    n = "up" === i || "left" === i;
                o.sort(n ? e : t);
                for (var r = 0, s = o.length; s > r; r += 1) {
                    var a = o[r];
                    (a.options.continuous || r === o.length - 1) && a.trigger([i]);
                }
            }
            this.clearTriggerQueues();
        }),
        (i.prototype.next = function(e) {
            this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints),
                o = i === this.waypoints.length - 1;
            return o ? null : this.waypoints[i + 1];
        }),
        (i.prototype.previous = function(e) {
            this.waypoints.sort(t);
            var i = n.Adapter.inArray(e, this.waypoints);
            return i ? this.waypoints[i - 1] : null;
        }),
        (i.prototype.queueTrigger = function(t, e) {
            this.triggerQueues[e].push(t);
        }),
        (i.prototype.remove = function(t) {
            var e = n.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1);
        }),
        (i.prototype.first = function() {
            return this.waypoints[0];
        }),
        (i.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1];
        }),
        (i.findOrCreate = function(t) {
            return o[t.axis][t.name] || new i(t);
        }),
        (n.Group = i);
    })(),
    (function() {
        "use strict";

        function t(t) {
            this.$element = e(t);
        }
        var e = window.jQuery,
            i = window.Waypoint;
        e.each(
                [
                    "innerHeight",
                    "innerWidth",
                    "off",
                    "offset",
                    "on",
                    "outerHeight",
                    "outerWidth",
                    "scrollLeft",
                    "scrollTop",
                ],
                function(e, i) {
                    t.prototype[i] = function() {
                        var t = Array.prototype.slice.call(arguments);
                        return this.$element[i].apply(this.$element, t);
                    };
                }
            ),
            e.each(["extend", "inArray", "isEmptyObject"], function(i, o) {
                t[o] = e[o];
            }),
            i.adapters.push({ name: "jquery", Adapter: t }),
            (i.Adapter = t);
    })(),
    (function() {
        "use strict";

        function t(t) {
            return function() {
                var i = [],
                    o = arguments[0];
                return (
                    t.isFunction(arguments[0]) &&
                    ((o = t.extend({}, arguments[1])), (o.handler = arguments[0])),
                    this.each(function() {
                        var n = t.extend({}, o, { element: this });
                        "string" == typeof n.context &&
                            (n.context = t(this).closest(n.context)[0]),
                            i.push(new e(n));
                    }),
                    i
                );
            };
        }
        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
            window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
    })();
} catch (e) {
    console.error("An error has occurred: " + e.stack);
}