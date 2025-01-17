/* Modernizr  */

(window.Modernizr = (function (a, b, c) {
  function C(a) {
    j.cssText = a;
  }
  function D(a, b) {
    return C(n.join(a + ";") + (b || ""));
  }
  function E(a, b) {
    return typeof a === b;
  }
  function F(a, b) {
    return !!~("" + a).indexOf(b);
  }
  function G(a, b) {
    for (var d in a) {
      var e = a[d];
      if (!F(e, "-") && j[e] !== c) return b == "pfx" ? e : !0;
    }
    return !1;
  }
  function H(a, b, d) {
    for (var e in a) {
      var f = b[a[e]];
      if (f !== c)
        return d === !1 ? a[e] : E(f, "function") ? f.bind(d || b) : f;
    }
    return !1;
  }
  function I(a, b, c) {
    var d = a.charAt(0).toUpperCase() + a.slice(1),
      e = (a + " " + p.join(d + " ") + d).split(" ");
    return E(b, "string") || E(b, "undefined")
      ? G(e, b)
      : ((e = (a + " " + q.join(d + " ") + d).split(" ")), H(e, b, c));
  }
  function J() {
    (e.input = (function (c) {
      for (var d = 0, e = c.length; d < e; d++) u[c[d]] = c[d] in k;
      return (
        u.list &&
          (u.list = !!b.createElement("datalist") && !!a.HTMLDataListElement),
        u
      );
    })(
      "autocomplete autofocus list placeholder max min multiple pattern required step".split(
        " "
      )
    )),
      (e.inputtypes = (function (a) {
        for (var d = 0, e, f, h, i = a.length; d < i; d++)
          k.setAttribute("type", (f = a[d])),
            (e = k.type !== "text"),
            e &&
              ((k.value = l),
              (k.style.cssText = "position:absolute;visibility:hidden;"),
              /^range$/.test(f) && k.style.WebkitAppearance !== c
                ? (g.appendChild(k),
                  (h = b.defaultView),
                  (e =
                    h.getComputedStyle &&
                    h.getComputedStyle(k, null).WebkitAppearance !==
                      "textfield" &&
                    k.offsetHeight !== 0),
                  g.removeChild(k))
                : /^(search|tel)$/.test(f) ||
                  (/^(url|email)$/.test(f)
                    ? (e = k.checkValidity && k.checkValidity() === !1)
                    : (e = k.value != l))),
            (t[a[d]] = !!e);
        return t;
      })(
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        )
      ));
  }
  var d = "2.8.3",
    e = {},
    f = !0,
    g = b.documentElement,
    h = "modernizr",
    i = b.createElement(h),
    j = i.style,
    k = b.createElement("input"),
    l = ":)",
    m = {}.toString,
    n = " -webkit- -moz- -o- -ms- ".split(" "),
    o = "Webkit Moz O ms",
    p = o.split(" "),
    q = o.toLowerCase().split(" "),
    r = { svg: "http://www.w3.org/2000/svg" },
    s = {},
    t = {},
    u = {},
    v = [],
    w = v.slice,
    x,
    y = function (a, c, d, e) {
      var f,
        i,
        j,
        k,
        l = b.createElement("div"),
        m = b.body,
        n = m || b.createElement("body");
      if (parseInt(d, 10))
        while (d--)
          (j = b.createElement("div")),
            (j.id = e ? e[d] : h + (d + 1)),
            l.appendChild(j);
      return (
        (f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join("")),
        (l.id = h),
        ((m ? l : n).innerHTML += f),
        n.appendChild(l),
        m ||
          ((n.style.background = ""),
          (n.style.overflow = "hidden"),
          (k = g.style.overflow),
          (g.style.overflow = "hidden"),
          g.appendChild(n)),
        (i = c(l, a)),
        m
          ? l.parentNode.removeChild(l)
          : (n.parentNode.removeChild(n), (g.style.overflow = k)),
        !!i
      );
    },
    z = (function () {
      function d(d, e) {
        (e = e || b.createElement(a[d] || "div")), (d = "on" + d);
        var f = d in e;
        return (
          f ||
            (e.setAttribute || (e = b.createElement("div")),
            e.setAttribute &&
              e.removeAttribute &&
              (e.setAttribute(d, ""),
              (f = E(e[d], "function")),
              E(e[d], "undefined") || (e[d] = c),
              e.removeAttribute(d))),
          (e = null),
          f
        );
      }
      var a = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img",
      };
      return d;
    })(),
    A = {}.hasOwnProperty,
    B;
  !E(A, "undefined") && !E(A.call, "undefined")
    ? (B = function (a, b) {
        return A.call(a, b);
      })
    : (B = function (a, b) {
        return b in a && E(a.constructor.prototype[b], "undefined");
      }),
    Function.prototype.bind ||
      (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function") throw new TypeError();
        var d = w.call(arguments, 1),
          e = function () {
            if (this instanceof e) {
              var a = function () {};
              a.prototype = c.prototype;
              var f = new a(),
                g = c.apply(f, d.concat(w.call(arguments)));
              return Object(g) === g ? g : f;
            }
            return c.apply(b, d.concat(w.call(arguments)));
          };
        return e;
      }),
    (s.flexbox = function () {
      return I("flexWrap");
    }),
    (s.canvas = function () {
      var a = b.createElement("canvas");
      return !!a.getContext && !!a.getContext("2d");
    }),
    (s.canvastext = function () {
      return (
        !!e.canvas &&
        !!E(b.createElement("canvas").getContext("2d").fillText, "function")
      );
    }),
    (s.webgl = function () {
      return !!a.WebGLRenderingContext;
    }),
    (s.touch = function () {
      var c;
      return (
        "ontouchstart" in a || (a.DocumentTouch && b instanceof DocumentTouch)
          ? (c = !0)
          : y(
              [
                "@media (",
                n.join("touch-enabled),("),
                h,
                ")",
                "{#modernizr{top:9px;position:absolute}}",
              ].join(""),
              function (a) {
                c = a.offsetTop === 9;
              }
            ),
        c
      );
    }),
    (s.geolocation = function () {
      return "geolocation" in navigator;
    }),
    (s.postmessage = function () {
      return !!a.postMessage;
    }),
    (s.websqldatabase = function () {
      return !!a.openDatabase;
    }),
    (s.indexedDB = function () {
      return !!I("indexedDB", a);
    }),
    (s.hashchange = function () {
      return z("hashchange", a) && (b.documentMode === c || b.documentMode > 7);
    }),
    (s.history = function () {
      return !!a.history && !!history.pushState;
    }),
    (s.draganddrop = function () {
      var a = b.createElement("div");
      return "draggable" in a || ("ondragstart" in a && "ondrop" in a);
    }),
    (s.websockets = function () {
      return "WebSocket" in a || "MozWebSocket" in a;
    }),
    (s.rgba = function () {
      return (
        C("background-color:rgba(150,255,150,.5)"), F(j.backgroundColor, "rgba")
      );
    }),
    (s.hsla = function () {
      return (
        C("background-color:hsla(120,40%,100%,.5)"),
        F(j.backgroundColor, "rgba") || F(j.backgroundColor, "hsla")
      );
    }),
    (s.multiplebgs = function () {
      return (
        C("background:url(https://),url(https://),red url(https://)"),
        /(url\s*\(.*?){3}/.test(j.background)
      );
    }),
    (s.backgroundsize = function () {
      return I("backgroundSize");
    }),
    (s.borderimage = function () {
      return I("borderImage");
    }),
    (s.borderradius = function () {
      return I("borderRadius");
    }),
    (s.boxshadow = function () {
      return I("boxShadow");
    }),
    (s.textshadow = function () {
      return b.createElement("div").style.textShadow === "";
    }),
    (s.opacity = function () {
      return D("opacity:.55"), /^0.55$/.test(j.opacity);
    }),
    (s.cssanimations = function () {
      return I("animationName");
    }),
    (s.csscolumns = function () {
      return I("columnCount");
    }),
    (s.cssgradients = function () {
      var a = "background-image:",
        b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        c = "linear-gradient(left top,#9f9, white);";
      return (
        C(
          (a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(
            0,
            -a.length
          )
        ),
        F(j.backgroundImage, "gradient")
      );
    }),
    (s.cssreflections = function () {
      return I("boxReflect");
    }),
    (s.csstransforms = function () {
      return !!I("transform");
    }),
    (s.csstransforms3d = function () {
      var a = !!I("perspective");
      return (
        a &&
          "webkitPerspective" in g.style &&
          y(
            "@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
            function (b, c) {
              a = b.offsetLeft === 9 && b.offsetHeight === 3;
            }
          ),
        a
      );
    }),
    (s.csstransitions = function () {
      return I("transition");
    }),
    (s.fontface = function () {
      var a;
      return (
        y(
          '@font-face {font-family:"font";src:url("https://")}',
          function (c, d) {
            var e = b.getElementById("smodernizr"),
              f = e.sheet || e.styleSheet,
              g = f
                ? f.cssRules && f.cssRules[0]
                  ? f.cssRules[0].cssText
                  : f.cssText || ""
                : "";
            a = /src/i.test(g) && g.indexOf(d.split(" ")[0]) === 0;
          }
        ),
        a
      );
    }),
    (s.generatedcontent = function () {
      var a;
      return (
        y(
          [
            "#",
            h,
            "{font:0/0 a}#",
            h,
            ':after{content:"',
            l,
            '";visibility:hidden;font:3px/1 a}',
          ].join(""),
          function (b) {
            a = b.offsetHeight >= 3;
          }
        ),
        a
      );
    }),
    (s.video = function () {
      var a = b.createElement("video"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('video/ogg; codecs="theora"')
              .replace(/^no$/, "")),
            (c.h264 = a
              .canPlayType('video/mp4; codecs="avc1.42E01E"')
              .replace(/^no$/, "")),
            (c.webm = a
              .canPlayType('video/webm; codecs="vp8, vorbis"')
              .replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (s.audio = function () {
      var a = b.createElement("audio"),
        c = !1;
      try {
        if ((c = !!a.canPlayType))
          (c = new Boolean(c)),
            (c.ogg = a
              .canPlayType('audio/ogg; codecs="vorbis"')
              .replace(/^no$/, "")),
            (c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, "")),
            (c.wav = a
              .canPlayType('audio/wav; codecs="1"')
              .replace(/^no$/, "")),
            (c.m4a = (
              a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")
            ).replace(/^no$/, ""));
      } catch (d) {}
      return c;
    }),
    (s.localstorage = function () {
      try {
        return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
      } catch (a) {
        return !1;
      }
    }),
    (s.sessionstorage = function () {
      try {
        return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
      } catch (a) {
        return !1;
      }
    }),
    (s.webworkers = function () {
      return !!a.Worker;
    }),
    (s.applicationcache = function () {
      return !!a.applicationCache;
    }),
    (s.svg = function () {
      return (
        !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
      );
    }),
    (s.inlinesvg = function () {
      var a = b.createElement("div");
      return (
        (a.innerHTML = "<svg/>"),
        (a.firstChild && a.firstChild.namespaceURI) == r.svg
      );
    }),
    (s.smil = function () {
      return (
        !!b.createElementNS &&
        /SVGAnimate/.test(m.call(b.createElementNS(r.svg, "animate")))
      );
    }),
    (s.svgclippaths = function () {
      return (
        !!b.createElementNS &&
        /SVGClipPath/.test(m.call(b.createElementNS(r.svg, "clipPath")))
      );
    });
  for (var K in s)
    B(s, K) &&
      ((x = K.toLowerCase()), (e[x] = s[K]()), v.push((e[x] ? "" : "no-") + x));
  return (
    e.input || J(),
    (e.addTest = function (a, b) {
      if (typeof a == "object") for (var d in a) B(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return e;
        (b = typeof b == "function" ? b() : b),
          typeof f != "undefined" &&
            f &&
            (g.className += " " + (b ? "" : "no-") + a),
          (e[a] = b);
      }
      return e;
    }),
    C(""),
    (i = k = null),
    (function (a, b) {
      function l(a, b) {
        var c = a.createElement("p"),
          d = a.getElementsByTagName("head")[0] || a.documentElement;
        return (
          (c.innerHTML = "x<style>" + b + "</style>"),
          d.insertBefore(c.lastChild, d.firstChild)
        );
      }
      function m() {
        var a = s.elements;
        return typeof a == "string" ? a.split(" ") : a;
      }
      function n(a) {
        var b = j[a[h]];
        return b || ((b = {}), i++, (a[h] = i), (j[i] = b)), b;
      }
      function o(a, c, d) {
        c || (c = b);
        if (k) return c.createElement(a);
        d || (d = n(c));
        var g;
        return (
          d.cache[a]
            ? (g = d.cache[a].cloneNode())
            : f.test(a)
            ? (g = (d.cache[a] = d.createElem(a)).cloneNode())
            : (g = d.createElem(a)),
          g.canHaveChildren && !e.test(a) && !g.tagUrn
            ? d.frag.appendChild(g)
            : g
        );
      }
      function p(a, c) {
        a || (a = b);
        if (k) return a.createDocumentFragment();
        c = c || n(a);
        var d = c.frag.cloneNode(),
          e = 0,
          f = m(),
          g = f.length;
        for (; e < g; e++) d.createElement(f[e]);
        return d;
      }
      function q(a, b) {
        b.cache ||
          ((b.cache = {}),
          (b.createElem = a.createElement),
          (b.createFrag = a.createDocumentFragment),
          (b.frag = b.createFrag())),
          (a.createElement = function (c) {
            return s.shivMethods ? o(c, a, b) : b.createElem(c);
          }),
          (a.createDocumentFragment = Function(
            "h,f",
            "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
              m()
                .join()
                .replace(/[\w\-]+/g, function (a) {
                  return (
                    b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                  );
                }) +
              ");return n}"
          )(s, b.frag));
      }
      function r(a) {
        a || (a = b);
        var c = n(a);
        return (
          s.shivCSS &&
            !g &&
            !c.hasCSS &&
            (c.hasCSS = !!l(
              a,
              "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
            )),
          k || q(a, c),
          a
        );
      }
      var c = "3.7.0",
        d = a.html5 || {},
        e =
          /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        f =
          /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        g,
        h = "_html5shiv",
        i = 0,
        j = {},
        k;
      (function () {
        try {
          var a = b.createElement("a");
          (a.innerHTML = "<xyz></xyz>"),
            (g = "hidden" in a),
            (k =
              a.childNodes.length == 1 ||
              (function () {
                b.createElement("a");
                var a = b.createDocumentFragment();
                return (
                  typeof a.cloneNode == "undefined" ||
                  typeof a.createDocumentFragment == "undefined" ||
                  typeof a.createElement == "undefined"
                );
              })());
        } catch (c) {
          (g = !0), (k = !0);
        }
      })();
      var s = {
        elements:
          d.elements ||
          "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: c,
        shivCSS: d.shivCSS !== !1,
        supportsUnknownElements: k,
        shivMethods: d.shivMethods !== !1,
        type: "default",
        shivDocument: r,
        createElement: o,
        createDocumentFragment: p,
      };
      (a.html5 = s), r(b);
    })(this, b),
    (e._version = d),
    (e._prefixes = n),
    (e._domPrefixes = q),
    (e._cssomPrefixes = p),
    (e.hasEvent = z),
    (e.testProp = function (a) {
      return G([a]);
    }),
    (e.testAllProps = I),
    (e.testStyles = y),
    (e.prefixed = function (a, b, c) {
      return b ? I(a, b, c) : I(a, "pfx");
    }),
    (g.className =
      g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
      (f ? " js " + v.join(" ") : "")),
    e
  );
})(this, this.document)),
  (function (a, b, c) {
    function d(a) {
      return "[object Function]" == o.call(a);
    }
    function e(a) {
      return "string" == typeof a;
    }
    function f() {}
    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a;
    }
    function h() {
      var a = p.shift();
      (q = 1),
        a
          ? a.t
            ? m(function () {
                ("c" == a.t
                  ? B.injectCss
                  : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1);
              }, 0)
            : (a(), h())
          : (q = 0);
    }
    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (
          !o &&
          g(l.readyState) &&
          ((u.r = o = 1),
          !q && h(),
          (l.onload = l.onreadystatechange = null),
          b)
        ) {
          "img" != a &&
            m(function () {
              t.removeChild(l);
            }, 50);
          for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload();
        }
      }
      var j = j || B.errorTimeout,
        l = b.createElement(a),
        o = 0,
        r = 0,
        u = { t: d, s: c, e: f, a: i, x: j };
      1 === y[c] && ((r = 1), (y[c] = [])),
        "object" == a ? (l.data = c) : ((l.src = c), (l.type = a)),
        (l.width = l.height = "0"),
        (l.onerror =
          l.onload =
          l.onreadystatechange =
            function () {
              k.call(this, r);
            }),
        p.splice(e, 0, u),
        "img" != a &&
          (r || 2 === y[c]
            ? (t.insertBefore(l, s ? null : n), m(k, j))
            : y[c].push(l));
    }
    function j(a, b, c, d, f) {
      return (
        (q = 0),
        (b = b || "j"),
        e(a)
          ? i("c" == b ? v : u, a, b, this.i++, c, d, f)
          : (p.splice(this.i++, 0, a), 1 == p.length && h()),
        this
      );
    }
    function k() {
      var a = B;
      return (a.loader = { load: j, i: 0 }), a;
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = s ? l : n.parentNode,
      l = a.opera && "[object Opera]" == o.call(a.opera),
      l = !!b.attachEvent && !l,
      u = r ? "object" : l ? "script" : "img",
      v = l ? "script" : u,
      w =
        Array.isArray ||
        function (a) {
          return "[object Array]" == o.call(a);
        },
      x = [],
      y = {},
      z = {
        timeout: function (a, b) {
          return b.length && (a.timeout = b[0]), a;
        },
      },
      A,
      B;
    (B = function (a) {
      function b(a) {
        var a = a.split("!"),
          b = x.length,
          c = a.pop(),
          d = a.length,
          c = { url: c, origUrl: c, prefixes: a },
          e,
          f,
          g;
        for (f = 0; f < d; f++)
          (g = a[f].split("=")), (e = z[g.shift()]) && (c = e(c, g));
        for (f = 0; f < b; f++) c = x[f](c);
        return c;
      }
      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(),
          i.bypass ||
            (e &&
              (e = d(e)
                ? e
                : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]),
            i.instead
              ? i.instead(a, e, f, g, h)
              : (y[i.url] ? (i.noexec = !0) : (y[i.url] = 1),
                f.load(
                  i.url,
                  i.forceCSS ||
                    (!i.forceJS &&
                      "css" == i.url.split(".").pop().split("?").shift())
                    ? "c"
                    : c,
                  i.noexec,
                  i.attrs,
                  i.timeout
                ),
                (d(e) || d(j)) &&
                  f.load(function () {
                    k(),
                      e && e(i.origUrl, h, g),
                      j && j(i.origUrl, h, g),
                      (y[i.url] = 2);
                  })));
      }
      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a))
              c ||
                (j = function () {
                  var a = [].slice.call(arguments);
                  k.apply(this, a), l();
                }),
                g(a, j, b, 0, h);
            else if (Object(a) === a)
              for (n in ((m = (function () {
                var b = 0,
                  c;
                for (c in a) a.hasOwnProperty(c) && b++;
                return b;
              })()),
              a))
                a.hasOwnProperty(n) &&
                  (!c &&
                    !--m &&
                    (d(j)
                      ? (j = function () {
                          var a = [].slice.call(arguments);
                          k.apply(this, a), l();
                        })
                      : (j[n] = (function (a) {
                          return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l();
                          };
                        })(k[n]))),
                  g(a[n], j, b, n, h));
          } else !c && l();
        }
        var h = !!a.test,
          i = a.load || a.both,
          j = a.callback || f,
          k = j,
          l = a.complete || f,
          m,
          n;
        c(h ? a.yep : a.nope, !!i), i && c(i);
      }
      var i,
        j,
        l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (w(a))
        for (i = 0; i < a.length; i++)
          (j = a[i]),
            e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l);
    }),
      (B.addPrefix = function (a, b) {
        z[a] = b;
      }),
      (B.addFilter = function (a) {
        x.push(a);
      }),
      (B.errorTimeout = 1e4),
      null == b.readyState &&
        b.addEventListener &&
        ((b.readyState = "loading"),
        b.addEventListener(
          "DOMContentLoaded",
          (A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0),
              (b.readyState = "complete");
          }),
          0
        )),
      (a.yepnope = k()),
      (a.yepnope.executeStack = h),
      (a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"),
          l,
          o,
          e = e || B.errorTimeout;
        k.src = a;
        for (o in d) k.setAttribute(o, d[o]);
        (c = j ? h : c || f),
          (k.onreadystatechange = k.onload =
            function () {
              !l &&
                g(k.readyState) &&
                ((l = 1), c(), (k.onload = k.onreadystatechange = null));
            }),
          m(function () {
            l || ((l = 1), c(1));
          }, e),
          i ? k.onload() : n.parentNode.insertBefore(k, n);
      }),
      (a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"),
          j,
          c = i ? h : c || f;
        (e.href = a), (e.rel = "stylesheet"), (e.type = "text/css");
        for (j in d) e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0));
      });
  })(this, document),
  (Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0));
  });

/* FlexNav  */

!function () {
  var a;
  (a = jQuery),
    (a.fn.flexNav = function (b) {
      var c, d, e, f, g, h, i, j, k, l, m, n;
      return (
        (k = a.extend(
          {
            animationSpeed: 250,
            transitionOpacity: !0,
            buttonSelector: "#burger-wrapper",
            hoverIntent: !1,
            hoverIntentTimeout: 150,
            calcItemWidths: !1,
            hover: !0,
          },
          b
        )),
        (c = a(this)),
        c.addClass("with-js"),
        k.transitionOpacity === !0 && c.addClass("opacity"),
        c.find("li").each(function () {
          return a(this).has("ul").length
            ? a(this).addClass("item-with-ul").find("ul").hide()
            : void 0;
        }),
        k.calcItemWidths === !0 &&
          ((d = c.find(">li")), (f = d.length), (h = 100 / f), (g = h + "%")),
        c.data("breakpoint") && (e = c.data("breakpoint")),
        (l = function () {
          return c.hasClass("lg-screen") === !0 && k.hover === !0
            ? k.transitionOpacity === !0
              ? a(this)
                  .find(">ul")
                  .addClass("flexnav-show")
                  .stop(!0, !0)
                  .animate(
                    { height: ["toggle", "swing"], opacity: "toggle" },
                    k.animationSpeed
                  )
              : a(this)
                  .find(">ul")
                  .addClass("flexnav-show")
                  .stop(!0, !0)
                  .animate({ height: ["toggle", "swing"] }, k.animationSpeed)
            : void 0;
        }),
        (i = function () {
          return c.hasClass("lg-screen") === !0 &&
            a(this).find(">ul").hasClass("flexnav-show") === !0 &&
            k.hover === !0
            ? k.transitionOpacity === !0
              ? a(this)
                  .find(">ul")
                  .removeClass("flexnav-show")
                  .stop(!0, !0)
                  .animate(
                    { height: ["toggle", "swing"], opacity: "toggle" },
                    k.animationSpeed
                  )
              : a(this)
                  .find(">ul")
                  .removeClass("flexnav-show")
                  .stop(!0, !0)
                  .animate({ height: ["toggle", "swing"] }, k.animationSpeed)
            : void 0;
        }),
        (j = function () {
          var b;
          if (a(window).width() <= e)
            return (
              c.removeClass("lg-screen").addClass("sm-screen"),
              k.calcItemWidths === !0 && d.css("width", "100%"),
              (b =
                k.buttonSelector + ", " + k.buttonSelector + " .touch-button"),
              a(b).removeClass("active"),
              a(".one-page li a").on("click", function () {
                return c.removeClass("flexnav-show");
              })
            );
          if (a(window).width() > e) {
            if (
              (jQuery("#header-container").removeClass("light-content"),
              jQuery("#menu-burger").removeClass("open"),
              jQuery("nav").removeClass("open"),
              c.removeClass("sm-screen").addClass("lg-screen"),
              k.calcItemWidths === !0 && d.css("width", g),
              c.removeClass("flexnav-show").find(".item-with-ul").on(),
              a(".item-with-ul").find("ul").removeClass("flexnav-show"),
              i(),
              k.hoverIntent === !0)
            )
              return a(".item-with-ul").hoverIntent({
                over: l,
                out: i,
                timeout: k.hoverIntentTimeout,
              });
            if (k.hoverIntent === !1)
              return a(".item-with-ul").on("mouseenter", l).on("mouseleave", i);
          }
        }),
        a(k.buttonSelector).data("navEl", c),
        (n = ".item-with-ul, " + k.buttonSelector),
        a(n).append(
          '<span class="touch-button"><i class="navicon">&#9660;</i></span>'
        ),
        (m = k.buttonSelector + ", " + k.buttonSelector + " .touch-button"),
        a(m).on("click", function (b) {
          var c, d, e;
          return (
            a(m).toggleClass("active"),
            b.preventDefault(),
            b.stopPropagation(),
            (e = k.buttonSelector),
            (c = a(this).is(e) ? a(this) : a(this).parent(e)),
            (d = c.data("navEl")),
            d.toggleClass("flexnav-show")
          );
        }),
        a(".touch-button").on("click", function () {
          var b, d;
          return (
            (b = a(this).parent(".item-with-ul").find(">ul")),
            (d = a(this).parent(".item-with-ul").find(">span.touch-button")),
            c.hasClass("lg-screen") === !0 &&
              a(this)
                .parent(".item-with-ul")
                .siblings()
                .find("ul.flexnav-show")
                .removeClass("flexnav-show")
                .hide(),
            b.hasClass("flexnav-show") === !0
              ? (b.removeClass("flexnav-show").slideUp(k.animationSpeed),
                d.removeClass("active"))
              : b.hasClass("flexnav-show") === !1
              ? (b.addClass("flexnav-show").slideDown(k.animationSpeed),
                d.addClass("active"))
              : void 0
          );
        }),
        c.find(".item-with-ul *").focus(function () {
          return (
            a(this)
              .parent(".item-with-ul")
              .parent()
              .find(".open")
              .not(this)
              .removeClass("open")
              .hide(),
            a(this).parent(".item-with-ul").find(">ul").addClass("open").show()
          );
        }),
        j(),
        a(window).on("resize", j)
      );
    });
}.call(this);

/*  Wait For Images */

!(function (a) {
  var b = "waitForImages";
  (a.waitForImages = {
    hasImageProperties: [
      "backgroundImage",
      "listStyleImage",
      "borderImage",
      "borderCornerImage",
      "cursor",
    ],
    hasImageAttributes: ["srcset"],
  }),
    (a.expr[":"].uncached = function (b) {
      if (!a(b).is('img[src][src!=""]')) return !1;
      var c = new Image();
      return (c.src = b.src), !c.complete;
    }),
    (a.fn.waitForImages = function () {
      var c,
        d,
        e,
        f = 0,
        g = 0,
        h = a.Deferred();
      if (
        (a.isPlainObject(arguments[0])
          ? ((e = arguments[0].waitForAll),
            (d = arguments[0].each),
            (c = arguments[0].finished))
          : 1 === arguments.length && "boolean" === a.type(arguments[0])
          ? (e = arguments[0])
          : ((c = arguments[0]), (d = arguments[1]), (e = arguments[2])),
        (c = c || a.noop),
        (d = d || a.noop),
        (e = !!e),
        !a.isFunction(c) || !a.isFunction(d))
      )
        throw new TypeError("An invalid callback was supplied.");
      return (
        this.each(function () {
          var i = a(this),
            j = [],
            k = a.waitForImages.hasImageProperties || [],
            l = a.waitForImages.hasImageAttributes || [],
            m = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
          e
            ? i
                .find("*")
                .addBack()
                .each(function () {
                  var b = a(this);
                  b.is("img:uncached") &&
                    j.push({ src: b.attr("src"), element: b[0] }),
                    a.each(k, function (a, c) {
                      var d,
                        e = b.css(c);
                      if (!e) return !0;
                      for (; (d = m.exec(e)); )
                        j.push({ src: d[2], element: b[0] });
                    }),
                    a.each(l, function (c, d) {
                      var e,
                        f = b.attr(d);
                      return f
                        ? ((e = f.split(",")),
                          void a.each(e, function (c, d) {
                            (d = a.trim(d).split(" ")[0]),
                              j.push({ src: d, element: b[0] });
                          }))
                        : !0;
                    });
                })
            : i.find("img:uncached").each(function () {
                j.push({ src: this.src, element: this });
              }),
            (f = j.length),
            (g = 0),
            0 === f && (c.call(i[0]), h.resolveWith(i[0])),
            a.each(j, function (e, j) {
              var k = new Image(),
                l = "load." + b + " error." + b;
              a(k).one(l, function m(b) {
                var e = [g, f, "load" == b.type];
                return (
                  g++,
                  d.apply(j.element, e),
                  h.notifyWith(j.element, e),
                  a(this).off(l, m),
                  g == f ? (c.call(i[0]), h.resolveWith(i[0]), !1) : void 0
                );
              }),
                (k.src = j.src);
            });
        }),
        h.promise()
      );
    });
})(jQuery);

/*  Appear */

!(function (e) {
  (e.fn.appear = function (a, r) {
    var n = e.extend({ data: void 0, one: !0, accX: 0, accY: 0 }, r);
    return this.each(function () {
      var r = e(this);
      if (((r.appeared = !1), !a)) return void r.trigger("appear", n.data);
      var p = e(window),
        t = function () {
          if (!r.is(":visible")) return void (r.appeared = !1);
          var e = p.scrollLeft(),
            a = p.scrollTop(),
            t = r.offset(),
            c = t.left,
            i = t.top,
            o = n.accX,
            f = n.accY,
            s = r.height(),
            u = p.height(),
            d = r.width(),
            l = p.width();
          i + s + f >= a && a + u + f >= i && c + d + o >= e && e + l + o >= c
            ? r.appeared || r.trigger("appear", n.data)
            : (r.appeared = !1);
        },
        c = function () {
          if (((r.appeared = !0), n.one)) {
            p.unbind("scroll", t);
            var c = e.inArray(t, e.fn.appear.checks);
            c >= 0 && e.fn.appear.checks.splice(c, 1);
          }
          a.apply(this, arguments);
        };
      n.one ? r.one("appear", n.data, c) : r.bind("appear", n.data, c),
        p.scroll(t),
        e.fn.appear.checks.push(t),
        t();
    });
  }),
    e.extend(e.fn.appear, {
      checks: [],
      timeout: null,
      checkAll: function () {
        var a = e.fn.appear.checks.length;
        if (a > 0) for (; a--; ) e.fn.appear.checks[a]();
      },
      run: function () {
        e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout),
          (e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20));
      },
    }),
    e.each(
      [
        "append",
        "prepend",
        "after",
        "before",
        "attr",
        "removeAttr",
        "addClass",
        "removeClass",
        "toggleClass",
        "remove",
        "css",
        "show",
        "hide",
      ],
      function (a, r) {
        var n = e.fn[r];
        n &&
          (e.fn[r] = function () {
            var a = n.apply(this, arguments);
            return e.fn.appear.run(), a;
          });
      }
    );
})(jQuery);

/*  Magnific PopUp */

!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/* Isotope PACKAGED */

(function (t) {
  function e() {}
  function i(t) {
    function i(e) {
      e.prototype.option ||
        (e.prototype.option = function (e) {
          t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e));
        });
    }
    function n(e, i) {
      t.fn[e] = function (n) {
        if ("string" == typeof n) {
          for (
            var s = o.call(arguments, 1), a = 0, u = this.length;
            u > a;
            a++
          ) {
            var p = this[a],
              h = t.data(p, e);
            if (h)
              if (t.isFunction(h[n]) && "_" !== n.charAt(0)) {
                var f = h[n].apply(h, s);
                if (void 0 !== f) return f;
              } else r("no such method '" + n + "' for " + e + " instance");
            else
              r(
                "cannot call methods on " +
                  e +
                  " prior to initialization; " +
                  "attempted to call '" +
                  n +
                  "'"
              );
          }
          return this;
        }
        return this.each(function () {
          var o = t.data(this, e);
          o
            ? (o.option(n), o._init())
            : ((o = new i(this, n)), t.data(this, e, o));
        });
      };
    }
    if (t) {
      var r =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            };
      return (
        (t.bridget = function (t, e) {
          i(e), n(t, e);
        }),
        t.bridget
      );
    }
  }
  var o = Array.prototype.slice;
  "function" == typeof define && define.amd
    ? define("jquery-bridget/jquery.bridget", ["jquery"], i)
    : "object" == typeof exports
    ? i(require("jquery"))
    : i(t.jQuery);
})(window),
  (function (t) {
    function e(e) {
      var i = t.event;
      return (i.target = i.target || i.srcElement || e), i;
    }
    var i = document.documentElement,
      o = function () {};
    i.addEventListener
      ? (o = function (t, e, i) {
          t.addEventListener(e, i, !1);
        })
      : i.attachEvent &&
        (o = function (t, i, o) {
          (t[i + o] = o.handleEvent
            ? function () {
                var i = e(t);
                o.handleEvent.call(o, i);
              }
            : function () {
                var i = e(t);
                o.call(t, i);
              }),
            t.attachEvent("on" + i, t[i + o]);
        });
    var n = function () {};
    i.removeEventListener
      ? (n = function (t, e, i) {
          t.removeEventListener(e, i, !1);
        })
      : i.detachEvent &&
        (n = function (t, e, i) {
          t.detachEvent("on" + e, t[e + i]);
          try {
            delete t[e + i];
          } catch (o) {
            t[e + i] = void 0;
          }
        });
    var r = { bind: o, unbind: n };
    "function" == typeof define && define.amd
      ? define("eventie/eventie", r)
      : "object" == typeof exports
      ? (module.exports = r)
      : (t.eventie = r);
  })(this),
  (function (t) {
    function e(t) {
      "function" == typeof t && (e.isReady ? t() : s.push(t));
    }
    function i(t) {
      var i = "readystatechange" === t.type && "complete" !== r.readyState;
      e.isReady || i || o();
    }
    function o() {
      e.isReady = !0;
      for (var t = 0, i = s.length; i > t; t++) {
        var o = s[t];
        o();
      }
    }
    function n(n) {
      return (
        "complete" === r.readyState
          ? o()
          : (n.bind(r, "DOMContentLoaded", i),
            n.bind(r, "readystatechange", i),
            n.bind(t, "load", i)),
        e
      );
    }
    var r = t.document,
      s = [];
    (e.isReady = !1),
      "function" == typeof define && define.amd
        ? define("doc-ready/doc-ready", ["eventie/eventie"], n)
        : "object" == typeof exports
        ? (module.exports = n(require("eventie")))
        : (t.docReady = n(t.eventie));
  })(window),
  function () {
    function t() {}
    function e(t, e) {
      for (var i = t.length; i--; ) if (t[i].listener === e) return i;
      return -1;
    }
    function i(t) {
      return function () {
        return this[t].apply(this, arguments);
      };
    }
    var o = t.prototype,
      n = this,
      r = n.EventEmitter;
    (o.getListeners = function (t) {
      var e,
        i,
        o = this._getEvents();
      if (t instanceof RegExp) {
        e = {};
        for (i in o) o.hasOwnProperty(i) && t.test(i) && (e[i] = o[i]);
      } else e = o[t] || (o[t] = []);
      return e;
    }),
      (o.flattenListeners = function (t) {
        var e,
          i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i;
      }),
      (o.getListenersAsObject = function (t) {
        var e,
          i = this.getListeners(t);
        return i instanceof Array && ((e = {}), (e[t] = i)), e || i;
      }),
      (o.addListener = function (t, i) {
        var o,
          n = this.getListenersAsObject(t),
          r = "object" == typeof i;
        for (o in n)
          n.hasOwnProperty(o) &&
            -1 === e(n[o], i) &&
            n[o].push(r ? i : { listener: i, once: !1 });
        return this;
      }),
      (o.on = i("addListener")),
      (o.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 });
      }),
      (o.once = i("addOnceListener")),
      (o.defineEvent = function (t) {
        return this.getListeners(t), this;
      }),
      (o.defineEvents = function (t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this;
      }),
      (o.removeListener = function (t, i) {
        var o,
          n,
          r = this.getListenersAsObject(t);
        for (n in r)
          r.hasOwnProperty(n) &&
            ((o = e(r[n], i)), -1 !== o && r[n].splice(o, 1));
        return this;
      }),
      (o.off = i("removeListener")),
      (o.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e);
      }),
      (o.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e);
      }),
      (o.manipulateListeners = function (t, e, i) {
        var o,
          n,
          r = t ? this.removeListener : this.addListener,
          s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
          for (o = i.length; o--; ) r.call(this, e, i[o]);
        else
          for (o in e)
            e.hasOwnProperty(o) &&
              (n = e[o]) &&
              ("function" == typeof n
                ? r.call(this, o, n)
                : s.call(this, o, n));
        return this;
      }),
      (o.removeEvent = function (t) {
        var e,
          i = typeof t,
          o = this._getEvents();
        if ("string" === i) delete o[t];
        else if (t instanceof RegExp)
          for (e in o) o.hasOwnProperty(e) && t.test(e) && delete o[e];
        else delete this._events;
        return this;
      }),
      (o.removeAllListeners = i("removeEvent")),
      (o.emitEvent = function (t, e) {
        var i,
          o,
          n,
          r,
          s = this.getListenersAsObject(t);
        for (n in s)
          if (s.hasOwnProperty(n))
            for (o = s[n].length; o--; )
              (i = s[n][o]),
                i.once === !0 && this.removeListener(t, i.listener),
                (r = i.listener.apply(this, e || [])),
                r === this._getOnceReturnValue() &&
                  this.removeListener(t, i.listener);
        return this;
      }),
      (o.trigger = i("emitEvent")),
      (o.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e);
      }),
      (o.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this;
      }),
      (o._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue")
          ? this._onceReturnValue
          : !0;
      }),
      (o._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (t.noConflict = function () {
        return (n.EventEmitter = r), t;
      }),
      "function" == typeof define && define.amd
        ? define("eventEmitter/EventEmitter", [], function () {
            return t;
          })
        : "object" == typeof module && module.exports
        ? (module.exports = t)
        : (n.EventEmitter = t);
  }.call(this),
  (function (t) {
    function e(t) {
      if (t) {
        if ("string" == typeof o[t]) return t;
        t = t.charAt(0).toUpperCase() + t.slice(1);
        for (var e, n = 0, r = i.length; r > n; n++)
          if (((e = i[n] + t), "string" == typeof o[e])) return e;
      }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
      o = document.documentElement.style;
    "function" == typeof define && define.amd
      ? define("get-style-property/get-style-property", [], function () {
          return e;
        })
      : "object" == typeof exports
      ? (module.exports = e)
      : (t.getStyleProperty = e);
  })(window),
  (function (t) {
    function e(t) {
      var e = parseFloat(t),
        i = -1 === t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function i() {}
    function o() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0,
          i = s.length;
        i > e;
        e++
      ) {
        var o = s[e];
        t[o] = 0;
      }
      return t;
    }
    function n(i) {
      function n() {
        if (!d) {
          d = !0;
          var o = t.getComputedStyle;
          if (
            ((p = (function () {
              var t = o
                ? function (t) {
                    return o(t, null);
                  }
                : function (t) {
                    return t.currentStyle;
                  };
              return function (e) {
                var i = t(e);
                return (
                  i ||
                    r(
                      "Style returned " +
                        i +
                        ". Are you running this code in a hidden iframe on Firefox? " +
                        "See http://bit.ly/getsizebug1"
                    ),
                  i
                );
              };
            })()),
            (h = i("boxSizing")))
          ) {
            var n = document.createElement("div");
            (n.style.width = "200px"),
              (n.style.padding = "1px 2px 3px 4px"),
              (n.style.borderStyle = "solid"),
              (n.style.borderWidth = "1px 2px 3px 4px"),
              (n.style[h] = "border-box");
            var s = document.body || document.documentElement;
            s.appendChild(n);
            var a = p(n);
            (f = 200 === e(a.width)), s.removeChild(n);
          }
        }
      }
      function a(t) {
        if (
          (n(),
          "string" == typeof t && (t = document.querySelector(t)),
          t && "object" == typeof t && t.nodeType)
        ) {
          var i = p(t);
          if ("none" === i.display) return o();
          var r = {};
          (r.width = t.offsetWidth), (r.height = t.offsetHeight);
          for (
            var a = (r.isBorderBox = !(!h || !i[h] || "border-box" !== i[h])),
              d = 0,
              l = s.length;
            l > d;
            d++
          ) {
            var c = s[d],
              y = i[c];
            y = u(t, y);
            var m = parseFloat(y);
            r[c] = isNaN(m) ? 0 : m;
          }
          var g = r.paddingLeft + r.paddingRight,
            v = r.paddingTop + r.paddingBottom,
            _ = r.marginLeft + r.marginRight,
            I = r.marginTop + r.marginBottom,
            L = r.borderLeftWidth + r.borderRightWidth,
            z = r.borderTopWidth + r.borderBottomWidth,
            b = a && f,
            x = e(i.width);
          x !== !1 && (r.width = x + (b ? 0 : g + L));
          var S = e(i.height);
          return (
            S !== !1 && (r.height = S + (b ? 0 : v + z)),
            (r.innerWidth = r.width - (g + L)),
            (r.innerHeight = r.height - (v + z)),
            (r.outerWidth = r.width + _),
            (r.outerHeight = r.height + I),
            r
          );
        }
      }
      function u(e, i) {
        if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
        var o = e.style,
          n = o.left,
          r = e.runtimeStyle,
          s = r && r.left;
        return (
          s && (r.left = e.currentStyle.left),
          (o.left = i),
          (i = o.pixelLeft),
          (o.left = n),
          s && (r.left = s),
          i
        );
      }
      var p,
        h,
        f,
        d = !1;
      return a;
    }
    var r =
        "undefined" == typeof console
          ? i
          : function (t) {
              console.error(t);
            },
      s = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ];
    "function" == typeof define && define.amd
      ? define(
          "get-size/get-size",
          ["get-style-property/get-style-property"],
          n
        )
      : "object" == typeof exports
      ? (module.exports = n(require("desandro-get-style-property")))
      : (t.getSize = n(t.getStyleProperty));
  })(window),
  (function (t) {
    function e(t, e) {
      return t[s](e);
    }
    function i(t) {
      if (!t.parentNode) {
        var e = document.createDocumentFragment();
        e.appendChild(t);
      }
    }
    function o(t, e) {
      i(t);
      for (
        var o = t.parentNode.querySelectorAll(e), n = 0, r = o.length;
        r > n;
        n++
      )
        if (o[n] === t) return !0;
      return !1;
    }
    function n(t, o) {
      return i(t), e(t, o);
    }
    var r,
      s = (function () {
        if (t.matchesSelector) return "matchesSelector";
        for (
          var e = ["webkit", "moz", "ms", "o"], i = 0, o = e.length;
          o > i;
          i++
        ) {
          var n = e[i],
            r = n + "MatchesSelector";
          if (t[r]) return r;
        }
      })();
    if (s) {
      var a = document.createElement("div"),
        u = e(a, "div");
      r = u ? e : n;
    } else r = o;
    "function" == typeof define && define.amd
      ? define("matches-selector/matches-selector", [], function () {
          return r;
        })
      : "object" == typeof exports
      ? (module.exports = r)
      : (window.matchesSelector = r);
  })(Element.prototype),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function o(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    function n(t, n, r) {
      function a(t, e) {
        t &&
          ((this.element = t),
          (this.layout = e),
          (this.position = { x: 0, y: 0 }),
          this._create());
      }
      var u = r("transition"),
        p = r("transform"),
        h = u && p,
        f = !!r("perspective"),
        d = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "otransitionend",
          transition: "transitionend",
        }[u],
        l = [
          "transform",
          "transition",
          "transitionDuration",
          "transitionProperty",
        ],
        c = (function () {
          for (var t = {}, e = 0, i = l.length; i > e; e++) {
            var o = l[e],
              n = r(o);
            n && n !== o && (t[o] = n);
          }
          return t;
        })();
      e(a.prototype, t.prototype),
        (a.prototype._create = function () {
          (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
            this.css({ position: "absolute" });
        }),
        (a.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (a.prototype.getSize = function () {
          this.size = n(this.element);
        }),
        (a.prototype.css = function (t) {
          var e = this.element.style;
          for (var i in t) {
            var o = c[i] || i;
            e[o] = t[i];
          }
        }),
        (a.prototype.getPosition = function () {
          var t = s(this.element),
            e = this.layout.options,
            i = e.isOriginLeft,
            o = e.isOriginTop,
            n = parseInt(t[i ? "left" : "right"], 10),
            r = parseInt(t[o ? "top" : "bottom"], 10);
          (n = isNaN(n) ? 0 : n), (r = isNaN(r) ? 0 : r);
          var a = this.layout.size;
          (n -= i ? a.paddingLeft : a.paddingRight),
            (r -= o ? a.paddingTop : a.paddingBottom),
            (this.position.x = n),
            (this.position.y = r);
        }),
        (a.prototype.layoutPosition = function () {
          var t = this.layout.size,
            e = this.layout.options,
            i = {};
          e.isOriginLeft
            ? ((i.left = this.position.x + t.paddingLeft + "px"),
              (i.right = ""))
            : ((i.right = this.position.x + t.paddingRight + "px"),
              (i.left = "")),
            e.isOriginTop
              ? ((i.top = this.position.y + t.paddingTop + "px"),
                (i.bottom = ""))
              : ((i.bottom = this.position.y + t.paddingBottom + "px"),
                (i.top = "")),
            this.css(i),
            this.emitEvent("layout", [this]);
        });
      var y = f
        ? function (t, e) {
            return "translate3d(" + t + "px, " + e + "px, 0)";
          }
        : function (t, e) {
            return "translate(" + t + "px, " + e + "px)";
          };
      (a.prototype._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = parseInt(t, 10),
          r = parseInt(e, 10),
          s = n === this.position.x && r === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return this.layoutPosition(), void 0;
        var a = t - i,
          u = e - o,
          p = {},
          h = this.layout.options;
        (a = h.isOriginLeft ? a : -a),
          (u = h.isOriginTop ? u : -u),
          (p.transform = y(a, u)),
          this.transition({
            to: p,
            onTransitionEnd: { transform: this.layoutPosition },
            isCleaning: !0,
          });
      }),
        (a.prototype.goTo = function (t, e) {
          this.setPosition(t, e), this.layoutPosition();
        }),
        (a.prototype.moveTo = h ? a.prototype._transitionTo : a.prototype.goTo),
        (a.prototype.setPosition = function (t, e) {
          (this.position.x = parseInt(t, 10)),
            (this.position.y = parseInt(e, 10));
        }),
        (a.prototype._nonTransition = function (t) {
          this.css(t.to), t.isCleaning && this._removeStyles(t.to);
          for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
        }),
        (a.prototype._transition = function (t) {
          if (!parseFloat(this.layout.options.transitionDuration))
            return this._nonTransition(t), void 0;
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            var o = this.element.offsetHeight;
            o = null;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        });
      var m = p && o(p) + ",opacity";
      (a.prototype.enableTransition = function () {
        this.isTransitioning ||
          (this.css({
            transitionProperty: m,
            transitionDuration: this.layout.options.transitionDuration,
          }),
          this.element.addEventListener(d, this, !1));
      }),
        (a.prototype.transition =
          a.prototype[u ? "_transition" : "_nonTransition"]),
        (a.prototype.onwebkitTransitionEnd = function (t) {
          this.ontransitionend(t);
        }),
        (a.prototype.onotransitionend = function (t) {
          this.ontransitionend(t);
        });
      var g = {
        "-webkit-transform": "transform",
        "-moz-transform": "transform",
        "-o-transform": "transform",
      };
      (a.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
          var e = this._transn,
            o = g[t.propertyName] || t.propertyName;
          if (
            (delete e.ingProperties[o],
            i(e.ingProperties) && this.disableTransition(),
            o in e.clean &&
              ((this.element.style[t.propertyName] = ""), delete e.clean[o]),
            o in e.onEnd)
          ) {
            var n = e.onEnd[o];
            n.call(this), delete e.onEnd[o];
          }
          this.emitEvent("transitionEnd", [this]);
        }
      }),
        (a.prototype.disableTransition = function () {
          this.removeTransitionStyles(),
            this.element.removeEventListener(d, this, !1),
            (this.isTransitioning = !1);
        }),
        (a.prototype._removeStyles = function (t) {
          var e = {};
          for (var i in t) e[i] = "";
          this.css(e);
        });
      var v = { transitionProperty: "", transitionDuration: "" };
      return (
        (a.prototype.removeTransitionStyles = function () {
          this.css(v);
        }),
        (a.prototype.removeElem = function () {
          this.element.parentNode.removeChild(this.element),
            this.emitEvent("remove", [this]);
        }),
        (a.prototype.remove = function () {
          if (!u || !parseFloat(this.layout.options.transitionDuration))
            return this.removeElem(), void 0;
          var t = this;
          this.on("transitionEnd", function () {
            return t.removeElem(), !0;
          }),
            this.hide();
        }),
        (a.prototype.reveal = function () {
          delete this.isHidden, this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
          });
        }),
        (a.prototype.hide = function () {
          (this.isHidden = !0), this.css({ display: "" });
          var t = this.layout.options;
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: {
              opacity: function () {
                this.isHidden && this.css({ display: "none" });
              },
            },
          });
        }),
        (a.prototype.destroy = function () {
          this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: "",
          });
        }),
        a
      );
    }
    var r = t.getComputedStyle,
      s = r
        ? function (t) {
            return r(t, null);
          }
        : function (t) {
            return t.currentStyle;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          [
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "get-style-property/get-style-property",
          ],
          n
        )
      : "object" == typeof exports
      ? (module.exports = n(
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-get-style-property")
        ))
      : ((t.Outlayer = {}),
        (t.Outlayer.Item = n(t.EventEmitter, t.getSize, t.getStyleProperty)));
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      return "[object Array]" === f.call(t);
    }
    function o(t) {
      var e = [];
      if (i(t)) e = t;
      else if (t && "number" == typeof t.length)
        for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
      else e.push(t);
      return e;
    }
    function n(t, e) {
      var i = l(e, t);
      -1 !== i && e.splice(i, 1);
    }
    function r(t) {
      return t
        .replace(/(.)([A-Z])/g, function (t, e, i) {
          return e + "-" + i;
        })
        .toLowerCase();
    }
    function s(i, s, f, l, c, y) {
      function m(t, i) {
        if (("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)))
          return (
            u &&
              u.error("Bad " + this.constructor.namespace + " element: " + t),
            void 0
          );
        (this.element = t),
          (this.options = e({}, this.constructor.defaults)),
          this.option(i);
        var o = ++g;
        (this.element.outlayerGUID = o),
          (v[o] = this),
          this._create(),
          this.options.isInitLayout && this.layout();
      }
      var g = 0,
        v = {};
      return (
        (m.namespace = "outlayer"),
        (m.Item = y),
        (m.defaults = {
          containerStyle: { position: "relative" },
          isInitLayout: !0,
          isOriginLeft: !0,
          isOriginTop: !0,
          isResizeBound: !0,
          isResizingContainer: !0,
          transitionDuration: "0.4s",
          hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
          visibleStyle: { opacity: 1, transform: "scale(1)" },
        }),
        e(m.prototype, f.prototype),
        (m.prototype.option = function (t) {
          e(this.options, t);
        }),
        (m.prototype._create = function () {
          this.reloadItems(),
            (this.stamps = []),
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize();
        }),
        (m.prototype.reloadItems = function () {
          this.items = this._itemize(this.element.children);
        }),
        (m.prototype._itemize = function (t) {
          for (
            var e = this._filterFindItemElements(t),
              i = this.constructor.Item,
              o = [],
              n = 0,
              r = e.length;
            r > n;
            n++
          ) {
            var s = e[n],
              a = new i(s, this);
            o.push(a);
          }
          return o;
        }),
        (m.prototype._filterFindItemElements = function (t) {
          t = o(t);
          for (
            var e = this.options.itemSelector, i = [], n = 0, r = t.length;
            r > n;
            n++
          ) {
            var s = t[n];
            if (d(s))
              if (e) {
                c(s, e) && i.push(s);
                for (
                  var a = s.querySelectorAll(e), u = 0, p = a.length;
                  p > u;
                  u++
                )
                  i.push(a[u]);
              } else i.push(s);
          }
          return i;
        }),
        (m.prototype.getItemElements = function () {
          for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element);
          return t;
        }),
        (m.prototype.layout = function () {
          this._resetLayout(), this._manageStamps();
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited;
          this.layoutItems(this.items, t), (this._isLayoutInited = !0);
        }),
        (m.prototype._init = m.prototype.layout),
        (m.prototype._resetLayout = function () {
          this.getSize();
        }),
        (m.prototype.getSize = function () {
          this.size = l(this.element);
        }),
        (m.prototype._getMeasurement = function (t, e) {
          var i,
            o = this.options[t];
          o
            ? ("string" == typeof o
                ? (i = this.element.querySelector(o))
                : d(o) && (i = o),
              (this[t] = i ? l(i)[e] : o))
            : (this[t] = 0);
        }),
        (m.prototype.layoutItems = function (t, e) {
          (t = this._getItemsForLayout(t)),
            this._layoutItems(t, e),
            this._postLayout();
        }),
        (m.prototype._getItemsForLayout = function (t) {
          for (var e = [], i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            n.isIgnored || e.push(n);
          }
          return e;
        }),
        (m.prototype._layoutItems = function (t, e) {
          function i() {
            o.emitEvent("layoutComplete", [o, t]);
          }
          var o = this;
          if (!t || !t.length) return i(), void 0;
          this._itemsOn(t, "layout", i);
          for (var n = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r],
              u = this._getItemLayoutPosition(a);
            (u.item = a), (u.isInstant = e || a.isLayoutInstant), n.push(u);
          }
          this._processLayoutQueue(n);
        }),
        (m.prototype._getItemLayoutPosition = function () {
          return { x: 0, y: 0 };
        }),
        (m.prototype._processLayoutQueue = function (t) {
          for (var e = 0, i = t.length; i > e; e++) {
            var o = t[e];
            this._positionItem(o.item, o.x, o.y, o.isInstant);
          }
        }),
        (m.prototype._positionItem = function (t, e, i, o) {
          o ? t.goTo(e, i) : t.moveTo(e, i);
        }),
        (m.prototype._postLayout = function () {
          this.resizeContainer();
        }),
        (m.prototype.resizeContainer = function () {
          if (this.options.isResizingContainer) {
            var t = this._getContainerSize();
            t &&
              (this._setContainerMeasure(t.width, !0),
              this._setContainerMeasure(t.height, !1));
          }
        }),
        (m.prototype._getContainerSize = h),
        (m.prototype._setContainerMeasure = function (t, e) {
          if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox &&
              (t += e
                ? i.paddingLeft +
                  i.paddingRight +
                  i.borderLeftWidth +
                  i.borderRightWidth
                : i.paddingBottom +
                  i.paddingTop +
                  i.borderTopWidth +
                  i.borderBottomWidth),
              (t = Math.max(t, 0)),
              (this.element.style[e ? "width" : "height"] = t + "px");
          }
        }),
        (m.prototype._itemsOn = function (t, e, i) {
          function o() {
            return n++, n === r && i.call(s), !0;
          }
          for (
            var n = 0, r = t.length, s = this, a = 0, u = t.length;
            u > a;
            a++
          ) {
            var p = t[a];
            p.on(e, o);
          }
        }),
        (m.prototype.ignore = function (t) {
          var e = this.getItem(t);
          e && (e.isIgnored = !0);
        }),
        (m.prototype.unignore = function (t) {
          var e = this.getItem(t);
          e && delete e.isIgnored;
        }),
        (m.prototype.stamp = function (t) {
          if ((t = this._find(t))) {
            this.stamps = this.stamps.concat(t);
            for (var e = 0, i = t.length; i > e; e++) {
              var o = t[e];
              this.ignore(o);
            }
          }
        }),
        (m.prototype.unstamp = function (t) {
          if ((t = this._find(t)))
            for (var e = 0, i = t.length; i > e; e++) {
              var o = t[e];
              n(o, this.stamps), this.unignore(o);
            }
        }),
        (m.prototype._find = function (t) {
          return t
            ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
              (t = o(t)))
            : void 0;
        }),
        (m.prototype._manageStamps = function () {
          if (this.stamps && this.stamps.length) {
            this._getBoundingRect();
            for (var t = 0, e = this.stamps.length; e > t; t++) {
              var i = this.stamps[t];
              this._manageStamp(i);
            }
          }
        }),
        (m.prototype._getBoundingRect = function () {
          var t = this.element.getBoundingClientRect(),
            e = this.size;
          this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
          };
        }),
        (m.prototype._manageStamp = h),
        (m.prototype._getElementOffset = function (t) {
          var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            o = l(t),
            n = {
              left: e.left - i.left - o.marginLeft,
              top: e.top - i.top - o.marginTop,
              right: i.right - e.right - o.marginRight,
              bottom: i.bottom - e.bottom - o.marginBottom,
            };
          return n;
        }),
        (m.prototype.handleEvent = function (t) {
          var e = "on" + t.type;
          this[e] && this[e](t);
        }),
        (m.prototype.bindResize = function () {
          this.isResizeBound ||
            (i.bind(t, "resize", this), (this.isResizeBound = !0));
        }),
        (m.prototype.unbindResize = function () {
          this.isResizeBound && i.unbind(t, "resize", this),
            (this.isResizeBound = !1);
        }),
        (m.prototype.onresize = function () {
          function t() {
            e.resize(), delete e.resizeTimeout;
          }
          this.resizeTimeout && clearTimeout(this.resizeTimeout);
          var e = this;
          this.resizeTimeout = setTimeout(t, 100);
        }),
        (m.prototype.resize = function () {
          this.isResizeBound && this.needsResizeLayout() && this.layout();
        }),
        (m.prototype.needsResizeLayout = function () {
          var t = l(this.element),
            e = this.size && t;
          return e && t.innerWidth !== this.size.innerWidth;
        }),
        (m.prototype.addItems = function (t) {
          var e = this._itemize(t);
          return e.length && (this.items = this.items.concat(e)), e;
        }),
        (m.prototype.appended = function (t) {
          var e = this.addItems(t);
          e.length && (this.layoutItems(e, !0), this.reveal(e));
        }),
        (m.prototype.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            var i = this.items.slice(0);
            (this.items = e.concat(i)),
              this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(e, !0),
              this.reveal(e),
              this.layoutItems(i);
          }
        }),
        (m.prototype.reveal = function (t) {
          var e = t && t.length;
          if (e)
            for (var i = 0; e > i; i++) {
              var o = t[i];
              o.reveal();
            }
        }),
        (m.prototype.hide = function (t) {
          var e = t && t.length;
          if (e)
            for (var i = 0; e > i; i++) {
              var o = t[i];
              o.hide();
            }
        }),
        (m.prototype.getItem = function (t) {
          for (var e = 0, i = this.items.length; i > e; e++) {
            var o = this.items[e];
            if (o.element === t) return o;
          }
        }),
        (m.prototype.getItems = function (t) {
          if (t && t.length) {
            for (var e = [], i = 0, o = t.length; o > i; i++) {
              var n = t[i],
                r = this.getItem(n);
              r && e.push(r);
            }
            return e;
          }
        }),
        (m.prototype.remove = function (t) {
          t = o(t);
          var e = this.getItems(t);
          if (e && e.length) {
            this._itemsOn(e, "remove", function () {
              this.emitEvent("removeComplete", [this, e]);
            });
            for (var i = 0, r = e.length; r > i; i++) {
              var s = e[i];
              s.remove(), n(s, this.items);
            }
          }
        }),
        (m.prototype.destroy = function () {
          var t = this.element.style;
          (t.height = ""), (t.position = ""), (t.width = "");
          for (var e = 0, i = this.items.length; i > e; e++) {
            var o = this.items[e];
            o.destroy();
          }
          this.unbindResize();
          var n = this.element.outlayerGUID;
          delete v[n],
            delete this.element.outlayerGUID,
            p && p.removeData(this.element, this.constructor.namespace);
        }),
        (m.data = function (t) {
          var e = t && t.outlayerGUID;
          return e && v[e];
        }),
        (m.create = function (t, i) {
          function o() {
            m.apply(this, arguments);
          }
          return (
            Object.create
              ? (o.prototype = Object.create(m.prototype))
              : e(o.prototype, m.prototype),
            (o.prototype.constructor = o),
            (o.defaults = e({}, m.defaults)),
            e(o.defaults, i),
            (o.prototype.settings = {}),
            (o.namespace = t),
            (o.data = m.data),
            (o.Item = function () {
              y.apply(this, arguments);
            }),
            (o.Item.prototype = new y()),
            s(function () {
              for (
                var e = r(t),
                  i = a.querySelectorAll(".js-" + e),
                  n = "data-" + e + "-options",
                  s = 0,
                  h = i.length;
                h > s;
                s++
              ) {
                var f,
                  d = i[s],
                  l = d.getAttribute(n);
                try {
                  f = l && JSON.parse(l);
                } catch (c) {
                  u &&
                    u.error(
                      "Error parsing " +
                        n +
                        " on " +
                        d.nodeName.toLowerCase() +
                        (d.id ? "#" + d.id : "") +
                        ": " +
                        c
                    );
                  continue;
                }
                var y = new o(d, f);
                p && p.data(d, t, y);
              }
            }),
            p && p.bridget && p.bridget(t, o),
            o
          );
        }),
        (m.Item = y),
        m
      );
    }
    var a = t.document,
      u = t.console,
      p = t.jQuery,
      h = function () {},
      f = Object.prototype.toString,
      d =
        "function" == typeof HTMLElement || "object" == typeof HTMLElement
          ? function (t) {
              return t instanceof HTMLElement;
            }
          : function (t) {
              return (
                t &&
                "object" == typeof t &&
                1 === t.nodeType &&
                "string" == typeof t.nodeName
              );
            },
      l = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
            return -1;
          };
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "eventie/eventie",
            "doc-ready/doc-ready",
            "eventEmitter/EventEmitter",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "./item",
          ],
          s
        )
      : "object" == typeof exports
      ? (module.exports = s(
          require("eventie"),
          require("doc-ready"),
          require("wolfy87-eventemitter"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("./item")
        ))
      : (t.Outlayer = s(
          t.eventie,
          t.docReady,
          t.EventEmitter,
          t.getSize,
          t.matchesSelector,
          t.Outlayer.Item
        ));
  })(window),
  (function (t) {
    function e(t) {
      function e() {
        t.Item.apply(this, arguments);
      }
      (e.prototype = new t.Item()),
        (e.prototype._create = function () {
          (this.id = this.layout.itemGUID++),
            t.Item.prototype._create.call(this),
            (this.sortData = {});
        }),
        (e.prototype.updateSortData = function () {
          if (!this.isIgnored) {
            (this.sortData.id = this.id),
              (this.sortData["original-order"] = this.id),
              (this.sortData.random = Math.random());
            var t = this.layout.options.getSortData,
              e = this.layout._sorters;
            for (var i in t) {
              var o = e[i];
              this.sortData[i] = o(this.element, this);
            }
          }
        });
      var i = e.prototype.destroy;
      return (
        (e.prototype.destroy = function () {
          i.apply(this, arguments), this.css({ display: "" });
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window),
  (function (t) {
    function e(t, e) {
      function i(t) {
        (this.isotope = t),
          t &&
            ((this.options = t.options[this.namespace]),
            (this.element = t.element),
            (this.items = t.filteredItems),
            (this.size = t.size));
      }
      return (
        (function () {
          function t(t) {
            return function () {
              return e.prototype[t].apply(this.isotope, arguments);
            };
          }
          for (
            var o = [
                "_resetLayout",
                "_getItemLayoutPosition",
                "_manageStamp",
                "_getContainerSize",
                "_getElementOffset",
                "needsResizeLayout",
              ],
              n = 0,
              r = o.length;
            r > n;
            n++
          ) {
            var s = o[n];
            i.prototype[s] = t(s);
          }
        })(),
        (i.prototype.needsVerticalResizeLayout = function () {
          var e = t(this.isotope.element),
            i = this.isotope.size && e;
          return i && e.innerHeight !== this.isotope.size.innerHeight;
        }),
        (i.prototype._getMeasurement = function () {
          this.isotope._getMeasurement.apply(this, arguments);
        }),
        (i.prototype.getColumnWidth = function () {
          this.getSegmentSize("column", "Width");
        }),
        (i.prototype.getRowHeight = function () {
          this.getSegmentSize("row", "Height");
        }),
        (i.prototype.getSegmentSize = function (t, e) {
          var i = t + e,
            o = "outer" + e;
          if ((this._getMeasurement(i, o), !this[i])) {
            var n = this.getFirstItemSize();
            this[i] = (n && n[o]) || this.isotope.size["inner" + e];
          }
        }),
        (i.prototype.getFirstItemSize = function () {
          var e = this.isotope.filteredItems[0];
          return e && e.element && t(e.element);
        }),
        (i.prototype.layout = function () {
          this.isotope.layout.apply(this.isotope, arguments);
        }),
        (i.prototype.getSize = function () {
          this.isotope.getSize(), (this.size = this.isotope.size);
        }),
        (i.modes = {}),
        (i.create = function (t, e) {
          function o() {
            i.apply(this, arguments);
          }
          return (
            (o.prototype = new i()),
            e && (o.options = e),
            (o.prototype.namespace = t),
            (i.modes[t] = o),
            o
          );
        }),
        i
      );
    }
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window),
  (function (t) {
    function e(t, e) {
      var o = t.create("masonry");
      return (
        (o.prototype._resetLayout = function () {
          this.getSize(),
            this._getMeasurement("columnWidth", "outerWidth"),
            this._getMeasurement("gutter", "outerWidth"),
            this.measureColumns();
          var t = this.cols;
          for (this.colYs = []; t--; ) this.colYs.push(0);
          this.maxY = 0;
        }),
        (o.prototype.measureColumns = function () {
          if ((this.getContainerWidth(), !this.columnWidth)) {
            var t = this.items[0],
              i = t && t.element;
            this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
          }
          (this.columnWidth += this.gutter),
            (this.cols = Math.floor(
              (this.containerWidth + this.gutter) / this.columnWidth
            )),
            (this.cols = Math.max(this.cols, 1));
        }),
        (o.prototype.getContainerWidth = function () {
          var t = this.options.isFitWidth
              ? this.element.parentNode
              : this.element,
            i = e(t);
          this.containerWidth = i && i.innerWidth;
        }),
        (o.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth % this.columnWidth,
            o = e && 1 > e ? "round" : "ceil",
            n = Math[o](t.size.outerWidth / this.columnWidth);
          n = Math.min(n, this.cols);
          for (
            var r = this._getColGroup(n),
              s = Math.min.apply(Math, r),
              a = i(r, s),
              u = { x: this.columnWidth * a, y: s },
              p = s + t.size.outerHeight,
              h = this.cols + 1 - r.length,
              f = 0;
            h > f;
            f++
          )
            this.colYs[a + f] = p;
          return u;
        }),
        (o.prototype._getColGroup = function (t) {
          if (2 > t) return this.colYs;
          for (var e = [], i = this.cols + 1 - t, o = 0; i > o; o++) {
            var n = this.colYs.slice(o, o + t);
            e[o] = Math.max.apply(Math, n);
          }
          return e;
        }),
        (o.prototype._manageStamp = function (t) {
          var i = e(t),
            o = this._getElementOffset(t),
            n = this.options.isOriginLeft ? o.left : o.right,
            r = n + i.outerWidth,
            s = Math.floor(n / this.columnWidth);
          s = Math.max(0, s);
          var a = Math.floor(r / this.columnWidth);
          (a -= r % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
          for (
            var u =
                (this.options.isOriginTop ? o.top : o.bottom) + i.outerHeight,
              p = s;
            a >= p;
            p++
          )
            this.colYs[p] = Math.max(u, this.colYs[p]);
        }),
        (o.prototype._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs);
          var t = { height: this.maxY };
          return (
            this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
            t
          );
        }),
        (o.prototype._getContainerFitWidth = function () {
          for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
          return (this.cols - t) * this.columnWidth - this.gutter;
        }),
        (o.prototype.needsResizeLayout = function () {
          var t = this.containerWidth;
          return this.getContainerWidth(), t !== this.containerWidth;
        }),
        o
      );
    }
    var i = Array.prototype.indexOf
      ? function (t, e) {
          return t.indexOf(e);
        }
      : function (t, e) {
          for (var i = 0, o = t.length; o > i; i++) {
            var n = t[i];
            if (n === e) return i;
          }
          return -1;
        };
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t, i) {
      var o = t.create("masonry"),
        n = o.prototype._getElementOffset,
        r = o.prototype.layout,
        s = o.prototype._getMeasurement;
      e(o.prototype, i.prototype),
        (o.prototype._getElementOffset = n),
        (o.prototype.layout = r),
        (o.prototype._getMeasurement = s);
      var a = o.prototype.measureColumns;
      o.prototype.measureColumns = function () {
        (this.items = this.isotope.filteredItems), a.call(this);
      };
      var u = o.prototype._manageStamp;
      return (
        (o.prototype._manageStamp = function () {
          (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
            (this.options.isOriginTop = this.isotope.options.isOriginTop),
            u.apply(this, arguments);
        }),
        o
      );
    }
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          i
        )
      : "object" == typeof exports
      ? (module.exports = i(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : i(t.Isotope.LayoutMode, t.Masonry);
  })(window),
  (function (t) {
    function e(t) {
      var e = t.create("fitRows");
      return (
        (e.prototype._resetLayout = function () {
          (this.x = 0),
            (this.y = 0),
            (this.maxY = 0),
            this._getMeasurement("gutter", "outerWidth");
        }),
        (e.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e = t.size.outerWidth + this.gutter,
            i = this.isotope.size.innerWidth + this.gutter;
          0 !== this.x &&
            e + this.x > i &&
            ((this.x = 0), (this.y = this.maxY));
          var o = { x: this.x, y: this.y };
          return (
            (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
            (this.x += e),
            o
          );
        }),
        (e.prototype._getContainerSize = function () {
          return { height: this.maxY };
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window),
  (function (t) {
    function e(t) {
      var e = t.create("vertical", { horizontalAlignment: 0 });
      return (
        (e.prototype._resetLayout = function () {
          this.y = 0;
        }),
        (e.prototype._getItemLayoutPosition = function (t) {
          t.getSize();
          var e =
              (this.isotope.size.innerWidth - t.size.outerWidth) *
              this.options.horizontalAlignment,
            i = this.y;
          return (this.y += t.size.outerHeight), { x: e, y: i };
        }),
        (e.prototype._getContainerSize = function () {
          return { height: this.y };
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function i(t) {
      return "[object Array]" === h.call(t);
    }
    function o(t) {
      var e = [];
      if (i(t)) e = t;
      else if (t && "number" == typeof t.length)
        for (var o = 0, n = t.length; n > o; o++) e.push(t[o]);
      else e.push(t);
      return e;
    }
    function n(t, e) {
      var i = f(e, t);
      -1 !== i && e.splice(i, 1);
    }
    function r(t, i, r, u, h) {
      function f(t, e) {
        return function (i, o) {
          for (var n = 0, r = t.length; r > n; n++) {
            var s = t[n],
              a = i.sortData[s],
              u = o.sortData[s];
            if (a > u || u > a) {
              var p = void 0 !== e[s] ? e[s] : e,
                h = p ? 1 : -1;
              return (a > u ? 1 : -1) * h;
            }
          }
          return 0;
        };
      }
      var d = t.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
      (d.Item = u),
        (d.LayoutMode = h),
        (d.prototype._create = function () {
          (this.itemGUID = 0),
            (this._sorters = {}),
            this._getSorters(),
            t.prototype._create.call(this),
            (this.modes = {}),
            (this.filteredItems = this.items),
            (this.sortHistory = ["original-order"]);
          for (var e in h.modes) this._initLayoutMode(e);
        }),
        (d.prototype.reloadItems = function () {
          (this.itemGUID = 0), t.prototype.reloadItems.call(this);
        }),
        (d.prototype._itemize = function () {
          for (
            var e = t.prototype._itemize.apply(this, arguments),
              i = 0,
              o = e.length;
            o > i;
            i++
          ) {
            var n = e[i];
            n.id = this.itemGUID++;
          }
          return this._updateItemsSortData(e), e;
        }),
        (d.prototype._initLayoutMode = function (t) {
          var i = h.modes[t],
            o = this.options[t] || {};
          (this.options[t] = i.options ? e(i.options, o) : o),
            (this.modes[t] = new i(this));
        }),
        (d.prototype.layout = function () {
          return !this._isLayoutInited && this.options.isInitLayout
            ? (this.arrange(), void 0)
            : (this._layout(), void 0);
        }),
        (d.prototype._layout = function () {
          var t = this._getIsInstant();
          this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(this.filteredItems, t),
            (this._isLayoutInited = !0);
        }),
        (d.prototype.arrange = function (t) {
          this.option(t),
            this._getIsInstant(),
            (this.filteredItems = this._filter(this.items)),
            this._sort(),
            this._layout();
        }),
        (d.prototype._init = d.prototype.arrange),
        (d.prototype._getIsInstant = function () {
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited;
          return (this._isInstant = t), t;
        }),
        (d.prototype._filter = function (t) {
          function e() {
            f.reveal(n), f.hide(r);
          }
          var i = this.options.filter;
          i = i || "*";
          for (
            var o = [],
              n = [],
              r = [],
              s = this._getFilterTest(i),
              a = 0,
              u = t.length;
            u > a;
            a++
          ) {
            var p = t[a];
            if (!p.isIgnored) {
              var h = s(p);
              h && o.push(p),
                h && p.isHidden ? n.push(p) : h || p.isHidden || r.push(p);
            }
          }
          var f = this;
          return this._isInstant ? this._noTransition(e) : e(), o;
        }),
        (d.prototype._getFilterTest = function (t) {
          return s && this.options.isJQueryFiltering
            ? function (e) {
                return s(e.element).is(t);
              }
            : "function" == typeof t
            ? function (e) {
                return t(e.element);
              }
            : function (e) {
                return r(e.element, t);
              };
        }),
        (d.prototype.updateSortData = function (t) {
          var e;
          t ? ((t = o(t)), (e = this.getItems(t))) : (e = this.items),
            this._getSorters(),
            this._updateItemsSortData(e);
        }),
        (d.prototype._getSorters = function () {
          var t = this.options.getSortData;
          for (var e in t) {
            var i = t[e];
            this._sorters[e] = l(i);
          }
        }),
        (d.prototype._updateItemsSortData = function (t) {
          for (var e = t && t.length, i = 0; e && e > i; i++) {
            var o = t[i];
            o.updateSortData();
          }
        });
      var l = (function () {
        function t(t) {
          if ("string" != typeof t) return t;
          var i = a(t).split(" "),
            o = i[0],
            n = o.match(/^\[(.+)\]$/),
            r = n && n[1],
            s = e(r, o),
            u = d.sortDataParsers[i[1]];
          return (t = u
            ? function (t) {
                return t && u(s(t));
              }
            : function (t) {
                return t && s(t);
              });
        }
        function e(t, e) {
          var i;
          return (i = t
            ? function (e) {
                return e.getAttribute(t);
              }
            : function (t) {
                var i = t.querySelector(e);
                return i && p(i);
              });
        }
        return t;
      })();
      (d.sortDataParsers = {
        parseInt: function (t) {
          return parseInt(t, 10);
        },
        parseFloat: function (t) {
          return parseFloat(t);
        },
      }),
        (d.prototype._sort = function () {
          var t = this.options.sortBy;
          if (t) {
            var e = [].concat.apply(t, this.sortHistory),
              i = f(e, this.options.sortAscending);
            this.filteredItems.sort(i),
              t !== this.sortHistory[0] && this.sortHistory.unshift(t);
          }
        }),
        (d.prototype._mode = function () {
          var t = this.options.layoutMode,
            e = this.modes[t];
          if (!e) throw Error("No layout mode: " + t);
          return (e.options = this.options[t]), e;
        }),
        (d.prototype._resetLayout = function () {
          t.prototype._resetLayout.call(this), this._mode()._resetLayout();
        }),
        (d.prototype._getItemLayoutPosition = function (t) {
          return this._mode()._getItemLayoutPosition(t);
        }),
        (d.prototype._manageStamp = function (t) {
          this._mode()._manageStamp(t);
        }),
        (d.prototype._getContainerSize = function () {
          return this._mode()._getContainerSize();
        }),
        (d.prototype.needsResizeLayout = function () {
          return this._mode().needsResizeLayout();
        }),
        (d.prototype.appended = function (t) {
          var e = this.addItems(t);
          if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i);
          }
        }),
        (d.prototype.prepended = function (t) {
          var e = this._itemize(t);
          if (e.length) {
            var i = this.items.slice(0);
            (this.items = e.concat(i)),
              this._resetLayout(),
              this._manageStamps();
            var o = this._filterRevealAdded(e);
            this.layoutItems(i),
              (this.filteredItems = o.concat(this.filteredItems));
          }
        }),
        (d.prototype._filterRevealAdded = function (t) {
          var e = this._noTransition(function () {
            return this._filter(t);
          });
          return this.layoutItems(e, !0), this.reveal(e), t;
        }),
        (d.prototype.insert = function (t) {
          var e = this.addItems(t);
          if (e.length) {
            var i,
              o,
              n = e.length;
            for (i = 0; n > i; i++)
              (o = e[i]), this.element.appendChild(o.element);
            var r = this._filter(e);
            for (
              this._noTransition(function () {
                this.hide(r);
              }),
                i = 0;
              n > i;
              i++
            )
              e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; n > i; i++) delete e[i].isLayoutInstant;
            this.reveal(r);
          }
        });
      var c = d.prototype.remove;
      return (
        (d.prototype.remove = function (t) {
          t = o(t);
          var e = this.getItems(t);
          if ((c.call(this, t), e && e.length))
            for (var i = 0, r = e.length; r > i; i++) {
              var s = e[i];
              n(s, this.filteredItems);
            }
        }),
        (d.prototype.shuffle = function () {
          for (var t = 0, e = this.items.length; e > t; t++) {
            var i = this.items[t];
            i.sortData.random = Math.random();
          }
          (this.options.sortBy = "random"), this._sort(), this._layout();
        }),
        (d.prototype._noTransition = function (t) {
          var e = this.options.transitionDuration;
          this.options.transitionDuration = 0;
          var i = t.call(this);
          return (this.options.transitionDuration = e), i;
        }),
        (d.prototype.getFilteredItemElements = function () {
          for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++)
            t.push(this.filteredItems[e].element);
          return t;
        }),
        d
      );
    }
    var s = t.jQuery,
      a = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      u = document.documentElement,
      p = u.textContent
        ? function (t) {
            return t.textContent;
          }
        : function (t) {
            return t.innerText;
          },
      h = Object.prototype.toString,
      f = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e);
          }
        : function (t, e) {
            for (var i = 0, o = t.length; o > i; i++) if (t[i] === e) return i;
            return -1;
          };
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "matches-selector/matches-selector",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          r
        )
      : "object" == typeof exports
      ? (module.exports = r(
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("./item"),
          require("./layout-mode"),
          require("./layout-modes/masonry"),
          require("./layout-modes/fit-rows"),
          require("./layout-modes/vertical")
        ))
      : (t.Isotope = r(
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window);

/*  Packery layout mode PACKAGED */

!(function (a) {
  function b(a) {
    return new RegExp("(^|\\s+)" + a + "(\\s+|$)");
  }
  function c(a, b) {
    var c = d(a, b) ? f : e;
    c(a, b);
  }
  var d, e, f;
  "classList" in document.documentElement
    ? ((d = function (a, b) {
        return a.classList.contains(b);
      }),
      (e = function (a, b) {
        a.classList.add(b);
      }),
      (f = function (a, b) {
        a.classList.remove(b);
      }))
    : ((d = function (a, c) {
        return b(c).test(a.className);
      }),
      (e = function (a, b) {
        d(a, b) || (a.className = a.className + " " + b);
      }),
      (f = function (a, c) {
        a.className = a.className.replace(b(c), " ");
      }));
  var g = {
    hasClass: d,
    addClass: e,
    removeClass: f,
    toggleClass: c,
    has: d,
    add: e,
    remove: f,
    toggle: c,
  };
  "function" == typeof define && define.amd
    ? define("classie/classie", g)
    : "object" == typeof exports
    ? (module.exports = g)
    : (a.classie = g);
})(window),
  (function (a) {
    function b() {
      function a(b) {
        for (var c in a.defaults) this[c] = a.defaults[c];
        for (c in b) this[c] = b[c];
      }
      return (
        (c.Rect = a),
        (a.defaults = { x: 0, y: 0, width: 0, height: 0 }),
        (a.prototype.contains = function (a) {
          var b = a.width || 0,
            c = a.height || 0;
          return (
            this.x <= a.x &&
            this.y <= a.y &&
            this.x + this.width >= a.x + b &&
            this.y + this.height >= a.y + c
          );
        }),
        (a.prototype.overlaps = function (a) {
          var b = this.x + this.width,
            c = this.y + this.height,
            d = a.x + a.width,
            e = a.y + a.height;
          return this.x < d && b > a.x && this.y < e && c > a.y;
        }),
        (a.prototype.getMaximalFreeRects = function (b) {
          if (!this.overlaps(b)) return !1;
          var c,
            d = [],
            e = this.x + this.width,
            f = this.y + this.height,
            g = b.x + b.width,
            h = b.y + b.height;
          return (
            this.y < b.y &&
              ((c = new a({
                x: this.x,
                y: this.y,
                width: this.width,
                height: b.y - this.y,
              })),
              d.push(c)),
            e > g &&
              ((c = new a({
                x: g,
                y: this.y,
                width: e - g,
                height: this.height,
              })),
              d.push(c)),
            f > h &&
              ((c = new a({
                x: this.x,
                y: h,
                width: this.width,
                height: f - h,
              })),
              d.push(c)),
            this.x < b.x &&
              ((c = new a({
                x: this.x,
                y: this.y,
                width: b.x - this.x,
                height: this.height,
              })),
              d.push(c)),
            d
          );
        }),
        (a.prototype.canFit = function (a) {
          return this.width >= a.width && this.height >= a.height;
        }),
        a
      );
    }
    var c = (a.Packery = function () {});
    "function" == typeof define && define.amd
      ? define("packery/js/rect", b)
      : "object" == typeof exports
      ? (module.exports = b())
      : ((a.Packery = a.Packery || {}), (a.Packery.Rect = b()));
  })(window),
  (function (a) {
    function b(a) {
      function b(a, b, c) {
        (this.width = a || 0),
          (this.height = b || 0),
          (this.sortDirection = c || "downwardLeftToRight"),
          this.reset();
      }
      (b.prototype.reset = function () {
        (this.spaces = []), (this.newSpaces = []);
        var b = new a({ x: 0, y: 0, width: this.width, height: this.height });
        this.spaces.push(b),
          (this.sorter = c[this.sortDirection] || c.downwardLeftToRight);
      }),
        (b.prototype.pack = function (a) {
          for (var b = 0, c = this.spaces.length; c > b; b++) {
            var d = this.spaces[b];
            if (d.canFit(a)) {
              this.placeInSpace(a, d);
              break;
            }
          }
        }),
        (b.prototype.placeInSpace = function (a, b) {
          (a.x = b.x), (a.y = b.y), this.placed(a);
        }),
        (b.prototype.placed = function (a) {
          for (var b = [], c = 0, d = this.spaces.length; d > c; c++) {
            var e = this.spaces[c],
              f = e.getMaximalFreeRects(a);
            f ? b.push.apply(b, f) : b.push(e);
          }
          (this.spaces = b), this.mergeSortSpaces();
        }),
        (b.prototype.mergeSortSpaces = function () {
          b.mergeRects(this.spaces), this.spaces.sort(this.sorter);
        }),
        (b.prototype.addSpace = function (a) {
          this.spaces.push(a), this.mergeSortSpaces();
        }),
        (b.mergeRects = function (a) {
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            if (d) {
              var e = a.slice(0);
              e.splice(b, 1);
              for (var f = 0, g = 0, h = e.length; h > g; g++) {
                var i = e[g],
                  j = b > g ? 0 : 1;
                d.contains(i) && (a.splice(g + j - f, 1), f++);
              }
            }
          }
          return a;
        });
      var c = {
        downwardLeftToRight: function (a, b) {
          return a.y - b.y || a.x - b.x;
        },
        rightwardTopToBottom: function (a, b) {
          return a.x - b.x || a.y - b.y;
        },
      };
      return b;
    }
    if ("function" == typeof define && define.amd)
      define("packery/js/packer", ["./rect"], b);
    else if ("object" == typeof exports) module.exports = b(require("./rect"));
    else {
      var c = (a.Packery = a.Packery || {});
      c.Packer = b(c.Rect);
    }
  })(window),
  (function (a) {
    function b(a, b, c) {
      var d = a("transform"),
        e = function () {
          b.Item.apply(this, arguments);
        };
      e.prototype = new b.Item();
      var f = e.prototype._create;
      return (
        (e.prototype._create = function () {
          f.call(this), (this.rect = new c()), (this.placeRect = new c());
        }),
        (e.prototype.dragStart = function () {
          this.getPosition(),
            this.removeTransitionStyles(),
            this.isTransitioning && d && (this.element.style[d] = "none"),
            this.getSize(),
            (this.isPlacing = !0),
            (this.needsPositioning = !1),
            this.positionPlaceRect(this.position.x, this.position.y),
            (this.isTransitioning = !1),
            (this.didDrag = !1);
        }),
        (e.prototype.dragMove = function (a, b) {
          this.didDrag = !0;
          var c = this.layout.size;
          (a -= c.paddingLeft),
            (b -= c.paddingTop),
            this.positionPlaceRect(a, b);
        }),
        (e.prototype.dragStop = function () {
          this.getPosition();
          var a = this.position.x !== this.placeRect.x,
            b = this.position.y !== this.placeRect.y;
          (this.needsPositioning = a || b), (this.didDrag = !1);
        }),
        (e.prototype.positionPlaceRect = function (a, b, c) {
          (this.placeRect.x = this.getPlaceRectCoord(a, !0)),
            (this.placeRect.y = this.getPlaceRectCoord(b, !1, c));
        }),
        (e.prototype.getPlaceRectCoord = function (a, b, c) {
          var d = b ? "Width" : "Height",
            e = this.size["outer" + d],
            f = this.layout[b ? "columnWidth" : "rowHeight"],
            g = this.layout.size["inner" + d];
          b ||
            ((g = Math.max(g, this.layout.maxY)),
            this.layout.rowHeight || (g -= this.layout.gutter));
          var h;
          if (f) {
            (f += this.layout.gutter),
              (g += b ? this.layout.gutter : 0),
              (a = Math.round(a / f));
            var i;
            i = this.layout.options.isHorizontal
              ? b
                ? "ceil"
                : "floor"
              : b
              ? "floor"
              : "ceil";
            var j = Math[i](g / f);
            (j -= Math.ceil(e / f)), (h = j);
          } else h = g - e;
          return (a = c ? a : Math.min(a, h)), (a *= f || 1), Math.max(0, a);
        }),
        (e.prototype.copyPlaceRectPosition = function () {
          (this.rect.x = this.placeRect.x), (this.rect.y = this.placeRect.y);
        }),
        (e.prototype.removeElem = function () {
          this.element.parentNode.removeChild(this.element),
            this.layout.packer.addSpace(this.rect),
            this.emitEvent("remove", [this]);
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define(
          "packery/js/item",
          [
            "get-style-property/get-style-property",
            "outlayer/outlayer",
            "./rect",
          ],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(
          require("desandro-get-style-property"),
          require("outlayer"),
          require("./rect")
        ))
      : (a.Packery.Item = b(a.getStyleProperty, a.Outlayer, a.Packery.Rect));
  })(window),
  (function (a) {
    function b(a, b, c, d, e, f) {
      function g(a, b) {
        return a.position.y - b.position.y || a.position.x - b.position.x;
      }
      function h(a, b) {
        return a.position.x - b.position.x || a.position.y - b.position.y;
      }
      d.prototype.canFit = function (a) {
        return this.width >= a.width - 1 && this.height >= a.height - 1;
      };
      var i = c.create("packery");
      return (
        (i.Item = f),
        (i.prototype._create = function () {
          c.prototype._create.call(this),
            (this.packer = new e()),
            this.stamp(this.options.stamped);
          var a = this;
          (this.handleDraggabilly = {
            dragStart: function (b) {
              a.itemDragStart(b.element);
            },
            dragMove: function (b) {
              a.itemDragMove(b.element, b.position.x, b.position.y);
            },
            dragEnd: function (b) {
              a.itemDragEnd(b.element);
            },
          }),
            (this.handleUIDraggable = {
              start: function (b) {
                a.itemDragStart(b.currentTarget);
              },
              drag: function (b, c) {
                a.itemDragMove(
                  b.currentTarget,
                  c.position.left,
                  c.position.top
                );
              },
              stop: function (b) {
                a.itemDragEnd(b.currentTarget);
              },
            });
        }),
        (i.prototype._resetLayout = function () {
          this.getSize(), this._getMeasurements();
          var a = this.packer;
          this.options.isHorizontal
            ? ((a.width = Number.POSITIVE_INFINITY),
              (a.height = this.size.innerHeight + this.gutter),
              (a.sortDirection = "rightwardTopToBottom"))
            : ((a.width = this.size.innerWidth + this.gutter),
              (a.height = Number.POSITIVE_INFINITY),
              (a.sortDirection = "downwardLeftToRight")),
            a.reset(),
            (this.maxY = 0),
            (this.maxX = 0);
        }),
        (i.prototype._getMeasurements = function () {
          this._getMeasurement("columnWidth", "width"),
            this._getMeasurement("rowHeight", "height"),
            this._getMeasurement("gutter", "width");
        }),
        (i.prototype._getItemLayoutPosition = function (a) {
          return this._packItem(a), a.rect;
        }),
        (i.prototype._packItem = function (a) {
          this._setRectSize(a.element, a.rect),
            this.packer.pack(a.rect),
            this._setMaxXY(a.rect);
        }),
        (i.prototype._setMaxXY = function (a) {
          (this.maxX = Math.max(a.x + a.width, this.maxX)),
            (this.maxY = Math.max(a.y + a.height, this.maxY));
        }),
        (i.prototype._setRectSize = function (a, c) {
          var d = b(a),
            e = d.outerWidth,
            f = d.outerHeight;
          (e || f) &&
            ((e = this._applyGridGutter(e, this.columnWidth)),
            (f = this._applyGridGutter(f, this.rowHeight))),
            (c.width = Math.min(e, this.packer.width)),
            (c.height = Math.min(f, this.packer.height));
        }),
        (i.prototype._applyGridGutter = function (a, b) {
          if (!b) return a + this.gutter;
          b += this.gutter;
          var c = a % b,
            d = c && 1 > c ? "round" : "ceil";
          return (a = Math[d](a / b) * b);
        }),
        (i.prototype._getContainerSize = function () {
          return this.options.isHorizontal
            ? { width: this.maxX - this.gutter }
            : { height: this.maxY - this.gutter };
        }),
        (i.prototype._manageStamp = function (a) {
          var b,
            c = this.getItem(a);
          if (c && c.isPlacing) b = c.placeRect;
          else {
            var e = this._getElementOffset(a);
            b = new d({
              x: this.options.isOriginLeft ? e.left : e.right,
              y: this.options.isOriginTop ? e.top : e.bottom,
            });
          }
          this._setRectSize(a, b), this.packer.placed(b), this._setMaxXY(b);
        }),
        (i.prototype.sortItemsByPosition = function () {
          var a = this.options.isHorizontal ? h : g;
          this.items.sort(a);
        }),
        (i.prototype.fit = function (a, b, c) {
          var d = this.getItem(a);
          d &&
            (this._getMeasurements(),
            this.stamp(d.element),
            d.getSize(),
            (d.isPlacing = !0),
            (b = void 0 === b ? d.rect.x : b),
            (c = void 0 === c ? d.rect.y : c),
            d.positionPlaceRect(b, c, !0),
            this._bindFitEvents(d),
            d.moveTo(d.placeRect.x, d.placeRect.y),
            this.layout(),
            this.unstamp(d.element),
            this.sortItemsByPosition(),
            (d.isPlacing = !1),
            d.copyPlaceRectPosition());
        }),
        (i.prototype._bindFitEvents = function (a) {
          function b() {
            d++, 2 === d && c.emitEvent("fitComplete", [c, a]);
          }
          var c = this,
            d = 0;
          a.on("layout", function () {
            return b(), !0;
          }),
            this.on("layoutComplete", function () {
              return b(), !0;
            });
        }),
        (i.prototype.resize = function () {
          var a = b(this.element),
            c = this.size && a,
            d = this.options.isHorizontal ? "innerHeight" : "innerWidth";
          (c && a[d] === this.size[d]) || this.layout();
        }),
        (i.prototype.itemDragStart = function (a) {
          this.stamp(a);
          var b = this.getItem(a);
          b && b.dragStart();
        }),
        (i.prototype.itemDragMove = function (a, b, c) {
          function d() {
            f.layout(), delete f.dragTimeout;
          }
          var e = this.getItem(a);
          e && e.dragMove(b, c);
          var f = this;
          this.clearDragTimeout(), (this.dragTimeout = setTimeout(d, 40));
        }),
        (i.prototype.clearDragTimeout = function () {
          this.dragTimeout && clearTimeout(this.dragTimeout);
        }),
        (i.prototype.itemDragEnd = function (b) {
          var c,
            d = this.getItem(b);
          if (
            (d && ((c = d.didDrag), d.dragStop()),
            !d || (!c && !d.needsPositioning))
          )
            return void this.unstamp(b);
          a.add(d.element, "is-positioning-post-drag");
          var e = this._getDragEndLayoutComplete(b, d);
          d.needsPositioning
            ? (d.on("layout", e), d.moveTo(d.placeRect.x, d.placeRect.y))
            : d && d.copyPlaceRectPosition(),
            this.clearDragTimeout(),
            this.on("layoutComplete", e),
            this.layout();
        }),
        (i.prototype._getDragEndLayoutComplete = function (b, c) {
          var d = c && c.needsPositioning,
            e = 0,
            f = d ? 2 : 1,
            g = this;
          return function () {
            return (
              e++,
              e !== f
                ? !0
                : (c &&
                    (a.remove(c.element, "is-positioning-post-drag"),
                    (c.isPlacing = !1),
                    c.copyPlaceRectPosition()),
                  g.unstamp(b),
                  g.sortItemsByPosition(),
                  d && g.emitEvent("dragItemPositioned", [g, c]),
                  !0)
            );
          };
        }),
        (i.prototype.bindDraggabillyEvents = function (a) {
          a.on("dragStart", this.handleDraggabilly.dragStart),
            a.on("dragMove", this.handleDraggabilly.dragMove),
            a.on("dragEnd", this.handleDraggabilly.dragEnd);
        }),
        (i.prototype.bindUIDraggableEvents = function (a) {
          a.on("dragstart", this.handleUIDraggable.start)
            .on("drag", this.handleUIDraggable.drag)
            .on("dragstop", this.handleUIDraggable.stop);
        }),
        (i.Rect = d),
        (i.Packer = e),
        i
      );
    }
    "function" == typeof define && define.amd
      ? define(
          "packery/js/packery",
          [
            "classie/classie",
            "get-size/get-size",
            "outlayer/outlayer",
            "./rect",
            "./packer",
            "./item",
          ],
          b
        )
      : "object" == typeof exports
      ? (module.exports = b(
          require("desandro-classie"),
          require("get-size"),
          require("outlayer"),
          require("./rect"),
          require("./packer"),
          require("./item")
        ))
      : (a.Packery = b(
          a.classie,
          a.getSize,
          a.Outlayer,
          a.Packery.Rect,
          a.Packery.Packer,
          a.Packery.Item
        ));
  })(window),
  (function (a) {
    function b(a, b) {
      for (var c in b) a[c] = b[c];
      return a;
    }
    function c(a, c, d) {
      var e = a.create("packery"),
        f = e.prototype._getElementOffset,
        g = e.prototype._getMeasurement;
      b(e.prototype, c.prototype),
        (e.prototype._getElementOffset = f),
        (e.prototype._getMeasurement = g);
      var h = e.prototype._resetLayout;
      e.prototype._resetLayout = function () {
        (this.packer = this.packer || new c.Packer()), h.apply(this, arguments);
      };
      var i = e.prototype._getItemLayoutPosition;
      e.prototype._getItemLayoutPosition = function (a) {
        return (a.rect = a.rect || new c.Rect()), i.call(this, a);
      };
      var j = e.prototype._manageStamp;
      return (
        (e.prototype._manageStamp = function () {
          (this.options.isOriginLeft = this.isotope.options.isOriginLeft),
            (this.options.isOriginTop = this.isotope.options.isOriginTop),
            j.apply(this, arguments);
        }),
        (e.prototype.needsResizeLayout = function () {
          var a = d(this.element),
            b = this.size && a,
            c = this.options.isHorizontal ? "innerHeight" : "innerWidth";
          return b && a[c] !== this.size[c];
        }),
        e
      );
    }
    "function" == typeof define && define.amd
      ? define(
          ["isotope/js/layout-mode", "packery/js/packery", "get-size/get-size"],
          c
        )
      : "object" == typeof exports
      ? (module.exports = c(
          require("isotope-layout/js/layout-mode"),
          require("packery"),
          require("get-size")
        ))
      : c(a.Isotope.LayoutMode, a.Packery, a.getSize);
  })(window);

/*  TweenMax js */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function _inheritsLoose(t, e) {
    (t.prototype = Object.create(e.prototype)),
      ((t.prototype.constructor = t).__proto__ = e);
  }
  function _assertThisInitialized(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function n(t) {
    return "string" == typeof t;
  }
  function o(t) {
    return "function" == typeof t;
  }
  function p(t) {
    return "number" == typeof t;
  }
  function q(t) {
    return void 0 === t;
  }
  function r(t) {
    return "object" == typeof t;
  }
  function s(t) {
    return !1 !== t;
  }
  function t() {
    return "undefined" != typeof window;
  }
  function u(t) {
    return o(t) || n(t);
  }
  function K(t) {
    return (l = mt(t, ot)) && ae;
  }
  function L(t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  }
  function M(t, e) {
    return !e && console.warn(t);
  }
  function N(t, e) {
    return (t && (ot[t] = e) && l && (l[t] = e)) || ot;
  }
  function O() {
    return 0;
  }
  function Y(t) {
    var e,
      i,
      n = t[0];
    if ((r(n) || o(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
      for (i = _t.length; i-- && !_t[i].targetTest(n); );
      e = _t[i];
    }
    for (i = t.length; i--; )
      (t[i] && (t[i]._gsap || (t[i]._gsap = new It(t[i], e)))) ||
        t.splice(i, 1);
    return t;
  }
  function Z(t) {
    return t._gsap || Y(bt(t))[0]._gsap;
  }
  function $(t, e, r) {
    return (r = t[e]) && o(r)
      ? t[e]()
      : (q(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function _(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function aa(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function ba(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function ca(t, e, r) {
    var i,
      n = p(t[1]),
      a = (n ? 2 : 1) + (e < 2 ? 0 : 1),
      o = t[a];
    if ((n && (o.duration = t[1]), (o.parent = r), e)) {
      for (i = o; r && !("immediateRender" in i); )
        (i = r.vars.defaults || {}), (r = s(r.vars.inherit) && r.parent);
      (o.immediateRender = s(i.immediateRender)),
        e < 2 ? (o.runBackwards = 1) : (o.startAt = t[a - 1]);
    }
    return o;
  }
  function da() {
    var t,
      e,
      r = ht.length,
      i = ht.slice(0);
    for (lt = {}, t = ht.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function ea(t, e, r, i) {
    ht.length && da(), t.render(e, r, i), ht.length && da();
  }
  function fa(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(st).length < 2
      ? e
      : n(t)
      ? t.trim()
      : t;
  }
  function ga(t) {
    return t;
  }
  function ha(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function ia(t, e) {
    for (var r in e)
      r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }
  function ka(t, e) {
    for (var i in e) t[i] = r(e[i]) ? ka(t[i] || (t[i] = {}), e[i]) : e[i];
    return t;
  }
  function la(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function ma(t) {
    var e = t.parent || E,
      r = t.keyframes ? ia : ha;
    if (s(t.inherit))
      for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function pa(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      a = e._next;
    n ? (n._next = a) : t[r] === e && (t[r] = a),
      a ? (a._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  }
  function qa(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t),
      (t._act = 0);
  }
  function ra(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function ua(t) {
    return t._repeat ? gt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function wa(t, e) {
    return (
      (t - e._start) * e._ts +
      (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  }
  function xa(t) {
    return (t._end = aa(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0)
    ));
  }
  function ya(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = aa(
          t._dp._time -
            (0 < t._ts
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        xa(t),
        r._dirty || ra(r, t)),
      t
    );
  }
  function za(t, e) {
    var r;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((r = wa(t.rawTime(), e)),
        (!e._dur || yt(0, e.totalDuration(), r) - e._tTime > U) &&
          e.render(r, !0)),
      ra(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (r = t; r._dp; )
          0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -U;
    }
  }
  function Aa(t, e, r, i) {
    return (
      e.parent && qa(e),
      (e._start = aa(r + e._delay)),
      (e._end = aa(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      (function _addLinkedListItem(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a,
          s = t[i];
        if (n) for (a = e[n]; s && s[n] > a; ) s = s._prev;
        s
          ? ((e._next = s._next), (s._next = e))
          : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[i] = e),
          (e._prev = s),
          (e.parent = e._dp = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      (t._recent = e),
      i || za(t, e),
      t
    );
  }
  function Ba(t, e) {
    return (
      (ot.ScrollTrigger || L("scrollTrigger", e)) &&
      ot.ScrollTrigger.create(e, t)
    );
  }
  function Ca(t, e, r, i) {
    return (
      Nt(t, e),
      t._initted
        ? !r &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          d !== At.frame
          ? (ht.push(t), (t._lazy = [e, i]), 1)
          : void 0
        : 1
    );
  }
  function Fa(t, e, r, i) {
    var n = t._repeat,
      a = aa(e) || 0,
      s = t._tTime / t._tDur;
    return (
      s && !i && (t._time *= a / t._dur),
      (t._dur = a),
      (t._tDur = n ? (n < 0 ? 1e10 : aa(a * (n + 1) + t._rDelay * n)) : a),
      s && !i ? ya(t, (t._tTime = t._tDur * s)) : t.parent && xa(t),
      r || ra(t.parent, t),
      t
    );
  }
  function Ga(t) {
    return t instanceof Bt ? ra(t) : Fa(t, t._dur);
  }
  function Ia(t, e) {
    var r,
      i,
      a = t.labels,
      s = t._recent || vt,
      o = t.duration() >= B ? s.endTime(!1) : t._dur;
    return n(e) && (isNaN(e) || e in a)
      ? "<" === (r = e.charAt(0)) || ">" === r
        ? ("<" === r ? s._start : s.endTime(0 <= s._repeat)) +
          (parseFloat(e.substr(1)) || 0)
        : (r = e.indexOf("=")) < 0
        ? (e in a || (a[e] = o), a[e])
        : ((i = +(e.charAt(r - 1) + e.substr(r + 1))),
          1 < r ? Ia(t, e.substr(0, r - 1)) + i : o + i)
      : null == e
      ? o
      : +e;
  }
  function Ja(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function La(t) {
    return (t = (t + "").substr((parseFloat(t) + "").length)) && isNaN(t)
      ? t
      : "";
  }
  function Oa(t, e) {
    return (
      t &&
      r(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && r(t[0]))) &&
      !t.nodeType &&
      t !== i
    );
  }
  function Ra(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function Sa(t) {
    if (o(t)) return t;
    var _ = r(t) ? t : { each: t },
      c = Rt(_.ease),
      m = _.from || 0,
      g = parseFloat(_.base) || 0,
      v = {},
      e = 0 < m && m < 1,
      y = isNaN(m) || e,
      T = _.axis,
      b = m,
      w = m;
    return (
      n(m)
        ? (b = w = { center: 0.5, edges: 0.5, end: 1 }[m] || 0)
        : !e && y && ((b = m[0]), (w = m[1])),
      function (t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d = (r || _).length,
          p = v[d];
        if (!p) {
          if (!(f = "auto" === _.grid ? 0 : (_.grid || [1, B])[1])) {
            for (
              h = -B;
              h < (h = r[f++].getBoundingClientRect().left) && f < d;

            );
            f--;
          }
          for (
            p = v[d] = [],
              i = y ? Math.min(f, d) * b - 0.5 : m % f,
              n = y ? (d * w) / f - 0.5 : (m / f) | 0,
              l = B,
              u = h = 0;
            u < d;
            u++
          )
            (a = (u % f) - i),
              (s = n - ((u / f) | 0)),
              (p[u] = o = T ? Math.abs("y" === T ? s : a) : J(a * a + s * s)),
              h < o && (h = o),
              o < l && (l = o);
          "random" === m && Ra(p),
            (p.max = h - l),
            (p.min = l),
            (p.v = d =
              (parseFloat(_.amount) ||
                parseFloat(_.each) *
                  (d < f
                    ? d - 1
                    : T
                    ? "y" === T
                      ? d / f
                      : f
                    : Math.max(f, d / f)) ||
                0) * ("edges" === m ? -1 : 1)),
            (p.b = d < 0 ? g - d : g),
            (p.u = La(_.amount || _.each) || 0),
            (c = c && d < 0 ? Ft(c) : c);
        }
        return (
          (d = (p[t] - p.min) / p.max || 0),
          aa(p.b + (c ? c(d) : d) * p.v) + p.u
        );
      }
    );
  }
  function Ta(e) {
    var r = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
    return function (t) {
      return (
        Math.floor(Math.round(parseFloat(t) / e) * e * r) / r +
        (p(t) ? 0 : La(t))
      );
    };
  }
  function Ua(u, t) {
    var h,
      l,
      e = tt(u);
    return (
      !e &&
        r(u) &&
        ((h = e = u.radius || B),
        u.values
          ? ((u = bt(u.values)), (l = !p(u[0])) && (h *= h))
          : (u = Ta(u.increment))),
      Ja(
        t,
        e
          ? o(u)
            ? function (t) {
                return (l = u(t)), Math.abs(l - t) <= h ? l : t;
              }
            : function (t) {
                for (
                  var e,
                    r,
                    i = parseFloat(l ? t.x : t),
                    n = parseFloat(l ? t.y : 0),
                    a = B,
                    s = 0,
                    o = u.length;
                  o--;

                )
                  (e = l
                    ? (e = u[o].x - i) * e + (r = u[o].y - n) * r
                    : Math.abs(u[o] - i)) < a && ((a = e), (s = o));
                return (
                  (s = !h || a <= h ? u[s] : t),
                  l || s === t || p(t) ? s : s + La(t)
                );
              }
          : Ta(u)
      )
    );
  }
  function Va(t, e, r, i) {
    return Ja(tt(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return tt(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(Math.round((t + Math.random() * (e - t)) / r) * r * i) /
              i;
    });
  }
  function Za(e, r, t) {
    return Ja(t, function (t) {
      return e[~~r(t)];
    });
  }
  function ab(t) {
    for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? st : et)),
        (s +=
          t.substr(a, e - a) + Va(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (a = i + 1);
    return s + t.substr(a, t.length - a);
  }
  function db(t, e, r) {
    var i,
      n,
      a,
      s = t.labels,
      o = B;
    for (i in s)
      (n = s[i] - e) < 0 == !!r &&
        n &&
        o > (n = Math.abs(n)) &&
        ((a = i), (o = n));
    return a;
  }
  function fb(t) {
    return qa(t), t.progress() < 1 && xt(t, "onInterrupt"), t;
  }
  function kb(t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        kt +
        0.5) |
      0
    );
  }
  function lb(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l,
      f,
      d,
      _ = t ? (p(t) ? [t >> 16, (t >> 8) & kt, t & kt] : 0) : Ot.black;
    if (!_) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Ot[t]))
        _ = Ot[t];
      else if ("#" === t.charAt(0))
        4 === t.length &&
          (t =
            "#" +
            (i = t.charAt(1)) +
            i +
            (n = t.charAt(2)) +
            n +
            (a = t.charAt(3)) +
            a),
          (_ = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & kt, t & kt]);
      else if ("hsl" === t.substr(0, 3))
        if (((_ = d = t.match(et)), e)) {
          if (~t.indexOf("="))
            return (_ = t.match(rt)), r && _.length < 4 && (_[3] = 1), _;
        } else
          (s = (+_[0] % 360) / 360),
            (o = _[1] / 100),
            (i =
              2 * (u = _[2] / 100) -
              (n = u <= 0.5 ? u * (o + 1) : u + o - u * o)),
            3 < _.length && (_[3] *= 1),
            (_[0] = kb(s + 1 / 3, i, n)),
            (_[1] = kb(s, i, n)),
            (_[2] = kb(s - 1 / 3, i, n));
      else _ = t.match(et) || Ot.transparent;
      _ = _.map(Number);
    }
    return (
      e &&
        !d &&
        ((i = _[0] / kt),
        (n = _[1] / kt),
        (a = _[2] / kt),
        (u = ((h = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2),
        h === l
          ? (s = o = 0)
          : ((f = h - l),
            (o = 0.5 < u ? f / (2 - h - l) : f / (h + l)),
            (s =
              h === i
                ? (n - a) / f + (n < a ? 6 : 0)
                : h === n
                ? (a - i) / f + 2
                : (i - n) / f + 4),
            (s *= 60)),
        (_[0] = ~~(s + 0.5)),
        (_[1] = ~~(100 * o + 0.5)),
        (_[2] = ~~(100 * u + 0.5))),
      r && _.length < 4 && (_[3] = 1),
      _
    );
  }
  function mb(t) {
    var r = [],
      i = [],
      n = -1;
    return (
      t.split(Mt).forEach(function (t) {
        var e = t.match(it) || [];
        r.push.apply(r, e), i.push((n += e.length + 1));
      }),
      (r.c = i),
      r
    );
  }
  function nb(t, e, r) {
    var i,
      n,
      a,
      s,
      o = "",
      u = (t + o).match(Mt),
      h = e ? "hsla(" : "rgba(",
      l = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (
          (t = lb(t, e, 1)) &&
          h +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      r && ((a = mb(t)), (i = r.c).join(o) !== a.c.join(o)))
    )
      for (s = (n = t.replace(Mt, "1").split(it)).length - 1; l < s; l++)
        o +=
          n[l] +
          (~i.indexOf(l)
            ? u.shift() || h + "0,0,0,0)"
            : (a.length ? a : u.length ? u : r).shift());
    if (!n) for (s = (n = t.split(Mt)).length - 1; l < s; l++) o += n[l] + u[l];
    return o + n[s];
  }
  function qb(t) {
    var e,
      r = t.join(" ");
    if (((Mt.lastIndex = 0), Mt.test(r)))
      return (
        (e = Ct.test(r)),
        (t[1] = nb(t[1], e)),
        (t[0] = nb(t[0], e, mb(t[1]))),
        !0
      );
  }
  function zb(t) {
    var e = (t + "").split("("),
      r = Dt[e[0]];
    return r && 1 < e.length && r.config
      ? r.config.apply(
          null,
          ~t.indexOf("{")
            ? [
                (function _parseObjectInString(t) {
                  for (
                    var e,
                      r,
                      i,
                      n = {},
                      a = t.substr(1, t.length - 3).split(":"),
                      s = a[0],
                      o = 1,
                      u = a.length;
                    o < u;
                    o++
                  )
                    (r = a[o]),
                      (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                      (i = r.substr(0, e)),
                      (n[s] = isNaN(i) ? i.replace(zt, "").trim() : +i),
                      (s = r.substr(e + 1).trim());
                  return n;
                })(e[1]),
              ]
            : (function _valueInParentheses(t) {
                var e = t.indexOf("(") + 1,
                  r = t.indexOf(")"),
                  i = t.indexOf("(", e);
                return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r);
              })(t)
                .split(",")
                .map(fa)
        )
      : Dt._CE && St.test(t)
      ? Dt._CE("", t)
      : r;
  }
  function Bb(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Bt
        ? Bb(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline
            ? Bb(i.timeline, e)
            : ((r = i._ease),
              (i._ease = i._yEase),
              (i._yEase = r),
              (i._yoyo = e))),
        (i = i._next);
  }
  function Db(t, e, r, i) {
    void 0 === r &&
      (r = function easeOut(t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function easeInOut(t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      a = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      _(t, function (t) {
        for (var e in ((Dt[t] = ot[t] = a), (Dt[(n = t.toLowerCase())] = r), a))
          Dt[
            n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = Dt[t + "." + e] = a[e];
      }),
      a
    );
  }
  function Eb(e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - 2 * t)) / 2 : 0.5 + e(2 * (t - 0.5)) / 2;
    };
  }
  function Fb(r, t, e) {
    function ul(t) {
      return 1 === t ? 1 : i * Math.pow(2, -10 * t) * W((t - a) * n) + 1;
    }
    var i = 1 <= t ? t : 1,
      n = (e || (r ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (n / V) * (Math.asin(1 / i) || 0),
      s =
        "out" === r
          ? ul
          : "in" === r
          ? function (t) {
              return 1 - ul(1 - t);
            }
          : Eb(ul);
    return (
      (n = V / n),
      (s.config = function (t, e) {
        return Fb(r, t, e);
      }),
      s
    );
  }
  function Gb(e, r) {
    function Cl(t) {
      return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
    }
    void 0 === r && (r = 1.70158);
    var t =
      "out" === e
        ? Cl
        : "in" === e
        ? function (t) {
            return 1 - Cl(1 - t);
          }
        : Eb(Cl);
    return (
      (t.config = function (t) {
        return Gb(e, t);
      }),
      t
    );
  }
  var E,
    i,
    a,
    h,
    l,
    f,
    d,
    c,
    m,
    g,
    v,
    y,
    T,
    b,
    w,
    x,
    k,
    C,
    A,
    P,
    D,
    S,
    z,
    F,
    R,
    j = {
      autoSleep: 120,
      force3D: "auto",
      nullTargetWarn: 1,
      units: { lineHeight: "" },
    },
    I = { duration: 0.5, overwrite: !1, delay: 0 },
    B = 1e8,
    U = 1 / B,
    V = 2 * Math.PI,
    X = V / 4,
    G = 0,
    J = Math.sqrt,
    Q = Math.cos,
    W = Math.sin,
    H =
      ("function" == typeof ArrayBuffer && ArrayBuffer.isView) ||
      function () {},
    tt = Array.isArray,
    et = /(?:-?\.?\d|\.)+/gi,
    rt = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
    it = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    nt = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
    at = /[+-]=-?[\.\d]+/,
    st = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
    ot = {},
    ut = {},
    ht = [],
    lt = {},
    ft = {},
    dt = {},
    pt = 30,
    _t = [],
    ct = "",
    mt = function _merge(t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    gt = function _animationCycle(t, e) {
      return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
    },
    vt = { _start: 0, endTime: O },
    yt = function _clamp(t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    Tt = [].slice,
    bt = function toArray(t, e) {
      return !n(t) || e || (!a && Pt())
        ? tt(t)
          ? (function _flatten(t, e, r) {
              return (
                void 0 === r && (r = []),
                t.forEach(function (t) {
                  return (n(t) && !e) || Oa(t, 1)
                    ? r.push.apply(r, bt(t))
                    : r.push(t);
                }) || r
              );
            })(t, e)
          : Oa(t)
          ? Tt.call(t, 0)
          : t
          ? [t]
          : []
        : Tt.call(h.querySelectorAll(t), 0);
    },
    wt = function mapRange(e, t, r, i, n) {
      var a = t - e,
        s = i - r;
      return Ja(n, function (t) {
        return r + (((t - e) / a) * s || 0);
      });
    },
    xt = function _callback(t, e, r) {
      var i,
        n,
        a = t.vars,
        s = a[e];
      if (s)
        return (
          (i = a[e + "Params"]),
          (n = a.callbackScope || t),
          r && ht.length && da(),
          i ? s.apply(n, i) : s.call(n)
        );
    },
    kt = 255,
    Ot = {
      aqua: [0, kt, kt],
      lime: [0, kt, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, kt],
      navy: [0, 0, 128],
      white: [kt, kt, kt],
      olive: [128, 128, 0],
      yellow: [kt, kt, 0],
      orange: [kt, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [kt, 0, 0],
      pink: [kt, 192, 203],
      cyan: [0, kt, kt],
      transparent: [kt, kt, kt, 0],
    },
    Mt = (function () {
      var t,
        e =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (t in Ot) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    Ct = /hsl[a]?\(/,
    At =
      ((x = Date.now),
      (k = 500),
      (C = 33),
      (A = x()),
      (P = A),
      (S = D = 1e3 / 240),
      (T = {
        time: 0,
        frame: 0,
        tick: function tick() {
          qk(!0);
        },
        deltaRatio: function deltaRatio(t) {
          return b / (1e3 / (t || 60));
        },
        wake: function wake() {
          f &&
            (!a &&
              t() &&
              ((i = a = window),
              (h = i.document || {}),
              (ot.gsap = ae),
              (i.gsapVersions || (i.gsapVersions = [])).push(ae.version),
              K(l || i.GreenSockGlobals || (!i.gsap && i) || {}),
              (y = i.requestAnimationFrame)),
            g && T.sleep(),
            (v =
              y ||
              function (t) {
                return setTimeout(t, (S - 1e3 * T.time + 1) | 0);
              }),
            (m = 1),
            qk(2));
        },
        sleep: function sleep() {
          (y ? i.cancelAnimationFrame : clearTimeout)(g), (m = 0), (v = O);
        },
        lagSmoothing: function lagSmoothing(t, e) {
          (k = t || 1e8), (C = Math.min(e, k, 0));
        },
        fps: function fps(t) {
          (D = 1e3 / (t || 240)), (S = 1e3 * T.time + D);
        },
        add: function add(t) {
          z.indexOf(t) < 0 && z.push(t), Pt();
        },
        remove: function remove(t) {
          var e;
          ~(e = z.indexOf(t)) && z.splice(e, 1) && e <= w && w--;
        },
        _listeners: (z = []),
      })),
    Pt = function _wake() {
      return !m && At.wake();
    },
    Dt = {},
    St = /^[\d.\-M][\d.\-,\s]/,
    zt = /["']/g,
    Ft = function _invertEase(e) {
      return function (t) {
        return 1 - e(1 - t);
      };
    },
    Rt = function _parseEase(t, e) {
      return (t && (o(t) ? t : Dt[t] || zb(t))) || e;
    };
  function qk(t) {
    var e,
      r,
      i,
      n,
      a = x() - P,
      s = !0 === t;
    if (
      (k < a && (A += a - C),
      (0 < (e = (i = (P += a) - A) - S) || s) &&
        ((n = ++T.frame),
        (b = i - 1e3 * T.time),
        (T.time = i /= 1e3),
        (S += e + (D <= e ? 4 : D - e)),
        (r = 1)),
      s || (g = v(qk)),
      r)
    )
      for (w = 0; w < z.length; w++) z[w](i, b, n, t);
  }
  function Tl(t) {
    return t < R
      ? F * t * t
      : t < 0.7272727272727273
      ? F * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? F * (t -= 2.25 / 2.75) * t + 0.9375
      : F * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  _("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    Db(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5
          ? Math.pow(2 * t, r) / 2
          : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (Dt.Linear.easeNone = Dt.none = Dt.Linear.easeIn),
    Db("Elastic", Fb("in"), Fb("out"), Fb()),
    (F = 7.5625),
    (R = 1 / 2.75),
    Db(
      "Bounce",
      function (t) {
        return 1 - Tl(1 - t);
      },
      Tl
    ),
    Db("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    Db("Circ", function (t) {
      return -(J(1 - t * t) - 1);
    }),
    Db("Sine", function (t) {
      return 1 === t ? 1 : 1 - Q(t * X);
    }),
    Db("Back", Gb("in"), Gb("out"), Gb()),
    (Dt.SteppedEase =
      Dt.steps =
      ot.SteppedEase =
        {
          config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
            return function (t) {
              return (((i * yt(0, 0.99999999, t)) | 0) + n) * r;
            };
          },
        }),
    (I.ease = Dt["quad.out"]),
    _(
      "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
      function (t) {
        return (ct += t + "," + t + "Params,");
      }
    );
  var Et,
    It = function GSCache(t, e) {
      (this.id = G++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : $),
        (this.set = e ? e.getSetter : Qt);
    },
    Lt =
      (((Et = Animation.prototype).delay = function delay(t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (Et.duration = function duration(t) {
        return arguments.length
          ? this.totalDuration(
              0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (Et.totalDuration = function totalDuration(t) {
        return arguments.length
          ? ((this._dirty = 0),
            Fa(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (Et.totalTime = function totalTime(t, e) {
        if ((Pt(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (ya(this, t); r.parent; )
            r.parent._time !==
              r._start +
                (0 <= r._ts
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) ||
              (this._ts < 0 && 0 < t) ||
              (!this._tDur && !t)) &&
            Aa(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === U) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), ea(this, t, e)),
          this
        );
      }),
      (Et.time = function time(t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + ua(this)) % this._dur ||
                (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (Et.totalProgress = function totalProgress(t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (Et.progress = function progress(t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                ua(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (Et.iteration = function iteration(t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? gt(this._tTime, r) + 1
          : 1;
      }),
      (Et.timeScale = function timeScale(t) {
        if (!arguments.length) return this._rts === -U ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? wa(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -U ? 0 : this._rts),
          (function _recacheAncestors(t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this.totalTime(yt(-this._delay, this._tDur, e), !0))
        );
      }),
      (Et.paused = function paused(t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Pt(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      (this._tTime -= U) &&
                      Math.abs(this._zTime) !== U
                  ))),
            this)
          : this._ps;
      }),
      (Et.startTime = function startTime(t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            !e || (!e._sort && this.parent) || Aa(e, this, t - this._delay),
            this
          );
        }
        return this._start;
      }),
      (Et.endTime = function endTime(t) {
        return (
          this._start +
          (s(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
        );
      }),
      (Et.rawTime = function rawTime(t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? wa(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (Et.globalTime = function globalTime(t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
          (r = e._start + r / (e._ts || 1)), (e = e._dp);
        return r;
      }),
      (Et.repeat = function repeat(t) {
        return arguments.length ? ((this._repeat = t), Ga(this)) : this._repeat;
      }),
      (Et.repeatDelay = function repeatDelay(t) {
        return arguments.length ? ((this._rDelay = t), Ga(this)) : this._rDelay;
      }),
      (Et.yoyo = function yoyo(t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (Et.seek = function seek(t, e) {
        return this.totalTime(Ia(this, t), s(e));
      }),
      (Et.restart = function restart(t, e) {
        return this.play().totalTime(t ? -this._delay : 0, s(e));
      }),
      (Et.play = function play(t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (Et.reverse = function reverse(t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (Et.pause = function pause(t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (Et.resume = function resume() {
        return this.paused(!1);
      }),
      (Et.reversed = function reversed(t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -U : 0)),
            this)
          : this._rts < 0;
      }),
      (Et.invalidate = function invalidate() {
        return (this._initted = 0), (this._zTime = -U), this;
      }),
      (Et.isActive = function isActive() {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= r &&
            t < this.endTime(!0) - U
          )
        );
      }),
      (Et.eventCallback = function eventCallback(t, e, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (e
              ? ((i[t] = e),
                r && (i[t + "Params"] = r),
                "onUpdate" === t && (this._onUpdate = e))
              : delete i[t],
            this)
          : i[t];
      }),
      (Et.then = function then(t) {
        var i = this;
        return new Promise(function (e) {
          function jn() {
            var t = i.then;
            (i.then = null),
              o(r) && (r = r(i)) && (r.then || r === i) && (i.then = t),
              e(r),
              (i.then = t);
          }
          var r = o(t) ? t : ga;
          (i._initted && 1 === i.totalProgress() && 0 <= i._ts) ||
          (!i._tTime && i._ts < 0)
            ? jn()
            : (i._prom = jn);
        });
      }),
      (Et.kill = function kill() {
        fb(this);
      }),
      Animation);
  function Animation(t, e) {
    var r = t.parent || E;
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0),
        (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      Fa(this, +t.duration, 1, 1),
      (this.data = t.data),
      m || At.wake(),
      r && Aa(r, this, e || 0 === e ? e : r._time, 1),
      t.reversed && this.reverse(),
      t.paused && this.paused(!0);
  }
  ha(Lt.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -U,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Bt = (function (i) {
    function Timeline(t, e) {
      var r;
      return (
        void 0 === t && (t = {}),
        ((r = i.call(this, t, e) || this).labels = {}),
        (r.smoothChildTiming = !!t.smoothChildTiming),
        (r.autoRemoveChildren = !!t.autoRemoveChildren),
        (r._sort = s(t.sortChildren)),
        r.parent && za(r.parent, _assertThisInitialized(r)),
        t.scrollTrigger && Ba(_assertThisInitialized(r), t.scrollTrigger),
        r
      );
    }
    _inheritsLoose(Timeline, i);
    var t = Timeline.prototype;
    return (
      (t.to = function to(t, e, r, i) {
        return new Xt(t, ca(arguments, 0, this), Ia(this, p(e) ? i : r)), this;
      }),
      (t.from = function from(t, e, r, i) {
        return new Xt(t, ca(arguments, 1, this), Ia(this, p(e) ? i : r)), this;
      }),
      (t.fromTo = function fromTo(t, e, r, i, n) {
        return new Xt(t, ca(arguments, 2, this), Ia(this, p(e) ? n : i)), this;
      }),
      (t.set = function set(t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          ma(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new Xt(t, e, Ia(this, r), 1),
          this
        );
      }),
      (t.call = function call(t, e, r) {
        return Aa(this, Xt.delayedCall(0, t, e), Ia(this, r));
      }),
      (t.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = a),
          (r.onCompleteParams = s),
          (r.parent = this),
          new Xt(t, r, Ia(this, n)),
          this
        );
      }),
      (t.staggerFrom = function staggerFrom(t, e, r, i, n, a, o) {
        return (
          (r.runBackwards = 1),
          (ma(r).immediateRender = s(r.immediateRender)),
          this.staggerTo(t, e, r, i, n, a, o)
        );
      }),
      (t.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, o, u) {
        return (
          (i.startAt = r),
          (ma(i).immediateRender = s(i.immediateRender)),
          this.staggerTo(t, e, i, n, a, o, u)
        );
      }),
      (t.render = function render(t, e, r) {
        var i,
          n,
          a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          p,
          _,
          c = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== E && m - U < t && 0 <= t ? m : t < U ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (v !== this._tTime || r || y) {
          if (
            (c !== this._time &&
              g &&
              ((v += this._time - c), (t += this._time - c)),
            (i = v),
            (f = this._start),
            (u = !(l = this._ts)),
            y && (g || (c = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat &&
              ((p = this._yoyo),
              (o = g + this._rDelay),
              (i = aa(v % o)),
              v === m
                ? ((s = this._repeat), (i = g))
                : ((s = ~~(v / o)) && s === v / o && ((i = g), s--),
                  g < i && (i = g)),
              (d = gt(this._tTime, o)),
              !c && this._tTime && d !== s && (d = s),
              p && 1 & s && ((i = g - i), (_ = 1)),
              s !== d && !this._lock))
          ) {
            var T = p && 1 & d,
              b = T === (p && 1 & s);
            if (
              (s < d && (T = !T),
              (c = T ? 0 : g),
              (this._lock = 1),
              (this.render(c || (_ ? 0 : aa(s * o)), e, !g)._lock = 0),
              !e && this.parent && xt(this, "onRepeat"),
              this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
              c !== this._time || u != !this._ts)
            )
              return this;
            if (
              ((g = this._dur),
              (m = this._tDur),
              b &&
                ((this._lock = 2),
                (c = T ? g : -1e-4),
                this.render(c, !0),
                this.vars.repeatRefresh && !_ && this.invalidate()),
              (this._lock = 0),
              !this._ts && !u)
            )
              return this;
            Bb(this, _);
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function _findNextPauseTween(t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start > e)
                      return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start < e)
                      return i;
                    i = i._prev;
                  }
              })(this, aa(c), aa(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !l),
            this._initted ||
              ((this._onUpdate = this.vars.onUpdate),
              (this._initted = 1),
              (this._zTime = t)),
            c || !i || e || xt(this, "onStart"),
            c <= i && 0 <= t)
          )
            for (n = this._first; n; ) {
              if (
                ((a = n._next), (n._act || i >= n._start) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = -U);
                  break;
                }
              }
              n = a;
            }
          else {
            n = this._last;
            for (var w = t < 0 ? t : i; n; ) {
              if (
                ((a = n._prev), (n._act || w <= n._end) && n._ts && h !== n)
              ) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (w - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) +
                          (w - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), a && (v += this._zTime = w ? -U : U);
                  break;
                }
              }
              n = a;
            }
          }
          if (
            h &&
            !e &&
            (this.pause(),
            (h.render(c <= i ? 0 : -U)._zTime = c <= i ? 1 : -1),
            this._ts)
          )
            return (this._start = f), xa(this), this.render(t, e, r);
          this._onUpdate && !e && xt(this, "onUpdate", !0),
            ((v === m && m >= this.totalDuration()) || (!v && c)) &&
              ((f !== this._start && Math.abs(l) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) ||
                  !((v === m && 0 < this._ts) || (!v && this._ts < 0)) ||
                  qa(this, 1),
                e ||
                  (t < 0 && !c) ||
                  (!v && !c) ||
                  (xt(this, v === m ? "onComplete" : "onReverseComplete", !0),
                  !this._prom ||
                    (v < m && 0 < this.timeScale()) ||
                    this._prom())));
        }
        return this;
      }),
      (t.add = function add(t, e) {
        var r = this;
        if ((p(e) || (e = Ia(this, e)), !(t instanceof Lt))) {
          if (tt(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (n(t)) return this.addLabel(t, e);
          if (!o(t)) return this;
          t = Xt.delayedCall(0, t);
        }
        return this !== t ? Aa(this, t, e) : this;
      }),
      (t.getChildren = function getChildren(t, e, r, i) {
        void 0 === t && (t = !0),
          void 0 === e && (e = !0),
          void 0 === r && (r = !0),
          void 0 === i && (i = -B);
        for (var n = [], a = this._first; a; )
          a._start >= i &&
            (a instanceof Xt
              ? e && n.push(a)
              : (r && n.push(a),
                t && n.push.apply(n, a.getChildren(!0, e, r)))),
            (a = a._next);
        return n;
      }),
      (t.getById = function getById(t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
          if (e[r].vars.id === t) return e[r];
      }),
      (t.remove = function remove(t) {
        return n(t)
          ? this.removeLabel(t)
          : o(t)
          ? this.killTweensOf(t)
          : (pa(this, t),
            t === this._recent && (this._recent = this._last),
            ra(this));
      }),
      (t.totalTime = function totalTime(t, e) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = aa(
                At.time -
                  (0 < this._ts
                    ? t / this._ts
                    : (this.totalDuration() - t) / -this._ts)
              )),
            i.prototype.totalTime.call(this, t, e),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (t.addLabel = function addLabel(t, e) {
        return (this.labels[t] = Ia(this, e)), this;
      }),
      (t.removeLabel = function removeLabel(t) {
        return delete this.labels[t], this;
      }),
      (t.addPause = function addPause(t, e, r) {
        var i = Xt.delayedCall(0, e || O, r);
        return (
          (i.data = "isPause"), (this._hasPause = 1), Aa(this, i, Ia(this, t))
        );
      }),
      (t.removePause = function removePause(t) {
        var e = this._first;
        for (t = Ia(this, t); e; )
          e._start === t && "isPause" === e.data && qa(e), (e = e._next);
      }),
      (t.killTweensOf = function killTweensOf(t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; )
          qt !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (t.getTweensOf = function getTweensOf(t, e) {
        for (var r, i = [], n = bt(t), a = this._first, s = p(e); a; )
          a instanceof Xt
            ? ba(a._targets, n) &&
              (s
                ? (!qt || (a._initted && a._ts)) &&
                  a.globalTime(0) <= e &&
                  a.globalTime(a.totalDuration()) > e
                : !e || a.isActive()) &&
              i.push(a)
            : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
            (a = a._next);
        return i;
      }),
      (t.tweenTo = function tweenTo(t, e) {
        e = e || {};
        var r = this,
          i = Ia(r, t),
          n = e.startAt,
          a = e.onStart,
          s = e.onStartParams,
          o = Xt.to(
            r,
            ha(e, {
              ease: "none",
              lazy: !1,
              time: i,
              overwrite: "auto",
              duration:
                e.duration ||
                Math.abs(
                  (i - (n && "time" in n ? n.time : r._time)) / r.timeScale()
                ) ||
                U,
              onStart: function onStart() {
                r.pause();
                var t = e.duration || Math.abs((i - r._time) / r.timeScale());
                o._dur !== t && Fa(o, t, 0, 1).render(o._time, !0, !0),
                  a && a.apply(o, s || []);
              },
            })
          );
        return o;
      }),
      (t.tweenFromTo = function tweenFromTo(t, e, r) {
        return this.tweenTo(e, ha({ startAt: { time: Ia(this, t) } }, r));
      }),
      (t.recent = function recent() {
        return this._recent;
      }),
      (t.nextLabel = function nextLabel(t) {
        return void 0 === t && (t = this._time), db(this, Ia(this, t));
      }),
      (t.previousLabel = function previousLabel(t) {
        return void 0 === t && (t = this._time), db(this, Ia(this, t), 1);
      }),
      (t.currentLabel = function currentLabel(t) {
        return arguments.length
          ? this.seek(t, !0)
          : this.previousLabel(this._time + U);
      }),
      (t.shiftChildren = function shiftChildren(t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, a = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in a) a[i] >= r && (a[i] += t);
        return ra(this);
      }),
      (t.invalidate = function invalidate() {
        var t = this._first;
        for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
        return i.prototype.invalidate.call(this);
      }),
      (t.clear = function clear(t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; )
          (e = r._next), this.remove(r), (r = e);
        return (
          (this._time = this._tTime = this._pTime = 0),
          t && (this.labels = {}),
          ra(this)
        );
      }),
      (t.totalDuration = function totalDuration(t) {
        var e,
          r,
          i,
          n = 0,
          a = this,
          s = a._last,
          o = B;
        if (arguments.length)
          return a.timeScale(
            (a._repeat < 0 ? a.duration() : a.totalDuration()) /
              (a.reversed() ? -t : t)
          );
        if (a._dirty) {
          for (i = a.parent; s; )
            (e = s._prev),
              s._dirty && s.totalDuration(),
              o < (r = s._start) && a._sort && s._ts && !a._lock
                ? ((a._lock = 1), (Aa(a, s, r - s._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                s._ts &&
                ((n -= r),
                ((!i && !a._dp) || (i && i.smoothChildTiming)) &&
                  ((a._start += r / a._ts), (a._time -= r), (a._tTime -= r)),
                a.shiftChildren(-r, !1, -Infinity),
                (o = 0)),
              s._end > n && s._ts && (n = s._end),
              (s = e);
          Fa(a, a === E && a._time > n ? a._time : n, 1, 1), (a._dirty = 0);
        }
        return a._tDur;
      }),
      (Timeline.updateRoot = function updateRoot(t) {
        if ((E._ts && (ea(E, wa(t, E)), (d = At.frame)), At.frame >= pt)) {
          pt += j.autoSleep || 120;
          var e = E._first;
          if ((!e || !e._ts) && j.autoSleep && At._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || At.sleep();
          }
        }
      }),
      Timeline
    );
  })(Lt);
  ha(Bt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  function Nb(t, e, i, a, s, u) {
    var h, l, f, d;
    if (
      ft[t] &&
      !1 !==
        (h = new ft[t]()).init(
          s,
          h.rawVars
            ? e[t]
            : (function _processVars(t, e, i, a, s) {
                if (
                  (o(t) && (t = jt(t, s, e, i, a)),
                  !r(t) || (t.style && t.nodeType) || tt(t) || H(t))
                )
                  return n(t) ? jt(t, s, e, i, a) : t;
                var u,
                  h = {};
                for (u in t) h[u] = jt(t[u], s, e, i, a);
                return h;
              })(e[t], a, s, u, i),
          i,
          a,
          u
        ) &&
      ((i._pt = l = new ie(i._pt, s, t, 0, 1, h.render, h, 0, h.priority)),
      i !== c)
    )
      for (f = i._ptLookup[i._targets.indexOf(s)], d = h._props.length; d--; )
        f[h._props[d]] = l;
    return h;
  }
  var qt,
    Yt = function _addPropTween(t, e, r, i, a, s, u, h, l) {
      o(i) && (i = i(a || 0, t, s));
      var f,
        d = t[e],
        p =
          "get" !== r
            ? r
            : o(d)
            ? l
              ? t[
                  e.indexOf("set") || !o(t["get" + e.substr(3)])
                    ? e
                    : "get" + e.substr(3)
                ](l)
              : t[e]()
            : d,
        _ = o(d) ? (l ? Jt : Zt) : Gt;
      if (
        (n(i) &&
          (~i.indexOf("random(") && (i = ab(i)),
          "=" === i.charAt(1) &&
            (i =
              parseFloat(p) +
              parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
              (La(p) || 0))),
        p !== i)
      )
        return isNaN(p * i)
          ? (d || e in t || L(e, i),
            function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o,
                u,
                h,
                l,
                f,
                d,
                p,
                _,
                c = new ie(this._pt, t, e, 0, 1, Ht, null, n),
                m = 0,
                g = 0;
              for (
                c.b = r,
                  c.e = i,
                  r += "",
                  (p = ~(i += "").indexOf("random(")) && (i = ab(i)),
                  a && (a((_ = [r, i]), t, e), (r = _[0]), (i = _[1])),
                  u = r.match(nt) || [];
                (o = nt.exec(i));

              )
                (l = o[0]),
                  (f = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === f.substr(-5) && (h = 1),
                  l !== u[g++] &&
                    ((d = parseFloat(u[g - 1]) || 0),
                    (c._pt = {
                      _next: c._pt,
                      p: f || 1 === g ? f : ",",
                      s: d,
                      c:
                        "=" === l.charAt(1)
                          ? parseFloat(l.substr(2)) *
                            ("-" === l.charAt(0) ? -1 : 1)
                          : parseFloat(l) - d,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = nt.lastIndex));
              return (
                (c.c = m < i.length ? i.substring(m, i.length) : ""),
                (c.fp = s),
                (at.test(i) || p) && (c.e = 0),
                (this._pt = c)
              );
            }.call(this, t, e, p, i, _, h || j.stringFilter, l))
          : ((f = new ie(
              this._pt,
              t,
              e,
              +p || 0,
              i - (p || 0),
              "boolean" == typeof d ? $t : Wt,
              0,
              _
            )),
            l && (f.fp = l),
            u && f.modifier(u, this, t),
            (this._pt = f));
    },
    Nt = function _initTween(t, e) {
      var r,
        i,
        n,
        a,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        _,
        c,
        m = t.vars,
        g = m.ease,
        v = m.startAt,
        y = m.immediateRender,
        T = m.lazy,
        b = m.onUpdate,
        w = m.onUpdateParams,
        x = m.callbackScope,
        k = m.runBackwards,
        O = m.yoyoEase,
        M = m.keyframes,
        C = m.autoRevert,
        A = t._dur,
        P = t._startAt,
        D = t._targets,
        S = t.parent,
        z = S && "nested" === S.data ? S.parent._targets : D,
        F = "auto" === t._overwrite,
        R = t.timeline;
      if (
        (!R || (M && g) || (g = "none"),
        (t._ease = Rt(g, I.ease)),
        (t._yEase = O ? Ft(Rt(!0 === O ? g : O, I.ease)) : 0),
        O &&
          t._yoyo &&
          !t._repeat &&
          ((O = t._yEase), (t._yEase = t._ease), (t._ease = O)),
        !R)
      ) {
        if (
          ((_ = (l = D[0] ? Z(D[0]).harness : 0) && m[l.prop]),
          (r = la(m, ut)),
          P && P.render(-1, !0).kill(),
          v)
        ) {
          if (
            (qa(
              (t._startAt = Xt.set(
                D,
                ha(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: S,
                    immediateRender: !0,
                    lazy: s(T),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: w,
                    callbackScope: x,
                    stagger: 0,
                  },
                  v
                )
              ))
            ),
            y)
          )
            if (0 < e) C || (t._startAt = 0);
            else if (A && !(e < 0 && P)) return void (e && (t._zTime = e));
        } else if (k && A)
          if (P) C || (t._startAt = 0);
          else if (
            (e && (y = !1),
            (n = ha(
              {
                overwrite: !1,
                data: "isFromStart",
                lazy: y && s(T),
                immediateRender: y,
                stagger: 0,
                parent: S,
              },
              r
            )),
            _ && (n[l.prop] = _),
            qa((t._startAt = Xt.set(D, n))),
            y)
          ) {
            if (!e) return;
          } else _initTween(t._startAt, U);
        for (
          t._pt = 0, T = (A && s(T)) || (T && !A), i = 0;
          i < D.length;
          i++
        ) {
          if (
            ((h = (o = D[i])._gsap || Y(D)[i]._gsap),
            (t._ptLookup[i] = d = {}),
            lt[h.id] && ht.length && da(),
            (p = z === D ? i : z.indexOf(o)),
            l &&
              !1 !== (f = new l()).init(o, _ || r, t, p, z) &&
              ((t._pt = a =
                new ie(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority)),
              f._props.forEach(function (t) {
                d[t] = a;
              }),
              f.priority && (u = 1)),
            !l || _)
          )
            for (n in r)
              ft[n] && (f = Nb(n, r, t, p, o, z))
                ? f.priority && (u = 1)
                : (d[n] = a =
                    Yt.call(t, o, n, "get", r[n], p, z, 0, m.stringFilter));
          t._op && t._op[i] && t.kill(o, t._op[i]),
            F &&
              t._pt &&
              ((qt = t),
              E.killTweensOf(o, d, t.globalTime(0)),
              (c = !t.parent),
              (qt = 0)),
            t._pt && T && (lt[h.id] = 1);
        }
        u && re(t), t._onInit && t._onInit(t);
      }
      (t._from = !R && !!m.runBackwards),
        (t._onUpdate = b),
        (t._initted = (!t._op || t._pt) && !c);
    },
    jt = function _parseFuncOrString(t, e, r, i, a) {
      return o(t)
        ? t.call(e, r, i, a)
        : n(t) && ~t.indexOf("random(")
        ? ab(t)
        : t;
    },
    Ut = ct + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Vt = (Ut + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    Xt = (function (S) {
      function Tween(t, e, i, n) {
        var a;
        "number" == typeof e && ((i.duration = e), (e = i), (i = null));
        var o,
          h,
          l,
          f,
          d,
          _,
          c,
          m,
          g = (a = S.call(this, n ? e : ma(e), i) || this).vars,
          v = g.duration,
          y = g.delay,
          T = g.immediateRender,
          b = g.stagger,
          w = g.overwrite,
          x = g.keyframes,
          k = g.defaults,
          C = g.scrollTrigger,
          A = g.yoyoEase,
          P = a.parent,
          D = (tt(t) || H(t) ? p(t[0]) : "length" in e) ? [t] : bt(t);
        if (
          ((a._targets = D.length
            ? Y(D)
            : M(
                "GSAP target " + t + " not found. https://greensock.com",
                !j.nullTargetWarn
              ) || []),
          (a._ptLookup = []),
          (a._overwrite = w),
          x || b || u(v) || u(y))
        ) {
          if (
            ((e = a.vars),
            (o = a.timeline =
              new Bt({ data: "nested", defaults: k || {} })).kill(),
            (o.parent = _assertThisInitialized(a)),
            x)
          )
            ha(o.vars.defaults, { ease: "none" }),
              x.forEach(function (t) {
                return o.to(D, t, ">");
              });
          else {
            if (((f = D.length), (c = b ? Sa(b) : O), r(b)))
              for (d in b) ~Ut.indexOf(d) && ((m = m || {})[d] = b[d]);
            for (h = 0; h < f; h++) {
              for (d in ((l = {}), e)) Vt.indexOf(d) < 0 && (l[d] = e[d]);
              (l.stagger = 0),
                A && (l.yoyoEase = A),
                m && mt(l, m),
                (_ = D[h]),
                (l.duration = +jt(v, _assertThisInitialized(a), h, _, D)),
                (l.delay =
                  (+jt(y, _assertThisInitialized(a), h, _, D) || 0) - a._delay),
                !b &&
                  1 === f &&
                  l.delay &&
                  ((a._delay = y = l.delay), (a._start += y), (l.delay = 0)),
                o.to(_, l, c(h, _, D));
            }
            o.duration() ? (v = y = 0) : (a.timeline = 0);
          }
          v || a.duration((v = o.duration()));
        } else a.timeline = 0;
        return (
          !0 === w &&
            ((qt = _assertThisInitialized(a)), E.killTweensOf(D), (qt = 0)),
          P && za(P, _assertThisInitialized(a)),
          (T ||
            (!v &&
              !x &&
              a._start === aa(P._time) &&
              s(T) &&
              (function _hasNoPausedAncestors(t) {
                return !t || (t._ts && _hasNoPausedAncestors(t.parent));
              })(_assertThisInitialized(a)) &&
              "nested" !== P.data)) &&
            ((a._tTime = -U), a.render(Math.max(0, -y))),
          C && Ba(_assertThisInitialized(a), C),
          a
        );
      }
      _inheritsLoose(Tween, S);
      var t = Tween.prototype;
      return (
        (t.render = function render(t, e, r) {
          var i,
            n,
            a,
            s,
            o,
            u,
            h,
            l,
            f,
            d = this._time,
            p = this._tDur,
            _ = this._dur,
            c = p - U < t && 0 <= t ? p : t < U ? 0 : t;
          if (_) {
            if (
              c !== this._tTime ||
              !t ||
              r ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((i = c), (l = this.timeline), this._repeat)) {
                if (
                  ((s = _ + this._rDelay),
                  (i = aa(c % s)),
                  c === p
                    ? ((a = this._repeat), (i = _))
                    : ((a = ~~(c / s)) && a === c / s && ((i = _), a--),
                      _ < i && (i = _)),
                  (u = this._yoyo && 1 & a) && ((f = this._yEase), (i = _ - i)),
                  (o = gt(this._tTime, s)),
                  i === d && !r && this._initted)
                )
                  return this;
                a !== o &&
                  (l && this._yEase && Bb(l, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = r = 1),
                    (this.render(aa(s * a), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (Ca(this, t < 0 ? t : i, r, e))
                  return (this._tTime = 0), this;
                if (_ !== this._dur) return this.render(t, e, r);
              }
              for (
                this._tTime = c,
                  this._time = i,
                  !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                  this.ratio = h = (f || this._ease)(i / _),
                  this._from && (this.ratio = h = 1 - h),
                  !i || d || e || xt(this, "onStart"),
                  n = this._pt;
                n;

              )
                n.r(h, n.d), (n = n._next);
              (l && l.render(t < 0 ? t : !i && u ? -U : l._dur * h, e, r)) ||
                (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                  xt(this, "onUpdate")),
                this._repeat &&
                  a !== o &&
                  this.vars.onRepeat &&
                  !e &&
                  this.parent &&
                  xt(this, "onRepeat"),
                (c !== this._tDur && c) ||
                  this._tTime !== c ||
                  (t < 0 &&
                    this._startAt &&
                    !this._onUpdate &&
                    this._startAt.render(t, !0, !0),
                  (!t && _) ||
                    !(
                      (c === this._tDur && 0 < this._ts) ||
                      (!c && this._ts < 0)
                    ) ||
                    qa(this, 1),
                  e ||
                    (t < 0 && !d) ||
                    (!c && !d) ||
                    (xt(this, c === p ? "onComplete" : "onReverseComplete", !0),
                    !this._prom ||
                      (c < p && 0 < this.timeScale()) ||
                      this._prom()));
            }
          } else
            !(function _renderZeroDurationTween(t, e, r, i) {
              var n,
                a,
                s = t.ratio,
                o =
                  e < 0 ||
                  (!e && s && !t._start && t._zTime > U && !t._dp._lock) ||
                  ((t._ts < 0 || t._dp._ts < 0) &&
                    "isFromStart" !== t.data &&
                    "isStart" !== t.data)
                    ? 0
                    : 1,
                u = t._rDelay,
                h = 0;
              if (
                (u &&
                  t._repeat &&
                  ((h = yt(0, t._tDur, e)),
                  gt(h, u) !== (a = gt(t._tTime, u)) &&
                    ((s = 1 - o),
                    t.vars.repeatRefresh && t._initted && t.invalidate())),
                o !== s || i || t._zTime === U || (!e && t._zTime))
              ) {
                if (!t._initted && Ca(t, e, i, r)) return;
                for (
                  a = t._zTime,
                    t._zTime = e || (r ? U : 0),
                    r = r || (e && !a),
                    t.ratio = o,
                    t._from && (o = 1 - o),
                    t._time = 0,
                    t._tTime = h,
                    r || xt(t, "onStart"),
                    n = t._pt;
                  n;

                )
                  n.r(o, n.d), (n = n._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !r && xt(t, "onUpdate"),
                  h && t._repeat && !r && t.parent && xt(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === o &&
                    (o && qa(t, 1),
                    r ||
                      (xt(t, o ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, r);
          return this;
        }),
        (t.targets = function targets() {
          return this._targets;
        }),
        (t.invalidate = function invalidate() {
          return (
            (this._pt =
              this._op =
              this._startAt =
              this._onUpdate =
              this._act =
              this._lazy =
                0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            S.prototype.invalidate.call(this)
          );
        }),
        (t.kill = function kill(t, e) {
          if (
            (void 0 === e && (e = "all"),
            !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
          )
            return fb(this);
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, qt && !0 !== qt.vars.overwrite)
                ._first || fb(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                Fa(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var i,
            a,
            s,
            o,
            u,
            h,
            l,
            f = this._targets,
            d = t ? bt(t) : f,
            p = this._ptLookup,
            c = this._pt;
          if (
            (!e || "all" === e) &&
            (function _arraysMatch(t, e) {
              for (
                var r = t.length, i = r === e.length;
                i && r-- && t[r] === e[r];

              );
              return r < 0;
            })(f, d)
          )
            return "all" === e && (this._pt = 0), fb(this);
          for (
            i = this._op = this._op || [],
              "all" !== e &&
                (n(e) &&
                  ((u = {}),
                  _(e, function (t) {
                    return (u[t] = 1);
                  }),
                  (e = u)),
                (e = (function _addAliasesToVars(t, e) {
                  var r,
                    i,
                    n,
                    a,
                    s = t[0] ? Z(t[0]).harness : 0,
                    o = s && s.aliases;
                  if (!o) return e;
                  for (i in ((r = mt({}, e)), o))
                    if ((i in r))
                      for (n = (a = o[i].split(",")).length; n--; )
                        r[a[n]] = r[i];
                  return r;
                })(f, e))),
              l = f.length;
            l--;

          )
            if (~d.indexOf(f[l]))
              for (u in ((a = p[l]),
              "all" === e
                ? ((i[l] = e), (o = a), (s = {}))
                : ((s = i[l] = i[l] || {}), (o = e)),
              o))
                (h = a && a[u]) &&
                  (("kill" in h.d && !0 !== h.d.kill(u)) || pa(this, h, "_pt"),
                  delete a[u]),
                  "all" !== s && (s[u] = 1);
          return this._initted && !this._pt && c && fb(this), this;
        }),
        (Tween.to = function to(t, e, r) {
          return new Tween(t, e, r);
        }),
        (Tween.from = function from(t, e) {
          return new Tween(t, ca(arguments, 1));
        }),
        (Tween.delayedCall = function delayedCall(t, e, r, i) {
          return new Tween(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (Tween.fromTo = function fromTo(t, e, r) {
          return new Tween(t, ca(arguments, 2));
        }),
        (Tween.set = function set(t, e) {
          return (
            (e.duration = 0), e.repeatDelay || (e.repeat = 0), new Tween(t, e)
          );
        }),
        (Tween.killTweensOf = function killTweensOf(t, e, r) {
          return E.killTweensOf(t, e, r);
        }),
        Tween
      );
    })(Lt);
  ha(Xt.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    _("staggerTo,staggerFrom,staggerFromTo", function (r) {
      Xt[r] = function () {
        var t = new Bt(),
          e = Tt.call(arguments, 0);
        return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e);
      };
    });
  function Yb(t, e, r) {
    return t.setAttribute(e, r);
  }
  function ec(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  var Gt = function _setterPlain(t, e, r) {
      return (t[e] = r);
    },
    Zt = function _setterFunc(t, e, r) {
      return t[e](r);
    },
    Jt = function _setterFuncWithParam(t, e, r, i) {
      return t[e](i.fp, r);
    },
    Qt = function _getSetter(t, e) {
      return o(t[e]) ? Zt : q(t[e]) && t.setAttribute ? Yb : Gt;
    },
    Wt = function _renderPlain(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
    },
    $t = function _renderBoolean(t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    Ht = function _renderComplexString(t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; )
          (i =
            r.p +
            (r.m
              ? r.m(r.s + r.c * t)
              : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
            i),
            (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    Kt = function _renderPropTweens(t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    te = function _addPluginModifier(t, e, r, i) {
      for (var n, a = this._pt; a; )
        (n = a._next), a.p === i && a.modifier(t, e, r), (a = n);
    },
    ee = function _killPropTweensOf(t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next),
          (i.p === t && !i.op) || i.op === t
            ? pa(this, i, "_pt")
            : i.dep || (e = 1),
          (i = r);
      return !e;
    },
    re = function _sortPropTweensByPriority(t) {
      for (var e, r, i, n, a = t._pt; a; ) {
        for (e = a._next, r = i; r && r.pr > a.pr; ) r = r._next;
        (a._prev = r ? r._prev : n) ? (a._prev._next = a) : (i = a),
          (a._next = r) ? (r._prev = a) : (n = a),
          (a = e);
      }
      t._pt = i;
    },
    ie =
      ((PropTween.prototype.modifier = function modifier(t, e, r) {
        (this.mSet = this.mSet || this.set),
          (this.set = ec),
          (this.m = t),
          (this.mt = r),
          (this.tween = e);
      }),
      PropTween);
  function PropTween(t, e, r, i, n, a, s, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = a || Wt),
      (this.d = s || this),
      (this.set = o || Gt),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  _(
    ct +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (ut[t] = 1);
    }
  ),
    (ot.TweenMax = ot.TweenLite = Xt),
    (ot.TimelineLite = ot.TimelineMax = Bt),
    (E = new Bt({
      sortChildren: !1,
      defaults: I,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0,
    })),
    (j.stringFilter = qb);
  var ne = {
    registerPlugin: function registerPlugin() {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
        e[r] = arguments[r];
      e.forEach(function (t) {
        return (function _createPlugin(t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = o(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            n = {
              init: O,
              render: Kt,
              add: Yt,
              kill: ee,
              modifier: te,
              rawVars: 0,
            },
            a = {
              targetTest: 0,
              get: 0,
              getSetter: Qt,
              aliases: {},
              register: 0,
            };
          if ((Pt(), t !== i)) {
            if (ft[e]) return;
            ha(i, ha(la(t, n), a)),
              mt(i.prototype, mt(n, la(t, a))),
              (ft[(i.prop = e)] = i),
              t.targetTest && (_t.push(i), (ut[e] = 1)),
              (e =
                ("css" === e
                  ? "CSS"
                  : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          N(e, i), t.register && t.register(ae, i, ie);
        })(t);
      });
    },
    timeline: function timeline(t) {
      return new Bt(t);
    },
    getTweensOf: function getTweensOf(t, e) {
      return E.getTweensOf(t, e);
    },
    getProperty: function getProperty(i, t, e, r) {
      n(i) && (i = bt(i)[0]);
      var a = Z(i || {}).get,
        s = e ? ga : fa;
      return (
        "native" === e && (e = ""),
        i
          ? t
            ? s(((ft[t] && ft[t].get) || a)(i, t, e, r))
            : function (t, e, r) {
                return s(((ft[t] && ft[t].get) || a)(i, t, e, r));
              }
          : i
      );
    },
    quickSetter: function quickSetter(r, e, i) {
      if (1 < (r = bt(r)).length) {
        var n = r.map(function (t) {
            return ae.quickSetter(t, e, i);
          }),
          a = n.length;
        return function (t) {
          for (var e = a; e--; ) n[e](t);
        };
      }
      r = r[0] || {};
      var s = ft[e],
        o = Z(r),
        u = (o.harness && (o.harness.aliases || {})[e]) || e,
        h = s
          ? function (t) {
              var e = new s();
              (c._pt = 0),
                e.init(r, i ? t + i : t, c, 0, [r]),
                e.render(1, e),
                c._pt && Kt(1, c);
            }
          : o.set(r, u);
      return s
        ? h
        : function (t) {
            return h(r, u, i ? t + i : t, o, 1);
          };
    },
    isTweening: function isTweening(t) {
      return 0 < E.getTweensOf(t, !0).length;
    },
    defaults: function defaults(t) {
      return t && t.ease && (t.ease = Rt(t.ease, I.ease)), ka(I, t || {});
    },
    config: function config(t) {
      return ka(j, t || {});
    },
    registerEffect: function registerEffect(t) {
      var n = t.name,
        i = t.effect,
        e = t.plugins,
        a = t.defaults,
        s = t.extendTimeline;
      (e || "").split(",").forEach(function (t) {
        return (
          t && !ft[t] && !ot[t] && M(n + " effect requires " + t + " plugin.")
        );
      }),
        (dt[n] = function (t, e, r) {
          return i(bt(t), ha(e || {}, a), r);
        }),
        s &&
          (Bt.prototype[n] = function (t, e, i) {
            return this.add(dt[n](t, r(e) ? e : (i = e) && {}, this), i);
          });
    },
    registerEase: function registerEase(t, e) {
      Dt[t] = Rt(e);
    },
    parseEase: function parseEase(t, e) {
      return arguments.length ? Rt(t, e) : Dt;
    },
    getById: function getById(t) {
      return E.getById(t);
    },
    exportRoot: function exportRoot(t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Bt(t);
      for (
        n.smoothChildTiming = s(t.smoothChildTiming),
          E.remove(n),
          n._dp = 0,
          n._time = n._tTime = E._time,
          r = E._first;
        r;

      )
        (i = r._next),
          (!e &&
            !r._dur &&
            r instanceof Xt &&
            r.vars.onComplete === r._targets[0]) ||
            Aa(n, r, r._start - r._delay),
          (r = i);
      return Aa(E, n, 0), n;
    },
    utils: {
      wrap: function wrap(e, t, r) {
        var i = t - e;
        return tt(e)
          ? Za(e, wrap(0, e.length), t)
          : Ja(r, function (t) {
              return ((i + ((t - e) % i)) % i) + e;
            });
      },
      wrapYoyo: function wrapYoyo(e, t, r) {
        var i = t - e,
          n = 2 * i;
        return tt(e)
          ? Za(e, wrapYoyo(0, e.length - 1), t)
          : Ja(r, function (t) {
              return e + (i < (t = (n + ((t - e) % n)) % n || 0) ? n - t : t);
            });
      },
      distribute: Sa,
      random: Va,
      snap: Ua,
      normalize: function normalize(t, e, r) {
        return wt(t, e, 0, 1, r);
      },
      getUnit: La,
      clamp: function clamp(e, r, t) {
        return Ja(t, function (t) {
          return yt(e, r, t);
        });
      },
      splitColor: lb,
      toArray: bt,
      mapRange: wt,
      pipe: function pipe() {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
          e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function unitize(e, r) {
        return function (t) {
          return e(parseFloat(t)) + (r || La(t));
        };
      },
      interpolate: function interpolate(e, r, t, i) {
        var a = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!a) {
          var s,
            o,
            u,
            h,
            l,
            f = n(e),
            d = {};
          if ((!0 === t && (i = 1) && (t = null), f))
            (e = { p: e }), (r = { p: r });
          else if (tt(e) && !tt(r)) {
            for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++)
              u.push(interpolate(e[o - 1], e[o]));
            h--,
              (a = function func(t) {
                t *= h;
                var e = Math.min(l, ~~t);
                return u[e](t - e);
              }),
              (t = r);
          } else i || (e = mt(tt(e) ? [] : {}, e));
          if (!u) {
            for (s in r) Yt.call(d, e, s, "get", r[s]);
            a = function func(t) {
              return Kt(t, d) || (f ? e.p : e);
            };
          }
        }
        return Ja(t, a);
      },
      shuffle: Ra,
    },
    install: K,
    effects: dt,
    ticker: At,
    updateRoot: Bt.updateRoot,
    plugins: ft,
    globalTimeline: E,
    core: {
      PropTween: ie,
      globals: N,
      Tween: Xt,
      Timeline: Bt,
      Animation: Lt,
      getCache: Z,
      _removeLinkedListItem: pa,
    },
  };
  _("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (ne[t] = Xt[t]);
  }),
    At.add(Bt.updateRoot),
    (c = ne.to({}, { duration: 0 }));
  function ic(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
      r = r._next;
    return r;
  }
  function kc(t, a) {
    return {
      name: t,
      rawVars: 1,
      init: function init(t, i, e) {
        e._onInit = function (t) {
          var e, r;
          if (
            (n(i) &&
              ((e = {}),
              _(i, function (t) {
                return (e[t] = 1);
              }),
              (i = e)),
            a)
          ) {
            for (r in ((e = {}), i)) e[r] = a(i[r]);
            i = e;
          }
          !(function _addModifiers(t, e) {
            var r,
              i,
              n,
              a = t._targets;
            for (r in e)
              for (i = a.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = ic(n, r)),
                  n && n.modifier && n.modifier(e[r], t, a[i], r));
          })(t, i);
        };
      },
    };
  }
  var ae =
    ne.registerPlugin(
      {
        name: "attr",
        init: function init(t, e, r, i, n) {
          var a, s;
          for (a in e)
            (s = this.add(
              t,
              "setAttribute",
              (t.getAttribute(a) || 0) + "",
              e[a],
              i,
              n,
              0,
              0,
              a
            )) && (s.op = a),
              this._props.push(a);
        },
      },
      {
        name: "endArray",
        init: function init(t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        },
      },
      kc("roundProps", Ta),
      kc("modifiers"),
      kc("snap", Ua)
    ) || ne;
  (Xt.version = Bt.version = ae.version = "3.5.1"), (f = 1), t() && Pt();
  function Vc(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function Wc(t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  }
  function Xc(t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  }
  function Yc(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function Zc(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function $c(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function _c(t, e, r) {
    return (t.style[e] = r);
  }
  function ad(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function bd(t, e, r) {
    return (t._gsap[e] = r);
  }
  function cd(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function dd(t, e, r, i, n) {
    var a = t._gsap;
    (a.scaleX = a.scaleY = r), a.renderTransform(n, a);
  }
  function ed(t, e, r, i, n) {
    var a = t._gsap;
    (a[e] = r), a.renderTransform(n, a);
  }
  function id(t, e) {
    var r = oe.createElementNS
      ? oe.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : oe.createElement(t);
    return r.style ? r : oe.createElement(t);
  }
  function jd(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(Ie, "-$1").toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && jd(t, Ue(e) || e, 1)) ||
      ""
    );
  }
  function md() {
    (function _windowExists() {
      return "undefined" != typeof window;
    })() &&
      window.document &&
      ((se = window),
      (oe = se.document),
      (ue = oe.documentElement),
      (le = id("div") || { style: {} }),
      (fe = id("div")),
      (Ye = Ue(Ye)),
      (Ne = Ye + "Origin"),
      (le.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (pe = !!Ue("perspective")),
      (he = 1));
  }
  function nd(t) {
    var e,
      r = id(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      n = this.nextSibling,
      a = this.style.cssText;
    if (
      (ue.appendChild(r),
      r.appendChild(this),
      (this.style.display = "block"),
      t)
    )
      try {
        (e = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = nd);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return (
      i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
      ue.removeChild(r),
      (this.style.cssText = a),
      e
    );
  }
  function od(t, e) {
    for (var r = e.length; r--; )
      if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function pd(e) {
    var r;
    try {
      r = e.getBBox();
    } catch (t) {
      r = nd.call(e, !0);
    }
    return (
      (r && (r.width || r.height)) || e.getBBox === nd || (r = nd.call(e, !0)),
      !r || r.width || r.x || r.y
        ? r
        : {
            x: +od(e, ["x", "cx", "x1"]) || 0,
            y: +od(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  }
  function qd(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !pd(t));
  }
  function rd(t, e) {
    if (e) {
      var r = t.style;
      e in ze && e !== Ne && (e = Ye),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            r.removeProperty(e.replace(Ie, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function sd(t, e, r, i, n, a) {
    var s = new ie(t._pt, e, r, 0, 1, a ? $c : Zc);
    return ((t._pt = s).b = i), (s.e = n), t._props.push(r), s;
  }
  function ud(t, e, r, i) {
    var n,
      a,
      s,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      l = le.style,
      f = Le.test(e),
      d = "svg" === t.tagName.toLowerCase(),
      p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      _ = "px" === i,
      c = "%" === i;
    return i === h || !u || Ve[i] || Ve[h]
      ? u
      : ("px" === h || _ || (u = ud(t, e, r, "px")),
        (o = t.getCTM && qd(t)),
        c && (ze[e] || ~e.indexOf("adius"))
          ? aa((u / (o ? t.getBBox()[f ? "width" : "height"] : t[p])) * 100)
          : ((l[f ? "width" : "height"] = 100 + (_ ? h : i)),
            (a =
              ~e.indexOf("adius") || ("em" === i && t.appendChild && !d)
                ? t
                : t.parentNode),
            o && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== oe && a.appendChild) || (a = oe.body),
            (s = a._gsap) && c && s.width && f && s.time === At.time
              ? aa((u / s.width) * 100)
              : ((!c && "%" !== h) || (l.position = jd(t, "position")),
                a === t && (l.position = "static"),
                a.appendChild(le),
                (n = le[p]),
                a.removeChild(le),
                (l.position = "absolute"),
                f && c && (((s = Z(a)).time = At.time), (s.width = a[p])),
                aa(_ ? (n * u) / 100 : n && u ? (100 / n) * u : 0))));
  }
  function vd(t, e, r, i) {
    var n;
    return (
      he || md(),
      e in qe &&
        "transform" !== e &&
        ~(e = qe[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      ze[e] && "transform" !== e
        ? ((n = Qe(t, i)),
          (n =
            "transformOrigin" !== e
              ? n[e]
              : We(jd(t, Ne)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]) &&
            "auto" !== n &&
            !i &&
            !~(n + "").indexOf("calc(")) ||
          (n =
            (Ge[e] && Ge[e](t, e, r)) ||
            jd(t, e) ||
            $(t, e) ||
            ("opacity" === e ? 1 : 0)),
      r && !~(n + "").indexOf(" ") ? ud(t, e, n, r) + r : n
    );
  }
  function wd(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Ue(e, t, 1),
        a = n && jd(t, n, 1);
      a && a !== r
        ? ((e = n), (r = a))
        : "borderColor" === e && (r = jd(t, "borderTopColor"));
    }
    var s,
      o,
      u,
      h,
      l,
      f,
      d,
      p,
      _,
      c,
      m,
      g,
      v = new ie(this._pt, t.style, e, 0, 1, Ht),
      y = 0,
      T = 0;
    if (
      ((v.b = r),
      (v.e = i),
      (r += ""),
      "auto" === (i += "") &&
        ((t.style[e] = i), (i = jd(t, e) || i), (t.style[e] = r)),
      qb((s = [r, i])),
      (i = s[1]),
      (u = (r = s[0]).match(it) || []),
      (i.match(it) || []).length)
    ) {
      for (; (o = it.exec(i)); )
        (d = o[0]),
          (_ = i.substring(y, o.index)),
          l
            ? (l = (l + 1) % 5)
            : ("rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5)) || (l = 1),
          d !== (f = u[T++] || "") &&
            ((h = parseFloat(f) || 0),
            (m = f.substr((h + "").length)),
            (g = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) &&
              (d = d.substr(2)),
            (p = parseFloat(d)),
            (c = d.substr((p + "").length)),
            (y = it.lastIndex - c.length),
            c ||
              ((c = c || j.units[e] || m),
              y === i.length && ((i += c), (v.e += c))),
            m !== c && (h = ud(t, e, f, c) || 0),
            (v._pt = {
              _next: v._pt,
              p: _ || 1 === T ? _ : ",",
              s: h,
              c: g ? g * p : p - h,
              m: l && l < 4 ? Math.round : 0,
            }));
      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? $c : Zc;
    return at.test(i) && (v.e = 0), (this._pt = v);
  }
  function yd(t) {
    var e = t.split(" "),
      r = e[0],
      i = e[1] || "50%";
    return (
      ("top" !== r && "bottom" !== r && "left" !== i && "right" !== i) ||
        ((t = r), (r = i), (i = t)),
      (e[0] = Xe[r] || r),
      (e[1] = Xe[i] || i),
      e.join(" ")
    );
  }
  function zd(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        a = e.t,
        s = a.style,
        o = e.u,
        u = a._gsap;
      if ("all" === o || !0 === o) (s.cssText = ""), (i = 1);
      else
        for (n = (o = o.split(",")).length; -1 < --n; )
          (r = o[n]),
            ze[r] && ((i = 1), (r = "transformOrigin" === r ? Ne : Ye)),
            rd(a, r);
      i &&
        (rd(a, Ye),
        u &&
          (u.svg && a.removeAttribute("transform"), Qe(a, 1), (u.uncache = 1)));
    }
  }
  function Dd(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function Ed(t) {
    var e = jd(t, Ye);
    return Dd(e) ? Ze : e.substr(7).match(rt).map(aa);
  }
  function Fd(t, e) {
    var r,
      i,
      n,
      a,
      s = t._gsap || Z(t),
      o = t.style,
      u = Ed(t);
    return s.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (u = [
          (n = t.transform.baseVal.consolidate().matrix).a,
          n.b,
          n.c,
          n.d,
          n.e,
          n.f,
        ]).join(",")
        ? Ze
        : u
      : (u !== Ze ||
          t.offsetParent ||
          t === ue ||
          s.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) ||
            ((a = 1), (i = t.nextSibling), ue.appendChild(t)),
          (u = Ed(t)),
          n ? (o.display = n) : rd(t, "display"),
          a &&
            (i
              ? r.insertBefore(t, i)
              : r
              ? r.appendChild(t)
              : ue.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function Gd(t, e, r, i, n, a) {
    var s,
      o,
      u,
      h = t._gsap,
      l = n || Fd(t, !0),
      f = h.xOrigin || 0,
      d = h.yOrigin || 0,
      p = h.xOffset || 0,
      _ = h.yOffset || 0,
      c = l[0],
      m = l[1],
      g = l[2],
      v = l[3],
      y = l[4],
      T = l[5],
      b = e.split(" "),
      w = parseFloat(b[0]) || 0,
      x = parseFloat(b[1]) || 0;
    r
      ? l !== Ze &&
        (o = c * v - m * g) &&
        ((u = w * (-m / o) + x * (c / o) - (c * T - m * y) / o),
        (w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o),
        (x = u))
      : ((w = (s = pd(t)).x + (~b[0].indexOf("%") ? (w / 100) * s.width : w)),
        (x = s.y + (~(b[1] || b[0]).indexOf("%") ? (x / 100) * s.height : x))),
      i || (!1 !== i && h.smooth)
        ? ((y = w - f),
          (T = x - d),
          (h.xOffset = p + (y * c + T * g) - y),
          (h.yOffset = _ + (y * m + T * v) - T))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = x),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[Ne] = "0px 0px"),
      a &&
        (sd(a, h, "xOrigin", f, w),
        sd(a, h, "yOrigin", d, x),
        sd(a, h, "xOffset", p, h.xOffset),
        sd(a, h, "yOffset", _, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + x);
  }
  function Jd(t, e, r) {
    var i = La(e);
    return aa(parseFloat(e) + parseFloat(ud(t, "x", r + "px", i))) + i;
  }
  function Qd(t, e, r, i, a, s) {
    var o,
      u,
      h = 360,
      l = n(a),
      f = parseFloat(a) * (l && ~a.indexOf("rad") ? Fe : 1),
      d = s ? f * s : f - i,
      p = i + d + "deg";
    return (
      l &&
        ("short" === (o = a.split("_")[1]) &&
          (d %= h) !== d % 180 &&
          (d += d < 0 ? h : -h),
        "cw" === o && d < 0
          ? (d = ((d + 36e9) % h) - ~~(d / h) * h)
          : "ccw" === o && 0 < d && (d = ((d - 36e9) % h) - ~~(d / h) * h)),
      (t._pt = u = new ie(t._pt, e, r, i, d, Wc)),
      (u.e = p),
      (u.u = "deg"),
      t._props.push(r),
      u
    );
  }
  function Rd(t, e, r) {
    var i,
      n,
      a,
      s,
      o,
      u,
      h,
      l = fe.style,
      f = r._gsap;
    for (n in ((l.cssText =
      getComputedStyle(r).cssText + ";position:absolute;display:block;"),
    (l[Ye] = e),
    oe.body.appendChild(fe),
    (i = Qe(fe, 1)),
    ze))
      (a = f[n]) !== (s = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = La(a) !== (h = La(s)) ? ud(r, n, a, h) : parseFloat(a)),
        (u = parseFloat(s)),
        (t._pt = new ie(t._pt, f, n, o, u - o, Vc)),
        (t._pt.u = h || 0),
        t._props.push(n));
    oe.body.removeChild(fe);
  }
  var se,
    oe,
    ue,
    he,
    le,
    fe,
    de,
    pe,
    _e = Dt.Power0,
    ce = Dt.Power1,
    me = Dt.Power2,
    ge = Dt.Power3,
    ve = Dt.Power4,
    ye = Dt.Linear,
    Te = Dt.Quad,
    be = Dt.Cubic,
    we = Dt.Quart,
    xe = Dt.Quint,
    ke = Dt.Strong,
    Oe = Dt.Elastic,
    Me = Dt.Back,
    Ce = Dt.SteppedEase,
    Ae = Dt.Bounce,
    Pe = Dt.Sine,
    De = Dt.Expo,
    Se = Dt.Circ,
    ze = {},
    Fe = 180 / Math.PI,
    Re = Math.PI / 180,
    Ee = Math.atan2,
    Ie = /([A-Z])/g,
    Le = /(?:left|right|width|margin|padding|x)/i,
    Be = /[\s,\(]\S/,
    qe = {
      autoAlpha: "opacity,visibility",
      scale: "scaleX,scaleY",
      alpha: "opacity",
    },
    Ye = "transform",
    Ne = Ye + "Origin",
    je = "O,Moz,ms,Ms,Webkit".split(","),
    Ue = function _checkPropPrefix(t, e, r) {
      var i = (e || le).style,
        n = 5;
      if (t in i && !r) return t;
      for (
        t = t.charAt(0).toUpperCase() + t.substr(1);
        n-- && !(je[n] + t in i);

      );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? je[n] : "") + t;
    },
    Ve = { deg: 1, rad: 1, turn: 1 },
    Xe = {
      top: "0%",
      bottom: "100%",
      left: "0%",
      right: "100%",
      center: "50%",
    },
    Ge = {
      clearProps: function clearProps(t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var a = (t._pt = new ie(t._pt, e, r, 0, 0, zd));
          return (a.u = i), (a.pr = -10), (a.tween = n), t._props.push(r), 1;
        }
      },
    },
    Ze = [1, 0, 0, 1, 0, 0],
    Je = {},
    Qe = function _parseTransform(t, e) {
      var r = t._gsap || new It(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        a,
        s,
        o,
        u,
        h,
        l,
        f,
        d,
        p,
        _,
        c,
        m,
        g,
        v,
        y,
        T,
        b,
        w,
        x,
        k,
        O,
        M,
        C,
        A,
        P,
        D,
        S,
        z,
        F,
        R,
        E = t.style,
        I = r.scaleX < 0,
        L = "deg",
        B = jd(t, Ne) || "0";
      return (
        (i = n = a = u = h = l = f = d = p = 0),
        (s = o = 1),
        (r.svg = !(!t.getCTM || !qd(t))),
        (m = Fd(t, r.svg)),
        r.svg &&
          ((M = !r.uncache && t.getAttribute("data-svg-origin")),
          Gd(t, M || B, !!M || r.originIsAbsolute, !1 !== r.smooth, m)),
        (_ = r.xOrigin || 0),
        (c = r.yOrigin || 0),
        m !== Ze &&
          ((T = m[0]),
          (b = m[1]),
          (w = m[2]),
          (x = m[3]),
          (i = k = m[4]),
          (n = O = m[5]),
          6 === m.length
            ? ((s = Math.sqrt(T * T + b * b)),
              (o = Math.sqrt(x * x + w * w)),
              (u = T || b ? Ee(b, T) * Fe : 0),
              (f = w || x ? Ee(w, x) * Fe + u : 0) && (o *= Math.cos(f * Re)),
              r.svg && ((i -= _ - (_ * T + c * w)), (n -= c - (_ * b + c * x))))
            : ((R = m[6]),
              (z = m[7]),
              (P = m[8]),
              (D = m[9]),
              (S = m[10]),
              (F = m[11]),
              (i = m[12]),
              (n = m[13]),
              (a = m[14]),
              (h = (g = Ee(R, S)) * Fe),
              g &&
                ((M = k * (v = Math.cos(-g)) + P * (y = Math.sin(-g))),
                (C = O * v + D * y),
                (A = R * v + S * y),
                (P = k * -y + P * v),
                (D = O * -y + D * v),
                (S = R * -y + S * v),
                (F = z * -y + F * v),
                (k = M),
                (O = C),
                (R = A)),
              (l = (g = Ee(-w, S)) * Fe),
              g &&
                ((v = Math.cos(-g)),
                (F = x * (y = Math.sin(-g)) + F * v),
                (T = M = T * v - P * y),
                (b = C = b * v - D * y),
                (w = A = w * v - S * y)),
              (u = (g = Ee(b, T)) * Fe),
              g &&
                ((M = T * (v = Math.cos(g)) + b * (y = Math.sin(g))),
                (C = k * v + O * y),
                (b = b * v - T * y),
                (O = O * v - k * y),
                (T = M),
                (k = C)),
              h &&
                359.9 < Math.abs(h) + Math.abs(u) &&
                ((h = u = 0), (l = 180 - l)),
              (s = aa(Math.sqrt(T * T + b * b + w * w))),
              (o = aa(Math.sqrt(O * O + R * R))),
              (g = Ee(k, O)),
              (f = 2e-4 < Math.abs(g) ? g * Fe : 0),
              (p = F ? 1 / (F < 0 ? -F : F) : 0)),
          r.svg &&
            ((M = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !Dd(jd(t, Ye))),
            M && t.setAttribute("transform", M))),
        90 < Math.abs(f) &&
          Math.abs(f) < 270 &&
          (I
            ? ((s *= -1),
              (f += u <= 0 ? 180 : -180),
              (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (f += f <= 0 ? 180 : -180))),
        (r.x =
          ((r.xPercent =
            i && Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)
            ? 0
            : i) + "px"),
        (r.y =
          ((r.yPercent =
            n && Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)
            ? 0
            : n) + "px"),
        (r.z = a + "px"),
        (r.scaleX = aa(s)),
        (r.scaleY = aa(o)),
        (r.rotation = aa(u) + L),
        (r.rotationX = aa(h) + L),
        (r.rotationY = aa(l) + L),
        (r.skewX = f + L),
        (r.skewY = d + L),
        (r.transformPerspective = p + "px"),
        (r.zOrigin = parseFloat(B.split(" ")[2]) || 0) && (E[Ne] = We(B)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = j.force3D),
        (r.renderTransform = r.svg ? rr : pe ? er : $e),
        (r.uncache = 0),
        r
      );
    },
    We = function _firstTwoOnly(t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    $e = function _renderNon3DTransforms(t, e) {
      (e.z = "0px"),
        (e.rotationY = e.rotationX = "0deg"),
        (e.force3D = 0),
        er(t, e);
    },
    He = "0deg",
    Ke = "0px",
    tr = ") ",
    er = function _renderCSSTransforms(t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        a = r.x,
        s = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        l = r.rotationX,
        f = r.skewX,
        d = r.skewY,
        p = r.scaleX,
        _ = r.scaleY,
        c = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (l !== He || h !== He)) {
        var b,
          w = parseFloat(h) * Re,
          x = Math.sin(w),
          k = Math.cos(w);
        (w = parseFloat(l) * Re),
          (b = Math.cos(w)),
          (a = Jd(g, a, x * b * -v)),
          (s = Jd(g, s, -Math.sin(w) * -v)),
          (o = Jd(g, o, k * b * -v + v));
      }
      c !== Ke && (y += "perspective(" + c + tr),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!T && a === Ke && s === Ke && o === Ke) ||
          (y +=
            o !== Ke || T
              ? "translate3d(" + a + ", " + s + ", " + o + ") "
              : "translate(" + a + ", " + s + tr),
        u !== He && (y += "rotate(" + u + tr),
        h !== He && (y += "rotateY(" + h + tr),
        l !== He && (y += "rotateX(" + l + tr),
        (f === He && d === He) || (y += "skew(" + f + ", " + d + tr),
        (1 === p && 1 === _) || (y += "scale(" + p + ", " + _ + tr),
        (g.style[Ye] = y || "translate(0, 0)");
    },
    rr = function _renderSVGTransforms(t, e) {
      var r,
        i,
        n,
        a,
        s,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        l = o.x,
        f = o.y,
        d = o.rotation,
        p = o.skewX,
        _ = o.skewY,
        c = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        T = o.xOffset,
        b = o.yOffset,
        w = o.forceCSS,
        x = parseFloat(l),
        k = parseFloat(f);
      (d = parseFloat(d)),
        (p = parseFloat(p)),
        (_ = parseFloat(_)) && ((p += _ = parseFloat(_)), (d += _)),
        d || p
          ? ((d *= Re),
            (p *= Re),
            (r = Math.cos(d) * c),
            (i = Math.sin(d) * c),
            (n = Math.sin(d - p) * -m),
            (a = Math.cos(d - p) * m),
            p &&
              ((_ *= Re),
              (s = Math.tan(p - _)),
              (n *= s = Math.sqrt(1 + s * s)),
              (a *= s),
              _ &&
                ((s = Math.tan(_)), (r *= s = Math.sqrt(1 + s * s)), (i *= s))),
            (r = aa(r)),
            (i = aa(i)),
            (n = aa(n)),
            (a = aa(a)))
          : ((r = c), (a = m), (i = n = 0)),
        ((x && !~(l + "").indexOf("px")) || (k && !~(f + "").indexOf("px"))) &&
          ((x = ud(g, "x", l, "px")), (k = ud(g, "y", f, "px"))),
        (v || y || T || b) &&
          ((x = aa(x + v - (v * r + y * n) + T)),
          (k = aa(k + y - (v * i + y * a) + b))),
        (u || h) &&
          ((s = g.getBBox()),
          (x = aa(x + (u / 100) * s.width)),
          (k = aa(k + (h / 100) * s.height))),
        (s =
          "matrix(" +
          r +
          "," +
          i +
          "," +
          n +
          "," +
          a +
          "," +
          x +
          "," +
          k +
          ")"),
        g.setAttribute("transform", s),
        w && (g.style[Ye] = s);
    };
  _("padding,margin,Width,Radius", function (e, r) {
    var t = "Right",
      i = "Bottom",
      n = "Left",
      o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(
        function (t) {
          return r < 2 ? e + t : "border" + t + e;
        }
      );
    Ge[1 < r ? "border" + e : e] = function (e, t, r, i, n) {
      var a, s;
      if (arguments.length < 4)
        return (
          (a = o.map(function (t) {
            return vd(e, t, r);
          })),
          5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s
        );
      (a = (i + "").split(" ")),
        (s = {}),
        o.forEach(function (t, e) {
          return (s[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        e.init(t, s, n);
    };
  });
  var ir,
    nr,
    ar,
    sr = {
      name: "css",
      register: md,
      targetTest: function targetTest(t) {
        return t.style && t.nodeType;
      },
      init: function init(t, e, r, i, n) {
        var a,
          s,
          o,
          u,
          h,
          l,
          f,
          d,
          p,
          _,
          c,
          m,
          g,
          v,
          y,
          T = this._props,
          b = t.style;
        for (f in (he || md(), e))
          if (
            "autoRound" !== f &&
            ((s = e[f]), !ft[f] || !Nb(f, e, r, i, t, n))
          )
            if (
              ((h = typeof s),
              (l = Ge[f]),
              "function" === h && (h = typeof (s = s.call(r, i, t, n))),
              "string" === h && ~s.indexOf("random(") && (s = ab(s)),
              l)
            )
              l(this, t, f, s, r) && (y = 1);
            else if ("--" === f.substr(0, 2))
              this.add(
                b,
                "setProperty",
                getComputedStyle(t).getPropertyValue(f) + "",
                s + "",
                i,
                n,
                0,
                0,
                f
              );
            else if ("undefined" !== h) {
              if (
                ((a = vd(t, f)),
                (u = parseFloat(a)),
                (_ =
                  "string" === h && "=" === s.charAt(1)
                    ? +(s.charAt(0) + "1")
                    : 0) && (s = s.substr(2)),
                (o = parseFloat(s)),
                f in qe &&
                  ("autoAlpha" === f &&
                    (1 === u &&
                      "hidden" === vd(t, "visibility") &&
                      o &&
                      (u = 0),
                    sd(
                      this,
                      b,
                      "visibility",
                      u ? "inherit" : "hidden",
                      o ? "inherit" : "hidden",
                      !o
                    )),
                  "scale" !== f &&
                    "transform" !== f &&
                    ~(f = qe[f]).indexOf(",") &&
                    (f = f.split(",")[0])),
                (c = f in ze))
              )
                if (
                  (m ||
                    ((g = t._gsap).renderTransform || Qe(t),
                    (v = !1 !== e.smoothOrigin && g.smooth),
                    ((m = this._pt =
                      new ie(
                        this._pt,
                        b,
                        Ye,
                        0,
                        1,
                        g.renderTransform,
                        g,
                        0,
                        -1
                      )).dep = 1)),
                  "scale" === f)
                )
                  (this._pt = new ie(
                    this._pt,
                    g,
                    "scaleY",
                    g.scaleY,
                    _ ? _ * o : o - g.scaleY
                  )),
                    T.push("scaleY", f),
                    (f += "X");
                else {
                  if ("transformOrigin" === f) {
                    (s = yd(s)),
                      g.svg
                        ? Gd(t, s, 0, v, 0, this)
                        : ((p = parseFloat(s.split(" ")[2]) || 0) !==
                            g.zOrigin && sd(this, g, "zOrigin", g.zOrigin, p),
                          sd(this, b, f, We(a), We(s)));
                    continue;
                  }
                  if ("svgOrigin" === f) {
                    Gd(t, s, 1, v, 0, this);
                    continue;
                  }
                  if (f in Je) {
                    Qd(this, g, f, u, s, _);
                    continue;
                  }
                  if ("smoothOrigin" === f) {
                    sd(this, g, "smooth", g.smooth, s);
                    continue;
                  }
                  if ("force3D" === f) {
                    g[f] = s;
                    continue;
                  }
                  if ("transform" === f) {
                    Rd(this, s, t);
                    continue;
                  }
                }
              else f in b || (f = Ue(f) || f);
              if (
                c ||
                ((o || 0 === o) && (u || 0 === u) && !Be.test(s) && f in b)
              )
                (o = o || 0),
                  (d = (a + "").substr((u + "").length)) !==
                    (p = La(s) || (f in j.units ? j.units[f] : d)) &&
                    (u = ud(t, f, a, p)),
                  (this._pt = new ie(
                    this._pt,
                    c ? g : b,
                    f,
                    u,
                    _ ? _ * o : o - u,
                    "px" !== p || !1 === e.autoRound || c ? Vc : Yc
                  )),
                  (this._pt.u = p || 0),
                  d !== p && ((this._pt.b = a), (this._pt.r = Xc));
              else if (f in b) wd.call(this, t, f, a, s);
              else {
                if (!(f in t)) {
                  L(f, s);
                  continue;
                }
                this.add(t, f, t[f], s, i, n);
              }
              T.push(f);
            }
        y && re(this);
      },
      get: vd,
      aliases: qe,
      getSetter: function getSetter(t, e, r) {
        var i = qe[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in ze && e !== Ne && (t._gsap.x || vd(t, "x"))
            ? r && de === r
              ? "scale" === e
                ? cd
                : bd
              : (de = r || {}) && ("scale" === e ? dd : ed)
            : t.style && !q(t.style[e])
            ? _c
            : ~e.indexOf("-")
            ? ad
            : Qt(t, e)
        );
      },
      core: { _removeProperty: rd, _getMatrix: Fd },
    };
  (ae.utils.checkPrefix = Ue),
    (ar = _(
      (ir = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (nr = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        ze[t] = 1;
      }
    )),
    _(nr, function (t) {
      (j.units[t] = "deg"), (Je[t] = 1);
    }),
    (qe[ar[13]] = ir + "," + nr),
    _(
      "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
      function (t) {
        var e = t.split(":");
        qe[e[1]] = ar[e[0]];
      }
    ),
    _(
      "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
      function (t) {
        j.units[t] = "px";
      }
    ),
    ae.registerPlugin(sr);
  var or = ae.registerPlugin(sr) || ae,
    ur = or.core.Tween;
  (e.Back = Me),
    (e.Bounce = Ae),
    (e.CSSPlugin = sr),
    (e.Circ = Se),
    (e.Cubic = be),
    (e.Elastic = Oe),
    (e.Expo = De),
    (e.Linear = ye),
    (e.Power0 = _e),
    (e.Power1 = ce),
    (e.Power2 = me),
    (e.Power3 = ge),
    (e.Power4 = ve),
    (e.Quad = Te),
    (e.Quart = we),
    (e.Quint = xe),
    (e.Sine = Pe),
    (e.SteppedEase = Ce),
    (e.Strong = ke),
    (e.TimelineLite = Bt),
    (e.TimelineMax = Bt),
    (e.TweenLite = Xt),
    (e.TweenMax = ur),
    (e.default = or),
    (e.gsap = or);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/* CSSPlugin */

var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "plugins.CSSPlugin",
    ["plugins.TweenPlugin", "TweenLite"],
    function (a, b) {
      var c,
        d,
        e,
        f,
        g = function () {
          a.call(this, "css"),
            (this._overwriteProps.length = 0),
            (this.setRatio = g.prototype.setRatio);
        },
        h = _gsScope._gsDefine.globals,
        i = {},
        j = (g.prototype = new a("css"));
      (j.constructor = g),
        (g.version = "2.1.3"),
        (g.API = 2),
        (g.defaultTransformPerspective = 0),
        (g.defaultSkewType = "compensated"),
        (g.defaultSmoothOrigin = !0),
        (j = "px"),
        (g.suffixMap = {
          top: j,
          right: j,
          bottom: j,
          left: j,
          width: j,
          height: j,
          fontSize: j,
          padding: j,
          margin: j,
          perspective: j,
          lineHeight: "",
        });
      var k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
        t = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
        u = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
        v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi,
        w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
        x = /(?:\d|\-|\+|=|#|\.)*/g,
        y = /opacity *= *([^)]*)/i,
        z = /opacity:([^;]*)/i,
        A = /alpha\(opacity *=.+?\)/i,
        B = /^(rgb|hsl)/,
        C = /([A-Z])/g,
        D = /-([a-z])/gi,
        E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
        F = function (a, b) {
          return b.toUpperCase();
        },
        G = /(?:Left|Right|Width)/i,
        H = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
        I = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
        J = /,(?=[^\)]*(?:\(|$))/gi,
        K = /[\s,\(]/i,
        L = Math.PI / 180,
        M = 180 / Math.PI,
        N = {},
        O = { style: {} },
        P = _gsScope.document || {
          createElement: function () {
            return O;
          },
        },
        Q = function (a, b) {
          var c = P.createElementNS
            ? P.createElementNS(b || "http://www.w3.org/1999/xhtml", a)
            : P.createElement(a);
          return c.style ? c : P.createElement(a);
        },
        R = Q("div"),
        S = Q("img"),
        T = (g._internals = { _specialProps: i }),
        U = (_gsScope.navigator || {}).userAgent || "",
        V = (function () {
          var a = U.indexOf("Android"),
            b = Q("a");
          return (
            (m =
              -1 !== U.indexOf("Safari") &&
              -1 === U.indexOf("Chrome") &&
              (-1 === a || parseFloat(U.substr(a + 8, 2)) > 3)),
            (o = m && parseFloat(U.substr(U.indexOf("Version/") + 8, 2)) < 6),
            (n = -1 !== U.indexOf("Firefox")),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(U) ||
              /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(U)) &&
              (p = parseFloat(RegExp.$1)),
            b
              ? ((b.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(b.style.opacity))
              : !1
          );
        })(),
        W = function (a) {
          return y.test(
            "string" == typeof a
              ? a
              : (a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? parseFloat(RegExp.$1) / 100
            : 1;
        },
        X = function (a) {
          _gsScope.console && console.log(a);
        },
        Y = "",
        Z = "",
        $ = function (a, b) {
          b = b || R;
          var c,
            d,
            e = b.style;
          if (void 0 !== e[a]) return a;
          for (
            a = a.charAt(0).toUpperCase() + a.substr(1),
              c = ["O", "Moz", "ms", "Ms", "Webkit"],
              d = 5;
            --d > -1 && void 0 === e[c[d] + a];

          );
          return d >= 0
            ? ((Z = 3 === d ? "ms" : c[d]),
              (Y = "-" + Z.toLowerCase() + "-"),
              Z + a)
            : null;
        },
        _ =
          "undefined" != typeof window
            ? window
            : P.defaultView || { getComputedStyle: function () {} },
        aa = function (a) {
          return _.getComputedStyle(a);
        },
        ba = (g.getStyle = function (a, b, c, d, e) {
          var f;
          return V || "opacity" !== b
            ? (!d && a.style[b]
                ? (f = a.style[b])
                : (c = c || aa(a))
                ? (f =
                    c[b] ||
                    c.getPropertyValue(b) ||
                    c.getPropertyValue(b.replace(C, "-$1").toLowerCase()))
                : a.currentStyle && (f = a.currentStyle[b]),
              null == e ||
              (f && "none" !== f && "auto" !== f && "auto auto" !== f)
                ? f
                : e)
            : W(a);
        }),
        ca = (T.convertToPixels = function (a, c, d, e, f) {
          if ("px" === e || (!e && "lineHeight" !== c)) return d;
          if ("auto" === e || !d) return 0;
          var h,
            i,
            j,
            k = G.test(c),
            l = a,
            m = R.style,
            n = 0 > d,
            o = 1 === d;
          if ((n && (d = -d), o && (d *= 100), "lineHeight" !== c || e))
            if ("%" === e && -1 !== c.indexOf("border"))
              h = (d / 100) * (k ? a.clientWidth : a.clientHeight);
            else {
              if (
                ((m.cssText =
                  "border:0 solid red;position:" +
                  ba(a, "position") +
                  ";line-height:0;"),
                "%" !== e &&
                  l.appendChild &&
                  "v" !== e.charAt(0) &&
                  "rem" !== e)
              )
                m[k ? "borderLeftWidth" : "borderTopWidth"] = d + e;
              else {
                if (
                  ((l = a.parentNode || P.body),
                  -1 !== ba(l, "display").indexOf("flex") &&
                    (m.position = "absolute"),
                  (i = l._gsCache),
                  (j = b.ticker.frame),
                  i && k && i.time === j)
                )
                  return (i.width * d) / 100;
                m[k ? "width" : "height"] = d + e;
              }
              l.appendChild(R),
                (h = parseFloat(R[k ? "offsetWidth" : "offsetHeight"])),
                l.removeChild(R),
                k &&
                  "%" === e &&
                  g.cacheWidths !== !1 &&
                  ((i = l._gsCache = l._gsCache || {}),
                  (i.time = j),
                  (i.width = (h / d) * 100)),
                0 !== h || f || (h = ca(a, c, d, e, !0));
            }
          else
            (i = aa(a).lineHeight),
              (a.style.lineHeight = d),
              (h = parseFloat(aa(a).lineHeight)),
              (a.style.lineHeight = i);
          return o && (h /= 100), n ? -h : h;
        }),
        da = (T.calculateOffset = function (a, b, c) {
          if ("absolute" !== ba(a, "position", c)) return 0;
          var d = "left" === b ? "Left" : "Top",
            e = ba(a, "margin" + d, c);
          return (
            a["offset" + d] - (ca(a, b, parseFloat(e), e.replace(x, "")) || 0)
          );
        }),
        ea = function (a, b) {
          var c,
            d,
            e,
            f = {};
          if ((b = b || aa(a, null)))
            if ((c = b.length))
              for (; --c > -1; )
                (e = b[c]),
                  (-1 === e.indexOf("-transform") || Fa === e) &&
                    (f[e.replace(D, F)] = b.getPropertyValue(e));
            else
              for (c in b)
                (-1 === c.indexOf("Transform") || Ea === c) && (f[c] = b[c]);
          else if ((b = a.currentStyle || a.style))
            for (c in b)
              "string" == typeof c &&
                void 0 === f[c] &&
                (f[c.replace(D, F)] = b[c]);
          return (
            V || (f.opacity = W(a)),
            (d = Ta(a, b, !1)),
            (f.rotation = d.rotation),
            (f.skewX = d.skewX),
            (f.scaleX = d.scaleX),
            (f.scaleY = d.scaleY),
            (f.x = d.x),
            (f.y = d.y),
            Ha &&
              ((f.z = d.z),
              (f.rotationX = d.rotationX),
              (f.rotationY = d.rotationY),
              (f.scaleZ = d.scaleZ)),
            f.filters && delete f.filters,
            f
          );
        },
        fa = function (a, b, c, d, e) {
          var f,
            g,
            h,
            i = {},
            j = a.style;
          for (g in c)
            "cssText" !== g &&
              "length" !== g &&
              isNaN(g) &&
              (b[g] !== (f = c[g]) || (e && e[g])) &&
              -1 === g.indexOf("Origin") &&
              ("number" == typeof f || "string" == typeof f) &&
              ((i[g] =
                "auto" !== f || ("left" !== g && "top" !== g)
                  ? ("" !== f && "auto" !== f && "none" !== f) ||
                    "string" != typeof b[g] ||
                    "" === b[g].replace(w, "")
                    ? f
                    : 0
                  : da(a, g)),
              void 0 !== j[g] && (h = new ua(j, g, j[g], h)));
          if (d) for (g in d) "className" !== g && (i[g] = d[g]);
          return { difs: i, firstMPT: h };
        },
        ga = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
        ha = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
        ia = function (a, b, c) {
          if ("svg" === (a.nodeName + "").toLowerCase())
            return (c || aa(a))[b] || 0;
          if (a.getCTM && Qa(a)) return a.getBBox()[b] || 0;
          var d = parseFloat("width" === b ? a.offsetWidth : a.offsetHeight),
            e = ga[b],
            f = e.length;
          for (c = c || aa(a, null); --f > -1; )
            (d -= parseFloat(ba(a, "padding" + e[f], c, !0)) || 0),
              (d -= parseFloat(ba(a, "border" + e[f] + "Width", c, !0)) || 0);
          return d;
        },
        ja = function (a, b) {
          if ("contain" === a || "auto" === a || "auto auto" === a)
            return a + " ";
          (null == a || "" === a) && (a = "0 0");
          var c,
            d = a.split(" "),
            e =
              -1 !== a.indexOf("left")
                ? "0%"
                : -1 !== a.indexOf("right")
                ? "100%"
                : d[0],
            f =
              -1 !== a.indexOf("top")
                ? "0%"
                : -1 !== a.indexOf("bottom")
                ? "100%"
                : d[1];
          if (d.length > 3 && !b) {
            for (
              d = a.split(", ").join(",").split(","), a = [], c = 0;
              c < d.length;
              c++
            )
              a.push(ja(d[c]));
            return a.join(",");
          }
          return (
            null == f
              ? (f = "center" === e ? "50%" : "0")
              : "center" === f && (f = "50%"),
            ("center" === e ||
              (isNaN(parseFloat(e)) && -1 === (e + "").indexOf("="))) &&
              (e = "50%"),
            (a = e + " " + f + (d.length > 2 ? " " + d[2] : "")),
            b &&
              ((b.oxp = -1 !== e.indexOf("%")),
              (b.oyp = -1 !== f.indexOf("%")),
              (b.oxr = "=" === e.charAt(1)),
              (b.oyr = "=" === f.charAt(1)),
              (b.ox = parseFloat(e.replace(w, ""))),
              (b.oy = parseFloat(f.replace(w, ""))),
              (b.v = a)),
            b || a
          );
        },
        ka = function (a, b) {
          return (
            "function" == typeof a && (a = a(r, q)),
            "string" == typeof a && "=" === a.charAt(1)
              ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2))
              : parseFloat(a) - parseFloat(b) || 0
          );
        },
        la = function (a, b) {
          "function" == typeof a && (a = a(r, q));
          var c = "string" == typeof a && "=" === a.charAt(1);
          return (
            "string" == typeof a &&
              "v" === a.charAt(a.length - 2) &&
              (a =
                (c ? a.substr(0, 2) : 0) +
                window["inner" + ("vh" === a.substr(-2) ? "Height" : "Width")] *
                  (parseFloat(c ? a.substr(2) : a) / 100)),
            null == a
              ? b
              : c
              ? parseInt(a.charAt(0) + "1", 10) * parseFloat(a.substr(2)) + b
              : parseFloat(a) || 0
          );
        },
        ma = function (a, b, c, d) {
          var e,
            f,
            g,
            h,
            i,
            j = 1e-6;
          return (
            "function" == typeof a && (a = a(r, q)),
            null == a
              ? (h = b)
              : "number" == typeof a
              ? (h = a)
              : ((e = 360),
                (f = a.split("_")),
                (i = "=" === a.charAt(1)),
                (g =
                  (i
                    ? parseInt(a.charAt(0) + "1", 10) *
                      parseFloat(f[0].substr(2))
                    : parseFloat(f[0])) *
                    (-1 === a.indexOf("rad") ? 1 : M) -
                  (i ? 0 : b)),
                f.length &&
                  (d && (d[c] = b + g),
                  -1 !== a.indexOf("short") &&
                    ((g %= e),
                    g !== g % (e / 2) && (g = 0 > g ? g + e : g - e)),
                  -1 !== a.indexOf("_cw") && 0 > g
                    ? (g = ((g + 9999999999 * e) % e) - ((g / e) | 0) * e)
                    : -1 !== a.indexOf("ccw") &&
                      g > 0 &&
                      (g = ((g - 9999999999 * e) % e) - ((g / e) | 0) * e)),
                (h = b + g)),
            j > h && h > -j && (h = 0),
            h
          );
        },
        na = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          fuchsia: [255, 0, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0],
        },
        oa = function (a, b, c) {
          return (
            (a = 0 > a ? a + 1 : a > 1 ? a - 1 : a),
            (255 *
              (1 > 6 * a
                ? b + (c - b) * a * 6
                : 0.5 > a
                ? c
                : 2 > 3 * a
                ? b + (c - b) * (2 / 3 - a) * 6
                : b) +
              0.5) |
              0
          );
        },
        pa = (g.parseColor = function (a, b) {
          var c, d, e, f, g, h, i, j, k, l, m;
          if (a)
            if ("number" == typeof a) c = [a >> 16, (a >> 8) & 255, 255 & a];
            else {
              if (
                ("," === a.charAt(a.length - 1) &&
                  (a = a.substr(0, a.length - 1)),
                na[a])
              )
                c = na[a];
              else if ("#" === a.charAt(0))
                4 === a.length &&
                  ((d = a.charAt(1)),
                  (e = a.charAt(2)),
                  (f = a.charAt(3)),
                  (a = "#" + d + d + e + e + f + f)),
                  (a = parseInt(a.substr(1), 16)),
                  (c = [a >> 16, (a >> 8) & 255, 255 & a]);
              else if ("hsl" === a.substr(0, 3))
                if (((c = m = a.match(s)), b)) {
                  if (-1 !== a.indexOf("=")) return a.match(t);
                } else
                  (g = (Number(c[0]) % 360) / 360),
                    (h = Number(c[1]) / 100),
                    (i = Number(c[2]) / 100),
                    (e = 0.5 >= i ? i * (h + 1) : i + h - i * h),
                    (d = 2 * i - e),
                    c.length > 3 && (c[3] = Number(c[3])),
                    (c[0] = oa(g + 1 / 3, d, e)),
                    (c[1] = oa(g, d, e)),
                    (c[2] = oa(g - 1 / 3, d, e));
              else c = a.match(s) || na.transparent;
              (c[0] = Number(c[0])),
                (c[1] = Number(c[1])),
                (c[2] = Number(c[2])),
                c.length > 3 && (c[3] = Number(c[3]));
            }
          else c = na.black;
          return (
            b &&
              !m &&
              ((d = c[0] / 255),
              (e = c[1] / 255),
              (f = c[2] / 255),
              (j = Math.max(d, e, f)),
              (k = Math.min(d, e, f)),
              (i = (j + k) / 2),
              j === k
                ? (g = h = 0)
                : ((l = j - k),
                  (h = i > 0.5 ? l / (2 - j - k) : l / (j + k)),
                  (g =
                    j === d
                      ? (e - f) / l + (f > e ? 6 : 0)
                      : j === e
                      ? (f - d) / l + 2
                      : (d - e) / l + 4),
                  (g *= 60)),
              (c[0] = (g + 0.5) | 0),
              (c[1] = (100 * h + 0.5) | 0),
              (c[2] = (100 * i + 0.5) | 0)),
            c
          );
        }),
        qa = function (a, b) {
          var c,
            d,
            e,
            f = a.match(ra) || [],
            g = 0,
            h = "";
          if (!f.length) return a;
          for (c = 0; c < f.length; c++)
            (d = f[c]),
              (e = a.substr(g, a.indexOf(d, g) - g)),
              (g += e.length + d.length),
              (d = pa(d, b)),
              3 === d.length && d.push(1),
              (h +=
                e +
                (b
                  ? "hsla(" + d[0] + "," + d[1] + "%," + d[2] + "%," + d[3]
                  : "rgba(" + d.join(",")) +
                ")");
          return h + a.substr(g);
        },
        ra =
          "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
      for (j in na) ra += "|" + j + "\\b";
      (ra = new RegExp(ra + ")", "gi")),
        (g.colorStringFilter = function (a) {
          var b,
            c = a[0] + " " + a[1];
          ra.test(c) &&
            ((b = -1 !== c.indexOf("hsl(") || -1 !== c.indexOf("hsla(")),
            (a[0] = qa(a[0], b)),
            (a[1] = qa(a[1], b))),
            (ra.lastIndex = 0);
        }),
        b.defaultStringFilter || (b.defaultStringFilter = g.colorStringFilter);
      var sa = function (a, b, c, d) {
          if (null == a)
            return function (a) {
              return a;
            };
          var e,
            f = b ? (a.match(ra) || [""])[0] : "",
            g = a.split(f).join("").match(u) || [],
            h = a.substr(0, a.indexOf(g[0])),
            i = ")" === a.charAt(a.length - 1) ? ")" : "",
            j = -1 !== a.indexOf(" ") ? " " : ",",
            k = g.length,
            l = k > 0 ? g[0].replace(s, "") : "";
          return k
            ? (e = b
                ? function (a) {
                    var b, m, n, o;
                    if ("number" == typeof a) a += l;
                    else if (d && J.test(a)) {
                      for (
                        o = a.replace(J, "|").split("|"), n = 0;
                        n < o.length;
                        n++
                      )
                        o[n] = e(o[n]);
                      return o.join(",");
                    }
                    if (
                      ((b = (a.match(ra) || [f])[0]),
                      (m = a.split(b).join("").match(u) || []),
                      (n = m.length),
                      k > n--)
                    )
                      for (; ++n < k; ) m[n] = c ? m[((n - 1) / 2) | 0] : g[n];
                    return (
                      h +
                      m.join(j) +
                      j +
                      b +
                      i +
                      (-1 !== a.indexOf("inset") ? " inset" : "")
                    );
                  }
                : function (a) {
                    var b, f, m;
                    if ("number" == typeof a) a += l;
                    else if (d && J.test(a)) {
                      for (
                        f = a.replace(J, "|").split("|"), m = 0;
                        m < f.length;
                        m++
                      )
                        f[m] = e(f[m]);
                      return f.join(",");
                    }
                    if (
                      ((b = a.match("," === j ? u : v) || []),
                      (m = b.length),
                      k > m--)
                    )
                      for (; ++m < k; ) b[m] = c ? b[((m - 1) / 2) | 0] : g[m];
                    return (
                      (h && "none" !== a
                        ? a.substr(0, a.indexOf(b[0])) || h
                        : h) +
                      b.join(j) +
                      i
                    );
                  })
            : function (a) {
                return a;
              };
        },
        ta = function (a) {
          return (
            (a = a.split(",")),
            function (b, c, d, e, f, g, h) {
              var i,
                j = (c + "").split(" ");
              for (h = {}, i = 0; 4 > i; i++)
                h[a[i]] = j[i] = j[i] || j[((i - 1) / 2) >> 0];
              return e.parse(b, h, f, g);
            }
          );
        },
        ua =
          ((T._setPluginRatio = function (a) {
            this.plugin.setRatio(a);
            for (
              var b,
                c,
                d,
                e,
                f,
                g = this.data,
                h = g.proxy,
                i = g.firstMPT,
                j = 1e-6;
              i;

            )
              (b = h[i.v]),
                i.r ? (b = i.r(b)) : j > b && b > -j && (b = 0),
                (i.t[i.p] = b),
                (i = i._next);
            if (
              (g.autoRotate &&
                (g.autoRotate.rotation = g.mod
                  ? g.mod.call(this._tween, h.rotation, this.t, this._tween)
                  : h.rotation),
              1 === a || 0 === a)
            )
              for (i = g.firstMPT, f = 1 === a ? "e" : "b"; i; ) {
                if (((c = i.t), c.type)) {
                  if (1 === c.type) {
                    for (e = c.xs0 + c.s + c.xs1, d = 1; d < c.l; d++)
                      e += c["xn" + d] + c["xs" + (d + 1)];
                    c[f] = e;
                  }
                } else c[f] = c.s + c.xs0;
                i = i._next;
              }
          }),
          function (a, b, c, d, e) {
            (this.t = a),
              (this.p = b),
              (this.v = c),
              (this.r = e),
              d && ((d._prev = this), (this._next = d));
          }),
        va =
          ((T._parseToProxy = function (a, b, c, d, e, f) {
            var g,
              h,
              i,
              j,
              k,
              l = d,
              m = {},
              n = {},
              o = c._transform,
              p = N;
            for (
              c._transform = null,
                N = b,
                d = k = c.parse(a, b, d, e),
                N = p,
                f &&
                  ((c._transform = o),
                  l && ((l._prev = null), l._prev && (l._prev._next = null)));
              d && d !== l;

            ) {
              if (
                d.type <= 1 &&
                ((h = d.p),
                (n[h] = d.s + d.c),
                (m[h] = d.s),
                f || ((j = new ua(d, "s", h, j, d.r)), (d.c = 0)),
                1 === d.type)
              )
                for (g = d.l; --g > 0; )
                  (i = "xn" + g),
                    (h = d.p + "_" + i),
                    (n[h] = d.data[i]),
                    (m[h] = d[i]),
                    f || (j = new ua(d, i, h, j, d.rxp[i]));
              d = d._next;
            }
            return { proxy: m, end: n, firstMPT: j, pt: k };
          }),
          (T.CSSPropTween = function (a, b, d, e, g, h, i, j, k, l, m) {
            (this.t = a),
              (this.p = b),
              (this.s = d),
              (this.c = e),
              (this.n = i || b),
              a instanceof va || f.push(this.n),
              (this.r = j ? ("function" == typeof j ? j : Math.round) : j),
              (this.type = h || 0),
              k && ((this.pr = k), (c = !0)),
              (this.b = void 0 === l ? d : l),
              (this.e = void 0 === m ? d + e : m),
              g && ((this._next = g), (g._prev = this));
          })),
        wa = function (a, b, c, d, e, f) {
          var g = new va(a, b, c, d - c, e, -1, f);
          return (g.b = c), (g.e = g.xs0 = d), g;
        },
        xa = (g.parseComplex = function (a, b, c, d, e, f, h, i, j, l) {
          (c = c || f || ""),
            "function" == typeof d && (d = d(r, q)),
            (h = new va(a, b, 0, 0, h, l ? 2 : 1, null, !1, i, c, d)),
            (d += ""),
            e &&
              ra.test(d + c) &&
              ((d = [c, d]), g.colorStringFilter(d), (c = d[0]), (d = d[1]));
          var m,
            n,
            o,
            p,
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C,
            D = c.split(", ").join(",").split(" "),
            E = d.split(", ").join(",").split(" "),
            F = D.length,
            G = k !== !1;
          for (
            (-1 !== d.indexOf(",") || -1 !== c.indexOf(",")) &&
              (-1 !== (d + c).indexOf("rgb") || -1 !== (d + c).indexOf("hsl")
                ? ((D = D.join(" ").replace(J, ", ").split(" ")),
                  (E = E.join(" ").replace(J, ", ").split(" ")))
                : ((D = D.join(" ").split(",").join(", ").split(" ")),
                  (E = E.join(" ").split(",").join(", ").split(" "))),
              (F = D.length)),
              F !== E.length && ((D = (f || "").split(" ")), (F = D.length)),
              h.plugin = j,
              h.setRatio = l,
              ra.lastIndex = 0,
              m = 0;
            F > m;
            m++
          )
            if (
              ((p = D[m]), (u = E[m] + ""), (x = parseFloat(p)), x || 0 === x)
            )
              h.appendXtra(
                "",
                x,
                ka(u, x),
                u.replace(t, ""),
                G && -1 !== u.indexOf("px") ? Math.round : !1,
                !0
              );
            else if (e && ra.test(p))
              (B = u.indexOf(")") + 1),
                (B = ")" + (B ? u.substr(B) : "")),
                (C = -1 !== u.indexOf("hsl") && V),
                (z = u),
                (p = pa(p, C)),
                (u = pa(u, C)),
                (y = p.length + u.length > 6),
                y && !V && 0 === u[3]
                  ? ((h["xs" + h.l] += h.l ? " transparent" : "transparent"),
                    (h.e = h.e.split(E[m]).join("transparent")))
                  : (V || (y = !1),
                    C
                      ? h
                          .appendXtra(
                            z.substr(0, z.indexOf("hsl")) +
                              (y ? "hsla(" : "hsl("),
                            p[0],
                            ka(u[0], p[0]),
                            ",",
                            !1,
                            !0
                          )
                          .appendXtra("", p[1], ka(u[1], p[1]), "%,", !1)
                          .appendXtra(
                            "",
                            p[2],
                            ka(u[2], p[2]),
                            y ? "%," : "%" + B,
                            !1
                          )
                      : h
                          .appendXtra(
                            z.substr(0, z.indexOf("rgb")) +
                              (y ? "rgba(" : "rgb("),
                            p[0],
                            u[0] - p[0],
                            ",",
                            Math.round,
                            !0
                          )
                          .appendXtra("", p[1], u[1] - p[1], ",", Math.round)
                          .appendXtra(
                            "",
                            p[2],
                            u[2] - p[2],
                            y ? "," : B,
                            Math.round
                          ),
                    y &&
                      ((p = p.length < 4 ? 1 : p[3]),
                      h.appendXtra(
                        "",
                        p,
                        (u.length < 4 ? 1 : u[3]) - p,
                        B,
                        !1
                      ))),
                (ra.lastIndex = 0);
            else if ((v = p.match(s))) {
              if (((w = u.match(t)), !w || w.length !== v.length)) return h;
              for (o = 0, n = 0; n < v.length; n++)
                (A = v[n]),
                  (z = p.indexOf(A, o)),
                  h.appendXtra(
                    p.substr(o, z - o),
                    Number(A),
                    ka(w[n], A),
                    "",
                    G && "px" === p.substr(z + A.length, 2) ? Math.round : !1,
                    0 === n
                  ),
                  (o = z + A.length);
              h["xs" + h.l] += p.substr(o);
            } else h["xs" + h.l] += h.l || h["xs" + h.l] ? " " + u : u;
          if (-1 !== d.indexOf("=") && h.data) {
            for (B = h.xs0 + h.data.s, m = 1; m < h.l; m++)
              B += h["xs" + m] + h.data["xn" + m];
            h.e = B + h["xs" + m];
          }
          return h.l || ((h.type = -1), (h.xs0 = h.e)), h.xfirst || h;
        }),
        ya = 9;
      for (j = va.prototype, j.l = j.pr = 0; --ya > 0; )
        (j["xn" + ya] = 0), (j["xs" + ya] = "");
      (j.xs0 = ""),
        (j._next =
          j._prev =
          j.xfirst =
          j.data =
          j.plugin =
          j.setRatio =
          j.rxp =
            null),
        (j.appendXtra = function (a, b, c, d, e, f) {
          var g = this,
            h = g.l;
          return (
            (g["xs" + h] += f && (h || g["xs" + h]) ? " " + a : a || ""),
            c || 0 === h || g.plugin
              ? (g.l++,
                (g.type = g.setRatio ? 2 : 1),
                (g["xs" + g.l] = d || ""),
                h > 0
                  ? ((g.data["xn" + h] = b + c),
                    (g.rxp["xn" + h] = e),
                    (g["xn" + h] = b),
                    g.plugin ||
                      ((g.xfirst = new va(
                        g,
                        "xn" + h,
                        b,
                        c,
                        g.xfirst || g,
                        0,
                        g.n,
                        e,
                        g.pr
                      )),
                      (g.xfirst.xs0 = 0)),
                    g)
                  : ((g.data = { s: b + c }),
                    (g.rxp = {}),
                    (g.s = b),
                    (g.c = c),
                    (g.r = e),
                    g))
              : ((g["xs" + h] += b + (d || "")), g)
          );
        });
      var za = function (a, b) {
          (b = b || {}),
            (this.p = b.prefix ? $(a) || a : a),
            (i[a] = i[this.p] = this),
            (this.format =
              b.formatter ||
              sa(b.defaultValue, b.color, b.collapsible, b.multi)),
            b.parser && (this.parse = b.parser),
            (this.clrs = b.color),
            (this.multi = b.multi),
            (this.keyword = b.keyword),
            (this.dflt = b.defaultValue),
            (this.allowFunc = b.allowFunc),
            (this.pr = b.priority || 0);
        },
        Aa = (T._registerComplexSpecialProp = function (a, b, c) {
          "object" != typeof b && (b = { parser: c });
          var d,
            e,
            f = a.split(","),
            g = b.defaultValue;
          for (c = c || [g], d = 0; d < f.length; d++)
            (b.prefix = 0 === d && b.prefix),
              (b.defaultValue = c[d] || g),
              (e = new za(f[d], b));
        }),
        Ba = (T._registerPluginProp = function (a) {
          if (!i[a]) {
            var b = a.charAt(0).toUpperCase() + a.substr(1) + "Plugin";
            Aa(a, {
              parser: function (a, c, d, e, f, g, j) {
                var k = h.com.greensock.plugins[b];
                return k
                  ? (k._cssRegister(), i[d].parse(a, c, d, e, f, g, j))
                  : (X("Error: " + b + " js file not loaded."), f);
              },
            });
          }
        });
      (j = za.prototype),
        (j.parseComplex = function (a, b, c, d, e, f) {
          var g,
            h,
            i,
            j,
            k,
            l,
            m = this.keyword;
          if (
            (this.multi &&
              (J.test(c) || J.test(b)
                ? ((h = b.replace(J, "|").split("|")),
                  (i = c.replace(J, "|").split("|")))
                : m && ((h = [b]), (i = [c]))),
            i)
          ) {
            for (
              j = i.length > h.length ? i.length : h.length, g = 0;
              j > g;
              g++
            )
              (b = h[g] = h[g] || this.dflt),
                (c = i[g] = i[g] || this.dflt),
                m &&
                  ((k = b.indexOf(m)),
                  (l = c.indexOf(m)),
                  k !== l &&
                    (-1 === l
                      ? (h[g] = h[g].split(m).join(""))
                      : -1 === k && (h[g] += " " + m)));
            (b = h.join(", ")), (c = i.join(", "));
          }
          return xa(a, this.p, b, c, this.clrs, this.dflt, d, this.pr, e, f);
        }),
        (j.parse = function (a, b, c, d, f, g, h) {
          return this.parseComplex(
            a.style,
            this.format(ba(a, this.p, e, !1, this.dflt)),
            this.format(b),
            f,
            g
          );
        }),
        (g.registerSpecialProp = function (a, b, c) {
          Aa(a, {
            parser: function (a, d, e, f, g, h, i) {
              var j = new va(a, e, 0, 0, g, 2, e, !1, c);
              return (j.plugin = h), (j.setRatio = b(a, d, f._tween, e)), j;
            },
            priority: c,
          });
        }),
        (g.useSVGTransformAttr = !0);
      var Ca,
        Da =
          "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
            ","
          ),
        Ea = $("transform"),
        Fa = Y + "transform",
        Ga = $("transformOrigin"),
        Ha = null !== $("perspective"),
        Ia = (T.Transform = function () {
          (this.perspective = parseFloat(g.defaultTransformPerspective) || 0),
            (this.force3D =
              g.defaultForce3D !== !1 && Ha ? g.defaultForce3D || "auto" : !1);
        }),
        Ja = _gsScope.SVGElement,
        Ka = function (a, b, c) {
          var d,
            e = P.createElementNS("http://www.w3.org/2000/svg", a),
            f = /([a-z])([A-Z])/g;
          for (d in c)
            e.setAttributeNS(null, d.replace(f, "$1-$2").toLowerCase(), c[d]);
          return b.appendChild(e), e;
        },
        La = P.documentElement || {},
        Ma = (function () {
          var a,
            b,
            c,
            d = p || (/Android/i.test(U) && !_gsScope.chrome);
          return (
            P.createElementNS &&
              La.appendChild &&
              !d &&
              ((a = Ka("svg", La)),
              (b = Ka("rect", a, { width: 100, height: 50, x: 100 })),
              (c = b.getBoundingClientRect().width),
              (b.style[Ga] = "50% 50%"),
              (b.style[Ea] = "scaleX(0.5)"),
              (d = c === b.getBoundingClientRect().width && !(n && Ha)),
              La.removeChild(a)),
            d
          );
        })(),
        Na = function (a, b, c, d, e, f) {
          var h,
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
            u,
            v = a._gsTransform,
            w = Sa(a, !0);
          v && ((t = v.xOrigin), (u = v.yOrigin)),
            (!d || (h = d.split(" ")).length < 2) &&
              ((n = a.getBBox()),
              0 === n.x &&
                0 === n.y &&
                n.width + n.height === 0 &&
                (n = {
                  x:
                    parseFloat(
                      a.hasAttribute("x")
                        ? a.getAttribute("x")
                        : a.hasAttribute("cx")
                        ? a.getAttribute("cx")
                        : 0
                    ) || 0,
                  y:
                    parseFloat(
                      a.hasAttribute("y")
                        ? a.getAttribute("y")
                        : a.hasAttribute("cy")
                        ? a.getAttribute("cy")
                        : 0
                    ) || 0,
                  width: 0,
                  height: 0,
                }),
              (b = ja(b).split(" ")),
              (h = [
                (-1 !== b[0].indexOf("%")
                  ? (parseFloat(b[0]) / 100) * n.width
                  : parseFloat(b[0])) + n.x,
                (-1 !== b[1].indexOf("%")
                  ? (parseFloat(b[1]) / 100) * n.height
                  : parseFloat(b[1])) + n.y,
              ])),
            (c.xOrigin = k = parseFloat(h[0])),
            (c.yOrigin = l = parseFloat(h[1])),
            d &&
              w !== Ra &&
              ((m = w[0]),
              (n = w[1]),
              (o = w[2]),
              (p = w[3]),
              (q = w[4]),
              (r = w[5]),
              (s = m * p - n * o),
              s &&
                ((i = k * (p / s) + l * (-o / s) + (o * r - p * q) / s),
                (j = k * (-n / s) + l * (m / s) - (m * r - n * q) / s),
                (k = c.xOrigin = h[0] = i),
                (l = c.yOrigin = h[1] = j))),
            v &&
              (f && ((c.xOffset = v.xOffset), (c.yOffset = v.yOffset), (v = c)),
              e || (e !== !1 && g.defaultSmoothOrigin !== !1)
                ? ((i = k - t),
                  (j = l - u),
                  (v.xOffset += i * w[0] + j * w[2] - i),
                  (v.yOffset += i * w[1] + j * w[3] - j))
                : (v.xOffset = v.yOffset = 0)),
            f || a.setAttribute("data-svg-origin", h.join(" "));
        },
        Oa = function (a) {
          var b,
            c = Q(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            d = this.parentNode,
            e = this.nextSibling,
            f = this.style.cssText;
          if (
            (La.appendChild(c),
            c.appendChild(this),
            (this.style.display = "block"),
            a)
          )
            try {
              (b = this.getBBox()),
                (this._originalGetBBox = this.getBBox),
                (this.getBBox = Oa);
            } catch (g) {}
          else this._originalGetBBox && (b = this._originalGetBBox());
          return (
            e ? d.insertBefore(this, e) : d.appendChild(this),
            La.removeChild(c),
            (this.style.cssText = f),
            b
          );
        },
        Pa = function (a) {
          try {
            return a.getBBox();
          } catch (b) {
            return Oa.call(a, !0);
          }
        },
        Qa = function (a) {
          return !(
            !Ja ||
            !a.getCTM ||
            (a.parentNode && !a.ownerSVGElement) ||
            !Pa(a)
          );
        },
        Ra = [1, 0, 0, 1, 0, 0],
        Sa = function (a, b) {
          var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j = a._gsTransform || new Ia(),
            k = 1e5,
            l = a.style;
          if (
            (Ea
              ? (d = ba(a, Fa, null, !0))
              : a.currentStyle &&
                ((d = a.currentStyle.filter.match(H)),
                (d =
                  d && 4 === d.length
                    ? [
                        d[0].substr(4),
                        Number(d[2].substr(4)),
                        Number(d[1].substr(4)),
                        d[3].substr(4),
                        j.x || 0,
                        j.y || 0,
                      ].join(",")
                    : "")),
            (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
            Ea &&
              c &&
              !a.offsetParent &&
              a !== La &&
              ((f = l.display),
              (l.display = "block"),
              (i = a.parentNode),
              (i && a.offsetParent) ||
                ((g = 1), (h = a.nextSibling), La.appendChild(a)),
              (d = ba(a, Fa, null, !0)),
              (c = !d || "none" === d || "matrix(1, 0, 0, 1, 0, 0)" === d),
              f ? (l.display = f) : Xa(l, "display"),
              g &&
                (h
                  ? i.insertBefore(a, h)
                  : i
                  ? i.appendChild(a)
                  : La.removeChild(a))),
            (j.svg || (a.getCTM && Qa(a))) &&
              (c &&
                -1 !== (l[Ea] + "").indexOf("matrix") &&
                ((d = l[Ea]), (c = 0)),
              (e = a.getAttribute("transform")),
              c &&
                e &&
                ((e = a.transform.baseVal.consolidate().matrix),
                (d =
                  "matrix(" +
                  e.a +
                  "," +
                  e.b +
                  "," +
                  e.c +
                  "," +
                  e.d +
                  "," +
                  e.e +
                  "," +
                  e.f +
                  ")"),
                (c = 0))),
            c)
          )
            return Ra;
          for (e = (d || "").match(s) || [], ya = e.length; --ya > -1; )
            (f = Number(e[ya])),
              (e[ya] = (g = f - (f |= 0))
                ? ((g * k + (0 > g ? -0.5 : 0.5)) | 0) / k + f
                : f);
          return b && e.length > 6 ? [e[0], e[1], e[4], e[5], e[12], e[13]] : e;
        },
        Ta = (T.getTransform = function (a, c, d, e) {
          if (a._gsTransform && d && !e) return a._gsTransform;
          var f,
            h,
            i,
            j,
            k,
            l,
            m = d ? a._gsTransform || new Ia() : new Ia(),
            n = m.scaleX < 0,
            o = 2e-5,
            p = 1e5,
            q = Ha
              ? parseFloat(ba(a, Ga, c, !1, "0 0 0").split(" ")[2]) ||
                m.zOrigin ||
                0
              : 0,
            r = parseFloat(g.defaultTransformPerspective) || 0;
          if (
            ((m.svg = !(!a.getCTM || !Qa(a))),
            m.svg &&
              (Na(
                a,
                ba(a, Ga, c, !1, "50% 50%") + "",
                m,
                a.getAttribute("data-svg-origin")
              ),
              (Ca = g.useSVGTransformAttr || Ma)),
            (f = Sa(a)),
            f !== Ra)
          ) {
            if (16 === f.length) {
              var s,
                t,
                u,
                v,
                w,
                x = f[0],
                y = f[1],
                z = f[2],
                A = f[3],
                B = f[4],
                C = f[5],
                D = f[6],
                E = f[7],
                F = f[8],
                G = f[9],
                H = f[10],
                I = f[12],
                J = f[13],
                K = f[14],
                L = f[11],
                N = Math.atan2(D, H);
              m.zOrigin &&
                ((K = -m.zOrigin),
                (I = F * K - f[12]),
                (J = G * K - f[13]),
                (K = H * K + m.zOrigin - f[14])),
                (m.rotationX = N * M),
                N &&
                  ((v = Math.cos(-N)),
                  (w = Math.sin(-N)),
                  (s = B * v + F * w),
                  (t = C * v + G * w),
                  (u = D * v + H * w),
                  (F = B * -w + F * v),
                  (G = C * -w + G * v),
                  (H = D * -w + H * v),
                  (L = E * -w + L * v),
                  (B = s),
                  (C = t),
                  (D = u)),
                (N = Math.atan2(-z, H)),
                (m.rotationY = N * M),
                N &&
                  ((v = Math.cos(-N)),
                  (w = Math.sin(-N)),
                  (s = x * v - F * w),
                  (t = y * v - G * w),
                  (u = z * v - H * w),
                  (G = y * w + G * v),
                  (H = z * w + H * v),
                  (L = A * w + L * v),
                  (x = s),
                  (y = t),
                  (z = u)),
                (N = Math.atan2(y, x)),
                (m.rotation = N * M),
                N &&
                  ((v = Math.cos(N)),
                  (w = Math.sin(N)),
                  (s = x * v + y * w),
                  (t = B * v + C * w),
                  (u = F * v + G * w),
                  (y = y * v - x * w),
                  (C = C * v - B * w),
                  (G = G * v - F * w),
                  (x = s),
                  (B = t),
                  (F = u)),
                m.rotationX &&
                  Math.abs(m.rotationX) + Math.abs(m.rotation) > 359.9 &&
                  ((m.rotationX = m.rotation = 0),
                  (m.rotationY = 180 - m.rotationY)),
                (N = Math.atan2(B, C)),
                (m.scaleX =
                  ((Math.sqrt(x * x + y * y + z * z) * p + 0.5) | 0) / p),
                (m.scaleY = ((Math.sqrt(C * C + D * D) * p + 0.5) | 0) / p),
                (m.scaleZ =
                  ((Math.sqrt(F * F + G * G + H * H) * p + 0.5) | 0) / p),
                (x /= m.scaleX),
                (B /= m.scaleY),
                (y /= m.scaleX),
                (C /= m.scaleY),
                Math.abs(N) > o
                  ? ((m.skewX = N * M),
                    (B = 0),
                    "simple" !== m.skewType && (m.scaleY *= 1 / Math.cos(N)))
                  : (m.skewX = 0),
                (m.perspective = L ? 1 / (0 > L ? -L : L) : 0),
                (m.x = I),
                (m.y = J),
                (m.z = K),
                m.svg &&
                  ((m.x -= m.xOrigin - (m.xOrigin * x - m.yOrigin * B)),
                  (m.y -= m.yOrigin - (m.yOrigin * y - m.xOrigin * C)));
            } else if (
              !Ha ||
              e ||
              !f.length ||
              m.x !== f[4] ||
              m.y !== f[5] ||
              (!m.rotationX && !m.rotationY)
            ) {
              var O = f.length >= 6,
                P = O ? f[0] : 1,
                Q = f[1] || 0,
                R = f[2] || 0,
                S = O ? f[3] : 1;
              (m.x = f[4] || 0),
                (m.y = f[5] || 0),
                (i = Math.sqrt(P * P + Q * Q)),
                (j = Math.sqrt(S * S + R * R)),
                (k = P || Q ? Math.atan2(Q, P) * M : m.rotation || 0),
                (l = R || S ? Math.atan2(R, S) * M + k : m.skewX || 0),
                (m.scaleX = i),
                (m.scaleY = j),
                (m.rotation = k),
                (m.skewX = l),
                Ha &&
                  ((m.rotationX = m.rotationY = m.z = 0),
                  (m.perspective = r),
                  (m.scaleZ = 1)),
                m.svg &&
                  ((m.x -= m.xOrigin - (m.xOrigin * P + m.yOrigin * R)),
                  (m.y -= m.yOrigin - (m.xOrigin * Q + m.yOrigin * S)));
            }
            Math.abs(m.skewX) > 90 &&
              Math.abs(m.skewX) < 270 &&
              (n
                ? ((m.scaleX *= -1),
                  (m.skewX += m.rotation <= 0 ? 180 : -180),
                  (m.rotation += m.rotation <= 0 ? 180 : -180))
                : ((m.scaleY *= -1), (m.skewX += m.skewX <= 0 ? 180 : -180))),
              (m.zOrigin = q);
            for (h in m) m[h] < o && m[h] > -o && (m[h] = 0);
          }
          return (
            d &&
              ((a._gsTransform = m),
              m.svg &&
                (Ca && a.style[Ea]
                  ? b.delayedCall(0.001, function () {
                      Xa(a.style, Ea);
                    })
                  : !Ca &&
                    a.getAttribute("transform") &&
                    b.delayedCall(0.001, function () {
                      a.removeAttribute("transform");
                    }))),
            m
          );
        }),
        Ua = function (a) {
          var b,
            c,
            d = this.data,
            e = -d.rotation * L,
            f = e + d.skewX * L,
            g = 1e5,
            h = ((Math.cos(e) * d.scaleX * g) | 0) / g,
            i = ((Math.sin(e) * d.scaleX * g) | 0) / g,
            j = ((Math.sin(f) * -d.scaleY * g) | 0) / g,
            k = ((Math.cos(f) * d.scaleY * g) | 0) / g,
            l = this.t.style,
            m = this.t.currentStyle;
          if (m) {
            (c = i), (i = -j), (j = -c), (b = m.filter), (l.filter = "");
            var n,
              o,
              q = this.t.offsetWidth,
              r = this.t.offsetHeight,
              s = "absolute" !== m.position,
              t =
                "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                h +
                ", M12=" +
                i +
                ", M21=" +
                j +
                ", M22=" +
                k,
              u = d.x + (q * d.xPercent) / 100,
              v = d.y + (r * d.yPercent) / 100;
            if (
              (null != d.ox &&
                ((n = (d.oxp ? q * d.ox * 0.01 : d.ox) - q / 2),
                (o = (d.oyp ? r * d.oy * 0.01 : d.oy) - r / 2),
                (u += n - (n * h + o * i)),
                (v += o - (n * j + o * k))),
              s
                ? ((n = q / 2),
                  (o = r / 2),
                  (t +=
                    ", Dx=" +
                    (n - (n * h + o * i) + u) +
                    ", Dy=" +
                    (o - (n * j + o * k) + v) +
                    ")"))
                : (t += ", sizingMethod='auto expand')"),
              -1 !== b.indexOf("DXImageTransform.Microsoft.Matrix(")
                ? (l.filter = b.replace(I, t))
                : (l.filter = t + " " + b),
              (0 === a || 1 === a) &&
                1 === h &&
                0 === i &&
                0 === j &&
                1 === k &&
                ((s && -1 === t.indexOf("Dx=0, Dy=0")) ||
                  (y.test(b) && 100 !== parseFloat(RegExp.$1)) ||
                  (-1 === b.indexOf(b.indexOf("Alpha")) &&
                    l.removeAttribute("filter"))),
              !s)
            ) {
              var w,
                z,
                A,
                B = 8 > p ? 1 : -1;
              for (
                n = d.ieOffsetX || 0,
                  o = d.ieOffsetY || 0,
                  d.ieOffsetX = Math.round(
                    (q - ((0 > h ? -h : h) * q + (0 > i ? -i : i) * r)) / 2 + u
                  ),
                  d.ieOffsetY = Math.round(
                    (r - ((0 > k ? -k : k) * r + (0 > j ? -j : j) * q)) / 2 + v
                  ),
                  ya = 0;
                4 > ya;
                ya++
              )
                (z = ha[ya]),
                  (w = m[z]),
                  (c =
                    -1 !== w.indexOf("px")
                      ? parseFloat(w)
                      : ca(this.t, z, parseFloat(w), w.replace(x, "")) || 0),
                  (A =
                    c !== d[z]
                      ? 2 > ya
                        ? -d.ieOffsetX
                        : -d.ieOffsetY
                      : 2 > ya
                      ? n - d.ieOffsetX
                      : o - d.ieOffsetY),
                  (l[z] =
                    (d[z] = Math.round(
                      c - A * (0 === ya || 2 === ya ? 1 : B)
                    )) + "px");
            }
          }
        },
        Va =
          (T.set3DTransformRatio =
          T.setTransformRatio =
            function (a) {
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
                o,
                p,
                q,
                r,
                s,
                t,
                u,
                v,
                w,
                x,
                y,
                z = this.data,
                A = this.t.style,
                B = z.rotation,
                C = z.rotationX,
                D = z.rotationY,
                E = z.scaleX,
                F = z.scaleY,
                G = z.scaleZ,
                H = z.x,
                I = z.y,
                J = z.z,
                K = z.svg,
                M = z.perspective,
                N = z.force3D,
                O = z.skewY,
                P = z.skewX;
              if (
                (O && ((P += O), (B += O)),
                ((((1 === a || 0 === a) &&
                  "auto" === N &&
                  (this.tween._totalTime === this.tween._totalDuration ||
                    !this.tween._totalTime)) ||
                  !N) &&
                  !J &&
                  !M &&
                  !D &&
                  !C &&
                  1 === G) ||
                  (Ca && K) ||
                  !Ha)
              )
                return void (B || P || K
                  ? ((B *= L),
                    (x = P * L),
                    (y = 1e5),
                    (c = Math.cos(B) * E),
                    (f = Math.sin(B) * E),
                    (d = Math.sin(B - x) * -F),
                    (g = Math.cos(B - x) * F),
                    x &&
                      "simple" === z.skewType &&
                      ((b = Math.tan(x - O * L)),
                      (b = Math.sqrt(1 + b * b)),
                      (d *= b),
                      (g *= b),
                      O &&
                        ((b = Math.tan(O * L)),
                        (b = Math.sqrt(1 + b * b)),
                        (c *= b),
                        (f *= b))),
                    K &&
                      ((H +=
                        z.xOrigin -
                        (z.xOrigin * c + z.yOrigin * d) +
                        z.xOffset),
                      (I +=
                        z.yOrigin -
                        (z.xOrigin * f + z.yOrigin * g) +
                        z.yOffset),
                      Ca &&
                        (z.xPercent || z.yPercent) &&
                        ((q = this.t.getBBox()),
                        (H += 0.01 * z.xPercent * q.width),
                        (I += 0.01 * z.yPercent * q.height)),
                      (q = 1e-6),
                      q > H && H > -q && (H = 0),
                      q > I && I > -q && (I = 0)),
                    (u =
                      ((c * y) | 0) / y +
                      "," +
                      ((f * y) | 0) / y +
                      "," +
                      ((d * y) | 0) / y +
                      "," +
                      ((g * y) | 0) / y +
                      "," +
                      H +
                      "," +
                      I +
                      ")"),
                    K && Ca
                      ? this.t.setAttribute("transform", "matrix(" + u)
                      : (A[Ea] =
                          (z.xPercent || z.yPercent
                            ? "translate(" +
                              z.xPercent +
                              "%," +
                              z.yPercent +
                              "%) matrix("
                            : "matrix(") + u))
                  : (A[Ea] =
                      (z.xPercent || z.yPercent
                        ? "translate(" +
                          z.xPercent +
                          "%," +
                          z.yPercent +
                          "%) matrix("
                        : "matrix(") +
                      E +
                      ",0,0," +
                      F +
                      "," +
                      H +
                      "," +
                      I +
                      ")"));
              if (
                (n &&
                  ((q = 1e-4),
                  q > E && E > -q && (E = G = 2e-5),
                  q > F && F > -q && (F = G = 2e-5),
                  !M || z.z || z.rotationX || z.rotationY || (M = 0)),
                B || P)
              )
                (B *= L),
                  (r = c = Math.cos(B)),
                  (s = f = Math.sin(B)),
                  P &&
                    ((B -= P * L),
                    (r = Math.cos(B)),
                    (s = Math.sin(B)),
                    "simple" === z.skewType &&
                      ((b = Math.tan((P - O) * L)),
                      (b = Math.sqrt(1 + b * b)),
                      (r *= b),
                      (s *= b),
                      z.skewY &&
                        ((b = Math.tan(O * L)),
                        (b = Math.sqrt(1 + b * b)),
                        (c *= b),
                        (f *= b)))),
                  (d = -s),
                  (g = r);
              else {
                if (!(D || C || 1 !== G || M || K))
                  return void (A[Ea] =
                    (z.xPercent || z.yPercent
                      ? "translate(" +
                        z.xPercent +
                        "%," +
                        z.yPercent +
                        "%) translate3d("
                      : "translate3d(") +
                    H +
                    "px," +
                    I +
                    "px," +
                    J +
                    "px)" +
                    (1 !== E || 1 !== F ? " scale(" + E + "," + F + ")" : ""));
                (c = g = 1), (d = f = 0);
              }
              (k = 1),
                (e = h = i = j = l = m = 0),
                (o = M ? -1 / M : 0),
                (p = z.zOrigin),
                (q = 1e-6),
                (v = ","),
                (w = "0"),
                (B = D * L),
                B &&
                  ((r = Math.cos(B)),
                  (s = Math.sin(B)),
                  (i = -s),
                  (l = o * -s),
                  (e = c * s),
                  (h = f * s),
                  (k = r),
                  (o *= r),
                  (c *= r),
                  (f *= r)),
                (B = C * L),
                B &&
                  ((r = Math.cos(B)),
                  (s = Math.sin(B)),
                  (b = d * r + e * s),
                  (t = g * r + h * s),
                  (j = k * s),
                  (m = o * s),
                  (e = d * -s + e * r),
                  (h = g * -s + h * r),
                  (k *= r),
                  (o *= r),
                  (d = b),
                  (g = t)),
                1 !== G && ((e *= G), (h *= G), (k *= G), (o *= G)),
                1 !== F && ((d *= F), (g *= F), (j *= F), (m *= F)),
                1 !== E && ((c *= E), (f *= E), (i *= E), (l *= E)),
                (p || K) &&
                  (p && ((H += e * -p), (I += h * -p), (J += k * -p + p)),
                  K &&
                    ((H +=
                      z.xOrigin - (z.xOrigin * c + z.yOrigin * d) + z.xOffset),
                    (I +=
                      z.yOrigin - (z.xOrigin * f + z.yOrigin * g) + z.yOffset)),
                  q > H && H > -q && (H = w),
                  q > I && I > -q && (I = w),
                  q > J && J > -q && (J = 0)),
                (u =
                  z.xPercent || z.yPercent
                    ? "translate(" +
                      z.xPercent +
                      "%," +
                      z.yPercent +
                      "%) matrix3d("
                    : "matrix3d("),
                (u +=
                  (q > c && c > -q ? w : c) +
                  v +
                  (q > f && f > -q ? w : f) +
                  v +
                  (q > i && i > -q ? w : i)),
                (u +=
                  v +
                  (q > l && l > -q ? w : l) +
                  v +
                  (q > d && d > -q ? w : d) +
                  v +
                  (q > g && g > -q ? w : g)),
                C || D || 1 !== G
                  ? ((u +=
                      v +
                      (q > j && j > -q ? w : j) +
                      v +
                      (q > m && m > -q ? w : m) +
                      v +
                      (q > e && e > -q ? w : e)),
                    (u +=
                      v +
                      (q > h && h > -q ? w : h) +
                      v +
                      (q > k && k > -q ? w : k) +
                      v +
                      (q > o && o > -q ? w : o) +
                      v))
                  : (u += ",0,0,0,0,1,0,"),
                (u += H + v + I + v + J + v + (M ? 1 + -J / M : 1) + ")"),
                (A[Ea] = u);
            });
      (j = Ia.prototype),
        (j.x =
          j.y =
          j.z =
          j.skewX =
          j.skewY =
          j.rotation =
          j.rotationX =
          j.rotationY =
          j.zOrigin =
          j.xPercent =
          j.yPercent =
          j.xOffset =
          j.yOffset =
            0),
        (j.scaleX = j.scaleY = j.scaleZ = 1),
        Aa(
          "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
          {
            parser: function (a, b, c, d, f, h, i) {
              if (d._lastParsedTransform === i) return f;
              d._lastParsedTransform = i;
              var j = i.scale && "function" == typeof i.scale ? i.scale : 0;
              j && (i.scale = j(r, a));
              var k,
                l,
                m,
                n,
                o,
                p,
                s,
                t,
                u,
                v = a._gsTransform,
                w = a.style,
                x = 1e-6,
                y = Da.length,
                z = i,
                A = {},
                B = "transformOrigin",
                C = Ta(a, e, !0, z.parseTransform),
                D =
                  z.transform &&
                  ("function" == typeof z.transform
                    ? z.transform(r, q)
                    : z.transform);
              if (
                ((C.skewType = z.skewType || C.skewType || g.defaultSkewType),
                (d._transform = C),
                "rotationZ" in z && (z.rotation = z.rotationZ),
                D && "string" == typeof D && Ea)
              )
                (l = R.style),
                  (l[Ea] = D),
                  (l.display = "block"),
                  (l.position = "absolute"),
                  -1 !== D.indexOf("%") &&
                    ((l.width = ba(a, "width")), (l.height = ba(a, "height"))),
                  P.body.appendChild(R),
                  (k = Ta(R, null, !1)),
                  "simple" === C.skewType &&
                    (k.scaleY *= Math.cos(k.skewX * L)),
                  C.svg &&
                    ((p = C.xOrigin),
                    (s = C.yOrigin),
                    (k.x -= C.xOffset),
                    (k.y -= C.yOffset),
                    (z.transformOrigin || z.svgOrigin) &&
                      ((D = {}),
                      Na(
                        a,
                        ja(z.transformOrigin),
                        D,
                        z.svgOrigin,
                        z.smoothOrigin,
                        !0
                      ),
                      (p = D.xOrigin),
                      (s = D.yOrigin),
                      (k.x -= D.xOffset - C.xOffset),
                      (k.y -= D.yOffset - C.yOffset)),
                    (p || s) &&
                      ((t = Sa(R, !0)),
                      (k.x -= p - (p * t[0] + s * t[2])),
                      (k.y -= s - (p * t[1] + s * t[3])))),
                  P.body.removeChild(R),
                  k.perspective || (k.perspective = C.perspective),
                  null != z.xPercent &&
                    (k.xPercent = la(z.xPercent, C.xPercent)),
                  null != z.yPercent &&
                    (k.yPercent = la(z.yPercent, C.yPercent));
              else if ("object" == typeof z) {
                if (
                  ((k = {
                    scaleX: la(null != z.scaleX ? z.scaleX : z.scale, C.scaleX),
                    scaleY: la(null != z.scaleY ? z.scaleY : z.scale, C.scaleY),
                    scaleZ: la(z.scaleZ, C.scaleZ),
                    x: la(z.x, C.x),
                    y: la(z.y, C.y),
                    z: la(z.z, C.z),
                    xPercent: la(z.xPercent, C.xPercent),
                    yPercent: la(z.yPercent, C.yPercent),
                    perspective: la(z.transformPerspective, C.perspective),
                  }),
                  (o = z.directionalRotation),
                  null != o)
                )
                  if ("object" == typeof o) for (l in o) z[l] = o[l];
                  else z.rotation = o;
                "string" == typeof z.x &&
                  -1 !== z.x.indexOf("%") &&
                  ((k.x = 0), (k.xPercent = la(z.x, C.xPercent))),
                  "string" == typeof z.y &&
                    -1 !== z.y.indexOf("%") &&
                    ((k.y = 0), (k.yPercent = la(z.y, C.yPercent))),
                  (k.rotation = ma(
                    "rotation" in z
                      ? z.rotation
                      : "shortRotation" in z
                      ? z.shortRotation + "_short"
                      : C.rotation,
                    C.rotation,
                    "rotation",
                    A
                  )),
                  Ha &&
                    ((k.rotationX = ma(
                      "rotationX" in z
                        ? z.rotationX
                        : "shortRotationX" in z
                        ? z.shortRotationX + "_short"
                        : C.rotationX || 0,
                      C.rotationX,
                      "rotationX",
                      A
                    )),
                    (k.rotationY = ma(
                      "rotationY" in z
                        ? z.rotationY
                        : "shortRotationY" in z
                        ? z.shortRotationY + "_short"
                        : C.rotationY || 0,
                      C.rotationY,
                      "rotationY",
                      A
                    ))),
                  (k.skewX = ma(z.skewX, C.skewX)),
                  (k.skewY = ma(z.skewY, C.skewY));
              }
              for (
                Ha && null != z.force3D && ((C.force3D = z.force3D), (n = !0)),
                  m =
                    C.force3D ||
                    C.z ||
                    C.rotationX ||
                    C.rotationY ||
                    k.z ||
                    k.rotationX ||
                    k.rotationY ||
                    k.perspective,
                  m || null == z.scale || (k.scaleZ = 1);
                --y > -1;

              )
                (u = Da[y]),
                  (D = k[u] - C[u]),
                  (D > x || -x > D || null != z[u] || null != N[u]) &&
                    ((n = !0),
                    (f = new va(C, u, C[u], D, f)),
                    u in A && (f.e = A[u]),
                    (f.xs0 = 0),
                    (f.plugin = h),
                    d._overwriteProps.push(f.n));
              return (
                (D =
                  "function" == typeof z.transformOrigin
                    ? z.transformOrigin(r, q)
                    : z.transformOrigin),
                C.svg &&
                  (D || z.svgOrigin) &&
                  ((p = C.xOffset),
                  (s = C.yOffset),
                  Na(a, ja(D), k, z.svgOrigin, z.smoothOrigin),
                  (f = wa(C, "xOrigin", (v ? C : k).xOrigin, k.xOrigin, f, B)),
                  (f = wa(C, "yOrigin", (v ? C : k).yOrigin, k.yOrigin, f, B)),
                  (p !== C.xOffset || s !== C.yOffset) &&
                    ((f = wa(C, "xOffset", v ? p : C.xOffset, C.xOffset, f, B)),
                    (f = wa(C, "yOffset", v ? s : C.yOffset, C.yOffset, f, B))),
                  (D = "0px 0px")),
                (D || (Ha && m && C.zOrigin)) &&
                  (Ea
                    ? ((n = !0),
                      (u = Ga),
                      D ||
                        ((D = (ba(a, u, e, !1, "50% 50%") + "").split(" ")),
                        (D = D[0] + " " + D[1] + " " + C.zOrigin + "px")),
                      (D += ""),
                      (f = new va(w, u, 0, 0, f, -1, B)),
                      (f.b = w[u]),
                      (f.plugin = h),
                      Ha
                        ? ((l = C.zOrigin),
                          (D = D.split(" ")),
                          (C.zOrigin =
                            (D.length > 2 ? parseFloat(D[2]) : l) || 0),
                          (f.xs0 = f.e = D[0] + " " + (D[1] || "50%") + " 0px"),
                          (f = new va(C, "zOrigin", 0, 0, f, -1, f.n)),
                          (f.b = l),
                          (f.xs0 = f.e = C.zOrigin))
                        : (f.xs0 = f.e = D))
                    : ja(D + "", C)),
                n &&
                  (d._transformType =
                    (C.svg && Ca) || (!m && 3 !== this._transformType) ? 2 : 3),
                j && (i.scale = j),
                f
              );
            },
            allowFunc: !0,
            prefix: !0,
          }
        ),
        Aa("boxShadow", {
          defaultValue: "0px 0px 0px 0px #999",
          prefix: !0,
          color: !0,
          multi: !0,
          keyword: "inset",
        }),
        Aa("clipPath", {
          defaultValue: "inset(0%)",
          prefix: !0,
          multi: !0,
          formatter: sa("inset(0% 0% 0% 0%)", !1, !0),
        }),
        Aa("borderRadius", {
          defaultValue: "0px",
          parser: function (a, b, c, f, g, h) {
            b = this.format(b);
            var i,
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
              u,
              v,
              w,
              x,
              y = [
                "borderTopLeftRadius",
                "borderTopRightRadius",
                "borderBottomRightRadius",
                "borderBottomLeftRadius",
              ],
              z = a.style;
            for (
              q = parseFloat(a.offsetWidth),
                r = parseFloat(a.offsetHeight),
                i = b.split(" "),
                j = 0;
              j < y.length;
              j++
            )
              this.p.indexOf("border") && (y[j] = $(y[j])),
                (m = l = ba(a, y[j], e, !1, "0px")),
                -1 !== m.indexOf(" ") &&
                  ((l = m.split(" ")), (m = l[0]), (l = l[1])),
                (n = k = i[j]),
                (o = parseFloat(m)),
                (t = m.substr((o + "").length)),
                (u = "=" === n.charAt(1)),
                u
                  ? ((p = parseInt(n.charAt(0) + "1", 10)),
                    (n = n.substr(2)),
                    (p *= parseFloat(n)),
                    (s = n.substr((p + "").length - (0 > p ? 1 : 0)) || ""))
                  : ((p = parseFloat(n)), (s = n.substr((p + "").length))),
                "" === s && (s = d[c] || t),
                s !== t &&
                  ((v = ca(a, "borderLeft", o, t)),
                  (w = ca(a, "borderTop", o, t)),
                  "%" === s
                    ? ((m = (v / q) * 100 + "%"), (l = (w / r) * 100 + "%"))
                    : "em" === s
                    ? ((x = ca(a, "borderLeft", 1, "em")),
                      (m = v / x + "em"),
                      (l = w / x + "em"))
                    : ((m = v + "px"), (l = w + "px")),
                  u &&
                    ((n = parseFloat(m) + p + s), (k = parseFloat(l) + p + s))),
                (g = xa(z, y[j], m + " " + l, n + " " + k, !1, "0px", g));
            return g;
          },
          prefix: !0,
          formatter: sa("0px 0px 0px 0px", !1, !0),
        }),
        Aa(
          "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
          {
            defaultValue: "0px",
            parser: function (a, b, c, d, f, g) {
              return xa(
                a.style,
                c,
                this.format(ba(a, c, e, !1, "0px 0px")),
                this.format(b),
                !1,
                "0px",
                f
              );
            },
            prefix: !0,
            formatter: sa("0px 0px", !1, !0),
          }
        ),
        Aa("backgroundPosition", {
          defaultValue: "0 0",
          parser: function (a, b, c, d, f, g) {
            var h,
              i,
              j,
              k,
              l,
              m,
              n = "background-position",
              o = e || aa(a, null),
              q = this.format(
                (o
                  ? p
                    ? o.getPropertyValue(n + "-x") +
                      " " +
                      o.getPropertyValue(n + "-y")
                    : o.getPropertyValue(n)
                  : a.currentStyle.backgroundPositionX +
                    " " +
                    a.currentStyle.backgroundPositionY) || "0 0"
              ),
              r = this.format(b);
            if (
              (-1 !== q.indexOf("%")) != (-1 !== r.indexOf("%")) &&
              r.split(",").length < 2 &&
              ((m = ba(a, "backgroundImage").replace(E, "")), m && "none" !== m)
            ) {
              for (
                h = q.split(" "),
                  i = r.split(" "),
                  S.setAttribute("src", m),
                  j = 2;
                --j > -1;

              )
                (q = h[j]),
                  (k = -1 !== q.indexOf("%")),
                  k !== (-1 !== i[j].indexOf("%")) &&
                    ((l =
                      0 === j
                        ? a.offsetWidth - S.width
                        : a.offsetHeight - S.height),
                    (h[j] = k
                      ? (parseFloat(q) / 100) * l + "px"
                      : (parseFloat(q) / l) * 100 + "%"));
              q = h.join(" ");
            }
            return this.parseComplex(a.style, q, r, f, g);
          },
          formatter: ja,
        }),
        Aa("backgroundSize", {
          defaultValue: "0 0",
          formatter: function (a) {
            return (
              (a += ""),
              "co" === a.substr(0, 2)
                ? a
                : ja(-1 === a.indexOf(" ") ? a + " " + a : a)
            );
          },
        }),
        Aa("perspective", { defaultValue: "0px", prefix: !0 }),
        Aa("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
        Aa("transformStyle", { prefix: !0 }),
        Aa("backfaceVisibility", { prefix: !0 }),
        Aa("userSelect", { prefix: !0 }),
        Aa("margin", {
          parser: ta("marginTop,marginRight,marginBottom,marginLeft"),
        }),
        Aa("padding", {
          parser: ta("paddingTop,paddingRight,paddingBottom,paddingLeft"),
        }),
        Aa("clip", {
          defaultValue: "rect(0px,0px,0px,0px)",
          parser: function (a, b, c, d, f, g) {
            var h, i, j;
            return (
              9 > p
                ? ((i = a.currentStyle),
                  (j = 8 > p ? " " : ","),
                  (h =
                    "rect(" +
                    i.clipTop +
                    j +
                    i.clipRight +
                    j +
                    i.clipBottom +
                    j +
                    i.clipLeft +
                    ")"),
                  (b = this.format(b).split(",").join(j)))
                : ((h = this.format(ba(a, this.p, e, !1, this.dflt))),
                  (b = this.format(b))),
              this.parseComplex(a.style, h, b, f, g)
            );
          },
        }),
        Aa("textShadow", {
          defaultValue: "0px 0px 0px #999",
          color: !0,
          multi: !0,
        }),
        Aa("autoRound,strictUnits", {
          parser: function (a, b, c, d, e) {
            return e;
          },
        }),
        Aa("border", {
          defaultValue: "0px solid #000",
          parser: function (a, b, c, d, f, g) {
            var h = ba(a, "borderTopWidth", e, !1, "0px"),
              i = this.format(b).split(" "),
              j = i[0].replace(x, "");
            return (
              "px" !== j &&
                (h = parseFloat(h) / ca(a, "borderTopWidth", 1, j) + j),
              this.parseComplex(
                a.style,
                this.format(
                  h +
                    " " +
                    ba(a, "borderTopStyle", e, !1, "solid") +
                    " " +
                    ba(a, "borderTopColor", e, !1, "#000")
                ),
                i.join(" "),
                f,
                g
              )
            );
          },
          color: !0,
          formatter: function (a) {
            var b = a.split(" ");
            return (
              b[0] +
              " " +
              (b[1] || "solid") +
              " " +
              (a.match(ra) || ["#000"])[0]
            );
          },
        }),
        Aa("borderWidth", {
          parser: ta(
            "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
          ),
        }),
        Aa("float,cssFloat,styleFloat", {
          parser: function (a, b, c, d, e, f) {
            var g = a.style,
              h = "cssFloat" in g ? "cssFloat" : "styleFloat";
            return new va(g, h, 0, 0, e, -1, c, !1, 0, g[h], b);
          },
        });
      var Wa = function (a) {
        var b,
          c = this.t,
          d = c.filter || ba(this.data, "filter") || "",
          e = (this.s + this.c * a) | 0;
        100 === e &&
          (-1 === d.indexOf("atrix(") &&
          -1 === d.indexOf("radient(") &&
          -1 === d.indexOf("oader(")
            ? (c.removeAttribute("filter"), (b = !ba(this.data, "filter")))
            : ((c.filter = d.replace(A, "")), (b = !0))),
          b ||
            (this.xn1 && (c.filter = d = d || "alpha(opacity=" + e + ")"),
            -1 === d.indexOf("pacity")
              ? (0 === e && this.xn1) ||
                (c.filter = d + " alpha(opacity=" + e + ")")
              : (c.filter = d.replace(y, "opacity=" + e)));
      };
      Aa("opacity,alpha,autoAlpha", {
        defaultValue: "1",
        parser: function (a, b, c, d, f, g) {
          var h = parseFloat(ba(a, "opacity", e, !1, "1")),
            i = a.style,
            j = "autoAlpha" === c;
          return (
            "string" == typeof b &&
              "=" === b.charAt(1) &&
              (b =
                ("-" === b.charAt(0) ? -1 : 1) * parseFloat(b.substr(2)) + h),
            j &&
              1 === h &&
              "hidden" === ba(a, "visibility", e) &&
              0 !== b &&
              (h = 0),
            V
              ? (f = new va(i, "opacity", h, b - h, f))
              : ((f = new va(i, "opacity", 100 * h, 100 * (b - h), f)),
                (f.xn1 = j ? 1 : 0),
                (i.zoom = 1),
                (f.type = 2),
                (f.b = "alpha(opacity=" + f.s + ")"),
                (f.e = "alpha(opacity=" + (f.s + f.c) + ")"),
                (f.data = a),
                (f.plugin = g),
                (f.setRatio = Wa)),
            j &&
              ((f = new va(
                i,
                "visibility",
                0,
                0,
                f,
                -1,
                null,
                !1,
                0,
                0 !== h ? "inherit" : "hidden",
                0 === b ? "hidden" : "inherit"
              )),
              (f.xs0 = "inherit"),
              d._overwriteProps.push(f.n),
              d._overwriteProps.push(c)),
            f
          );
        },
      });
      var Xa = function (a, b) {
          b &&
            (a.removeProperty
              ? (("ms" === b.substr(0, 2) || "webkit" === b.substr(0, 6)) &&
                  (b = "-" + b),
                a.removeProperty(b.replace(C, "-$1").toLowerCase()))
              : a.removeAttribute(b));
        },
        Ya = function (a) {
          if (((this.t._gsClassPT = this), 1 === a || 0 === a)) {
            this.t.setAttribute("class", 0 === a ? this.b : this.e);
            for (var b = this.data, c = this.t.style; b; )
              b.v ? (c[b.p] = b.v) : Xa(c, b.p), (b = b._next);
            1 === a && this.t._gsClassPT === this && (this.t._gsClassPT = null);
          } else
            this.t.getAttribute("class") !== this.e &&
              this.t.setAttribute("class", this.e);
        };
      Aa("className", {
        parser: function (a, b, d, f, g, h, i) {
          var j,
            k,
            l,
            m,
            n,
            o = a.getAttribute("class") || "",
            p = a.style.cssText;
          if (
            ((g = f._classNamePT = new va(a, d, 0, 0, g, 2)),
            (g.setRatio = Ya),
            (g.pr = -11),
            (c = !0),
            (g.b = o),
            (k = ea(a, e)),
            (l = a._gsClassPT))
          ) {
            for (m = {}, n = l.data; n; ) (m[n.p] = 1), (n = n._next);
            l.setRatio(1);
          }
          return (
            (a._gsClassPT = g),
            (g.e =
              "=" !== b.charAt(1)
                ? b
                : o.replace(
                    new RegExp("(?:\\s|^)" + b.substr(2) + "(?![\\w-])"),
                    ""
                  ) + ("+" === b.charAt(0) ? " " + b.substr(2) : "")),
            a.setAttribute("class", g.e),
            (j = fa(a, k, ea(a), i, m)),
            a.setAttribute("class", o),
            (g.data = j.firstMPT),
            a.style.cssText !== p && (a.style.cssText = p),
            (g = g.xfirst = f.parse(a, j.difs, g, h))
          );
        },
      });
      var Za = function (a) {
        if (
          (1 === a || 0 === a) &&
          this.data._totalTime === this.data._totalDuration &&
          "isFromStart" !== this.data.data
        ) {
          var b,
            c,
            d,
            e,
            f,
            g = this.t.style,
            h = i.transform.parse;
          if ("all" === this.e) (g.cssText = ""), (e = !0);
          else
            for (
              b = this.e.split(" ").join("").split(","), d = b.length;
              --d > -1;

            )
              (c = b[d]),
                i[c] &&
                  (i[c].parse === h
                    ? (e = !0)
                    : (c = "transformOrigin" === c ? Ga : i[c].p)),
                Xa(g, c);
          e &&
            (Xa(g, Ea),
            (f = this.t._gsTransform),
            f &&
              (f.svg &&
                (this.t.removeAttribute("data-svg-origin"),
                this.t.removeAttribute("transform")),
              delete this.t._gsTransform));
        }
      };
      for (
        Aa("clearProps", {
          parser: function (a, b, d, e, f) {
            return (
              (f = new va(a, d, 0, 0, f, 2)),
              (f.setRatio = Za),
              (f.e = b),
              (f.pr = -10),
              (f.data = e._tween),
              (c = !0),
              f
            );
          },
        }),
          j = "bezier,throwProps,physicsProps,physics2D".split(","),
          ya = j.length;
        ya--;

      )
        Ba(j[ya]);
      (j = g.prototype),
        (j._firstPT = j._lastParsedTransform = j._transform = null),
        (j._onInitTween = function (a, b, h, j) {
          if (!a.nodeType) return !1;
          (this._target = q = a),
            (this._tween = h),
            (this._vars = b),
            (r = j),
            (k = b.autoRound),
            (c = !1),
            (d = b.suffixMap || g.suffixMap),
            (e = aa(a, "")),
            (f = this._overwriteProps);
          var n,
            p,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            A = a.style;
          if (
            (l &&
              "" === A.zIndex &&
              ((n = ba(a, "zIndex", e)),
              ("auto" === n || "" === n) && this._addLazySet(A, "zIndex", 0)),
            "string" == typeof b &&
              ((t = A.cssText),
              (n = ea(a, e)),
              (A.cssText = t + ";" + b),
              (n = fa(a, n, ea(a)).difs),
              !V && z.test(b) && (n.opacity = parseFloat(RegExp.$1)),
              (b = n),
              (A.cssText = t)),
            b.className
              ? (this._firstPT = p =
                  i.className.parse(
                    a,
                    b.className,
                    "className",
                    this,
                    null,
                    null,
                    b
                  ))
              : (this._firstPT = p = this.parse(a, b, null)),
            this._transformType)
          ) {
            for (
              y = 3 === this._transformType,
                Ea
                  ? m &&
                    ((l = !0),
                    "" === A.zIndex &&
                      ((w = ba(a, "zIndex", e)),
                      ("auto" === w || "" === w) &&
                        this._addLazySet(A, "zIndex", 0)),
                    o &&
                      this._addLazySet(
                        A,
                        "WebkitBackfaceVisibility",
                        this._vars.WebkitBackfaceVisibility ||
                          (y ? "visible" : "hidden")
                      ))
                  : (A.zoom = 1),
                s = p;
              s && s._next;

            )
              s = s._next;
            (x = new va(a, "transform", 0, 0, null, 2)),
              this._linkCSSP(x, null, s),
              (x.setRatio = Ea ? Va : Ua),
              (x.data = this._transform || Ta(a, e, !0)),
              (x.tween = h),
              (x.pr = -1),
              f.pop();
          }
          if (c) {
            for (; p; ) {
              for (v = p._next, s = t; s && s.pr > p.pr; ) s = s._next;
              (p._prev = s ? s._prev : u) ? (p._prev._next = p) : (t = p),
                (p._next = s) ? (s._prev = p) : (u = p),
                (p = v);
            }
            this._firstPT = t;
          }
          return !0;
        }),
        (j.parse = function (a, b, c, f) {
          var g,
            h,
            j,
            l,
            m,
            n,
            o,
            p,
            s,
            t,
            u = a.style;
          for (g in b) {
            if (
              ((n = b[g]),
              (h = i[g]),
              "function" != typeof n || (h && h.allowFunc) || (n = n(r, q)),
              h)
            )
              c = h.parse(a, n, g, this, c, f, b);
            else {
              if ("--" === g.substr(0, 2)) {
                this._tween._propLookup[g] = this._addTween.call(
                  this._tween,
                  a.style,
                  "setProperty",
                  aa(a).getPropertyValue(g) + "",
                  n + "",
                  g,
                  !1,
                  g
                );
                continue;
              }
              (m = ba(a, g, e) + ""),
                (s = "string" == typeof n),
                "color" === g ||
                "fill" === g ||
                "stroke" === g ||
                -1 !== g.indexOf("Color") ||
                (s && B.test(n))
                  ? (s ||
                      ((n = pa(n)),
                      (n =
                        (n.length > 3 ? "rgba(" : "rgb(") + n.join(",") + ")")),
                    (c = xa(u, g, m, n, !0, "transparent", c, 0, f)))
                  : s && K.test(n)
                  ? (c = xa(u, g, m, n, !0, null, c, 0, f))
                  : ((j = parseFloat(m)),
                    (o = j || 0 === j ? m.substr((j + "").length) : ""),
                    ("" === m || "auto" === m) &&
                      ("width" === g || "height" === g
                        ? ((j = ia(a, g, e)), (o = "px"))
                        : "left" === g || "top" === g
                        ? ((j = da(a, g, e)), (o = "px"))
                        : ((j = "opacity" !== g ? 0 : 1), (o = ""))),
                    (t = s && "=" === n.charAt(1)),
                    t
                      ? ((l = parseInt(n.charAt(0) + "1", 10)),
                        (n = n.substr(2)),
                        (l *= parseFloat(n)),
                        (p = n.replace(x, "")))
                      : ((l = parseFloat(n)), (p = s ? n.replace(x, "") : "")),
                    "" === p && (p = g in d ? d[g] : o),
                    (n = l || 0 === l ? (t ? l + j : l) + p : b[g]),
                    o !== p &&
                      ("" !== p || "lineHeight" === g) &&
                      (l || 0 === l) &&
                      j &&
                      ((j = ca(a, g, j, o)),
                      "%" === p
                        ? ((j /= ca(a, g, 100, "%") / 100),
                          b.strictUnits !== !0 && (m = j + "%"))
                        : "em" === p || "rem" === p || "vw" === p || "vh" === p
                        ? (j /= ca(a, g, 1, p))
                        : "px" !== p && ((l = ca(a, g, l, p)), (p = "px")),
                      t && (l || 0 === l) && (n = l + j + p)),
                    t && (l += j),
                    (!j && 0 !== j) || (!l && 0 !== l)
                      ? void 0 !== u[g] && (n || (n + "" != "NaN" && null != n))
                        ? ((c = new va(
                            u,
                            g,
                            l || j || 0,
                            0,
                            c,
                            -1,
                            g,
                            !1,
                            0,
                            m,
                            n
                          )),
                          (c.xs0 =
                            "none" !== n ||
                            ("display" !== g && -1 === g.indexOf("Style"))
                              ? n
                              : m))
                        : X("invalid " + g + " tween value: " + b[g])
                      : ((c = new va(
                          u,
                          g,
                          j,
                          l - j,
                          c,
                          0,
                          g,
                          k !== !1 && ("px" === p || "zIndex" === g),
                          0,
                          m,
                          n
                        )),
                        (c.xs0 = p)));
            }
            f && c && !c.plugin && (c.plugin = f);
          }
          return c;
        }),
        (j.setRatio = function (a) {
          var b,
            c,
            d,
            e = this._firstPT,
            f = 1e-6;
          if (
            1 !== a ||
            (this._tween._time !== this._tween._duration &&
              0 !== this._tween._time)
          )
            if (
              a ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time) ||
              this._tween._rawPrevTime === -1e-6
            )
              for (; e; ) {
                if (
                  ((b = e.c * a + e.s),
                  e.r ? (b = e.r(b)) : f > b && b > -f && (b = 0),
                  e.type)
                )
                  if (1 === e.type)
                    if (((d = e.l), 2 === d))
                      e.t[e.p] = e.xs0 + b + e.xs1 + e.xn1 + e.xs2;
                    else if (3 === d)
                      e.t[e.p] =
                        e.xs0 + b + e.xs1 + e.xn1 + e.xs2 + e.xn2 + e.xs3;
                    else if (4 === d)
                      e.t[e.p] =
                        e.xs0 +
                        b +
                        e.xs1 +
                        e.xn1 +
                        e.xs2 +
                        e.xn2 +
                        e.xs3 +
                        e.xn3 +
                        e.xs4;
                    else if (5 === d)
                      e.t[e.p] =
                        e.xs0 +
                        b +
                        e.xs1 +
                        e.xn1 +
                        e.xs2 +
                        e.xn2 +
                        e.xs3 +
                        e.xn3 +
                        e.xs4 +
                        e.xn4 +
                        e.xs5;
                    else {
                      for (c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                        c += e["xn" + d] + e["xs" + (d + 1)];
                      e.t[e.p] = c;
                    }
                  else
                    -1 === e.type
                      ? (e.t[e.p] = e.xs0)
                      : e.setRatio && e.setRatio(a);
                else e.t[e.p] = b + e.xs0;
                e = e._next;
              }
            else
              for (; e; )
                2 !== e.type ? (e.t[e.p] = e.b) : e.setRatio(a), (e = e._next);
          else
            for (; e; ) {
              if (2 !== e.type)
                if (e.r && -1 !== e.type)
                  if (((b = e.r(e.s + e.c)), e.type)) {
                    if (1 === e.type) {
                      for (d = e.l, c = e.xs0 + b + e.xs1, d = 1; d < e.l; d++)
                        c += e["xn" + d] + e["xs" + (d + 1)];
                      e.t[e.p] = c;
                    }
                  } else e.t[e.p] = b + e.xs0;
                else e.t[e.p] = e.e;
              else e.setRatio(a);
              e = e._next;
            }
        }),
        (j._enableTransforms = function (a) {
          (this._transform = this._transform || Ta(this._target, e, !0)),
            (this._transformType =
              (this._transform.svg && Ca) || (!a && 3 !== this._transformType)
                ? 2
                : 3);
        });
      var $a = function (a) {
        (this.t[this.p] = this.e),
          this.data._linkCSSP(this, this._next, null, !0);
      };
      (j._addLazySet = function (a, b, c) {
        var d = (this._firstPT = new va(a, b, 0, 0, this._firstPT, 2));
        (d.e = c), (d.setRatio = $a), (d.data = this);
      }),
        (j._linkCSSP = function (a, b, c, d) {
          return (
            a &&
              (b && (b._prev = a),
              a._next && (a._next._prev = a._prev),
              a._prev
                ? (a._prev._next = a._next)
                : this._firstPT === a && ((this._firstPT = a._next), (d = !0)),
              c
                ? (c._next = a)
                : d || null !== this._firstPT || (this._firstPT = a),
              (a._next = b),
              (a._prev = c)),
            a
          );
        }),
        (j._mod = function (a) {
          for (var b = this._firstPT; b; )
            "function" == typeof a[b.p] && (b.r = a[b.p]), (b = b._next);
        }),
        (j._kill = function (b) {
          var c,
            d,
            e,
            f = b;
          if (b.autoAlpha || b.alpha) {
            f = {};
            for (d in b) f[d] = b[d];
            (f.opacity = 1), f.autoAlpha && (f.visibility = 1);
          }
          for (
            b.className &&
              (c = this._classNamePT) &&
              ((e = c.xfirst),
              e && e._prev
                ? this._linkCSSP(e._prev, c._next, e._prev._prev)
                : e === this._firstPT && (this._firstPT = c._next),
              c._next && this._linkCSSP(c._next, c._next._next, e._prev),
              (this._classNamePT = null)),
              c = this._firstPT;
            c;

          )
            c.plugin &&
              c.plugin !== d &&
              c.plugin._kill &&
              (c.plugin._kill(b), (d = c.plugin)),
              (c = c._next);
          return a.prototype._kill.call(this, f);
        });
      var _a = function (a, b, c) {
        var d, e, f, g;
        if (a.slice) for (e = a.length; --e > -1; ) _a(a[e], b, c);
        else
          for (d = a.childNodes, e = d.length; --e > -1; )
            (f = d[e]),
              (g = f.type),
              f.style && (b.push(ea(f)), c && c.push(f)),
              (1 !== g && 9 !== g && 11 !== g) ||
                !f.childNodes.length ||
                _a(f, b, c);
      };
      return (
        (g.cascadeTo = function (a, c, d) {
          var e,
            f,
            g,
            h,
            i = b.to(a, c, d),
            j = [i],
            k = [],
            l = [],
            m = [],
            n = b._internals.reservedProps;
          for (
            a = i._targets || i.target,
              _a(a, k, m),
              i.render(c, !0, !0),
              _a(a, l),
              i.render(0, !0, !0),
              i._enabled(!0),
              e = m.length;
            --e > -1;

          )
            if (((f = fa(m[e], k[e], l[e])), f.firstMPT)) {
              f = f.difs;
              for (g in d) n[g] && (f[g] = d[g]);
              h = {};
              for (g in f) h[g] = k[e][g];
              j.push(b.fromTo(m[e], c, h, f));
            }
          return j;
        }),
        a.activate([g]),
        g
      );
    },
    !0
  );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (a) {
    "use strict";
    var b = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[a];
    };
    "undefined" != typeof module && module.exports
      ? (require("../TweenLite.min.js"), (module.exports = b()))
      : "function" == typeof define && define.amd && define(["TweenLite"], b);
  })("CSSPlugin");

/* EasePack   */

var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "easing.Back",
    ["easing.Ease"],
    function (a) {
      var b,
        c,
        d,
        e,
        f = _gsScope.GreenSockGlobals || _gsScope,
        g = f.com.greensock,
        h = 2 * Math.PI,
        i = Math.PI / 2,
        j = g._class,
        k = function (b, c) {
          var d = j("easing." + b, function () {}, !0),
            e = (d.prototype = new a());
          return (e.constructor = d), (e.getRatio = c), d;
        },
        l = a.register || function () {},
        m = function (a, b, c, d, e) {
          var f = j(
            "easing." + a,
            { easeOut: new b(), easeIn: new c(), easeInOut: new d() },
            !0
          );
          return l(f, a), f;
        },
        n = function (a, b, c) {
          (this.t = a),
            (this.v = b),
            c &&
              ((this.next = c),
              (c.prev = this),
              (this.c = c.v - b),
              (this.gap = c.t - a));
        },
        o = function (b, c) {
          var d = j(
              "easing." + b,
              function (a) {
                (this._p1 = a || 0 === a ? a : 1.70158),
                  (this._p2 = 1.525 * this._p1);
              },
              !0
            ),
            e = (d.prototype = new a());
          return (
            (e.constructor = d),
            (e.getRatio = c),
            (e.config = function (a) {
              return new d(a);
            }),
            d
          );
        },
        p = m(
          "Back",
          o("BackOut", function (a) {
            return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1;
          }),
          o("BackIn", function (a) {
            return a * a * ((this._p1 + 1) * a - this._p1);
          }),
          o("BackInOut", function (a) {
            return (a *= 2) < 1
              ? 0.5 * a * a * ((this._p2 + 1) * a - this._p2)
              : 0.5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2);
          })
        ),
        q = j(
          "easing.SlowMo",
          function (a, b, c) {
            (b = b || 0 === b ? b : 0.7),
              null == a ? (a = 0.7) : a > 1 && (a = 1),
              (this._p = 1 !== a ? b : 0),
              (this._p1 = (1 - a) / 2),
              (this._p2 = a),
              (this._p3 = this._p1 + this._p2),
              (this._calcEnd = c === !0);
          },
          !0
        ),
        r = (q.prototype = new a());
      return (
        (r.constructor = q),
        (r.getRatio = function (a) {
          var b = a + (0.5 - a) * this._p;
          return a < this._p1
            ? this._calcEnd
              ? 1 - (a = 1 - a / this._p1) * a
              : b - (a = 1 - a / this._p1) * a * a * a * b
            : a > this._p3
            ? this._calcEnd
              ? 1 === a
                ? 0
                : 1 - (a = (a - this._p3) / this._p1) * a
              : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a
            : this._calcEnd
            ? 1
            : b;
        }),
        (q.ease = new q(0.7, 0.7)),
        (r.config = q.config =
          function (a, b, c) {
            return new q(a, b, c);
          }),
        (b = j(
          "easing.SteppedEase",
          function (a, b) {
            (a = a || 1),
              (this._p1 = 1 / a),
              (this._p2 = a + (b ? 0 : 1)),
              (this._p3 = b ? 1 : 0);
          },
          !0
        )),
        (r = b.prototype = new a()),
        (r.constructor = b),
        (r.getRatio = function (a) {
          return (
            0 > a ? (a = 0) : a >= 1 && (a = 0.999999999),
            (((this._p2 * a) | 0) + this._p3) * this._p1
          );
        }),
        (r.config = b.config =
          function (a, c) {
            return new b(a, c);
          }),
        (c = j(
          "easing.ExpoScaleEase",
          function (a, b, c) {
            (this._p1 = Math.log(b / a)),
              (this._p2 = b - a),
              (this._p3 = a),
              (this._ease = c);
          },
          !0
        )),
        (r = c.prototype = new a()),
        (r.constructor = c),
        (r.getRatio = function (a) {
          return (
            this._ease && (a = this._ease.getRatio(a)),
            (this._p3 * Math.exp(this._p1 * a) - this._p3) / this._p2
          );
        }),
        (r.config = c.config =
          function (a, b, d) {
            return new c(a, b, d);
          }),
        (d = j(
          "easing.RoughEase",
          function (b) {
            b = b || {};
            for (
              var c,
                d,
                e,
                f,
                g,
                h,
                i = b.taper || "none",
                j = [],
                k = 0,
                l = 0 | (b.points || 20),
                m = l,
                o = b.randomize !== !1,
                p = b.clamp === !0,
                q = b.template instanceof a ? b.template : null,
                r = "number" == typeof b.strength ? 0.4 * b.strength : 0.4;
              --m > -1;

            )
              (c = o ? Math.random() : (1 / l) * m),
                (d = q ? q.getRatio(c) : c),
                "none" === i
                  ? (e = r)
                  : "out" === i
                  ? ((f = 1 - c), (e = f * f * r))
                  : "in" === i
                  ? (e = c * c * r)
                  : 0.5 > c
                  ? ((f = 2 * c), (e = f * f * 0.5 * r))
                  : ((f = 2 * (1 - c)), (e = f * f * 0.5 * r)),
                o
                  ? (d += Math.random() * e - 0.5 * e)
                  : m % 2
                  ? (d += 0.5 * e)
                  : (d -= 0.5 * e),
                p && (d > 1 ? (d = 1) : 0 > d && (d = 0)),
                (j[k++] = { x: c, y: d });
            for (
              j.sort(function (a, b) {
                return a.x - b.x;
              }),
                h = new n(1, 1, null),
                m = l;
              --m > -1;

            )
              (g = j[m]), (h = new n(g.x, g.y, h));
            this._prev = new n(0, 0, 0 !== h.t ? h : h.next);
          },
          !0
        )),
        (r = d.prototype = new a()),
        (r.constructor = d),
        (r.getRatio = function (a) {
          var b = this._prev;
          if (a > b.t) {
            for (; b.next && a >= b.t; ) b = b.next;
            b = b.prev;
          } else for (; b.prev && a <= b.t; ) b = b.prev;
          return (this._prev = b), b.v + ((a - b.t) / b.gap) * b.c;
        }),
        (r.config = function (a) {
          return new d(a);
        }),
        (d.ease = new d()),
        m(
          "Bounce",
          k("BounceOut", function (a) {
            return 1 / 2.75 > a
              ? 7.5625 * a * a
              : 2 / 2.75 > a
              ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
              : 2.5 / 2.75 > a
              ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
              : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375;
          }),
          k("BounceIn", function (a) {
            return (a = 1 - a) < 1 / 2.75
              ? 1 - 7.5625 * a * a
              : 2 / 2.75 > a
              ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + 0.75)
              : 2.5 / 2.75 > a
              ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375)
              : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375);
          }),
          k("BounceInOut", function (a) {
            var b = 0.5 > a;
            return (
              (a = b ? 1 - 2 * a : 2 * a - 1),
              (a =
                1 / 2.75 > a
                  ? 7.5625 * a * a
                  : 2 / 2.75 > a
                  ? 7.5625 * (a -= 1.5 / 2.75) * a + 0.75
                  : 2.5 / 2.75 > a
                  ? 7.5625 * (a -= 2.25 / 2.75) * a + 0.9375
                  : 7.5625 * (a -= 2.625 / 2.75) * a + 0.984375),
              b ? 0.5 * (1 - a) : 0.5 * a + 0.5
            );
          })
        ),
        m(
          "Circ",
          k("CircOut", function (a) {
            return Math.sqrt(1 - (a -= 1) * a);
          }),
          k("CircIn", function (a) {
            return -(Math.sqrt(1 - a * a) - 1);
          }),
          k("CircInOut", function (a) {
            return (a *= 2) < 1
              ? -0.5 * (Math.sqrt(1 - a * a) - 1)
              : 0.5 * (Math.sqrt(1 - (a -= 2) * a) + 1);
          })
        ),
        (e = function (b, c, d) {
          var e = j(
              "easing." + b,
              function (a, b) {
                (this._p1 = a >= 1 ? a : 1),
                  (this._p2 = (b || d) / (1 > a ? a : 1)),
                  (this._p3 = (this._p2 / h) * (Math.asin(1 / this._p1) || 0)),
                  (this._p2 = h / this._p2);
              },
              !0
            ),
            f = (e.prototype = new a());
          return (
            (f.constructor = e),
            (f.getRatio = c),
            (f.config = function (a, b) {
              return new e(a, b);
            }),
            e
          );
        }),
        m(
          "Elastic",
          e(
            "ElasticOut",
            function (a) {
              return (
                this._p1 *
                  Math.pow(2, -10 * a) *
                  Math.sin((a - this._p3) * this._p2) +
                1
              );
            },
            0.3
          ),
          e(
            "ElasticIn",
            function (a) {
              return -(
                this._p1 *
                Math.pow(2, 10 * (a -= 1)) *
                Math.sin((a - this._p3) * this._p2)
              );
            },
            0.3
          ),
          e(
            "ElasticInOut",
            function (a) {
              return (a *= 2) < 1
                ? -0.5 *
                    (this._p1 *
                      Math.pow(2, 10 * (a -= 1)) *
                      Math.sin((a - this._p3) * this._p2))
                : this._p1 *
                    Math.pow(2, -10 * (a -= 1)) *
                    Math.sin((a - this._p3) * this._p2) *
                    0.5 +
                    1;
            },
            0.45
          )
        ),
        m(
          "Expo",
          k("ExpoOut", function (a) {
            return 1 - Math.pow(2, -10 * a);
          }),
          k("ExpoIn", function (a) {
            return Math.pow(2, 10 * (a - 1)) - 0.001;
          }),
          k("ExpoInOut", function (a) {
            return (a *= 2) < 1
              ? 0.5 * Math.pow(2, 10 * (a - 1))
              : 0.5 * (2 - Math.pow(2, -10 * (a - 1)));
          })
        ),
        m(
          "Sine",
          k("SineOut", function (a) {
            return Math.sin(a * i);
          }),
          k("SineIn", function (a) {
            return -Math.cos(a * i) + 1;
          }),
          k("SineInOut", function (a) {
            return -0.5 * (Math.cos(Math.PI * a) - 1);
          })
        ),
        j(
          "easing.EaseLookup",
          {
            find: function (b) {
              return a.map[b];
            },
          },
          !0
        ),
        l(f.SlowMo, "SlowMo", "ease,"),
        l(d, "RoughEase", "ease,"),
        l(b, "SteppedEase", "ease,"),
        p
      );
    },
    !0
  );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function () {
    "use strict";
    var a = function () {
      return _gsScope.GreenSockGlobals || _gsScope;
    };
    "undefined" != typeof module && module.exports
      ? (require("../TweenLite.min.js"), (module.exports = a()))
      : "function" == typeof define && define.amd && define(["TweenLite"], a);
  })();

/* Scroll To   */

!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (e) {
  "use strict";
  function k() {
    return "undefined" != typeof window;
  }
  function l() {
    return i || (k() && (i = window.gsap) && i.registerPlugin && i);
  }
  function m(t) {
    return "string" == typeof t;
  }
  function n(t) {
    return "function" == typeof t;
  }
  function o(t, e) {
    var o = "x" === e ? "Width" : "Height",
      n = "scroll" + o,
      r = "client" + o;
    return t === x || t === u || t === c
      ? Math.max(u[n], c[n]) - (x["inner" + o] || u[r] || c[r])
      : t[n] - t["offset" + o];
  }
  function p(t, e) {
    var o = "scroll" + ("x" === e ? "Left" : "Top");
    return (
      t === x &&
        (null != t.pageXOffset
          ? (o = "page" + e.toUpperCase() + "Offset")
          : (t = null != u[o] ? u : c)),
      function () {
        return t[o];
      }
    );
  }
  function r(t, e) {
    if (!(t = a(t)[0]) || !t.getBoundingClientRect)
      return (
        console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 }
      );
    var o = t.getBoundingClientRect(),
      n = !e || e === x || e === c,
      r = n
        ? {
            top:
              u.clientTop - (x.pageYOffset || u.scrollTop || c.scrollTop || 0),
            left:
              u.clientLeft -
              (x.pageXOffset || u.scrollLeft || c.scrollLeft || 0),
          }
        : e.getBoundingClientRect(),
      i = { x: o.left - r.left, y: o.top - r.top };
    return !n && e && ((i.x += p(e, "x")()), (i.y += p(e, "y")())), i;
  }
  function s(t, e, n, i, l) {
    return isNaN(t) || "object" == typeof t
      ? m(t) && "=" === t.charAt(1)
        ? parseFloat(t.substr(2)) * ("-" === t.charAt(0) ? -1 : 1) + i - l
        : "max" === t
        ? o(e, n) - l
        : Math.min(o(e, n), r(t, e)[n] - l)
      : parseFloat(t) - l;
  }
  function t() {
    (i = l()),
      k() &&
        i &&
        document.body &&
        ((x = window),
        (c = document.body),
        (u = document.documentElement),
        (a = i.utils.toArray),
        i.config({ autoKillThreshold: 7 }),
        (g = i.config()),
        (f = 1));
  }
  var i,
    f,
    x,
    u,
    c,
    a,
    g,
    d = {
      version: "3.6.0",
      name: "scrollTo",
      rawVars: 1,
      register: function register(e) {
        (i = e), t();
      },
      init: function init(e, o, r, i, l) {
        f || t();
        var u = this;
        (u.isWin = e === x),
          (u.target = e),
          (u.tween = r),
          (o = (function _clean(t, e, o, r) {
            if ((n(t) && (t = t(e, o, r)), "object" != typeof t))
              return m(t) && "max" !== t && "=" !== t.charAt(1)
                ? { x: t, y: t }
                : { y: t };
            if (t.nodeType) return { y: t, x: t };
            var i,
              l = {};
            for (i in t)
              "onAutoKill" !== i && (l[i] = n(t[i]) ? t[i](e, o, r) : t[i]);
            return l;
          })(o, i, e, l)),
          (u.vars = o),
          (u.autoKill = !!o.autoKill),
          (u.getX = p(e, "x")),
          (u.getY = p(e, "y")),
          (u.x = u.xPrev = u.getX()),
          (u.y = u.yPrev = u.getY()),
          null != o.x
            ? (u.add(
                u,
                "x",
                u.x,
                s(o.x, e, "x", u.x, o.offsetX || 0),
                i,
                l,
                Math.round
              ),
              u._props.push("scrollTo_x"))
            : (u.skipX = 1),
          null != o.y
            ? (u.add(
                u,
                "y",
                u.y,
                s(o.y, e, "y", u.y, o.offsetY || 0),
                i,
                l,
                Math.round
              ),
              u._props.push("scrollTo_y"))
            : (u.skipY = 1);
      },
      render: function render(t, e) {
        for (
          var n,
            r,
            i,
            l,
            s,
            u = e._pt,
            f = e.target,
            p = e.tween,
            c = e.autoKill,
            a = e.xPrev,
            d = e.yPrev,
            y = e.isWin;
          u;

        )
          u.r(t, u.d), (u = u._next);
        (n = y || !e.skipX ? e.getX() : a),
          (i = (r = y || !e.skipY ? e.getY() : d) - d),
          (l = n - a),
          (s = g.autoKillThreshold),
          e.x < 0 && (e.x = 0),
          e.y < 0 && (e.y = 0),
          c &&
            (!e.skipX && (s < l || l < -s) && n < o(f, "x") && (e.skipX = 1),
            !e.skipY && (s < i || i < -s) && r < o(f, "y") && (e.skipY = 1),
            e.skipX &&
              e.skipY &&
              (p.kill(),
              e.vars.onAutoKill &&
                e.vars.onAutoKill.apply(p, e.vars.onAutoKillParams || []))),
          y
            ? x.scrollTo(e.skipX ? n : e.x, e.skipY ? r : e.y)
            : (e.skipY || (f.scrollTop = e.y), e.skipX || (f.scrollLeft = e.x)),
          (e.xPrev = e.x),
          (e.yPrev = e.y);
      },
      kill: function kill(t) {
        var e = "scrollTo" === t;
        (!e && "scrollTo_x" !== t) || (this.skipX = 1),
          (!e && "scrollTo_y" !== t) || (this.skipY = 1);
      },
    };
  (d.max = o),
    (d.getOffset = r),
    (d.buildGetter = p),
    l() && i.registerPlugin(d),
    (e.ScrollToPlugin = d),
    (e.default = d);
  if (typeof window === "undefined" || window !== e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  } else {
    delete e.default;
  }
});

/* Justified-Gallery  */

!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof module && module.exports
    ? (module.exports = function (t, i) {
        return (
          void 0 === i &&
            (i =
              "undefined" != typeof window
                ? require("jquery")
                : require("jquery")(t)),
          e(i),
          i
        );
      })
    : e(jQuery);
})(function (g) {
  var r = function (t, i) {
    (this.settings = i),
      this.checkSettings(),
      (this.imgAnalyzerTimeout = null),
      (this.entries = null),
      (this.buildingRow = {
        entriesBuff: [],
        width: 0,
        height: 0,
        aspectRatio: 0,
      }),
      (this.lastFetchedEntry = null),
      (this.lastAnalyzedIndex = -1),
      (this.yield = { every: 2, flushed: 0 }),
      (this.border = 0 <= i.border ? i.border : i.margins),
      (this.maxRowHeight = this.retrieveMaxRowHeight()),
      (this.suffixRanges = this.retrieveSuffixRanges()),
      (this.offY = this.border),
      (this.rows = 0),
      (this.spinner = {
        phase: 0,
        timeSlot: 150,
        $el: g(
          '<div class="spinner"><span></span><span></span><span></span></div>'
        ),
        intervalId: null,
      }),
      (this.scrollBarOn = !1),
      (this.checkWidthIntervalId = null),
      (this.galleryWidth = t.width()),
      (this.$gallery = t);
  };
  (r.prototype.getSuffix = function (t, i) {
    var e, s;
    for (e = i < t ? t : i, s = 0; s < this.suffixRanges.length; s++)
      if (e <= this.suffixRanges[s])
        return this.settings.sizeRangeSuffixes[this.suffixRanges[s]];
    return this.settings.sizeRangeSuffixes[this.suffixRanges[s - 1]];
  }),
    (r.prototype.removeSuffix = function (t, i) {
      return t.substring(0, t.length - i.length);
    }),
    (r.prototype.endsWith = function (t, i) {
      return -1 !== t.indexOf(i, t.length - i.length);
    }),
    (r.prototype.getUsedSuffix = function (t) {
      for (var i in this.settings.sizeRangeSuffixes)
        if (this.settings.sizeRangeSuffixes.hasOwnProperty(i)) {
          if (0 === this.settings.sizeRangeSuffixes[i].length) continue;
          if (this.endsWith(t, this.settings.sizeRangeSuffixes[i]))
            return this.settings.sizeRangeSuffixes[i];
        }
      return "";
    }),
    (r.prototype.newSrc = function (t, i, e, s) {
      var n;
      if (this.settings.thumbnailPath)
        n = this.settings.thumbnailPath(t, i, e, s);
      else {
        var r = t.match(this.settings.extension),
          o = null !== r ? r[0] : "";
        (n = t.replace(this.settings.extension, "")),
          (n = this.removeSuffix(n, this.getUsedSuffix(n))),
          (n += this.getSuffix(i, e) + o);
      }
      return n;
    }),
    (r.prototype.showImg = function (t, i) {
      this.settings.cssAnimation
        ? (t.addClass("entry-visible"), i && i())
        : (t.stop().fadeTo(this.settings.imagesAnimationDuration, 1, i),
          t
            .find(this.settings.imgSelector)
            .stop()
            .fadeTo(this.settings.imagesAnimationDuration, 1, i));
    }),
    (r.prototype.extractImgSrcFromImage = function (t) {
      var i =
        void 0 !== t.data("safe-src") ? t.data("safe-src") : t.attr("src");
      return t.data("jg.originalSrc", i), i;
    }),
    (r.prototype.imgFromEntry = function (t) {
      var i = t.find(this.settings.imgSelector);
      return 0 === i.length ? null : i;
    }),
    (r.prototype.captionFromEntry = function (t) {
      var i = t.find("> .caption");
      return 0 === i.length ? null : i;
    }),
    (r.prototype.displayEntry = function (t, i, e, s, n, r) {
      t.width(s), t.height(r), t.css("top", e), t.css("left", i);
      var o = this.imgFromEntry(t);
      if (null !== o) {
        o.css("width", s),
          o.css("height", n),
          o.css("margin-left", -s / 2),
          o.css("margin-top", -n / 2);
        var a = o.attr("src"),
          h = this.newSrc(a, s, n, o[0]);
        o.one("error", function () {
          o.attr("src", o.data("jg.originalSrc"));
        });
        var l = function () {
          a !== h && o.attr("src", h);
        };
        "skipped" === t.data("jg.loaded")
          ? this.onImageEvent(
              a,
              g.proxy(function () {
                this.showImg(t, l), t.data("jg.loaded", !0);
              }, this)
            )
          : this.showImg(t, l);
      } else this.showImg(t);
      this.displayEntryCaption(t);
    }),
    (r.prototype.displayEntryCaption = function (t) {
      var i = this.imgFromEntry(t);
      if (null !== i && this.settings.captions) {
        var e = this.captionFromEntry(t);
        if (null === e) {
          var s = i.attr("alt");
          this.isValidCaption(s) || (s = t.attr("title")),
            this.isValidCaption(s) &&
              ((e = g('<div class="caption">' + s + "</div>")),
              t.append(e),
              t.data("jg.createdCaption", !0));
        }
        null !== e &&
          (this.settings.cssAnimation ||
            e.stop().fadeTo(0, this.settings.captionSettings.nonVisibleOpacity),
          this.addCaptionEventsHandlers(t));
      } else this.removeCaptionEventsHandlers(t);
    }),
    (r.prototype.isValidCaption = function (t) {
      return void 0 !== t && 0 < t.length;
    }),
    (r.prototype.onEntryMouseEnterForCaption = function (t) {
      var i = this.captionFromEntry(g(t.currentTarget));
      this.settings.cssAnimation
        ? i.addClass("caption-visible").removeClass("caption-hidden")
        : i
            .stop()
            .fadeTo(
              this.settings.captionSettings.animationDuration,
              this.settings.captionSettings.visibleOpacity
            );
    }),
    (r.prototype.onEntryMouseLeaveForCaption = function (t) {
      var i = this.captionFromEntry(g(t.currentTarget));
      this.settings.cssAnimation
        ? i.removeClass("caption-visible").removeClass("caption-hidden")
        : i
            .stop()
            .fadeTo(
              this.settings.captionSettings.animationDuration,
              this.settings.captionSettings.nonVisibleOpacity
            );
    }),
    (r.prototype.addCaptionEventsHandlers = function (t) {
      var i = t.data("jg.captionMouseEvents");
      void 0 === i &&
        ((i = {
          mouseenter: g.proxy(this.onEntryMouseEnterForCaption, this),
          mouseleave: g.proxy(this.onEntryMouseLeaveForCaption, this),
        }),
        t.on("mouseenter", void 0, void 0, i.mouseenter),
        t.on("mouseleave", void 0, void 0, i.mouseleave),
        t.data("jg.captionMouseEvents", i));
    }),
    (r.prototype.removeCaptionEventsHandlers = function (t) {
      var i = t.data("jg.captionMouseEvents");
      void 0 !== i &&
        (t.off("mouseenter", void 0, i.mouseenter),
        t.off("mouseleave", void 0, i.mouseleave),
        t.removeData("jg.captionMouseEvents"));
    }),
    (r.prototype.clearBuildingRow = function () {
      (this.buildingRow.entriesBuff = []),
        (this.buildingRow.aspectRatio = 0),
        (this.buildingRow.width = 0);
    }),
    (r.prototype.prepareBuildingRow = function (t) {
      var i,
        e,
        s,
        n,
        r,
        o = !0,
        a = 0,
        h =
          this.galleryWidth -
          2 * this.border -
          (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
        l = h / this.buildingRow.aspectRatio,
        g = this.settings.rowHeight,
        u = this.buildingRow.width / h > this.settings.justifyThreshold;
      if (t && "hide" === this.settings.lastRow && !u) {
        for (i = 0; i < this.buildingRow.entriesBuff.length; i++)
          (e = this.buildingRow.entriesBuff[i]),
            this.settings.cssAnimation
              ? e.removeClass("entry-visible")
              : (e.stop().fadeTo(0, 0.1),
                e.find("> img, > a > img").fadeTo(0, 0));
        return -1;
      }
      for (
        t &&
          !u &&
          "justify" !== this.settings.lastRow &&
          "hide" !== this.settings.lastRow &&
          ((o = !1),
          0 < this.rows &&
            (o =
              ((g =
                (this.offY - this.border - this.settings.margins * this.rows) /
                this.rows) *
                this.buildingRow.aspectRatio) /
                h >
              this.settings.justifyThreshold)),
          i = 0;
        i < this.buildingRow.entriesBuff.length;
        i++
      )
        (s =
          (e = this.buildingRow.entriesBuff[i]).data("jg.width") /
          e.data("jg.height")),
          o
            ? ((n = i === this.buildingRow.entriesBuff.length - 1 ? h : l * s),
              (r = l))
            : ((n = g * s), (r = g)),
          (h -= Math.round(n)),
          e.data("jg.jwidth", Math.round(n)),
          e.data("jg.jheight", Math.ceil(r)),
          (0 === i || r < a) && (a = r);
      return (this.buildingRow.height = a), o;
    }),
    (r.prototype.flushRow = function (t) {
      var i,
        e,
        s,
        n = this.settings,
        r = this.border;
      if (
        ((e = this.prepareBuildingRow(t)),
        t && "hide" === n.lastRow && -1 === e)
      )
        this.clearBuildingRow();
      else {
        if (
          (this.maxRowHeight &&
            this.maxRowHeight < this.buildingRow.height &&
            (this.buildingRow.height = this.maxRowHeight),
          t && ("center" === n.lastRow || "right" === n.lastRow))
        ) {
          var o =
            this.galleryWidth -
            2 * this.border -
            (this.buildingRow.entriesBuff.length - 1) * n.margins;
          for (s = 0; s < this.buildingRow.entriesBuff.length; s++)
            o -= (i = this.buildingRow.entriesBuff[s]).data("jg.jwidth");
          "center" === n.lastRow
            ? (r += o / 2)
            : "right" === n.lastRow && (r += o);
        }
        var a = this.buildingRow.entriesBuff.length - 1;
        for (s = 0; s <= a; s++)
          (i = this.buildingRow.entriesBuff[this.settings.rtl ? a - s : s]),
            this.displayEntry(
              i,
              r,
              this.offY,
              i.data("jg.jwidth"),
              i.data("jg.jheight"),
              this.buildingRow.height
            ),
            (r += i.data("jg.jwidth") + n.margins);
        (this.galleryHeightToSet =
          this.offY + this.buildingRow.height + this.border),
          this.setGalleryTempHeight(
            this.galleryHeightToSet + this.getSpinnerHeight()
          ),
          (!t || (this.buildingRow.height <= n.rowHeight && e)) &&
            ((this.offY += this.buildingRow.height + n.margins),
            (this.rows += 1),
            this.clearBuildingRow(),
            this.settings.triggerEvent.call(this, "jg.rowflush"));
      }
    });
  var i = 0;
  function e() {
    return g("body").height() > g(window).height();
  }
  (r.prototype.rememberGalleryHeight = function () {
    (i = this.$gallery.height()), this.$gallery.height(i);
  }),
    (r.prototype.setGalleryTempHeight = function (t) {
      (i = Math.max(t, i)), this.$gallery.height(i);
    }),
    (r.prototype.setGalleryFinalHeight = function (t) {
      (i = t), this.$gallery.height(t);
    }),
    (r.prototype.checkWidth = function () {
      this.checkWidthIntervalId = setInterval(
        g.proxy(function () {
          if (this.$gallery.is(":visible")) {
            var t = parseFloat(this.$gallery.width());
            e() === this.scrollBarOn
              ? Math.abs(t - this.galleryWidth) >
                  this.settings.refreshSensitivity &&
                ((this.galleryWidth = t),
                this.rewind(),
                this.rememberGalleryHeight(),
                this.startImgAnalyzer(!0))
              : ((this.scrollBarOn = e()), (this.galleryWidth = t));
          }
        }, this),
        this.settings.refreshTime
      );
    }),
    (r.prototype.isSpinnerActive = function () {
      return null !== this.spinner.intervalId;
    }),
    (r.prototype.getSpinnerHeight = function () {
      return this.spinner.$el.innerHeight();
    }),
    (r.prototype.stopLoadingSpinnerAnimation = function () {
      clearInterval(this.spinner.intervalId),
        (this.spinner.intervalId = null),
        this.setGalleryTempHeight(
          this.$gallery.height() - this.getSpinnerHeight()
        ),
        this.spinner.$el.detach();
    }),
    (r.prototype.startLoadingSpinnerAnimation = function () {
      var t = this.spinner,
        i = t.$el.find("span");
      clearInterval(t.intervalId),
        this.$gallery.append(t.$el),
        this.setGalleryTempHeight(
          this.offY + this.buildingRow.height + this.getSpinnerHeight()
        ),
        (t.intervalId = setInterval(function () {
          t.phase < i.length
            ? i.eq(t.phase).fadeTo(t.timeSlot, 1)
            : i.eq(t.phase - i.length).fadeTo(t.timeSlot, 0),
            (t.phase = (t.phase + 1) % (2 * i.length));
        }, t.timeSlot));
    }),
    (r.prototype.rewind = function () {
      (this.lastFetchedEntry = null),
        (this.lastAnalyzedIndex = -1),
        (this.offY = this.border),
        (this.rows = 0),
        this.clearBuildingRow();
    }),
    (r.prototype.updateEntries = function (t) {
      var i;
      return (
        t && null != this.lastFetchedEntry
          ? (i = g(this.lastFetchedEntry)
              .nextAll(this.settings.selector)
              .toArray())
          : ((this.entries = []),
            (i = this.$gallery.children(this.settings.selector).toArray())),
        0 < i.length &&
          (g.isFunction(this.settings.sort)
            ? (i = this.sortArray(i))
            : this.settings.randomize && (i = this.shuffleArray(i)),
          (this.lastFetchedEntry = i[i.length - 1]),
          this.settings.filter
            ? (i = this.filterArray(i))
            : this.resetFilters(i)),
        (this.entries = this.entries.concat(i)),
        !0
      );
    }),
    (r.prototype.insertToGallery = function (t) {
      var i = this;
      g.each(t, function () {
        g(this).appendTo(i.$gallery);
      });
    }),
    (r.prototype.shuffleArray = function (t) {
      var i, e, s;
      for (i = t.length - 1; 0 < i; i--)
        (e = Math.floor(Math.random() * (i + 1))),
          (s = t[i]),
          (t[i] = t[e]),
          (t[e] = s);
      return this.insertToGallery(t), t;
    }),
    (r.prototype.sortArray = function (t) {
      return t.sort(this.settings.sort), this.insertToGallery(t), t;
    }),
    (r.prototype.resetFilters = function (t) {
      for (var i = 0; i < t.length; i++) g(t[i]).removeClass("jg-filtered");
    }),
    (r.prototype.filterArray = function (t) {
      var e = this.settings;
      if ("string" === g.type(e.filter))
        return t.filter(function (t) {
          var i = g(t);
          return i.is(e.filter)
            ? (i.removeClass("jg-filtered"), !0)
            : (i.addClass("jg-filtered").removeClass("jg-visible"), !1);
        });
      if (g.isFunction(e.filter)) {
        for (var i = t.filter(e.filter), s = 0; s < t.length; s++)
          -1 === i.indexOf(t[s])
            ? g(t[s]).addClass("jg-filtered").removeClass("jg-visible")
            : g(t[s]).removeClass("jg-filtered");
        return i;
      }
    }),
    (r.prototype.destroy = function () {
      clearInterval(this.checkWidthIntervalId),
        g.each(
          this.entries,
          g.proxy(function (t, i) {
            var e = g(i);
            e.css("width", ""),
              e.css("height", ""),
              e.css("top", ""),
              e.css("left", ""),
              e.data("jg.loaded", void 0),
              e.removeClass("jg-entry");
            var s = this.imgFromEntry(e);
            s.css("width", ""),
              s.css("height", ""),
              s.css("margin-left", ""),
              s.css("margin-top", ""),
              s.attr("src", s.data("jg.originalSrc")),
              s.data("jg.originalSrc", void 0),
              this.removeCaptionEventsHandlers(e);
            var n = this.captionFromEntry(e);
            e.data("jg.createdCaption")
              ? (e.data("jg.createdCaption", void 0), null !== n && n.remove())
              : null !== n && n.fadeTo(0, 1);
          }, this)
        ),
        this.$gallery.css("height", ""),
        this.$gallery.removeClass("justified-gallery"),
        this.$gallery.data("jg.controller", void 0);
    }),
    (r.prototype.analyzeImages = function (t) {
      for (var i = this.lastAnalyzedIndex + 1; i < this.entries.length; i++) {
        var e = g(this.entries[i]);
        if (!0 === e.data("jg.loaded") || "skipped" === e.data("jg.loaded")) {
          var s =
              this.galleryWidth -
              2 * this.border -
              (this.buildingRow.entriesBuff.length - 1) * this.settings.margins,
            n = e.data("jg.width") / e.data("jg.height");
          if (
            s / (this.buildingRow.aspectRatio + n) < this.settings.rowHeight &&
            (this.flushRow(!1), ++this.yield.flushed >= this.yield.every)
          )
            return void this.startImgAnalyzer(t);
          this.buildingRow.entriesBuff.push(e),
            (this.buildingRow.aspectRatio += n),
            (this.buildingRow.width += n * this.settings.rowHeight),
            (this.lastAnalyzedIndex = i);
        } else if ("error" !== e.data("jg.loaded")) return;
      }
      0 < this.buildingRow.entriesBuff.length && this.flushRow(!0),
        this.isSpinnerActive() && this.stopLoadingSpinnerAnimation(),
        this.stopImgAnalyzerStarter(),
        this.settings.triggerEvent.call(this, t ? "jg.resize" : "jg.complete"),
        this.setGalleryFinalHeight(this.galleryHeightToSet);
    }),
    (r.prototype.stopImgAnalyzerStarter = function () {
      (this.yield.flushed = 0),
        null !== this.imgAnalyzerTimeout &&
          (clearTimeout(this.imgAnalyzerTimeout),
          (this.imgAnalyzerTimeout = null));
    }),
    (r.prototype.startImgAnalyzer = function (t) {
      var i = this;
      this.stopImgAnalyzerStarter(),
        (this.imgAnalyzerTimeout = setTimeout(function () {
          i.analyzeImages(t);
        }, 0.001));
    }),
    (r.prototype.onImageEvent = function (t, i, e) {
      if (i || e) {
        var s = new Image(),
          n = g(s);
        i &&
          n.one("load", function () {
            n.off("load error"), i(s);
          }),
          e &&
            n.one("error", function () {
              n.off("load error"), e(s);
            }),
          (s.src = t);
      }
    }),
    (r.prototype.init = function () {
      var a = !1,
        h = !1,
        l = this;
      g.each(this.entries, function (t, i) {
        var e = g(i),
          s = l.imgFromEntry(e);
        if (
          (e.addClass("jg-entry"),
          !0 !== e.data("jg.loaded") && "skipped" !== e.data("jg.loaded"))
        )
          if (
            (null !== l.settings.rel && e.attr("rel", l.settings.rel),
            null !== l.settings.target && e.attr("target", l.settings.target),
            null !== s)
          ) {
            var n = l.extractImgSrcFromImage(s);
            if ((s.attr("src", n), !1 === l.settings.waitThumbnailsLoad)) {
              var r = parseFloat(s.prop("width")),
                o = parseFloat(s.prop("height"));
              if (!isNaN(r) && !isNaN(o))
                return (
                  e.data("jg.width", r),
                  e.data("jg.height", o),
                  e.data("jg.loaded", "skipped"),
                  (h = !0),
                  l.startImgAnalyzer(!1),
                  !0
                );
            }
            e.data("jg.loaded", !1),
              (a = !0),
              l.isSpinnerActive() || l.startLoadingSpinnerAnimation(),
              l.onImageEvent(
                n,
                function (t) {
                  e.data("jg.width", t.width),
                    e.data("jg.height", t.height),
                    e.data("jg.loaded", !0),
                    l.startImgAnalyzer(!1);
                },
                function () {
                  e.data("jg.loaded", "error"), l.startImgAnalyzer(!1);
                }
              );
          } else
            e.data("jg.loaded", !0),
              e.data("jg.width", e.width() | parseFloat(e.css("width")) | 1),
              e.data("jg.height", e.height() | parseFloat(e.css("height")) | 1);
      }),
        a || h || this.startImgAnalyzer(!1),
        this.checkWidth();
    }),
    (r.prototype.checkOrConvertNumber = function (t, i) {
      if (
        ("string" === g.type(t[i]) && (t[i] = parseFloat(t[i])),
        "number" !== g.type(t[i]))
      )
        throw i + " must be a number";
      if (isNaN(t[i])) throw "invalid number for " + i;
    }),
    (r.prototype.checkSizeRangesSuffixes = function () {
      if ("object" !== g.type(this.settings.sizeRangeSuffixes))
        throw "sizeRangeSuffixes must be defined and must be an object";
      var t = [];
      for (var i in this.settings.sizeRangeSuffixes)
        this.settings.sizeRangeSuffixes.hasOwnProperty(i) && t.push(i);
      for (var e = { 0: "" }, s = 0; s < t.length; s++)
        if ("string" === g.type(t[s]))
          try {
            e[parseInt(t[s].replace(/^[a-z]+/, ""), 10)] =
              this.settings.sizeRangeSuffixes[t[s]];
          } catch (t) {
            throw (
              "sizeRangeSuffixes keys must contains correct numbers (" + t + ")"
            );
          }
        else e[t[s]] = this.settings.sizeRangeSuffixes[t[s]];
      this.settings.sizeRangeSuffixes = e;
    }),
    (r.prototype.retrieveMaxRowHeight = function () {
      var t = null,
        i = this.settings.rowHeight;
      if ("string" === g.type(this.settings.maxRowHeight))
        t = this.settings.maxRowHeight.match(/^[0-9]+%$/)
          ? (i *
              parseFloat(this.settings.maxRowHeight.match(/^([0-9]+)%$/)[1])) /
            100
          : parseFloat(this.settings.maxRowHeight);
      else {
        if ("number" !== g.type(this.settings.maxRowHeight)) {
          if (
            !1 === this.settings.maxRowHeight ||
            null == this.settings.maxRowHeight
          )
            return null;
          throw "maxRowHeight must be a number or a percentage";
        }
        t = this.settings.maxRowHeight;
      }
      if (isNaN(t)) throw "invalid number for maxRowHeight";
      return t < i && (t = i), t;
    }),
    (r.prototype.checkSettings = function () {
      this.checkSizeRangesSuffixes(),
        this.checkOrConvertNumber(this.settings, "rowHeight"),
        this.checkOrConvertNumber(this.settings, "margins"),
        this.checkOrConvertNumber(this.settings, "border");
      var t = ["justify", "nojustify", "left", "center", "right", "hide"];
      if (-1 === t.indexOf(this.settings.lastRow))
        throw "lastRow must be one of: " + t.join(", ");
      if (
        (this.checkOrConvertNumber(this.settings, "justifyThreshold"),
        this.settings.justifyThreshold < 0 ||
          1 < this.settings.justifyThreshold)
      )
        throw "justifyThreshold must be in the interval [0,1]";
      if ("boolean" !== g.type(this.settings.cssAnimation))
        throw "cssAnimation must be a boolean";
      if ("boolean" !== g.type(this.settings.captions))
        throw "captions must be a boolean";
      if (
        (this.checkOrConvertNumber(
          this.settings.captionSettings,
          "animationDuration"
        ),
        this.checkOrConvertNumber(
          this.settings.captionSettings,
          "visibleOpacity"
        ),
        this.settings.captionSettings.visibleOpacity < 0 ||
          1 < this.settings.captionSettings.visibleOpacity)
      )
        throw "captionSettings.visibleOpacity must be in the interval [0, 1]";
      if (
        (this.checkOrConvertNumber(
          this.settings.captionSettings,
          "nonVisibleOpacity"
        ),
        this.settings.captionSettings.nonVisibleOpacity < 0 ||
          1 < this.settings.captionSettings.nonVisibleOpacity)
      )
        throw "captionSettings.nonVisibleOpacity must be in the interval [0, 1]";
      if (
        (this.checkOrConvertNumber(this.settings, "imagesAnimationDuration"),
        this.checkOrConvertNumber(this.settings, "refreshTime"),
        this.checkOrConvertNumber(this.settings, "refreshSensitivity"),
        "boolean" !== g.type(this.settings.randomize))
      )
        throw "randomize must be a boolean";
      if ("string" !== g.type(this.settings.selector))
        throw "selector must be a string";
      if (!1 !== this.settings.sort && !g.isFunction(this.settings.sort))
        throw "sort must be false or a comparison function";
      if (
        !1 !== this.settings.filter &&
        !g.isFunction(this.settings.filter) &&
        "string" !== g.type(this.settings.filter)
      )
        throw "filter must be false, a string or a filter function";
    }),
    (r.prototype.retrieveSuffixRanges = function () {
      var t = [];
      for (var i in this.settings.sizeRangeSuffixes)
        this.settings.sizeRangeSuffixes.hasOwnProperty(i) &&
          t.push(parseInt(i, 10));
      return (
        t.sort(function (t, i) {
          return i < t ? 1 : t < i ? -1 : 0;
        }),
        t
      );
    }),
    (r.prototype.updateSettings = function (t) {
      (this.settings = g.extend({}, this.settings, t)),
        this.checkSettings(),
        (this.border =
          0 <= this.settings.border
            ? this.settings.border
            : this.settings.margins),
        (this.maxRowHeight = this.retrieveMaxRowHeight()),
        (this.suffixRanges = this.retrieveSuffixRanges());
    }),
    (r.prototype.defaults = {
      sizeRangeSuffixes: {},
      thumbnailPath: void 0,
      rowHeight: 120,
      maxRowHeight: !1,
      margins: 1,
      border: -1,
      lastRow: "nojustify",
      justifyThreshold: 0.9,
      waitThumbnailsLoad: !0,
      captions: !0,
      cssAnimation: !0,
      imagesAnimationDuration: 500,
      captionSettings: {
        animationDuration: 500,
        visibleOpacity: 0.7,
        nonVisibleOpacity: 0,
      },
      rel: null,
      target: null,
      extension: /\.[^.\\/]+$/,
      refreshTime: 200,
      refreshSensitivity: 0,
      randomize: !1,
      rtl: !1,
      sort: !1,
      filter: !1,
      selector: "a, div:not(.spinner)",
      imgSelector: "> img, > a > img",
      triggerEvent: function (t) {
        this.$gallery.trigger(t);
      },
    }),
    (g.fn.justifiedGallery = function (n) {
      return this.each(function (t, i) {
        var e = g(i);
        e.addClass("justified-gallery");
        var s = e.data("jg.controller");
        if (void 0 === s) {
          if (null != n && "object" !== g.type(n)) {
            if ("destroy" === n) return;
            throw "The argument must be an object";
          }
          (s = new r(e, g.extend({}, r.prototype.defaults, n))),
            e.data("jg.controller", s);
        } else if ("norewind" === n);
        else {
          if ("destroy" === n) return void s.destroy();
          s.updateSettings(n), s.rewind();
        }
        s.updateEntries("norewind" === n) && s.init();
      });
    });
});

/*  Share Project */

!(function (a, b, c) {
  function d(a, c) {
    var d = b(a);
    d.data(f, this),
      (this._$element = d),
      (this.shares = []),
      this._init(c),
      this._render();
  }
  var e = "JSSocials",
    f = e,
    g = function (a, c) {
      return b.isFunction(a) ? a.apply(c, b.makeArray(arguments).slice(2)) : a;
    },
    h =
      /(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,
    i = /(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g,
    j = { G: 1e9, M: 1e6, K: 1e3 },
    k = {};
  (d.prototype = {
    url: "",
    text: "",
    shareIn: "blank",
    showLabel: function (a) {
      return this.showCount === !1
        ? a > this.smallScreenWidth
        : a >= this.largeScreenWidth;
    },
    showCount: function (a) {
      return a <= this.smallScreenWidth ? "inside" : !0;
    },
    smallScreenWidth: 640,
    largeScreenWidth: 1024,
    resizeTimeout: 200,
    elementClass: "jssocials",
    sharesClass: "jssocials-shares",
    shareClass: "jssocials-share",
    shareButtonClass: "jssocials-share-button",
    shareLinkClass: "jssocials-share-link",
    shareLogoClass: "jssocials-share-logo",
    shareLabelClass: "jssocials-share-label",
    shareLinkCountClass: "jssocials-share-link-count",
    shareCountBoxClass: "jssocials-share-count-box",
    shareCountClass: "jssocials-share-count",
    shareZeroCountClass: "jssocials-share-no-count",
    _init: function (a) {
      this._initDefaults(),
        b.extend(this, a),
        this._initShares(),
        this._attachWindowResizeCallback();
    },
    _initDefaults: function () {
      (this.url = a.location.href),
        (this.text = b.trim(
          b("meta[name=description]").attr("content") || b("title").text()
        ));
    },
    _initShares: function () {
      this.shares = b.map(
        this.shares,
        b.proxy(function (a) {
          "string" == typeof a && (a = { share: a });
          var c = a.share && k[a.share];
          if (!c && !a.renderer)
            throw Error("Share '" + a.share + "' is not found");
          return b.extend({ url: this.url, text: this.text }, c, a);
        }, this)
      );
    },
    _attachWindowResizeCallback: function () {
      b(a).on("resize", b.proxy(this._windowResizeHandler, this));
    },
    _detachWindowResizeCallback: function () {
      b(a).off("resize", this._windowResizeHandler);
    },
    _windowResizeHandler: function () {
      (b.isFunction(this.showLabel) || b.isFunction(this.showCount)) &&
        (a.clearTimeout(this._resizeTimer),
        (this._resizeTimer = setTimeout(
          b.proxy(this.refresh, this),
          this.resizeTimeout
        )));
    },
    _render: function () {
      this._clear(),
        this._defineOptionsByScreen(),
        this._$element.addClass(this.elementClass),
        (this._$shares = b("<div>")
          .addClass(this.sharesClass)
          .appendTo(this._$element)),
        this._renderShares();
    },
    _defineOptionsByScreen: function () {
      (this._screenWidth = b(a).width()),
        (this._showLabel = g(this.showLabel, this, this._screenWidth)),
        (this._showCount = g(this.showCount, this, this._screenWidth));
    },
    _renderShares: function () {
      b.each(
        this.shares,
        b.proxy(function (a, b) {
          this._renderShare(b);
        }, this)
      );
    },
    _renderShare: function (a) {
      var c;
      (c = b.isFunction(a.renderer) ? b(a.renderer()) : this._createShare(a)),
        c
          .addClass(this.shareClass)
          .addClass(a.share ? "jssocials-share-" + a.share : "")
          .addClass(a.css)
          .appendTo(this._$shares);
    },
    _createShare: function (a) {
      var c = b("<div>"),
        d = this._createShareLink(a).appendTo(c);
      if (this._showCount) {
        var e = "inside" === this._showCount,
          f = e ? d : b("<div>").addClass(this.shareCountBoxClass).appendTo(c);
        f.addClass(e ? this.shareLinkCountClass : this.shareCountBoxClass),
          this._renderShareCount(a, f);
      }
      return c;
    },
    _createShareLink: function (a) {
      var c = this._getShareStrategy(a),
        d = c.call(a, { shareUrl: this._getShareUrl(a) });
      return (
        d.addClass(this.shareLinkClass).append(this._createShareLogo(a)),
        this._showLabel && d.append(this._createShareLabel(a)),
        b.each(this.on || {}, function (c, e) {
          b.isFunction(e) && d.on(c, b.proxy(e, a));
        }),
        d
      );
    },
    _getShareStrategy: function (a) {
      var b = m[a.shareIn || this.shareIn];
      if (!b) throw Error("Share strategy '" + this.shareIn + "' not found");
      return b;
    },
    _getShareUrl: function (a) {
      var b = g(a.shareUrl, a);
      return this._formatShareUrl(b, a);
    },
    _createShareLogo: function (a) {
      var c = a.logo,
        d = h.test(c) ? b("<img>").attr("src", a.logo) : b("<i>").addClass(c);
      return d.addClass(this.shareLogoClass), d;
    },
    _createShareLabel: function (a) {
      return b("<span>").addClass(this.shareLabelClass).text(a.label);
    },
    _renderShareCount: function (a, c) {
      var d = b("<span>").addClass(this.shareCountClass);
      c.addClass(this.shareZeroCountClass).append(d),
        this._loadCount(a).done(
          b.proxy(function (a) {
            a && (c.removeClass(this.shareZeroCountClass), d.text(a));
          }, this)
        );
    },
    _loadCount: function (a) {
      var c = b.Deferred(),
        d = this._getCountUrl(a);
      if (!d) return c.resolve(0).promise();
      var e = b.proxy(function (b) {
        c.resolve(this._getCountValue(b, a));
      }, this);
      return (
        b
          .getJSON(d)
          .done(e)
          .fail(function () {
            b.get(d)
              .done(e)
              .fail(function () {
                c.resolve(0);
              });
          }),
        c.promise()
      );
    },
    _getCountUrl: function (a) {
      var b = g(a.countUrl, a);
      return this._formatShareUrl(b, a);
    },
    _getCountValue: function (a, c) {
      var d = (b.isFunction(c.getCount) ? c.getCount(a) : a) || 0;
      return "string" == typeof d ? d : this._formatNumber(d);
    },
    _formatNumber: function (a) {
      return (
        b.each(j, function (b, c) {
          return a >= c
            ? ((a = parseFloat((a / c).toFixed(2)) + b), !1)
            : void 0;
        }),
        a
      );
    },
    _formatShareUrl: function (b, c) {
      return b.replace(i, function (b, d, e) {
        var f = c[e] || "";
        return f ? (d || "") + a.encodeURIComponent(f) : "";
      });
    },
    _clear: function () {
      a.clearTimeout(this._resizeTimer), this._$element.empty();
    },
    _passOptionToShares: function (a, c) {
      var d = this.shares;
      b.each(["url", "text"], function (e, f) {
        f === a &&
          b.each(d, function (b, d) {
            d[a] = c;
          });
      });
    },
    _normalizeShare: function (a) {
      return b.isNumeric(a)
        ? this.shares[a]
        : "string" == typeof a
        ? b.grep(this.shares, function (b) {
            return b.share === a;
          })[0]
        : a;
    },
    refresh: function () {
      this._render();
    },
    destroy: function () {
      this._clear(),
        this._detachWindowResizeCallback(),
        this._$element.removeClass(this.elementClass).removeData(f);
    },
    option: function (a, b) {
      return 1 === arguments.length
        ? this[a]
        : ((this[a] = b), this._passOptionToShares(a, b), void this.refresh());
    },
    shareOption: function (a, b, c) {
      return (
        (a = this._normalizeShare(a)),
        2 === arguments.length ? a[b] : ((a[b] = c), void this.refresh())
      );
    },
  }),
    (b.fn.jsSocials = function (a) {
      var e = b.makeArray(arguments),
        g = e.slice(1),
        h = this;
      return (
        this.each(function () {
          var e,
            i = b(this),
            j = i.data(f);
          if (j)
            if ("string" == typeof a) {
              if (((e = j[a].apply(j, g)), e !== c && e !== j))
                return (h = e), !1;
            } else j._detachWindowResizeCallback(), j._init(a), j._render();
          else new d(i, a);
        }),
        h
      );
    });
  var l = function (a) {
      var c;
      b.isPlainObject(a)
        ? (c = d.prototype)
        : ((c = k[a]), (a = arguments[1] || {})),
        b.extend(c, a);
    },
    m = {
      popup: function (c) {
        return b("<a>")
          .attr("href", "#")
          .on("click", function () {
            return (
              a.open(
                c.shareUrl,
                null,
                "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"
              ),
              !1
            );
          });
      },
      blank: function (a) {
        return b("<a>").attr({ target: "_blank", href: a.shareUrl });
      },
      self: function (a) {
        return b("<a>").attr({ target: "_self", href: a.shareUrl });
      },
    };
  a.jsSocials = { Socials: d, shares: k, shareStrategies: m, setDefaults: l };
})(window, jQuery),
  (function (a, b, c) {
    b.extend(c.shares, {
      email: {
        label: "E-mail",
        logo: "fa fa-at",
        shareUrl: "mailto:{to}?subject={text}&body={url}",
        countUrl: "",
        shareIn: "self",
      },
      twitter: {
        label: "Tweet",
        logo: "fa fa-twitter",
        shareUrl:
          "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
        countUrl: "",
      },
      facebook: {
        label: "Like",
        logo: "fa fa-facebook",
        shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
        countUrl: "https://graph.facebook.com/?id={url}",
        getCount: function (a) {
          return (a.share && a.share.share_count) || 0;
        },
      },
      vkontakte: {
        label: "Like",
        logo: "fa fa-vk",
        shareUrl:
          "https://vk.com/share.php?url={url}&title={title}&description={text}",
        countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
        getCount: function (a) {
          return parseInt(a.slice(15, -2).split(", ")[1]);
        },
      },
      googleplus: {
        label: "+1",
        logo: "fa fa-google",
        shareUrl: "https://plus.google.com/share?url={url}",
        countUrl: "",
      },
      linkedin: {
        label: "Share",
        logo: "fa fa-linkedin",
        shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
        countUrl:
          "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
        getCount: function (a) {
          return a.count;
        },
      },
      pinterest: {
        label: "Pin it",
        logo: "fa fa-pinterest",
        shareUrl:
          "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
        countUrl:
          "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
        getCount: function (a) {
          return a.count;
        },
      },
      stumbleupon: {
        label: "Share",
        logo: "fa fa-stumbleupon",
        shareUrl: "http://www.stumbleupon.com/submit?url={url}&title={title}",
        countUrl:
          "https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",
        getCount: function (a) {
          return a.result.views;
        },
      },
      telegram: {
        label: "Telegram",
        logo: "fa fa-paper-plane",
        shareUrl: "tg://msg?text={url} {text}",
        countUrl: "",
        shareIn: "self",
      },
      whatsapp: {
        label: "WhatsApp",
        logo: "fa fa-whatsapp",
        shareUrl: "whatsapp://send?text={url} {text}",
        countUrl: "",
        shareIn: "self",
      },
      line: {
        label: "LINE",
        logo: "fa fa-comment",
        shareUrl: "http://line.me/R/msg/text/?{text} {url}",
        countUrl: "",
      },
      viber: {
        label: "Viber",
        logo: "fa fa-volume-control-phone",
        shareUrl: "viber://forward?text={url} {text}",
        countUrl: "",
        shareIn: "self",
      },
      pocket: {
        label: "Pocket",
        logo: "fa fa-get-pocket",
        shareUrl: "https://getpocket.com/save?url={url}&title={title}",
        countUrl: "",
      },
      messenger: {
        label: "Share",
        logo: "fa fa-commenting",
        shareUrl: "fb-messenger://share?link={url}",
        countUrl: "",
        shareIn: "self",
      },
    });
  })(window, jQuery, window.jsSocials);

//Gridtofullscreen

/**
 * A grid items to fullscreen transition
 * @module GridToFullscreenEffect
 * @author Daniel Velasquez
 * @version 1.0.0
 */

class GridToFullscreenEffect {
  /**
    Initializes instance variables. 
    @param {HTMLDivElement} container - Container of the webGL canvas.
    @param {HTMLDivElement} itemsWrapper - Container of the grid items.
    @param {object} options - A configuration object. 
   */
  constructor(container, itemsWrapper, options = {}) {
    this.container = container;
    this.itemsWrapper = itemsWrapper;

    this.initialised = false;
    this.camera = null;
    this.scene = null;
    this.renderer = null;

    options.scrollContainer = options.scrollContainer || null;

    options.timing = options.timing || {};
    options.timing.type = options.timing.type || "sameEnd";
    options.timing.sections = options.timing.sections || 1;
    options.timing.latestStart = options.timing.latestStart || 0.5;
    options.timing.duration = options.timing.duration || 1;

    options.transformation = options.transformation || {};
    options.transformation.type = options.transformation.type || "none";
    options.transformation.props = options.transformation.props || {};

    options.activation.type = options.activation.type || "topLeft";

    options.seed = options.seed || 0;

    options.easings = options.easings || {};
    options.easings.toFullscreen =
      options.easings.toFullscreen || Power0.easeNone;
    options.easings.toGrid = options.easings.toGrid || Power0.easeNone;

    options.flipBeizerControls = options.flipBeizerControls || {};

    options.flipBeizerControls.c0 = options.flipBeizerControls.c0 || {};
    options.flipBeizerControls.c0.x = options.flipBeizerControls.c0.x || 0.5;
    options.flipBeizerControls.c0.y = options.flipBeizerControls.c0.y || 0.5;

    options.flipBeizerControls.c1 = options.flipBeizerControls.c1 || {};
    options.flipBeizerControls.c1.x = options.flipBeizerControls.c1.x || 0.5;
    options.flipBeizerControls.c1.y = options.flipBeizerControls.c1.y || 0.5;

    this.options = options;

    this.uniforms = {
      uImage: new THREE.Uniform(null),
      uImageRes: new THREE.Uniform(new THREE.Vector2(1, 1)),
      uImageLarge: new THREE.Uniform(null),
      uImageLargeRes: new THREE.Uniform(new THREE.Vector2(1, 1)),

      // Calculated Uniforms
      uProgress: new THREE.Uniform(0),
      uMeshScale: new THREE.Uniform(new THREE.Vector2(1, 1)),
      uPlaneCenter: new THREE.Uniform(new THREE.Vector2(0, 0)),
      uViewSize: new THREE.Uniform(new THREE.Vector2(1, 1)),
      uScaleToViewSize: new THREE.Uniform(new THREE.Vector2(1, 1)),
      uClosestCorner: new THREE.Uniform(0),
      uMouse: new THREE.Uniform(new THREE.Vector2(0, 0)),

      // Option Uniforms
      uSeed: new THREE.Uniform(options.seed),
      uProgressByParts: new THREE.Uniform(options.timing.type === "sections"),
      uActivationParts: new THREE.Uniform(options.timing.sections),
      uSyncLatestStart: new THREE.Uniform(options.timing.latestStart),
      uBeizerControls: new THREE.Uniform(
        new THREE.Vector4(
          options.flipBeizerControls.c0.x,
          options.flipBeizerControls.c0.y,
          options.flipBeizerControls.c1.x,
          options.flipBeizerControls.c1.y
        )
      ),
    };

    this.textures = [];

    this.currentImageIndex = -1;
    this.isFullscreen = false;
    this.isAnimating = false;

    this.onResize = this.onResize = this.onResize.bind(this);
  }
  resetUniforms() {
    this.uniforms.uMeshScale.value = new THREE.Vector2(1, 1);
    this.uniforms.uPlaneCenter.value = new THREE.Vector2(0, 0);
    this.uniforms.uScaleToViewSize.value = new THREE.Vector2(1, 1);
    this.uniforms.uClosestCorner.value = 0;
    this.uniforms.uMouse.value = new THREE.Vector2(0, 0);

    this.uniforms.uImage.value = null;
    this.uniforms.uImageRes.value = new THREE.Vector2(1, 1);
    this.uniforms.uImageLarge.value = null;
    this.uniforms.uImageLargeRes.value = new THREE.Vector2(1, 1);

    const mesh = this.mesh;
    mesh.scale.x = 0.00001;
    mesh.scale.y = 0.00001;
    mesh.position.x = 0;
    mesh.position.y = 0;
  }
  /**
    An image 
    @typedef {Object} ImageObject
    @property {HTMLImageElement} element - Html element of image
    @property {Image} image - Image object

    An set of small and large image
    @typedef {Object} ImageSet
    @property {ImageObject} small - Small image element
    @property {ImageObject} small - Large image element
  
   */
  /**
    Creates the textures for the plane and sets them if needed.
    @param {imageSet[]} images - Small and large images of grid items.
   */
  createTextures(images) {
    const textures = [];
    for (let i = 0; i < images.length; i++) {
      const imageSet = images[i];
      const largeTexture = new THREE.Texture(imageSet.large.image);

      // So It doesnt get resized to the power of 2
      largeTexture.generateMipmaps = false;
      largeTexture.wrapS = largeTexture.wrapT = THREE.ClampToEdgeWrapping;
      largeTexture.minFilter = THREE.LinearFilter;
      largeTexture.needsUpdate = true;
      const smallTexture = new THREE.Texture(imageSet.small.image);
      smallTexture.generateMipmaps = false;
      smallTexture.wrapS = smallTexture.wrapT = THREE.ClampToEdgeWrapping;
      smallTexture.minFilter = THREE.LinearFilter;
      smallTexture.needsUpdate = true;
      const textureSet = {
        large: {
          element: imageSet.large.element,
          texture: largeTexture,
        },
        small: {
          element: imageSet.small.element,
          texture: smallTexture,
        },
      };

      textures.push(textureSet);
    }
    this.textures = textures;
    this.setCurrentTextures();
  }
  /**
    Sets the correct textures to the uniforms. And renders if not in a loop
   */
  setCurrentTextures() {
    if (this.currentImageIndex === -1) return;
    const textureSet = this.textures[this.currentImageIndex];
    this.uniforms.uImage.value = textureSet.small.texture;
    this.uniforms.uImageRes.value.x =
      textureSet.small.texture.image.naturalWidth;
    this.uniforms.uImageRes.value.y =
      textureSet.small.texture.image.naturalHeight;
    this.uniforms.uImageLarge.value = textureSet.large.texture;
    this.uniforms.uImageLargeRes.value.x =
      textureSet.large.texture.image.naturalWidth;
    this.uniforms.uImageLargeRes.value.y =
      textureSet.large.texture.image.naturalHeight;
    if (!this.isAnimating) {
      this.render();
    }
  }
  /**
    Initiates THREEJS objects and adds listeners to the items
   */
  init() {
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      10000
    );
    this.camera.position.z = 50;
    this.camera.lookAt = this.scene.position;

    const viewSize = this.getViewSize();
    this.uniforms.uViewSize.value = new THREE.Vector2(
      viewSize.width,
      viewSize.height
    );

    const segments = 128;
    var geometry = new THREE.PlaneBufferGeometry(1, 1, segments, segments);
    function isFunction(functionToCheck) {
      return (
        functionToCheck &&
        {}.toString.call(functionToCheck) === "[object Function]"
      );
    }
    const transformation = isFunction(this.options.transformation.type)
      ? this.options.transformation.type(this.options.transformation.props)
      : transformations[this.options.transformation.type](
          this.options.transformation.props
        );
    const shaders = generateShaders(
      activations[this.options.activation.type],
      transformation
    );

    var material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: shaders.vertex,
      fragmentShader: shaders.fragment,
      side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.mesh);

    window.addEventListener("resize", this.onResize);
    if (this.options.scrollContainer) {
      this.options.scrollContainer.addEventListener("scroll", (ev) => {
        this.recalculateUniforms(ev);
      });
    }

    for (let i = 0; i < this.itemsWrapper.children.length; i++) {
      const image = this.itemsWrapper.children[i].children[0];
      image.addEventListener("mousedown", this.createOnMouseDown(i));
    }
  }
  /**
    Creates a listener that sends item to fullscreen when activated. 
    @return {function} Event listener
   */
  createOnMouseDown(itemIndex) {
    return (ev) => {
      this.toFullscreen(itemIndex, ev);
    };
  }
  /*
    Tweens the plane to grid position if on fullscreen 
  */
  toGrid() {
    if (!this.isFullscreen || this.isAnimating) return;

    this.isAnimating = true;
    if (this.options.onToGridStart)
      this.options.onToGridStart({ index: this.currentImageIndex });
    this.tween = TweenLite.to(
      this.uniforms.uProgress,
      this.options.timing.duration,
      {
        value: 0,
        ease: this.options.easings.toGrid,
        onUpdate: () => {
          this.render();
        },
        onComplete: () => {
          this.isAnimating = false;
          this.isFullscreen = false;
          this.itemsWrapper.style.zIndex = 1;
          this.container.style.zIndex = 0;
          this.resetUniforms();
          this.render();
          if (this.options.onToGridFinish)
            this.options.onToGridFinish({
              index: -1,
              lastIndex: this.currentImageIndex,
            });
          this.currentImageIndex = -1;
        },
      }
    );
  }
  recalculateUniforms(ev) {
    if (this.currentImageIndex === -1) return;

    const rect =
      this.itemsWrapper.children[
        this.currentImageIndex
      ].children[0].getBoundingClientRect();
    const mouseNormalized = {
      x: (ev.clientX - rect.left) / rect.width,
      // Allways invert Y coord
      y: 1 - (ev.clientY - rect.top) / rect.height,
    };

    const xIndex = rect.left > window.innerWidth - (rect.left + rect.width);
    const yIndex = rect.top > window.innerHeight - (rect.top + rect.height);

    const closestCorner = xIndex * 2 + yIndex;
    this.uniforms.uClosestCorner.value = closestCorner;
    this.uniforms.uMouse.value = new THREE.Vector2(
      mouseNormalized.x,
      mouseNormalized.y
    );

    const viewSize = this.getViewSize();
    const widthViewUnit = (rect.width * viewSize.width) / window.innerWidth;
    const heightViewUnit = (rect.height * viewSize.height) / window.innerHeight;
    // x and y are based on top left of screen. While ThreeJs is on the center
    const xViewUnit =
      (rect.left * viewSize.width) / window.innerWidth - viewSize.width / 2;
    const yViewUnit =
      (rect.top * viewSize.height) / window.innerHeight - viewSize.height / 2;

    const geometry = this.mesh.geometry;
    const mesh = this.mesh;

    // // The plain's size is initially 1. So the scale is the new size

    mesh.scale.x = widthViewUnit;
    mesh.scale.y = heightViewUnit;

    // // Move the object by its top left corner, not the center
    let x = xViewUnit + widthViewUnit / 2;
    let y = -yViewUnit - heightViewUnit / 2;

    // geometry.translate(x, y, 0);
    mesh.position.x = x;
    mesh.position.y = y;

    // Used to scale the plane from the center
    // divided by scale so when later scaled it looks fine
    this.uniforms.uPlaneCenter.value.x = x / widthViewUnit;
    this.uniforms.uPlaneCenter.value.y = y / heightViewUnit;

    this.uniforms.uMeshScale.value.x = widthViewUnit;
    this.uniforms.uMeshScale.value.y = heightViewUnit;

    this.uniforms.uScaleToViewSize.value.x = viewSize.width / widthViewUnit - 1;
    this.uniforms.uScaleToViewSize.value.y =
      viewSize.height / heightViewUnit - 1;
  }
  toFullscreen(itemIndex, ev) {
    if (this.isFullscreen || this.isAnimating) return;

    this.isAnimating = true;
    this.currentImageIndex = itemIndex;

    this.recalculateUniforms(ev);

    if (this.textures[itemIndex]) {
      const textureSet = this.textures[itemIndex];
      this.uniforms.uImage.value = textureSet.small.texture;
      this.uniforms.uImageRes.value.x =
        textureSet.small.texture.image.naturalWidth;
      this.uniforms.uImageRes.value.y =
        textureSet.small.texture.image.naturalHeight;
      this.uniforms.uImageLarge.value = textureSet.large.texture;
      this.uniforms.uImageLargeRes.value.x =
        textureSet.large.texture.image.naturalWidth;
      this.uniforms.uImageLargeRes.value.y =
        textureSet.large.texture.image.naturalHeight;
    }
    this.itemsWrapper.style.zIndex = 0;
    this.container.style.zIndex = 2;

    if (this.options.onToFullscreenStart)
      this.options.onToFullscreenStart({ index: this.currentImageIndex });

    this.tween = TweenLite.to(
      this.uniforms.uProgress,
      this.options.timing.duration,
      {
        value: 1,
        ease: this.options.easings.toFullscreen,
        onUpdate: () => {
          this.render();
        },
        onComplete: () => {
          this.isAnimating = false;
          this.isFullscreen = true;
          if (this.options.onToFullscreenFinish)
            this.options.onToFullscreenFinish({
              index: this.currentImageIndex,
            });
        },
      }
    );
  }
  /**
    Gives the width and height of the current camera's view.
    @typedef {Object} Size
    @property {number} width
    @property {number} height

    @return {Size} The size of the camera's view

   */
  getViewSize() {
    const fovInRadians = (this.camera.fov * Math.PI) / 180;
    const height = Math.abs(
      this.camera.position.z * Math.tan(fovInRadians / 2) * 2
    );

    return { width: height * this.camera.aspect, height };
  }
  /**
    Renders ThreeJS to the canvas.
  */
  render() {
    this.renderer.render(this.scene, this.camera);
  }
  /**
    Resize Event Listener.
    Updates anything that uses the window's size.
    @param {Event} ev resize event 
   */
  onResize(ev) {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    if (this.currentImageIndex > -1) {
      this.recalculateUniforms(ev);
      this.render();
    }
  }
}

var activations = {
  corners: `
    float getActivation(vec2 uv){
      float top = (1.-uv.y);
      float right = uv.x;
      float bottom = uv.y;
      float left = 1.- uv.x;

      return top *0.333333 + (right * 0.333333 + (right * bottom)*0.666666 );
  }
  `,
  topLeft: `
    float getActivation(vec2 uv){
        return (+uv.x-uv.y+1.)/2.;
    }
  `,
  sides: `
      float getActivation(vec2 uv){
        return min(uv.x, 1.-uv.x) * 2.;
      }
  `,
  left: `
    float getActivation(vec2 uv){
        return uv.x;
    }
    `,
  top: `
    float getActivation(vec2 uv){
        return 1. - uv.y;
    }
    `,
  bottom: `
    float getActivation(vec2 uv){
        return uv.y;
    }
    `,
  bottomStep: `
    float getActivation(vec2 uv){
        
        
        return uv.y;
    }
    `,
  sinX: `
      float getActivation(vec2 uv){
        return sin(uv.x * 3.14);
      }
    `,
  center: `
      float getActivation(vec2 uv){
        float maxDistance = distance(vec2(0.),vec2(0.5));
        float dist = distance(vec2(0.), uv-0.5);
        return smoothstep(0.,maxDistance,dist);
      }
    `,
  mouse: `
      float getActivation(vec2 uv){
        float maxDistance = distance(uMouse, 1.-floor(uMouse+0.5));
        float dist = smoothstep(0.,maxDistance,distance(uMouse,uv));
        return dist;
      }
    `,
  closestCorner: `
      float getActivation(vec2 uv){

        float y = mod(uClosestCorner,2.) *2. -1.;
        float x = (floor(uClosestCorner /2.)*2.-1.)*-1.;

        float xAct = abs(min(0.,x)) + uv.x * x;
        float yAct = abs(min(0.,y)) + uv.y * y;

        return (xAct+yAct)/2.;
      }
    `,
  closestSide: `
      float getActivation(vec2 uv){

        float y = mod(uClosestCorner,2.) *2. -1.;
        float x = (floor(uClosestCorner /2.)*2.-1.)*-1.;

        float xAct = abs(min(0.,x)) + uv.x * x;
        float yAct = abs(min(0.,y)) + uv.y * y;

        return (xAct+yAct)/2.;
      }
    `,
};
function ensureFloat(num) {
  let stringed = num.toString();
  const dotIndex = stringed.indexOf(".");
  if (dotIndex === -1) {
    stringed += ".";
  }
  return stringed;
}
const transformations = {
  none: () => null,
  flipX: () => {
    // Only works with sync ending
    return `
    
        float beizerProgress = cubicBezier(vertexProgress,
        uBeizerControls.x,uBeizerControls.y,
        uBeizerControls.z,uBeizerControls.w);

        float flippedX = -transformedPos.x;
        transformedPos.x = mix (transformedPos.x, flippedX,beizerProgress );
          
          // Flip texture on flipped sections 
        // float activationAtX0 = getActivation(vec2(0.,transformedUV.y));
        // float activationAtX1 = getActivation(vec2(1.,transformedUV.y));
        //   float syncDifference = 
        //     activationAtX1 * uSyncLatestStart - activationAtX0 * uSyncLatestStart;
          float syncDifference =  uSyncLatestStart;
            
            // Flip the controls because who knows why
            // But it works exactly

          // Multiply by aspect ratio to account for mesh scaling
          float aspectRatio = (uMeshScale.x / uMeshScale.y);
          float stepFormula = 0.5 - (syncDifference * uSyncLatestStart * uSyncLatestStart) * aspectRatio;

          transformedUV.x = mix(transformedUV.x,1.-transformedUV.x,
              step(stepFormula,beizerProgress));
      `;
  },
  simplex: (props) => {
    let seed = ensureFloat(props.seed || 0);
    let amplitudeX = ensureFloat(props.amplitudeX || 0.5);
    let amplitudeY = ensureFloat(props.amplitudeY || 0.5);
    let frequencyX = ensureFloat(props.frequencyX || 1);
    let frequencyY = ensureFloat(props.frequencyY || 0.75);
    let progressLimit = ensureFloat(props.progressLimit || 0.5);
    return `
      float simplexProgress = min(clamp((vertexProgress) / ${progressLimit},0.,1.),clamp((1.-vertexProgress) / (1.-${progressLimit}),0.,1.));
      simplexProgress = smoothstep(0.,1.,simplexProgress);
      float noiseX = snoise(vec2(transformedPos.x +uSeed, transformedPos.y + uSeed + simplexProgress * 1.) * ${frequencyX} ) ;
      float noiseY = snoise(vec2(transformedPos.y +uSeed, transformedPos.x + uSeed + simplexProgress * 1.) * ${frequencyY}) ;
      transformedPos.x += ${amplitudeX} * noiseX * simplexProgress;
      transformedPos.y += ${amplitudeY} * noiseY * simplexProgress;
  `;
  },
  wavy: (props) => {
    const seed = ensureFloat(props.seed || 0);
    const amplitude = ensureFloat(props.amplitude || 0.5);
    const frequency = ensureFloat(props.frequency || 4);
    return `
      float limit = 0.5;
      float wavyProgress = min(clamp((vertexProgress) / limit,0.,1.),clamp((1.-vertexProgress) / (1.-limit),0.,1.));

      float dist = length(transformedPos.xy);
      
      float angle = atan(transformedPos.x,transformedPos.y);

      float nextDist = dist * (${amplitude} * (sin(angle * ${frequency} + ${seed}) /2.+0.5)+ 1.);

      transformedPos.x = mix(transformedPos.x,sin(angle) * nextDist ,  wavyProgress);
      transformedPos.y = mix(transformedPos.y,cos(angle) * nextDist,  wavyProgress);
    `;
  },
  circle: (props) => {
    return `
      float limit = 0.5;
      float circleProgress = min(clamp((vertexProgress) / limit,0.,1.),clamp((1.-vertexProgress) / (1.-limit),0.,1.));

      float maxDistance = 0.5;
      float dist = length(transformedPos.xy);
      
      float nextDist = min(maxDistance,dist);
      float overload = step(maxDistance,dist);
      float angle = atan(transformedPos.x,transformedPos.y);
      
      transformedPos.x = mix(transformedPos.x,sin(angle) * nextDist ,  circleProgress );
      transformedPos.y = mix(transformedPos.y,cos(angle) * nextDist,  circleProgress);
      transformedPos.z += -0.5 * overload * circleProgress;
    
  `;
  },
};
var vertexUniforms = `
    uniform float uProgress;
    uniform vec2 uScaleToViewSize;
    uniform vec2 uPlaneCenter;
    uniform vec2 uMeshScale;
    uniform vec2 uMouse;
    uniform vec2 uViewSize;

    uniform float uClosestCorner;

    // Option Uniforms
    uniform float uSeed;
    uniform vec4 uBeizerControls;
    uniform float uSyncLatestStart;
    uniform float uActivationParts;
    uniform bool uProgressByParts;
    varying vec2 vUv;
    varying vec2 scale; 
    varying float vProgress;
`;
function generateShaders(activation, transform) {
  var vertex = `
    ${vertexUniforms}
    ${cubicBeizer}
    ${simplex}

    ${quadraticBezier}
    

    ${activation}
float linearStep(float edge0, float edge1, float val) {
	float x = clamp( (val  - edge0) / (edge1 - edge0),0.,1.);
		return x;
}
    void main(){

      vec3 pos = position.xyz;
      vec2 newUV = uv;

      float activation = getActivation(uv);



      // Everything ends at the same time
      float startAt = activation * uSyncLatestStart;
      float vertexProgress = smoothstep(startAt,1.,uProgress);


      if(uProgressByParts){
        // Vertex end by parts
        float activationPart = 1./uActivationParts;
        float activationPartDuration = 1./(uActivationParts+1.);

        float progressStart = (activation / activationPart) * activationPartDuration;
        float progressEnd = min(progressStart + activationPartDuration,1.);
        vertexProgress = linearStep(progressStart,progressEnd,uProgress);
      }
        vec3 transformedPos = pos;
        vec2 transformedUV = uv;
        ${transform ? transform : ""}
        pos = transformedPos;
        newUV = transformedUV; 

        // Scale
        // uScaleToViewSize
        scale = vec2(
          1. + uScaleToViewSize * vertexProgress
        );
        // Since we are moving the mesh not the geometry the geometry is in the center
        
        vec2 flippedPos = vec2(
          (- pos.x) ,
          (- pos.y ) 
        );


        
        pos.xy *= scale;


        // Move to center
        // Mesh moves it into position. Shader moves it to the center
        pos.y += -uPlaneCenter.y * vertexProgress;
        pos.x += -uPlaneCenter.x * vertexProgress;

        // Move slightly to the front
        pos.z += vertexProgress;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
        vProgress = vertexProgress;
      vUv = newUV;
    }
`;

  var fragment = `
    uniform float uProgress;
    uniform sampler2D uImage;
    uniform vec2 uImageRes;
    uniform sampler2D uImageLarge;
    uniform vec2 uImageLargeRes;
    uniform vec2 uMeshScale;
    
    varying vec2 vUv;
    varying float vProgress;
    varying vec2 scale;


    vec2 preserveAspectRatioSlice(vec2 uv, vec2 planeSize, vec2 imageSize ){
      
        vec2 ratio = vec2(
            min((planeSize.x / planeSize.y) / (imageSize.x / imageSize.y), 1.0),
            min((planeSize.y / planeSize.x) / (imageSize.y / imageSize.x), 1.0)
        );
        
        
        vec2 sliceUvs = vec2(
            uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
            uv.y * ratio.y + (1.0 - ratio.y) * 0.5
        );

        return sliceUvs;
    }

    void main(){
 
        vec2 uv = vUv;

        vec2 scaledPlane = uMeshScale * scale;

        
        vec2 smallImageUV = preserveAspectRatioSlice(uv, scaledPlane, uImageRes);

        vec3 color = texture2D(uImage,smallImageUV).xyz;

        if(vProgress > 0.){
          vec2 largeImageUV = preserveAspectRatioSlice(uv, scaledPlane, uImageLargeRes);
          color = mix(color,texture2D(uImageLarge,largeImageUV).xyz, vProgress );
        }

        gl_FragColor = vec4(color,1.);
    }
`;
  return { fragment, vertex };
}

var cubicBeizer = `
// Helper functions:
float slopeFromT (float t, float A, float B, float C){
  float dtdx = 1.0/(3.0*A*t*t + 2.0*B*t + C); 
  return dtdx;
}

float xFromT (float t, float A, float B, float C, float D){
  float x = A*(t*t*t) + B*(t*t) + C*t + D;
  return x;
}

float yFromT (float t, float E, float F, float G, float H){
  float y = E*(t*t*t) + F*(t*t) + G*t + H;
  return y;
}
float cubicBezier (float x, float a, float b, float c, float d){

  float y0a = 0.00; // initial y
  float x0a = 0.00; // initial x 
  float y1a = b;    // 1st influence y   
  float x1a = a;    // 1st influence x 
  float y2a = d;    // 2nd influence y
  float x2a = c;    // 2nd influence x
  float y3a = 1.00; // final y 
  float x3a = 1.00; // final x 

  float A =   x3a - 3.*x2a + 3.*x1a - x0a;
  float B = 3.*x2a - 6.*x1a + 3.*x0a;
  float C = 3.*x1a - 3.*x0a;   
  float D =   x0a;

  float E =   y3a - 3.*y2a + 3.*y1a - y0a;    
  float F = 3.*y2a - 6.*y1a + 3.*y0a;             
  float G = 3.*y1a - 3.*y0a;             
  float H =   y0a;

  // Solve for t given x (using Newton-Raphelson), then solve for y given t.
  // Assume for the first guess that t = x.
  float currentt = x;
  const int nRefinementIterations = 5;
  for (int i=0; i < nRefinementIterations; i++){
    float currentx = xFromT (currentt, A,B,C,D); 
    float currentslope = slopeFromT (currentt, A,B,C);
    currentt -= (currentx - x)*(currentslope);
    currentt = clamp(currentt, 0.,1.);
  } 

  float y = yFromT (currentt,  E,F,G,H);
  return y;
}
`;
var simplex = `
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;

var quadraticBezier = `
float quadraticBezier (float x, float a, float b){
  // adapted from BEZMATH.PS (1993)
  // by Don Lancaster, SYNERGETICS Inc. 
  // http://www.tinaja.com/text/bezmath.html

  float epsilon = 0.00001;
  a = max(0., min(1., a)); 
  b = max(0., min(1., b)); 
  if (a == 0.5){
    a += epsilon;
  }
  
  // solve t from x (an inverse operation)
  float om2a = 1. - 2.*a;
  float t = (sqrt(a*a + om2a*x) - a)/om2a;
  float y = (1.-2.*b)*(t*t) + (2.*b)*t;
  return y;
}
`;

/* Smooth Scrollbar   */
!(function (t, n) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define([], n)
    : "object" == typeof exports
    ? (exports.Scrollbar = n())
    : (t.Scrollbar = n());
})(window, function () {
  return (function (t) {
    var n = {};
    function e(r) {
      if (n[r]) return n[r].exports;
      var o = (n[r] = { i: r, l: !1, exports: {} });
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports;
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
      }),
      (e.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (e.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & n && "string" != typeof t)
        )
          for (var o in t)
            e.d(
              r,
              o,
              function (n) {
                return t[n];
              }.bind(null, o)
            );
        return r;
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return e.d(n, "a", n), n;
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n);
      }),
      (e.p = ""),
      e((e.s = 58))
    );
  })([
    function (t, n, e) {
      var r = e(25)("wks"),
        o = e(16),
        i = e(2).Symbol,
        u = "function" == typeof i;
      (t.exports = function (t) {
        return r[t] || (r[t] = (u && i[t]) || (u ? i : o)("Symbol." + t));
      }).store = r;
    },
    function (t, n) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function (t, n) {
      var e = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = e);
    },
    function (t, n) {
      var e = (t.exports = { version: "2.6.5" });
      "number" == typeof __e && (__e = e);
    },
    function (t, n, e) {
      var r = e(2),
        o = e(3),
        i = e(11),
        u = e(5),
        c = e(10),
        s = function (t, n, e) {
          var a,
            f,
            l,
            p,
            h = t & s.F,
            d = t & s.G,
            v = t & s.S,
            y = t & s.P,
            m = t & s.B,
            g = d ? r : v ? r[n] || (r[n] = {}) : (r[n] || {}).prototype,
            b = d ? o : o[n] || (o[n] = {}),
            x = b.prototype || (b.prototype = {});
          for (a in (d && (e = n), e))
            (l = ((f = !h && g && void 0 !== g[a]) ? g : e)[a]),
              (p =
                m && f
                  ? c(l, r)
                  : y && "function" == typeof l
                  ? c(Function.call, l)
                  : l),
              g && u(g, a, l, t & s.U),
              b[a] != l && i(b, a, p),
              y && x[a] != l && (x[a] = l);
        };
      (r.core = o),
        (s.F = 1),
        (s.G = 2),
        (s.S = 4),
        (s.P = 8),
        (s.B = 16),
        (s.W = 32),
        (s.U = 64),
        (s.R = 128),
        (t.exports = s);
    },
    function (t, n, e) {
      var r = e(2),
        o = e(11),
        i = e(9),
        u = e(16)("src"),
        c = e(60),
        s = ("" + c).split("toString");
      (e(3).inspectSource = function (t) {
        return c.call(t);
      }),
        (t.exports = function (t, n, e, c) {
          var a = "function" == typeof e;
          a && (i(e, "name") || o(e, "name", n)),
            t[n] !== e &&
              (a && (i(e, u) || o(e, u, t[n] ? "" + t[n] : s.join(String(n)))),
              t === r
                ? (t[n] = e)
                : c
                ? t[n]
                  ? (t[n] = e)
                  : o(t, n, e)
                : (delete t[n], o(t, n, e)));
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && this[u]) || c.call(this);
        });
    },
    function (t, n, e) {
      var r = e(7),
        o = e(41),
        i = e(43),
        u = Object.defineProperty;
      n.f = e(8)
        ? Object.defineProperty
        : function (t, n, e) {
            if ((r(t), (n = i(n, !0)), r(e), o))
              try {
                return u(t, n, e);
              } catch (t) {}
            if ("get" in e || "set" in e)
              throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t;
          };
    },
    function (t, n, e) {
      var r = e(1);
      t.exports = function (t) {
        if (!r(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function (t, n, e) {
      t.exports = !e(13)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (t, n) {
      var e = {}.hasOwnProperty;
      t.exports = function (t, n) {
        return e.call(t, n);
      };
    },
    function (t, n, e) {
      var r = e(44);
      t.exports = function (t, n, e) {
        if ((r(t), void 0 === n)) return t;
        switch (e) {
          case 1:
            return function (e) {
              return t.call(n, e);
            };
          case 2:
            return function (e, r) {
              return t.call(n, e, r);
            };
          case 3:
            return function (e, r, o) {
              return t.call(n, e, r, o);
            };
        }
        return function () {
          return t.apply(n, arguments);
        };
      };
    },
    function (t, n, e) {
      var r = e(6),
        o = e(17);
      t.exports = e(8)
        ? function (t, n, e) {
            return r.f(t, n, o(1, e));
          }
        : function (t, n, e) {
            return (t[n] = e), t;
          };
    },
    function (t, n, e) {
      var r = e(1);
      t.exports = function (t, n) {
        if (!r(t) || t._t !== n)
          throw TypeError("Incompatible receiver, " + n + " required!");
        return t;
      };
    },
    function (t, n) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, n) {
      t.exports = {};
    },
    function (t, n, e) {
      var r = e(10),
        o = e(49),
        i = e(50),
        u = e(7),
        c = e(19),
        s = e(51),
        a = {},
        f = {};
      ((n = t.exports =
        function (t, n, e, l, p) {
          var h,
            d,
            v,
            y,
            m = p
              ? function () {
                  return t;
                }
              : s(t),
            g = r(e, l, n ? 2 : 1),
            b = 0;
          if ("function" != typeof m) throw TypeError(t + " is not iterable!");
          if (i(m)) {
            for (h = c(t.length); h > b; b++)
              if (
                (y = n ? g(u((d = t[b]))[0], d[1]) : g(t[b])) === a ||
                y === f
              )
                return y;
          } else
            for (v = m.call(t); !(d = v.next()).done; )
              if ((y = o(v, g, d.value, n)) === a || y === f) return y;
        }).BREAK = a),
        (n.RETURN = f);
    },
    function (t, n) {
      var e = 0,
        r = Math.random();
      t.exports = function (t) {
        return "Symbol(".concat(
          void 0 === t ? "" : t,
          ")_",
          (++e + r).toString(36)
        );
      };
    },
    function (t, n) {
      t.exports = function (t, n) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: n,
        };
      };
    },
    function (t, n, e) {
      var r = e(31),
        o = e(28);
      t.exports = function (t) {
        return r(o(t));
      };
    },
    function (t, n, e) {
      var r = e(27),
        o = Math.min;
      t.exports = function (t) {
        return t > 0 ? o(r(t), 9007199254740991) : 0;
      };
    },
    function (t, n, e) {
      var r = e(28);
      t.exports = function (t) {
        return Object(r(t));
      };
    },
    function (t, n, e) {
      var r = e(16)("meta"),
        o = e(1),
        i = e(9),
        u = e(6).f,
        c = 0,
        s =
          Object.isExtensible ||
          function () {
            return !0;
          },
        a = !e(13)(function () {
          return s(Object.preventExtensions({}));
        }),
        f = function (t) {
          u(t, r, { value: { i: "O" + ++c, w: {} } });
        },
        l = (t.exports = {
          KEY: r,
          NEED: !1,
          fastKey: function (t, n) {
            if (!o(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!i(t, r)) {
              if (!s(t)) return "F";
              if (!n) return "E";
              f(t);
            }
            return t[r].i;
          },
          getWeak: function (t, n) {
            if (!i(t, r)) {
              if (!s(t)) return !0;
              if (!n) return !1;
              f(t);
            }
            return t[r].w;
          },
          onFreeze: function (t) {
            return a && l.NEED && s(t) && !i(t, r) && f(t), t;
          },
        });
    },
    function (t, n, e) {
      "use strict";
      var r = e(23),
        o = {};
      (o[e(0)("toStringTag")] = "z"),
        o + "" != "[object z]" &&
          e(5)(
            Object.prototype,
            "toString",
            function () {
              return "[object " + r(this) + "]";
            },
            !0
          );
    },
    function (t, n, e) {
      var r = e(24),
        o = e(0)("toStringTag"),
        i =
          "Arguments" ==
          r(
            (function () {
              return arguments;
            })()
          );
      t.exports = function (t) {
        var n, e, u;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" ==
            typeof (e = (function (t, n) {
              try {
                return t[n];
              } catch (t) {}
            })((n = Object(t)), o))
          ? e
          : i
          ? r(n)
          : "Object" == (u = r(n)) && "function" == typeof n.callee
          ? "Arguments"
          : u;
      };
    },
    function (t, n) {
      var e = {}.toString;
      t.exports = function (t) {
        return e.call(t).slice(8, -1);
      };
    },
    function (t, n, e) {
      var r = e(3),
        o = e(2),
        i = o["__core-js_shared__"] || (o["__core-js_shared__"] = {});
      (t.exports = function (t, n) {
        return i[t] || (i[t] = void 0 !== n ? n : {});
      })("versions", []).push({
        version: r.version,
        mode: e(40) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    },
    function (t, n, e) {
      "use strict";
      var r = e(61)(!0);
      e(29)(
        String,
        "String",
        function (t) {
          (this._t = String(t)), (this._i = 0);
        },
        function () {
          var t,
            n = this._t,
            e = this._i;
          return e >= n.length
            ? { value: void 0, done: !0 }
            : ((t = r(n, e)), (this._i += t.length), { value: t, done: !1 });
        }
      );
    },
    function (t, n) {
      var e = Math.ceil,
        r = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t);
      };
    },
    function (t, n) {
      t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(40),
        o = e(4),
        i = e(5),
        u = e(11),
        c = e(14),
        s = e(62),
        a = e(33),
        f = e(68),
        l = e(0)("iterator"),
        p = !([].keys && "next" in [].keys()),
        h = function () {
          return this;
        };
      t.exports = function (t, n, e, d, v, y, m) {
        s(e, n, d);
        var g,
          b,
          x,
          _ = function (t) {
            if (!p && t in O) return O[t];
            switch (t) {
              case "keys":
              case "values":
                return function () {
                  return new e(this, t);
                };
            }
            return function () {
              return new e(this, t);
            };
          },
          w = n + " Iterator",
          S = "values" == v,
          E = !1,
          O = t.prototype,
          T = O[l] || O["@@iterator"] || (v && O[v]),
          A = T || _(v),
          M = v ? (S ? _("entries") : A) : void 0,
          P = ("Array" == n && O.entries) || T;
        if (
          (P &&
            (x = f(P.call(new t()))) !== Object.prototype &&
            x.next &&
            (a(x, w, !0), r || "function" == typeof x[l] || u(x, l, h)),
          S &&
            T &&
            "values" !== T.name &&
            ((E = !0),
            (A = function () {
              return T.call(this);
            })),
          (r && !m) || (!p && !E && O[l]) || u(O, l, A),
          (c[n] = A),
          (c[w] = h),
          v)
        )
          if (
            ((g = {
              values: S ? A : _("values"),
              keys: y ? A : _("keys"),
              entries: M,
            }),
            m)
          )
            for (b in g) b in O || i(O, b, g[b]);
          else o(o.P + o.F * (p || E), n, g);
        return g;
      };
    },
    function (t, n, e) {
      var r = e(64),
        o = e(46);
      t.exports =
        Object.keys ||
        function (t) {
          return r(t, o);
        };
    },
    function (t, n, e) {
      var r = e(24);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return "String" == r(t) ? t.split("") : Object(t);
          };
    },
    function (t, n, e) {
      var r = e(25)("keys"),
        o = e(16);
      t.exports = function (t) {
        return r[t] || (r[t] = o(t));
      };
    },
    function (t, n, e) {
      var r = e(6).f,
        o = e(9),
        i = e(0)("toStringTag");
      t.exports = function (t, n, e) {
        t &&
          !o((t = e ? t : t.prototype), i) &&
          r(t, i, { configurable: !0, value: n });
      };
    },
    function (t, n, e) {
      for (
        var r = e(69),
          o = e(30),
          i = e(5),
          u = e(2),
          c = e(11),
          s = e(14),
          a = e(0),
          f = a("iterator"),
          l = a("toStringTag"),
          p = s.Array,
          h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1,
          },
          d = o(h),
          v = 0;
        v < d.length;
        v++
      ) {
        var y,
          m = d[v],
          g = h[m],
          b = u[m],
          x = b && b.prototype;
        if (x && (x[f] || c(x, f, p), x[l] || c(x, l, m), (s[m] = p), g))
          for (y in r) x[y] || i(x, y, r[y], !0);
      }
    },
    function (t, n, e) {
      var r = e(5);
      t.exports = function (t, n, e) {
        for (var o in n) r(t, o, n[o], e);
        return t;
      };
    },
    function (t, n) {
      t.exports = function (t, n, e, r) {
        if (!(t instanceof n) || (void 0 !== r && r in t))
          throw TypeError(e + ": incorrect invocation!");
        return t;
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(2),
        o = e(4),
        i = e(5),
        u = e(35),
        c = e(21),
        s = e(15),
        a = e(36),
        f = e(1),
        l = e(13),
        p = e(52),
        h = e(33),
        d = e(73);
      t.exports = function (t, n, e, v, y, m) {
        var g = r[t],
          b = g,
          x = y ? "set" : "add",
          _ = b && b.prototype,
          w = {},
          S = function (t) {
            var n = _[t];
            i(
              _,
              t,
              "delete" == t
                ? function (t) {
                    return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function (t) {
                    return !(m && !f(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function (t) {
                    return m && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                  }
                : "add" == t
                ? function (t) {
                    return n.call(this, 0 === t ? 0 : t), this;
                  }
                : function (t, e) {
                    return n.call(this, 0 === t ? 0 : t, e), this;
                  }
            );
          };
        if (
          "function" == typeof b &&
          (m ||
            (_.forEach &&
              !l(function () {
                new b().entries().next();
              })))
        ) {
          var E = new b(),
            O = E[x](m ? {} : -0, 1) != E,
            T = l(function () {
              E.has(1);
            }),
            A = p(function (t) {
              new b(t);
            }),
            M =
              !m &&
              l(function () {
                for (var t = new b(), n = 5; n--; ) t[x](n, n);
                return !t.has(-0);
              });
          A ||
            (((b = n(function (n, e) {
              a(n, b, t);
              var r = d(new g(), n, b);
              return null != e && s(e, y, r[x], r), r;
            })).prototype = _),
            (_.constructor = b)),
            (T || M) && (S("delete"), S("has"), y && S("get")),
            (M || O) && S(x),
            m && _.clear && delete _.clear;
        } else
          (b = v.getConstructor(n, t, y, x)), u(b.prototype, e), (c.NEED = !0);
        return (
          h(b, t),
          (w[t] = b),
          o(o.G + o.W + o.F * (b != g), w),
          m || v.setStrong(b, t, y),
          b
        );
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(4);
      t.exports = function (t) {
        r(r.S, t, {
          of: function () {
            for (var t = arguments.length, n = new Array(t); t--; )
              n[t] = arguments[t];
            return new this(n);
          },
        });
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(4),
        o = e(44),
        i = e(10),
        u = e(15);
      t.exports = function (t) {
        r(r.S, t, {
          from: function (t) {
            var n,
              e,
              r,
              c,
              s = arguments[1];
            return (
              o(this),
              (n = void 0 !== s) && o(s),
              null == t
                ? new this()
                : ((e = []),
                  n
                    ? ((r = 0),
                      (c = i(s, arguments[2], 2)),
                      u(t, !1, function (t) {
                        e.push(c(t, r++));
                      }))
                    : u(t, !1, e.push, e),
                  new this(e))
            );
          },
        });
      };
    },
    function (t, n) {
      t.exports = !1;
    },
    function (t, n, e) {
      t.exports =
        !e(8) &&
        !e(13)(function () {
          return (
            7 !=
            Object.defineProperty(e(42)("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, n, e) {
      var r = e(1),
        o = e(2).document,
        i = r(o) && r(o.createElement);
      t.exports = function (t) {
        return i ? o.createElement(t) : {};
      };
    },
    function (t, n, e) {
      var r = e(1);
      t.exports = function (t, n) {
        if (!r(t)) return t;
        var e, o;
        if (n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        if ("function" == typeof (e = t.valueOf) && !r((o = e.call(t))))
          return o;
        if (!n && "function" == typeof (e = t.toString) && !r((o = e.call(t))))
          return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, n) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    function (t, n, e) {
      var r = e(7),
        o = e(63),
        i = e(46),
        u = e(32)("IE_PROTO"),
        c = function () {},
        s = function () {
          var t,
            n = e(42)("iframe"),
            r = i.length;
          for (
            n.style.display = "none",
              e(67).appendChild(n),
              n.src = "javascript:",
              (t = n.contentWindow.document).open(),
              t.write("<script>document.F=Object</script>"),
              t.close(),
              s = t.F;
            r--;

          )
            delete s.prototype[i[r]];
          return s();
        };
      t.exports =
        Object.create ||
        function (t, n) {
          var e;
          return (
            null !== t
              ? ((c.prototype = r(t)),
                (e = new c()),
                (c.prototype = null),
                (e[u] = t))
              : (e = s()),
            void 0 === n ? e : o(e, n)
          );
        };
    },
    function (t, n) {
      t.exports =
        "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );
    },
    function (t, n) {
      t.exports = function (t, n) {
        return { value: n, done: !!t };
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(6).f,
        o = e(45),
        i = e(35),
        u = e(10),
        c = e(36),
        s = e(15),
        a = e(29),
        f = e(47),
        l = e(72),
        p = e(8),
        h = e(21).fastKey,
        d = e(12),
        v = p ? "_s" : "size",
        y = function (t, n) {
          var e,
            r = h(n);
          if ("F" !== r) return t._i[r];
          for (e = t._f; e; e = e.n) if (e.k == n) return e;
        };
      t.exports = {
        getConstructor: function (t, n, e, a) {
          var f = t(function (t, r) {
            c(t, f, n, "_i"),
              (t._t = n),
              (t._i = o(null)),
              (t._f = void 0),
              (t._l = void 0),
              (t[v] = 0),
              null != r && s(r, e, t[a], t);
          });
          return (
            i(f.prototype, {
              clear: function () {
                for (var t = d(this, n), e = t._i, r = t._f; r; r = r.n)
                  (r.r = !0), r.p && (r.p = r.p.n = void 0), delete e[r.i];
                (t._f = t._l = void 0), (t[v] = 0);
              },
              delete: function (t) {
                var e = d(this, n),
                  r = y(e, t);
                if (r) {
                  var o = r.n,
                    i = r.p;
                  delete e._i[r.i],
                    (r.r = !0),
                    i && (i.n = o),
                    o && (o.p = i),
                    e._f == r && (e._f = o),
                    e._l == r && (e._l = i),
                    e[v]--;
                }
                return !!r;
              },
              forEach: function (t) {
                d(this, n);
                for (
                  var e,
                    r = u(t, arguments.length > 1 ? arguments[1] : void 0, 3);
                  (e = e ? e.n : this._f);

                )
                  for (r(e.v, e.k, this); e && e.r; ) e = e.p;
              },
              has: function (t) {
                return !!y(d(this, n), t);
              },
            }),
            p &&
              r(f.prototype, "size", {
                get: function () {
                  return d(this, n)[v];
                },
              }),
            f
          );
        },
        def: function (t, n, e) {
          var r,
            o,
            i = y(t, n);
          return (
            i
              ? (i.v = e)
              : ((t._l = i =
                  {
                    i: (o = h(n, !0)),
                    k: n,
                    v: e,
                    p: (r = t._l),
                    n: void 0,
                    r: !1,
                  }),
                t._f || (t._f = i),
                r && (r.n = i),
                t[v]++,
                "F" !== o && (t._i[o] = i)),
            t
          );
        },
        getEntry: y,
        setStrong: function (t, n, e) {
          a(
            t,
            n,
            function (t, e) {
              (this._t = d(t, n)), (this._k = e), (this._l = void 0);
            },
            function () {
              for (var t = this._k, n = this._l; n && n.r; ) n = n.p;
              return this._t && (this._l = n = n ? n.n : this._t._f)
                ? f(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v])
                : ((this._t = void 0), f(1));
            },
            e ? "entries" : "values",
            !e,
            !0
          ),
            l(n);
        },
      };
    },
    function (t, n, e) {
      var r = e(7);
      t.exports = function (t, n, e, o) {
        try {
          return o ? n(r(e)[0], e[1]) : n(e);
        } catch (n) {
          var i = t.return;
          throw (void 0 !== i && r(i.call(t)), n);
        }
      };
    },
    function (t, n, e) {
      var r = e(14),
        o = e(0)("iterator"),
        i = Array.prototype;
      t.exports = function (t) {
        return void 0 !== t && (r.Array === t || i[o] === t);
      };
    },
    function (t, n, e) {
      var r = e(23),
        o = e(0)("iterator"),
        i = e(14);
      t.exports = e(3).getIteratorMethod = function (t) {
        if (null != t) return t[o] || t["@@iterator"] || i[r(t)];
      };
    },
    function (t, n, e) {
      var r = e(0)("iterator"),
        o = !1;
      try {
        var i = [7][r]();
        (i.return = function () {
          o = !0;
        }),
          Array.from(i, function () {
            throw 2;
          });
      } catch (t) {}
      t.exports = function (t, n) {
        if (!n && !o) return !1;
        var e = !1;
        try {
          var i = [7],
            u = i[r]();
          (u.next = function () {
            return { done: (e = !0) };
          }),
            (i[r] = function () {
              return u;
            }),
            t(i);
        } catch (t) {}
        return e;
      };
    },
    function (t, n) {
      n.f = {}.propertyIsEnumerable;
    },
    function (t, n, e) {
      var r = e(23),
        o = e(77);
      t.exports = function (t) {
        return function () {
          if (r(this) != t) throw TypeError(t + "#toJSON isn't generic");
          return o(this);
        };
      };
    },
    function (t, n, e) {
      var r = e(10),
        o = e(31),
        i = e(20),
        u = e(19),
        c = e(87);
      t.exports = function (t, n) {
        var e = 1 == t,
          s = 2 == t,
          a = 3 == t,
          f = 4 == t,
          l = 6 == t,
          p = 5 == t || l,
          h = n || c;
        return function (n, c, d) {
          for (
            var v,
              y,
              m = i(n),
              g = o(m),
              b = r(c, d, 3),
              x = u(g.length),
              _ = 0,
              w = e ? h(n, x) : s ? h(n, 0) : void 0;
            x > _;
            _++
          )
            if ((p || _ in g) && ((y = b((v = g[_]), _, m)), t))
              if (e) w[_] = y;
              else if (y)
                switch (t) {
                  case 3:
                    return !0;
                  case 5:
                    return v;
                  case 6:
                    return _;
                  case 2:
                    w.push(v);
                }
              else if (f) return !1;
          return l ? -1 : a || f ? f : w;
        };
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(30),
        o = e(90),
        i = e(53),
        u = e(20),
        c = e(31),
        s = Object.assign;
      t.exports =
        !s ||
        e(13)(function () {
          var t = {},
            n = {},
            e = Symbol(),
            r = "abcdefghijklmnopqrst";
          return (
            (t[e] = 7),
            r.split("").forEach(function (t) {
              n[t] = t;
            }),
            7 != s({}, t)[e] || Object.keys(s({}, n)).join("") != r
          );
        })
          ? function (t, n) {
              for (
                var e = u(t), s = arguments.length, a = 1, f = o.f, l = i.f;
                s > a;

              )
                for (
                  var p,
                    h = c(arguments[a++]),
                    d = f ? r(h).concat(f(h)) : r(h),
                    v = d.length,
                    y = 0;
                  v > y;

                )
                  l.call(h, (p = d[y++])) && (e[p] = h[p]);
              return e;
            }
          : s;
    },
    function (t, n, e) {
      "use strict";
      (function (t) {
        var e = "object" == typeof t && t && t.Object === Object && t;
        n.a = e;
      }.call(this, e(99)));
    },
    function (t, n, e) {
      t.exports = e(100);
    },
    function (t, n, e) {
      e(22), e(26), e(34), e(71), e(76), e(78), e(79), (t.exports = e(3).Map);
    },
    function (t, n, e) {
      t.exports = e(25)("native-function-to-string", Function.toString);
    },
    function (t, n, e) {
      var r = e(27),
        o = e(28);
      t.exports = function (t) {
        return function (n, e) {
          var i,
            u,
            c = String(o(n)),
            s = r(e),
            a = c.length;
          return s < 0 || s >= a
            ? t
              ? ""
              : void 0
            : (i = c.charCodeAt(s)) < 55296 ||
              i > 56319 ||
              s + 1 === a ||
              (u = c.charCodeAt(s + 1)) < 56320 ||
              u > 57343
            ? t
              ? c.charAt(s)
              : i
            : t
            ? c.slice(s, s + 2)
            : u - 56320 + ((i - 55296) << 10) + 65536;
        };
      };
    },
    function (t, n, e) {
      "use strict";
      var r = e(45),
        o = e(17),
        i = e(33),
        u = {};
      e(11)(u, e(0)("iterator"), function () {
        return this;
      }),
        (t.exports = function (t, n, e) {
          (t.prototype = r(u, { next: o(1, e) })), i(t, n + " Iterator");
        });
    },
    function (t, n, e) {
      var r = e(6),
        o = e(7),
        i = e(30);
      t.exports = e(8)
        ? Object.defineProperties
        : function (t, n) {
            o(t);
            for (var e, u = i(n), c = u.length, s = 0; c > s; )
              r.f(t, (e = u[s++]), n[e]);
            return t;
          };
    },
    function (t, n, e) {
      var r = e(9),
        o = e(18),
        i = e(65)(!1),
        u = e(32)("IE_PROTO");
      t.exports = function (t, n) {
        var e,
          c = o(t),
          s = 0,
          a = [];
        for (e in c) e != u && r(c, e) && a.push(e);
        for (; n.length > s; ) r(c, (e = n[s++])) && (~i(a, e) || a.push(e));
        return a;
      };
    },
    function (t, n, e) {
      var r = e(18),
        o = e(19),
        i = e(66);
      t.exports = function (t) {
        return function (n, e, u) {
          var c,
            s = r(n),
            a = o(s.length),
            f = i(u, a);
          if (t && e != e) {
            for (; a > f; ) if ((c = s[f++]) != c) return !0;
          } else
            for (; a > f; f++)
              if ((t || f in s) && s[f] === e) return t || f || 0;
          return !t && -1;
        };
      };
    },
    function (t, n, e) {
      var r = e(27),
        o = Math.max,
        i = Math.min;
      t.exports = function (t, n) {
        return (t = r(t)) < 0 ? o(t + n, 0) : i(t, n);
      };
    },
    function (t, n, e) {
      var r = e(2).document;
      t.exports = r && r.documentElement;
    },
    function (t, n, e) {
      var r = e(9),
        o = e(20),
        i = e(32)("IE_PROTO"),
        u = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function (t) {
          return (
            (t = o(t)),
            r(t, i)
              ? t[i]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? u
              : null
          );
        };
    },
    function (t, n, e) {
      "use strict";
      var r = e(70),
        o = e(47),
        i = e(14),
        u = e(18);
      (t.exports = e(29)(
        Array,
        "Array",
        function (t, n) {
          (this._t = u(t)), (this._i = 0), (this._k = n);
        },
        function () {
          var t = this._t,
            n = this._k,
            e = this._i++;
          return !t || e >= t.length
            ? ((this._t = void 0), o(1))
            : o(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]]);
        },
        "values"
      )),
        (i.Arguments = i.Array),
        r("keys"),
        r("values"),
        r("entries");
    },
    function (t, n, e) {
      var r = e(0)("unscopables"),
        o = Array.prototype;
      null == o[r] && e(11)(o, r, {}),
        (t.exports = function (t) {
          o[r][t] = !0;
        });
    },
    function (t, n, e) {
      "use strict";
      var r = e(48),
        o = e(12);
      t.exports = e(37)(
        "Map",
        function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          get: function (t) {
            var n = r.getEntry(o(this, "Map"), t);
            return n && n.v;
          },
          set: function (t, n) {
            return r.def(o(this, "Map"), 0 === t ? 0 : t, n);
          },
        },
        r,
        !0
      );
    },
    function (t, n, e) {
      "use strict";
      var r = e(2),
        o = e(6),
        i = e(8),
        u = e(0)("species");
      t.exports = function (t) {
        var n = r[t];
        i &&
          n &&
          !n[u] &&
          o.f(n, u, {
            configurable: !0,
            get: function () {
              return this;
            },
          });
      };
    },
    function (t, n, e) {
      var r = e(1),
        o = e(74).set;
      t.exports = function (t, n, e) {
        var i,
          u = n.constructor;
        return (
          u !== e &&
            "function" == typeof u &&
            (i = u.prototype) !== e.prototype &&
            r(i) &&
            o &&
            o(t, i),
          t
        );
      };
    },
    function (t, n, e) {
      var r = e(1),
        o = e(7),
        i = function (t, n) {
          if ((o(t), !r(n) && null !== n))
            throw TypeError(n + ": can't set as prototype!");
        };
      t.exports = {
        set:
          Object.setPrototypeOf ||
          ("__proto__" in {}
            ? (function (t, n, r) {
                try {
                  (r = e(10)(
                    Function.call,
                    e(75).f(Object.prototype, "__proto__").set,
                    2
                  ))(t, []),
                    (n = !(t instanceof Array));
                } catch (t) {
                  n = !0;
                }
                return function (t, e) {
                  return i(t, e), n ? (t.__proto__ = e) : r(t, e), t;
                };
              })({}, !1)
            : void 0),
        check: i,
      };
    },
    function (t, n, e) {
      var r = e(53),
        o = e(17),
        i = e(18),
        u = e(43),
        c = e(9),
        s = e(41),
        a = Object.getOwnPropertyDescriptor;
      n.f = e(8)
        ? a
        : function (t, n) {
            if (((t = i(t)), (n = u(n, !0)), s))
              try {
                return a(t, n);
              } catch (t) {}
            if (c(t, n)) return o(!r.f.call(t, n), t[n]);
          };
    },
    function (t, n, e) {
      var r = e(4);
      r(r.P + r.R, "Map", { toJSON: e(54)("Map") });
    },
    function (t, n, e) {
      var r = e(15);
      t.exports = function (t, n) {
        var e = [];
        return r(t, !1, e.push, e, n), e;
      };
    },
    function (t, n, e) {
      e(38)("Map");
    },
    function (t, n, e) {
      e(39)("Map");
    },
    function (t, n, e) {
      e(22), e(26), e(34), e(81), e(82), e(83), e(84), (t.exports = e(3).Set);
    },
    function (t, n, e) {
      "use strict";
      var r = e(48),
        o = e(12);
      t.exports = e(37)(
        "Set",
        function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        {
          add: function (t) {
            return r.def(o(this, "Set"), (t = 0 === t ? 0 : t), t);
          },
        },
        r
      );
    },
    function (t, n, e) {
      var r = e(4);
      r(r.P + r.R, "Set", { toJSON: e(54)("Set") });
    },
    function (t, n, e) {
      e(38)("Set");
    },
    function (t, n, e) {
      e(39)("Set");
    },
    function (t, n, e) {
      e(22), e(34), e(86), e(92), e(93), (t.exports = e(3).WeakMap);
    },
    function (t, n, e) {
      "use strict";
      var r,
        o = e(2),
        i = e(55)(0),
        u = e(5),
        c = e(21),
        s = e(56),
        a = e(91),
        f = e(1),
        l = e(12),
        p = e(12),
        h = !o.ActiveXObject && "ActiveXObject" in o,
        d = c.getWeak,
        v = Object.isExtensible,
        y = a.ufstore,
        m = function (t) {
          return function () {
            return t(this, arguments.length > 0 ? arguments[0] : void 0);
          };
        },
        g = {
          get: function (t) {
            if (f(t)) {
              var n = d(t);
              return !0 === n
                ? y(l(this, "WeakMap")).get(t)
                : n
                ? n[this._i]
                : void 0;
            }
          },
          set: function (t, n) {
            return a.def(l(this, "WeakMap"), t, n);
          },
        },
        b = (t.exports = e(37)("WeakMap", m, g, a, !0, !0));
      p &&
        h &&
        (s((r = a.getConstructor(m, "WeakMap")).prototype, g),
        (c.NEED = !0),
        i(["delete", "has", "get", "set"], function (t) {
          var n = b.prototype,
            e = n[t];
          u(n, t, function (n, o) {
            if (f(n) && !v(n)) {
              this._f || (this._f = new r());
              var i = this._f[t](n, o);
              return "set" == t ? this : i;
            }
            return e.call(this, n, o);
          });
        }));
    },
    function (t, n, e) {
      var r = e(88);
      t.exports = function (t, n) {
        return new (r(t))(n);
      };
    },
    function (t, n, e) {
      var r = e(1),
        o = e(89),
        i = e(0)("species");
      t.exports = function (t) {
        var n;
        return (
          o(t) &&
            ("function" != typeof (n = t.constructor) ||
              (n !== Array && !o(n.prototype)) ||
              (n = void 0),
            r(n) && null === (n = n[i]) && (n = void 0)),
          void 0 === n ? Array : n
        );
      };
    },
    function (t, n, e) {
      var r = e(24);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == r(t);
        };
    },
    function (t, n) {
      n.f = Object.getOwnPropertySymbols;
    },
    function (t, n, e) {
      "use strict";
      var r = e(35),
        o = e(21).getWeak,
        i = e(7),
        u = e(1),
        c = e(36),
        s = e(15),
        a = e(55),
        f = e(9),
        l = e(12),
        p = a(5),
        h = a(6),
        d = 0,
        v = function (t) {
          return t._l || (t._l = new y());
        },
        y = function () {
          this.a = [];
        },
        m = function (t, n) {
          return p(t.a, function (t) {
            return t[0] === n;
          });
        };
      (y.prototype = {
        get: function (t) {
          var n = m(this, t);
          if (n) return n[1];
        },
        has: function (t) {
          return !!m(this, t);
        },
        set: function (t, n) {
          var e = m(this, t);
          e ? (e[1] = n) : this.a.push([t, n]);
        },
        delete: function (t) {
          var n = h(this.a, function (n) {
            return n[0] === t;
          });
          return ~n && this.a.splice(n, 1), !!~n;
        },
      }),
        (t.exports = {
          getConstructor: function (t, n, e, i) {
            var a = t(function (t, r) {
              c(t, a, n, "_i"),
                (t._t = n),
                (t._i = d++),
                (t._l = void 0),
                null != r && s(r, e, t[i], t);
            });
            return (
              r(a.prototype, {
                delete: function (t) {
                  if (!u(t)) return !1;
                  var e = o(t);
                  return !0 === e
                    ? v(l(this, n)).delete(t)
                    : e && f(e, this._i) && delete e[this._i];
                },
                has: function (t) {
                  if (!u(t)) return !1;
                  var e = o(t);
                  return !0 === e ? v(l(this, n)).has(t) : e && f(e, this._i);
                },
              }),
              a
            );
          },
          def: function (t, n, e) {
            var r = o(i(n), !0);
            return !0 === r ? v(t).set(n, e) : (r[t._i] = e), t;
          },
          ufstore: v,
        });
    },
    function (t, n, e) {
      e(38)("WeakMap");
    },
    function (t, n, e) {
      e(39)("WeakMap");
    },
    function (t, n, e) {
      e(26), e(95), (t.exports = e(3).Array.from);
    },
    function (t, n, e) {
      "use strict";
      var r = e(10),
        o = e(4),
        i = e(20),
        u = e(49),
        c = e(50),
        s = e(19),
        a = e(96),
        f = e(51);
      o(
        o.S +
          o.F *
            !e(52)(function (t) {
              Array.from(t);
            }),
        "Array",
        {
          from: function (t) {
            var n,
              e,
              o,
              l,
              p = i(t),
              h = "function" == typeof this ? this : Array,
              d = arguments.length,
              v = d > 1 ? arguments[1] : void 0,
              y = void 0 !== v,
              m = 0,
              g = f(p);
            if (
              (y && (v = r(v, d > 2 ? arguments[2] : void 0, 2)),
              null == g || (h == Array && c(g)))
            )
              for (e = new h((n = s(p.length))); n > m; m++)
                a(e, m, y ? v(p[m], m) : p[m]);
            else
              for (l = g.call(p), e = new h(); !(o = l.next()).done; m++)
                a(e, m, y ? u(l, v, [o.value, m], !0) : o.value);
            return (e.length = m), e;
          },
        }
      );
    },
    function (t, n, e) {
      "use strict";
      var r = e(6),
        o = e(17);
      t.exports = function (t, n, e) {
        n in t ? r.f(t, n, o(0, e)) : (t[n] = e);
      };
    },
    function (t, n, e) {
      e(98), (t.exports = e(3).Object.assign);
    },
    function (t, n, e) {
      var r = e(4);
      r(r.S + r.F, "Object", { assign: e(56) });
    },
    function (t, n) {
      var e;
      e = (function () {
        return this;
      })();
      try {
        e = e || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (e = window);
      }
      t.exports = e;
    },
    function (t, n, e) {
      "use strict";
      e.r(n);
      var r = {};
      e.r(r),
        e.d(r, "keyboardHandler", function () {
          return et;
        }),
        e.d(r, "mouseHandler", function () {
          return rt;
        }),
        e.d(r, "resizeHandler", function () {
          return ot;
        }),
        e.d(r, "selectHandler", function () {
          return it;
        }),
        e.d(r, "touchHandler", function () {
          return ut;
        }),
        e.d(r, "wheelHandler", function () {
          return ct;
        });
      /*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
      var o = function (t, n) {
          return (o =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (t, n) {
                t.__proto__ = n;
              }) ||
            function (t, n) {
              for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e]);
            })(t, n);
        },
        i = function () {
          return (i =
            Object.assign ||
            function (t) {
              for (var n, e = 1, r = arguments.length; e < r; e++)
                for (var o in (n = arguments[e]))
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              return t;
            }).apply(this, arguments);
        };
      function u(t, n, e, r) {
        var o,
          i = arguments.length,
          u =
            i < 3
              ? n
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(n, e))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          u = Reflect.decorate(t, n, e, r);
        else
          for (var c = t.length - 1; c >= 0; c--)
            (o = t[c]) &&
              (u = (i < 3 ? o(u) : i > 3 ? o(n, e, u) : o(n, e)) || u);
        return i > 3 && u && Object.defineProperty(n, e, u), u;
      }
      e(59), e(80), e(85), e(94), e(97);
      var c = function (t) {
          var n = typeof t;
          return null != t && ("object" == n || "function" == n);
        },
        s = e(57),
        a = "object" == typeof self && self && self.Object === Object && self,
        f = s.a || a || Function("return this")(),
        l = f.Symbol,
        p = Object.prototype,
        h = p.hasOwnProperty,
        d = p.toString,
        v = l ? l.toStringTag : void 0,
        y = Object.prototype.toString,
        m = l ? l.toStringTag : void 0,
        g = function (t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : m && m in Object(t)
            ? (function (t) {
                var n = h.call(t, v),
                  e = t[v];
                try {
                  t[v] = void 0;
                  var r = !0;
                } catch (t) {}
                var o = d.call(t);
                return r && (n ? (t[v] = e) : delete t[v]), o;
              })(t)
            : (function (t) {
                return y.call(t);
              })(t);
        },
        b = /^\s+|\s+$/g,
        x = /^[-+]0x[0-9a-f]+$/i,
        _ = /^0b[01]+$/i,
        w = /^0o[0-7]+$/i,
        S = parseInt,
        E = function (t) {
          if ("number" == typeof t) return t;
          if (
            (function (t) {
              return (
                "symbol" == typeof t ||
                ((function (t) {
                  return null != t && "object" == typeof t;
                })(t) &&
                  "[object Symbol]" == g(t))
              );
            })(t)
          )
            return NaN;
          if (c(t)) {
            var n = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = c(n) ? n + "" : n;
          }
          if ("string" != typeof t) return 0 === t ? t : +t;
          t = t.replace(b, "");
          var e = _.test(t);
          return e || w.test(t)
            ? S(t.slice(2), e ? 2 : 8)
            : x.test(t)
            ? NaN
            : +t;
        },
        O = function (t, n, e) {
          return (
            void 0 === e && ((e = n), (n = void 0)),
            void 0 !== e && (e = (e = E(e)) == e ? e : 0),
            void 0 !== n && (n = (n = E(n)) == n ? n : 0),
            (function (t, n, e) {
              return (
                t == t &&
                  (void 0 !== e && (t = t <= e ? t : e),
                  void 0 !== n && (t = t >= n ? t : n)),
                t
              );
            })(E(t), n, e)
          );
        };
      function T(t, n) {
        return (
          void 0 === t && (t = -1 / 0),
          void 0 === n && (n = 1 / 0),
          function (e, r) {
            var o = "_" + r;
            Object.defineProperty(e, r, {
              get: function () {
                return this[o];
              },
              set: function (e) {
                Object.defineProperty(this, o, {
                  value: O(e, t, n),
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                });
              },
              enumerable: !0,
              configurable: !0,
            });
          }
        );
      }
      function A(t, n) {
        var e = "_" + n;
        Object.defineProperty(t, n, {
          get: function () {
            return this[e];
          },
          set: function (t) {
            Object.defineProperty(this, e, {
              value: !!t,
              enumerable: !1,
              writable: !0,
              configurable: !0,
            });
          },
          enumerable: !0,
          configurable: !0,
        });
      }
      var M = function () {
          return f.Date.now();
        },
        P = Math.max,
        j = Math.min,
        k = function (t, n, e) {
          var r,
            o,
            i,
            u,
            s,
            a,
            f = 0,
            l = !1,
            p = !1,
            h = !0;
          if ("function" != typeof t)
            throw new TypeError("Expected a function");
          function d(n) {
            var e = r,
              i = o;
            return (r = o = void 0), (f = n), (u = t.apply(i, e));
          }
          function v(t) {
            var e = t - a;
            return void 0 === a || e >= n || e < 0 || (p && t - f >= i);
          }
          function y() {
            var t = M();
            if (v(t)) return m(t);
            s = setTimeout(
              y,
              (function (t) {
                var e = n - (t - a);
                return p ? j(e, i - (t - f)) : e;
              })(t)
            );
          }
          function m(t) {
            return (s = void 0), h && r ? d(t) : ((r = o = void 0), u);
          }
          function g() {
            var t = M(),
              e = v(t);
            if (((r = arguments), (o = this), (a = t), e)) {
              if (void 0 === s)
                return (function (t) {
                  return (f = t), (s = setTimeout(y, n)), l ? d(t) : u;
                })(a);
              if (p) return (s = setTimeout(y, n)), d(a);
            }
            return void 0 === s && (s = setTimeout(y, n)), u;
          }
          return (
            (n = E(n) || 0),
            c(e) &&
              ((l = !!e.leading),
              (i = (p = "maxWait" in e) ? P(E(e.maxWait) || 0, n) : i),
              (h = "trailing" in e ? !!e.trailing : h)),
            (g.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (f = 0),
                (r = a = o = s = void 0);
            }),
            (g.flush = function () {
              return void 0 === s ? u : m(M());
            }),
            g
          );
        };
      function D() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return function (n, e, r) {
          var o = r.value;
          return {
            get: function () {
              return (
                this.hasOwnProperty(e) ||
                  Object.defineProperty(this, e, {
                    value: k.apply(void 0, [o].concat(t)),
                  }),
                this[e]
              );
            },
          };
        };
      }
      var L,
        N = (function () {
          function t(t) {
            var n = this;
            void 0 === t && (t = {}),
              (this.damping = 0.1),
              (this.thumbMinSize = 20),
              (this.renderByPixels = !0),
              (this.alwaysShowTracks = !1),
              (this.continuousScrolling = !0),
              (this.delegateTo = null),
              (this.plugins = {}),
              Object.keys(t).forEach(function (e) {
                n[e] = t[e];
              });
          }
          return (
            Object.defineProperty(t.prototype, "wheelEventTarget", {
              get: function () {
                return this.delegateTo;
              },
              set: function (t) {
                console.warn(
                  "[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."
                ),
                  (this.delegateTo = t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            u([T(0, 1)], t.prototype, "damping", void 0),
            u([T(0, 1 / 0)], t.prototype, "thumbMinSize", void 0),
            u([A], t.prototype, "renderByPixels", void 0),
            u([A], t.prototype, "alwaysShowTracks", void 0),
            u([A], t.prototype, "continuousScrolling", void 0),
            t
          );
        })(),
        z = new WeakMap();
      function C() {
        if (void 0 !== L) return L;
        var t = !1;
        try {
          var n = function () {},
            e = Object.defineProperty({}, "passive", {
              get: function () {
                t = !0;
              },
            });
          window.addEventListener("testPassive", n, e),
            window.removeEventListener("testPassive", n, e);
        } catch (t) {}
        return (L = !!t && { passive: !1 });
      }
      function R(t) {
        var n = z.get(t) || [];
        return (
          z.set(t, n),
          function (t, e, r) {
            function o(t) {
              t.defaultPrevented || r(t);
            }
            e.split(/\s+/g).forEach(function (e) {
              n.push({ elem: t, eventName: e, handler: o }),
                t.addEventListener(e, o, C());
            });
          }
        );
      }
      function F(t) {
        var n = (function (t) {
          return t.touches ? t.touches[t.touches.length - 1] : t;
        })(t);
        return { x: n.clientX, y: n.clientY };
      }
      function I(t, n) {
        return (
          void 0 === n && (n = []),
          n.some(function (n) {
            return t === n;
          })
        );
      }
      var W = ["webkit", "moz", "ms", "o"],
        H = new RegExp("^-(?!(?:" + W.join("|") + ")-)");
      function B(t, n) {
        (n = (function (t) {
          var n = {};
          return (
            Object.keys(t).forEach(function (e) {
              if (H.test(e)) {
                var r = t[e];
                (e = e.replace(/^-/, "")),
                  (n[e] = r),
                  W.forEach(function (t) {
                    n["-" + t + "-" + e] = r;
                  });
              } else n[e] = t[e];
            }),
            n
          );
        })(n)),
          Object.keys(n).forEach(function (e) {
            var r = e.replace(/^-/, "").replace(/-([a-z])/g, function (t, n) {
              return n.toUpperCase();
            });
            t.style[r] = n[e];
          });
      }
      var G,
        X = (function () {
          function t(t) {
            (this.updateTime = Date.now()),
              (this.delta = { x: 0, y: 0 }),
              (this.velocity = { x: 0, y: 0 }),
              (this.lastPosition = { x: 0, y: 0 }),
              (this.lastPosition = F(t));
          }
          return (
            (t.prototype.update = function (t) {
              var n = this.velocity,
                e = this.updateTime,
                r = this.lastPosition,
                o = Date.now(),
                i = F(t),
                u = { x: -(i.x - r.x), y: -(i.y - r.y) },
                c = o - e || 16,
                s = (u.x / c) * 16,
                a = (u.y / c) * 16;
              (n.x = 0.9 * s + 0.1 * n.x),
                (n.y = 0.9 * a + 0.1 * n.y),
                (this.delta = u),
                (this.updateTime = o),
                (this.lastPosition = i);
            }),
            t
          );
        })(),
        V = (function () {
          function t() {
            this._touchList = {};
          }
          return (
            Object.defineProperty(t.prototype, "_primitiveValue", {
              get: function () {
                return { x: 0, y: 0 };
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.isActive = function () {
              return void 0 !== this._activeTouchID;
            }),
            (t.prototype.getDelta = function () {
              var t = this._getActiveTracker();
              return t ? i({}, t.delta) : this._primitiveValue;
            }),
            (t.prototype.getVelocity = function () {
              var t = this._getActiveTracker();
              return t ? i({}, t.velocity) : this._primitiveValue;
            }),
            (t.prototype.track = function (t) {
              var n = this,
                e = t.targetTouches;
              return (
                Array.from(e).forEach(function (t) {
                  n._add(t);
                }),
                this._touchList
              );
            }),
            (t.prototype.update = function (t) {
              var n = this,
                e = t.touches,
                r = t.changedTouches;
              return (
                Array.from(e).forEach(function (t) {
                  n._renew(t);
                }),
                this._setActiveID(r),
                this._touchList
              );
            }),
            (t.prototype.release = function (t) {
              var n = this;
              delete this._activeTouchID,
                Array.from(t.changedTouches).forEach(function (t) {
                  n._delete(t);
                });
            }),
            (t.prototype._add = function (t) {
              if (!this._has(t)) {
                var n = new X(t);
                this._touchList[t.identifier] = n;
              }
            }),
            (t.prototype._renew = function (t) {
              this._has(t) && this._touchList[t.identifier].update(t);
            }),
            (t.prototype._delete = function (t) {
              delete this._touchList[t.identifier];
            }),
            (t.prototype._has = function (t) {
              return this._touchList.hasOwnProperty(t.identifier);
            }),
            (t.prototype._setActiveID = function (t) {
              this._activeTouchID = t[t.length - 1].identifier;
            }),
            (t.prototype._getActiveTracker = function () {
              return this._touchList[this._activeTouchID];
            }),
            t
          );
        })();
      !(function (t) {
        (t.X = "x"), (t.Y = "y");
      })(G || (G = {}));
      var U = (function () {
          function t(t, n) {
            void 0 === n && (n = 0),
              (this._direction = t),
              (this._minSize = n),
              (this.element = document.createElement("div")),
              (this.displaySize = 0),
              (this.realSize = 0),
              (this.offset = 0),
              (this.element.className = "scrollbar-thumb scrollbar-thumb-" + t);
          }
          return (
            (t.prototype.attachTo = function (t) {
              t.appendChild(this.element);
            }),
            (t.prototype.update = function (t, n, e) {
              (this.realSize = Math.min(n / e, 1) * n),
                (this.displaySize = Math.max(this.realSize, this._minSize)),
                (this.offset =
                  (t / e) * (n + (this.realSize - this.displaySize))),
                B(this.element, this._getStyle());
            }),
            (t.prototype._getStyle = function () {
              switch (this._direction) {
                case G.X:
                  return {
                    width: this.displaySize + "px",
                    "-transform": "translate3d(" + this.offset + "px, 0, 0)",
                  };
                case G.Y:
                  return {
                    height: this.displaySize + "px",
                    "-transform": "translate3d(0, " + this.offset + "px, 0)",
                  };
                default:
                  return null;
              }
            }),
            t
          );
        })(),
        Y = (function () {
          function t(t, n) {
            void 0 === n && (n = 0),
              (this.element = document.createElement("div")),
              (this._isShown = !1),
              (this.element.className = "scrollbar-track scrollbar-track-" + t),
              (this.thumb = new U(t, n)),
              this.thumb.attachTo(this.element);
          }
          return (
            (t.prototype.attachTo = function (t) {
              t.appendChild(this.element);
            }),
            (t.prototype.show = function () {
              this._isShown ||
                ((this._isShown = !0), this.element.classList.add("show"));
            }),
            (t.prototype.hide = function () {
              this._isShown &&
                ((this._isShown = !1), this.element.classList.remove("show"));
            }),
            (t.prototype.update = function (t, n, e) {
              B(this.element, { display: e <= n ? "none" : "block" }),
                this.thumb.update(t, n, e);
            }),
            t
          );
        })(),
        q = (function () {
          function t(t) {
            this._scrollbar = t;
            var n = t.options.thumbMinSize;
            (this.xAxis = new Y(G.X, n)),
              (this.yAxis = new Y(G.Y, n)),
              this.xAxis.attachTo(t.containerEl),
              this.yAxis.attachTo(t.containerEl),
              t.options.alwaysShowTracks &&
                (this.xAxis.show(), this.yAxis.show());
          }
          return (
            (t.prototype.update = function () {
              var t = this._scrollbar,
                n = t.size,
                e = t.offset;
              this.xAxis.update(e.x, n.container.width, n.content.width),
                this.yAxis.update(e.y, n.container.height, n.content.height);
            }),
            (t.prototype.autoHideOnIdle = function () {
              this._scrollbar.options.alwaysShowTracks ||
                (this.xAxis.hide(), this.yAxis.hide());
            }),
            u([D(300)], t.prototype, "autoHideOnIdle", null),
            t
          );
        })(),
        K = new WeakMap();
      function $(t) {
        return Math.pow(t - 1, 3) + 1;
      }
      var J,
        Q,
        Z,
        tt = (function () {
          function t(t, n) {
            var e = this.constructor;
            (this.scrollbar = t),
              (this.name = e.pluginName),
              (this.options = i({}, e.defaultOptions, n));
          }
          return (
            (t.prototype.onInit = function () {}),
            (t.prototype.onDestory = function () {}),
            (t.prototype.onUpdate = function () {}),
            (t.prototype.onRender = function (t) {}),
            (t.prototype.transformDelta = function (t, n) {
              return i({}, t);
            }),
            (t.pluginName = ""),
            (t.defaultOptions = {}),
            t
          );
        })(),
        nt = { order: new Set(), constructors: {} };
      function et(t) {
        var n = R(t),
          e = t.containerEl;
        n(e, "keydown", function (n) {
          var r = document.activeElement;
          if (
            (r === e || e.contains(r)) &&
            !(function (t) {
              return (
                ("INPUT" === t.tagName || "TEXTAREA" === t.tagName) &&
                !t.disabled
              );
            })(r)
          ) {
            var o = (function (t, n) {
              var e = t.size,
                r = t.limit,
                o = t.offset;
              switch (n) {
                case J.TAB:
                  return (function (t) {
                    requestAnimationFrame(function () {
                      t.scrollIntoView(document.activeElement, {
                        offsetTop: t.size.container.height / 2,
                        onlyScrollIfNeeded: !0,
                      });
                    });
                  })(t);
                case J.SPACE:
                  return [0, 200];
                case J.PAGE_UP:
                  return [0, 40 - e.container.height];
                case J.PAGE_DOWN:
                  return [0, e.container.height - 40];
                case J.END:
                  return [0, r.y - o.y];
                case J.HOME:
                  return [0, -o.y];
                case J.LEFT:
                  return [-40, 0];
                case J.UP:
                  return [0, -40];
                case J.RIGHT:
                  return [40, 0];
                case J.DOWN:
                  return [0, 40];
                default:
                  return null;
              }
            })(t, n.keyCode || n.which);
            if (o) {
              var i = o[0],
                u = o[1];
              t.addTransformableMomentum(i, u, n, function (e) {
                e
                  ? n.preventDefault()
                  : (t.containerEl.blur(),
                    t.parent && t.parent.containerEl.focus());
              });
            }
          }
        });
      }
      function rt(t) {
        var n,
          e,
          r,
          o,
          i,
          u = R(t),
          c = t.containerEl,
          s = t.track,
          a = s.xAxis,
          f = s.yAxis;
        function l(n, e) {
          var r = t.size;
          return n === Q.X
            ? (e /
                (r.container.width +
                  (a.thumb.realSize - a.thumb.displaySize))) *
                r.content.width
            : n === Q.Y
            ? (e /
                (r.container.height +
                  (f.thumb.realSize - f.thumb.displaySize))) *
              r.content.height
            : 0;
        }
        function p(t) {
          return I(t, [a.element, a.thumb.element])
            ? Q.X
            : I(t, [f.element, f.thumb.element])
            ? Q.Y
            : void 0;
        }
        u(c, "click", function (n) {
          if (!e && I(n.target, [a.element, f.element])) {
            var r = n.target,
              o = p(r),
              i = r.getBoundingClientRect(),
              u = F(n),
              c = t.offset,
              s = t.limit;
            if (o === Q.X) {
              var h = u.x - i.left - a.thumb.displaySize / 2;
              t.setMomentum(O(l(o, h) - c.x, -c.x, s.x - c.x), 0);
            }
            o === Q.Y &&
              ((h = u.y - i.top - f.thumb.displaySize / 2),
              t.setMomentum(0, O(l(o, h) - c.y, -c.y, s.y - c.y)));
          }
        }),
          u(c, "mousedown", function (e) {
            if (I(e.target, [a.thumb.element, f.thumb.element])) {
              n = !0;
              var u = e.target,
                s = F(e),
                l = u.getBoundingClientRect();
              (o = p(u)),
                (r = { x: s.x - l.left, y: s.y - l.top }),
                (i = c.getBoundingClientRect()),
                B(t.containerEl, { "-user-select": "none" });
            }
          }),
          u(window, "mousemove", function (u) {
            if (n) {
              e = !0;
              var c = t.offset,
                s = F(u);
              if (o === Q.X) {
                var a = s.x - r.x - i.left;
                t.setPosition(l(o, a), c.y);
              }
              o === Q.Y &&
                ((a = s.y - r.y - i.top), t.setPosition(c.x, l(o, a)));
            }
          }),
          u(window, "mouseup blur", function () {
            (n = e = !1), B(t.containerEl, { "-user-select": "" });
          });
      }
      function ot(t) {
        R(t)(window, "resize", k(t.update.bind(t), 300));
      }
      function it(t) {
        var n,
          e = R(t),
          r = t.containerEl,
          o = t.contentEl,
          i = t.offset,
          u = t.limit,
          c = !1;
        e(window, "mousemove", function (e) {
          c &&
            (cancelAnimationFrame(n),
            (function e(r) {
              var o = r.x,
                c = r.y;
              (o || c) &&
                (t.setMomentum(
                  O(i.x + o, 0, u.x) - i.x,
                  O(i.y + c, 0, u.y) - i.y
                ),
                (n = requestAnimationFrame(function () {
                  e({ x: o, y: c });
                })));
            })(
              (function (t, n) {
                var e = t.bounding,
                  r = e.top,
                  o = e.right,
                  i = e.bottom,
                  u = e.left,
                  c = F(n),
                  s = c.x,
                  a = c.y,
                  f = { x: 0, y: 0 };
                return 0 === s && 0 === a
                  ? f
                  : (s > o - 20
                      ? (f.x = s - o + 20)
                      : s < u + 20 && (f.x = s - u - 20),
                    a > i - 20
                      ? (f.y = a - i + 20)
                      : a < r + 20 && (f.y = a - r - 20),
                    (f.x *= 2),
                    (f.y *= 2),
                    f);
              })(t, e)
            ));
        }),
          e(o, "selectstart", function (t) {
            t.stopPropagation(), cancelAnimationFrame(n), (c = !0);
          }),
          e(window, "mouseup blur", function () {
            cancelAnimationFrame(n), (c = !1);
          }),
          e(r, "scroll", function (t) {
            t.preventDefault(), (r.scrollTop = r.scrollLeft = 0);
          });
      }
      function ut(t) {
        var n,
          e = /Android/.test(navigator.userAgent) ? 3 : 2,
          r = t.options.delegateTo || t.containerEl,
          o = new V(),
          i = R(t),
          u = 0;
        i(r, "touchstart", function (e) {
          o.track(e),
            t.setMomentum(0, 0),
            0 === u &&
              ((n = t.options.damping), (t.options.damping = Math.max(n, 0.5))),
            u++;
        }),
          i(r, "touchmove", function (n) {
            if (!Z || Z === t) {
              o.update(n);
              var e = o.getDelta(),
                r = e.x,
                i = e.y;
              t.addTransformableMomentum(r, i, n, function (e) {
                e && (n.preventDefault(), (Z = t));
              });
            }
          }),
          i(r, "touchcancel touchend", function (r) {
            var i = o.getVelocity(),
              c = { x: 0, y: 0 };
            Object.keys(i).forEach(function (t) {
              var r = i[t] / n;
              c[t] = Math.abs(r) < 50 ? 0 : r * e;
            }),
              t.addTransformableMomentum(c.x, c.y, r),
              0 == --u && (t.options.damping = n),
              o.release(r),
              (Z = null);
          });
      }
      function ct(t) {
        R(t)(
          t.options.delegateTo || t.containerEl,
          "onwheel" in window ||
            document.implementation.hasFeature("Events.wheel", "3.0")
            ? "wheel"
            : "mousewheel",
          function (n) {
            var e = (function (t) {
                if ("deltaX" in t) {
                  var n = ft(t.deltaMode);
                  return {
                    x: (t.deltaX / st.STANDARD) * n,
                    y: (t.deltaY / st.STANDARD) * n,
                  };
                }
                return "wheelDeltaX" in t
                  ? {
                      x: t.wheelDeltaX / st.OTHERS,
                      y: t.wheelDeltaY / st.OTHERS,
                    }
                  : { x: 0, y: t.wheelDelta / st.OTHERS };
              })(n),
              r = e.x,
              o = e.y;
            t.addTransformableMomentum(r, o, n, function (t) {
              t && n.preventDefault();
            });
          }
        );
      }
      !(function (t) {
        (t[(t.TAB = 9)] = "TAB"),
          (t[(t.SPACE = 32)] = "SPACE"),
          (t[(t.PAGE_UP = 33)] = "PAGE_UP"),
          (t[(t.PAGE_DOWN = 34)] = "PAGE_DOWN"),
          (t[(t.END = 35)] = "END"),
          (t[(t.HOME = 36)] = "HOME"),
          (t[(t.LEFT = 37)] = "LEFT"),
          (t[(t.UP = 38)] = "UP"),
          (t[(t.RIGHT = 39)] = "RIGHT"),
          (t[(t.DOWN = 40)] = "DOWN");
      })(J || (J = {})),
        (function (t) {
          (t[(t.X = 0)] = "X"), (t[(t.Y = 1)] = "Y");
        })(Q || (Q = {}));
      var st = { STANDARD: 1, OTHERS: -3 },
        at = [1, 28, 500],
        ft = function (t) {
          return at[t] || at[0];
        },
        lt = new Map(),
        pt = (function () {
          function t(t, n) {
            var e = this;
            (this.offset = { x: 0, y: 0 }),
              (this.limit = { x: 1 / 0, y: 1 / 0 }),
              (this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }),
              (this._plugins = []),
              (this._momentum = { x: 0, y: 0 }),
              (this._listeners = new Set()),
              (this.containerEl = t);
            var r = (this.contentEl = document.createElement("div"));
            (this.options = new N(n)),
              t.setAttribute("data-scrollbar", "true"),
              t.setAttribute("tabindex", "-1"),
              B(t, { overflow: "hidden", outline: "none" }),
              window.navigator.msPointerEnabled &&
                (t.style.msTouchAction = "none"),
              (r.className = "scroll-content"),
              Array.from(t.childNodes).forEach(function (t) {
                r.appendChild(t);
              }),
              t.appendChild(r),
              (this.track = new q(this)),
              (this.size = this.getSize()),
              (this._plugins = (function (t, n) {
                return Array.from(nt.order)
                  .filter(function (t) {
                    return !1 !== n[t];
                  })
                  .map(function (e) {
                    var r = new (0, nt.constructors[e])(t, n[e]);
                    return (n[e] = r.options), r;
                  });
              })(this, this.options.plugins));
            var o = t.scrollLeft,
              i = t.scrollTop;
            (t.scrollLeft = t.scrollTop = 0),
              this.setPosition(o, i, { withoutCallbacks: !0 });
            var u = window,
              c =
                u.MutationObserver ||
                u.WebKitMutationObserver ||
                u.MozMutationObserver;
            "function" == typeof c &&
              ((this._observer = new c(function () {
                e.update();
              })),
              this._observer.observe(r, { subtree: !0, childList: !0 })),
              lt.set(t, this),
              requestAnimationFrame(function () {
                e._init();
              });
          }
          return (
            Object.defineProperty(t.prototype, "parent", {
              get: function () {
                for (var t = this.containerEl.parentElement; t; ) {
                  var n = lt.get(t);
                  if (n) return n;
                  t = t.parentElement;
                }
                return null;
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "scrollTop", {
              get: function () {
                return this.offset.y;
              },
              set: function (t) {
                this.setPosition(this.scrollLeft, t);
              },
              enumerable: !0,
              configurable: !0,
            }),
            Object.defineProperty(t.prototype, "scrollLeft", {
              get: function () {
                return this.offset.x;
              },
              set: function (t) {
                this.setPosition(t, this.scrollTop);
              },
              enumerable: !0,
              configurable: !0,
            }),
            (t.prototype.getSize = function () {
              return (
                (n = (t = this).containerEl),
                (e = t.contentEl),
                {
                  container: { width: n.clientWidth, height: n.clientHeight },
                  content: {
                    width: e.offsetWidth - e.clientWidth + e.scrollWidth,
                    height: e.offsetHeight - e.clientHeight + e.scrollHeight,
                  },
                }
              );
              var t, n, e;
            }),
            (t.prototype.update = function () {
              var t, n, e, r, o;
              (n = (t = this).getSize()),
                (e = {
                  x: Math.max(n.content.width - n.container.width, 0),
                  y: Math.max(n.content.height - n.container.height, 0),
                }),
                (r = t.containerEl.getBoundingClientRect()),
                (o = {
                  top: Math.max(r.top, 0),
                  right: Math.min(r.right, window.innerWidth),
                  bottom: Math.min(r.bottom, window.innerHeight),
                  left: Math.max(r.left, 0),
                }),
                (t.size = n),
                (t.limit = e),
                (t.bounding = o),
                t.track.update(),
                t.setPosition(),
                this._plugins.forEach(function (t) {
                  t.onUpdate();
                });
            }),
            (t.prototype.isVisible = function (t) {
              return (function (t, n) {
                var e = t.bounding,
                  r = n.getBoundingClientRect(),
                  o = Math.max(e.top, r.top),
                  i = Math.max(e.left, r.left),
                  u = Math.min(e.right, r.right);
                return o < Math.min(e.bottom, r.bottom) && i < u;
              })(this, t);
            }),
            (t.prototype.setPosition = function (t, n, e) {
              var r = this;
              void 0 === t && (t = this.offset.x),
                void 0 === n && (n = this.offset.y),
                void 0 === e && (e = {});
              var o = (function (t, n, e) {
                var r = t.options,
                  o = t.offset,
                  u = t.limit,
                  c = t.track,
                  s = t.contentEl;
                return (
                  r.renderByPixels &&
                    ((n = Math.round(n)), (e = Math.round(e))),
                  (n = O(n, 0, u.x)),
                  (e = O(e, 0, u.y)),
                  n !== o.x && c.xAxis.show(),
                  e !== o.y && c.yAxis.show(),
                  r.alwaysShowTracks || c.autoHideOnIdle(),
                  n === o.x && e === o.y
                    ? null
                    : ((o.x = n),
                      (o.y = e),
                      B(s, {
                        "-transform":
                          "translate3d(" + -n + "px, " + -e + "px, 0)",
                      }),
                      c.update(),
                      { offset: i({}, o), limit: i({}, u) })
                );
              })(this, t, n);
              o &&
                !e.withoutCallbacks &&
                this._listeners.forEach(function (t) {
                  t.call(r, o);
                });
            }),
            (t.prototype.scrollTo = function (t, n, e, r) {
              void 0 === t && (t = this.offset.x),
                void 0 === n && (n = this.offset.y),
                void 0 === e && (e = 0),
                void 0 === r && (r = {}),
                (function (t, n, e, r, o) {
                  void 0 === r && (r = 0);
                  var i = void 0 === o ? {} : o,
                    u = i.easing,
                    c = void 0 === u ? $ : u,
                    s = i.callback,
                    a = t.options,
                    f = t.offset,
                    l = t.limit;
                  a.renderByPixels &&
                    ((n = Math.round(n)), (e = Math.round(e)));
                  var p = f.x,
                    h = f.y,
                    d = O(n, 0, l.x) - p,
                    v = O(e, 0, l.y) - h,
                    y = Date.now();
                  cancelAnimationFrame(K.get(t)),
                    (function n() {
                      var e = Date.now() - y,
                        o = r ? c(Math.min(e / r, 1)) : 1;
                      if ((t.setPosition(p + d * o, h + v * o), e >= r))
                        "function" == typeof s && s.call(t);
                      else {
                        var i = requestAnimationFrame(n);
                        K.set(t, i);
                      }
                    })();
                })(this, t, n, e, r);
            }),
            (t.prototype.scrollIntoView = function (t, n) {
              void 0 === n && (n = {}),
                (function (t, n, e) {
                  var r = void 0 === e ? {} : e,
                    o = r.alignToTop,
                    i = void 0 === o || o,
                    u = r.onlyScrollIfNeeded,
                    c = void 0 !== u && u,
                    s = r.offsetTop,
                    a = void 0 === s ? 0 : s,
                    f = r.offsetLeft,
                    l = void 0 === f ? 0 : f,
                    p = r.offsetBottom,
                    h = void 0 === p ? 0 : p,
                    d = t.containerEl,
                    v = t.bounding,
                    y = t.offset,
                    m = t.limit;
                  if (n && d.contains(n)) {
                    var g = n.getBoundingClientRect();
                    if (!c || !t.isVisible(n)) {
                      var b = i ? g.top - v.top - a : g.bottom - v.bottom + h;
                      t.setMomentum(g.left - v.left - l, O(b, -y.y, m.y - y.y));
                    }
                  }
                })(this, t, n);
            }),
            (t.prototype.addListener = function (t) {
              if ("function" != typeof t)
                throw new TypeError(
                  "[smooth-scrollbar] scrolling listener should be a function"
                );
              this._listeners.add(t);
            }),
            (t.prototype.removeListener = function (t) {
              this._listeners.delete(t);
            }),
            (t.prototype.addTransformableMomentum = function (t, n, e, r) {
              this._updateDebounced();
              var o = this._plugins.reduce(
                  function (t, n) {
                    return n.transformDelta(t, e) || t;
                  },
                  { x: t, y: n }
                ),
                i = !this._shouldPropagateMomentum(o.x, o.y);
              i && this.addMomentum(o.x, o.y), r && r.call(this, i);
            }),
            (t.prototype.addMomentum = function (t, n) {
              this.setMomentum(this._momentum.x + t, this._momentum.y + n);
            }),
            (t.prototype.setMomentum = function (t, n) {
              0 === this.limit.x && (t = 0),
                0 === this.limit.y && (n = 0),
                this.options.renderByPixels &&
                  ((t = Math.round(t)), (n = Math.round(n))),
                (this._momentum.x = t),
                (this._momentum.y = n);
            }),
            (t.prototype.updatePluginOptions = function (t, n) {
              this._plugins.forEach(function (e) {
                e.name === t && Object.assign(e.options, n);
              });
            }),
            (t.prototype.destroy = function () {
              var t = this.containerEl,
                n = this.contentEl;
              !(function (t) {
                var n = z.get(t);
                n &&
                  (n.forEach(function (t) {
                    var n = t.elem,
                      e = t.eventName,
                      r = t.handler;
                    n.removeEventListener(e, r, C());
                  }),
                  z.delete(t));
              })(this),
                this._listeners.clear(),
                this.setMomentum(0, 0),
                cancelAnimationFrame(this._renderID),
                this._observer && this._observer.disconnect(),
                lt.delete(this.containerEl);
              for (var e = Array.from(n.childNodes); t.firstChild; )
                t.removeChild(t.firstChild);
              e.forEach(function (n) {
                t.appendChild(n);
              }),
                B(t, { overflow: "" }),
                (t.scrollTop = this.scrollTop),
                (t.scrollLeft = this.scrollLeft),
                this._plugins.forEach(function (t) {
                  t.onDestory();
                }),
                (this._plugins.length = 0);
            }),
            (t.prototype._init = function () {
              var t = this;
              this.update(),
                Object.keys(r).forEach(function (n) {
                  r[n](t);
                }),
                this._plugins.forEach(function (t) {
                  t.onInit();
                }),
                this._render();
            }),
            (t.prototype._updateDebounced = function () {
              this.update();
            }),
            (t.prototype._shouldPropagateMomentum = function (t, n) {
              void 0 === t && (t = 0), void 0 === n && (n = 0);
              var e = this.options,
                r = this.offset,
                o = this.limit;
              if (!e.continuousScrolling) return !1;
              0 === o.x && 0 === o.y && this._updateDebounced();
              var i = O(t + r.x, 0, o.x),
                u = O(n + r.y, 0, o.y),
                c = !0;
              return (
                (c = (c = c && i === r.x) && u === r.y) &&
                (r.x === o.x || 0 === r.x || r.y === o.y || 0 === r.y)
              );
            }),
            (t.prototype._render = function () {
              var t = this._momentum;
              if (t.x || t.y) {
                var n = this._nextTick("x"),
                  e = this._nextTick("y");
                (t.x = n.momentum),
                  (t.y = e.momentum),
                  this.setPosition(n.position, e.position);
              }
              var r = i({}, this._momentum);
              this._plugins.forEach(function (t) {
                t.onRender(r);
              }),
                (this._renderID = requestAnimationFrame(
                  this._render.bind(this)
                ));
            }),
            (t.prototype._nextTick = function (t) {
              var n = this.options,
                e = this.offset,
                r = this._momentum,
                o = e[t],
                i = r[t];
              if (Math.abs(i) <= 0.1) return { momentum: 0, position: o + i };
              var u = i * (1 - n.damping);
              return (
                n.renderByPixels && (u |= 0),
                { momentum: u, position: o + i - u }
              );
            }),
            u([D(100, { leading: !0 })], t.prototype, "_updateDebounced", null),
            t
          );
        })(),
        ht =
          "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: rgba(222, 222, 222, .75);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: rgba(0, 0, 0, .5);\n  border-radius: 4px;\n}\n",
        dt = "smooth-scrollbar-style",
        vt = !1;
      function yt() {
        if (!vt && "undefined" != typeof window) {
          var t = document.createElement("style");
          (t.id = dt),
            (t.textContent = ht),
            document.head && document.head.appendChild(t),
            (vt = !0);
        }
      }
      e.d(n, "ScrollbarPlugin", function () {
        return tt;
      });
      /*!
       * cast `I.Scrollbar` to `Scrollbar` to avoid error
       *
       * `I.Scrollbar` is not assignable to `Scrollbar`:
       *     "privateProp" is missing in `I.Scrollbar`
       *
       * @see https://github.com/Microsoft/TypeScript/issues/2672
       */
      var mt = (function (t) {
        function n() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          (function (t, n) {
            function e() {
              this.constructor = t;
            }
            o(t, n),
              (t.prototype =
                null === n
                  ? Object.create(n)
                  : ((e.prototype = n.prototype), new e()));
          })(n, t),
          (n.init = function (t, n) {
            if (!t || 1 !== t.nodeType)
              throw new TypeError(
                "expect element to be DOM Element, but got " + t
              );
            return yt(), lt.has(t) ? lt.get(t) : new pt(t, n);
          }),
          (n.initAll = function (t) {
            return Array.from(
              document.querySelectorAll("[data-scrollbar]"),
              function (e) {
                return n.init(e, t);
              }
            );
          }),
          (n.has = function (t) {
            return lt.has(t);
          }),
          (n.get = function (t) {
            return lt.get(t);
          }),
          (n.getAll = function () {
            return Array.from(lt.values());
          }),
          (n.destroy = function (t) {
            var n = lt.get(t);
            n && n.destroy();
          }),
          (n.destroyAll = function () {
            lt.forEach(function (t) {
              t.destroy();
            });
          }),
          (n.use = function () {
            for (var t = [], n = 0; n < arguments.length; n++)
              t[n] = arguments[n];
            return function () {
              for (var t = [], n = 0; n < arguments.length; n++)
                t[n] = arguments[n];
              t.forEach(function (t) {
                var n = t.pluginName;
                if (!n) throw new TypeError("plugin name is required");
                nt.order.add(n), (nt.constructors[n] = t);
              });
            }.apply(void 0, t);
          }),
          (n.attachStyle = function () {
            return yt();
          }),
          (n.detachStyle = function () {
            return (function () {
              if (vt && "undefined" != typeof window) {
                var t = document.getElementById(dt);
                t && t.parentNode && (t.parentNode.removeChild(t), (vt = !1));
              }
            })();
          }),
          (n.version = "8.4.0"),
          (n.ScrollbarPlugin = tt),
          n
        );
      })(pt);
      n.default = mt;
    },
  ]).default;
});

/* Swiper   */

!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : (e.Swiper = t());
})(this, function () {
  "use strict";
  function e(e, t) {
    var a = [],
      i = 0;
    if (e && !t && e instanceof r) return e;
    if (e)
      if ("string" == typeof e) {
        var s,
          n,
          o = e.trim();
        if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
          var l = "div";
          for (
            0 === o.indexOf("<li") && (l = "ul"),
              0 === o.indexOf("<tr") && (l = "tbody"),
              (0 !== o.indexOf("<td") && 0 !== o.indexOf("<th")) || (l = "tr"),
              0 === o.indexOf("<tbody") && (l = "table"),
              0 === o.indexOf("<option") && (l = "select"),
              (n = document.createElement(l)).innerHTML = o,
              i = 0;
            i < n.childNodes.length;
            i += 1
          )
            a.push(n.childNodes[i]);
        } else
          for (
            s =
              t || "#" !== e[0] || e.match(/[ .<>:~]/)
                ? (t || document).querySelectorAll(e.trim())
                : [document.getElementById(e.trim().split("#")[1])],
              i = 0;
            i < s.length;
            i += 1
          )
            s[i] && a.push(s[i]);
      } else if (e.nodeType || e === window || e === document) a.push(e);
      else if (e.length > 0 && e[0].nodeType)
        for (i = 0; i < e.length; i += 1) a.push(e[i]);
    return new r(a);
  }
  function t(e) {
    for (var t = [], a = 0; a < e.length; a += 1)
      -1 === t.indexOf(e[a]) && t.push(e[a]);
    return t;
  }
  function a() {
    var e = "onwheel" in d;
    if (!e) {
      var t = d.createElement("div");
      t.setAttribute("onwheel", "return;"),
        (e = "function" == typeof t.onwheel);
    }
    return (
      !e &&
        d.implementation &&
        d.implementation.hasFeature &&
        !0 !== d.implementation.hasFeature("", "") &&
        (e = d.implementation.hasFeature("Events.wheel", "3.0")),
      e
    );
  }
  var i,
    s = (i =
      "undefined" == typeof window
        ? {
            navigator: { userAgent: "" },
            location: {},
            history: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
              return {};
            },
            Image: function () {},
            Date: function () {},
            screen: {},
          }
        : window),
    r = function (e) {
      for (var t = this, a = 0; a < e.length; a += 1) t[a] = e[a];
      return (t.length = e.length), this;
    };
  (e.fn = r.prototype), (e.Class = r), (e.Dom7 = r);
  "resize scroll".split(" ");
  var n = {
    addClass: function (e) {
      var t = this;
      if (void 0 === e) return this;
      for (var a = e.split(" "), i = 0; i < a.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== t[s].classList && t[s].classList.add(a[i]);
      return this;
    },
    removeClass: function (e) {
      for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== t[s].classList && t[s].classList.remove(a[i]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = this, a = e.split(" "), i = 0; i < a.length; i += 1)
        for (var s = 0; s < this.length; s += 1)
          void 0 !== t[s].classList && t[s].classList.toggle(a[i]);
      return this;
    },
    attr: function (e, t) {
      var a = arguments,
        i = this;
      if (1 !== arguments.length || "string" != typeof e) {
        for (var s = 0; s < this.length; s += 1)
          if (2 === a.length) i[s].setAttribute(e, t);
          else for (var r in e) (i[s][r] = e[r]), i[s].setAttribute(r, e[r]);
        return this;
      }
      if (this[0]) return this[0].getAttribute(e);
    },
    removeAttr: function (e) {
      for (var t = this, a = 0; a < this.length; a += 1)
        t[a].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var a,
        i = this;
      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1)
          (a = i[s]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}),
            (a.dom7ElementDataStorage[e] = t);
        return this;
      }
      if ((a = this[0])) {
        if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage)
          return a.dom7ElementDataStorage[e];
        var r = a.getAttribute("data-" + e);
        if (r) return r;
      }
    },
    transform: function (e) {
      for (var t = this, a = 0; a < this.length; a += 1) {
        var i = t[a].style;
        (i.webkitTransform = e), (i.transform = e);
      }
      return this;
    },
    transition: function (e) {
      var t = this;
      "string" != typeof e && (e += "ms");
      for (var a = 0; a < this.length; a += 1) {
        var i = t[a].style;
        (i.webkitTransitionDuration = e), (i.transitionDuration = e);
      }
      return this;
    },
    on: function () {
      function t(t) {
        var a = t.target;
        if (a) {
          var i = t.target.dom7EventData || [];
          if ((i.unshift(t), e(a).is(o))) l.apply(a, i);
          else
            for (var s = e(a).parents(), r = 0; r < s.length; r += 1)
              e(s[r]).is(o) && l.apply(s[r], i);
        }
      }
      function a(e) {
        var t = e && e.target ? e.target.dom7EventData || [] : [];
        t.unshift(e), l.apply(this, t);
      }
      for (var i = this, s = [], r = arguments.length; r--; )
        s[r] = arguments[r];
      var n = s[0],
        o = s[1],
        l = s[2],
        d = s[3];
      if ("function" == typeof s[1]) {
        var p;
        (n = (p = s)[0]), (l = p[1]), (d = p[2]), (o = void 0);
      }
      d || (d = !1);
      for (var c, u = n.split(" "), h = 0; h < this.length; h += 1) {
        var v = i[h];
        if (o)
          for (c = 0; c < u.length; c += 1)
            v.dom7LiveListeners || (v.dom7LiveListeners = []),
              v.dom7LiveListeners.push({
                type: n,
                listener: l,
                proxyListener: t,
              }),
              v.addEventListener(u[c], t, d);
        else
          for (c = 0; c < u.length; c += 1)
            v.dom7Listeners || (v.dom7Listeners = []),
              v.dom7Listeners.push({ type: n, listener: l, proxyListener: a }),
              v.addEventListener(u[c], a, d);
      }
      return this;
    },
    off: function () {
      for (var e = this, t = [], a = arguments.length; a--; )
        t[a] = arguments[a];
      var i = t[0],
        s = t[1],
        r = t[2],
        n = t[3];
      if ("function" == typeof t[1]) {
        var o;
        (i = (o = t)[0]), (r = o[1]), (n = o[2]), (s = void 0);
      }
      n || (n = !1);
      for (var l = i.split(" "), d = 0; d < l.length; d += 1)
        for (var p = 0; p < this.length; p += 1) {
          var c = e[p];
          if (s) {
            if (c.dom7LiveListeners)
              for (var u = 0; u < c.dom7LiveListeners.length; u += 1)
                r
                  ? c.dom7LiveListeners[u].listener === r &&
                    c.removeEventListener(
                      l[d],
                      c.dom7LiveListeners[u].proxyListener,
                      n
                    )
                  : c.dom7LiveListeners[u].type === l[d] &&
                    c.removeEventListener(
                      l[d],
                      c.dom7LiveListeners[u].proxyListener,
                      n
                    );
          } else if (c.dom7Listeners)
            for (var h = 0; h < c.dom7Listeners.length; h += 1)
              r
                ? c.dom7Listeners[h].listener === r &&
                  c.removeEventListener(
                    l[d],
                    c.dom7Listeners[h].proxyListener,
                    n
                  )
                : c.dom7Listeners[h].type === l[d] &&
                  c.removeEventListener(
                    l[d],
                    c.dom7Listeners[h].proxyListener,
                    n
                  );
        }
      return this;
    },
    trigger: function () {
      for (var e = this, t = [], a = arguments.length; a--; )
        t[a] = arguments[a];
      for (var i = t[0].split(" "), s = t[1], r = 0; r < i.length; r += 1)
        for (var n = 0; n < this.length; n += 1) {
          var o = void 0;
          try {
            o = new window.CustomEvent(i[r], {
              detail: s,
              bubbles: !0,
              cancelable: !0,
            });
          } catch (e) {
            (o = document.createEvent("Event")).initEvent(i[r], !0, !0),
              (o.detail = s);
          }
          (e[n].dom7EventData = t.filter(function (e, t) {
            return t > 0;
          })),
            e[n].dispatchEvent(o),
            (e[n].dom7EventData = []),
            delete e[n].dom7EventData;
        }
      return this;
    },
    transitionEnd: function (e) {
      function t(r) {
        if (r.target === this)
          for (e.call(this, r), a = 0; a < i.length; a += 1) s.off(i[a], t);
      }
      var a,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      if (e) for (a = 0; a < i.length; a += 1) s.on(i[a], t);
      return this;
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (this.length > 0) {
        var e = this[0],
          t = e.getBoundingClientRect(),
          a = document.body,
          i = e.clientTop || a.clientTop || 0,
          s = e.clientLeft || a.clientLeft || 0,
          r = e === window ? window.scrollY : e.scrollTop,
          n = e === window ? window.scrollX : e.scrollLeft;
        return { top: t.top + r - i, left: t.left + n - s };
      }
      return null;
    },
    css: function (e, t) {
      var a,
        i = this;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (var s in e) i[a].style[s] = e[s];
          return this;
        }
        if (this[0])
          return window.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (a = 0; a < this.length; a += 1) i[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      var t = this;
      if (!e) return this;
      for (var a = 0; a < this.length; a += 1)
        if (!1 === e.call(t[a], a, t[a])) return t;
      return this;
    },
    html: function (e) {
      var t = this;
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var a = 0; a < this.length; a += 1) t[a].innerHTML = e;
      return this;
    },
    text: function (e) {
      var t = this;
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var a = 0; a < this.length; a += 1) t[a].textContent = e;
      return this;
    },
    is: function (t) {
      var a,
        i,
        s = this[0];
      if (!s || void 0 === t) return !1;
      if ("string" == typeof t) {
        if (s.matches) return s.matches(t);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
        if (s.msMatchesSelector) return s.msMatchesSelector(t);
        for (a = e(t), i = 0; i < a.length; i += 1) if (a[i] === s) return !0;
        return !1;
      }
      if (t === document) return s === document;
      if (t === window) return s === window;
      if (t.nodeType || t instanceof r) {
        for (a = t.nodeType ? [t] : t, i = 0; i < a.length; i += 1)
          if (a[i] === s) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        a = this.length;
      return e > a - 1
        ? new r([])
        : e < 0
        ? ((t = a + e), new r(t < 0 ? [] : [this[t]]))
        : new r([this[e]]);
    },
    append: function () {
      for (var e = this, t = [], a = arguments.length; a--; )
        t[a] = arguments[a];
      for (var i, s = 0; s < t.length; s += 1) {
        i = t[s];
        for (var n = 0; n < this.length; n += 1)
          if ("string" == typeof i) {
            var o = document.createElement("div");
            for (o.innerHTML = i; o.firstChild; )
              e[n].appendChild(o.firstChild);
          } else if (i instanceof r)
            for (var l = 0; l < i.length; l += 1) e[n].appendChild(i[l]);
          else e[n].appendChild(i);
      }
      return this;
    },
    prepend: function (e) {
      var t,
        a,
        i = this;
      for (t = 0; t < this.length; t += 1)
        if ("string" == typeof e) {
          var s = document.createElement("div");
          for (s.innerHTML = e, a = s.childNodes.length - 1; a >= 0; a -= 1)
            i[t].insertBefore(s.childNodes[a], i[t].childNodes[0]);
        } else if (e instanceof r)
          for (a = 0; a < e.length; a += 1)
            i[t].insertBefore(e[a], i[t].childNodes[0]);
        else i[t].insertBefore(e, i[t].childNodes[0]);
      return this;
    },
    next: function (t) {
      return new r(
        this.length > 0
          ? t
            ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t)
              ? [this[0].nextElementSibling]
              : []
            : this[0].nextElementSibling
            ? [this[0].nextElementSibling]
            : []
          : []
      );
    },
    nextAll: function (t) {
      var a = [],
        i = this[0];
      if (!i) return new r([]);
      for (; i.nextElementSibling; ) {
        var s = i.nextElementSibling;
        t ? e(s).is(t) && a.push(s) : a.push(s), (i = s);
      }
      return new r(a);
    },
    prev: function (t) {
      if (this.length > 0) {
        var a = this[0];
        return new r(
          t
            ? a.previousElementSibling && e(a.previousElementSibling).is(t)
              ? [a.previousElementSibling]
              : []
            : a.previousElementSibling
            ? [a.previousElementSibling]
            : []
        );
      }
      return new r([]);
    },
    prevAll: function (t) {
      var a = [],
        i = this[0];
      if (!i) return new r([]);
      for (; i.previousElementSibling; ) {
        var s = i.previousElementSibling;
        t ? e(s).is(t) && a.push(s) : a.push(s), (i = s);
      }
      return new r(a);
    },
    parent: function (a) {
      for (var i = this, s = [], r = 0; r < this.length; r += 1)
        null !== i[r].parentNode &&
          (a
            ? e(i[r].parentNode).is(a) && s.push(i[r].parentNode)
            : s.push(i[r].parentNode));
      return e(t(s));
    },
    parents: function (a) {
      for (var i = this, s = [], r = 0; r < this.length; r += 1)
        for (var n = i[r].parentNode; n; )
          a ? e(n).is(a) && s.push(n) : s.push(n), (n = n.parentNode);
      return e(t(s));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e
        ? new r([])
        : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = this, a = [], i = 0; i < this.length; i += 1)
        for (var s = t[i].querySelectorAll(e), n = 0; n < s.length; n += 1)
          a.push(s[n]);
      return new r(a);
    },
    children: function (a) {
      for (var i = this, s = [], n = 0; n < this.length; n += 1)
        for (var o = i[n].childNodes, l = 0; l < o.length; l += 1)
          a
            ? 1 === o[l].nodeType && e(o[l]).is(a) && s.push(o[l])
            : 1 === o[l].nodeType && s.push(o[l]);
      return new r(t(s));
    },
    remove: function () {
      for (var e = this, t = 0; t < this.length; t += 1)
        e[t].parentNode && e[t].parentNode.removeChild(e[t]);
      return this;
    },
    add: function () {
      for (var t = [], a = arguments.length; a--; ) t[a] = arguments[a];
      var i,
        s,
        r = this;
      for (i = 0; i < t.length; i += 1) {
        var n = e(t[i]);
        for (s = 0; s < n.length; s += 1) (r[r.length] = n[s]), (r.length += 1);
      }
      return r;
    },
    styles: function () {
      return this[0] ? window.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(n).forEach(function (t) {
    e.fn[t] = n[t];
  });
  var o,
    l = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, t) {
        void 0 === t && (t = "x");
        var a,
          i,
          r,
          n = s.getComputedStyle(e, null);
        return (
          s.WebKitCSSMatrix
            ? ((i = n.transform || n.webkitTransform).split(",").length > 6 &&
                (i = i
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
            : (a = (r =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === t &&
            (i = s.WebKitCSSMatrix
              ? r.m41
              : 16 === a.length
              ? parseFloat(a[12])
              : parseFloat(a[4])),
          "y" === t &&
            (i = s.WebKitCSSMatrix
              ? r.m42
              : 16 === a.length
              ? parseFloat(a[13])
              : parseFloat(a[5])),
          i || 0
        );
      },
      parseUrlQuery: function (e) {
        var t,
          a,
          i,
          r,
          n = {},
          o = e || s.location.href;
        if ("string" == typeof o && o.length)
          for (
            r = (a = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "")
              .split("&")
              .filter(function (e) {
                return "" !== e;
              })).length,
              t = 0;
            t < r;
            t += 1
          )
            (i = a[t].replace(/#\S+/g, "").split("=")),
              (n[decodeURIComponent(i[0])] =
                void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "");
        return n;
      },
      isObject: function (e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          e.constructor === Object
        );
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
          var s = e[i];
          if (void 0 !== s && null !== s)
            for (
              var r = Object.keys(Object(s)), n = 0, o = r.length;
              n < o;
              n += 1
            ) {
              var d = r[n],
                p = Object.getOwnPropertyDescriptor(s, d);
              void 0 !== p &&
                p.enumerable &&
                (l.isObject(a[d]) && l.isObject(s[d])
                  ? l.extend(a[d], s[d])
                  : !l.isObject(a[d]) && l.isObject(s[d])
                  ? ((a[d] = {}), l.extend(a[d], s[d]))
                  : (a[d] = s[d]));
            }
        }
        return a;
      },
    },
    d = (o =
      "undefined" == typeof document
        ? {
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return {};
            },
            querySelectorAll: function () {
              return [];
            },
            createElement: function () {
              return {
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            location: { hash: "" },
          }
        : document),
    p = {
      touch:
        (s.Modernizr && !0 === s.Modernizr.touch) ||
        !!(
          "ontouchstart" in s ||
          (s.DocumentTouch && d instanceof s.DocumentTouch)
        ),
      transforms3d:
        (s.Modernizr && !0 === s.Modernizr.csstransforms3d) ||
        (function () {
          var e = d.createElement("div").style;
          return (
            "webkitPerspective" in e ||
            "MozPerspective" in e ||
            "OPerspective" in e ||
            "MsPerspective" in e ||
            "perspective" in e
          );
        })(),
      flexbox: (function () {
        for (
          var e = d.createElement("div").style,
            t =
              "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                " "
              ),
            a = 0;
          a < t.length;
          a += 1
        )
          if (t[a] in e) return !0;
        return !1;
      })(),
      observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
      passiveListener: (function () {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0;
            },
          });
          s.addEventListener("testPassiveListener", null, t);
        } catch (e) {}
        return e;
      })(),
      gestures: "ongesturestart" in s,
    },
    c = function (e) {
      void 0 === e && (e = {});
      var t = this;
      (t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          });
    },
    u = { components: {} };
  (c.prototype.on = function (e, t) {
    var a = this;
    return "function" != typeof t
      ? a
      : (e.split(" ").forEach(function (e) {
          a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e].push(t);
        }),
        a);
  }),
    (c.prototype.once = function (e, t) {
      function a() {
        for (var s = [], r = arguments.length; r--; ) s[r] = arguments[r];
        t.apply(i, s), i.off(e, a);
      }
      var i = this;
      return "function" != typeof t ? i : i.on(e, a);
    }),
    (c.prototype.off = function (e, t) {
      var a = this;
      return (
        e.split(" ").forEach(function (e) {
          void 0 === t
            ? (a.eventsListeners[e] = [])
            : a.eventsListeners[e].forEach(function (i, s) {
                i === t && a.eventsListeners[e].splice(s, 1);
              });
        }),
        a
      );
    }),
    (c.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var a = this;
      if (!a.eventsListeners) return a;
      var i, s, r;
      return (
        "string" == typeof e[0] || Array.isArray(e[0])
          ? ((i = e[0]), (s = e.slice(1, e.length)), (r = a))
          : ((i = e[0].events), (s = e[0].data), (r = e[0].context || a)),
        (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
          if (a.eventsListeners[e]) {
            var t = [];
            a.eventsListeners[e].forEach(function (e) {
              t.push(e);
            }),
              t.forEach(function (e) {
                e.apply(r, s);
              });
          }
        }),
        a
      );
    }),
    (c.prototype.useModulesParams = function (e) {
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a];
          i.params && l.extend(e, i.params);
        });
    }),
    (c.prototype.useModules = function (e) {
      void 0 === e && (e = {});
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (a) {
          var i = t.modules[a],
            s = e[a] || {};
          i.instance &&
            Object.keys(i.instance).forEach(function (e) {
              var a = i.instance[e];
              t[e] = "function" == typeof a ? a.bind(t) : a;
            }),
            i.on &&
              t.on &&
              Object.keys(i.on).forEach(function (e) {
                t.on(e, i.on[e]);
              }),
            i.create && i.create.bind(t)(s);
        });
    }),
    (u.components.set = function (e) {
      var t = this;
      t.use && t.use(e);
    }),
    (c.installModule = function (e) {
      for (var t = [], a = arguments.length - 1; a-- > 0; )
        t[a] = arguments[a + 1];
      var i = this;
      i.prototype.modules || (i.prototype.modules = {});
      var s = e.name || Object.keys(i.prototype.modules).length + "_" + l.now();
      return (
        (i.prototype.modules[s] = e),
        e.proto &&
          Object.keys(e.proto).forEach(function (t) {
            i.prototype[t] = e.proto[t];
          }),
        e.static &&
          Object.keys(e.static).forEach(function (t) {
            i[t] = e.static[t];
          }),
        e.install && e.install.apply(i, t),
        i
      );
    }),
    (c.use = function (e) {
      for (var t = [], a = arguments.length - 1; a-- > 0; )
        t[a] = arguments[a + 1];
      var i = this;
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return i.installModule(e);
          }),
          i)
        : i.installModule.apply(i, [e].concat(t));
    }),
    Object.defineProperties(c, u);
  var h = {
      updateSize: function () {
        var e,
          t,
          a = this,
          i = a.$el;
        (e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth),
          (t =
            void 0 !== a.params.height ? a.params.height : i[0].clientHeight),
          (0 === e && a.isHorizontal()) ||
            (0 === t && a.isVertical()) ||
            ((e =
              e -
              parseInt(i.css("padding-left"), 10) -
              parseInt(i.css("padding-right"), 10)),
            (t =
              t -
              parseInt(i.css("padding-top"), 10) -
              parseInt(i.css("padding-bottom"), 10)),
            l.extend(a, {
              width: e,
              height: t,
              size: a.isHorizontal() ? e : t,
            }));
      },
      updateSlides: function () {
        var e = this,
          t = e.params,
          a = e.$wrapperEl,
          i = e.size,
          s = e.rtl,
          r = e.wrongRTL,
          n = a.children("." + e.params.slideClass),
          o =
            e.virtual && t.virtual.enabled ? e.virtual.slides.length : n.length,
          d = [],
          c = [],
          u = [],
          h = t.slidesOffsetBefore;
        "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
        var v = t.slidesOffsetAfter;
        "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
        var f = o,
          m = e.snapGrid.length,
          g = e.snapGrid.length,
          b = t.spaceBetween,
          w = -h,
          y = 0,
          x = 0;
        if (void 0 !== i) {
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * i),
            (e.virtualSize = -b),
            s
              ? n.css({ marginLeft: "", marginTop: "" })
              : n.css({ marginRight: "", marginBottom: "" });
          var T;
          t.slidesPerColumn > 1 &&
            ((T =
              Math.floor(o / t.slidesPerColumn) === o / e.params.slidesPerColumn
                ? o
                : Math.ceil(o / t.slidesPerColumn) * t.slidesPerColumn),
            "auto" !== t.slidesPerView &&
              "row" === t.slidesPerColumnFill &&
              (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
          for (
            var E,
              S = t.slidesPerColumn,
              C = T / S,
              M = C - (t.slidesPerColumn * C - o),
              z = 0;
            z < o;
            z += 1
          ) {
            E = 0;
            var P = n.eq(z);
            if (t.slidesPerColumn > 1) {
              var k = void 0,
                $ = void 0,
                I = void 0;
              "column" === t.slidesPerColumnFill
                ? ((I = z - ($ = Math.floor(z / S)) * S),
                  ($ > M || ($ === M && I === S - 1)) &&
                    (I += 1) >= S &&
                    ((I = 0), ($ += 1)),
                  (k = $ + (I * T) / S),
                  P.css({
                    "-webkit-box-ordinal-group": k,
                    "-moz-box-ordinal-group": k,
                    "-ms-flex-order": k,
                    "-webkit-order": k,
                    order: k,
                  }))
                : ($ = z - (I = Math.floor(z / C)) * C),
                P.css(
                  "margin-" + (e.isHorizontal() ? "top" : "left"),
                  0 !== I && t.spaceBetween && t.spaceBetween + "px"
                )
                  .attr("data-swiper-column", $)
                  .attr("data-swiper-row", I);
            }
            "none" !== P.css("display") &&
              ("auto" === t.slidesPerView
                ? ((E = e.isHorizontal()
                    ? P.outerWidth(!0)
                    : P.outerHeight(!0)),
                  t.roundLengths && (E = Math.floor(E)))
                : ((E = (i - (t.slidesPerView - 1) * b) / t.slidesPerView),
                  t.roundLengths && (E = Math.floor(E)),
                  n[z] &&
                    (e.isHorizontal()
                      ? (n[z].style.width = E + "px")
                      : (n[z].style.height = E + "px"))),
              n[z] && (n[z].swiperSlideSize = E),
              u.push(E),
              t.centeredSlides
                ? ((w = w + E / 2 + y / 2 + b),
                  0 === y && 0 !== z && (w = w - i / 2 - b),
                  0 === z && (w = w - i / 2 - b),
                  Math.abs(w) < 0.001 && (w = 0),
                  x % t.slidesPerGroup == 0 && d.push(w),
                  c.push(w))
                : (x % t.slidesPerGroup == 0 && d.push(w),
                  c.push(w),
                  (w = w + E + b)),
              (e.virtualSize += E + b),
              (y = E),
              (x += 1));
          }
          e.virtualSize = Math.max(e.virtualSize, i) + v;
          var L;
          if (
            (s &&
              r &&
              ("slide" === t.effect || "coverflow" === t.effect) &&
              a.css({ width: e.virtualSize + t.spaceBetween + "px" }),
            (p.flexbox && !t.setWrapperSize) ||
              (e.isHorizontal()
                ? a.css({ width: e.virtualSize + t.spaceBetween + "px" })
                : a.css({ height: e.virtualSize + t.spaceBetween + "px" })),
            t.slidesPerColumn > 1 &&
              ((e.virtualSize = (E + t.spaceBetween) * T),
              (e.virtualSize =
                Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
              e.isHorizontal()
                ? a.css({ width: e.virtualSize + t.spaceBetween + "px" })
                : a.css({ height: e.virtualSize + t.spaceBetween + "px" }),
              t.centeredSlides))
          ) {
            L = [];
            for (var D = 0; D < d.length; D += 1)
              d[D] < e.virtualSize + d[0] && L.push(d[D]);
            d = L;
          }
          if (!t.centeredSlides) {
            L = [];
            for (var O = 0; O < d.length; O += 1)
              d[O] <= e.virtualSize - i && L.push(d[O]);
            (d = L),
              Math.floor(e.virtualSize - i) - Math.floor(d[d.length - 1]) > 1 &&
                d.push(e.virtualSize - i);
          }
          0 === d.length && (d = [0]),
            0 !== t.spaceBetween &&
              (e.isHorizontal()
                ? s
                  ? n.css({ marginLeft: b + "px" })
                  : n.css({ marginRight: b + "px" })
                : n.css({ marginBottom: b + "px" })),
            l.extend(e, {
              slides: n,
              snapGrid: d,
              slidesGrid: c,
              slidesSizesGrid: u,
            }),
            o !== f && e.emit("slidesLengthChange"),
            d.length !== m && e.emit("snapGridLengthChange"),
            c.length !== g && e.emit("slidesGridLengthChange"),
            (t.watchSlidesProgress || t.watchSlidesVisibility) &&
              e.updateSlidesOffset();
        }
      },
      updateAutoHeight: function () {
        var e,
          t = this,
          a = [],
          i = 0;
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          for (e = 0; e < Math.ceil(t.params.slidesPerView); e += 1) {
            var s = t.activeIndex + e;
            if (s > t.slides.length) break;
            a.push(t.slides.eq(s)[0]);
          }
        else a.push(t.slides.eq(t.activeIndex)[0]);
        for (e = 0; e < a.length; e += 1)
          if (void 0 !== a[e]) {
            var r = a[e].offsetHeight;
            i = r > i ? r : i;
          }
        i && t.$wrapperEl.css("height", i + "px");
      },
      updateSlidesOffset: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1)
          t[a].swiperSlideOffset = e.isHorizontal()
            ? t[a].offsetLeft
            : t[a].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = this.translate || 0);
        var t = this,
          a = t.params,
          i = t.slides,
          s = t.rtl;
        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          var r = -e;
          s && (r = e), i.removeClass(a.slideVisibleClass);
          for (var n = 0; n < i.length; n += 1) {
            var o = i[n],
              l =
                (r +
                  (a.centeredSlides ? t.minTranslate() : 0) -
                  o.swiperSlideOffset) /
                (o.swiperSlideSize + a.spaceBetween);
            if (a.watchSlidesVisibility) {
              var d = -(r - o.swiperSlideOffset),
                p = d + t.slidesSizesGrid[n];
              ((d >= 0 && d < t.size) ||
                (p > 0 && p <= t.size) ||
                (d <= 0 && p >= t.size)) &&
                i.eq(n).addClass(a.slideVisibleClass);
            }
            o.progress = s ? -l : l;
          }
        }
      },
      updateProgress: function (e) {
        void 0 === e && (e = this.translate || 0);
        var t = this,
          a = t.params,
          i = t.maxTranslate() - t.minTranslate(),
          s = t.progress,
          r = t.isBeginning,
          n = t.isEnd,
          o = r,
          d = n;
        0 === i
          ? ((s = 0), (r = !0), (n = !0))
          : ((r = (s = (e - t.minTranslate()) / i) <= 0), (n = s >= 1)),
          l.extend(t, { progress: s, isBeginning: r, isEnd: n }),
          (a.watchSlidesProgress || a.watchSlidesVisibility) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          n && !d && t.emit("reachEnd toEdge"),
          ((o && !r) || (d && !n)) && t.emit("fromEdge"),
          t.emit("progress", s);
      },
      updateSlidesClasses: function () {
        var e = this,
          t = e.slides,
          a = e.params,
          i = e.$wrapperEl,
          s = e.activeIndex,
          r = e.realIndex,
          n = e.virtual && a.virtual.enabled;
        t.removeClass(
          a.slideActiveClass +
            " " +
            a.slideNextClass +
            " " +
            a.slidePrevClass +
            " " +
            a.slideDuplicateActiveClass +
            " " +
            a.slideDuplicateNextClass +
            " " +
            a.slideDuplicatePrevClass
        );
        var o;
        (o = n
          ? e.$wrapperEl.find(
              "." + a.slideClass + '[data-swiper-slide-index="' + s + '"]'
            )
          : t.eq(s)).addClass(a.slideActiveClass),
          a.loop &&
            (o.hasClass(a.slideDuplicateClass)
              ? i
                  .children(
                    "." +
                      a.slideClass +
                      ":not(." +
                      a.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      r +
                      '"]'
                  )
                  .addClass(a.slideDuplicateActiveClass)
              : i
                  .children(
                    "." +
                      a.slideClass +
                      "." +
                      a.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      r +
                      '"]'
                  )
                  .addClass(a.slideDuplicateActiveClass));
        var l = o
          .nextAll("." + a.slideClass)
          .eq(0)
          .addClass(a.slideNextClass);
        a.loop && 0 === l.length && (l = t.eq(0)).addClass(a.slideNextClass);
        var d = o
          .prevAll("." + a.slideClass)
          .eq(0)
          .addClass(a.slidePrevClass);
        a.loop && 0 === d.length && (d = t.eq(-1)).addClass(a.slidePrevClass),
          a.loop &&
            (l.hasClass(a.slideDuplicateClass)
              ? i
                  .children(
                    "." +
                      a.slideClass +
                      ":not(." +
                      a.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      l.attr("data-swiper-slide-index") +
                      '"]'
                  )
                  .addClass(a.slideDuplicateNextClass)
              : i
                  .children(
                    "." +
                      a.slideClass +
                      "." +
                      a.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      l.attr("data-swiper-slide-index") +
                      '"]'
                  )
                  .addClass(a.slideDuplicateNextClass),
            d.hasClass(a.slideDuplicateClass)
              ? i
                  .children(
                    "." +
                      a.slideClass +
                      ":not(." +
                      a.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      d.attr("data-swiper-slide-index") +
                      '"]'
                  )
                  .addClass(a.slideDuplicatePrevClass)
              : i
                  .children(
                    "." +
                      a.slideClass +
                      "." +
                      a.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      d.attr("data-swiper-slide-index") +
                      '"]'
                  )
                  .addClass(a.slideDuplicatePrevClass));
      },
      updateActiveIndex: function (e) {
        var t,
          a = this,
          i = a.rtl ? a.translate : -a.translate,
          s = a.slidesGrid,
          r = a.snapGrid,
          n = a.params,
          o = a.activeIndex,
          d = a.realIndex,
          p = a.snapIndex,
          c = e;
        if (void 0 === c) {
          for (var u = 0; u < s.length; u += 1)
            void 0 !== s[u + 1]
              ? i >= s[u] && i < s[u + 1] - (s[u + 1] - s[u]) / 2
                ? (c = u)
                : i >= s[u] && i < s[u + 1] && (c = u + 1)
              : i >= s[u] && (c = u);
          n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
        }
        if (
          ((t =
            r.indexOf(i) >= 0
              ? r.indexOf(i)
              : Math.floor(c / n.slidesPerGroup)) >= r.length &&
            (t = r.length - 1),
          c !== o)
        ) {
          var h = parseInt(
            a.slides.eq(c).attr("data-swiper-slide-index") || c,
            10
          );
          l.extend(a, {
            snapIndex: t,
            realIndex: h,
            previousIndex: o,
            activeIndex: c,
          }),
            a.emit("activeIndexChange"),
            a.emit("snapIndexChange"),
            d !== h && a.emit("realIndexChange"),
            a.emit("slideChange");
        } else t !== p && ((a.snapIndex = t), a.emit("snapIndexChange"));
      },
      updateClickedSlide: function (t) {
        var a = this,
          i = a.params,
          s = e(t.target).closest("." + i.slideClass)[0],
          r = !1;
        if (s)
          for (var n = 0; n < a.slides.length; n += 1)
            a.slides[n] === s && (r = !0);
        if (!s || !r)
          return (a.clickedSlide = void 0), void (a.clickedIndex = void 0);
        (a.clickedSlide = s),
          a.virtual && a.params.virtual.enabled
            ? (a.clickedIndex = parseInt(
                e(s).attr("data-swiper-slide-index"),
                10
              ))
            : (a.clickedIndex = e(s).index()),
          i.slideToClickedSlide &&
            void 0 !== a.clickedIndex &&
            a.clickedIndex !== a.activeIndex &&
            a.slideToClickedSlide();
      },
    },
    v = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this,
          a = t.params,
          i = t.rtl,
          s = t.translate,
          r = t.$wrapperEl;
        if (a.virtualTranslate) return i ? -s : s;
        var n = l.getTranslate(r[0], e);
        return i && (n = -n), n || 0;
      },
      setTranslate: function (e, t) {
        var a = this,
          i = a.rtl,
          s = a.params,
          r = a.$wrapperEl,
          n = a.progress,
          o = 0,
          l = 0;
        a.isHorizontal() ? (o = i ? -e : e) : (l = e),
          s.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
          s.virtualTranslate ||
            (p.transforms3d
              ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)")
              : r.transform("translate(" + o + "px, " + l + "px)")),
          (a.translate = a.isHorizontal() ? o : l);
        var d = a.maxTranslate() - a.minTranslate();
        (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e),
          a.emit("setTranslate", a.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
    },
    f = {
      setTransition: function (e, t) {
        var a = this;
        a.$wrapperEl.transition(e), a.emit("setTransition", e, t);
      },
      transitionStart: function (e) {
        void 0 === e && (e = !0);
        var t = this,
          a = t.activeIndex,
          i = t.params,
          s = t.previousIndex;
        i.autoHeight && t.updateAutoHeight(),
          t.emit("transitionStart"),
          e &&
            a !== s &&
            (t.emit("slideChangeTransitionStart"),
            a > s
              ? t.emit("slideNextTransitionStart")
              : t.emit("slidePrevTransitionStart"));
      },
      transitionEnd: function (e) {
        void 0 === e && (e = !0);
        var t = this,
          a = t.activeIndex,
          i = t.previousIndex;
        (t.animating = !1),
          t.setTransition(0),
          t.emit("transitionEnd"),
          e &&
            a !== i &&
            (t.emit("slideChangeTransitionEnd"),
            a > i
              ? t.emit("slideNextTransitionEnd")
              : t.emit("slidePrevTransitionEnd"));
      },
    },
    m = (function () {
      return {
        isSafari: (function () {
          var e = s.navigator.userAgent.toLowerCase();
          return (
            e.indexOf("safari") >= 0 &&
            e.indexOf("chrome") < 0 &&
            e.indexOf("android") < 0
          );
        })(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
          s.navigator.userAgent
        ),
        ie: s.navigator.pointerEnabled || s.navigator.msPointerEnabled,
        ieTouch:
          (s.navigator.msPointerEnabled && s.navigator.msMaxTouchPoints > 1) ||
          (s.navigator.pointerEnabled && s.navigator.maxTouchPoints > 1),
        lteIE9: (function () {
          var e = d.createElement("div");
          return (
            (e.innerHTML = "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e"),
            1 === e.getElementsByTagName("i").length
          );
        })(),
      };
    })(),
    g = {
      slideTo: function (e, t, a, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === a && (a = !0);
        var s = this,
          r = e;
        r < 0 && (r = 0);
        var n = s.params,
          o = s.snapGrid,
          l = s.slidesGrid,
          d = s.previousIndex,
          p = s.activeIndex,
          c = s.rtl,
          u = s.$wrapperEl,
          h = Math.floor(r / n.slidesPerGroup);
        h >= o.length && (h = o.length - 1),
          (p || n.initialSlide || 0) === (d || 0) &&
            a &&
            s.emit("beforeSlideChangeStart");
        var v = -o[h];
        if ((s.updateProgress(v), n.normalizeSlideIndex))
          for (var f = 0; f < l.length; f += 1)
            -Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
        return !(
          (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) ||
          (!s.allowSlidePrev &&
            v > s.translate &&
            v > s.maxTranslate() &&
            (p || 0) !== r) ||
          ((c && -v === s.translate) || (!c && v === s.translate)
            ? (s.updateActiveIndex(r),
              n.autoHeight && s.updateAutoHeight(),
              s.updateSlidesClasses(),
              "slide" !== n.effect && s.setTranslate(v),
              1)
            : (0 === t || m.lteIE9
                ? (s.setTransition(0),
                  s.setTranslate(v),
                  s.updateActiveIndex(r),
                  s.updateSlidesClasses(),
                  s.emit("beforeTransitionStart", t, i),
                  s.transitionStart(a),
                  s.transitionEnd(a))
                : (s.setTransition(t),
                  s.setTranslate(v),
                  s.updateActiveIndex(r),
                  s.updateSlidesClasses(),
                  s.emit("beforeTransitionStart", t, i),
                  s.transitionStart(a),
                  s.animating ||
                    ((s.animating = !0),
                    u.transitionEnd(function () {
                      s && !s.destroyed && s.transitionEnd(a);
                    }))),
              0))
        );
      },
      slideNext: function (e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          s = i.params,
          r = i.animating;
        return s.loop
          ? !r &&
              (i.loopFix(),
              (i._clientLeft = i.$wrapperEl[0].clientLeft),
              i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a))
          : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a);
      },
      slidePrev: function (e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this,
          s = i.params,
          r = i.animating;
        return s.loop
          ? !r &&
              (i.loopFix(),
              (i._clientLeft = i.$wrapperEl[0].clientLeft),
              i.slideTo(i.activeIndex - 1, e, t, a))
          : i.slideTo(i.activeIndex - 1, e, t, a);
      },
      slideReset: function (e, t, a) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        var i = this;
        return i.slideTo(i.activeIndex, e, t, a);
      },
      slideToClickedSlide: function () {
        var t,
          a = this,
          i = a.params,
          s = a.$wrapperEl,
          r =
            "auto" === i.slidesPerView
              ? a.slidesPerViewDynamic()
              : i.slidesPerView,
          n = a.clickedIndex;
        if (i.loop) {
          if (a.animating) return;
          (t = parseInt(e(a.clickedSlide).attr("data-swiper-slide-index"), 10)),
            i.centeredSlides
              ? n < a.loopedSlides - r / 2 ||
                n > a.slides.length - a.loopedSlides + r / 2
                ? (a.loopFix(),
                  (n = s
                    .children(
                      "." +
                        i.slideClass +
                        '[data-swiper-slide-index="' +
                        t +
                        '"]:not(.' +
                        i.slideDuplicateClass +
                        ")"
                    )
                    .eq(0)
                    .index()),
                  l.nextTick(function () {
                    a.slideTo(n);
                  }))
                : a.slideTo(n)
              : n > a.slides.length - r
              ? (a.loopFix(),
                (n = s
                  .children(
                    "." +
                      i.slideClass +
                      '[data-swiper-slide-index="' +
                      t +
                      '"]:not(.' +
                      i.slideDuplicateClass +
                      ")"
                  )
                  .eq(0)
                  .index()),
                l.nextTick(function () {
                  a.slideTo(n);
                }))
              : a.slideTo(n);
        } else a.slideTo(n);
      },
    },
    b = {
      loopCreate: function () {
        var t = this,
          a = t.params,
          i = t.$wrapperEl;
        i.children("." + a.slideClass + "." + a.slideDuplicateClass).remove();
        var s = i.children("." + a.slideClass);
        if (a.loopFillGroupWithBlank) {
          var r = a.slidesPerGroup - (s.length % a.slidesPerGroup);
          if (r !== a.slidesPerGroup) {
            for (var n = 0; n < r; n += 1) {
              var o = e(d.createElement("div")).addClass(
                a.slideClass + " " + a.slideBlankClass
              );
              i.append(o);
            }
            s = i.children("." + a.slideClass);
          }
        }
        "auto" !== a.slidesPerView ||
          a.loopedSlides ||
          (a.loopedSlides = s.length),
          (t.loopedSlides = parseInt(a.loopedSlides || a.slidesPerView, 10)),
          (t.loopedSlides += a.loopAdditionalSlides),
          t.loopedSlides > s.length && (t.loopedSlides = s.length);
        var l = [],
          p = [];
        s.each(function (a, i) {
          var r = e(i);
          a < t.loopedSlides && p.push(i),
            a < s.length && a >= s.length - t.loopedSlides && l.push(i),
            r.attr("data-swiper-slide-index", a);
        });
        for (var c = 0; c < p.length; c += 1)
          i.append(e(p[c].cloneNode(!0)).addClass(a.slideDuplicateClass));
        for (var u = l.length - 1; u >= 0; u -= 1)
          i.prepend(e(l[u].cloneNode(!0)).addClass(a.slideDuplicateClass));
      },
      loopFix: function () {
        var e,
          t = this,
          a = t.params,
          i = t.activeIndex,
          s = t.slides,
          r = t.loopedSlides,
          n = t.allowSlidePrev,
          o = t.allowSlideNext;
        (t.allowSlidePrev = !0),
          (t.allowSlideNext = !0),
          i < r
            ? ((e = s.length - 3 * r + i), (e += r), t.slideTo(e, 0, !1, !0))
            : (("auto" === a.slidesPerView && i >= 2 * r) ||
                i > s.length - 2 * a.slidesPerView) &&
              ((e = -s.length + i + r), (e += r), t.slideTo(e, 0, !1, !0)),
          (t.allowSlidePrev = n),
          (t.allowSlideNext = o);
      },
      loopDestroy: function () {
        var e = this,
          t = e.$wrapperEl,
          a = e.params,
          i = e.slides;
        t.children("." + a.slideClass + "." + a.slideDuplicateClass).remove(),
          i.removeAttr("data-swiper-slide-index");
      },
    },
    w = {
      setGrabCursor: function (e) {
        var t = this;
        if (!p.touch && t.params.simulateTouch) {
          var a = t.el;
          (a.style.cursor = "move"),
            (a.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (a.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (a.style.cursor = e ? "grabbing" : "grab");
        }
      },
      unsetGrabCursor: function () {
        var e = this;
        p.touch || (e.el.style.cursor = "");
      },
    },
    y = {
      appendSlide: function (e) {
        var t = this,
          a = t.$wrapperEl,
          i = t.params;
        if ((i.loop && t.loopDestroy(), "object" == typeof e && "length" in e))
          for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
        else a.append(e);
        i.loop && t.loopCreate(), (i.observer && p.observer) || t.update();
      },
      prependSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop && t.loopDestroy();
        var r = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
          r = s + e.length;
        } else i.prepend(e);
        a.loop && t.loopCreate(),
          (a.observer && p.observer) || t.update(),
          t.slideTo(r, 0, !1);
      },
      removeSlide: function (e) {
        var t = this,
          a = t.params,
          i = t.$wrapperEl,
          s = t.activeIndex;
        a.loop &&
          (t.loopDestroy(), (t.slides = i.children("." + a.slideClass)));
        var r,
          n = s;
        if ("object" == typeof e && "length" in e) {
          for (var o = 0; o < e.length; o += 1)
            (r = e[o]),
              t.slides[r] && t.slides.eq(r).remove(),
              r < n && (n -= 1);
          n = Math.max(n, 0);
        } else
          (r = e),
            t.slides[r] && t.slides.eq(r).remove(),
            r < n && (n -= 1),
            (n = Math.max(n, 0));
        a.loop && t.loopCreate(),
          (a.observer && p.observer) || t.update(),
          a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1);
      },
      removeAllSlides: function () {
        for (var e = this, t = [], a = 0; a < e.slides.length; a += 1)
          t.push(a);
        e.removeSlide(t);
      },
    },
    x = (function () {
      var e = s.navigator.userAgent,
        t = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: s.cordova || s.phonegap,
          phonegap: s.cordova || s.phonegap,
        },
        a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        r = e.match(/(iPad).*OS\s([\d_]+)/),
        n = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (
        (a && ((t.os = "windows"), (t.osVersion = a[2]), (t.windows = !0)),
        i &&
          !a &&
          ((t.os = "android"),
          (t.osVersion = i[2]),
          (t.android = !0),
          (t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0)),
        (r || o || n) && ((t.os = "ios"), (t.ios = !0)),
        o && !n && ((t.osVersion = o[2].replace(/_/g, ".")), (t.iphone = !0)),
        r && ((t.osVersion = r[2].replace(/_/g, ".")), (t.ipad = !0)),
        n &&
          ((t.osVersion = n[3] ? n[3].replace(/_/g, ".") : null),
          (t.iphone = !0)),
        t.ios &&
          t.osVersion &&
          e.indexOf("Version/") >= 0 &&
          "10" === t.osVersion.split(".")[0] &&
          (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]),
        (t.desktop = !(t.os || t.android || t.webView)),
        (t.webView = (o || r || n) && e.match(/.*AppleWebKit(?!.*Safari)/i)),
        t.os && "ios" === t.os)
      ) {
        var l = t.osVersion.split("."),
          p = d.querySelector('meta[name="viewport"]');
        t.minimalUi =
          !t.webView &&
          (n || o) &&
          (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) &&
          p &&
          p.getAttribute("content").indexOf("minimal-ui") >= 0;
      }
      return (t.pixelRatio = s.devicePixelRatio || 1), t;
    })(),
    T = function (t) {
      var a = this,
        i = a.touchEventsData,
        s = a.params,
        r = a.touches,
        n = t;
      if (
        (n.originalEvent && (n = n.originalEvent),
        (i.isTouchEvent = "touchstart" === n.type),
        (i.isTouchEvent || !("which" in n) || 3 !== n.which) &&
          (!i.isTouched || !i.isMoved))
      )
        if (s.noSwiping && e(n.target).closest("." + s.noSwipingClass)[0])
          a.allowClick = !0;
        else if (!s.swipeHandler || e(n).closest(s.swipeHandler)[0]) {
          (r.currentX =
            "touchstart" === n.type ? n.targetTouches[0].pageX : n.pageX),
            (r.currentY =
              "touchstart" === n.type ? n.targetTouches[0].pageY : n.pageY);
          var o = r.currentX,
            p = r.currentY;
          if (
            !(
              x.ios &&
              !x.cordova &&
              s.iOSEdgeSwipeDetection &&
              o <= s.iOSEdgeSwipeThreshold &&
              o >= window.screen.width - s.iOSEdgeSwipeThreshold
            )
          ) {
            if (
              (l.extend(i, {
                isTouched: !0,
                isMoved: !1,
                allowTouchCallbacks: !0,
                isScrolling: void 0,
                startMoving: void 0,
              }),
              (r.startX = o),
              (r.startY = p),
              (i.touchStartTime = l.now()),
              (a.allowClick = !0),
              a.updateSize(),
              (a.swipeDirection = void 0),
              s.threshold > 0 && (i.allowThresholdMove = !1),
              "touchstart" !== n.type)
            ) {
              var c = !0;
              e(n.target).is(i.formElements) && (c = !1),
                d.activeElement &&
                  e(d.activeElement).is(i.formElements) &&
                  d.activeElement.blur(),
                c && a.allowTouchMove && n.preventDefault();
            }
            a.emit("touchStart", n);
          }
        }
    },
    E = function (t) {
      var a = this,
        i = a.touchEventsData,
        s = a.params,
        r = a.touches,
        n = a.rtl,
        o = t;
      if (
        (o.originalEvent && (o = o.originalEvent),
        !i.isTouchEvent || "mousemove" !== o.type)
      ) {
        var p = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
          c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
        if (o.preventedByNestedSwiper)
          return (r.startX = p), void (r.startY = c);
        if (!a.allowTouchMove)
          return (
            (a.allowClick = !1),
            void (
              i.isTouched &&
              (l.extend(r, { startX: p, startY: c, currentX: p, currentY: c }),
              (i.touchStartTime = l.now()))
            )
          );
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (a.isVertical()) {
            if (
              (r.currentY < r.startY && a.translate <= a.maxTranslate()) ||
              (r.currentY > r.startY && a.translate >= a.minTranslate())
            )
              return;
          } else if (
            (r.currentX < r.startX && a.translate <= a.maxTranslate()) ||
            (r.currentX > r.startX && a.translate >= a.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          d.activeElement &&
          o.target === d.activeElement &&
          e(o.target).is(i.formElements)
        )
          return (i.isMoved = !0), void (a.allowClick = !1);
        if (
          (i.allowTouchCallbacks && a.emit("touchMove", o),
          !(o.targetTouches && o.targetTouches.length > 1))
        ) {
          (r.currentX =
            "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX),
            (r.currentY =
              "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY);
          var u = r.currentX - r.startX,
            h = r.currentY - r.startY;
          if (void 0 === i.isScrolling) {
            var v;
            (a.isHorizontal() && r.currentY === r.startY) ||
            (a.isVertical() && r.currentX === r.startX)
              ? (i.isScrolling = !1)
              : u * u + h * h >= 25 &&
                ((v = (180 * Math.atan2(Math.abs(h), Math.abs(u))) / Math.PI),
                (i.isScrolling = a.isHorizontal()
                  ? v > s.touchAngle
                  : 90 - v > s.touchAngle));
          }
          if (
            (i.isScrolling && a.emit("touchMoveOpposite", o),
            "undefined" == typeof startMoving &&
              ((r.currentX === r.startX && r.currentY === r.startY) ||
                (i.startMoving = !0)),
            i.isTouched)
          )
            if (i.isScrolling) i.isTouched = !1;
            else if (i.startMoving) {
              (a.allowClick = !1),
                o.preventDefault(),
                s.touchMoveStopPropagation && !s.nested && o.stopPropagation(),
                i.isMoved ||
                  (s.loop && a.loopFix(),
                  (i.startTranslate = a.getTranslate()),
                  a.setTransition(0),
                  a.animating &&
                    a.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                  (i.allowMomentumBounce = !1),
                  !s.grabCursor ||
                    (!0 !== a.allowSlideNext && !0 !== a.allowSlidePrev) ||
                    a.setGrabCursor(!0),
                  a.emit("sliderFirstMove", o)),
                a.emit("sliderMove", o),
                (i.isMoved = !0);
              var f = a.isHorizontal() ? u : h;
              (r.diff = f),
                (f *= s.touchRatio),
                n && (f = -f),
                (a.swipeDirection = f > 0 ? "prev" : "next"),
                (i.currentTranslate = f + i.startTranslate);
              var m = !0,
                g = s.resistanceRatio;
              if (
                (s.touchReleaseOnEdges && (g = 0),
                f > 0 && i.currentTranslate > a.minTranslate()
                  ? ((m = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        a.minTranslate() -
                        1 +
                        Math.pow(-a.minTranslate() + i.startTranslate + f, g)))
                  : f < 0 &&
                    i.currentTranslate < a.maxTranslate() &&
                    ((m = !1),
                    s.resistance &&
                      (i.currentTranslate =
                        a.maxTranslate() +
                        1 -
                        Math.pow(a.maxTranslate() - i.startTranslate - f, g))),
                m && (o.preventedByNestedSwiper = !0),
                !a.allowSlideNext &&
                  "next" === a.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !a.allowSlidePrev &&
                  "prev" === a.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                s.threshold > 0)
              ) {
                if (!(Math.abs(f) > s.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (r.startX = r.currentX),
                    (r.startY = r.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (r.diff = a.isHorizontal()
                      ? r.currentX - r.startX
                      : r.currentY - r.startY)
                  );
              }
              s.followFinger &&
                ((s.freeMode ||
                  s.watchSlidesProgress ||
                  s.watchSlidesVisibility) &&
                  (a.updateActiveIndex(), a.updateSlidesClasses()),
                s.freeMode &&
                  (0 === i.velocities.length &&
                    i.velocities.push({
                      position: r[a.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({
                    position: r[a.isHorizontal() ? "currentX" : "currentY"],
                    time: l.now(),
                  })),
                a.updateProgress(i.currentTranslate),
                a.setTranslate(i.currentTranslate));
            }
        }
      }
    },
    S = function (e) {
      var t = this,
        a = t.touchEventsData,
        i = t.params,
        s = t.touches,
        r = t.rtl,
        n = t.$wrapperEl,
        o = t.slidesGrid,
        d = t.snapGrid,
        p = e;
      if (
        (p.originalEvent && (p = p.originalEvent),
        a.allowTouchCallbacks && t.emit("touchEnd", p),
        (a.allowTouchCallbacks = !1),
        a.isTouched)
      ) {
        i.grabCursor &&
          a.isMoved &&
          a.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        var c = l.now(),
          u = c - a.touchStartTime;
        if (
          (t.allowClick &&
            (t.updateClickedSlide(p),
            t.emit("tap", p),
            u < 300 &&
              c - a.lastClickTime > 300 &&
              (a.clickTimeout && clearTimeout(a.clickTimeout),
              (a.clickTimeout = l.nextTick(function () {
                t && !t.destroyed && t.emit("click", p);
              }, 300))),
            u < 300 &&
              c - a.lastClickTime < 300 &&
              (a.clickTimeout && clearTimeout(a.clickTimeout),
              t.emit("doubleTap", p))),
          (a.lastClickTime = l.now()),
          l.nextTick(function () {
            t.destroyed || (t.allowClick = !0);
          }),
          !a.isTouched ||
            !a.isMoved ||
            !t.swipeDirection ||
            0 === s.diff ||
            a.currentTranslate === a.startTranslate)
        )
          return (a.isTouched = !1), void (a.isMoved = !1);
        (a.isTouched = !1), (a.isMoved = !1);
        var h;
        if (
          ((h = i.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -a.currentTranslate),
          i.freeMode)
        ) {
          if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
          if (h > -t.maxTranslate())
            return void (t.slides.length < d.length
              ? t.slideTo(d.length - 1)
              : t.slideTo(t.slides.length - 1));
          if (i.freeModeMomentum) {
            if (a.velocities.length > 1) {
              var v = a.velocities.pop(),
                f = a.velocities.pop(),
                m = v.position - f.position,
                g = v.time - f.time;
              (t.velocity = m / g),
                (t.velocity /= 2),
                Math.abs(t.velocity) < i.freeModeMinimumVelocity &&
                  (t.velocity = 0),
                (g > 150 || l.now() - v.time > 300) && (t.velocity = 0);
            } else t.velocity = 0;
            (t.velocity *= i.freeModeMomentumVelocityRatio),
              (a.velocities.length = 0);
            var b = 1e3 * i.freeModeMomentumRatio,
              w = t.velocity * b,
              y = t.translate + w;
            r && (y = -y);
            var x,
              T = !1,
              E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
            if (y < t.maxTranslate())
              i.freeModeMomentumBounce
                ? (y + t.maxTranslate() < -E && (y = t.maxTranslate() - E),
                  (x = t.maxTranslate()),
                  (T = !0),
                  (a.allowMomentumBounce = !0))
                : (y = t.maxTranslate());
            else if (y > t.minTranslate())
              i.freeModeMomentumBounce
                ? (y - t.minTranslate() > E && (y = t.minTranslate() + E),
                  (x = t.minTranslate()),
                  (T = !0),
                  (a.allowMomentumBounce = !0))
                : (y = t.minTranslate());
            else if (i.freeModeSticky) {
              for (var S, C = 0; C < d.length; C += 1)
                if (d[C] > -y) {
                  S = C;
                  break;
                }
              y = -(y =
                Math.abs(d[S] - y) < Math.abs(d[S - 1] - y) ||
                "next" === t.swipeDirection
                  ? d[S]
                  : d[S - 1]);
            }
            if (0 !== t.velocity)
              b = r
                ? Math.abs((-y - t.translate) / t.velocity)
                : Math.abs((y - t.translate) / t.velocity);
            else if (i.freeModeSticky) return void t.slideReset();
            i.freeModeMomentumBounce && T
              ? (t.updateProgress(x),
                t.setTransition(b),
                t.setTranslate(y),
                t.transitionStart(),
                (t.animating = !0),
                n.transitionEnd(function () {
                  t &&
                    !t.destroyed &&
                    a.allowMomentumBounce &&
                    (t.emit("momentumBounce"),
                    t.setTransition(i.speed),
                    t.setTranslate(x),
                    n.transitionEnd(function () {
                      t && !t.destroyed && t.transitionEnd();
                    }));
                }))
              : t.velocity
              ? (t.updateProgress(y),
                t.setTransition(b),
                t.setTranslate(y),
                t.transitionStart(),
                t.animating ||
                  ((t.animating = !0),
                  n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : t.updateProgress(y),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          }
          (!i.freeModeMomentum || u >= i.longSwipesMs) &&
            (t.updateProgress(),
            t.updateActiveIndex(),
            t.updateSlidesClasses());
        } else {
          for (
            var M = 0, z = t.slidesSizesGrid[0], P = 0;
            P < o.length;
            P += i.slidesPerGroup
          )
            void 0 !== o[P + i.slidesPerGroup]
              ? h >= o[P] &&
                h < o[P + i.slidesPerGroup] &&
                ((M = P), (z = o[P + i.slidesPerGroup] - o[P]))
              : h >= o[P] && ((M = P), (z = o[o.length - 1] - o[o.length - 2]));
          var k = (h - o[M]) / z;
          if (u > i.longSwipesMs) {
            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection &&
              (k >= i.longSwipesRatio
                ? t.slideTo(M + i.slidesPerGroup)
                : t.slideTo(M)),
              "prev" === t.swipeDirection &&
                (k > 1 - i.longSwipesRatio
                  ? t.slideTo(M + i.slidesPerGroup)
                  : t.slideTo(M));
          } else {
            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup),
              "prev" === t.swipeDirection && t.slideTo(M);
          }
        }
      }
    },
    C = function () {
      var e = this,
        t = e.params,
        a = e.el,
        i = e.allowSlideNext,
        s = e.allowSlidePrev;
      if (!a || 0 !== a.offsetWidth) {
        if (
          (t.breakpoints && e.setBreakpoint(),
          (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          t.freeMode)
        ) {
          var r = Math.min(
            Math.max(e.translate, e.maxTranslate()),
            e.minTranslate()
          );
          e.setTranslate(r),
            e.updateActiveIndex(),
            e.updateSlidesClasses(),
            t.autoHeight && e.updateAutoHeight();
        } else
          e.updateSlidesClasses(),
            ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
            e.isEnd &&
            !e.params.centeredSlides
              ? e.slideTo(e.slides.length - 1, 0, !1, !0)
              : e.slideTo(e.activeIndex, 0, !1, !0);
        (e.allowSlidePrev = s), (e.allowSlideNext = i);
      }
    },
    M = function (e) {
      var t = this;
      t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation()));
    },
    z = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      iOSEdgeSwipeDetection: !1,
      iOSEdgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    },
    P = {
      update: h,
      translate: v,
      transition: f,
      slide: g,
      loop: b,
      grabCursor: w,
      manipulation: y,
      events: {
        attachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl;
          (e.onTouchStart = T.bind(e)),
            (e.onTouchMove = E.bind(e)),
            (e.onTouchEnd = S.bind(e)),
            (e.onClick = M.bind(e));
          var r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (m.ie)
            r.addEventListener(a.start, e.onTouchStart, !1),
              (p.touch ? r : d).addEventListener(a.move, e.onTouchMove, n),
              (p.touch ? r : d).addEventListener(a.end, e.onTouchEnd, !1);
          else {
            if (p.touch) {
              var o = !(
                "touchstart" !== a.start ||
                !p.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              r.addEventListener(a.start, e.onTouchStart, o),
                r.addEventListener(
                  a.move,
                  e.onTouchMove,
                  p.passiveListener ? { passive: !1, capture: n } : n
                ),
                r.addEventListener(a.end, e.onTouchEnd, o);
            }
            ((t.simulateTouch && !x.ios && !x.android) ||
              (t.simulateTouch && !p.touch && x.ios)) &&
              (r.addEventListener("mousedown", e.onTouchStart, !1),
              d.addEventListener("mousemove", e.onTouchMove, n),
              d.addEventListener("mouseup", e.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            r.addEventListener("click", e.onClick, !0),
            e.on("resize observerUpdate", C);
        },
        detachEvents: function () {
          var e = this,
            t = e.params,
            a = e.touchEvents,
            i = e.el,
            s = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? i : s,
            n = !!t.nested;
          if (m.ie)
            r.removeEventListener(a.start, e.onTouchStart, !1),
              (p.touch ? r : d).removeEventListener(a.move, e.onTouchMove, n),
              (p.touch ? r : d).removeEventListener(a.end, e.onTouchEnd, !1);
          else {
            if (p.touch) {
              var o = !(
                "onTouchStart" !== a.start ||
                !p.passiveListener ||
                !t.passiveListeners
              ) && { passive: !0, capture: !1 };
              r.removeEventListener(a.start, e.onTouchStart, o),
                r.removeEventListener(a.move, e.onTouchMove, n),
                r.removeEventListener(a.end, e.onTouchEnd, o);
            }
            ((t.simulateTouch && !x.ios && !x.android) ||
              (t.simulateTouch && !p.touch && x.ios)) &&
              (r.removeEventListener("mousedown", e.onTouchStart, !1),
              d.removeEventListener("mousemove", e.onTouchMove, n),
              d.removeEventListener("mouseup", e.onTouchEnd, !1));
          }
          (t.preventClicks || t.preventClicksPropagation) &&
            r.removeEventListener("click", e.onClick, !0),
            e.off("resize observerUpdate", C);
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          var e = this,
            t = e.activeIndex,
            a = e.loopedSlides;
          void 0 === a && (a = 0);
          var i = e.params,
            s = i.breakpoints;
          if (s && (!s || 0 !== Object.keys(s).length)) {
            var r = e.getBreakpoint(s);
            if (r && e.currentBreakpoint !== r) {
              var n = r in s ? s[r] : e.originalParams,
                o = i.loop && n.slidesPerView !== i.slidesPerView;
              if (
                (l.extend(e.params, n),
                l.extend(e, {
                  allowTouchMove: e.params.allowTouchMove,
                  allowSlideNext: e.params.allowSlideNext,
                  allowSlidePrev: e.params.allowSlidePrev,
                }),
                (e.currentBreakpoint = r),
                o)
              ) {
                var d = t - a;
                e.loopDestroy(),
                  e.loopCreate(),
                  e.updateSlides(),
                  e.slideTo(d + a, 0, !1);
              }
              e.emit("breakpoint", n);
            }
          }
        },
        getBreakpoint: function (e) {
          if (e) {
            var t = !1,
              a = [];
            Object.keys(e).forEach(function (e) {
              a.push(e);
            }),
              a.sort(function (e, t) {
                return parseInt(e, 10) > parseInt(t, 10);
              });
            for (var i = 0; i < a.length; i += 1) {
              var r = a[i];
              r >= s.innerWidth && !t && (t = r);
            }
            return t || "max";
          }
        },
      },
      classes: {
        addClasses: function () {
          var e = this,
            t = e.classNames,
            a = e.params,
            i = e.rtl,
            r = e.$el,
            n = [];
          n.push(a.direction),
            a.freeMode && n.push("free-mode"),
            p.flexbox || n.push("no-flexbox"),
            a.autoHeight && n.push("autoheight"),
            i && n.push("rtl"),
            a.slidesPerColumn > 1 && n.push("multirow"),
            x.android && n.push("android"),
            x.ios && n.push("ios"),
            (s.navigator.pointerEnabled || s.navigator.msPointerEnabled) &&
              n.push("wp8-" + a.direction),
            n.forEach(function (e) {
              t.push(a.containerModifierClass + e);
            }),
            r.addClass(t.join(" "));
        },
        removeClasses: function () {
          var e = this,
            t = e.$el,
            a = e.classNames;
          t.removeClass(a.join(" "));
        },
      },
      images: {
        loadImage: function (e, t, a, i, r, n) {
          function o() {
            n && n();
          }
          var l;
          e.complete && r
            ? o()
            : t
            ? (((l = new s.Image()).onload = o),
              (l.onerror = o),
              i && (l.sizes = i),
              a && (l.srcset = a),
              t && (l.src = t))
            : o();
        },
        preloadImages: function () {
          var e = this;
          e.imagesToLoad = e.$el.find("img");
          for (var t = 0; t < e.imagesToLoad.length; t += 1) {
            var a = e.imagesToLoad[t];
            e.loadImage(
              a,
              a.currentSrc || a.getAttribute("src"),
              a.srcset || a.getAttribute("srcset"),
              a.sizes || a.getAttribute("sizes"),
              !0,
              function () {
                void 0 !== e &&
                  null !== e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
            );
          }
        },
      },
    },
    k = {},
    $ = (function (t) {
      function a() {
        for (var i = [], r = arguments.length; r--; ) i[r] = arguments[r];
        var n, o;
        if (1 === i.length && i[0].constructor && i[0].constructor === Object)
          o = i[0];
        else {
          var d;
          (n = (d = i)[0]), (o = d[1]);
        }
        o || (o = {}),
          (o = l.extend({}, o)),
          n && !o.el && (o.el = n),
          t.call(this, o),
          Object.keys(P).forEach(function (e) {
            Object.keys(P[e]).forEach(function (t) {
              a.prototype[t] || (a.prototype[t] = P[e][t]);
            });
          });
        var c = this;
        Object.keys(c.modules).forEach(function (e) {
          var t = c.modules[e];
          if (t.params) {
            var a = Object.keys(t.params)[0],
              i = t.params[a];
            if ("object" != typeof i) return;
            if (!(a in o && "enabled" in i)) return;
            !0 === o[a] && (o[a] = { enabled: !0 }),
              "object" != typeof o[a] ||
                "enabled" in o[a] ||
                (o[a].enabled = !0),
              o[a] || (o[a] = { enabled: !1 });
          }
        });
        var u = l.extend({}, z);
        c.useModulesParams(u),
          (c.params = l.extend({}, u, k, o)),
          (c.originalParams = l.extend({}, c.params)),
          (c.passedParams = l.extend({}, o));
        var h = e(c.params.el);
        if ((n = h[0])) {
          if (h.length > 1) {
            var v = [];
            return (
              h.each(function (e, t) {
                var i = l.extend({}, o, { el: t });
                v.push(new a(i));
              }),
              v
            );
          }
          (n.swiper = c), h.data("swiper", c);
          var f = h.children("." + c.params.wrapperClass);
          return (
            l.extend(c, {
              $el: h,
              el: n,
              $wrapperEl: f,
              wrapperEl: f[0],
              classNames: [],
              slides: e(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === c.params.direction;
              },
              isVertical: function () {
                return "vertical" === c.params.direction;
              },
              rtl:
                "horizontal" === c.params.direction &&
                ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")),
              wrongRTL: "-webkit-box" === f.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: c.params.allowSlideNext,
              allowSlidePrev: c.params.allowSlidePrev,
              touchEvents: (function () {
                var e = ["touchstart", "touchmove", "touchend"],
                  t = ["mousedown", "mousemove", "mouseup"];
                return (
                  s.navigator.pointerEnabled
                    ? (t = ["pointerdown", "pointermove", "pointerup"])
                    : s.navigator.msPointerEnabled &&
                      (t = ["MSPointerDown", "MsPointerMove", "MsPointerUp"]),
                  {
                    start: p.touch || !c.params.simulateTouch ? e[0] : t[0],
                    move: p.touch || !c.params.simulateTouch ? e[1] : t[1],
                    end: p.touch || !c.params.simulateTouch ? e[2] : t[2],
                  }
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video",
                lastClickTime: l.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: c.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            c.useModules(),
            c.params.init && c.init(),
            c
          );
        }
      }
      t && (a.__proto__ = t),
        (a.prototype = Object.create(t && t.prototype)),
        (a.prototype.constructor = a);
      var i = { extendedDefaults: {}, defaults: {}, Class: {}, $: {} };
      return (
        (a.prototype.slidesPerViewDynamic = function () {
          var e = this,
            t = e.params,
            a = e.slides,
            i = e.slidesGrid,
            s = e.size,
            r = e.activeIndex,
            n = 1;
          if (t.centeredSlides) {
            for (
              var o, l = a[r].swiperSlideSize, d = r + 1;
              d < a.length;
              d += 1
            )
              a[d] &&
                !o &&
                ((n += 1), (l += a[d].swiperSlideSize) > s && (o = !0));
            for (var p = r - 1; p >= 0; p -= 1)
              a[p] &&
                !o &&
                ((n += 1), (l += a[p].swiperSlideSize) > s && (o = !0));
          } else
            for (var c = r + 1; c < a.length; c += 1)
              i[c] - i[r] < s && (n += 1);
          return n;
        }),
        (a.prototype.update = function () {
          function e() {
            (a = Math.min(
              Math.max(t.translate, t.maxTranslate()),
              t.minTranslate()
            )),
              t.setTranslate(a),
              t.updateActiveIndex(),
              t.updateSlidesClasses();
          }
          var t = this;
          if (t && !t.destroyed) {
            t.updateSize(),
              t.updateSlides(),
              t.updateProgress(),
              t.updateSlidesClasses();
            var a;
            t.params.freeMode
              ? (e(), t.params.autoHeight && t.updateAutoHeight())
              : (("auto" === t.params.slidesPerView ||
                  t.params.slidesPerView > 1) &&
                t.isEnd &&
                !t.params.centeredSlides
                  ? t.slideTo(t.slides.length - 1, 0, !1, !0)
                  : t.slideTo(t.activeIndex, 0, !1, !0)) || e(),
              t.emit("update");
          }
        }),
        (a.prototype.init = function () {
          var e = this;
          e.initialized ||
            (e.emit("beforeInit"),
            e.params.breakpoints && e.setBreakpoint(),
            e.addClasses(),
            e.params.loop && e.loopCreate(),
            e.updateSize(),
            e.updateSlides(),
            e.params.grabCursor && e.setGrabCursor(),
            e.params.preloadImages && e.preloadImages(),
            e.params.loop
              ? e.slideTo(
                  e.params.initialSlide + e.loopedSlides,
                  0,
                  e.params.runCallbacksOnInit
                )
              : e.slideTo(
                  e.params.initialSlide,
                  0,
                  e.params.runCallbacksOnInit
                ),
            e.attachEvents(),
            (e.initialized = !0),
            e.emit("init"));
        }),
        (a.prototype.destroy = function (e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          var a = this,
            i = a.params,
            s = a.$el,
            r = a.$wrapperEl,
            n = a.slides;
          a.emit("beforeDestroy"),
            (a.initialized = !1),
            a.detachEvents(),
            i.loop && a.loopDestroy(),
            t &&
              (a.removeClasses(),
              s.removeAttr("style"),
              r.removeAttr("style"),
              n &&
                n.length &&
                n
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")
                  .removeAttr("data-swiper-column")
                  .removeAttr("data-swiper-row")),
            a.emit("destroy"),
            Object.keys(a.eventsListeners).forEach(function (e) {
              a.off(e);
            }),
            !1 !== e &&
              ((a.$el[0].swiper = null),
              a.$el.data("swiper", null),
              l.deleteProps(a)),
            (a.destroyed = !0);
        }),
        (a.extendDefaults = function (e) {
          l.extend(k, e);
        }),
        (i.extendedDefaults.get = function () {
          return k;
        }),
        (i.defaults.get = function () {
          return z;
        }),
        (i.Class.get = function () {
          return t;
        }),
        (i.$.get = function () {
          return e;
        }),
        Object.defineProperties(a, i),
        a
      );
    })(c),
    I = { name: "device", proto: { device: x }, static: { device: x } },
    L = { name: "support", proto: { support: p }, static: { support: p } },
    D = { name: "browser", proto: { browser: m }, static: { browser: m } },
    O = {
      name: "resize",
      create: function () {
        var e = this;
        l.extend(e, {
          resize: {
            resizeHandler: function () {
              e &&
                !e.destroyed &&
                e.initialized &&
                (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          s.addEventListener("resize", e.resize.resizeHandler),
            s.addEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
        },
        destroy: function () {
          var e = this;
          s.removeEventListener("resize", e.resize.resizeHandler),
            s.removeEventListener(
              "orientationchange",
              e.resize.orientationChangeHandler
            );
        },
      },
    },
    A = {
      func: s.MutationObserver || s.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {});
        var a = this,
          i = new (0, A.func)(function (e) {
            e.forEach(function (e) {
              a.emit("observerUpdate", e);
            });
          });
        i.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          a.observer.observers.push(i);
      },
      init: function () {
        var e = this;
        if (p.observer && e.params.observer) {
          if (e.params.observeParents)
            for (var t = e.$el.parents(), a = 0; a < t.length; a += 1)
              e.observer.attach(t[a]);
          e.observer.attach(e.$el[0], { childList: !1 }),
            e.observer.attach(e.$wrapperEl[0], { attributes: !1 });
        }
      },
      destroy: function () {
        var e = this;
        e.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (e.observer.observers = []);
      },
    },
    H = {
      name: "observer",
      params: { observer: !1, observeParents: !1 },
      create: function () {
        var e = this;
        l.extend(e, {
          observer: {
            init: A.init.bind(e),
            attach: A.attach.bind(e),
            destroy: A.destroy.bind(e),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    X = {
      update: function (e) {
        function t() {
          a.updateSlides(),
            a.updateProgress(),
            a.updateSlidesClasses(),
            a.lazy && a.params.lazy.enabled && a.lazy.load();
        }
        var a = this,
          i = a.params,
          s = i.slidesPerView,
          r = i.slidesPerGroup,
          n = i.centeredSlides,
          o = a.virtual,
          d = o.from,
          p = o.to,
          c = o.slides,
          u = o.slidesGrid,
          h = o.renderSlide,
          v = o.offset;
        a.updateActiveIndex();
        var f,
          m = a.activeIndex || 0;
        f =
          a.rtl && a.isHorizontal()
            ? "right"
            : a.isHorizontal()
            ? "left"
            : "top";
        var g, b;
        n
          ? ((g = Math.floor(s / 2) + r), (b = Math.floor(s / 2) + r))
          : ((g = s + (r - 1)), (b = r));
        var w = Math.max((m || 0) - b, 0),
          y = Math.min((m || 0) + g, c.length - 1),
          x = (a.slidesGrid[w] || 0) - (a.slidesGrid[0] || 0);
        if (
          (l.extend(a.virtual, {
            from: w,
            to: y,
            offset: x,
            slidesGrid: a.slidesGrid,
          }),
          d === w && p === y && !e)
        )
          return (
            a.slidesGrid !== u && x !== v && a.slides.css(f, x + "px"),
            void a.updateProgress()
          );
        if (a.params.virtual.renderExternal)
          return (
            a.params.virtual.renderExternal.call(a, {
              offset: x,
              from: w,
              to: y,
              slides: (function () {
                for (var e = [], t = w; t <= y; t += 1) e.push(c[t]);
                return e;
              })(),
            }),
            void t()
          );
        var T = [],
          E = [];
        if (e) a.$wrapperEl.find("." + a.params.slideClass).remove();
        else
          for (var S = d; S <= p; S += 1)
            (S < w || S > y) &&
              a.$wrapperEl
                .find(
                  "." +
                    a.params.slideClass +
                    '[data-swiper-slide-index="' +
                    S +
                    '"]'
                )
                .remove();
        for (var C = 0; C < c.length; C += 1)
          C >= w &&
            C <= y &&
            (void 0 === p || e
              ? E.push(C)
              : (C > p && E.push(C), C < d && T.push(C)));
        E.forEach(function (e) {
          a.$wrapperEl.append(h(c[e], e));
        }),
          T.sort(function (e, t) {
            return e < t;
          }).forEach(function (e) {
            a.$wrapperEl.prepend(h(c[e], e));
          }),
          a.$wrapperEl.children(".swiper-slide").css(f, x + "px"),
          t();
      },
      renderSlide: function (t, a) {
        var i = this,
          s = i.params.virtual;
        if (s.cache && i.virtual.cache[a]) return i.virtual.cache[a];
        var r = e(
          s.renderSlide
            ? s.renderSlide.call(i, t, a)
            : '<div class="' +
                i.params.slideClass +
                '" data-swiper-slide-index="' +
                a +
                '">' +
                t +
                "</div>"
        );
        return (
          r.attr("data-swiper-slide-index") ||
            r.attr("data-swiper-slide-index", a),
          s.cache && (i.virtual.cache[a] = r),
          r
        );
      },
      appendSlide: function (e) {
        var t = this;
        t.virtual.slides.push(e), t.virtual.update(!0);
      },
      prependSlide: function (e) {
        var t = this;
        if ((t.virtual.slides.unshift(e), t.params.virtual.cache)) {
          var a = t.virtual.cache,
            i = {};
          Object.keys(a).forEach(function (e) {
            i[e + 1] = a[e];
          }),
            (t.virtual.cache = i);
        }
        t.virtual.update(!0), t.slideNext(0);
      },
    },
    N = {
      name: "virtual",
      params: {
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
        },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          virtual: {
            update: X.update.bind(e),
            appendSlide: X.appendSlide.bind(e),
            prependSlide: X.prependSlide.bind(e),
            renderSlide: X.renderSlide.bind(e),
            slides: e.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if (e.params.virtual.enabled) {
            e.classNames.push(e.params.containerModifierClass + "virtual");
            var t = { watchSlidesProgress: !0 };
            l.extend(e.params, t),
              l.extend(e.originalParams, t),
              e.virtual.update();
          }
        },
        setTranslate: function () {
          var e = this;
          e.params.virtual.enabled && e.virtual.update();
        },
      },
    },
    Y = {
      handle: function (e) {
        var t = this,
          a = e;
        a.originalEvent && (a = a.originalEvent);
        var i = a.keyCode || a.charCode;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && 39 === i) || (t.isVertical() && 40 === i))
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && 37 === i) || (t.isVertical() && 38 === i))
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (d.activeElement &&
              d.activeElement.nodeName &&
              ("input" === d.activeElement.nodeName.toLowerCase() ||
                "textarea" === d.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (37 === i || 39 === i || 38 === i || 40 === i) {
            var r = !1;
            if (
              t.$el.parents("." + t.params.slideClass).length > 0 &&
              0 === t.$el.parents("." + t.params.slideActiveClass).length
            )
              return;
            var n = { left: s.pageXOffset, top: s.pageYOffset },
              o = s.innerWidth,
              l = s.innerHeight,
              p = t.$el.offset();
            t.rtl && (p.left -= t.$el[0].scrollLeft);
            for (
              var c = [
                  [p.left, p.top],
                  [p.left + t.width, p.top],
                  [p.left, p.top + t.height],
                  [p.left + t.width, p.top + t.height],
                ],
                u = 0;
              u < c.length;
              u += 1
            ) {
              var h = c[u];
              h[0] >= n.left &&
                h[0] <= n.left + o &&
                h[1] >= n.top &&
                h[1] <= n.top + l &&
                (r = !0);
            }
            if (!r) return;
          }
          t.isHorizontal()
            ? ((37 !== i && 39 !== i) ||
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              ((39 === i && !t.rtl) || (37 === i && t.rtl)) && t.slideNext(),
              ((37 === i && !t.rtl) || (39 === i && t.rtl)) && t.slidePrev())
            : ((38 !== i && 40 !== i) ||
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              40 === i && t.slideNext(),
              38 === i && t.slidePrev()),
            t.emit("keyPress", i);
        }
      },
      enable: function () {
        var t = this;
        t.keyboard.enabled ||
          (e(d).on("keydown", t.keyboard.handle), (t.keyboard.enabled = !0));
      },
      disable: function () {
        var t = this;
        t.keyboard.enabled &&
          (e(d).off("keydown", t.keyboard.handle), (t.keyboard.enabled = !1));
      },
    },
    G = {
      name: "keyboard",
      params: { keyboard: { enabled: !1 } },
      create: function () {
        var e = this;
        l.extend(e, {
          keyboard: {
            enabled: !1,
            enable: Y.enable.bind(e),
            disable: Y.disable.bind(e),
            handle: Y.handle.bind(e),
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.params.keyboard.enabled && e.keyboard.enable();
        },
        destroy: function () {
          var e = this;
          e.keyboard.enabled && e.keyboard.disable();
        },
      },
    },
    B = {
      lastScrollTime: l.now(),
      event:
        s.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : a()
          ? "wheel"
          : "mousewheel",
      normalize: function (e) {
        var t = 0,
          a = 0,
          i = 0,
          s = 0;
        return (
          "detail" in e && (a = e.detail),
          "wheelDelta" in e && (a = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = a), (a = 0)),
          (i = 10 * t),
          (s = 10 * a),
          "deltaY" in e && (s = e.deltaY),
          "deltaX" in e && (i = e.deltaX),
          (i || s) &&
            e.deltaMode &&
            (1 === e.deltaMode
              ? ((i *= 40), (s *= 40))
              : ((i *= 800), (s *= 800))),
          i && !t && (t = i < 1 ? -1 : 1),
          s && !a && (a = s < 1 ? -1 : 1),
          { spinX: t, spinY: a, pixelX: i, pixelY: s }
        );
      },
      handle: function (e) {
        var t = e,
          a = this,
          i = a.params.mousewheel;
        t.originalEvent && (t = t.originalEvent);
        var r = 0,
          n = a.rtl ? -1 : 1,
          o = B.normalize(t);
        if (i.forceToAxis)
          if (a.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            r = o.pixelX * n;
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            r = o.pixelY;
          }
        else
          r =
            Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
        if (0 === r) return !0;
        if ((i.invert && (r = -r), a.params.freeMode)) {
          var d = a.getTranslate() + r * i.sensitivity,
            p = a.isBeginning,
            c = a.isEnd;
          if (
            (d >= a.minTranslate() && (d = a.minTranslate()),
            d <= a.maxTranslate() && (d = a.maxTranslate()),
            a.setTransition(0),
            a.setTranslate(d),
            a.updateProgress(),
            a.updateActiveIndex(),
            a.updateSlidesClasses(),
            ((!p && a.isBeginning) || (!c && a.isEnd)) &&
              a.updateSlidesClasses(),
            a.params.freeModeSticky &&
              (clearTimeout(a.mousewheel.timeout),
              (a.mousewheel.timeout = l.nextTick(function () {
                a.slideReset();
              }, 300))),
            a.emit("scroll", t),
            a.params.autoplay &&
              a.params.autoplayDisableOnInteraction &&
              a.stopAutoplay(),
            0 === d || d === a.maxTranslate())
          )
            return !0;
        } else {
          if (l.now() - a.mousewheel.lastScrollTime > 60)
            if (r < 0)
              if ((a.isEnd && !a.params.loop) || a.animating) {
                if (i.releaseOnEdges) return !0;
              } else a.slideNext(), a.emit("scroll", t);
            else if ((a.isBeginning && !a.params.loop) || a.animating) {
              if (i.releaseOnEdges) return !0;
            } else a.slidePrev(), a.emit("scroll", t);
          a.mousewheel.lastScrollTime = new s.Date().getTime();
        }
        return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
      },
      enable: function () {
        var t = this;
        if (!B.event) return !1;
        if (t.mousewheel.enabled) return !1;
        var a = t.$el;
        return (
          "container" !== t.params.mousewheel.eventsTarged &&
            (a = e(t.params.mousewheel.eventsTarged)),
          a.on(B.event, t.mousewheel.handle),
          (t.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        var t = this;
        if (!B.event) return !1;
        if (!t.mousewheel.enabled) return !1;
        var a = t.$el;
        return (
          "container" !== t.params.mousewheel.eventsTarged &&
            (a = e(t.params.mousewheel.eventsTarged)),
          a.off(B.event, t.mousewheel.handle),
          (t.mousewheel.enabled = !1),
          !0
        );
      },
    },
    V = {
      name: "mousewheel",
      params: {
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarged: "container",
        },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          mousewheel: {
            enabled: !1,
            enable: B.enable.bind(e),
            disable: B.disable.bind(e),
            handle: B.handle.bind(e),
            lastScrollTime: l.now(),
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.params.mousewheel.enabled && e.mousewheel.enable();
        },
        destroy: function () {
          var e = this;
          e.mousewheel.enabled && e.mousewheel.disable();
        },
      },
    },
    R = {
      update: function () {
        var e = this,
          t = e.params.navigation;
        if (!e.params.loop) {
          var a = e.navigation,
            i = a.$nextEl,
            s = a.$prevEl;
          s &&
            s.length > 0 &&
            (e.isBeginning
              ? s.addClass(t.disabledClass)
              : s.removeClass(t.disabledClass)),
            i &&
              i.length > 0 &&
              (e.isEnd
                ? i.addClass(t.disabledClass)
                : i.removeClass(t.disabledClass));
        }
      },
      init: function () {
        var t = this,
          a = t.params.navigation;
        if (a.nextEl || a.prevEl) {
          var i, s;
          a.nextEl &&
            ((i = e(a.nextEl)),
            t.params.uniqueNavElements &&
              "string" == typeof a.nextEl &&
              i.length > 1 &&
              1 === t.$el.find(a.nextEl).length &&
              (i = t.$el.find(a.nextEl))),
            a.prevEl &&
              ((s = e(a.prevEl)),
              t.params.uniqueNavElements &&
                "string" == typeof a.prevEl &&
                s.length > 1 &&
                1 === t.$el.find(a.prevEl).length &&
                (s = t.$el.find(a.prevEl))),
            i &&
              i.length > 0 &&
              i.on("click", function (e) {
                e.preventDefault(),
                  (t.isEnd && !t.params.loop) || t.slideNext();
              }),
            s &&
              s.length > 0 &&
              s.on("click", function (e) {
                e.preventDefault(),
                  (t.isBeginning && !t.params.loop) || t.slidePrev();
              }),
            l.extend(t.navigation, {
              $nextEl: i,
              nextEl: i && i[0],
              $prevEl: s,
              prevEl: s && s[0],
            });
        }
      },
      destroy: function () {
        var e = this,
          t = e.navigation,
          a = t.$nextEl,
          i = t.$prevEl;
        a &&
          a.length &&
          (a.off("click"), a.removeClass(e.params.navigation.disabledClass)),
          i &&
            i.length &&
            (i.off("click"), i.removeClass(e.params.navigation.disabledClass));
      },
    },
    W = {
      name: "navigation",
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
        },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          navigation: {
            init: R.init.bind(e),
            update: R.update.bind(e),
            destroy: R.destroy.bind(e),
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.navigation.init(), e.navigation.update();
        },
        toEdge: function () {
          this.navigation.update();
        },
        fromEdge: function () {
          this.navigation.update();
        },
        destroy: function () {
          this.navigation.destroy();
        },
        click: function (t) {
          var a = this,
            i = a.navigation,
            s = i.$nextEl,
            r = i.$prevEl;
          !a.params.navigation.hideOnClick ||
            e(t.target).is(r) ||
            e(t.target).is(s) ||
            (s && s.toggleClass(a.params.navigation.hiddenClass),
            r && r.toggleClass(a.params.navigation.hiddenClass));
        },
      },
    },
    F = {
      update: function () {
        var t = this,
          a = t.rtl,
          i = t.params.pagination;
        if (
          i.el &&
          t.pagination.el &&
          t.pagination.$el &&
          0 !== t.pagination.$el.length
        ) {
          var s,
            r =
              t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.slides.length,
            n = t.pagination.$el,
            o = t.params.loop
              ? Math.ceil((r - 2 * t.loopedSlides) / t.params.slidesPerGroup)
              : t.snapGrid.length;
          if (
            (t.params.loop
              ? ((s = Math.ceil(
                  (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
                )) >
                  r - 1 - 2 * t.loopedSlides && (s -= r - 2 * t.loopedSlides),
                s > o - 1 && (s -= o),
                s < 0 && "bullets" !== t.params.paginationType && (s = o + s))
              : (s = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
            "bullets" === i.type &&
              t.pagination.bullets &&
              t.pagination.bullets.length > 0)
          ) {
            var l = t.pagination.bullets;
            if (
              (i.dynamicBullets &&
                ((t.pagination.bulletSize = l
                  .eq(0)
                  [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                n.css(
                  t.isHorizontal() ? "width" : "height",
                  5 * t.pagination.bulletSize + "px"
                )),
              l.removeClass(
                i.bulletActiveClass +
                  " " +
                  i.bulletActiveClass +
                  "-next " +
                  i.bulletActiveClass +
                  "-next-next " +
                  i.bulletActiveClass +
                  "-prev " +
                  i.bulletActiveClass +
                  "-prev-prev"
              ),
              n.length > 1)
            )
              l.each(function (t, a) {
                var r = e(a);
                r.index() === s &&
                  (r.addClass(i.bulletActiveClass),
                  i.dynamicBullets &&
                    (r
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev")
                      .prev()
                      .addClass(i.bulletActiveClass + "-prev-prev"),
                    r
                      .next()
                      .addClass(i.bulletActiveClass + "-next")
                      .next()
                      .addClass(i.bulletActiveClass + "-next-next")));
              });
            else {
              var d = l.eq(s);
              d.addClass(i.bulletActiveClass),
                i.dynamicBullets &&
                  (d
                    .prev()
                    .addClass(i.bulletActiveClass + "-prev")
                    .prev()
                    .addClass(i.bulletActiveClass + "-prev-prev"),
                  d
                    .next()
                    .addClass(i.bulletActiveClass + "-next")
                    .next()
                    .addClass(i.bulletActiveClass + "-next-next"));
            }
            if (i.dynamicBullets) {
              var p = Math.min(l.length, 5),
                c =
                  (t.pagination.bulletSize * p - t.pagination.bulletSize) / 2 -
                  s * t.pagination.bulletSize,
                u = a ? "botto," : "top";
              l.css(t.isHorizontal() ? u : "top", c + "px");
            }
          }
          if (
            ("fraction" === i.type &&
              (n.find("." + i.currentClass).text(s + 1),
              n.find("." + i.totalClass).text(o)),
            "progressbar" === i.type)
          ) {
            var h = (s + 1) / o,
              v = h,
              f = 1;
            t.isHorizontal() || ((f = h), (v = 1)),
              n
                .find("." + i.progressbarFillClass)
                .transform(
                  "translate3d(0,0,0) scaleX(" + v + ") scaleY(" + f + ")"
                )
                .transition(t.params.speed);
          }
          "custom" === i.type && i.renderCustom
            ? (n.html(i.renderCustom(t, s + 1, o)),
              t.emit("paginationRender", t, n[0]))
            : t.emit("paginationUpdate", t, n[0]);
        }
      },
      render: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            i = e.pagination.$el,
            s = "";
          if ("bullets" === t.type) {
            for (
              var r = e.params.loop
                  ? Math.ceil(
                      (a - 2 * e.loopedSlides) / e.params.slidesPerGroup
                    )
                  : e.snapGrid.length,
                n = 0;
              n < r;
              n += 1
            )
              t.renderBullet
                ? (s += t.renderBullet.call(e, n, t.bulletClass))
                : (s +=
                    "<" +
                    t.bulletElement +
                    ' class="' +
                    t.bulletClass +
                    '"></' +
                    t.bulletElement +
                    ">");
            i.html(s), (e.pagination.bullets = i.find("." + t.bulletClass));
          }
          "fraction" === t.type &&
            ((s = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : '<span class="' +
                t.currentClass +
                '"></span> / <span class="' +
                t.totalClass +
                '"></span>'),
            i.html(s)),
            "progressbar" === t.type &&
              ((s = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : '<span class="' + t.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== t.type &&
              e.emit("paginationRender", e.pagination.$el[0]);
        }
      },
      init: function () {
        var t = this,
          a = t.params.pagination;
        if (a.el) {
          var i = e(a.el);
          0 !== i.length &&
            (t.params.uniqueNavElements &&
              "string" == typeof a.el &&
              i.length > 1 &&
              1 === t.$el.find(a.el).length &&
              (i = t.$el.find(a.el)),
            "bullets" === a.type && a.clickable && i.addClass(a.clickableClass),
            i.addClass(a.modifierClass + a.type),
            "bullets" === a.type &&
              a.dynamicBullets &&
              i.addClass("" + a.modifierClass + a.type + "-dynamic"),
            a.clickable &&
              i.on("click", "." + a.bulletClass, function (a) {
                a.preventDefault();
                var i = e(this).index() * t.params.slidesPerGroup;
                t.params.loop && (i += t.loopedSlides), t.slideTo(i);
              }),
            l.extend(t.pagination, { $el: i, el: i[0] }));
        }
      },
      destroy: function () {
        var e = this,
          t = e.params.pagination;
        if (
          t.el &&
          e.pagination.el &&
          e.pagination.$el &&
          0 !== e.pagination.$el.length
        ) {
          var a = e.pagination.$el;
          a.removeClass(t.hiddenClass),
            a.removeClass(t.modifierClass + t.type),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && a.off("click", "." + t.bulletClass);
        }
      },
    },
    j = {
      name: "pagination",
      params: {
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          type: "bullets",
          dynamicBullets: !1,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-",
          currentClass: "swiper-pagination-current",
          totalClass: "swiper-pagination-total",
          hiddenClass: "swiper-pagination-hidden",
          progressbarFillClass: "swiper-pagination-progressbar-fill",
          clickableClass: "swiper-pagination-clickable",
        },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          pagination: {
            init: F.init.bind(e),
            render: F.render.bind(e),
            update: F.update.bind(e),
            destroy: F.destroy.bind(e),
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.pagination.init(), e.pagination.render(), e.pagination.update();
        },
        activeIndexChange: function () {
          var e = this;
          e.params.loop
            ? e.pagination.update()
            : void 0 === e.snapIndex && e.pagination.update();
        },
        snapIndexChange: function () {
          var e = this;
          e.params.loop || e.pagination.update();
        },
        slidesLengthChange: function () {
          var e = this;
          e.params.loop && (e.pagination.render(), e.pagination.update());
        },
        snapGridLengthChange: function () {
          var e = this;
          e.params.loop || (e.pagination.render(), e.pagination.update());
        },
        destroy: function () {
          this.pagination.destroy();
        },
        click: function (t) {
          var a = this;
          a.params.pagination.el &&
            a.params.pagination.hideOnClick &&
            a.pagination.$el.length > 0 &&
            !e(t.target).hasClass(a.params.pagination.bulletClass) &&
            a.pagination.$el.toggleClass(a.params.pagination.hiddenClass);
        },
      },
    },
    q = {
      setTranslate: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = e.rtl,
            i = e.progress,
            s = t.dragSize,
            r = t.trackSize,
            n = t.$dragEl,
            o = t.$el,
            l = e.params.scrollbar,
            d = s,
            c = (r - s) * i;
          a && e.isHorizontal()
            ? (c = -c) > 0
              ? ((d = s - c), (c = 0))
              : -c + s > r && (d = r + c)
            : c < 0
            ? ((d = s + c), (c = 0))
            : c + s > r && (d = r - c),
            e.isHorizontal()
              ? (p.transforms3d
                  ? n.transform("translate3d(" + c + "px, 0, 0)")
                  : n.transform("translateX(" + c + "px)"),
                (n[0].style.width = d + "px"))
              : (p.transforms3d
                  ? n.transform("translate3d(0px, " + c + "px, 0)")
                  : n.transform("translateY(" + c + "px)"),
                (n[0].style.height = d + "px")),
            l.hide &&
              (clearTimeout(e.scrollbar.timeout),
              (o[0].style.opacity = 1),
              (e.scrollbar.timeout = setTimeout(function () {
                (o[0].style.opacity = 0), o.transition(400);
              }, 1e3)));
        }
      },
      setTransition: function (e) {
        var t = this;
        t.params.scrollbar.el &&
          t.scrollbar.el &&
          t.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        var e = this;
        if (e.params.scrollbar.el && e.scrollbar.el) {
          var t = e.scrollbar,
            a = t.$dragEl,
            i = t.$el;
          (a[0].style.width = ""), (a[0].style.height = "");
          var s,
            r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            n = e.size / e.virtualSize,
            o = n * (r / e.size);
          (s =
            "auto" === e.params.scrollbar.dragSize
              ? r * n
              : parseInt(e.params.scrollbar.dragSize, 10)),
            e.isHorizontal()
              ? (a[0].style.width = s + "px")
              : (a[0].style.height = s + "px"),
            (i[0].style.display = n >= 1 ? "none" : ""),
            e.params.scrollbarHide && (i[0].style.opacity = 0),
            l.extend(t, {
              trackSize: r,
              divider: n,
              moveDivider: o,
              dragSize: s,
            });
        }
      },
      setDragPosition: function (e) {
        var t,
          a = this,
          i = a.scrollbar,
          s = i.$el,
          r = i.dragSize,
          n = i.moveDivider,
          o =
            (t = a.isHorizontal()
              ? "touchstart" === e.type || "touchmove" === e.type
                ? e.targetTouches[0].pageX
                : e.pageX || e.clientX
              : "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].pageY
              : e.pageY || e.clientY) -
            s.offset()[a.isHorizontal() ? "left" : "top"] -
            r / 2,
          l = -a.minTranslate() * n,
          d = -a.maxTranslate() * n;
        o < l ? (o = l) : o > d && (o = d),
          a.rtl && (o = d - o),
          (o = -o / n),
          a.updateProgress(o),
          a.setTranslate(o),
          a.updateActiveIndex(),
          a.updateSlidesClasses();
      },
      onDragStart: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar,
          s = t.$wrapperEl,
          r = i.$el,
          n = i.$dragEl;
        (t.scrollbar.isTouched = !0),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          n.transition(100),
          i.setDragPosition(e),
          clearTimeout(t.scrollbar.dragTimeout),
          r.transition(0),
          a.hide && r.css("opacity", 1),
          t.emit("scrollbarDragStart", e);
      },
      onDragMove: function (e) {
        var t = this,
          a = t.scrollbar,
          i = t.$wrapperEl,
          s = a.$el,
          r = a.$dragEl;
        t.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          a.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          r.transition(0),
          t.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this,
          a = t.params.scrollbar,
          i = t.scrollbar.$el;
        t.scrollbar.isTouched &&
          ((t.scrollbar.isTouched = !1),
          a.hide &&
            (clearTimeout(t.scrollbar.dragTimeout),
            (t.scrollbar.dragTimeout = l.nextTick(function () {
              i.css("opacity", 0), i.transition(400);
            }, 1e3))),
          t.emit("scrollbarDragEnd", e),
          a.snapOnRelease && t.slideReset());
      },
      enableDraggable: function () {
        var t = this;
        if (t.params.scrollbar.el) {
          var a = t.scrollbar.$el,
            i = p.touch ? a[0] : document;
          a.on(t.scrollbar.dragEvents.start, t.scrollbar.onDragStart),
            e(i).on(t.scrollbar.dragEvents.move, t.scrollbar.onDragMove),
            e(i).on(t.scrollbar.dragEvents.end, t.scrollbar.onDragEnd);
        }
      },
      disableDraggable: function () {
        var t = this;
        if (t.params.scrollbar.el) {
          var a = t.scrollbar.$el,
            i = p.touch ? a[0] : document;
          a.off(t.scrollbar.dragEvents.start),
            e(i).off(t.scrollbar.dragEvents.move),
            e(i).off(t.scrollbar.dragEvents.end);
        }
      },
      init: function () {
        var t = this;
        if (t.params.scrollbar.el) {
          var a = t.scrollbar,
            i = t.$el,
            s = t.touchEvents,
            r = t.params.scrollbar,
            n = e(r.el);
          t.params.uniqueNavElements &&
            "string" == typeof r.el &&
            n.length > 1 &&
            1 === i.find(r.el).length &&
            (n = i.find(r.el));
          var o = n.find(".swiper-scrollbar-drag");
          0 === o.length &&
            ((o = e(
              '<div class="swiper-scrollbar-drag link"><div class="grab parallax-wrap hide-ball"><div class="grab-dot parallax-element"></div></div></div>'
            )),
            n.append(o)),
            (t.scrollbar.dragEvents =
              !1 !== t.params.simulateTouch || p.touch
                ? s
                : { start: "mousedown", move: "mousemove", end: "mouseup" }),
            l.extend(a, { $el: n, el: n[0], $dragEl: o, dragEl: o[0] }),
            r.draggable && a.enableDraggable();
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    K = {
      name: "scrollbar",
      params: {
        scrollbar: {
          el: null,
          dragSize: "auto",
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
        },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          scrollbar: {
            init: q.init.bind(e),
            destroy: q.destroy.bind(e),
            updateSize: q.updateSize.bind(e),
            setTranslate: q.setTranslate.bind(e),
            setTransition: q.setTransition.bind(e),
            enableDraggable: q.enableDraggable.bind(e),
            disableDraggable: q.disableDraggable.bind(e),
            setDragPosition: q.setDragPosition.bind(e),
            onDragStart: q.onDragStart.bind(e),
            onDragMove: q.onDragMove.bind(e),
            onDragEnd: q.onDragEnd.bind(e),
            isTouched: !1,
            timeout: null,
            dragTimeout: null,
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.scrollbar.init(),
            e.scrollbar.updateSize(),
            e.scrollbar.setTranslate();
        },
        update: function () {
          this.scrollbar.updateSize();
        },
        resize: function () {
          this.scrollbar.updateSize();
        },
        observerUpdate: function () {
          this.scrollbar.updateSize();
        },
        setTranslate: function () {
          this.scrollbar.setTranslate();
        },
        setTransition: function (e) {
          this.scrollbar.setTransition(e);
        },
        destroy: function () {
          this.scrollbar.destroy();
        },
      },
    },
    U = {
      setTransform: function (t, a) {
        var i = this,
          s = i.rtl,
          r = e(t),
          n = s ? -1 : 1,
          o = r.attr("data-swiper-parallax") || "0",
          l = r.attr("data-swiper-parallax-x"),
          d = r.attr("data-swiper-parallax-y"),
          p = r.attr("data-swiper-parallax-scale"),
          c = r.attr("data-swiper-parallax-opacity");
        if (
          (l || d
            ? ((l = l || "0"), (d = d || "0"))
            : i.isHorizontal()
            ? ((l = o), (d = "0"))
            : ((d = o), (l = "0")),
          (l =
            l.indexOf("%") >= 0
              ? parseInt(l, 10) * a * n + "%"
              : l * a * n + "px"),
          (d = d.indexOf("%") >= 0 ? parseInt(d, 10) * a + "%" : d * a + "px"),
          void 0 !== c && null !== c)
        ) {
          var u = c - (c - 1) * (1 - Math.abs(a));
          r[0].style.opacity = u;
        }
        if (void 0 === p || null === p)
          r.transform("translate3d(" + l + ", " + d + ", 0px)");
        else {
          var h = p - (p - 1) * (1 - Math.abs(a));
          r.transform(
            "translate3d(" + l + ", " + d + ", 0px) scale(" + h + ")"
          );
        }
      },
      setTranslate: function () {
        var t = this,
          a = t.$el,
          i = t.slides,
          s = t.progress,
          r = t.snapGrid;
        a
          .children(
            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
          )
          .each(function (e, a) {
            t.parallax.setTransform(a, s);
          }),
          i.each(function (a, i) {
            var n = i.progress;
            t.params.slidesPerGroup > 1 &&
              "auto" !== t.params.slidesPerView &&
              (n += Math.ceil(a / 2) - s * (r.length - 1)),
              (n = Math.min(Math.max(n, -1), 1)),
              e(i)
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function (e, a) {
                  t.parallax.setTransform(a, n);
                });
          });
      },
      setTransition: function (t) {
        void 0 === t && (t = this.params.speed),
          this.$el
            .find(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
            )
            .each(function (a, i) {
              var s = e(i),
                r = parseInt(s.attr("data-swiper-parallax-duration"), 10) || t;
              0 === t && (r = 0), s.transition(r);
            });
      },
    },
    _ = {
      name: "parallax",
      params: { parallax: { enabled: !1 } },
      create: function () {
        var e = this;
        l.extend(e, {
          parallax: {
            setTransform: U.setTransform.bind(e),
            setTranslate: U.setTranslate.bind(e),
            setTransition: U.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          this.params.watchSlidesProgress = !0;
        },
        init: function () {
          var e = this;
          e.params.parallax && e.parallax.setTranslate();
        },
        setTranslate: function () {
          var e = this;
          e.params.parallax && e.parallax.setTranslate();
        },
        setTransition: function (e) {
          var t = this;
          t.params.parallax && t.parallax.setTransition(e);
        },
      },
    },
    Z = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          a = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2));
      },
      onGestureStart: function (t) {
        var a = this,
          i = a.params.zoom,
          s = a.zoom,
          r = s.gesture;
        if (
          ((s.fakeGestureTouched = !1), (s.fakeGestureMoved = !1), !p.gestures)
        ) {
          if (
            "touchstart" !== t.type ||
            ("touchstart" === t.type && t.targetTouches.length < 2)
          )
            return;
          (s.fakeGestureTouched = !0),
            (r.scaleStart = Z.getDistanceBetweenTouches(t));
        }
        (r.$slideEl && r.$slideEl.length) ||
        ((r.$slideEl = e(this)),
        0 === r.$slideEl.length && (r.$slideEl = a.slides.eq(a.activeIndex)),
        (r.$imageEl = r.$slideEl.find("img, svg, canvas")),
        (r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass)),
        (r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio),
        0 !== r.$imageWrapEl.length)
          ? (r.$imageEl.transition(0), (a.zoom.isScaling = !0))
          : (r.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;
        if (!p.gestures) {
          if (
            "touchmove" !== e.type ||
            ("touchmove" === e.type && e.targetTouches.length < 2)
          )
            return;
          (i.fakeGestureMoved = !0),
            (s.scaleMove = Z.getDistanceBetweenTouches(e));
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          (p.gestures
            ? (t.zoom.scale = e.scale * i.currentScale)
            : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
          i.scale > s.maxRatio &&
            (i.scale =
              s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
          i.scale < a.minRatio &&
            (i.scale =
              a.minRatio + 1 - Math.pow(a.minRatio - i.scale + 1, 0.5)),
          s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
      },
      onGestureEnd: function (e) {
        var t = this,
          a = t.params.zoom,
          i = t.zoom,
          s = i.gesture;
        if (!p.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if (
            "touchend" !== e.type ||
            ("touchend" === e.type && e.changedTouches.length < 2 && !x.android)
          )
            return;
          (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), a.minRatio)),
          s.$imageEl
            .transition(t.params.speed)
            .transform("translate3d(0,0,0) scale(" + i.scale + ")"),
          (i.currentScale = i.scale),
          (i.isScaling = !1),
          1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          a = t.gesture,
          i = t.image;
        a.$imageEl &&
          0 !== a.$imageEl.length &&
          (i.isTouched ||
            (x.android && e.preventDefault(),
            (i.isTouched = !0),
            (i.touchesStart.x =
              "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (i.touchesStart.y =
              "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this,
          a = t.zoom,
          i = a.gesture,
          s = a.image,
          r = a.velocity;
        if (
          i.$imageEl &&
          0 !== i.$imageEl.length &&
          ((t.allowClick = !1), s.isTouched && i.$slideEl)
        ) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (s.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            t.rtl && (s.startX = -s.startX),
            t.rtl && (s.startY = -s.startY));
          var n = s.width * a.scale,
            o = s.height * a.scale;
          if (!(n < i.slideWidth && o < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - n / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - o / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x =
                "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y =
                "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !a.isScaling)
            ) {
              if (
                t.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) &&
                  s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) &&
                    s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !t.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) &&
                  s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) &&
                    s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX &&
                (s.currentX =
                  s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX &&
                (s.currentX =
                  s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY &&
                (s.currentY =
                  s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY &&
                (s.currentY =
                  s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x),
              r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y),
              r.prevTime || (r.prevTime = Date.now()),
              (r.x =
                (s.touchesCurrent.x - r.prevPositionX) /
                (Date.now() - r.prevTime) /
                2),
              (r.y =
                (s.touchesCurrent.y - r.prevPositionY) /
                (Date.now() - r.prevTime) /
                2),
              Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
              Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
              (r.prevPositionX = s.touchesCurrent.x),
              (r.prevPositionY = s.touchesCurrent.y),
              (r.prevTime = Date.now()),
              i.$imageWrapEl.transform(
                "translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"
              );
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          a = e.image,
          i = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!a.isTouched || !a.isMoved)
            return (a.isTouched = !1), void (a.isMoved = !1);
          (a.isTouched = !1), (a.isMoved = !1);
          var s = 300,
            r = 300,
            n = i.x * s,
            o = a.currentX + n,
            l = i.y * r,
            d = a.currentY + l;
          0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)),
            0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
          var p = Math.max(s, r);
          (a.currentX = o), (a.currentY = d);
          var c = a.width * e.scale,
            u = a.height * e.scale;
          (a.minX = Math.min(t.slideWidth / 2 - c / 2, 0)),
            (a.maxX = -a.minX),
            (a.minY = Math.min(t.slideHeight / 2 - u / 2, 0)),
            (a.maxY = -a.minY),
            (a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX)),
            (a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY)),
            t.$imageWrapEl
              .transition(p)
              .transform(
                "translate3d(" + a.currentX + "px, " + a.currentY + "px,0)"
              );
        }
      },
      onTransitionEnd: function () {
        var e = this,
          t = e.zoom,
          a = t.gesture;
        a.$slideEl &&
          e.previousIndex !== e.activeIndex &&
          (a.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          a.$imageWrapEl.transform("translate3d(0,0,0)"),
          (a.$slideEl = void 0),
          (a.$imageEl = void 0),
          (a.$imageWrapEl = void 0),
          (t.scale = 1),
          (t.currentScale = 1));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (t) {
        var a = this,
          i = a.zoom,
          s = a.params.zoom,
          r = i.gesture,
          n = i.image;
        if (
          (r.$slideEl ||
            ((r.$slideEl = a.clickedSlide
              ? e(a.clickedSlide)
              : a.slides.eq(a.activeIndex)),
            (r.$imageEl = r.$slideEl.find("img, svg, canvas")),
            (r.$imageWrapEl = r.$imageEl.parent("." + s.containerClass))),
          r.$imageEl && 0 !== r.$imageEl.length)
        ) {
          r.$slideEl.addClass("" + s.zoomedSlideClass);
          var o, l, d, p, c, u, h, v, f, m, g, b, w, y, x, T;
          void 0 === n.touchesStart.x && t
            ? ((o =
                "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX),
              (l = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY))
            : ((o = n.touchesStart.x), (l = n.touchesStart.y)),
            (i.scale = r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
            (i.currentScale =
              r.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio),
            t
              ? ((x = r.$slideEl[0].offsetWidth),
                (T = r.$slideEl[0].offsetHeight),
                (d = r.$slideEl.offset().left + x / 2 - o),
                (p = r.$slideEl.offset().top + T / 2 - l),
                (h = r.$imageEl[0].offsetWidth),
                (v = r.$imageEl[0].offsetHeight),
                (f = h * i.scale),
                (m = v * i.scale),
                (w = -(g = Math.min(x / 2 - f / 2, 0))),
                (y = -(b = Math.min(T / 2 - m / 2, 0))),
                (c = d * i.scale),
                (u = p * i.scale),
                c < g && (c = g),
                c > w && (c = w),
                u < b && (u = b),
                u > y && (u = y))
              : ((c = 0), (u = 0)),
            r.$imageWrapEl
              .transition(300)
              .transform("translate3d(" + c + "px, " + u + "px,0)"),
            r.$imageEl
              .transition(300)
              .transform("translate3d(0,0,0) scale(" + i.scale + ")");
        }
      },
      out: function () {
        var t = this,
          a = t.zoom,
          i = t.params.zoom,
          s = a.gesture;
        s.$slideEl ||
          ((s.$slideEl = t.clickedSlide
            ? e(t.clickedSlide)
            : t.slides.eq(t.activeIndex)),
          (s.$imageEl = s.$slideEl.find("img, svg, canvas")),
          (s.$imageWrapEl = s.$imageEl.parent("." + i.containerClass))),
          s.$imageEl &&
            0 !== s.$imageEl.length &&
            ((a.scale = 1),
            (a.currentScale = 1),
            s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            s.$slideEl.removeClass("" + i.zoomedSlideClass),
            (s.$slideEl = void 0));
      },
      enable: function () {
        var t = this,
          a = t.zoom;
        if (!a.enabled) {
          a.enabled = !0;
          var i = t.slides,
            s = !(
              "touchstart" !== t.touchEvents.start ||
              !p.passiveListener ||
              !t.params.passiveListeners
            ) && { passive: !0, capture: !1 };
          p.gestures
            ? (i.on("gesturestart", a.onGestureStart, s),
              i.on("gesturechange", a.onGestureChange, s),
              i.on("gestureend", a.onGestureEnd, s))
            : "touchstart" === t.touchEvents.start &&
              (i.on(t.touchEvents.start, a.onGestureStart, s),
              i.on(t.touchEvents.move, a.onGestureChange, s),
              i.on(t.touchEvents.end, a.onGestureEnd, s)),
            t.slides.each(function (i, s) {
              var r = e(s);
              r.find("." + t.params.zoom.containerClass).length > 0 &&
                r.on(t.touchEvents.move, a.onTouchMove);
            });
        }
      },
      disable: function () {
        var t = this,
          a = t.zoom;
        if (a.enabled) {
          t.zoom.enabled = !1;
          var i = t.slides,
            s = !(
              "touchstart" !== t.touchEvents.start ||
              !p.passiveListener ||
              !t.params.passiveListeners
            ) && { passive: !0, capture: !1 };
          p.gestures
            ? (i.off("gesturestart", a.onGestureStart, s),
              i.off("gesturechange", a.onGestureChange, s),
              i.off("gestureend", a.onGestureEnd, s))
            : "touchstart" === t.touchEvents.start &&
              (i.off(t.touchEvents.start, a.onGestureStart, s),
              i.off(t.touchEvents.move, a.onGestureChange, s),
              i.off(t.touchEvents.end, a.onGestureEnd, s)),
            t.slides.each(function (i, s) {
              var r = e(s);
              r.find("." + t.params.zoom.containerClass).length > 0 &&
                r.off(t.touchEvents.move, a.onTouchMove);
            });
        }
      },
    },
    Q = {
      name: "zoom",
      params: {
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: "swiper-zoom-container",
          zoomedSlideClass: "swiper-slide-zoomed",
        },
      },
      create: function () {
        var e = this,
          t = {
            enabled: !1,
            scale: 1,
            currentScale: 1,
            isScaling: !1,
            gesture: {
              $slideEl: void 0,
              slideWidth: void 0,
              slideHeight: void 0,
              $imageEl: void 0,
              $imageWrapEl: void 0,
              maxRatio: 3,
            },
            image: {
              isTouched: void 0,
              isMoved: void 0,
              currentX: void 0,
              currentY: void 0,
              minX: void 0,
              minY: void 0,
              maxX: void 0,
              maxY: void 0,
              width: void 0,
              height: void 0,
              startX: void 0,
              startY: void 0,
              touchesStart: {},
              touchesCurrent: {},
            },
            velocity: {
              x: void 0,
              y: void 0,
              prevPositionX: void 0,
              prevPositionY: void 0,
              prevTime: void 0,
            },
          };
        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
          .split(" ")
          .forEach(function (a) {
            t[a] = Z[a].bind(e);
          }),
          l.extend(e, { zoom: t });
      },
      on: {
        init: function () {
          var e = this;
          e.params.zoom.enabled && e.zoom.enable();
        },
        destroy: function () {
          this.zoom.disable();
        },
        touchStart: function (e) {
          var t = this;
          t.zoom.enabled && t.zoom.onTouchStart(e);
        },
        touchEnd: function (e) {
          var t = this;
          t.zoom.enabled && t.zoom.onTouchEnd(e);
        },
        doubleTap: function (e) {
          var t = this;
          t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            t.zoom.toggle(e);
        },
        transitionEnd: function () {
          var e = this;
          e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
        },
      },
    },
    J = {
      loadInSlide: function (t, a) {
        void 0 === a && (a = !0);
        var i = this,
          s = i.params.lazy;
        if (void 0 !== t && 0 !== i.slides.length) {
          var r =
              i.virtual && i.params.virtual.enabled
                ? i.$wrapperEl.children(
                    "." +
                      i.params.slideClass +
                      '[data-swiper-slide-index="' +
                      t +
                      '"]'
                  )
                : i.slides.eq(t),
            n = r.find(
              "." +
                s.elementClass +
                ":not(." +
                s.loadedClass +
                "):not(." +
                s.loadingClass +
                ")"
            );
          !r.hasClass(s.elementClass) ||
            r.hasClass(s.loadedClass) ||
            r.hasClass(s.loadingClass) ||
            (n = n.add(r[0])),
            0 !== n.length &&
              n.each(function (t, n) {
                var o = e(n);
                o.addClass(s.loadingClass);
                var l = o.attr("data-background"),
                  d = o.attr("data-src"),
                  p = o.attr("data-srcset"),
                  c = o.attr("data-sizes");
                i.loadImage(o[0], d || l, p, c, !1, function () {
                  if (
                    void 0 !== i &&
                    null !== i &&
                    i &&
                    (!i || i.params) &&
                    !i.destroyed
                  ) {
                    if (
                      (l
                        ? (o.css("background-image", 'url("' + l + '")'),
                          o.removeAttr("data-background"))
                        : (p &&
                            (o.attr("srcset", p), o.removeAttr("data-srcset")),
                          c && (o.attr("sizes", c), o.removeAttr("data-sizes")),
                          d && (o.attr("src", d), o.removeAttr("data-src"))),
                      o.addClass(s.loadedClass).removeClass(s.loadingClass),
                      r.find("." + s.preloaderClass).remove(),
                      i.params.loop && a)
                    ) {
                      var e = r.attr("data-swiper-slide-index");
                      if (r.hasClass(i.params.slideDuplicateClass)) {
                        var t = i.$wrapperEl.children(
                          '[data-swiper-slide-index="' +
                            e +
                            '"]:not(.' +
                            i.params.slideDuplicateClass +
                            ")"
                        );
                        i.lazy.loadInSlide(t.index(), !1);
                      } else {
                        var n = i.$wrapperEl.children(
                          "." +
                            i.params.slideDuplicateClass +
                            '[data-swiper-slide-index="' +
                            e +
                            '"]'
                        );
                        i.lazy.loadInSlide(n.index(), !1);
                      }
                    }
                    i.emit("lazyImageReady", r[0], o[0]);
                  }
                }),
                  i.emit("lazyImageLoad", r[0], o[0]);
              });
        }
      },
      load: function () {
        function t(e) {
          if (l) {
            if (
              s.children(
                "." + r.slideClass + '[data-swiper-slide-index="' + e + '"]'
              ).length
            )
              return !0;
          } else if (n[e]) return !0;
          return !1;
        }
        function a(t) {
          return l ? e(t).attr("data-swiper-slide-index") : e(t).index();
        }
        var i = this,
          s = i.$wrapperEl,
          r = i.params,
          n = i.slides,
          o = i.activeIndex,
          l = i.virtual && r.virtual.enabled,
          d = r.lazy,
          p = r.slidesPerView;
        if (
          ("auto" === p && (p = 0),
          i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0),
          i.params.watchSlidesVisibility)
        )
          s.children("." + r.slideVisibleClass).each(function (t, a) {
            var s = l ? e(a).attr("data-swiper-slide-index") : e(a).index();
            i.lazy.loadInSlide(s);
          });
        else if (p > 1)
          for (var c = o; c < o + p; c += 1) t(c) && i.lazy.loadInSlide(c);
        else i.lazy.loadInSlide(o);
        if (d.loadPrevNext)
          if (p > 1 || (d.loadPrevNextAmount && d.loadPrevNextAmount > 1)) {
            for (
              var u = d.loadPrevNextAmount,
                h = p,
                v = Math.min(o + h + Math.max(u, h), n.length),
                f = Math.max(o - Math.max(h, u), 0),
                m = o + p;
              m < v;
              m += 1
            )
              t(m) && i.lazy.loadInSlide(m);
            for (var g = f; g < o; g += 1) t(g) && i.lazy.loadInSlide(g);
          } else {
            var b = s.children("." + r.slideNextClass);
            b.length > 0 && i.lazy.loadInSlide(a(b));
            var w = s.children("." + r.slidePrevClass);
            w.length > 0 && i.lazy.loadInSlide(a(w));
          }
      },
    },
    ee = {
      name: "lazy",
      params: {
        lazy: {
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          elementClass: "swiper-lazy",
          loadingClass: "swiper-lazy-loading",
          loadedClass: "swiper-lazy-loaded",
          preloaderClass: "swiper-lazy-preloader",
        },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          lazy: {
            initialImageLoaded: !1,
            load: J.load.bind(e),
            loadInSlide: J.loadInSlide.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          e.params.preloadImages && (e.params.preloadImages = !1);
        },
        init: function () {
          var e = this;
          e.params.lazy.enabled &&
            !e.params.loop &&
            0 === e.params.initialSlide &&
            e.lazy.load();
        },
        scroll: function () {
          var e = this;
          e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
        },
        resize: function () {
          var e = this;
          e.params.lazy.enabled && e.lazy.load();
        },
        scrollbarDragMove: function () {
          var e = this;
          e.params.lazy.enabled && e.lazy.load();
        },
        transitionStart: function () {
          var e = this;
          e.params.lazy.enabled &&
            (e.params.lazy.loadOnTransitionStart ||
              (!e.params.lazy.loadOnTransitionStart &&
                !e.lazy.initialImageLoaded)) &&
            e.lazy.load();
        },
        transitionEnd: function () {
          var e = this;
          e.params.lazy.enabled &&
            !e.params.lazy.loadOnTransitionStart &&
            e.lazy.load();
        },
      },
    },
    te = {
      LinearSpline: function (e, t) {
        var a = (function () {
          var e, t, a;
          return function (i, s) {
            for (t = -1, e = i.length; e - t > 1; )
              i[(a = (e + t) >> 1)] <= s ? (t = a) : (e = a);
            return e;
          };
        })();
        (this.x = e), (this.y = t), (this.lastIndex = e.length - 1);
        var i, s;
        return (
          (this.interpolate = function (e) {
            return e
              ? ((s = a(this.x, e)),
                (i = s - 1),
                ((e - this.x[i]) * (this.y[s] - this.y[i])) /
                  (this.x[s] - this.x[i]) +
                  this.y[i])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        var t = this;
        t.controller.spline ||
          (t.controller.spline = t.params.loop
            ? new te.LinearSpline(t.slidesGrid, e.slidesGrid)
            : new te.LinearSpline(t.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        function a(e) {
          var t =
            e.rtl && "horizontal" === e.params.direction
              ? -r.translate
              : r.translate;
          "slide" === r.params.controller.by &&
            (r.controller.getInterpolateFunction(e),
            (s = -r.controller.spline.interpolate(-t))),
            (s && "container" !== r.params.controller.by) ||
              ((i =
                (e.maxTranslate() - e.minTranslate()) /
                (r.maxTranslate() - r.minTranslate())),
              (s = (t - r.minTranslate()) * i + e.minTranslate())),
            r.params.controller.inverse && (s = e.maxTranslate() - s),
            e.updateProgress(s),
            e.setTranslate(s, r),
            e.updateActiveIndex(),
            e.updateSlidesClasses();
        }
        var i,
          s,
          r = this,
          n = r.controller.control;
        if (Array.isArray(n))
          for (var o = 0; o < n.length; o += 1)
            n[o] !== t && n[o] instanceof $ && a(n[o]);
        else n instanceof $ && t !== n && a(n);
      },
      setTransition: function (e, t) {
        function a(t) {
          t.setTransition(e, s),
            0 !== e &&
              (t.transitionStart(),
              t.$wrapperEl.transitionEnd(function () {
                r &&
                  (t.params.loop &&
                    "slide" === s.params.controller.by &&
                    t.loopFix(),
                  t.transitionEnd());
              }));
        }
        var i,
          s = this,
          r = s.controller.control;
        if (Array.isArray(r))
          for (i = 0; i < r.length; i += 1)
            r[i] !== t && r[i] instanceof $ && a(r[i]);
        else r instanceof $ && t !== r && a(r);
      },
    },
    ae = {
      name: "controller",
      params: { controller: { control: void 0, inverse: !1, by: "slide" } },
      create: function () {
        var e = this;
        l.extend(e, {
          controller: {
            control: e.params.controller.control,
            getInterpolateFunction: te.getInterpolateFunction.bind(e),
            setTranslate: te.setTranslate.bind(e),
            setTransition: te.setTransition.bind(e),
          },
        });
      },
      on: {
        update: function () {
          var e = this;
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        },
        resize: function () {
          var e = this;
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        },
        observerUpdate: function () {
          var e = this;
          e.controller.control &&
            e.controller.spline &&
            ((e.controller.spline = void 0), delete e.controller.spline);
        },
        setTranslate: function (e, t) {
          var a = this;
          a.controller.control && a.controller.setTranslate(e, t);
        },
        setTransition: function (e, t) {
          var a = this;
          a.controller.control && a.controller.setTransition(e, t);
        },
      },
    },
    ie = {
      makeElFocusable: function (e) {
        return e.attr("tabIndex", "0"), e;
      },
      addElRole: function (e, t) {
        return e.attr("role", t), e;
      },
      addElLabel: function (e, t) {
        return e.attr("aria-label", t), e;
      },
      disableEl: function (e) {
        return e.attr("aria-disabled", !0), e;
      },
      enableEl: function (e) {
        return e.attr("aria-disabled", !1), e;
      },
      onEnterKey: function (t) {
        var a = this,
          i = a.params.a11y;
        if (13 === t.keyCode) {
          var s = e(t.target);
          a.navigation &&
            a.navigation.$nextEl &&
            s.is(a.navigation.$nextEl) &&
            ((a.isEnd && !a.params.loop) || a.slideNext(),
            a.isEnd
              ? a.a11y.notify(i.lastSlideMessage)
              : a.a11y.notify(i.nextSlideMessage)),
            a.navigation &&
              a.navigation.$prevEl &&
              s.is(a.navigation.$prevEl) &&
              ((a.isBeginning && !a.params.loop) || a.slidePrev(),
              a.isBeginning
                ? a.a11y.notify(i.firstSlideMessage)
                : a.a11y.notify(i.prevSlideMessage)),
            a.pagination &&
              s.is("." + a.params.pagination.bulletClass) &&
              s[0].click();
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        var e = this;
        if (!e.params.loop) {
          var t = e.navigation,
            a = t.$nextEl,
            i = t.$prevEl;
          i &&
            i.length > 0 &&
            (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)),
            a &&
              a.length > 0 &&
              (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a));
        }
      },
      updatePagination: function () {
        var t = this,
          a = t.params.a11y;
        t.pagination &&
          t.params.pagination.clickable &&
          t.pagination.bullets &&
          t.pagination.bullets.length &&
          t.pagination.bullets.each(function (i, s) {
            var r = e(s);
            t.a11y.makeElFocusable(r),
              t.a11y.addElRole(r, "button"),
              t.a11y.addElLabel(
                r,
                a.paginationBulletMessage.replace(/{{index}}/, r.index() + 1)
              );
          });
      },
      init: function () {
        var e = this;
        e.$el.append(e.a11y.liveRegion);
        var t,
          a,
          i = e.params.a11y;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
          t &&
            (e.a11y.makeElFocusable(t),
            e.a11y.addElRole(t, "button"),
            e.a11y.addElLabel(t, i.nextSlideMessage),
            t.on("keydown", e.a11y.onEnterKey)),
          a &&
            (e.a11y.makeElFocusable(a),
            e.a11y.addElRole(a, "button"),
            e.a11y.addElLabel(a, i.prevSlideMessage),
            a.on("keydown", e.a11y.onEnterKey)),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.on(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
      destroy: function () {
        var e = this;
        e.a11y.liveRegion &&
          e.a11y.liveRegion.length > 0 &&
          e.a11y.liveRegion.remove();
        var t, a;
        e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
          e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl),
          t && t.off("keydown", e.a11y.onEnterKey),
          a && a.off("keydown", e.a11y.onEnterKey),
          e.pagination &&
            e.params.pagination.clickable &&
            e.pagination.bullets &&
            e.pagination.bullets.length &&
            e.pagination.$el.off(
              "keydown",
              "." + e.params.pagination.bulletClass,
              e.a11y.onEnterKey
            );
      },
    },
    se = {
      name: "a11y",
      params: {
        a11y: {
          enabled: !1,
          notificationClass: "swiper-notification",
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
        },
      },
      create: function () {
        var t = this;
        l.extend(t, {
          a11y: {
            liveRegion: e(
              '<span class="' +
                t.params.a11y.notificationClass +
                '" aria-live="assertive" aria-atomic="true"></span>'
            ),
          },
        }),
          Object.keys(ie).forEach(function (e) {
            t.a11y[e] = ie[e].bind(t);
          });
      },
      on: {
        init: function () {
          var e = this;
          e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation());
        },
        toEdge: function () {
          var e = this;
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        fromEdge: function () {
          var e = this;
          e.params.a11y.enabled && e.a11y.updateNavigation();
        },
        paginationUpdate: function () {
          var e = this;
          e.params.a11y.enabled && e.a11y.updatePagination();
        },
        destroy: function () {
          var e = this;
          e.params.a11y.enabled && e.a11y.destroy();
        },
      },
    },
    re = {
      init: function () {
        var e = this;
        if (e.params.history) {
          if (!s.history || !s.history.pushState)
            return (
              (e.params.history.enabled = !1),
              void (e.params.hashNavigation.enabled = !0)
            );
          var t = e.history;
          (t.initialized = !0),
            (t.paths = re.getPathValues()),
            (t.paths.key || t.paths.value) &&
              (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit),
              e.params.history.replaceState ||
                s.addEventListener("popstate", e.history.setHistoryPopState));
        }
      },
      destroy: function () {
        var e = this;
        e.params.history.replaceState ||
          s.removeEventListener("popstate", e.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        var e = this;
        (e.history.paths = re.getPathValues()),
          e.history.scrollToSlide(e.params.speed, e.history.paths.value, !1);
      },
      getPathValues: function () {
        var e = s.location.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          t = e.length;
        return { key: e[t - 2], value: e[t - 1] };
      },
      setHistory: function (e, t) {
        var a = this;
        if (a.history.initialized && a.params.history.enabled) {
          var i = a.slides.eq(t),
            r = re.slugify(i.attr("data-history"));
          s.location.pathname.includes(e) || (r = e + "/" + r);
          var n = s.history.state;
          (n && n.value === r) ||
            (a.params.history.replaceState
              ? s.history.replaceState({ value: r }, null, r)
              : s.history.pushState({ value: r }, null, r));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, a) {
        var i = this;
        if (t)
          for (var s = 0, r = i.slides.length; s < r; s += 1) {
            var n = i.slides.eq(s);
            if (
              re.slugify(n.attr("data-history")) === t &&
              !n.hasClass(i.params.slideDuplicateClass)
            ) {
              var o = n.index();
              i.slideTo(o, e, a);
            }
          }
        else i.slideTo(0, e, a);
      },
    },
    ne = {
      name: "history",
      params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
      create: function () {
        var e = this;
        l.extend(e, {
          history: {
            init: re.init.bind(e),
            setHistory: re.setHistory.bind(e),
            setHistoryPopState: re.setHistoryPopState.bind(e),
            scrollToSlide: re.scrollToSlide.bind(e),
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.params.history.enabled && e.history.init();
        },
        destroy: function () {
          var e = this;
          e.params.history.enabled && e.history.destroy();
        },
        transitionEnd: function () {
          var e = this;
          e.history.initialized &&
            e.history.setHistory(e.params.history.key, e.activeIndex);
        },
      },
    },
    oe = {
      onHashCange: function () {
        var e = this,
          t = d.location.hash.replace("#", "");
        t !== e.slides.eq(e.activeIndex).attr("data-hash") &&
          e.slideTo(
            e.$wrapperEl
              .children("." + e.params.slideClass + '[data-hash="' + t + '"]')
              .index()
          );
      },
      setHash: function () {
        var e = this;
        if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
          if (
            e.params.hashNavigation.replaceState &&
            s.history &&
            s.history.replaceState
          )
            s.history.replaceState(
              null,
              null,
              "#" + e.slides.eq(e.activeIndex).attr("data-hash") || ""
            );
          else {
            var t = e.slides.eq(e.activeIndex),
              a = t.attr("data-hash") || t.attr("data-history");
            d.location.hash = a || "";
          }
      },
      init: function () {
        var t = this;
        if (
          !(
            !t.params.hashNavigation.enabled ||
            (t.params.history && t.params.history.enabled)
          )
        ) {
          t.hashNavigation.initialized = !0;
          var a = d.location.hash.replace("#", "");
          if (a)
            for (var i = 0, r = t.slides.length; i < r; i += 1) {
              var n = t.slides.eq(i);
              if (
                (n.attr("data-hash") || n.attr("data-history")) === a &&
                !n.hasClass(t.params.slideDuplicateClass)
              ) {
                var o = n.index();
                t.slideTo(o, 0, t.params.runCallbacksOnInit, !0);
              }
            }
          t.params.hashNavigation.watchState &&
            e(s).on("hashchange", t.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        var t = this;
        t.params.hashNavigation.watchState &&
          e(s).off("hashchange", t.hashNavigation.onHashCange);
      },
    },
    le = {
      name: "hash-navigation",
      params: {
        hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          hashNavigation: {
            initialized: !1,
            init: oe.init.bind(e),
            destroy: oe.destroy.bind(e),
            setHash: oe.setHash.bind(e),
            onHashCange: oe.onHashCange.bind(e),
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.params.hashNavigation.enabled && e.hashNavigation.init();
        },
        destroy: function () {
          var e = this;
          e.params.hashNavigation.enabled && e.hashNavigation.destroy();
        },
        transitionEnd: function () {
          var e = this;
          e.hashNavigation.initialized && e.hashNavigation.setHash();
        },
      },
    },
    de = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          a = e.params.autoplay.delay;
        t.attr("data-swiper-autoplay") &&
          (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          (e.autoplay.timeout = l.nextTick(function () {
            e.params.loop
              ? (e.loopFix(),
                e.slideNext(e.params.speed, !0, !0),
                e.emit("autoplay"))
              : e.isEnd
              ? e.params.autoplay.stopOnLastSlide
                ? e.autoplay.stop()
                : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
              : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
          }, a));
      },
      start: function () {
        var e = this;
        return (
          void 0 === e.autoplay.timeout &&
          !e.autoplay.running &&
          ((e.autoplay.running = !0),
          e.emit("autoplayStart"),
          e.autoplay.run(),
          !0)
        );
      },
      stop: function () {
        var e = this;
        return (
          !!e.autoplay.running &&
          void 0 !== e.autoplay.timeout &&
          (e.autoplay.timeout &&
            (clearTimeout(e.autoplay.timeout), (e.autoplay.timeout = void 0)),
          (e.autoplay.running = !1),
          e.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 === e
              ? ((t.autoplay.paused = !1), t.autoplay.run())
              : t.$wrapperEl.transitionEnd(function () {
                  t &&
                    !t.destroyed &&
                    ((t.autoplay.paused = !1),
                    t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                })));
      },
    },
    pe = {
      name: "autoplay",
      params: {
        autoplay: {
          enabled: !1,
          delay: 3e3,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
        },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          autoplay: {
            running: !1,
            paused: !1,
            run: de.run.bind(e),
            start: de.start.bind(e),
            stop: de.stop.bind(e),
            pause: de.pause.bind(e),
          },
        });
      },
      on: {
        init: function () {
          var e = this;
          e.params.autoplay.enabled && e.autoplay.start();
        },
        beforeTransitionStart: function (e, t) {
          var a = this;
          a.autoplay.running &&
            (t || !a.params.autoplay.disableOnInteraction
              ? a.autoplay.pause(e)
              : a.autoplay.stop());
        },
        sliderFirstMove: function () {
          var e = this;
          e.autoplay.running &&
            (e.params.autoplay.disableOnInteraction
              ? e.autoplay.stop()
              : e.autoplay.pause());
        },
        destroy: function () {
          var e = this;
          e.autoplay.running && e.autoplay.stop();
        },
      },
    },
    ce = {
      setTranslate: function () {
        for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
          var i = e.slides.eq(a),
            s = -i[0].swiperSlideOffset;
          e.params.virtualTranslate || (s -= e.translate);
          var r = 0;
          e.isHorizontal() || ((r = s), (s = 0));
          var n = e.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: n }).transform(
            "translate3d(" + s + "px, " + r + "px, 0px)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.$wrapperEl;
        if ((a.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var s = !1;
          a.transitionEnd(function () {
            if (!s && t && !t.destroyed) {
              (s = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                i.trigger(e[a]);
            }
          });
        }
      },
    },
    ue = {
      name: "effect-fade",
      params: { fadeEffect: { crossFade: !1 } },
      create: function () {
        var e = this;
        l.extend(e, {
          fadeEffect: {
            setTranslate: ce.setTranslate.bind(e),
            setTransition: ce.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("fade" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "fade");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0,
            };
            l.extend(e.params, t), l.extend(e.originalParams, t);
          }
        },
        setTranslate: function () {
          var e = this;
          "fade" === e.params.effect && e.fadeEffect.setTranslate();
        },
        setTransition: function (e) {
          var t = this;
          "fade" === t.params.effect && t.fadeEffect.setTransition(e);
        },
      },
    },
    he = {
      setTranslate: function () {
        var t,
          a = this,
          i = a.$el,
          s = a.$wrapperEl,
          r = a.slides,
          n = a.width,
          o = a.height,
          l = a.rtl,
          d = a.size,
          p = a.params.cubeEffect,
          c = a.isHorizontal(),
          u = a.virtual && a.params.virtual.enabled,
          h = 0;
        p.shadow &&
          (c
            ? (0 === (t = s.find(".swiper-cube-shadow")).length &&
                ((t = e('<div class="swiper-cube-shadow"></div>')),
                s.append(t)),
              t.css({ height: n + "px" }))
            : 0 === (t = i.find(".swiper-cube-shadow")).length &&
              ((t = e('<div class="swiper-cube-shadow"></div>')), i.append(t)));
        for (var v = 0; v < r.length; v += 1) {
          var f = r.eq(v),
            g = v;
          u && (g = parseInt(f.attr("data-swiper-slide-index"), 10));
          var b = 90 * g,
            w = Math.floor(b / 360);
          l && ((b = -b), (w = Math.floor(-b / 360)));
          var y = Math.max(Math.min(f[0].progress, 1), -1),
            x = 0,
            T = 0,
            E = 0;
          g % 4 == 0
            ? ((x = 4 * -w * d), (E = 0))
            : (g - 1) % 4 == 0
            ? ((x = 0), (E = 4 * -w * d))
            : (g - 2) % 4 == 0
            ? ((x = d + 4 * w * d), (E = d))
            : (g - 3) % 4 == 0 && ((x = -d), (E = 3 * d + 4 * d * w)),
            l && (x = -x),
            c || ((T = x), (x = 0));
          var S =
            "rotateX(" +
            (c ? 0 : -b) +
            "deg) rotateY(" +
            (c ? b : 0) +
            "deg) translate3d(" +
            x +
            "px, " +
            T +
            "px, " +
            E +
            "px)";
          if (
            (y <= 1 &&
              y > -1 &&
              ((h = 90 * g + 90 * y), l && (h = 90 * -g - 90 * y)),
            f.transform(S),
            p.slideShadows)
          ) {
            var C = c
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              M = c
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === C.length &&
              ((C = e(
                '<div class="swiper-slide-shadow-' +
                  (c ? "left" : "top") +
                  '"></div>'
              )),
              f.append(C)),
              0 === M.length &&
                ((M = e(
                  '<div class="swiper-slide-shadow-' +
                    (c ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(M)),
              C.length && (C[0].style.opacity = Math.max(-y, 0)),
              M.length && (M[0].style.opacity = Math.max(y, 0));
          }
        }
        if (
          (s.css({
            "-webkit-transform-origin": "50% 50% -" + d / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + d / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + d / 2 + "px",
            "transform-origin": "50% 50% -" + d / 2 + "px",
          }),
          p.shadow)
        )
          if (c)
            t.transform(
              "translate3d(0px, " +
                (n / 2 + p.shadowOffset) +
                "px, " +
                -n / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                p.shadowScale +
                ")"
            );
          else {
            var z = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
              P =
                1.5 -
                (Math.sin((2 * z * Math.PI) / 360) / 2 +
                  Math.cos((2 * z * Math.PI) / 360) / 2),
              k = p.shadowScale,
              $ = p.shadowScale / P,
              I = p.shadowOffset;
            t.transform(
              "scale3d(" +
                k +
                ", 1, " +
                $ +
                ") translate3d(0px, " +
                (o / 2 + I) +
                "px, " +
                -o / 2 / $ +
                "px) rotateX(-90deg)"
            );
          }
        var L = m.isSafari || m.isUiWebView ? -d / 2 : 0;
        s.transform(
          "translate3d(0px,0," +
            L +
            "px) rotateX(" +
            (a.isHorizontal() ? 0 : h) +
            "deg) rotateY(" +
            (a.isHorizontal() ? -h : 0) +
            "deg)"
        );
      },
      setTransition: function (e) {
        var t = this,
          a = t.$el;
        t.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e),
          t.params.cubeEffect.shadow &&
            !t.isHorizontal() &&
            a.find(".swiper-cube-shadow").transition(e);
      },
    },
    ve = {
      name: "effect-cube",
      params: {
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          cubeEffect: {
            setTranslate: he.setTranslate.bind(e),
            setTransition: he.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("cube" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "cube"),
              e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              resistanceRatio: 0,
              spaceBetween: 0,
              centeredSlides: !1,
              virtualTranslate: !0,
            };
            l.extend(e.params, t), l.extend(e.originalParams, t);
          }
        },
        setTranslate: function () {
          var e = this;
          "cube" === e.params.effect && e.cubeEffect.setTranslate();
        },
        setTransition: function (e) {
          var t = this;
          "cube" === t.params.effect && t.cubeEffect.setTransition(e);
        },
      },
    },
    fe = {
      setTranslate: function () {
        for (var t = this, a = t.slides, i = 0; i < a.length; i += 1) {
          var s = a.eq(i),
            r = s[0].progress;
          t.params.flipEffect.limitRotation &&
            (r = Math.max(Math.min(s[0].progress, 1), -1));
          var n = -180 * r,
            o = 0,
            l = -s[0].swiperSlideOffset,
            d = 0;
          if (
            (t.isHorizontal()
              ? t.rtl && (n = -n)
              : ((d = l), (l = 0), (o = -n), (n = 0)),
            (s[0].style.zIndex = -Math.abs(Math.round(r)) + a.length),
            t.params.flipEffect.slideShadows)
          ) {
            var p = t.isHorizontal()
                ? s.find(".swiper-slide-shadow-left")
                : s.find(".swiper-slide-shadow-top"),
              c = t.isHorizontal()
                ? s.find(".swiper-slide-shadow-right")
                : s.find(".swiper-slide-shadow-bottom");
            0 === p.length &&
              ((p = e(
                '<div class="swiper-slide-shadow-' +
                  (t.isHorizontal() ? "left" : "top") +
                  '"></div>'
              )),
              s.append(p)),
              0 === c.length &&
                ((c = e(
                  '<div class="swiper-slide-shadow-' +
                    (t.isHorizontal() ? "right" : "bottom") +
                    '"></div>'
                )),
                s.append(c)),
              p.length && (p[0].style.opacity = Math.max(-r, 0)),
              c.length && (c[0].style.opacity = Math.max(r, 0));
          }
          s.transform(
            "translate3d(" +
              l +
              "px, " +
              d +
              "px, 0px) rotateX(" +
              o +
              "deg) rotateY(" +
              n +
              "deg)"
          );
        }
      },
      setTransition: function (e) {
        var t = this,
          a = t.slides,
          i = t.activeIndex,
          s = t.$wrapperEl;
        if (
          (a
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          a.eq(i).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              (r = !0), (t.animating = !1);
              for (
                var e = ["webkitTransitionEnd", "transitionend"], a = 0;
                a < e.length;
                a += 1
              )
                s.trigger(e[a]);
            }
          });
        }
      },
    },
    me = {
      name: "effect-flip",
      params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
      create: function () {
        var e = this;
        l.extend(e, {
          flipEffect: {
            setTranslate: fe.setTranslate.bind(e),
            setTransition: fe.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          if ("flip" === e.params.effect) {
            e.classNames.push(e.params.containerModifierClass + "flip"),
              e.classNames.push(e.params.containerModifierClass + "3d");
            var t = {
              slidesPerView: 1,
              slidesPerColumn: 1,
              slidesPerGroup: 1,
              watchSlidesProgress: !0,
              spaceBetween: 0,
              virtualTranslate: !0,
            };
            l.extend(e.params, t), l.extend(e.originalParams, t);
          }
        },
        setTranslate: function () {
          var e = this;
          "flip" === e.params.effect && e.flipEffect.setTranslate();
        },
        setTransition: function (e) {
          var t = this;
          "flip" === t.params.effect && t.flipEffect.setTransition(e);
        },
      },
    },
    ge = {
      setTranslate: function () {
        for (
          var t = this,
            a = t.width,
            i = t.height,
            s = t.slides,
            r = t.$wrapperEl,
            n = t.slidesSizesGrid,
            o = t.params.coverflowEffect,
            l = t.isHorizontal(),
            d = t.translate,
            p = l ? a / 2 - d : i / 2 - d,
            c = l ? o.rotate : -o.rotate,
            u = o.depth,
            h = 0,
            v = s.length;
          h < v;
          h += 1
        ) {
          var f = s.eq(h),
            g = n[h],
            b = ((p - f[0].swiperSlideOffset - g / 2) / g) * o.modifier,
            w = l ? c * b : 0,
            y = l ? 0 : c * b,
            x = -u * Math.abs(b),
            T = l ? 0 : o.stretch * b,
            E = l ? o.stretch * b : 0;
          Math.abs(E) < 0.001 && (E = 0),
            Math.abs(T) < 0.001 && (T = 0),
            Math.abs(x) < 0.001 && (x = 0),
            Math.abs(w) < 0.001 && (w = 0),
            Math.abs(y) < 0.001 && (y = 0);
          var S =
            "translate3d(" +
            E +
            "px," +
            T +
            "px," +
            x +
            "px)  rotateX(" +
            y +
            "deg) rotateY(" +
            w +
            "deg)";
          if (
            (f.transform(S),
            (f[0].style.zIndex = 1 - Math.abs(Math.round(b))),
            o.slideShadows)
          ) {
            var C = l
                ? f.find(".swiper-slide-shadow-left")
                : f.find(".swiper-slide-shadow-top"),
              M = l
                ? f.find(".swiper-slide-shadow-right")
                : f.find(".swiper-slide-shadow-bottom");
            0 === C.length &&
              ((C = e(
                '<div class="swiper-slide-shadow-' +
                  (l ? "left" : "top") +
                  '"></div>'
              )),
              f.append(C)),
              0 === M.length &&
                ((M = e(
                  '<div class="swiper-slide-shadow-' +
                    (l ? "right" : "bottom") +
                    '"></div>'
                )),
                f.append(M)),
              C.length && (C[0].style.opacity = b > 0 ? b : 0),
              M.length && (M[0].style.opacity = -b > 0 ? -b : 0);
          }
        }
        m.ie && (r[0].style.perspectiveOrigin = p + "px 50%");
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
          )
          .transition(e);
      },
    },
    be = {
      name: "effect-coverflow",
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: !0,
        },
      },
      create: function () {
        var e = this;
        l.extend(e, {
          coverflowEffect: {
            setTranslate: ge.setTranslate.bind(e),
            setTransition: ge.setTransition.bind(e),
          },
        });
      },
      on: {
        beforeInit: function () {
          var e = this;
          "coverflow" === e.params.effect &&
            (e.classNames.push(e.params.containerModifierClass + "coverflow"),
            e.classNames.push(e.params.containerModifierClass + "3d"),
            (e.params.watchSlidesProgress = !0),
            (e.originalParams.watchSlidesProgress = !0));
        },
        setTranslate: function () {
          var e = this;
          "coverflow" === e.params.effect && e.coverflowEffect.setTranslate();
        },
        setTransition: function (e) {
          var t = this;
          "coverflow" === t.params.effect && t.coverflowEffect.setTransition(e);
        },
      },
    };
  return (
    ($.components = [
      I,
      L,
      D,
      O,
      H,
      N,
      G,
      V,
      W,
      j,
      K,
      _,
      Q,
      ee,
      ae,
      se,
      ne,
      le,
      pe,
      ue,
      ve,
      me,
      be,
    ]),
    $
  );
});
//# sourceMappingURL=swiper.min.js.map
