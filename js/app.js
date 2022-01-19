(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
            e.parentElement.removeChild(e);
          }
          function n(e) {
            return null != e;
          }
          function o(e) {
            e.preventDefault();
          }
          function r(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function l(e, t) {
            return Math.round(e / t) * t;
          }
          function a(e, t) {
            var s = e.getBoundingClientRect(),
              i = e.ownerDocument,
              n = i.documentElement,
              o = v(i);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (o.x = 0),
              t ? s.top + o.y - n.clientTop : s.left + o.x - n.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function u(e, t, s) {
            s > 0 &&
              (f(e, t),
              setTimeout(function () {
                m(e, t);
              }, s));
          }
          function p(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function d(e) {
            return Array.isArray(e) ? e : [e];
          }
          function h(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function f(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function S() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function b() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function y() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function E(e, t) {
            return 100 / (t - e);
          }
          function x(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function w(e, t) {
            return x(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function C(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function A(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function P(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var i = A(s, e),
              n = e[i - 1],
              o = e[i],
              r = t[i - 1],
              l = t[i];
            return r + w([n, o], s) / E(r, l);
          }
          function _(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var i = A(s, t),
              n = e[i - 1],
              o = e[i],
              r = t[i - 1];
            return C([n, o], (s - r) * E(r, t[i]));
          }
          function O(e, t, s, i) {
            if (100 === i) return i;
            var n = A(i, e),
              o = e[n - 1],
              r = e[n];
            return s
              ? i - o > (r - o) / 2
                ? r
                : o
              : t[n - 1]
              ? e[n - 1] + l(i - e[n - 1], t[n - 1])
              : i;
          }
          var L, k;
          (e.PipsMode = void 0),
            ((k = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (k.Steps = "steps"),
            (k.Positions = "positions"),
            (k.Count = "count"),
            (k.Values = "values"),
            (e.PipsType = void 0),
            ((L = e.PipsType || (e.PipsType = {}))[(L.None = -1)] = "None"),
            (L[(L.NoValue = 0)] = "NoValue"),
            (L[(L.LargeValue = 1)] = "LargeValue"),
            (L[(L.SmallValue = 2)] = "SmallValue");
          var T = (function () {
              function e(e, t, s) {
                var i;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var n = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    n.push([d(e[t]), t]);
                  }),
                    n.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    i = 0;
                  i < n.length;
                  i++
                )
                  this.handleEntryPoint(n[i][1], n[i][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), i = 0;
                  i < this.xNumSteps.length;
                  i++
                )
                  this.handleStepPoint(i, this.xNumSteps[i]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = x(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var i,
                    n = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[n + 1]; ) n++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (n = this.xPct.length - 2);
                  s || e !== this.xPct[n + 1] || n++, null === t && (t = []);
                  var o = 1,
                    r = t[n],
                    l = 0,
                    a = 0,
                    c = 0,
                    u = 0;
                  for (
                    i = s
                      ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
                      : (this.xPct[n + 1] - e) /
                        (this.xPct[n + 1] - this.xPct[n]);
                    r > 0;

                  )
                    (l = this.xPct[n + 1 + u] - this.xPct[n + u]),
                      t[n + u] * o + 100 - 100 * i > 100
                        ? ((a = l * i), (o = (r - 100 * i) / t[n + u]), (i = 1))
                        : ((a = ((t[n + u] * l) / 100) * o), (o = 0)),
                      s
                        ? ((c -= a), this.xPct.length + u >= 1 && u--)
                        : ((c += a), this.xPct.length - u >= 1 && u++),
                      (r = t[n + u] * o);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = P(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return _(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = O(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var i = A(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[i - 1])) &&
                      (i = Math.max(i - 1, 1)),
                    (this.xVal[i] - this.xVal[i - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = A(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(h);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !c(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var i = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(i) && i)
                    : isNaN(i) || (this.xSteps[0] = i),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        x([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        E(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        i = Math.ceil(Number(s.toFixed(3)) - 1),
                        n = this.xVal[e] + this.xNumSteps[e] * i;
                      this.xHighestCompleteStep[e] = n;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            N = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            $ = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            V = { tooltips: ".__tooltips", aria: ".__aria" };
          function M(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function D(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function q(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function U(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function H(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new T(t, e.snap || !1, e.singleStep);
          }
          function B(e, t) {
            if (((t = d(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function j(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function F(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function I(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function z(e, t) {
            var s,
              i = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) i.push(t);
              i.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              i = t;
            }
            e.connect = i;
          }
          function R(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function X(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function W(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function Y(e, t) {
            var s;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var i = t[0] + t[1],
                n = e.spectrum.xVal[0];
              if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - n) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function Z(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              i = t.indexOf("drag") >= 0,
              n = t.indexOf("fixed") >= 0,
              o = t.indexOf("snap") >= 0,
              r = t.indexOf("hover") >= 0,
              l = t.indexOf("unconstrained") >= 0,
              a = t.indexOf("drag-all") >= 0;
            if (n) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              X(e, e.start[1] - e.start[0]);
            }
            if (l && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || o,
              drag: i,
              dragAll: a,
              fixed: n,
              snap: o,
              hover: r,
              unconstrained: l,
            };
          }
          function G(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var i = 0; i < e.handles; i++) e.tooltips.push(t);
              } else {
                if ((t = d(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function J(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function Q(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ie(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ne(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function oe(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: N,
                format: N,
              },
              s = {
                step: { r: !1, t: M },
                keyboardPageMultiplier: { r: !1, t: D },
                keyboardMultiplier: { r: !1, t: q },
                keyboardDefaultStep: { r: !1, t: U },
                start: { r: !0, t: B },
                connect: { r: !0, t: z },
                direction: { r: !0, t: Z },
                snap: { r: !1, t: j },
                animate: { r: !1, t: F },
                animationDuration: { r: !1, t: I },
                range: { r: !0, t: H },
                orientation: { r: !1, t: R },
                margin: { r: !1, t: X },
                limit: { r: !1, t: W },
                padding: { r: !1, t: Y },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: Q },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: G },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ie },
                cssClasses: { r: !0, t: ne },
                handleAttributes: { r: !1, t: J },
              },
              i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: $,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (o) {
                if (n(e[o]) || void 0 !== i[o])
                  s[o].t(t, n(e[o]) ? e[o] : i[o]);
                else if (s[o].r)
                  throw new Error("noUiSlider: '" + o + "' is required.");
              }),
              (t.pips = e.pips);
            var o = document.createElement("div"),
              r = void 0 !== o.style.msTransform,
              l = void 0 !== o.style.transform;
            t.transformRule = l
              ? "transform"
              : r
              ? "msTransform"
              : "webkitTransform";
            var a = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = a[t.dir][t.ort]), t;
          }
          function re(t, s, l) {
            var c,
              h,
              E,
              x,
              w,
              C = S(),
              A = y() && b(),
              P = t,
              _ = s.spectrum,
              O = [],
              L = [],
              k = [],
              T = 0,
              N = {},
              $ = t.ownerDocument,
              M = s.documentElement || $.documentElement,
              D = $.body,
              q = "rtl" === $.dir || 1 === s.ort ? 0 : 100;
            function U(e, t) {
              var s = $.createElement("div");
              return t && f(s, t), e.appendChild(s), s;
            }
            function H(e, t) {
              var i = U(e, s.cssClasses.origin),
                n = U(i, s.cssClasses.handle);
              if (
                (U(n, s.cssClasses.touchArea),
                n.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (n.setAttribute("tabindex", "0"),
                  n.addEventListener("keydown", function (e) {
                    return he(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var o = s.handleAttributes[t];
                Object.keys(o).forEach(function (e) {
                  n.setAttribute(e, o[e]);
                });
              }
              return (
                n.setAttribute("role", "slider"),
                n.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? f(n, s.cssClasses.handleLower)
                  : t === s.handles - 1 && f(n, s.cssClasses.handleUpper),
                i
              );
            }
            function B(e, t) {
              return !!t && U(e, s.cssClasses.connect);
            }
            function j(e, t) {
              var i = U(t, s.cssClasses.connects);
              (h = []), (E = []).push(B(i, e[0]));
              for (var n = 0; n < s.handles; n++)
                h.push(H(t, n)), (k[n] = n), E.push(B(i, e[n + 1]));
            }
            function F(e) {
              return (
                f(e, s.cssClasses.target),
                0 === s.dir ? f(e, s.cssClasses.ltr) : f(e, s.cssClasses.rtl),
                0 === s.ort
                  ? f(e, s.cssClasses.horizontal)
                  : f(e, s.cssClasses.vertical),
                f(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                U(e, s.cssClasses.base)
              );
            }
            function I(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                U(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function z() {
              return P.hasAttribute("disabled");
            }
            function R(e) {
              return h[e].hasAttribute("disabled");
            }
            function X() {
              w &&
                (ve("update" + V.tooltips),
                w.forEach(function (e) {
                  e && i(e);
                }),
                (w = null));
            }
            function W() {
              X(),
                (w = h.map(I)),
                me("update" + V.tooltips, function (e, t, i) {
                  if (w && s.tooltips && !1 !== w[t]) {
                    var n = e[t];
                    !0 !== s.tooltips[t] && (n = s.tooltips[t].to(i[t])),
                      (w[t].innerHTML = n);
                  }
                });
            }
            function Y() {
              ve("update" + V.aria),
                me("update" + V.aria, function (e, t, i, n, o) {
                  k.forEach(function (e) {
                    var t = h[e],
                      n = be(L, e, 0, !0, !0, !0),
                      r = be(L, e, 100, !0, !0, !0),
                      l = o[e],
                      a = String(s.ariaFormat.to(i[e]));
                    (n = _.fromStepping(n).toFixed(1)),
                      (r = _.fromStepping(r).toFixed(1)),
                      (l = _.fromStepping(l).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", n),
                      t.children[0].setAttribute("aria-valuemax", r),
                      t.children[0].setAttribute("aria-valuenow", l),
                      t.children[0].setAttribute("aria-valuetext", a);
                  });
                });
            }
            function Z(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return _.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, i = 100 / s, n = []; s--; )
                  n[s] = s * i;
                return n.push(100), K(n, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? K(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return _.fromStepping(_.getStep(_.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function K(e, t) {
              return e.map(function (e) {
                return _.fromStepping(t ? _.getStep(e) : e);
              });
            }
            function G(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var i = Z(t),
                n = {},
                o = _.xVal[0],
                l = _.xVal[_.xVal.length - 1],
                a = !1,
                c = !1,
                u = 0;
              return (
                (i = r(
                  i.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== o && (i.unshift(o), (a = !0)),
                i[i.length - 1] !== l && (i.push(l), (c = !0)),
                i.forEach(function (o, r) {
                  var l,
                    p,
                    d,
                    h,
                    f,
                    m,
                    g,
                    v,
                    S,
                    b,
                    y = o,
                    E = i[r + 1],
                    x = t.mode === e.PipsMode.Steps;
                  for (
                    x && (l = _.xNumSteps[r]),
                      l || (l = E - y),
                      void 0 === E && (E = y),
                      l = Math.max(l, 1e-7),
                      p = y;
                    p <= E;
                    p = s(p, l)
                  ) {
                    for (
                      v = (f = (h = _.toStepping(p)) - u) / (t.density || 1),
                        b = f / (S = Math.round(v)),
                        d = 1;
                      d <= S;
                      d += 1
                    )
                      n[(m = u + d * b).toFixed(5)] = [_.fromStepping(m), 0];
                    (g =
                      i.indexOf(p) > -1
                        ? e.PipsType.LargeValue
                        : x
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !r && a && p !== E && (g = 0),
                      (p === E && c) || (n[h.toFixed(5)] = [p, g]),
                      (u = h);
                  }
                }),
                n
              );
            }
            function J(t, i, n) {
              var o,
                r,
                l = $.createElement("div"),
                a =
                  (((o = {})[e.PipsType.None] = ""),
                  (o[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (o[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (o[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  o),
                c =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  r),
                u = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                p = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function d(e, t) {
                var i = t === s.cssClasses.value,
                  n = i ? a : c;
                return t + " " + (i ? u : p)[s.ort] + " " + n[e];
              }
              function h(t, o, r) {
                if ((r = i ? i(o, r) : r) !== e.PipsType.None) {
                  var a = U(l, !1);
                  (a.className = d(r, s.cssClasses.marker)),
                    (a.style[s.style] = t + "%"),
                    r > e.PipsType.NoValue &&
                      (((a = U(l, !1)).className = d(r, s.cssClasses.value)),
                      a.setAttribute("data-value", String(o)),
                      (a.style[s.style] = t + "%"),
                      (a.innerHTML = String(n.to(o))));
                }
              }
              return (
                f(l, s.cssClasses.pips),
                f(
                  l,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  h(e, t[e][0], t[e][1]);
                }),
                l
              );
            }
            function Q() {
              x && (i(x), (x = null));
            }
            function ee(e) {
              Q();
              var t = G(e),
                s = e.filter,
                i = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (x = P.appendChild(J(t, s, i)));
            }
            function te() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || c[t] : e.height || c[t];
            }
            function se(e, t, i, n) {
              var o = function (o) {
                  var r = ie(o, n.pageOffset, n.target || t);
                  return (
                    !!r &&
                    !(z() && !n.doNotReject) &&
                    !(g(P, s.cssClasses.tap) && !n.doNotReject) &&
                    !(e === C.start && void 0 !== r.buttons && r.buttons > 1) &&
                    (!n.hover || !r.buttons) &&
                    (A || r.preventDefault(),
                    (r.calcPoint = r.points[s.ort]),
                    void i(r, n))
                  );
                },
                r = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, o, !!A && { passive: !0 }),
                    r.push([e, o]);
                }),
                r
              );
            }
            function ie(e, t, s) {
              var i = 0 === e.type.indexOf("touch"),
                n = 0 === e.type.indexOf("mouse"),
                o = 0 === e.type.indexOf("pointer"),
                r = 0,
                l = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (o = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (i) {
                var a = function (t) {
                  var i = t.target;
                  return (
                    i === s ||
                    s.contains(i) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, a);
                  if (c.length > 1) return !1;
                  (r = c[0].pageX), (l = c[0].pageY);
                } else {
                  var u = Array.prototype.find.call(e.changedTouches, a);
                  if (!u) return !1;
                  (r = u.pageX), (l = u.pageY);
                }
              }
              return (
                (t = t || v($)),
                (n || o) && ((r = e.clientX + t.x), (l = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [r, l]),
                (e.cursor = n || o),
                e
              );
            }
            function ne(e) {
              var t = (100 * (e - a(c, s.ort))) / te();
              return (t = p(t)), s.dir ? 100 - t : t;
            }
            function re(e) {
              var t = 100,
                s = !1;
              return (
                h.forEach(function (i, n) {
                  if (!R(n)) {
                    var o = L[n],
                      r = Math.abs(o - e);
                    (r < t || (r <= t && e > o) || (100 === r && 100 === t)) &&
                      ((s = n), (t = r));
                  }
                }),
                s
              );
            }
            function le(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ce(e, t);
            }
            function ae(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ce(e, t);
              var i = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              Ee(
                i > 0,
                (100 * i) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ce(e, t) {
              t.handle && (m(t.handle, s.cssClasses.active), (T -= 1)),
                t.listeners.forEach(function (e) {
                  M.removeEventListener(e[0], e[1]);
                }),
                0 === T &&
                  (m(P, s.cssClasses.drag),
                  Ce(),
                  e.cursor &&
                    ((D.style.cursor = ""),
                    D.removeEventListener("selectstart", o))),
                t.handleNumbers.forEach(function (e) {
                  Se("change", e), Se("set", e), Se("end", e);
                });
            }
            function ue(e, t) {
              if (!t.handleNumbers.some(R)) {
                var i;
                1 === t.handleNumbers.length &&
                  ((i = h[t.handleNumbers[0]].children[0]),
                  (T += 1),
                  f(i, s.cssClasses.active)),
                  e.stopPropagation();
                var n = [],
                  r = se(C.move, M, ae, {
                    target: e.target,
                    handle: i,
                    connect: t.connect,
                    listeners: n,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: L.slice(),
                  }),
                  l = se(C.end, M, ce, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  a = se("mouseout", M, le, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                n.push.apply(n, r.concat(l, a)),
                  e.cursor &&
                    ((D.style.cursor = getComputedStyle(e.target).cursor),
                    h.length > 1 && f(P, s.cssClasses.drag),
                    D.addEventListener("selectstart", o, !1)),
                  t.handleNumbers.forEach(function (e) {
                    Se("start", e);
                  });
              }
            }
            function pe(e) {
              e.stopPropagation();
              var t = ne(e.calcPoint),
                i = re(t);
              !1 !== i &&
                (s.events.snap || u(P, s.cssClasses.tap, s.animationDuration),
                Ae(i, t, !0, !0),
                Ce(),
                Se("slide", i, !0),
                Se("update", i, !0),
                s.events.snap
                  ? ue(e, { handleNumbers: [i] })
                  : (Se("change", i, !0), Se("set", i, !0)));
            }
            function de(e) {
              var t = ne(e.calcPoint),
                s = _.getStep(t),
                i = _.fromStepping(s);
              Object.keys(N).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  N[e].forEach(function (e) {
                    e.call(qe, i);
                  });
              });
            }
            function he(e, t) {
              if (z() || R(t)) return !1;
              var i = ["Left", "Right"],
                n = ["Down", "Up"],
                o = ["PageDown", "PageUp"],
                r = ["Home", "End"];
              s.dir && !s.ort
                ? i.reverse()
                : s.ort && !s.dir && (n.reverse(), o.reverse());
              var l,
                a = e.key.replace("Arrow", ""),
                c = a === o[0],
                u = a === o[1],
                p = a === n[0] || a === i[0] || c,
                d = a === n[1] || a === i[1] || u,
                h = a === r[0],
                f = a === r[1];
              if (!(p || d || h || f)) return !0;
              if ((e.preventDefault(), d || p)) {
                var m = p ? 0 : 1,
                  g = $e(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = _.getDefaultStep(L[t], p, s.keyboardDefaultStep)),
                  (g *=
                    u || c ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= p ? -1 : 1),
                  (l = O[t] + g);
              } else
                l = f
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                Ae(t, _.toStepping(l), !0, !0),
                Se("slide", t),
                Se("update", t),
                Se("change", t),
                Se("set", t),
                !1
              );
            }
            function fe(e) {
              e.fixed ||
                h.forEach(function (e, t) {
                  se(C.start, e.children[0], ue, { handleNumbers: [t] });
                }),
                e.tap && se(C.start, c, pe, {}),
                e.hover && se(C.move, c, de, { hover: !0 }),
                e.drag &&
                  E.forEach(function (t, i) {
                    if (!1 !== t && 0 !== i && i !== E.length - 1) {
                      var n = h[i - 1],
                        o = h[i],
                        r = [t],
                        l = [n, o],
                        a = [i - 1, i];
                      f(t, s.cssClasses.draggable),
                        e.fixed &&
                          (r.push(n.children[0]), r.push(o.children[0])),
                        e.dragAll && ((l = h), (a = k)),
                        r.forEach(function (e) {
                          se(C.start, e, ue, {
                            handles: l,
                            handleNumbers: a,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function me(e, t) {
              (N[e] = N[e] || []),
                N[e].push(t),
                "update" === e.split(".")[0] &&
                  h.forEach(function (e, t) {
                    Se("update", t);
                  });
            }
            function ge(e) {
              return e === V.aria || e === V.tooltips;
            }
            function ve(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(N).forEach(function (e) {
                var i = e.split(".")[0],
                  n = e.substring(i.length);
                (t && t !== i) ||
                  (s && s !== n) ||
                  (ge(n) && s !== n) ||
                  delete N[e];
              });
            }
            function Se(e, t, i) {
              Object.keys(N).forEach(function (n) {
                var o = n.split(".")[0];
                e === o &&
                  N[n].forEach(function (e) {
                    e.call(
                      qe,
                      O.map(s.format.to),
                      t,
                      O.slice(),
                      i || !1,
                      L.slice(),
                      qe
                    );
                  });
              });
            }
            function be(e, t, i, n, o, r) {
              var l;
              return (
                h.length > 1 &&
                  !s.events.unconstrained &&
                  (n &&
                    t > 0 &&
                    ((l = _.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (i = Math.max(i, l))),
                  o &&
                    t < h.length - 1 &&
                    ((l = _.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (i = Math.min(i, l)))),
                h.length > 1 &&
                  s.limit &&
                  (n &&
                    t > 0 &&
                    ((l = _.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (i = Math.min(i, l))),
                  o &&
                    t < h.length - 1 &&
                    ((l = _.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (i = Math.max(i, l)))),
                s.padding &&
                  (0 === t &&
                    ((l = _.getAbsoluteDistance(0, s.padding[0], !1)),
                    (i = Math.max(i, l))),
                  t === h.length - 1 &&
                    ((l = _.getAbsoluteDistance(100, s.padding[1], !0)),
                    (i = Math.min(i, l)))),
                !((i = p((i = _.getStep(i)))) === e[t] && !r) && i
              );
            }
            function ye(e, t) {
              var i = s.ort;
              return (i ? t : e) + ", " + (i ? e : t);
            }
            function Ee(e, t, s, i, n) {
              var o = s.slice(),
                r = i[0],
                l = [!e, e],
                a = [e, !e];
              (i = i.slice()),
                e && i.reverse(),
                i.length > 1
                  ? i.forEach(function (e, s) {
                      var i = be(o, e, o[e] + t, l[s], a[s], !1);
                      !1 === i ? (t = 0) : ((t = i - o[e]), (o[e] = i));
                    })
                  : (l = a = [!0]);
              var c = !1;
              i.forEach(function (e, i) {
                c = Ae(e, s[e] + t, l[i], a[i]) || c;
              }),
                c &&
                  (i.forEach(function (e) {
                    Se("update", e), Se("slide", e);
                  }),
                  null != n && Se("drag", r));
            }
            function xe(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function we(e, t) {
              (L[e] = t), (O[e] = _.fromStepping(t));
              var i = "translate(" + ye(xe(t, 0) - q + "%", "0") + ")";
              (h[e].style[s.transformRule] = i), Pe(e), Pe(e + 1);
            }
            function Ce() {
              k.forEach(function (e) {
                var t = L[e] > 50 ? -1 : 1,
                  s = 3 + (h.length + t * e);
                h[e].style.zIndex = String(s);
              });
            }
            function Ae(e, t, s, i, n) {
              return (
                n || (t = be(L, e, t, s, i, !1)), !1 !== t && (we(e, t), !0)
              );
            }
            function Pe(e) {
              if (E[e]) {
                var t = 0,
                  i = 100;
                0 !== e && (t = L[e - 1]), e !== E.length - 1 && (i = L[e]);
                var n = i - t,
                  o = "translate(" + ye(xe(t, n) + "%", "0") + ")",
                  r = "scale(" + ye(n / 100, "1") + ")";
                E[e].style[s.transformRule] = o + " " + r;
              }
            }
            function _e(e, t) {
              return null === e || !1 === e || void 0 === e
                ? L[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = _.toStepping(e)),
                  !1 === e || isNaN(e) ? L[t] : e);
            }
            function Oe(e, t, i) {
              var n = d(e),
                o = void 0 === L[0];
              (t = void 0 === t || t),
                s.animate && !o && u(P, s.cssClasses.tap, s.animationDuration),
                k.forEach(function (e) {
                  Ae(e, _e(n[e], e), !0, !1, i);
                });
              var r = 1 === k.length ? 0 : 1;
              if (o && _.hasNoSize() && ((i = !0), (L[0] = 0), k.length > 1)) {
                var l = 100 / (k.length - 1);
                k.forEach(function (e) {
                  L[e] = e * l;
                });
              }
              for (; r < k.length; ++r)
                k.forEach(function (e) {
                  Ae(e, L[e], !0, !0, i);
                });
              Ce(),
                k.forEach(function (e) {
                  Se("update", e), null !== n[e] && t && Se("set", e);
                });
            }
            function Le(e) {
              Oe(s.start, e);
            }
            function ke(e, t, s, i) {
              if (!((e = Number(e)) >= 0 && e < k.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Ae(e, _e(t, e), !0, !0, i), Se("update", e), s && Se("set", e);
            }
            function Te(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === O.length ? O[0] : O.slice(0);
              var t = O.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Ne() {
              for (
                ve(V.aria),
                  ve(V.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    m(P, s.cssClasses[e]);
                  });
                P.firstChild;

              )
                P.removeChild(P.firstChild);
              delete P.noUiSlider;
            }
            function $e(e) {
              var t = L[e],
                i = _.getNearbySteps(t),
                n = O[e],
                o = i.thisStep.step,
                r = null;
              if (s.snap)
                return [
                  n - i.stepBefore.startValue || null,
                  i.stepAfter.startValue - n || null,
                ];
              !1 !== o &&
                n + o > i.stepAfter.startValue &&
                (o = i.stepAfter.startValue - n),
                (r =
                  n > i.thisStep.startValue
                    ? i.thisStep.step
                    : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                100 === t ? (o = null) : 0 === t && (r = null);
              var l = _.countStepDecimals();
              return (
                null !== o && !1 !== o && (o = Number(o.toFixed(l))),
                null !== r && !1 !== r && (r = Number(r.toFixed(l))),
                [r, o]
              );
            }
            function Ve() {
              return k.map($e);
            }
            function Me(e, t) {
              var i = Te(),
                o = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              o.forEach(function (t) {
                void 0 !== e[t] && (l[t] = e[t]);
              });
              var r = oe(l);
              o.forEach(function (t) {
                void 0 !== e[t] && (s[t] = r[t]);
              }),
                (_ = r.spectrum),
                (s.margin = r.margin),
                (s.limit = r.limit),
                (s.padding = r.padding),
                s.pips ? ee(s.pips) : Q(),
                s.tooltips ? W() : X(),
                (L = []),
                Oe(n(e.start) ? e.start : i, t);
            }
            function De() {
              (c = F(P)),
                j(s.connect, c),
                fe(s.events),
                Oe(s.start),
                s.pips && ee(s.pips),
                s.tooltips && W(),
                Y();
            }
            De();
            var qe = {
              destroy: Ne,
              steps: Ve,
              on: me,
              off: ve,
              get: Te,
              set: Oe,
              setHandle: ke,
              reset: Le,
              __moveHandles: function (e, t, s) {
                Ee(e, t, L, s);
              },
              options: l,
              updateOptions: Me,
              target: P,
              removePips: Q,
              removeTooltips: X,
              getPositions: function () {
                return L.slice();
              },
              getTooltips: function () {
                return w;
              },
              getOrigins: function () {
                return h;
              },
              pips: ee,
            };
            return qe;
          }
          function le(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = re(e, oe(t), t);
            return (e.noUiSlider = s), s;
          }
          var ae = { __spectrum: T, cssClasses: $, create: le };
          (e.create = le),
            (e.cssClasses = $),
            (e.default = ae),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var o = (t[i] = { exports: {} });
    return e[i].call(o.exports, o, o.exports, s), o.exports;
  }
  (() => {
    "use strict";
    const e = {};
    let t = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide"),
              document.dispatchEvent(
                new CustomEvent("slideUpDone", { detail: { target: e } })
              );
          }, t));
      },
      i = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide"),
                document.dispatchEvent(
                  new CustomEvent("slideDownDone", { detail: { target: e } })
                );
            }, t);
        }
      },
      n = (e, s = 500) => (e.hidden ? i(e, s) : t(e, s)),
      o = !0,
      r = (e = 500) => {
        document.documentElement.classList.contains("lock") ? l(e) : a(e);
      },
      l = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      a = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function c(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function u(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                o = s[2],
                r = window.matchMedia(s[0]),
                l = e.filter(function (e) {
                  if (e.value === i && e.type === o) return !0;
                });
              n.push({ itemsArray: l, matchMedia: r });
            }),
            n
          );
      }
    }
    e.popup = new (class {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : r(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            o &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              r(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && c(`[Попапос]: ${e}`);
      }
    })({});
    let p = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let s = t.querySelectorAll("input,textarea");
            for (let e = 0; e < s.length; e++) {
              const t = s[e];
              t.parentElement.classList.remove("_form-focus"),
                t.classList.remove("_form-focus"),
                p.removeError(t);
            }
            let i = t.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let e = 0; e < i.length; e++) {
                i[e].checked = !1;
              }
            if (e.select) {
              let s = t.querySelectorAll(".select");
              if (s.length)
                for (let t = 0; t < s.length; t++) {
                  const i = s[t].querySelector("select");
                  e.select.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    e.select = new (class {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          n(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          o = !!e.dataset.href && e.dataset.href,
          r = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let l = "";
        return (
          (l += o
            ? `<a ${r} ${i} href="${o}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (l += this.getSelectElementContent(e)),
          (l += o ? "</a>" : "</button>"),
          l
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && p.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && c(`[select]: ${e}`);
      }
    })({});
    var d,
      h = s(211);
    (d = function () {
      var e = [
        "decimals",
        "thousand",
        "mark",
        "prefix",
        "suffix",
        "encoder",
        "decoder",
        "negativeBefore",
        "negative",
        "edit",
        "undo",
      ];
      function t(e) {
        return e.split("").reverse().join("");
      }
      function s(e, t) {
        return e.substring(0, t.length) === t;
      }
      function i(e, t, s) {
        if ((e[t] || e[s]) && e[t] === e[s]) throw new Error(t);
      }
      function n(e) {
        return "number" == typeof e && isFinite(e);
      }
      function o(e, s, i, o, r, l, a, c, u, p, d, h) {
        var f,
          m,
          g,
          v = h,
          S = "",
          b = "";
        return (
          l && (h = l(h)),
          !!n(h) &&
            (!1 !== e && 0 === parseFloat(h.toFixed(e)) && (h = 0),
            h < 0 && ((f = !0), (h = Math.abs(h))),
            !1 !== e &&
              (h = (function (e, t) {
                return (
                  (e = e.toString().split("e")),
                  (+(
                    (e = (e = Math.round(
                      +(e[0] + "e" + (e[1] ? +e[1] + t : t))
                    ))
                      .toString()
                      .split("e"))[0] +
                    "e" +
                    (e[1] ? e[1] - t : -t)
                  )).toFixed(t)
                );
              })(h, e)),
            -1 !== (h = h.toString()).indexOf(".")
              ? ((g = (m = h.split("."))[0]), i && (S = i + m[1]))
              : (g = h),
            s && (g = t((g = t(g).match(/.{1,3}/g)).join(t(s)))),
            f && c && (b += c),
            o && (b += o),
            f && u && (b += u),
            (b += g),
            (b += S),
            r && (b += r),
            p && (b = p(b, v)),
            b)
        );
      }
      function r(e, t, i, o, r, l, a, c, u, p, d, h) {
        var f,
          m = "";
        return (
          d && (h = d(h)),
          !(!h || "string" != typeof h) &&
            (c && s(h, c) && ((h = h.replace(c, "")), (f = !0)),
            o && s(h, o) && (h = h.replace(o, "")),
            u && s(h, u) && ((h = h.replace(u, "")), (f = !0)),
            r &&
              (function (e, t) {
                return e.slice(-1 * t.length) === t;
              })(h, r) &&
              (h = h.slice(0, -1 * r.length)),
            t && (h = h.split(t).join("")),
            i && (h = h.replace(i, ".")),
            f && (m += "-"),
            "" !== (m = (m += h).replace(/[^0-9\.\-.]/g, "")) &&
              ((m = Number(m)), a && (m = a(m)), !!n(m) && m))
        );
      }
      function l(t, s, i) {
        var n,
          o = [];
        for (n = 0; n < e.length; n += 1) o.push(t[e[n]]);
        return o.push(i), s.apply("", o);
      }
      return function t(s) {
        if (!(this instanceof t)) return new t(s);
        "object" == typeof s &&
          ((s = (function (t) {
            var s,
              n,
              o,
              r = {};
            for (
              void 0 === t.suffix && (t.suffix = t.postfix), s = 0;
              s < e.length;
              s += 1
            )
              if (void 0 === (o = t[(n = e[s])]))
                "negative" !== n || r.negativeBefore
                  ? "mark" === n && "." !== r.thousand
                    ? (r[n] = ".")
                    : (r[n] = !1)
                  : (r[n] = "-");
              else if ("decimals" === n) {
                if (!(0 <= o && o < 8)) throw new Error(n);
                r[n] = o;
              } else if (
                "encoder" === n ||
                "decoder" === n ||
                "edit" === n ||
                "undo" === n
              ) {
                if ("function" != typeof o) throw new Error(n);
                r[n] = o;
              } else {
                if ("string" != typeof o) throw new Error(n);
                r[n] = o;
              }
            return (
              i(r, "mark", "thousand"),
              i(r, "prefix", "negative"),
              i(r, "prefix", "negativeBefore"),
              r
            );
          })(s)),
          (this.to = function (e) {
            return l(s, o, e);
          }),
          (this.from = function (e) {
            return l(s, r, e);
          }));
      };
    }),
      "function" == typeof define && define.amd
        ? define([], d)
        : "object" == typeof exports
        ? (module.exports = d())
        : (window.wNumb = d()),
      (function () {
        const e = document.querySelector("#range");
        if (e) {
          h.create(e, {
            start: 10500,
            connect: [!0, !1],
            format: wNumb({ decimals: 0, thousand: "," }),
            range: { min: [0], max: [2e5] },
          });
          let t = document.getElementById("slider-range-value");
          e.noUiSlider.on("update", function (e, s) {
            t.innerHTML = e[s];
          });
        }
      })();
    let f = !1;
    if (
      (setTimeout(() => {
        if (f) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0),
      document.querySelector("#slider-range-value"))
    ) {
      const e = 5e3,
        t = 100;
      function s(s, i) {
        let n = document.querySelector("#" + i),
          o = 0,
          r = wNumb({ decimals: 0, thousand: "," }),
          l = Math.round(e / (s / t)),
          a = setInterval(() => {
            (o += t), o == s && clearInterval(a), (n.innerHTML = r.to(o));
          }, l);
      }
      s(10500, "slider-range-value");
    }
    const m = document.querySelector(".popup-filter__apply"),
      g = m.querySelector(".popup-filter__close"),
      v = document.querySelector(".apply-btn"),
      S = document.querySelector(".filter-name__popup"),
      b = S.querySelector(".filter-name__close"),
      y = document.querySelector(".filter__btn"),
      E = (e, t, s) => {
        t.addEventListener("click", () => {
          e.classList.toggle("_active");
        }),
          s.addEventListener("click", () => {
            e.classList.remove("_active");
          });
      };
    E(m, v, g),
      E(S, y, b),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const s = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          s.length && o(s);
          let i = u(e, "spollers");
          function o(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    r(e),
                    e.addEventListener("click", l))
                  : (e.classList.remove("_spoller-init"),
                    r(e, !1),
                    e.removeEventListener("click", l));
            });
          }
          function r(e, t = !0) {
            let s = e.querySelectorAll("[data-spoller]");
            s.length &&
              ((s = Array.from(s).filter(
                (t) => t.closest("[data-spollers]") === e
              )),
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              }));
          }
          function l(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                i = s.closest("[data-spollers]"),
                o = i.hasAttribute("data-one-spoller"),
                r = i.dataset.spollersSpeed
                  ? parseInt(i.dataset.spollersSpeed)
                  : 500;
              i.querySelectorAll("._slide").length ||
                (o && !s.classList.contains("_spoller-active") && a(i),
                s.classList.toggle("_spoller-active"),
                n(s.nextElementSibling, r)),
                e.preventDefault();
            }
          }
          function a(e) {
            const s = e.querySelector("[data-spoller]._spoller-active"),
              i = e.dataset.spollersSpeed
                ? parseInt(e.dataset.spollersSpeed)
                : 500;
            s &&
              !e.querySelectorAll("._slide").length &&
              (s.classList.remove("_spoller-active"),
              t(s.nextElementSibling, i));
          }
          i &&
            i.length &&
            i.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                o(e.itemsArray, e.matchMedia);
              }),
                o(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              p.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && p.validateInput(t));
          });
      })();
  })();
})();
