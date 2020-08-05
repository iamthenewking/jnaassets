(function(d) { "use strict"; var n = function(n, e, i, t) { var f = d.document; var o = f.createElement("link"); var r; if (e) { r = e } else { var a = (f.body || f.getElementsByTagName("head")[0]).childNodes;
            r = a[a.length - 1] } var u = f.styleSheets; if (t) { for (var l in t) { if (t.hasOwnProperty(l)) { o.setAttribute(l, t[l]) } } }
        o.rel = "stylesheet";
        o.href = n;
        o.media = "only x";

        function s(n) { if (f.body) { return n() }
            setTimeout(function() { s(n) }) }
        s(function() { r.parentNode.insertBefore(o, e ? r : r.nextSibling) }); var v = function(n) { var e = o.href; var i = u.length; while (i--) { if (u[i].href === e) { return n() } }
            setTimeout(function() { v(n) }) };

        function c() { if (o.addEventListener) { o.removeEventListener("load", c) }
            o.media = i || "all" } if (o.addEventListener) { o.addEventListener("load", c) }
        o.i = v;
        v(c); return o }; if (typeof exports !== "undefined") { exports.t = n } else { d.t = n } })(typeof global !== "undefined" ? global : this);