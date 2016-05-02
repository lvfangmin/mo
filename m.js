/*Copyright (c) 2011-2016 Moat Inc. All Rights Reserved.*/
try {
    (function(y, t) {
        var q = {}, O, ha, ia, da = 0, V = {}, W = [], C = {}, S = [], B = {}, X = false, Fa = {
            15: "",
            12: "",
            6: "",
            7: ""
        }, Ga = function() {
            for (var b = 0; b < W.length; b++)
                q.a.a(W[b]);
            for (b = 0; b < S.length; b++)
                q.a.b(S[b]);
            for (var l in C)
                C.hasOwnProperty && C.hasOwnProperty(l) && C[l] && (q.a.a(C[l].tid),
                C[l] = false);
            W = [];
            S = [];
            G = null
        }
        , ea = function() {
            q.b.a();
            Ga()
        }
        ;
        q.c = ea;
        (function(b) {
            function l(b) {
                var k = new RegExp("(^| )" + b + "($| )");
                return function(b) {
                    return b && b.className && b.className.match(k)
                }
            }
            function f(b) {
                return b && b.document && b.location && b[d +
                x] && b[m + r]
            }
            function h(b) {
                if (null  == b || f(b))
                    return false;
                var k = b.length;
                return 1 === b.nodeType && k ? true : "string" === typeof b || e(b) || 0 === k || "number" === typeof k && 0 < k && k - 1 in b
            }
            function e(g) {
                return "[object Array]" === b.a.bk.toString.call(g)
            }
            b.a = {};
            b.a.c = 3E3;
            b.a.d = function() {
                var b = /Firefox\/(\d+)/.exec(navigator.userAgent);
                return b ? (b = parseInt(b[1], 10),
                21 > b && 14 < b) : false
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
                return b ? 0 === b.length ? false : b[b.length - 1] : false
            }
            ;
            b.a.g = function() {
                var g, k = b.a.e(), u = k && k.split("."), c = u && u.length;
                3 <= c ? g = "co" === u[c - 2] || "com" === u[c - 2] ? u[c - 3] + "." + u[c - 2] + "." + u[c - 1] : u[c - 2] + "." + u[c - 1] : 2 == c && (g = u[c - 2] + "." + u[c - 1]);
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
                for (var u = [b], c = 1; c <= k; c++)
                    u.push(b + c),
                    u.push(b - c);
                u = u[t.floor(t.random() * u.length)];
                c = t.floor(t.random() * u);
                return {
                    multiplier: u,
                    sample: 0 == c
                }
            }
            ;
            b.a.j = function(g, k) {
                var u = b.a.i(g, k);
                b.a.j = function() {
                    return u
                }
                ;
                return u
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
                var k = false
                  , u = "";
                if (navigator.plugins && navigator.plugins.length) {
                    var c = navigator.plugins["Shockwave Flash"];
                    c && (k = true,
                    c.description && (u = b(c.description)));
                    navigator.plugins["Shockwave Flash 2.0"] && (k = true,
                    u = "2.0.0.11")
                } else if (navigator.mimeTypes && navigator.mimeTypes.length)
                    (k =
                    (c = navigator.mimeTypes["application/x-shockwave-flash"]) && c.enabledPlugin && c.enabledPlugin.description) && (u = b(c.enabledPlugin.description));
                else
                    try {
                        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
                        k = true,
                        u = b(c.GetVariable("$version"))
                    } catch (d) {
                        try {
                            c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                            k = true,
                            u = "6.0.21"
                        } catch (m) {
                            try {
                                c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                                k = true,
                                u = b(c.GetVariable("$version"))
                            } catch (e) {}
                        }
                    }
                return k ? u : "0"
            }
            ;
            b.a.getElementsByClassName = function(b, k, u) {
                k = k ||
                "*";
                u = u || document;
                if (u.getElementsByClassName) {
                    var c = []
                      , d = u.getElementsByClassName(b);
                    if ("*" !== k) {
                        b = 0;
                        for (u = d.length; b < u; b++) {
                            var m = d[b];
                            m.tagName === k && c.push(m)
                        }
                        return c
                    }
                    return d
                }
                d = [];
                k = u.getElementsByTagName(k);
                u = l(b);
                m = k.length;
                for (b = 0; b < m; b++)
                    c = k[b],
                    u(c) && d.push(c);
                return d
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
            b.a.s = function(g, k, u) {
                if (("undefined" === typeof u || !u) && g && (u = b.a.t(g),
                !u))
                    return;
                if (g && g.nodeType)
                    if ("undefined" === typeof Node) {
                        if (1 != g.nodeType)
                            return
                    } else if (g.nodeType != Node.ELEMENT_NODE)
                        return;
                if (u.getComputedStyle)
                    return u.getComputedStyle(g, "") && u.getComputedStyle(g, "")[k];
                for (u = k.indexOf("-"); -1 < u; )
                    k = u == k.length - 1 ? k.substr(0, u) : k.substr(0, u) + k.charAt(u + 1).toUpperCase() + k.substr(u + 2),
                    u = k.indexOf("-");
                if (g.currentStyle)
                    return g.currentStyle[k];
                if (g.style)
                    return g.style[k]
            }
            ;
            b.a.u = function(g) {
                if (!g)
                    return false;
                var k = b.a.s(g, "background-image");
                k || (k = b.a.s(g, "backgroundImage"));
                var u;
                k && (u = (u = k.match("url\\((.*)\\)")) && u[1].replace(/\x22/g, ""));
                return u
            }
            ;
            b.a.v = function(g, k) {
                if (!g)
                    return false;
                var u = [g]
                  , c = false;
                b.a.forEach("number" === typeof k ? k : 50, function() {
                    if ((c = b.a.w(g)) && 1 == c.nodeType)
                        g = c,
                        u.push(g);
                    else
                        return false
                });
                return u
            }
            ;
            b.a.w = function(b) {
                return b.parentNode || b.parentElement || false
            }
            ;
            b.a.x = function(g, k) {
                var c = "number" === typeof k ? k : 50
                  , d = []
                  , m = b.a.t(g);
                if (m)
                    d.push(m);
                else
                    return d;
                b.a.forEach(c, function() {
                    var k = b.e.a(g, m);
                    return k && (m = b.a.t(k)) ? (d.push(m),
                    true) : false
                });
                return d
            }
            ;
            b.a.y =
            function() {
                return null  !== /iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(navigator && navigator.userAgent || "")
            }
            ;
            isIphoneOrIPod = function() {
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
                    c = 1;
                    .05 > t.abs(k.width / b.d.c.innerWidth - g) && (c = g);
                    return {
                        w: k.width / c,
                        h: k.height / c
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
                      , c = b.a.af();
                    if (b.d.c.navigator.standalone)
                        g = true;
                    else {
                        var d = k.innerWidth / c.w
                          , k = k.innerHeight / c.h
                          , d = !isNaN(d) && isFinite(d) && .9 <= d && 1.1 >= d
                          , k = !isNaN(k) && isFinite(k) && .75 <= k && 1.1 >= k;
                        g = d && k
                    }
                    return g
                }
            }();
            b.a.ai = function() {
                var g = b.a.ah()
                  , k = b.a.g()
                  , c = b.d.d()
                  , d =
                "applewebdata:" === window.location.protocol || "data:" === window.location.protocol
                  , k = "-" === k || "" === k.replace(/^\s+|\s+$/gm, "");
                return g && !(k || c || d)
            }
            ;
            b.a.aj = function() {
                return function() {}
            }();
            b.a.ak = function() {
                return b.a.aj() ? !!document.getElementById(APPSCOPE_CONTAINER_ID) : false
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
                    "undefined" !== typeof b.external && "undefined" !== typeof b.external.msTrackingProtectionEnabled && b.external.msTrackingProtectionEnabled() || "undefined" !== typeof b._gaUserPrefs && b._gaUserPrefs.ioo && b._gaUserPrefs.ioo() || "undefined" !== typeof navigator.doNotTrack && ("yes" === navigator.doNotTrack || true === navigator.doNotTrack) || "undefined" !== typeof b._gaUserPrefs && true === b._gaUserPrefs
                } catch (k) {
                    return false
                }
            }
            ;
            b.a.an = function() {
                return false
            }
            ;
            b.a.getAttribute = function(b, k) {
                return b[k] || b.getAttribute(k)
            }
            ;
            b.a.ao = function(b) {
                var k =
                0, c;
                for (c in b)
                    b.hasOwnProperty(c) && (k += 1);
                return k
            }
            ;
            var c = [function(b) {
                if (!b || "IFRAME" !== b.nodeName)
                    return false;
                var k = b.offsetHeight;
                return isNaN(k) || 15 < k || "google_conversion_frame" !== b.name ? false : true
            }
            ];
            b.a.ap = function(g, k) {
                return "undefined" === typeof g || null  === g || false === g || !b.a.aq(g) || g.nodeName && "IMG" == g.nodeName && !g.complete || b.a.filter(c, function(b) {
                    return b(g)
                }).length || true === g[D] ? false : true
            }
            ;
            b.a.ar = function(b) {
                return b.replace(/:/g, "%3A").replace(/=/g, "%3D").replace(/,/g, "%2C")
            }
            ;
            b.a.as = function(g) {
                var k = [];
                b.a.forEach(g, function(g, c) {
                    var d = typeof g;
                    "number" == d ? k.push(b.a.ar(c) + ":" + b.a.ar(g + "")) : "string" == d ? k.push(b.a.ar(c) + ":" + b.a.ar('"' + g + '"')) : "undefined" == d ? k.push(b.a.ar(c) + ":" + b.a.ar("undefined")) : "boolean" == d ? k.push(b.a.ar(c) + ":" + b.a.ar(g ? "true" : "false")) : null  === g ? k.push(b.a.ar(c) + ":" + b.a.ar("null")) : "object" != d && "function" != d || !g.toString || k.push(b.a.ar(c) + ":" + b.a.ar('"' + g.toString() + '"'))
                }, null , true);
                k.sort();
                return "{" + k.join(",") + "}"
            }
            ;
            b.a.at = function(b) {
                var k = {};
                if ("string" != typeof b || "{" != b.charAt(0))
                    return false;
                b = b.slice(1, -1).split(",");
                for (var c = 0; c < b.length; c++) {
                    var d = b[c].split(":");
                    d[1] = unescape(d[1]);
                    "true" == d[1] ? d[1] = true : "false" == d[1] ? d[1] = false : '"' == d[1].charAt(0) ? d[1] = d[1].slice(1, -1) : d[1] = "undefined" == d[1] ? void 0 : "null" == d[1] ? null  : "NaN" == d[1] ? NaN : parseFloat(d[1]);
                    k[unescape(d[0])] = d[1]
                }
                return k
            }
            ;
            b.a.aq = function(g) {
                var k = g.offsetWidth
                  , c = g.offsetHeight;
                b.a.forEach(b.a.v(g, 3), function(b) {
                    if (b && b.style && ("" != b.style.width || "" != b.style.height) && "hidden" == b.style.overflow) {
                        var g = parseFloat(b.style.width);
                        b = parseFloat(b.style.height);
                        k = !isNaN(g) && g < k ? g : k;
                        c = !isNaN(b) && b < c ? b : c
                    }
                });
                if (g = b.a.au(g))
                    k = g.width < k ? g.width : k,
                    c = g.height < c ? g.height : c;
                return k * c >= b.a.c
            }
            ;
            var n = {};
            b.a.au = function(g) {
                if (!(g && g.src && g.nodeName && "IMG" != !g.nodeName && g.complete))
                    return false;
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
                } catch (c) {}
                return b.d.e && (b.d.e.src = g.src,
                b.d.e.a) ? (k = {
                    width: parseInt(b.d.e.b),
                    height: parseInt(b.d.e.c)
                },
                n[g.src] = k) : false
            }
            ;
            b.a.av = function(b, k) {
                var c = false
                  , d = k.body
                  , m = d && d.firstChild;
                d && m && (d.insertBefore(b, m),
                c = true);
                return c
            }
            ;
            b.a.aw = function() {
                var b;
                return function() {
                    if (!b)
                        a: {
                            for (var k = document.getElementsByTagName("script"), c = k.length - 1; -1 < c; c--)
                                if ((b = k[c]) && b.src && b.src.indexOf && (-1 !== b.src.indexOf("liverailjsvp58397284/moatvideo.js") || -1 !== b.src.indexOf("liverailjsvp58397284%2Fmoatvideo.js")) && ("undefined" === typeof b[D] || true !== b[D])) {
                                    b[D] = true;
                                    break a
                                }
                            b = void 0
                        }
                    return b ? (b[D] = true,
                    b) : null
                }
            }();
            b.a.ax = function(b) {
                for (var k = [], c = b && b.getElementsByTagName("script"), d = c.length - 1; -1 < d; d--)
                    (b = c[d]) && b.src && b.src.match(/moatads.com\/.*\/moat(ad|video)\.js/) && !b.src.match("liverailjsvp58397284") && k.push(b);
                if (k && 0 < k.length)
                    return k
            }
            ;
            b.a.ay = function(g, k) {
                if (!g || !k)
                    return false;
                var c = b.a.ax(b.d.f ? G.ownerDocument.body || k : k);
                if (c && 0 < c.length) {
                    var d = c[0] && c[0].src && c[0].src.match(/moatads.com\/(.*)\/moat(ad|video)\.js/);
                    d && d[1] && (g.zMoatOtherScript = d[1],
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
                    return false;
                var c = k.ownerDocument.createElement("script");
                c.type = "text/javascript";
                c.async = true;
                k.insertBefore(c, k.childNodes[0]);
                c.src = b;
                return true
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
                    return false
                }
            }
            ;
            b.a.bd = function(g) {
                if (w.yh.yj() && !b.a.y())
                    try {
                        var k = w.yh.yk(g, b.d.protocol)
                          , c = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" id="moatMessageSender' + w.yh.xq() +
                        '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + k.src + '" /><param name="FlashVars" value="' + k.flashVars + '" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed type="application/x-shockwave-flash" src="' + k.src + '" quality="high" flashvars="' + k.flashVars + '" bgcolor="#ffffff" width="1" height="1" id="moatMessageSenderEmbed' + w.yh.xq() + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>'
                          ,
                        d = P.document.createElement("div");
                        d.style.position = "absolute";
                        d.style.left = "-9999px";
                        d.style.top = "-9999px";
                        b.g.a(function() {
                            if (b.a.be(d, P.document.body))
                                return d.innerHTML = c,
                                true
                        }, 1, 100)
                    } catch (m) {}
            }
            ;
            b.a.bf = function(g) {
                if (w && w.yh && w.yh.qa && w.yh.qa() && !b.a.y())
                    try {
                        var k = w.yh.qb(g, b.d.protocol)
                          , c = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="1" height="1" id="moatCap"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' +
                        k.src + '" /><param name="quality" value="high" /><param name="bgcolor" value="#ffffff" /><embed type="application/x-shockwave-flash" src="' + k.src + '" quality="high" bgcolor="#ffffff" width="1" height="1" id="moatCapEmbed" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>'
                          , d = P.document.createElement("div");
                        d.style.position = "absolute";
                        d.style.left = "-9999px";
                        d.style.top = "-9999px";
                        b.g.a(function() {
                            if (b.a.be(d, P.document.body))
                                return d.innerHTML =
                                c,
                                true
                        }, 3, 100)
                    } catch (m) {}
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
                [], d = 0; d < b.length; d++)
                    k(b[d]) && c.push(b[d]);
                return c
            }
            ;
            b.a.bi = function(b, k) {
                for (var c = [], d = 0; d < k.length; d++)
                    c.push(b(k[d]));
                return c
            }
            ;
            b.a.indexOf = function(g, k) {
                if (!g)
                    return -1;
                if (b.a.bj(g)) {
                    for (var c = 0, d = g.length; c < d; c++)
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
            var d = "ale"
              , x = "rt"
              , m = "setInte"
              , r = "rval";
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
                    return false;
                var c = b.a.bm(k);
                if (!c)
                    return false;
                if (b.a.hasChildNodes(c)) {
                    var d = c.childNodes[t.max(0, c.childNodes.length - 1)] || null ;
                    c.insertBefore(g, d)
                } else
                    c.appendChild(g);
                return c
            }
            ;
            b.a.bn = function(g, k, c) {
                if ("string" != typeof g || !k || !document)
                    return false;
                c = c || document.createElement("script");
                c.type = "text/javascript";
                k = b.a.be(c, k);
                if (!k)
                    return false;
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
                    return false;
                if ("OBJECT" !== g.nodeName && "EMBED" !== g.nodeName)
                    return g;
                g = b.a.v(g);
                var k = false;
                b.a.forEach(g, function(b) {
                    if (b && "OBJECT" !== b.nodeName && "EMBED" !== b.nodeName)
                        return k = b,
                        false
                });
                return k
            }
            ;
            b.a.bo = function(b, k) {
                if ("undefined" === typeof b)
                    return false;
                for (var c = 0, d = k.length; c < d; c++)
                    if ("string" == typeof k[c]) {
                        try {
                            b = b[k[c]]
                        } catch (m) {}
                        if ("undefined" === typeof b)
                            return false
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
                return B && "undefined" !== typeof b && B[b] ? B[b] : false
            }
            ;
            b.a.br = function(b) {
                return b && "function" === typeof b ? 0 > String(Function.prototype.toString).indexOf("[native code]") ? b === Function.prototype.toString ? false : null  : 0 <= String(b).indexOf("[native code]") && true || false : false
            }
            ;
            b.a.bj = e;
            b.a.bs = f;
            b.a.bt = h;
            b.a.forEach = function(b, k, c, d) {
                var m, e = typeof b;
                if (b)
                    if ("function" === e)
                        for (m in b) {
                            if ("prototype" != m && "length" != m && "name" != m && (d || !b.hasOwnProperty || b.hasOwnProperty(m)) && (e = k.call(c, b[m], m),
                            "boolean" === typeof e &&
                            !e))
                                break
                        }
                    else if ("number" === e)
                        for (m = 0; m < b && (e = k.call(c, b, m),
                        "boolean" !== typeof e || e); m++)
                            ;
                    else if ("function" === typeof b.every)
                        b.every(function(b, g, d) {
                            b = k.call(c, b, g);
                            return !("boolean" === typeof b && !b)
                        });
                    else if (h(b))
                        for (m = 0; m < b.length && (e = k.call(c, b[m], m),
                        "boolean" !== typeof e || e); m++)
                            ;
                    else
                        for (m in b)
                            if (d || b.hasOwnProperty(m))
                                if (e = k.call(c, b[m], m),
                                "boolean" === typeof e && !e)
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
                    return false;
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
            var z = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
            b.a.bw = function(g) {
                g = g.match(z);
                var k = false;
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
            b.a.bx = function(g) {
                if (!g)
                    return false;
                var k = false;
                if (g !== Object(g))
                    k = g;
                else if (b.a.bt(g))
                    for (var k =
                    [], c = 0, d = g.length; c < d; c++)
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
            b.a.by = function() {
                var b = function() {
                    var b = window.pageXOffset ? window.pageXOffset + window.innerWidth - 1 : 0
                      , g = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
                    return b || g ? !document.elementFromPoint(b, g) : true
                }();
                return function(k, c, d) {
                    if (!b) {
                        var m = d.defaultView || d.parentWindow || window;
                        k += m.pageXOffset;
                        c += m.pageYOffset
                    }
                    return d.elementFromPoint(k,
                    c)
                }
            }();
            b.a.bz = function(b, k) {
                return Object.prototype.hasOwnProperty.call(b, k)
            }
            ;
            b.a.ca = function(g, k) {
                if (!g || !k || "object" != typeof g || "object" != typeof k)
                    return false;
                var c = true;
                b.a.forEach(g, function(b, g) {
                    if ("string" != typeof b && "number" != typeof b)
                        return true;
                    if (!k.hasOwnProperty(g) || k[g] !== b)
                        return c = false
                });
                b.a.forEach(k, function(b, k) {
                    if ("string" != typeof b && "number" != typeof b)
                        return true;
                    if (!g.hasOwnProperty(k) || g[k] !== b)
                        return c = false
                });
                return c
            }
            ;
            b.a.cb = function(b, k, c) {
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
                    return false
                }
            }
            ;
            b.a.cc = function(g, k) {
                if (!g || !k)
                    return false;
                for (var c = [], d, m = 0; 50 > m; m++)
                    if (k != k.parent) {
                        if (d = b.e.a(g, k))
                            c.push(d);
                        else
                            break;
                        k = k.parent;
                        g = d
                    } else
                        break;
                return c
            }
            ;
            b.a.cd = function(b) {
                b = t.max(4, b);
                return ((1 + t.random()) * t.pow(16, b) | 0).toString(16).substring(0, b)
            }
            ;
            b.a.ce = function() {
                var g = b.a.cd;
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
            var v = function(g, k) {
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
                  , d = c.document.createElement("IFRAME");
                d.style.display = "none";
                d.style.width = "0px";
                d.style.height = "0px";
                d.width = "0";
                d.height = "0";
                b.a.be(d, c.document.documentElement);
                d.contentWindow && (k.toString = d.contentWindow.Function.prototype.toString);
                var m = k.toString();
                c.document.documentElement.removeChild(d);
                return m
            }
            ;
            b.a.toString = function(g, k) {
                k = k || b.d.c;
                var c;
                try {
                    c = v(k, g)
                } catch (d) {
                    c = g.toString()
                }
                return c
            }
            ;
            b.a.cf = function(g, k, c) {
                g = b.a.toString(g, c);
                if (b.d.h())
                    c.eval("(" + g + ")(" + k + ")");
                else if (c.Function)
                    (new c.Function("(" + g + ")(" + k + ")"))();
                else {
                    var d = c.document.createElement("script");
                    d.type = "text/javascript";
                    d.text = "(" + g + ")(" + k + ")";
                    b.a.be(d, c.document.body)
                }
            }
            ;
            b.a.cg = function(g) {
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
                    if (l.src && l.src.slice && "http" === l.src.slice(0, 4) && b.a.r(l.src) != b.a.r(P.location.toString()))
                        return l.moatHostileIframe = true,
                        null ;
                    var f = l && (l.contentDocument || l.contentWindow && l.contentWindow.document);
                    if (f && "string" === typeof f.location.toString())
                        return f;
                    l.moatHostileIframe =
                    true;
                    return null
                } catch (h) {
                    return l.moatHostileIframe = true,
                    null
                }
            }
            ;
            b.e.a = function(l, f) {
                f = f || b.a.t(l);
                try {
                    return f && f.frameElement
                } catch (h) {
                    return false
                }
            }
            ;
            b.e.c = function(l, f) {
                var h;
                b.a.forEach(l.getElementsByTagName("iframe"), function(b) {
                    if (b && b.contentWindow && b.contentWindow == f)
                        return h = b,
                        false
                });
                return h
            }
            ;
            b.e.d = function(l) {
                if (l = b.e.a(l))
                    try {
                        return l.parentNode
                    } catch (f) {}
                return null
            }
            ;
            b.e.e = function(l, f) {
                if (!l)
                    return false;
                var h = 0
                  , e = [];
                for (f = f || 10; h < f; )
                    if (h++,
                    l = b.e.a(l))
                        e.push(l);
                    else
                        return e
            }
            ;
            b.e.f = function(l, f) {
                if (!l)
                    return false;
                var h = 0, e = [l], c;
                for (f = f || 10; h < f; ) {
                    h++;
                    try {
                        if (l = (c = l.frameElement) && b.a.t(c),
                        c && l && !b.e.isOldWindow(l))
                            e.push(l);
                        else
                            return e
                    } catch (n) {
                        break
                    }
                }
                return e
            }
            ;
            b.e.h = function(l, f, h) {
                var e = [];
                l && e.push(l);
                h = h || 0;
                if (10 < h || !l || !l.frames)
                    return e;
                for (var c = 0, n = l.frames.length; c < n; c++)
                    try {
                        f && !b.e.i(l.frames[c]) ? e.push(l.frames[c]) : e = e.concat(b.e.h(l.frames[c], f, h + 1))
                    } catch (d) {
                        break
                    }
                return e
            }
            ;
            b.e.j = function(b, f) {
                f = "number" == typeof f && 0 < f ? f : 15;
                var h = [], e;
                if (b) {
                    e = b.top;
                    for (var c = 0; c < f; c++)
                        if ((b = b.parent) && b != b.top)
                            h.push(b);
                        else
                            break;
                    h.push(e)
                }
                return h
            }
            ;
            b.e.k = [];
            b.e.i = function(l) {
                for (var f, h = 0, e = b.e.k.length; h < e; h++)
                    b.e.k[h].win == l && (f = b.e.k[h]);
                if (!f) {
                    f = {
                        win: l,
                        friendly: false
                    };
                    try {
                        l.document && (f.friendly = true)
                    } catch (c) {}
                }
                return f.friendly
            }
            ;
            b.e.l = function(l, f, h) {
                l = b.e.f(l).pop();
                l = b.e.h(l, true);
                for (var e = 0, c = l.length; e < c; e++)
                    if (l[e] == f) {
                        if (h && f.parent && b.e.isOldWindow(f.parent))
                            break;
                        return true
                    }
                return false
            }
            ;
            b.e.isOldWindow = function(b) {
                try {
                    var f = typeof b.location.toString;
                    if ("undefined" === f || "unknown" === f)
                        return true;
                    var h = typeof b.document;
                    if ("undefined" === h || "unknown" === h)
                        return true;
                    var e = b.innerWidth || b.document.documentElement.clientWidth || b.document.body.clientWidth || 0;
                    return "number" !== typeof (b.screenX || b.screenLeft || 0) || "number" !== typeof e ? true : false
                } catch (c) {
                    return true
                }
            }
        })(q);
        (function(b) {
            // safeframe
            b.d = {};
            b.d.i = "21";
            b.d.j = "MoatSuperV" + b.d.i;
            b.d.k = 8;
            b.d.l = window && window["Moat#G" + b.d.i] || {};
            window["Moat#G" + b.d.i] = b.d.l;
            b.d.l.a || (b.d.l.a = t.floor(t.random() * t.pow(10, 12)));
            b.d.m = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor");
            b.d.n = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            b.d.g = b.a.m();
            b.d.o = (new y).getTime();
            b.d.p = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/");
            b.d.q = false;
            var l = function() {
                var c = function(c) {
                    if (b.a.bo(c, ["mraid", "isViewable"]) && (c = c.mraid.isViewable,
                    "function" === typeof c))
                        try {
                            return isMraidViewable = c(),
                            "undefined" !== typeof isMraidViewable
                        } catch (d) {}
                    return false
                }
                  , d = document
                  , e = window
                  , m = c(e);
                if (!m && b.d.r)
                    for (var r = 0; 20 > r && !m; r++) {
                        d = b.e.a(d.body);
                        if (false !== d && !d)
                            break;
                        d = (e = b.a.t(d)) && e.document;
                        m = m || c(e)
                    }
                b.d.s = function() {
                    return m && e
                }
                ;
                b.d.d = function() {
                    return m
                }
                ;
                b.d.t = function() {
                    return false
                }
                ;
                (function() {
                    if (b.d.d()) {
                        var c = "___mraid_loop___" + (new y).getTime()
                          , d = b.a.bo(b.d.s(), ["mraid", "isViewable"]);
                        d && b.g.b(function() {
                            return d() ? (b.d.t = function() {
                                return true
                            }
                            ,
                            false) : true
                        }, {}, 300, c)
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
            var f = function() {
                var c = function(c) {
                    if (b.a.ae.isInApp)
                        return false;
                    c = b.a.bo(c, ["$sf"]);
                    if (!c)
                        return false;
                    var g = c.ext;
                    c = g && g.geom;
                    var k = [["exp", "b", "t", "l", "r"], "self b t l r h w xiv yiv".split(" ")],
                    d;
                    if (g && c && "function" === typeof c)
                        try {
                            c = c();
                            if (!c)
                                return false;
                            if (c.par)
                                return true;
                            for (var g = 0, m = k.length; g < m; g++) {
                                d = k[g][0];
                                for (var e = 1, n = k[g].length; e < n; e++)
                                    if ("undefined" === typeof c[d][k[g][e]])
                                        return false
                            }
                            return true
                        } catch (f) {}
                    return false
                }
                  , d = window
                  , e = document
                  , m = c(d)
                  , r = !(!m && !d.$sf);
                if (!m && b.d.r)
                    for (var f = 0; 20 > f && !m; f++) {
                        e = b.e.a(e.body);
                        if (false !== e && !e)
                            break;
                        e = (d = b.a.t(e)) && d.document;
                        m = m || c(d);
                        r = r || m || d.$sf
                    }
                b.d.u = function() {
                    return m && d
                }
                ;
                b.d.v = function() {
                    return m
                }
                ;
                b.d.w = function() {
                    return r
                }
            }
            ;
            b.d.x = false;
            b.d.u = function() {
                f();
                return b.d.u()
            }
            ;
            b.d.w = function() {
                f();
                return b.d.w()
            }
            ;
            b.d.v = function() {
                f();
                return b.d.v()
            }
            ;
            var h = function() {
                var c = function(c) {
                    return b.a.ae.isInApp ? false : b.a.bo(c, ["context", "observeIntersection"]) ? true : false
                }
                  , d = window
                  , e = document
                  , m = c(d)
                  , f = !(!m && !d.context);
                if (!m && b.d.r)
                    for (var z = 0; 20 > z && !m; z++) {
                        e = b.e.a(e.body);
                        if (false !== e && !e)
                            break;
                        e = (d = b.a.t(e)) && d.document;
                        m = m || c(d);
                        f = f || m || d.context
                    }
                b.d.y = function() {
                    return m && d
                }
                ;
                b.d.z = function() {
                    return m
                }
                ;
                b.d.aa = function() {
                    return f
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
            b.d.f = window != window.parent;
            var isOldWindow = b.e.isOldWindow(window.parent);
            b.d.r = b.d.f && !isOldWindow;
            b.d.ac = b.a.y();
            b.d.a = isOldWindow ? false : !b.e.isOldWindow(window.top);
            b.d.c = b.d.a ? window.top : b.d.r ? window.parent : window;
            b.a.ae().isInApp && (b.d.a = b.a.al() || b.a.aj());
            b.d.b = b.d.c.document.referrer || "";
            try {
                b.d.ad = b.d.c.history && b.d.c.history.length
            } catch (n) {}
            try {
                if (!b.d.a) {
                    var e = window, c;
                    for (c = 0; 20 > c && e != window.top; c++)
                        e = e.parent;
                    b.d.ae = c
                }
            } catch (n) {}
            b.d.af = function() {
                var c = b.d.c;
                if (!c)
                    return false;
                try {
                    var d = c.document && c.document.body
                      , e = c.document && c.document.documentElement
                } catch (f) {}
                try {
                    c.screen && (b.d.ag = c.screen.availWidth,
                    b.d.ah = c.screen.availHeight,
                    b.d.ai = c.screen.width,
                    b.d.aj = c.screen.height)
                } catch (f) {
                    b.d.ag = b.d.ag || 0,
                    b.d.ah = b.d.ah || 0,
                    b.d.ai = b.d.ai || 0,
                    b.d.aj = b.d.aj || 0
                }
                var m = b.d.ak(c);
                b.d.al = m.width;
                b.d.am = m.height;
                try {
                    b.d.an = c.outerWidth || c.document && c.document.body && c.document.body.offsetWidth ||
                    0,
                    b.d.ao = c.outerHeight || c.document && c.document.body && c.document.body.offsetHeight || 0
                } catch (f) {
                    b.d.an = 0,
                    b.d.ao = 0
                }
                d && e && (b.d.ap = t.max(d.scrollHeight, d.offsetHeight, e.clientHeight, e.scrollHeight, e.offsetHeight),
                b.d.aq = d.scrollTop || e.scrollTop || c.pageYOffset || 0)
            }
            ;
            b.d.ak = function(b) {
                var c, e, m, f = 0, z = 0;
                try {
                    (c = b.document,
                    e = c.documentElement,
                    m = c.body,
                    "undefined" !== typeof b.innerWidth) ? (f = b.innerWidth,
                    z = b.innerHeight) : "CSS1Compat" === c.compatMode && 5 !== c.documentMode || !m || "undefined" === typeof m.clientWidth ? e &&
                    "undefined" !== typeof e.clientWidth && (f = e.clientWidth,
                    z = e.clientHeight) : (f = m.clientWidth,
                    z = m.clientHeight)
                } catch (h) {}
                return {
                    width: f,
                    height: z,
                    left: 0,
                    right: f,
                    top: 0,
                    bottom: z
                }
            }
            ;
            b.d.af();
            b.d.ar = function() {
                if (B)
                    for (var b in B)
                        if (B.hasOwnProperty(b))
                            return true;
                return false
            }
            ;
            b.d.as = function(c) {
                var d = true;
                b.a.forEach(c && c.parentNode && c.parentNode.childNodes, function(c) {
                    if (b.a.n(["DIV", "IFRAME", "A", "EMBED", "OBJECT"], c.nodeName))
                        return d = false
                });
                return d
            }
            ;
            b.d.at = function() {
                for (var b in B)
                    if (B.hasOwnProperty(b)) {
                        var c = B[b];
                        if (c && c.aa && c.aa[D])
                            return true
                    }
                return false
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
                var d = false;
                b.h && b.h.a() ? d = true : b.i && b.i.a && (c && c.periscopeManager ? c.periscopeManager.measurable && (d = true) : d = true);
                return d
            }
            ;
            b.d.ay = function(c) {
                return c ? b.d.au() || b.d.av() || b.d.ax(c) || b.d.aw() ? true : false : false
            }
            ;
            b.d.e = new b.d.c.Image;
            b.d.h = function() {
                if ("undefined" !== typeof b.d.c["Moat#EVA"])
                    return true;
                try {
                    if ("undefined" !== typeof b.d.c.eval &&
                    (b.d.c.eval("(function(win){ win['Moat#EVA'] = true; })(window)"),
                    "undefined" !== typeof b.d.c["Moat#EVA"]))
                        return true
                } catch (c) {}
                return false
            }
        })(q);
        (function(b) {
            function l(b, h, e) {
                function c(b, c) {
                    for (var m in b)
                        b.hasOwnProperty(m) && c.call(null , b[m], m)
                }
                function n(b) {
                    var e = [];
                    c(b, function(b, c) {
                        e.push(c)
                    });
                    return e
                }
                b = h[b];
                b && b.xa.sode || (b.xa.sode = function() {
                    this.desw = {};
                    this.xfgf = [];
                    this.publishing_ = false;
                    this.eventCallbacks = {};
                    this.edws = []
                }
                ,
                b.xa.sode.prototype.uxin = function() {
                    var b = function(b) {
                        b = e.max(4, b);
                        return ((1 + e.random()) *
                        e.pow(16, b) | 0).toString(16).substring(0, b)
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
                    this.publishing_ ? this.xfgf.push(arguments) : this.zaxs.apply(this, arguments)
                }
                ,
                b.xa.sode.prototype.kswa = function(b, c) {
                    for (var m = this.eventCallbacks[b] || [], e = m && m.length, f = 0; f < e; f++)
                        if (m[f] === c)
                            return false;
                    m.push(c);
                    m.sort(function(b, g) {
                        return b - g
                    });
                    this.eventCallbacks[b] = m
                }
                ,
                b.xa.sode.prototype.aksw =
                function(b, c) {
                    if (!this.eventCallbacks[b])
                        return false;
                    for (var m = this.eventCallbacks[b], e = -1, f = m && m.length, n = 0; n < f; n++)
                        if (m[n] === c) {
                            e = n;
                            break
                        }
                    -1 != e && m.splice(e, 1);
                    this.eventCallbacks[b] = m
                }
                ,
                b.xa.sode.prototype._getEventPriorities_ = function(b) {
                    return this.eventCallbacks[b] || []
                }
                ,
                b.xa.sode.prototype.addEventCallback = function(event, callback, options) {
                    options = options || {};
                    var e = options.id || this.uxin(), f;
                    f = options.priority;
                    f = !isNaN(f) && isFinite(f) ? parseInt(f, 10) : 10;
                    for (var n = this.xsza(event), g = 0; n[e] && !options.id && 10 > g; )
                        g++,
                        e = this.uxin();
                    n[f] || (n[f] = {});
                    this.kswa(event, f);
                    options.priority = f;
                    n[f][e] = {
                        cb: callback,
                        options: options
                    };
                    return e
                }
                ,
                b.xa.sode.prototype.zaxs = function(event, params) {
                    if (!this.desw[event])
                        return false;
                    this.publishing_ = true;
                    for (var m = this.edws.slice.call(arguments, 1), e = this._getEventPriorities_(event), f = 0, n = e.length; f < n; f++) {
                        var g = e[f], k;
                        for (k in this.desw[event][g]) {
                            var u = this.desw[event][g][k];
                            if (u) {
                                var h;
                                h = u.options.includeId ? [k].concat(m) : m;
                                if (!u.options.condition || u.options.condition && u.options.condition.apply(null , h))
                                    u.options.once && this.sxaz(event, {
                                        id: k,
                                        priority: u.options.priority
                                    }),
                                    u.cb.apply(null , h)
                            }
                        }
                    }
                    this.publishing_ = false;
                    f = 0;
                    for (m = this.xfgf.length; f <
                    m; f++)
                        this.zaxs.apply(this, this.xfgf.pop())
                }
                ,
                b.xa.sode.prototype.swaq = function(b, c, m) {
                    var e = false;
                    if (this.desw[b] && this.desw[b][m])
                        try {
                            delete this.desw[b][m][c],
                            e = true
                        } catch (f) {}
                    0 === n(this.desw[b][m]).length && this.aksw(b, m);
                    return e
                }
                ,
                b.xa.sode.prototype.sxaz = function(b, c) {
                    if (!c || "object" != typeof c || !this.desw[b])
                        return false;
                    if (c.id && void 0 !== c.priority)
                        return this.swaq(b, c.id, c.priority);
                    if (c.id || c.callback)
                        for (var m = this._getEventPriorities_(b), e = 0, f = m.length; e < f; e++) {
                            var n = m[e];
                            if (c.id && c.callback) {
                                if (this.desw[b][n][c.id] &&
                                this.desw[b][n][c.id].cb == c.callback)
                                    return this.swaq(b, c.id, n)
                            } else if (c.id) {
                                if (this.desw[b][n][c.id])
                                    return this.swaq(b, c.id, n)
                            } else
                                for (var g in this.desw[b][n])
                                    if (this.desw[b][n][g] && this.desw[b][n][g].cb == c.callback)
                                        return this.swaq(b, g, n)
                        }
                    return false
                }
                ,
                b.xa.sode.prototype.ugin = function(b) {
                    if ("string" === typeof b)
                        if (this.desw[b])
                            delete this.desw[b];
                        else
                            return false;
                    else
                        this.desw = {};
                    return true
                }
                )
            }
            b.j = {};
            b.j.a = function(f) {
                f.xa.sode || (f.xb == window ? l(b.d.j, window, t) : b.a.cf(l, "'" + b.d.j + "',window, Math", f.xb));
                b.j.b = new f.xa.sode
            }
        })(q);
        (function(b) {
            function l(b, h) {
                function e(b) {
                    var c = d.xb.Math.pow
                      , e = d.xb.Math.random;
                    b = (0,
                    d.xb.Math.max)(4, b);
                    return ((1 + e()) * c(16, b) | 0).toString(16).substring(0, b)
                }
                function c(b) {
                    return function(c) {
                        return b(c)
                    }
                }
                function n(b, c) {
                    if (!b || "string" !== typeof c || !b[c] || b == window)
                        return false;
                    if ("string" === typeof b.nodeName && ("OBJECT" === b.nodeName || "EMBED" === b.nodeName)) {
                        var d = document && document.body && document.body[c];
                        if (d && d !== b[c])
                            return d
                    }
                    return false
                }
                h[b] = h[b] || {
                    zs: false,
                    zr: 0,
                    yf: {},
                    h: 0,
                    m: 0,
                    i: {},
                    xa: {},
                    xb: h,
                    xc: {}
                };
                var d = h[b]
                  , x = {};
                d.xc.esde = function(b) {
                    window && window.clearTimeout && window.clearTimeout(b)
                }
                ;
                d.xc.ynds = function(b, d, e, f) {
                    var g, k = c(e), u;
                    b.addEventListener ? (e = "addEventListener",
                    g = "") : (e = "attachEvent",
                    g = "on");
                    if (u = n(b, e))
                        try {
                            u.call(b, g + d, k, false)
                        } catch (h) {
                            b[e](g + d, k, false)
                        }
                    else if (b && e && b[e])
                        try {
                            b[e](g + d, k, false)
                        } catch (h) {}
                    false !== f && (x[d + f] = k)
                }
                ;
                d.xc.engn = function(b, c, d, e) {
                    var g, k = c + e, u;
                    if (!b)
                        return delete x[k],
                        false;
                    d = false !== e ? x[k] : d;
                    b.removeEventListener ? (e = "removeEventListener",
                    g = "") : (e = "detachEvent",
                    g = "on");
                    if (u = n(b, e))
                        try {
                            u.call(b, g + c, d, false)
                        } catch (f) {
                            b[e](g + c, d, false)
                        }
                    else
                        try {
                            b[e](g + c, d, false)
                        } catch (f) {}
                    delete x[k]
                }
                ;
                d.xc.exde = function(b, d) {
                    b = c(b);
                    var e;
                    window && window.setTimeout && (e = window.setTimeout(b, d));
                    return e
                }
                ;
                d.xc.exae = function(b, c, d) {
                    return function() {
                        c.apply(d || null , b.concat(b.slice.call(arguments)))
                    }
                }
                ;
                d.xc.uxin = function() {
                    return e(4) + "-" + e(4) + "-" + e(4) + "-" + e(4)
                }
                ;
                d.xc.twer = function(b, c) {
                    d && (d.yf || (d.yf = {}),
                    d && d.yf && (d.yf[c] ? d.yf[c].push(b) : d.yf[c] = [b]))
                }
            }
            b.k = {};
            b.k.a = function(f) {
                var h = b.k.b(f)
                  ,
                e = false;
                h || (h = b.k.c(f),
                e = true);
                window[b.d.j] = h;
                b.j.a(h);
                e && (h.swde = new h.xa.sode);
                b.j.b.addEventCallback("adKilled", b.k.d);
                b.j.b.addEventCallback("allLocalAdsKilled", b.k.e, {
                    once: true
                });
                return h
            }
            ;
            b.k.e = function() {
                b.j.b.sxaz("adKilled", {
                    callback: b.k.d
                });
                b.k.f(w)
            }
            ;
            b.k.d = function(f) {
                if (w) {
                    try {
                        var h = w.yf[b.d.l.a];
                        if (h) {
                            var e = b.a.indexOf(h, f.yg);
                            -1 < e && h.splice(e, 1)
                        }
                    } catch (c) {}
                    b.k.f(w)
                }
            }
            ;
            b.k.g = function(f, h) {
                var e = b.k.b(b.d.c);
                e && e.xc.twer(f, h)
            }
            ;
            b.k.f = function(f) {
                var h = false
                  , e = false
                  , c = 0;
                try {
                    f.yf[b.d.l.a] && (e = 0 === f.yf[b.d.l.a].length),
                    b.a.forEach(f.yf,
                    function(b) {
                        0 < b.length && c++
                    }),
                    0 === c && (h = true)
                } catch (n) {}
                e && f.swde.esgf("allAdsInWindowKilled", b.d.l.a);
                h && (b.j.b.sxaz("adKilled", {
                    callback: b.k.d
                }),
                b.j.b.sxaz("allLocalAdsKilled", {
                    callback: b.k.e
                }),
                f.swde.esgf("allAdsKilled"))
            }
            ;
            b.k.c = function(f) {
                f == window ? l(b.d.j, window) : b.a.cf(l, "'" + b.d.j + "',window", f);
                return b.k.b(f)
            }
            ;
            b.k.b = function(f) {
                try {
                    return f = f || b.d.c,
                    f[b.d.j]
                } catch (h) {
                    return null
                }
            }
            ;
            b.k.h = function(f) {
                var h = b.k.b();
                h && (h.i[f] = true)
            }
        })(q);
        var w = q.k.a(q.d.c)
          , Ia = q.d.r
          , qa = q.d.a
          , Y = q.a.y()
          , ra = q.d.o
          , P =
        q.d.c;
        if (q.a.am() || q.a.an())
            return false;
        (function(b) {
            function l(b, h, e) {
                var c = h[b];
                c && c.xa.txae || (c.xa.txae = function(b, d) {
                    this.sxdc = c.xc.uxin();
                    this.cdxs = b;
                    this.xscd = {};
                    this.swde = d;
                    var e = this
                      , m = this.swde.addEventCallback("allAdsInWindowKilled", function(b) {
                        c.dcsx.engn({
                            listenerName: "unloadFn" + b
                        });
                        c.dcsx.engn({
                            listenerName: "beforeunloadFn" + b
                        })
                    });
                    this.swde.addEventCallback("allAdsKilled", function() {
                        e.swde.sxaz("allAdsInWindowKilled", {
                            id: m
                        });
                        c.dcsx && (c.dcsx.aqsw(),
                        c.zs = false,
                        c.xz = false,
                        c.dcsx = false)
                    }, {
                        once: true
                    })
                }
                ,
                c.xa.txae.prototype.wsed =
                function(b, d, e, m, f) {
                    this.xscd[m] || (this.xscd[m] = {});
                    this.xscd[m].evt = d;
                    this.xscd[m].target = b;
                    this.xscd[m].periodic = true;
                    var h;
                    h = c.xc.exae([this], function(v, g) {
                        c.xc.engn(b, d, null , m);
                        if (v.xscd[m]) {
                            v.xscd[m].tid = c.xc.exde(function() {
                                c.xc.ynds(b, d, h, m)
                            }, f);
                            try {
                                v.swde.zaxs(e, g)
                            } catch (k) {}
                        }
                    });
                    c.xc.ynds(b, d, h, m)
                }
                ,
                c.xa.txae.prototype.wsqa = function(b) {
                    this.xscd[b] && (c.xc.esde(this.xscd[b].tid),
                    c.xc.engn(this.xscd[b].target, this.xscd[b].evt, null , b),
                    delete this.xscd[b])
                }
                ,
                c.xa.txae.prototype.qaws = function() {
                    this.wsed(this.cdxs,
                    "scroll", "scroll", "globalScrollevent" + this.sxdc, 1E3)
                }
                ,
                c.xa.txae.prototype.aqsw = function() {
                    for (var b in this.xscd)
                        this.engn({
                            listenerName: b
                        })
                }
                ,
                c.xa.txae.prototype.ynds = function(b, d, e, m) {
                    if (!this.xscd[m]) {
                        this.xscd[m] = {};
                        this.xscd[m].evt = d;
                        this.xscd[m].target = b;
                        var f;
                        f = c.xc.exae([this], function(b, c) {
                            b.xscd[m] && b.swde.zaxs(e, c)
                        });
                        c.xc.ynds(b, d, f, m)
                    }
                }
                ,
                c.xa.txae.prototype.engn = function(b) {
                    function d(b, g) {
                        b.xscd[g].periodic ? b.wsqa(g) : (c.xc.engn(b.xscd[g].target, b.xscd[g].evt, null , g),
                        delete b.xscd[g])
                    }
                    var e =
                    b.target && b.evt
                      , m = b.target && !b.evt
                      , f = b.all;
                    if (b.listenerName)
                        this.xscd[b.listenerName] && d(this, b.listenerName);
                    else if (e)
                        for (var h in this.xscd)
                            (e = this.xscd[h]) && e.evt == b.evt && e.target == b.target && d(this, h);
                    else if (m)
                        for (h in this.xscd)
                            (e = this.xscd[h]) && e.target == b.target && d(this, h);
                    else if (f)
                        for (h in this.xscd)
                            (e = this.xscd[h]) && d(this, h)
                }
                )
            }
            b.l = {};
            b.l.a = function(f) {
                f && (f.xa.txae || (f.xb == window ? l(b.d.j, window, t) : b.a.cf(l, "'" + b.d.j + "',window, Math", f.xb)),
                f.zs || (f.dcsx = new f.xa.txae(b.d.c,f.swde),
                f.zs =
                true))
            }
            ;
            b.j.b.addEventCallback("modulesReady", b.l.a, {
                once: true
            });
            b.j.b.addEventCallback("startAdTracking", function(f) {
                w && w.zs && !w.xz && (w.dcsx ? (w.xz = true,
                w.dcsx.qaws()) : b.l.a(w),
                b.focus.setFocusListeners())
            })
        })(q);
        (function(b) {
            function l(b) {
                return function() {
                    var e = false;
                    return function(c) {
                        try {
                            return b && b.apply ? b.apply(null , arguments) : b(c)
                        } catch (f) {
                            if (!e) {
                                e = true;
                                var n = (new y).getTime();
                                window["Moat#ETS"] || (window["Moat#ETS"] = n);
                                window["Moat#EMC"] || (window["Moat#EMC"] = 0);
                                var d = 36E5 <= n - window["Moat#ETS"]
                                  , x = "";
                                try {
                                    x = b.toString()
                                } catch (v) {
                                    x =
                                    "failed"
                                }
                                x = f.name + " in closure (cb): " + f.message + ", stack=" + f.stack + ", \ncb=" + x + "\n";
                                if (!d && 10 > window["Moat#EMC"]) {
                                    window["Moat#EMC"]++;
                                    try {
                                        var m = "//video.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("LIVERAILJSVPAID1") + "&ac=1&k=" + escape(x) + "&ar=" + escape("ce785ae-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new y).getTime()
                                          , r = new Image(1,1);
                                        r.src = m
                                    } catch (v) {}
                                } else if (d) {
                                    window["Moat#EMC"] = 1;
                                    window["Moat#ETS"] = n;
                                    try {
                                        m = "//video.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" +
                                        escape("LIVERAILJSVPAID1") + "&ac=1&k=" + escape(x) + "&ar=" + escape("ce785ae-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new y).getTime(),
                                        r = new Image(1,1),
                                        r.src = m
                                    } catch (v) {}
                                }
                            }
                        }
                    }
                }()
            }
            b.g = {};
            var f = {};
            b.g.c = f;
            b.g.d = function(f, e) {
                if (!f || "string" !== typeof e || !f[e] || f == window)
                    return false;
                if ("string" === typeof f.nodeName && ("OBJECT" === f.nodeName || "EMBED" === f.nodeName)) {
                    var c = b && b.m && b.m[e];
                    if (c && c !== f[e])
                        return c
                }
                return false
            }
            ;
            b.g.e = function(h, e, c, n) {
                var d, x = l(c), m;
                h.addEventListener ? (c = "addEventListener",
                d = "") :
                (c = "attachEvent",
                d = "on");
                if (m = b.g.d(h, c))
                    try {
                        m.call(h, d + e, x, false)
                    } catch (r) {
                        h[c](d + e, x, false)
                    }
                else if (h && c && h[c])
                    try {
                        h[c](d + e, x, false)
                    } catch (r) {}
                false !== n && (f[e + n] = x)
            }
            ;
            b.g.f = function(h, e, c, n) {
                var d, x = e + n, m;
                if (!h)
                    return delete f[x],
                    false;
                c = false !== n ? f[x] : c;
                h.removeEventListener ? (n = "removeEventListener",
                d = "") : (n = "detachEvent",
                d = "on");
                if (m = b.g.d(h, n))
                    try {
                        m.call(h, d + e, c, false)
                    } catch (r) {
                        h[n](d + e, c, false)
                    }
                else
                    try {
                        h[n](d + e, c, false)
                    } catch (r) {}
                delete f[x]
            }
            ;
            b.g.g = function(b, e) {
                b = l(b);
                var c;
                window && window.setInterval && (c = window.setInterval(b,
                e),
                S.push(c));
                return c
            }
            ;
            b.g.h = function(b, e) {
                b = l(b);
                var c;
                window && window.setTimeout && (c = window.setTimeout(b, e),
                W.push(c));
                return c
            }
            ;
            b.g.b = function(f, e, c, n) {
                if (!n)
                    return false;
                n += "";
                C[n] && b.a.a(C[n].tid);
                C[n] = {};
                C[n].callback = l(f);
                C[n].params = e;
                C[n].interval = c;
                C[n].tid = b.g.h(b.g.i(n), c);
                callbacks = null
            }
            ;
            b.g.i = function(f) {
                return function() {
                    if (!C || !C[f])
                        return false;
                    var e = C[f].callback(C[f].params);
                    if ("boolean" === typeof e && false === e)
                        return b.a.a(C[f].tid),
                        C[f] = false;
                    C[f].tid = b.g.h(b.g.i(f), C[f].interval);
                    time = f = null
                }
            }
            ;
            b.g.j = function() {
                return C
            }
            ;
            b.g.a = function(f, e, c, n) {
                var d = 0
                  , x = function() {
                    d += 1;
                    true !== f() && (d < e ? b.g.h(x, c) : "function" === typeof n && n())
                }
                ;
                x()
            }
            ;
            b.g.k = l
        })(q);
        (function(b) {
            function l() {
                this.height = this.width = this.absTop = this.absLeft = 0;
                this.update = function(b) {
                    var c = d("left", b.win)
                      , e = d("top", b.win);
                    false !== c && false !== e && (this.absLeft = b.left + c,
                    this.absTop = b.top + e,
                    this.width = b.width,
                    this.height = b.height)
                }
            }
            function f(g, c) {
                var d = g.zr;
                v.hasOwnProperty(d) || (v[d] = new l);
                var e = c || new b.n.j(g.aa);
                v[d].update(e)
            }
            function h(g,
            k) {
                if (!g)
                    return false;
                var d = "number" == typeof g.zr, e, m;
                d ? (e = g.aa,
                m = g._calcVideoBasedOnContainer) : e = g;
                m = m ? new b.n.j(e.parentNode,k) : new b.n.j(e,k);
                e = m.height;
                var n = m.width
                  , r = m.calcArea();
                if (0 === r)
                    return {
                        area: r,
                        percv: 0
                    };
                var h = c(m), z = h.visibleRect.calcArea(), x = z / r, v;
                a: {
                    var l = h.cumulRect
                      , q = h.cumulRect.getViewportRect();
                    if (0 > l.top && 0 < l.bottom)
                        v = -l.top;
                    else if (0 <= l.top && l.top <= q.height)
                        v = 0;
                    else {
                        v = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    if (0 <= l.bottom && l.bottom <= q.height)
                        l = l.height;
                    else if (l.bottom > q.height && l.top < q.height)
                        l =
                        l.height - (l.bottom - q.height);
                    else {
                        v = {
                            yMin: -1,
                            yMax: -1
                        };
                        break a
                    }
                    v = {
                        yMin: v,
                        yMax: l
                    }
                }
                d && f(g, m);
                return {
                    area: r,
                    visibleArea: z,
                    visibleRect: h.visibleRect,
                    cumulRect: h.cumulRect,
                    percv: x,
                    yMinMax: v,
                    elGeo: {
                        elHeight: e,
                        elWidth: n,
                        foldTop: h.cumulRect.top,
                        totalArea: h.parentArea
                    },
                    rect: m.rect
                }
            }
            function e(b, c) {
                for (var d = [], e = 0; e < c.length; e++)
                    d.push(b(c[e]));
                return d
            }
            function c(g) {
                var c, d = b.a.cc(g.el, g.win), d = e(function(g) {
                    return new b.n.j(g)
                }, d);
                d.unshift(g);
                var m = d.length;
                g = new b.n.j(g.el,b.d.c);
                for (var f = 0; f < m; f++) {
                    var n =
                    d[f];
                    0 === f ? c = n : (c.changeReferenceFrame(n),
                    g.changeReferenceFrame(n));
                    n = n.getViewportRect(f < m - 1 ? d[f + 1] : false);
                    c = b.n.l(c, n)
                }
                return {
                    visibleRect: c,
                    cumulRect: g,
                    parentArea: d[d.length - 1].calcArea()
                }
            }
            function n(b, c, d, e) {
                b = t.max(b, d);
                c = t.min(c, e);
                return c > b ? [b, c] : [0, 0]
            }
            function d(b, c) {
                c || (c = window);
                try {
                    var d = c.document.documentElement
                      , e = c.document.body;
                    return "left" === b ? c.pageXOffset || d && d.scrollLeft || e && e.scrollLeft : c.pageYOffset || d && d.scrollTop || e && e.scrollTop
                } catch (m) {
                    return false
                }
            }
            function x(g, c, d, e) {
                var m = [],
                f;
                for (f in g) {
                    var n = g[f], n = b.a.by(n[0], n[1], c), r;
                    if (r = n && n !== d && n[N] !== e)
                        n = (n = b.a.au(n)) && (1 >= n.width || 1 >= n.height) ? true : false,
                        r = false === n;
                    r && m.push(f)
                }
                return m
            }
            function m(b) {
                var c = .01 * b.width
                  , d = .01 * b.height;
                return {
                    tl: [b.left + c, b.top + d],
                    m: [b.left + (b.right - b.left) / 2, b.top + (b.bottom - b.top) / 2],
                    br: [b.right - c, b.bottom - d]
                }
            }
            function r(g, c) {
                var d = {
                    corners: [],
                    addCorner: function(g) {
                        var c = this;
                        b.a.forEach(g, function(g) {
                            -1 === b.a.indexOf(c.corners, g) && c.corners.push(g)
                        })
                    }
                }
                  , f = b.e.e(g)
                  , f = e(function(c) {
                    var k = new b.n.j(g)
                      ,
                    d = new b.n.j(c);
                    k.changeReferenceFrame(d);
                    return {
                        rect: k,
                        frame: c,
                        doc: c.ownerDocument
                    }
                }, f);
                f.unshift({
                    rect: new b.n.j(g),
                    frame: g,
                    doc: g.ownerDocument
                });
                b.a.forEach(f, function(b) {
                    var g = m(b.rect);
                    d.addCorner(x(g, b.doc, b.frame, c))
                });
                return d.corners
            }
            b.n = {};
            var browserSupported = b.d.a
              , v = {};
            b.n.a = .5;
            b.n.b = 236425;
            b.n.c = .98;
            b.n.d = void 0;
            b.n.e = function(g, c) {
                c = c || false;
                return function(d, e) {
                    var m = d.ao.skin ? b.n.f(d, e) : h(d, e);
                    m.isVisible = c ? m.percv > g : m.percv >= g;
                    m.elGeo && (m.elGeo.threshold = g);
                    return m
                }
            }
            ;
            b.n.f = function(g, c) {
                var d = h(g, c)
                  , e = b.n.g(d, g)
                  , m = b.n.c;
                d.isVisible = d.percv >= e;
                d.isFullyVisible = d.percv >= m;
                d.elGeo && (d.elGeo.threshold = e);
                g.videoIsFullscreen && 0 < d.percv && (d.isVisible = true);
                .8 <= d.percv && (d.isDentsuVisible = true);
                b.n.d ? d.percv > b.n.d && (b.n.d = d.percv) : b.n.d = d.percv;
                return d
            }
            ;
            b.n.g = function(g, c) {
                return b.n.a
            }
            ;
            b.n.isNewBrowser = function() {
                return browserSupported;
            }
            ;
            b.n.i = function(b, c) {
                browserSupported && v.hasOwnProperty(c) || f(b);
                return v[c]
            }
            ;
            b.n.k = b.d.ak;
            b.n.j = function(g, c, d, e) {
                try {
                    this.rect = d || g.getBoundingClientRect && g.getBoundingClientRect() || {}
                } catch (m) {
                    this.rect =
                    d || g && {
                        top: g.offsetTop,
                        left: g.offsetLeft,
                        width: g.offsetWidth,
                        height: g.offsetHeight,
                        bottom: g.offsetTop + g.offsetHeight,
                        right: g.offsetLeft + g.offsetWidth
                    } || {}
                }
                d = "left right top bottom width height".split(" ");
                for (e = 0; e < d.length; e++) {
                    var f = d[e];
                    this[f] = this.rect[f]
                }
                g && g.CLIPCHECKINGTARGET && (d = b.a.bw(g.CLIPCHECKINGTARGET.style.clip)) && (this.right = this.left + d.right,
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
                    top: Number(d) +
                    Number(b.top),
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
            b.n.l = function(c, k) {
                var d = n(c.left, c.right, k.left, k.right)
                  , e = n(c.top, c.bottom, k.top, k.bottom);
                return new b.n.j(void 0,void 0,{
                    left: d[0],
                    right: d[1],
                    top: e[0],
                    bottom: e[1]
                })
            }
            ;
            b.n.n = d;
            b.n.o = h;
            b.n.p = function(c) {
                var k = c.aa;
                c = c.zr;
                if (k) {
                    if (b.d.r)
                        k = r(k, c);
                    else
                        var d = new b.n.j(k)
                          , d = m(d)
                          , k = x(d, b.d.c.document,
                        k, c);
                    return {
                        half: 1 < k.length ? true : false,
                        full: 3 === k.length ? true : false
                    }
                }
            }
        })(q);
        (function(b) {
            b.i = {};
            var l = b.a.l()
              , f = null  !== l
              , h = -1 !== navigator.userAgent.indexOf("Chrome")
              , e = false
              , c = function() {
                var b = navigator.appVersion.match(/Windows NT (\d\.\d)/);
                return b ? parseFloat(b[1]) : -1
            }()
              , n = 6.2 <= c;
            b.i.b = l;
            b.i.c = f;
            b.i.d = h;
            b.i.e = c;
            b.i.f = n;
            var d = {
                FRAME_RATE: "fr",
                STAGE_WIDTH: "sd",
                ACTIVE_STAGE_WIDTH: "asd",
                THROTTLE: "td",
                RAPID_THROTTLE: "rtd"
            };
            b.i.g = d;
            b.i.h = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor");
            b.i.i = b.a.o();
            b.i.j = false;
            if (b.i.h)
                try {
                    var x = parseInt(navigator.userAgent.match(/Version\/(\d)/)[1], 10);
                    b.i.j = 5 < x
                } catch (m) {}
            b.i.k = false;
            b.i.l = function(b) {
                if (!b.currentFocusState)
                    b.skipWidthCheck = true;
                else if ("topLeft" !== b.config.name && "bottomRight" !== b.config.name) {
                    var c = b.manager.getPixelByName("topLeft")
                      , d = b.manager.getPixelByName("bottomRight")
                      , c = c.viewstates[b.manager.getTargetViewState()].inview
                      , d = d.viewstates[b.manager.getTargetViewState()].inview;
                    b.skipWidthCheck = c || d ? false : true
                }
            }
            ;
            b.i.m = function(c) {
                if (c.currentFocusState) {
                    if ("center" !=
                    c.config.name) {
                        var d, e, f = (d = c.manager.getPixelByName("center")) && (e = d.viewstates[c.manager.getTargetViewState()]) && e.inview;
                        d = c.manager.reachedAnyInview;
                        if (!f && d) {
                            c.skipWidthCheck = true;
                            return
                        }
                    }
                    var g, k;
                    "undefined" !== typeof c.manager.adNum && (g = b.a.bq(c.manager.adNum)) && (k = b.o.a(g, true),
                    b.o.b(g, 1));
                    !k || "bottomLeft" != c.config.name && "topRight" != c.config.name ? c.skipWidthCheck = false : c.killWidthCheck = true
                } else
                    c.skipWidthCheck = true
            }
            ;
            b.i.n = function(c) {
                var d = b.i.m
                  , e = {
                    insertableFunc: b.i.insertableFunc,
                    pixels: [{
                        name: "center",
                        id: "moatPx" +
                        c.zr + "_" + t.ceil(1E6 * t.random()),
                        target: c.aa,
                        container: c.aa.parentNode,
                        position: {
                            top: "50%",
                            left: "50%"
                        },
                        onWidthCheck: d
                    }, {
                        name: "topLeft",
                        id: "moatPx" + c.zr + "_" + t.ceil(1E6 * t.random()),
                        target: c.aa,
                        container: c.aa.parentNode,
                        position: {
                            top: "0px",
                            left: "0px"
                        },
                        onWidthCheck: d
                    }, {
                        name: "bottomRight",
                        id: "moatPx" + c.zr + "_" + t.ceil(1E6 * t.random()),
                        target: c.aa,
                        container: c.aa.parentNode,
                        position: {
                            top: "100%",
                            left: "100%"
                        },
                        onWidthCheck: d
                    }]
                };
                e.pixels.push({
                    name: "dentsuTopLeft",
                    id: "moatPx" + c.zr + "_" + t.ceil(1E6 * t.random()),
                    target: c.aa,
                    container: c.aa.parentNode,
                    position: {
                        top: "20%",
                        left: "20%"
                    },
                    onWidthCheck: d
                });
                e.pixels.push({
                    name: "dentsuBottomRight",
                    id: "moatPx" + c.zr + "_" + t.ceil(1E6 * t.random()),
                    target: c.aa,
                    container: c.aa.parentNode,
                    position: {
                        top: "80%",
                        left: "80%"
                    },
                    onWidthCheck: d
                });
                return e
            }
            ;
            b.i.p = function(c, d) {
                var e = false
                  , f = false;
                b.a.forEach(c.pixels, function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (e = true);
                    "100%" == b.config.position.left && "100%" == b.config.position.top && b.measurable &&
                    b.viewstates && b.viewstates[d] && (f = true)
                });
                return e && f ? true : false
            }
            ;
            b.i.q = function(c, d) {
                var e = false;
                b.a.forEach(c.pixels, function(b) {
                    if (b.config && "50%" == b.config.position.left && "50%" == b.config.position.top && b.viewstates && b.viewstates[d])
                        return e = true,
                        false
                });
                return e
            }
            ;
            b.i.r = function(c, d) {
                var e = false
                  , f = false
                  , g = false
                  , k = false;
                b.a.forEach(c.pixels, function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (e = true);
                    "100%" == b.config.position.left && "100%" == b.config.position.top &&
                    b.measurable && b.viewstates && b.viewstates[d] && (g = true);
                    b.config && "20%" == b.config.position.left && "20%" == b.config.position.top && b.viewstates && b.viewstates[d] && (f = true);
                    b.config && "80%" == b.config.position.left && "80%" == b.config.position.top && b.viewstates && b.viewstates[d] && (k = true)
                });
                return e && k && g && f
            }
            ;
            b.i.s = function(c, d) {
                var e = false;
                b.a.forEach(c.pixels, function(b) {
                    if (b.config && b.viewstates && b.viewstates[d] && (e = b.viewstates[d].inview))
                        return false
                });
                return e
            }
            ;
            b.i.t = function(c, d) {
                var e = false;
                b.a.forEach(c.pixels, function(b) {
                    if (b.config &&
                    "50%" == b.config.position.left && "50%" == b.config.position.top && b.viewstates && b.viewstates[d])
                        return e = b.viewstates[d].inview,
                        false
                });
                return e
            }
            ;
            b.i.u = function(c, d) {
                if (!c.inview)
                    return false;
                var e = false
                  , f = false;
                b.a.forEach(c.pixels, function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (e = b.viewstates[d].inview);
                    "100%" == b.config.position.left && "100%" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (f = b.viewstates[d].inview)
                });
                return e &&
                f ? true : false
            }
            ;
            b.i.v = function(c, d) {
                if (c.inview)
                    return true;
                var e = false
                  , f = false
                  , g = false
                  , k = false;
                b.a.forEach(c.pixels, function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (e = b.viewstates[d].inview);
                    "100%" == b.config.position.left && "100%" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (g = b.viewstates[d].inview);
                    b.config && "20%" == b.config.position.left && "20%" == b.config.position.top && b.viewstates && b.viewstates[d] && (f = b.viewstates[d].inview);
                    b.config && "80%" == b.config.position.left && "80%" == b.config.position.top && b.viewstates && b.viewstates[d] && (k = b.viewstates[d].inview)
                });
                return e && f || g && k
            }
            ;
            b.i.w = function(c, d) {
                if (!c.inview)
                    return false;
                var e = false
                  , f = false
                  , g = false
                  , k = false;
                b.a.forEach(c.pixels, function(b) {
                    "0px" == b.config.position.left && "0px" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (e = b.viewstates[d].inview);
                    "100%" == b.config.position.left && "100%" == b.config.position.top && b.measurable && b.viewstates && b.viewstates[d] && (g = b.viewstates[d].inview);
                    b.config && "20%" == b.config.position.left && "20%" == b.config.position.top && b.viewstates && b.viewstates[d] && (f = b.viewstates[d].inview);
                    b.config && "80%" == b.config.position.left && "80%" == b.config.position.top && b.viewstates && b.viewstates[d] && (k = b.viewstates[d].inview)
                });
                return e && k || g && f
            }
            ;
            b.i.x = function(b) {
                b.periscopeManager && b.periscopeManager.killAllPixels()
            }
            ;
            b.i.y = function(c) {
                b.j.b.addEventCallback("adKilled", b.i.x, {
                    once: true,
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
            b.i.a = false;
            b.i.insertableFunc = function() {
                return 1 === t.floor(100 * t.random()) ? !b.a.y() && (f || h || b.i.j) : !b.a.y() && !b.d.a && (f || h || b.i.j)
            }
            ;
            b.i.ab = function(c) {
                return c && c.periscopeManager ? (b.o.c(c, true) && c.periscopeManager.killDentsuPixels(),
                c.periscopeManager.getViewStats()) : {
                    isVisible: false
                }
            }
            ;
            b.i.ac = function() {}
            ;
            b.i.z = function(c) {
                if ("object" !== typeof c || "function" !== typeof c.insertableFunc ||
                !b.a.bj(c.pixels) || 0 == c.pixels.length)
                    return false;
                var d = false;
                b.a.forEach(c.pixels, function(b) {
                    b.id && b.target && b.container && "object" === typeof b.position && "string" === typeof b.position.top && "string" === typeof b.position.left || (d = true)
                });
                return !d
            }
            ;
            b.i.ad = function() {
                return n && f && 10 <= l
            }
            ;
            b.i.ae = /([0-9]+(?:\.[0-9]+)?)(\%|px)/i;
            b.i.af = function() {
                var c = {};
                return function(d) {
                    if ("string" !== typeof d)
                        return false;
                    if ("undefined" !== typeof c[d])
                        return c[d];
                    var e, f;
                    (e = d.match(b.i.ae)) && 3 == e.length && (f = e[2],
                    e = -1 != e[1].indexOf(".") ?
                    parseInt(e[1], 10) : parseFloat(e[1], 10));
                    if ("number" !== typeof e)
                        return false;
                    c[d] = {
                        val: e,
                        type: f
                    };
                    return c[d]
                }
            }();
            b.i.ag = function(c, e) {
                this.config = c;
                this.measurable = this.inserted = false;
                this.viewstates = {};
                this.manager = e;
                this.killed = false;
                this.cbNames = [];
                this.killWidthCheck = this.skipWidthCheck = false;
                this.loopIds = [];
                this.getPeriscopeAssetURI = function() {
                    return b.d.protocol + "//" + b.d.ab + "/swf/p6.v3.swf"
                }
                ;
                this.insertIntoDOM = function() {
                    if (this.inserted)
                        return false;
                    var c, g;
                    g = f ? c = 2 : c = 1;
                    var d = "position: absolute; width: " + c + "px; height: " +
                    g + "px; z-index: -9999;";
                    b.i.j && (d += "-webkit-transform: translate3d(0, 0, 0);");
                    var e = this.config.id
                      , m = this.getPeriscopeAssetURI()
                      , n = this.calcPosition();
                    if (!n)
                        return false;
                    var n = d + "left: " + n.left + "px; top: " + n.top + "px;"
                      , h = d + "left: 0px; top: 0px;";
                    this.targetDoc = d = this.config.target.ownerDocument;
                    var x = "defaultView" in d ? d.defaultView : d.parentWindow
                      , r = "Moat#PSCB" + t.floor(1E8 * t.random());
                    x[r] = {
                        fn: this.onStateChange,
                        ct: this
                    };
                    this.cbNames.push(r);
                    x = "sco=" + encodeURIComponent(r) + "&tvs=" + this.manager.getTargetViewState();
                    r = d.createElement("div");
                    r.id = "moatPxDiv" + t.ceil(1E6 * t.random());
                    r.style.width = "0px";
                    r.style.height = "0px";
                    r.style.position = "absolute";
                    r.style.top = "0px";
                    r.style.left = "0px";
                    this.wrapperDiv = r;
                    b.i.ad() ? (h = function(b, c, g) {
                        var k = document.createElement("param");
                        k.setAttribute("name", c);
                        k.setAttribute("value", g);
                        b.appendChild(k)
                    }
                    ,
                    d = d.createElement("OBJECT"),
                    d.setAttribute("data", m),
                    d.setAttribute("id", e),
                    d.setAttribute("name", e),
                    d.setAttribute("style", n),
                    d.setAttribute("width", c + ""),
                    d.setAttribute("height",
                    g + ""),
                    h(d, "flashvars", x),
                    h(d, "wmode", "transparent"),
                    h(d, "bgcolor", ""),
                    h(d, "allowscriptaccess", "always"),
                    b.a.be(r, this.config.container),
                    r.appendChild(d)) : (b.a.be(r, this.config.container),
                    r.innerHTML = '<object type="application/x-shockwave-flash" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="' + c + '" height="' + g + '" style="' + n + '" id="' + e + '"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + m + '" /><param name="quality" value="low" /><param name="hasPriority" value="true" /><param name="FlashVars" value="' +
                    x + '" /><param name="bgcolor" value="" /><param name="wmode" value="transparent" /><embed type="application/x-shockwave-flash" src="' + m + '" quality="low" flashvars="' + x + '" bgcolor="" wmode="transparent" width="' + c + '" height="' + g + '" id="' + e + 'e" name="' + e + '" style="' + h + '" hasPriority="true" allowscriptaccess="always" allowFullScreen="false" type="application/x-shockwave-flash" /></object>');
                    return this.inserted = true
                }
                ;
                this.startIntervals = function() {
                    var c = this.getPixelElement();
                    if (!c)
                        return false;
                    if (8 == l && (this.manager.getTargetViewState() ===
                    d.STAGE_WIDTH || this.manager.getTargetViewState() === d.ACTIVE_STAGE_WIDTH)) {
                        var g = "positionToggle#" + this.config.id;
                        this.loopIds.push(g);
                        b.g.j()[g] || (this.positionTogglingEnabled = true,
                        this.positionOffsets || (this.positionOffsets = {}),
                        b.g.b(this.positionToggle, {
                            pxSwf: c,
                            pxRef: this
                        }, 100, g))
                    }
                    this.manager.getTargetViewState() === d.STAGE_WIDTH && (g = "stageWidthLoop#" + this.config.id,
                    this.loopIds.push(g),
                    b.g.j()[g] || b.g.b(this.stageWidthToggle, {
                        pxSwf: c,
                        pxRef: this,
                        originalWidth: c.style.width,
                        widthRe: /^[0-9\.]+/i,
                        updates: 0
                    },
                    150, g));
                    this.manager.getTargetViewState() === d.ACTIVE_STAGE_WIDTH && (g = "activeStageWidthLoop#" + this.config.id,
                    this.loopIds.push(g),
                    b.g.j()[g] || b.g.b(this.stageWidthToggle, {
                        pxSwf: c,
                        pxRef: this,
                        originalWidth: c.style.width,
                        widthRe: /^[0-9\.]+/i,
                        updates: 0,
                        active: true,
                        onWidthCheck: this.config.onWidthCheck
                    }, 200, g))
                }
                ;
                this.stageWidthToggle = function(b) {
                    if (!(b.pxSwf && b.pxSwf.parentNode && b.pxRef))
                        return false;
                    if (b.onWidthCheck) {
                        b.onWidthCheck(b.pxRef);
                        if (b.pxRef.killWidthCheck)
                            return b.pxRef.kill(),
                            false;
                        if (b.pxRef.skipWidthCheck)
                            return true
                    }
                    var c;
                    if (b.parsedWidth || (c = b.pxSwf.style.width.match(b.widthRe)))
                        if (b.parsedWidth || (b.parsedWidth = parseInt(c[0], 10)),
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
                        return false;
                    0 > b.pxRef.positionOffsets.yOffset ? (b.pxRef.positionOffsets.yOffset = 0,
                    b.pxRef.positionOffsets.xOffset =
                    0) : (b.pxRef.positionOffsets.yOffset = -2E3,
                    b.pxRef.positionOffsets.xOffset = -2E3);
                    b.pxRef.updatePosition(true)
                }
                ;
                this.onStateChange = function(c) {
                    if (!this.measurable) {
                        this.measurable = true;
                        var g;
                        c && c[0] && c[0].rev && (g = c[0].rev.match(b.i.ah)) && 3 == g.length && (b.i.ai = g[1],
                        b.i.i = g[2]);
                        this.updateFocusState();
                        this.startIntervals()
                    }
                    this.inserted && this.killed ? (this.killed = false,
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
                      , g = b.i.af(g)
                      , e = 0
                      , f = 0;
                    this.config.positionTarget ? this.config.positionTargetWindow ? this.targetRect = new b.n.j(this.config.positionTarget,this.config.positionTargetWindow,null ,true) : (this.targetRect = new b.n.j(this.config.positionTarget,null ,null ,true),
                    this.config.positionTargetWindow = this.targetRect.win) : (this.targetRect = this.targetRect ? new b.n.j(this.config.target,this.targetRect.win,null ,true) : new b.n.j(this.config.target,
                    null ,null ,true),
                    0 == this.targetRect.left && 0 == this.targetRect.right && 0 == this.targetRect.top && 0 == this.targetRect.bottom && "EMBED" == this.targetRect.el.nodeName && null  == this.targetRect.el.offsetParent && this.config.target.parentNode && (this.targetRect = new b.n.j(this.config.target.parentNode,null ,null ,true),
                    this.config.positionTarget = this.config.target.parentNode));
                    var e = b.n.n("left", this.targetRect.win), f = b.n.n("top", this.targetRect.win), m;
                    this.wrapperDiv && (m = this.wrapperDiv.offsetParent) && "BODY" !== m.nodeName ?
                    this.offsetRect = this.offsetRect ? new b.n.j(m,this.offsetRect.win,null ,true) : new b.n.j(m,null ,null ,true) : this.offsetRect = {
                        left: -e,
                        top: -f
                    };
                    if (!d || !g)
                        return false;
                    if ("%" == d.type)
                        c.relativeTop = d.val / 100 * this.targetRect.height,
                        c.top = this.targetRect.top - this.offsetRect.top + d.val / 100 * this.targetRect.height;
                    else if ("px" == d.type)
                        c.relativeTop = d.val,
                        c.top = this.targetRect.top - this.offsetRect.top + d.val;
                    else
                        return false;
                    if ("%" == g.type)
                        c.relativeLeft = g.val / 100 * this.targetRect.width,
                        c.left = this.targetRect.left - this.offsetRect.left +
                        g.val / 100 * this.targetRect.width;
                    else if ("px" == g.type)
                        c.relativeLeft = g.val,
                        c.left = this.targetRect.left - this.offsetRect.left + g.val;
                    else
                        return false;
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
                        return false;
                    this.lastPositionUpdate = c;
                    b = this.calcPosition();
                    if (!b)
                        return false;
                    this.positionOffsets && (b.left += this.positionOffsets.xOffset || 0,
                    b.top += this.positionOffsets.yOffset || 0);
                    g.left = this.width + b.relativeLeft > this.targetRect.width ? t.floor(b.left - this.width) + "px" : 0 == b.relativeLeft ? t.floor(b.left) + "px" : t.floor(b.left - .5 * this.width) + "px";
                    g.top = this.height + b.relativeTop > this.targetRect.height ? t.floor(b.top - this.height) + "px" : 0 == b.relativeTop ? t.floor(b.top) + "px" : t.floor(b.top - .5 * this.height) + "px";
                    return true
                }
                ;
                this.updateFocusState = function() {
                    var b = this.getPixelElement();
                    if (b &&
                    this.measurable)
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
                        C && C[b] && (window.clearTimeout(C[b].tid),
                        C[b] = false)
                    });
                    for (var c = 0, d = this.cbNames.length; c < d; c++) {
                        window[this.cbNames[c]] = null ;
                        try {
                            delete window[this.cbNames[c]]
                        } catch (e) {}
                    }
                    return this.wrapperDiv && this.wrapperDiv.parentNode ? (this.wrapperDiv.parentNode.removeChild(this.wrapperDiv),
                    this.killed = true,
                    this.inserted = false,
                    this.element = this.wrapperDiv = null ,
                    true) : false
                }
                ;
                this.getPixelElement = function() {
                    var b, c = false, g = this.config.id;
                    if (this.targetDoc) {
                        b = this.targetDoc.getElementById(g);
                        if (c = !!(b && b.isPxSwf && b.isPxSwf()))
                            return b;
                        b = this.targetDoc.getElementById(g + "e");
                        if (c = !!(b && b.isPxSwf && b.isPxSwf()))
                            return b
                    }
                    return false
                }
                ;
                if ("embed" === c.container.nodeName || "object" === c.container.nodeName) {
                    var n;
                    b.a.forEach(b.a.v(c.container), function(b) {
                        if ("embed" !== b.nodeName && "object" !== b.nodeName)
                            return n = b,
                            false
                    });
                    if (!n)
                        return false;
                    this.config.container = n
                }
                if (!this.insertIntoDOM())
                    return false;
                this.element = this.targetDoc.getElementById(this.config.id);
                if (!this.element)
                    return false;
                var h = new b.n.j(this.element,null ,null ,true);
                this.width = h.width;
                this.height = h.height;
                if (!this.updatePosition())
                    return false;
                this.currentFocusState = b.focus.pageIsVisible();
                this.focusCheckingLoop = function(c) {
                    if (!c.pxRef)
                        return false;
                    c = c.pxRef;
                    c.currentFocusState != b.focus.pageIsVisible() && (c.currentFocusState = !c.currentFocusState,
                    c.killed || c.updateFocusState())
                }
                ;
                this.rebuildOnFocusLoss = function() {
                    f && (this.currentFocusState || this.killed || !this.inserted ? this.currentFocusState && this.killed && !this.inserted && (this.insertIntoDOM.call(this),
                    (this.element = this.targetDoc.getElementById(this.config.id)) && this.updatePosition()) : this.kill())
                }
                ;
                this.positionUpdateLoop = function(b) {
                    if (!b.pxRef)
                        return false;
                    b.pxRef.killed || b.pxRef.updatePosition()
                }
                ;
                var h = "focusCheckingLoop#" + this.config.id
                  , g = "positionUpdateLoop#" + this.config.id;
                this.loopIds.push(h);
                this.loopIds.push(g);
                b.g.b(this.focusCheckingLoop,
                {
                    pxRef: this
                }, 200, h);
                b.g.b(this.positionUpdateLoop, {
                    pxRef: this
                }, 500, g);
                this.inserted = true;
                this.insertionTime = (new y).getTime()
            }
            ;
            b.i.ah = /([0-9a-z]+-[a-z]+)-(.*)/i;
            b.i.aa = function(c, n) {
                this.insertedAllSuccessfully = this.insertSuccessful = false;
                this.pixels = [];
                this.adNum = n;
                this.twentyPercentInView = this.dentsuInview = this.dentsuMeasurable = this.anyMeasurable = this.fullyMeasurable = this.measurable = this.reachedAnyInview = this.reachedFullyInview = this.reachedInview = this.anyInview = this.fullyInview = this.inview = false;
                this.getPixelByName =
                function(c) {
                    var g;
                    b.a.forEach(this.pixels, function(b) {
                        if (b.config.name && b.config.name == c)
                            return g = b,
                            false
                    });
                    return g || false
                }
                ;
                this.getTargetViewState = function() {
                    var c = d.FRAME_RATE;
                    f && (c = d.ACTIVE_STAGE_WIDTH);
                    b.i.j && (c = d.ACTIVE_STAGE_WIDTH);
                    return c
                }
                ;
                this.onStateChange = function(c, g) {
                    var d = this.getTargetViewState()
                      , f = b.focus.pageIsVisible()
                      , m = "undefined" != typeof B && B[this.adNum];
                    this.anyMeasurable || (this.anyMeasurable = true);
                    this.fullyMeasurable || (this.fullyMeasurable = b.i.p(this, d));
                    this.measurable || (this.measurable =
                    b.i.q(this, d),
                    b.i.aj = (new y).getTime());
                    this.dentsuMeasurable || (this.dentsuMeasurable = b.i.r(this, d));
                    if (1 == g.length) {
                        if (g[0].name != d)
                            return false
                    } else {
                        var n = true;
                        b.a.forEach(g, function(b) {
                            if (b.name == d)
                                return n = false
                        });
                        if (n || !f)
                            return false
                    }
                    this.anyMeasurable && (this.anyInview = b.i.s(this, d));
                    this.measurable && ((this.anyInview = b.i.s(this, d)) && !this.reachedAnyInview && (this.reachedAnyInview = true),
                    (this.inview = b.i.t(this, d)) && !this.reachedInview && (this.reachedInview = true),
                    !e && b.i.j && m && (e = true,
                    b.p.a(m)));
                    this.fullyMeasurable &&
                    (this.fullyInview = b.i.u(this, d)) && !this.reachedFullyInview && (this.reachedFullyInview = true);
                    this.dentsuMeasurable && (this.dentsuInview = b.i.w(this, d),
                    this.twentyPercentInView = b.i.v(this, d));
                    b.j.b.zaxs("periscope:onStateChange", m)
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
                        this.sentReachedAnyInview = true,
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
                    b.a.forEach(c.pixels, function(c, g) {
                        this.pixels.push(new b.i.ag(c,this));
                        this.pixels[g].inserted && (h++,
                        this.insertSuccessful = true)
                    }, this);
                    this.insertedAllSuccessfully =
                    h === this.pixels.length
                }
            }
        })(q);
        (function(b) {
            function l(b, c, g) {
                b.IR5.MIN[g] = t.min(c, b.IR5.MIN[g]) || c || 1;
                b.IR5.MAX[g] = t.max(c, b.IR5.MAX[g]) || c
            }
            function f(b, c) {
                c.be = t.max("undefined" !== typeof c.be ? c.be : 0, b - c.bf);
                "undefined" === typeof c.by && 500 <= c.be && (c.by = c.bk)
            }
            function h(c) {
                c.az === b.q.a.d.a ? c.az = b.q.a.d.b : c.az === b.q.a.d.b && (c.az = b.q.a.d.a)
            }
            function e(c) {
                c.ba === b.q.a.d.a ? c.ba = b.q.a.d.b : c.ba === b.q.a.d.b && (c.ba = b.q.a.d.a)
            }
            function c(c) {
                c.ax === b.q.a.b.a ? c.ax = b.q.a.b.b : c.ax === b.q.a.b.b && (c.ax = b.q.a.b.a)
            }
            function n(c) {
                c.ay === b.q.a.c.a ? c.ay = b.q.a.c.b : c.ay === b.q.a.c.b && (c.ay = b.q.a.c.a)
            }
            function d(b, c) {
                "undefined" === typeof c.bk && (c.bk = 0);
                c.bk += b - c.bo;
                c.bo = b
            }
            function x(b, c) {
                "undefined" === typeof c.bl && (c.bl = 0);
                c.bl += b - c.bp;
                c.bp = b
            }
            function m(b, c) {
                "undefined" === typeof c.bg && (c.bg = 0);
                "undefined" === typeof c.bc && (c.bc = 0);
                c.bu = b - c.bs;
                c.bu > c.bc && (c.bc = c.bu);
                c.bg += b - c.bq;
                500 <= c.bc && "undefined" === typeof c.bw && (c.bk += b - c.bo,
                c.bw = c.bk);
                c.bq = b
            }
            function r(b, c) {
                "undefined" === typeof c.bh && (c.bh = 0);
                "undefined" === typeof c.bd &&
                (c.bd = 0);
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
                    500 <=
                    (new y).getTime() - ha && (b.q.d({
                        type: "park"
                    }, c),
                    clearInterval(k),
                    c.au = b.q.a.a.a)
                }
                var g = c.au;
                if (g === b.q.a.a.a) {
                    ha = (new y).getTime();
                    var k = b.g.g(d, 50);
                    c.au = b.q.a.a.b
                } else
                    g === b.q.a.a.b && (ha = (new y).getTime())
            }
            ;
            b.q.e = function(c) {
                function d() {
                    3E3 <= (new y).getTime() - ia && (b.q.f({
                        type: "park"
                    }, c),
                    clearInterval(k),
                    c.av = b.q.a.a.a)
                }
                var g = c.av;
                if (g === b.q.a.a.a) {
                    ia = (new y).getTime();
                    var k = b.g.g(d, 50);
                    c.av = b.q.a.a.b
                } else
                    g === b.q.a.a.b && (ia = (new y).getTime())
            }
            ;
            b.q.g = function(c, e) {
                var g = c.type;
                if (e.az === b.q.a.d.a) {
                    if ("mouseover" ===
                    g || "mousemove" === g)
                        e.bo = (new y).getTime(),
                        h(e)
                } else if (e.az === b.q.a.d.b) {
                    "mousemove" === g && d((new y).getTime(), e);
                    if ("mouseout" === g || "blur" === g)
                        d((new y).getTime(), e),
                        h(e);
                    "scooper" === g && d((new y).getTime(), e)
                }
            }
            ;
            b.q.h = function(c, d) {
                var g = c.type;
                if (d.ba === b.q.a.d.a) {
                    if ("mouseover" === g || "mousemove" === g)
                        d.bp = (new y).getTime(),
                        e(d)
                } else if (d.ba === b.q.a.d.b) {
                    "mousemove" === g && x((new y).getTime(), d);
                    if ("mouseout" === g || "blur" === g)
                        x((new y).getTime(), d),
                        e(d);
                    "scooper" === g && x((new y).getTime(), d)
                }
            }
            ;
            b.q.d = function(d,
            e) {
                if (2 != e.an) {
                    var g = d.type;
                    if (e.ax === b.q.a.b.a) {
                        if ("mouseover" === g || "mousemove" === g)
                            e.bq = (new y).getTime(),
                            e.bs = (new y).getTime(),
                            c(e)
                    } else
                        e.ax === b.q.a.b.b && ("mousemove" !== g && "mouseout" !== g || m((new y).getTime(), e),
                        "park" === g && m((new y).getTime() - 500, e),
                        "mouseout" !== g && "park" !== g || c(e))
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
                        d.ay === b.q.a.c.b && ("mousemove" !== g && "mouseout" !== g ||
                        r((new y).getTime(), d),
                        "park" === g && r((new y).getTime() - 3E3, d),
                        "mouseout" !== g && "park" !== g || n(d))
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
                    d.bb == b.q.a.e.b && ("mouseout" == g ? (f((new y).getTime(), d),
                    d.bb = b.q.a.e.a) : "mousemove" != g && "scooper" != g || f((new y).getTime(), d))
            }
        })(q);
        (function(b) {
            function l(c) {
                b.focus.pageIsPrerendered() || b.g.f(document, m, l, "pr")
            }
            function f(b) {
                "undefined" == typeof n && (n = b)
            }
            b.focus = {};
            var h =
            navigator.userAgent, h = -1 < h.indexOf("Safari") && -1 == h.indexOf("Chrome") && -1 == h.indexOf("Chromium") && !b.a.y(), e = b.a.m() && !b.a.y(), c = "undefined" !== typeof document.hasFocus, n, d = {
                visible: 0,
                hidden: 1,
                prerender: 2
            }, x, m, r, z;
            "undefined" !== typeof document.hidden ? (x = "hidden",
            m = "visibilitychange") : "undefined" !== typeof document.mozHidden ? (x = "mozHidden",
            m = "mozvisibilitychange") : "undefined" !== typeof document.msHidden ? (x = "msHidden",
            m = "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (x = "webkitHidden",
            m = "webkitvisibilitychange");
            for (var v = ["v", "mozV", "msV", "webkitV"], g = 0; g < v.length; g++) {
                var k = v[g] + "isibilityState";
                if ("undefined" !== typeof document[k]) {
                    r = k;
                    break
                }
            }
            z = "undefined" !== typeof x;
            var u, ja;
            "undefined" !== typeof window.requestAnimationFrame ? u = "requestAnimationFrame" : "undefined" !== typeof window.webkitRequestAnimationFrame && (u = "webkitRequestAnimationFrame");
            ja = h && "string" == typeof u && !z;
            var F = (new y).getTime();
            ja && function ka() {
                F = (new y).getTime();
                window[u](ka)
            }();
            b.focus.getFocusMethod = function() {
                return n
            }
            ;
            b.focus.visibilitychange = m;
            b.focus.setFocusListeners = function() {}
            ;
            b.focus.getQueryString = function(b) {
                b = {};
                b.em = n;
                A && (b.eo = 1);
                "undefined" != typeof r && (b.en = d[document[r]]);
                return b
            }
            ;
            b.focus.supportsPageVisAPI = function() {
                return z
            }
            ;
            b.focus.checkFocus = function() {
                if (b.focus.supportsPageVisAPI())
                    return f(0),
                    !document[x];
                if (ja)
                    return f(1),
                    100 > (new y).getTime() - F;
                if (e && c)
                    return f(2),
                    document.hasFocus();
                f(3);
                return true
            }
            ;
            _lastFocusState = false;
            b.focus.pageIsVisible = function() {
                var c = b.focus.checkFocus();
                if (_lastFocusState !=
                c && w && w.swde)
                    try {
                        w.swde.zaxs("focusStateChange", c)
                    } catch (g) {}
                return _lastFocusState = c
            }
            ;
            b.focus.pageIsPrerendered = function() {
                return "undefined" !== typeof r ? "prerender" == document[r] : false
            }
            ;
            b.focus.pageIsVisible();
            b.focus.pageIsPrerendered() && (b.g.e(document, m, l, "pr"),
            b.j.b.addEventCallback("allLocalAdsKilled", function() {
                b.g.f(document, m, l, "pr")
            }, {
                once: true
            }));
            var A = b.focus.pageIsPrerendered()
        })(q);
        (function(b) {
            function l(c, g, d, e, f) {
                ("remove" === f ? b.g.f : b.g.e)(c, g, function(g) {
                    g = g || this.event;
                    var e = g.currentTarget || c;
                    try {
                        var f =
                        e[N]
                    } catch (m) {
                        f = e[N]
                    }
                    if (f = B[f]) {
                        var n;
                        n = g;
                        var h = e.getBoundingClientRect();
                        n = -1 != n.type.indexOf("touch") ? {
                            x: parseInt(n.changedTouches[0].clientX - h.left, 10),
                            y: parseInt(n.changedTouches[0].clientY - h.top, 10)
                        } : {
                            x: parseInt(n.clientX - h.left, 10),
                            y: parseInt(n.clientY - h.top, 10)
                        };
                        f.aj = n.x;
                        f.ak = n.y;
                        f.dm || (f.cb = 2 == b.focus.getFocusMethod() ? f.counters.laxDwell.tCur : f.counters.strictDwell.tCur,
                        f.dm = 1);
                        d.call(c, g, e, f)
                    }
                }, e)
            }
            function f(g, d, f) {
                l(g, "click", z, d, f);
                l(g, "mousedown", e, d, f);
                Y ? "mlb.com" === b.a.g() ? isIphoneOrIPod() ||
                b.a.aa() || l(g, "touchstart", c, d, f) : l(g, "touchstart", c, d, f) : (l(g, "mousemove", h, d, f),
                l(g, "mouseover", m, d, f),
                l(g, "mouseout", r, d, f))
            }
            function h(c, d, e) {
                if (!Y && (e.aj !== e.al || e.ak !== e.am)) {
                    b.q.d(c, e);
                    b.q.f(c, e);
                    b.q.g(c, e);
                    b.q.i(c, e);
                    b.q.h(c, e);
                    b.q.b(e);
                    b.q.c(e);
                    b.q.e(e);
                    0 === e.ar.length && (e.ai = g(e));
                    if (100 > e.ar.length || 100 > e.as.length || 100 > e.at.length)
                        e.ar.push(e.aj),
                        e.as.push(e.ak),
                        e.at.push(b.a.q(e));
                    e.al = e.aj;
                    e.am = e.ak
                }
                e.ai !== g(e) && 1 < e.ar.length && v(e, "onMouseMove")
            }
            function e(c, g, d) {
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
                        var e = g - d.ct;
                        d.ct = g;
                        d.cu = t.min(d.cu, e) || e
                    }
                    c.bz = void 0;
                    b.s.a(d, c)
                }
            }
            function n(c, g, e) {
                var f;
                if (2 == c.an || c.hasIframeListener)
                    f = true;
                if (f) {
                    f = g.e;
                    var m = c.ck;
                    m == b.q.a.f.a && 6 === f ? (d(c, 0),
                    c.cl = b.a.q(c),
                    c.ck = b.q.a.f.b) : m == b.q.a.f.b ? 22 === f ? (x(c, g),
                    d(c,
                    e),
                    c.cl = b.a.q(c)) : 7 === f && (1E3 < b.a.q(c) - c.cl ? (clearTimeout(c.cm),
                    g.e = 22,
                    x(c, g),
                    c.cn = 0,
                    c.ck = b.q.a.f.a) : c.ck = b.q.a.f.c) : m == b.q.a.f.c && (6 == f ? (1E3 < b.a.q(c) - c.cl && (clearTimeout(c.cm),
                    c.cn = 0,
                    c.cl = b.a.q(c),
                    d(c, 0)),
                    c.ck = b.q.a.f.b) : 22 == f && (x(c, g),
                    c.ck = b.q.a.f.a,
                    c.cn = 0))
                }
            }
            function d(c, g) {
                var d = 5 > c.cn ? 1E3 : 2 * g
                  , e = {
                    e: 22
                };
                c.cm = b.g.h(function() {
                    n(c, e, d)
                }, d)
            }
            function x(c, g) {
                g.q = c.aq[g.e]++;
                g.m = b.a.q(c);
                c.cl = g.m;
                b.s.a(c, g);
                c.cn++
            }
            function m(c, g, d) {
                b.j.b.zaxs("mouseEvent", d);
                b.q.d(c, d);
                b.q.f(c, d);
                b.q.g(c, d);
                b.q.i(c,
                d);
                b.q.h(c, d);
                n(d, {
                    e: 6
                }, 0)
            }
            function r(c, g, d) {
                b.q.d(c, d);
                b.q.f(c, d);
                b.q.g(c, d);
                b.q.i(c, d);
                b.q.h(c, d);
                n(d, {
                    e: 7
                }, 0)
            }
            function z(c, g, d) {
                b.j.b.zaxs("mouseEvent", d);
                c = {
                    e: 3
                };
                c.q = d.aq[3]++;
                c.x = d.aj;
                c.y = d.ak;
                b.s.a(d, c)
            }
            function v(c, d) {
                c.ai = g(c);
                var e = {
                    e: 1
                };
                e.q = c.aq[1]++;
                e.x = c.ar.join("a");
                e.y = c.as.join("a");
                for (var f = b.a.q(c), m = c.at, n = [], h = 0; h < m.length; h++)
                    isNaN(m[h]) || n.push(t.abs(m[h] - f));
                e.c = n.join("a");
                e.m = f;
                b.s.a(c, e);
                c.ar = [];
                c.as = [];
                c.at = []
            }
            function g(c) {
                return t.floor(b.a.q(c) / 1E3)
            }
            b.r = {};
            b.r.a = function(c) {
                b.j.b.addEventCallback("adKilled",
                b.r.b, {
                    once: true,
                    condition: function(b) {
                        return c.zr == b.zr
                    }
                });
                b.r.c(c)
            }
            ;
            b.r.c = function(b, c) {
                if (true === b.isSkin)
                    for (var g = 0; g < b.elements.length; g++)
                        f(b.elements[g], b.zr + "-" + g, c);
                else
                    f(b.aa, b.zr, c)
            }
            ;
            b.r.d = function(c) {
                for (var d in B)
                    B.hasOwnProperty(d) && (c = B[d]) && (b.q.g({
                        type: "scooper"
                    }, c),
                    b.q.i({
                        type: "scooper"
                    }, c),
                    b.q.h({
                        type: "scooper"
                    }, c),
                    1 < c.ar.length && c.ai !== g(c) && v(c, "scooper"))
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
                !c.hasIframeListener &&
                g.tagName && "iframe" === g.tagName.toLowerCase() && (c.hasIframeListener = true);
                g[N] = c.zr;
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
            } catch (n) {
                l = 117
            }
            var f = "undefined" !== typeof window.devicePixelRatio
              , h = f && t.round(1E3 * window.devicePixelRatio)
              , e = b.d.a && f && "undefined" !== typeof window.innerHeight && "undefined" !== typeof window.outerHeight && t.round(window.devicePixelRatio * (b.d.c.outerHeight -
            b.d.c.innerHeight))
              , c = function() {
                var b = false;
                try {
                    b = "undefined" !== typeof window.mozInnerScreenX && "undefined" !== typeof window.screenX
                } catch (c) {}
                return b
            }();
            b.h.b = function(c, d) {
                var e, m, h, z = {
                    isVisible: false,
                    isFullyVisible: false,
                    percv: 0
                };
                try {
                    h = c.aa.getBoundingClientRect();
                    var v = d || c.WINDOW || b.a.t(c.aa)
                      , g = b.d.ak(v)
                      , k = b.n.l(h, g)
                      , u = v.mozInnerScreenX
                      , ja = v.mozInnerScreenY
                      , q = window.screenX
                      , A = window.screenY
                      , T = b.n.l({
                        left: k.left + u,
                        right: k.right + u,
                        top: k.top + ja,
                        bottom: k.bottom + ja
                    }, {
                        left: q,
                        right: q + window.outerWidth,
                        top: A +
                        l / (f ? window.devicePixelRatio : 1),
                        bottom: A + window.outerHeight
                    })
                      , t = h.width * h.height;
                    e = {
                        area: t,
                        percv: (T.right - T.left) * (T.bottom - T.top) / t
                    };
                    m = b.n.g(e, c)
                } catch (E) {}
                h = b.n.c;
                "undefined" !== typeof e && "undefined" !== typeof m && (z.isVisible = e.percv >= m,
                z.isFullyVisible = e.percv >= h,
                z.percv = e.percv,
                .8 <= e.percv && (z.isDentsuVisible = true));
                return z
            }
            ;
            b.h.a = function() {
                return c
            }
            ;
            b.h.c = function() {
                var b = {};
                b.dl = Number(c);
                "number" !== typeof h || isNaN(h) || (b.dm = h);
                "number" !== typeof e || isNaN(e) || (b.dn = e);
                return b
            }
        })(q);
        (function(b) {
            function getTimeGuardedViewableStateFunc(getViewableState) {
                var previousTime = 0;
                var viewableState;
                return function() {
                    var currentTime = new Date().getTime();
                    if (currentTime - previousTime > 150) {
                      viewableState = getViewableState.apply(this, arguments);
                      previousTime = currentTime;
                    }
                    return viewableState;
                }
            }
            function VideoState(getViewableStateFunc, e, d, f, m) {
                function r(b) {
                    return "number" === typeof b ? b : b.type
                }
                b.a.ae();
                var l = []
                  , v = 0
                  , g = 0
                  , k = 0
                  , u = 0
                  , q = 0
                  , F = 0
                  , A = 0;
                (new y).getTime();
                var T = false, ka = false, mrc_1s = false, Ba = false, w, B, C, D = 0, G = 0, Ca = false, P = false, N = false, S, Z = 0, M = 0, O = 0, Y = false, da = false, V = false, la = false, W = false, aa = 0, X = false, ma = false, ea = false, ha = false, mrc = false, ia = false, qa = b.d.a, ta;
                if (0 === f)
                    var ba = "as"
                      , Q = "ag"
                      , K = "an"
                      , L = "ck"
                      , na = "kw"
                      , fa = "ah"
                      , oa = "aj"
                      , ra = "pg"
                      , Aa = "pf"
                      , ua = "gi"
                      , va = "gf"
                      , wa = "gg"
                      , xa = "ez"
                      , Ca = true
                      ,
                    pa = "dw"
                      , ya = "ka"
                      , za = "kb";
                else
                    1 === f ? (ba = "cc",
                    Q = "bw",
                    K = "bx",
                    L = "ci",
                    na = "jz",
                    fa = "bu",
                    oa = "dj",
                    pa = "dx") : 2 === f ? (ba = "cg",
                    Q = "ce",
                    K = "cf",
                    L = "cj",
                    na = "ts",
                    fa = "ah",
                    oa = "dk",
                    ua = "gj",
                    va = "gb",
                    wa = "ge",
                    xa = "ez",
                    pa = "dy",
                    ya = "ke",
                    za = "kf") : 3 === f ? (ba = "cg",
                    Q = "ce",
                    K = "cf",
                    L = "cj",
                    na = "ts",
                    fa = "ah",
                    oa = "dk",
                    ua = "gi",
                    va = "gf",
                    wa = "gg",
                    xa = "ez",
                    pa = "dy",
                    ya = "ke",
                    za = "kf") : 5 === f ? (ba = "aa",
                    Q = "ad",
                    K = "cn",
                    L = "co",
                    na = "cp",
                    fa = "ah",
                    oa = "cq",
                    ua = "gn",
                    va = "gk",
                    wa = "gl",
                    xa = "ez",
                    pa = "cr",
                    ya = "ew",
                    za = "ex") : 6 === r(f) && (ba = f.otsKey,
                    Q = f.ivtKey,
                    K = f.lastivtKey,
                    L = f.ivtAtOtsKey,
                    na = f.timeToViewSendKey,
                    fa = f.timeToViewAskKey,
                    oa = f.visOnLoadKey,
                    ua = f.fullyIvtOtsKey,
                    va = f.fullyIvtKey,
                    wa = f.lastFullyIvtKey,
                    xa = f.wasPartiallyInviewKey,
                    pa = f.visNearLoadKey,
                    ya = f.video2SecOtsKey,
                    za = f.visNearLoad2SecKey);
                this.getLabel = function() {
                    return m
                }
                ;
                this.addListener = function(b) {
                    l.push(b)
                }
                ;
                this.removeListener = function(b) {
                    for (var c, g = l.length; c < g; c++) {
                        var d = false, e = false, k;
                        for (k in l[c])
                            if (e || (e = true),
                            l[c][k] !== b[k]) {
                                d = true;
                                break
                            }
                        e && !d && l.splice(c, 1)
                    }
                }
                ;
                this.hadOTS = function() {
                    return mrc_1s;
                }
                ;
                this.hadFullOTS = function() {
                    return Ba
                }
                ;
                this.hadFIT = function() {
                    return 0 < g
                }
                ;
                this.hadVideo2SecOTS = function() {
                    return mrc;
                }
                ;
                this.hadDentsuVideoOTS = function() {
                    return da
                }
                ;
                this.hadDentsuDisplayOTS = function() {
                    return Y
                }
                ;
                this.isLargeVideoPlayer = function() {
                    return ea
                }
                ;
                this.getInViewTime = function() {
                    return v
                }
                ;
                this.getLastInviewPercent = function() {
                    var b = 0;
                    return b = S
                }
                ;
                this.getRawLastInviewPercent = function() {
                    return S
                }
                ;
                this.visible = function() {
                    return T
                }
                ;
                this.fullyVisible = function() {
                    return ka
                }
                ;
                this.wasPartiallyInview = function() {
                    return N
                }
                ;
                this.getFullInviewTimeTotal = function() {
                    return g
                }
                ;
                this.getMaximumContinuousInViewTime = function() {
                    return t.max(q, maxContinuousInviewTime)
                }
                ;
                this.getMaximumContinuousFullyInViewTime = function() {
                    return t.max(0, A)
                }
                ;
                this.update = function(k, r, u) {
                    var y = v || 0
                      , G = g || 0
                      , ga = Z || 0
                      , ba = aa || 0
                      , Q = false
                      , H = getViewableStateFunc(k);
                    H.rect && (k.elementRect = H.rect,
                    k.currentWidth = k.elementRect.right - k.elementRect.left,
                    k.currentHeight = k.elementRect.bottom - k.elementRect.top);
                    var isVisible = H.isVisible
                      , ca = H.isFullyVisible
                      , I = H.isDentsuVisible
                      , K = H.percv && 0 < H.percv;
                    S = H.percv;
                    var J = e(k),
                    L;
                    L = (L = k && k.video && k.video.isLargeVideoPlayer) ? (ea = L && k.video.isLargeVideoPlayer(k)) ? .8 <= H.percv : .98 <= H.percv : .98 <= H.percv;
                    var R;
                    R = !d || b.focus.pageIsVisible() || k.video.videoIsFullscreen;
                    if (k && k.video) {
                      J = k.video.videoIsFullscreen ? false : J;
                      currentVisible = (currentVisible || k.video.videoIsFullscreen) && R && !J;
                      ca = (ca || k.video.videoIsFullscreen) && R && !J;
                      K = (K || k.video.videoIsFullscreen) && R && !J;
                      la = (I || k.video.videoIsFullscreen) && R && !J;
                      ma = (L || k.video.videoIsFullscreen) && R && !J;
                    } else {
                      currentVisible = currentVisible && R && !J;
                      ca = ca && R && !J;
                      K = K && R && !J;
                      la = I && R && !J;
                      ma = L && R && !J;
                    }
                    if (!N && K) {
                      N = true;
                    }
                    if (currentVisible && previousVisible)
                        v += r,
                        viewableTime += r;
                    else if (currentVisible || previousVisible)
                        I = t.round(r / 2),
                        v += I,
                        viewableTime += I;
                    if (ca && ka)
                        g += r,
                        A += r;
                    else if (ca || ka)
                        I = t.round(r / 2),
                        g += I,
                        A += I;
                    if (la && V)
                        Z += r,
                        M += r;
                    else if (la || V)
                        I = t.round(r / 2),
                        Z += I,
                        M += I;
                    I = 0;
                    if ((J = k.video.isPlayingAndAudible()) && W)
                        I = r;
                    else if (J || W)
                        I = t.round(r / 2);
                    ga = t.max(Z - ga, 0);
                    I = t.max(t.min(I, ga), 0);
                    O = k.ao.duration && 0 < k.ao.duration ? t.min(k.ao.duration, O + I) : O + I;
                    W = J;
                    ga = 98 * k.ao.duration / 100;
                    k.video && k.video.durationMeasurable && O && O >= t.min(.5 * ga, 15E3) && (da = true);
                    if (ma && X)
                        aa += r;
                    else if (ma || X)
                        groupmHalfDelta =
                        t.round(r / 2),
                        aa += groupmHalfDelta;
                    0 < k.ao.duration && (v = t.min(k.ao.duration, v),
                    g = t.min(k.ao.duration, g),
                    Z = t.min(k.ao.duration, Z),
                    aa = t.min(k.ao.duration, aa),
                    !P && .5 <= g / k.ao.duration && (Q = P = true));
                    if (!mrc_1s && viewableTime >= 1000) {
                      Q = mrc_1s = true;
                      this.timeToView = w = k.counters.query()[fa];
                      if (5000 >= u - k.ao.startTime && mrc_1s) {
                        ha = true;
                      }
                    }
                    if (!Ba && A >= 1000) {
                      Ba = true;
                    }
                    if (!mrc && viewableTime >= mrcInterval) {
                      mrc = true;
                      Q = true;
                      B = v;
                      this.timeToView2Sec = k.counters.query()[fa];
                      if (u - k.videoAdStartTime <= b.w.b + b.w.c) {
                        ia = true;
                      }
                    }
                    "undefined" === typeof C && (1E3 >= k.counters.query().bu ? U && (C = true) : C = false);
                    (k.el = qa) && "undefined" ===
                    typeof ta && 2 !== f && 3 !== f && H.elGeo && (b.a.ae().isInApp && 4 === b.a.ag() ? u = false : (u = h().y + H.elGeo.foldTop,
                    ga = H.elGeo.threshold * H.elGeo.elHeight,
                    u = u > b.o.d() - ga),
                    0 < H.elGeo.totalArea && (ta = u,
                    k.dn = ta));
                    Ca && K && (D = t.min(t.max(H.percv, D), 1));
                    if (maxContinuousInviewTime < viewableTime) {
                      maxContinuousInviewTime = viewableTime;
                    }
                    if (!currentVisible) {
                      viewableTime = 0;
                    }
                    ca || (A = 0);
                    previousVisible = currentVisible;
                    ka = ca;
                    1E3 <= M && (Y = true);
                    la || (M = 0);
                    V = la;
                    X = ma;
                    b.a.forEach(l, function(b) {
                        var c = H && H.percv
                          , c = "number" === typeof c && 100 * c;
                        if (b.onInViewTimeCount)
                            b.onInViewTimeCount(r, v - y, c, m);
                        if (b.onFullyInViewTimeCount) {
                            var d = t.max(g - G, 0);
                            b.onFullyInViewTimeCount(r, d,
                            c, m)
                        }
                        ma && b.onGroupMInViewTimeCount && (d = t.max(aa - ba, 0),
                        b.onGroupMInViewTimeCount(r, d, c, m))
                    });
                    return Q
                }
                ;
                this.getQS = function(b, c) {
                    k > v && (k = v);
                    u > g && (u = g);
                    b[ba] = Number(mrc_1s);
                    b[Q] = v;
                    b[K] = k;
                    if (0 === f || 2 === f || 3 === f || 5 === f || r(f))
                        Ba && (b[ua] = 1),
                        b[va] = g,
                        b[wa] = u,
                        N && (b[xa] = 1);
                    "undefined" !== typeof B && (b[L] = B);
                    "undefined" !== typeof w && (b[na] = w);
                    "undefined" !== typeof C && (b[oa] = Number(C));
                    if (true === Ca) {
                        var d = t.round(100 * D)
                          , e = t.round(100 * G);
                        b[ra] = d;
                        b[Aa] = e;
                        G = D
                    }
                    "undefined" !== typeof ta && (b.ib = Number(ta));
                    true === ha && (b[pa] = 1);
                    if (0 === f || 2 === f || 3 === f || 5 === f || r(f)) {
                      if (mrc) {
                        b[ya] = 1;
                      }
                      if (ia) {
                        b[za] = 1;
                      }
                    }
                    k = v;
                    u = g
                }
            }
            function h() {
                var c = b.d.c
                  , e = c.document;
                return {
                    y: void 0 !== c.pageYOffset ? c.pageYOffset : (e.documentElement || e.body.parentNode || e.body).scrollTop
                }
            }
            b.o = {};
            var e = {};
            b.o.d = function() {
                return Y ? b.d.ak(b.d.c).height : 750
            }
            ;
            b.o.e = function() {
                return b.a.ac() || b.a.ad() ? b.d.d() : false
            }
            ;
            b.o.f = function() {
                return b.o.e() ? b.d.t() : false
            }
            ;
            b.o.g = function(c) {
                var n = c.zr;
                b.j.b.addEventCallback("adKilled", b.o.h, {
                    once: true,
                    condition: function(b) {
                        return b.zr == c.zr
                    }
                });
                e[n] = e[n] ||
                {};
                c.viewstats = {
                    isBigAd: false
                };
                if (b.n.isNewBrowser()) {
                    var getViewableStateFunc = getTimeGuardedViewableStateFunc(b.n.f);
                    var h;
                    h = isIphoneOrIPod()
                      ? new VideoState(getViewableStateFunc, b.p.b, false, 0,"strict")
                      : new VideoState(getViewableStateFunc, b.p.b, true, 0,"strict");
                    e[n].strict = h;
                    e[n].lax = new VideoState(getViewableStateFunc,b.p.b,false,1,"lax");
                } else {
                    true !== c.isSkin && b.h && b.h.a() && (d = new VideoState(b.h.b,b.p.b,true,3,"pscope"),
                    e[n].pscope = d);
                }
                b.i && b.i.insertableFunc() && !e[n].pscope && (d = new VideoState(b.i.ab,b.p.b,true,2,"pscope"),
                e[n].pscope = d);
                d = false;
                (d = b.d.x) || (d = b.d.z());
                if (b.d.v() || d)
                    d = new VideoState(b.u.a,b.p.b,true,5,"sframe"),
                    e[n].sframe = d;
                b.j.b.zaxs("viewCounterStarted", c);
                (b.a.ac() || b.a.ad()) && (n = b.o.i(c.zr)) &&
                n.addListener({
                    _wasAnyPixelInView: false,
                    onInViewTimeCount: function(d, e, f) {
                        return this._wasAnyPixelInView ? false : c && c.video && c.video.isPlaying() ? b.o.f() ? (b.p.a(c),
                        this._wasAnyPixelInView = true,
                        false) : true : true
                    }
                });
                b.j.b.addEventCallback("view:tick", b.a.cb([c], b.o.j), {
                    priority: 5
                })
            }
            ;
            b.o.k = function(c, e, d) {
                return (c || opt_counters) && e && d ? (c = b.o.l(c.zr, e)) && "function" == typeof c[d] && c[d]() : false
            }
            ;
            b.o.j = function(c, n, d) {
                var h = e[c.zr], m, r = b.d.x && h && !h.sframe;
                r || (r = b.d.z() && h && !h.sframe);
                r && (e[c.zr].sframe = new VideoState(b.u.a,b.p.b,true,5,"sframe"),
                b.j.b.zaxs("viewCounterStarted",
                c));
                for (var l in h)
                    h.hasOwnProperty(l) && h[l].update(c, n, d) && (m = true);
                m && b.p.c(c);
                b.v.a(c)
            }
            ;
            b.o.m = function(c, e, d) {
                "undefined" == typeof d && (d = false);
                var f = 0;
                f = !d && b.d.au() ? (c = c && "undefined" != typeof c.zr && b.o && b.o.n && b.o.n(c.zr)) && c.lax && c.lax.getInViewTime() || 0 : b.o.o(c);
                return f >= e
            }
            ;
            b.o.o = function(c) {
                var e = 0
                  , d = c && "undefined" != typeof c.zr && b.o && b.o.n && b.o.n(c.zr);
                d && (b.d.au() ? e = d.strict && d.strict.getInViewTime() || 0 : b.d.av() ? e = d.sframe && d.sframe.getInViewTime() || 0 : b.d.ax(c) && (e = d.pscope && d.pscope.getInViewTime() ||
                0));
                return e
            }
            ;
            getOTS = function(c, e) {
                var d = hadVideo2SecOTS();
                if (c && c.zr) {
                  return d = e ?  b.o.k(c, e, d) : b.o.k(c, b.o.r(c.zr), d);
                } else {
                  return null;
                }
            }
            ;
            b.o.a = function(c, e) {
                var d = b.o.n(c.zr);
                return b.i && b.i.a && d && d.pscope && d.pscope[e ? "hadVideo2SecOTS" : "hadOTS"]()
            }
            ;
            b.o.c = function(c, e) {
                var d = b.o.n(c.zr);
                return b.i && b.i.a && d && d.pscope && d.pscope[e ? "hadDentsuVideoOTS" : "hadDentsuDisplayOTS"]()
            }
            ;
            b.o.b = function(c, e) {
                var d = b.o && b.o.n(c.zr);
                return b.i && b.i.a && d && d.pscope && d.pscope.getFullInviewTimeTotal() >=
                e
            }
            ;
            b.o.s = function(c) {
                var e = 0
                  , d = c && "undefined" != typeof c.zr && b.o && b.o.n && b.o.n(c.zr);
                d && (b.d.au() ? e = d.strict && d.strict.getFullInviewTimeTotal() || 0 : b.d.av() ? e = d.sframe && d.sframe.getFullInviewTimeTotal() || 0 : b.d.ax(c) && (e = d.pscope && d.pscope.getFullInviewTimeTotal() || 0));
                return e
            }
            ;
            b.o.t = function(c, e, d) {
                "undefined" == typeof d && (d = false);
                var f = 0;
                f = !d && b.d.au() ? (c = c && "undefined" != typeof c.zr && b.o && b.o.n && b.o.n(c.zr)) && c.lax && c.lax.getInViewTime() || 0 : b.o.s(c);
                return f >= e
            }
            ;
            b.o.h = function(b) {
                delete e[b.zr]
            }
            ;
            b.o.n =
            function(b) {
                var f;
                e[b] ? f = e[b] : e[b] = f = {};
                return f
            }
            ;
            b.o.l = function(c, e) {
                var d = b.o.n(c);
                return d && d[e]
            }
            ;
            b.o.r = function(b) {
                var f = null ;
                (b = e[b]) && b.strict ? f = "strict" : b && b.sframe ? f = "sframe" : b && b.pscope && (f = "pscope");
                return f
            }
            ;
            b.o.i = function(c) {
                var f = b.o.r(c);
                return (c = e[c]) && f && c[f]
            }
            ;
            b.o.u = function(c, f) {
                var d = {}, h = e[c], m;
                for (m in h)
                    h.hasOwnProperty(m) && h[m].getQS(d, f);
                b.o.i(c) && b.o.i(c).hadDentsuVideoOTS() && (d.nc = 1);
                b.o.i(c) && b.o.i(c).isLargeVideoPlayer() && (d.vk = 1);
                (h = B[c]) && h.viewstats && h.viewstats.isBigAd &&
                (d.el = 1);
                return d
            }
        })(q);
        (function(b) {
            b.x = {};
            b.x.a = function(b, f) {
                var h;
                f.outerHTML ? h = f.outerHTML : (h = document.createElement("div"),
                h.appendChild(f.cloneNode(true)),
                h = h.innerHTML);
                h = [/flashvars\s*=\s*(".*?"|'.*?')/i.exec(h), /name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(h), /value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(h), b];
                for (var e, c, n = {}, d = 0; d < h.length; d++) {
                    if ((e = h[d]) && "object" === typeof e && e[1])
                        e = e[1].replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/^"/g, "").replace(/"$/g,
                        "").replace(/^'/g, "").replace(/'$/g, "");
                    else if ("string" === typeof e)
                        e = e.split("?")[1];
                    else
                        continue;if (e) {
                        e = e.split("&");
                        for (var x = 0; x < e.length; x++)
                            c = e[x].split("="),
                            2 > c.length || "function" == c[0].slice(0, 8) || (n[c[0]] = [c[1]])
                    }
                }
                return n
            }
        })(q);
        (function(b) {
            function l(c, d, e, h) {
                x.hasOwnProperty(c) ? x[c][d] && b.a.bj(x[c][d]) ? x[c][d].push(e) : x[c][d] = [e] : (x[c] = {},
                x[c][d] = [e],
                void 0 !== h && true === h && (m[c] = new f))
            }
            function f() {
                var c = false;
                this.updateAndConditionallySend = function(b) {
                    false === c && (c = true,
                    this.sendNotification(b))
                }
                ;
                this.sendNotification = function(c) {
                    var g = {
                        e: 14
                    };
                    g.q = c.aq[14]++;
                    b.s.a(c, g)
                }
                ;
                this.getQS = function(b) {
                    true === c && (b.cv = Number(c))
                }
            }
            function h(b, c) {
                var d = m[c];
                void 0 !== d && d.updateAndConditionallySend(b)
            }
            function e(b) {
                return 500 <= (2 === b.an ? b.be : b.bd)
            }
            function c(c, d) {
                try {
                    return b.y.b(c) > d
                } catch (e) {
                    return false
                }
            }
            function n(b, c) {
                try {
                    return b.counters.laxDwell.tCur > c
                } catch (d) {
                    return false
                }
            }
            function d(b, c) {
                return e(b) ? ("undefined" !== typeof b.bk && e(b) ? t.min(3E5, b.bk) : 0) >= c : false
            }
            b.y = {};
            var x = {}
              , m = {}
              , r = function(b) {
                return b.el ?
                b.dn ? true : false : false
            }
              , z = function() {
                var c = 0;
                return function() {
                    var d = b.d.c
                      , e = d.document
                      , f = e.body
                      , d = (f.scrollTop || e.documentElement.scrollTop || d.pageYOffset || 0) / f.offsetHeight;
                    d > c && (c = d);
                    return c
                }
            }()
              , v = {
                load: function(b) {
                    return b && b.video && !b.video.started ? false : true
                },
                measurable: function(c) {
                    return c && c.video && !c.video.started ? false : b.d.ay(c)
                },
                "full-measurable": function(c) {
                    return c && c.video && !c.video.started ? false : b.d.ay(c)
                },
                "full-inView": function(c) {
                    return b.o.t(c, 1, true)
                },
                nhtReady: function(c) {
                    return c && c.video && !c.video.started ?
                    false : b && b.z && b.z.a
                },
                inView100: function(c) {
                    return b.o.m(c, 1E5, true)
                },
                inView60: function(c) {
                    return b.o.m(c, 6E4, true)
                },
                inView45: function(c) {
                    return b.o.m(c, 45E3, true)
                },
                inView40: function(c) {
                    return b.o.m(c, 4E4, true)
                },
                inView35: function(c) {
                    return b.o.m(c, 35E3, true)
                },
                inView30: function(c) {
                    return b.o.m(c, 3E4, true)
                },
                inView25: function(c) {
                    return b.o.m(c, 25E3, true)
                },
                inView20: function(c) {
                    return b.o.m(c, 2E4, true)
                },
                inView15: function(c) {
                    return b.o.m(c, 15E3, true)
                },
                inView10: function(c) {
                    return b.o.m(c, 1E4, true)
                },
                inView5: function(c) {
                    return b.o.m(c,
                    5E3, true)
                },
                inView3: function(c) {
                    return b.o.m(c, 3E3, true)
                },
                inView2: function(c) {
                    return b.o.m(c, 2E3, true)
                },
                inView1: function(c) {
                    return b.o.m(c, 1E3, true)
                },
                fullInView1: function(c) {
                    return b.o.t(c, 1E3, true)
                },
                fullInView2: function(c) {
                    return b.o.t(c, 2E3, true)
                },
                fullInView15: function(c) {
                    return b.o.t(c, 15E3, true)
                },
                full_inview_05: function(c) {
                    return 600 <= c.INITIAL_HEIGHT && b.o.t(c, 500, true)
                },
                full_inview_1: function(c) {
                    return 600 <= c.INITIAL_HEIGHT && b.o.t(c, 1E3, true)
                },
                full_inview_5: function(c) {
                    return 600 <= c.INITIAL_HEIGHT && b.o.t(c, 5E3,
                    true)
                },
                full_inview_10: function(c) {
                    return 600 <= c.INITIAL_HEIGHT && b.o.t(c, 1E4, true)
                },
                fully_inView2: function(c) {
                    return b.o.t(c, 2E3, true)
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
                    return 1100 <=
                    b.d.am && 1400 >= b.d.am
                },
                audibleFullVisibleHalfDuration: function(c) {
                    var d = c && b.o.i(c.zr)
                      , d = d && c.video && c.video.getCounter(d.getLabel());
                    return -1 < c.ao.duration && d && d.get("groupmAudibleFullyVisIvt") > c.ao.duration / 2
                },
                groupmAudVisHumanCap15: function(c) {
                    if (!(b && b.z && b.z.a && c && c.video && c.ao))
                        return false;
                    var d = false;
                    "number" == typeof c.ao.duration && !isNaN(c.ao.duration) && 0 < c.ao.duration && (d = t.min(15E3, c.ao.duration));
                    var e = c && b.o.i(c.zr);
                    c = e && c.video.getCounter(e.getLabel());
                    return d && c && c.get("groupmAudibleFullyVisIvt") >
                    .5 * d && "undefined" === typeof b.z.a.a
                },
                scroll_measurable: function(c) {
                    return b.d.a
                },
                scroll: function(b) {
                    return "undefined" !== typeof w.z
                },
                scrollfirst1: function(b) {
                    return 1E3 < w.z
                },
                scrollfirst2: function(b) {
                    return 2E3 < w.z
                },
                scrollfirst3: function(b) {
                    return 3E3 < w.z
                },
                scrollfirst5: function(b) {
                    return 5E3 < w.z
                },
                scroll_interaction: function(b) {
                    return this.scroll(b) && this.interaction(b)
                },
                hover: function(b) {
                    return b.dm
                },
                laxOts: function(c) {
                    return getOTS(c, "lax")
                },
                strictOts: function(c) {
                    return getOTS(c)
                },
                interaction_measurable: function(c) {
                    return !b.a.y() ||
                    e(c)
                },
                interaction: function(b) {
                    return e(b)
                },
                btf: function(b) {
                    return r(b)
                },
                btf_strictOts: function(b) {
                    return this.strictOts(b) && r(b)
                },
                btf_interaction: function(b) {
                    return e(b) && r(b)
                },
                btf_inView5: function(c) {
                    return b.o.m(c, 5E3, true) && r(c)
                },
                btf_inView15: function(c) {
                    return b.o.m(c, 15E3, true) && r(c)
                },
                atf_970_728_inview20: function(c) {
                    return (970 == c.INITIAL_WIDTH || 728 == c.INITIAL_WIDTH) && !r(c) && b.o.m(c, 2E4, true)
                },
                atf_300x250_inview20: function(c) {
                    return 300 == c.INITIAL_WIDTH && 250 == c.INITIAL_HEIGHT && !r(c) && b.o.m(c, 2E4, true)
                },
                atf_300x600_inview20: function(c) {
                    return 300 == c.INITIAL_WIDTH && 600 == c.INITIAL_HEIGHT && !r(c) && b.o.m(c, 2E4, true)
                },
                btf_300_inview20: function(c) {
                    return 300 == c.INITIAL_WIDTH && r(c) && b.o.m(c, 2E4, true)
                },
                btf_300_inview30: function(c) {
                    return 300 == c.INITIAL_WIDTH && r(c) && b.o.m(c, 3E4, true)
                },
                btf_300_inview40: function(c) {
                    return 300 == c.INITIAL_WIDTH && r(c) && b.o.m(c, 4E4, true)
                },
                inner_height_1000: function(c) {
                    return 1E3 <= b.d.am
                },
                contentA: function(b) {
                    return this.page5(b) && .15 < z()
                },
                contentB: function(b) {
                    return this.page10(b) && .35 <
                    z()
                },
                contentC: function(b) {
                    return this.page15(b) && .55 < z()
                },
                activeAny: function(b) {
                    return d(b, 10)
                },
                active05: function(b) {
                    return d(b, 500)
                },
                active1: function(b) {
                    return d(b, 1E3)
                },
                active2: function(b) {
                    return d(b, 2E3)
                },
                active3: function(b) {
                    return d(b, 3E3)
                },
                active4: function(b) {
                    return d(b, 4E3)
                },
                active5: function(b) {
                    return d(b, 5E3)
                },
                active6: function(b) {
                    return d(b, 6E3)
                },
                active7_2: function(b) {
                    return d(b, 7200)
                },
                active8: function(b) {
                    return d(b, 8E3)
                },
                active10: function(b) {
                    return d(b, 1E4)
                },
                active13: function(b) {
                    return d(b,
                    13E3)
                },
                active15: function(b) {
                    return d(b, 15E3)
                },
                active20: function(b) {
                    return d(b, 2E4)
                },
                page1: function(b) {
                    return c(b, 1E3)
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
                    return this.page3(b) &&
                    !this.measurable(b)
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
                    return b.o.m(c,
                    15E3)
                },
                MoatScoreD: function(c) {
                    return b.o.m(c, 25E3) && this.scroll(c)
                },
                MoatScoreE: function(c) {
                    return b.o.m(c, 3E4) && d(c, 500) && this.scroll(c)
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
                    return n(b, 15E3) &&
                    this.inView10(b)
                },
                moatB: function(b) {
                    return n(b, 6E4) && this.scroll(b) && this.inView15(b)
                },
                moatC: function(b) {
                    return n(b, 15E4) && this.scroll(b) && this.inView20(b)
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
                    return "2" ==
                    b.video.quartiles.ej || "3" == b.video.quartiles.ej
                },
                visComplete: function(b) {
                    return "1" == b.video.quartiles.ej && "3" == b.video.quartiles.ej
                },
                aud3quartiles: function(b) {
                    return ("2" == b.video.quartiles.eg || "3" == b.video.quartiles.eg) && ("2" == b.video.quartiles.eh || "3" == b.video.quartiles.eh) && ("2" == b.video.quartiles.ei || "3" == b.video.quartiles.ei)
                },
                vid3quartiles: function(b) {
                    return ("1" == b.video.quartiles.eg || "3" == b.video.quartiles.eg) && ("1" == b.video.quartiles.eh || "3" == b.video.quartiles.eh) && ("1" == b.video.quartiles.ei ||
                    "3" == b.video.quartiles.ei)
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
                    return c.get_duration() && b.o.m(c, .1 * c.get_duration(), true)
                },
                everAudibleVisible: function(c) {
                    var d = c && b.o.i(c.zr);
                    return (c = d && c.video.getCounter(d.getLabel())) && c.get("everAudibleAndVisible")
                },
                visNeverAud: function(c) {
                    var d = c && b.o.i(c.zr)
                      , d = d && c.video.getCounter(d.getLabel());
                    return c.video.reachedComplete && d && d.get("everVisible", false) && !d.get("everAudible", false)
                },
                completeView: function(b) {
                    return this.strictOts(b) && b.video.reachedComplete
                },
                complete: function(b) {
                    return b.video.reachedComplete
                },
                moatVideoB: function(c) {
                    return c.get_duration() && this.avoc(c) && b.o.m(c, .5 * c.get_duration(), true)
                },
                moatVideoC: function(c) {
                    return c.get_duration() && this.avoc(c) && b.o.m(c, .95 * c.get_duration(), true)
                },
                moatVideoD: function(c) {
                    return c.get_duration() &&
                    this.avoc(c) && b.o.m(c, .7 * c.get_duration(), true)
                },
                moatVideoAWidth: function(b) {
                    return b.get_width() && 400 <= b.get_width() && b.get_duration() && this.moatVideoA(b)
                },
                moatVideoBWidth: function(c) {
                    return c.get_width() && 400 <= c.get_width() && c.get_duration() && this.avoc(c) && b.o.m(c, .5 * c.get_duration(), true)
                },
                moatVideoCWidth: function(c) {
                    return c.get_width() && 400 <= c.get_width() && c.get_duration() && this.avoc(c) && b.o.m(c, .95 * c.get_duration(), true)
                },
                moatVideoDWidth: function(c) {
                    return c.get_width() && 400 <= c.get_width() && c.get_duration() &&
                    this.avoc(c) && b.o.m(c, .7 * c.get_duration(), true)
                },
                moatVideoE: function(c) {
                    return c.get_duration() && b.o.m(c, .6 * c.get_duration(), true)
                }
            };
            getViewableInfo = function(c) {
                return {
                    totalInviewTime: t.min(3E5, b.o.o(c)),
                    fullyInviewTime: t.min(3E5, b.o.s(c)),
                    ots: getOTS(c)
                }
            }
            ;
            b.y.b = function(b) {
                return b && b.counters && b.counters.strictDwell && b.counters.strictDwell.tCur ? t.min(3E5, b.counters.strictDwell.tCur) : false
            }
            ;
            b.y.c = function(b) {
                return b && b.counters && b.counters.laxPlayTime && b.counters.laxPlayTime.tCur ? t.min(3E5, b.counters.laxPlayTime.tCur) :
                false
            }
            ;
            b.y.d = function(c, d, e) {
                var f = b.a.e()
                  , m = b.y.e(c)
                  , h = b.y.f(c)
                  , n = b.y.g(c)
                  , viewableInfo = getViewableInfo(c);
                b.y.h(c, d);
                var l = c.get_duration()
                  , x = b.y.c(c)
                  , z = h.initWidth || c.INITIAL_WIDTH
                  , v = h.initHeight || c.INITIAL_HEIGHT
                  , q = c && b.o.i(c.zr)
                  , w = q && c.video.getCounter(q.getLabel());
                d = b.y.i(c, d);
                var y = e ? {
                    m: b.d.ay(c),
                    vpt: x,
                    iv: viewableInfo.ots,
                    tuv: viewableInfo.ots ? n : -1,
                    ivt: t.min(x, viewableInfo.totalInviewTime),
                    cvt: q && t.min(x, q.getMaximumContinuousInViewTime()) || 0,
                    fvt: t.min(x, viewableInfo.fullyInviewTime),
                    cfvt: q && t.min(x, q.getMaximumContinuousFullyInViewTime()) || 0,
                    vol: c.video.volume,
                    at: c && c.video && w && t.min(x, w.get("audibleTime")),
                    cat: t.min(x, c.video.maxContinuousAudibleTime()),
                    gmv: -1 < l && (w || false) && w.get("groupmAudibleFullyVisIvt") > l / 2,
                    gmt: w && t.min(x, w.get("groupmAudibleFullyVisIvt")),
                    cgmt: t.min(x, c.video.groupmMaxContinuousFullVisAudibleTime()),
                    apd: b.y.b(c),
                    dh: l,
                    hov: !!c.cb,
                    th: c.cb,
                    d: encodeURIComponent(f),
                    w: z,
                    h: v,
                    sp: 400 > z,
                    bfa: c.el ? c.dn ? true : false : -1,
                    L1id: h.moatClientLevel1 || "-",
                    L2id: h.moatClientLevel2 || "-",
                    L3id: h.moatClientLevel3 || "-",
                    L4id: h.moatClientLevel4 || "-",
                    S1id: h.moatClientSlicer1 ||
                    "-",
                    S2id: h.moatClientSlicer2 || "-",
                    ord: m,
                    r: h.rand,
                    t: d ? d : "unload"
                } : {
                    m: b.d.ay(c),
                    iv: viewableInfo.ots,
                    tuv: viewableInfo.ots ? n : -1,
                    tet: viewableInfo.totalInviewTime,
                    gmv: -1 < l && (w || false) && w.get("groupmAudibleFullyVisIvt") > l / 2,
                    fvt: viewableInfo.fullyInviewTime,
                    apd: b.y.b(c),
                    h: !!c.cb,
                    th: c.cb,
                    bfa: c.el ? c.dn ? true : false : -1,
                    d: encodeURIComponent(f),
                    sp: 400 > z,
                    L1id: h.moatClientLevel1 || "-",
                    L2id: h.moatClientLevel2 || "-",
                    L3id: h.moatClientLevel3 || "-",
                    L4id: h.moatClientLevel4 || "-",
                    S1id: h.moatClientSlicer1 || "-",
                    S2id: h.moatClientSlicer2 || "-",
                    ord: m,
                    r: h.rand,
                    t: d ? d : "unload"
                };
                b.a.forEach(["zMoatImpID"],
                function(d) {
                    y[d] = "url" === d ? encodeURIComponent(Aa) : "mobile" === d ? b.a.y() : "avoc" === d ? c && c.reachedAvoc : h[d]
                });
                return y
            }
            ;
            b.y.j = function(c, d) {
                b.a.e();
                b.y.e(c);
                b.y.f(c);
                b.y.g(c);
                getViewableInfo(c);
                var e = b.o.i(c.zr);
                b.y.h(c, d);
                c.get_duration();
                b.y.c(c);
                e && c.video.getCounter(e.getLabel())
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
                return c.strict && "undefined" !== typeof c.strict.timeToView2Sec ?
                c.strict.timeToView2Sec : c.sframe && "undefined" !== typeof c.sframe.timeToView2Sec ? c.sframe.timeToView2Sec : c.pscope && "undefined" !== typeof c.pscope.timeToView2Sec ? c.pscope.timeToView2Sec : -1
            }
            ;
            b.y.h = function(c, d) {
                var e = {}
                  , f = ["AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile", "AdVideoComplete"];
                d && b.a.n(f, d) ? (e.s = c.video.quartiles[b.w.d[d]],
                e.v = 3 === e.s || 1 === e.s,
                e.a = 3 === e.s || 2 === e.s) : (e.v = -1,
                e.a = -1);
                return e
            }
            ;
            b.y.i = function(b, c) {
                switch (c) {
                case "AdVideoFirstQuartile":
                    c = "Q1";
                    break;
                case "AdVideoMidpoint":
                    c =
                    "Q2";
                    break;
                case "AdVideoThirdQuartile":
                    c = "Q3";
                    break;
                case "AdVideoComplete":
                    c = "Q4",
                    b.video.reachedComplete = true
                }
                return c
            }
            ;
            b.y.k = function(c, d) {
                var e = b.y.f(c)
                  , f = [];
                try {
                    if (b.a.bj(d))
                        b.a.forEach(d, function(c) {
                            if (b.a.bj(c)) {
                                var d = {};
                                d.src = c[0];
                                d.customQueryParams = c[1] || false;
                                d.opt = c[2] || false;
                                d.customKey = e && e[c[3]] || false;
                                d.customValues = c[4] || false;
                                d.customValues ? b.a.n(d.customValues, d.customKey) && f.push(d) : f.push(d)
                            } else
                                "string" === typeof c && (d = {},
                                d.src = c,
                                d.customQueryParams = false,
                                d.opt = false,
                                f.push(d))
                        });
                    else if ("string" ===
                    typeof d) {
                        var m = {};
                        m.src = d;
                        f.push(m)
                    }
                } catch (h) {}
                return f
            }
            ;
            b.y.l = function(b) {
                var c = ""
                  , d = 0;
                if (b && "nosend" !== b)
                    for (prop in b)
                        b.hasOwnProperty(prop) && (d++,
                        true === b[prop] ? b[prop] = "1" : false === b[prop] ? b[prop] = "0" : "undefined" === typeof b[prop] && (b[prop] = 0),
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
                "number" != typeof b.aq.TTPSEQUENCE ? b.aq.TTPSEQUENCE =
                1 : b.aq.TTPSEQUENCE++;
                return b.aq.TTPSEQUENCE
            }
            ;
            b.y.o = function(c, d, e) {
                b.y.f(c);
                (e = b.y.k(c, [["//liverailjsvp58397284.moatpixel.com/pixel.gif?", false, "newPixelData"]])) && b.y.p(c, e, d, true, true)
            }
            ;
            b.y.p = function(c, d, e, f, m) {
                "string" == typeof d ? (new b.d.c.Image).src = d : b.a.forEach(d, function(d) {
                    var k = d.src, h = d.opt, n, r;
                    n = h && b.a.n(h, "xaxis") ? b.y.l(b.y.q(c, e)) : h && b.a.n(h, "newPixelData") ? b.y.l(b.y.d(c, e, true)) : b.y.l(b.y.d(c, e));
                    d.customQueryParams && (r = b.y.l(b.y.j(c, e)));
                    n = h && b.a.n(h, "addCustom") ? n + "&" + r : d.customQueryParams ?
                    r : n;
                    d = h && b.a.n(h, "secure") ? "https:" : b.d.protocol;
                    n && "nosend" !== n && (f && (n = n + "&q=" + b.y.n(c)),
                    m ? b.z.b(d + k + n, {
                        ga: true
                    })() : b.a.n(h, "dfp") ? (h = b.y.e(c),
                    (new b.d.c.Image).src = d + k + "u=" + n + ";sz=1x1;ord=" + h + "?") : (new b.d.c.Image).src = d + k + n)
                })
            }
            ;
            b.y.r = function(c, d) {
                l(c, "strictOts", function(c, e) {
                    var f = b.d.c
                      , g = f.document.getElementsByTagName("script")[0]
                      , f = f.document.createElement("img");
                    f.src = d;
                    g.parentNode.insertBefore(f, g);
                    c.viewableOcrPixelFired = 1
                })
            }
            ;
            b.y.s = function(c, d) {
                function e(c, d) {
                    var f = B[c];
                    return function() {
                        var c =
                        b.y.k(f, [["//liverailjsvp58397284.moatpixel.com/pixel.gif?", false, "newPixelData"]]);
                        c && b.y.p(f, c, d, true, true)
                    }
                }
                l(c, "measurable", e(c, "meas"));
                l(c, "strictOts", e(c, "iv"));
                l(c, "audibleFullVisibleHalfDuration", e(c, "fv"));
                l(c, "nhtReady", e(c, "nht"))
            }
            ;
            b.y.t = function() {
                for (var c in B)
                    if (B.hasOwnProperty(c)) {
                        var d = B[c], e = x[c], f;
                        for (f in e)
                            e.hasOwnProperty(f) && v[f](d) && (b.a.forEach(e[f], function(c, e) {
                                var f = typeof c;
                                "string" === f ? b.y.u(c, d) : "function" === f && c(d)
                            }),
                            h(d, c),
                            delete e[f])
                    }
            }
            ;
            b.y.v = function(b) {
                var c = {};
                (b = m[b]) &&
                b.getQS(c);
                return c
            }
            ;
            b.y.w = function(b, c) {
                if (x.hasOwnProperty(b) && x[b].hasOwnProperty(c))
                    return true
            }
            ;
            b.y.x = function(b, c) {
                x.hasOwnProperty(b) && x[b].hasOwnProperty(c) && delete x[b][c]
            }
            ;
            b.y.y = l;
            b.y.u = function(c, d, e) {
                var f;
                d.Ord ? f = d.Ord : (f = b.d.o ? b.d.o : (new y).getTime(),
                d.Ord = f);
                (new b.d.c.Image(1,1)).src = e ? c : c + "&ord=" + f
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
            function f(b) {
                for (var c = "", d = 0; d < b.length; d++)
                    var e = b.charCodeAt(d) ^ 85
                      , c = c + String.fromCharCode(e);
                b = c;
                for (var c = "", f = e = d = 0, k = 0, m = 0, h = 0; h < b.length; ++h)
                    for (m = b.charCodeAt(h),
                    k = 255 < m ? 0 : 1; 2 > k; ++k)
                        d = 0 === k ? d | (m & 65280) / 256 << e : d | (m & 255) << e,
                        e += 8,
                        13 < e && (f = d & 8191,
                        88 < f ? (d >>= 13,
                        e -= 13) : (f = d & 16383,
                        d >>= 14,
                        e -= 14),
                        c += g.charAt(f % 91),
                        c += g.charAt(f / 91 | 0));
                0 < e && (c += g.charAt(d % 91),
                7 < e || 90 < d) && (c += g.charAt(d / 91 | 0));
                return c
            }
            function h(c, d) {
                var e = [];
                b.a.forEach(c, function(b, c) {
                    if (void 0 !== b && ("string" === typeof (d ? b[d] : b) ||
                    "number" === typeof (d ? b[d] : b) || "boolean" === typeof (d ? b[d] : b))) {
                        var f = String(d ? b[d] : b).split("&").join("%26").split("=").join("%3D");
                        e.push(("number" === typeof c ? "" : c + "=") + f)
                    }
                }, null , true);
                e.sort();
                return e.join("&")
            }
            function e(b) {
                for (var c = "", d = 0; d < b.length; d++)
                    b.hasOwnProperty(d) && (c += g[b[d]]);
                return c
            }
            function c(c) {
                var d = v.getElementById("moatCap");
                if (!d || !d.gc && (d = v.getElementById("moatCapEmbed"),
                !d || !d.gc))
                    return false;
                b.z.ab = f(unescape(d.gc()));
                var e = b.z.q();
                c = b.s.b(35, c, e, false, true).res;
                if (!c.shouldSendPixel)
                    return true;
                d.sm({
                    fld: "pixel.moatads.com",
                    qs: c.querystring
                });
                return true
            }
            function n(c, d, e) {
                if (void 0 === e)
                    e = 1;
                else if (5 < e)
                    return;
                var f = b.d.c && b.d.c.document && b.d.c.document.head;
                if (f) {
                    c += "&callback=" + b.d.j + "." + d;
                    var k = document.createElement("script");
                    f.insertBefore(k, f.firstChild);
                    b.z.ar.push(k);
                    k.src = c
                } else
                    b.g.h(function() {
                        n(c, d, e + 1)
                    }, 200)
            }
            function d(c) {
                var d = b.z.q(true);
                dataForNHT = "//geo.moatads.com/n.js?" + b.s.b(35, c, d, false, true).res.querystring;
                n(dataForNHT, b.z.as)
            }
            b.z = {};
            b.z.c = 1;
            b.z.d = false;
            b.z.e = {};
            b.z.f = [];
            b.z.g = [];
            b.z.h = 0;
            b.z.i = 1;
            b.z.j = 2;
            b.z.k = 3;
            b.z.l = 4;
            b.z.m = function() {
                var c = document && document.documentElement && document.documentElement.style || {}
                  , d = !!window.opera
                  , e = "undefined" !== typeof InstallTrigger || "MozAppearance" in c
                  , f = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")
                  , k = !!window.chrome && !!window.chrome.webstore
                  , g = !+"\v1" || !!document.documentMode || !!window.ActiveXObject || "-ms-scroll-limit" in c && "-ms-ime-align" in c;
                b.z.n = [true === !!window.opera ? 1 : 0, "undefined" !== typeof InstallTrigger ===
                true ? 1 : 0, true === !!window.sidebar ? 1 : 0, true === "MozAppearance" in c ? 1 : 0, true === 0 < Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor") ? 1 : 0, true === !!window.chrome ? 1 : 0, true === !(!window.chrome || !window.chrome.webstore) ? 1 : 0, true === !+"\v1" ? 1 : 0, true === !!document.documentMode ? 1 : 0, true === !!window.ActiveXObject ? 1 : 0, true === "-ms-scroll-limit" in c ? 1 : 0, true === "-ms-ime-align" in c ? 1 : 0].join("");
                c = {};
                c[b.z.h] = k;
                c[b.z.i] = e;
                c[b.z.j] = d;
                c[b.z.k] = f;
                c[b.z.l] = g;
                b.z.o = [true === k ? 1 : 0, true === e ? 1 : 0, true === d ? 1 : 0, true === f ? 1 : 0, true === g ? 1 : 0].join("");
                for (var m in c)
                    if (c.hasOwnProperty(m) && c[m])
                        return m;
                return false
            }();
            var x = {
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
                        return true
                    }
                    return false
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
                    return b.a.br(window.MutationObserver) ||
                    b.a.br(window.MutationEvent)
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
                    c.globalCompositeOperation =
                    "multiply";
                    c.fillStyle = "rgb(0,255,255)";
                    c.fillRect(0, 0, 1, 1);
                    c.fill();
                    c.fillStyle = "rgb(255,255,0)";
                    c.fillRect(0, 0, 1, 1);
                    c.fill();
                    c = c.getImageData(0, 0, 1, 1).data;
                    return c[0] == c[2] && c[1] == c[3] || b.a.br(window.navigator.vibrate)
                },
                32: function() {
                    return (1 == CSS.supports("object-fit", "contain") || 1 == CSS.supports("object-fit", "inherit")) && 1 == "object-fit" in document.body.style
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
                    return "shape-image-threshold" in document.body.style == CSS.supports("shape-image-threshold", .9) == 1 && b.a.br(document.createElement("dialog").show)
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
                    return !!window.navigator.serviceWorker &&
                    b.a.br(window.navigator.serviceWorker.register)
                },
                41: function() {
                    return "image-rendering" in document.body.style && 1 == CSS.supports("image-rendering", "pixelated")
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
              , m = {
                20: function() {
                    var b = document.createElement("canvas");
                    b.width = b.height = 1;
                    b = b.getContext("2d");
                    b.globalCompositeOperation =
                    "multiply";
                    b.fillStyle = "rgb(0,255,255)";
                    b.fillRect(0, 0, 1, 1);
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
                    return window.CSS.supports("image-orientation", "270deg")
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
                    return "performance" in window && "getEntriesByType" in window.performance && window.performance.getEntriesByType("resource") instanceof
                    Array
                },
                36: function() {
                    return (1 == CSS.supports("object-fit", "contain") || 1 == CSS.supports("object-fit", "inherit")) && 1 == "object-fit" in document.body.style
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
              , r = {
                5: function() {
                    try {
                        Function(' "use strict"; return 01; ')()
                    } catch (b) {
                        return true
                    }
                    return false
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
              , z = {
                0: function() {
                    var b = document.createElement("div")
                      , c = null
                      , d = ["{45EA75A0-A269-11D1-B5BF-0000F8051515}", "{3AF36230-A269-11D1-B5BF-0000F8051515}", "{89820200-ECBD-11CF-8B85-00AA005B4383}"];
                    try {
                        b.style.behavior = "url(#default#clientcaps)"
                    } catch (e) {}
                    for (var f = 0; f < d.length; f++) {
                        try {
                            c = b.getComponentVersion(d[f], "componentid").replace(/,/g, ".")
                        } catch (e) {}
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
            b.z.p = f;
            b.z.q = function(c) {
                var d = {};
                d.ud = b.z.m;
                if (void 0 === c || false === c)
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
            for (var x = l(x), m = l(m), r = l(r), z = l(z), v = [[1, 25], [7, 1], [1, 25], [-74, 1], [1, 9], [-24, 1], [2, 1], [1, 3], [2, 1], [1, 4], [2, 1], [1, 1], [11, 1], [1, 6], [27, 1], [2, 1], [1, 3], [27, 1], [1, 3], [-92, 1]], x = 65, g = "", m = m = 0; m < v.length; m++)
                for (r = 0; r < v[m][1]; r++)
                    g += String.fromCharCode(x),
                    x += v[m][0];
            var g = g + String.fromCharCode(x)
              , x = e([48, 30, 27, 29, 43,
            34, 47, 30, 43])
              , m = e([30, 47, 26, 37, 46, 26, 45, 30])
              , r = e([43, 30, 44, 41, 40, 39, 44, 30])
              , k = [x, m].join("-")
              , u = [k, r].join("-");
            e([38, 40, 46, 44, 30, 38, 40, 47, 30]);
            var x = e([84, 41, 33, 26, 39, 45, 40, 38])
              , m = e([28, 26, 37, 37, 15, 33, 26, 39, 45, 40, 38])
              , r = b.d.c
              , v = r.document
              , z = v.body
              , q = r.navigator;
            b.z.z = b.d.ag;
            b.z.aa = b.d.ah;
            b.z.r = b.d.ai;
            b.z.s = b.d.aj;
            try {
                b.z.v = r.innerWidth || v.documentElement.clientWidth || z.clientWidth,
                b.z.w = r.innerHeight || v.documentElement.clientHeight || z.clientHeight,
                b.z.x = r.outerWidth || z.offsetWidth,
                b.z.y = r.outerHeight ||
                z.offsetHeight
            } catch (A) {}
            try {
                b.z.t = r.screenX || r.screenLeft || r.screenX,
                b.z.u = r.screenY || r.screenTop || r.screenY
            } catch (A) {}
            try {
                b.z.af = f(h(q))
            } catch (A) {}
            try {
                b.z.ac = f(h(q.plugins, "name"))
            } catch (A) {}
            b.z.ae = (new y).getTimezoneOffset();
            b.z.ag = 0;
            b.z.ah = true === ("undefined" != typeof r[x] || "undefined" != typeof r[m]) ? 1 : 0;
            b.z.ad = 0;
            b.z.ab = 0;
            b.z.ai = {};
            b.z.aj = function(c, d) {
                var e = b.z.q()
                  , e = "//bk6521.moatads.com/pixel.gif?" + b.s.b(d, c, e, false, true).res.querystring + "&qu=$_BK_UUID"
                  , e = "//tags.bluekai.com/site/25856?redir=" + encodeURIComponent(e);
                (new Image).src = e
            }
            ;
            b.z.ak = function() {}
            ;
            var F = "nu ib dc ob oh lt ab n nm sp pt".split(" ");
            b.z.al = function(c, d) {
                d.ga ? b.a.forEach(F, function(d, e) {
                    c = d in b.z.a ? c + ("&" + d + "=1") : c + ("&" + d + "=0")
                }) : d.APPEND_MANUAL && b.a.forEach(F, function(e, f) {
                    b.a.n(d.APPEND_MANUAL, e) && (c = e in b.z.a ? c + ("&" + e + "=1") : c + ("&" + e + "=0"))
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
                if (w)
                    if (b.z.as = "gna" + t.floor(1E6 * t.random()),
                    w[b.z.as] = function(c) {
                        b.z.au = new y - b.z.av;
                        b.z.am = "n" in c ? 1 : 0;
                        b.z.a = c;
                        b.z.aq();
                        b.z.ap();
                        w.jsonpcache = c;
                        w[b.z.as] = null
                    }
                    ,
                    b.z.av = new y,
                    b.g.h(function() {
                        b.z.aw = new y - b.z.av
                    }, 0),
                    w.jsonpcache)
                        w[b.z.as](w.jsonpcache);
                    else
                        d(c);
                else
                    b.g.h(setupNadoListener, 200)
            }
            ;
            b.z.ax = function(c, d) {
                void 0 === b.z.e[c] && (b.z.e[c] = 1 / b.z.c < t.random());
                if (b.z.e[c])
                    return false;
                var e = b.z.q();
                b.w && b.w.e && b.w.e.imaSDK ? c.moatClientLevel3 && b.s.b(34, c, e) : b.s.b(34, c, e);
                return true
            }
            ;
            b.z.ay = function(d) {
                if (true !== b.z.az) {
                    b.z.az = true;
                    var e = b.z.ax(d);
                    b.z.at(d);
                    b.z.ak();
                    if (e) {
                        try {
                            b.d.az || b.a.bf("afs.moatads.com")
                        } catch (f) {}
                        var g =
                        function() {
                            var c = {};
                            c.qr = b.z.ag;
                            c.qo = b.z.ad;
                            b.s.b(36, d, c)
                        }
                        ;
                        b.g.e(v, k, function(c) {
                            b.g.f(v, k, null , "mswe");
                            b.z.ag = 1;
                            g()
                        }, "mswe");
                        b.g.e(v, u, function(c) {
                            b.g.f(v, u, null , "mswer");
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
                        } catch (e) {}
                    b.z.ar = null
                }
            }
            ;
            b.z.bb = function() {
                b.g.f(v, k, null , "mswe");
                b.g.f(v, u, null , "mswer");
                b.z.ba()
            }
            ;
            b.j.b.addEventCallback("allLocalAdsKilled",
            b.z.bb, {
                once: true
            })
        })(q);
        (function(b) {
            function l(c) {
                var e = {
                    window: 0,
                    transparent: 1,
                    opaque: 2,
                    direct: 3,
                    gpu: 4
                };
                if ("EMBED" === c.tagName)
                    var d = b.a.getAttribute(c, "wmode");
                else if ("OBJECT" === c.tagName) {
                    c = c.getElementsByTagName("param");
                    for (var f = 0; f < c.length; f++) {
                        var m = c[f]
                          , h = b.a.getAttribute(m, "name")
                          , m = b.a.getAttribute(m, "value");
                        if ("wmode" === h) {
                            d = m;
                            break
                        }
                    }
                }
                return d && e[d.toLowerCase()] || 5
            }
            function f(c) {
                try {
                    if (!c)
                        return false;
                    var e = c, d;
                    if ("DIV" === e.tagName || "A" === e.tagName)
                        (e = c.getElementsByTagName("EMBED")[0]) ||
                        (e = c.getElementsByTagName("OBJECT")[0]),
                        e || (e = c.getElementsByTagName("IMG")[0]),
                        e || (e = c);
                    1 === e.nodeType && "IMG" !== e.nodeName && "EMBED" !== e.nodeName && "OBJECT" !== e.nodeName && (e = c.getElementsByTagName("EMBED")[0] || c.getElementsByTagName("OBJECT")[0] || c.getElementsByTagName("IMG")[0] || c);
                    if ("OBJECT" === e.tagName) {
                        for (c = 0; c < e.children.length; c++)
                            if ("movie" === e.children[c].name || "Movie" === e.children[c].name)
                                d = e.children[c].value;
                        e.object && e.object.Movie ? d = e.object.Movie : e.data && -1 !== e.data.indexOf("swf") &&
                        (d = e.data)
                    }
                    "EMBED" !== e.tagName && "IMG" !== e.tagName || !e.src || (d = e.src);
                    d || (d = b.a.u(e));
                    var f = b.x.a(d, e);
                    return {
                        adURL: d,
                        flashVars: f
                    }
                } catch (m) {
                    return false
                }
            }
            function h(c) {
                var h = c.el
                  , d = c.url
                  , x = c.flashVars
                  , m = c.adIds
                  , r = c.opt_props;
                (new y).getTime();
                this.ao = m;
                this.FIND_AD_TRIES = m.numTries || 0;
                var z = f(h);
                if (z && z.adURL && x)
                    for (p in z.flashVars)
                        z.flashVars.hasOwnProperty(p) && (x[p] = z.flashVars[p]);
                z && z.flashVars && (x = z.flashVars);
                if ("string" !== typeof d || "div" === d.toLowerCase() || "a" === d.toLowerCase())
                    d = z && z.adURL || "-";
                d && 0 !== d.toLowerCase().indexOf("http:") && 0 !== d.toLowerCase().indexOf("https:") && ("//" === d.substring(0, 2) ? d = window.location.protocol + d : "/" === d[0] ? d = window.location.protocol + "//" + window.location.host + d : (z = window.location.pathname.split("/").slice(0, -1).join("/"),
                d = window.location.protocol + "//" + window.location.host + "/" + z + (z ? "/" : "") + d));
                "IFRAME" !== h.tagName && "IMG" !== h.tagName && -1 === d.indexOf("googlesyndication") && (d = d.split("?")[0]);
                this.zr = m.adNum;
                this.yg = b.a.ce();
                b.k.g(this.yg, b.d.l.a);
                B[this.zr] = this;
                b.b.d(this.zr, [h]);
                this.ae = d;
                this.aa = h;
                this.WINDOW = b.a.t(this.aa);
                "undefined" === typeof this._calcVideoBasedOnContainer && (this._calcVideoBasedOnContainer = "EMBED" === h.nodeName && h.parentNode && "OBJECT" === h.parentNode.nodeName && 0 == h.offsetWidth && 0 == h.offsetHeight ? true : false);
                this._calcVideoBasedOnContainer ? (this.INITIAL_WIDTH = h.parentNode.offsetWidth,
                this.INITIAL_HEIGHT = h.parentNode.offsetHeight) : (this.INITIAL_WIDTH = h.offsetWidth,
                this.INITIAL_HEIGHT = h.offsetHeight);
                "undefined" === typeof x && (x = {});
                b.k.h(da);
                this.eg = [];
                this.ee = {};
                r && r.IS_PAGE_LEVEL || (this.ed = {},
                b.i.y(this));
                b.w.f(this);
                this.get_duration = function() {
                    return "number" == typeof m.duration && !isNaN(m.duration) && 0 < m.duration && m.duration
                }
                ;
                this.get_width = function() {
                    return m.initWidth ? m.initWidth : this.INITIAL_WIDTH ? this.INITIAL_WIDTH : false
                }
                ;
                b.p.d(this);
                b.y.s(this.zr, this.ao);
                this.ag = x;
                this.ah = void 0;
                this.ai = 0;
                this.an = this.am = this.al = this.ak = this.aj = void 0;
                this.ar = [];
                this.as = [];
                this.at = [];
                this.av = this.au = b.q.a.a.a;
                this.ax = b.q.a.b.a;
                this.ay = b.q.a.c.a;
                this.ba =
                this.az = b.q.a.d.a;
                this.bb = b.q.a.e.a;
                this.by = this.bx = this.bw = this.bv = this.bu = this.bt = this.bs = this.br = this.bq = this.bp = this.bo = this.bm = this.bl = this.bk = this.bi = this.bh = this.bg = this.bf = this.be = this.bd = this.bc = void 0;
                this.ca = this.bz = false;
                this.cb = this.cu = this.ct = void 0;
                this.cc = +new y + 12E4;
                this.ci = +new y;
                this.cl = this.cm = void 0;
                this.cn = 0;
                this.ck = b.q.a.f.a;
                this.cd = false;
                this.cy = void 0;
                this.dt = false;
                this.db = void 0;
                this.cf = this.ce = false;
                this.af = Number(this.ef);
                this.eq = false;
                this.ds = this.ch = this.dr = this.cg = 0;
                this.dq = this.bn =
                void 0;
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
                this.ep = this.dd = false;
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
                e(h);
                0 === this.an && (this.WMODE = l(h));
                c = b.a.v(this.aa, 2);
                var v;
                c && 0 < c.length && (b.a.forEach(c, function(b) {
                    if (b && b.style && b.style.clip)
                        return v = b,
                        false
                }),
                !v && this.aa.style && this.aa.style.clip && (v = this.aa),
                v && (this.aa.CLIPCHECKINGTARGET = v));
                b.w.g(this);
                b.j.b.zaxs("adInitialized", this)
            }
            function e(b) {
                return "IFRAME" === b.tagName ? 2 : "IMG" === b.tagName ? 1 : "EMBED" === b.tagName || "OBJECT" === b.tagName ? 0 : 3
            }
            b.b = {};
            b.b.b = function(c, f, d, x, m, r, z) {
                r || b.z.ay(m);
                var v;
                v = 1 == arguments.length ? arguments[0] : {
                    el: c,
                    url: f,
                    flashVars: x,
                    adIds: m,
                    opt_props: z
                };
                if (r) {
                    if ("function" === typeof r)
                        return r(c, f, x, m);
                    new y;
                    r.em = true;
                    B[r.zr] = r;
                    c[N] = r.zr;
                    c[D] = true;
                    r.aa = c;
                    r.INITIAL_WIDTH = c.offsetWidth;
                    r.INITIAL_HEIGHT = c.offsetHeight;
                    r.ae = f;
                    r.an = e(c);
                    0 === r.an && (r.WMODE = l(c));
                    r.ag = x || {};
                    b.r.a(r);
                    v = {
                        e: 0
                    };
                    v.q = r.aq[0]++;
                    b.s.a(r, v);
                    z && z.IS_PAGE_LEVEL || (r.periscopeManager && r.periscopeManager.killAllPixels(),
                    r.periscopeConfig = false,
                    b.i.y(r));
                    return r
                }
                return new h(v)
            }
            ;
            b.b.c = function(c) {
                c.de = isNaN(c.ao.startTime) ? +new y : c.ao.startTime;
                c.RAND = c.ao.rand;
                (new y).getTime();
                c.dd = true;
                b.o.g(c);
                b.d.a || b.ab.a.a();
                if (c._calcVideoBasedOnContainer) {
                    var e = {
                        aa: c.aa.parentNode,
                        zr: c.zr
                    };
                    c.aa.parentNode[N] = c.zr;
                    b.r.a(e)
                } else
                    b.r.a(c);
                c.aa.parentNode && "swiffycontainer" === c.aa.parentNode.id && b.ac.a(["..../../iframe ~ #clicktag"], c, c.aa.parentNode);
                b.j.b.zaxs("startAdTracking", c);
                e = {
                    e: 0
                };
                e.q = c.aq[0]++;
                b.s.a(c, e)
            }
            ;
            b.b.a = function() {
                var c, e;
                for (e in B)
                    B.hasOwnProperty(e) && (c = B[e]) && !c.ep && b.p.e(c)
            }
            ;
            b.b.e = function(c) {
                var e = +new y
                  , d = e - c.ci;
                if (0 < c.doa.length) {
                    var f = 1E3 * c.doa[0];
                    if (c.counters.laxDwell.tCur >=
                    f) {
                        c.doa.shift();
                        var m = c.es.length ? c.es[0] : 60;
                        if (f < m)
                            return false;
                        if (5E3 < d)
                            return true
                    }
                }
                return 0 < c.es.length && (m = 1E3 * c.es[0],
                b.o.m(c, m)) ? (c.es.shift(),
                true) : 0 === c.doa.length && e > c.cc ? (c.cc *= 2,
                true) : false
            }
            ;
            b.b.d = function(b, e) {
                for (var d = 0; d < e.length; d++) {
                    var f = e[d];
                    f[N] = b;
                    f[D] = true
                }
            }
            ;
            b.b.f = function(c, e) {
                b.a.a(e.cc);
                b.b.g(e);
                b.b.h(e, 1) && b.j.b.sxaz("adKilled", {
                    id: c
                })
            }
            ;
            b.b.i = function(c, e) {
                b.b.h(e) && b.j.b.sxaz("adNotFound", {
                    id: c
                })
            }
            ;
            b.b.h = function(c, e) {
                var d = 0;
                for (prop in B)
                    B.hasOwnProperty && B.hasOwnProperty(prop) && d++;
                return d <= (e || 0) ? (b.j.b.esgf("allLocalAdsKilled"),
                true) : false
            }
            ;
            b.b.j = function(b) {
                b.ep = true;
                delete B[b.zr];
                b.aa = null
            }
            ;
            b.b.g = function(c) {
                if (c && c.video && !c.video.started)
                    return false;
                var e = {
                    e: 21
                };
                e.q = c.aq[21]++;
                var d;
                b.y && b.y.o && (d = b.y.o(c));
                "string" === typeof d && (e.ff = d);
                b.s.a(c, e);
                c.unloadPixelSent = true
            }
            ;
            b.j.b.addEventCallback("adKilled", b.b.f, {
                includeId: true
            });
            b.j.b.addEventCallback("adNotFound", b.b.i, {
                includeId: true
            })
        })(q);
        (function(b) {
            function l(b) {
                var e = [];
                if ("string" !== typeof b)
                    return false;
                var f;
                f = 4 > b.length ? false : ".../" === b.substring(b.length -
                4);
                if (f)
                    return false;
                for (; b; ) {
                    if (c(b, ".../"))
                        f = ".../";
                    else if (c(b, "...../"))
                        f = "...../";
                    else if (c(b, "../") || c(b, "..../")) {
                        f = c(b, "../") ? "../" : "..../";
                        for (var h = f.length; c(b.substring(h), f); )
                            h += f.length;
                        f = b.substring(0, h)
                    } else
                        c(b, "=>/") ? f = "=>/" : c(b, "-/") ? f = "-/" : (c(b, "$[") ? (f = b.length,
                        h = n(b, "]/") + 2) : (f = b.length,
                        h = n(b, "/") + 1),
                        f = b.substring(0, t.min(f, h)));
                    if (("../" === f || ".../" === f) && ".../" === (e.length && e[e.length - 1]) || ".../" === f && "../" === (e.length && e[e.length - 1]))
                        return false;
                    if (b = b.substring(f.length)) {
                        if ("/" !==
                        f.substring(f.length - 1))
                            return false;
                        c(f, "../") || c(f, ".../") || c(f, "..../") || c(f, "...../") || c(f, "=>/") || c(f, "-/") || c(f, "$[") || (f = f.substring(0, f.length - 1))
                    }
                    e.push(f)
                }
                return e
            }
            function f(c) {
                if (!c)
                    return false;
                if (!b.d.g || 10 < b.a.l() || c.querySelectorAll && c.querySelector && (!c.MoatQSShimSet || c[e]))
                    return true;
                c.querySelector = function(b) {
                    b = this.querySelectorAll(b);
                    return b.length ? b[0] : null
                }
                ;
                c.querySelectorAll = function(b) {
                    var c = []
                      , d = this.ownerDocument || document
                      , e = d.createElement("style");
                    (d = d.getElementsByTagName("head")[0]) &&
                    d.insertBefore(e, d.childNodes[t.max(d.childNodes.length - 1, 0)] || null );
                    e && e.styleSheet && (e.styleSheet.cssText = b + "{shimtest:bar}");
                    b = this.getElementsByTagName("*");
                    for (var d = b.length, f = 0; f < d; f++)
                        b[f].currentStyle && "bar" === b[f].currentStyle.shimtest && (c[c.length] = b[f]);
                    e.parentNode.removeChild(e);
                    return c
                }
                ;
                c.MoatQSShimSet = true;
                return c[e] = true
            }
            function h(d, e, h) {
                var r = function(c, d) {
                    if (!c || !d)
                        return false;
                    if (c.matches)
                        return c.matches(d);
                    if (!f(c.parentNode))
                        return false;
                    var e = c.parentNode.querySelectorAll(d);
                    if (!e ||
                    !e.length)
                        return false;
                    var k = false;
                    b.a.forEach(e, function(b) {
                        b === c && (k = true);
                        return !k
                    });
                    return k
                }
                ;
                d = l(d);
                if (!d)
                    return false;
                var n = e;
                e = 0;
                for (var v = [], g = function(c) {
                    return c && b.e.a(c)
                }
                , k = function(b) {
                    return b && b.parentElement
                }
                , u = function(c) {
                    return c ? (c = b.e.b(c)) && c.body : false
                }
                , q = function(b, c, d) {
                    return b ? (b = b.getAttribute(c)) && (d = (new RegExp(d)).exec(b)) && d.length && 0 < d.length ? d[d.length - 1] : false : false
                }
                , t = 0; t < d.length && 100 > e; t++) {
                    var A = d[t];
                    if (c(A, "../") || c(A, "..../")) {
                        var w, y;
                        c(A, "../") ? (w = "../",
                        y = k) : (w = "..../",
                        y = g);
                        if (0 !==
                        A.length % w.length)
                            return false;
                        for (var E = 0; E < A.length / w.length; E++) {
                            if (!n || "HTML" === n.nodeName)
                                return false;
                            n = y(n);
                            e++
                        }
                    } else if (".../" === A)
                        for (; 100 > e; ) {
                            if (n && r(n, d[t + 1])) {
                                t++;
                                break
                            }
                            if (!n || "HTML" === n.nodeName)
                                return false;
                            n = n.parentElement;
                            e++
                        }
                    else if ("...../" === A) {
                        n = b.d.c && b.d.c.document && b.d.c.document.body;
                        if (!n)
                            return false;
                        e++
                    } else if ("=>/" === A) {
                        n = u(n);
                        if (!n)
                            return false;
                        e++
                    } else if ("-/" === A) {
                        n = b.a.previousElementSibling(n);
                        if (!n)
                            return false;
                        e++
                    } else if (c(A, "$["))
                        if (A = (E = (A = A.substring(2, A.length - 2)) && A.split("|")) &&
                        E[0],
                        E = E && E[1],
                        A && E)
                            if (A = q(n, A, E))
                                v.push(A),
                                e++;
                            else
                                return false;
                        else
                            return false;
                    else {
                        if (v && 0 < v.length)
                            for (w = v.length,
                            E = 0; E < w; E++)
                                A = A.replace("$" + E, v[E]);
                        if (!r(n, A)) {
                            if (!f(n))
                                return false;
                            n = n.querySelectorAll(A);
                            if (h && t === d.length - 1)
                                return n ? n : false;
                            if (!n || 1 !== n.length)
                                return false;
                            n = n[0]
                        }
                    }
                }
                return n
            }
            b.ac = {};
            var e = "MoatQSShimOrd_LIVERAILJSVPAID1_" + b.d.o
              , c = function(b, c) {
                return 0 === b.indexOf(c) && c
            }
              , n = function(b, c) {
                var e = b.indexOf(c);
                return 0 > e ? b.length + 1 : e
            }
            ;
            b.ac.b = function(c, e) {
                var f = [];
                b.a.forEach(c, function(b) {
                    (b =
                    h(b, e)) && f.push(b)
                });
                return f
            }
            ;
            b.ac.c = function(c, e) {
                var f = [];
                b.a.forEach(c, function(b) {
                    if (b = h(b, e, true))
                        if (b.length && 1 < b.length)
                            for (var c = 0; c < b.length; c++)
                                f.push(b[c]);
                        else
                            f.push(b)
                });
                return f
            }
            ;
            b.ac.a = function(c, e, f) {
                c = b.ac.b(c, f);
                b.a.forEach(c, function(c) {
                    b.r.e(e, c)
                })
            }
        })(q);
        (function(b) {
            function l(e, c, f, d) {
                d = d || function() {
                    return true
                }
                ;
                if (!e)
                    return false;
                var h = b.a.l()
                  , m = null  !== h && 11 > h;
                if (!m)
                    for (var r = e.getElementsByTagName("embed"), h = 0; h < r.length; h++) {
                        var l = r[h];
                        if (true !== l[D] && -1 === l.id.indexOf("moatPx") &&
                        b.a.ap(l) && l.getAttribute("src") && d(l)) {
                            var v = l.getAttribute("src");
                            d = b.x.a(v, l);
                            return b.b.b(l, v, false, d, c, f)
                        }
                    }
                for (var g = e.getElementsByTagName("object"), h = 0; h < g.length; h++)
                    if (r = g[h],
                    b.a.ap(r) && d(r) && ("undefined" === typeof r[D] || true !== r[D]) && -1 == r.id.indexOf("moatPx")) {
                        for (var k = 0; k < r.children.length; k++)
                            if ("movie" === r.children[k].name || "Movie" === r.children[k].name)
                                if (v = r.children[k].value,
                                !v || !v.match("scorecardresearch"))
                                    for (var u = 0; u < r.children.length; u++) {
                                        if (!m && "EMBED" === r.children[u].tagName) {
                                            l =
                                            r.children[u];
                                            if ("undefined" !== typeof l[D] && true === l[D] || -1 != l.id.indexOf("moatPx"))
                                                continue;if (b.a.ap(l) && d(l))
                                                return d = b.x.a(v, l),
                                                b.b.b(l, v, false, d, c, f)
                                        }
                                        if ("OBJECT" === r.children[u].tagName && (l = r.children[u],
                                        b.a.ap(l) && true !== l[D] && -1 === l.id.indexOf("moatPx") && d(l)))
                                            return b.b.b(l, void 0, false, void 0, c, f)
                                    }
                        r.object && r.object.Movie ? v = r.object.Movie : r.data && (v = r.data);
                        if (!v || !v.match("scorecardresearch"))
                            return d = b.x.a(v, r),
                            b.b.b(r, v, false, d, c, f)
                    }
                if (h = b.ad.h(e, c, f, d))
                    return h;
                v = e.getElementsByTagName("img");
                for (h =
                0; h < v.length; h++)
                    if (m = v[h],
                    "undefined" === typeof m[D] || true !== m[D]) {
                        if (b.a.ap(m) && "" !== m.src && -1 === document.location.href.indexOf(m.src) && d(m))
                            return b.b.b(m, m.getAttribute("src"), false, void 0, c, f);
                        var q;
                        try {
                            q = m.src
                        } catch (t) {
                            q = m.getAttribute && m.getAttribute("src")
                        }
                        V["1"] = m.offsetWidth + "x" + m.offsetHeight + ":" + q
                    }
                if (e = e.getElementsByTagName("canvas")[0]) {
                    var F;
                    d(e.parentNode) && b.a.ap(e.parentNode) && (F = b.b.b(e.parentNode, e.parentNode.nodeName, false, void 0, c, f));
                    if (F)
                        return F
                }
                return false
            }
            function f(e, c) {
                for (var f =
                [], d = b.a.bj(e) ? e : e.getElementsByTagName("iframe"), h, m = 0; m < d.length; m++)
                    if (h = d[m],
                    !h[D]) {
                        var r = b.e.b(h) ? false : true;
                        (1 === c && r && b.a.ap(h) || 2 === c && !r) && f.push(h)
                    }
                return f
            }
            b.ad = {};
            b.ad.a = function(e, c, f, d, h) {
                var m = b.ad.b
                  , r = 0;
                b.g.a(function() {
                    c.numTries = r++;
                    return m(e, c, f, d) && true
                }, b.ad.c, 500, h)
            }
            ;
            b.ad.h = function(e, c, h, d) {
                d = d || function() {
                    return true
                }
                ;
                e = f(e, 1);
                if (e[0] && b.a.ap(e[0]) && d(e[0]))
                    return b.b.b(e[0], e[0].src, false, void 0, c, h)
            }
            ;
            b.ad.g = function(e, c, f, d) {
                var h, m;
                e = b.ad.f(d || e, b.ad.i);
                for (d = 0; d < e.length; d++) {
                    m = e[d];
                    var r = b.e.b(m);
                    if (r && r.documentElement) {
                        a: {
                            h = c;
                            var z = f
                              , q = m;
                            if (q.id && q.id.match("ebBannerIFrame") && b.a.ap(q) && (h = b.b.b(q, q.nodeName, false, void 0, h, z)))
                                break a;
                            h = void 0
                        }
                        if (h)
                            return c.cadf = "Friendly Sizmek Iframe",
                            h;
                        if (m = b.ac.b([".../div.celtra-clipper"], m)[0])
                            if (b.a.ap(m)) {
                                if (h = b.b.b(m, m.nodeName, false, void 0, c, f))
                                    return c.cadf = "Local Celtra Parallax",
                                    (c = r.getElementById("celtra-banner") || r.getElementById("celtra-object-1") || r.getElementById("celtra-instaad-unit")) && b.r.e(h, c),
                                    h
                            } else
                                continue;if (h = l(r.documentElement,
                        c, f))
                            return h
                    }
                }
            }
            ;
            b.ad.j = function(e, c, f) {
                var d, h;
                e = b.ad.f(e, b.ad.i);
                for (var m = 0; m < e.length; m++) {
                    h = e[m];
                    var r = b.e.b(h);
                    if (r && r.documentElement) {
                        if ((d = b.ad.k(r.documentElement, c, f, h)) || (d = l(r.documentElement, c, f)))
                            return d;
                        r = b.ad.f(r.documentElement, b.ad.i);
                        for (h = 0; h < r.length; h++) {
                            d = r[m];
                            var z = b.e.b(d);
                            if (z && z.documentElement && (d = b.ad.k(z.documentElement, c, f, d)))
                                return d
                        }
                    }
                }
            }
            ;
            b.ad.k = function(e, c, f, d) {
                e = e && e.ownerDocument && e.ownerDocument.body;
                var h;
                if ((e = e && e.children && e.children[0]) && e.id && e.id.match(/flite-\d+$/) &&
                (e && d && d.className && d.className.match("flite-ad") && b.a.ap(d) ? h = d : e && d && d.parentNode && d.parentNode.className && d.parentNode.className.match("flite-div") && b.a.ap(d.parentNode) ? h = d.parentNode : e && d && d.parentNode && d.parentNode.parentNode && d.parentNode.parentNode.className.match("flite-lightbox") && b.a.ap(d.parentNode.parentNode) && (h = d.parentNode.parentNode),
                h && (c.cadf = "Flite",
                c = b.b.b(h, h.nodeName, false, void 0, c, f))))
                    return b.r.e(c, e),
                    b.r.e(c, d),
                    c
            }
            ;
            b.ad.e = function(b, c, f) {
                return false
            }
            ;
            b.ad.l = function(e, c) {
                if (!X) {
                    var f =
                    (new y).getTime() - c.ao.startTime;
                    true !== c.em && true !== c.preventTryFindingAdAgain && 5E3 > f && (b.ad.m(c),
                    e.shouldKillAd = false)
                }
            }
            ;
            var h = b.j.b.addEventCallback("beforeAdKilled", b.ad.l);
            b.j.b.addEventCallback("allLocalAdsKilled", function() {
                b.j.b.sxaz("beforeAdKilled", {
                    id: h
                })
            }, {
                once: true
            });
            b.ad.n = function(b) {}
            ;
            b.ad.m = function(e) {
                if (true !== e.em) {
                    delete B[e.zr];
                    b.a.a(e.cc);
                    e.periscopeManager && e.periscopeManager.killAllPixels();
                    var c;
                    (c = G && G.parentNode) && b.ad.a(c, e.ao, e, void 0, function() {
                        b.p.e(e)
                    })
                }
            }
            ;
            b.ad.o = function(e, c, f, d) {
                e = b.ac.b(e, c);
                var h;
                b.a.forEach(e, function(c) {
                    if (b.a.ap(c))
                        return h = c,
                        false
                });
                if (h)
                    return e = b.a.u(h) || h.src,
                    b.b.b(h, e || "DIV", false, void 0, f, d)
            }
            ;
            b.ad.d = l;
            b.ad.b = function(e, c, f, d, h) {
                h = h || function() {
                    return true
                }
                ;
                var m = b.ad.d
                  , r = b.ad.e;
                if ("undefined" === typeof e)
                    return false;
                b.d.f && "HEAD" === e.tagName && (d = e.parentNode,
                "HTML" === d.tagName && (d = d.getElementsByTagName("body"),
                0 < d.length && (e = d[0])));
                var l;
                if ((l = r(e, c, f)) || (l = m(e, c, f, h)) || (l = b.ad.g(e, c, f)))
                    return l;
                if (d = b.e.d(e))
                    if (l = b.ad.g(d, c, f))
                        return l;
                return !Ia && !d || !(d = d || b.e.d(e)) || b.d.a &&
                "BODY" === d.nodeName && b.a.t(d) == b.d.c || !(l = r(d, c, f)) && !(l = m(d, c, f, h)) ? false : l
            }
            ;
            b.ad.f = f;
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
            function l(f, h, e) {
                e = {};
                f = f.replace(/&amp;/g, "&").replace(/(^\s+|\s+$)/g, "");
                f = f.split("&");
                for (var c = 0; c < f.length; c++) {
                    var n = f[c].split("=");
                    if ("string" === typeof n[1]) {
                        n[0] && n[0].match("moatClient") && (e["rawM" + n[0].slice(1)] = n[1]);
                        var d = n, l, m = l = n[1];
                        try {
                            for (var r = 0; 100 > r && (l = decodeURIComponent(l),
                            m != l) && !l.match(/^http(s)?\:/); r++)
                                m =
                                l
                        } catch (q) {}
                        l = l.replace(/(^\s+|\s+$)/g, "");
                        d[1] = l
                    } else
                        n[1] = "";
                    e[n[0]] = n[1]
                }
                "undefined" !== typeof h && (e.clientZone = "undefined" !== h ? h : "");
                return e = b.f.h(e)
            }
            b.f = {};
            b.f.b = function(f, h) {
                if (!f)
                    return false;
                if ("undefined" === typeof f.startTime || h)
                    f.startTime = b.d.o;
                if ("undefined" === typeof f.rand || h)
                    f.rand = t.floor(t.random() * t.pow(10, 12));
                "undefined" === typeof f.adNum && (f.adNum = w.zr,
                w.zr++);
                f.duration = t.round(f.duration)
            }
            ;
            b.f.c = function(f) {
                if (!f)
                    return false;
                var h = b.a.e();
                b.a.g();
                decodeURIComponent(h);
                if (b.a.ae().isInApp &&
                !b.a.ai()) {
                    var h = f.moatClientSlicer1
                      , e = f.moatClientSlicer2;
                    h && "-" !== h && "" !== h.replace(/^\s+|\s+$/gm, "") || (e = h = "In App");
                    e || (e = "In App");
                    f.moatClientSlicer1 = "In App / " + h;
                    f.moatClientSlicer2 = "In App / " + e
                }
                return f
            }
            ;
            b.f.d = function(f) {
                return b.f.a(f)
            }
            ;
            b.f.a = function(b) {
                try {
                    var h = b.className
                      , e = b.getAttribute("src");
                    h.split("\n").join(" ");
                    if (-1 !== h.indexOf("moatfooter"))
                        return false;
                    var c = e.split("?")
                      , n = e.split("#");
                    b = false;
                    1 < c.length && 1 < n.length && c[1].length < n[1].length && (b = true);
                    if (1 == c.length || b)
                        c = n;
                    return 1 <
                    c.length ? l(c[1], "undefined") : false
                } catch (d) {
                    return false
                }
            }
            ;
            b.f.e = function(b) {
                if (!b)
                    return false;
                var h = {};
                try {
                    var e = b && b.className.replace("amp;", "").split("?")[1];
                    return h = e && l(e)
                } catch (c) {
                    return false
                }
            }
            ;
            b.f.f = function(f) {
                f.zMoatLROwnerId = f.moatClientLevel1;
                f.moatClientLevel1 = f.moatClientLevel2 && "-" !== f.moatClientLevel2 ? f.moatClientLevel2 : "Advertiser Not Identified";
                f.moatClientLevel2 = f.moatClientLevel4 && "-" !== f.moatClientLevel4 ? f.moatClientLevel4 : "Order Not Identified";
                f.moatClientLevel4 = f.moatClientLevel3 && "-" !==
                f.moatClientLevel3 ? f.moatClientLevel3 : "Creative Not Identified";
                f.moatClientLevel3 = f.moatClientLevel5 && "-" !== f.moatClientLevel5 ? f.moatClientLevel5 : "Order Line Item Not Identified";
                f.zMoatImpID = f.moatClientLevel6 && "-" !== f.moatClientLevel6 ? f.moatClientLevel6 : "Impression ID Not Identified";
                f.zMoatLRPubID = f.moatClientSlicer1 && "-" !== f.moatClientSlicer1 ? f.moatClientSlicer1.split(",")[0] : "Publisher Not Identified";
                f.zMoatLRMuted = !!f.moatClientSlicer3;
                f.zMoatLRAutoPlay = !!f.moatClientSlicer4;
                f.zMoatLRDuration =
                f.moatClientSlicer5 ? f.moatClientSlicer5 : "";
                f.zMoatLRContent = f.moatClientSlicer6 ? f.moatClientSlicer6 : "";
                f.zMoatLRPartners = f.moatClientSlicer7 && "-" !== f.moatClientSlicer7 ? f.moatClientSlicer7 : "Partner Not Identified";
                f.zMoatLRVideoId = f.moatClientSlicer8 && "-" !== f.moatClientSlicer8 ? f.moatClientSlicer8 : "Video Not Identified";
                f.zMoatLRVertical = f.moatClientSlicer9 && "-" !== f.moatClientSlicer9 ? f.moatClientSlicer9 : "Vertical Not Identified";
                f.zMoatLRDomain = f.moatClientSlicer10 && "-" !== f.moatClientSlicer10 ? f.moatClientSlicer10 :
                "Domain Not Identified";
                f.zMoatLRWidth = f.moatClientSlicer11 && "-" !== f.moatClientSlicer11 ? f.moatClientSlicer11 : "Width Not Identified";
                f.zMoatLRHeight = f.moatClientSlicer12 && "-" !== f.moatClientSlicer12 ? f.moatClientSlicer12 : "Height Not Identified";
                f.zMoatLRDomainDiag = b.a.g();
                f.zMoatLRSubdomainDiag = encodeURIComponent(b.a.e());
                return f
            }
            ;
            b.f.g = function(f) {
                var h = /(level|slicer)([\d]*)/, e, c, l;
                if ("undefined" !== typeof f.flashVars)
                    for (e in f.flashVars)
                        f.flashVars.hasOwnProperty(e) && (f[e] = f.flashVars[e]);
                for (e in f)
                    f.hasOwnProperty(e) &&
                    e.match && (c = e.match(h)) && (l = "level" === c[1] ? "moatClientLevel" : "moatClientSlicer",
                    f[l + c[2]] = "string" != typeof f[e] && "undefined" != typeof f[e] && null  !== f[e] ? "undefined" != typeof f[e].toString ? f[e].toString() : typeof f[e] : f[e],
                    delete f[e]);
                (f = b.f.f(f)) && "16708" === f.zMoatLROwnerId && (f.zMoatLRPubVert = f && f.zMoatLRPubID && f.zMoatLRVertical ? f.zMoatLRPubID + "_" + f.zMoatLRVertical : "Value Not Defined")
            }
            ;
            b.f.h = function(b) {
                if (b) {
                    for (var h in b)
                        b.hasOwnProperty(h) && h && h.match("moatClientLevel") && "string" === typeof b[h] &&
                        (b[h] = b[h].replace(/\:/g, "_").replace(/%3A/gi, "_"));
                    return b
                }
            }
            ;
            b.f.i = function(b) {
                try {
                    var h = zoneRegEx.exec(b.innerHTML);
                    0 < h.length && (zone = h[1]);
                    return zone
                } catch (e) {}
            }
            ;
            b.f.j = function(b) {
                return (b = unescape(unescape(unescape(unescape(b.innerHTML)))).match(/~fdr=(\d*).*?\/.*?;(\d*)/)) ? {
                    adid: b && b[1] || "-",
                    cid: b && b[2] || "-"
                } : false
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
            function l(e, c) {
                var f, d = [], h, m = b.a.k() ? 2048 : 7750, l = c || {};
                h = {};
                e.fs = "78356";
                for (f in e)
                    e.hasOwnProperty(f) && (1 != e.e || "x" !== f && "y" !== f && "c" !== f ? d.push(encodeURIComponent(f) + "=" + encodeURIComponent(e[f])) : h[f] = e[f].split("a"));
                f = d.join("&");
                var d = m - f.length
                  , q = 0;
                if ("undefined" !== typeof h.x) {
                    for (var v = 0, g = 0; g < h.x.length; g++)
                        if (v += h.x[g].length + (h.y[g] ? h.y[g].length : 0) + (h.c[g] ? h.c[g].length : 0),
                        v < d)
                            q++;
                        else
                            break;
                    0 < q && (f += "&x=" + h.x.slice(0, q - 1).join("a"),
                    f += "&y=" + h.y.slice(0, q - 1).join("a"),
                    f += "&c=" + h.c.slice(0, q - 1).join("a"))
                }
                for (var k in l)
                    l.hasOwnProperty(k) && (h = "&" + encodeURIComponent(k) + "=" + encodeURIComponent(l[k]),
                    h.length + f.length < m && (f += h));
                f = f.replace(/\x27/g, "%27");
                try {
                    var m = f, u;
                    var l = f
                      , w = e.i
                      , F = new y
                      , A = [F.getFullYear(), ("0" + (F.getMonth() + 1)).slice(-2), ("0" + F.getDate()).slice(-2)].join("-")
                      , l = l + (w + A)
                      , w = 0;
                    if (0 == l.length)
                        u = w;
                    else {
                        for (F = 0; F < l.length; F++)
                            var B = l.charCodeAt(F)
                              , A = w
                              , A = (A << 5) - A + B
                              , w = A &= A;
                        u = t.abs(w)
                    }
                    f = m + ("&na=" + u)
                } catch (C) {}
                return f
            }
            function f(e, c) {
                e.j = 25 == c ? "string" == typeof b.d.b && b.d.b.slice(0, 500) || "" : b.a.h(b.d.b);
                if (!b.d.a) {
                    var f = b.a.f();
                    f && (e.lp = f)
                }
            }
            b.s = {};
            var h = "zMoatLROwnerId zMoatLRMuted zMoatLRAutoPlay zMoatLRDuration zMoatLRContent zMoatLRPartners zMoatLRVideoId zMoatLRVertical zMoatLRDomain zMoatLRWidth zMoatLRHeight zMoatLRPubID zMoatLRPubVert".split(" ");
            b.s.b = function(e, c, n, d, q) {
                b.f.b(c, d);
                var m = {};
                m.e = e;
                b.a.az(m, n);
                m.i = "LIVERAILJSVPAID1";
                if (11 === e) {
                    b.j.b.zaxs("adNotFound");
                    e = [];
                    for (var r in V)
                        V.hasOwnProperty(r) &&
                        e.push(r + "=" + V[r]);
                    m.k = e.join("&").slice(0, 300)
                }
                if (!(m.e in Fa)) {
                    m.bq = b.d.k;
                    m.f = Number(!qa);
                    f(m, m.e);
                    m.o = 3;
                    m.t = c.startTime;
                    m.de = c.rand;
                    m.m = 0;
                    m.ar = "ce785ae-clean";
                    b.a.bh(m, "ai", w.z);
                    m.q = w.m++;
                    m.cb = Y ? 1 : 0;
                    m.cu = ra;
                    m.ll = b.d.ad || 0;
                    b.a.bh(m, "lm", b.d.ae);
                    m.ln = b.d.f ? 1 : 0;
                    m.r = b.i.i;
                    b.a.az(m, b.focus.getQueryString());
                    b.f.k(c, m);
                    "undefined" !== typeof c && (m.d = c.moatClientLevel1 + ":" + c.moatClientLevel2 + ":" + c.moatClientLevel3 + ":" + c.moatClientLevel4,
                    b.a.forEach(h, function(b) {
                        m[b] || (m[b] = c[b] || "-")
                    }),
                    b.z && (m.qs = b.z.c),
                    m.bo = c.moatClientSlicer1,
                    m.bd = c.moatClientSlicer2,
                    m.fd = "1");
                    m.ac = 1;
                    m.it = b.ad.q;
                    b.a.ae().isInApp && (m.lv = b.a.ag(),
                    b.a.ai() || b.a.al() && (m.lx = 1));
                    e = l(m);
                    r = O;
                    e = b.s.c(c, e + "&cs=0", m);
                    if (true === q)
                        return {
                            qs: m,
                            res: e
                        };
                    e.shouldSendPixel && e.querystring && (34 == m.e ? w.yh.yi(e.querystring, r, "afs.moatads.com", true) : w.yh.yi(e.querystring, r, "afs.moatads.com", b.d.q))
                }
            }
            ;
            b.s.a = function(e, c, n) {
                if (!e || true === e.ep)
                    return false;
                b.ad.n(e);
                if ("undefined" !== typeof e.ao && (2 !== e.an || 1 !== c.e && 3 !== c.e) && !(c.e in Fa)) {
                    c.lo = e.FIND_AD_TRIES;
                    e.ah &&
                    (c.a = e.ah);
                    var d = e.ag
                      , q = {};
                    if (9 === c.e && 2 === c.q || 25 === c.e) {
                        for (var m in d)
                            d.hasOwnProperty(m) && "" !== m && "undefined" !== typeof d[m] && -1 === m.indexOf("dvContains") && -1 === m.indexOf("indexOf") && -1 === m.toLowerCase().indexOf("clicktag") && (q["z" + m] = d[m]);
                        c.e = 25
                    }
                    0 === e.an && (c.dc = e.WMODE);
                    b.z && (c.qs = b.z.c);
                    "string" !== typeof e.ae || 0 != c.e && 25 != c.e ? c.ak = "-" : (d = b.d.g ? 700 : 1200,
                    c.ak = e.ae.length <= d ? e.ae : e.ae.slice(0, d));
                    e.bi > e.bg && (e.bg = e.bi);
                    e.bm > e.bk && (e.bk = e.bm);
                    c.i = "LIVERAILJSVPAID1";
                    b.a.az(c, b.z.q(true));
                    c.bq =
                    b.d.k;
                    c.g = e.aq.g++;
                    d = e.INITIAL_WIDTH;
                    c.h = e.INITIAL_HEIGHT;
                    c.w = d;
                    try {
                        b.d.au() && e && e.elementRect && (c.fy = e.elementRect.left,
                        c.gp = e.elementRect.top)
                    } catch (r) {}
                    c.f = Number(!qa);
                    f(c, c.e);
                    c.o = 3;
                    c.t = e.ao.startTime;
                    c.de = e.ao.rand;
                    c.cu = ra;
                    c.m = c.m || b.a.q(e);
                    c.ar = "ce785ae-clean";
                    c.cb = Y ? 1 : 0;
                    c.ll = b.d.ad || 0;
                    b.a.bh(c, "lm", b.d.ae);
                    c.ln = b.d.f ? 1 : 0;
                    c.r = b.i.i;
                    b.a.az(c, b.h.c());
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
                        c.lk = e && e.elementRect &&
                        e.elementRect.top + b.d.aq || "undefined"
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
                    (d = (d = b.d.v() || b.d.x) || b.d.z()) && (c.gm = 1);
                    b.d.x && (c.fa = 1);
                    b.d.z() && (c.fx = 1);
                    if (b.h && b.h.a())
                        c.ch = 1,
                        c.gh = 1;
                    else if (b.i && b.i.a) {
                        c.ct = b.i.ai;
                        if (e && e.periscopeManager) {
                            d = !b.focus.pageIsVisible() && e && e.counters && e.counters.strictDwell &&
                            0 == e.counters.strictDwell.tCur && 21 == c.e;
                            m = "0" != b.a.o();
                            if (e.periscopeManager.measurable || !b.d.a && d && m)
                                c.ch = 1;
                            e.periscopeManager.fullyMeasurable && e.ao && 1 != e.ao.skin && (c.ga = 1)
                        } else
                            c.ch = 1;
                        "undefined" !== typeof b.i.aj && e && e.ao && e.ao.startTime && !isNaN(e.ao.startTime) && (d = b.i.aj - e.ao.startTime,
                        c.fg = 0 <= d ? d : 0)
                    } else
                        c.ch = 0;
                    b.a.az(c, b.o.u(e.zr, c));
                    b.a.az(c, b.focus.getQueryString());
                    b.a.az(c, b.y.v(e.zr));
                    b.a.az(c, e.counters.getQs());
                    e.video.getQs(c);
                    b.a.bh(c, "ai", w.z);
                    b.a.bh(c, "ap", e.cb);
                    b.a.bh(c, "ax", e.bg);
                    b.a.bh(c, "ay", e.bi);
                    b.a.bh(c, "az", e.bk);
                    b.a.bh(c, "ba", e.bm);
                    b.a.bh(c, "aw", e.bc);
                    b.a.bh(c, "bg", e.bd);
                    b.a.bh(c, "be", e.be);
                    b.a.bh(c, "bc", e.bw);
                    b.a.bh(c, "bf", e.by);
                    b.a.bh(c, "bh", e.bx);
                    b.a.bh(c, "bz", e.cu);
                    c.cl = t.round(100 * e.IR5.AREA / (c.w * c.h));
                    c.au = e.aq[2] - 1;
                    c.av = e.aq[3] - 1;
                    c.by = e.aq[23] - 1;
                    c.at = e.dm;
                    b.f.k(e.ao, c);
                    c.d = e.ao.moatClientLevel1 + ":" + e.ao.moatClientLevel2 + ":" + e.ao.moatClientLevel3 + ":" + e.ao.moatClientLevel4;
                    c.bo = e.ao.moatClientSlicer1;
                    c.bd = e.ao.moatClientSlicer2;
                    b.a.forEach(h, function(b) {
                        c[b] ||
                        (c[b] = e.ao[b] || "-")
                    });
                    c.ab = e.an;
                    c.ac = 1;
                    c.fd = "1";
                    c.kt = b.o.r(e.zr);
                    c.it = b.ad.q;
                    e.bi = e.bg;
                    e.bm = e.bk;
                    b.v.b(e) && (c.fz = 1);
                    b.a.ae().isInApp && (c.lv = b.a.ag(),
                    b.a.ai() || b.a.al() && (c.lx = 1));
                    m = l(c, q);
                    d = O;
                    if (n)
                        return c;
                    n = b.s.c(e.ao, m + "&cs=0", c, q);
                    n.shouldSendPixel && n.querystring && (34 == c.e ? w.yh.yi(n.querystring, d, "afs.moatads.com", true) : w.yh.yi(n.querystring, d, "afs.moatads.com", b.d.q))
                }
            }
            ;
            b.s.d = function(b, c) {
                b.zMoatSrcd = b.d;
                b.zMoatSrcbo = b.bo;
                b.zMoatSrcbp = b.bp;
                b.zMoatSrcbd = b.bd;
                b.d = (c.moatClientLevel1 || "") + ":";
                b.d +=
                (c.moatClientLevel2 || "") + ":";
                b.d += (c.moatClientLevel3 || "") + ":";
                b.d += c.moatClientLevel4 || "";
                b.bo = c.moatClientSlicer1;
                b.bd = c.moatClientSlicer2;
                return b
            }
            ;
            b.s.e = function(e, c, f, d, h, m, r, q) {
                e = "extraPx_" + e;
                c[e] || (c[e] = {});
                d = b.a.bx(d);
                d.zMoatSrci = d.i;
                d.i = f;
                q && (d = b.s.d(d, q));
                if (b.z.be && !c[e].timestampsReset)
                    for (var v = 0; v < b.z.be.length; v++) {
                        var g = b.z.be[v];
                        g.zMoatSrci = g.i;
                        g.i = f;
                        q && (g = b.s.d(g, q));
                        g = l(g) + "&cs=0";
                        w.yh.yi(g, h, m, true)
                    }
                c[e].timestampsReset || (c[e].timestampsReset = true,
                d.am && (d.am = 0),
                d.an && (d.an = 0),
                d.ao &&
                (d.ao = 0),
                d.aq && (d.aq = 0),
                d.ay && (d.ay = 0),
                d.ba && (d.ba = 0),
                d.bx && (d.bx = 0),
                d.cd && (d.cd = 0),
                d.cf && (d.cf = 0),
                d.db && (d.db = 0),
                d.dr && (d.dr = 0),
                d.dt && (d.dt = 0),
                d.es && (d.es = 0),
                d.ev && (d.ev = 0),
                d.sa && (d.sa = 0),
                d.sq && (d.sq = 0),
                d.si && (d.si = 0),
                d.sm && (d.sm = 0),
                d.mc && (d.mc = 0),
                d.lc && (d.lc = 0),
                d.pf && (d.pf = 0),
                d.ge && (d.ge = 0),
                d.gg && (d.gg = 0),
                d.cn && (d.cn = 0),
                d.gl && (d.gl = 0),
                d.pn && (d.pn = 0),
                d.fj && (d.fj = 0));
                e = l(d, r);
                w.yh.yi(e + "&cs=0", h, m, b.d.q)
            }
            ;
            b.s.c = function(b, c, f, d) {
                return {
                    shouldSendPixel: true,
                    querystring: c
                }
            }
            ;
            b.s.f = function(b, c) {
                if (2 !==
                b.an || 1 !== c.e && 3 !== c.e)
                    (new Image(1,1)).src = ""
            }
            ;
            b.s.g = function(b, c) {
                return l(b, c)
            }
            ;
            b.s.h = function(e) {
                var c = {
                    e: 16
                };
                c.q = e.aq[16]++;
                b.s.a(e, c)
            }
            ;
            b.s.i = function(e) {
                var c = false
                  , f = b.s.b(8, e.ao, false, false, true);
                if (f && f.qs && f.qs.d) {
                    c = f.qs.d.split(":");
                    c = {
                        viewHash: "LIVERAILJSVPAID1",
                        moatClientLevel1: c[0],
                        moatClientLevel2: c[1],
                        moatClientLevel3: c[2],
                        moatClientLevel4: c[3],
                        tagStartTime: b.d.o
                    };
                    if (e && e.ao)
                        for (var d in e.ao)
                            e.ao.hasOwnProperty(d) && -1 != d.indexOf("zMoat") && (c[d] = e.ao[d]);
                    for (d in f)
                        f.hasOwnProperty(d) && -1 !=
                        d.indexOf("zMoat") && (c[d] = f[d]);
                    c.moatClientSlicer1 = f.qs.bo;
                    c.moatClientSlicer2 = f.qs.bd
                }
                return c
            }
            ;
            b.s.j = function(e) {
                var c = {
                    e: 8
                };
                c.q = e.aq[8]++;
                return b.s.a(e, c, true)
            }
        })(q);
        (function(b) {
            function l(f, e, c, l, d) {
                var q = 1E4;
                b.a.ae().isInApp && (q = 500);
                var m = (new y).getTime();
                this.tMaxContinuous = this.tContinuous = this.tLast = this.tCur = 0;
                this.getMaxContinuous = function() {
                    return t.max(this.tContinuous, this.tMaxContinuous)
                }
                ;
                this.reset = function() {
                    this.tLast = this.tCur = 0
                }
                ;
                this.update = function(b) {
                    var c = (new y).getTime();
                    if (f(b)) {
                        b = t.min(c - m, q);
                        var e = typeof l;
                        b && 0 > b && (b = 0);
                        this.tCur += b;
                        this.tContinuous += b;
                        "number" === e && 0 < l ? this.tCur > l && (this.tCur = l) : "function" === e && (b = l(),
                        "number" === typeof b && this.tCur > b && 0 < b && (this.tCur = b))
                    } else
                        this.tMaxContinuous < this.tContinuous && (this.tMaxContinuous = this.tContinuous),
                        this.tContinuous = 0;
                    m = c;
                    d && d(this.tCur)
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
                    e && c && (b[e] = this.tCur,
                    b[c] =
                    this.tLast);
                    return b
                }
            }
            b.p = {};
            b.p.f = {};
            b.p.f.a = [];
            b.p.f.b = [];
            var f = false;
            b.p.g = function() {
                if (!f) {
                    f = true;
                    try {
                        var h = w.swde.addEventCallback("scroll", b.p.h);
                        b.j.b.addEventCallback("allLocalAdsKilled", function() {
                            w.swde.sxaz("scroll", {
                                id: h
                            })
                        }, {
                            once: true
                        })
                    } catch (e) {}
                }
            }
            ;
            b.p.i = function(f, e) {
                try {
                    var c = f.aa
                      , l = b.a.v(c, 5)
                      , d = l && (6 == l.length || 1 <= l.length && "HTML" === l[l.length - 1].nodeName);
                    e = e || f.WINDOW || b.a.t(c);
                    return !(c && e && d) || c.ownerDocument && c.ownerDocument.body && !c.ownerDocument.body.contains(c) ? false : true
                } catch (q) {
                    return false
                }
            }
            ;
            b.p.j = function() {
                function f() {
                    if (!m)
                        try {
                            m =
                            true,
                            e(),
                            m = false
                        } catch (b) {
                            throw m = false,
                            b;
                        }
                }
                function e() {
                    for (var e = 0, f = S.length; e < f; e++)
                        if (S[e] === l)
                            return;
                    l = b.g.g(function() {
                        b.p.k();
                        var currentTime = (new y).getTime()
                          , e = t.max(t.min(currentTime - previousTime, maxViewTick), 0);
                        b.j.b.zaxs("view:tick", e, currentTime);
                        previousTime = currentTime;
                        for (var f in B)
                            if (B.hasOwnProperty(f)) {
                                var h = B[f];
                                h.video.onLoop()
                            }
                        h && h.video && h.video.started && b.y.t()
                    }, viewTickInterval)
                }
                var viewTickInterval = 200;
                var l, previousTime = (new y).getTime(), maxViewTick = 10000;
                if (b.a.ae().isInApp) {
                  maxViewTick = 500;
                }
                var m = false;
                b.j.b.addEventCallback("periscope:onStateChange", f);
                b.j.b.addEventCallback("viewCounterStarted", f);
                return e
            }();
            b.p.k = function() {
                var f,
                e;
                for (e in B)
                    B.hasOwnProperty(e) && (f = B[e],
                    b.p.i(f, f.WINDOW) ? f.counters.update(f) : b.p.e(f))
            }
            ;
            b.p.e = function(f) {
                if (!X) {
                    var e = {
                        shouldKillAd: true
                    };
                    b.j.b.zaxs("beforeAdKilled", e, f);
                    if (!e.shouldKillAd)
                        return
                }
                b.j.b.zaxs("adKilled", f);
                b.b.j(f)
            }
            ;
            b.p.c = function(f) {
                f.eq || (f.eq = true);
                var e = {
                    e: 5
                };
                e.q = f.aq[5]++;
                b.s.a(f, e)
            }
            ;
            b.p.l = function(f) {
                if (!f || !f.aq || !f.aq[0])
                    return false;
                var e = {
                    e: 37
                };
                e.q = f.aq[37]++;
                b.s.a(f, e)
            }
            ;
            b.p.m = [];
            b.p.n = function(f, e) {
                var c = false;
                if (!f || !f.aq || !f.aq[29] || 3 > f.aq[29])
                    return false;
                for (var l = 0; l < e.length; l++) {
                    var d =
                    e[l];
                    -1 === b.a.indexOf(b.p.m, d) && (c = true,
                    b.p.m.push(d))
                }
                c && (c = {
                    e: 37
                },
                c.q = f.aq[37]++,
                b.s.a(f, c))
            }
            ;
            b.p.b = function(f) {
                var e, c;
                e = f._calcVideoBasedOnContainer ? f.aa.parentNode : f.aa;
                f.elementRect || (f.currentWidth = e.offsetWidth,
                f.currentHeight = e.offsetHeight);
                e = f.currentWidth;
                c = f.currentHeight;
                return 3 > e || 3 > c || b.focus.pageIsPrerendered() || !f.video.isPlaying() && !f.video.pausedByMoat ? true : false
            }
            ;
            b.p.o = function(b) {
                var e = 1;
                screen.deviceXDPI ? e = screen.deviceXDPI / screen.systemXDPI : b.devicePixelRatio && "undefined" !== typeof b.mozInnerScreenX &&
                (e = b.devicePixelRatio);
                return {
                    w: e * screen.width,
                    h: e * screen.height
                }
            }
            ;
            b.p.d = function(f) {
                f.counters = {};
                f.counters.laxDwell = new l(function() {
                    return !b.focus.pageIsPrerendered()
                }
                ,"bu","cd");
                f.counters.strictDwell = new l(function(c) {
                    return b.focus.pageIsVisible() || c && c.video && c.video.videoIsFullscreen
                }
                ,"ah","am");
                var e = function(c) {
                    return c && c.video && c.video.isPlaying(c) && !b.focus.pageIsPrerendered()
                }
                ;
                f.counters.strictPlayTime = new l(function(c) {
                    return c && c.video && c.video.isPlaying() && (b.focus.pageIsVisible() ||
                    c.video.videoIsFullscreen)
                }
                ,"dq","dr",function() {
                    return f.ao.duration
                }
                );
                f.counters.laxPlayTime = new l(e,"ds","dt",function() {
                    return f.ao.duration
                }
                );
                f.counters.quartileDelta = new l(e,void 0,void 0);
                f.counters.query = function() {
                    var b = {}, e;
                    for (e in this)
                        if (this.hasOwnProperty(e)) {
                            var d = this[e];
                            "function" === typeof d.query && d.query(b)
                        }
                    return b
                }
                ;
                f.counters.getQs = function() {
                    var b = {}, e;
                    for (e in this)
                        if (this.hasOwnProperty(e)) {
                            var d = this[e];
                            "function" === typeof d.getQs && d.getQs(b)
                        }
                    return b
                }
                ;
                f.counters.update =
                function(b) {
                    for (var e in this)
                        if (this.hasOwnProperty(e)) {
                            var d = this[e];
                            "function" === typeof d.update && true !== b.ep && d.update(b)
                        }
                }
                ;
                b.j.b.addEventCallback("startAdTracking", b.p.g)
            }
            ;
            b.p.p = function() {
                w.z = void 0;
                w.zs = false;
                w.xz = false;
                w.dcsx.wsqa("globalScrollevent" + w.dcsx.uid);
                b.a.forEach(b.p.f.a, function(b) {
                    if (b && "function" === typeof b)
                        try {
                            b()
                        } catch (e) {}
                })
            }
            ;
            b.p.h = function(f) {
                if (b.focus.pageIsVisible() && "undefined" === typeof w.z)
                    a: {
                        w.z = new y - ra,
                        f = void 0;
                        for (var e in B)
                            if (B.hasOwnProperty(e) && (f = B[e]) && "undefined" !== typeof f.ao) {
                                if (f.ce)
                                    break a;
                                var c = {
                                    e: 4
                                };
                                c.q = f.aq[4]++;
                                c.ai = w.z;
                                b.s.a(f, c);
                                f.ce = true
                            }
                        try {
                            w.dcsx.wsqa("globalScrollevent" + w.dcsx.uid),
                            w.swde.sxaz("scroll", {
                                callback: b.p.h
                            })
                        } catch (l) {}
                    }
            }
            ;
            b.p.a = function(f, e) {
                var c = {
                    e: 9
                };
                c.q = f.aq[9]++;
                f.ci = +new y;
                e && "object" === typeof e && b.a.forEach(e, function(b, d) {
                    c[d] = b
                });
                b.s.a(f, c)
            }
        })(q);
        (function(b) {
            function l(b, h) {
                function e(b) {
                    return function() {
                        try {
                            b.sending && (v = b.sending = false,
                            r = 0,
                            c())
                        } catch (d) {}
                    }
                }
                function c(b, c, f, k) {
                    if (b) {
                        c = {
                            qs: b,
                            jsd: c,
                            fld: f,
                            jso: k
                        };
                        if (0 === b.indexOf("e=21&")) {
                            d(c, true);
                            return
                        }
                        m.push(c)
                    }
                    if (0 ===
                    r && 0 < m.length)
                        if (r++,
                        b = m.shift(),
                        b.sending = true,
                        b.uid = h.Math.floor(1E10 * h.Math.random()),
                        b.timeoutId = setTimeout(e(b), 2E3),
                        w[b.uid] = b,
                        b.fld && !b.jso && v && z && z.sendMessage)
                            try {
                                z.sendMessage(b)
                            } catch (g) {
                                v = false,
                                d(b)
                            }
                        else
                            d(b)
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
                function d(b, c) {
                    var e = l();
                    e.toSend = b;
                    c || (e.onerror = function() {
                        var b = this.toSend;
                        b.failedAttempts = "number" == typeof b.failedAttempts ? b.failedAttempts + 1 : 0;
                        var c = (b.jsd + "/pixel.gif?" +
                        b.qs).length;
                        1 > b.failedAttempts ? d(b) : y && c > B && q(b)
                    }
                    ,
                    e.onload = function() {
                        q(this.toSend)
                    }
                    );
                    e.src = b.jsd + "/pixel.gif?" + b.qs
                }
                function q(b) {
                    var d = b && b.uid && w && w[b.uid];
                    if (b && b.qs && "tracer=" == b.qs)
                        return false;
                    if (d) {
                        w[b.uid] = null ;
                        try {
                            delete w[b.uid]
                        } catch (e) {}
                        try {
                            clearTimeout(d.timeoutId)
                        } catch (e) {}
                        if ("boolean" != typeof d.sending || d.sending)
                            d.sending = false;
                        else
                            return false
                    }
                    0 < r && r--;
                    c()
                }
                var m = [], r = 0, z = false, v = false, g = false, k, u = h[b], t = h.Math.floor(1E10 * h.Math.random()), w = {};
                u.yh = {};
                u = u.yh;
                k = h.Image;
                u.yi = function(b, d, e, f) {
                    c(b,
                    d, e, f)
                }
                ;
                u.yk = function(c, d) {
                    z = true;
                    var e = b + ".yh."
                      , k = {};
                    k.src = "https:" === d ? "https://z.moatads.com/swf/MessageSenderV4.swf" : "http://z.moatads.com/swf/MessageSenderV4.swf";
                    k.flashVars = "r=" + e + "zb&s=" + e + "zc&e=" + e + "zd&td=" + c;
                    return k
                }
                ;
                u.yj = function() {
                    return false === z
                }
                ;
                u.xq = function() {
                    return t
                }
                ;
                u.qb = function(b, c) {
                    g = true;
                    var d = {};
                    d.src = "https:" === c ? "https://z.moatads.com/swf/cap.swf" : "http://z.moatads.com/swf/cap.swf";
                    return d
                }
                ;
                u.qa = function() {
                    return false === g
                }
                ;
                u.zb = function() {
                    try {
                        if (true === z) {
                            var b = h.document.getElementById("moatMessageSender" +
                            t);
                            b && !b.sendMessage && (b = h.document.getElementById("moatMessageSenderEmbed" + t));
                            b && b.sendMessage && (v = true,
                            z = b)
                        }
                    } catch (c) {}
                }
                ;
                u.zc = function(b) {
                    try {
                        q(b)
                    } catch (c) {}
                }
                ;
                u.zd = function(b) {
                    try {
                        v = false,
                        b && b.jsd && m.push(b),
                        q(b)
                    } catch (c) {}
                }
                ;
                var A, y, B = 2083;
                try {
                    A = document.createElement("div"),
                    A.innerHTML = "\x3c!--[if IE 8]>x<![endif]--\x3e",
                    y = "x" === A.innerHTML
                } catch (E) {
                    y = false
                }
            }
            b.ae = {};
            b.ae.a = function(f) {
                try {
                    if (w.yh)
                        return
                } catch (h) {}
                b.a.cf(l, "'" + b.d.j + "',window", f)
            }
        })(q);
        (function(b) {
            b.af = {};
            b.af.a = function(b) {
                this.label =
                b;
                this.metrics = {};
                this.set = function(b, h) {
                    return this.metrics[b] = h
                }
                ;
                this.increment = function(b, h, e) {
                    h = "number" !== typeof this.metrics[b] ? this.set(b, h) : this.metrics[b] += h;
                    "number" === typeof e && (h = this.cap(b, h));
                    return h
                }
                ;
                this.cap = function(b, h) {
                    return this.set(b, t.min(this.get(b), h))
                }
                ;
                this.max = function(b, h) {
                    return this.set(b, t.max(this.get(b), h))
                }
                ;
                this.get = function(b, h) {
                    return "undefined" === typeof this.metrics[b] ? this.set(b, "undefined" !== typeof h ? h : 0) : this.metrics[b]
                }
            }
            ;
            b.af.b = function(l, f) {
                var h;
                l[f] ? h =
                l[f] : (h = new b.af.a(f),
                l[f] = h);
                return h
            }
        })(q);
        (function(b) {
            function l(f) {
                if (b.d.x) {
                    var h;
                    if (h = b.ab.a.b) {
                        f = b.n.o(f.aa);
                        var e = f.rect;
                        f = b.n.m(f.visibleRect, h.el, h.et);
                        h = b.n.l(f, {
                            left: h.vl,
                            right: h.vr,
                            top: h.vt,
                            bottom: h.vb
                        });
                        h = 100 * (h.right - h.left) * (h.bottom - h.top) / ((e.width || e.right - e.left) * (e.height || e.bottom - e.top))
                    } else
                        h = false;
                    return h
                }
                if (b.d.z())
                    return b.ag.a(f);
                if (b.d.v()) {
                    (h = f.safeframe && f.safeframe.geom) || (h = b.a.bo(b.d.u(), ["$sf", "ext", "geom"]),
                    f && !f.safeframe && (f.safeframe = {}),
                    f.safeframe.geom = h);
                    if (e = h && h()) {
                        var c = f.aa;
                        h = c.getBoundingClientRect();
                        f = f.WINDOW || b.a.t(c);
                        f = b.n.k(f);
                        f = b.n.l(h, f);
                        f = b.n.m(f, e.self.l, e.self.t);
                        var l;
                        l = e.self;
                        var d = e.exp;
                        e.par ? (c = e.par.l,
                        l = e.par.t) : (c = d.r > d.l ? l.r - l.w * l.xiv : l.l - d.l,
                        l = 1 === l.yiv || d.t > d.b ? l.t - d.t : l.b - d.b + (d.b - l.h * l.yiv));
                        f = b.n.m(f, -1 * c, -1 * l);
                        c = Number(e.win.l);
                        l = Number(e.win.t);
                        e = {
                            left: c,
                            right: Number(e.win.r),
                            top: l,
                            bottom: Number(e.win.b)
                        };
                        f = b.n.m(f, c, l);
                        e = b.n.l(f, e);
                        h = 100 * (e.right - e.left) * (e.bottom - e.top) / ((h.width || h.right - h.left) * (h.height || h.bottom -
                        h.top))
                    } else
                        h = false;
                    return h
                }
                return false
            }
            b.u = {};
            b.u.a = function(b) {
                var h = (b = l(b)) && !isNaN(b) && 50 <= b
                  , h = {
                    isVisible: h,
                    isFullyVisible: h && 98 <= b,
                    percv: b
                };
                80 <= b && (h.isDentsuVisible = true);
                return h
            }
        })(q);
        (function(b) {
            b.ag = {};
            b.ag.a = function(l) {
                if (!l.amp || !l.amp.started)
                    if (l.amp = {
                        started: false,
                        unlisten: null ,
                        percentVisible: null ,
                        context: b.a.bo(b.d.y(), ["context"])
                    },
                    b.ag.b(l.amp))
                        l.amp.started = true,
                        b.j.b.addEventCallback("adKilled", b.ag.c, {
                            condition: function(b) {
                                return l.zr == b.zr
                            },
                            once: true
                        });
                    else
                        return false;
                return l.amp.percentVisible
            }
            ;
            b.ag.b =
            function(l) {
                var f = b.a.bo(b.d.y(), ["context", "observeIntersection"]);
                if (!f)
                    return false;
                l.unlisten = f(function(b) {
                    return function(e) {
                        var c = e.length;
                        if (!(1 > c)) {
                            e = e[c - 1];
                            c = e.intersectionRect.width * e.intersectionRect.height;
                            e = e.boundingClientRect.width * e.boundingClientRect.height;
                            var f = b.context && b.context.hidden;
                            b.percentVisible = 0 == c || 0 == e || f ? 0 : 100 * c / e
                        }
                    }
                }(l));
                return l.unlisten ? true : false
            }
            ;
            b.ag.c = function(b) {
                if (b.amp && b.amp.unlisten && "function" == typeof b.amp.unlisten) {
                    try {
                        b.amp.unlisten()
                    } catch (f) {}
                    b.amp.started =
                    false
                }
            }
        })(q);
        (function(b) {
            function l(b) {
                if (b instanceof Array || "[object Array]" === {}.toString.call(b))
                    for (var c = 0, d = b.length; c < d; c++)
                        "MOAT_API_REQUEST_EVENT" !== b[c] && f(b[c]);
                else
                    f(b)
            }
            function f(d) {
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
                    if ("number" === typeof d.adVolume && !isNaN(d.adVolume))
                        e.adVolume = d.adVolume;
                    else if ("string" === typeof d.adVolume) {
                        var f = parseFloat(d.adVolume,
                        10);
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
                    return this.set(b, t.min(this.get(b), c))
                }
                ;
                this.max = function(b, c) {
                    return this.set(b, t.max(this.get(b), c))
                }
                ;
                this.get = function(b, c) {
                    return "undefined" === typeof this.metrics[b] ?
                    this.set(b, "undefined" !== typeof c ? c : 0) : this.metrics[b]
                }
            }
            function e(e) {
                this.ad = e;
                this.cbs = e.ao && e.ao.cbs;
                this.state = 1;
                this.volume = -1;
                this.audibleMeasurable = false;
                this.cbPrefix = "liverailjsvp58397284";
                this.notifyCB = "liverailjsvp58397284_notifyMoatVideo";
                this.canMeasurePageLoad = b.d.a && "undefined" !== typeof window.performance;
                this.receivedAdImpEvent = this.videoIsFullscreen = false;
                this.quartileDeltas = {};
                this.adRemainingTimeDuration = void 0;
                this.counters = {};
                this.getCounter = function(b) {
                    var c;
                    this.counters[b] ? c = this.counters[b] :
                    (c = new h(b),
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
                    return c.max("groupmMaxContinuousFullVisAudibleTime",
                    c.get("groupmContinuousFullyVisAudibleTime"))
                }
                ;
                this.tagLoadDelay = b.d.o - this.ad.ao.startTime;
                this.quartiles = {};
                var f = this.durationSent = false;
                this.durationMeasurable = false;
                var l = void 0
                  , q = 0
                  , g = false;
                this.onInViewTimeCount = function(b, c, d, e) {
                    d = 0;
                    e = this.getCounter(e);
                    this.isPlayingAndAudible() && e.set("everAudible", true);
                    0 < c && e.set("everVisible", true);
                    if (this.isPlayingAndAudible() && e.get("audibleOnLastCheck", false))
                        d = t.max(b, 0);
                    else if (this.isPlayingAndAudible() || e.get("audibleOnLastCheck", false))
                        d = t.max(t.round(b / 2), 0);
                    e.set("audibleOnLastCheck",
                    this.isPlayingAndAudible());
                    e.increment("continuousAudibleTime", d);
                    e.get("audibleOnLastCheck", false) ? 0 < c && e.set("everAudibleAndVisible", true) : (e.max("maxContinuousAudibleTime", e.get("continuousAudibleTime")),
                    e.set("continuousAudibleTime", 0));
                    this.ad.ao.duration && 0 < this.ad.ao.duration ? e.increment("audibleTime", d, this.ad.ao.duration) : e.increment("audibleTime", d);
                    this.performPoalCheck()
                }
                ;
                this.performPoalCheck = function() {
                    var c = b.o.i(this.ad.zr);
                    this.poalEnabled && this.disablePoalOnVis && c && c.hadVideo2SecOTS() &&
                    (this.poalEnabled = false,
                    1 == this.state && this.pausedByMoat && (this.pausedByMoat = false,
                    this.triggerPlayerCallback(e.aa, this.cbs.resumeAd)));
                    this.poalEnabled && (!c.visible() && 0 == this.state && this.cbs ? (this.pausedByMoat = true,
                    this.triggerPlayerCallback(e.aa, this.cbs.pauseAd)) : c.visible() && 1 == this.state && this.pausedByMoat && this.cbs && (this.pausedByMoat = false,
                    this.triggerPlayerCallback(e.aa, this.cbs.resumeAd)))
                }
                ;
                this.onFullyInViewTimeCount = function(b, c, d, e) {
                    var f = 0;
                    e = this.getCounter(e);
                    if (this.isPlayingAndAudible() && e.get("audibleFullyVisOnLastCheck",
                    false))
                        f = b;
                    else if (this.isPlayingAndAudible() || e.get("audibleFullyVisOnLastCheck", false))
                        f = t.round(b / 2);
                    e.set("audibleFullyVisOnLastCheck", this.isPlayingAndAudible());
                    f = t.max(t.min(f, c), 0);
                    e.increment("continuousFullyVisAudibleTime", f);
                    e.get("audibleFullyVisOnLastCheck", false) && d || (e.max("maxContinuousFullVisAudibleTime", e.get("continuousFullyVisAudibleTime")),
                    e.set("continuousFullyVisAudibleTime", 0));
                    this.ad.ao.duration && 0 < this.ad.ao.duration ? e.increment("audibleFullyVisIvt", f, this.ad.ao.duration) : e.increment("audibleFullyVisIvt",
                    f)
                }
                ;
                this.onGroupMInViewTimeCount = function(b, c, d, e) {
                    var f = 0;
                    e = this.getCounter(e);
                    if (this.isPlayingAndAudible() && e.get("groupmAudibleFullyVisOnLastCheck", false))
                        f = b;
                    else if (this.isPlayingAndAudible() || e.get("groupmAudibleFullyVisOnLastCheck", false))
                        f = t.round(b / 2);
                    e.set("groupmAudibleFullyVisOnLastCheck", this.isPlayingAndAudible());
                    f = t.max(t.min(f, c), 0);
                    e.increment("groupmContinuousFullyVisAudibleTime", f);
                    e.get("groupmAudibleFullyVisOnLastCheck", false) && d || (e.max("groupmMaxContinuousFullVisAudibleTime", e.get("groupmContinuousFullyVisAudibleTime")),
                    e.set("groupmContinuousFullyVisAudibleTime", 0));
                    this.ad.ao.duration && 0 < this.ad.ao.duration ? e.increment("groupmAudibleFullyVisIvt", f, this.ad.ao.duration) : e.increment("groupmAudibleFullyVisIvt", f)
                }
                ;
                this.isLargeVideoPlayer = function(c) {
                    return c ? "number" === typeof c.currentWidth && "number" === typeof c.currentHeight ? (c = c.currentWidth * c.currentHeight,
                    c >= b.n.b) : false : false
                }
                ;
                this.isAudibleVolume = function(b) {
                    return .1 <= b || 0 > b
                }
                ;
                this.onLoop = function() {
                    var c = b.o.i(this.ad.zr);
                    c && (!this.hadVideoOTS && 5E3 <= c.getInViewTime() &&
                    (this.hadVideoOTS = true,
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
                        return false;
                    if ("AdVolumeChange" === c.event || "AdStarted" === c.event || "AdImpression" === c.event || -1 != b.a.indexOf(d, c.event)) {
                        var e = c.soundTransform && c.soundTransform.volume;
                        c = c.adVolume;
                        var f = NaN;
                        "number" == typeof e && !isNaN(e) && 0 <= e ? f = "number" != typeof c || isNaN(c) || 0 > c ? e : e * c : "number" != typeof c && isNaN(c) || (f = c);
                        isNaN(f) || (this.volume = f);
                        this.audibleMeasurable = 0 <= this.volume
                    }
                }
                ;
                this.findVideoTags = function(c) {
                    var d = [];
                    c && "IFRAME" == c.nodeName ? (c = b.e.b(c)) && (d = c.body.getElementsByTagName("video")) : d = e.aa.getElementsByTagName("video");
                    return d
                }
                ;
                this.findValidTagDuration = function(c) {
                    var d;
                    b.a.forEach(c, function(b) {
                        if (b && !b.paused && "number" == typeof b.duration && 0 < b.duration)
                            return d = t.floor(1E3 * b.duration),
                            false
                    });
                    return d
                }
                ;
                this.onJsVideoStart = function(c) {
                    this.ad.localVideoTags = this.findVideoTags(this.ad.aa);
                    0 == this.ad.localVideoTags.length ? this.ad.allVideoTags = e.aa.ownerDocument &&
                    e.aa.ownerDocument.getElementsByTagName("video") : (this.videoTagDuration = this.findValidTagDuration(this.ad.localVideoTags),
                    this.ad.allVideoTags = this.ad.localVideoTags);
                    var d = this;
                    b.a.forEach(this.ad.allVideoTags, function(c) {
                        b.g.e(c, "webkitbeginfullscreen", d.onWebkitBeginFullScreen);
                        b.g.e(c, "webkitendfullscreen", d.onWebkitEndFullScreen)
                    });
                    b.g.e(document, "fullscreenchange", this.onFullScreenChangedEvent);
                    b.g.e(document, "webkitfullscreenchange", this.onFullScreenChangedEvent);
                    b.g.e(document, "mozfullscreenchange",
                    this.onFullScreenChangedEvent);
                    b.g.e(document, "MSFullscreenChange", this.onFullScreenChangedEvent);
                    this.onFullScreenChangedEvent()
                }
                ;
                this.onWebkitBeginFullScreen = function() {
                    this.videoIsFullscreen = true
                }
                ;
                this.onWebkitEndFullScreen = function() {
                    this.videoIsFullscreen = false
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
                            this.videoIsFullscreen = true
                    } else
                        this.videoIsFullscreen && (this.videoIsFullscreen = false)
                }
                ;
                this.calculateDuration = function(b, c) {
                    var d = "number" === typeof c && !isNaN(c) && 0 < c, e = 4 * b, f;
                    if (d) {
                        var d = !(e < 105 * c / 100 && e > 95 * c / 100)
                          , g = 4E3 < t.abs(e - c);
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
                            false
                    });
                    return c
                }
                ;
                this.triggerPlayerCallback = function(c, d) {
                    var e =
                    void 0
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
                    return !this.durationMeasurable && "number" == typeof this.ad.ao.duration && 0 < this.ad.ao.duration
                }
                ;
                this.update = function(c) {
                    c && "string" == typeof c.event && (c.event = this.normalizeEventName(c.event));
                    this.receivedAdImpEvent || "AdImpression" != c.event || (this.receivedAdImpEvent = true);
                    c && c.cbs && (this.cbs = c.cbs,
                    c.adIds && c.adIds.flashVars && c.adIds.flashVars.zpoal &&
                    (this.poalEnabled = "1" == c.adIds.flashVars.zpoal || "2" == c.adIds.flashVars.zpoal,
                    this.disablePoalOnVis = "2" == c.adIds.flashVars.zpoal));
                    if ("fullScreen" === c.event || "EnterFullscreen" === c.event)
                        this.videoIsFullscreen = true;
                    if ("exitFullscreen" === c.event || "ExitFullscreen" === c.event)
                        this.videoIsFullscreen = false;
                    var d;
                    d = "AdStarted" === c.event || "AdLoaded" === c.event || "AdRemainingTimeChange" === c.event || "AdVideoStart" === c.event || "AdImpression" === c.event;
                    "number" != typeof this.adRemainingTimeDuration && d && "number" === typeof c.adRemainingTime &&
                    0 < c.adRemainingTime && (this.adRemainingTimeDuration = 2700 <= c.adRemainingTime ? t.floor(c.adRemainingTime) : 1E3 * t.floor(c.adRemainingTime));
                    "AdImpression" === c.event && (g = true);
                    !this.started && -1 < b.a.indexOf(["AdPlaying", "AdImpression", "AdStarted"], c.event) && (c.event = "AdVideoStart");
                    "AdVideoStart" !== c.event && "AdStarted" !== c.event && "AdImpression" !== c.event || e.counters.quartileDelta.reset();
                    this.checkVolume(c);
                    if (!(this.started || "AdVideoStart" !== c.event && "AdImpression" !== c.event || this.started)) {
                        this.started = true;
                        this.timeAtStartEvent = (new y).getTime();
                        if (b.w.j && false === b.w.j.a)
                            this.onJsVideoStart(c);
                        f = true;
                        this.state = 0;
                        b.j.b.addEventCallback("viewCounterStarted", function(c) {
                            var d = b.o.i(c.zr);
                            d && d.addListener(c.video)
                        });
                        b.b.c(this.ad);
                        this.trackVideoIframeChildren(this.ad, this.ad.aa);
                        b.y.t()
                    }
                    this.started && !this.reachedStart && (this.videoIsFullscreen && (this.ad.ao.initWidth = b.d.ai || 400,
                    this.ad.ao.initHeight = b.d.aj || 400),
                    this.reachedStart = true);
                    if ("AdVideoComplete" === c.event || "AdPaused" === c.event)
                        this.state = 1;
                    else if ("AdVideoStart" ===
                    c.event || "AdPlaying" === c.event || "AdImpression" === c.event)
                        this.state = 0;
                    !this.ad.videoAdStartTime && this.timeAtStartEvent && (this.ad.videoAdStartTime = this.timeAtStartEvent);
                    if ("AdStarted" === c.event || "AdVideoStart" === c.event)
                        if (this.hadFirstUpdate || (this.startEventDelay = (new y).getTime() - c.timestamp),
                        this.canMeasurePageLoad)
                            try {
                                this.tSincePageLoad = (new y).getTime() - window.top.performance.timing.navigationStart
                            } catch (h) {}
                    if (this.started && n.hasOwnProperty(c.event)) {
                        this.quartileDeltas[c.event] = this.ad.counters.quartileDelta.tCur;
                        this.ad.counters.quartileDelta.reset();
                        if ("AdVideoFirstQuartile" === c.event && !this.durationMeasurable) {
                            this.firstQuartileDuration = this.calculateDuration(this.quartileDeltas.AdVideoFirstQuartile, this.ad.ao.duration);
                            if (b.w.j && false === b.w.j.a && (this.videoTagDuration || (d = this.findVideoTags(this.ad.aa),
                            this.videoTagDuration = this.findValidTagDuration(d)),
                            !this.durationMeasurable && this.videoTagDuration && 0 < this.videoTagDuration)) {
                                var l = (d = this.calculateDuration(.25 * this.videoTagDuration, this.ad.ao.duration)) &&
                                0 < d && (33E3 < d && d <= this.firstQuartileDuration || 33E3 >= d);
                                d == this.videoTagDuration && l && (this.ad.ao.duration = d,
                                this.durationMeasurable = f = true)
                            }
                            this.isValidAndUnmesDuration() && this.firstQuartileDuration === this.ad.ao.duration && 0 < this.firstQuartileDuration && (this.ad.ao.duration = this.firstQuartileDuration,
                            this.durationMeasurable = f = true);
                            this.isValidAndUnmesDuration() && "number" == typeof this.adRemainingTimeDuration && (d = this.calculateDuration(.25 * this.adRemainingTimeDuration, this.ad.ao.duration)) && 0 < d && d == this.ad.ao.duration &&
                            (this.ad.ao.duration = t.floor(d),
                            this.durationMeasurable = f = true)
                        }
                        "AdVideoMidpoint" === c.event && !this.durationMeasurable && (this.midpointDuration = this.calculateDuration(this.quartileDeltas.AdVideoMidpoint, this.ad.ao.duration),
                        0 < this.midpointDuration || 0 < this.firstQuartileDuration) && (d = 15E3 < this.firstQuartileDuration && 15E3 < this.midpointDuration ? t.min(this.firstQuartileDuration, this.midpointDuration) : 15E3 >= this.firstQuartileDuration || 15E3 >= this.midpointDuration ? t.max(this.firstQuartileDuration, this.midpointDuration) :
                        0 < this.midpointDuration ? this.midpointDuration : this.firstQuartileDuration,
                        this.ad.ao.duration = d,
                        this.durationMeasurable = f = true);
                        this.state = 0;
                        var q = b.o.n(this.ad.zr);
                        d = false;
                        l = true;
                        q.strict ? d = q.strict.visible() : q.pscope ? b.i && b.i.a || b.h && b.h.a() ? d = q.pscope.visible() : l = false : l = false;
                        q = this.isAudibleVolume(this.volume);
                        d = l ? d && q ? 3 : d ? 1 : q ? 2 : 0 : 4;
                        l = n[c.event];
                        "undefined" === typeof this.quartiles[l] && (this.quartiles[l] = d,
                        l = {
                            e: 29
                        },
                        l.q = e.aq[29]++,
                        b.s.a(e, l));
                        c.calculatedQuartileState = d
                    }
                    this.started && b.w.dispatchEvent(this,
                    c);
                    this.started && "AdVideoComplete" === c.event && (this.reachedComplete = true,
                    b.y.t());
                    this.hadFirstUpdate || (hadFirstUpdate = true);
                    !this.durationSent && f && this.durationMeasurable && (this.durationSent = true,
                    l = {
                        e: 9
                    },
                    l.q = e.aq[9]++,
                    b.s.a(this.ad, l));
                    if (this.started && !this.stopped && ("AdStopped" === c.event || "AdVideoComplete" === c.event || "AdSkipped" === c.event)) {
                        this.stopped = "AdSkipped" !== c.event;
                        l = {};
                        c = this.stopped ? 28 : 33;
                        l.e = c;
                        l.q = e.aq[c]++;
                        b.s.a(this.ad, l);
                        try {
                            G.parentNode.removeChild(G)
                        } catch (h) {}
                        b.p.e(this.ad);
                        ea()
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
                    return this.isPlaying() && this.isAudible()
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
                          , f = d && d.getInViewTime &&
                        d.getInViewTime()
                          , g = 98 * this.ad.ao.duration / 100;
                        if (d = d && this.getCounter(d.getLabel()))
                            d.get("groupmAudibleFullyVisIvt") >= .5 * g && c.push("hd"),
                            d.get("groupmAudibleFullyVisIvt") >= t.min(.5 * g, 15E3) && c.push("hl"),
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
                    var d = (c = b.o.i(this.ad.zr)) &&
                    this.getCounter(c.getLabel());
                    this.receivedAdImpEvent && (data.fc = "1");
                    for (var e = this.getGroupMQs(), f = 0; f < e.length; f++)
                        data[e[f]] = 1;
                    this.durationMeasurable ? (data.dh = this.ad.ao.duration,
                    data.hc = 1) : (e = this.firstQuartileDuration || this.midpointDuration,
                    21 == data.e && 0 < e ? (data.dh = e,
                    data.hc = 1) : data.hc = 0);
                    d && (data.er = d.get("audibleTime"),
                    data.es = d.get("audibleTimePrev"),
                    d.set("audibleTimePrev", d.get("audibleTime")),
                    data.eu = d.get("audibleFullyVisIvt"),
                    data.ev = d.get("audibleFullyVisIvtPrev"),
                    d.set("audibleFullyVisIvtPrev",
                    d.get("audibleFullyVisIvt")));
                    this.audibleMeasurable && (data.et = 1);
                    data.dp = this.tagLoadDelay;
                    this.started && (data.dz = 1);
                    this.stopped && (data.ea = 1);
                    b.a.bh(data, "du", this.startEventDelay);
                    this.canMeasurePageLoad && (data.eb = 1);
                    b.a.bh(data, "ec", this.tSincePageLoad);
                    "undefined" != typeof this.ad.ao.gc && "undefined" != typeof this.ad.ao.gd && "undefined" != typeof this.ad.ao.gr && "undefined" != typeof this.ad.ao.gy && (data.gc = this.ad.ao.gc,
                    data.gd = this.ad.ao.gd,
                    data.gr = this.ad.ao.gr,
                    data.gy = this.ad.ao.gy);
                    this.ad.ao.moatLoaderHash &&
                    this.ad.ao.moatSwfHash && (data.ed = this.ad.ao.moatLoaderHash,
                    data.ee = this.ad.ao.moatSwfHash);
                    true === this.hadVideoOTS && (data.ek = 1);
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
                    var b =
                    this.ad.aa, d, e;
                    this.cbs ? (d = this.cbs.shiftVideoEvent,
                    e = this.cbs.getQueueLength) : (d = this.cbPrefix + "_shiftVideoEvent",
                    e = this.cbPrefix + "_getQueueLength");
                    var f = 0, g;
                    try {
                        g = b[e] && b[e]()
                    } catch (h) {
                        return
                    }
                    for (; 0 < g && 50 > f; ) {
                        var m;
                        try {
                            m = b[d] && b[d]()
                        } catch (h) {
                            break
                        }
                        m && c(m);
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
                b.j.b.addEventCallback("adKilled", this.remove, {
                    once: true,
                    condition: function(b) {
                        return e.zr == b.zr
                    }
                })
            }
            function c(b) {
                for (var c in B)
                    if (B.hasOwnProperty(c)) {
                        var d =
                        B[c];
                        b && b.adIds && d.ao.startTime === b.adIds.startTime && d.video.update(b)
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
            var d = ["AdVideoStart", "AdVideoFirstQuartile", "AdVideoMidpoint", "AdVideoThirdQuartile",
            "AdVideoComplete"];
            b.w.b = 2E3;
            mrcInterval = 2000;
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
                              ,
                            h = B[b.w.j.adNum];
                            f && f.getAdId && (c.currentAd = f,
                            b.w.j = h.ao = b.w.l(c, true),
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
                return false
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
                    e = c.ao.cbs ? c.ao.cbs.registerCallback :
                    c.video.cbPrefix + "_registerCallback";
                    try {
                        if (d[e])
                            d[e](c.video.notifyCB)
                    } catch (f) {}
                    c.video.notify()
                }
            }
            ;
            b.w.f = function(b, c) {
                b.video = new e(b)
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
                return b &&
                b.ao ? "slave" == b.ao.moatClientAT ? true : false : false
            }
            ;
            b.v.h = function(b) {
                return b && b.ao ? "cpc" == b.ao.moatClientBT ? true : false : false
            }
            ;
            b.v.i = function(b) {
                return b && b.ao ? "cpcv" == b.ao.moatClientBT ? true : false : false
            }
            ;
            b.v.j = function(b) {
                return b && b.ao ? "flatrate" == b.ao.moatClientBT ? true : false : false
            }
            ;
            b.v.k = function(b) {
                return b && b.ao ? "skin" == b.ao.moatClientAT || "hpto" == b.ao.moatClientAT ? true : false : false
            }
            ;
            b.v.b = function(l) {
                if (!l || !l.aa)
                    return false;
                if ("undefined" != typeof l.er)
                    return l.er;
                l.video ? !b.v.e(l) || b.v.i(l) && !l.video.reachedComplete || (l.er = true) : b.v.g(l) ||
                b.v.h(l) || b.v.j(l) ? l.er = false : b.v.k(l) || b.v.f(l) ? l.er = true : b.v.e(l) && b.o.t(l, b.v.d, true) && (l.er = true);
                return l.er || false
            }
            ;
            b.v.a = function(l) {
                if (!l || l.SENT_FIT && l.et || !b.v.e(l))
                    return false;
                var f, h, e = b.o.r(l.zr);
                l.SENT_FIT || (f = b.o.k(l, e, "hadFIT"));
                l.et || (h = b.o.k(l, e, "hadFullOTS"));
                if (f || h)
                    b.p.l(l),
                    l.SENT_FIT = l.SENT_FIT || !!f,
                    l.et = l.et || !!h;
                return f || h
            }
        })(q);
        (function(b) {
            b.ah = {};
            b.ah.a = "1.2";
            b.ah.prefix = "MSFAPI";
            b.ah.b = {};
            b.ah.c = {};
            b.ah.d = t.floor(t.random() * t.pow(10, 12));
            b.ah.e = false;
            b.ah.f = /([a-z]+)#([a-z0-9.-]+)#([0-9]+)#([a-z]+)#([0-9]+)#(.+)/i;
            b.ah.g = /@([a-z0-9]+)@@(.*)/i;
            b.ah.h = function(l) {
                if (l && (l["Moat#PML#" + b.ah.a] ? b.ah.i = l["Moat#PML#" + b.ah.a].id : (l["Moat#PML#" + b.ah.a] = {
                    id: t.floor(t.random() * t.pow(10, 12))
                },
                b.ah.i = l["Moat#PML#" + b.ah.a].id,
                w.dcsx.ynds(l, "message", "message-" + b.ah.i, "ME-" + b.ah.a)),
                !b.ah.e)) {
                    b.ah.e = true;
                    var f = w.swde.addEventCallback("message-" + b.ah.i, b.ah.j);
                    b.j.b.addEventCallback("allLocalAdsKilled", function() {
                        w.swde.sxaz("message-" + b.ah.i, {
                            id: f
                        })
                    }, {
                        once: true
                    })
                }
            }
            ;
            b.ah.k = function(l) {
                l && l && l["Moat#PML#" + b.ah.a] && (l["Moat#PML#" + b.ah.a] = false,
                b.g.f(l, "message",
                b.ah.j))
            }
            ;
            b.ah.l = function(l) {
                return b.ah.prefix + "#" + l + "#"
            }
            ;
            b.ah.m = function(l) {
                var f = l.match(b.ah.f);
                l = false;
                f && 7 == f.length && (l = {
                    prefix: f[1],
                    version: f[2],
                    uid: f[3],
                    type: f[4],
                    request: f[5],
                    data: f[6]
                },
                (f = l.data.match(b.ah.g)) && 3 == f.length && (l.cmd = f[1],
                l.arg = f[2]));
                return l
            }
            ;
            b.ah.j = function(l) {
                if (!(l && l.origin && l.data && "string" === typeof l.data))
                    return false;
                if ((msgData = b.ah.m(l.data)) && (!msgData || msgData.uid != b.ah.d.toString()) && msgData.version == b.ah.a && (l.msgData = msgData,
                msgData.request in b.ah.c && (l.triggerCallback =
                function() {
                    b.ah.c[msgData.request] && (b.ah.c[msgData.request](l),
                    b.ah.c[msgData.request] = null ,
                    delete b.ah.c[msgData.request])
                }
                ),
                b.ah.b[msgData.type]))
                    for (var f = 0, h = b.ah.b[msgData.type].length; f < h; f++)
                        b.ah.b[msgData.type][f](l)
            }
            ;
            b.ah.n = function(l, f) {
                b.ah.b[l] = [f]
            }
            ;
            b.ah.o = function(l, f, h, e) {
                "object" == typeof f && (f = b.a.as(f));
                e = e || t.floor(1E10 * t.random());
                "function" == typeof h && (b.ah.c[e] = h);
                l = b.ah.l(b.ah.a) + b.ah.d + "#" + l + "#" + e + "#" + f;
                return {
                    request: e,
                    msg: l
                }
            }
            ;
            b.ah.p = function(l, f, h, e, c) {
                "object" == typeof h &&
                (h = b.a.as(h));
                return b.ah.o(l, "@" + f + "@@" + h, e, c)
            }
            ;
            b.ah.q = function(l, f, h) {
                try {
                    if (!l || !l || !l.source)
                        return false;
                    l.source.postMessage(b.ah.o(l.msgData.type, f, h, l.msgData.request).msg, "*")
                } catch (e) {
                    return false
                }
                return true
            }
            ;
            b.ah.r = function(l, f, h) {
                try {
                    var e = b.e.h(f || window.top);
                    if (!e)
                        return b.g.h(function() {
                            b.ah.r(l, f, h)
                        }, 200);
                    for (var c = 0; c < e.length; c++)
                        h && e[c] == window || e[c].postMessage(l, "*")
                } catch (n) {}
            }
            ;
            b.j.b.addEventCallback("modulesReady", b.a.cb([window], b.ah.h), {
                once: true
            })
        })(q);
        (function(b) {
            b.ab = {};
            b.ab.b = {};
            b.ab.b.a = "CF";
            b.ab.b.b = "CNF";
            b.ab.b.c = "CNS";
            b.ab.a = {};
            b.ab.a.c = false;
            b.ab.a.d = [];
            b.ab.c = {};
            b.ab.d = {};
            var l = false;
            b.ab.a.a = function() {
                var f = b.ab.e();
                b.ab.a.c || b.d.a || (f = b.ah.p("moatframe", "check", f, function(f) {
                    (f = b.a.at(f.msgData.data)) && f.available && !b.ab.a.c && (b.d.x = true,
                    b.ab.a.c = true,
                    f = "MoatFrame#geom#" + (new y).getTime(),
                    b.g.b(b.ab.a.e, null , 200, f),
                    b.ab.a.d.push(f))
                }),
                b.ah.r(f.msg, false, true))
            }
            ;
            b.ab.f = function() {
                b.ah.n("moatframe", b.ab.g);
                b.ah.r(b.ah.o("moatframe", "ping").msg, false, true)
            }
            ;
            b.ab.h = function(f) {
                return "undefined" !== typeof f &&
                b.ab.d && b.ab.d[f] ? (b.ab.d[f] = null ,
                true) : false
            }
            ;
            b.ab.e = function() {
                var f = b.d.al
                  , h = b.d.am;
                return f && h ? {
                    width: f,
                    height: h
                } : false
            }
            ;
            b.ab.i = function() {
                return b.d.a
            }
            ;
            b.ab.j = function(f) {
                var h = false;
                b.a.forEach(b.ab.b, function(b) {
                    if (b == f)
                        return h = true,
                        false
                });
                return h
            }
            ;
            b.ab.g = function(f) {
                var h = f.msgData.cmd || f.msgData.data;
                if (h)
                    if (f.triggerCallback)
                        f.triggerCallback(f);
                    else if (b.ab.c[h])
                        b.ab.c[h](f);
                    else
                        b.ab.j(h) || b.ah.q(f, b.ab.b.b)
            }
            ;
            b.ab.k = function(f, h) {
                if (!f || !h)
                    return false;
                for (var e = b.e.f(window).pop(), c = b.e.j(f, 10), l = false,
                d = false, q = null , m = null , r, w = c.length - 1; 0 <= w; w--)
                    if (c[w] == e && (l = true),
                    l && !b.e.i(c[w])) {
                        m = c[w];
                        break
                    }
                l && m && ((q = m && m.parent && m.parent.document) && (r = b.e.c(q, m)),
                r && (e = r.offsetWidth,
                c = r.offsetHeight,
                e == h.width && c == h.height ? d = true : (e *= c,
                c = h.width * h.height,
                d = .98 <= t.min(e, c) / t.max(e, c))));
                return {
                    isNested: d,
                    iframe: r,
                    iframeParentDoc: q
                }
            }
            ;
            b.ab.l = function(f) {
                return f && f.parent && b.e.c(f.parent.document, f)
            }
            ;
            b.ab.m = function(f) {
                (f = "undefined" !== typeof f && b.ab.d && b.ab.d[f]) && "boolean" == typeof f.isWithinReach && (f.isNested &&
                !f.iframeParentDoc && (f.isWithinReach = false),
                f.isNested || f.win && !b.e.isOldWindow(f.win) || (f.isWithinReach = false));
                return f
            }
            ;
            b.ab.n = function(f, h, e, c) {
                var l, d, q = {
                    isNested: false,
                    iframe: null ,
                    iframeParentDoc: null
                };
                if ((l = b.ab.m(e)) && l.isWithinReach)
                    return true;
                d = b.e.l(f, h, true);
                l && "undefined" == typeof l.isWithinReach ? l.isWithinReach = d : (d ? h = b.ab.l(h) : (q = b.ab.k(h, c),
                (h = q.iframe) && (d = true)),
                l = {
                    dimensions: c,
                    iframe: h,
                    iframeParentDoc: q.iframeParentDoc,
                    isNested: q.isNested,
                    isWithinReach: d,
                    win: f
                },
                b.ab.d[e] = l);
                return l.isWithinReach
            }
            ;
            b.ab.a.e =
            function() {
                if (!l) {
                    l = true;
                    var f = b.ah.o("moatframe", "geom", function(f) {
                        l = false;
                        b.ab.j(f.msgData.data) || (b.ab.a.b = b.a.at(f.msgData.data))
                    });
                    b.ah.r(f.msg, false, true)
                }
            }
            ;
            b.ab.c.ping = function(f) {
                !b.d.a && b.d.ar() && b.ab.a.a()
            }
            ;
            b.ab.c.check = function(f) {
                var h = {}
                  , e = f.msgData.arg && b.a.at(f.msgData.arg);
                b.ab.n(window, f.source, f.msgData.uid, e) && b.ab.i() ? h.available = true : h.available = false;
                b.ah.q(f, h)
            }
            ;
            b.ab.c.geom = function(f) {
                if (b.ab.n(window, f.source, f.msgData.uid) && b.ab.i()) {
                    var h = b.ab.d && b.ab.d[f.msgData.uid] && b.ab.d[f.msgData.uid].iframe;
                    if (h && (h = b.n.o(h)) && h.visibleRect && h.rect) {
                        b.ah.q(f, {
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
                    b.ah.q(f, b.ab.b.a)
                } else
                    b.ah.q(f, b.ab.b.c)
            }
        })(q);
        q.j.b.zaxs("modulesReady", w);
        var Ja = q.focus.pageIsVisible()
          , D = "moatFoundLIVERAILJSVPAID1"
          , N = "__moat__LIVERAILJSVPAID1";
        q.a.ae().isInApp || q.ab.f();
        var G = q.a.aw();
        q.d.protocol =
        q.a.bb(G);
        q.d.ab && (q.d.ab = q.d.ab.replace(/^js/i, "z"));
        "string" === typeof q.d.protocol && (O = ("https:" === q.d.protocol ? q.d.protocol : "http:") + "//video.moatads.com");
        O || (O = "//video.moatads.com");
        q.ae.a(P);
        var Da = q.a.aw(), Ea = false, M;
        q.g.a(function() {
            if (Ea || Da && Da.parentNode && "HEAD" !== Da.parentNode.nodeName)
                return q.a.bd("afs.moatads.com"),
                true;
            if (document.body && !Ea)
                return M = M || document.createElement("div"),
                M.style.position = "absolute",
                M.style.overflow = "hidden",
                document.body.insertBefore(M, document.body.childNodes[0] ||
                null ),
                Ea = true,
                document.body.removeChild && document.body.removeChild(M),
                q.a.bd("afs.moatads.com"),
                true
        }, 500, 15);
        var Ha = function() {
            w.zs && w.dcsx && (w.dcsx.engn({
                listenerName: "unloadFn" + q.d.l.a
            }),
            w.dcsx.engn({
                listenerName: "beforeunloadFn" + q.d.l.a
            }));
            X || (X = true,
            q.b.a())
        }
        , Aa;
        Aa = qa ? P.location.href : P.document.referrer;
        q.a.r(Aa) || q.a.r(window.location.href);
        if (!G)
            return false;
        q.m = G;
        q.a.bc(G);
        (function(b) {
            function l(b) {
                return b = 1E3 > parseFloat(b, 10) ? 1E3 * parseFloat(b, 10) : parseFloat(b, 10)
            }
            function f(b) {
                return b.imaSDK ? h(b) :
                e(b)
            }
            function h(b, c) {
                var d = {}, e = b.adsManager && b.adsManager.getCurrentAd && b.adsManager.getCurrentAd() || false, f, g, h;
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
            function e(b) {
                var c = b && b.adData && b.adData.ids, d = {}, e = l(b.adData.duration), f = /^level([0-9]+)$/, g = /^slicer([0-9]+)$/, h, n;
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
                (e = document && document.getElementById("mianahwvc")) &&
                b.w === e.offsetWidth && b.h === e.offsetHeight && (d.fullScreen = true),
                e && (10 >= e.offsetWidth || 10 >= e.offsetHeight) && (e.style.height = "176px",
                e.style.width = "320px"));
                q.f.b(d);
                (d = q.f.f(d)) && "16708" === d.zMoatLROwnerId && (d.zMoatLRPubVert = d && d.zMoatLRPubID && d.zMoatLRVertical ? d.zMoatLRPubID + "_" + d.zMoatLRVertical : "Value Not Defined");
                q.a.forEach("zMoatLROwnerId zMoatLRMuted zMoatLRAutoPlay zMoatLRDuration zMoatLRContent zMoatLRPartners zMoatLRVideoId zMoatLRVertical zMoatLRDomain zMoatLRWidth zMoatLRHeight zMoatLRPubID zMoatLRPubVert".split(" "),
                function(b) {
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
                        return false;
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
                        } catch (g) {}
                    if (f)
                        f.isUsingVideoJsApi = false,
                        f.isFlashVideo = true;
                    else
                        return false
                } else if (f = b.adData.ids,
                d = b.adData.ids.moateltotrack,
                f.cbs = {
                    pauseAd: f.cbPrefix + "_pauseAd",
                    resumeAd: f.cbPrefix + "_resumeAd"
                },
                f.isUsingVideoJsApi = true,
                f.isFlashVideo = true,
                !d)
                    return false;
                q.f.b(f);
                q.f.g(f);
                f = q.f.h(f);
                q.f.m && q.f.m(f);
                q.w.j = f;
                q.z.ay(f);
                (f.usingWrapper || f.usingMoatWrapperSwf) && q.s.b(17, f);
                q.b.b(d, false, false, false, f);
                return true
            }
            da = w.h;
            w.h++;
            w.i[da] = false;
            q.p.j();
            q.d.l.b || (q.d.l.b = true,
            w.dcsx.ynds(window, "unload", "unload-" + q.d.l.a, "unloadFn" + q.d.l.a),
            w.dcsx.ynds(window, "beforeunload", "unload-" + q.d.l.a, "beforeunloadFn" + q.d.l.a));
            w.swde.addEventCallback("unload-" +
            q.d.l.a, Ha, {
                once: true
            });
            q.j.b.addEventCallback("allLocalAdsKilled", function() {
                w.swde.sxaz("unload-" + q.d.l.a, {
                    callback: Ha
                })
            }, {
                once: true
            });
            q.g.g(q.r.d, 100);
            q.a.k() && q.g.h(ea, 3E5);
            "undefined" === typeof b && (b = q.f.d(G));
            "undefined" === typeof b && (b = {});
            q.g.h(function() {
                false === w.i[da] && (q.s.b(11, b),
                ea())
            }, 1E4);
            q.w.l = h;
            q.w.n(function(b, c) {
                "AdVideoComplete" == c.event && 3 === c.calculatedQuartileState && (b.ad.reachedAvoc = true,
                q.y.t())
            });
            q.w.e = function(b) {
                if (G) {
                    var c = G.src.match(/#(_moatTracker\d+|_moatApi\d+)/);
                    if (c && c[1]) {
                        var d = b[c[1]];
                        if (d)
                            return b[c[1]] = false,
                            d
                    }
                }
            }(window);
            if (q.w.e)
                if (q.w.e.adData && q.w.e.adData.ids && q.w.e.adData.ids.usingMoatWrapperSwf)
                    c(q.w.e, false);
                else if (q.w.e.adData && q.w.e.adData.ids && q.w.e.adData.ids.usingMoatAnalyticsSwf)
                    c(q.w.e, false);
                else {
                    var n = f(q.w.e);
                    n.isUsingVideoJsApi = true;
                    n.isFlashVideo = false;
                    q.w.j = n;
                    q.w.e.imaSDK && q.w.k(q.w.e);
                    q.z.ay(n);
                    q.w && q.w.e && q.w.e.imaSDK ? q.w.j && q.w.j.moatClientLevel3 && q.s.b(17, n) : q.s.b(17, n);
                    var d = window.liverailjsvp58397284_moatElToTrack;
                    d ? (q.b.b(d, false, false, false, n),
                    window.liverailjsvp58397284_moatElToTrack =
                    void 0) : (d = q.w.m(G.parentNode)) ? q.b.b(d, false, false, false, n) : q.b.b(G.parentNode, false, false, false, n)
                }
            else if (b.moatCbs) {
                if (!c(b, true))
                    return false
            } else if (window.liverailjsvp58397284_moatElToTrack && !c(b, true))
                return false
        })();
        q.j.b.addEventCallback("allLocalAdsKilled", Ga, {
            once: true
        })
    })(Date, Math)
} catch (y) {
    var ct = (new Date).getTime();
    window["Moat#ETS"] || (window["Moat#ETS"] = ct);
    window["Moat#EMC"] || (window["Moat#EMC"] = 0);
    var et = ct - window["Moat#ETS"]
      , hourElapsed = 36E5 <= et
      , msg = y.name + " in closure (global): " + y.message + ", stack=" + y.stack;
    if (!hourElapsed &&
    10 > window["Moat#EMC"]) {
        window["Moat#EMC"]++;
        try {
            var pixelDomain = "video.moatads.com"
              , pxSrc = "//" + pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof AD_VIEW_HASH ? "LIVERAILJSVPAID1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("ce785ae-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime()
              , px = new Image(1,1);
            px.src = pxSrc
        } catch (t) {}
    } else if (hourElapsed) {
        window["Moat#EMC"] = 1;
        window["Moat#ETS"] = ct;
        try {
            pixelDomain = "video.moatads.com",
            pxSrc = "//" +
            pixelDomain + "/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=" + escape("undefined" === typeof AD_VIEW_HASH ? "LIVERAILJSVPAID1" : AD_VIEW_HASH) + "&ac=1&k=" + escape(msg) + "&ar=" + escape("ce785ae-clean") + "&j=" + escape(document.referrer) + "&cs=" + (new Date).getTime(),
            px = new Image(1,1),
            px.src = pxSrc
        } catch (t) {}
    }
}
;
