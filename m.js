/*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/
try {
    (function(y, u) {
        var q = {}, S, la, ma, T = 0, U = {}, $ = [], B = {}, L = [], z = {}, aa = !1, Fa = {
            15: "",
            12: "",
            6: "",
            7: ""
        }, Ga = function() {
            for (var b = 0; b < $.length; b++)
                q.a.a($[b]);
            for (b = 0; b < L.length; b++)
                q.a.b(L[b]);
            for (var l in B)
                B.hasOwnProperty && B.hasOwnProperty(l) && B[l] && (q.a.a(B[l].tid),
                B[l] = !1);
            $ = [];
            L = [];
            D = null
        }
        , ba = function() {
            q.b.a();
            Ga()
        }
        ;
        q.c = ba;
        (function(b) {
            function l(b) {
                var k = new RegExp("(^| )" + b + "($| )");
                return function(b) {
                    return b && b.className && b.className.match(k)
                }
            }
            function e(b) {
                return b && b.document && b.location && b[f +
                w] && b[s + m]
            }
            function h(b) {
                if (null  == b || e(b))
                    return !1;
                var k = b.length;
                return 1 === b.nodeType && k ? !0 : "string" === typeof b || d(b) || 0 === k || "number" === typeof k && 0 < k && k - 1 in b
            }
            function d(g) {
                return "[object Array]" === b.a.bk.toString.call(g)
            }
            b.a = {};
            b.a.c = 3E3;
            b.a.d = function() {
                var b = /Firefox\/(\d+)/.exec(navigator.userAgent);
                return b ? (b = parseInt(b[1], 10),
                21 > b && 14 < b) : !1
            }();
            b.a.e = function() {
                var g, k = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
                b.d.a || (g = b.a.f(),
                !g && b.d.b && (g = b.d.b));
                g || (g = b.d.c.location.hostname);
                return (g = g && g.match && g.match(k)) && g[1] || b.d.c.location.hostname
            }
            ;
            b.a.f = function() {
                var b = location && location.ancestorOrigins;
                return b ? 0 === b.length ? !1 : b[b.length - 1] : !1
            }
            ;
            b.a.g = function() {
                var g, k = b.a.e(), t = k && k.split("."), c = t && t.length;
                3 <= c ? g = "co" === t[c - 2] || "com" === t[c - 2] ? t[c - 3] + "." + t[c - 2] + "." + t[c - 1] : t[c - 2] + "." + t[c - 1] : 2 == c && (g = t[c - 2] + "." + t[c - 1]);
                return g && decodeURIComponent(g) || decodeURIComponent(k)
            }
            ;
            b.a.h = function(b) {
                if ("string" !== typeof b)
                    return "";
                var k = b.match(/^([^:]{2,}:\/\/[^\/]*)/);
                k && k[1] && (b =
                k[1]);
                return b
            }
            ;
            b.a.i = function(b, k) {
                for (var t = [b], c = 1; c <= k; c++)
                    t.push(b + c),
                    t.push(b - c);
                t = t[u.floor(u.random() * t.length)];
                c = u.floor(u.random() * t);
                return {
                    multiplier: t,
                    sample: 0 == c
                }
            }
            ;
            b.a.j = function(g, k) {
                var t = b.a.i(g, k);
                b.a.j = function() {
                    return t
                }
                ;
                return t
            }
            ;
            b.a.k = function() {
                var g = b.a.l();
                return 5 === g || 6 === g || 7 === g
            }
            ;
            b.a.l = function() {
                if (!navigator)
                    return null ;
                var b;
                b = navigator.userAgent;
                return "Microsoft Internet Explorer" == navigator.appName ? parseInt(b.replace(/^.*MSIE (\d+).*$/, "$1"), 10) : "Netscape" == navigator.appName &&
                (b = b.match(/(?:Trident\/.*rv:|MSIE )(\d+)/)) ? parseInt(b[1], 10) : null
            }
            ;
            b.a.m = function() {
                return null  != b.a.l()
            }
            ;
            b.a.n = function(g, k) {
                return -1 !== b.a.indexOf(g, k)
            }
            ;
            b.a.o = function() {
                function b(g) {
                    if (!g)
                        return "";
                    g = g.match(/[\d]+/g);
                    g.length = 3;
                    return g.join(".")
                }
                var k = !1
                  , t = "";
                if (navigator.plugins && navigator.plugins.length) {
                    var c = navigator.plugins["Shockwave Flash"];
                    c && (k = !0,
                    c.description && (t = b(c.description)));
                    navigator.plugins["Shockwave Flash 2.0"] && (k = !0,
                    t = "2.0.0.11")
                } else if (navigator.mimeTypes && navigator.mimeTypes.length)
                    (k =
                    (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin && c.enabledPlugin.description) && (t = b(c.enabledPlugin.description));
                else
                    try {
                        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
                        k = !0,
                        t = b(c.GetVariable("$version"))
                    } catch (f) {
                        try {
                            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                            k = !0,
                            t = "6.0.21"
                        } catch (d) {
                            try {
                                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                                k = !0,
                                t = b(c.GetVariable("$version"))
                            } catch (m) {}
                        }
                    }
                return k ? t : "0"
            }
            ;
            b.a.getElementsByClassName = function(b, k, t) {
                k = k ||
                "*";
                t = t || document;
                if (t.getElementsByClassName) {
                    var c = []
                      , f = t.getElementsByClassName(b);
                    if ("*" !== k) {
                        b = 0;
                        for (t = f.length; b < t; b++) {
                            var d = f[b];
                            d.tagName === k && c.push(d)
                        }
                        return c
                    }
                    return f
                }
                f = [];
                k = t.getElementsByTagName(k);
                t = l(b);
                d = k.length;
                for (b = 0; b < d; b++)
                    c = k[b],
                    t(c) && f.push(c);
                return f
            }
            ;
            b.a.p = l;
            b.a.q = function(b) {
                return new y - b.de
            }
            ;
            b.a.r = function(b) {
                return b.replace(/^http:/, "").replace(/^\/\//, "").replace(/^www[^.]*\./, "").split("/")[0]
            }
            ;
            b.a.s = function(g, k, t) {
                if (("undefined" === typeof t || !t) && g && (t = b.a.t(g),
                !t))
                    return;
                if (g && g.nodeType)
                    if ("undefined" === typeof Node) {
                        if (1 != g.nodeType)
                            return
                    } else if (g.nodeType != Node.ELEMENT_NODE)
                        return;
                if (t.getComputedStyle)
                    return t.getComputedStyle(g, "") && t.getComputedStyle(g, "")[k];
                for (t = k.indexOf("-"); -1 < t; )
                    k = t == k.length - 1 ? k.substr(0, t) : k.substr(0, t) + k.charAt(t + 1).toUpperCase() + k.substr(t + 2),
                    t = k.indexOf("-");
                if (g.currentStyle)
                    return g.currentStyle[k];
                if (g.style)
                    return g.style[k]
            }
            ;
            b.a.u = function(g) {
                if (!g)
                    return !1;
                var k = b.a.s(g, "background-image");
                k || (k = b.a.s(g, "backgroundImage"));
                var t;
                k && (t = (t = k.match("url\\((.*)\\)")) && t[1].replace(/\x22/g, ""));
                return t
            }
            ;
            b.a.v = function(g, k) {
                if (!g)
                    return !1;
                var t = [g]
                  , c = !1;
                b.a.forEach("number" === typeof k ? k : 50, function() {
                    if ((c = b.a.w(g)) && 1 == c.nodeType)
                        g = c,
                        t.push(g);
                    else
                        return !1
                });
                return t
            }
            ;
            b.a.w = function(b) {
                return b.parentNode || b.parentElement || !1
            }
            ;
            b.a.x = function(g, k) {
                var t = "number" === typeof k ? k : 50
                  , c = []
                  , f = b.a.t(g);
                if (f)
                    c.push(f);
                else
                    return c;
                b.a.forEach(t, function() {
                    var k = b.e.a(g, f);
                    return k && (f = b.a.t(k)) ? (c.push(f),
                    !0) : !1
                });
                return c
            }
            ;
            b.a.y =
            function() {
                return null  !== /iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(navigator && navigator.userAgent || "")
            }
            ;
            b.a.z = function() {
                return null  !== /iPhone|iPod/.exec(navigator.userAgent)
            }
            ;
            b.a.aa = function() {
                return null  !== /iPad/.exec(navigator.userAgent)
            }
            ;
            b.a.ab = function() {
                return null  !== /Android/.exec(navigator.userAgent)
            }
            ;
            b.a.ac = function() {
                var b = navigator.userAgent;
                return b.match(/iPhone|iPod|iPad/) && !b.match(/Safari|CriOS/i)
            }
            ;
            b.a.ad = function() {
                var g = navigator.userAgent;
                return b.a.ab() && g.match(/Version/)
            }
            ;
            b.a.ae = function() {
                var g;
                return function() {
                    if ("undefined" !== typeof g)
                        return g;
                    g = {
                        isInApp: 0,
                        env: "Not app"
                    };
                    b.a.ac() ? (g.isInApp = 1,
                    g.env = "iOS") : b.a.ad() && (g.isInApp = 1,
                    g.env = "Android");
                    return g
                }
            }();
            b.a.af = function() {
                var g = b.a.ae()
                  , k = b.d.c.screen;
                if ("iOS" === g.env)
                    return "undefined" !== typeof window.orientation ? 0 === window.orientation || 180 === window.orientation ? (g = k.width,
                    k = k.height) : (g = k.height,
                    k = k.width) : g = k = 0,
                    {
                        w: g,
                        h: k
                    };
                if ("Android" === g.env) {
                    var g = b.d.c.devicePixelRatio
                      ,
                    t = 1;
                    .05 > u.abs(k.width / b.d.c.innerWidth - g) && (t = g);
                    return {
                        w: k.width / t,
                        h: k.height / t
                    }
                }
                return {
                    w: k.width,
                    h: k.height
                }
            }
            ;
            b.a.ag = function() {
                return b.a.ah() ? b.a.ai() ? 1 : 2 : 0
            }
            ;
            b.a.ah = function() {
                var g;
                return function() {
                    if ("undefined" !== typeof g)
                        return g;
                    var k = b.d.c
                      , t = b.a.af();
                    if (b.d.c.navigator.standalone)
                        g = !0;
                    else {
                        var c = k.innerWidth / t.w
                          , k = k.innerHeight / t.h
                          , c = !isNaN(c) && isFinite(c) && .9 <= c && 1.1 >= c
                          , k = !isNaN(k) && isFinite(k) && .75 <= k && 1.1 >= k;
                        g = c && k
                    }
                    return g
                }
            }();
            b.a.ai = function() {
                var g = b.a.ah()
                  , k = b.a.g()
                  , t = b.d.d()
                  , c =
                "applewebdata:" === window.location.protocol || "data:" === window.location.protocol
                  , k = "-" === k || "" === k.replace(/^\s+|\s+$/gm, "");
                return g && !(k || t || c)
            }
            ;
            b.a.aj = function() {
                return function() {}
            }();
            b.a.ak = function() {
                return b.a.aj() ? !!document.getElementById(APPSCOPE_CONTAINER_ID) : !1
            }
            ;
            b.a.al = function() {
                var g;
                return function() {
                    return "undefined" !== typeof g ? g : g = b.a.ah()
                }
            }();
            b.a.am = function() {
                var b = window;
                try {
                    return "undefined" !== typeof b.external && "undefined" !== typeof b.external.InPrivateFilteringEnabled && b.external.InPrivateFilteringEnabled() ||
                    "undefined" !== typeof b.external && "undefined" !== typeof b.external.msTrackingProtectionEnabled && b.external.msTrackingProtectionEnabled() || "undefined" !== typeof b._gaUserPrefs && b._gaUserPrefs.ioo && b._gaUserPrefs.ioo() || "undefined" !== typeof navigator.doNotTrack && ("yes" === navigator.doNotTrack || !0 === navigator.doNotTrack) || "undefined" !== typeof b._gaUserPrefs && !0 === b._gaUserPrefs
                } catch (k) {
                    return !1
                }
            }
            ;
            b.a.an = function() {
                return !1
            }
            ;
            b.a.getAttribute = function(b, k) {
                return b[k] || b.getAttribute(k)
            }
            ;
            b.a.ao = function(b) {
                var k =
                0, t;
                for (t in b)
                    b.hasOwnProperty(t) && (k += 1);
                return k
            }
            ;
            var c = [function(b) {
                if (!b || "IFRAME" !== b.nodeName)
                    return !1;
                var k = b.offsetHeight;
                return isNaN(k) || 15 < k || "google_conversion_frame" !== b.name ? !1 : !0
            }
            ];
            b.a.ap = function(g, k) {
                return "undefined" === typeof g || null  === g || !1 === g || !b.a.aq(g) || g.nodeName && "IMG" == g.nodeName && !g.complete || b.a.filter(c, function(b) {
                    return b(g)
                }).length || !0 === g[E] ? !1 : !0
            }
            ;
            b.a.ar = function(b) {
                return b.replace(/:/g, "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
            }
            ;
            b.a.as = function(g) {
                var k = [];
                b.a.forEach(g, function(g, c) {
                    var f = typeof g;
                    "number" == f ? k.push(b.a.ar(c) + ":" + b.a.ar(g + "")) : "string" == f ? k.push(b.a.ar(c) + ":" + b.a.ar('"' + g + '"')) : "undefined" == f ? k.push(b.a.ar(c) + ":" + b.a.ar("undefined")) : "boolean" == f ? k.push(b.a.ar(c) + ":" + b.a.ar(g ? "true" : "false")) : null  === g ? k.push(b.a.ar(c) + ":" + b.a.ar("null")) : "object" != f && "function" != f || !g.toString || k.push(b.a.ar(c) + ":" + b.a.ar('"' + g.toString() + '"'))
                }, null , !0);
                k.sort();
                return "{" + k.join(",") + "}"
            }
            ;
            b.a.at = function(b) {
                var k = {};
                if ("string" != typeof b || "{" != b.charAt(0))
                    return !1;
                b = b.slice(1, -1).split(",");
                for (var t = 0; t < b.length; t++) {
                    var c = b[t].split(":");
                    c[1] = unescape(c[1]);
                    "true" == c[1] ? c[1] = !0 : "false" == c[1] ? c[1] = !1 : '"' == c[1].charAt(0) ? c[1] = c[1].slice(1, -1) : c[1] = "undefined" == c[1] ? void 0 : "null" == c[1] ? null  : "NaN" == c[1] ? NaN : parseFloat(c[1]);
                    k[unescape(c[0])] = c[1]
                }
                return k
            }
            ;
            b.a.aq = function(g) {
                var k = g.offsetWidth
                  , t = g.offsetHeight;
                b.a.forEach(b.a.v(g, 3), function(b) {
                    if (b && b.style && ("" != b.style.width || "" != b.style.height) && "hidden" == b.style.overflow) {
                        var g = parseFloat(b.style.width);
                        b = parseFloat(b.style.height);
                        k = !isNaN(g) && g < k ? g : k;
                        t = !isNaN(b) && b < t ? b : t
                    }
                });
                if (g = b.a.au(g))
                    k = g.width < k ? g.width : k,
                    t = g.height < t ? g.height : t;
                return k * t >= b.a.c
            }
            ;
            var n = {};
            b.a.au = function(g) {
                if (!(g && g.src && g.nodeName && "IMG" != !g.nodeName && g.complete))
                    return !1;
                if (n[g.src])
                    return n[g.src];
                try {
                    if ("undefined" !== typeof g.naturalHeight && "undefined" !== typeof g.naturalWidth) {
                        var k = {
                            width: g.naturalWidth,
                            height: g.naturalHeight
                        };
                        return n[g.src] = k
                    }
                } catch (t) {}
                return b.d.e && (b.d.e.src = g.src,
                b.d.e.a) ? (k = {
                    width: parseInt(b.d.e.b),
                    height: parseInt(b.d.e.c)
                },
                n[g.src] = k) : !1
            }
            ;
            b.a.av = function(b, k) {
                var t = !1
                  , c = k.body
                  , f = c && c.firstChild;
                c && f && (c.insertBefore(b, f),
                t = !0);
                return t
            }
            ;
            b.a.aw = function() {
                var b;
                return function() {
                    if (!b)
                        a: {
                            for (var k = document.getElementsByTagName("script"), t = k.length - 1; -1 < t; t--)
                                if ((b = k[t]) && b.src && b.src.indexOf && (-1 !== b.src.indexOf("liverailjsvp58397284/moatvideo.js") || -1 !== b.src.indexOf("liverailjsvp58397284%2Fmoatvideo.js")) && ("undefined" === typeof b[E] || !0 !== b[E])) {
                                    b[E] = !0;
                                    break a
                                }
                            b = void 0
                        }
                    return b ? (b[E] = !0,
                    b) : null
                }
            }();
            b.a.ax = function(b) {
                for (var k = [], t = b && b.getElementsByTagName("script"), c = t.length - 1; -1 < c; c--)
                    (b = t[c]) && b.src && b.src.match(/moatads.com\/.*\/moat(ad|video)\.js/) && !b.src.match("liverailjsvp58397284") && k.push(b);
                if (k && 0 < k.length)
                    return k
            }
            ;
            b.a.ay = function(g, k) {
                if (!g || !k)
                    return !1;
                var c = b.a.ax(b.d.f ? D.ownerDocument.body || k : k);
                if (c && 0 < c.length) {
                    var f = c[0] && c[0].src && c[0].src.match(/moatads.com\/(.*)\/moat(ad|video)\.js/);
                    f && f[1] && (g.zMoatOtherScript = f[1],
                    (c = b.f.a(c[0])) ? (c = c.cleanMoatClientLevel1 +
                    ":" + c.cleanMoatClientLevel2 + ":" + c.cleanMoatClientLevel3 + ":" + c.cleanMoatClientLevel4,
                    g.zMoatOtherHash = c ? c : "IDs Not Available") : g.zMoatOtherHash = "IDs Not Available")
                }
            }
            ;
            b.a.az = function(b, k) {
                for (var c in k)
                    k.hasOwnProperty(c) && (b[c] = k[c])
            }
            ;
            b.a.ba = function(b, k) {
                if ("string" !== typeof b || !k || !k.insertBefore || !k.ownerDocument)
                    return !1;
                var c = k.ownerDocument.createElement("script");
                c.type = "text/javascript";
                c.async = !0;
                k.insertBefore(c, k.childNodes[0]);
                c.src = b;
                return !0
            }
            ;
            b.a.bb = function(b) {
                var k;
                if (b)
                    k = /https:/i.test(b.src ||
                    b.href || "http:") ? "https:" : "http:";
                else
                    try {
                        k = window.location.protocol
                    } catch (c) {
                        b = document.createElement("a"),
                        b.href = "",
                        k = b.protocol
                    }
                return "https:" === k ? "https:" : "http:"
            }
            ;
            b.a.bc = function(b) {
                try {
                    return -1 !== (b.src || b.getAttribute("src")).indexOf("psd=1")
                } catch (k) {
                    return !1
                }
            }
            ;
            b.a.bd = function(g) {
                if (v.yh.yj() && !b.a.y())
                    try {
                        var k = v.yh.yk(g, b.d.protocol)
                          , c = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" id="moatMessageSender' + v.yh.xq() +
                        '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + k.src + '" /><param name="FlashVars" value="' + k.flashVars + '" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed type="application/x-shockwave-flash" src="' + k.src + '" quality="high" flashvars="' + k.flashVars + '" bgcolor="#ffffff" width="1" height="1" id="moatMessageSenderEmbed' + v.yh.xq() + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>'
                          ,
                        f = M.document.createElement("div");
                        f.style.position = "absolute";
                        f.style.left = "-9999px";
                        f.style.top = "-9999px";
                        b.g.a(function() {
                            if (b.a.be(f, M.document.body))
                                return f.innerHTML = c,
                                !0
                        }, 1, 100)
                    } catch (d) {}
            }
            ;
            b.a.bf = function(g) {
                if (v && v.yh && v.yh.qa && v.yh.qa() && !b.a.y())
                    try {
                        var k = v.yh.qb(g, b.d.protocol)
                          , c = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" id="moatCap"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' +
                        k.src + '" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed type="application/x-shockwave-flash" src="' + k.src + '" quality="high" bgcolor="#ffffff" width="1" height="1" id="moatCapEmbed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>'
                          , f = M.document.createElement("div");
                        f.style.position = "absolute";
                        f.style.left = "-9999px";
                        f.style.top = "-9999px";
                        b.g.a(function() {
                            if (b.a.be(f, M.document.body))
                                return f.innerHTML =
                                c,
                                !0
                        }, 3, 100)
                    } catch (d) {}
            }
            ;
            b.a.bg = function(b) {
                for (var k = [], c = 0; c < b.length; c++)
                    k.push(b[c]);
                return k
            }
            ;
            b.a.nextElementSibling = function(b) {
                if (b.nextElementSibling)
                    return b.nextElementSibling;
                for (; b = b.nextSibling; )
                    if (1 === b.nodeType)
                        return b
            }
            ;
            b.a.previousElementSibling = function(b) {
                if (b) {
                    if (b.previousElementSibling)
                        return b.previousElementSibling;
                    for (var k = 0; (b = b.previousSibling) && 1E3 > k; )
                        if (k++,
                        b && 1 === b.nodeType)
                            return b
                }
            }
            ;
            b.a.bh = function(b, k, c) {
                "undefined" !== typeof c && (b[k] = c)
            }
            ;
            b.a.filter = function(b, k) {
                for (var c =
                [], f = 0; f < b.length; f++)
                    k(b[f]) && c.push(b[f]);
                return c
            }
            ;
            b.a.bi = function(b, k) {
                for (var c = [], f = 0; f < k.length; f++)
                    c.push(b(k[f]));
                return c
            }
            ;
            b.a.indexOf = function(g, k) {
                if (!g)
                    return -1;
                if (b.a.bj(g)) {
                    for (var c = 0, f = g.length; c < f; c++)
                        if (g[c] === k)
                            return c;
                    return -1
                }
                return "string" === typeof g ? g.indexOf(k) : -1
            }
            ;
            b.a.bind = function(b, k) {
                return function() {
                    b[k].apply(b, arguments)
                }
            }
            ;
            var f = "ale"
              , w = "rt"
              , s = "setInte"
              , m = "rval";
            b.a.bk = {};
            b.a.bl = function(b, k) {
                if (b && k && k.childNodes) {
                    var c = k.childNodes;
                    0 < c.length ? k.insertBefore(b, c[0]) :
                    k.appendChild(b)
                }
            }
            ;
            b.a.be = function(g, k) {
                if (!g || !k)
                    return !1;
                var c = b.a.bm(k);
                if (!c)
                    return !1;
                if (b.a.hasChildNodes(c)) {
                    var f = c.childNodes[u.max(0, c.childNodes.length - 1)] || null ;
                    c.insertBefore(g, f)
                } else
                    c.appendChild(g);
                return c
            }
            ;
            b.a.bn = function(g, k, c) {
                if ("string" != typeof g || !k || !document)
                    return !1;
                c = c || document.createElement("script");
                c.type = "text/javascript";
                k = b.a.be(c, k);
                if (!k)
                    return !1;
                c.src = g;
                return k
            }
            ;
            b.a.hasChildNodes = function(b) {
                return b && b.childNodes && 0 < b.childNodes.length
            }
            ;
            b.a.bm = function(g) {
                if (!g)
                    return !1;
                if ("OBJECT" !== g.nodeName && "EMBED" !== g.nodeName)
                    return g;
                g = b.a.v(g);
                var k = !1;
                b.a.forEach(g, function(b) {
                    if (b && "OBJECT" !== b.nodeName && "EMBED" !== b.nodeName)
                        return k = b,
                        !1
                });
                return k
            }
            ;
            b.a.bo = function(b, k) {
                if ("undefined" === typeof b)
                    return !1;
                for (var c = 0, f = k.length; c < f; c++)
                    if ("string" == typeof k[c]) {
                        try {
                            b = b[k[c]]
                        } catch (d) {}
                        if ("undefined" === typeof b)
                            return !1
                    }
                return b
            }
            ;
            b.a.bp = function(b) {
                return encodeURIComponent(b.moatClientLevel1 + ":" + b.moatClientLevel2 + ":" + b.moatClientLevel3 + ":" + b.moatClientLevel4)
            }
            ;
            b.a.bq =
            function(b) {
                return z && "undefined" !== typeof b && z[b] ? z[b] : !1
            }
            ;
            b.a.br = function(b) {
                return b && "function" === typeof b ? 0 > String(Function.prototype.toString).indexOf("[native code]") ? b === Function.prototype.toString ? !1 : null  : 0 <= String(b).indexOf("[native code]") && !0 || !1 : !1
            }
            ;
            b.a.bj = d;
            b.a.bs = e;
            b.a.bt = h;
            b.a.forEach = function(b, k, c, f) {
                var d, m = typeof b;
                if (b)
                    if ("function" === m)
                        for (d in b) {
                            if ("prototype" != d && "length" != d && "name" != d && (f || !b.hasOwnProperty || b.hasOwnProperty(d)) && (m = k.call(c, b[d], d),
                            "boolean" === typeof m &&
                            !m))
                                break
                        }
                    else if ("number" === m)
                        for (d = 0; d < b && (m = k.call(c, b, d),
                        "boolean" !== typeof m || m); d++)
                            ;
                    else if ("function" === typeof b.every)
                        b.every(function(b, g, f) {
                            b = k.call(c, b, g);
                            return !("boolean" === typeof b && !b)
                        });
                    else if (h(b))
                        for (d = 0; d < b.length && (m = k.call(c, b[d], d),
                        "boolean" !== typeof m || m); d++)
                            ;
                    else
                        for (d in b)
                            if (f || b.hasOwnProperty(d))
                                if (m = k.call(c, b[d], d),
                                "boolean" === typeof m && !m)
                                    break;
                return b
            }
            ;
            b.a.bu = function(g) {
                return g && b.a.filter(g.children, function(b) {
                    return 1 === b.nodeType
                })
            }
            ;
            b.a.bv = function(b) {
                if (!b ||
                !b.aa)
                    return !1;
                if ("number" != typeof b.ADAREA) {
                    var k, c;
                    b.elementRect ? (k = b.elementRect.right - b.elementRect.left,
                    c = b.elementRect.bottom - b.elementRect.top) : (k = b.aa.offsetWidth,
                    c = b.aa.offsetHeight);
                    b.ADAREA = k * c
                }
                return b.ADAREA
            }
            ;
            b.a.bw = function(g) {
                if (!(!g || g && g.CLIPCHECKINGTARGET)) {
                    var k = b.a.v(g, 3), c;
                    k && 0 < k.length && (b.a.forEach(k, function(b) {
                        if (b && b.style && b.style.clip)
                            return c = b,
                            !1
                    }),
                    !c && g.style && g.style.clip && (c = g),
                    c && (g.CLIPCHECKINGTARGET = c))
                }
            }
            ;
            var r = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
            b.a.bx = function(g) {
                g = g.match(r);
                var k = !1;
                g && (g = b.a.bi(function(b) {
                    return parseInt(b, 10)
                }, g),
                k = {
                    top: g[1],
                    right: g[2],
                    bottom: g[3],
                    left: g[4]
                });
                return k
            }
            ;
            b.a.by = function(g) {
                if (!g)
                    return !1;
                var k = !1;
                if (g !== Object(g))
                    k = g;
                else if (b.a.bt(g))
                    for (var k = [], c = 0, f = g.length; c < f; c++)
                        k[c] = g[c];
                else
                    for (c in k = {},
                    g)
                        k[c] = g[c];
                return k
            }
            ;
            b.a.trim = function(b) {
                return String.prototype.trim ? b.trim() : b.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
            ;
            b.a.bz = function() {
                var b = function() {
                    var b = window.pageXOffset ? window.pageXOffset +
                    window.innerWidth - 1 : 0
                      , g = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
                    return b || g ? !document.elementFromPoint(b, g) : !0
                }();
                return function(k, c, f) {
                    if (!b) {
                        var d = f.defaultView || f.parentWindow || window;
                        k += d.pageXOffset;
                        c += d.pageYOffset
                    }
                    return f.elementFromPoint(k, c)
                }
            }();
            b.a.ca = function(b, k) {
                return Object.prototype.hasOwnProperty.call(b, k)
            }
            ;
            b.a.cb = function(g, k) {
                if (!g || !k || "object" != typeof g || "object" != typeof k)
                    return !1;
                var c = !0;
                b.a.forEach(g, function(b, g) {
                    if ("string" != typeof b && "number" != typeof b)
                        return !0;
                    if (!k.hasOwnProperty(g) || k[g] !== b)
                        return c = !1
                });
                b.a.forEach(k, function(b, k) {
                    if ("string" != typeof b && "number" != typeof b)
                        return !0;
                    if (!g.hasOwnProperty(k) || g[k] !== b)
                        return c = !1
                });
                return c
            }
            ;
            b.a.cc = function(b, k, c) {
                return function() {
                    k.apply(c || null , b.concat(b.slice.call(arguments)))
                }
            }
            ;
            b.a.t = function(b) {
                try {
                    var k = b && b.ownerDocument;
                    return k && (k.defaultView || k.parentWindow)
                } catch (c) {
                    return !1
                }
            }
            ;
            b.a.cd = function(g, k) {
                if (!g || !k)
                    return !1;
                for (var c = [], f, d = 0; 50 > d; d++)
                    if (k != k.parent) {
                        if (f = b.e.a(g, k))
                            c.push(f);
                        else
                            break;
                        k = k.parent;
                        g = f
                    } else
                        break;
                return c
            }
            ;
            b.a.ce = function(b) {
                b = u.max(4, b);
                return ((1 + u.random()) * u.pow(16, b) | 0).toString(16).substring(0, b)
            }
            ;
            b.a.cf = function() {
                var g = b.a.ce;
                return g(4) + "-" + g(4) + "-" + g(4) + "-" + g(4)
            }
            ;
            b.a.a = function(b) {
                window && window.clearTimeout && window.clearTimeout(b)
            }
            ;
            b.a.b = function(b) {
                window && window.clearInterval && window.clearInterval(b)
            }
            ;
            var x = function(g, k) {
                if (b.a.br(k.toString))
                    return k.toString();
                if (b.a.br(g && g.Function.prototype.toString))
                    return k.toString = g.Function.prototype.toString,
                    k.toString();
                var c = b.d.c !== g && b.d.c && b.d.c.Function.prototype.toString;
                if (b.a.br(c))
                    return k.toString = c,
                    k.toString();
                if (b.d.g && 8 >= b.a.l())
                    return k.toString();
                var c = g || window
                  , f = c.document.createElement("IFRAME");
                f.style.display = "none";
                f.style.width = "0px";
                f.style.height = "0px";
                f.width = "0";
                f.height = "0";
                b.a.be(f, c.document.documentElement);
                f.contentWindow && (k.toString = f.contentWindow.Function.prototype.toString);
                var d = k.toString();
                c.document.documentElement.removeChild(f);
                return d
            }
            ;
            b.a.toString = function(g,
            k) {
                k = k || b.d.c;
                var c;
                try {
                    c = x(k, g)
                } catch (f) {
                    c = g.toString()
                }
                return c
            }
            ;
            b.a.cg = function(g, k, c) {
                g = b.a.toString(g, c);
                if (b.d.h())
                    c.eval("(" + g + ")(" + k + ")");
                else if (c.Function)
                    (new c.Function("(" + g + ")(" + k + ")"))();
                else {
                    var f = c.document.createElement("script");
                    f.type = "text/javascript";
                    f.text = "(" + g + ")(" + k + ")";
                    b.a.be(f, c.document.body)
                }
            }
            ;
            b.a.ch = function(g) {
                var k = [];
                b.a.forEach(g, function(b, g) {
                    k.push(g)
                });
                return k
            }
        })(q);
        (function(b) {
            b.e = {};
            b.e.b = function(l) {
                if (!l)
                    return null ;
                try {
                    if (l.moatHostileIframe)
                        return null ;
                    if (l.src && l.src.slice && "http" === l.src.slice(0, 4) && b.a.r(l.src) != b.a.r(M.location.toString()))
                        return l.moatHostileIframe = !0,
                        null ;
                    var e = l && (l.contentDocument || l.contentWindow && l.contentWindow.document);
                    if (e && "string" === typeof e.location.toString())
                        return e;
                    l.moatHostileIframe = !0;
                    return null
                } catch (h) {
                    return l.moatHostileIframe = !0,
                    null
                }
            }
            ;
            b.e.a = function(l, e) {
                e = e || b.a.t(l);
                try {
                    return e && e.frameElement
                } catch (h) {
                    return !1
                }
            }
            ;
            b.e.c = function(l, e) {
                var h;
                b.a.forEach(l.getElementsByTagName("iframe"), function(b) {
                    if (b &&
                    b.contentWindow && b.contentWindow == e)
                        return h = b,
                        !1
                });
                return h
            }
            ;
            b.e.d = function(l) {
                if (l = b.e.a(l))
                    try {
                        return l.parentNode
                    } catch (e) {}
                return null
            }
            ;
            b.e.e = function(l, e) {
                if (!l)
                    return !1;
                var h = 0
                  , d = [];
                for (e = e || 10; h < e; )
                    if (h++,
                    l = b.e.a(l))
                        d.push(l);
                    else
                        return d
            }
            ;
            b.e.f = function(l, e) {
                if (!l)
                    return !1;
                var h = 0, d = [l], c;
                for (e = e || 10; h < e; ) {
                    h++;
                    try {
                        if (l = (c = l.frameElement) && b.a.t(c),
                        c && l && !b.e.g(l))
                            d.push(l);
                        else
                            return d
                    } catch (n) {
                        break
                    }
                }
                return d
            }
            ;
            b.e.h = function(l, e, h) {
                var d = [];
                l && d.push(l);
                h = h || 0;
                if (10 < h || !l || !l.frames)
                    return d;
                for (var c = 0, n = l.frames.length; c < n; c++)
                    try {
                        e && !b.e.i(l.frames[c]) ? d.push(l.frames[c]) : d = d.concat(b.e.h(l.frames[c], e, h + 1))
                    } catch (f) {
                        break
                    }
                return d
            }
            ;
            b.e.j = function(b, e) {
                e = "number" == typeof e && 0 < e ? e : 15;
                var h = [], d;
                if (b) {
                    d = b.top;
                    for (var c = 0; c < e; c++)
                        if ((b = b.parent) && b != b.top)
                            h.push(b);
                        else
                            break;
                    h.push(d)
                }
                return h
            }
            ;
            b.e.k = [];
            b.e.i = function(l) {
                for (var e, h = 0, d = b.e.k.length; h < d; h++)
                    b.e.k[h].win == l && (e = b.e.k[h]);
                if (!e) {
                    e = {
                        win: l,
                        friendly: !1
                    };
                    try {
                        l.document && (e.friendly = !0)
                    } catch (c) {}
                }
                return e.friendly
            }
            ;
            b.e.l =
            function(l, e, h) {
                l = b.e.f(l).pop();
                l = b.e.h(l, !0);
                for (var d = 0, c = l.length; d < c; d++)
                    if (l[d] == e) {
                        if (h && e.parent && b.e.g(e.parent))
                            break;
                        return !0
                    }
                return !1
            }
            ;
            b.e.g = function(b) {
                try {
                    var e = typeof b.location.toString;
                    if ("undefined" === e || "unknown" === e)
                        return !0;
                    var h = typeof b.document;
                    if ("undefined" === h || "unknown" === h)
                        return !0;
                    var d = b.innerWidth || b.document.documentElement.clientWidth || b.document.body.clientWidth || 0;
                    return "number" !== typeof (b.screenX || b.screenLeft || 0) || "number" !== typeof d ? !0 : !1
                } catch (c) {
                    return !0
                }
            }
        })(q);
        (function(b) {
            b.d = {};
            b.d.i = "22";
            b.d.j = "MoatSuperV" + b.d.i;
            b.d.k = 8;
            b.d.l = window && window["Moat#G" + b.d.i] || {};
            window["Moat#G" + b.d.i] = b.d.l;
            b.d.l.a || (b.d.l.a = u.floor(u.random() * u.pow(10, 12)));
            b.d.m = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor");
            b.d.n = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            b.d.g = b.a.m();
            b.d.o = (new y).getTime();
            b.d.p = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
            b.d.q = !1;
            var l = function() {
                var c = function(g) {
                    if (b.a.bo(g, ["mraid", "isViewable"]) &&
                    (g = g.mraid.isViewable,
                    "function" === typeof g))
                        try {
                            return isMraidViewable = g(),
                            "undefined" !== typeof isMraidViewable
                        } catch (k) {}
                    return !1
                }
                  , f = document
                  , d = window
                  , e = c(d);
                if (!e && b.d.r)
                    for (var n = 0; 20 > n && !e; n++) {
                        f = b.e.a(f.body);
                        if (!1 !== f && !f)
                            break;
                        f = (d = b.a.t(f)) && d.document;
                        e = e || c(d)
                    }
                b.d.s = function() {
                    return e && d
                }
                ;
                b.d.d = function() {
                    return e
                }
                ;
                b.d.t = function() {
                    return !1
                }
                ;
                (function() {
                    if (b.d.d()) {
                        var g = "___mraid_loop___" + (new y).getTime()
                          , k = b.a.bo(b.d.s(), ["mraid", "isViewable"]);
                        k && b.g.b(function() {
                            return k() ? (b.d.t =
                            function() {
                                return !0
                            }
                            ,
                            !1) : !0
                        }, {}, 300, g)
                    }
                })()
            }
            ;
            b.d.s = function() {
                l();
                return b.d.s()
            }
            ;
            b.d.d = function() {
                l();
                return b.d.d()
            }
            ;
            b.d.t = function() {
                l();
                return b.d.t()
            }
            ;
            var e = function() {
                var c = function(g) {
                    if (b.a.ae.isInApp)
                        return !1;
                    g = b.a.bo(g, ["$sf"]);
                    if (!g)
                        return !1;
                    var c = g.ext;
                    g = c && c.geom;
                    var f = [["exp", "b", "t", "l", "r"], "self b t l r h w xiv yiv".split(" ")], d;
                    if (c && g && "function" === typeof g)
                        try {
                            g = g();
                            if (!g)
                                return !1;
                            if (g.par)
                                return !0;
                            for (var c = 0, m = f.length; c < m; c++) {
                                d = f[c][0];
                                for (var e = 1, s = f[c].length; e < s; e++)
                                    if ("undefined" ===
                                    typeof g[d][f[c][e]])
                                        return !1
                            }
                            return !0
                        } catch (r) {}
                    return !1
                }
                  , f = window
                  , d = document
                  , e = c(f)
                  , n = !(!e && !f.$sf);
                if (!e && b.d.r)
                    for (var g = 0; 20 > g && !e; g++) {
                        d = b.e.a(d.body);
                        if (!1 !== d && !d)
                            break;
                        d = (f = b.a.t(d)) && f.document;
                        e = e || c(f);
                        n = n || e || f.$sf
                    }
                b.d.u = function() {
                    return e && f
                }
                ;
                b.d.v = function() {
                    return e
                }
                ;
                b.d.w = function() {
                    return n
                }
            }
            ;
            b.d.x = !1;
            b.d.u = function() {
                e();
                return b.d.u()
            }
            ;
            b.d.w = function() {
                e();
                return b.d.w()
            }
            ;
            b.d.v = function() {
                e();
                return b.d.v()
            }
            ;
            var h = function() {
                var c = function(g) {
                    return b.a.ae.isInApp ? !1 : b.a.bo(g,
                    ["context", "observeIntersection"]) ? !0 : !1
                }
                  , f = window
                  , d = document
                  , e = c(f)
                  , n = !(!e && !f.context);
                if (!e && b.d.r)
                    for (var g = 0; 20 > g && !e; g++) {
                        d = b.e.a(d.body);
                        if (!1 !== d && !d)
                            break;
                        d = (f = b.a.t(d)) && f.document;
                        e = e || c(f);
                        n = n || e || f.context
                    }
                b.d.y = function() {
                    return e && f
                }
                ;
                b.d.z = function() {
                    return e
                }
                ;
                b.d.aa = function() {
                    return n
                }
            }
            ;
            b.d.y = function() {
                h();
                return b.d.y()
            }
            ;
            b.d.aa = function() {
                h();
                return b.d.aa()
            }
            ;
            b.d.z = function() {
                h();
                return b.d.z()
            }
            ;
            b.d.protocol = b.a.bb();
            b.d.ab = ("https:" === b.d.protocol ? "z" : "js") + ".moatads.com";
            b.d.f =
            window != window.parent;
            var d = b.e.g(window.parent);
            b.d.r = b.d.f && !d;
            b.d.ac = b.a.y();
            b.d.a = d ? !1 : !b.e.g(window.top);
            b.d.c = b.d.a ? window.top : b.d.r ? window.parent : window;
            b.a.ae().isInApp && (b.d.a = b.a.al() || b.a.aj());
            b.d.b = b.d.c.document.referrer || "";
            try {
                b.d.ad = b.d.c.history && b.d.c.history.length
            } catch (c) {}
            try {
                if (!b.d.a) {
                    var d = window, n;
                    for (n = 0; 20 > n && d != window.top; n++)
                        d = d.parent;
                    b.d.ae = n
                }
            } catch (f) {}
            b.d.af = function() {
                var c = b.d.c;
                if (!c)
                    return !1;
                try {
                    var f = c.document && c.document.body
                      , d = c.document && c.document.documentElement
                } catch (e) {}
                try {
                    c.screen &&
                    (b.d.ag = c.screen.availWidth,
                    b.d.ah = c.screen.availHeight,
                    b.d.ai = c.screen.width,
                    b.d.aj = c.screen.height)
                } catch (n) {
                    b.d.ag = b.d.ag || 0,
                    b.d.ah = b.d.ah || 0,
                    b.d.ai = b.d.ai || 0,
                    b.d.aj = b.d.aj || 0
                }
                var g = b.d.ak(c);
                b.d.al = g.width;
                b.d.am = g.height;
                try {
                    b.d.an = c.outerWidth || c.document && c.document.body && c.document.body.offsetWidth || 0,
                    b.d.ao = c.outerHeight || c.document && c.document.body && c.document.body.offsetHeight || 0
                } catch (k) {
                    b.d.an = 0,
                    b.d.ao = 0
                }
                f && d && (b.d.ap = u.max(f.scrollHeight, f.offsetHeight, d.clientHeight, d.scrollHeight,
                d.offsetHeight),
                b.d.aq = f.scrollTop || d.scrollTop || c.pageYOffset || 0)
            }
            ;
            b.d.ak = function(b) {
                var c, f, d, e = 0, g = 0;
                try {
                    (c = b.document,
                    f = c.documentElement,
                    d = c.body,
                    "undefined" !== typeof b.innerWidth) ? (e = b.innerWidth,
                    g = b.innerHeight) : "CSS1Compat" === c.compatMode && 5 !== c.documentMode || !d || "undefined" === typeof d.clientWidth ? f && "undefined" !== typeof f.clientWidth && (e = f.clientWidth,
                    g = f.clientHeight) : (e = d.clientWidth,
                    g = d.clientHeight)
                } catch (k) {}
                return {
                    width: e,
                    height: g,
                    left: 0,
                    right: e,
                    top: 0,
                    bottom: g
                }
            }
            ;
            b.d.af();
            b.d.ar = function() {
                if (z)
                    for (var b in z)
                        if (z.hasOwnProperty(b))
                            return !0;
                return !1
            }
            ;
            b.d.as = function(c) {
                var f = !0;
                b.a.forEach(c && c.parentNode && c.parentNode.childNodes, function(c) {
                    if (b.a.n(["DIV", "IFRAME", "A", "EMBED", "OBJECT"], c.nodeName))
                        return f = !1
                });
                return f
            }
            ;
            b.d.at = function() {
                for (var b in z)
                    if (z.hasOwnProperty(b)) {
                        var c = z[b];
                        if (c && c.aa && c.aa[E])
                            return !0
                    }
                return !1
            }
            ;
            b.d.au = function() {
                return b.d.a
            }
            ;
            b.d.av = function() {
                return b.d.x || b.d.v && b.d.v()
            }
            ;
            b.d.aw = function() {
                return b.d.z && b.d.z()
            }
            ;
            b.d.ax = function(c) {
                var f = !1;
                b.h && b.h.a() ? f = !0 : b.i && b.i.a && (c && c.periscopeManager ? c.periscopeManager.measurable &&
                (f = !0) : f = !0);
                return f
            }
            ;
            b.d.ay = function(c) {
                return c ? b.d.au() || b.d.av() || b.d.ax(c) || b.d.aw() ? !0 : !1 : !1
            }
            ;
            b.d.e = new b.d.c.Image;
            b.d.h = function() {
                if ("undefined" !== typeof b.d.c["Moat#EVA"])
                    return !0;
                try {
                    if ("undefined" !== typeof b.d.c.eval && (b.d.c.eval("(function(win){ win['Moat#EVA'] = true; })(window)"),
                    "undefined" !== typeof b.d.c["Moat#EVA"]))
                        return !0
                } catch (c) {}
                return !1
            }
        })(q);
        (function(b) {
            function l(b, h, d) {
                function c(b, c) {
                    for (var d in b)
                        b.hasOwnProperty(d) && c.call(null , b[d], d)
                }
                function n(b) {
                    var d = [];
                    c(b,
                    function(b, c) {
                        d.push(c)
                    });
                    return d
                }
                b = h[b];
                b && b.xa.sode || (b.xa.sode = function() {
                    this.desw = {};
                    this.xfgf = [];
                    this.publishing_ = !1;
                    this.xkcd = {};
                    this.edws = []
                }
                ,
                b.xa.sode.prototype.uxin = function() {
                    var b = function(b) {
                        b = d.max(4, b);
                        return ((1 + d.random()) * d.pow(16, b) | 0).toString(16).substring(0, b)
                    }
                    ;
                    return function(c) {
                        return b(4) + "-" + b(4) + "-" + b(4) + "-" + b(4)
                    }
                }(),
                b.xa.sode.prototype.xsza = function(b) {
                    this.desw[b] || (this.desw[b] = {});
                    return this.desw[b]
                }
                ,
                b.xa.sode.prototype.esgf = function(b, c) {
                    this.publishing_ ? this.xfgf.push(arguments) :
                    this.zaxs.apply(this, arguments)
                }
                ,
                b.xa.sode.prototype.kswa = function(b, c) {
                    for (var d = this.xkcd[b] || [], e = d && d.length, r = 0; r < e; r++)
                        if (d[r] === c)
                            return !1;
                    d.push(c);
                    d.sort(function(b, g) {
                        return b - g
                    });
                    this.xkcd[b] = d
                }
                ,
                b.xa.sode.prototype.aksw = function(b, c) {
                    if (!this.xkcd[b])
                        return !1;
                    for (var d = this.xkcd[b], e = -1, r = d && d.length, n = 0; n < r; n++)
                        if (d[n] === c) {
                            e = n;
                            break
                        }
                    -1 != e && d.splice(e, 1);
                    this.xkcd[b] = d
                }
                ,
                b.xa.sode.prototype._getEventPriorities_ = function(b) {
                    return this.xkcd[b] || []
                }
                ,
                b.xa.sode.prototype.azsx = function(b, c,
                d) {
                    d = d || {};
                    var e = d.id || this.uxin(), n;
                    n = d.priority;
                    n = !isNaN(n) && isFinite(n) ? parseInt(n, 10) : 10;
                    for (var h = this.xsza(b), g = 0; h[e] && !d.id && 10 > g; )
                        g++,
                        e = this.uxin();
                    h[n] || (h[n] = {});
                    this.kswa(b, n);
                    d.priority = n;
                    h[n][e] = {
                        cb: c,
                        options: d
                    };
                    return e
                }
                ,
                b.xa.sode.prototype.zaxs = function(b, c) {
                    if (!this.desw[b])
                        return !1;
                    this.publishing_ = !0;
                    for (var d = this.edws.slice.call(arguments, 1), e = this._getEventPriorities_(b).slice(0), n = 0, h = e.length; n < h; n++) {
                        var g = e[n], k;
                        for (k in this.desw[b][g]) {
                            var t = this.desw[b][g][k];
                            if (t) {
                                var ca;
                                ca = t.options.includeId ? [k].concat(d) : d;
                                if (!t.options.condition || t.options.condition && t.options.condition.apply(null , ca))
                                    t.options.once && this.sxaz(b, {
                                        id: k,
                                        priority: t.options.priority
                                    }),
                                    t.cb.apply(null , ca)
                            }
                        }
                    }
                    this.publishing_ = !1;
                    n = 0;
                    for (d = this.xfgf.length; n < d; n++)
                        this.zaxs.apply(this, this.xfgf.pop())
                }
                ,
                b.xa.sode.prototype.swaq = function(b, c, d) {
                    var e = !1;
                    if (this.desw[b] && this.desw[b][d])
                        try {
                            delete this.desw[b][d][c],
                            e = !0
                        } catch (h) {}
                    0 === n(this.desw[b][d]).length && this.aksw(b, d);
                    return e
                }
                ,
                b.xa.sode.prototype.sxaz =
                function(b, c) {
                    if (!c || "object" != typeof c || !this.desw[b])
                        return !1;
                    if (c.id && void 0 !== c.priority)
                        return this.swaq(b, c.id, c.priority);
                    if (c.id || c.callback)
                        for (var d = this._getEventPriorities_(b), e = 0, n = d.length; e < n; e++) {
                            var h = d[e];
                            if (c.id && c.callback) {
                                if (this.desw[b][h][c.id] && this.desw[b][h][c.id].cb == c.callback)
                                    return this.swaq(b, c.id, h)
                            } else if (c.id) {
                                if (this.desw[b][h][c.id])
                                    return this.swaq(b, c.id, h)
                            } else
                                for (var g in this.desw[b][h])
                                    if (this.desw[b][h][g] && this.desw[b][h][g].cb == c.callback)
                                        return this.swaq(b,
                                        g, h)
                        }
                    return !1
                }
                ,
                b.xa.sode.prototype.ugin = function(b) {
                    if ("string" === typeof b)
                        if (this.desw[b])
                            delete this.desw[b];
                        else
                            return !1;
                    else
                        this.desw = {};
                    return !0
                }
                )
            }
            b.j = {};
            b.j.a = function(e) {
                e.xa.sode || (e.xb == window ? l(b.d.j, window, u) : b.a.cg(l, "'" + b.d.j + "',window, Math", e.xb));
                b.j.b = new e.xa.sode
            }
        })(q);
        (function(b) {
            function l(b, h) {
                function d(b) {
                    var c = f.xb.Math.pow
                      , d = f.xb.Math.random;
                    b = (0,
                    f.xb.Math.max)(4, b);
                    return ((1 + d()) * c(16, b) | 0).toString(16).substring(0, b)
                }
                function c(b) {
                    return function(c) {
                        return b(c)
                    }
                }
                function n(b,
                c) {
                    if (!b || "string" !== typeof c || !b[c] || b == window)
                        return !1;
                    if ("string" === typeof b.nodeName && ("OBJECT" === b.nodeName || "EMBED" === b.nodeName)) {
                        var d = document && document.body && document.body[c];
                        if (d && d !== b[c])
                            return d
                    }
                    return !1
                }
                h[b] = h[b] || {
                    zs: !1,
                    zr: 0,
                    yf: {},
                    h: 0,
                    m: 0,
                    i: {},
                    xa: {},
                    xb: h,
                    xc: {}
                };
                var f = h[b]
                  , w = {};
                f.xc.esde = function(b) {
                    window && window.clearTimeout && window.clearTimeout(b)
                }
                ;
                f.xc.ynds = function(b, d, f, e) {
                    var g, k = c(f), t;
                    b.addEventListener ? (f = "addEventListener",
                    g = "") : (f = "attachEvent",
                    g = "on");
                    if (t = n(b, f))
                        try {
                            t.call(b,
                            g + d, k, !1)
                        } catch (h) {
                            b[f](g + d, k, !1)
                        }
                    else if (b && f && b[f])
                        try {
                            b[f](g + d, k, !1)
                        } catch (l) {}
                    !1 !== e && (w[d + e] = k)
                }
                ;
                f.xc.engn = function(b, c, d, f) {
                    var g, k = c + f, t;
                    if (!b)
                        return delete w[k],
                        !1;
                    d = !1 !== f ? w[k] : d;
                    b.removeEventListener ? (f = "removeEventListener",
                    g = "") : (f = "detachEvent",
                    g = "on");
                    if (t = n(b, f))
                        try {
                            t.call(b, g + c, d, !1)
                        } catch (e) {
                            b[f](g + c, d, !1)
                        }
                    else
                        try {
                            b[f](g + c, d, !1)
                        } catch (h) {}
                    delete w[k]
                }
                ;
                f.xc.exde = function(b, d) {
                    b = c(b);
                    var f;
                    window && window.setTimeout && (f = window.setTimeout(b, d));
                    return f
                }
                ;
                f.xc.exae = function(b, c, d) {
                    return function() {
                        c.apply(d ||
                        null , b.concat(b.slice.call(arguments)))
                    }
                }
                ;
                f.xc.uxin = function() {
                    return d(4) + "-" + d(4) + "-" + d(4) + "-" + d(4)
                }
                ;
                f.xc.twer = function(b, c) {
                    f && (f.yf || (f.yf = {}),
                    f && f.yf && (f.yf[c] ? f.yf[c].push(b) : f.yf[c] = [b]))
                }
            }
            b.k = {};
            b.k.a = function(e) {
                var h = b.k.b(e)
                  , d = !1;
                h || (h = b.k.c(e),
                d = !0);
                window[b.d.j] = h;
                b.j.a(h);
                d && (h.swde = new h.xa.sode);
                b.j.b.azsx("adKilled", b.k.d);
                b.j.b.azsx("allLocalAdsKilled", b.k.e, {
                    once: !0
                });
                return h
            }
            ;
            b.k.e = function() {
                b.j.b.sxaz("adKilled", {
                    callback: b.k.d
                });
                b.k.f(v)
            }
            ;
            b.k.d = function(e) {
                if (v) {
                    try {
                        var h =
                        v.yf[b.d.l.a];
                        if (h) {
                            var d = b.a.indexOf(h, e.yg);
                            -1 < d && h.splice(d, 1)
                        }
                    } catch (c) {}
                    b.k.f(v)
                }
            }
            ;
            b.k.g = function(e, h) {
                var d = b.k.b(b.d.c);
                d && d.xc.twer(e, h)
            }
            ;
            b.k.f = function(e) {
                var h = !1
                  , d = !1
                  , c = 0;
                try {
                    e.yf[b.d.l.a] && (d = 0 === e.yf[b.d.l.a].length),
                    b.a.forEach(e.yf, function(b) {
                        0 < b.length && c++
                    }),
                    0 === c && (h = !0)
                } catch (n) {}
                d && e.swde.esgf("allAdsInWindowKilled", b.d.l.a);
                h && (b.j.b.sxaz("adKilled", {
                    callback: b.k.d
                }),
                b.j.b.sxaz("allLocalAdsKilled", {
                    callback: b.k.e
                }),
                e.swde.esgf("allAdsKilled"))
            }
            ;
            b.k.c = function(e) {
                e == window ? l(b.d.j,
                window) : b.a.cg(l, "'" + b.d.j + "',window", e);
                return b.k.b(e)
            }
            ;
            b.k.b = function(e) {
                try {
                    return e = e || b.d.c,
                    e[b.d.j]
                } catch (h) {
                    return null
                }
            }
            ;
            b.k.h = function(e) {
                var h = b.k.b();
                h && (h.i[e] = !0)
            }
        })(q);
        var v = q.k.a(q.d.c)
          , Ia = q.d.r
          , na = q.d.a
          , P = q.a.y()
          , za = q.d.o
          , M = q.d.c;
        if (q.a.am() || q.a.an())
            return !1;
        (function(b) {
            function l(b, h, d) {
                var c = h[b];
                c && c.xa.txae || (c.xa.txae = function(b, d) {
                    this.sxdc = c.xc.uxin();
                    this.cdxs = b;
                    this.xscd = {};
                    this.swde = d;
                    var e = this
                      , h = this.swde.azsx("allAdsInWindowKilled", function(b) {
                        c.dcsx.engn({
                            listenerName: "unloadFn" +
                            b
                        });
                        c.dcsx.engn({
                            listenerName: "beforeunloadFn" + b
                        })
                    });
                    this.swde.azsx("allAdsKilled", function() {
                        e.swde.sxaz("allAdsInWindowKilled", {
                            id: h
                        });
                        c.dcsx && (c.dcsx.aqsw(),
                        c.zs = !1,
                        c.xz = !1,
                        c.dcsx = !1)
                    }, {
                        once: !0
                    })
                }
                ,
                c.xa.txae.prototype.wsed = function(b, d, e, h, m) {
                    this.xscd[h] || (this.xscd[h] = {});
                    this.xscd[h].evt = d;
                    this.xscd[h].target = b;
                    this.xscd[h].periodic = !0;
                    var r;
                    r = c.xc.exae([this], function(x, g) {
                        c.xc.engn(b, d, null , h);
                        if (x.xscd[h]) {
                            x.xscd[h].tid = c.xc.exde(function() {
                                c.xc.ynds(b, d, r, h)
                            }, m);
                            try {
                                x.swde.zaxs(e, g)
                            } catch (k) {}
                        }
                    });
                    c.xc.ynds(b, d, r, h)
                }
                ,
                c.xa.txae.prototype.wsqa = function(b) {
                    this.xscd[b] && (c.xc.esde(this.xscd[b].tid),
                    c.xc.engn(this.xscd[b].target, this.xscd[b].evt, null , b),
                    delete this.xscd[b])
                }
                ,
                c.xa.txae.prototype.qaws = function() {
                    this.wsed(this.cdxs, "scroll", "scroll", "globalScrollevent" + this.sxdc, 1E3)
                }
                ,
                c.xa.txae.prototype.aqsw = function() {
                    for (var b in this.xscd)
                        this.engn({
                            listenerName: b
                        })
                }
                ,
                c.xa.txae.prototype.ynds = function(b, d, e, h) {
                    if (!this.xscd[h]) {
                        this.xscd[h] = {};
                        this.xscd[h].evt = d;
                        this.xscd[h].target = b;
                        var m;
                        m =
                        c.xc.exae([this], function(b, c) {
                            b.xscd[h] && b.swde.zaxs(e, c)
                        });
                        c.xc.ynds(b, d, m, h)
                    }
                }
                ,
                c.xa.txae.prototype.engn = function(b) {
                    function d(b, g) {
                        b.xscd[g].periodic ? b.wsqa(g) : (c.xc.engn(b.xscd[g].target, b.xscd[g].evt, null , g),
                        delete b.xscd[g])
                    }
                    var e = b.target && b.evt
                      , h = b.target && !b.evt
                      , m = b.all;
                    if (b.listenerName)
                        this.xscd[b.listenerName] && d(this, b.listenerName);
                    else if (e)
                        for (var r in this.xscd)
                            (e = this.xscd[r]) && e.evt == b.evt && e.target == b.target && d(this, r);
                    else if (h)
                        for (r in this.xscd)
                            (e = this.xscd[r]) && e.target ==
                            b.target && d(this, r);
                    else if (m)
                        for (r in this.xscd)
                            (e = this.xscd[r]) && d(this, r)
                }
                )
            }
            b.l = {};
            b.l.a = function(e) {
                e && (e.xa.txae || (e.xb == window ? l(b.d.j, window, u) : b.a.cg(l, "'" + b.d.j + "',window, Math", e.xb)),
                e.zs || (e.dcsx = new e.xa.txae(b.d.c,e.swde),
                e.zs = !0))
            }
            ;
            b.j.b.azsx("modulesReady", b.l.a, {
                once: !0
            });
            b.j.b.azsx("startAdTracking", function(e) {
                v && v.zs && !v.xz && (v.dcsx ? (v.xz = !0,
                v.dcsx.qaws()) : b.l.a(v),
                b.focus.setFocusListeners())
            })
        })(q);
        (function(b) {
            function l(b) {
                return function() {
                    var d = !1;
                    return function(c) {
                        try {
                            return b &&
                            b.apply ? b.apply(null , arguments) : b(c)
                        } catch (e) {
                            if (!d) {
                                d = !0;
                                var f = (new y).getTime();
                                window["Moat#ETS"] || (window["Moat#ETS"] = f);
                                window["Moat#EMC"] || (window["Moat#EMC"] = 0);
                                var w = 36E5 <= f - window["Moat#ETS"]
                                  , s = "";
                                try {
                                    s = b.toString()
                                } catch (m) {
                                    s = "failed"
                                }
                                s = e.name + " in closure (cb): " + e.message + ", stack=" + e.stack + ", \ncb=" + s + "\n";
                                if (!w && 10 > window["Moat#EMC"]) {
                                    window["Moat#EMC"]++;
                                    try {
                                        var r = "//video.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("LIVERAILJSVPAID1") + "&ac=1&k=" + escape(s) +
                                        "&ar=" + escape("621d5e4-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new y).getTime()
                                          , x = new Image(1,1);
                                        x.src = r
                                    } catch (g) {}
                                } else if (w) {
                                    window["Moat#EMC"] = 1;
                                    window["Moat#ETS"] = f;
                                    try {
                                        r = "//video.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("LIVERAILJSVPAID1") + "&ac=1&k=" + escape(s) + "&ar=" + escape("621d5e4-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new y).getTime(),
                                        x = new Image(1,1),
                                        x.src = r
                                    } catch (k) {}
                                }
                            }
                        }
                    }
                }()
            }
            b.g = {};
            var e = {};
            b.g.c = e;
            b.g.d = function(e, d) {
                if (!e || "string" !== typeof d ||
                !e[d] || e == window)
                    return !1;
                if ("string" === typeof e.nodeName && ("OBJECT" === e.nodeName || "EMBED" === e.nodeName)) {
                    var c = b && b.m && b.m[d];
                    if (c && c !== e[d])
                        return c
                }
                return !1
            }
            ;
            b.g.e = function(h, d, c, n) {
                var f, w = l(c), s;
                h.addEventListener ? (c = "addEventListener",
                f = "") : (c = "attachEvent",
                f = "on");
                if (s = b.g.d(h, c))
                    try {
                        s.call(h, f + d, w, !1)
                    } catch (m) {
                        h[c](f + d, w, !1)
                    }
                else if (h && c && h[c])
                    try {
                        h[c](f + d, w, !1)
                    } catch (r) {}
                !1 !== n && (e[d + n] = w)
            }
            ;
            b.g.f = function(h, d, c, n) {
                var f, w = d + n, s;
                if (!h)
                    return delete e[w],
                    !1;
                c = !1 !== n ? e[w] : c;
                h.removeEventListener ?
                (n = "removeEventListener",
                f = "") : (n = "detachEvent",
                f = "on");
                if (s = b.g.d(h, n))
                    try {
                        s.call(h, f + d, c, !1)
                    } catch (m) {
                        h[n](f + d, c, !1)
                    }
                else
                    try {
                        h[n](f + d, c, !1)
                    } catch (r) {}
                delete e[w]
            }
            ;
            b.g.g = function(b, d) {
                b = l(b);
                var c;
                window && window.setInterval && (c = window.setInterval(b, d),
                L.push(c));
                return c
            }
            ;
            b.g.h = function(b, d) {
                b = l(b);
                var c;
                window && window.setTimeout && (c = window.setTimeout(b, d),
                $.push(c));
                return c
            }
            ;
            b.g.b = function(e, d, c, n) {
                if (!n)
                    return !1;
                n += "";
                B[n] && b.a.a(B[n].tid);
                B[n] = {};
                B[n].callback = l(e);
                B[n].params = d;
                B[n].interval =
                c;
                B[n].tid = b.g.h(b.g.i(n), c);
                callbacks = null
            }
            ;
            b.g.i = function(e) {
                return function() {
                    if (!B || !B[e])
                        return !1;
                    var d = B[e].callback(B[e].params);
                    if ("boolean" === typeof d && !1 === d)
                        return b.a.a(B[e].tid),
                        B[e] = !1;
                    B[e].tid = b.g.h(b.g.i(e), B[e].interval);
                    time = e = null
                }
            }
            ;
            b.g.j = function() {
                return B
            }
            ;
            b.g.a = function(e, d, c, n) {
                var f = 0
                  , w = function() {
                    f += 1;
                    !0 !== e() && (f < d ? b.g.h(w, c) : "function" === typeof n && n())
                }
                ;
                w()
            }
            ;
            b.g.k = l
        })(q);
        (function(b) {
            function l() {
                this.height = this.width = this.absTop = this.absLeft = 0;
                this.update = function(b) {
                    var c =
                    f("left", b.win)
                      , d = f("top", b.win);
                    !1 !== c && !1 !== d && (this.absLeft = b.left + c,
                    this.absTop = b.top + d,
                    this.width = b.width,
                    this.height = b.height)
                }
            }
            function e(g, c) {
                var d = g.zr;
                x.hasOwnProperty(d) || (x[d] = new l);
                var f = c || new b.n.j(g.aa);
                x[d].update(f)
            }
            function h(g, k) {
                if (!g)
                    return !1;
                var d = "number" == typeof g.zr, f, m;
                d ? (f = g.aa,
                m = g._calcVideoBasedOnContainer) : f = g;
                m = m ? new b.n.j(f.parentNode,k) : new b.n.j(f,k);
                f = m.height;
                var n = m.width
                  , h = m.calcArea();
                if (0 === h)
                    return {
                        area: h,
                        percv: 0
                    };
                var r = c(m), w = r.visibleRect.calcArea(), s =
                w / h, x;
                a: {
                    var l = r.cumulRect
                      , q = r.cumulRect.getViewportRect();
                    if (0 > l.top && 0 < l.bottom)
                        x = -l.top;
                    else if (0 <= l.top && l.top <= q.height)
                        x = 0;
                    else {
                        x = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    if (0 <= l.bottom && l.bottom <= q.height)
                        l = l.height;
                    else if (l.bottom > q.height && l.top < q.height)
                        l = l.height - (l.bottom - q.height);
                    else {
                        x = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    x = {
                        yMin: x,
                        yMax: l
                    }
                }
                d && e(g, m);
                return {
                    area: h,
                    visibleArea: w,
                    visibleRect: r.visibleRect,
                    cumulRect: r.cumulRect,
                    percv: s,
                    yMinMax: x,
                    elGeo: {
                        elHeight: f,
                        elWidth: n,
                        foldTop: r.cumulRect.top,
                        totalArea: r.parentArea
                    },
                    rect: m.rect
                }
            }
            function d(b, c) {
                for (var d = [], f = 0; f < c.length; f++)
                    d.push(b(c[f]));
                return d
            }
            function c(g) {
                var c, f = b.a.cd(g.el, g.win), f = d(function(g) {
                    return new b.n.j(g)
                }, f);
                f.unshift(g);
                var e = f.length;
                g = new b.n.j(g.el,b.d.c);
                for (var m = 0; m < e; m++) {
                    var n = f[m];
                    0 === m ? c = n : (c.changeReferenceFrame(n),
                    g.changeReferenceFrame(n));
                    n = n.getViewportRect(m < e - 1 ? f[m + 1] : !1);
                    c = b.n.l(c, n)
                }
                return {
                    visibleRect: c,
                    cumulRect: g,
                    parentArea: f[f.length - 1].calcArea()
                }
            }
            function n(b, c, d, f) {
                b = u.max(b, d);
                c = u.min(c, f);
                return c > b ? [b, c] : [0,
                0]
            }
            function f(b, c) {
                c || (c = window);
                try {
                    var d = c.document.documentElement
                      , f = c.document.body;
                    return "left" === b ? c.pageXOffset || d && d.scrollLeft || f && f.scrollLeft : c.pageYOffset || d && d.scrollTop || f && f.scrollTop
                } catch (e) {
                    return !1
                }
            }
            function w(g, c, d, f) {
                var e = [], m;
                for (m in g) {
                    var n = g[m], n = b.a.bz(n[0], n[1], c), h;
                    if (h = n && n !== d && n[I] !== f)
                        n = (n = b.a.au(n)) && (1 >= n.width || 1 >= n.height) ? !0 : !1,
                        h = !1 === n;
                    h && e.push(m)
                }
                return e
            }
            function s(b) {
                var c = .01 * b.width
                  , d = .01 * b.height;
                return {
                    tl: [b.left + c, b.top + d],
                    m: [b.left + (b.right - b.left) /
                    2, b.top + (b.bottom - b.top) / 2],
                    br: [b.right - c, b.bottom - d]
                }
            }
            function m(g, c) {
                var f = {
                    corners: [],
                    addCorner: function(g) {
                        var c = this;
                        b.a.forEach(g, function(g) {
                            -1 === b.a.indexOf(c.corners, g) && c.corners.push(g)
                        })
                    }
                }
                  , e = b.e.e(g)
                  , e = d(function(c) {
                    var k = new b.n.j(g)
                      , d = new b.n.j(c);
                    k.changeReferenceFrame(d);
                    return {
                        rect: k,
                        frame: c,
                        doc: c.ownerDocument
                    }
                }, e);
                e.unshift({
                    rect: new b.n.j(g),
                    frame: g,
                    doc: g.ownerDocument
                });
                b.a.forEach(e, function(b) {
                    var g = s(b.rect);
                    f.addCorner(w(g, b.doc, b.frame, c))
                });
                return f.corners
            }
            b.n = {};
            var r =
            b.d.a
              , x = {};
            b.n.a = .5;
            b.n.b = 236425;
            b.n.c = .98;
            b.n.d = void 0;
            b.n.e = function(g, c) {
                c = c || !1;
                return function(d, f) {
                    var e = d.ao.skin ? b.n.f(d, f) : h(d, f);
                    e.isVisible = c ? e.percv > g : e.percv >= g;
                    e.elGeo && (e.elGeo.threshold = g);
                    return e
                }
            }
            ;
            b.n.f = function(g, c) {
                var d = h(g, c)
                  , f = b.n.g(d, g)
                  , e = b.n.c;
                d.isVisible = d.percv >= f;
                d.isFullyVisible = d.percv >= e;
                d.elGeo && (d.elGeo.threshold = f);
                g.videoIsFullscreen && 0 < d.percv && (d.isVisible = !0);
                .8 <= d.percv && (d.isDentsuVisible = !0);
                b.n.d ? d.percv > b.n.d && (b.n.d = d.percv) : b.n.d = d.percv;
                return d
            }
            ;
            b.n.g =
            function(g, c) {
                return b.n.a
            }
            ;
            b.n.h = function() {
                return r
            }
            ;
            b.n.i = function(b, c) {
                r && x.hasOwnProperty(c) || e(b);
                return x[c]
            }
            ;
            b.n.k = b.d.ak;
            b.n.j = function(g, c, d, f) {
                try {
                    this.rect = d || g.getBoundingClientRect && g.getBoundingClientRect() || {}
                } catch (e) {
                    this.rect = d || g && {
                        top: g.offsetTop,
                        left: g.offsetLeft,
                        width: g.offsetWidth,
                        height: g.offsetHeight,
                        bottom: g.offsetTop + g.offsetHeight,
                        right: g.offsetLeft + g.offsetWidth
                    } || {}
                }
                d = "left right top bottom width height".split(" ");
                for (f = 0; f < d.length; f++) {
                    var m = d[f];
                    this[m] = this.rect[m]
                }
                g &&
                g.CLIPCHECKINGTARGET && (d = b.a.bx(g.CLIPCHECKINGTARGET.style.clip)) && (this.right = this.left + d.right,
                this.left += d.left,
                this.bottom = this.top + d.bottom,
                this.top += d.top);
                this.width = this.right - this.left;
                this.height = this.bottom - this.top;
                this.el = g;
                this.win = c || g && b.a.t(g);
                this.changeReferenceFrame = function(b) {
                    this.left += b.left;
                    this.right += b.left;
                    this.top += b.top;
                    this.bottom += b.top
                }
                ;
                this.calcArea = function() {
                    return (this.right - this.left) * (this.bottom - this.top)
                }
                ;
                this.getViewportRect = function(g) {
                    var c = b.d.ak(this.win);
                    g && (g.width < c.width && (c.width = g.width,
                    c.right = c.left + c.width),
                    g.height < c.height && (c.height = g.height,
                    c.bottom = c.top + c.height));
                    return c
                }
            }
            ;
            b.n.m = function(b, c, d) {
                return {
                    left: Number(c) + Number(b.left),
                    right: Number(c) + Number(b.right),
                    top: Number(d) + Number(b.top),
                    bottom: Number(d) + Number(b.bottom)
                }
            }
            ;
            b.n.m = function(b, c, d) {
                return {
                    left: Number(c) + Number(b.left),
                    right: Number(c) + Number(b.right),
                    top: Number(d) + Number(b.top),
                    bottom: Number(d) + Number(b.bottom)
                }
            }
            ;
            b.n.l = function(g, c) {
                var d = n(g.left, g.right, c.left, c.right)
                  ,
                f = n(g.top, g.bottom, c.top, c.bottom);
                return new b.n.j(void 0,void 0,{
                    left: d[0],
                    right: d[1],
                    top: f[0],
                    bottom: f[1]
                })
            }
            ;
            b.n.n = f;
            b.n.o = h;
            b.n.p = function(g) {
                var c = g.aa;
                g = g.zr;
                if (c) {
                    if (b.d.r)
                        c = m(c, g);
                    else
                        var d = new b.n.j(c)
                          , d = s(d)
                          , c = w(d, b.d.c.document, c, g);
                    return {
                        half: 1 < c.length ? !0 : !1,
                        full: 3 === c.length ? !0 : !1
                    }
                }
            }
        })(q);
        (function(b) {
            b.i = {};
            var l = b.a.l()
              , e = null  !== l
              , h = -1 !== navigator.userAgent.indexOf("Chrome")
              , d = !1
              , c = function() {
                var b = navigator.appVersion.match(/Windows NT (\d\.\d)/);
                return b ? parseFloat(b[1]) : -1
            }()
              ,
            n = 6.2 <= c;
            b.i.b = l;
            b.i.c = e;
            b.i.d = h;
            b.i.e = c;
            b.i.f = n;
            var f = {
                FRAME_RATE: "fr",
                STAGE_WIDTH: "sd",
                ACTIVE_STAGE_WIDTH: "asd",
                THROTTLE: "td",
                RAPID_THROTTLE: "rtd"
            };
            b.i.g = f;
            b.i.h = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor");
            b.i.i = b.a.o();
            b.i.j = !1;
            if (b.i.h)
                try {
                    var w = parseInt(navigator.userAgent.match(/Version\/(\d)/)[1], 10);
                    b.i.j = 5 < w
                } catch (s) {}
            b.i.k = !1;
            b.i.l = function(b) {
                if (!b.currentFocusState)
                    b.skipWidthCheck = !0;
                else if ("topLeft" !== b.config.name && "bottomRight" !== b.config.name) {
                    var c =
                    b.manager.getPixelByName("topLeft")
                      , d = b.manager.getPixelByName("bottomRight")
                      , c = c.viewstates[b.manager.getTargetViewState()].inview
                      , d = d.viewstates[b.manager.getTargetViewState()].inview;
                    b.skipWidthCheck = c || d ? !1 : !0
                }
            }
            ;
            b.i.m = function(c) {
                if (c.currentFocusState) {
                    if ("center" != c.config.name) {
                        var d, f, g = (d = c.manager.getPixelByName("center")) && (f = d.viewstates[c.manager.getTargetViewState()]) && f.inview;
                        d = c.manager.reachedAnyInview;
                        if (!g && d) {
                            c.skipWidthCheck = !0;
                            return
                        }
                    }
                    var k, e;
                    "undefined" !== typeof c.manager.adNum &&
                    (k = b.a.bq(c.manager.adNum)) && (e = b.o.a(k, !0),
                    b.o.b(k, 1));
                    !e || "bottomLeft" != c.config.name && "topRight" != c.config.name ? c.skipWidthCheck = !1 : c.killWidthCheck = !0
                } else
                    c.skipWidthCheck = !0
            }
            ;
            b.i.n = function(c) {
                var d = b.i.m
                  , f = {
                    insertableFunc: b.i.o,
                    pixels: [{
                        name: "center",
                        id: "moatPx" + c.zr + "_" + u.ceil(1E6 * u.random()),
                        target: c.aa,
                        container: c.aa.parentNode,
                        position: {
                            top: "50%",
                            left: "50%"
                        },
                        onWidthCheck: d
                    }, {
                        name: "topLeft",
                        id: "moatPx" + c.zr + "_" + u.ceil(1E6 * u.random()),
                        target: c.aa,
                        container: c.aa.parentNode,
                        position: {
                            top: "0px",
                            left: "0px"
                        },
                        onWidthCheck: d
                    }, {
                        name: "bottomRight",
                        id: "moatPx" + c.zr + "_" + u.ceil(1E6 * u.random()),
                        target: c.aa,
                        container: c.aa.parentNode,
                        position: {
                            top: "100%",
                            left: "100%"
                        },
                        onWidthCheck: d
                    }]
                };
                f.pixels.push({
                    name: "dentsuTopLeft",
                    id: "moatPx" + c.zr + "_" + u.ceil(1E6 * u.random()),
                    target: c.aa,
                    container: c.aa.parentNode,
                    position: {
                        top: "20%",
                        left: "20%"
                    },
                    onWidthCheck: d
                });
                f.pixels.push({
                    name: "dentsuBottomRight",
                    id: "moatPx" + c.zr + "_" + u.ceil(1E6 * u.random()),
                    target: c.aa,
                    container: c.aa.parentNode,
                    position: {
                        top: "80%",
                        left: "80%"
                    },
                    onWidthCheck: d
                });
                return f
            }
            ;
            b.i.p = function(c, d) {
                var f = !1
                  , g = !1;
                b.a.forEach(c.pixels, function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (f = !0);
                    "100%" == b.config.position.left && "100%" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (g = !0)
                });
                return f && g ? !0 : !1
            }
            ;
            b.i.q = function(c, d) {
                var f = !1;
                b.a.forEach(c.pixels, function(b) {
                    if (b.config && "50%" == b.config.position.left && "50%" == b.config.position.top && b.viewstates && b.viewstates[d])
                        return f =
                        !0,
                        !1
                });
                return f
            }
            ;
            b.i.r = function(c, d) {
                var f = !1
                  , g = !1
                  , k = !1
                  , e = !1;
                b.a.forEach(c.pixels, function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (f = !0);
                    "100%" == b.config.position.left && "100%" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (k = !0);
                    b.config && "20%" == b.config.position.left && "20%" == b.config.position.top && b.viewstates && b.viewstates[d] && (g = !0);
                    b.config && "80%" == b.config.position.left && "80%" == b.config.position.top &&
                    b.viewstates && b.viewstates[d] && (e = !0)
                });
                return f && e && k && g
            }
            ;
            b.i.s = function(c, d) {
                var f = !1;
                b.a.forEach(c.pixels, function(b) {
                    if (b.config && b.viewstates && b.viewstates[d] && (f = b.viewstates[d].inview))
                        return !1
                });
                return f
            }
            ;
            b.i.t = function(c, d) {
                var f = !1;
                b.a.forEach(c.pixels, function(b) {
                    if (b.config && "50%" == b.config.position.left && "50%" == b.config.position.top && b.viewstates && b.viewstates[d])
                        return f = b.viewstates[d].inview,
                        !1
                });
                return f
            }
            ;
            b.i.u = function(c, d) {
                if (!c.inview)
                    return !1;
                var f = !1
                  , g = !1;
                b.a.forEach(c.pixels,
                function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (f = b.viewstates[d].inview);
                    "100%" == b.config.position.left && "100%" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (g = b.viewstates[d].inview)
                });
                return f && g ? !0 : !1
            }
            ;
            b.i.v = function(c, d) {
                if (c.inview)
                    return !0;
                var f = !1
                  , g = !1
                  , k = !1
                  , e = !1;
                b.a.forEach(c.pixels, function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] &&
                    (f = b.viewstates[d].inview);
                    "100%" == b.config.position.left && "100%" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (k = b.viewstates[d].inview);
                    b.config && "20%" == b.config.position.left && "20%" == b.config.position.top && b.viewstates && b.viewstates[d] && (g = b.viewstates[d].inview);
                    b.config && "80%" == b.config.position.left && "80%" == b.config.position.top && b.viewstates && b.viewstates[d] && (e = b.viewstates[d].inview)
                });
                return f && g || k && e
            }
            ;
            b.i.w = function(c, d) {
                if (!c.inview)
                    return !1;
                var f = !1
                  , g = !1
                  , k = !1
                  ,
                e = !1;
                b.a.forEach(c.pixels, function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (f = b.viewstates[d].inview);
                    "100%" == b.config.position.left && "100%" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (k = b.viewstates[d].inview);
                    b.config && "20%" == b.config.position.left && "20%" == b.config.position.top && b.viewstates && b.viewstates[d] && (g = b.viewstates[d].inview);
                    b.config && "80%" == b.config.position.left && "80%" == b.config.position.top &&
                    b.viewstates && b.viewstates[d] && (e = b.viewstates[d].inview)
                });
                return f && e || k && g
            }
            ;
            b.i.x = function(b) {
                b.periscopeManager && b.periscopeManager.killAllPixels()
            }
            ;
            b.i.y = function(c) {
                b.j.b.azsx("adKilled", b.i.x, {
                    once: !0,
                    condition: function(b) {
                        return c.zr === b.zr
                    }
                });
                b.i.z(c.periscopeConfig) || (c.periscopeConfig = b.i.n(c));
                c.periscopeManager = new b.i.aa(c.periscopeConfig,c.zr);
                b.i.a = c.periscopeManager.insertSuccessful;
                return c.periscopeManager.insertSucceeded
            }
            ;
            b.i.a = !1;
            b.i.o = function() {
                return 1 === u.floor(100 * u.random()) ?
                !b.a.y() && (e || h || b.i.j) : !b.a.y() && !b.d.a && (e || h || b.i.j)
            }
            ;
            b.i.ab = function(c) {
                return c && c.periscopeManager ? (b.o.c(c, !0) && c.periscopeManager.killDentsuPixels(),
                c.periscopeManager.getViewStats()) : {
                    isVisible: !1
                }
            }
            ;
            b.i.ac = function() {}
            ;
            b.i.z = function(c) {
                if ("object" !== typeof c || "function" !== typeof c.insertableFunc || !b.a.bj(c.pixels) || 0 == c.pixels.length)
                    return !1;
                var d = !1;
                b.a.forEach(c.pixels, function(b) {
                    b.id && b.target && b.container && "object" === typeof b.position && "string" === typeof b.position.top && "string" ===
                    typeof b.position.left || (d = !0)
                });
                return !d
            }
            ;
            b.i.ad = function() {
                return n && e && 10 <= l
            }
            ;
            b.i.ae = /([0-9]+(?:\.[0-9]+)?)(\%|px)/i;
            b.i.af = function() {
                var c = {};
                return function(d) {
                    if ("string" !== typeof d)
                        return !1;
                    if ("undefined" !== typeof c[d])
                        return c[d];
                    var f, g;
                    (f = d.match(b.i.ae)) && 3 == f.length && (g = f[2],
                    f = -1 != f[1].indexOf(".") ? parseInt(f[1], 10) : parseFloat(f[1], 10));
                    if ("number" !== typeof f)
                        return !1;
                    c[d] = {
                        val: f,
                        type: g
                    };
                    return c[d]
                }
            }();
            b.i.ag = function(c, d) {
                this.config = c;
                this.measurable = this.inserted = !1;
                this.viewstates =
                {};
                this.manager = d;
                this.killed = !1;
                this.cbNames = [];
                this.killWidthCheck = this.skipWidthCheck = !1;
                this.loopIds = [];
                this.getPeriscopeAssetURI = function() {
                    return b.d.protocol + "//" + b.d.ab + "/swf/p6.v3.swf"
                }
                ;
                this.insertIntoDOM = function() {
                    if (this.inserted)
                        return !1;
                    var c, g;
                    g = e ? c = 2 : c = 1;
                    var d = "position: absolute; width: " + c + "px; height: " + g + "px; z-index: -9999;";
                    b.i.j && (d += "-webkit-transform: translate3d(0, 0, 0);");
                    var k = this.config.id
                      , f = this.getPeriscopeAssetURI()
                      , n = this.calcPosition();
                    if (!n)
                        return !1;
                    var n = d + "left: " +
                    n.left + "px; top: " + n.top + "px;"
                      , h = d + "left: 0px; top: 0px;";
                    this.targetDoc = d = this.config.target.ownerDocument;
                    var m = "defaultView" in d ? d.defaultView : d.parentWindow
                      , w = "Moat#PSCB" + u.floor(1E8 * u.random());
                    m[w] = {
                        fn: this.onStateChange,
                        ct: this
                    };
                    this.cbNames.push(w);
                    m = "sco=" + encodeURIComponent(w) + "&tvs=" + this.manager.getTargetViewState();
                    w = d.createElement("div");
                    w.id = "moatPxDiv" + u.ceil(1E6 * u.random());
                    w.style.width = "0px";
                    w.style.height = "0px";
                    w.style.position = "absolute";
                    w.style.top = "0px";
                    w.style.left = "0px";
                    this.wrapperDiv = w;
                    b.i.ad() ? (h = function(b, c, g) {
                        var d = document.createElement("param");
                        d.setAttribute("name", c);
                        d.setAttribute("value", g);
                        b.appendChild(d)
                    }
                    ,
                    d = d.createElement("OBJECT"),
                    d.setAttribute("data", f),
                    d.setAttribute("id", k),
                    d.setAttribute("name", k),
                    d.setAttribute("style", n),
                    d.setAttribute("width", c + ""),
                    d.setAttribute("height", g + ""),
                    h(d, "flashvars", m),
                    h(d, "wmode", "transparent"),
                    h(d, "bgcolor", ""),
                    h(d, "allowscriptaccess", "always"),
                    b.a.be(w, this.config.container),
                    w.appendChild(d)) : (b.a.be(w, this.config.container),
                    w.innerHTML = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + c + '" height="' + g + '" style="' + n + '" id="' + k + '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + f + '" /><param name="quality" value="low" /><param name="hasPriority" value="true" /><param name="FlashVars" value="' + m + '" /><param name="bgcolor" value="" /><param name="wmode" value="transparent" /><embed type="application/x-shockwave-flash" src="' +
                    f + '" quality="low" flashvars="' + m + '" bgcolor="" wmode="transparent" width="' + c + '" height="' + g + '" id="' + k + 'e" name="' + k + '" style="' + h + '" hasPriority="true" allowscriptaccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>');
                    return this.inserted = !0
                }
                ;
                this.startIntervals = function() {
                    var c = this.getPixelElement();
                    if (!c)
                        return !1;
                    if (8 == l && (this.manager.getTargetViewState() === f.STAGE_WIDTH || this.manager.getTargetViewState() === f.ACTIVE_STAGE_WIDTH)) {
                        var g = "positionToggle#" +
                        this.config.id;
                        this.loopIds.push(g);
                        b.g.j()[g] || (this.positionTogglingEnabled = !0,
                        this.positionOffsets || (this.positionOffsets = {}),
                        b.g.b(this.positionToggle, {
                            pxSwf: c,
                            pxRef: this
                        }, 100, g))
                    }
                    this.manager.getTargetViewState() === f.STAGE_WIDTH && (g = "stageWidthLoop#" + this.config.id,
                    this.loopIds.push(g),
                    b.g.j()[g] || b.g.b(this.stageWidthToggle, {
                        pxSwf: c,
                        pxRef: this,
                        originalWidth: c.style.width,
                        widthRe: /^[0-9\.]+/i,
                        updates: 0
                    }, 150, g));
                    this.manager.getTargetViewState() === f.ACTIVE_STAGE_WIDTH && (g = "activeStageWidthLoop#" +
                    this.config.id,
                    this.loopIds.push(g),
                    b.g.j()[g] || b.g.b(this.stageWidthToggle, {
                        pxSwf: c,
                        pxRef: this,
                        originalWidth: c.style.width,
                        widthRe: /^[0-9\.]+/i,
                        updates: 0,
                        active: !0,
                        onWidthCheck: this.config.onWidthCheck
                    }, 200, g))
                }
                ;
                this.stageWidthToggle = function(b) {
                    if (!(b.pxSwf && b.pxSwf.parentNode && b.pxRef))
                        return !1;
                    if (b.onWidthCheck) {
                        b.onWidthCheck(b.pxRef);
                        if (b.pxRef.killWidthCheck)
                            return b.pxRef.kill(),
                            !1;
                        if (b.pxRef.skipWidthCheck)
                            return !0
                    }
                    var c;
                    if (b.parsedWidth || (c = b.pxSwf.style.width.match(b.widthRe)))
                        if (b.parsedWidth ||
                        (b.parsedWidth = parseInt(c[0], 10)),
                        1 == b.updates ? (b.updates = 0,
                        b.pxSwf.style.width = b.originalWidth,
                        c = b.parsedWidth) : (b.updates = 1,
                        c = 1 < b.parsedWidth ? b.parsedWidth - 1 : b.parsedWidth + 1,
                        b.pxSwf.style.width = c + "px"),
                        b.active && b.pxSwf.currentPW)
                            try {
                                b.pxSwf.currentPW(c)
                            } catch (g) {}
                }
                ;
                this.positionToggle = function(b) {
                    if (!b.pxRef || !b.pxRef.element)
                        return !1;
                    0 > b.pxRef.positionOffsets.yOffset ? (b.pxRef.positionOffsets.yOffset = 0,
                    b.pxRef.positionOffsets.xOffset = 0) : (b.pxRef.positionOffsets.yOffset = -2E3,
                    b.pxRef.positionOffsets.xOffset =
                    -2E3);
                    b.pxRef.updatePosition(!0)
                }
                ;
                this.onStateChange = function(c) {
                    if (!this.measurable) {
                        this.measurable = !0;
                        var g;
                        c && c[0] && c[0].rev && (g = c[0].rev.match(b.i.ah)) && 3 == g.length && (b.i.ai = g[1],
                        b.i.i = g[2]);
                        this.updateFocusState();
                        this.startIntervals()
                    }
                    this.inserted && this.killed ? (this.killed = !1,
                    this.updateFocusState(),
                    this.startIntervals()) : (b.a.forEach(c, function(b) {
                        this.viewstates[b.name] = b
                    }, this),
                    this.manager.onStateChange(this, c))
                }
                ;
                this.calcPosition = function() {
                    var c = {}
                      , g = this.config.position.left
                      , d = b.i.af(this.config.position.top)
                      ,
                    g = b.i.af(g)
                      , k = 0
                      , f = 0;
                    this.config.positionTarget ? this.config.positionTargetWindow ? this.targetRect = new b.n.j(this.config.positionTarget,this.config.positionTargetWindow,null ,!0) : (this.targetRect = new b.n.j(this.config.positionTarget,null ,null ,!0),
                    this.config.positionTargetWindow = this.targetRect.win) : (this.targetRect = this.targetRect ? new b.n.j(this.config.target,this.targetRect.win,null ,!0) : new b.n.j(this.config.target,null ,null ,!0),
                    0 == this.targetRect.left && 0 == this.targetRect.right && 0 == this.targetRect.top &&
                    0 == this.targetRect.bottom && "EMBED" == this.targetRect.el.nodeName && null  == this.targetRect.el.offsetParent && this.config.target.parentNode && (this.targetRect = new b.n.j(this.config.target.parentNode,null ,null ,!0),
                    this.config.positionTarget = this.config.target.parentNode));
                    var k = b.n.n("left", this.targetRect.win), f = b.n.n("top", this.targetRect.win), e;
                    this.wrapperDiv && (e = this.wrapperDiv.offsetParent) && "BODY" !== e.nodeName ? this.offsetRect = this.offsetRect ? new b.n.j(e,this.offsetRect.win,null ,!0) : new b.n.j(e,null ,
                    null ,!0) : this.offsetRect = {
                        left: -k,
                        top: -f
                    };
                    if (!d || !g)
                        return !1;
                    if ("%" == d.type)
                        c.relativeTop = d.val / 100 * this.targetRect.height,
                        c.top = this.targetRect.top - this.offsetRect.top + d.val / 100 * this.targetRect.height;
                    else if ("px" == d.type)
                        c.relativeTop = d.val,
                        c.top = this.targetRect.top - this.offsetRect.top + d.val;
                    else
                        return !1;
                    if ("%" == g.type)
                        c.relativeLeft = g.val / 100 * this.targetRect.width,
                        c.left = this.targetRect.left - this.offsetRect.left + g.val / 100 * this.targetRect.width;
                    else if ("px" == g.type)
                        c.relativeLeft = g.val,
                        c.left =
                        this.targetRect.left - this.offsetRect.left + g.val;
                    else
                        return !1;
                    return c
                }
                ;
                this.maxPositionUpdateInterval = 200;
                this.getStyle = function(b) {
                    var c;
                    try {
                        c = b && b.style
                    } catch (g) {}
                    return c
                }
                ;
                this.updatePosition = function(b) {
                    var c = (new y).getTime(), g;
                    if (!this.element || !(g = this.getStyle(this.element)) || this.killed || !b && c - this.lastPositionUpdate < this.maxPositionUpdateInterval)
                        return !1;
                    this.lastPositionUpdate = c;
                    b = this.calcPosition();
                    if (!b)
                        return !1;
                    this.positionOffsets && (b.left += this.positionOffsets.xOffset || 0,
                    b.top +=
                    this.positionOffsets.yOffset || 0);
                    g.left = this.width + b.relativeLeft > this.targetRect.width ? u.floor(b.left - this.width) + "px" : 0 == b.relativeLeft ? u.floor(b.left) + "px" : u.floor(b.left - .5 * this.width) + "px";
                    g.top = this.height + b.relativeTop > this.targetRect.height ? u.floor(b.top - this.height) + "px" : 0 == b.relativeTop ? u.floor(b.top) + "px" : u.floor(b.top - .5 * this.height) + "px";
                    return !0
                }
                ;
                this.updateFocusState = function() {
                    var b = this.getPixelElement();
                    if (b && this.measurable)
                        try {
                            b.updateFocusState(this.currentFocusState)
                        } catch (c) {}
                }
                ;
                this.kill = function() {
                    var c = this.getPixelElement()
                      , g = b.a.t(c);
                    g && c && c.dataMoatTIDS && b.a.forEach(c.dataMoatTIDS, function(b) {
                        g.clearTimeout(b)
                    });
                    b.a.forEach(this.loopIds, function(b) {
                        B && B[b] && (window.clearTimeout(B[b].tid),
                        B[b] = !1)
                    });
                    for (var c = 0, d = this.cbNames.length; c < d; c++) {
                        window[this.cbNames[c]] = null ;
                        try {
                            delete window[this.cbNames[c]]
                        } catch (k) {}
                    }
                    return this.wrapperDiv && this.wrapperDiv.parentNode ? (this.wrapperDiv.parentNode.removeChild(this.wrapperDiv),
                    this.killed = !0,
                    this.inserted = !1,
                    this.element =
                    this.wrapperDiv = null ,
                    !0) : !1
                }
                ;
                this.getPixelElement = function() {
                    var b, c = !1, g = this.config.id;
                    if (this.targetDoc) {
                        b = this.targetDoc.getElementById(g);
                        if (c = !!(b && b.isPxSwf && b.isPxSwf()))
                            return b;
                        b = this.targetDoc.getElementById(g + "e");
                        if (c = !!(b && b.isPxSwf && b.isPxSwf()))
                            return b
                    }
                    return !1
                }
                ;
                if ("embed" === c.container.nodeName || "object" === c.container.nodeName) {
                    var n;
                    b.a.forEach(b.a.v(c.container), function(b) {
                        if ("embed" !== b.nodeName && "object" !== b.nodeName)
                            return n = b,
                            !1
                    });
                    if (!n)
                        return !1;
                    this.config.container = n
                }
                if (!this.insertIntoDOM())
                    return !1;
                this.element = this.targetDoc.getElementById(this.config.id);
                if (!this.element)
                    return !1;
                var g = new b.n.j(this.element,null ,null ,!0);
                this.width = g.width;
                this.height = g.height;
                if (!this.updatePosition())
                    return !1;
                this.currentFocusState = b.focus.pageIsVisible();
                this.focusCheckingLoop = function(c) {
                    if (!c.pxRef)
                        return !1;
                    c = c.pxRef;
                    c.currentFocusState != b.focus.pageIsVisible() && (c.currentFocusState = !c.currentFocusState,
                    c.killed || c.updateFocusState())
                }
                ;
                this.rebuildOnFocusLoss = function() {
                    e && (this.currentFocusState || this.killed ||
                    !this.inserted ? this.currentFocusState && this.killed && !this.inserted && (this.insertIntoDOM.call(this),
                    (this.element = this.targetDoc.getElementById(this.config.id)) && this.updatePosition()) : this.kill())
                }
                ;
                this.positionUpdateLoop = function(b) {
                    if (!b.pxRef)
                        return !1;
                    b.pxRef.killed || b.pxRef.updatePosition()
                }
                ;
                var g = "focusCheckingLoop#" + this.config.id
                  , k = "positionUpdateLoop#" + this.config.id;
                this.loopIds.push(g);
                this.loopIds.push(k);
                b.g.b(this.focusCheckingLoop, {
                    pxRef: this
                }, 200, g);
                b.g.b(this.positionUpdateLoop, {
                    pxRef: this
                },
                500, k);
                this.inserted = !0;
                this.insertionTime = (new y).getTime()
            }
            ;
            b.i.ah = /([0-9a-z]+-[a-z]+)-(.*)/i;
            b.i.aa = function(c, n) {
                this.insertedAllSuccessfully = this.insertSuccessful = !1;
                this.pixels = [];
                this.adNum = n;
                this.twentyPercentInView = this.dentsuInview = this.dentsuMeasurable = this.anyMeasurable = this.fullyMeasurable = this.measurable = this.reachedAnyInview = this.reachedFullyInview = this.reachedInview = this.anyInview = this.fullyInview = this.inview = !1;
                this.getPixelByName = function(c) {
                    var d;
                    b.a.forEach(this.pixels, function(b) {
                        if (b.config.name &&
                        b.config.name == c)
                            return d = b,
                            !1
                    });
                    return d || !1
                }
                ;
                this.getTargetViewState = function() {
                    var c = f.FRAME_RATE;
                    e && (c = f.ACTIVE_STAGE_WIDTH);
                    b.i.j && (c = f.ACTIVE_STAGE_WIDTH);
                    return c
                }
                ;
                this.onStateChange = function(c, k) {
                    var f = this.getTargetViewState()
                      , e = b.focus.pageIsVisible()
                      , n = "undefined" != typeof z && z[this.adNum];
                    this.anyMeasurable || (this.anyMeasurable = !0);
                    this.fullyMeasurable || (this.fullyMeasurable = b.i.p(this, f));
                    this.measurable || (this.measurable = b.i.q(this, f),
                    b.i.aj = (new y).getTime());
                    this.dentsuMeasurable ||
                    (this.dentsuMeasurable = b.i.r(this, f));
                    if (1 == k.length) {
                        if (k[0].name != f)
                            return !1
                    } else {
                        var h = !0;
                        b.a.forEach(k, function(b) {
                            if (b.name == f)
                                return h = !1
                        });
                        if (h || !e)
                            return !1
                    }
                    this.anyMeasurable && (this.anyInview = b.i.s(this, f));
                    this.measurable && ((this.anyInview = b.i.s(this, f)) && !this.reachedAnyInview && (this.reachedAnyInview = !0),
                    (this.inview = b.i.t(this, f)) && !this.reachedInview && (this.reachedInview = !0),
                    !d && b.i.j && n && (d = !0,
                    b.p.a(n)));
                    this.fullyMeasurable && (this.fullyInview = b.i.u(this, f)) && !this.reachedFullyInview &&
                    (this.reachedFullyInview = !0);
                    this.dentsuMeasurable && (this.dentsuInview = b.i.w(this, f),
                    this.twentyPercentInView = b.i.v(this, f));
                    b.j.b.zaxs("periscope:onStateChange", n)
                }
                ;
                this.getViewStats = function() {
                    var b = 0;
                    if (this.fullyInview)
                        b = 1;
                    else if (this.dentsuInview)
                        b = .8;
                    else if (this.inview)
                        b = .5;
                    else if (this.twentyPercentInView)
                        b = .2;
                    else if (this.anyInview || this.reachedAnyInview && !this.sentReachedAnyInview)
                        this.sentReachedAnyInview = !0,
                        b = .01;
                    return {
                        isVisible: this.inview,
                        isFullyVisible: this.fullyInview,
                        isDentsuVisible: this.dentsuInview,
                        percv: b
                    }
                }
                ;
                this.killDentsuPixels = function() {
                    b.a.forEach(this.pixels, function(b) {
                        !b.config || "dentsuTopLeft" !== b.config.name && "dentsuBottomRight" !== b.config.name || b.kill()
                    })
                }
                ;
                this.killAllPixels = function() {
                    b.a.forEach(this.pixels, function(b) {
                        b.kill()
                    })
                }
                ;
                if (c.insertableFunc()) {
                    var h = 0;
                    b.a.forEach(c.pixels, function(c, d) {
                        this.pixels.push(new b.i.ag(c,this));
                        this.pixels[d].inserted && (h++,
                        this.insertSuccessful = !0)
                    }, this);
                    this.insertedAllSuccessfully = h === this.pixels.length
                }
            }
        })(q);
        (function(b) {
            function l(b,
            c, g) {
                b.IR5.MIN[g] = u.min(c, b.IR5.MIN[g]) || c || 1;
                b.IR5.MAX[g] = u.max(c, b.IR5.MAX[g]) || c
            }
            function e(b, c) {
                c.be = u.max("undefined" !== typeof c.be ? c.be : 0, b - c.bf);
                "undefined" === typeof c.by && 500 <= c.be && (c.by = c.bk)
            }
            function h(c) {
                c.az === b.q.a.d.a ? c.az = b.q.a.d.b : c.az === b.q.a.d.b && (c.az = b.q.a.d.a)
            }
            function d(c) {
                c.ba === b.q.a.d.a ? c.ba = b.q.a.d.b : c.ba === b.q.a.d.b && (c.ba = b.q.a.d.a)
            }
            function c(c) {
                c.ax === b.q.a.b.a ? c.ax = b.q.a.b.b : c.ax === b.q.a.b.b && (c.ax = b.q.a.b.a)
            }
            function n(c) {
                c.ay === b.q.a.c.a ? c.ay = b.q.a.c.b : c.ay === b.q.a.c.b &&
                (c.ay = b.q.a.c.a)
            }
            function f(b, c) {
                "undefined" === typeof c.bk && (c.bk = 0);
                c.bk += b - c.bo;
                c.bo = b
            }
            function w(b, c) {
                "undefined" === typeof c.bl && (c.bl = 0);
                c.bl += b - c.bp;
                c.bp = b
            }
            function s(b, c) {
                "undefined" === typeof c.bg && (c.bg = 0);
                "undefined" === typeof c.bc && (c.bc = 0);
                c.bu = b - c.bs;
                c.bu > c.bc && (c.bc = c.bu);
                c.bg += b - c.bq;
                500 <= c.bc && "undefined" === typeof c.bw && (c.bk += b - c.bo,
                c.bw = c.bk);
                c.bq = b
            }
            function m(b, c) {
                "undefined" === typeof c.bh && (c.bh = 0);
                "undefined" === typeof c.bd && (c.bd = 0);
                c.bv = b - c.bt;
                c.bv > c.bd && (c.bd = c.bv);
                c.bh += b - c.br;
                500 <= c.bd && "undefined" === typeof c.bx && (c.bl += b - c.bp,
                c.bx = c.bl);
                c.br = b
            }
            b.q = {};
            b.q.a = {};
            b.q.a.a = {};
            b.q.a.a.a = 0;
            b.q.a.a.b = 1;
            b.q.a.b = {};
            b.q.a.b.a = 0;
            b.q.a.b.b = 1;
            b.q.a.c = {};
            b.q.a.c.a = 0;
            b.q.a.c.b = 1;
            b.q.a.d = {};
            b.q.a.d.a = 0;
            b.q.a.d.b = 1;
            b.q.a.e = {};
            b.q.a.e.a = 0;
            b.q.a.e.b = 1;
            b.q.a.f = {};
            b.q.a.f.a = 0;
            b.q.a.f.b = 1;
            b.q.a.f.c = 2;
            b.q.b = function(b) {
                l(b, b.aj, "x");
                l(b, b.ak, "y");
                b.IR5.AREA = (b.IR5.MAX.x - b.IR5.MIN.x) * (b.IR5.MAX.y - b.IR5.MIN.y)
            }
            ;
            b.q.c = function(c) {
                function d() {
                    500 <= (new y).getTime() - la && (b.q.d({
                        type: "park"
                    }, c),
                    clearInterval(k),
                    c.au = b.q.a.a.a)
                }
                var g = c.au;
                if (g === b.q.a.a.a) {
                    la = (new y).getTime();
                    var k = b.g.g(d, 50);
                    c.au = b.q.a.a.b
                } else
                    g === b.q.a.a.b && (la = (new y).getTime())
            }
            ;
            b.q.e = function(c) {
                function d() {
                    3E3 <= (new y).getTime() - ma && (b.q.f({
                        type: "park"
                    }, c),
                    clearInterval(k),
                    c.av = b.q.a.a.a)
                }
                var g = c.av;
                if (g === b.q.a.a.a) {
                    ma = (new y).getTime();
                    var k = b.g.g(d, 50);
                    c.av = b.q.a.a.b
                } else
                    g === b.q.a.a.b && (ma = (new y).getTime())
            }
            ;
            b.q.g = function(c, d) {
                var g = c.type;
                if (d.az === b.q.a.d.a) {
                    if ("mouseover" === g || "mousemove" === g)
                        d.bo = (new y).getTime(),
                        h(d)
                } else if (d.az ===
                b.q.a.d.b) {
                    "mousemove" === g && f((new y).getTime(), d);
                    if ("mouseout" === g || "blur" === g)
                        f((new y).getTime(), d),
                        h(d);
                    "scooper" === g && f((new y).getTime(), d)
                }
            }
            ;
            b.q.h = function(c, f) {
                var g = c.type;
                if (f.ba === b.q.a.d.a) {
                    if ("mouseover" === g || "mousemove" === g)
                        f.bp = (new y).getTime(),
                        d(f)
                } else if (f.ba === b.q.a.d.b) {
                    "mousemove" === g && w((new y).getTime(), f);
                    if ("mouseout" === g || "blur" === g)
                        w((new y).getTime(), f),
                        d(f);
                    "scooper" === g && w((new y).getTime(), f)
                }
            }
            ;
            b.q.d = function(d, f) {
                if (2 != f.an) {
                    var g = d.type;
                    if (f.ax === b.q.a.b.a) {
                        if ("mouseover" ===
                        g || "mousemove" === g)
                            f.bq = (new y).getTime(),
                            f.bs = (new y).getTime(),
                            c(f)
                    } else
                        f.ax === b.q.a.b.b && ("mousemove" !== g && "mouseout" !== g || s((new y).getTime(), f),
                        "park" === g && s((new y).getTime() - 500, f),
                        "mouseout" !== g && "park" !== g || c(f))
                }
            }
            ;
            b.q.f = function(c, d) {
                if (2 != d.an) {
                    var g = c.type;
                    if (d.ay === b.q.a.c.a) {
                        if ("mouseover" === g || "mousemove" === g)
                            d.br = (new y).getTime(),
                            d.bt = (new y).getTime(),
                            n(d)
                    } else
                        d.ay === b.q.a.c.b && ("mousemove" !== g && "mouseout" !== g || m((new y).getTime(), d),
                        "park" === g && m((new y).getTime() - 3E3, d),
                        "mouseout" !==
                        g && "park" !== g || n(d))
                }
            }
            ;
            b.q.i = function(c, d) {
                var g = c.type;
                if (d.bb == b.q.a.e.a) {
                    if ("mouseover" == g || "mousemove" == g)
                        d.bf = (new y).getTime(),
                        d.bb = b.q.a.e.b
                } else
                    d.bb == b.q.a.e.b && ("mouseout" == g ? (e((new y).getTime(), d),
                    d.bb = b.q.a.e.a) : "mousemove" != g && "scooper" != g || e((new y).getTime(), d))
            }
        })(q);
        (function(b) {
            function l(c) {
                b.focus.pageIsPrerendered() || b.g.f(document, s, l, "pr")
            }
            function e(b) {
                "undefined" == typeof n && (n = b)
            }
            b.focus = {};
            var h = navigator.userAgent, h = -1 < h.indexOf("Safari") && -1 == h.indexOf("Chrome") && -1 ==
            h.indexOf("Chromium") && !b.a.y(), d = b.a.m() && !b.a.y(), c = "undefined" !== typeof document.hasFocus, n, f = {
                visible: 0,
                hidden: 1,
                prerender: 2
            }, w, s, m, r;
            "undefined" !== typeof document.hidden ? (w = "hidden",
            s = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (w = "mozHidden",
            s = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (w = "msHidden",
            s = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (w = "webkitHidden",
            s = "webkitvisibilitychange");
            for (var x = ["v", "mozV", "msV", "webkitV"], g = 0; g <
            x.length; g++) {
                var k = x[g] + "isibilityState";
                if ("undefined" !== typeof document[k]) {
                    m = k;
                    break
                }
            }
            r = "undefined" !== typeof w;
            var t, ca;
            "undefined" !== typeof window.requestAnimationFrame ? t = "requestAnimationFrame" : "undefined" !== typeof window.webkitRequestAnimationFrame && (t = "webkitRequestAnimationFrame");
            ca = h && "string" == typeof t && !r;
            var C = (new y).getTime();
            ca && function fa() {
                C = (new y).getTime();
                window[t](fa)
            }();
            b.focus.getFocusMethod = function() {
                return n
            }
            ;
            b.focus.visibilitychange = s;
            b.focus.setFocusListeners = function() {}
            ;
            b.focus.getQueryString = function(b) {
                b = {};
                b.em = n;
                A && (b.eo = 1);
                "undefined" != typeof m && (b.en = f[document[m]]);
                return b
            }
            ;
            b.focus.supportsPageVisAPI = function() {
                return r
            }
            ;
            b.focus.checkFocus = function() {
                if (b.focus.supportsPageVisAPI())
                    return e(0),
                    !document[w];
                if (ca)
                    return e(1),
                    100 > (new y).getTime() - C;
                if (d && c)
                    return e(2),
                    document.hasFocus();
                e(3);
                return !0
            }
            ;
            _lastFocusState = !1;
            b.focus.pageIsVisible = function() {
                var c = b.focus.checkFocus();
                if (_lastFocusState != c && v && v.swde)
                    try {
                        v.swde.zaxs("focusStateChange", c)
                    } catch (g) {}
                return _lastFocusState =
                c
            }
            ;
            b.focus.pageIsPrerendered = function() {
                return "undefined" !== typeof m ? "prerender" == document[m] : !1
            }
            ;
            b.focus.pageIsVisible();
            b.focus.pageIsPrerendered() && (b.g.e(document, s, l, "pr"),
            b.j.b.azsx("allLocalAdsKilled", function() {
                b.g.f(document, s, l, "pr")
            }, {
                once: !0
            }));
            var A = b.focus.pageIsPrerendered()
        })(q);
        (function(b) {
            function l(c, g, d, f, e) {
                ("remove" === e ? b.g.f : b.g.e)(c, g, function(g) {
                    g = g || this.event;
                    var f = g.currentTarget || c;
                    try {
                        var e = f[I]
                    } catch (n) {
                        e = f[I]
                    }
                    if (e = z[e]) {
                        var h;
                        h = g;
                        var m = f.getBoundingClientRect();
                        h =
                        -1 != h.type.indexOf("touch") ? {
                            x: parseInt(h.changedTouches[0].clientX - m.left, 10),
                            y: parseInt(h.changedTouches[0].clientY - m.top, 10)
                        } : {
                            x: parseInt(h.clientX - m.left, 10),
                            y: parseInt(h.clientY - m.top, 10)
                        };
                        e.aj = h.x;
                        e.ak = h.y;
                        e.dm || (e.cb = 2 == b.focus.getFocusMethod() ? e.counters.laxDwell.tCur : e.counters.strictDwell.tCur,
                        e.dm = 1);
                        d.call(c, g, f, e)
                    }
                }, f)
            }
            function e(g, f, e) {
                l(g, "click", r, f, e);
                l(g, "mousedown", d, f, e);
                P ? "mlb.com" === b.a.g() ? b.a.z() || b.a.aa() || l(g, "touchstart", c, f, e) : l(g, "touchstart", c, f, e) : (l(g, "mousemove", h,
                f, e),
                l(g, "mouseover", s, f, e),
                l(g, "mouseout", m, f, e))
            }
            function h(c, d, f) {
                if (!P && (f.aj !== f.al || f.ak !== f.am)) {
                    b.q.d(c, f);
                    b.q.f(c, f);
                    b.q.g(c, f);
                    b.q.i(c, f);
                    b.q.h(c, f);
                    b.q.b(f);
                    b.q.c(f);
                    b.q.e(f);
                    0 === f.ar.length && (f.ai = g(f));
                    if (100 > f.ar.length || 100 > f.as.length || 100 > f.at.length)
                        f.ar.push(f.aj),
                        f.as.push(f.ak),
                        f.at.push(b.a.q(f));
                    f.al = f.aj;
                    f.am = f.ak
                }
                f.ai !== g(f) && 1 < f.ar.length && x(f, "onMouseMove")
            }
            function d(c, g, d) {
                c = {
                    e: 2
                };
                c.q = d.aq[2]++;
                c.x = d.aj;
                c.y = d.ak;
                b.s.a(d, c)
            }
            function c(c, g, d) {
                b.j.b.zaxs("mouseEvent", d);
                c = c || window.event;
                g = c.target || c.srcElement;
                if (1 != d.ao.skin || !b.t.a(g, d.adContent, c)) {
                    c = {
                        e: 23
                    };
                    c.q = d.aq[23]++;
                    c.x = d.aj;
                    c.y = d.ak;
                    g = (new y).getTime();
                    if ("undefined" === typeof d.ct)
                        d.ct = g;
                    else {
                        var f = g - d.ct;
                        d.ct = g;
                        d.cu = u.min(d.cu, f) || f
                    }
                    c.bz = void 0;
                    b.s.a(d, c)
                }
            }
            function n(c, g, d) {
                var e;
                if (2 == c.an || c.hasIframeListener)
                    e = !0;
                if (e) {
                    e = g.e;
                    var n = c.ck;
                    n == b.q.a.f.a && 6 === e ? (f(c, 0),
                    c.cl = b.a.q(c),
                    c.ck = b.q.a.f.b) : n == b.q.a.f.b ? 22 === e ? (w(c, g),
                    f(c, d),
                    c.cl = b.a.q(c)) : 7 === e && (1E3 < b.a.q(c) - c.cl ? (clearTimeout(c.cm),
                    g.e = 22,
                    w(c,
                    g),
                    c.cn = 0,
                    c.ck = b.q.a.f.a) : c.ck = b.q.a.f.c) : n == b.q.a.f.c && (6 == e ? (1E3 < b.a.q(c) - c.cl && (clearTimeout(c.cm),
                    c.cn = 0,
                    c.cl = b.a.q(c),
                    f(c, 0)),
                    c.ck = b.q.a.f.b) : 22 == e && (w(c, g),
                    c.ck = b.q.a.f.a,
                    c.cn = 0))
                }
            }
            function f(c, g) {
                var d = 5 > c.cn ? 1E3 : 2 * g
                  , f = {
                    e: 22
                };
                c.cm = b.g.h(function() {
                    n(c, f, d)
                }, d)
            }
            function w(c, g) {
                g.q = c.aq[g.e]++;
                g.m = b.a.q(c);
                c.cl = g.m;
                b.s.a(c, g);
                c.cn++
            }
            function s(c, g, d) {
                b.j.b.zaxs("mouseEvent", d);
                b.q.d(c, d);
                b.q.f(c, d);
                b.q.g(c, d);
                b.q.i(c, d);
                b.q.h(c, d);
                n(d, {
                    e: 6
                }, 0)
            }
            function m(c, g, d) {
                b.q.d(c, d);
                b.q.f(c, d);
                b.q.g(c,
                d);
                b.q.i(c, d);
                b.q.h(c, d);
                n(d, {
                    e: 7
                }, 0)
            }
            function r(c, g, d) {
                b.j.b.zaxs("mouseEvent", d);
                c = {
                    e: 3
                };
                c.q = d.aq[3]++;
                c.x = d.aj;
                c.y = d.ak;
                b.s.a(d, c)
            }
            function x(c, d) {
                c.ai = g(c);
                var f = {
                    e: 1
                };
                f.q = c.aq[1]++;
                f.x = c.ar.join("a");
                f.y = c.as.join("a");
                for (var e = b.a.q(c), n = c.at, h = [], m = 0; m < n.length; m++)
                    isNaN(n[m]) || h.push(u.abs(n[m] - e));
                f.c = h.join("a");
                f.m = e;
                b.s.a(c, f);
                c.ar = [];
                c.as = [];
                c.at = []
            }
            function g(c) {
                return u.floor(b.a.q(c) / 1E3)
            }
            b.r = {};
            b.r.a = function(c) {
                b.j.b.azsx("adKilled", b.r.b, {
                    once: !0,
                    condition: function(b) {
                        return c.zr ==
                        b.zr
                    }
                });
                b.r.c(c)
            }
            ;
            b.r.c = function(b, c) {
                if (!0 === b.isSkin)
                    for (var g = 0; g < b.elements.length; g++)
                        e(b.elements[g], b.zr + "-" + g, c);
                else
                    e(b.aa, b.zr, c)
            }
            ;
            b.r.d = function(c) {
                for (var d in z)
                    z.hasOwnProperty(d) && (c = z[d]) && (b.q.g({
                        type: "scooper"
                    }, c),
                    b.q.i({
                        type: "scooper"
                    }, c),
                    b.q.h({
                        type: "scooper"
                    }, c),
                    1 < c.ar.length && c.ai !== g(c) && x(c, "scooper"))
            }
            ;
            b.r.e = function(c, g) {
                if (!g || !c)
                    return c;
                c.proxyAds || (c.proxyAds = []);
                c.proxyAds.push({
                    aa: g,
                    zr: c.zr
                });
                !c.hasIframeListener && g.tagName && "iframe" === g.tagName.toLowerCase() && (c.hasIframeListener =
                !0);
                g[I] = c.zr;
                b.r.c(c.proxyAds[c.proxyAds.length - 1]);
                return c
            }
            ;
            b.r.b = function(c) {
                b.r.c(c, "remove")
            }
        })(q);
        (function(b) {
            b.h = {};
            try {
                var l = -1 < navigator.platform.indexOf("Mac") ? 102 : 117
            } catch (e) {
                l = 117
            }
            var h = "undefined" !== typeof window.devicePixelRatio
              , d = h && u.round(1E3 * window.devicePixelRatio)
              , c = b.d.a && h && "undefined" !== typeof window.innerHeight && "undefined" !== typeof window.outerHeight && u.round(window.devicePixelRatio * (b.d.c.outerHeight - b.d.c.innerHeight))
              , n = function() {
                var b = !1;
                try {
                    b = "undefined" !== typeof window.mozInnerScreenX &&
                    "undefined" !== typeof window.screenX
                } catch (c) {}
                return b
            }();
            b.h.b = function(c, d) {
                var e, n, r, x = {
                    isVisible: !1,
                    isFullyVisible: !1,
                    percv: 0
                };
                try {
                    r = c.aa.getBoundingClientRect();
                    var g = d || c.WINDOW || b.a.t(c.aa)
                      , k = b.d.ak(g)
                      , t = b.n.l(r, k)
                      , q = g.mozInnerScreenX
                      , C = g.mozInnerScreenY
                      , A = window.screenX
                      , u = window.screenY
                      , v = b.n.l({
                        left: t.left + q,
                        right: t.right + q,
                        top: t.top + C,
                        bottom: t.bottom + C
                    }, {
                        left: A,
                        right: A + window.outerWidth,
                        top: u + l / (h ? window.devicePixelRatio : 1),
                        bottom: u + window.outerHeight
                    })
                      , y = r.width * r.height;
                    e = {
                        area: y,
                        percv: (v.right -
                        v.left) * (v.bottom - v.top) / y
                    };
                    n = b.n.g(e, c)
                } catch (oa) {}
                r = b.n.c;
                "undefined" !== typeof e && "undefined" !== typeof n && (x.isVisible = e.percv >= n,
                x.isFullyVisible = e.percv >= r,
                x.percv = e.percv,
                .8 <= e.percv && (x.isDentsuVisible = !0));
                return x
            }
            ;
            b.h.a = function() {
                return n
            }
            ;
            b.h.c = function() {
                var b = {};
                b.dl = Number(n);
                "number" !== typeof d || isNaN(d) || (b.dm = d);
                "number" !== typeof c || isNaN(c) || (b.dn = c);
                return b
            }
        })(q);
        (function(b) {
            function l(b) {
                var d = 0, f;
                return function() {
                    var e = (new y).getTime();
                    150 < e - d && (f = b.apply(this, arguments),
                    d = e);
                    return f
                }
            }
            function e(c, d, f, e, s) {
                function m(b) {
                    return "number" === typeof b ? b : b.type
                }
                b.a.ae();
                var l = []
                  , x = 0
                  , g = 0
                  , k = 0
                  , t = 0
                  , q = 0
                  , C = 0
                  , A = 0;
                (new y).getTime();
                var v = !1, fa = !1, V = !1, oa = !1, Aa, Ba, pa, ya = 0, z = 0, B = !1, E = !1, D = !1, M, W = 0, I = 0, L = 0, R = !1, S = !1, P = !1, ga = !1, T = !1, X = 0, U = !1, ha = !1, $ = !1, aa = !1, qa = !1, ba = !1, la = b.d.a, ra;
                if (0 === e)
                    var Y = "as"
                      , N = "ag"
                      , J = "an"
                      , K = "ck"
                      , ia = "kw"
                      , ea = "ah"
                      , ja = "aj"
                      , ma = "pg"
                      , na = "pf"
                      , sa = "gi"
                      , ta = "gf"
                      , ua = "gg"
                      , va = "ez"
                      , B = !0
                      , ka = "dw"
                      , wa = "ka"
                      , xa = "kb";
                else
                    1 === e ? (Y = "cc",
                    N = "bw",
                    J = "bx",
                    K = "ci",
                    ia = "jz",
                    ea = "bu",
                    ja = "dj",
                    ka = "dx") : 2 === e ? (Y = "cg",
                    N = "ce",
                    J = "cf",
                    K = "cj",
                    ia = "ts",
                    ea = "ah",
                    ja = "dk",
                    sa = "gj",
                    ta = "gb",
                    ua = "ge",
                    va = "ez",
                    ka = "dy",
                    wa = "ke",
                    xa = "kf") : 3 === e ? (Y = "cg",
                    N = "ce",
                    J = "cf",
                    K = "cj",
                    ia = "ts",
                    ea = "ah",
                    ja = "dk",
                    sa = "gi",
                    ta = "gf",
                    ua = "gg",
                    va = "ez",
                    ka = "dy",
                    wa = "ke",
                    xa = "kf") : 5 === e ? (Y = "aa",
                    N = "ad",
                    J = "cn",
                    K = "co",
                    ia = "cp",
                    ea = "ah",
                    ja = "cq",
                    sa = "gn",
                    ta = "gk",
                    ua = "gl",
                    va = "ez",
                    ka = "cr",
                    wa = "ew",
                    xa = "ex") : 6 === m(e) && (Y = e.otsKey,
                    N = e.ivtKey,
                    J = e.lastivtKey,
                    K = e.ivtAtOtsKey,
                    ia = e.timeToViewSendKey,
                    ea = e.timeToViewAskKey,
                    ja = e.visOnLoadKey,
                    sa = e.fullyIvtOtsKey,
                    ta = e.fullyIvtKey,
                    ua = e.lastFullyIvtKey,
                    va = e.wasPartiallyInviewKey,
                    ka = e.visNearLoadKey,
                    wa = e.video2SecOtsKey,
                    xa = e.visNearLoad2SecKey);
                this.getLabel = function() {
                    return s
                }
                ;
                this.addListener = function(b) {
                    l.push(b)
                }
                ;
                this.removeListener = function(b) {
                    for (var c, g = l.length; c < g; c++) {
                        var d = !1, f = !1, k;
                        for (k in l[c])
                            if (f || (f = !0),
                            l[c][k] !== b[k]) {
                                d = !0;
                                break
                            }
                        f && !d && l.splice(c, 1)
                    }
                }
                ;
                this.hadOTS = function() {
                    return V
                }
                ;
                this.hadFullOTS = function() {
                    return oa
                }
                ;
                this.hadFIT = function() {
                    return 0 < g
                }
                ;
                this.hadVideo2SecOTS = function() {
                    return "undefined" !=
                    typeof qa && qa
                }
                ;
                this.hadDentsuVideoOTS = function() {
                    return S
                }
                ;
                this.hadDentsuDisplayOTS = function() {
                    return R
                }
                ;
                this.isLargeVideoPlayer = function() {
                    return $
                }
                ;
                this.getInViewTime = function() {
                    return x
                }
                ;
                this.getLastInviewPercent = function() {
                    var b = 0;
                    return b = M
                }
                ;
                this.getRawLastInviewPercent = function() {
                    return M
                }
                ;
                this.visible = function() {
                    return v
                }
                ;
                this.fullyVisible = function() {
                    return fa
                }
                ;
                this.wasPartiallyInview = function() {
                    return D
                }
                ;
                this.getFullInviewTimeTotal = function() {
                    return g
                }
                ;
                this.getMaximumContinuousInViewTime =
                function() {
                    return u.max(q, C)
                }
                ;
                this.getMaximumContinuousFullyInViewTime = function() {
                    return u.max(0, A)
                }
                ;
                this.update = function(k, m, t) {
                    var y = x || 0
                      , z = g || 0
                      , da = W || 0
                      , Y = X || 0
                      , N = !1
                      , F = c(k);
                    F.rect && (k.elementRect = F.rect,
                    k.currentWidth = k.elementRect.right - k.elementRect.left,
                    k.currentHeight = k.elementRect.bottom - k.elementRect.top);
                    var Q = F.isVisible
                      , Z = F.isFullyVisible
                      , G = F.isDentsuVisible
                      , J = F.percv && 0 < F.percv;
                    M = F.percv;
                    var H = d(k), K;
                    K = (K = k && k.video && k.video.isLargeVideoPlayer) ? ($ = K && k.video.isLargeVideoPlayer(k)) ? .8 <=
                    F.percv : .98 <= F.percv : .98 <= F.percv;
                    var O;
                    O = !f || b.focus.pageIsVisible() || k.video.videoIsFullscreen;
                    k && k.video ? (H = k.video.videoIsFullscreen ? !1 : H,
                    Q = (Q || k.video.videoIsFullscreen) && O && !H,
                    Z = (Z || k.video.videoIsFullscreen) && O && !H,
                    J = (J || k.video.videoIsFullscreen) && O && !H,
                    ga = (G || k.video.videoIsFullscreen) && O && !H,
                    ha = (K || k.video.videoIsFullscreen) && O && !H) : (Q = Q && O && !H,
                    Z = Z && O && !H,
                    J = J && O && !H,
                    ga = G && O && !H,
                    ha = K && O && !H);
                    !D && J && (D = !0);
                    if (Q && v)
                        x += m,
                        q += m;
                    else if (Q || v)
                        G = u.round(m / 2),
                        x += G,
                        q += G;
                    if (Z && fa)
                        g += m,
                        A += m;
                    else if (Z ||
                    fa)
                        G = u.round(m / 2),
                        g += G,
                        A += G;
                    if (ga && P)
                        W += m,
                        I += m;
                    else if (ga || P)
                        G = u.round(m / 2),
                        W += G,
                        I += G;
                    G = 0;
                    if ((H = k.video.isPlayingAndAudible()) && T)
                        G = m;
                    else if (H || T)
                        G = u.round(m / 2);
                    da = u.max(W - da, 0);
                    G = u.max(u.min(G, da), 0);
                    L = k.ao.duration && 0 < k.ao.duration ? u.min(k.ao.duration, L + G) : L + G;
                    T = H;
                    da = 98 * k.ao.duration / 100;
                    k.video && k.video.durationMeasurable && L && L >= u.min(.5 * da, 15E3) && (S = !0);
                    if (ha && U)
                        X += m;
                    else if (ha || U)
                        groupmHalfDelta = u.round(m / 2),
                        X += groupmHalfDelta;
                    0 < k.ao.duration && (x = u.min(k.ao.duration, x),
                    g = u.min(k.ao.duration,
                    g),
                    W = u.min(k.ao.duration, W),
                    X = u.min(k.ao.duration, X),
                    !E && .5 <= g / k.ao.duration && (N = E = !0));
                    !V && 1E3 <= q && (N = V = !0,
                    this.timeToView = Aa = k.counters.query()[ea],
                    5E3 >= t - k.ao.startTime && V && (aa = !0));
                    !oa && 1E3 <= A && (oa = !0);
                    !qa && q >= b.w.a && (N = qa = !0,
                    Ba = x,
                    this.timeToView2Sec = k.counters.query()[ea],
                    t - k.videoAdStartTime <= b.w.b + b.w.c && (ba = !0));
                    "undefined" === typeof pa && (1E3 >= k.counters.query().bu ? Q && (pa = !0) : pa = !1);
                    (k.el = la) && "undefined" === typeof ra && 2 !== e && 3 !== e && F.elGeo && (b.a.ae().isInApp && 4 === b.a.ag() ? t = !1 : (t = h().y + F.elGeo.foldTop,
                    da = F.elGeo.threshold * F.elGeo.elHeight,
                    t = t > b.o.d() - da),
                    0 < F.elGeo.totalArea && (ra = t,
                    k.dn = ra));
                    B && J && (ya = u.min(u.max(F.percv, ya), 1));
                    C < q && (C = q);
                    Q || (q = 0);
                    Z || (A = 0);
                    v = Q;
                    fa = Z;
                    1E3 <= I && (R = !0);
                    ga || (I = 0);
                    P = ga;
                    U = ha;
                    b.a.forEach(l, function(b) {
                        var c = F && F.percv
                          , c = "number" === typeof c && 100 * c;
                        if (b.onInViewTimeCount)
                            b.onInViewTimeCount(m, x - y, c, s);
                        if (b.onFullyInViewTimeCount) {
                            var d = u.max(g - z, 0);
                            b.onFullyInViewTimeCount(m, d, c, s)
                        }
                        ha && b.onGroupMInViewTimeCount && (d = u.max(X - Y, 0),
                        b.onGroupMInViewTimeCount(m, d, c, s))
                    });
                    return N
                }
                ;
                this.getQS = function(b, c) {
                    k > x && (k = x);
                    t > g && (t = g);
                    b[Y] = Number(V);
                    b[N] = x;
                    b[J] = k;
                    if (0 === e || 2 === e || 3 === e || 5 === e || m(e))
                        oa && (b[sa] = 1),
                        b[ta] = g,
                        b[ua] = t,
                        D && (b[va] = 1);
                    "undefined" !== typeof Ba && (b[K] = Ba);
                    "undefined" !== typeof Aa && (b[ia] = Aa);
                    "undefined" !== typeof pa && (b[ja] = Number(pa));
                    if (!0 === B) {
                        var d = u.round(100 * ya)
                          , f = u.round(100 * z);
                        b[ma] = d;
                        b[na] = f;
                        z = ya
                    }
                    "undefined" !== typeof ra && (b.ib = Number(ra));
                    !0 === aa && (b[ka] = 1);
                    if (0 === e || 2 === e || 3 === e || 5 === e || m(e))
                        !0 === qa && (b[wa] = 1),
                        !0 === ba && (b[xa] = 1);
                    k = x;
                    t = g
                }
            }
            function h() {
                var c =
                b.d.c
                  , d = c.document;
                return {
                    y: void 0 !== c.pageYOffset ? c.pageYOffset : (d.documentElement || d.body.parentNode || d.body).scrollTop
                }
            }
            b.o = {};
            var d = {};
            b.o.d = function() {
                return P ? b.d.ak(b.d.c).height : 750
            }
            ;
            b.o.e = function() {
                return b.a.ac() || b.a.ad() ? b.d.d() : !1
            }
            ;
            b.o.f = function() {
                return b.o.e() ? b.d.t() : !1
            }
            ;
            b.o.g = function(c) {
                var n = c.zr;
                b.j.b.azsx("adKilled", b.o.h, {
                    once: !0,
                    condition: function(b) {
                        return b.zr == c.zr
                    }
                });
                d[n] = d[n] || {};
                c.viewstats = {
                    isBigAd: !1
                };
                if (b.n.h()) {
                    var f = l(b.n.f), h;
                    h = b.a.z() ? new e(f,b.p.b,!1,0,"strict") :
                    new e(f,b.p.b,!0,0,"strict");
                    d[n].strict = h;
                    f = new e(f,b.p.b,!1,1,"lax");
                    d[n].lax = f
                } else
                    !0 !== c.isSkin && b.h && b.h.a() && (f = new e(b.h.b,b.p.b,!0,3,"pscope"),
                    d[n].pscope = f);
                b.i && b.i.o() && !d[n].pscope && (f = new e(b.i.ab,b.p.b,!0,2,"pscope"),
                d[n].pscope = f);
                f = !1;
                (f = b.d.x) || (f = b.d.z());
                if (b.d.v() || f)
                    f = new e(b.u.a,b.p.b,!0,5,"sframe"),
                    d[n].sframe = f;
                b.j.b.zaxs("viewCounterStarted", c);
                (b.a.ac() || b.a.ad()) && (n = b.o.i(c.zr)) && n.addListener({
                    _wasAnyPixelInView: !1,
                    onInViewTimeCount: function(d, f, e) {
                        return this._wasAnyPixelInView ?
                        !1 : c && c.video && c.video.isPlaying() ? b.o.f() ? (b.p.a(c),
                        this._wasAnyPixelInView = !0,
                        !1) : !0 : !0
                    }
                });
                b.j.b.azsx("view:tick", b.a.cc([c], b.o.j), {
                    priority: 5
                })
            }
            ;
            b.o.k = function(c, d, f) {
                return (c || opt_counters) && d && f ? (c = b.o.l(c.zr, d)) && "function" == typeof c[f] && c[f]() : !1
            }
            ;
            b.o.j = function(c, n, f) {
                var h = d[c.zr], s, m = b.d.x && h && !h.sframe;
                m || (m = b.d.z() && h && !h.sframe);
                m && (d[c.zr].sframe = new e(b.u.a,b.p.b,!0,5,"sframe"),
                b.j.b.zaxs("viewCounterStarted", c));
                for (var l in h)
                    h.hasOwnProperty(l) && h[l].update(c, n, f) && (s = !0);
                s && b.p.c(c);
                b.v.a(c)
            }
            ;
            b.o.m = function(c, d, f) {
                "undefined" == typeof f && (f = !1);
                var e = 0;
                e = !f && b.d.au() ? (c = c && "undefined" != typeof c.zr && b.o && b.o.n && b.o.n(c.zr)) && c.lax && c.lax.getInViewTime() || 0 : b.o.o(c);
                return e >= d
            }
            ;
            b.o.o = function(c) {
                var d = 0
                  , f = c && "undefined" != typeof c.zr && b.o && b.o.n && b.o.n(c.zr);
                f && (b.d.au() ? d = f.strict && f.strict.getInViewTime() || 0 : b.d.av() ? d = f.sframe && f.sframe.getInViewTime() || 0 : b.d.ax(c) && (d = f.pscope && f.pscope.getInViewTime() || 0));
                return d
            }
            ;
            b.o.p = function() {
                return "hadVideo2SecOTS"
            }
            ;
            b.o.q = function(c,
            d) {
                var f = !1
                  , f = b.o.p();
                return c && c && "undefined" != typeof c.zr ? f = d ? b.o.k(c, d, f) : b.o.k(c, b.o.r(c.zr), f) : null
            }
            ;
            b.o.a = function(c, d) {
                var f = b.o.n(c.zr);
                return b.i && b.i.a && f && f.pscope && f.pscope[d ? "hadVideo2SecOTS" : "hadOTS"]()
            }
            ;
            b.o.c = function(c, d) {
                var f = b.o.n(c.zr);
                return b.i && b.i.a && f && f.pscope && f.pscope[d ? "hadDentsuVideoOTS" : "hadDentsuDisplayOTS"]()
            }
            ;
            b.o.b = function(c, d) {
                var f = b.o && b.o.n(c.zr);
                return b.i && b.i.a && f && f.pscope && f.pscope.getFullInviewTimeTotal() >= d
            }
            ;
            b.o.s = function(c) {
                var d = 0
                  , f = c && "undefined" !=
                typeof c.zr && b.o && b.o.n && b.o.n(c.zr);
                f && (b.d.au() ? d = f.strict && f.strict.getFullInviewTimeTotal() || 0 : b.d.av() ? d = f.sframe && f.sframe.getFullInviewTimeTotal() || 0 : b.d.ax(c) && (d = f.pscope && f.pscope.getFullInviewTimeTotal() || 0));
                return d
            }
            ;
            b.o.t = function(c, d, f) {
                "undefined" == typeof f && (f = !1);
                var e = 0;
                e = !f && b.d.au() ? (c = c && "undefined" != typeof c.zr && b.o && b.o.n && b.o.n(c.zr)) && c.lax && c.lax.getInViewTime() || 0 : b.o.s(c);
                return e >= d
            }
            ;
            b.o.h = function(b) {
                delete d[b.zr]
            }
            ;
            b.o.n = function(b) {
                var e;
                d[b] ? e = d[b] : d[b] = e = {};
                return e
            }
            ;
            b.o.l = function(c, d) {
                var f = b.o.n(c);
                return f && f[d]
            }
            ;
            b.o.r = function(b) {
                var e = null ;
                (b = d[b]) && b.strict ? e = "strict" : b && b.sframe ? e = "sframe" : b && b.pscope && (e = "pscope");
                return e
            }
            ;
            b.o.i = function(c) {
                var e = b.o.r(c);
                return (c = d[c]) && e && c[e]
            }
            ;
            b.o.u = function(c, e) {
                var f = {}, h = d[c], s;
                for (s in h)
                    h.hasOwnProperty(s) && h[s].getQS(f, e);
                b.o.i(c) && b.o.i(c).hadDentsuVideoOTS() && (f.nc = 1);
                b.o.i(c) && b.o.i(c).isLargeVideoPlayer() && (f.vk = 1);
                (h = z[c]) && h.viewstats && h.viewstats.isBigAd && (f.el = 1);
                return f
            }
        })(q);
        (function(b) {
            b.x = {};
            b.x.a =
            function(b, e) {
                var h;
                e.outerHTML ? h = e.outerHTML : (h = document.createElement("div"),
                h.appendChild(e.cloneNode(!0)),
                h = h.innerHTML);
                h = [/flashvars\s*=\s*(".*?"|'.*?')/i.exec(h), /name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(h), /value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(h), b];
                for (var d, c, n = {}, f = 0; f < h.length; f++) {
                    if ((d = h[f]) && "object" === typeof d && d[1])
                        d = d[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/^"/g, "").replace(/"$/g, "").replace(/^'/g, "").replace(/'$/g,
                        "");
                    else if ("string" === typeof d)
                        d = d.split("?")[1];
                    else
                        continue;if (d) {
                        d = d.split("&");
                        for (var w = 0; w < d.length; w++)
                            c = d[w].split("="),
                            2 > c.length || "function" == c[0].slice(0, 8) || (n[c[0]] = [c[1]])
                    }
                }
                return n
            }
        })(q);
        (function(b) {
            function l(c, d, f, h) {
                w.hasOwnProperty(c) ? w[c][d] && b.a.bj(w[c][d]) ? w[c][d].push(f) : w[c][d] = [f] : (w[c] = {},
                w[c][d] = [f],
                void 0 !== h && !0 === h && (s[c] = new e))
            }
            function e() {
                var c = !1;
                this.updateAndConditionallySend = function(b) {
                    !1 === c && (c = !0,
                    this.sendNotification(b))
                }
                ;
                this.sendNotification = function(c) {
                    var g =
                    {
                        e: 14
                    };
                    g.q = c.aq[14]++;
                    b.s.a(c, g)
                }
                ;
                this.getQS = function(b) {
                    !0 === c && (b.cv = Number(c))
                }
            }
            function h(b, c) {
                var d = s[c];
                void 0 !== d && d.updateAndConditionallySend(b)
            }
            function d(b) {
                return 500 <= (2 === b.an ? b.be : b.bd)
            }
            function c(c, d) {
                try {
                    return b.y.b(c) > d
                } catch (f) {
                    return !1
                }
            }
            function n(b, c) {
                try {
                    return b.counters.laxDwell.tCur > c
                } catch (d) {
                    return !1
                }
            }
            function f(b, c) {
                return d(b) ? ("undefined" !== typeof b.bk && d(b) ? u.min(3E5, b.bk) : 0) >= c : !1
            }
            b.y = {};
            var w = {}
              , s = {}
              , m = function(b) {
                return b.el ? b.dn ? !0 : !1 : !1
            }
              , r = function() {
                var c = 0;
                return function() {
                    var d =
                    b.d.c
                      , f = d.document
                      , e = f.body
                      , d = (e.scrollTop || f.documentElement.scrollTop || d.pageYOffset || 0) / e.offsetHeight;
                    d > c && (c = d);
                    return c
                }
            }()
              , x = {
                load: function(b) {
                    return b && b.video && !b.video.started ? !1 : !0
                },
                measurable: function(c) {
                    return c && c.video && !c.video.started ? !1 : b.d.ay(c)
                },
                "full-measurable": function(c) {
                    return c && c.video && !c.video.started ? !1 : b.d.ay(c)
                },
                "full-inView": function(c) {
                    return b.o.t(c, 1, !0)
                },
                nhtReady: function(c) {
                    return c && c.video && !c.video.started ? !1 : b && b.z && b.z.a
                },
                inView100: function(c) {
                    return b.o.m(c,
                    1E5, !0)
                },
                inView60: function(c) {
                    return b.o.m(c, 6E4, !0)
                },
                inView45: function(c) {
                    return b.o.m(c, 45E3, !0)
                },
                inView40: function(c) {
                    return b.o.m(c, 4E4, !0)
                },
                inView35: function(c) {
                    return b.o.m(c, 35E3, !0)
                },
                inView30: function(c) {
                    return b.o.m(c, 3E4, !0)
                },
                inView25: function(c) {
                    return b.o.m(c, 25E3, !0)
                },
                inView20: function(c) {
                    return b.o.m(c, 2E4, !0)
                },
                inView15: function(c) {
                    return b.o.m(c, 15E3, !0)
                },
                inView10: function(c) {
                    return b.o.m(c, 1E4, !0)
                },
                inView5: function(c) {
                    return b.o.m(c, 5E3, !0)
                },
                inView3: function(c) {
                    return b.o.m(c, 3E3,
                    !0)
                },
                inView2: function(c) {
                    return b.o.m(c, 2E3, !0)
                },
                inView1: function(c) {
                    return b.o.m(c, 1E3, !0)
                },
                fullInView1: function(c) {
                    return b.o.t(c, 1E3, !0)
                },
                fullInView2: function(c) {
                    return b.o.t(c, 2E3, !0)
                },
                fullInView15: function(c) {
                    return b.o.t(c, 15E3, !0)
                },
                full_inview_05: function(c) {
                    return 600 <= c.INITIAL_HEIGHT && b.o.t(c, 500, !0)
                },
                full_inview_1: function(c) {
                    return 600 <= c.INITIAL_HEIGHT && b.o.t(c, 1E3, !0)
                },
                full_inview_5: function(c) {
                    return 600 <= c.INITIAL_HEIGHT && b.o.t(c, 5E3, !0)
                },
                full_inview_10: function(c) {
                    return 600 <= c.INITIAL_HEIGHT &&
                    b.o.t(c, 1E4, !0)
                },
                fully_inView2: function(c) {
                    return b.o.t(c, 2E3, !0)
                },
                fullViewActive: function(b) {
                    return this.active1(b) && this.full_inview_1(b)
                },
                inner_height_1000: function(c) {
                    return 1E3 <= b.d.am
                },
                inner_height_1200: function(c) {
                    return 1200 <= b.d.am
                },
                inner_height_1300: function(c) {
                    return 1300 <= b.d.am
                },
                inner_height_1400: function(c) {
                    return 1400 <= b.d.am
                },
                inner_height_1000_1400: function(c) {
                    return 1E3 <= b.d.am && 1400 >= b.d.am
                },
                inner_height_1100_1400: function(c) {
                    return 1100 <= b.d.am && 1400 >= b.d.am
                },
                audibleFullVisibleHalfDuration: function(c) {
                    var d =
                    c && b.o.i(c.zr)
                      , d = d && c.video && c.video.getCounter(d.getLabel());
                    return -1 < c.ao.duration && d && d.get("groupmAudibleFullyVisIvt") > c.ao.duration / 2
                },
                groupmAudVisHumanCap15: function(c) {
                    if (!(b && b.z && b.z.a && c && c.video && c.ao))
                        return !1;
                    var d = !1;
                    "number" == typeof c.ao.duration && !isNaN(c.ao.duration) && 0 < c.ao.duration && (d = u.min(15E3, c.ao.duration));
                    var f = c && b.o.i(c.zr);
                    c = f && c.video.getCounter(f.getLabel());
                    return d && c && c.get("groupmAudibleFullyVisIvt") > .5 * d && "undefined" === typeof b.z.a.a
                },
                scroll_measurable: function(c) {
                    return b.d.a
                },
                scroll: function(b) {
                    return "undefined" !== typeof v.z
                },
                scrollfirst1: function(b) {
                    return 1E3 < v.z
                },
                scrollfirst2: function(b) {
                    return 2E3 < v.z
                },
                scrollfirst3: function(b) {
                    return 3E3 < v.z
                },
                scrollfirst5: function(b) {
                    return 5E3 < v.z
                },
                scroll_interaction: function(b) {
                    return this.scroll(b) && this.interaction(b)
                },
                hover: function(b) {
                    return b.dm
                },
                laxOts: function(c) {
                    return b.o.q(c, "lax")
                },
                strictOts: function(c) {
                    return b.o.q(c)
                },
                interaction_measurable: function(c) {
                    return !b.a.y() || d(c)
                },
                interaction: function(b) {
                    return d(b)
                },
                btf: function(b) {
                    return m(b)
                },
                btf_strictOts: function(b) {
                    return this.strictOts(b) && m(b)
                },
                btf_interaction: function(b) {
                    return d(b) && m(b)
                },
                btf_inView5: function(c) {
                    return b.o.m(c, 5E3, !0) && m(c)
                },
                btf_inView15: function(c) {
                    return b.o.m(c, 15E3, !0) && m(c)
                },
                atf_970_728_inview20: function(c) {
                    return (970 == c.INITIAL_WIDTH || 728 == c.INITIAL_WIDTH) && !m(c) && b.o.m(c, 2E4, !0)
                },
                atf_300x250_inview20: function(c) {
                    return 300 == c.INITIAL_WIDTH && 250 == c.INITIAL_HEIGHT && !m(c) && b.o.m(c, 2E4, !0)
                },
                atf_300x600_inview20: function(c) {
                    return 300 == c.INITIAL_WIDTH && 600 == c.INITIAL_HEIGHT &&
                    !m(c) && b.o.m(c, 2E4, !0)
                },
                btf_300_inview20: function(c) {
                    return 300 == c.INITIAL_WIDTH && m(c) && b.o.m(c, 2E4, !0)
                },
                btf_300_inview30: function(c) {
                    return 300 == c.INITIAL_WIDTH && m(c) && b.o.m(c, 3E4, !0)
                },
                btf_300_inview40: function(c) {
                    return 300 == c.INITIAL_WIDTH && m(c) && b.o.m(c, 4E4, !0)
                },
                inner_height_1000: function(c) {
                    return 1E3 <= b.d.am
                },
                contentA: function(b) {
                    return this.page5(b) && .15 < r()
                },
                contentB: function(b) {
                    return this.page10(b) && .35 < r()
                },
                contentC: function(b) {
                    return this.page15(b) && .55 < r()
                },
                activeAny: function(b) {
                    return f(b,
                    10)
                },
                active05: function(b) {
                    return f(b, 500)
                },
                active1: function(b) {
                    return f(b, 1E3)
                },
                active2: function(b) {
                    return f(b, 2E3)
                },
                active3: function(b) {
                    return f(b, 3E3)
                },
                active4: function(b) {
                    return f(b, 4E3)
                },
                active5: function(b) {
                    return f(b, 5E3)
                },
                active6: function(b) {
                    return f(b, 6E3)
                },
                active7_2: function(b) {
                    return f(b, 7200)
                },
                active8: function(b) {
                    return f(b, 8E3)
                },
                active10: function(b) {
                    return f(b, 1E4)
                },
                active13: function(b) {
                    return f(b, 13E3)
                },
                active15: function(b) {
                    return f(b, 15E3)
                },
                active20: function(b) {
                    return f(b, 2E4)
                },
                page1: function(b) {
                    return c(b,
                    1E3)
                },
                page3: function(b) {
                    return c(b, 3E3)
                },
                page5: function(b) {
                    return c(b, 5E3)
                },
                page10: function(b) {
                    return c(b, 1E4)
                },
                page15: function(b) {
                    return c(b, 15E3)
                },
                page30: function(b) {
                    return c(b, 3E4)
                },
                page45: function(b) {
                    return c(b, 45E3)
                },
                page60: function(b) {
                    return c(b, 6E4)
                },
                page7_2: function(b) {
                    return c(b, 7200)
                },
                notmeasurable1: function(b) {
                    return n(b, 1E3) && !this.measurable(b)
                },
                notmeasurable3: function(b) {
                    return this.page3(b) && !this.measurable(b)
                },
                notmeasurable5: function(b) {
                    return this.page5(b) && !this.measurable(b)
                },
                notmeasurable10: function(b) {
                    return this.page10(b) && !this.measurable(b)
                },
                strictOtsAndSession5: function(b) {
                    return this.strictOts(b) && n(b, 5E3)
                },
                inView5AndActive2: function(c) {
                    return b.o.m(c, 5E3) && 2E3 <= c.bg
                },
                inView5AndActive1: function(c) {
                    return b.o.m(c, 5E3) && 1E3 <= c.bg
                },
                MoatScoreA: function(b) {
                    return n(b, 1E4) && !this.strictOts(b)
                },
                MoatScoreB: function(b) {
                    return this.strictOts(b)
                },
                MoatScoreC: function(c) {
                    return b.o.m(c, 15E3)
                },
                MoatScoreD: function(c) {
                    return b.o.m(c, 25E3) && this.scroll(c)
                },
                MoatScoreE: function(c) {
                    return b.o.m(c,
                    3E4) && f(c, 500) && this.scroll(c)
                },
                inView2AndScrollAndPage10: function(b) {
                    return this.inView2(b) && this.page10(b) && this.scroll(b)
                },
                page5AndScroll: function(b) {
                    return this.page5(b) && this.scroll(b)
                },
                page10AndScroll: function(b) {
                    return this.page10(b) && this.scroll(b)
                },
                scroll5Page15: function(b) {
                    return this.page15(b) || this.scrollfirst5(b)
                },
                click: function(b) {
                    return 0 < b.aq[2]
                },
                moatA: function(b) {
                    return n(b, 15E3) && this.inView10(b)
                },
                moatB: function(b) {
                    return n(b, 6E4) && this.scroll(b) && this.inView15(b)
                },
                moatC: function(b) {
                    return n(b,
                    15E4) && this.scroll(b) && this.inView20(b)
                },
                avoc: function(b) {
                    return b.reachedAvoc
                },
                quartile1AudVis: function(b) {
                    return "3" == b.video.quartiles.eg
                },
                quartile2AudVis: function(b) {
                    return "3" == b.video.quartiles.eh
                },
                quartile3AudVis: function(b) {
                    return "3" == b.video.quartiles.ei
                },
                quartile1NotAudVis: function(b) {
                    return b.video.quartiles.eg && "3" != b.video.quartiles.eg
                },
                audComplete: function(b) {
                    return "2" == b.video.quartiles.ej || "3" == b.video.quartiles.ej
                },
                visComplete: function(b) {
                    return "1" == b.video.quartiles.ej && "3" == b.video.quartiles.ej
                },
                aud3quartiles: function(b) {
                    return ("2" == b.video.quartiles.eg || "3" == b.video.quartiles.eg) && ("2" == b.video.quartiles.eh || "3" == b.video.quartiles.eh) && ("2" == b.video.quartiles.ei || "3" == b.video.quartiles.ei)
                },
                vid3quartiles: function(b) {
                    return ("1" == b.video.quartiles.eg || "3" == b.video.quartiles.eg) && ("1" == b.video.quartiles.eh || "3" == b.video.quartiles.eh) && ("1" == b.video.quartiles.ei || "3" == b.video.quartiles.ei)
                },
                avoc_audibleFullVisibleHalfDuration: function(c) {
                    var d = c && b.o.i(c.zr)
                      , d = d && c.video && c.video.getCounter(d.getLabel());
                    return c.reachedAvoc && -1 < c.ao.duration && d && d.get("groupmAudibleFullyVisIvt") > c.ao.duration / 2
                },
                avocWidth: function(b) {
                    b.get_width() && 400 <= b.get_width() && this.avoc(b)
                },
                moatVideoA: function(c) {
                    return c.get_duration() && b.o.m(c, .1 * c.get_duration(), !0)
                },
                everAudibleVisible: function(c) {
                    var d = c && b.o.i(c.zr);
                    return (c = d && c.video.getCounter(d.getLabel())) && c.get("everAudibleAndVisible")
                },
                visNeverAud: function(c) {
                    var d = c && b.o.i(c.zr)
                      , d = d && c.video.getCounter(d.getLabel());
                    return c.video.reachedComplete && d && d.get("everVisible",
                    !1) && !d.get("everAudible", !1)
                },
                completeView: function(b) {
                    return this.strictOts(b) && b.video.reachedComplete
                },
                complete: function(b) {
                    return b.video.reachedComplete
                },
                moatVideoB: function(c) {
                    return c.get_duration() && this.avoc(c) && b.o.m(c, .5 * c.get_duration(), !0)
                },
                moatVideoC: function(c) {
                    return c.get_duration() && this.avoc(c) && b.o.m(c, .95 * c.get_duration(), !0)
                },
                moatVideoD: function(c) {
                    return c.get_duration() && this.avoc(c) && b.o.m(c, .7 * c.get_duration(), !0)
                },
                moatVideoAWidth: function(b) {
                    return b.get_width() && 400 <=
                    b.get_width() && b.get_duration() && this.moatVideoA(b)
                },
                moatVideoBWidth: function(c) {
                    return c.get_width() && 400 <= c.get_width() && c.get_duration() && this.avoc(c) && b.o.m(c, .5 * c.get_duration(), !0)
                },
                moatVideoCWidth: function(c) {
                    return c.get_width() && 400 <= c.get_width() && c.get_duration() && this.avoc(c) && b.o.m(c, .95 * c.get_duration(), !0)
                },
                moatVideoDWidth: function(c) {
                    return c.get_width() && 400 <= c.get_width() && c.get_duration() && this.avoc(c) && b.o.m(c, .7 * c.get_duration(), !0)
                },
                moatVideoE: function(c) {
                    return c.get_duration() &&
                    b.o.m(c, .6 * c.get_duration(), !0)
                }
            };
            b.y.a = function(c) {
                return {
                    totalInviewTime: u.min(3E5, b.o.o(c)),
                    fullyInviewTime: u.min(3E5, b.o.s(c)),
                    ots: b.o.q(c)
                }
            }
            ;
            b.y.b = function(b) {
                return b && b.counters && b.counters.strictDwell && b.counters.strictDwell.tCur ? u.min(3E5, b.counters.strictDwell.tCur) : !1
            }
            ;
            b.y.c = function(b) {
                return b && b.counters && b.counters.laxPlayTime && b.counters.laxPlayTime.tCur ? u.min(3E5, b.counters.laxPlayTime.tCur) : !1
            }
            ;
            b.y.d = function(c, d, f) {
                var e = b.a.e()
                  , h = b.y.e(c)
                  , n = b.y.f(c)
                  , m = b.y.g(c)
                  , s = b.y.a(c);
                b.y.h(c,
                d);
                var l = c.get_duration()
                  , w = b.y.c(c)
                  , r = n.initWidth || c.INITIAL_WIDTH
                  , x = n.initHeight || c.INITIAL_HEIGHT
                  , q = c && b.o.i(c.zr)
                  , v = q && c.video.getCounter(q.getLabel());
                d = b.y.i(c, d);
                var y = f ? {
                    m: b.d.ay(c),
                    vpt: w,
                    iv: s.ots,
                    tuv: s.ots ? m : -1,
                    ivt: u.min(w, s.totalInviewTime),
                    cvt: q && u.min(w, q.getMaximumContinuousInViewTime()) || 0,
                    fvt: u.min(w, s.fullyInviewTime),
                    cfvt: q && u.min(w, q.getMaximumContinuousFullyInViewTime()) || 0,
                    vol: c.video.volume,
                    at: c && c.video && v && u.min(w, v.get("audibleTime")),
                    cat: u.min(w, c.video.maxContinuousAudibleTime()),
                    gmv: -1 < l && (v || !1) && v.get("groupmAudibleFullyVisIvt") > l / 2,
                    gmt: v && u.min(w, v.get("groupmAudibleFullyVisIvt")),
                    cgmt: u.min(w, c.video.groupmMaxContinuousFullVisAudibleTime()),
                    apd: b.y.b(c),
                    dh: l,
                    hov: !!c.cb,
                    th: c.cb,
                    d: encodeURIComponent(e),
                    w: r,
                    h: x,
                    sp: 400 > r,
                    bfa: c.el ? c.dn ? !0 : !1 : -1,
                    L1id: n.moatClientLevel1 || "-",
                    L2id: n.moatClientLevel2 || "-",
                    L3id: n.moatClientLevel3 || "-",
                    L4id: n.moatClientLevel4 || "-",
                    S1id: n.moatClientSlicer1 || "-",
                    S2id: n.moatClientSlicer2 || "-",
                    ord: h,
                    r: n.rand,
                    t: d ? d : "unload"
                } : {
                    m: b.d.ay(c),
                    iv: s.ots,
                    tuv: s.ots ?
                    m : -1,
                    tet: s.totalInviewTime,
                    gmv: -1 < l && (v || !1) && v.get("groupmAudibleFullyVisIvt") > l / 2,
                    fvt: s.fullyInviewTime,
                    apd: b.y.b(c),
                    h: !!c.cb,
                    th: c.cb,
                    bfa: c.el ? c.dn ? !0 : !1 : -1,
                    d: encodeURIComponent(e),
                    sp: 400 > r,
                    L1id: n.moatClientLevel1 || "-",
                    L2id: n.moatClientLevel2 || "-",
                    L3id: n.moatClientLevel3 || "-",
                    L4id: n.moatClientLevel4 || "-",
                    S1id: n.moatClientSlicer1 || "-",
                    S2id: n.moatClientSlicer2 || "-",
                    ord: h,
                    r: n.rand,
                    t: d ? d : "unload"
                };
                b.a.forEach(["zMoatImpID"], function(d) {
                    y[d] = "url" === d ? encodeURIComponent(Ca) : "mobile" === d ? b.a.y() : "avoc" ===
                    d ? c && c.reachedAvoc : n[d]
                });
                return y
            }
            ;
            b.y.j = function(c, d) {
                b.a.e();
                b.y.e(c);
                b.y.f(c);
                b.y.g(c);
                b.y.a(c);
                var f = b.o.i(c.zr);
                b.y.h(c, d);
                c.get_duration();
                b.y.c(c);
                f && c.video.getCounter(f.getLabel())
            }
            ;
            b.y.e = function(c) {
                var d;
                c.Ord ? d = c.Ord : (d = b.d.o ? b.d.o : (new y).getTime(),
                c.Ord = d);
                return d
            }
            ;
            b.y.f = function(b) {
                return b.ao.origLevels ? b.ao.origLevels : b.ao
            }
            ;
            b.y.g = function(c) {
                c = b.o.n(c.zr);
                return c.strict && "undefined" !== typeof c.strict.timeToView2Sec ? c.strict.timeToView2Sec : c.sframe && "undefined" !== typeof c.sframe.timeToView2Sec ?
                c.sframe.timeToView2Sec : c.pscope && "undefined" !== typeof c.pscope.timeToView2Sec ? c.pscope.timeToView2Sec : -1
            }
            ;
            b.y.h = function(c, d) {
                var f = {}
                  , e = ["AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete"];
                d && b.a.n(e, d) ? (f.s = c.video.quartiles[b.w.d[d]],
                f.v = 3 === f.s || 1 === f.s,
                f.a = 3 === f.s || 2 === f.s) : (f.v = -1,
                f.a = -1);
                return f
            }
            ;
            b.y.i = function(b, c) {
                switch (c) {
                case "AdVideoFirstQuartile":
                    c = "Q1";
                    break;
                case "AdVideoMidpoint":
                    c = "Q2";
                    break;
                case "AdVideoThirdQuartile":
                    c = "Q3";
                    break;
                case "AdVideoComplete":
                    c =
                    "Q4",
                    b.video.reachedComplete = !0
                }
                return c
            }
            ;
            b.y.k = function(c, d) {
                var f = b.y.f(c)
                  , e = [];
                try {
                    if (b.a.bj(d))
                        b.a.forEach(d, function(c) {
                            if (b.a.bj(c)) {
                                var d = {};
                                d.src = c[0];
                                d.customQueryParams = c[1] || !1;
                                d.opt = c[2] || !1;
                                d.customKey = f && f[c[3]] || !1;
                                d.customValues = c[4] || !1;
                                d.customValues ? b.a.n(d.customValues, d.customKey) && e.push(d) : e.push(d)
                            } else
                                "string" === typeof c && (d = {},
                                d.src = c,
                                d.customQueryParams = !1,
                                d.opt = !1,
                                e.push(d))
                        });
                    else if ("string" === typeof d) {
                        var h = {};
                        h.src = d;
                        e.push(h)
                    }
                } catch (n) {}
                return e
            }
            ;
            b.y.l = function(b) {
                var c =
                ""
                  , d = 0;
                if (b && "nosend" !== b)
                    for (prop in b)
                        b.hasOwnProperty(prop) && (d++,
                        !0 === b[prop] ? b[prop] = "1" : !1 === b[prop] ? b[prop] = "0" : "undefined" === typeof b[prop] && (b[prop] = 0),
                        c += (1 < d ? "&" : "") + prop + "=" + b[prop]);
                else
                    c = "nosend";
                return c
            }
            ;
            b.y.m = function(b) {
                "number" != typeof b.aq.NHTDIRECTSEQUENCE ? b.aq.NHTDIRECTSEQUENCE = 1 : b.aq.NHTDIRECTSEQUENCE++;
                return b.aq.NHTDIRECTSEQUENCE
            }
            ;
            b.y.n = function(b) {
                "number" != typeof b.aq.TTPSEQUENCE ? b.aq.TTPSEQUENCE = 1 : b.aq.TTPSEQUENCE++;
                return b.aq.TTPSEQUENCE
            }
            ;
            b.y.o = function(c, d, f) {
                b.y.f(c);
                (f = b.y.k(c, [["//liverailjsvp58397284.moatpixel.com/pixel.gif?", !1, "newPixelData"]])) && b.y.p(c, f, d, !0, !0)
            }
            ;
            b.y.p = function(c, d, f, e, h) {
                "string" == typeof d ? (new b.d.c.Image).src = d : b.a.forEach(d, function(d) {
                    var k = d.src, n = d.opt, m, s;
                    m = n && b.a.n(n, "xaxis") ? b.y.l(b.y.q(c, f)) : n && b.a.n(n, "newPixelData") ? b.y.l(b.y.d(c, f, !0)) : b.y.l(b.y.d(c, f));
                    d.customQueryParams && (s = b.y.l(b.y.j(c, f)));
                    m = n && b.a.n(n, "addCustom") ? m + "&" + s : d.customQueryParams ? s : m;
                    d = n && b.a.n(n, "secure") ? "https:" : b.d.protocol;
                    m && "nosend" !== m && (e && (m =
                    m + "&q=" + b.y.n(c)),
                    h ? b.z.b(d + k + m, {
                        ga: !0
                    })() : b.a.n(n, "dfp") ? (n = b.y.e(c),
                    (new b.d.c.Image).src = d + k + "u=" + m + ";sz=1x1;ord=" + n + "?") : (new b.d.c.Image).src = d + k + m)
                })
            }
            ;
            b.y.r = function(c, d) {
                l(c, "strictOts", function(c, f) {
                    var e = b.d.c
                      , g = e.document.getElementsByTagName("script")[0]
                      , e = e.document.createElement("img");
                    e.src = d;
                    g.parentNode.insertBefore(e, g);
                    c.viewableOcrPixelFired = 1
                })
            }
            ;
            b.y.s = function(c, d) {
                function f(c, d) {
                    var e = z[c];
                    return function() {
                        var c = b.y.k(e, [["//liverailjsvp58397284.moatpixel.com/pixel.gif?", !1,
                        "newPixelData"]]);
                        c && b.y.p(e, c, d, !0, !0)
                    }
                }
                l(c, "measurable", f(c, "meas"));
                l(c, "strictOts", f(c, "iv"));
                l(c, "audibleFullVisibleHalfDuration", f(c, "fv"));
                l(c, "nhtReady", f(c, "nht"))
            }
            ;
            b.y.t = function() {
                for (var c in z)
                    if (z.hasOwnProperty(c)) {
                        var d = z[c], f = w[c], e;
                        for (e in f)
                            f.hasOwnProperty(e) && x[e](d) && (b.a.forEach(f[e], function(c, f) {
                                var e = typeof c;
                                "string" === e ? b.y.u(c, d) : "function" === e && c(d)
                            }),
                            h(d, c),
                            delete f[e])
                    }
            }
            ;
            b.y.v = function(b) {
                var c = {};
                (b = s[b]) && b.getQS(c);
                return c
            }
            ;
            b.y.w = function(b, c) {
                if (w.hasOwnProperty(b) &&
                w[b].hasOwnProperty(c))
                    return !0
            }
            ;
            b.y.x = function(b, c) {
                w.hasOwnProperty(b) && w[b].hasOwnProperty(c) && delete w[b][c]
            }
            ;
            b.y.y = l;
            b.y.u = function(c, d, f) {
                var e;
                d.Ord ? e = d.Ord : (e = b.d.o ? b.d.o : (new y).getTime(),
                d.Ord = e);
                (new b.d.c.Image(1,1)).src = f ? c : c + "&ord=" + e
            }
        })(q);
        (function(b) {
            function l(c) {
                var d = [];
                b.a.forEach(c, function(b, c) {
                    d.push(c + ":" + ("(function(){try{return(" + b.toString() + ")()}catch(e){return false}})()"))
                });
                return a = "{" + d.join(",") + "}"
            }
            function e(b) {
                for (var c = "", d = 0; d < b.length; d++)
                    var f = b.charCodeAt(d) ^
                    85
                      , c = c + String.fromCharCode(f);
                b = c;
                for (var c = "", e = f = d = 0, k = 0, h = 0, n = 0; n < b.length; ++n)
                    for (h = b.charCodeAt(n),
                    k = 255 < h ? 0 : 1; 2 > k; ++k)
                        d = 0 === k ? d | (h & 65280) / 256 << f : d | (h & 255) << f,
                        f += 8,
                        13 < f && (e = d & 8191,
                        88 < e ? (d >>= 13,
                        f -= 13) : (e = d & 16383,
                        d >>= 14,
                        f -= 14),
                        c += g.charAt(e % 91),
                        c += g.charAt(e / 91 | 0));
                0 < f && (c += g.charAt(d % 91),
                7 < f || 90 < d) && (c += g.charAt(d / 91 | 0));
                return c
            }
            function h(c, d) {
                var f = [];
                b.a.forEach(c, function(b, c) {
                    if (void 0 !== b && ("string" === typeof (d ? b[d] : b) || "number" === typeof (d ? b[d] : b) || "boolean" === typeof (d ? b[d] : b))) {
                        var e = String(d ?
                        b[d] : b).split("&").join("%26").split("=").join("%3D");
                        f.push(("number" === typeof c ? "" : c + "=") + e)
                    }
                }, null , !0);
                f.sort();
                return f.join("&")
            }
            function d(b) {
                for (var c = "", d = 0; d < b.length; d++)
                    b.hasOwnProperty(d) && (c += g[b[d]]);
                return c
            }
            function c(c) {
                var d = x.getElementById("moatCap");
                if (!d || !d.gc && (d = x.getElementById("moatCapEmbed"),
                !d || !d.gc))
                    return !1;
                b.z.ab = e(unescape(d.gc()));
                var f = b.z.q();
                c = b.s.b(35, c, f, !1, !0).res;
                if (!c.shouldSendPixel)
                    return !0;
                d.sm({
                    fld: "px.moatads.com",
                    qs: c.querystring
                });
                return !0
            }
            function n(c,
            d, f) {
                if (void 0 === f)
                    f = 1;
                else if (5 < f)
                    return;
                var e = b.d.c && b.d.c.document && b.d.c.document.head;
                if (e) {
                    c += "&callback=" + b.d.j + "." + d;
                    var g = document.createElement("script");
                    e.insertBefore(g, e.firstChild);
                    b.z.ar.push(g);
                    g.src = c
                } else
                    b.g.h(function() {
                        n(c, d, f + 1)
                    }, 200)
            }
            function f(c) {
                var d = b.z.q(!0);
                dataForNHT = "//geo.moatads.com/n.js?" + b.s.b(35, c, d, !1, !0).res.querystring;
                n(dataForNHT, b.z.as)
            }
            b.z = {};
            b.z.c = 1;
            b.z.d = !1;
            b.z.e = {};
            b.z.f = [];
            b.z.g = [];
            b.z.h = 0;
            b.z.i = 1;
            b.z.j = 2;
            b.z.k = 3;
            b.z.l = 4;
            b.z.m = function() {
                var c = document &&
                document.documentElement && document.documentElement.style || {}
                  , d = !!window.opera
                  , f = "undefined" !== typeof InstallTrigger || "MozAppearance" in c
                  , e = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")
                  , g = !!window.chrome && !!window.chrome.webstore
                  , k = !+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit" in c && "-ms-ime-align" in c;
                b.z.n = [!0 === !!window.opera ? 1 : 0, "undefined" !== typeof InstallTrigger === !0 ? 1 : 0, !0 === !!window.sidebar ? 1 : 0, !0 === "MozAppearance" in c ? 1 : 0, !0 === 0 <
                Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") ? 1 : 0, !0 === !!window.chrome ? 1 : 0, !0 === !(!window.chrome || !window.chrome.webstore) ? 1 : 0, !0 === !+"\v1" ? 1 : 0, !0 === !!document.documentMode ? 1 : 0, !0 === !!window.ActiveXObject ? 1 : 0, !0 === "-ms-scroll-limit" in c ? 1 : 0, !0 === "-ms-ime-align" in c ? 1 : 0].join("");
                c = {};
                c[b.z.h] = g;
                c[b.z.i] = f;
                c[b.z.j] = d;
                c[b.z.k] = e;
                c[b.z.l] = k;
                b.z.o = [!0 === g ? 1 : 0, !0 === f ? 1 : 0, !0 === d ? 1 : 0, !0 === e ? 1 : 0, !0 === k ? 1 : 0].join("");
                for (var h in c)
                    if (c.hasOwnProperty(h) && c[h])
                        return h;
                return !1
            }();
            var w = {
                11: function() {
                    return b.a.br(window.crypto.getRandomValues)
                },
                12: function() {
                    return "open" in document.createElement("details")
                },
                13: function() {
                    try {
                        Function(' "use strict"; return 01; ')()
                    } catch (b) {
                        return !0
                    }
                    return !1
                },
                14: function() {
                    return "boolean" == typeof navigator.onLine
                },
                15: function() {
                    return b.a.br(document.documentElement.webkitRequestFullScreen)
                },
                16: function() {
                    return "-webkit-font-feature-settings" in document.body.style
                },
                18: function() {
                    return b.a.br(window.MutationObserver) || b.a.br(window.MutationEvent)
                },
                19: function() {
                    var b = document.createElement("div");
                    b.style.width = "1px";
                    b.style.width = "calc(1px - 1px)";
                    b.style.width = "-webkit-calc(1px - 1px)";
                    return "1px" != b.style.width
                },
                21: function() {
                    return "undefined" !== typeof window.navigator.webkitGamepads || b.a.br(window.navigator.webkitGetGamepads) || b.a.br(window.Gamepad)
                },
                22: function() {
                    var b = document.createElement("div");
                    b.style.width = "1px";
                    b.style.width = "-webkit-min-content";
                    b.style.width = "min-content";
                    return "1px" != b.style.width
                },
                23: function() {
                    return b.a.br(window.webkitRTCPeerConnection)
                },
                24: function() {
                    return b.a.br(Intl.Collator) || "object" == typeof Intl.Collator().resolvedOptions()
                },
                25: function() {
                    return b.a.br(window.document.body.createShadowRoot) || b.a.br(window.document.body.webkitCreateShadowRoot)
                },
                26: function() {
                    return "content" in document.createElement("template")
                },
                28: function() {
                    return b.a.br(CSS.supports)
                },
                30: function() {
                    var c = document.createElement("canvas");
                    c.width = c.height = 1;
                    c = c.getContext("2d");
                    c.globalCompositeOperation = "multiply";
                    c.fillStyle = "rgb(0,255,255)";
                    c.fillRect(0,
                    0, 1, 1);
                    c.fill();
                    c.fillStyle = "rgb(255,255,0)";
                    c.fillRect(0, 0, 1, 1);
                    c.fill();
                    c = c.getImageData(0, 0, 1, 1).data;
                    return c[0] == c[2] && c[1] == c[3] || b.a.br(window.navigator.vibrate)
                },
                32: function() {
                    return (!0 == CSS.supports("object-fit", "contain") || !0 == CSS.supports("object-fit", "inherit")) && !0 == "object-fit" in document.body.style
                },
                33: function() {
                    return b.a.br(window.speechSynthesis.speak)
                },
                34: function() {
                    return "srcset" in document.createElement("img")
                },
                35: function() {
                    return b.a.br(window.FontFace)
                },
                36: function() {
                    return b.a.br(document.createElement("div").animate)
                },
                37: function() {
                    return "shape-image-threshold" in document.body.style == CSS.supports("shape-image-threshold", .9) == !0 && b.a.br(document.createElement("dialog").show)
                },
                38: function() {
                    return b.a.br(navigator.getBattery)
                },
                39: function() {
                    return b.a.br(document.createElement("div").animate([{
                        transform: "scale(1)",
                        easing: "ease-in"
                    }, {
                        transform: "scale(1.3)",
                        easing: "ease-in"
                    }], {
                        duration: 1300,
                        iterations: 1
                    }).reverse)
                },
                40: function() {
                    return !!window.navigator.serviceWorker && b.a.br(window.navigator.serviceWorker.register)
                },
                41: function() {
                    return "image-rendering" in document.body.style && !0 == CSS.supports("image-rendering", "pixelated")
                },
                42: function() {
                    return b.a.br(window.fetch)
                },
                43: function() {
                    return b.a.br(navigator.permissions.query)
                },
                44: function() {
                    return CSS.supports("word-break", "keep-all")
                },
                47: function() {
                    return CSS.supports("text-align-last", "start")
                }
            }
              , s = {
                20: function() {
                    var b = document.createElement("canvas");
                    b.width = b.height = 1;
                    b = b.getContext("2d");
                    b.globalCompositeOperation = "multiply";
                    b.fillStyle = "rgb(0,255,255)";
                    b.fillRect(0,
                    0, 1, 1);
                    b.fill();
                    b.fillStyle = "rgb(255,255,0)";
                    b.fillRect(0, 0, 1, 1);
                    b.fill();
                    b = b.getImageData(0, 0, 1, 1).data;
                    return b[0] == b[2] && b[1] == b[3]
                },
                21: function() {
                    return void 0 !== window.document.createElement("style").scoped
                },
                22: function() {
                    return "content" in document.createElement("template")
                },
                23: function() {
                    var b = document.createElement("input");
                    b.setAttribute("type", "range");
                    return "text" !== b.type
                },
                24: function() {
                    return window.CSS.supports("cursor", "zoom-in")
                },
                26: function() {
                    return window.CSS.supports("image-orientation",
                    "270deg")
                },
                27: function() {
                    return window.CSS.supports("cursor", "grab")
                },
                29: function() {
                    return b.a.br(Intl.Collator) || "object" == typeof Intl.Collator().resolvedOptions()
                },
                30: function() {
                    return eval("1 == [for (item of [1,2,3]) item][0]")
                },
                31: function() {
                    return window.CSS.supports("--fake-var", 0)
                },
                32: function() {
                    return window.CSS.supports("position", "sticky")
                },
                35: function() {
                    return "performance" in window && "getEntriesByType" in window.performance && window.performance.getEntriesByType("resource") instanceof Array
                },
                36: function() {
                    return (!0 == CSS.supports("object-fit", "contain") || !0 == CSS.supports("object-fit", "inherit")) && !0 == "object-fit" in document.body.style
                },
                40: function() {
                    var b = (new AudioContext).createBufferSource();
                    b.detune.value = 100;
                    return 100 == b.detune.value
                },
                41: function() {
                    return !!document.fonts.ready
                },
                42: function() {
                    return b.a.br(Reflect.apply)
                },
                43: function() {
                    return b.a.br(Array.prototype.includes)
                },
                44: function() {
                    return eval("(function(){let x = true; return x; })()")
                }
            }
              , m = {
                5: function() {
                    try {
                        Function(' "use strict"; return 01; ')()
                    } catch (b) {
                        return !0
                    }
                    return !1
                },
                "5.1": function() {
                    return 0 == (new Uint16Array(1))[0]
                },
                6: function() {
                    return b.a.br(webkitRequestAnimationFrame)
                },
                7: function() {
                    return b.a.br(window.speechSynthesis.speak)
                },
                8: function() {
                    var c = new MediaSource;
                    return b.a.br(c.addSourceBuffer) || "number" == typeof window.performance.now()
                },
                9: function() {
                    return b.a.br(CSS.supports)
                }
            }
              , r = {
                0: function() {
                    var b = document.createElement("div")
                      , c = null
                      , d = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                    try {
                        b.style.behavior = "url(#default#clientcaps)"
                    } catch (f) {}
                    for (var e = 0; e < d.length; e++) {
                        try {
                            c = b.getComponentVersion(d[e], "componentid").replace(/,/g, ".")
                        } catch (g) {}
                        if (c)
                            return c.split(".")[0]
                    }
                    return "-1"
                },
                11: function() {
                    return eval("(function(){let x = true; return x; })()")
                },
                12: function() {
                    return isNativeFunction(CSS.supports)
                },
                13: function() {
                    return "content" in document.createElement("template")
                }
            };
            b.z.p = e;
            b.z.q = function(c) {
                var d = {};
                d.ud = b.z.m;
                if (void 0 === c || !1 === c)
                    d.qa = b.z.r,
                    d.qb = b.z.s,
                    d.qc = b.z.t,
                    d.qd =
                    b.z.u,
                    d.qf = b.z.v,
                    d.qe = b.z.w,
                    d.qh = b.z.x,
                    d.qg = b.z.y,
                    d.qi = b.z.z,
                    d.qj = b.z.aa,
                    d.qk = b.z.ab,
                    d.ql = b.z.ac,
                    d.qo = b.z.ad;
                d.qm = b.z.ae;
                d.qn = b.z.af;
                d.qp = b.z.o;
                d.qq = b.z.n;
                d.qr = b.z.ag;
                d.qt = b.z.ah;
                return d
            }
            ;
            for (var w = l(w), s = l(s), m = l(m), r = l(r), x = [[1, 25], [7, 1], [1, 25], [-74, 1], [1, 9], [-24, 1], [2, 1], [1, 3], [2, 1], [1, 4], [2, 1], [1, 1], [11, 1], [1, 6], [27, 1], [2, 1], [1, 3], [27, 1], [1, 3], [-92, 1]], w = 65, g = "", s = s = 0; s < x.length; s++)
                for (m = 0; m < x[s][1]; m++)
                    g += String.fromCharCode(w),
                    w += x[s][0];
            var g = g + String.fromCharCode(w)
              , w = d([48, 30, 27, 29, 43,
            34, 47, 30, 43])
              , s = d([30, 47, 26, 37, 46, 26, 45, 30])
              , m = d([43, 30, 44, 41, 40, 39, 44, 30])
              , k = [w, s].join("-")
              , t = [k, m].join("-");
            d([38, 40, 46, 44, 30, 38, 40, 47, 30]);
            var w = d([84, 41, 33, 26, 39, 45, 40, 38])
              , s = d([28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38])
              , m = b.d.c
              , x = m.document
              , r = x.body
              , q = m.navigator;
            b.z.z = b.d.ag;
            b.z.aa = b.d.ah;
            b.z.r = b.d.ai;
            b.z.s = b.d.aj;
            try {
                b.z.v = m.innerWidth || x.documentElement.clientWidth || r.clientWidth,
                b.z.w = m.innerHeight || x.documentElement.clientHeight || r.clientHeight,
                b.z.x = m.outerWidth || r.offsetWidth,
                b.z.y = m.outerHeight ||
                r.offsetHeight
            } catch (C) {}
            try {
                b.z.t = m.screenX || m.screenLeft || m.screenX,
                b.z.u = m.screenY || m.screenTop || m.screenY
            } catch (A) {}
            try {
                b.z.af = e(h(q))
            } catch (z) {}
            try {
                b.z.ac = e(h(q.plugins, "name"))
            } catch (B) {}
            b.z.ae = (new y).getTimezoneOffset();
            b.z.ag = 0;
            b.z.ah = !0 === ("undefined" != typeof m[w] || "undefined" != typeof m[s]) ? 1 : 0;
            b.z.ad = 0;
            b.z.ab = 0;
            b.z.ai = {};
            b.z.aj = function(c, d) {
                var f = b.z.q()
                  , f = "//bk6521.moatads.com/pixel.gif?" + b.s.b(d, c, f, !1, !0).res.querystring + "&qu=$_BK_UUID"
                  , f = "//tags.bluekai.com/site/25856?redir=" + encodeURIComponent(f);
                (new Image).src = f
            }
            ;
            b.z.ak = function() {}
            ;
            var V = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
            b.z.al = function(c, d) {
                d.ga ? b.a.forEach(V, function(d, f) {
                    c = d in b.z.a ? c + ("&" + d + "=1") : c + ("&" + d + "=0")
                }) : d.APPEND_MANUAL && b.a.forEach(V, function(f, e) {
                    b.a.n(d.APPEND_MANUAL, f) && (c = f in b.z.a ? c + ("&" + f + "=1") : c + ("&" + f + "=0"))
                });
                d.gb ? 0 == b.z.am && ((new b.d.c.Image).src = c) : d.gc ? 1 == b.z.am && ((new b.d.c.Image).src = c) : (new b.d.c.Image).src = c
            }
            ;
            b.z.an = function(c, d) {
                c(b.z.am)
            }
            ;
            b.z.b = function(c, d) {
                return function() {
                    if (void 0 === b.z.am)
                        return b.z.f.push({
                            pixel: c,
                            opts: d
                        });
                    b.z.al(c, d)
                }
            }
            ;
            b.z.ao = function(c, d) {
                if (void 0 === b.z.am)
                    return b.z.g.push({
                        callback: c,
                        opts: d
                    });
                b.z.an(c, d)
            }
            ;
            b.z.ap = function() {
                for (var c = 0; c < b.z.g.length; c++)
                    if (b.z.g.hasOwnProperty(c)) {
                        var d = b.z.g[c];
                        b.z.an(d.callback, d.opts)
                    }
            }
            ;
            b.z.aq = function() {
                for (var c = 0; c < b.z.f.length; c++)
                    if (b.z.f.hasOwnProperty(c)) {
                        var d = b.z.f[c];
                        b.z.al(d.pixel, d.opts)
                    }
            }
            ;
            b.z.ar = [];
            b.z.at = function(c) {
                if (v)
                    if (b.z.as = "gna" + u.floor(1E6 * u.random()),
                    v[b.z.as] = function(c) {
                        b.z.au = new y - b.z.av;
                        b.z.am = "n" in c ? 1 : 0;
                        b.z.a = c;
                        b.z.aq();
                        b.z.ap();
                        v.jsonpcache = c;
                        v[b.z.as] = null
                    }
                    ,
                    b.z.av = new y,
                    b.g.h(function() {
                        b.z.aw = new y - b.z.av
                    }, 0),
                    v.jsonpcache)
                        v[b.z.as](v.jsonpcache);
                    else
                        f(c);
                else
                    b.g.h(setupNadoListener, 200)
            }
            ;
            b.z.ax = function(c, d) {
                void 0 === b.z.e[c] && (b.z.e[c] = 1 / b.z.c < u.random());
                if (b.z.e[c])
                    return !1;
                var f = b.z.q();
                b.w && b.w.e && b.w.e.imaSDK ? c.moatClientLevel3 && b.s.b(34, c, f) : b.s.b(34, c, f);
                return !0
            }
            ;
            b.z.ay = function(d) {
                if (!0 !== b.z.az) {
                    b.z.az = !0;
                    var f = b.z.ax(d);
                    b.z.at(d);
                    b.z.ak();
                    if (f) {
                        try {
                            b.d.az || b.a.bf("afs.moatads.com")
                        } catch (e) {}
                        var g =
                        function() {
                            var c = {};
                            c.qr = b.z.ag;
                            c.qo = b.z.ad;
                            b.s.b(36, d, c)
                        }
                        ;
                        b.g.e(x, k, function(c) {
                            b.g.f(x, k, null , "mswe");
                            b.z.ag = 1;
                            g()
                        }, "mswe");
                        b.g.e(x, t, function(c) {
                            b.g.f(x, t, null , "mswer");
                            b.z.ag = 1;
                            g()
                        }, "mswer");
                        b.g.a(function() {
                            return c(d)
                        }, 10, 200)
                    }
                }
            }
            ;
            b.z.ba = function() {
                if (b.z.ar) {
                    for (var c = 0, d = b.z.ar.length; c < d; c++)
                        try {
                            b.z.ar[c].parentNode && b.z.ar[c].parentNode.removeChild(b.z.ar[c])
                        } catch (f) {}
                    b.z.ar = null
                }
            }
            ;
            b.z.bb = function() {
                b.g.f(x, k, null , "mswe");
                b.g.f(x, t, null , "mswer");
                b.z.ba()
            }
            ;
            b.j.b.azsx("allLocalAdsKilled",
            b.z.bb, {
                once: !0
            })
        })(q);
        (function(b) {
            function l(c) {
                var d = {
                    window: 0,
                    transparent: 1,
                    opaque: 2,
                    direct: 3,
                    gpu: 4
                };
                if ("EMBED" === c.tagName)
                    var f = b.a.getAttribute(c, "wmode");
                else if ("OBJECT" === c.tagName) {
                    c = c.getElementsByTagName("param");
                    for (var e = 0; e < c.length; e++) {
                        var h = c[e]
                          , m = b.a.getAttribute(h, "name")
                          , h = b.a.getAttribute(h, "value");
                        if ("wmode" === m) {
                            f = h;
                            break
                        }
                    }
                }
                return f && d[f.toLowerCase()] || 5
            }
            function e(c) {
                try {
                    if (!c)
                        return !1;
                    var d = c, f;
                    if ("DIV" === d.tagName || "A" === d.tagName)
                        (d = c.getElementsByTagName("EMBED")[0]) ||
                        (d = c.getElementsByTagName("OBJECT")[0]),
                        d || (d = c.getElementsByTagName("IMG")[0]),
                        d || (d = c);
                    1 === d.nodeType && "IMG" !== d.nodeName && "EMBED" !== d.nodeName && "OBJECT" !== d.nodeName && (d = c.getElementsByTagName("EMBED")[0] || c.getElementsByTagName("OBJECT")[0] || c.getElementsByTagName("IMG")[0] || c);
                    if ("OBJECT" === d.tagName) {
                        for (c = 0; c < d.children.length; c++)
                            if ("movie" === d.children[c].name || "Movie" === d.children[c].name)
                                f = d.children[c].value;
                        d.object && d.object.Movie ? f = d.object.Movie : d.data && -1 !== d.data.indexOf("swf") &&
                        (f = d.data)
                    }
                    "EMBED" !== d.tagName && "IMG" !== d.tagName || !d.src || (f = d.src);
                    f || (f = b.a.u(d));
                    var e = b.x.a(f, d);
                    return {
                        adURL: f,
                        flashVars: e
                    }
                } catch (h) {
                    return !1
                }
            }
            function h(c) {
                var h = c.el
                  , f = c.url
                  , w = c.flashVars
                  , s = c.adIds
                  , m = c.opt_props;
                (new y).getTime();
                this.ao = s;
                this.FIND_AD_TRIES = s.numTries || 0;
                var r = e(h);
                if (r && r.adURL && w)
                    for (p in r.flashVars)
                        r.flashVars.hasOwnProperty(p) && (w[p] = r.flashVars[p]);
                r && r.flashVars && (w = r.flashVars);
                if ("string" !== typeof f || "div" === f.toLowerCase() || "a" === f.toLowerCase())
                    f = r && r.adURL || "-";
                f && 0 !== f.toLowerCase().indexOf("http:") && 0 !== f.toLowerCase().indexOf("https:") && ("//" === f.substring(0, 2) ? f = window.location.protocol + f : "/" === f[0] ? f = window.location.protocol + "//" + window.location.host + f : (r = window.location.pathname.split("/").slice(0, -1).join("/"),
                f = window.location.protocol + "//" + window.location.host + "/" + r + (r ? "/" : "") + f));
                "IFRAME" !== h.tagName && "IMG" !== h.tagName && -1 === f.indexOf("googlesyndication") && (f = f.split("?")[0]);
                this.zr = s.adNum;
                this.yg = b.a.cf();
                b.k.g(this.yg, b.d.l.a);
                z[this.zr] = this;
                b.b.d(this.zr, [h]);
                this.ae = f;
                this.aa = h;
                this.WINDOW = b.a.t(this.aa);
                "undefined" === typeof this._calcVideoBasedOnContainer && (this._calcVideoBasedOnContainer = "EMBED" === h.nodeName && h.parentNode && "OBJECT" === h.parentNode.nodeName && 0 == h.offsetWidth && 0 == h.offsetHeight ? !0 : !1);
                this._calcVideoBasedOnContainer ? (this.INITIAL_WIDTH = h.parentNode.offsetWidth,
                this.INITIAL_HEIGHT = h.parentNode.offsetHeight) : (this.INITIAL_WIDTH = h.offsetWidth,
                this.INITIAL_HEIGHT = h.offsetHeight);
                "undefined" === typeof w && (w = {});
                b.k.h(T);
                this.eg =
                [];
                this.ee = {};
                m && m.IS_PAGE_LEVEL || (this.ed = {},
                b.i.y(this));
                b.w.f(this);
                this.get_duration = function() {
                    return "number" == typeof s.duration && !isNaN(s.duration) && 0 < s.duration && s.duration
                }
                ;
                this.get_width = function() {
                    return s.initWidth ? s.initWidth : this.INITIAL_WIDTH ? this.INITIAL_WIDTH : !1
                }
                ;
                b.p.d(this);
                b.y.s(this.zr, this.ao);
                this.ag = w;
                this.ah = void 0;
                this.ai = 0;
                this.an = this.am = this.al = this.ak = this.aj = void 0;
                this.ar = [];
                this.as = [];
                this.at = [];
                this.av = this.au = b.q.a.a.a;
                this.ax = b.q.a.b.a;
                this.ay = b.q.a.c.a;
                this.ba = this.az =
                b.q.a.d.a;
                this.bb = b.q.a.e.a;
                this.by = this.bx = this.bw = this.bv = this.bu = this.bt = this.bs = this.br = this.bq = this.bp = this.bo = this.bm = this.bl = this.bk = this.bi = this.bh = this.bg = this.bf = this.be = this.bd = this.bc = void 0;
                this.ca = this.bz = !1;
                this.cb = this.cu = this.ct = void 0;
                this.cc = +new y + 12E4;
                this.ci = +new y;
                this.cl = this.cm = void 0;
                this.cn = 0;
                this.ck = b.q.a.f.a;
                this.cd = !1;
                this.cy = void 0;
                this.dt = !1;
                this.db = void 0;
                this.cf = this.ce = !1;
                this.af = Number(this.ef);
                this.eq = !1;
                this.ds = this.ch = this.dr = this.cg = 0;
                this.dq = this.bn = void 0;
                this.IR5 = {
                    MIN: {
                        x: void 0,
                        y: void 0
                    },
                    MAX: {
                        x: void 0,
                        y: void 0
                    },
                    AREA: 0
                };
                this.dm = 0;
                this.ep = this.dd = !1;
                this.aq = {};
                this.aq.g = 0;
                this.aq[1] = 0;
                this.aq[2] = 0;
                this.aq[3] = 0;
                this.aq[13] = 0;
                this.aq[0] = 0;
                this.aq[4] = 0;
                this.aq[5] = 0;
                this.aq[6] = 0;
                this.aq[7] = 0;
                this.aq[9] = 0;
                this.aq[8] = 0;
                this.aq[15] = 0;
                this.aq[16] = 0;
                this.aq[21] = 0;
                this.aq[22] = 0;
                this.aq[23] = 0;
                this.aq[37] = 0;
                this.es = [5, 10, 15, 30, 60];
                this.doa = [5, 10, 15, 30, 60];
                this.aq[28] = 0;
                this.aq[33] = 0;
                this.aq[29] = 0;
                this.aq[14] = 0;
                this.an = c.adType || c.opt_props && c.opt_props.adType ||
                d(h);
                0 === this.an && (this.WMODE = l(h));
                b.a.bw(this.aa);
                b.w.g(this);
                b.j.b.zaxs("adInitialized", this)
            }
            function d(b) {
                return "IFRAME" === b.tagName ? 2 : "IMG" === b.tagName ? 1 : "EMBED" === b.tagName || "OBJECT" === b.tagName ? 0 : 3
            }
            b.b = {};
            b.b.b = function(c, e, f, w, s, m, r) {
                m || b.z.ay(s);
                var x;
                x = 1 == arguments.length ? arguments[0] : {
                    el: c,
                    url: e,
                    flashVars: w,
                    adIds: s,
                    opt_props: r
                };
                if (m) {
                    if ("function" === typeof m)
                        return m(c, e, w, s);
                    new y;
                    m.em = !0;
                    z[m.zr] = m;
                    c[I] = m.zr;
                    c[E] = !0;
                    m.aa = c;
                    m.INITIAL_WIDTH = c.offsetWidth;
                    m.INITIAL_HEIGHT = c.offsetHeight;
                    m.ae = e;
                    m.an = d(c);
                    0 === m.an && (m.WMODE = l(c));
                    m.ag = w || {};
                    b.r.a(m);
                    x = {
                        e: 0
                    };
                    x.q = m.aq[0]++;
                    b.s.a(m, x);
                    r && r.IS_PAGE_LEVEL || (m.periscopeManager && m.periscopeManager.killAllPixels(),
                    m.periscopeConfig = !1,
                    b.i.y(m));
                    return m
                }
                return new h(x)
            }
            ;
            b.b.c = function(c) {
                c.de = isNaN(c.ao.startTime) ? +new y : c.ao.startTime;
                c.RAND = c.ao.rand;
                (new y).getTime();
                c.dd = !0;
                b.o.g(c);
                b.d.a || b.ab.a.a();
                if (c._calcVideoBasedOnContainer) {
                    var d = {
                        aa: c.aa.parentNode,
                        zr: c.zr
                    };
                    c.aa.parentNode[I] = c.zr;
                    b.r.a(d)
                } else
                    b.r.a(c);
                c.aa.parentNode && "swiffycontainer" ===
                c.aa.parentNode.id && b.ac.a(["..../../iframe ~ #clicktag"], c, c.aa.parentNode);
                b.j.b.zaxs("startAdTracking", c);
                d = {
                    e: 0
                };
                d.q = c.aq[0]++;
                b.s.a(c, d)
            }
            ;
            b.b.a = function() {
                var c, d;
                for (d in z)
                    z.hasOwnProperty(d) && (c = z[d]) && !c.ep && b.p.e(c)
            }
            ;
            b.b.e = function(c) {
                var d = +new y
                  , f = d - c.ci;
                if (0 < c.doa.length) {
                    var e = 1E3 * c.doa[0];
                    if (c.counters.laxDwell.tCur >= e) {
                        c.doa.shift();
                        var h = c.es.length ? c.es[0] : 60;
                        if (e < h)
                            return !1;
                        if (5E3 < f)
                            return !0
                    }
                }
                return 0 < c.es.length && (h = 1E3 * c.es[0],
                b.o.m(c, h)) ? (c.es.shift(),
                !0) : 0 === c.doa.length && d >
                c.cc ? (c.cc *= 2,
                !0) : !1
            }
            ;
            b.b.d = function(b, d) {
                for (var f = 0; f < d.length; f++) {
                    var e = d[f];
                    e[I] = b;
                    e[E] = !0
                }
            }
            ;
            b.b.f = function(c, d) {
                b.a.a(d.cc);
                b.b.g(d);
                b.b.h(d, 1) && b.j.b.sxaz("adKilled", {
                    id: c
                })
            }
            ;
            b.b.i = function(c, d) {
                b.b.h(d) && b.j.b.sxaz("adNotFound", {
                    id: c
                })
            }
            ;
            b.b.h = function(c, d) {
                var f = 0;
                for (prop in z)
                    z.hasOwnProperty && z.hasOwnProperty(prop) && f++;
                return f <= (d || 0) ? (b.j.b.esgf("allLocalAdsKilled"),
                !0) : !1
            }
            ;
            b.b.j = function(b) {
                b.ep = !0;
                delete z[b.zr];
                b.aa = null
            }
            ;
            b.b.g = function(c) {
                if (c && c.video && !c.video.started)
                    return !1;
                var d = {
                    e: 21
                };
                d.q = c.aq[21]++;
                var f;
                b.y && b.y.o && (f = b.y.o(c));
                "string" === typeof f && (d.ff = f);
                b.s.a(c, d);
                c.unloadPixelSent = !0
            }
            ;
            b.j.b.azsx("adKilled", b.b.f, {
                includeId: !0
            });
            b.j.b.azsx("adNotFound", b.b.i, {
                includeId: !0
            })
        })(q);
        (function(b) {
            function l(b) {
                var d = [];
                if ("string" !== typeof b)
                    return !1;
                var e;
                e = 4 > b.length ? !1 : ".../" === b.substring(b.length - 4);
                if (e)
                    return !1;
                for (; b; ) {
                    if (c(b, ".../"))
                        e = ".../";
                    else if (c(b, "...../"))
                        e = "...../";
                    else if (c(b, "../") || c(b, "..../")) {
                        e = c(b, "../") ? "../" : "..../";
                        for (var h = e.length; c(b.substring(h),
                        e); )
                            h += e.length;
                        e = b.substring(0, h)
                    } else
                        c(b, "=>/") ? e = "=>/" : c(b, "-/") ? e = "-/" : (c(b, "$[") ? (e = b.length,
                        h = n(b, "]/") + 2) : (e = b.length,
                        h = n(b, "/") + 1),
                        e = b.substring(0, u.min(e, h)));
                    if (("../" === e || ".../" === e) && ".../" === (d.length && d[d.length - 1]) || ".../" === e && "../" === (d.length && d[d.length - 1]))
                        return !1;
                    if (b = b.substring(e.length)) {
                        if ("/" !== e.substring(e.length - 1))
                            return !1;
                        c(e, "../") || c(e, ".../") || c(e, "..../") || c(e, "...../") || c(e, "=>/") || c(e, "-/") || c(e, "$[") || (e = e.substring(0, e.length - 1))
                    }
                    d.push(e)
                }
                return d
            }
            function e(c) {
                if (!c)
                    return !1;
                if (!b.d.g || 10 < b.a.l() || c.querySelectorAll && c.querySelector && (!c.MoatQSShimSet || c[d]))
                    return !0;
                c.querySelector = function(b) {
                    b = this.querySelectorAll(b);
                    return b.length ? b[0] : null
                }
                ;
                c.querySelectorAll = function(b) {
                    var c = []
                      , d = this.ownerDocument || document
                      , f = d.createElement("style");
                    (d = d.getElementsByTagName("head")[0]) && d.insertBefore(f, d.childNodes[u.max(d.childNodes.length - 1, 0)] || null );
                    f && f.styleSheet && (f.styleSheet.cssText = b + "{shimtest:bar}");
                    b = this.getElementsByTagName("*");
                    for (var d = b.length, e = 0; e < d; e++)
                        b[e].currentStyle &&
                        "bar" === b[e].currentStyle.shimtest && (c[c.length] = b[e]);
                    f.parentNode.removeChild(f);
                    return c
                }
                ;
                c.MoatQSShimSet = !0;
                return c[d] = !0
            }
            function h(d, h, n) {
                var m = function(c, d) {
                    if (!c || !d)
                        return !1;
                    if (c.matches)
                        return c.matches(d);
                    if (!e(c.parentNode))
                        return !1;
                    var f = c.parentNode.querySelectorAll(d);
                    if (!f || !f.length)
                        return !1;
                    var g = !1;
                    b.a.forEach(f, function(b) {
                        b === c && (g = !0);
                        return !g
                    });
                    return g
                }
                ;
                d = l(d);
                if (!d)
                    return !1;
                var r = h;
                h = 0;
                for (var x = [], g = function(c) {
                    return c && b.e.a(c)
                }
                , k = function(b) {
                    return b && b.parentElement
                }
                ,
                t = function(c) {
                    return c ? (c = b.e.b(c)) && c.body : !1
                }
                , q = function(b, c, d) {
                    return b ? (b = b.getAttribute(c)) && (d = (new RegExp(d)).exec(b)) && d.length && 0 < d.length ? d[d.length - 1] : !1 : !1
                }
                , u = 0; u < d.length && 100 > h; u++) {
                    var A = d[u];
                    if (c(A, "../") || c(A, "..../")) {
                        var v, y;
                        c(A, "../") ? (v = "../",
                        y = k) : (v = "..../",
                        y = g);
                        if (0 !== A.length % v.length)
                            return !1;
                        for (var z = 0; z < A.length / v.length; z++) {
                            if (!r || "HTML" === r.nodeName)
                                return !1;
                            r = y(r);
                            h++
                        }
                    } else if (".../" === A)
                        for (; 100 > h; ) {
                            if (r && m(r, d[u + 1])) {
                                u++;
                                break
                            }
                            if (!r || "HTML" === r.nodeName)
                                return !1;
                            r = r.parentElement;
                            h++
                        }
                    else if ("...../" === A) {
                        r = b.d.c && b.d.c.document && b.d.c.document.body;
                        if (!r)
                            return !1;
                        h++
                    } else if ("=>/" === A) {
                        r = t(r);
                        if (!r)
                            return !1;
                        h++
                    } else if ("-/" === A) {
                        r = b.a.previousElementSibling(r);
                        if (!r)
                            return !1;
                        h++
                    } else if (c(A, "$["))
                        if (A = (z = (A = A.substring(2, A.length - 2)) && A.split("|")) && z[0],
                        z = z && z[1],
                        A && z)
                            if (A = q(r, A, z))
                                x.push(A),
                                h++;
                            else
                                return !1;
                        else
                            return !1;
                    else {
                        if (x && 0 < x.length)
                            for (v = x.length,
                            z = 0; z < v; z++)
                                A = A.replace("$" + z, x[z]);
                        if (!m(r, A)) {
                            if (!e(r))
                                return !1;
                            r = r.querySelectorAll(A);
                            if (n &&
                            u === d.length - 1)
                                return r ? r : !1;
                            if (!r || 1 !== r.length)
                                return !1;
                            r = r[0]
                        }
                    }
                }
                return r
            }
            b.ac = {};
            var d = "MoatQSShimOrd_LIVERAILJSVPAID1_" + b.d.o
              , c = function(b, c) {
                return 0 === b.indexOf(c) && c
            }
              , n = function(b, c) {
                var d = b.indexOf(c);
                return 0 > d ? b.length + 1 : d
            }
            ;
            b.ac.b = function(c, d) {
                var e = [];
                b.a.forEach(c, function(b) {
                    (b = h(b, d)) && e.push(b)
                });
                return e
            }
            ;
            b.ac.c = function(c, d) {
                var e = [];
                b.a.forEach(c, function(b) {
                    if (b = h(b, d, !0))
                        if (b.length && 1 < b.length)
                            for (var c = 0; c < b.length; c++)
                                e.push(b[c]);
                        else
                            e.push(b)
                });
                return e
            }
            ;
            b.ac.a = function(c,
            d, e) {
                c = b.ac.b(c, e);
                b.a.forEach(c, function(c) {
                    b.r.e(d, c)
                })
            }
        })(q);
        (function(b) {
            function l(d, c, e, f) {
                f = f || function() {
                    return !0
                }
                ;
                if (!d)
                    return !1;
                var h = b.a.l()
                  , l = null  !== h && 11 > h;
                if (!l)
                    for (var m = d.getElementsByTagName("embed"), h = 0; h < m.length; h++) {
                        var r = m[h];
                        if (!0 !== r[E] && -1 === r.id.indexOf("moatPx") && b.a.ap(r) && r.getAttribute("src") && f(r)) {
                            var x = r.getAttribute("src");
                            f = b.x.a(x, r);
                            return b.b.b(r, x, !1, f, c, e)
                        }
                    }
                for (var g = d.getElementsByTagName("object"), h = 0; h < g.length; h++)
                    if (m = g[h],
                    b.a.ap(m) && f(m) && ("undefined" ===
                    typeof m[E] || !0 !== m[E]) && -1 == m.id.indexOf("moatPx")) {
                        for (var k = 0; k < m.children.length; k++)
                            if ("movie" === m.children[k].name || "Movie" === m.children[k].name)
                                if (x = m.children[k].value,
                                !x || !x.match("scorecardresearch"))
                                    for (var t = 0; t < m.children.length; t++) {
                                        if (!l && "EMBED" === m.children[t].tagName) {
                                            r = m.children[t];
                                            if ("undefined" !== typeof r[E] && !0 === r[E] || -1 != r.id.indexOf("moatPx"))
                                                continue;if (b.a.ap(r) && f(r))
                                                return f = b.x.a(x, r),
                                                b.b.b(r, x, !1, f, c, e)
                                        }
                                        if ("OBJECT" === m.children[t].tagName && (r = m.children[t],
                                        b.a.ap(r) &&
                                        !0 !== r[E] && -1 === r.id.indexOf("moatPx") && f(r)))
                                            return b.b.b(r, void 0, !1, void 0, c, e)
                                    }
                        m.object && m.object.Movie ? x = m.object.Movie : m.data && (x = m.data);
                        if (!x || !x.match("scorecardresearch"))
                            return f = b.x.a(x, m),
                            b.b.b(m, x, !1, f, c, e)
                    }
                if (h = b.ad.h(d, c, e, f))
                    return h;
                x = d.getElementsByTagName("img");
                for (h = 0; h < x.length; h++)
                    if (l = x[h],
                    "undefined" === typeof l[E] || !0 !== l[E]) {
                        if (b.a.ap(l) && "" !== l.src && -1 === document.location.href.indexOf(l.src) && f(l))
                            return b.b.b(l, l.getAttribute("src"), !1, void 0, c, e);
                        var q;
                        try {
                            q = l.src
                        } catch (u) {
                            q =
                            l.getAttribute && l.getAttribute("src")
                        }
                        U["1"] = l.offsetWidth + "x" + l.offsetHeight + ":" + q
                    }
                if (d = d.getElementsByTagName("canvas")[0]) {
                    var A;
                    f(d.parentNode) && b.a.ap(d.parentNode) && (A = b.b.b(d.parentNode, d.parentNode.nodeName, !1, void 0, c, e));
                    if (A)
                        return A
                }
                return !1
            }
            function e(d, c) {
                for (var e = [], f = b.a.bj(d) ? d : d.getElementsByTagName("iframe"), h, l = 0; l < f.length; l++)
                    if (h = f[l],
                    !h[E]) {
                        var m = b.e.b(h) ? !1 : !0;
                        (1 === c && m && b.a.ap(h) || 2 === c && !m) && e.push(h)
                    }
                return e
            }
            b.ad = {};
            b.ad.a = function(d, c, e, f, h) {
                var l = b.ad.b
                  , m = 0;
                b.g.a(function() {
                    c.numTries =
                    m++;
                    return l(d, c, e, f) && !0
                }, b.ad.c, 500, h)
            }
            ;
            b.ad.h = function(d, c, h, f) {
                f = f || function() {
                    return !0
                }
                ;
                d = e(d, 1);
                if (d[0] && b.a.ap(d[0]) && f(d[0]))
                    return b.b.b(d[0], d[0].src, !1, void 0, c, h)
            }
            ;
            b.ad.g = function(d, c, e, f) {
                var h, s;
                d = b.ad.f(f || d, b.ad.i);
                for (f = 0; f < d.length; f++) {
                    s = d[f];
                    var m = b.e.b(s);
                    if (m && m.documentElement) {
                        a: {
                            h = c;
                            var r = e
                              , q = s;
                            if (q.id && q.id.match("ebBannerIFrame") && b.a.ap(q) && (h = b.b.b(q, q.nodeName, !1, void 0, h, r)))
                                break a;
                            h = void 0
                        }
                        if (h)
                            return c.cadf = "Friendly Sizmek Iframe",
                            h;
                        if (s = b.ac.b([".../div.celtra-clipper"],
                        s)[0])
                            if (b.a.ap(s)) {
                                if (h = b.b.b(s, s.nodeName, !1, void 0, c, e))
                                    return c.cadf = "Local Celtra Parallax",
                                    (c = m.getElementById("celtra-banner") || m.getElementById("celtra-object-1") || m.getElementById("celtra-instaad-unit")) && b.r.e(h, c),
                                    h
                            } else
                                continue;if (h = l(m.documentElement, c, e))
                            return h
                    }
                }
            }
            ;
            b.ad.j = function(d, c, e) {
                var f, h;
                d = b.ad.f(d, b.ad.i);
                for (var s = 0; s < d.length; s++) {
                    h = d[s];
                    var m = b.e.b(h);
                    if (m && m.documentElement) {
                        if ((f = b.ad.k(m.documentElement, c, e, h)) || (f = l(m.documentElement, c, e)))
                            return f;
                        m = b.ad.f(m.documentElement,
                        b.ad.i);
                        for (h = 0; h < m.length; h++) {
                            f = m[s];
                            var r = b.e.b(f);
                            if (r && r.documentElement && (f = b.ad.k(r.documentElement, c, e, f)))
                                return f
                        }
                    }
                }
            }
            ;
            b.ad.k = function(d, c, e, f) {
                d = d && d.ownerDocument && d.ownerDocument.body;
                var h;
                if ((d = d && d.children && d.children[0]) && d.id && d.id.match(/flite-\d+$/) && (d && f && f.className && f.className.match("flite-ad") && b.a.ap(f) ? h = f : d && f && f.parentNode && f.parentNode.className && f.parentNode.className.match("flite-div") && b.a.ap(f.parentNode) ? h = f.parentNode : d && f && f.parentNode && f.parentNode.parentNode &&
                f.parentNode.parentNode.className.match("flite-lightbox") && b.a.ap(f.parentNode.parentNode) && (h = f.parentNode.parentNode),
                h && (c.cadf = "Flite",
                c = b.b.b(h, h.nodeName, !1, void 0, c, e))))
                    return b.r.e(c, d),
                    b.r.e(c, f),
                    c
            }
            ;
            b.ad.e = function(b, c, e) {
                return !1
            }
            ;
            b.ad.l = function(d, c) {
                if (!aa) {
                    var e = (new y).getTime() - c.ao.startTime;
                    !0 !== c.em && !0 !== c.preventTryFindingAdAgain && 5E3 > e && (b.ad.m(c),
                    d.shouldKillAd = !1)
                }
            }
            ;
            var h = b.j.b.azsx("beforeAdKilled", b.ad.l);
            b.j.b.azsx("allLocalAdsKilled", function() {
                b.j.b.sxaz("beforeAdKilled",
                {
                    id: h
                })
            }, {
                once: !0
            });
            b.ad.n = function(b) {}
            ;
            b.ad.m = function(d) {
                if (!0 !== d.em) {
                    delete z[d.zr];
                    b.a.a(d.cc);
                    d.periscopeManager && d.periscopeManager.killAllPixels();
                    var c;
                    (c = D && D.parentNode) && b.ad.a(c, d.ao, d, void 0, function() {
                        b.p.e(d)
                    })
                }
            }
            ;
            b.ad.o = function(d, c, e, f) {
                d = b.ac.b(d, c);
                var h;
                b.a.forEach(d, function(c) {
                    if (b.a.ap(c))
                        return h = c,
                        !1
                });
                if (h)
                    return d = b.a.u(h) || h.src,
                    b.b.b(h, d || "DIV", !1, void 0, e, f)
            }
            ;
            b.ad.d = l;
            b.ad.b = function(d, c, e, f, h) {
                h = h || function() {
                    return !0
                }
                ;
                var l = b.ad.d
                  , m = b.ad.e;
                if ("undefined" === typeof d)
                    return !1;
                b.d.f && "HEAD" === d.tagName && (f = d.parentNode,
                "HTML" === f.tagName && (f = f.getElementsByTagName("body"),
                0 < f.length && (d = f[0])));
                var r;
                if ((r = m(d, c, e)) || (r = l(d, c, e, h)) || (r = b.ad.g(d, c, e)))
                    return r;
                if (f = b.e.d(d))
                    if (r = b.ad.g(f, c, e))
                        return r;
                return !Ia && !f || !(f = f || b.e.d(d)) || b.d.a && "BODY" === f.nodeName && b.a.t(f) == b.d.c || !(r = m(f, c, e)) && !(r = l(f, c, e, h)) ? !1 : r
            }
            ;
            b.ad.f = e;
            b.ad.p = 1;
            b.ad.i = 2;
            b.ad.q = 500;
            b.ad.c = 20;
            b.ad.r = {
                object: 1,
                embed: 1,
                img: 1,
                iframe: 1
            }
        })(q);
        (function(b) {
            function l(e, h, d) {
                d = {};
                e = e.replace(/&amp;/g, "&").replace(/(^\s+|\s+$)/g,
                "");
                e = e.split("&");
                for (var c = 0; c < e.length; c++) {
                    var n = e[c].split("=");
                    if ("string" === typeof n[1]) {
                        n[0] && n[0].match("moatClient") && (d["rawM" + n[0].slice(1)] = n[1]);
                        var f = n, l, s = l = n[1];
                        try {
                            for (var m = 0; 100 > m && (l = decodeURIComponent(l),
                            s != l) && !l.match(/^http(s)?\:/); m++)
                                s = l
                        } catch (r) {}
                        l = l.replace(/(^\s+|\s+$)/g, "");
                        f[1] = l
                    } else
                        n[1] = "";
                    d[n[0]] = n[1]
                }
                "undefined" !== typeof h && (d.clientZone = "undefined" !== h ? h : "");
                return d = b.f.h(d)
            }
            b.f = {};
            b.f.b = function(e, h) {
                if (!e)
                    return !1;
                if ("undefined" === typeof e.startTime || h)
                    e.startTime =
                    b.d.o;
                if ("undefined" === typeof e.rand || h)
                    e.rand = u.floor(u.random() * u.pow(10, 12));
                "undefined" === typeof e.adNum && (e.adNum = v.zr,
                v.zr++);
                e.duration = u.round(e.duration)
            }
            ;
            b.f.c = function(e) {
                if (!e)
                    return !1;
                var h = b.a.e();
                b.a.g();
                decodeURIComponent(h);
                if (b.a.ae().isInApp && !b.a.ai()) {
                    var h = e.moatClientSlicer1
                      , d = e.moatClientSlicer2;
                    h && "-" !== h && "" !== h.replace(/^\s+|\s+$/gm, "") || (d = h = "In App");
                    d || (d = "In App");
                    e.moatClientSlicer1 = "In App / " + h;
                    e.moatClientSlicer2 = "In App / " + d
                }
                return e
            }
            ;
            b.f.d = function(e) {
                return b.f.a(e)
            }
            ;
            b.f.a = function(b) {
                try {
                    var h = b.className
                      , d = b.getAttribute("src");
                    h.split("\n").join(" ");
                    if (-1 !== h.indexOf("moatfooter"))
                        return !1;
                    var c = d.split("?")
                      , n = d.split("#");
                    b = !1;
                    1 < c.length && 1 < n.length && c[1].length < n[1].length && (b = !0);
                    if (1 == c.length || b)
                        c = n;
                    return 1 < c.length ? l(c[1], "undefined") : !1
                } catch (f) {
                    return !1
                }
            }
            ;
            b.f.e = function(b) {
                if (!b)
                    return !1;
                var h = {};
                try {
                    var d = b && b.className.replace("amp;", "").split("?")[1];
                    return h = d && l(d)
                } catch (c) {
                    return !1
                }
            }
            ;
            b.f.f = function(e) {
                e.zMoatLROwnerId = e.moatClientLevel1;
                e.moatClientLevel1 =
                e.moatClientLevel2 && "-" !== e.moatClientLevel2 ? e.moatClientLevel2 : "Advertiser Not Identified";
                e.moatClientLevel2 = e.moatClientLevel4 && "-" !== e.moatClientLevel4 ? e.moatClientLevel4 : "Order Not Identified";
                e.moatClientLevel4 = e.moatClientLevel3 && "-" !== e.moatClientLevel3 ? e.moatClientLevel3 : "Creative Not Identified";
                e.moatClientLevel3 = e.moatClientLevel5 && "-" !== e.moatClientLevel5 ? e.moatClientLevel5 : "Order Line Item Not Identified";
                e.zMoatImpID = e.moatClientLevel6 && "-" !== e.moatClientLevel6 ? e.moatClientLevel6 : "Impression ID Not Identified";
                e.zMoatLRPubID = e.moatClientSlicer1 && "-" !== e.moatClientSlicer1 ? e.moatClientSlicer1.split(",")[0] : "Publisher Not Identified";
                e.zMoatLRMuted = !!e.moatClientSlicer3;
                e.zMoatLRAutoPlay = !!e.moatClientSlicer4;
                e.zMoatLRDuration = e.moatClientSlicer5 ? e.moatClientSlicer5 : "";
                e.zMoatLRContent = e.moatClientSlicer6 ? e.moatClientSlicer6 : "";
                e.zMoatLRPartners = e.moatClientSlicer7 && "-" !== e.moatClientSlicer7 ? e.moatClientSlicer7 : "Partner Not Identified";
                e.zMoatLRVideoId = e.moatClientSlicer8 && "-" !== e.moatClientSlicer8 ? e.moatClientSlicer8 :
                "Video Not Identified";
                e.zMoatLRVertical = e.moatClientSlicer9 && "-" !== e.moatClientSlicer9 ? e.moatClientSlicer9 : "Vertical Not Identified";
                e.zMoatLRDomain = e.moatClientSlicer10 && "-" !== e.moatClientSlicer10 ? e.moatClientSlicer10 : "Domain Not Identified";
                e.zMoatLRWidth = e.moatClientSlicer11 && "-" !== e.moatClientSlicer11 ? e.moatClientSlicer11 : "Width Not Identified";
                e.zMoatLRHeight = e.moatClientSlicer12 && "-" !== e.moatClientSlicer12 ? e.moatClientSlicer12 : "Height Not Identified";
                e.zMoatLRDomainDiag = b.a.g();
                e.zMoatLRSubdomainDiag =
                encodeURIComponent(b.a.e());
                return e
            }
            ;
            b.f.g = function(e) {
                var h = /(level|slicer)([\d]*)/, d, c, n;
                if ("undefined" !== typeof e.flashVars)
                    for (d in e.flashVars)
                        e.flashVars.hasOwnProperty(d) && (e[d] = e.flashVars[d]);
                for (d in e)
                    e.hasOwnProperty(d) && d.match && (c = d.match(h)) && (n = "level" === c[1] ? "moatClientLevel" : "moatClientSlicer",
                    e[n + c[2]] = "string" != typeof e[d] && "undefined" != typeof e[d] && null  !== e[d] ? "undefined" != typeof e[d].toString ? e[d].toString() : typeof e[d] : e[d],
                    delete e[d]);
                (e = b.f.f(e)) && "16708" === e.zMoatLROwnerId &&
                (e.zMoatLRPubVert = e && e.zMoatLRPubID && e.zMoatLRVertical ? e.zMoatLRPubID + "_" + e.zMoatLRVertical : "Value Not Defined")
            }
            ;
            b.f.h = function(b) {
                if (b) {
                    for (var h in b)
                        b.hasOwnProperty(h) && h && h.match("moatClientLevel") && "string" === typeof b[h] && (b[h] = b[h].replace(/\:/g, "_").replace(/%3A/gi, "_"));
                    return b
                }
            }
            ;
            b.f.i = function(b) {
                try {
                    var h = zoneRegEx.exec(b.innerHTML);
                    0 < h.length && (zone = h[1]);
                    return zone
                } catch (d) {}
            }
            ;
            b.f.j = function(b) {
                return (b = unescape(unescape(unescape(unescape(b.innerHTML)))).match(/~fdr=(\d*).*?\/.*?;(\d*)/)) ?
                {
                    adid: b && b[1] || "-",
                    cid: b && b[2] || "-"
                } : !1
            }
            ;
            b.f.k = function(b, h) {
                return h || {}
            }
            ;
            b.f.l = function(b) {
                b = decodeURIComponent(decodeURIComponent(b));
                -1 < b.indexOf("anonymous.google") && (b = "anonymous.google");
                var h = b.match(/^(?:[^:]{1,}:\/\/)?(?::*\/?\/?)?(?:www\.)?([^\/:]*)/);
                h && h[1] && (b = h[1]);
                return b.split("/")[0]
            }
        })(q);
        (function(b) {
            function l(d, c) {
                var e, f = [], h, l = b.a.k() ? 2048 : 7750, m = c || {};
                h = {};
                d.fs = "78880";
                for (e in d)
                    d.hasOwnProperty(e) && (1 != d.e || "x" !== e && "y" !== e && "c" !== e ? f.push(encodeURIComponent(e) + "=" + encodeURIComponent(d[e])) :
                    h[e] = d[e].split("a"));
                e = f.join("&");
                var f = l - e.length
                  , r = 0;
                if ("undefined" !== typeof h.x) {
                    for (var q = 0, g = 0; g < h.x.length; g++)
                        if (q += h.x[g].length + (h.y[g] ? h.y[g].length : 0) + (h.c[g] ? h.c[g].length : 0),
                        q < f)
                            r++;
                        else
                            break;
                    0 < r && (e += "&x=" + h.x.slice(0, r - 1).join("a"),
                    e += "&y=" + h.y.slice(0, r - 1).join("a"),
                    e += "&c=" + h.c.slice(0, r - 1).join("a"))
                }
                for (var k in m)
                    m.hasOwnProperty(k) && (h = "&" + encodeURIComponent(k) + "=" + encodeURIComponent(m[k]),
                    h.length + e.length < l && (e += h));
                e = e.replace(/\x27/g, "%27");
                try {
                    var l = e, t;
                    var m = e
                      , v = d.i
                      ,
                    C = new y
                      , A = [C.getFullYear(), ("0" + (C.getMonth() + 1)).slice(-2), ("0" + C.getDate()).slice(-2)].join("-")
                      , m = m + (v + A)
                      , v = 0;
                    if (0 == m.length)
                        t = v;
                    else {
                        for (C = 0; C < m.length; C++)
                            var z = m.charCodeAt(C)
                              , A = v
                              , A = (A << 5) - A + z
                              , v = A &= A;
                        t = u.abs(v)
                    }
                    e = l + ("&na=" + t)
                } catch (B) {}
                return e
            }
            function e(d, c) {
                d.j = 25 == c ? "string" == typeof b.d.b && b.d.b.slice(0, 500) || "" : b.a.h(b.d.b);
                if (!b.d.a) {
                    var e = b.a.f();
                    e && (d.lp = e)
                }
            }
            b.s = {};
            var h = "zMoatLROwnerId zMoatLRMuted zMoatLRAutoPlay zMoatLRDuration zMoatLRContent zMoatLRPartners zMoatLRVideoId zMoatLRVertical zMoatLRDomain zMoatLRWidth zMoatLRHeight zMoatLRPubID zMoatLRPubVert".split(" ");
            b.s.b = function(d, c, n, f, q) {
                b.f.b(c, f);
                var s = {};
                s.e = d;
                b.a.az(s, n);
                s.i = "LIVERAILJSVPAID1";
                if (11 === d) {
                    b.j.b.zaxs("adNotFound");
                    d = [];
                    for (var m in U)
                        U.hasOwnProperty(m) && d.push(m + "=" + U[m]);
                    s.k = d.join("&").slice(0, 300)
                }
                if (!(s.e in Fa)) {
                    s.bq = b.d.k;
                    s.f = Number(!na);
                    e(s, s.e);
                    s.o = 3;
                    s.t = c.startTime;
                    s.de = c.rand;
                    s.m = 0;
                    s.ar = "621d5e4-clean";
                    b.a.bh(s, "ai", v.z);
                    s.q = v.m++;
                    s.cb = P ? 1 : 0;
                    s.cu = za;
                    s.ll = b.d.ad || 0;
                    b.a.bh(s, "lm", b.d.ae);
                    s.ln = b.d.f ? 1 : 0;
                    s.r = b.i.i;
                    b.a.az(s, b.focus.getQueryString());
                    b.f.k(c, s);
                    "undefined" !== typeof c &&
                    (s.d = c.moatClientLevel1 + ":" + c.moatClientLevel2 + ":" + c.moatClientLevel3 + ":" + c.moatClientLevel4,
                    b.a.forEach(h, function(b) {
                        s[b] || (s[b] = c[b] || "-")
                    }),
                    b.z && (s.qs = b.z.c),
                    s.bo = c.moatClientSlicer1,
                    s.bd = c.moatClientSlicer2,
                    s.fd = "1");
                    s.ac = 1;
                    s.it = b.ad.q;
                    b.a.ae().isInApp && (s.lv = b.a.ag(),
                    b.a.ai() || b.a.al() && (s.lx = 1));
                    d = l(s);
                    m = S;
                    d = b.s.c(c, d + "&cs=0", s);
                    if (!0 === q)
                        return {
                            qs: s,
                            res: d
                        };
                    d.shouldSendPixel && d.querystring && (34 == s.e ? v.yh.yi(d.querystring, m, "afs.moatads.com", !0) : v.yh.yi(d.querystring, m, "afs.moatads.com", b.d.q))
                }
            }
            ;
            b.s.a = function(d, c, n) {
                if (!d || !0 === d.ep)
                    return !1;
                b.ad.n(d);
                if ("undefined" !== typeof d.ao && (2 !== d.an || 1 !== c.e && 3 !== c.e) && !(c.e in Fa)) {
                    c.lo = d.FIND_AD_TRIES;
                    d.ah && (c.a = d.ah);
                    var f = d.ag
                      , q = {};
                    if (9 === c.e && 2 === c.q || 25 === c.e) {
                        for (var s in f)
                            f.hasOwnProperty(s) && "" !== s && "undefined" !== typeof f[s] && -1 === s.indexOf("dvContains") && -1 === s.indexOf("indexOf") && -1 === s.toLowerCase().indexOf("clicktag") && (q["z" + s] = f[s]);
                        c.e = 25
                    }
                    0 === d.an && (c.dc = d.WMODE);
                    b.z && (c.qs = b.z.c);
                    "string" !== typeof d.ae || 0 != c.e && 25 != c.e ? c.ak = "-" :
                    (f = b.d.g ? 700 : 1200,
                    c.ak = d.ae.length <= f ? d.ae : d.ae.slice(0, f));
                    d.bi > d.bg && (d.bg = d.bi);
                    d.bm > d.bk && (d.bk = d.bm);
                    c.i = "LIVERAILJSVPAID1";
                    b.a.az(c, b.z.q(!0));
                    c.bq = b.d.k;
                    c.g = d.aq.g++;
                    f = d.INITIAL_WIDTH;
                    c.h = d.INITIAL_HEIGHT;
                    c.w = f;
                    try {
                        b.d.au() && d && d.elementRect && (c.fy = d.elementRect.left,
                        c.gp = d.elementRect.top)
                    } catch (m) {}
                    c.f = Number(!na);
                    e(c, c.e);
                    c.o = 3;
                    c.t = d.ao.startTime;
                    c.de = d.ao.rand;
                    c.cu = za;
                    c.m = c.m || b.a.q(d);
                    c.ar = "621d5e4-clean";
                    c.cb = P ? 1 : 0;
                    c.ll = b.d.ad || 0;
                    b.a.bh(c, "lm", b.d.ae);
                    c.ln = b.d.f ? 1 : 0;
                    c.r = b.i.i;
                    b.a.az(c,
                    b.h.c());
                    b.d.a && (c.gh = 1);
                    b.d.af();
                    c.qa = b.d.ai;
                    c.qb = b.d.aj;
                    c.qi = b.d.ag;
                    c.qj = b.d.ah;
                    c.qf = b.d.al;
                    c.qe = b.d.am;
                    c.qh = b.d.an;
                    c.qg = b.d.ao;
                    try {
                        c.lk = d && d.elementRect && d.elementRect.top + b.d.aq || "undefined"
                    } catch (r) {}
                    c.lb = b.d.ap;
                    c.le = Ja ? 1 : 0;
                    b.z && void 0 !== b.z.au && (c.lf = b.z.au);
                    b.z && void 0 !== b.z.bc && (c.lj = b.z.bc);
                    b.z && void 0 !== b.z.bd && (c.li = b.z.bd);
                    b.z && void 0 !== b.z.am && (c.lg = b.z.am);
                    b.z && void 0 !== b.z.aw && (c.lh = b.z.aw);
                    b.o.e() && (c.mn = 1,
                    b.o.f() && (c.mo = 1));
                    (f = (f = b.d.v() || b.d.x) || b.d.z()) && (c.gm = 1);
                    b.d.x && (c.fa = 1);
                    b.d.z() && (c.fx = 1);
                    if (b.h && b.h.a())
                        c.ch = 1,
                        c.gh = 1;
                    else if (b.i && b.i.a) {
                        c.ct = b.i.ai;
                        if (d && d.periscopeManager) {
                            f = !b.focus.pageIsVisible() && d && d.counters && d.counters.strictDwell && 0 == d.counters.strictDwell.tCur && 21 == c.e;
                            s = "0" != b.a.o();
                            if (d.periscopeManager.measurable || !b.d.a && f && s)
                                c.ch = 1;
                            d.periscopeManager.fullyMeasurable && d.ao && 1 != d.ao.skin && (c.ga = 1)
                        } else
                            c.ch = 1;
                        "undefined" !== typeof b.i.aj && d && d.ao && d.ao.startTime && !isNaN(d.ao.startTime) && (f = b.i.aj - d.ao.startTime,
                        c.fg = 0 <= f ? f : 0)
                    } else
                        c.ch = 0;
                    b.a.az(c, b.o.u(d.zr,
                    c));
                    b.a.az(c, b.focus.getQueryString());
                    b.a.az(c, b.y.v(d.zr));
                    b.a.az(c, d.counters.getQs());
                    d.video.getQs(c);
                    b.a.bh(c, "ai", v.z);
                    b.a.bh(c, "ap", d.cb);
                    b.a.bh(c, "ax", d.bg);
                    b.a.bh(c, "ay", d.bi);
                    b.a.bh(c, "az", d.bk);
                    b.a.bh(c, "ba", d.bm);
                    b.a.bh(c, "aw", d.bc);
                    b.a.bh(c, "bg", d.bd);
                    b.a.bh(c, "be", d.be);
                    b.a.bh(c, "bc", d.bw);
                    b.a.bh(c, "bf", d.by);
                    b.a.bh(c, "bh", d.bx);
                    b.a.bh(c, "bz", d.cu);
                    c.cl = u.round(100 * d.IR5.AREA / (c.w * c.h));
                    c.au = d.aq[2] - 1;
                    c.av = d.aq[3] - 1;
                    c.by = d.aq[23] - 1;
                    c.at = d.dm;
                    b.f.k(d.ao, c);
                    c.d = d.ao.moatClientLevel1 +
                    ":" + d.ao.moatClientLevel2 + ":" + d.ao.moatClientLevel3 + ":" + d.ao.moatClientLevel4;
                    c.bo = d.ao.moatClientSlicer1;
                    c.bd = d.ao.moatClientSlicer2;
                    b.a.forEach(h, function(b) {
                        c[b] || (c[b] = d.ao[b] || "-")
                    });
                    c.ab = d.an;
                    c.ac = 1;
                    c.fd = "1";
                    c.kt = b.o.r(d.zr);
                    c.it = b.ad.q;
                    d.bi = d.bg;
                    d.bm = d.bk;
                    b.v.b(d) && (c.fz = 1);
                    b.a.ae().isInApp && (c.lv = b.a.ag(),
                    b.a.ai() || b.a.al() && (c.lx = 1));
                    s = l(c, q);
                    f = S;
                    if (n)
                        return c;
                    n = b.s.c(d.ao, s + "&cs=0", c, q);
                    n.shouldSendPixel && n.querystring && (34 == c.e ? v.yh.yi(n.querystring, f, "afs.moatads.com", !0) : v.yh.yi(n.querystring,
                    f, "afs.moatads.com", b.d.q))
                }
            }
            ;
            b.s.d = function(b, c) {
                b.zMoatSrcd = b.d;
                b.zMoatSrcbo = b.bo;
                b.zMoatSrcbp = b.bp;
                b.zMoatSrcbd = b.bd;
                b.d = (c.moatClientLevel1 || "") + ":";
                b.d += (c.moatClientLevel2 || "") + ":";
                b.d += (c.moatClientLevel3 || "") + ":";
                b.d += c.moatClientLevel4 || "";
                b.bo = c.moatClientSlicer1;
                b.bd = c.moatClientSlicer2;
                return b
            }
            ;
            b.s.e = function(d, c, e, f, h, s, m, r) {
                d = "extraPx_" + d;
                c[d] || (c[d] = {});
                f = b.a.by(f);
                f.zMoatSrci = f.i;
                f.i = e;
                r && (f = b.s.d(f, r));
                if (b.z.be && !c[d].timestampsReset)
                    for (var q = 0; q < b.z.be.length; q++) {
                        var g = b.z.be[q];
                        g.zMoatSrci = g.i;
                        g.i = e;
                        r && (g = b.s.d(g, r));
                        g = l(g) + "&cs=0";
                        v.yh.yi(g, h, s, !0)
                    }
                c[d].timestampsReset || (c[d].timestampsReset = !0,
                f.am && (f.am = 0),
                f.an && (f.an = 0),
                f.ao && (f.ao = 0),
                f.aq && (f.aq = 0),
                f.ay && (f.ay = 0),
                f.ba && (f.ba = 0),
                f.bx && (f.bx = 0),
                f.cd && (f.cd = 0),
                f.cf && (f.cf = 0),
                f.db && (f.db = 0),
                f.dr && (f.dr = 0),
                f.dt && (f.dt = 0),
                f.es && (f.es = 0),
                f.ev && (f.ev = 0),
                f.sa && (f.sa = 0),
                f.sq && (f.sq = 0),
                f.si && (f.si = 0),
                f.sm && (f.sm = 0),
                f.mc && (f.mc = 0),
                f.lc && (f.lc = 0),
                f.pf && (f.pf = 0),
                f.ge && (f.ge = 0),
                f.gg && (f.gg = 0),
                f.cn && (f.cn = 0),
                f.gl && (f.gl = 0),
                f.pn &&
                (f.pn = 0),
                f.fj && (f.fj = 0));
                d = l(f, m);
                v.yh.yi(d + "&cs=0", h, s, b.d.q)
            }
            ;
            b.s.c = function(b, c, e, f) {
                return {
                    shouldSendPixel: !0,
                    querystring: c
                }
            }
            ;
            b.s.f = function(b, c) {
                if (2 !== b.an || 1 !== c.e && 3 !== c.e)
                    (new Image(1,1)).src = ""
            }
            ;
            b.s.g = function(b, c) {
                return l(b, c)
            }
            ;
            b.s.h = function(d) {
                var c = {
                    e: 16
                };
                c.q = d.aq[16]++;
                b.s.a(d, c)
            }
            ;
            b.s.i = function(d) {
                var c = !1
                  , e = b.s.b(8, d.ao, !1, !1, !0);
                if (e && e.qs && e.qs.d) {
                    c = e.qs.d.split(":");
                    c = {
                        viewHash: "LIVERAILJSVPAID1",
                        moatClientLevel1: c[0],
                        moatClientLevel2: c[1],
                        moatClientLevel3: c[2],
                        moatClientLevel4: c[3],
                        tagStartTime: b.d.o
                    };
                    if (d && d.ao)
                        for (var f in d.ao)
                            d.ao.hasOwnProperty(f) && -1 != f.indexOf("zMoat") && (c[f] = d.ao[f]);
                    for (f in e)
                        e.hasOwnProperty(f) && -1 != f.indexOf("zMoat") && (c[f] = e[f]);
                    c.moatClientSlicer1 = e.qs.bo;
                    c.moatClientSlicer2 = e.qs.bd
                }
                return c
            }
            ;
            b.s.j = function(d) {
                var c = {
                    e: 8
                };
                c.q = d.aq[8]++;
                return b.s.a(d, c, !0)
            }
        })(q);
        (function(b) {
            function l(e, d, c, l, f) {
                var q = 1E4;
                b.a.ae().isInApp && (q = 500);
                var s = (new y).getTime();
                this.tMaxContinuous = this.tContinuous = this.tLast = this.tCur = 0;
                this.getMaxContinuous = function() {
                    return u.max(this.tContinuous,
                    this.tMaxContinuous)
                }
                ;
                this.reset = function() {
                    this.tLast = this.tCur = 0
                }
                ;
                this.update = function(b) {
                    var c = (new y).getTime();
                    if (e(b)) {
                        b = u.min(c - s, q);
                        var d = typeof l;
                        b && 0 > b && (b = 0);
                        this.tCur += b;
                        this.tContinuous += b;
                        "number" === d && 0 < l ? this.tCur > l && (this.tCur = l) : "function" === d && (b = l(),
                        "number" === typeof b && this.tCur > b && 0 < b && (this.tCur = b))
                    } else
                        this.tMaxContinuous < this.tContinuous && (this.tMaxContinuous = this.tContinuous),
                        this.tContinuous = 0;
                    s = c;
                    f && f(this.tCur)
                }
                ;
                this.getQs = function(b) {
                    b = this.query(b);
                    this.tLast = this.tCur;
                    return b
                }
                ;
                this.query = function(b) {
                    b = b || {};
                    this.tLast > this.tCur && (this.tLast = this.tCur);
                    d && c && (b[d] = this.tCur,
                    b[c] = this.tLast);
                    return b
                }
            }
            b.p = {};
            b.p.f = {};
            b.p.f.a = [];
            b.p.f.b = [];
            var e = !1;
            b.p.g = function() {
                if (!e) {
                    e = !0;
                    try {
                        var h = v.swde.azsx("scroll", b.p.h);
                        b.j.b.azsx("allLocalAdsKilled", function() {
                            v.swde.sxaz("scroll", {
                                id: h
                            })
                        }, {
                            once: !0
                        })
                    } catch (d) {}
                }
            }
            ;
            b.p.i = function(e, d) {
                try {
                    var c = e.aa
                      , l = b.a.v(c, 5)
                      , f = l && (6 == l.length || 1 <= l.length && "HTML" === l[l.length - 1].nodeName);
                    d = d || e.WINDOW || b.a.t(c);
                    return !(c && d && f) || c.ownerDocument &&
                    c.ownerDocument.body && !c.ownerDocument.body.contains(c) ? !1 : !0
                } catch (q) {
                    return !1
                }
            }
            ;
            b.p.j = function() {
                function e() {
                    if (!s)
                        try {
                            s = !0,
                            d(),
                            s = !1
                        } catch (b) {
                            throw s = !1,
                            b;
                        }
                }
                function d() {
                    for (var d = 0, e = L.length; d < e; d++)
                        if (L[d] === l)
                            return;
                    l = b.g.g(function() {
                        b.p.k();
                        var c = (new y).getTime()
                          , d = u.max(u.min(c - f, q), 0);
                        b.j.b.zaxs("view:tick", d, c);
                        f = c;
                        for (var e in z)
                            if (z.hasOwnProperty(e)) {
                                var h = z[e];
                                h.video.onLoop()
                            }
                        h && h.video && h.video.started && b.y.t()
                    }, c)
                }
                var c;
                c = 200;
                var l, f = (new y).getTime(), q = 1E4;
                b.a.ae().isInApp && (q =
                500);
                var s = !1;
                b.j.b.azsx("periscope:onStateChange", e);
                b.j.b.azsx("viewCounterStarted", e);
                return d
            }();
            b.p.k = function() {
                var e, d;
                for (d in z)
                    z.hasOwnProperty(d) && (e = z[d],
                    b.p.i(e, e.WINDOW) ? e.counters.update(e) : b.p.e(e))
            }
            ;
            b.p.e = function(e) {
                if (!aa) {
                    var d = {
                        shouldKillAd: !0
                    };
                    b.j.b.zaxs("beforeAdKilled", d, e);
                    if (!d.shouldKillAd)
                        return
                }
                b.j.b.zaxs("adKilled", e);
                b.b.j(e)
            }
            ;
            b.p.c = function(e) {
                e.eq || (e.eq = !0);
                var d = {
                    e: 5
                };
                d.q = e.aq[5]++;
                b.s.a(e, d)
            }
            ;
            b.p.l = function(e) {
                if (!e || !e.aq || !e.aq[0])
                    return !1;
                var d = {
                    e: 37
                };
                d.q = e.aq[37]++;
                b.s.a(e, d)
            }
            ;
            b.p.m = [];
            b.p.n = function(e, d) {
                var c = !1;
                if (!e || !e.aq || !e.aq[29] || 3 > e.aq[29])
                    return !1;
                for (var l = 0; l < d.length; l++) {
                    var f = d[l];
                    -1 === b.a.indexOf(b.p.m, f) && (c = !0,
                    b.p.m.push(f))
                }
                c && (c = {
                    e: 37
                },
                c.q = e.aq[37]++,
                b.s.a(e, c))
            }
            ;
            b.p.b = function(e) {
                var d, c;
                d = e._calcVideoBasedOnContainer ? e.aa.parentNode : e.aa;
                e.elementRect || (e.currentWidth = d.offsetWidth,
                e.currentHeight = d.offsetHeight);
                d = e.currentWidth;
                c = e.currentHeight;
                return 3 > d || 3 > c || b.focus.pageIsPrerendered() || !e.video.isPlaying() && !e.video.pausedByMoat ?
                !0 : !1
            }
            ;
            b.p.o = function(b) {
                var d = 1;
                screen.deviceXDPI ? d = screen.deviceXDPI / screen.systemXDPI : b.devicePixelRatio && "undefined" !== typeof b.mozInnerScreenX && (d = b.devicePixelRatio);
                return {
                    w: d * screen.width,
                    h: d * screen.height
                }
            }
            ;
            b.p.d = function(e) {
                e.counters = {};
                e.counters.laxDwell = new l(function() {
                    return !b.focus.pageIsPrerendered()
                }
                ,"bu","cd");
                e.counters.strictDwell = new l(function(c) {
                    return b.focus.pageIsVisible() || c && c.video && c.video.videoIsFullscreen
                }
                ,"ah","am");
                var d = function(c) {
                    return c && c.video && c.video.isPlaying(c) &&
                    !b.focus.pageIsPrerendered()
                }
                ;
                e.counters.strictPlayTime = new l(function(c) {
                    return c && c.video && c.video.isPlaying() && (b.focus.pageIsVisible() || c.video.videoIsFullscreen)
                }
                ,"dq","dr",function() {
                    return e.ao.duration
                }
                );
                e.counters.laxPlayTime = new l(d,"ds","dt",function() {
                    return e.ao.duration
                }
                );
                e.counters.quartileDelta = new l(d,void 0,void 0);
                e.counters.query = function() {
                    var b = {}, d;
                    for (d in this)
                        if (this.hasOwnProperty(d)) {
                            var e = this[d];
                            "function" === typeof e.query && e.query(b)
                        }
                    return b
                }
                ;
                e.counters.getQs = function() {
                    var b =
                    {}, d;
                    for (d in this)
                        if (this.hasOwnProperty(d)) {
                            var e = this[d];
                            "function" === typeof e.getQs && e.getQs(b)
                        }
                    return b
                }
                ;
                e.counters.update = function(b) {
                    for (var d in this)
                        if (this.hasOwnProperty(d)) {
                            var e = this[d];
                            "function" === typeof e.update && !0 !== b.ep && e.update(b)
                        }
                }
                ;
                b.j.b.azsx("startAdTracking", b.p.g)
            }
            ;
            b.p.p = function() {
                v.z = void 0;
                v.zs = !1;
                v.xz = !1;
                v.dcsx.wsqa("globalScrollevent" + v.dcsx.uid);
                b.a.forEach(b.p.f.a, function(b) {
                    if (b && "function" === typeof b)
                        try {
                            b()
                        } catch (d) {}
                })
            }
            ;
            b.p.h = function(e) {
                if (b.focus.pageIsVisible() &&
                "undefined" === typeof v.z)
                    a: {
                        v.z = new y - za,
                        e = void 0;
                        for (var d in z)
                            if (z.hasOwnProperty(d) && (e = z[d]) && "undefined" !== typeof e.ao) {
                                if (e.ce)
                                    break a;
                                var c = {
                                    e: 4
                                };
                                c.q = e.aq[4]++;
                                c.ai = v.z;
                                b.s.a(e, c);
                                e.ce = !0
                            }
                        try {
                            v.dcsx.wsqa("globalScrollevent" + v.dcsx.uid),
                            v.swde.sxaz("scroll", {
                                callback: b.p.h
                            })
                        } catch (l) {}
                    }
            }
            ;
            b.p.a = function(e, d) {
                var c = {
                    e: 9
                };
                c.q = e.aq[9]++;
                e.ci = +new y;
                d && "object" === typeof d && b.a.forEach(d, function(b, d) {
                    c[d] = b
                });
                b.s.a(e, c)
            }
        })(q);
        (function(b) {
            function l(b, h) {
                function d(b) {
                    return function() {
                        try {
                            b.sending &&
                            (x = b.sending = !1,
                            m = 0,
                            c())
                        } catch (d) {}
                    }
                }
                function c(b, c, e, g) {
                    if (b) {
                        c = {
                            qs: b,
                            jsd: c,
                            fld: e,
                            jso: g
                        };
                        if (0 === b.indexOf("e=21&")) {
                            f(c, !0);
                            return
                        }
                        s.push(c)
                    }
                    if (0 === m && 0 < s.length)
                        if (m++,
                        b = s.shift(),
                        b.sending = !0,
                        b.uid = h.Math.floor(1E10 * h.Math.random()),
                        b.timeoutId = setTimeout(d(b), 2E3),
                        C[b.uid] = b,
                        b.fld && !b.jso && x && r && r.sendMessage)
                            try {
                                r.sendMessage(b)
                            } catch (k) {
                                x = !1,
                                f(b)
                            }
                        else
                            f(b)
                }
                function l() {
                    try {
                        return new k(1,1)
                    } catch (b) {
                        var c = window.document.createElement("img");
                        c.height = 1;
                        c.width = 1;
                        return c
                    }
                }
                function f(b, c) {
                    var d =
                    l();
                    d.toSend = b;
                    c || (d.onerror = function() {
                        var b = this.toSend;
                        b.failedAttempts = "number" == typeof b.failedAttempts ? b.failedAttempts + 1 : 0;
                        var c = (b.jsd + "/pixel.gif?" + b.qs).length;
                        1 > b.failedAttempts ? f(b) : y && c > z && q(b)
                    }
                    ,
                    d.onload = function() {
                        q(this.toSend)
                    }
                    );
                    d.src = b.jsd + "/pixel.gif?" + b.qs
                }
                function q(b) {
                    var d = b && b.uid && C && C[b.uid];
                    if (b && b.qs && "tracer=" == b.qs)
                        return !1;
                    if (d) {
                        C[b.uid] = null ;
                        try {
                            delete C[b.uid]
                        } catch (e) {}
                        try {
                            clearTimeout(d.timeoutId)
                        } catch (f) {}
                        if ("boolean" != typeof d.sending || d.sending)
                            d.sending = !1;
                        else
                            return !1
                    }
                    0 <
                    m && m--;
                    c()
                }
                var s = [], m = 0, r = !1, x = !1, g = !1, k, t = h[b], u = h.Math.floor(1E10 * h.Math.random()), C = {};
                t.yh = {};
                t = t.yh;
                k = h.Image;
                t.yi = function(b, d, e, f) {
                    c(b, d, e, f)
                }
                ;
                t.yk = function(c, d) {
                    r = !0;
                    var f = b + ".yh."
                      , g = {};
                    g.src = "https:" === d ? "https://z.moatads.com/swf/MessageSenderV4.swf" : "http://z.moatads.com/swf/MessageSenderV4.swf";
                    g.flashVars = "r=" + f + "zb&s=" + f + "zc&e=" + f + "zd&td=" + c;
                    return g
                }
                ;
                t.yj = function() {
                    return !1 === r
                }
                ;
                t.xq = function() {
                    return u
                }
                ;
                t.qb = function(b, c) {
                    g = !0;
                    var d = {};
                    d.src = "https:" === c ? "https://z.moatads.com/swf/cap.swf" :
                    "http://z.moatads.com/swf/cap.swf";
                    return d
                }
                ;
                t.qa = function() {
                    return !1 === g
                }
                ;
                t.zb = function() {
                    try {
                        if (!0 === r) {
                            var b = h.document.getElementById("moatMessageSender" + u);
                            b && !b.sendMessage && (b = h.document.getElementById("moatMessageSenderEmbed" + u));
                            b && b.sendMessage && (x = !0,
                            r = b)
                        }
                    } catch (c) {}
                }
                ;
                t.zc = function(b) {
                    try {
                        q(b)
                    } catch (c) {}
                }
                ;
                t.zd = function(b) {
                    try {
                        x = !1,
                        b && b.jsd && s.push(b),
                        q(b)
                    } catch (c) {}
                }
                ;
                var v, y, z = 2083;
                try {
                    v = document.createElement("div"),
                    v.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e",
                    y = "x" === v.innerHTML
                } catch (B) {
                    y =
                    !1
                }
            }
            b.ae = {};
            b.ae.a = function(e) {
                try {
                    if (v.yh)
                        return
                } catch (h) {}
                b.a.cg(l, "'" + b.d.j + "',window", e)
            }
        })(q);
        (function(b) {
            b.af = {};
            b.af.a = function(b) {
                this.label = b;
                this.metrics = {};
                this.set = function(b, h) {
                    return this.metrics[b] = h
                }
                ;
                this.increment = function(b, h, d) {
                    h = "number" !== typeof this.metrics[b] ? this.set(b, h) : this.metrics[b] += h;
                    "number" === typeof d && (h = this.cap(b, h));
                    return h
                }
                ;
                this.cap = function(b, h) {
                    return this.set(b, u.min(this.get(b), h))
                }
                ;
                this.max = function(b, h) {
                    return this.set(b, u.max(this.get(b), h))
                }
                ;
                this.get =
                function(b, h) {
                    return "undefined" === typeof this.metrics[b] ? this.set(b, "undefined" !== typeof h ? h : 0) : this.metrics[b]
                }
            }
            ;
            b.af.b = function(l, e) {
                var h;
                l[e] ? h = l[e] : (h = new b.af.a(e),
                l[e] = h);
                return h
            }
        })(q);
        (function(b) {
            function l(e) {
                if (b.d.x) {
                    var h;
                    if (h = b.ab.a.b) {
                        e = b.n.o(e.aa);
                        var d = e.rect;
                        e = b.n.m(e.visibleRect, h.el, h.et);
                        h = b.n.l(e, {
                            left: h.vl,
                            right: h.vr,
                            top: h.vt,
                            bottom: h.vb
                        });
                        h = 100 * (h.right - h.left) * (h.bottom - h.top) / ((d.width || d.right - d.left) * (d.height || d.bottom - d.top))
                    } else
                        h = !1;
                    return h
                }
                if (b.d.z())
                    return b.ag.a(e);
                if (b.d.v()) {
                    (h = e.safeframe && e.safeframe.geom) || (h = b.a.bo(b.d.u(), ["$sf", "ext", "geom"]),
                    e && !e.safeframe && (e.safeframe = {}),
                    e.safeframe.geom = h);
                    if (d = h && h()) {
                        var c = e.aa;
                        h = c.getBoundingClientRect();
                        e = e.WINDOW || b.a.t(c);
                        e = b.n.k(e);
                        e = b.n.l(h, e);
                        e = b.n.m(e, d.self.l, d.self.t);
                        var l;
                        l = d.self;
                        var f = d.exp;
                        d.par ? (c = d.par.l,
                        l = d.par.t) : (c = f.r > f.l ? l.r - l.w * l.xiv : l.l - f.l,
                        l = 1 === l.yiv || f.t > f.b ? l.t - f.t : l.b - f.b + (f.b - l.h * l.yiv));
                        e = b.n.m(e, -1 * c, -1 * l);
                        c = Number(d.win.l);
                        l = Number(d.win.t);
                        d = {
                            left: c,
                            right: Number(d.win.r),
                            top: l,
                            bottom: Number(d.win.b)
                        };
                        e = b.n.m(e, c, l);
                        d = b.n.l(e, d);
                        h = 100 * (d.right - d.left) * (d.bottom - d.top) / ((h.width || h.right - h.left) * (h.height || h.bottom - h.top))
                    } else
                        h = !1;
                    return h
                }
                return !1
            }
            b.u = {};
            b.u.a = function(b) {
                var h = (b = l(b)) && !isNaN(b) && 50 <= b
                  , h = {
                    isVisible: h,
                    isFullyVisible: h && 98 <= b,
                    percv: b
                };
                80 <= b && (h.isDentsuVisible = !0);
                return h
            }
        })(q);
        (function(b) {
            b.ag = {};
            b.ag.a = function(l) {
                if (!l.amp || !l.amp.started)
                    if (l.amp = {
                        started: !1,
                        unlisten: null ,
                        percentVisible: null ,
                        context: b.a.bo(b.d.y(), ["context"])
                    },
                    b.ag.b(l.amp))
                        l.amp.started =
                        !0,
                        b.j.b.azsx("adKilled", b.ag.c, {
                            condition: function(b) {
                                return l.zr == b.zr
                            },
                            once: !0
                        });
                    else
                        return !1;
                return l.amp.percentVisible
            }
            ;
            b.ag.b = function(l) {
                var e = b.a.bo(b.d.y(), ["context", "observeIntersection"]);
                if (!e)
                    return !1;
                l.unlisten = e(function(b) {
                    return function(d) {
                        var c = d.length;
                        if (!(1 > c)) {
                            d = d[c - 1];
                            c = d.intersectionRect.width * d.intersectionRect.height;
                            d = d.boundingClientRect.width * d.boundingClientRect.height;
                            var e = b.context && b.context.hidden;
                            b.percentVisible = 0 == c || 0 == d || e ? 0 : 100 * c / d
                        }
                    }
                }(l));
                return l.unlisten ?
                !0 : !1
            }
            ;
            b.ag.c = function(b) {
                if (b.amp && b.amp.unlisten && "function" == typeof b.amp.unlisten) {
                    try {
                        b.amp.unlisten()
                    } catch (e) {}
                    b.amp.started = !1
                }
            }
        })(q);
        (function(b) {
            function l(b) {
                if (b instanceof Array || "[object Array]" === {}.toString.call(b))
                    for (var c = 0, d = b.length; c < d; c++)
                        "MOAT_API_REQUEST_EVENT" !== b[c] && e(b[c]);
                else
                    e(b)
            }
            function e(d) {
                var e;
                if ("string" === typeof d)
                    e = {
                        adIds: b.w.j,
                        event: d,
                        timestamp: (new y).getTime(),
                        adVolume: -1
                    };
                else {
                    e = {
                        adIds: b.w.j,
                        event: d.type,
                        timestamp: (new y).getTime(),
                        adVolume: -1
                    };
                    if ("number" ===
                    typeof d.adVolume && !isNaN(d.adVolume))
                        e.adVolume = d.adVolume;
                    else if ("string" === typeof d.adVolume) {
                        var f = parseFloat(d.adVolume, 10);
                        !isNaN(f) && 0 <= f && 1 >= f && (e.adVolume = f)
                    }
                    e.soundTransform = d.soundTransform
                }
                c(e)
            }
            function h(b) {
                this.label = b;
                this.metrics = {};
                this.set = function(b, c) {
                    return this.metrics[b] = c
                }
                ;
                this.increment = function(b, c, d) {
                    c = "number" !== typeof this.metrics[b] ? this.set(b, c) : this.metrics[b] += c;
                    "number" === typeof d && (c = this.cap(b, c));
                    return c
                }
                ;
                this.cap = function(b, c) {
                    return this.set(b, u.min(this.get(b),
                    c))
                }
                ;
                this.max = function(b, c) {
                    return this.set(b, u.max(this.get(b), c))
                }
                ;
                this.get = function(b, c) {
                    return "undefined" === typeof this.metrics[b] ? this.set(b, "undefined" !== typeof c ? c : 0) : this.metrics[b]
                }
            }
            function d(d) {
                this.ad = d;
                this.cbs = d.ao && d.ao.cbs;
                this.state = 1;
                this.volume = -1;
                this.audibleMeasurable = !1;
                this.cbPrefix = "liverailjsvp58397284";
                this.notifyCB = "liverailjsvp58397284_notifyMoatVideo";
                this.canMeasurePageLoad = b.d.a && "undefined" !== typeof window.performance;
                this.receivedAdImpEvent = this.videoIsFullscreen =
                !1;
                this.quartileDeltas = {};
                this.adRemainingTimeDuration = void 0;
                this.counters = {};
                this.getCounter = function(b) {
                    var c;
                    this.counters[b] ? c = this.counters[b] : (c = new h(b),
                    this.counters[b] = c);
                    return c
                }
                ;
                this.maxContinuousAudibleTime = function() {
                    var c = b.o.r(this.ad.zr)
                      , c = this.getCounter(c);
                    return c.max("maxContinuousAudibleTime", c.get("continuousAudibleTime"))
                }
                ;
                this.maxContinuousFullVisAudibleTime = function() {
                    var c = b.o.r(this.ad.zr)
                      , c = this.getCounter(c);
                    return c.max("maxContinuousFullVisAudibleTime", c.get("continuousFullyVisAudibleTime"))
                }
                ;
                this.groupmMaxContinuousFullVisAudibleTime = function() {
                    var c = b.o.r(this.ad.zr)
                      , c = this.getCounter(c);
                    return c.max("groupmMaxContinuousFullVisAudibleTime", c.get("groupmContinuousFullyVisAudibleTime"))
                }
                ;
                this.tagLoadDelay = b.d.o - this.ad.ao.startTime;
                this.quartiles = {};
                var e = this.durationSent = !1;
                this.durationMeasurable = !1;
                var l = void 0
                  , q = 0
                  , g = !1;
                this.onInViewTimeCount = function(b, c, d, e) {
                    d = 0;
                    e = this.getCounter(e);
                    this.isPlayingAndAudible() && e.set("everAudible", !0);
                    0 < c && e.set("everVisible", !0);
                    if (this.isPlayingAndAudible() &&
                    e.get("audibleOnLastCheck", !1))
                        d = u.max(b, 0);
                    else if (this.isPlayingAndAudible() || e.get("audibleOnLastCheck", !1))
                        d = u.max(u.round(b / 2), 0);
                    e.set("audibleOnLastCheck", this.isPlayingAndAudible());
                    e.increment("continuousAudibleTime", d);
                    e.get("audibleOnLastCheck", !1) ? 0 < c && e.set("everAudibleAndVisible", !0) : (e.max("maxContinuousAudibleTime", e.get("continuousAudibleTime")),
                    e.set("continuousAudibleTime", 0));
                    this.ad.ao.duration && 0 < this.ad.ao.duration ? e.increment("audibleTime", d, this.ad.ao.duration) : e.increment("audibleTime",
                    d);
                    this.ad.ao.duration && 0 < this.ad.ao.duration ? e.increment("audibleAndInViewTime", u.min(d, c), this.ad.ao.duration) : e.increment("audibleAndInViewTime", u.min(d, c));
                    this.performPoalCheck()
                }
                ;
                this.performPoalCheck = function() {
                    var c = b.o.i(this.ad.zr);
                    this.poalEnabled && this.disablePoalOnVis && c && c.hadVideo2SecOTS() && (this.poalEnabled = !1,
                    1 == this.state && this.pausedByMoat && (this.pausedByMoat = !1,
                    this.triggerPlayerCallback(d.aa, this.cbs.resumeAd)));
                    this.poalEnabled && (!c.visible() && 0 == this.state && this.cbs ? (this.pausedByMoat =
                    !0,
                    this.triggerPlayerCallback(d.aa, this.cbs.pauseAd)) : c.visible() && 1 == this.state && this.pausedByMoat && this.cbs && (this.pausedByMoat = !1,
                    this.triggerPlayerCallback(d.aa, this.cbs.resumeAd)))
                }
                ;
                this.onFullyInViewTimeCount = function(b, c, d, e) {
                    var f = 0;
                    e = this.getCounter(e);
                    if (this.isPlayingAndAudible() && e.get("audibleFullyVisOnLastCheck", !1))
                        f = b;
                    else if (this.isPlayingAndAudible() || e.get("audibleFullyVisOnLastCheck", !1))
                        f = u.round(b / 2);
                    e.set("audibleFullyVisOnLastCheck", this.isPlayingAndAudible());
                    f = u.max(u.min(f,
                    c), 0);
                    e.increment("continuousFullyVisAudibleTime", f);
                    e.get("audibleFullyVisOnLastCheck", !1) && d || (e.max("maxContinuousFullVisAudibleTime", e.get("continuousFullyVisAudibleTime")),
                    e.set("continuousFullyVisAudibleTime", 0));
                    this.ad.ao.duration && 0 < this.ad.ao.duration ? e.increment("audibleFullyVisIvt", f, this.ad.ao.duration) : e.increment("audibleFullyVisIvt", f)
                }
                ;
                this.onGroupMInViewTimeCount = function(b, c, d, e) {
                    var f = 0;
                    e = this.getCounter(e);
                    if (this.isPlayingAndAudible() && e.get("groupmAudibleFullyVisOnLastCheck",
                    !1))
                        f = b;
                    else if (this.isPlayingAndAudible() || e.get("groupmAudibleFullyVisOnLastCheck", !1))
                        f = u.round(b / 2);
                    e.set("groupmAudibleFullyVisOnLastCheck", this.isPlayingAndAudible());
                    f = u.max(u.min(f, c), 0);
                    e.increment("groupmContinuousFullyVisAudibleTime", f);
                    e.get("groupmAudibleFullyVisOnLastCheck", !1) && d || (e.max("groupmMaxContinuousFullVisAudibleTime", e.get("groupmContinuousFullyVisAudibleTime")),
                    e.set("groupmContinuousFullyVisAudibleTime", 0));
                    this.ad.ao.duration && 0 < this.ad.ao.duration ? e.increment("groupmAudibleFullyVisIvt",
                    f, this.ad.ao.duration) : e.increment("groupmAudibleFullyVisIvt", f)
                }
                ;
                this.isLargeVideoPlayer = function(c) {
                    return c ? "number" === typeof c.currentWidth && "number" === typeof c.currentHeight ? (c = c.currentWidth * c.currentHeight,
                    c >= b.n.b) : !1 : !1
                }
                ;
                this.isAudibleVolume = function(b) {
                    return .1 <= b || 0 > b
                }
                ;
                this.onLoop = function() {
                    var c = b.o.i(this.ad.zr);
                    c && (!this.hadVideoOTS && 5E3 <= c.getInViewTime() && (this.hadVideoOTS = !0,
                    b.s.a(this.ad, {
                        e: 30,
                        q: 0
                    })),
                    c = this.getGroupMQs(),
                    0 < c.length && b.p.n(this.ad, c))
                }
                ;
                this.checkVolume = function(c) {
                    if (!c)
                        return !1;
                    if ("AdVolumeChange" === c.event || "AdStarted" === c.event || "AdImpression" === c.event || -1 != b.a.indexOf(f, c.event)) {
                        var d = c.soundTransform && c.soundTransform.volume;
                        c = c.adVolume;
                        var e = NaN;
                        "number" == typeof d && !isNaN(d) && 0 <= d ? e = "number" != typeof c || isNaN(c) || 0 > c ? d : d * c : "number" != typeof c && isNaN(c) || (e = c);
                        isNaN(e) || (this.volume = e);
                        this.audibleMeasurable = 0 <= this.volume
                    }
                }
                ;
                this.findVideoTags = function(c) {
                    var e = [];
                    c && "IFRAME" == c.nodeName ? (c = b.e.b(c)) && (e = c.body.getElementsByTagName("video")) : e = d.aa.getElementsByTagName("video");
                    return e
                }
                ;
                this.findValidTagDuration = function(c) {
                    var d;
                    b.a.forEach(c, function(b) {
                        if (b && !b.paused && "number" == typeof b.duration && 0 < b.duration)
                            return d = u.floor(1E3 * b.duration),
                            !1
                    });
                    return d
                }
                ;
                this.onJsVideoStart = function(c) {
                    this.ad.localVideoTags = this.findVideoTags(this.ad.aa);
                    0 == this.ad.localVideoTags.length ? this.ad.allVideoTags = d.aa.ownerDocument && d.aa.ownerDocument.getElementsByTagName("video") : (this.videoTagDuration = this.findValidTagDuration(this.ad.localVideoTags),
                    this.ad.allVideoTags = this.ad.localVideoTags);
                    var e = this;
                    b.a.forEach(this.ad.allVideoTags, function(c) {
                        b.g.e(c, "webkitbeginfullscreen", e.onWebkitBeginFullScreen);
                        b.g.e(c, "webkitendfullscreen", e.onWebkitEndFullScreen)
                    });
                    b.g.e(document, "fullscreenchange", this.onFullScreenChangedEvent);
                    b.g.e(document, "webkitfullscreenchange", this.onFullScreenChangedEvent);
                    b.g.e(document, "mozfullscreenchange", this.onFullScreenChangedEvent);
                    b.g.e(document, "MSFullscreenChange", this.onFullScreenChangedEvent);
                    this.onFullScreenChangedEvent()
                }
                ;
                this.onWebkitBeginFullScreen =
                function() {
                    this.videoIsFullscreen = !0
                }
                ;
                this.onWebkitEndFullScreen = function() {
                    this.videoIsFullscreen = !1
                }
                ;
                this.onFullScreenChangedEvent = function() {
                    var c;
                    try {
                        c = document.fullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.msFullscreenElement
                    } catch (d) {}
                    if (c) {
                        var e;
                        if (c == this.ad.aa || (e = b.a.v(c)) && -1 !== b.a.indexOf(e, this.ad.aa))
                            this.videoIsFullscreen = !0
                    } else
                        this.videoIsFullscreen && (this.videoIsFullscreen = !1)
                }
                ;
                this.calculateDuration =
                function(b, c) {
                    var d = "number" === typeof c && !isNaN(c) && 0 < c, e = 4 * b, f;
                    if (d) {
                        var d = !(e < 105 * c / 100 && e > 95 * c / 100)
                          , g = 4E3 < u.abs(e - c);
                        d && g && (f = e)
                    } else
                        f = e;
                    return f || c
                }
                ;
                this.normalizeEventName = function(c) {
                    var d = c.toLowerCase();
                    b.a.forEach(b.w.h, function(b) {
                        if (b.toLowerCase() === d)
                            return c = b,
                            !1
                    });
                    return c
                }
                ;
                this.triggerPlayerCallback = function(c, d) {
                    var e = void 0
                      , f = b.a.bg(arguments).splice(2);
                    try {
                        if (!d || !c || !c[d])
                            return e;
                        e = 0 < f.length ? c[d].apply(c, f) : c[d]()
                    } catch (g) {}
                    return e
                }
                ;
                this.isValidAndUnmesDuration = function() {
                    return !this.durationMeasurable &&
                    "number" == typeof this.ad.ao.duration && 0 < this.ad.ao.duration
                }
                ;
                this.update = function(c) {
                    c && "string" == typeof c.event && (c.event = this.normalizeEventName(c.event));
                    this.receivedAdImpEvent || "AdImpression" != c.event || (this.receivedAdImpEvent = !0);
                    c && c.cbs && (this.cbs = c.cbs,
                    c.adIds && c.adIds.flashVars && c.adIds.flashVars.zpoal && (this.poalEnabled = "1" == c.adIds.flashVars.zpoal || "2" == c.adIds.flashVars.zpoal,
                    this.disablePoalOnVis = "2" == c.adIds.flashVars.zpoal));
                    if ("fullScreen" === c.event || "EnterFullscreen" === c.event)
                        this.videoIsFullscreen =
                        !0;
                    if ("exitFullscreen" === c.event || "ExitFullscreen" === c.event)
                        this.videoIsFullscreen = !1;
                    var f;
                    f = "AdStarted" === c.event || "AdLoaded" === c.event || "AdRemainingTimeChange" === c.event || "AdVideoStart" === c.event || "AdImpression" === c.event;
                    "number" != typeof this.adRemainingTimeDuration && f && "number" === typeof c.adRemainingTime && 0 < c.adRemainingTime && (this.adRemainingTimeDuration = 2700 <= c.adRemainingTime ? u.floor(c.adRemainingTime) : 1E3 * u.floor(c.adRemainingTime));
                    "AdImpression" === c.event && (g = !0);
                    !this.started && -1 < b.a.indexOf(["AdPlaying",
                    "AdImpression", "AdStarted"], c.event) && (c.event = "AdVideoStart");
                    "AdVideoStart" !== c.event && "AdStarted" !== c.event && "AdImpression" !== c.event || d.counters.quartileDelta.reset();
                    this.checkVolume(c);
                    if (!(this.started || "AdVideoStart" !== c.event && "AdImpression" !== c.event || this.started)) {
                        this.started = !0;
                        this.timeAtStartEvent = (new y).getTime();
                        if (b.w.j && !1 === b.w.j.a)
                            this.onJsVideoStart(c);
                        e = !0;
                        this.state = 0;
                        b.j.b.azsx("viewCounterStarted", function(c) {
                            var d = b.o.i(c.zr);
                            d && d.addListener(c.video)
                        });
                        b.b.c(this.ad);
                        this.trackVideoIframeChildren(this.ad, this.ad.aa);
                        b.y.t()
                    }
                    this.started && !this.reachedStart && (this.videoIsFullscreen && (this.ad.ao.initWidth = b.d.ai || 400,
                    this.ad.ao.initHeight = b.d.aj || 400),
                    this.reachedStart = !0);
                    if ("AdVideoComplete" === c.event || "AdPaused" === c.event)
                        this.state = 1;
                    else if ("AdVideoStart" === c.event || "AdPlaying" === c.event || "AdImpression" === c.event)
                        this.state = 0;
                    !this.ad.videoAdStartTime && this.timeAtStartEvent && (this.ad.videoAdStartTime = this.timeAtStartEvent);
                    if ("AdStarted" === c.event || "AdVideoStart" ===
                    c.event)
                        if (this.hadFirstUpdate || (this.startEventDelay = (new y).getTime() - c.timestamp),
                        this.canMeasurePageLoad)
                            try {
                                this.tSincePageLoad = (new y).getTime() - window.top.performance.timing.navigationStart
                            } catch (h) {}
                    if (this.started && n.hasOwnProperty(c.event)) {
                        this.quartileDeltas[c.event] = this.ad.counters.quartileDelta.tCur;
                        this.ad.counters.quartileDelta.reset();
                        if ("AdVideoFirstQuartile" === c.event && !this.durationMeasurable) {
                            this.firstQuartileDuration = this.calculateDuration(this.quartileDeltas.AdVideoFirstQuartile,
                            this.ad.ao.duration);
                            if (b.w.j && !1 === b.w.j.a && (this.videoTagDuration || (f = this.findVideoTags(this.ad.aa),
                            this.videoTagDuration = this.findValidTagDuration(f)),
                            !this.durationMeasurable && this.videoTagDuration && 0 < this.videoTagDuration)) {
                                var l = (f = this.calculateDuration(.25 * this.videoTagDuration, this.ad.ao.duration)) && 0 < f && (33E3 < f && f <= this.firstQuartileDuration || 33E3 >= f);
                                f == this.videoTagDuration && l && (this.ad.ao.duration = f,
                                this.durationMeasurable = e = !0)
                            }
                            this.isValidAndUnmesDuration() && this.firstQuartileDuration ===
                            this.ad.ao.duration && 0 < this.firstQuartileDuration && (this.ad.ao.duration = this.firstQuartileDuration,
                            this.durationMeasurable = e = !0);
                            this.isValidAndUnmesDuration() && "number" == typeof this.adRemainingTimeDuration && (f = this.calculateDuration(.25 * this.adRemainingTimeDuration, this.ad.ao.duration)) && 0 < f && f == this.ad.ao.duration && (this.ad.ao.duration = u.floor(f),
                            this.durationMeasurable = e = !0)
                        }
                        "AdVideoMidpoint" === c.event && !this.durationMeasurable && (this.midpointDuration = this.calculateDuration(this.quartileDeltas.AdVideoMidpoint,
                        this.ad.ao.duration),
                        0 < this.midpointDuration || 0 < this.firstQuartileDuration) && (f = 15E3 < this.firstQuartileDuration && 15E3 < this.midpointDuration ? u.min(this.firstQuartileDuration, this.midpointDuration) : 15E3 >= this.firstQuartileDuration || 15E3 >= this.midpointDuration ? u.max(this.firstQuartileDuration, this.midpointDuration) : 0 < this.midpointDuration ? this.midpointDuration : this.firstQuartileDuration,
                        this.ad.ao.duration = f,
                        this.durationMeasurable = e = !0);
                        this.state = 0;
                        var r = b.o.n(this.ad.zr);
                        f = !1;
                        l = !0;
                        r.strict ? f = r.strict.visible() :
                        r.pscope ? b.i && b.i.a || b.h && b.h.a() ? f = r.pscope.visible() : l = !1 : l = !1;
                        r = this.isAudibleVolume(this.volume);
                        f = l ? f && r ? 3 : f ? 1 : r ? 2 : 0 : 4;
                        l = n[c.event];
                        "undefined" === typeof this.quartiles[l] && (this.quartiles[l] = f,
                        l = {
                            e: 29
                        },
                        l.q = d.aq[29]++,
                        b.s.a(d, l));
                        c.calculatedQuartileState = f
                    }
                    this.started && b.w.dispatchEvent(this, c);
                    this.started && "AdVideoComplete" === c.event && (this.reachedComplete = !0,
                    b.y.t());
                    this.hadFirstUpdate || (hadFirstUpdate = !0);
                    !this.durationSent && e && this.durationMeasurable && (this.durationSent = !0,
                    l = {
                        e: 9
                    },
                    l.q =
                    d.aq[9]++,
                    b.s.a(this.ad, l));
                    if (this.started && !this.stopped && ("AdStopped" === c.event || "AdVideoComplete" === c.event || "AdSkipped" === c.event)) {
                        this.stopped = "AdSkipped" !== c.event;
                        l = {};
                        c = this.stopped ? 28 : 33;
                        l.e = c;
                        l.q = d.aq[c]++;
                        b.s.a(this.ad, l);
                        try {
                            D.parentNode.removeChild(D)
                        } catch (q) {}
                        b.p.e(this.ad);
                        ba()
                    }
                }
                ;
                this.trackVideoIframeChildren = function(c, d) {
                    for (var e = d.getElementsByTagName("iframe"), f, g = 0, h = e.length; g < h; g++)
                        f = e[g],
                        b.a.ap(f) && b.r.e(c, f)
                }
                ;
                this.isPlayingAndAudible = function() {
                    return this.isPlaying() &&
                    this.isAudible()
                }
                ;
                this.isPlaying = function() {
                    return 0 === this.state
                }
                ;
                this.isAudible = function() {
                    return this.isAudibleVolume(this.volume)
                }
                ;
                this.getGroupMQs = function() {
                    var c = [];
                    if (this.durationMeasurable) {
                        var d = b.o.i(this.ad.zr)
                          , e = d && d.getFullInviewTimeTotal && d.getFullInviewTimeTotal()
                          , f = d && d.getInViewTime && d.getInViewTime()
                          , g = 98 * this.ad.ao.duration / 100;
                        if (d = d && this.getCounter(d.getLabel()))
                            d.get("groupmAudibleFullyVisIvt") >= .5 * g && c.push("hd"),
                            d.get("groupmAudibleFullyVisIvt") >= u.min(.5 * g, 15E3) && c.push("hl"),
                            d.get("audibleTime") >= g && c.push("he"),
                            f >= g && c.push("hf"),
                            d.get("audibleTime") >= g && f >= g && c.push("hg"),
                            0 == d.get("audibleTime") && f >= g && c.push("hi"),
                            e >= g / 2 && c.push("hj"),
                            e >= g && c.push("hm"),
                            d.get("audibleFullyVisIvt") >= g && c.push("hk")
                    }
                    return c
                }
                ;
                this.getQs = function(c) {
                    data = c || {};
                    var d = (c = b.o.i(this.ad.zr)) && this.getCounter(c.getLabel());
                    this.receivedAdImpEvent && (data.fc = "1");
                    for (var e = this.getGroupMQs(), f = 0; f < e.length; f++)
                        data[e[f]] = 1;
                    this.durationMeasurable ? (data.dh = this.ad.ao.duration,
                    data.hc = 1) : (e = this.firstQuartileDuration ||
                    this.midpointDuration,
                    21 == data.e && 0 < e ? (data.dh = e,
                    data.hc = 1) : data.hc = 0);
                    d && (data.er = d.get("audibleTime"),
                    data.es = d.get("audibleTimePrev"),
                    data.gs = d.get("audibleAndInViewTime"),
                    data.gt = d.get("audibleAndInViewTimePrev"),
                    d.set("audibleTimePrev", d.get("audibleTime")),
                    d.set("audibleAndInViewTimePrev", d.get("audibleAndInViewTime")),
                    data.eu = d.get("audibleFullyVisIvt"),
                    data.ev = d.get("audibleFullyVisIvtPrev"),
                    d.set("audibleFullyVisIvtPrev", d.get("audibleFullyVisIvt")));
                    this.audibleMeasurable && (data.et = 1);
                    data.dp =
                    this.tagLoadDelay;
                    this.started && (data.dz = 1);
                    this.stopped && (data.ea = 1);
                    b.a.bh(data, "du", this.startEventDelay);
                    this.canMeasurePageLoad && (data.eb = 1);
                    b.a.bh(data, "ec", this.tSincePageLoad);
                    "undefined" != typeof this.ad.ao.gc && "undefined" != typeof this.ad.ao.gd && "undefined" != typeof this.ad.ao.gr && "undefined" != typeof this.ad.ao.gy && (data.gc = this.ad.ao.gc,
                    data.gd = this.ad.ao.gd,
                    data.gr = this.ad.ao.gr,
                    data.gy = this.ad.ao.gy);
                    this.ad.ao.moatLoaderHash && this.ad.ao.moatSwfHash && (data.ed = this.ad.ao.moatLoaderHash,
                    data.ee =
                    this.ad.ao.moatSwfHash);
                    !0 === this.hadVideoOTS && (data.ek = 1);
                    c && c.hadVideo2SecOTS() && this.durationMeasurable && (l || (l = c && c.getInViewTime()),
                    data.fh = l,
                    data.fi = c.getInViewTime(),
                    data.fj = q,
                    q = c.getInViewTime());
                    g && (data.fk = 1);
                    this.ad.ao.initWidth && this.ad.ao.initHeight && (data.ha = this.ad.ao.initWidth,
                    data.hb = this.ad.ao.initHeight);
                    for (var h in this.quartiles)
                        this.quartiles.hasOwnProperty(h) && (data[h] = this.quartiles[h])
                }
                ;
                this.notify = function() {
                    var b = this.ad.aa, d, e;
                    this.cbs ? (d = this.cbs.shiftVideoEvent,
                    e = this.cbs.getQueueLength) :
                    (d = this.cbPrefix + "_shiftVideoEvent",
                    e = this.cbPrefix + "_getQueueLength");
                    var f = 0, g;
                    try {
                        g = b[e] && b[e]()
                    } catch (h) {
                        return
                    }
                    for (; 0 < g && 50 > f; ) {
                        var l;
                        try {
                            l = b[d] && b[d]()
                        } catch (m) {
                            break
                        }
                        l && c(l);
                        f++;
                        g--
                    }
                }
                ;
                this.remove = function(c) {
                    b.a.forEach(c.allVideoTags, function(c) {
                        b.g.f(c, "webkitbeginfullscreen", this.onWebkitBeginFullScreen);
                        b.g.f(c, "webkitendfullscreen", this.onWebkitEndFullScreen)
                    });
                    b.g.f(document, "fullscreenchange", this.onFullScreenChangedEvent);
                    b.g.f(document, "webkitfullscreenchange", this.onFullScreenChangedEvent);
                    b.g.f(document, "mozfullscreenchange", this.onFullScreenChangedEvent);
                    b.g.f(document, "MSFullscreenChange", this.onFullScreenChangedEvent);
                    window[c.video.notifyCB] = void 0;
                    window.liverailjsvp58397284_moatElToTrack = void 0;
                    try {
                        delete window[c.video.notifyCB],
                        delete window.liverailjsvp58397284_moatElToTrack
                    } catch (d) {}
                }
                ;
                b.j.b.azsx("adKilled", this.remove, {
                    once: !0,
                    condition: function(b) {
                        return d.zr == b.zr
                    }
                })
            }
            function c(b) {
                for (var c in z)
                    if (z.hasOwnProperty(c)) {
                        var d = z[c];
                        b && b.adIds && d.ao.startTime === b.adIds.startTime &&
                        d.video.update(b)
                    }
            }
            b.w = {};
            b.w.h = "AdStarted AdLoaded AdStopped AdSkipped AdRemainingTimeChange AdVolumeChange AdImpression AdVideoStart AdVideoFirstQuartile AdVideoMidpoint AdVideoThirdQuartile AdVideoComplete AdPaused AdPlaying".split(" ");
            var n = {
                AdVideoStart: "ef",
                AdVideoFirstQuartile: "eg",
                AdVideoMidpoint: "eh",
                AdVideoThirdQuartile: "ei",
                AdVideoComplete: "ej"
            };
            b.w.d = n;
            var f = ["AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete"];
            b.w.b = 2E3;
            b.w.a = 2E3;
            b.w.i = 2E3;
            b.w.c = 500;
            b.w.k = function(c) {
                var d = {
                    complete: "AdVideoComplete",
                    firstquartile: "AdVideoFirstQuartile",
                    impression: "AdImpression",
                    loaded: "AdLoaded",
                    midpoint: "AdVideoMidpoint",
                    pause: "AdPaused",
                    skip: "AdSkipped",
                    start: "AdVideoStart",
                    thirdquartile: "AdVideoThirdQuartile",
                    volumeChange: "AdVolumeChange"
                }, e;
                for (e in google.ima.AdEvent.Type)
                    c.adsManager.addEventListener(google.ima.AdEvent.Type[e], function(e) {
                        if (!b.w.j.moatClientLevel3) {
                            var f = e && e.getAd && e.getAd()
                              , h = z[b.w.j.adNum];
                            f && f.getAdId && (c.currentAd = f,
                            b.w.j =
                            h.ao = b.w.l(c, !0),
                            b.z.ax(b.w.j),
                            b.s.b(17, b.w.j))
                        }
                        b.w.e.sendEvent({
                            type: d[e.type] || e.type,
                            adVolume: c.adsManager.getVolume()
                        })
                    })
            }
            ;
            b.w.m = function(b) {
                return !1
            }
            ;
            b.w.g = function(c) {
                if (c.ao.isUsingVideoJsApi)
                    b.w.e.sendEvent = b.g.k(l),
                    b.w.e.imaSDK ? b.w.e.sendEvent("MOAT_API_REQUEST_EVENT") : b.w.e.dispatchEvent("MOAT_API_REQUEST_EVENT");
                else {
                    window[c.video.notifyCB] = function() {
                        try {
                            c.video.notify()
                        } catch (b) {}
                    }
                    ;
                    var d = c.aa, e;
                    e = c.ao.cbs ? c.ao.cbs.registerCallback : c.video.cbPrefix + "_registerCallback";
                    try {
                        if (d[e])
                            d[e](c.video.notifyCB)
                    } catch (f) {}
                    c.video.notify()
                }
            }
            ;
            b.w.f = function(b, c) {
                b.video = new d(b)
            }
            ;
            var q = [];
            b.w.dispatchEvent = function(b, c) {
                for (var d = 0, e = q.length; d < e; d++)
                    q[d].call(null , b, c)
            }
            ;
            b.w.n = function(b) {
                q.push(b)
            }
        })(q);
        (function(b) {
            b.v = {};
            b.v.c = 242500;
            b.v.d = 1;
            b.v.e = function(l) {
                return b.d.a || b.h && b.h.a && b.h.a() || b.i && b.i.a && l && l.periscopeManager && l.periscopeManager.fullyMeasurable
            }
            ;
            b.v.f = function(l) {
                return b.a.bv(l) > b.v.c
            }
            ;
            b.v.g = function(b) {
                return b && b.ao ? "slave" == b.ao.moatClientAT ? !0 : !1 : !1
            }
            ;
            b.v.h = function(b) {
                return b && b.ao ? "cpc" == b.ao.moatClientBT ? !0 :
                !1 : !1
            }
            ;
            b.v.i = function(b) {
                return b && b.ao ? "cpcv" == b.ao.moatClientBT ? !0 : !1 : !1
            }
            ;
            b.v.j = function(b) {
                return b && b.ao ? "flatrate" == b.ao.moatClientBT ? !0 : !1 : !1
            }
            ;
            b.v.k = function(b) {
                return b && b.ao ? "skin" == b.ao.moatClientAT || "hpto" == b.ao.moatClientAT ? !0 : !1 : !1
            }
            ;
            b.v.b = function(l) {
                if (!l || !l.aa)
                    return !1;
                if ("undefined" != typeof l.er)
                    return l.er;
                l.video ? !b.v.e(l) || b.v.i(l) && !l.video.reachedComplete || (l.er = !0) : b.v.g(l) || b.v.h(l) || b.v.j(l) ? l.er = !1 : b.v.k(l) || b.v.f(l) ? l.er = !0 : b.v.e(l) && b.o.t(l, b.v.d, !0) && (l.er = !0);
                return l.er ||
                !1
            }
            ;
            b.v.a = function(l) {
                if (!l || l.SENT_FIT && l.et || !b.v.e(l))
                    return !1;
                var e, h, d = b.o.r(l.zr);
                l.SENT_FIT || (e = b.o.k(l, d, "hadFIT"));
                l.et || (h = b.o.k(l, d, "hadFullOTS"));
                if (e || h)
                    b.p.l(l),
                    l.SENT_FIT = l.SENT_FIT || !!e,
                    l.et = l.et || !!h;
                return e || h
            }
        })(q);
        (function(b) {
            b.ah = {};
            b.ah.a = "1.2";
            b.ah.prefix = "MSFAPI";
            b.ah.b = {};
            b.ah.c = {};
            b.ah.d = u.floor(u.random() * u.pow(10, 12));
            b.ah.e = !1;
            b.ah.f = /([a-z]+)#([a-z0-9.-]+)#([0-9]+)#([a-z]+)#([0-9]+)#(.+)/i;
            b.ah.g = /@([a-z0-9]+)@@(.*)/i;
            b.ah.h = function(l) {
                if (l && (l["Moat#PML#" + b.ah.a] ?
                b.ah.i = l["Moat#PML#" + b.ah.a].id : (l["Moat#PML#" + b.ah.a] = {
                    id: u.floor(u.random() * u.pow(10, 12))
                },
                b.ah.i = l["Moat#PML#" + b.ah.a].id,
                v.dcsx.ynds(l, "message", "message-" + b.ah.i, "ME-" + b.ah.a)),
                !b.ah.e)) {
                    b.ah.e = !0;
                    var e = v.swde.azsx("message-" + b.ah.i, b.ah.j);
                    b.j.b.azsx("allLocalAdsKilled", function() {
                        v.swde.sxaz("message-" + b.ah.i, {
                            id: e
                        })
                    }, {
                        once: !0
                    })
                }
            }
            ;
            b.ah.k = function(l) {
                l && l && l["Moat#PML#" + b.ah.a] && (l["Moat#PML#" + b.ah.a] = !1,
                b.g.f(l, "message", b.ah.j))
            }
            ;
            b.ah.l = function(l) {
                return b.ah.prefix + "#" + l + "#"
            }
            ;
            b.ah.m = function(l) {
                var e =
                l.match(b.ah.f);
                l = !1;
                e && 7 == e.length && (l = {
                    prefix: e[1],
                    version: e[2],
                    uid: e[3],
                    type: e[4],
                    request: e[5],
                    data: e[6]
                },
                (e = l.data.match(b.ah.g)) && 3 == e.length && (l.cmd = e[1],
                l.arg = e[2]));
                return l
            }
            ;
            b.ah.j = function(l) {
                if (!(l && l.origin && l.data && "string" === typeof l.data))
                    return !1;
                if ((msgData = b.ah.m(l.data)) && (!msgData || msgData.uid != b.ah.d.toString()) && msgData.version == b.ah.a && (l.msgData = msgData,
                msgData.request in b.ah.c && (l.triggerCallback = function() {
                    b.ah.c[msgData.request] && (b.ah.c[msgData.request](l),
                    b.ah.c[msgData.request] =
                    null ,
                    delete b.ah.c[msgData.request])
                }
                ),
                b.ah.b[msgData.type]))
                    for (var e = 0, h = b.ah.b[msgData.type].length; e < h; e++)
                        b.ah.b[msgData.type][e](l)
            }
            ;
            b.ah.n = function(l, e) {
                b.ah.b[l] = [e]
            }
            ;
            b.ah.o = function(l, e, h, d) {
                "object" == typeof e && (e = b.a.as(e));
                d = d || u.floor(1E10 * u.random());
                "function" == typeof h && (b.ah.c[d] = h);
                l = b.ah.l(b.ah.a) + b.ah.d + "#" + l + "#" + d + "#" + e;
                return {
                    request: d,
                    msg: l
                }
            }
            ;
            b.ah.p = function(l, e, h, d, c) {
                "object" == typeof h && (h = b.a.as(h));
                return b.ah.o(l, "@" + e + "@@" + h, d, c)
            }
            ;
            b.ah.q = function(l, e, h) {
                try {
                    if (!l || !l ||
                    !l.source)
                        return !1;
                    l.source.postMessage(b.ah.o(l.msgData.type, e, h, l.msgData.request).msg, "*")
                } catch (d) {
                    return !1
                }
                return !0
            }
            ;
            b.ah.r = function(l, e, h) {
                try {
                    var d = b.e.h(e || window.top);
                    if (!d)
                        return b.g.h(function() {
                            b.ah.r(l, e, h)
                        }, 200);
                    for (var c = 0; c < d.length; c++)
                        h && d[c] == window || d[c].postMessage(l, "*")
                } catch (n) {}
            }
            ;
            b.j.b.azsx("modulesReady", b.a.cc([window], b.ah.h), {
                once: !0
            })
        })(q);
        (function(b) {
            b.ab = {};
            b.ab.b = {};
            b.ab.b.a = "CF";
            b.ab.b.b = "CNF";
            b.ab.b.c = "CNS";
            b.ab.a = {};
            b.ab.a.c = !1;
            b.ab.a.d = [];
            b.ab.c = {};
            b.ab.d = {};
            var l = !1;
            b.ab.a.a = function() {
                var e = b.ab.e();
                b.ab.a.c || b.d.a || (e = b.ah.p("moatframe", "check", e, function(e) {
                    (e = b.a.at(e.msgData.data)) && e.available && !b.ab.a.c && (b.d.x = !0,
                    b.ab.a.c = !0,
                    e = "MoatFrame#geom#" + (new y).getTime(),
                    b.g.b(b.ab.a.e, null , 200, e),
                    b.ab.a.d.push(e))
                }),
                b.ah.r(e.msg, !1, !0))
            }
            ;
            b.ab.f = function() {
                b.ah.n("moatframe", b.ab.g);
                b.ah.r(b.ah.o("moatframe", "ping").msg, !1, !0)
            }
            ;
            b.ab.h = function(e) {
                return "undefined" !== typeof e && b.ab.d && b.ab.d[e] ? (b.ab.d[e] = null ,
                !0) : !1
            }
            ;
            b.ab.e = function() {
                var e = b.d.al
                  , h =
                b.d.am;
                return e && h ? {
                    width: e,
                    height: h
                } : !1
            }
            ;
            b.ab.i = function() {
                return b.d.a
            }
            ;
            b.ab.j = function(e) {
                var h = !1;
                b.a.forEach(b.ab.b, function(b) {
                    if (b == e)
                        return h = !0,
                        !1
                });
                return h
            }
            ;
            b.ab.g = function(e) {
                var h = e.msgData.cmd || e.msgData.data;
                if (h)
                    if (e.triggerCallback)
                        e.triggerCallback(e);
                    else if (b.ab.c[h])
                        b.ab.c[h](e);
                    else
                        b.ab.j(h) || b.ah.q(e, b.ab.b.b)
            }
            ;
            b.ab.k = function(e, h) {
                if (!e || !h)
                    return !1;
                for (var d = b.e.f(window).pop(), c = b.e.j(e, 10), l = !1, f = !1, q = null , s = null , m, r = c.length - 1; 0 <= r; r--)
                    if (c[r] == d && (l = !0),
                    l && !b.e.i(c[r])) {
                        s =
                        c[r];
                        break
                    }
                l && s && ((q = s && s.parent && s.parent.document) && (m = b.e.c(q, s)),
                m && (d = m.offsetWidth,
                c = m.offsetHeight,
                d == h.width && c == h.height ? f = !0 : (d *= c,
                c = h.width * h.height,
                f = .98 <= u.min(d, c) / u.max(d, c))));
                return {
                    isNested: f,
                    iframe: m,
                    iframeParentDoc: q
                }
            }
            ;
            b.ab.l = function(e) {
                return e && e.parent && b.e.c(e.parent.document, e)
            }
            ;
            b.ab.m = function(e) {
                (e = "undefined" !== typeof e && b.ab.d && b.ab.d[e]) && "boolean" == typeof e.isWithinReach && (e.isNested && !e.iframeParentDoc && (e.isWithinReach = !1),
                e.isNested || e.win && !b.e.g(e.win) || (e.isWithinReach =
                !1));
                return e
            }
            ;
            b.ab.n = function(e, h, d, c) {
                var l, f, q = {
                    isNested: !1,
                    iframe: null ,
                    iframeParentDoc: null
                };
                if ((l = b.ab.m(d)) && l.isWithinReach)
                    return !0;
                f = b.e.l(e, h, !0);
                l && "undefined" == typeof l.isWithinReach ? l.isWithinReach = f : (f ? h = b.ab.l(h) : (q = b.ab.k(h, c),
                (h = q.iframe) && (f = !0)),
                l = {
                    dimensions: c,
                    iframe: h,
                    iframeParentDoc: q.iframeParentDoc,
                    isNested: q.isNested,
                    isWithinReach: f,
                    win: e
                },
                b.ab.d[d] = l);
                return l.isWithinReach
            }
            ;
            b.ab.a.e = function() {
                if (!l) {
                    l = !0;
                    var e = b.ah.o("moatframe", "geom", function(e) {
                        l = !1;
                        b.ab.j(e.msgData.data) ||
                        (b.ab.a.b = b.a.at(e.msgData.data))
                    });
                    b.ah.r(e.msg, !1, !0)
                }
            }
            ;
            b.ab.c.ping = function(e) {
                !b.d.a && b.d.ar() && b.ab.a.a()
            }
            ;
            b.ab.c.check = function(e) {
                var h = {}
                  , d = e.msgData.arg && b.a.at(e.msgData.arg);
                b.ab.n(window, e.source, e.msgData.uid, d) && b.ab.i() ? h.available = !0 : h.available = !1;
                b.ah.q(e, h)
            }
            ;
            b.ab.c.geom = function(e) {
                if (b.ab.n(window, e.source, e.msgData.uid) && b.ab.i()) {
                    var h = b.ab.d && b.ab.d[e.msgData.uid] && b.ab.d[e.msgData.uid].iframe;
                    if (h && (h = b.n.o(h)) && h.visibleRect && h.rect) {
                        b.ah.q(e, {
                            w: h.cumulRect.width,
                            h: h.cumulRect.height,
                            vl: h.visibleRect.left,
                            vt: h.visibleRect.top,
                            vr: h.visibleRect.right,
                            vb: h.visibleRect.bottom,
                            el: h.cumulRect.left,
                            et: h.cumulRect.top,
                            er: h.cumulRect.right,
                            eb: h.cumulRect.bottom
                        });
                        return
                    }
                    b.ah.q(e, b.ab.b.a)
                } else
                    b.ah.q(e, b.ab.b.c)
            }
        })(q);
        q.j.b.zaxs("modulesReady", v);
        var Ja = q.focus.pageIsVisible()
          , E = "moatFoundLIVERAILJSVPAID1"
          , I = "__moat__LIVERAILJSVPAID1";
        q.a.ae().isInApp || q.ab.f();
        var D = q.a.aw();
        q.d.protocol = q.a.bb(D);
        q.d.ab && (q.d.ab = q.d.ab.replace(/^js/i, "z"));
        "string" === typeof q.d.protocol && (S =
        ("https:" === q.d.protocol ? q.d.protocol : "http:") + "//video.moatads.com");
        S || (S = "//video.moatads.com");
        q.ae.a(M);
        var Da = q.a.aw(), Ea = !1, R;
        q.g.a(function() {
            if (Ea || Da && Da.parentNode && "HEAD" !== Da.parentNode.nodeName)
                return q.a.bd("afs.moatads.com"),
                !0;
            if (document.body && !Ea)
                return R = R || document.createElement("div"),
                R.style.position = "absolute",
                R.style.overflow = "hidden",
                document.body.insertBefore(R, document.body.childNodes[0] || null ),
                Ea = !0,
                document.body.removeChild && document.body.removeChild(R),
                q.a.bd("afs.moatads.com"),
                !0
        }, 500, 15);
        var Ha = function() {
            v.zs && v.dcsx && (v.dcsx.engn({
                listenerName: "unloadFn" + q.d.l.a
            }),
            v.dcsx.engn({
                listenerName: "beforeunloadFn" + q.d.l.a
            }));
            aa || (aa = !0,
            q.b.a())
        }
        , Ca;
        Ca = na ? M.location.href : M.document.referrer;
        q.a.r(Ca) || q.a.r(window.location.href);
        if (!D)
            return !1;
        q.m = D;
        q.a.bc(D);
        (function(b) {
            function l(b) {
                return b = 1E3 > parseFloat(b, 10) ? 1E3 * parseFloat(b, 10) : parseFloat(b, 10)
            }
            function e(b) {
                return b.imaSDK ? h(b) : d(b)
            }
            function h(b, c) {
                var d = {}, e = b.adsManager && b.adsManager.getCurrentAd && b.adsManager.getCurrentAd() ||
                !1, f, g, h;
                c && (e = b.currentAd);
                if (!e)
                    return q.f.b(d),
                    d;
                f = e.getDuration();
                h = e.getAdId();
                (g = e.getWrapperAdSystems()) && g.length && 0 < g.length && "GDFP" === g[0] && (e = e.getWrapperAdIds(),
                h = e[0]);
                d.moatClientLevel1 = "-";
                d.moatClientLevel2 = "-";
                d.moatClientLevel3 = h || "-";
                d.moatClientLevel4 = "-";
                d.moatClientSlicer1 = b.ids.slicer1 || "-";
                d.moatClientSlicer2 = b.ids.slicer2 || "-";
                d.duration = l(f);
                d.startTime = q.d.o;
                q.f.b(d);
                return d
            }
            function d(b) {
                var c = b && b.adData && b.adData.ids, d = {}, e = l(b.adData.duration), f = /^level([0-9]+)$/, g =
                /^slicer([0-9]+)$/, h, n;
                for (n in c)
                    if (c.hasOwnProperty && c.hasOwnProperty(n))
                        if (h = n.match(f))
                            d["rawMoatClientLevel" + h[1]] = c[n],
                            d["moatClientLevel" + h[1]] = c[n];
                        else if (h = n.match(g))
                            d["rawMoatClientSlicer" + h[1]] = c[n],
                            d["moatClientSlicer" + h[1]] = c[n];
                d.duration = e;
                d.startTime = q.d.o;
                b.adData.hasOwnProperty("fullScreen") ? d.fullScreen = Number(b.adData.fullScreen) : q.a.ae().isInApp && (b = q.a.af(),
                (e = document && document.getElementById("mianahwvc")) && b.w === e.offsetWidth && b.h === e.offsetHeight && (d.fullScreen = !0),
                e && (10 >=
                e.offsetWidth || 10 >= e.offsetHeight) && (e.style.height = "176px",
                e.style.width = "320px"));
                q.f.b(d);
                (d = q.f.f(d)) && "16708" === d.zMoatLROwnerId && (d.zMoatLRPubVert = d && d.zMoatLRPubID && d.zMoatLRVertical ? d.zMoatLRPubID + "_" + d.zMoatLRVertical : "Value Not Defined");
                q.a.forEach("zMoatLROwnerId zMoatLRMuted zMoatLRAutoPlay zMoatLRDuration zMoatLRContent zMoatLRPartners zMoatLRVideoId zMoatLRVertical zMoatLRDomain zMoatLRWidth zMoatLRHeight zMoatLRPubID zMoatLRPubVert".split(" "), function(b) {
                    d[b] || (d[b] = c[b] || "-")
                });
                d = q.f.h(d);
                q.f.m && q.f.m(d);
                return d
            }
            function c(b, c) {
                var d, e, f;
                if (c) {
                    b && b.moatCbs && window[b.moatCbs] ? (e = window[b.moatCbs],
                    d = window[e.moatElToTrack]) : d = window.liverailjsvp58397284_moatElToTrack;
                    if (!d)
                        return !1;
                    if (e) {
                        if (e.getMoatIds && d[e.getMoatIds]) {
                            try {
                                f = d[e.getMoatIds]()
                            } catch (g) {}
                            f && (f.cbs = e)
                        }
                    } else if (d.liverailjsvp58397284_getMoatIds)
                        try {
                            f = d.liverailjsvp58397284_getMoatIds()
                        } catch (h) {}
                    if (f)
                        f.isUsingVideoJsApi = !1,
                        f.isFlashVideo = !0;
                    else
                        return !1
                } else if (f = b.adData.ids,
                d = b.adData.ids.moateltotrack,
                f.cbs = {
                    pauseAd: f.cbPrefix + "_pauseAd",
                    resumeAd: f.cbPrefix + "_resumeAd"
                },
                f.isUsingVideoJsApi = !0,
                f.isFlashVideo = !0,
                !d)
                    return !1;
                q.f.b(f);
                q.f.g(f);
                f = q.f.h(f);
                q.f.m && q.f.m(f);
                q.w.j = f;
                q.z.ay(f);
                (f.usingWrapper || f.usingMoatWrapperSwf) && q.s.b(17, f);
                q.b.b(d, !1, !1, !1, f);
                return !0
            }
            T = v.h;
            v.h++;
            v.i[T] = !1;
            q.p.j();
            q.d.l.b || (q.d.l.b = !0,
            v.dcsx.ynds(window, "unload", "unload-" + q.d.l.a, "unloadFn" + q.d.l.a),
            v.dcsx.ynds(window, "beforeunload", "unload-" + q.d.l.a, "beforeunloadFn" + q.d.l.a));
            v.swde.azsx("unload-" + q.d.l.a, Ha, {
                once: !0
            });
            q.j.b.azsx("allLocalAdsKilled", function() {
                v.swde.sxaz("unload-" + q.d.l.a, {
                    callback: Ha
                })
            }, {
                once: !0
            });
            q.g.g(q.r.d, 100);
            q.a.k() && q.g.h(ba, 3E5);
            "undefined" === typeof b && (b = q.f.d(D));
            "undefined" === typeof b && (b = {});
            q.g.h(function() {
                !1 === v.i[T] && (q.s.b(11, b),
                ba())
            }, 1E4);
            q.w.l = h;
            q.w.n(function(b, c) {
                "AdVideoComplete" == c.event && 3 === c.calculatedQuartileState && (b.ad.reachedAvoc = !0,
                q.y.t())
            });
            q.w.e = function(b) {
                if (D) {
                    var c = D.src.match(/#(_moatTracker\d+|_moatApi\d+)/);
                    if (c && c[1]) {
                        var d = b[c[1]];
                        if (d)
                            return b[c[1]] =
                            !1,
                            d
                    }
                }
            }(window);
            if (q.w.e)
                if (q.w.e.adData && q.w.e.adData.ids && q.w.e.adData.ids.usingMoatWrapperSwf)
                    c(q.w.e, !1);
                else if (q.w.e.adData && q.w.e.adData.ids && q.w.e.adData.ids.usingMoatAnalyticsSwf)
                    c(q.w.e, !1);
                else {
                    var n = e(q.w.e);
                    n.isUsingVideoJsApi = !0;
                    n.isFlashVideo = !1;
                    q.w.j = n;
                    q.w.e.imaSDK && q.w.k(q.w.e);
                    q.z.ay(n);
                    q.w && q.w.e && q.w.e.imaSDK ? q.w.j && q.w.j.moatClientLevel3 && q.s.b(17, n) : q.s.b(17, n);
                    var f = window.liverailjsvp58397284_moatElToTrack;
                    f ? (q.b.b(f, !1, !1, !1, n),
                    window.liverailjsvp58397284_moatElToTrack = void 0) :
                    (f = q.w.m(D.parentNode)) ? q.b.b(f, !1, !1, !1, n) : q.b.b(D.parentNode, !1, !1, !1, n)
                }
            else if (b.moatCbs) {
                if (!c(b, !0))
                    return !1
            } else if (window.liverailjsvp58397284_moatElToTrack && !c(b, !0))
                return !1
        })();
        q.j.b.azsx("allLocalAdsKilled", Ga, {
            once: !0
        })
    })(Date, Math)
} catch (e$$137) {
    var ct = (new Date).getTime();
    window["Moat#ETS"] || (window["Moat#ETS"] = ct);
    window["Moat#EMC"] || (window["Moat#EMC"] = 0);
    var et = ct - window["Moat#ETS"]
      , hourElapsed = 36E5 <= et
      , msg = e$$137.name + " in closure (global): " + e$$137.message + ", stack=" + e$$137.stack;
    if (!hourElapsed && 10 > window["Moat#EMC"]) {
        window["Moat#EMC"]++;
        try {
            var pixelDomain = "video.moatads.com"
              , pxSrc = "//" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof AD_VIEW_HASH ? "LIVERAILJSVPAID1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("621d5e4-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime()
              , px = new Image(1,1);
            px.src = pxSrc
        } catch (e$$138) {}
    } else if (hourElapsed) {
        window["Moat#EMC"] = 1;
        window["Moat#ETS"] = ct;
        try {
            pixelDomain = "video.moatads.com",
            pxSrc = "//" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof AD_VIEW_HASH ? "LIVERAILJSVPAID1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("621d5e4-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(),
            px = new Image(1,1),
            px.src = pxSrc
        } catch (e$$139) {}
    }
}
;
