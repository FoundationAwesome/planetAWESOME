/*!
 * jQuery JavaScript Library v1.8.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Tue Nov 13 2012 08:20:33 GMT-0500 (Eastern Standard Time)
 */

(function(e, t) {
    window.tOpts={}
    function _(e) {
        var t = M[e] = {};
        return v.each(e.split(y), function(e, n) {
            t[n] = !0
        }), t
    }

    function H(e, n, r) {
        if (r === t && e.nodeType === 1) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            r = e.getAttribute(i);
            if (typeof r == "string") {
                try {
                    r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r
                } catch (s) {}
                v.data(e, n, r)
            } else r = t
        }
        return r
    }

    function B(e) {
        var t;
        for (t in e) {
            if (t === "data" && v.isEmptyObject(e[t])) continue;
            if (t !== "toJSON") return !1
        }
        return !0
    }

    function et() {
        return !1
    }

    function tt() {
        return !0
    }

    function ut(e) {
        return !e || !e.parentNode || e.parentNode.nodeType === 11
    }

    function at(e, t) {
        do e = e[t]; while (e && e.nodeType !== 1);
        return e
    }

    function ft(e, t, n) {
        t = t || 0;
        if (v.isFunction(t)) return v.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return v.grep(e, function(e, r) {
            return e === t === n
        });
        if (typeof t == "string") {
            var r = v.grep(e, function(e) {
                return e.nodeType === 1
            });
            if (it.test(t)) return v.filter(t, r, !n);
            t = v.filter(t, r)
        }
        return v.grep(e, function(e, r) {
            return v.inArray(e, t) >= 0 === n
        })
    }

    function lt(e) {
        var t = ct.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            while (t.length) n.createElement(t.pop());
        return n
    }

    function Lt(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function At(e, t) {
        if (t.nodeType !== 1 || !v.hasData(e)) return;
        var n, r, i, s = v._data(e),
            o = v._data(t, s),
            u = s.events;
        if (u) {
            delete o.handle, o.events = {};
            for (n in u)
                for (r = 0, i = u[n].length; r < i; r++) v.event.add(t, n, u[n][r])
        }
        o.data && (o.data = v.extend({}, o.data))
    }

    function Ot(e, t) {
        var n;
        if (t.nodeType !== 1) return;
        t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), v.support.html5Clone && e.innerHTML && !v.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(v.expando)
    }

    function Mt(e) {
        return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : []
    }

    function _t(e) {
        Et.test(e.type) && (e.defaultChecked = e.checked)
    }

    function Qt(e, t) {
        if (t in e) return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1),
            r = t,
            i = Jt.length;
        while (i--) {
            t = Jt[i] + n;
            if (t in e) return t
        }
        return r
    }

    function Gt(e, t) {
        return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e)
    }

    function Yt(e, t) {
        var n, r, i = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            i[s] = v._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && Gt(n) && (i[s] = v._data(n, "olddisplay", nn(n.nodeName)))) : (r = Dt(n, "display"), !i[s] && r !== "none" && v._data(n, "olddisplay", r))
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) continue;
            if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none"
        }
        return e
    }

    function Zt(e, t, n) {
        var r = Rt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function en(e, t, n, r) {
        var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; i < 4; i += 2) n === "margin" && (s += v.css(e, n + $t[i], !0)), r ? (n === "content" && (s -= parseFloat(Dt(e, "padding" + $t[i])) || 0), n !== "margin" && (s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0)) : (s += parseFloat(Dt(e, "padding" + $t[i])) || 0, n !== "padding" && (s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0));
        return s
    }

    function tn(e, t, n) {
        var r = t === "width" ? e.offsetWidth : e.offsetHeight,
            i = !0,
            s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
        if (r <= 0 || r == null) {
            r = Dt(e, t);
            if (r < 0 || r == null) r = e.style[t];
            if (Ut.test(r)) return r;
            i = s && (v.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + en(e, t, n || (s ? "border" : "content"), i) + "px"
    }

    function nn(e) {
        if (Wt[e]) return Wt[e];
        var t = v("<" + e + ">").appendTo(i.body),
            n = t.css("display");
        t.remove();
        if (n === "none" || n === "") {
            Pt = i.body.appendChild(Pt || v.extend(i.createElement("iframe"), {
                frameBorder: 0,
                width: 0,
                height: 0
            }));
            if (!Ht || !Pt.createElement) Ht = (Pt.contentWindow || Pt.contentDocument).document, Ht.write("<!doctype html><html><body>"), Ht.close();
            t = Ht.body.appendChild(Ht.createElement(e)), n = Dt(t, "display"), i.body.removeChild(Pt)
        }
        return Wt[e] = n, n
    }

    function fn(e, t, n, r) {
        var i;
        if (v.isArray(t)) v.each(t, function(t, i) {
            n || sn.test(e) ? r(e, i) : fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r)
        });
        else if (!n && v.type(t) === "object")
            for (i in t) fn(e + "[" + i + "]", t[i], n, r);
        else r(e, t)
    }

    function Cn(e) {
        return function(t, n) {
            typeof t != "string" && (n = t, t = "*");
            var r, i, s, o = t.toLowerCase().split(y),
                u = 0,
                a = o.length;
            if (v.isFunction(n))
                for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n)
        }
    }

    function kn(e, n, r, i, s, o) {
        s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
        var u, a = e[s],
            f = 0,
            l = a ? a.length : 0,
            c = e === Sn;
        for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = kn(e, n, r, i, u, o)));
        return (c || !u) && !o["*"] && (u = kn(e, n, r, i, "*", o)), u
    }

    function Ln(e, n) {
        var r, i, s = v.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
        i && v.extend(!0, e, i)
    }

    function An(e, n, r) {
        var i, s, o, u, a = e.contents,
            f = e.dataTypes,
            l = e.responseFields;
        for (s in l) s in r && (n[l[s]] = r[s]);
        while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    f.unshift(s);
                    break
                }
        if (f[0] in r) o = f[0];
        else {
            for (s in r) {
                if (!f[0] || e.converters[s + " " + f[0]]) {
                    o = s;
                    break
                }
                u || (u = s)
            }
            o = o || u
        }
        if (o) return o !== f[0] && f.unshift(o), r[o]
    }

    function On(e, t) {
        var n, r, i, s, o = e.dataTypes.slice(),
            u = o[0],
            a = {},
            f = 0;
        e.dataFilter && (t = e.dataFilter(t, e.dataType));
        if (o[1])
            for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
        for (; i = o[++f];)
            if (i !== "*") {
                if (u !== "*" && u !== i) {
                    n = a[u + " " + i] || a["* " + i];
                    if (!n)
                        for (r in a) {
                            s = r.split(" ");
                            if (s[1] === i) {
                                n = a[u + " " + s[0]] || a["* " + s[0]];
                                if (n) {
                                    n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
                                    break
                                }
                            }
                        }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: n ? l : "No conversion from " + u + " to " + i
                            }
                        }
                }
                u = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function Fn() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function In() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function $n() {
        return setTimeout(function() {
            qn = t
        }, 0), qn = v.now()
    }

    function Jn(e, t) {
        v.each(t, function(t, n) {
            var r = (Vn[t] || []).concat(Vn["*"]),
                i = 0,
                s = r.length;
            for (; i < s; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function Kn(e, t, n) {
        var r, i = 0,
            s = 0,
            o = Xn.length,
            u = v.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                var t = qn || $n(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    r = n / f.duration || 0,
                    i = 1 - r,
                    s = 0,
                    o = f.tweens.length;
                for (; s < o; s++) f.tweens[s].run(i);
                return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), !1)
            },
            f = u.promise({
                elem: e,
                props: v.extend({}, t),
                opts: v.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: qn || $n(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n, r) {
                    var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    return f.tweens.push(i), i
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? f.tweens.length : 0;
                    for (; n < r; n++) f.tweens[n].run(1);
                    return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this
                }
            }),
            l = f.props;
        Qn(l, f.opts.specialEasing);
        for (; i < o; i++) {
            r = Xn[i].call(f, e, l, f.opts);
            if (r) return r
        }
        return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
            anim: f,
            queue: f.opts.queue,
            elem: e
        })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }

    function Qn(e, t) {
        var n, r, i, s, o;
        for (n in e) {
            r = v.camelCase(n), i = t[r], s = e[n], v.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = v.cssHooks[r];
            if (o && "expand" in o) {
                s = o.expand(s), delete e[r];
                for (n in s) n in e || (e[n] = s[n], t[n] = i)
            } else t[r] = i
        }
    }

    function Gn(e, t, n) {
        var r, i, s, o, u, a, f, l, c, h = this,
            p = e.style,
            d = {},
            m = [],
            g = e.nodeType && Gt(e);
        n.queue || (l = v._queueHooks(e, "fx"), l.unqueued == null && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, h.always(function() {
            h.always(function() {
                l.unqueued--, v.queue(e, "fx").length || l.empty.fire()
            })
        })), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], v.css(e, "display") === "inline" && v.css(e, "float") === "none" && (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline" ? p.display = "inline-block" : p.zoom = 1)), n.overflow && (p.overflow = "hidden", v.support.shrinkWrapBlocks || h.done(function() {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t) {
            s = t[r];
            if (Un.exec(s)) {
                delete t[r], a = a || s === "toggle";
                if (s === (g ? "hide" : "show")) continue;
                m.push(r)
            }
        }
        o = m.length;
        if (o) {
            u = v._data(e, "fxshow") || v._data(e, "fxshow", {}), "hidden" in u && (g = u.hidden), a && (u.hidden = !g), g ? v(e).show() : h.done(function() {
                v(e).hide()
            }), h.done(function() {
                var t;
                v.removeData(e, "fxshow", !0);
                for (t in d) v.style(e, t, d[t])
            });
            for (r = 0; r < o; r++) i = m[r], f = h.createTween(i, g ? u[i] : 0), d[i] = u[i] || v.style(e, i), i in u || (u[i] = f.start, g && (f.end = f.start, f.start = i === "width" || i === "height" ? 1 : 0))
        }
    }

    function Yn(e, t, n, r, i) {
        return new Yn.prototype.init(e, t, n, r, i)
    }

    function Zn(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) n = $t[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function tr(e) {
        return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1
    }
    var n, r, i = e.document,
        s = e.location,
        o = e.navigator,
        u = e.jQuery,
        a = e.$,
        f = Array.prototype.push,
        l = Array.prototype.slice,
        c = Array.prototype.indexOf,
        h = Object.prototype.toString,
        p = Object.prototype.hasOwnProperty,
        d = String.prototype.trim,
        v = function(e, t) {
            return new v.fn.init(e, t, n)
        },
        m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        g = /\S/,
        y = /\s+/,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        S = /^[\],:{}\s]*$/,
        x = /(?:^|:|,)(?:\s*\[)+/g,
        T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        C = /^-ms-/,
        k = /-([\da-z])/gi,
        L = function(e, t) {
            return (t + "").toUpperCase()
        },
        A = function() {
            i.addEventListener ? (i.removeEventListener("DOMContentLoaded", A, !1), v.ready()) : i.readyState === "complete" && (i.detachEvent("onreadystatechange", A), v.ready())
        },
        O = {};
    v.fn = v.prototype = {
        constructor: v,
        init: function(e, n, r) {
            var s, o, u, a;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if (typeof e == "string") {
                e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? s = [null, e, null] : s = w.exec(e);
                if (s && (s[1] || !n)) {
                    if (s[1]) return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i, e = v.parseHTML(s[1], a, !0), E.test(s[1]) && v.isPlainObject(n) && this.attr.call(e, n, !0), v.merge(this, e);
                    o = i.getElementById(s[2]);
                    if (o && o.parentNode) {
                        if (o.id !== s[2]) return r.find(e);
                        this.length = 1, this[0] = o
                    }
                    return this.context = i, this.selector = e, this
                }
                return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e)
            }
            return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return l.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = v.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function(e, t) {
            return v.each(this, e, t)
        },
        ready: function(e) {
            return v.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(v.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: [].sort,
        splice: [].splice
    }, v.fn.init.prototype = v.fn, v.extend = v.fn.extend = function() {
        var e, n, r, i, s, o, u = arguments[0] || {},
            a = 1,
            f = arguments.length,
            l = !1;
        typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !v.isFunction(u) && (u = {}), f === a && (u = this, --a);
        for (; a < f; a++)
            if ((e = arguments[a]) != null)
                for (n in e) {
                    r = u[n], i = e[n];
                    if (u === i) continue;
                    l && i && (v.isPlainObject(i) || (s = v.isArray(i))) ? (s ? (s = !1, o = r && v.isArray(r) ? r : []) : o = r && v.isPlainObject(r) ? r : {}, u[n] = v.extend(l, o, i)) : i !== t && (u[n] = i)
                }
            return u
    }, v.extend({
        noConflict: function(t) {
            return e.$ === v && (e.$ = a), t && e.jQuery === v && (e.jQuery = u), v
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? v.readyWait++ : v.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? --v.readyWait : v.isReady) return;
            if (!i.body) return setTimeout(v.ready, 1);
            v.isReady = !0;
            if (e !== !0 && --v.readyWait > 0) return;
            r.resolveWith(i, [v]), v.fn.trigger && v(i).trigger("ready").off("ready")
        },
        isFunction: function(e) {
            return v.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return v.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return e == null ? String(e) : O[h.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || v.type(e) !== "object" || e.nodeType || v.isWindow(e)) return !1;
            try {
                if (e.constructor && !p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || p.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)))
        },
        parseJSON: function(t) {
            if (!t || typeof t != "string") return null;
            t = v.trim(t);
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
            if (S.test(t.replace(T, "@").replace(N, "]").replace(x, ""))) return (new Function("return " + t))();
            v.error("Invalid JSON: " + t)
        },
        parseXML: function(n) {
            var r, i;
            if (!n || typeof n != "string") return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (s) {
                r = t
            }
            return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && v.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && g.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(C, "ms-").replace(k, L)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, n, r) {
            var i, s = 0,
                o = e.length,
                u = o === t || v.isFunction(e);
            if (r) {
                if (u) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1) break
                } else
                    for (; s < o;)
                        if (n.apply(e[s++], r) === !1) break
            } else if (u) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break
            } else
                for (; s < o;)
                    if (n.call(e[s], s, e[s++]) === !1) break; return e
        },
        trim: d && !d.call("﻿ ") ? function(e) {
            return e == null ? "" : d.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(b, "")
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return e != null && (n = v.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || v.isWindow(e) ? f.call(r, e) : v.merge(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (c) return c.call(t, e, n);
                r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
                for (; n < r; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                s = 0;
            if (typeof r == "number")
                for (; s < r; s++) e[i++] = n[s];
            else
                while (n[s] !== t) e[i++] = n[s++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                s = 0,
                o = e.length;
            n = !!n;
            for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
            return i
        },
        map: function(e, n, r) {
            var i, s, o = [],
                u = 0,
                a = e.length,
                f = e instanceof v || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || v.isArray(e));
            if (f)
                for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i);
            else
                for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
            return o.concat.apply([], o)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, s;
            return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
                return e.apply(n, i.concat(l.call(arguments)))
            }, s.guid = e.guid = e.guid || v.guid++, s) : t
        },
        access: function(e, n, r, i, s, o, u) {
            var a, f = r == null,
                l = 0,
                c = e.length;
            if (r && typeof r == "object") {
                for (l in r) v.access(e, n, l, r[l], 1, o, i);
                s = 1
            } else if (i !== t) {
                a = u === t && v.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
                    return a.call(v(e), n)
                }) : (n.call(e, i), n = null));
                if (n)
                    for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
                s = 1
            }
            return s ? e : f ? n.call(e) : c ? n(e[0], r) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), v.ready.promise = function(t) {
        if (!r) {
            r = v.Deferred();
            if (i.readyState === "complete") setTimeout(v.ready, 1);
            else if (i.addEventListener) i.addEventListener("DOMContentLoaded", A, !1), e.addEventListener("load", v.ready, !1);
            else {
                i.attachEvent("onreadystatechange", A), e.attachEvent("onload", v.ready);
                var n = !1;
                try {
                    n = e.frameElement == null && i.documentElement
                } catch (s) {}
                n && n.doScroll && function o() {
                    if (!v.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(o, 50)
                        }
                        v.ready()
                    }
                }()
            }
        }
        return r.promise(t)
    }, v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        O["[object " + t + "]"] = t.toLowerCase()
    }), n = v(i);
    var M = {};
    v.Callbacks = function(e) {
        e = typeof e == "string" ? M[e] || _(e) : v.extend({}, e);
        var n, r, i, s, o, u, a = [],
            f = !e.once && [],
            l = function(t) {
                n = e.memory && t, r = !0, u = s || 0, s = 0, o = a.length, i = !0;
                for (; a && u < o; u++)
                    if (a[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        n = !1;
                        break
                    }
                i = !1, a && (f ? f.length && l(f.shift()) : n ? a = [] : c.disable())
            },
            c = {
                add: function() {
                    if (a) {
                        var t = a.length;
                        (function r(t) {
                            v.each(t, function(t, n) {
                                var i = v.type(n);
                                i === "function" ? (!e.unique || !c.has(n)) && a.push(n) : n && n.length && i !== "string" && r(n)
                            })
                        })(arguments), i ? o = a.length : n && (s = t, l(n))
                    }
                    return this
                },
                remove: function() {
                    return a && v.each(arguments, function(e, t) {
                        var n;
                        while ((n = v.inArray(t, a, n)) > -1) a.splice(n, 1), i && (n <= o && o--, n <= u && u--)
                    }), this
                },
                has: function(e) {
                    return v.inArray(e, a) > -1
                },
                empty: function() {
                    return a = [], this
                },
                disable: function() {
                    return a = f = n = t, this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return f = t, n || c.disable(), this
                },
                locked: function() {
                    return !f
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], a && (!r || f) && (i ? f.push(t) : l(t)), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, v.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", v.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", v.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", v.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return v.Deferred(function(n) {
                            v.each(t, function(t, r) {
                                var s = r[0],
                                    o = e[t];
                                i[r[1]](v.isFunction(o) ? function() {
                                    var e = o.apply(this, arguments);
                                    e && v.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [e])
                                } : n[s])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? v.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, v.each(t, function(e, s) {
                var o = s[2],
                    u = s[3];
                r[s[1]] = o.add, u && o.add(function() {
                    n = u
                }, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t = 0,
                n = l.call(arguments),
                r = n.length,
                i = r !== 1 || e && v.isFunction(e.promise) ? r : 0,
                s = i === 1 ? e : v.Deferred(),
                o = function(e, t, n) {
                    return function(r) {
                        t[e] = this, n[e] = arguments.length > 1 ? l.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n)
                    }
                },
                u, a, f;
            if (r > 1) {
                u = new Array(r), a = new Array(r), f = new Array(r);
                for (; t < r; t++) n[t] && v.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i
            }
            return i || s.resolveWith(f, n), s.promise()
        }
    }), v.support = function() {
        var t, n, r, s, o, u, a, f, l, c, h, p = i.createElement("div");
        p.setAttribute("className", "t"), p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = p.getElementsByTagName("*"), r = p.getElementsByTagName("a")[0];
        if (!n || !r || !n.length) return {};
        s = i.createElement("select"), o = s.appendChild(i.createElement("option")), u = p.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            leadingWhitespace: p.firstChild.nodeType === 3,
            tbody: !p.getElementsByTagName("tbody").length,
            htmlSerialize: !!p.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: r.getAttribute("href") === "/a",
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: u.value === "on",
            optSelected: o.selected,
            getSetAttribute: p.className !== "t",
            enctype: !!i.createElement("form").enctype,
            html5Clone: i.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
            boxModel: i.compatMode === "CSS1Compat",
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, u.checked = !0, t.noCloneChecked = u.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete p.test
        } catch (d) {
            t.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent("onclick", h = function() {
            t.noCloneEvent = !1
        }), p.cloneNode(!0).fireEvent("onclick"), p.detachEvent("onclick", h)), u = i.createElement("input"), u.value = "t", u.setAttribute("type", "radio"), t.radioValue = u.value === "t", u.setAttribute("checked", "checked"), u.setAttribute("name", "t"), p.appendChild(u), a = i.createDocumentFragment(), a.appendChild(p.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = u.checked, a.removeChild(u), a.appendChild(p);
        if (p.attachEvent)
            for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) f = "on" + l, c = f in p, c || (p.setAttribute(f, "return;"), c = typeof p[f] == "function"), t[l + "Bubbles"] = c;
        return v(function() {
            var n, r, s, o, u = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = i.getElementsByTagName("body")[0];
            if (!a) return;
            n = i.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = i.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = r.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = s[0].offsetHeight === 0, s[0].style.display = "", s[1].style.display = "none", t.reliableHiddenOffsets = c && s[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width === "4px", o = i.createElement("div"), o.style.cssText = r.style.cssText = u, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), a.removeChild(n), n = r = s = o = null
        }), a.removeChild(p), n = r = s = o = u = a = p = null, t
    }();
    var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        P = /([A-Z])/g;
    v.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e)
        },
        data: function(e, n, r, i) {
            if (!v.acceptData(e)) return;
            var s, o, u = v.expando,
                a = typeof n == "string",
                f = e.nodeType,
                l = f ? v.cache : e,
                c = f ? e[u] : e[u] && u;
            if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
            c || (f ? e[u] = c = v.deletedIds.pop() || v.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = v.noop));
            if (typeof n == "object" || typeof n == "function") i ? l[c] = v.extend(l[c], n) : l[c].data = v.extend(l[c].data, n);
            return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o
        },
        removeData: function(e, t, n) {
            if (!v.acceptData(e)) return;
            var r, i, s, o = e.nodeType,
                u = o ? v.cache : e,
                a = o ? e[v.expando] : v.expando;
            if (!u[a]) return;
            if (t) {
                r = n ? u[a] : u[a].data;
                if (r) {
                    v.isArray(t) || (t in r ? t = [t] : (t = v.camelCase(t), t in r ? t = [t] : t = t.split(" ")));
                    for (i = 0, s = t.length; i < s; i++) delete r[t[i]];
                    if (!(n ? B : v.isEmptyObject)(r)) return
                }
            }
            if (!n) {
                delete u[a].data;
                if (!B(u[a])) return
            }
            o ? v.cleanData([e], !0) : v.support.deleteExpando || u != u.window ? delete u[a] : u[a] = null
        },
        _data: function(e, t, n) {
            return v.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), v.fn.extend({
        data: function(e, n) {
            var r, i, s, o, u, a = this[0],
                f = 0,
                l = null;
            if (e === t) {
                if (this.length) {
                    l = v.data(a);
                    if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
                        s = a.attributes;
                        for (u = s.length; f < u; f++) o = s[f].name, o.indexOf("data-") || (o = v.camelCase(o.substring(5)), H(a, o, l[o]));
                        v._data(a, "parsedAttrs", !0)
                    }
                }
                return l
            }
            return typeof e == "object" ? this.each(function() {
                v.data(this, e)
            }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
                if (n === t) return l = this.triggerHandler("getData" + i, [r[0]]), l === t && a && (l = v.data(a, e), l = H(a, e, l)), l === t && r[1] ? this.data(r[0]) : l;
                r[1] = n, this.each(function() {
                    var t = v(this);
                    t.triggerHandler("setData" + i, r), v.data(this, e, n), t.triggerHandler("changeData" + i, r)
                })
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                v.removeData(this, e)
            })
        }
    }), v.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = v.queue(e, t),
                r = n.length,
                i = n.shift(),
                s = v._queueHooks(e, t),
                o = function() {
                    v.dequeue(e, t)
                };
            i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return v._data(e, n) || v._data(e, n, {
                empty: v.Callbacks("once memory").add(function() {
                    v.removeData(e, t + "queue", !0), v.removeData(e, n, !0)
                })
            })
        }
    }), v.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = v.queue(this, e, n);
                v._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && v.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                v.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = v.fx ? v.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                s = v.Deferred(),
                o = this,
                u = this.length,
                a = function() {
                    --i || s.resolveWith(o, [o])
                };
            typeof e != "string" && (n = e, e = t), e = e || "fx";
            while (u--) r = v._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
            return a(), s.promise(n)
        }
    });
    var j, F, I, q = /[\t\r\n]/g,
        R = /\r/g,
        U = /^(?:button|input)$/i,
        z = /^(?:button|input|object|select|textarea)$/i,
        W = /^a(?:rea|)$/i,
        X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        V = v.support.getSetAttribute;
    v.fn.extend({
        attr: function(e, t) {
            return v.access(this, v.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                v.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return v.access(this, v.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = v.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, s, o, u;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).addClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string") {
                t = e.split(y);
                for (n = 0, r = this.length; n < r; n++) {
                    i = this[n];
                    if (i.nodeType === 1)
                        if (!i.className && t.length === 1) i.className = e;
                        else {
                            s = " " + i.className + " ";
                            for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
                            i.className = v.trim(s)
                        }
                }
            }
            return this
        },
        removeClass: function(e) {
            var n, r, i, s, o, u, a;
            if (v.isFunction(e)) return this.each(function(t) {
                v(this).removeClass(e.call(this, t, this.className))
            });
            if (e && typeof e == "string" || e === t) {
                n = (e || "").split(y);
                for (u = 0, a = this.length; u < a; u++) {
                    i = this[u];
                    if (i.nodeType === 1 && i.className) {
                        r = (" " + i.className + " ").replace(q, " ");
                        for (s = 0, o = n.length; s < o; s++)
                            while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
                        i.className = e ? v.trim(r) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = typeof t == "boolean";
            return v.isFunction(e) ? this.each(function(n) {
                v(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if (n === "string") {
                    var i, s = 0,
                        o = v(this),
                        u = t,
                        a = e.split(y);
                    while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i)
                } else if (n === "undefined" || n === "boolean") this.className && v._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : v._data(this, "__className__") || ""
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                n = 0,
                r = this.length;
            for (; n < r; n++)
                if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, s = this[0];
            if (!arguments.length) {
                if (s) return n = v.valHooks[s.type] || v.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(R, "") : r == null ? "" : r);
                return
            }
            return i = v.isFunction(e), this.each(function(r) {
                var s, o = v(this);
                if (this.nodeType !== 1) return;
                i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : v.isArray(s) && (s = v.map(s, function(e) {
                    return e == null ? "" : e + ""
                })), n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s
            })
        }
    }), v.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r = e.options,
                        i = e.selectedIndex,
                        s = e.type === "select-one" || i < 0,
                        o = s ? null : [],
                        u = s ? i + 1 : r.length,
                        a = i < 0 ? u : s ? i : 0;
                    for (; a < u; a++) {
                        n = r[a];
                        if ((n.selected || a === i) && (v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup"))) {
                            t = v(n).val();
                            if (s) return t;
                            o.push(t)
                        }
                    }
                    return o
                },
                set: function(e, t) {
                    var n = v.makeArray(t);
                    return v(e).find("option").each(function() {
                        this.selected = v.inArray(v(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var s, o, u, a = e.nodeType;
            if (!e || a === 3 || a === 8 || a === 2) return;
            if (i && v.isFunction(v.fn[n])) return v(e)[n](r);
            if (typeof e.getAttribute == "undefined") return v.prop(e, n, r);
            u = a !== 1 || !v.isXMLDoc(e), u && (n = n.toLowerCase(), o = v.attrHooks[n] || (X.test(n) ? F : j));
            if (r !== t) {
                if (r === null) {
                    v.removeAttr(e, n);
                    return
                }
                return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r)
            }
            return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s)
        },
        removeAttr: function(e, t) {
            var n, r, i, s, o = 0;
            if (t && e.nodeType === 1) {
                r = t.split(y);
                for (; o < r.length; o++) i = r[o], i && (n = v.propFix[i] || i, s = X.test(i), s || v.attr(e, i, ""), e.removeAttribute(V ? i : n), s && n in e && (e[n] = !1))
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (U.test(e.nodeName) && e.parentNode) v.error("type property can't be changed");
                    else if (!v.support.radioValue && t === "radio" && v.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    if (j && v.nodeName(e, "button")) return j.set(e, t, n);
                    e.value = t
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, s, o, u = e.nodeType;
            if (!e || u === 3 || u === 8 || u === 2) return;
            return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : z.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), F = {
        get: function(e, n) {
            var r, i = v.prop(e, n);
            return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, V || (I = {
        name: !0,
        id: !0,
        coords: !0
    }, j = v.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = i.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, v.each(["width", "height"], function(e, t) {
        v.attrHooks[t] = v.extend(v.attrHooks[t], {
            set: function(e, n) {
                if (n === "") return e.setAttribute(t, "auto"), n
            }
        })
    }), v.attrHooks.contenteditable = {
        get: j.get,
        set: function(e, t, n) {
            t === "" && (t = "false"), j.set(e, t, n)
        }
    }), v.support.hrefNormalized || v.each(["href", "src", "width", "height"], function(e, n) {
        v.attrHooks[n] = v.extend(v.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return r === null ? t : r
            }
        })
    }), v.support.style || (v.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }), v.support.optSelected || (v.propHooks.selected = v.extend(v.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), v.support.enctype || (v.propFix.enctype = "encoding"), v.support.checkOn || v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            get: function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    }), v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = v.extend(v.valHooks[this], {
            set: function(e, t) {
                if (v.isArray(t)) return e.checked = v.inArray(v(e).val(), t) >= 0
            }
        })
    });
    var $ = /^(?:textarea|input|select)$/i,
        J = /^([^\.]*|)(?:\.(.+)|)$/,
        K = /(?:^|\s)hover(\.\S+|)\b/,
        Q = /^key/,
        G = /^(?:mouse|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        Z = function(e) {
            return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1")
        };
    v.event = {
            add: function(e, n, r, i, s) {
                var o, u, a, f, l, c, h, p, d, m, g;
                if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = v._data(e))) return;
                r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = v.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
                    return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments)
                }, u.elem = e), n = v.trim(Z(n)).split(" ");
                for (f = 0; f < n.length; f++) {
                    l = J.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), g = v.event.special[c] || {}, c = (s ? g.delegateType : g.bindType) || c, g = v.event.special[c] || {}, p = v.extend({
                        type: c,
                        origType: l[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: s,
                        needsContext: s && v.expr.match.needsContext.test(s),
                        namespace: h.join(".")
                    }, d), m = a[c];
                    if (!m) {
                        m = a[c] = [], m.delegateCount = 0;
                        if (!g.setup || g.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u)
                    }
                    g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? m.splice(m.delegateCount++, 0, p) : m.push(p), v.event.global[c] = !0
                }
                e = null
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var s, o, u, a, f, l, c, h, p, d, m, g = v.hasData(e) && v._data(e);
                if (!g || !(h = g.events)) return;
                t = v.trim(Z(t || "")).split(" ");
                for (s = 0; s < t.length; s++) {
                    o = J.exec(t[s]) || [], u = a = o[1], f = o[2];
                    if (!u) {
                        for (u in h) v.event.remove(e, u + t[s], n, r, !0);
                        continue
                    }
                    p = v.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    for (c = 0; c < d.length; c++) m = d[c], (i || a === m.origType) && (!n || n.guid === m.guid) && (!f || f.test(m.namespace)) && (!r || r === m.selector || r === "**" && m.selector) && (d.splice(c--, 1), m.selector && d.delegateCount--, p.remove && p.remove.call(e, m));
                    d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, g.handle) === !1) && v.removeEvent(e, u, g.handle), delete h[u])
                }
                v.isEmptyObject(h) && (delete g.handle, v.removeData(e, "events", !0))
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, s, o) {
                if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
                    var u, a, f, l, c, h, p, d, m, g, y = n.type || n,
                        b = [];
                    if (Y.test(y + v.event.triggered)) return;
                    y.indexOf("!") >= 0 && (y = y.slice(0, -1), a = !0), y.indexOf(".") >= 0 && (b = y.split("."), y = b.shift(), b.sort());
                    if ((!s || v.event.customEvent[y]) && !v.event.global[y]) return;
                    n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y), n.type = y, n.isTrigger = !0, n.exclusive = a, n.namespace = b.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, h = y.indexOf(":") < 0 ? "on" + y : "";
                    if (!s) {
                        u = v.cache;
                        for (f in u) u[f].events && u[f].events[y] && v.event.trigger(n, r, u[f].handle.elem, !0);
                        return
                    }
                    n.result = t, n.target || (n.target = s), r = r != null ? v.makeArray(r) : [], r.unshift(n), p = v.event.special[y] || {};
                    if (p.trigger && p.trigger.apply(s, r) === !1) return;
                    m = [
                        [s, p.bindType || y]
                    ];
                    if (!o && !p.noBubble && !v.isWindow(s)) {
                        g = p.delegateType || y, l = Y.test(g + y) ? s : s.parentNode;
                        for (c = s; l; l = l.parentNode) m.push([l, g]), c = l;
                        c === (s.ownerDocument || i) && m.push([c.defaultView || c.parentWindow || e, g])
                    }
                    for (f = 0; f < m.length && !n.isPropagationStopped(); f++) l = m[f][0], n.type = m[f][1], d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle"), d && d.apply(l, r), d = h && l[h], d && v.acceptData(l) && d.apply && d.apply(l, r) === !1 && n.preventDefault();
                    return n.type = y, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(s.ownerDocument, r) === !1) && (y !== "click" || !v.nodeName(s, "a")) && v.acceptData(s) && h && s[y] && (y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && !v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)), n.result
                }
                return
            },
            dispatch: function(n) {
                n = v.event.fix(n || e.event);
                var r, i, s, o, u, a, f, c, h, p, d = (v._data(this, "events") || {})[n.type] || [],
                    m = d.delegateCount,
                    g = l.call(arguments),
                    y = !n.exclusive && !n.namespace,
                    b = v.event.special[n.type] || {},
                    w = [];
                g[0] = n, n.delegateTarget = this;
                if (b.preDispatch && b.preDispatch.call(this, n) === !1) return;
                if (m && (!n.button || n.type !== "click"))
                    for (s = n.target; s != this; s = s.parentNode || this)
                        if (s.disabled !== !0 || n.type !== "click") {
                            u = {}, f = [];
                            for (r = 0; r < m; r++) c = d[r], h = c.selector, u[h] === t && (u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length), u[h] && f.push(c);
                            f.length && w.push({
                                elem: s,
                                matches: f
                            })
                        }
                d.length > m && w.push({
                    elem: this,
                    matches: d.slice(m)
                });
                for (r = 0; r < w.length && !n.isPropagationStopped(); r++) {
                    a = w[r], n.currentTarget = a.elem;
                    for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
                        c = a.matches[i];
                        if (y || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) n.data = c.data, n.handleObj = c, o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()))
                    }
                }
                return b.postDispatch && b.postDispatch.call(this, n), n.result
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, s, o, u = n.button,
                        a = n.fromElement;
                    return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || i, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), !e.which && u !== t && (e.which = u & 1 ? 1 : u & 2 ? 3 : u & 4 ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[v.expando]) return e;
                var t, n, r = e,
                    s = v.event.fixHooks[e.type] || {},
                    o = s.props ? this.props.concat(s.props) : this.props;
                e = v.Event(r);
                for (t = o.length; t;) n = o[--t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || i), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        v.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = v.extend(new v.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? v.event.trigger(i, null, t) : v.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, v.event.handle = v.event.dispatch, v.removeEvent = i.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n))
        }, v.Event = function(e, t) {
            if (!(this instanceof v.Event)) return new v.Event(e, t);
            e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? tt : et) : this.type = e, t && v.extend(this, t), this.timeStamp = e && e.timeStamp || v.now(), this[v.expando] = !0
        }, v.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            },
            stopPropagation: function() {
                this.isPropagationStopped = tt;
                var e = this.originalEvent;
                if (!e) return;
                e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = tt, this.stopPropagation()
            },
            isDefaultPrevented: et,
            isPropagationStopped: et,
            isImmediatePropagationStopped: et
        }, v.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            v.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        s = e.handleObj,
                        o = s.selector;
                    if (!i || i !== r && !v.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
                    return n
                }
            }
        }), v.support.submitBubbles || (v.event.special.submit = {
            setup: function() {
                if (v.nodeName(this, "form")) return !1;
                v.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
                    r && !v._data(r, "_submit_attached") && (v.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), v._data(r, "_submit_attached", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && v.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                if (v.nodeName(this, "form")) return !1;
                v.event.remove(this, "._submit")
            }
        }), v.support.changeBubbles || (v.event.special.change = {
            setup: function() {
                if ($.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") v.event.add(this, "propertychange._change", function(e) {
                        e.originalEvent.propertyName === "checked" && (this._just_changed = !0)
                    }), v.event.add(this, "click._change", function(e) {
                        this._just_changed && !e.isTrigger && (this._just_changed = !1), v.event.simulate("change", this, e, !0)
                    });
                    return !1
                }
                v.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    $.test(t.nodeName) && !v._data(t, "_change_attached") && (v.event.add(t, "change._change", function(e) {
                        this.parentNode && !e.isSimulated && !e.isTrigger && v.event.simulate("change", this.parentNode, e, !0)
                    }), v._data(t, "_change_attached", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments)
            },
            teardown: function() {
                return v.event.remove(this, "._change"), !$.test(this.nodeName)
            }
        }), v.support.focusinBubbles || v.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    v.event.simulate(t, e.target, v.event.fix(e), !0)
                };
            v.event.special[t] = {
                setup: function() {
                    n++ === 0 && i.addEventListener(e, r, !0)
                },
                teardown: function() {
                    --n === 0 && i.removeEventListener(e, r, !0)
                }
            }
        }), v.fn.extend({
            on: function(e, n, r, i, s) {
                var o, u;
                if (typeof e == "object") {
                    typeof n != "string" && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], s);
                    return this
                }
                r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
                if (i === !1) i = et;
                else if (!i) return this;
                return s === 1 && (o = i, i = function(e) {
                    return v().off(e), o.apply(this, arguments)
                }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
                    v.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if (typeof e == "object") {
                    for (s in e) this.off(s, n, e[s]);
                    return this
                }
                if (n === !1 || typeof n == "function") r = n, n = t;
                return r === !1 && (r = et), this.each(function() {
                    v.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return v(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return v(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    v.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                if (this[0]) return v.event.trigger(e, t, this[0], !0)
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || v.guid++,
                    r = 0,
                    i = function(n) {
                        var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
                        return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                i.guid = n;
                while (r < t.length) t[r++].guid = n;
                return this.click(i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            v.fn[t] = function(e, n) {
                return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, Q.test(t) && (v.event.fixHooks[t] = v.event.keyHooks), G.test(t) && (v.event.fixHooks[t] = v.event.mouseHooks)
        }),
        function(e, t) {
            function nt(e, t, n, r) {
                n = n || [], t = t || g;
                var i, s, a, f, l = t.nodeType;
                if (!e || typeof e != "string") return n;
                if (l !== 1 && l !== 9) return [];
                a = o(t);
                if (!a && !r)
                    if (i = R.exec(e))
                        if (f = i[1]) {
                            if (l === 9) {
                                s = t.getElementById(f);
                                if (!s || !s.parentNode) return n;
                                if (s.id === f) return n.push(s), n
                            } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(f)) && u(t, s) && s.id === f) return n.push(s), n
                        } else {
                            if (i[2]) return S.apply(n, x.call(t.getElementsByTagName(e), 0)), n;
                            if ((f = i[3]) && Z && t.getElementsByClassName) return S.apply(n, x.call(t.getElementsByClassName(f), 0)), n
                        }
                return vt(e.replace(j, "$1"), t, n, r, a)
            }

            function rt(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return n === "input" && t.type === e
                }
            }

            function it(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return (n === "input" || n === "button") && t.type === e
                }
            }

            function st(e) {
                return N(function(t) {
                    return t = +t, N(function(n, r) {
                        var i, s = e([], n.length, t),
                            o = s.length;
                        while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]))
                    })
                })
            }

            function ot(e, t, n) {
                if (e === t) return n;
                var r = e.nextSibling;
                while (r) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function ut(e, t) {
                var n, r, s, o, u, a, f, l = L[d][e + " "];
                if (l) return t ? 0 : l.slice(0);
                u = e, a = [], f = i.preFilter;
                while (u) {
                    if (!n || (r = F.exec(u))) r && (u = u.slice(r[0].length) || u), a.push(s = []);
                    n = !1;
                    if (r = I.exec(u)) s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = r[0].replace(j, " ");
                    for (o in i.filter)(r = J[o].exec(u)) && (!f[o] || (r = f[o](r))) && (s.push(n = new m(r.shift())), u = u.slice(n.length), n.type = o, n.matches = r);
                    if (!n) break
                }
                return t ? u.length : u ? nt.error(e) : L(e, a).slice(0)
            }

            function at(e, t, r) {
                var i = t.dir,
                    s = r && t.dir === "parentNode",
                    o = w++;
                return t.first ? function(t, n, r) {
                    while (t = t[i])
                        if (s || t.nodeType === 1) return e(t, n, r)
                } : function(t, r, u) {
                    if (!u) {
                        var a, f = b + " " + o + " ",
                            l = f + n;
                        while (t = t[i])
                            if (s || t.nodeType === 1) {
                                if ((a = t[d]) === l) return t.sizset;
                                if (typeof a == "string" && a.indexOf(f) === 0) {
                                    if (t.sizset) return t
                                } else {
                                    t[d] = l;
                                    if (e(t, r, u)) return t.sizset = !0, t;
                                    t.sizset = !1
                                }
                            }
                    } else
                        while (t = t[i])
                            if (s || t.nodeType === 1)
                                if (e(t, r, u)) return t
                }
            }

            function ft(e) {
                return e.length > 1 ? function(t, n, r) {
                    var i = e.length;
                    while (i--)
                        if (!e[i](t, n, r)) return !1;
                    return !0
                } : e[0]
            }

            function lt(e, t, n, r, i) {
                var s, o = [],
                    u = 0,
                    a = e.length,
                    f = t != null;
                for (; u < a; u++)
                    if (s = e[u])
                        if (!n || n(s, r, i)) o.push(s), f && t.push(u);
                return o
            }

            function ct(e, t, n, r, i, s) {
                return r && !r[d] && (r = ct(r)), i && !i[d] && (i = ct(i, s)), N(function(s, o, u, a) {
                    var f, l, c, h = [],
                        p = [],
                        d = o.length,
                        v = s || dt(t || "*", u.nodeType ? [u] : u, []),
                        m = e && (s || !t) ? lt(v, h, e, u, a) : v,
                        g = n ? i || (s ? e : d || r) ? [] : o : m;
                    n && n(m, g, u, a);
                    if (r) {
                        f = lt(g, p), r(f, [], u, a), l = f.length;
                        while (l--)
                            if (c = f[l]) g[p[l]] = !(m[p[l]] = c)
                    }
                    if (s) {
                        if (i || e) {
                            if (i) {
                                f = [], l = g.length;
                                while (l--)(c = g[l]) && f.push(m[l] = c);
                                i(null, g = [], f, a)
                            }
                            l = g.length;
                            while (l--)(c = g[l]) && (f = i ? T.call(s, c) : h[l]) > -1 && (s[f] = !(o[f] = c))
                        }
                    } else g = lt(g === o ? g.splice(d, g.length) : g), i ? i(null, o, g, a) : S.apply(o, g)
                })
            }

            function ht(e) {
                var t, n, r, s = e.length,
                    o = i.relative[e[0].type],
                    u = o || i.relative[" "],
                    a = o ? 1 : 0,
                    f = at(function(e) {
                        return e === t
                    }, u, !0),
                    l = at(function(e) {
                        return T.call(t, e) > -1
                    }, u, !0),
                    h = [function(e, n, r) {
                        return !o && (r || n !== c) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r))
                    }];
                for (; a < s; a++)
                    if (n = i.relative[e[a].type]) h = [at(ft(h), n)];
                    else {
                        n = i.filter[e[a].type].apply(null, e[a].matches);
                        if (n[d]) {
                            r = ++a;
                            for (; r < s; r++)
                                if (i.relative[e[r].type]) break;
                            return ct(a > 1 && ft(h), a > 1 && e.slice(0, a - 1).join("").replace(j, "$1"), n, a < r && ht(e.slice(a, r)), r < s && ht(e = e.slice(r)), r < s && e.join(""))
                        }
                        h.push(n)
                    }
                return ft(h)
            }

            function pt(e, t) {
                var r = t.length > 0,
                    s = e.length > 0,
                    o = function(u, a, f, l, h) {
                        var p, d, v, m = [],
                            y = 0,
                            w = "0",
                            x = u && [],
                            T = h != null,
                            N = c,
                            C = u || s && i.find.TAG("*", h && a.parentNode || a),
                            k = b += N == null ? 1 : Math.E;
                        T && (c = a !== g && a, n = o.el);
                        for (;
                            (p = C[w]) != null; w++) {
                            if (s && p) {
                                for (d = 0; v = e[d]; d++)
                                    if (v(p, a, f)) {
                                        l.push(p);
                                        break
                                    }
                                T && (b = k, n = ++o.el)
                            }
                            r && ((p = !v && p) && y--, u && x.push(p))
                        }
                        y += w;
                        if (r && w !== y) {
                            for (d = 0; v = t[d]; d++) v(x, m, a, f);
                            if (u) {
                                if (y > 0)
                                    while (w--) !x[w] && !m[w] && (m[w] = E.call(l));
                                m = lt(m)
                            }
                            S.apply(l, m), T && !u && m.length > 0 && y + t.length > 1 && nt.uniqueSort(l)
                        }
                        return T && (b = k, c = N), x
                    };
                return o.el = 0, r ? N(o) : o
            }

            function dt(e, t, n) {
                var r = 0,
                    i = t.length;
                for (; r < i; r++) nt(e, t[r], n);
                return n
            }

            function vt(e, t, n, r, s) {
                var o, u, f, l, c, h = ut(e),
                    p = h.length;
                if (!r && h.length === 1) {
                    u = h[0] = h[0].slice(0);
                    if (u.length > 2 && (f = u[0]).type === "ID" && t.nodeType === 9 && !s && i.relative[u[1].type]) {
                        t = i.find.ID(f.matches[0].replace($, ""), t, s)[0];
                        if (!t) return n;
                        e = e.slice(u.shift().length)
                    }
                    for (o = J.POS.test(e) ? -1 : u.length - 1; o >= 0; o--) {
                        f = u[o];
                        if (i.relative[l = f.type]) break;
                        if (c = i.find[l])
                            if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
                                u.splice(o, 1), e = r.length && u.join("");
                                if (!e) return S.apply(n, x.call(r, 0)), n;
                                break
                            }
                    }
                }
                return a(e, h)(r, t, s, n, z.test(e)), n
            }

            function mt() {}
            var n, r, i, s, o, u, a, f, l, c, h = !0,
                p = "undefined",
                d = ("sizcache" + Math.random()).replace(".", ""),
                m = String,
                g = e.document,
                y = g.documentElement,
                b = 0,
                w = 0,
                E = [].pop,
                S = [].push,
                x = [].slice,
                T = [].indexOf || function(e) {
                    var t = 0,
                        n = this.length;
                    for (; t < n; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                N = function(e, t) {
                    return e[d] = t == null || t, e
                },
                C = function() {
                    var e = {},
                        t = [];
                    return N(function(n, r) {
                        return t.push(n) > i.cacheLength && delete e[t.shift()], e[n + " "] = r
                    }, e)
                },
                k = C(),
                L = C(),
                A = C(),
                O = "[\\x20\\t\\r\\n\\f]",
                M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                _ = M.replace("w", "w#"),
                D = "([*^$|!~]?=)",
                P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]",
                H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)",
                B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)",
                j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g"),
                F = new RegExp("^" + O + "*," + O + "*"),
                I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*"),
                q = new RegExp(H),
                R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                U = /^:not/,
                z = /[\x20\t\r\n\f]*[+~]/,
                W = /:not\($/,
                X = /h\d/i,
                V = /input|select|textarea|button/i,
                $ = /\\(?!\\)/g,
                J = {
                    ID: new RegExp("^#(" + M + ")"),
                    CLASS: new RegExp("^\\.(" + M + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + H),
                    POS: new RegExp(B, "i"),
                    CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
                    needsContext: new RegExp("^" + O + "*[>+~]|" + B, "i")
                },
                K = function(e) {
                    var t = g.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                Q = K(function(e) {
                    return e.appendChild(g.createComment("")), !e.getElementsByTagName("*").length
                }),
                G = K(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== p && e.firstChild.getAttribute("href") === "#"
                }),
                Y = K(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return t !== "boolean" && t !== "string"
                }),
                Z = K(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2)
                }),
                et = K(function(e) {
                    e.id = d + 0, e.innerHTML = "<a name='" + d + "'></a><div name='" + d + "'></div>", y.insertBefore(e, y.firstChild);
                    var t = g.getElementsByName && g.getElementsByName(d).length === 2 + g.getElementsByName(d + 0).length;
                    return r = !g.getElementById(d), y.removeChild(e), t
                });
            try {
                x.call(y.childNodes, 0)[0].nodeType
            } catch (tt) {
                x = function(e) {
                    var t, n = [];
                    for (; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            nt.matches = function(e, t) {
                return nt(e, null, null, t)
            }, nt.matchesSelector = function(e, t) {
                return nt(t, null, null, [e]).length > 0
            }, s = nt.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (i === 1 || i === 9 || i === 11) {
                        if (typeof e.textContent == "string") return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += s(e)
                    } else if (i === 3 || i === 4) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += s(t);
                return n
            }, o = nt.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            }, u = nt.contains = y.contains ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r))
            } : y.compareDocumentPosition ? function(e, t) {
                return t && !!(e.compareDocumentPosition(t) & 16)
            } : function(e, t) {
                while (t = t.parentNode)
                    if (t === e) return !0;
                return !1
            }, nt.attr = function(e, t) {
                var n, r = o(e);
                return r || (t = t.toLowerCase()), (n = i.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, i = nt.selectors = {
                cacheLength: 50,
                createPseudo: N,
                match: J,
                attrHandle: G ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: r ? function(e, t, n) {
                        if (typeof t.getElementById !== p && !n) {
                            var r = t.getElementById(e);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function(e, n, r) {
                        if (typeof n.getElementById !== p && !r) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== p && i.getAttributeNode("id").value === e ? [i] : t : []
                        }
                    },
                    TAG: Q ? function(e, t) {
                        if (typeof t.getElementsByTagName !== p) return t.getElementsByTagName(e)
                    } : function(e, t) {
                        var n = t.getElementsByTagName(e);
                        if (e === "*") {
                            var r, i = [],
                                s = 0;
                            for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
                            return i
                        }
                        return n
                    },
                    NAME: et && function(e, t) {
                        if (typeof t.getElementsByName !== p) return t.getElementsByName(name)
                    },
                    CLASS: Z && function(e, t, n) {
                        if (typeof t.getElementsByClassName !== p && !n) return t.getElementsByClassName(e)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace($, ""), e[3] = (e[4] || e[5] || "").replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n;
                        if (J.CHILD.test(e[0])) return null;
                        if (e[3]) e[2] = e[3];
                        else if (t = e[4]) q.test(t) && (n = ut(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
                        return e.slice(0, 3)
                    }
                },
                filter: {
                    ID: r ? function(e) {
                        return e = e.replace($, ""),
                            function(t) {
                                return t.getAttribute("id") === e
                            }
                    } : function(e) {
                        return e = e.replace($, ""),
                            function(t) {
                                var n = typeof t.getAttributeNode !== p && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                    },
                    TAG: function(e) {
                        return e === "*" ? function() {
                            return !0
                        } : (e = e.replace($, "").toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = k[d][e + " "];
                        return t || (t = new RegExp("(^|" + O + ")" + e + "(" + O + "|$)")) && k(e, function(e) {
                            return t.test(e.className || typeof e.getAttribute !== p && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, t, n) {
                        return function(r, i) {
                            var s = nt.attr(r, e);
                            return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, r) {
                        return e === "nth" ? function(e) {
                            var t, i, s = e.parentNode;
                            if (n === 1 && r === 0) return !0;
                            if (s) {
                                i = 0;
                                for (t = s.firstChild; t; t = t.nextSibling)
                                    if (t.nodeType === 1) {
                                        i++;
                                        if (e === t) break
                                    }
                            }
                            return i -= r, i === n || i % n === 0 && i / n >= 0
                        } : function(t) {
                            var n = t;
                            switch (e) {
                                case "only":
                                case "first":
                                    while (n = n.previousSibling)
                                        if (n.nodeType === 1) return !1;
                                    if (e === "first") return !0;
                                    n = t;
                                case "last":
                                    while (n = n.nextSibling)
                                        if (n.nodeType === 1) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(e, t) {
                        var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || nt.error("unsupported pseudo: " + e);
                        return r[d] ? r(t) : r.length > 1 ? (n = [e, e, "", t], i.setFilters.hasOwnProperty(e.toLowerCase()) ? N(function(e, n) {
                            var i, s = r(e, t),
                                o = s.length;
                            while (o--) i = T.call(e, s[o]), e[i] = !(n[i] = s[o])
                        }) : function(e) {
                            return r(e, 0, n)
                        }) : r
                    }
                },
                pseudos: {
                    not: N(function(e) {
                        var t = [],
                            n = [],
                            r = a(e.replace(j, "$1"));
                        return r[d] ? N(function(e, t, n, i) {
                            var s, o = r(e, null, i, []),
                                u = e.length;
                            while (u--)
                                if (s = o[u]) e[u] = !(t[u] = s)
                        }) : function(e, i, s) {
                            return t[0] = e, r(t, null, s, n), !n.pop()
                        }
                    }),
                    has: N(function(e) {
                        return function(t) {
                            return nt(e, t).length > 0
                        }
                    }),
                    contains: N(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                        }
                    }),
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && !!e.checked || t === "option" && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function(e) {
                        return !i.pseudos.empty(e)
                    },
                    empty: function(e) {
                        var t;
                        e = e.firstChild;
                        while (e) {
                            if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    header: function(e) {
                        return X.test(e.nodeName)
                    },
                    text: function(e) {
                        var t, n;
                        return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t)
                    },
                    radio: rt("radio"),
                    checkbox: rt("checkbox"),
                    file: rt("file"),
                    password: rt("password"),
                    image: rt("image"),
                    submit: it("submit"),
                    reset: it("reset"),
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === "button" || t === "button"
                    },
                    input: function(e) {
                        return V.test(e.nodeName)
                    },
                    focus: function(e) {
                        var t = e.ownerDocument;
                        return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    active: function(e) {
                        return e === e.ownerDocument.activeElement
                    },
                    first: st(function() {
                        return [0]
                    }),
                    last: st(function(e, t) {
                        return [t - 1]
                    }),
                    eq: st(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: st(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: st(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: st(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                        return e
                    }),
                    gt: st(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }, f = y.compareDocumentPosition ? function(e, t) {
                return e === t ? (l = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1
            } : function(e, t) {
                if (e === t) return l = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [],
                    s = [],
                    o = e.parentNode,
                    u = t.parentNode,
                    a = o;
                if (o === u) return ot(e, t);
                if (!o) return -1;
                if (!u) return 1;
                while (a) i.unshift(a), a = a.parentNode;
                a = u;
                while (a) s.unshift(a), a = a.parentNode;
                n = i.length, r = s.length;
                for (var f = 0; f < n && f < r; f++)
                    if (i[f] !== s[f]) return ot(i[f], s[f]);
                return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1)
            }, [0, 0].sort(f), h = !l, nt.uniqueSort = function(e) {
                var t, n = [],
                    r = 1,
                    i = 0;
                l = h, e.sort(f);
                if (l) {
                    for (; t = e[r]; r++) t === e[r - 1] && (i = n.push(r));
                    while (i--) e.splice(n[i], 1)
                }
                return e
            }, nt.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, a = nt.compile = function(e, t) {
                var n, r = [],
                    i = [],
                    s = A[d][e + " "];
                if (!s) {
                    t || (t = ut(e)), n = t.length;
                    while (n--) s = ht(t[n]), s[d] ? r.push(s) : i.push(s);
                    s = A(e, pt(i, r))
                }
                return s
            }, g.querySelectorAll && function() {
                var e, t = vt,
                    n = /'|\\/g,
                    r = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    i = [":focus"],
                    s = [":active"],
                    u = y.matchesSelector || y.mozMatchesSelector || y.webkitMatchesSelector || y.oMatchesSelector || y.msMatchesSelector;
                K(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || i.push(":checked")
                }), K(function(e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && i.push("[*^$]=" + O + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || i.push(":enabled", ":disabled")
                }), i = new RegExp(i.join("|")), vt = function(e, r, s, o, u) {
                    if (!o && !u && !i.test(e)) {
                        var a, f, l = !0,
                            c = d,
                            h = r,
                            p = r.nodeType === 9 && e;
                        if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
                            a = ut(e), (l = r.getAttribute("id")) ? c = l.replace(n, "\\$&") : r.setAttribute("id", c), c = "[id='" + c + "'] ", f = a.length;
                            while (f--) a[f] = c + a[f].join("");
                            h = z.test(e) && r.parentNode || r, p = a.join(",")
                        }
                        if (p) try {
                            return S.apply(s, x.call(h.querySelectorAll(p), 0)), s
                        } catch (v) {} finally {
                            l || r.removeAttribute("id")
                        }
                    }
                    return t(e, r, s, o, u)
                }, u && (K(function(t) {
                    e = u.call(t, "div");
                    try {
                        u.call(t, "[test!='']:sizzle"), s.push("!=", H)
                    } catch (n) {}
                }), s = new RegExp(s.join("|")), nt.matchesSelector = function(t, n) {
                    n = n.replace(r, "='$1']");
                    if (!o(t) && !s.test(n) && !i.test(n)) try {
                        var a = u.call(t, n);
                        if (a || e || t.document && t.document.nodeType !== 11) return a
                    } catch (f) {}
                    return nt(n, null, null, [t]).length > 0
                })
            }(), i.pseudos.nth = i.pseudos.eq, i.filters = mt.prototype = i.pseudos, i.setFilters = new mt, nt.attr = v.attr, v.find = nt, v.expr = nt.selectors, v.expr[":"] = v.expr.pseudos, v.unique = nt.uniqueSort, v.text = nt.getText, v.isXMLDoc = nt.isXML, v.contains = nt.contains
        }(e);
    var nt = /Until$/,
        rt = /^(?:parents|prev(?:Until|All))/,
        it = /^.[^:#\[\.,]*$/,
        st = v.expr.match.needsContext,
        ot = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    v.fn.extend({
        find: function(e) {
            var t, n, r, i, s, o, u = this;
            if (typeof e != "string") return v(e).filter(function() {
                for (t = 0, n = u.length; t < n; t++)
                    if (v.contains(u[t], this)) return !0
            });
            o = this.pushStack("", "find", e);
            for (t = 0, n = this.length; t < n; t++) {
                r = o.length, v.find(e, this[t], o);
                if (t > 0)
                    for (i = r; i < o.length; i++)
                        for (s = 0; s < r; s++)
                            if (o[s] === o[i]) {
                                o.splice(i--, 1);
                                break
                            }
            }
            return o
        },
        has: function(e) {
            var t, n = v(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; t < r; t++)
                    if (v.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(ft(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(ft(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                s = [],
                o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
            for (; r < i; r++) {
                n = this[r];
                while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
                    if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
                        s.push(n);
                        break
                    }
                    n = n.parentNode
                }
            }
            return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e)
        },
        index: function(e) {
            return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e),
                r = v.merge(this.get(), n);
            return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    }), v.fn.andSelf = v.fn.addBack, v.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return v.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return v.dir(e, "parentNode", n)
        },
        next: function(e) {
            return at(e, "nextSibling")
        },
        prev: function(e) {
            return at(e, "previousSibling")
        },
        nextAll: function(e) {
            return v.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return v.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return v.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return v.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return v.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return v.sibling(e.firstChild)
        },
        contents: function(e) {
            return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes)
        }
    }, function(e, t) {
        v.fn[e] = function(n, r) {
            var i = v.map(this, t, n);
            return nt.test(e) || (r = n), r && typeof r == "string" && (i = v.filter(r, i)), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && rt.test(e) && (i = i.reverse()), this.pushStack(i, e, l.call(arguments).join(","))
        }
    }), v.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t)
        },
        dir: function(e, n, r) {
            var i = [],
                s = e[n];
            while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !v(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
            return i
        },
        sibling: function(e, t) {
            var n = [];
            for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
            return n
        }
    });
    var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ht = / jQuery\d+="(?:null|\d+)"/g,
        pt = /^\s+/,
        dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        vt = /<([\w:]+)/,
        mt = /<tbody/i,
        gt = /<|&#?\w+;/,
        yt = /<(?:script|style|link)/i,
        bt = /<(?:script|object|embed|option|style)/i,
        wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i"),
        Et = /^(?:checkbox|radio)$/,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        xt = /\/(java|ecma)script/i,
        Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Nt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        Ct = lt(i),
        kt = Ct.appendChild(i.createElement("div"));
    Nt.optgroup = Nt.option, Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead, Nt.th = Nt.td, v.support.htmlSerialize || (Nt._default = [1, "X<div>", "</div>"]), v.fn.extend({
            text: function(e) {
                return v.access(this, function(e) {
                    return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (v.isFunction(e)) return this.each(function(t) {
                    v(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = v(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        var e = this;
                        while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return v.isFunction(e) ? this.each(function(t) {
                    v(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = v(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = v.isFunction(e);
                return this.each(function(n) {
                    v(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    v.nodeName(this, "body") || v(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!ut(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = v.clean(arguments);
                    return this.pushStack(v.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                var n, r = 0;
                for (;
                    (n = this[r]) != null; r++)
                    if (!e || v.filter(e, [n]).length) !t && n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), v.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
                return this
            },
            empty: function() {
                var e, t = 0;
                for (;
                    (e = this[t]) != null; t++) {
                    e.nodeType === 1 && v.cleanData(e.getElementsByTagName("*"));
                    while (e.firstChild) e.removeChild(e.firstChild)
                }
                return this
            },
            clone: function(e, t) {
                return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
                    return v.clone(this, e, t)
                })
            },
            html: function(e) {
                return v.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
                    if (typeof e == "string" && !yt.test(e) && (v.support.htmlSerialize || !wt.test(e)) && (v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(dt, "<$1></$2>");
                        try {
                            for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (v.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (s) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
                    var n = v(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    v(this).remove(), t ? v(t).before(e) : v(n).append(e)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = [].concat.apply([], e);
                var i, s, o, u, a = 0,
                    f = e[0],
                    l = [],
                    c = this.length;
                if (!v.support.checkClone && c > 1 && typeof f == "string" && St.test(f)) return this.each(function() {
                    v(this).domManip(e, n, r)
                });
                if (v.isFunction(f)) return this.each(function(i) {
                    var s = v(this);
                    e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r)
                });
                if (this[0]) {
                    i = v.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
                    if (s) {
                        n = n && v.nodeName(s, "tr");
                        for (u = i.cacheable || c - 1; a < c; a++) r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, !0, !0))
                    }
                    o = s = null, l.length && v.each(l, function(e, t) {
                        t.src ? v.ajax ? v.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : v.error("no ajax") : v.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Tt, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), v.buildFragment = function(e, n, r) {
            var s, o, u, a = e[0];
            return n = n || i, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof a == "string" && a.length < 512 && n === i && a.charAt(0) === "<" && !bt.test(a) && (v.support.checkClone || !St.test(a)) && (v.support.html5Clone || !wt.test(a)) && (o = !0, s = v.fragments[a], u = s !== t), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
                fragment: s,
                cacheable: o
            }
        }, v.fragments = {}, v.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            v.fn[e] = function(n) {
                var r, i = 0,
                    s = [],
                    o = v(n),
                    u = o.length,
                    a = this.length === 1 && this[0].parentNode;
                if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
                for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), v(o[i])[t](r), s = s.concat(r);
                return this.pushStack(s, e, o.selector)
            }
        }), v.extend({
            clone: function(e, t, n) {
                var r, i, s, o;
                v.support.html5Clone || v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (kt.innerHTML = e.outerHTML, kt.removeChild(o = kt.firstChild));
                if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e)) {
                    Ot(e, o), r = Mt(e), i = Mt(o);
                    for (s = 0; r[s]; ++s) i[s] && Ot(r[s], i[s])
                }
                if (t) {
                    At(e, o);
                    if (n) {
                        r = Mt(e), i = Mt(o);
                        for (s = 0; r[s]; ++s) At(r[s], i[s])
                    }
                }
                return r = i = null, o
            },
            clean: function(e, t, n, r) {
                var s, o, u, a, f, l, c, h, p, d, m, g, y = t === i && Ct,
                    b = [];
                if (!t || typeof t.createDocumentFragment == "undefined") t = i;
                for (s = 0;
                    (u = e[s]) != null; s++) {
                    typeof u == "number" && (u += "");
                    if (!u) continue;
                    if (typeof u == "string")
                        if (!gt.test(u)) u = t.createTextNode(u);
                        else {
                            y = y || lt(t), c = t.createElement("div"), y.appendChild(c), u = u.replace(dt, "<$1></$2>"), a = (vt.exec(u) || ["", ""])[1].toLowerCase(), f = Nt[a] || Nt._default, l = f[0], c.innerHTML = f[1] + u + f[2];
                            while (l--) c = c.lastChild;
                            if (!v.support.tbody) {
                                h = mt.test(u), p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
                                for (o = p.length - 1; o >= 0; --o) v.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o])
                            }!v.support.leadingWhitespace && pt.test(u) && c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild), u = c.childNodes, c.parentNode.removeChild(c)
                        }
                    u.nodeType ? b.push(u) : v.merge(b, u)
                }
                c && (u = c = y = null);
                if (!v.support.appendChecked)
                    for (s = 0;
                        (u = b[s]) != null; s++) v.nodeName(u, "input") ? _t(u) : typeof u.getElementsByTagName != "undefined" && v.grep(u.getElementsByTagName("input"), _t);
                if (n) {
                    m = function(e) {
                        if (!e.type || xt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e)
                    };
                    for (s = 0;
                        (u = b[s]) != null; s++)
                        if (!v.nodeName(u, "script") || !m(u)) n.appendChild(u), typeof u.getElementsByTagName != "undefined" && (g = v.grep(v.merge([], u.getElementsByTagName("script")), m), b.splice.apply(b, [s + 1, 0].concat(g)), s += g.length)
                }
                return b
            },
            cleanData: function(e, t) {
                var n, r, i, s, o = 0,
                    u = v.expando,
                    a = v.cache,
                    f = v.support.deleteExpando,
                    l = v.event.special;
                for (;
                    (i = e[o]) != null; o++)
                    if (t || v.acceptData(i)) {
                        r = i[u], n = r && a[r];
                        if (n) {
                            if (n.events)
                                for (s in n.events) l[s] ? v.event.remove(i, s) : v.removeEvent(i, s, n.handle);
                            a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, v.deletedIds.push(r))
                        }
                    }
            }
        }),
        function() {
            var e, t;
            v.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = v.uaMatch(o.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), v.browser = t, v.sub = function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                v.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(r, i) {
                    return i && i instanceof v && !(i instanceof e) && (i = e(i)), v.fn.init.call(this, r, i, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(i);
                return e
            }
        }();
    var Dt, Pt, Ht, Bt = /alpha\([^)]*\)/i,
        jt = /opacity=([^)]*)/,
        Ft = /^(top|right|bottom|left)$/,
        It = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Rt = new RegExp("^(" + m + ")(.*)$", "i"),
        Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i"),
        zt = new RegExp("^([-+])=(" + m + ")", "i"),
        Wt = {
            BODY: "block"
        },
        Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Vt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        $t = ["Top", "Right", "Bottom", "Left"],
        Jt = ["Webkit", "O", "Moz", "ms"],
        Kt = v.fn.toggle;
    v.fn.extend({
        css: function(e, n) {
            return v.access(this, function(e, n, r) {
                return r !== t ? v.style(e, n, r) : v.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return Yt(this, !0)
        },
        hide: function() {
            return Yt(this)
        },
        toggle: function(e, t) {
            var n = typeof e == "boolean";
            return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
                (n ? e : Gt(this)) ? v(this).show(): v(this).hide()
            })
        }
    }), v.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Dt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": v.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
            var s, o, u, a = v.camelCase(n),
                f = e.style;
            n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a)), u = v.cssHooks[n] || v.cssHooks[a];
            if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
            o = typeof r, o === "string" && (s = zt.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n)), o = "number");
            if (r == null || o === "number" && isNaN(r)) return;
            o === "number" && !v.cssNumber[a] && (r += "px");
            if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
                f[n] = r
            } catch (l) {}
        },
        css: function(e, n, r, i) {
            var s, o, u, a = v.camelCase(n);
            return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = Dt(e, n)), s === "normal" && n in Vt && (s = Vt[n]), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s
        },
        swap: function(e, t, n) {
            var r, i, s = {};
            for (i in t) s[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = s[i];
            return r
        }
    }), e.getComputedStyle ? Dt = function(t, n) {
        var r, i, s, o, u = e.getComputedStyle(t, null),
            a = t.style;
        return u && (r = u.getPropertyValue(n) || u[n], r === "" && !v.contains(t.ownerDocument, t) && (r = v.style(t, n)), Ut.test(r) && qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r
    } : i.documentElement.currentStyle && (Dt = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            s = e.style;
        return i == null && s && s[t] && (i = s[t]), Ut.test(i) && !Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i
    }), v.each(["height", "width"], function(e, t) {
        v.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
                    return tn(e, t, r)
                }) : tn(e, t, r)
            },
            set: function(e, n, r) {
                return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0)
            }
        }
    }), v.support.opacity || (v.cssHooks.opacity = {
        get: function(e, t) {
            return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                s = r && r.filter || n.filter || "";
            n.zoom = 1;
            if (t >= 1 && v.trim(s.replace(Bt, "")) === "" && n.removeAttribute) {
                n.removeAttribute("filter");
                if (r && !r.filter) return
            }
            n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i
        }
    }), v(function() {
        v.support.reliableMarginRight || (v.cssHooks.marginRight = {
            get: function(e, t) {
                return v.swap(e, {
                    display: "inline-block"
                }, function() {
                    if (t) return Dt(e, "marginRight")
                })
            }
        }), !v.support.pixelPosition && v.fn.position && v.each(["top", "left"], function(e, t) {
            v.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = Dt(e, t);
                        return Ut.test(r) ? v(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), v.expr && v.expr.filters && (v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none"
    }, v.expr.filters.visible = function(e) {
        return !v.expr.filters.hidden(e)
    }), v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        v.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = typeof n == "string" ? n.split(" ") : [n],
                    s = {};
                for (r = 0; r < 4; r++) s[e + $t[r] + t] = i[r] || i[r - 2] || i[0];
                return s
            }
        }, qt.test(e) || (v.cssHooks[e + t].set = Zt)
    });
    var rn = /%20/g,
        sn = /\[\]$/,
        on = /\r?\n/g,
        un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        an = /^(?:select|textarea)/i;
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? v.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || an.test(this.nodeName) || un.test(this.type))
            }).map(function(e, t) {
                var n = v(this).val();
                return n == null ? null : v.isArray(n) ? v.map(n, function(e, n) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }), v.param = function(e, n) {
        var r, i = [],
            s = function(e, t) {
                t = v.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        n === t && (n = v.ajaxSettings && v.ajaxSettings.traditional);
        if (v.isArray(e) || e.jquery && !v.isPlainObject(e)) v.each(e, function() {
            s(this.name, this.value)
        });
        else
            for (r in e) fn(r, e[r], n, s);
        return i.join("&").replace(rn, "+")
    };
    var ln, cn, hn = /#.*$/,
        pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        vn = /^(?:GET|HEAD)$/,
        mn = /^\/\//,
        gn = /\?/,
        yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bn = /([?&])_=[^&]*/,
        wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        En = v.fn.load,
        Sn = {},
        xn = {},
        Tn = ["*/"] + ["*"];
    try {
        cn = s.href
    } catch (Nn) {
        cn = i.createElement("a"), cn.href = "", cn = cn.href
    }
    ln = wn.exec(cn.toLowerCase()) || [], v.fn.load = function(e, n, r) {
        if (typeof e != "string" && En) return En.apply(this, arguments);
        if (!this.length) return this;
        var i, s, o, u = this,
            a = e.indexOf(" ");
        return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), v.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && u.each(r, o || [e.responseText, t, e])
            }
        }).done(function(e) {
            o = arguments, u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e)
        }), this
    }, v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        v.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), v.each(["get", "post"], function(e, n) {
        v[n] = function(e, r, i, s) {
            return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: s
            })
        }
    }), v.extend({
        getScript: function(e, n) {
            return v.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return v.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e
        },
        ajaxSettings: {
            url: cn,
            isLocal: dn.test(ln[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": Tn
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": v.parseJSON,
                "text xml": v.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: Cn(Sn),
        ajaxTransport: Cn(xn),
        ajax: function(e, n) {
            function T(e, n, s, a) {
                var l, y, b, w, S, T = n;
                if (E === 2) return;
                E = 2, u && clearTimeout(u), o = t, i = a || "", x.readyState = e > 0 ? 4 : 0, s && (w = An(c, x, s));
                if (e >= 200 && e < 300 || e === 304) c.ifModified && (S = x.getResponseHeader("Last-Modified"), S && (v.lastModified[r] = S), S = x.getResponseHeader("Etag"), S && (v.etag[r] = S)), e === 304 ? (T = "notmodified", l = !0) : (l = On(c, w), T = l.state, y = l.data, b = l.error, l = !b);
                else {
                    b = T;
                    if (!T || e) T = "error", e < 0 && (e = 0)
                }
                x.status = e, x.statusText = (n || T) + "", l ? d.resolveWith(h, [y, T, x]) : d.rejectWith(h, [x, T, b]), x.statusCode(g), g = t, f && p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]), m.fireWith(h, [x, T]), f && (p.trigger("ajaxComplete", [x, c]), --v.active || v.event.trigger("ajaxStop"))
            }
            typeof e == "object" && (n = e, e = t), n = n || {};
            var r, i, s, o, u, a, f, l, c = v.ajaxSetup({}, n),
                h = c.context || c,
                p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event,
                d = v.Deferred(),
                m = v.Callbacks("once memory"),
                g = c.statusCode || {},
                b = {},
                w = {},
                E = 0,
                S = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!E) {
                            var n = e.toLowerCase();
                            e = w[n] = w[n] || e, b[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return E === 2 ? i : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (E === 2) {
                            if (!s) {
                                s = {};
                                while (n = pn.exec(i)) s[n[1].toLowerCase()] = n[2]
                            }
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return E || (c.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || S, o && o.abort(e), T(0, e), this
                    }
                };
            d.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(e) {
                if (e) {
                    var t;
                    if (E < 2)
                        for (t in e) g[t] = [g[t], e[t]];
                    else t = e[x.status], x.always(t)
                }
                return this
            }, c.url = ((e || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//"), c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y), c.crossDomain == null && (a = wn.exec(c.url.toLowerCase()), c.crossDomain = !(!a || a[1] === ln[1] && a[2] === ln[2] && (a[3] || (a[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443)))), c.data && c.processData && typeof c.data != "string" && (c.data = v.param(c.data, c.traditional)), kn(Sn, c, n, x);
            if (E === 2) return x;
            f = c.global, c.type = c.type.toUpperCase(), c.hasContent = !vn.test(c.type), f && v.active++ === 0 && v.event.trigger("ajaxStart");
            if (!c.hasContent) {
                c.data && (c.url += (gn.test(c.url) ? "&" : "?") + c.data, delete c.data), r = c.url;
                if (c.cache === !1) {
                    var N = v.now(),
                        C = c.url.replace(bn, "$1_=" + N);
                    c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "")
                }
            }(c.data && c.hasContent && c.contentType !== !1 || n.contentType) && x.setRequestHeader("Content-Type", c.contentType), c.ifModified && (r = r || c.url, v.lastModified[r] && x.setRequestHeader("If-Modified-Since", v.lastModified[r]), v.etag[r] && x.setRequestHeader("If-None-Match", v.etag[r])), x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
            for (l in c.headers) x.setRequestHeader(l, c.headers[l]);
            if (!c.beforeSend || c.beforeSend.call(h, x, c) !== !1 && E !== 2) {
                S = "abort";
                for (l in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[l](c[l]);
                o = kn(xn, c, n, x);
                if (!o) T(-1, "No Transport");
                else {
                    x.readyState = 1, f && p.trigger("ajaxSend", [x, c]), c.async && c.timeout > 0 && (u = setTimeout(function() {
                        x.abort("timeout")
                    }, c.timeout));
                    try {
                        E = 1, o.send(b, T)
                    } catch (k) {
                        if (!(E < 2)) throw k;
                        T(-1, k)
                    }
                }
                return x
            }
            return x.abort()
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Mn = [],
        _n = /\?/,
        Dn = /(=)\?(?=&|$)|\?\?/,
        Pn = v.now();
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || v.expando + "_" + Pn++;
            return this[e] = !0, e
        }
    }), v.ajaxPrefilter("json jsonp", function(n, r, i) {
        var s, o, u, a = n.data,
            f = n.url,
            l = n.jsonp !== !1,
            c = l && Dn.test(f),
            h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a);
        if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
            return u || v.error(s + " was not called"), u[0]
        }, n.dataTypes[0] = "json", e[s] = function() {
            u = arguments
        }, i.always(function() {
            e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Mn.push(s)), u && v.isFunction(o) && o(u[0]), u = o = t
        }), "script"
    }), v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return v.globalEval(e), e
            }
        }
    }), v.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), v.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = i.head || i.getElementsByTagName("head")[0] || i.documentElement;
            return {
                send: function(s, o) {
                    n = i.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success")
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Hn, Bn = e.ActiveXObject ? function() {
            for (var e in Hn) Hn[e](0, 1)
        } : !1,
        jn = 0;
    v.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && Fn() || In()
        } : Fn,
        function(e) {
            v.extend(v.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(v.ajaxSettings.xhr()), v.support.ajax && v.ajaxTransport(function(n) {
            if (!n.crossDomain || v.support.cors) {
                var r;
                return {
                    send: function(i, s) {
                        var o, u, a = n.xhr();
                        n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
                        if (n.xhrFields)
                            for (u in n.xhrFields) a[u] = n.xhrFields[u];
                        n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (u in i) a.setRequestHeader(u, i[u])
                        } catch (f) {}
                        a.send(n.hasContent && n.data || null), r = function(e, i) {
                            var u, f, l, c, h;
                            try {
                                if (r && (i || a.readyState === 4)) {
                                    r = t, o && (a.onreadystatechange = v.noop, Bn && delete Hn[o]);
                                    if (i) a.readyState !== 4 && a.abort();
                                    else {
                                        u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
                                        try {
                                            c.text = a.responseText
                                        } catch (p) {}
                                        try {
                                            f = a.statusText
                                        } catch (p) {
                                            f = ""
                                        }!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204)
                                    }
                                }
                            } catch (d) {
                                i || s(-1, d)
                            }
                            c && s(u, f, c, l)
                        }, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++jn, Bn && (Hn || (Hn = {}, v(e).unload(Bn)), Hn[o] = r), a.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(0, 1)
                    }
                }
            }
        });
    var qn, Rn, Un = /^(?:toggle|show|hide)$/,
        zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i"),
        Wn = /queueHooks$/,
        Xn = [Gn],
        Vn = {
            "*": [function(e, t) {
                var n, r, i = this.createTween(e, t),
                    s = zn.exec(t),
                    o = i.cur(),
                    u = +o || 0,
                    a = 1,
                    f = 20;
                if (s) {
                    n = +s[2], r = s[3] || (v.cssNumber[e] ? "" : "px");
                    if (r !== "px" && u) {
                        u = v.css(i.elem, e, !0) || n || 1;
                        do a = a || ".5", u /= a, v.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f)
                    }
                    i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return i
            }]
        };
    v.Animation = v.extend(Kn, {
        tweener: function(e, t) {
            v.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            var n, r = 0,
                i = e.length;
            for (; r < i; r++) n = e[r], Vn[n] = Vn[n] || [], Vn[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Xn.unshift(e) : Xn.push(e)
        }
    }), v.Tween = Yn, Yn.prototype = {
        constructor: Yn,
        init: function(e, t, n, r, i, s) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Yn.propHooks[this.prop];
            return e && e.get ? e.get(this) : Yn.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Yn.propHooks[this.prop];
            return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this
        }
    }, Yn.prototype.init.prototype = Yn.prototype, Yn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop]
            },
            set: function(e) {
                v.fx.step[e.prop] ? v.fx.step[e.prop](e) : e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop]) ? v.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, v.each(["toggle", "show", "hide"], function(e, t) {
        var n = v.fn[t];
        v.fn[t] = function(r, i, s) {
            return r == null || typeof r == "boolean" || !e && v.isFunction(r) && v.isFunction(i) ? n.apply(this, arguments) : this.animate(Zn(t, !0), r, i, s)
        }
    }), v.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Gt).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = v.isEmptyObject(e),
                s = v.speed(t, n, r),
                o = function() {
                    var t = Kn(this, v.extend({}, e), s);
                    i && t.stop(!0)
                };
            return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = e != null && e + "queueHooks",
                    s = v.timers,
                    o = v._data(this);
                if (n) o[n] && o[n].stop && i(o[n]);
                else
                    for (n in o) o[n] && o[n].stop && Wn.test(n) && i(o[n]);
                for (n = s.length; n--;) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
                (t || !r) && v.dequeue(this, e)
            })
        }
    }), v.each({
        slideDown: Zn("show"),
        slideUp: Zn("hide"),
        slideToggle: Zn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        v.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), v.speed = function(e, t, n) {
        var r = e && typeof e == "object" ? v.extend({}, e) : {
            complete: n || !n && t || v.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !v.isFunction(t) && t
        };
        r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
        if (r.queue == null || r.queue === !0) r.queue = "fx";
        return r.old = r.complete, r.complete = function() {
            v.isFunction(r.old) && r.old.call(this), r.queue && v.dequeue(this, r.queue)
        }, r
    }, v.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, v.timers = [], v.fx = Yn.prototype.init, v.fx.tick = function() {
        var e, n = v.timers,
            r = 0;
        qn = v.now();
        for (; r < n.length; r++) e = n[r], !e() && n[r] === e && n.splice(r--, 1);
        n.length || v.fx.stop(), qn = t
    }, v.fx.timer = function(e) {
        e() && v.timers.push(e) && !Rn && (Rn = setInterval(v.fx.tick, v.fx.interval))
    }, v.fx.interval = 13, v.fx.stop = function() {
        clearInterval(Rn), Rn = null
    }, v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, v.fx.step = {}, v.expr && v.expr.filters && (v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
            return e === t.elem
        }).length
    });
    var er = /^(?:body|html)$/i;
    v.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            v.offset.setOffset(this, e, t)
        });
        var n, r, i, s, o, u, a, f = {
                top: 0,
                left: 0
            },
            l = this[0],
            c = l && l.ownerDocument;
        if (!c) return;
        return (r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
            top: f.top + u - s,
            left: f.left + a - o
        }) : f)
    }, v.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = v.css(e, "position");
            r === "static" && (e.style.position = "relative");
            var i = v(e),
                s = i.offset(),
                o = v.css(e, "top"),
                u = v.css(e, "left"),
                a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1,
                f = {},
                l = {},
                c, h;
            a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), v.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f)
        }
    }, v.fn.extend({
        position: function() {
            if (!this[0]) return;
            var e = this[0],
                t = this.offsetParent(),
                n = this.offset(),
                r = er.test(t[0].nodeName) ? {
                    top: 0,
                    left: 0
                } : t.offset();
            return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
                top: n.top - r.top,
                left: n.left - r.left
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || i.body;
                while (e && !er.test(e.nodeName) && v.css(e, "position") === "static") e = e.offsetParent;
                return e || i.body
            })
        }
    }), v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        v.fn[e] = function(i) {
            return v.access(this, function(e, i, s) {
                var o = tr(e);
                if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
                o ? o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop()) : e[i] = s
            }, e, i, arguments.length, null)
        }
    }), v.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        v.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            v.fn[i] = function(i, s) {
                var o = arguments.length && (r || typeof i != "boolean"),
                    u = r || (i === !0 || s === !0 ? "margin" : "border");
                return v.access(this, function(n, r, i) {
                    var s;
                    return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u)
                }, n, o ? i : t, o, null)
            }
        })
    }), e.jQuery = e.$ = v, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return v
    })
})(window),
function() {
    var e = this,
        t = e._,
        n = {},
        r = Array.prototype,
        i = Object.prototype,
        s = Function.prototype,
        o = r.push,
        u = r.slice,
        a = r.unshift,
        f = i.toString,
        l = i.hasOwnProperty,
        c = r.forEach,
        h = r.map,
        p = r.reduce,
        d = r.reduceRight,
        v = r.filter,
        m = r.every,
        g = r.some,
        y = r.indexOf,
        b = r.lastIndexOf,
        w = Array.isArray,
        E = Object.keys,
        S = s.bind,
        x = function(e) {
            return new q(e)
        };
    typeof exports != "undefined" ? (typeof module != "undefined" && module.exports && (exports = module.exports = x), exports._ = x) : e._ = x, x.VERSION = "1.3.3";
    var T = x.each = x.forEach = function(e, t, r) {
        if (e == null) return;
        if (c && e.forEach === c) e.forEach(t, r);
        else if (e.length === +e.length) {
            for (var i = 0, s = e.length; i < s; i++)
                if (t.call(r, e[i], i, e) === n) return
        } else
            for (var o in e)
                if (x.has(e, o) && t.call(r, e[o], o, e) === n) return
    };
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return e == null ? r : h && e.map === h ? e.map(t, n) : (T(e, function(e, i, s) {
            r[r.length] = t.call(n, e, i, s)
        }), r)
    }, x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (p && e.reduce === p) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        T(e, function(e, s, o) {
            i ? n = t.call(r, n, e, s, o) : (n = e, i = !0)
        });
        if (!i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        e == null && (e = []);
        if (d && e.reduceRight === d) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var s = x.toArray(e).reverse();
        return r && !i && (t = x.bind(t, r)), i ? x.reduce(s, t, n, r) : x.reduce(s, t)
    }, x.find = x.detect = function(e, t, n) {
        var r;
        return N(e, function(e, i, s) {
            if (t.call(n, e, i, s)) return r = e, !0
        }), r
    }, x.filter = x.select = function(e, t, n) {
        var r = [];
        return e == null ? r : v && e.filter === v ? e.filter(t, n) : (T(e, function(e, i, s) {
            t.call(n, e, i, s) && (r[r.length] = e)
        }), r)
    }, x.reject = function(e, t, n) {
        var r = [];
        return e == null ? r : (T(e, function(e, i, s) {
            t.call(n, e, i, s) || (r[r.length] = e)
        }), r)
    }, x.every = x.all = function(e, t, r) {
        var i = !0;
        return e == null ? i : m && e.every === m ? e.every(t, r) : (T(e, function(e, s, o) {
            if (!(i = i && t.call(r, e, s, o))) return n
        }), !!i)
    };
    var N = x.some = x.any = function(e, t, r) {
        t || (t = x.identity);
        var i = !1;
        return e == null ? i : g && e.some === g ? e.some(t, r) : (T(e, function(e, s, o) {
            if (i || (i = t.call(r, e, s, o))) return n
        }), !!i)
    };
    x.include = x.contains = function(e, t) {
        var n = !1;
        return e == null ? n : y && e.indexOf === y ? e.indexOf(t) != -1 : (n = N(e, function(e) {
            return e === t
        }), n)
    }, x.invoke = function(e, t) {
        var n = u.call(arguments, 2);
        return x.map(e, function(e) {
            return (x.isFunction(t) ? t : e[t]).apply(e, n)
        })
    }, x.pluck = function(e, t) {
        return x.map(e, function(e) {
            return e[t]
        })
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -Infinity;
        var r = {
            computed: -Infinity
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o >= r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.min = function(e, t, n) {
        if (!t && x.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return Infinity;
        var r = {
            computed: Infinity
        };
        return T(e, function(e, i, s) {
            var o = t ? t.call(n, e, i, s) : e;
            o < r.computed && (r = {
                value: e,
                computed: o
            })
        }), r.value
    }, x.shuffle = function(e) {
        var t, n = 0,
            r = [];
        return T(e, function(e) {
            t = Math.floor(Math.random() * ++n), r[n - 1] = r[t], r[t] = e
        }), r
    }, x.sortBy = function(e, t, n) {
        var r = C(e, t);
        return x.pluck(x.map(e, function(e, t, i) {
            return {
                value: e,
                criteria: r.call(n, e, t, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            return n === void 0 ? 1 : r === void 0 ? -1 : n < r ? -1 : n > r ? 1 : 0
        }), "value")
    };
    var C = function(e, t) {
            return x.isFunction(t) ? t : function(e) {
                return e[t]
            }
        },
        k = function(e, t, n) {
            var r = {},
                i = C(e, t);
            return T(e, function(e, t) {
                var s = i(e, t);
                n(r, s, e)
            }), r
        };
    x.groupBy = function(e, t) {
        return k(e, t, function(e, t, n) {
            (e[t] || (e[t] = [])).push(n)
        })
    }, x.countBy = function(e, t) {
        return k(e, t, function(e, t, n) {
            e[t] || (e[t] = 0), e[t]++
        })
    }, x.sortedIndex = function(e, t, n) {
        n || (n = x.identity);
        var r = n(t),
            i = 0,
            s = e.length;
        while (i < s) {
            var o = i + s >> 1;
            n(e[o]) < r ? i = o + 1 : s = o
        }
        return i
    }, x.toArray = function(e) {
        return e ? x.isArray(e) ? u.call(e) : x.isArguments(e) ? u.call(e) : e.toArray && x.isFunction(e.toArray) ? e.toArray() : x.values(e) : []
    }, x.size = function(e) {
        return x.isArray(e) ? e.length : x.keys(e).length
    }, x.first = x.head = x.take = function(e, t, n) {
        return t != null && !n ? u.call(e, 0, t) : e[0]
    }, x.initial = function(e, t, n) {
        return u.call(e, 0, e.length - (t == null || n ? 1 : t))
    }, x.last = function(e, t, n) {
        return t != null && !n ? u.call(e, Math.max(e.length - t, 0)) : e[e.length - 1]
    }, x.rest = x.tail = function(e, t, n) {
        return u.call(e, t == null || n ? 1 : t)
    }, x.compact = function(e) {
        return x.filter(e, function(e) {
            return !!e
        })
    };
    var L = function(e, t, n) {
        return T(e, function(e) {
            x.isArray(e) ? t ? o.apply(n, e) : L(e, t, n) : n.push(e)
        }), n
    };
    x.flatten = function(
        e, t) {
        return L(e, t, [])
    }, x.without = function(e) {
        return x.difference(e, u.call(arguments, 1))
    }, x.uniq = x.unique = function(e, t, n) {
        var r = n ? x.map(e, n) : e,
            i = [];
        return x.reduce(r, function(n, r, s) {
            if (t ? x.last(n) !== r || !n.length : !x.include(n, r)) n.push(r), i.push(e[s]);
            return n
        }, []), i
    }, x.union = function() {
        return x.uniq(L(arguments, !0, []))
    }, x.intersection = function(e) {
        var t = u.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function(e) {
        var t = L(u.call(arguments, 1), !0, []);
        return x.filter(e, function(e) {
            return !x.include(t, e)
        })
    }, x.zip = function() {
        var e = u.call(arguments),
            t = x.max(x.pluck(e, "length")),
            n = new Array(t);
        for (var r = 0; r < t; r++) n[r] = x.pluck(e, "" + r);
        return n
    }, x.zipObject = function(e, t) {
        var n = {};
        for (var r = 0, i = e.length; r < i; r++) n[e[r]] = t[r];
        return n
    }, x.indexOf = function(e, t, n) {
        if (e == null) return -1;
        var r, i;
        if (n) return r = x.sortedIndex(e, t), e[r] === t ? r : -1;
        if (y && e.indexOf === y) return e.indexOf(t);
        for (r = 0, i = e.length; r < i; r++)
            if (e[r] === t) return r;
        return -1
    }, x.lastIndexOf = function(e, t) {
        if (e == null) return -1;
        if (b && e.lastIndexOf === b) return e.lastIndexOf(t);
        var n = e.length;
        while (n--)
            if (e[n] === t) return n;
        return -1
    }, x.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0), n = arguments[2] || 1;
        var r = Math.max(Math.ceil((t - e) / n), 0),
            i = 0,
            s = new Array(r);
        while (i < r) s[i++] = e, e += n;
        return s
    };
    var A = function() {};
    x.bind = function(t, n) {
        var r, i;
        if (t.bind === S && S) return S.apply(t, u.call(arguments, 1));
        if (!x.isFunction(t)) throw new TypeError;
        return i = u.call(arguments, 2), r = function() {
            if (this instanceof r) {
                A.prototype = t.prototype;
                var e = new A,
                    s = t.apply(e, i.concat(u.call(arguments)));
                return Object(s) === s ? s : e
            }
            return t.apply(n, i.concat(u.call(arguments)))
        }
    }, x.bindAll = function(e) {
        var t = u.call(arguments, 1);
        return t.length == 0 && (t = x.functions(e)), T(t, function(t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity),
            function() {
                var r = t.apply(this, arguments);
                return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, x.delay = function(e, t) {
        var n = u.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n)
        }, t)
    }, x.defer = function(e) {
        return x.delay.apply(x, [e, 1].concat(u.call(arguments, 1)))
    }, x.throttle = function(e, t) {
        var n, r, i, s, o, u, a = x.debounce(function() {
            o = s = !1
        }, t);
        return function() {
            n = this, r = arguments;
            var f = function() {
                i = null, o && e.apply(n, r), a()
            };
            return i || (i = setTimeout(f, t)), s ? o = !0 : (s = !0, u = e.apply(n, r)), a(), u
        }
    }, x.debounce = function(e, t, n) {
        var r;
        return function() {
            var i = this,
                s = arguments,
                o = function() {
                    r = null, n || e.apply(i, s)
                },
                u = n && !r;
            clearTimeout(r), r = setTimeout(o, t), u && e.apply(i, s)
        }
    }, x.once = function(e) {
        var t = !1,
            n;
        return function() {
            return t ? n : (t = !0, n = e.apply(this, arguments))
        }
    }, x.wrap = function(e, t) {
        return function() {
            var n = [e].concat(u.call(arguments, 0));
            return t.apply(this, n)
        }
    }, x.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function(e, t) {
        return e <= 0 ? t() : function() {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, x.keys = E || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var n in e) x.has(e, n) && (t[t.length] = n);
        return t
    }, x.values = function(e) {
        return x.map(e, x.identity)
    }, x.functions = x.methods = function(e) {
        var t = [];
        for (var n in e) x.isFunction(e[n]) && t.push(n);
        return t.sort()
    }, x.extend = function(e) {
        return T(u.call(arguments, 1), function(t) {
            for (var n in t) e[n] = t[n]
        }), e
    }, x.pick = function(e) {
        var t = {};
        return T(L(u.call(arguments, 1), !0, []), function(n) {
            n in e && (t[n] = e[n])
        }), t
    }, x.defaults = function(e) {
        return T(u.call(arguments, 1), function(t) {
            for (var n in t) e[n] == null && (e[n] = t[n])
        }), e
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function(e, t) {
        return t(e), e
    };
    var O = function(e, t, n) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        e._chain && (e = e._wrapped), t._chain && (t = t._wrapped);
        if (e.isEqual && x.isFunction(e.isEqual)) return e.isEqual(t);
        if (t.isEqual && x.isFunction(t.isEqual)) return t.isEqual(e);
        var r = f.call(e);
        if (r != f.call(t)) return !1;
        switch (r) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return !1;
        var i = n.length;
        while (i--)
            if (n[i] == e) return !0;
        n.push(e);
        var s = 0,
            o = !0;
        if (r == "[object Array]") {
            s = e.length, o = s == t.length;
            if (o)
                while (s--)
                    if (!(o = s in e == s in t && O(e[s], t[s], n))) break
        } else {
            if ("constructor" in e != "constructor" in t || e.constructor != t.constructor) return !1;
            for (var u in e)
                if (x.has(e, u)) {
                    s++;
                    if (!(o = x.has(t, u) && O(e[u], t[u], n))) break
                }
            if (o) {
                for (u in t)
                    if (x.has(t, u) && !(s--)) break;
                o = !s
            }
        }
        return n.pop(), o
    };
    x.isEqual = function(e, t) {
        return O(e, t, [])
    }, x.isEmpty = function(e) {
        if (e == null) return !0;
        if (x.isArray(e) || x.isString(e)) return e.length === 0;
        for (var t in e)
            if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function(e) {
        return !!e && e.nodeType == 1
    }, x.isArray = w || function(e) {
        return f.call(e) == "[object Array]"
    }, x.isObject = function(e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        x["is" + e] = function(t) {
            return f.call(t) == "[object " + e + "]"
        }
    }), x.isArguments(arguments) || (x.isArguments = function(e) {
        return !!e && !!x.has(e, "callee")
    }), x.isFinite = function(e) {
        return x.isNumber(e) && isFinite(e)
    }, x.isNaN = function(e) {
        return e !== e
    }, x.isBoolean = function(e) {
        return e === !0 || e === !1 || f.call(e) == "[object Boolean]"
    }, x.isNull = function(e) {
        return e === null
    }, x.isUndefined = function(e) {
        return e === void 0
    }, x.has = function(e, t) {
        return l.call(e, t)
    }, x.noConflict = function() {
        return e._ = t, this
    }, x.identity = function(e) {
        return e
    }, x.times = function(e, t, n) {
        for (var r = 0; r < e; r++) t.call(n, r)
    };
    var M = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        },
        _ = /[&<>"'\/]/g;
    x.escape = function(e) {
        return ("" + e).replace(_, function(e) {
            return M[e]
        })
    }, x.result = function(e, t) {
        if (e == null) return null;
        var n = e[t];
        return x.isFunction(n) ? n.call(e) : n
    }, x.mixin = function(e) {
        T(x.functions(e), function(t) {
            U(t, x[t] = e[t])
        })
    };
    var D = 0;
    x.uniqueId = function(e) {
        var t = D++;
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var P = /.^/,
        H = {
            "\\": "\\",
            "'": "'",
            r: "\r",
            n: "\n",
            t: "	",
            u2028: "\u2028",
            u2029: "\u2029"
        };
    for (var B in H) H[H[B]] = B;
    var j = /\\|'|\r|\n|\t|\u2028|\u2029/g,
        F = /\\(\\|'|r|n|t|u2028|u2029)/g,
        I = function(e) {
            return e.replace(F, function(e, t) {
                return H[t]
            })
        };
    x.template = function(e, t, n) {
        n = x.defaults(n || {}, x.templateSettings);
        var r = "__p+='" + e.replace(j, function(e) {
            return "\\" + H[e]
        }).replace(n.escape || P, function(e, t) {
            return "'+\n((__t=(" + I(t) + "))==null?'':_.escape(__t))+\n'"
        }).replace(n.interpolate || P, function(e, t) {
            return "'+\n((__t=(" + I(t) + "))==null?'':__t)+\n'"
        }).replace(n.evaluate || P, function(e, t) {
            return "';\n" + I(t) + "\n__p+='"
        }) + "';\n";
        n.variable || (r = "with(obj||{}){\n" + r + "}\n"), r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'')};\n" + r + "return __p;\n";
        var i = new Function(n.variable || "obj", "_", r);
        if (t) return i(t, x);
        var s = function(e) {
            return i.call(this, e, x)
        };
        return s.source = "function(" + (n.variable || "obj") + "){\n" + r + "}", s
    }, x.chain = function(e) {
        return x(e).chain()
    };
    var q = function(e) {
        this._wrapped = e
    };
    x.prototype = q.prototype;
    var R = function(e, t) {
            return t ? x(e).chain() : e
        },
        U = function(e, t) {
            q.prototype[e] = function() {
                var e = u.call(arguments);
                return a.call(e, this._wrapped), R(t.apply(x, e), this._chain)
            }
        };
    x.mixin(x), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = r[e];
        q.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), (e == "shift" || e == "splice") && n.length === 0 && delete n[0], R(n, this._chain)
        }
    }), T(["concat", "join", "slice"], function(e) {
        var t = r[e];
        q.prototype[e] = function() {
            return R(t.apply(this._wrapped, arguments), this._chain)
        }
    }), q.prototype.chain = function() {
        return this._chain = !0, this
    }, q.prototype.value = function() {
        return this._wrapped
    }
}.call(this),
    function() {
        var e = this,
            t = e.Backbone,
            n = Array.prototype.splice,
            r;
        typeof exports != "undefined" ? r = exports : r = e.Backbone = {}, r.VERSION = "0.9.2";
        var i = e._;
        !i && typeof require != "undefined" && (i = require("underscore")), r.$ = e.jQuery || e.Zepto || e.ender, r.noConflict = function() {
            return e.Backbone = t, this
        }, r.emulateHTTP = !1, r.emulateJSON = !1;
        var s = /\s+/,
            o = r.Events = {
                on: function(e, t, n) {
                    var r, i, o;
                    if (!t) return this;
                    e = e.split(s), r = this._callbacks || (this._callbacks = {});
                    while (i = e.shift()) o = r[i] || (r[i] = []), o.push(t, n);
                    return this
                },
                off: function(e, t, n) {
                    var r, o, u, a;
                    if (!(o = this._callbacks)) return this;
                    if (!(e || t || n)) return delete this._callbacks, this;
                    e = e ? e.split(s) : i.keys(o);
                    while (r = e.shift()) {
                        if (!(u = o[r]) || !t && !n) {
                            delete o[r];
                            continue
                        }
                        for (a = u.length - 2; a >= 0; a -= 2) t && u[a] !== t || n && u[a + 1] !== n || u.splice(a, 2)
                    }
                    return this
                },
                trigger: function(e) {
                    var t, n, r, i, o, u, a, f;
                    if (!(n = this._callbacks)) return this;
                    f = [], e = e.split(s);
                    for (i = 1, o = arguments.length; i < o; i++) f[i - 1] = arguments[i];
                    while (t = e.shift()) {
                        if (a = n.all) a = a.slice();
                        if (r = n[t]) r = r.slice();
                        if (r)
                            for (i = 0, o = r.length; i < o; i += 2) r[i].apply(r[i + 1] || this, f);
                        if (a) {
                            u = [t].concat(f);
                            for (i = 0, o = a.length; i < o; i += 2) a[i].apply(a[i + 1] || this, u)
                        }
                    }
                    return this
                }
            };
        o.bind = o.on, o.unbind = o.off;
        var u = r.Model = function(e, t) {
            var n;
            e || (e = {}), t && t.collection && (this.collection = t.collection), t && t.parse && (e = this.parse(e));
            if (n = N(this, "defaults")) e = i.extend({}, n, e);
            this.attributes = {}, this._escapedAttributes = {}, this.cid = i.uniqueId("c"), this.changed = {}, this._silent = {}, this._pending = {}, this.set(e, {
                silent: !0
            }), this.changed = {}, this._silent = {}, this._pending = {}, this._previousAttributes = i.clone(this.attributes), this.initialize.apply(this, arguments)
        };
        i.extend(u.prototype, o, {
            changed: null,
            _silent: null,
            _pending: null,
            idAttribute: "id",
            initialize: function() {},
            toJSON: function(e) {
                return i.clone(this.attributes)
            },
            sync: function() {
                return r.sync.apply(this, arguments)
            },
            get: function(e) {
                return this.attributes[e]
            },
            escape: function(e) {
                var t;
                if (t = this._escapedAttributes[e]) return t;
                var n = this.get(e);
                return this._escapedAttributes[e] = i.escape(n == null ? "" : "" + n)
            },
            has: function(e) {
                return this.get(e) != null
            },
            set: function(e, t, n) {
                var r, s, o;
                i.isObject(e) || e == null ? (r = e, n = t) : (r = {}, r[e] = t), n || (n = {});
                if (!r) return this;
                r instanceof u && (r = r.attributes);
                if (n.unset)
                    for (s in r) r[s] = void 0;
                if (!this._validate(r, n)) return !1;
                this.idAttribute in r && (this.id = r[this.idAttribute]);
                var a = n.changes = {},
                    f = this.attributes,
                    l = this._escapedAttributes,
                    c = this._previousAttributes || {};
                for (s in r) {
                    o = r[s];
                    if (!i.isEqual(f[s], o) || n.unset && i.has(f, s)) delete l[s], (n.silent ? this._silent : a)[s] = !0;
                    n.unset ? delete f[s] : f[s] = o, !i.isEqual(c[s], o) || i.has(f, s) !== i.has(c, s) ? (this.changed[s] = o, n.silent || (this._pending[s] = !0)) : (delete this.changed[s], delete this._pending[s])
                }
                return n.silent || this.change(n), this
            },
            unset: function(e, t) {
                return t = i.extend({}, t, {
                    unset: !0
                }), this.set(e, null, t)
            },
            clear: function(e) {
                return e = i.extend({}, e, {
                    unset: !0
                }), this.set(i.clone(this.attributes), e)
            },
            fetch: function(e) {
                e = e ? i.clone(e) : {};
                var t = this,
                    n = e.success;
                return e.success = function(r, i, s) {
                    if (!t.set(t.parse(r, s), e)) return !1;
                    n && n(t, r, e), t.trigger("sync", t, r, e)
                }, e.error = r.wrapError(e.error, t, e), this.sync("read", this, e)
            },
            save: function(e, t, n) {
                var s, o, u;
                i.isObject(e) || e == null ? (s = e, n = t) : (s = {}, s[e] = t), n = n ? i.clone(n) : {};
                if (n.wait) {
                    if (!this._validate(s, n)) return !1;
                    o = i.clone(this.attributes)
                }
                var a = i.extend({}, n, {
                    silent: !0
                });
                if (s && !this.set(s, n.wait ? a : n)) return !1;
                if (!s && !this.isValid()) return !1;
                var f = this,
                    l = n.success;
                n.success = function(e, t, r) {
                    u = !0;
                    var o = f.parse(e, r);
                    n.wait && (o = i.extend(s || {}, o));
                    if (!f.set(o, n)) return !1;
                    l && l(f, e, n), f.trigger("sync", f, e, n)
                }, n.error = r.wrapError(n.error, f, n);
                var c = this.sync(this.isNew() ? "create" : "update", this, n);
                return !u && n.wait && (this.clear(a), this.set(o, a)), c
            },
            destroy: function(e) {
                e = e ? i.clone(e) : {};
                var t = this,
                    n = e.success,
                    s = function() {
                        t.trigger("destroy", t, t.collection, e)
                    };
                e.success = function(r) {
                    (e.wait || t.isNew()) && s(), n && n(t, r, e), t.isNew() || t.trigger("sync", t, r, e)
                };
                if (this.isNew()) return e.success(), !1;
                e.error = r.wrapError(e.error, t, e);
                var o = this.sync("delete", this, e);
                return e.wait || s(), o
            },
            url: function() {
                var e = N(this, "urlRoot") || N(this.collection, "url") || C();
                return this.isNew() ? e : e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.attributes)
            },
            isNew: function() {
                return this.id == null
            },
            change: function(e) {
                e || (e = {});
                var t = this._changing;
                this._changing = !0;
                for (var n in this._silent) this._pending[n] = !0;
                var r = i.extend({}, e.changes, this._silent);
                this._silent = {};
                for (var n in r) this.trigger("change:" + n, this, this.get(n), e);
                if (t) return this;
                while (!i.isEmpty(this._pending)) {
                    this._pending = {}, this.trigger("change", this, e);
                    for (var n in this.changed) {
                        if (this._pending[n] || this._silent[n]) continue;
                        delete this.changed[n]
                    }
                    this._previousAttributes = i.clone(this.attributes)
                }
                return this._changing = !1, this
            },
            hasChanged: function(e) {
                return e == null ? !i.isEmpty(this.changed) : i.has(this.changed, e)
            },
            changedAttributes: function(e) {
                if (!e) return this.hasChanged() ? i.clone(this.changed) : !1;
                var t, n = !1,
                    r = this._previousAttributes;
                for (var s in e) {
                    if (i.isEqual(r[s], t = e[s])) continue;
                    (n || (n = {}))[s] = t
                }
                return n
            },
            previous: function(e) {
                return e == null || !this._previousAttributes ? null : this._previousAttributes[e]
            },
            previousAttributes: function() {
                return i.clone(this._previousAttributes)
            },
            isValid: function() {
                return !this.validate || !this.validate(this.attributes)
            },
            _validate: function(e, t) {
                if (t.silent || !this.validate) return !0;
                e = i.extend({}, this.attributes, e);
                var n = this.validate(e, t);
                return n ? (t && t.error ? t.error(this, n, t) : this.trigger("error", this, n, t), !1) : !0
            }
        });
        var a = r.Collection = function(e, t) {
            t || (t = {}), t.model && (this.model = t.model), t.comparator !== void 0 && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, {
                silent: !0,
                parse: t.parse
            })
        };
        i.extend(a.prototype, o, {
            model: u,
            initialize: function() {},
            toJSON: function(e) {
                return this.map(function(t) {
                    return t.toJSON(e)
                })
            },
            sync: function() {
                return r.sync.apply(this, arguments)
            },
            add: function(e, t) {
                var r, s, o, u, a, f, l = {},
                    c = {},
                    h = [];
                t || (t = {}), e = i.isArray(e) ? e.slice() : [e];
                for (r = 0, o = e.length; r < o; r++) {
                    if (!(u = e[r] = this._prepareModel(e[r], t))) throw new Error("Can't add an invalid model to a collection");
                    a = u.cid, f = u.id;
                    if (l[a] || this._byCid[a] || f != null && (c[f] || this._byId[f])) {
                        h.push(r);
                        continue
                    }
                    l[a] = c[f] = u
                }
                r = h.length;
                while (r--) h[r] = e.splice(h[r], 1)[0];
                for (r = 0, o = e.length; r < o; r++)(u = e[r]).on("all", this._onModelEvent, this), this._byCid[u.cid] = u, u.id != null && (this._byId[u.id] = u);
                this.length += o, s = t.at != null ? t.at : this.models.length, n.apply(this.models, [s, 0].concat(e));
                if (t.merge)
                    for (r = 0, o = h.length; r < o; r++)(u = this._byId[h[r].id]) && u.set(h[r], t);
                this.comparator && t.at == null && this.sort({
                    silent: !0
                });
                if (t.silent) return this;
                for (r = 0, o = this.models.length; r < o; r++) {
                    if (!l[(u = this.models[r]).cid]) continue;
                    t.index = r, u.trigger("add", u, this, t)
                }
                return this
            },
            remove: function(e, t) {
                var n, r, s, o;
                t || (t = {}), e = i.isArray(e) ? e.slice() : [e];
                for (n = 0, r = e.length; n < r; n++) {
                    o = this.getByCid(e[n]) || this.get(e[n]);
                    if (!o) continue;
                    delete this._byId[o.id], delete this._byCid[o.cid], s = this.indexOf(o), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, o.trigger("remove", o, this, t)), this._removeReference(o)
                }
                return this
            },
            push: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, t), e
            },
            pop: function(e) {
                var t = this.at(this.length - 1);
                return this.remove(t, e), t
            },
            unshift: function(e, t) {
                return e = this._prepareModel(e, t), this.add(e, i.extend({
                    at: 0
                }, t)), e
            },
            shift: function(e) {
                var t = this.at(0);
                return this.remove(t, e), t
            },
            slice: function(e, t) {
                return this.models.slice(e, t)
            },
            get: function(e) {
                return e == null ? void 0 : this._byId[e.id != null ? e.id : e]
            },
            getByCid: function(e) {
                return e && this._byCid[e.cid || e]
            },
            at: function(e) {
                return this.models[e]
            },
            where: function(e) {
                return i.isEmpty(e) ? [] : this.filter(function(t) {
                    for (var n in e)
                        if (e[n] !== t.get(n)) return !1;
                    return !0
                })
            },
            sort: function(e) {
                e || (e = {});
                if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                var t = i.bind(this.comparator, this);
                return this.comparator.length === 1 ? this.models = this.sortBy(t) : this.models.sort(t), e.silent || this.trigger("reset", this, e), this
            },
            pluck: function(e) {
                return i.map(this.models, function(t) {
                    return t.get(e)
                })
            },
            reset: function(e, t) {
                e || (e = []), t || (t = {});
                for (var n = 0, r = this.models.length; n < r; n++) this._removeReference(this.models[n]);
                return this._reset(), this.add(e, i.extend({
                    silent: !0
                }, t)), t.silent || this.trigger("reset", this, t), this
            },
            fetch: function(e) {
                e = e ? i.clone(e) : {}, e.parse === void 0 && (e.parse = !0);
                var t = this,
                    n = e.success;
                return e.success = function(r, i, s) {
                    t[e.add ? "add" : "reset"](t.parse(r, s), e), n && n(t, r, e), t.trigger("sync", t, r, e)
                }, e.error = r.wrapError(e.error, t, e), this.sync("read", this, e)
            },
            create: function(e, t) {
                var n = this;
                t = t ? i.clone(t) : {}, e = this._prepareModel(e, t);
                if (!e) return !1;
                t.wait || n.add(e, t);
                var r = t.success;
                return t.success = function(e, t, i) {
                    i.wait && n.add(e, i), r && r(e, t, i)
                }, e.save(null, t), e
            },
            parse: function(e, t) {
                return e
            },
            clone: function() {
                return new this.constructor(this.models)
            },
            chain: function() {
                return i(this.models).chain()
            },
            _reset: function(e) {
                this.length = 0, this.models = [], this._byId = {}, this._byCid = {}
            },
            _prepareModel: function(e, t) {
                if (e instanceof u) return e.collection || (e.collection = this), e;
                t || (t = {}), t.collection = this;
                var n = new this.model(e, t);
                return n._validate(n.attributes, t) ? n : !1
            },
            _removeReference: function(e) {
                this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
            },
            _onModelEvent: function(e, t, n, r) {
                if ((e === "add" || e === "remove") && n !== this) return;
                e === "destroy" && this.remove(t, r), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], t.id != null && (this._byId[t.id] = t)), this.trigger.apply(this, arguments)
            }
        });
        var f = ["forEach", "each", "map", "reduce", "reduceRight", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "sortBy", "sortedIndex", "toArray", "size", "first", "initial", "rest", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "groupBy"];
        i.each(f, function(e) {
            a.prototype[e] = function() {
                return i[e].apply(i, [this.models].concat(i.toArray(arguments)))
            }
        });
        var l = r.Router = function(e) {
                e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
            },
            c = /:\w+/g,
            h = /\*\w+/g,
            p = /[-[\]{}()+?.,\\^$|#\s]/g;
        i.extend(l.prototype, o, {
            initialize: function() {},
            route: function(e, t, n) {
                return r.history || (r.history = new d), i.isRegExp(e) || (e = this._routeToRegExp(e)), n || (n = this[t]), r.history.route(e, i.bind(function(i) {
                    var s = this._extractParameters(e, i);
                    n && n.apply(this, s), this.trigger.apply(this, ["route:" + t].concat(s)), r.history.trigger("route", this, t, s)
                }, this)), this
            },
            navigate: function(e, t) {
                r.history.navigate(e, t)
            },
            _bindRoutes: function() {
                if (!this.routes) return;
                var e = [];
                for (var t in this.routes) e.unshift([t, this.routes[t]]);
                for (var n = 0, r = e.length; n < r; n++) this.route(e[n][0], e[n][1], this[e[n][1]])
            },
            _routeToRegExp: function(e) {
                return e = e.replace(p, "\\$&").replace(c, "([^/]+)").replace(h, "(.*?)"), new RegExp("^" + e + "$")
            },
            _extractParameters: function(e, t) {
                return e.exec(t).slice(1)
            }
        });
        var d = r.History = function(t) {
                this.handlers = [], i.bindAll(this, "checkUrl"), this.location = t && t.location || e.location, this.history = t && t.history || e.history
            },
            v = /^[#\/]/,
            m = /msie [\w.]+/,
            g = /\/$/;
        d.started = !1, i.extend(d.prototype, o, {
            interval: 50,
            getHash: function(e) {
                var t = (e || this).location.href.match(/#(.*)$/);
                return t ? t[1] : ""
            },
            getFragment: function(e, t) {
                if (e == null)
                    if (this._hasPushState || !this._wantsHashChange || t) {
                        e = this.location.pathname;
                        var n = this.options.root.replace(g, "");
                        e.indexOf(n) || (e = e.substr(n.length))
                    } else e = this.getHash();
                return decodeURIComponent(e.replace(v, ""))
            },
            start: function(e) {
                if (d.started) throw new Error("Backbone.history has already been started");
                d.started = !0, this.options = i.extend({}, {
                    root: "/"
                }, this.options, e), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                var t = this.getFragment(),
                    n = document.documentMode,
                    s = m.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
                g.test(this.options.root) || (this.options.root += "/"), s && this._wantsHashChange && (this.iframe = r.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? r.$(window).bind("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !s ? r.$(window).bind("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
                var o = this.location,
                    u = o.pathname.replace(/[^/]$/, "$&/") === this.options.root && !o.search;
                if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !u) return this.fragment = this.getFragment(null, !0), this.location.replace(this.options.root + this.location.search + "#" + this.fragment), !0;
                this._wantsPushState && this._hasPushState && u && o.hash && (this.fragment = this.getHash().replace(v, ""), this.history.replaceState({}, document.title, o.protocol + "//" + o.host + this.options.root + this.fragment));
                if (!this.options.silent) return this.loadUrl()
            },
            stop: function() {
                r.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), d.started = !1
            },
            route: function(e, t) {
                this.handlers.unshift({
                    route: e,
                    callback: t
                })
            },
            checkUrl: function(e) {
                var t = this.getFragment();
                t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe)));
                if (t === this.fragment) return !1;
                this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
            },
            loadUrl: function(e) {
                var t = this.fragment = this.getFragment(e),
                    n = i.any(this.handlers, function(e) {
                        if (e.route.test(t)) return e.callback(t), !0
                    });
                return n
            },
            navigate: function(e, t) {
                if (!d.started) return !1;
                if (!t || t === !0) t = {
                    trigger: t
                };
                var n = (e || "").replace(v, "");
                if (this.fragment === n) return;
                this.fragment = n;
                var r = (n.indexOf(this.options.root) !== 0 ? this.options.root : "") + n;
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, r);
                else {
                    if (!this._wantsHashChange) return this.location.assign(r);
                    this._updateHash(this.location, n, t.replace), this.iframe && n !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, n, t.replace))
                }
                t.trigger && this.loadUrl(e)
            },
            _updateHash: function(e, t, n) {
                n ? e.replace(e.href.replace(/(javascript:|#).*$/, "") + "#" + t) : e.hash = t
            }
        });
        var y = r.View = function(e) {
                this.cid = i.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
            },
            b = /^(\S+)\s*(.*)$/,
            w = ["model", "collection", "el", "id", "attributes", "className", "tagName"];
        i.extend(y.prototype, o, {
            tagName: "div",
            $: function(e) {
                return this.$el.find(e)
            },
            initialize: function() {},
            render: function() {
                return this
            },
            remove: function() {
                return this.$el.remove(), this
            },
            make: function(e, t, n) {
                var i = document.createElement(e);
                return t && r.$(i).attr(t), n != null && r.$(i).html(n), i
            },
            setElement: function(e, t) {
                return this.$el && this.undelegateEvents(), this.$el = e instanceof r.$ ? e : r.$(e), this.el = this.$el[0], t !== !1 && this.delegateEvents(), this
            },
            delegateEvents: function(e) {
                if (!e && !(e = N(this, "events"))) return;
                this.undelegateEvents();
                for (var t in e) {
                    var n = e[t];
                    i.isFunction(n) || (n = this[e[t]]);
                    if (!n) throw new Error('Method "' + e[t] + '" does not exist');
                    var r = t.match(b),
                        s = r[1],
                        o = r[2];
                    n = i.bind(n, this), s += ".delegateEvents" + this.cid, o === "" ? this.$el.bind(s, n) : this.$el.delegate(o, s, n)
                }
            },
            undelegateEvents: function() {
                this.$el.unbind(".delegateEvents" + this.cid)
            },
            _configure: function(e) {
                this.options && (e = i.extend({}, this.options, e));
                for (var t = 0, n = w.length; t < n; t++) {
                    var r = w[t];
                    e[r] && (this[r] = e[r])
                }
                this.options = e
            },
            _ensureElement: function() {
                if (!this.el) {
                    var e = i.extend({}, N(this, "attributes"));
                    this.id && (e.id = N(this, "id")), this.className && (e["class"] = N(this, "className")), this.setElement(this.make(N(this, "tagName"), e), !1)
                } else this.setElement(this.el, !1)
            }
        });
        var E = function(e, t) {
            return T(this, e, t)
        };
        u.extend = a.extend = l.extend = y.extend = E;
        var S = {
            create: "POST",
            update: "PUT",
            "delete": "DELETE",
            read: "GET"
        };
        r.sync = function(e, t, n) {
            var s = S[e];
            n || (n = {});
            var o = {
                type: s,
                dataType: "json"
            };
            return n.url || (o.url = N(t, "url") || C()), !n.data && t && (e === "create" || e === "update") && (o.contentType = "application/json", o.data = JSON.stringify(t)), r.emulateJSON && (o.contentType = "application/x-www-form-urlencoded", o.data = o.data ? {
                model: o.data
            } : {}), r.emulateHTTP && (s === "PUT" || s === "DELETE") && (r.emulateJSON && (o.data._method = s), o.type = "POST", o.beforeSend = function(e) {
                e.setRequestHeader("X-HTTP-Method-Override", s)
            }), o.type !== "GET" && !r.emulateJSON && (o.processData = !1), r.ajax(i.extend(o, n))
        }, r.ajax = function() {
            return r.$.ajax.apply(r.$, arguments)
        }, r.wrapError = function(e, t, n) {
            return function(r, i) {
                i = r === t ? i : r, e ? e(t, i, n) : t.trigger("error", t, i, n)
            }
        };
        var x = function() {},
            T = function(e, t, n) {
                var r;
                return t && t.hasOwnProperty("constructor") ? r = t.constructor : r = function() {
                    e.apply(this, arguments)
                }, i.extend(r, e), x.prototype = e.prototype, r.prototype = new x, t && i.extend(r.prototype, t), n && i.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r
            },
            N = function(e, t) {
                return !e || !e[t] ? null : i.isFunction(e[t]) ? e[t]() : e[t]
            },
            C = function() {
                throw new Error('A "url" property or function must be specified')
            }
    }.call(this),
    function(e, t, n) {
        t.infinitescroll = function(n, r, i) {
            this.element = t(i), this._create(n, r) || (this.failed = !0)
        }, t.infinitescroll.defaults = {
            loading: {
                finished: n,
                finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
                img: "http://www.infinite-scroll.com/loading.gif",
                msg: null,
                msgText: "<em>Loading the next set of posts...</em>",
                selector: null,
                speed: "fast",
                start: n
            },
            state: {
                isDuringAjax: !1,
                isInvalidPage: !1,
                isDestroyed: !1,
                isDone: !1,
                isPaused: !1,
                currPage: 1
            },
            callback: n,
            debug: !1,
            behavior: n,
            binder: t(e),
            nextSelector: "div.navigation a:first",
            navSelector: "div.navigation",
            contentSelector: null,
            extraScrollPx: 150,
            itemSelector: "div.post",
            animate: !1,
            pathParse: n,
            dataType: "html",
            appendCallback: !0,
            bufferPx: 40,
            errorCallback: function() {},
            infid: 0,
            pixelsFromNavToBottom: n,
            path: n
        }, t.infinitescroll.prototype = {
            _binding: function(t) {
                var r = this,
                    i = r.options;
                i.v = "2.0b2.111027";
                if (!!i.behavior && this["_binding_" + i.behavior] !== n) {
                    this["_binding_" + i.behavior].call(this);
                    return
                }
                if (t !== "bind" && t !== "unbind") return this._debug("Binding value  " + t + " not valid"), !1;
                t == "unbind" ? this.options.binder.unbind("smartscroll.infscr." + r.options.infid) : this.options.binder[t]("smartscroll.infscr." + r.options.infid, function() {
                    r.scroll()
                }), this._debug("Binding", t)
            },
            _create: function(r, i) {
                var s = t.extend(!0, {}, t.infinitescroll.defaults, r);
                if (!this._validate(r)) return !1;
                this.options = s;
                var o = t(s.nextSelector).attr("href");
                return o ? (s.path = this._determinepath(o), s.contentSelector = s.contentSelector || this.element, s.loading.selector = s.loading.selector || s.contentSelector, s.loading.msg = s.loading.msg || t('<div id="infscr-loading"><img alt="Loading..." src="' + s.loading.img + '" /><div>' + s.loading.msgText + "</div></div>"), (new Image).src = s.loading.img, s.pixelsFromNavToBottom = t(document).height() - t(s.navSelector).offset().top, s.loading.start = s.loading.start || function() {
                    t("#moar-posts").hasClass("no-click") && t("#boxes").trigger("spin"), t(s.navSelector).hide(), s.loading.msg.appendTo(s.loading.selector).show(s.loading.speed, function() {
                        beginAjax(s)
                    })
                }, s.loading.finished = s.loading.finished || function() {
                    s.loading.msg.fadeOut("normal")
                }, s.callback = function(e, r) {
                    !!s.behavior && e["_callback_" + s.behavior] !== n && e["_callback_" + s.behavior].call(t(s.contentSelector)[0], r), i && i.call(t(s.contentSelector)[0], r, s)
                }, this._setup(), !0) : (this._debug("Navigation selector not found"), !1)
            },
            _debug: function() {
                if (this.options && this.options.debug) return e.console && console.log.call(console, arguments)
            },
            _determinepath: function(t) {
                var r = this.options;
                if (!r.behavior || this["_determinepath_" + r.behavior] === n) {
                    if (!r.pathParse) {
                        if (t.match(/^(.*?)\b2\b(.*?$)/)) t = t.match(/^(.*?)\b2\b(.*?$)/).slice(1);
                        else if (t.match(/^(.*?)2(.*?$)/)) {
                            if (t.match(/^(.*?page=)2(\/.*|$)/)) return t = t.match(/^(.*?page=)2(\/.*|$)/).slice(1), t;
                            t = t.match(/^(.*?)2(.*?$)/).slice(1)
                        } else {
                            if (t.match(/^(.*?page=)1(\/.*|$)/)) return t = t.match(/^(.*?page=)1(\/.*|$)/).slice(1), t;
                            this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), r.state.isInvalidPage = !0
                        }
                        return this._debug("determinePath", t), t
                    }
                    return this._debug("pathParse manual"), r.pathParse(t, this.options.state.currPage + 1)
                }
                this["_determinepath_" + r.behavior].call(this, t);
                return
            },
            _error: function(t) {
                var r = this.options;
                if (!!r.behavior && this["_error_" + r.behavior] !== n) {
                    this["_error_" + r.behavior].call(this, t);
                    return
                }
                t !== "destroy" && t !== "end" && (t = "unknown"), this._debug("Error", t), t == "end" && this._showdonemsg(), r.state.isDone = !0, r.state.currPage = 1, r.state.isPaused = !1, this._binding("unbind")
            },
            _loadcallback: function(i, s) {
                var o = this.options,
                    u = this.options.callback,
                    a = o.state.isDone ? "done" : o.appendCallback ? "append" : "no-append",
                    f;
                if (!!o.behavior && this["_loadcallback_" + o.behavior] !== n) {
                    this["_loadcallback_" + o.behavior].call(this, i, s);
                    return
                }
                switch (a) {
                    case "done":
                        return this._showdonemsg(), !1;
                    case "no-append":
                        o.dataType == "html" && (s = "<div>" + s + "</div>", s = t(s).find(o.itemSelector));
                        break;
                    case "append":
                        var l = i.children();
                        if (l.length == 0) return this._error("end");
                        f = document.createDocumentFragment();
                        while (i[0].firstChild) f.appendChild(i[0].firstChild);
                        this._debug("contentSelector", t(o.contentSelector)[0]), t(o.contentSelector)[0].appendChild(f), s = l.get()
                }
                o.loading.finished.call(t(o.contentSelector)[0], o);
                if (o.animate) {
                    var c = t(e).scrollTop() + t("#infscr-loading").height() + o.extraScrollPx + "px";
                    t("html,body").animate({
                        scrollTop: c
                    }, 800, function() {
                        o.state.isDuringAjax = !1
                    })
                }
                o.animate || (o.state.isDuringAjax = !1), u(this, s)
            },
            _nearbottom: function() {
                var i = this.options,
                    s = 0 + t(document).height() - i.binder.scrollTop() - t(e).height();
                return !i.behavior || this["_nearbottom_" + i.behavior] === n ? (this._debug("math:", s, i.pixelsFromNavToBottom), s - i.bufferPx < i.pixelsFromNavToBottom) : this["_nearbottom_" + i.behavior].call(this)
            },
            _pausing: function(t) {
                var r = this.options;
                if (!r.behavior || this["_pausing_" + r.behavior] === n) {
                    t !== "pause" && t !== "resume" && t !== null && this._debug("Invalid argument. Toggling pause value instead"), t = !t || t != "pause" && t != "resume" ? "toggle" : t;
                    switch (t) {
                        case "pause":
                            r.state.isPaused = !0;
                            break;
                        case "resume":
                            r.state.isPaused = !1;
                            break;
                        case "toggle":
                            r.state.isPaused = !r.state.isPaused
                    }
                    return this._debug("Paused", r.state.isPaused), !1
                }
                this["_pausing_" + r.behavior].call(this, t);
                return
            },
            _setup: function() {
                var t = this.options;
                if (!t.behavior || this["_setup_" + t.behavior] === n) return this._binding("bind"), !1;
                this["_setup_" + t.behavior].call(this);
                return
            },
            _showdonemsg: function() {
                var r = this.options;
                if (!!r.behavior && this["_showdonemsg_" + r.behavior] !== n) {
                    this["_showdonemsg_" + r.behavior].call(this);
                    return
                }
                r.loading.msg.find("img").hide().parent().find("div").html(r.loading.finishedMsg).animate({
                    opacity: 1
                }, 2e3, function() {
                    t(this).parent().fadeOut("normal")
                }), r.errorCallback.call(t(r.contentSelector)[0], "done")
            },
            _validate: function(n) {
                for (var r in n)
                    if (r.indexOf && r.indexOf("Selector") > -1 && t(n[r]).length === 0) return this._debug("Your " + r + " found no elements."), !1;
                return !0
            },
            bind: function() {
                this._binding("bind")
            },
            destroy: function() {
                return this.options.state.isDestroyed = !0, this._error("destroy")
            },
            pause: function() {
                this._pausing("pause")
            },
            resume: function() {
                this._pausing("resume")
            },
            retrieve: function(r) {
                var i = this,
                    s = i.options,
                    o = s.path,
                    u, a, f, l, c, r = r || null,
                    h = r ? r : s.state.currPage;
                beginAjax = function(r) {
                    r.state.currPage++, i._debug("heading into ajax", o), u = t(r.contentSelector).is("table") ? t("<tbody/>") : t("<div/>"), f = o.join(r.state.currPage), l = r.dataType == "html" || r.dataType == "json" ? r.dataType : "html+callback", r.appendCallback && r.dataType == "html" && (l += "+callback");
                    switch (l) {
                        case "html+callback":
                            i._debug("Using HTML via .load() method"), u.load(f + " " + r.itemSelector, null, function(t) {
                                i._loadcallback(u, t)
                            });
                            break;
                        case "html":
                            i._debug("Using " + l.toUpperCase() + " via $.ajax() method"), t.ajax({
                                url: f,
                                dataType: r.dataType,
                                complete: function(t, n) {
                                    c = typeof t.isResolved != "undefined" ? t.isResolved() : n === "success" || n === "notmodified", c ? i._loadcallback(u, t.responseText) : i._error("end")
                                }
                            });
                            break;
                        case "json":
                            i._debug("Using " + l.toUpperCase() + " via $.ajax() method"), t.ajax({
                                dataType: "json",
                                type: "GET",
                                url: f,
                                success: function(e, t, s) {
                                    c = typeof s.isResolved != "undefined" ? s.isResolved() : t === "success" || t === "notmodified";
                                    if (r.appendCallback)
                                        if (r.template != n) {
                                            var o = r.template(e);
                                            u.append(o), c ? i._loadcallback(u, o) : i._error("end")
                                        } else i._debug("template must be defined."), i._error("end");
                                    else c ? i._loadcallback(u, e) : i._error("end")
                                },
                                error: function(e, t, n) {
                                    i._debug("JSON ajax request failed."), i._error("end")
                                }
                            })
                    }
                };
                if (!!s.behavior && this["retrieve_" + s.behavior] !== n) {
                    this["retrieve_" + s.behavior].call(this, r);
                    return
                }
                if (s.state.isDestroyed) return this._debug("Instance is destroyed"), !1;
                s.state.isDuringAjax = !0, s.loading.start.call(t(s.contentSelector)[0], s)
            },
            scroll: function() {
                var t = this.options,
                    r = t.state;
                if (!!t.behavior && this["scroll_" + t.behavior] !== n) {
                    this["scroll_" + t.behavior].call(this);
                    return
                }
                if (r.isDuringAjax || r.isInvalidPage || r.isDone || r.isDestroyed || r.isPaused) return;
                if (!this._nearbottom()) return;
                this.retrieve()
            },
            toggle: function() {
                this._pausing()
            },
            unbind: function() {
                this._binding("unbind")
            },
            update: function(n) {
                t.isPlainObject(n) && (this.options = t.extend(!0, this.options, n))
            }
        }, t.fn.infinitescroll = function(n, r) {
            var i = typeof n;
            switch (i) {
                case "string":
                    var s = Array.prototype.slice.call(arguments, 1);
                    this.each(function() {
                        var e = t.data(this, "infinitescroll");
                        if (!e) return !1;
                        if (!t.isFunction(e[n]) || n.charAt(0) === "_") return !1;
                        e[n].apply(e, s)
                    });
                    break;
                case "object":
                    this.each(function() {
                        var e = t.data(this, "infinitescroll");
                        e ? e.update(n) : (e = new t.infinitescroll(n, r, this), e.failed || t.data(this, "infinitescroll", e))
                    })
            }
            return this
        };
        var r = t.event,
            i;
        r.special.smartscroll = {
            setup: function() {
                t(this).bind("scroll", r.special.smartscroll.handler)
            },
            teardown: function() {
                t(this).unbind("scroll", r.special.smartscroll.handler)
            },
            handler: function(e, n) {
                var r = this,
                    s = arguments;
                e.type = "smartscroll", i && clearTimeout(i), i = setTimeout(function() {
                    t.event.handle.apply(r, s)
                }, n === "execAsap" ? 0 : 100)
            }
        }, t.fn.smartscroll = function(e) {
            return e ? this.bind("smartscroll", e) : this.trigger("smartscroll", ["execAsap"])
        }
    }(window, jQuery),
    function(e, t) {
        "use strict";
        var n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        e.fn.imagesLoaded = function(r) {
            function c() {
                var t = e(f),
                    n = e(l);
                s && (l.length ? s.reject(u, t, n) : s.resolve(u)), e.isFunction(r) && r.call(i, u, t, n)
            }

            function h(t, r) {
                if (t.src === n || e.inArray(t, a) !== -1) return;
                a.push(t), r ? l.push(t) : f.push(t), e.data(t, "imagesLoaded", {
                    isBroken: r,
                    src: t.src
                }), o && s.notifyWith(e(t), [r, u, e(f), e(l)]), u.length === a.length && (setTimeout(c), u.unbind(".imagesLoaded"))
            }
            var i = this,
                s = e.isFunction(e.Deferred) ? e.Deferred() : 0,
                o = e.isFunction(s.notify),
                u = i.find("img").add(i.filter("img")),
                a = [],
                f = [],
                l = [];
            return u.length ? u.bind("load.imagesLoaded error.imagesLoaded", function(e) {
                h(e.target, e.type === "error")
            }).each(function(r, i) {
                var s = i.src,
                    o = e.data(i, "imagesLoaded");
                if (o && o.src === s) {
                    h(i, o.isBroken);
                    return
                }
                if (i.complete && i.naturalWidth !== t) {
                    h(i, i.naturalWidth === 0 || i.naturalHeight === 0);
                    return
                }
                if (i.readyState || i.complete) i.src = n, i.src = s
            }) : c(), s ? s.promise(i) : i
        }
    }(jQuery),
    function(e) {
        e.fn.extend({
            jOverscroll: function(t) {
                this.defaultOptions = {
                    width: null,
                    scrollTime: 500,
                    scrollBackTime: 100
                };
                var n = e.extend({}, this.defaultOptions, t);
                return this.each(function() {
                    var t = e(this);
                    t.css({
                        overflow: "hidden"
                    }), n.width && t.css({
                        width: n.width
                    }), t.hover(function() {
                        var e = t.get(0).scrollWidth - t.width();
                        e > 0 && t.stop().animate({
                            "text-indent": -e
                        }, n.scrollTime)
                    }, function() {
                        t.stop().animate({
                            "text-indent": 0
                        }, n.scrollBackTime)
                    })
                })
            }
        })
    }(jQuery),
    function(e, t, n) {
        "use strict";
        var r = t.event,
            i;
        r.special.smartresize = {
            setup: function() {
                t(this).bind("resize", r.special.smartresize.handler)
            },
            teardown: function() {
                t(this).unbind("resize", r.special.smartresize.handler)
            },
            handler: function(e, n) {
                var r = this,
                    s = arguments;
                e.type = "smartresize", i && clearTimeout(i), i = setTimeout(function() {
                    t.event.handle.apply(r, s)
                }, n === "execAsap" ? 0 : 100)
            }
        }, t.fn.smartresize = function(e) {
            return e ? this.bind("smartresize", e) : this.trigger("smartresize", ["execAsap"])
        }, t.Mason = function(e, n) {
            this.element = t(n), this._create(e), this._init()
        }, t.Mason.settings = {
            isResizable: !0,
            isAnimated: !1,
            animationOptions: {
                queue: !1,
                duration: 500
            },
            gutterWidth: 0,
            isRTL: !1,
            isFitWidth: !1,
            containerStyle: {
                position: "relative"
            }
        }, t.Mason.prototype = {
            _filterFindBricks: function(e) {
                var t = this.options.itemSelector;
                return t ? e.filter(t).add(e.find(t)) : e
            },
            _getBricks: function(e) {
                var t = this._filterFindBricks(e).css({
                    position: "absolute"
                }).addClass("masonry-brick");
                return t
            },
            _create: function(n) {
                this.options = t.extend(!0, {}, t.Mason.settings, n), this.styleQueue = [];
                var r = this.element[0].style;
                this.originalStyle = {
                    height: r.height || ""
                };
                var i = this.options.containerStyle;
                for (var s in i) this.originalStyle[s] = r[s] || "";
                this.element.css(i), this.horizontalDirection = this.options.isRTL ? "right" : "left", this.offset = {
                    x: parseInt(this.element.css("padding-" + this.horizontalDirection), 10),
                    y: parseInt(this.element.css("padding-top"), 10)
                }, this.isFluid = this.options.columnWidth && typeof this.options.columnWidth == "function";
                var o = this;
                setTimeout(function() {
                    o.element.addClass("masonry")
                }, 0), this.options.isResizable && t(e).bind("smartresize.masonry", function() {
                    o.resize()
                }), this.reloadItems()
            },
            _init: function(e) {
                this._getColumns(), this._reLayout(e)
            },
            option: function(e, n) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            },
            layout: function(e, t) {
                for (var n = 0, r = e.length; n < r; n++) this._placeBrick(e[n]);
                var i = {};
                i.height = Math.max.apply(Math, this.colYs);
                if (this.options.isFitWidth) {
                    var s = 0;
                    n = this.cols;
                    while (--n) {
                        if (this.colYs[n] !== 0) break;
                        s++
                    }
                    i.width = (this.cols - s) * this.columnWidth - this.options.gutterWidth
                }
                this.styleQueue.push({
                    $el: this.element,
                    style: i
                });
                var o = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css",
                    u = this.options.animationOptions,
                    a;
                for (n = 0, r = this.styleQueue.length; n < r; n++) a = this.styleQueue[n], a.$el[o](a.style, u);
                this.styleQueue = [], t && t.call(e), this.isLaidOut = !0
            },
            _getColumns: function() {
                var e = this.options.isFitWidth ? this.element.parent() : this.element,
                    t = e.width();
                this.columnWidth = this.isFluid ? this.options.columnWidth(t) : this.options.columnWidth || this.$bricks.outerWidth(!0) || t, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((t + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            },
            _placeBrick: function(e) {
                var n = t(e),
                    r, i, s, o, u;
                r = Math.ceil(n.outerWidth(!0) / this.columnWidth), r = Math.min(r, this.cols);
                if (r === 1) s = this.colYs;
                else {
                    i = this.cols + 1 - r, s = [];
                    for (u = 0; u < i; u++) o = this.colYs.slice(u, u + r), s[u] = Math.max.apply(Math, o)
                }
                var a = Math.min.apply(Math, s),
                    f = 0;
                for (var l = 0, c = s.length; l < c; l++)
                    if (s[l] === a) {
                        f = l;
                        break
                    }
                var h = {
                    top: a + this.offset.y
                };
                h[this.horizontalDirection] = this.columnWidth * f + this.offset.x, this.styleQueue.push({
                    $el: n,
                    style: h
                });
                var p = a + n.outerHeight(!0),
                    d = this.cols + 1 - c;
                for (l = 0; l < d; l++) this.colYs[f + l] = p
            },
            resize: function() {
                var e = this.cols;
                this._getColumns(), (this.isFluid || this.cols !== e) && this._reLayout()
            },
            _reLayout: function(e) {
                var t = this.cols;
                this.colYs = [];
                while (t--) this.colYs.push(0);
                this.layout(this.$bricks, e)
            },
            reloadItems: function() {
                this.$bricks = this._getBricks(this.element.children())
            },
            reload: function(e) {
                this.reloadItems(), this._init(e)
            },
            appended: function(e, t, n) {
                if (t) {
                    this._filterFindBricks(e).css({
                        top: this.element.height()
                    });
                    var r = this;
                    setTimeout(function() {
                        r._appended(e, n)
                    }, 1)
                } else this._appended(e, n)
            },
            _appended: function(e, t) {
                var n = this._getBricks(e);
                this.$bricks = this.$bricks.add(n), this.layout(n, t)
            },
            remove: function(e) {
                this.$bricks = this.$bricks.not(e), e.remove()
            },
            destroy: function() {
                this.$bricks.removeClass("masonry-brick").each(function() {
                    this.style.position = "", this.style.top = "", this.style.left = ""
                });
                var n = this.element[0].style;
                for (var r in this.originalStyle) n[r] = this.originalStyle[r];
                this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), t(e).unbind(".masonry")
            }
        }, t.fn.imagesLoaded = function(e) {
            function u() {
                e.call(n, r)
            }

            function a(e) {
                var n = e.target;
                n.src !== s && t.inArray(n, o) === -1 && (o.push(n), --i <= 0 && (setTimeout(u), r.unbind(".imagesLoaded", a)))
            }
            var n = this,
                r = n.find("img").add(n.filter("img")),
                i = r.length,
                s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
                o = [];
            return i || u(), r.bind("load.imagesLoaded error.imagesLoaded", a).each(function() {
                var e = this.src;
                this.src = s, this.src = e
            }), n
        };
        var s = function(t) {
            e.console && e.console.error(t)
        };
        t.fn.masonry = function(e) {
            if (typeof e == "string") {
                var n = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var r = t.data(this, "masonry");
                    if (!r) {
                        s("cannot call methods on masonry prior to initialization; attempted to call method '" + e + "'");
                        return
                    }
                    if (!t.isFunction(r[e]) || e.charAt(0) === "_") {
                        s("no such method '" + e + "' for masonry instance");
                        return
                    }
                    r[e].apply(r, n)
                })
            } else this.each(function() {
                var n = t.data(this, "masonry");
                n ? (n.option(e || {}), n._init()) : t.data(this, "masonry", new t.Mason(e, this))
            });
            return this
        }
    }(window, jQuery),
    function(e) {
        "use strict";

        function r(e) {
            var n = ["Moz", "Webkit", "O", "ms"],
                r = e.charAt(0).toUpperCase() + e.substr(1);
            if (e in t.style) return e;
            for (var i = 0; i < n.length; ++i) {
                var s = n[i] + r;
                if (s in t.style) return s
            }
        }

        function i() {
            return t.style[n.transform] = "", t.style[n.transform] = "rotateY(90deg)", t.style[n.transform] !== ""
        }

        function a(e) {
            return typeof e == "string" && this.parse(e), this
        }

        function f(e, t, n) {
            t === !0 ? e.queue(n) : t ? e.queue(t, n) : n()
        }

        function l(t) {
            var n = [];
            for (var r in t) t.hasOwnProperty(r) && (r = e.camelCase(r), r = e.transit.propertyMap[r] || r, r = p(r)), e.inArray(r, n) === -1 && n.push(r);
            return n
        }

        function c(t, n, r, i) {
            var s = l(t);
            e.cssEase[r] && (r = e.cssEase[r]);
            var o = "" + v(n) + " " + r;
            parseInt(i, 10) > 0 && (o += " " + v(i));
            var u = [];
            for (var a = 0; a < s.length; a++) {
                var f = s[a];
                u.push(f + " " + o)
            }
            return u.join(", ")
        }

        function h(t, r) {
            r || (e.cssNumber[t] = !0), e.transit.propertyMap[t] = n.transform, e.cssHooks[t] = {
                get: function(n) {
                    var r = e(n).css("transit:transform") || new a;
                    return r.get(t)
                },
                set: function(n, r) {
                    var i = e(n),
                        s = i.css("transit:transform") || new a;
                    s.setFromString(t, r), i.css("transit:transform", s)
                }
            }
        }

        function p(e) {
            return e.replace(/([A-Z])/g, function(e) {
                return "-" + e.toLowerCase()
            })
        }

        function d(e, t) {
            return typeof e == "string" && !e.match(/^[\-0-9\.]+$/) ? e : "" + e + t
        }

        function v(t) {
            var n = t;
            return e.fx.speeds[n] && (n = e.fx.speeds[n]), d(n, "ms")
        }
        e.transit = {
            version: "0.1.3",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: !0,
            useTransitionEnd: !1
        };
        var t = document.createElement("div"),
            n = {},
            s = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
        n.transition = r("transition"), n.transitionDelay = r("transitionDelay"), n.transform = r("transform"), n.transformOrigin = r("transformOrigin"), n.transform3d = i(), e.extend(e.support, n);
        var o = {
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                WebkitTransition: "webkitTransitionEnd",
                msTransition: "MSTransitionEnd"
            },
            u = n.transitionEnd = o[n.transition] || null;
        t = null, e.cssEase = {
            _default: "ease",
            "in": "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)"
        }, e.cssHooks["transit:transform"] = {
            get: function(t) {
                return e(t).data("transform")
            },
            set: function(t, r) {
                var i = r;
                i instanceof a || (i = new a(i)), n.transform === "WebkitTransform" && !s ? t.style[n.transform] = i.toString(!0) : t.style[n.transform] = i.toString(), e(t).data("transform", i)
            }
        }, e.fn.jquery < "1.8.0" && (e.cssHooks.transformOrigin = {
            get: function(e) {
                return e.style[n.transformOrigin]
            },
            set: function(e, t) {
                e.style[n.transformOrigin] = t
            }
        }, e.cssHooks.transition = {
            get: function(e) {
                return e.style[n.transition]
            },
            set: function(e, t) {
                e.style[n.transition] = t
            }
        }), h("scale"), h("translate"), h("rotate"), h("rotateX"), h("rotateY"), h("rotate3d"), h("perspective"), h("skewX"), h("skewY"), h("x", !0), h("y", !0), a.prototype = {
            setFromString: function(e, t) {
                var n = typeof t == "string" ? t.split(",") : t.constructor === Array ? t : [t];
                n.unshift(e), a.prototype.set.apply(this, n)
            },
            set: function(e) {
                var t = Array.prototype.slice.apply(arguments, [1]);
                this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
            },
            get: function(e) {
                return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
            },
            setter: {
                rotate: function(e) {
                    this.rotate = d(e, "deg")
                },
                rotateX: function(e) {
                    this.rotateX = d(e, "deg")
                },
                rotateY: function(e) {
                    this.rotateY = d(e, "deg")
                },
                scale: function(e, t) {
                    t === undefined && (t = e), this.scale = e + "," + t
                },
                skewX: function(e) {
                    this.skewX = d(e, "deg")
                },
                skewY: function(e) {
                    this.skewY = d(e, "deg")
                },
                perspective: function(e) {
                    this.perspective = d(e, "px")
                },
                x: function(e) {
                    this.set("translate", e, null)
                },
                y: function(e) {
                    this.set("translate", null, e)
                },
                translate: function(e, t) {
                    this._translateX === undefined && (this._translateX = 0), this._translateY === undefined && (this._translateY = 0), e !== null && (this._translateX = d(e, "px")), t !== null && (this._translateY = d(t, "px")), this.translate = this._translateX + "," + this._translateY
                }
            },
            getter: {
                x: function() {
                    return this._translateX || 0
                },
                y: function() {
                    return this._translateY || 0
                },
                scale: function() {
                    var e = (this.scale || "1,1").split(",");
                    return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
                },
                rotate3d: function() {
                    var e = (this.rotate3d || "0,0,0,0deg").split(",");
                    for (var t = 0; t <= 3; ++t) e[t] && (e[t] = parseFloat(e[t]));
                    return e[3] && (e[3] = d(e[3], "deg")), e
                }
            },
            parse: function(e) {
                var t = this;
                e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, n, r) {
                    t.setFromString(n, r)
                })
            },
            toString: function(e) {
                var t = [];
                for (var r in this)
                    if (this.hasOwnProperty(r)) {
                        if (!n.transform3d && (r === "rotateX" || r === "rotateY" || r === "perspective" || r === "transformOrigin")) continue;
                        r[0] !== "_" && (e && r === "scale" ? t.push(r + "3d(" + this[r] + ",1)") : e && r === "translate" ? t.push(r + "3d(" + this[r] + ",0)") : t.push(r + "(" + this[r] + ")"))
                    }
                return t.join(" ")
            }
        }, e.fn.transition = e.fn.transit = function(t, r, i, s) {
            var o = this,
                a = 0,
                l = !0;
            typeof r == "function" && (s = r, r = undefined), typeof i == "function" && (s = i, i = undefined), typeof t.easing != "undefined" && (i = t.easing, delete t.easing), typeof t.duration != "undefined" && (r = t.duration, delete t.duration), typeof t.complete != "undefined" && (s = t.complete, delete t.complete), typeof t.queue != "undefined" && (l = t.queue, delete t.queue), typeof t.delay != "undefined" && (a = t.delay, delete t.delay), typeof r == "undefined" && (r = e.fx.speeds._default), typeof i == "undefined" && (i = e.cssEase._default), r = v(r);
            var h = c(t, r, i, a),
                p = e.transit.enabled && n.transition,
                d = p ? parseInt(r, 10) + parseInt(a, 10) : 0;
            if (d === 0) {
                var m = function(e) {
                    o.css(t), s && s.apply(o), e && e()
                };
                return f(o, l, m), o
            }
            var g = {},
                y = function(r) {
                    var i = !1,
                        a = function() {
                            i && o.unbind(u, a);
                            if (d > 0)
                                for (var e = 0; e < o.length; e++) {
                                    var t = o[e];
                                    t.style[n.transition] = g[t] || null
                                }
                            typeof s == "function" && s.apply(o), typeof r == "function" && r()
                        };
                    d > 0 && u && e.transit.useTransitionEnd ? (i = !0, o.bind(u, a)) : window.setTimeout(a, d);
                    for (var f = 0; f < o.length; f++) {
                        var l = o[f];
                        d > 0 && (l.style[n.transition] = h), e(l).css(t)
                    }
                },
                b = function(e) {
                    var t = 0;
                    n.transition === "MozTransition" && t < 25 && (t = 25), window.setTimeout(function() {
                        y(e)
                    }, t)
                };
            return f(o, l, b), this
        }, e.transit.getTransitionValue = c
    }(jQuery),
    function(e) {
        e.fn.pxuPhotoset = function(t, n) {
            var r = {
                    lightbox: !0,
                    highRes: !0,
                    rounded: "corners",
                    borderRadius: "5px",
                    exif: !0,
                    captions: !0,
                    gutter: "10px",
                    photoset: ".photo-slideshow",
                    photoWrap: ".photo-data",
                    photo: ".pxu-photo"
                },
                i = e.extend(r, t);
            if (i.lightbox) {
                e(".type-photoset .tumblr-box").on("click", function(t) {
                    t.preventDefault();
                    var n = e(this),
                        r = n.parents(i.photoset).attr("id");
                    s(n, r)
                });
                var s = function(t, n) {
                    var r = t.parents(i.photoWrap).find(i.photo + " img").data("count"),
                        s = [];
                    e("#" + n).find(i.photoWrap).each(function() {
                        var t = e(this).find(i.photo + " img"),
                            n = t.data("width"),
                            r = t.data("height"),
                            o = t.attr("src"),
                            u = t.data("highres"),
                            a = {
                                width: n,
                                height: r,
                                low_res: o,
                                high_res: u
                            };
                        s.push(a)
                    }), Tumblr.Lightbox.init(s, r)
                }
            }
            return e(i.photoWrap).on("mouseenter", function() {
                e(this).find(".icons").css("visibility", "visible")
            }).on("mouseleave", function() {
                e(this).find(".icons").css("visibility", "hidden")
            }), e("span.info").on("mouseenter", function() {
                var t = e(this),
                    n = t.children(".pxu-data");
                n.css("display", "block").stop(!0, !1).animate({
                    opacity: 1
                }, 200)
            }), e("span.info").on("mouseleave", function() {
                var t = e(this),
                    n = t.children(".pxu-data");
                n.stop(!0, !1).animate({
                    opacity: 0
                }, 200, function() {
                    e(this).css("display", "none")
                })
            }), this.each(function() {
                var t = e(this);
                t.imagesLoaded(function() {
                    function m(t) {
                        t.find(".row").each(function() {
                            var t = e(this),
                                n = t.find(i.photoWrap).length;
                            if (n > 0) {
                                var r = t.find(i.photo + " img").map(function() {
                                        return e(this).height()
                                    }).get(),
                                    s = Array.min(r);
                                t.height(s).find(i.photo).height(s)
                            }
                        })
                    }
                    var r = t.data("layout"),
                        s = JSON.stringify(r).split(""),
                        o = s.length,
                        u = t.find(i.photo + " img");
                    for (d = 0; d < u.length; d++) {
                        var a = u.eq(d);
                        a.attr("data-count", d + 1)
                    }
                    var f = [];
                    for (d = 1; d <= o; ++d) {
                        var l = 0;
                        for (var c = 0; c < d; ++c) {
                            var h = parseInt(s[c], 10);
                            l += h
                        }
                        var p = parseInt(s[d - 1], 10);
                        f[d] = Array(d, p, l)
                    }
                    for (var d = 1; d <= o; d++) {
                        var v;
                        d === 1 ? v = 0 : v = f[d - 1][2], t.find(i.photoWrap).slice(v, f[d][2]).addClass("count-" + f[d][1]).wrapAll('<div class="row clearit" />')
                    }
                    e(this).find(".row").css("margin-bottom", i.gutter), e(this).find(i.photoWrap + ":not(:first-child) " + i.photo + " img").css("margin-left", i.gutter), Array.min = function(e) {
                        return Math.min.apply(Math, e)
                    }, m(t), e(window).resize(function() {
                        m(t)
                    }), i.exif && i.captions ? t.find(i.photoWrap).each(function() {
                        var t = e(this).find("img"),
                            n, r;
                        if (t.hasClass("exif-yes")) {
                            var i = t.data("camera") || "-",
                                s = t.data("iso") || "-",
                                o = t.data("aperture") || "-",
                                u = t.data("exposure") || "-",
                                a = t.data("focal") || "-";
                            n = '<table class="exif"><tr><td colspan="2"><span class="label">Camera</span><br>' + i + '</td></tr><tr><td><span class="label">ISO</span><br>' + s + '</td><td><span class="label">Aperture</span><br>' + o + '</td></tr><tr><td><span class="label">Exposure</span><br>' + u + '</td><td><span class="label">Focal Length</span><br>' + a + "</td></tr></table>"
                        } else n = "";
                        if (t.hasClass("caption-yes")) {
                            var f = t.data("caption");
                            r = '<p class="pxu-caption">' + f + "</p>"
                        } else r = "";
                        if (r !== "" || n !== "") e(this).find(".info").append('<div class="pxu-data">' + r + n + '<span class="arrow-down"></span></div>'), n === "" && e(this).find(".pxu-data").addClass("caption-only"), e(this).find("span.info").css("display", "block")
                    }) : i.exif ? t.find(i.photoWrap).each(function() {
                        var t = e(this).find("img");
                        if (t.hasClass("exif-yes")) {
                            var n = t.data("camera") || "-",
                                r = t.data("iso") || "-",
                                i = t.data("aperture") || "-",
                                s = t.data("exposure") || "-",
                                o = t.data("focal") || "-",
                                u = '<table class="exif"><tr><td colspan="2"><span class="label">Camera</span><br>' + n + '</td></tr><tr><td><span class="label">ISO</span><br>' + r + '</td><td><span class="label">Aperture</span><br>' + i + '</td></tr><tr><td><span class="label">Exposure</span><br>' + s + '</td><td><span class="label">Focal Length</span><br>' + o + '</td></tr></table><span class="arrow-down"></span>';
                            e(this).find(".info").append('<div class="pxu-data">' + u + "</div>"), e(this).find("span.info").css("display", "block")
                        }
                    }) : i.captions && t.find(i.photoWrap).each(function() {
                        var t = e(this).find("img");
                        if (t.hasClass("caption-yes")) {
                            var n = t.data("caption"),
                                r = '<p class="pxu-caption" style="margin:0;">' + n + "</p>";
                            e(this).find(".info").append('<div class="pxu-data caption-only">' + r + '<span class="arrow-down"></span></div>'), e(this).find("span.info").css("display", "block")
                        }
                    }), i.highRes && t.find(i.photoWrap).each(function() {
                        var t = e(this).find(".photo img"),
                            n = t.data("highres");
                        t.attr("src", n)
                    });
                    if (i.rounded == "corners") {
                        var g = t.find(".row");
                        if (o == 1) g.find(i.photoWrap + ":first-child " + i.photo).css({
                            borderRadius: i.borderRadius + " 0 0 " + i.borderRadius
                        }), g.find(i.photoWrap + ":last-child " + i.photo).css({
                            borderRadius: "0 " + i.borderRadius + " " + i.borderRadius + " 0"
                        });
                        else
                            for (var y = 0; y < o; y++) {
                                var b;
                                y === 0 && (b = g.eq(y).find(i.photo).size(), b == 1 ? g.eq(y).find(i.photo).css({
                                    borderRadius: i.borderRadius + " " + i.borderRadius + " 0 0"
                                }) : (g.eq(y).find(i.photoWrap + ":first-child " + i.photo).css({
                                    borderRadius: i.borderRadius + " 0 0 0"
                                }), g.eq(y).find(i.photoWrap + ":last-child " + i.photo).css({
                                    borderRadius: "0 " + i.borderRadius + " 0 0"
                                }))), y == o - 1 && (b = g.eq(y).find(i.photo).size(), b == 1 ? g.eq(y).find(i.photo).css({
                                    borderRadius: "0 0 " + i.borderRadius + " " + i.borderRadius
                                }) : (g.eq(y).find(i.photoWrap + ":first-child " + i.photo).css({
                                    borderRadius: "0 0 0 " + i.borderRadius
                                }), g.eq(y).find(i.photoWrap + ":last-child " + i.photo).css({
                                    borderRadius: "0 0 " + i.borderRadius + " 0"
                                })))
                            }
                    }
                    i.rounded == "all" && t.find(i.photo).css({
                        borderRadius: i.borderRadius
                    }), i.rounded || t.find(i.photo).css({
                        borderRadius: 0
                    }), t.addClass("processed"), typeof n == "function" && n.call(this)
                })
            })
        }
    }(jQuery),
    function(e) {
        var t = function(t) {
                // var n = e.extend({}, {
                //         offset: 0,
                //         postCount: 10,
                //         tag: null,
                //         search: null,
                //         id: null,
                //         callback: function(e) {}
                //     }, t),
                //     r = "/api/read/json";
                // n.id ? r = r + "?id=" + n.id : n.tag ? r = r + "?tagged=" + n.tag + "&num=" + n.postCount + "&start=" + n.offset : n.search ? r = r + "?tagged=" + n.search + "&num=" + n.postCount : r = r + "?num=" + n.postCount + "&start=" + n.offset, e.ajax({
                //     url: r,
                //     dataType: "jsonp",
                //     timeout: 1e4,
                //     success: function(e) {
                //         n.callback(e.posts, e["posts-total"])
                //     }
                // })
            },
            n = function(t, n) {
                // t == "index" ? e.ajax({
                //     url: "/api/read/json",
                //     dataType: "jsonp",
                //     timeout: 1e4,
                //     success: function(e) {
                //         n(e["posts-total"])
                //     }
                // }) : e.ajax({
                //     url: "/api/read/json?tagged=" + t,
                //     dataType: "jsonp",
                //     timeout: 1e4,
                //     success: function(e) {
                //         n(e["posts-total"])
                //     }
                // })
            },
            r = 0,
            i = 0;
        e.fn.extend({
            patiochair: function(s) {
                var o = e(this),
                    u = e.extend({}, {
                        postSelector: ".post",
                        olderSelector: "#pagination #prev",
                        eachPost: function(e, t) {},
                        eachAnswerPost: function(e, t) {},
                        eachAudioPost: function(e, t) {},
                        eachChatPost: function(e, t) {},
                        eachLinkPost: function(e, t) {},
                        eachPhotoPost: function(e, t) {},
                        eachPhotosetPost: function(e, t) {},
                        eachQuotePost: function(e, t) {},
                        eachTextPost: function(e, t) {},
                        eachVideoPost: function(e, t) {},
                        withPostCount: function(e) {}
                    }, s),
                    a = {
                        isLastPage: !r && !e(u.olderSelector).length,
                        pageOffset: (/\/page\/(\d*)/.exec(window.location.pathname) ? parseInt(/\/page\/(\d*)/.exec(window.location.pathname)[1], 10) : 1) + r,
                        isSearchPage: /\/search\//.exec(window.location.pathname),
                        search: /\/search\/([\+_\-\w]*)/.exec(window.location.pathname) ? /\/search\/([\+_\-\w]*)/.exec(window.location.pathname)[1] : null,
                        isTagPage: /\/tagged\//.exec(window.location.pathname),
                        tagged: /\/tagged\/([\+_\-\w]*)/.exec(window.location.pathname) ? /\/tagged\/([\+_\-\w]*)/.exec(window.location.pathname)[1] : null,
                        isPermalinkPostPage: /\/post\//.exec(window.location.pathname),
                        postID: /\/post\/(\d*)/.exec(window.location.pathname) ? /\/post\/(\d*)/.exec(window.location.pathname)[1] : null,
                        postCount: i || (i = o.find(u.postSelector).length),
                        posts: r ? o.filter(u.postSelector) : o.find(u.postSelector)
                    },
                    f = a.isLastPage && !a.isSearchPage && !a.isPermalinkPostPage,
                    l = function(t, n) {
                        u.withPostCount(parseInt(n, 10)), e.each(t, function(e, t) {
                            var n = a.posts.filter("#" + t.id);
                            u.eachPost.apply(n, [t, n]);
                            if (t.type == "photo") {
                                var r = t.photos.length ? u.eachPhotosetPost : u.eachPhotoPost;
                                r.apply(n, [t, n])
                            } else t.type == "regular" ? u.eachTextPost.apply(n, [t, n]) : t.type == "conversation" ? u.eachChatPost.apply(n, [t, n]) : u["each" + t.type.charAt(0).toUpperCase() + t.type.slice(1) + "Post"].apply(n, [t, n])
                        })
                    };
                return f ? a.isTagPage ? n(a.tagged, function(e) {
                    t({
                        offset: e - a.postCount,
                        postCount: a.postCount,
                        tag: a.tagged,
                        callback: l
                    })
                }) : n("index", function(e) {
                    t({
                        offset: e - a.postCount,
                        postCount: a.postCount,
                        callback: l
                    })
                }) : a.isPermalinkPostPage ? t({
                    id: a.postID,
                    callback: l
                }) : a.isTagPage ? t({
                    offset: (a.pageOffset - 1) * a.postCount,
                    postCount: a.postCount,
                    tag: a.tagged.replace(/(\-|\+|_)/g, "%20"),
                    callback: l
                }) : a.isSearchPage ? t({
                    offset: 0,
                    postCount: a.postCount,
                    search: a.search.replace(/(\-|\+|_)/g, "%20"),
                    callback: l
                }) : t({
                    offset: (a.pageOffset - 1) * a.postCount,
                    postCount: a.postCount,
                    callback: l
                }), r += 1, this
            }
        })
    }(jQuery),
    function() {
        _.mixin({
            capitalize: function(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            },
            pluralize: function(e, t) {
                return t === 1 ? e : e + "s"
            },
            isWhitespace: function(e) {
                return /^\s*$/.exec(e) != null
            },
            touchify: function(e, t) {
                var n, r, i, s, o;
                if ($("html").hasClass("touch")) {
                    i = {}, n = /^click/, o = /^mouse(enter|leave|over)/;
                    for (r in e) {
                        s = e[r];
                        if (n.test(r)) i[r.replace(n, "touchend")] = s;
                        else {
                            if (o.test(r)) continue;
                            i[r] = s
                        }
                    }
                    return _.extend(i, t)
                }
                return e
            }
        })
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.Twitter = {}, Twitter.Tweet = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.linkifiedText = function() {
                return this.get("text").replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&?!\-\/]))?)/gi, '<a href="$1">$1</a>').replace(/(^|\s)#(\w+)/g, '$1<a href="http://search.twitter.com/search?q=$2">#$2</a>').replace(/(^|\s)@(\w+)/g, '$1<strong><a href="http://twitter.com/$2">@$2</a></strong>')
            }, n.prototype.timeAgo = function() {
                var e, t, n;
                return t = new Date(this.get("created_at")), isNaN(t) ? "" : (n = new Date, e = parseInt((n.getTime() - t) / 1e3, 10), e < 60 ? "less than a minute ago" : e < 120 ? "about a minute ago" : e < 2700 ? parseInt(e / 60, 10).toString() + " minutes ago" : e < 5400 ? "about an hour ago" : e < 86400 ? "about " + parseInt(e / 3600, 10).toString() + " hours ago" : e < 172800 ? "1 day ago" : parseInt(e / 86400, 10).toString() + " days ago")
            }, n.prototype.profileImageURL = function() {
                return this.get("user").profile_image_url
            }, n.prototype.permalink = function() {
                return "http://twitter.com/" + this.username() + "/status/" + this.tweetID()
            }, n.prototype.retweetURL = function() {
                return "https://twitter.com/intent/retweet?tweet_id=" + this.tweetID()
            }, n.prototype.replyURL = function() {
                return "https://twitter.com/intent/tweet?in_reply_to=" + this.tweetID()
            }, n.prototype.favoriteURL = function() {
                return "https://twitter.com/intent/favorite?tweet_id=" + this.tweetID()
            }, n.prototype.tweetID = function() {
                return this.get("id_str")
            }, n.prototype.username = function() {
                return this.get("user").screen_name
            }, n
        }(Backbone.Model), Twitter.Tweets = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = Twitter.Tweet, n.prototype.fetch = function() {}, n.prototype.initialize = function(e, t) {
                return this.twitterName = t.twitterName, this.tweetCount = t.tweetCount || 2
            }, n.prototype.comparator = function(e, t) {
                return new Date(e.toJSON().created_at) < new Date(t.toJSON().created_at) ? 1 : -1
            }, n
        }(Backbone.Collection), Twitter.TweetView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "div", n.prototype.className = "tweet", n.prototype.template = _.template('<p class="tweet-content"><%= text %></p>\n<div class="meta">\n    <a href="<%= permalink %>" class="avatar"><img src="<%= avatar %>" /></a>\n    <a href="<%= permalink %>" class="user">@<%= user %></a>\n    <a href="<%= permalink %>" class="date"><%= date %></a>\n</div>'), n.prototype.initialize = function() {
                return this.model.bind("change", this.render, this), this.model.bind("destroy", this.remove, this)
            }, n.prototype.render = function() {
                return this.$el.html(this.template({
                    text: this.model.linkifiedText(),
                    date: this.model.timeAgo(),
                    permalink: this.model.permalink(),
                    avatar: this.model.profileImageURL(),
                    user: this.model.username()
                })), this.el
            }, n
        }(Backbone.View), Twitter.Feed = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                var e = this;
                this.twitterName = this.options.twitterName;
                if (!this.twitterName) {
                    this.disabled = !0, this.$el.hide();
                    return
                }
                return this.tweetCount = this.options.tweetCount || 2, window.tweet_data ? this.setup() : $(document.body).on("twitter-data-ready", function() {
                    return e.setup()
                })
            }, n.prototype.setup = function() {
                var e;
                return e = window.tweet_data.slice(0, 3), this.tweets = new Twitter.Tweets(e, {
                    twitterName: this.twitterName,
                    tweetCount: this.tweetCount
                }), this.tweets.fetch(), this.render()
            }, n.prototype.render = function() {
                var e = this;
                if (this.disabled) return;
                return this.$el.css({
                    display: "block"
                }), this.$el.children(".tweet").remove(), this.tweets.forEach(function(t, n) {
                    var r;
                    return r = new Twitter.TweetView({
                        model: t
                    }), e.$el.append(r.render())
                }), $("#boxes").trigger("masonry")
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.Instagram = {}, Instagram.Photo = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.likeCount = function() {
                return this.get("likes").count
            }, n.prototype.commentCount = function() {
                return this.get("comments").count
            }, n.prototype.permalink = function() {
                return this.get("link")
            }, n.prototype.imageURL = function(e) {
                return e == null && (e = "standard"), e !== "thumbnail" && (e += "_resolution"), this.get("images")[e].url
            }, n.prototype.filter = function() {
                var e;
                return e = this.get("filter"), e === "Normal" ? "No filter" : e
            }, n
        }(Backbone.Model), Instagram.Photos = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = Instagram.Photo, n.prototype.url = function() {
                return "https://api.instagram.com/v1/users/self/media/recent?access_token=" + this.accessToken
            }, n.prototype.initialize = function(e, t) {
                return this.accessToken = t.accessToken
            }, n.prototype.parse = function(e) {
                return e.data
            }, n.prototype.fetch = function() {
                return n.__super__.fetch.call(this, {
                    type: "GET",
                    dataType: "jsonp"
                })
            }, n
        }(Backbone.Collection), Instagram.PhotoView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "div", n.prototype.className = "photo", n.prototype.template = _.template('<a href="<%= permalink %>">\n    <img src="<%= imageURL %>">\n</a>'), n.prototype.initialize = function() {
                return this.model.bind("change", this.render, this), this.model.bind("destroy", this.remove, this)
            }, n.prototype.render = function() {
                var e = this;
                return this.$el.html(this.template({
                    like_text: function() {
                        var t;
                        return t = e.model.likeCount(), "" + t + " " + _.pluralize("like", t)
                    }(),
                    comment_text: function() {
                        var t;
                        return t = e.model.commentCount(), "" + t + " " + _.pluralize("comment", t)
                    }(),
                    filter: this.model.filter(),
                    permalink: this.model.permalink(),
                    imageURL: this.model.imageURL()
                })), this.el
            }, n
        }(Backbone.View), Instagram.Photostream = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                var e;
                e = this.options.accessToken;
                if (!e) {
                    this.disabled = !0, this.$el.hide();
                    return
                }
                return this.photoCount = this.options.photoCount || 3, this.photos = new Instagram.Photos([], {
                    accessToken: e
                }), this.photos.bind("all", this.render, this), this.photos.fetch()
            }, n.prototype.render = function() {
                var e = this;
                if (this.disabled) return;
                return this.$(".photo").remove(), this.photos.forEach(function(t, n) {
                    var r;
                    if (n >= e.photoCount) return;
                    return r = new Instagram.PhotoView({
                        model: t
                    }), e.$el.append(r.render())
                }), this.$el.imagesLoaded(function() {
                    return e.$el.show(), $("#boxes").trigger("masonry")
                })
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.Flickr = {}, Flickr.Photo = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.title = function() {
                return this.get("title")
            }, n.prototype.dateTaken = function() {
                return this.get("datetaken")
            }, n.prototype.permalink = function() {
                return "http://www.flickr.com/photos/" + this.get("owner") + "/" + this.get("id")
            }, n.prototype.photoURL = function(e) {
                var t, n, r, i, s;
                e == null && (e = "largest"), n = {
                    "small thumbnail": this.get("url_s"),
                    thumbnail: this.get("url_t"),
                    "240px": this.get("url_m"),
                    "640px": this.get("url_z"),
                    "800px": this.get("url_c"),
                    original: this.get("url_o")
                };
                if (e !== "largest") return n[e];
                r = ["original", "800px", "640px", "240px", "thumbnail", "small thumbnail"];
                for (i = 0, s = r.length; i < s; i++) {
                    t = r[i];
                    if (n[t] !== void 0) return n[t]
                }
            }, n
        }(Backbone.Model), Flickr.Photos = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.model = Flickr.Photo, n.prototype.url = function() {
                return "http://api.flickr.com/services/rest/?&method=flickr.people.getPublicPhotos&api_key=12a49355728ae8a0baa555cb07bcb767&user_id=" + this.flickrID + "&per_page=" + this.photoCount + "&page=1&extras=url_s,url_t,url_m,url_c,url_o,url_z,date_taken&format=json&jsoncallback=?"
            }, n.prototype.initialize = function(e, t) {
                return this.flickrID = t.flickrID, this.photoCount = t.photoCount || 3
            }, n.prototype.parse = function(e) {
                return e.photos.photo
            }, n
        }(Backbone.Collection), Flickr.PhotoView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.tagName = "div", n.prototype.className = "photo", n.prototype.template = _.template('<a href="<%= permalink %>">\n    <img src="<%= photoURL %>">\n</a>'), n.prototype.initialize = function() {
                return this.model.bind("change", this.render, this), this.model.bind("destroy", this.remove, this)
            }, n.prototype.render = function() {
                return this.$el.html(this.template({
                    photoURL: this.model.photoURL("largest"),
                    date: this.model.dateTaken(),
                    caption: this.model.title(),
                    permalink: this.model.permalink()
                })), this.el
            }, n
        }(Backbone.View), Flickr.Photostream = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                var e, t;
                e = this.options.flickrID;
                if (!e) {
                    this.disabled = !0, this.$el.hide();
                    return
                }
                return t = this.options.photoCount, this.photos = new Flickr.Photos([], {
                    flickrID: e,
                    photoCount: t
                }), this.photos.bind("all", this.render, this), this.photos.fetch()
            }, n.prototype.render = function() {
                var e = this;
                if (this.disabled) return;
                return this.$(".photo").remove(), this.photos.forEach(function(t, n) {
                    var r;
                    if (n >= e.photoCount) return;
                    return r = new Flickr.PhotoView({
                        model: t
                    }), e.$el.append(r.render())
                }), this.$el.imagesLoaded(function() {
                    return e.$el.show(), $("#boxes").trigger("masonry")
                })
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.LikesView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.initialize = function() {
                return this.$(".like_post").addClass("clearfix"), this.$(".like_note_post .like_note > strong:first-child").append('<div class="arrow">'), this.styleAudioLikes(), this.render()
            }, n.prototype.
            render = function() {
                return this.$el.show(), this.$el.imagesLoaded(function() {
                    return $("#boxes").trigger("masonry")
                })
            }, n.prototype.styleAudioLikes = function() {
                var e, t, n, r, i, s;
                i = this.$(".like_audio_post"), s = [];
                for (n = 0, r = i.length; n < r; n++) t = i[n], s.push(e = $(t));
                return s
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.SidebarView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.el = $("#sidebar"), n.prototype.events = {
                "click span#pages": "togglePageList",
                "mousedown span#search": "focusSearch"
            }, n.prototype.initialize = function() {
                var e = this;
                return this.twitterFeed = new Twitter.Feed({
                    el: this.$("#twitter"),
                    twitterName: tOpts.twitterName,
                    tweetCount: 3
                }), this.instagramFeed = new Instagram.Photostream({
                    el: this.$("#instagram"),
                    accessToken: tOpts.instagramToken,
                    photoCount: 3
                }), this.flickr = new Flickr.Photostream({
                    el: $("#flickr"),
                    flickrID: tOpts.flickrID,
                    photoCount: 3
                }), this.$(".ask-label, .submit-label").jOverscroll({
                    scrollTime: 3e3
                }), this.$("#likes").length && (this.likes = new LikesView({
                    el: this.$("#likes")
                })), this.$("#social-links a").length && this.$("#social-links").show(), this.pageListOpen = !1, this.pageList = this.$("#page-list"), this.pageListButton = this.$("span#pages").parent(), $(window).on("click", function(t) {
                    if (e.pageListOpen && !$(t.target).filter("#pages, #pages > span").length) return console.log($(t.target)), e.closePageList()
                }), this.$("#shown li a").jOverscroll({
                    scrollTime: 3e3
                }), this.fixFollowers()
            }, n.prototype.fixFollowers = function() {
                var e, t;
                return e = this.$("#who-i-follow li").get(), t = e.sort(function() {
                    return Math.round(Math.random()) - .5
                }).slice(0, 25), $(_.difference(e, t)).remove()
            }, n.prototype.togglePageList = function(e) {
                if ($(e.target).filter("span").length) return this.pageListOpen ? this.closePageList() : this.openPageList(), this.pageListButton.toggleClass("open")
            }, n.prototype.closePageList = function() {
                var e = this;
                return this.pageListOpen = !1, this.pageList.animate({
                    opacity: 0,
                    left: "+=30px"
                }, 200, function() {
                    return e.pageList.hide()
                })
            }, n.prototype.openPageList = function() {
                return this.pageListOpen = !0, this.pageList.show(), this.pageList.animate({
                    opacity: 1,
                    left: "-=30px"
                }, 200)
            }, n.prototype.show = function() {
                return this.$el.css({
                    visibility: "visible",
                    opacity: 1
                })
            }, n.prototype.focusSearch = function() {
                var e;
                return e = this.$("#search-field"), e.is(":focus") || (console.log(e), e.focus()), !1
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.ShareBoxView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = {
                open: "open",
                close: "close"
            }, n.prototype.showHideSpeed = 100, n.prototype.initialize = function() {
                var e = this;
                return this.shareContainer = this.$el.siblings(".share-container"), this.url = this.shareContainer.find(".short-link a").attr("href"), this.post = this.$el.parents(".post"), this.shareContainer.on("click", ".close", function() {
                    return e.close()
                }), this.setupPinterestLink(), this.setupFacebookLink(), this.setupTwitterLink()
            }, n.prototype.render = function() {}, n.prototype.open = function() {
                return this.shareContainer.fadeIn(this.showHideSpeed), this.hiders.animate({
                    opacity: 0
                }, this.showHideSpeed)
            }, n.prototype.close = function() {
                return this.shareContainer.fadeOut(this.showHideSpeed), this.hiders.animate({
                    opacity: 1
                }, this.showHideSpeed)
            }, n.prototype.setupPinterestLink = function() {
                var e, t;
                return t = this.shareContainer.find(".pinterest"), e = this.post.find("img").first().attr("src"), e ? t.attr("href", "http://pinterest.com/pin/create/button/?url=" + this.url + "&media=" + e) : t.addClass("disabled")
            }, n.prototype.setupFacebookLink = function() {
                var e;
                return e = this.shareContainer.find(".facebook"), e.attr("href", "https://www.facebook.com/sharer.php?u=" + this.url)
            }, n.prototype.setupTwitterLink = function() {
                var e;
                return e = this.shareContainer.find(".twitter"), e.attr("href", "https://twitter.com/intent/tweet?url=" + this.url)
            }, n
        }(Backbone.View)
    }.call(this),
    function() {
        var e = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            t = {}.hasOwnProperty,
            n = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        window.PostView = function(t) {
            function r() {
                return this.show = e(this.show, this), this.fixMetaSpacing = e(this.fixMetaSpacing, this), r.__super__.constructor.apply(this, arguments)
            }
            return n(r, t), r.prototype.events = {
                "click .pxu-share": "openShareBox",
                "api-hit": "apiFixes",
                show: "show",
                "click .cell.timestamp, .cell.comment, .cell.notes": "followCellLink",
                "click .url": "selectURL"
            }, r.prototype.initialize = function() {
                return this.$el.removeClass("unprocessed"), this.updatePostSize(), this.removeSizingRelatedTags(), this.removeTrailingTagComma(), this.fixVideosInCaption(), this.fixMetaSpacing(), this.shareBox = new ShareBoxView({
                    el: this.$(".pxu-share")
                }), this.shareBox.hiders = this.$(".cell"), this.truncateNoteCount()
            }, r.prototype.render = function() {}, r.prototype.openShareBox = function() {
                return this.shareBox.$el.trigger("open")
            }, r.prototype.updatePostSize = function() {
                var e, t, n, r, i = this;
                return e = $(document.body).hasClass("permalink-page"), n = e ? "medium" : "small", this.$el.hasClass("type-photoset") && n === "small" && (n = "medium"), r = /(small)|(medium)|(large)/.exec(this.$el.data("tags")), t = r ? r[0] : void 0, t != null && ($(document.body).hasClass("permalink-page") ? (this.$el.hasClass("type-video") || this.$el.hasClass("type-photo") || this.$el.hasClass("type-photoset")) && t !== "small" && (n = t) : this.$el.hasClass("type-video") || this.$el.hasClass("type-photo") || this.$el.hasClass("type-photoset") ? n = t : t === "large" ? n = "medium" : n = t), $("html").hasClass("touch") && (e && Modernizr.mq("only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)") ? n = "medium" : n = "small"), this.$el.removeClass("small"), this.$el.removeClass("medium"), this.$el.removeClass("large"), this.$el.addClass(n), $(window).on("orientationchange", function() {
                    if (e) return Modernizr.mq("only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape)") ? i.$el.removeClass("small").addClass("medium") : Modernizr.mq("only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait)") && i.$el.removeClass("medium").addClass("small"), i.fixVideosInCaption()
                })
            }, r.prototype.extractRebloggedFromLink = function(e) {
                var t, n, r, i;
                t = null, e.html(function(e, n) {
                    var r, i;
                    return i = /\(via (<a(?: class="?'?tumblr_blog"?'?)? href="?'?http:\/\/[\/\w\.-]*"?'?(?: class="?'?tumblr_blog"?'?)?>[-\w]*<\/a>)\)/, r = i.exec(n), r ? (t = r[1], n.replace(r[0], "")) : n
                }), e.find("p").each(function(e, t) {
                    if (!$(t).children().length && !$(t).text()) return $(t).remove()
                }), i = this.$(".tumblr-source a");
                if (t) {
                    n = $("<p>").addClass("reblog-source"), n.html('<span class="icon">H</span> Reblogged from ' + t), r = this.$(".tags");
                    if (!i.length || i.attr("href") !== n.find("a").attr("href")) return i.length ? i.parent().before(n) : r.length ? r.before(n) : this.$(".caption").append(n)
                }
            }, r.prototype.fixMetaSpacing = function(e) {
                var t, n, r, i, s = this;
                e == null && (e = !0), this.$el.hasClass("small") && (t = this.$(".comment-count"), n = /\d+/.exec(t.text()), n != null && (t.text(n[0]), t.show()), r = this.$(".notes .text"), i = /\d+k?/.exec(r.text()), i != null && r.text(i[0]));
                if (e) return setTimeout(function() {
                    return s.fixMetaSpacing(!1)
                }, 700), setTimeout(function() {
                    return s.fixMetaSpacing(!1)
                }, 2e3), setTimeout(function() {
                    return s.fixMetaSpacing(!1)
                }, 5e3), setTimeout(function() {
                    return s.fixMetaSpacing(!1)
                }, 1e4), setTimeout(function() {
                    return s.$(".comments.cell").css({
                        "text-indent": 1
                    }), setTimeout(function() {
                        return s.$(".comments.cell").css({
                            "text-indent": 1
                        })
                    }, 200)
                }, 5e3)
            }, r.prototype.removeSizingRelatedTags = function() {
                var e, t, n, r, i, s, o;
                n = this.$(".tags"), r = n.children("a"), o = [];
                for (i = 0, s = r.length; i < s; i++) t = r[i], e = $(t), /^(small|medium|large),$/.exec(e.text()) != null ? (e.remove(), n.children("a").length ? o.push(void 0) : o.push(n.remove())) : o.push(void 0);
                return o
            }, r.prototype.removeTrailingTagComma = function() {
                var e;
                return e = this.$(".tags a").last().text(function(e, t) {
                    var n;
                    return n = /(.*),/.exec(t), n != null ? n[1] : t
                })
            }, r.prototype.fixVideosInCaption = function() {
                var e, t, n, r, i, s, o;
                s = this.$(".caption").find("iframe, embed"), o = [];
                for (r = 0, i = s.length; r < i; r++) n = s[r], e = $(n), t = e.parent().innerWidth(), o.push(e.css({
                    width: t,
                    height: e.height() / e.width() * t
                }));
                return o
            }, r.prototype.show = function(e) {
                return this.$el.css({
                    visibility: "visible",
                    opacity: 1
                })
            }, r.prototype.followCellLink = function(e) {
                var t, n, r;
                return t = $(e.target), r = t.find("a").first(), n = r.attr("href"), window.location = n
            }, r.prototype.truncateNoteCount = function() {
                var e;
                return e = this.$(".cell.notes span").last(), e.text(function(e, t) {
                    var n, r, i;
                    return i = /(\d+)(.*)/.exec(t), i ? (n = i[1], r = i[2], n.length > 3 && (n = /(\d+)\d\d\d/.exec(n)[1] + "k"), n + r) : t
                })
            }, r.prototype.selectURL = function() {
                return this.$(".url").select()
            }, r.prototype.apiFixes = function(e, t) {}, r
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.AnswerPostView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = _.extend({}, PostView.prototype.events, {}), n.prototype.initialize = function() {
                return n.__super__.initialize.call(this)
            }, n.prototype.render = function() {
                return n.__super__.render.call(this)
            }, n
        }(PostView)
    }.call(this),
    function() {
        var e = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            t = {}.hasOwnProperty,
            n = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        window.CustomAudioPlayer = function(t) {
            function r() {
                return this.updateBar = e(this.updateBar, this), this.showProgressBar = e(this.showProgressBar, this), r.__super__.constructor.apply(this, arguments)
            }
            return n(r, t), r.prototype.events = _.touchify({
                "click .button": "togglePlaying"
            }), r.prototype.initialize = function() {
                if (/audio_file=(.*)&color/.exec(this.options.audioPlayerURL) == null) return;
                return this.progressBar = this.$(".bar"), this.progress = this.progressBar.find(".progress"), this.buffered = this.progressBar.find(".buffered"), this.button = this.$(".button"), this.initializeAudio(this.options.audioPlayerURL), this.render()
            }, r.prototype.initializeAudio = function(e) {
                this.playerSetup = !1, this.audioURL = decodeURIComponent(/audio_file=(.*)&color/.exec(e)[1]) + "?plead=please-dont-download-this-or-our-lawyers-wont-let-us-host-audio", this.audio = $('<audio preload="none">').get(0);
                if (!$("html").hasClass("lt-ie10")) return this.setupPlayer()
            }, r.prototype.setupPlayer = function(e) {
                var t, n = this;
                this.playerSetup = !0, t = $(this.audio), t.append($("<source>").attr({
                    src: this.audioURL,
                    type: "audio/mpeg"
                })), t.children("source").on("error", function(e) {
                    return n.$el.trigger("error")
                }), t.on("durationchange", this.showProgressBar), t.on("loadeddata", this.updateBar), t.on("timeupdate", this.updateBar), this.progressBar.on("mousedown", function(e) {
                    var t, r, i;
                    return i = n.progressBar.width(), t = e.offsetX, r = e.screenX, n.progress.addClass("seeking"), $(document.body).bind("mousemove", _.throttle(function(e) {
                        return t += e.pageX - r, r = e.pageX, n.progress.css({
                            width: Math.max(Math.min(t / i, 100), 0) * 100 + "%"
                        })
                    }, 50)), $(document.body).bind("mouseup", function(e) {
                        return n.progress.removeClass("seeking"), n.audio.currentTime = n.audio.duration * Math.max(Math.min(t / i, 100), 0), $(document.body).unbind("mousemove"), $(document.body).unbind("mouseup")
                    })
                }), this.button.append(this.audio);
                if (e) return this.togglePlaying()
            }, r.prototype.togglePlaying = function(e) {
                return this.playerSetup ? this.audio.paused ? (this.audio.play(), this.button.addClass("playing")) : (this.audio.pause(), this.button.removeClass("playing")) : this.setupPlayer(!0)
            }, r.prototype.showProgressBar = function(e) {
                return this.progressBar.animate({
                    bottom: 0
                }, 400)
            }, r.prototype.updateBar = function(e) {
                var t, n;
                return n = this.audio.currentTime / this.audio.duration * 100 + "%", t = Math.ceil(this.audio.buffered.end(0) / this.audio.duration * 100) + "%", this.progress.hasClass("seeking") || this.progress.css({
                    width: n
                }), t !== "100%" ? (this.buffered.stop(), this.buffered.animate({
                    width: t
                }, 500)) : this.buffered.css({
                    width: t
                })
            }, r.prototype.render = function() {
                return this.$el.show()
            }, r
        }(Backbone.View)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.AudioPostView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = _.extend({}, PostView.prototype.events, {
                "error .custom-player-wrap": "disableCustomPlayer",
                "mouseenter .album-art-area": "showDownloadLink",
                "mouseleave .album-art-area": "hideDownloadLink"
            }), n.prototype.initialize = function() {
                return n.__super__.initialize.call(this), this.addPlaceholderAlbumArt(), this.removeEmptyCaption(), this.reloadSpotifyPlayer()
            }, n.prototype.render = function() {
                return n.__super__.render.call(this)
            }, n.prototype.addPlaceholderAlbumArt = function() {
                if (!this.$(".album-art").length) return this.$(".placeholder").show()
            }, n.prototype.removeEmptyCaption = function() {
                if (!this.$(".caption").length && _.isWhitespace(this.$(".song-meta").text())) return this.$(".song-meta").remove(), this.$(".post-content").css({
                    "padding-bottom": 0
                })
            }, n.prototype.enableCustomPlayer = function(e) {
                return new CustomAudioPlayer({
                    el: this.$(".custom-player-wrap"),
                    audioPlayerURL: e
                })
            }, n.prototype.disableCustomPlayer = function(e) {
                return this.$(".custom-player-wrap").fadeOut(), this.enableStandardPlayer(this.audioPlayer)
            }, n.prototype.enableStandardPlayer = function(e) {
                return this.$(".standard-player-wrap embed").length || this.$(".standard-player").html('<span><div class="audio_player">' + e + "</div></span>"), this.$(".standard-player-wrap").fadeIn()
            }, n.prototype.reloadSpotifyPlayer = function() {
                var e, t;
                return e = this.$(".spotify_audio_player"), e.siblings(".song-meta").remove(), t = e.attr("src"), $(document.body).hasClass("permalink-page") ? e.addClass("medium") : e.addClass("small"), e.attr("src", ""), e.attr("src", t)
            }, n.prototype.apiFixes = function(e, t) {
                var n;
                return this.audioPlayer = t["audio-player"], n = !Modernizr.audio.mp3, n ? this.enableStandardPlayer(this.audioPlayer) : this.enableCustomPlayer(this.audioPlayer)
            }, n.prototype.showDownloadLink = function() {
                return this.$(".overlay").show()
            }, n.prototype.hideDownloadLink = function() {
                return this.$(".overlay").hide()
            }, n
        }(PostView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.ChatPostView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = _.extend({}, PostView.prototype.events, {}), n.prototype.initialize = function() {
                return n.__super__.initialize.call(this)
            }, n.prototype.render = function() {
                return n.__super__.render.call(this)
            }, n
        }(PostView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.LinkPostView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = _.extend({}, PostView.prototype.events, {}), n.prototype.initialize = function() {
                return n.__super__.initialize.call(this)
            }, n.prototype.render = function() {
                return n.__super__.render.call(this)
            }, n
        }(PostView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.PhotoPostView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = _.extend({}, PostView.prototype.events, {}), n.prototype.initialize = function() {
                return n.__super__.initialize.call(this), this.hideCaption(), this.extractRebloggedFromLink(this.$(".caption")), this.fixPadding(), this.setupLightbox(), this.setupOverlay(), this.goHighRes()
            }, n.prototype.render = function() {
                return n.__super__.render.call(this)
            }, n.prototype.hideCaption = function() {
                if (!this.$(".tags-and-source").length && this.$(".post-content").children().length === 1) return this.$(".post-content").css({
                    "padding-bottom": 0
                }), this.$(".photo").css({
                    "margin-bottom": 0
                })
            }, n.prototype.setupLightbox = function() {
                var e = this;
                return this.$(".tumblr-box").on("click", function(t) {
                    var n, r, i, s, o, u;
                    return t.preventDefault(), o = e.$(".photo-wrap .photo"), s = o.data("width"), n = o.data("height"), i = o.attr("src"), r = o.data("highres"), u = {
                        width: s,
                        height: n,
                        low_res: i,
                        high_res: r
                    }, Tumblr.Lightbox.init([u], 0)
                })
            }, n.prototype.setupOverlay = function() {
                return this.$(".photo-wrap").on("mouseenter", function() {
                    return $(this).find(".icons").css("visibility", "visible")
                }).on("mouseleave", function() {
                    return $(this).find(".icons").css("visibility", "hidden")
                }), this.$("span.info").on("mouseenter", function() {
                    var e, t;
                    return t = $(this), e = t.children(".pxu-data"), e.css("display", "block").stop(!0, !1).animate({
                        opacity: 1
                    }, 200)
                }), this.$("span.info").on("mouseleave", function() {
                    var e, t;
                    return t = $(this), e = t.children(".pxu-data"), e.stop(!0, !1).animate({
                        opacity: 0
                    }, 200, function() {
                        return $(this).css("display", "none")
                    })
                })
            }, n.prototype.fixPadding = function() {
                if (!this.$(".caption").text()) return this.$(".photo").css({
                    "margin-bottom": 0
                }), this.$(".post-content").css({
                    "padding-bottom": 0
                })
            }, n.prototype.goHighRes = function() {
                if (this.$el.hasClass("large") || this.$el.hasClass("medium")) return this.$(".photo").attr({
                    src: this.$(".photo").data("highres")
                })
            }, n
        }(PostView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.PhotosetPostView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = _.extend({}, PostView.prototype.events, {}), n.prototype.initialize = function() {
                return n.__super__.initialize.call(this), this.extractRebloggedFromLink(this.$(".caption")), this.$(".photo-slideshow").pxuPhotoset({
                    rounded: !1,
                    gutter: "9px"
                })
            }, n.prototype.render = function() {
                return n.__super__.render.call(this)
            }, n
        }(PostView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.QuotePostView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = _.extend({}, PostView.prototype.events, {}), n.prototype.initialize = function() {
                return this.extractRebloggedFromLink(this.$(".caption")), this.removeQuotationMarks(), tOpts.smartQuoteSources && this.smartQuotes(), n.__super__.initialize.call(this)
            }, n.prototype.render = function() {
                return n.__super__.render.call(this)
            }, n.prototype.smartQuotes = function() {
                var e, t, n;
                return e = this.$(".caption").children(), n = null, e.length > 1 ? (t = e.first().remove(), n = t.text()) : (n = this.$(".caption").text(), this.$(".caption").empty()), this.$(".source-text").text(n), this.$(".source").show()
            }, n.prototype.removeQuotationMarks = function() {
                var e;
                return e = this.$(".quote"), e.text(function(e, t) {
                    return t.slice(1, -1)
                })
            }, n
        }(PostView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.TextPostView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = _.extend({}, PostView.prototype.events, {}), n.prototype.initialize = function() {
                return n.__super__.initialize.call(this)
            }, n.prototype.render = function() {
                return n.__super__.render.call(this)
            }, n
        }(PostView)
    }.call(this),
    function() {
        var e = {}.hasOwnProperty,
            t = function(t, n) {
                function i() {
                    this.constructor = t
                }
                for (var r in n) e.call(n, r) && (t[r] = n[r]);
                return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
            };
        window.VideoPostView = function(e) {
            function n() {
                return n.__super__.constructor.apply(this, arguments)
            }
            return t(n, e), n.prototype.events = _.extend({}, PostView.prototype.events, {}), n.prototype.initialize = function() {
                var e = this;
                return n.__super__.initialize.call(this), this.videoPlayerWrap = this.$(".video-player-wrap"), this.isTumblrVideo = this.$(".tumblr_video_container").length !== 0, this.extractRebloggedFromLink(this.$(".caption")), $(window).on("orientationchange", function() {
                    return e.resizeVideoPlayers()
                })
            }, n.prototype.render = function() {
                return n.__super__.render.call(this), this.resizeVideoPlayers()
            }, n.prototype.resizeVideoPlayers = function() {
                var e, t, n, r;
                return r = this.videoPlayerWrap.find("iframe, embed"), n = this.videoPlayerWrap.width(), t = r.width() / r.height(), e = n / t, r.css({
                    width: n,
                    height: e
                }), this.$(".tumblr_video_container").css({
                    "max-width": n,
                    "max-height": e
                }), $("#boxes").trigger("masonry")
            }, n
        }(PostView)
    }.call(this),
    function() {
        var e = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            t = {}.hasOwnProperty,
            n = function(e, n) {
                function i() {
                    this.constructor = e
                }
                for (var r in n) t.call(n, r) && (e[r] = n[r]);
                return i.prototype = n.prototype, e.prototype = new i, e.__super__ = n.prototype, e
            };
        window.ThemeView = function(t) {
            function r() {
                return this.morePosts = e(this.morePosts, this), this.relayoutMasonry = e(this.relayoutMasonry, this), this.addInfiniteScrollPosts = e(this.addInfiniteScrollPosts, this), r.__super__.constructor.apply(this, arguments)
            }
            return n(r, t), r.prototype.el = $("#boxes"), r.prototype.events = {
                "infinite-scroll": "retrievePosts",
                masonry: "relayoutMasonry",
                "click #moar-posts": "morePosts",
                "no-moar": "noMorePosts",
                "click #back-to-top .icon": "backToTop",
                spin: "startSpinning"
            }, r.prototype.initialize = function() {
                var e = this;
                return this.postViews = [], this.sidebarView = new SidebarView, this.clickForMore = !this.$("#moar-posts").hasClass("no-click"), this.addPosts(), this.setupInfiniteScroll(), this.$el.patiochair({
                    olderSelector: "#pagination .next",
                    eachPost: function(e, t) {
                        return t.trigger("api-hit", e)
                    },
                    withPostCount: function(t) {
                        if (e.$(".post").length === t) return e.noMorePosts()
                    }
                }), this.setupBackToTopButton(), this.render(), this.moarAnimation = this.$("#moar-posts .animation"), this.dots = [this.moarAnimation.find(".1"), this.moarAnimation.find(".2"), this.moarAnimation.find(".3")], this.moarLabel = this.$("#moar-posts .load"), this.noMore = !1, this.ie8Background()
            }, r.prototype.setupBackToTopButton = function() {
                var e, t, n = this;
                return e = !1, t = this.$("#back-to-top"), $(window).scroll(_.throttle(function() {
                    var n;
                    n = 1e3;
                    if (window.scrollY > n && !e) return e = !0, t.animate({
                        bottom: 20
                    }, 500);
                    if (window.scrollY < n && e) return e = !1, t.animate({
                        bottom: -100
                    }, 500)
                }, 1e3))
            }, r.prototype.addPost = function(e) {
                var t, n, r, i;
                return t = $(e), r = /(photoset)|(photo)|(text)|(link)|(quote)|(chat)|(video)|(audio)|(answer)/, n = r.exec(t.attr("class"))[0], i = new(window[_.capitalize(n) + "PostView"])({
                    el: e
                }), this.postViews.push(i), i
            }, r.prototype.addPosts = function() {
                var e, t, n, r, i;
                t = $(".post.unprocessed"), i = [];
                for (n = 0, r = t.length; n < r; n++) e = t[n], i.push(this.addPost(e));
                return i
            }, r.prototype.render = function() {
                var e, t, n, r, i = this;
                this.sidebarView.render(), r = this.postViews;
                for (t = 0, n = r.length; t < n; t++) e = r[t], e.render();
                return this.enableMasonry(), this.$el.imagesLoaded(function() {
                    return i.$el.trigger("masonry")
                })
            }, r.prototype.setupInfiniteScroll = function() {
                if (!$(document.body).hasClass("infinite-scroll") && !!$("html").hasClass("touch")) {
                    $(document.body).removeClass("infinite-scroll");
                    return
                }
                return this.$el.infinitescroll({
                    navSelector: "#pagination",
                    nextSelector: "#pagination .next",
                    itemSelector: "#boxes article.post.box"
                }, this.addInfiniteScrollPosts), this.clickForMore ? $(window).unbind(".infscr") : this.$("#moar-posts").fadeOut()
            }, r.prototype.addInfiniteScrollPosts = function(e) {
                var t, n, r, i, s, o, u = this;
                n = function() {
                    var t, n, i;
                    i = [];
                    for (t = 0, n = e.length; t < n; t++) r = e[t], i.push(this.addPost(r));
                    return i
                }.call(this), $(e).patiochair({
                    eachPost: function(e, t) {
                        return t.trigger("api-hit", e)
                    },
                    withPostCount: function(e) {
                        if (u.$(".post").length === e) return u.noMorePosts()
                    }
                });
                for (s = 0, o = n.length; s < o; s++) t = n[s], t.render();
                return tOpts.facebookAPI && FB.XFBML.parse(), tOpts.disqusShortname && !tOpts.facebookAPI && (i = "http://" + tOpts.disqusShortname + ".disqus.com/count.js", $.getScript(i)), this.$el.masonry("appended", $(e)), this.$el.imagesLoaded(function() {
                    var t, n, r;
                    u.$el.trigger("masonry");
                    for (n = 0, r = e.length; n < r; n++) t = e[n], $(t).trigger("show");
                    return u.stopSpinning()
                })
            }, r.prototype.retrievePosts = function() {
                return this.startSpinning(), this.$el.infinitescroll("retrieve")
            }, r.prototype.enableMasonry = function() {
                var e, t, n, r;
                this.$el.masonry({
                    isFitWidth: !0,
                    itemSelector: ".box"
                }), r = this.postViews;
                for (t = 0, n = r.length; t < n; t++) e = r[t], e.show();
                return this.sidebarView.show(), this.$("#search-title").show()
            }, r.prototype.relayoutMasonry = function() {
                if (this.$el.children(".masonry-brick").length) return this.$el.masonry()
            }, r.prototype.morePosts = function() {
                if (!this.noMore) return this.retrievePosts()
            }, r.prototype.noMorePosts = function() {
                var e;
                return this.noMore = !0, e = this.$("#moar-posts"), e.addClass("no-more"), e.children(".spinner").remove(), e.children(".animation").remove(), e.children("span").text("no more posts to display"), e.css({
                    cursor: "auto"
                })
            }, r.prototype.alternateDot = function(e, t) {
                var n;
                return n = 400, setTimeout(function() {
                    var t;
                    return t = function() {
                        var e;
                        return e = $(this), e.animate({
                            opacity: 0
                        }, n, function() {
                            return e = $(this), e.animate({
                                opacity: 1
                            }, n, t)
                        })
                    }, t.apply(e.get(0))
                }, t)
            }, r.prototype.startSpinning = function() {
                var e, t, n, r, i, s, o;
                if (this.noMore) return;
                this.clickForMore || this.$("#moar-posts").fadeIn(), this.moarAnimation.animate({
                    opacity: 1
                }, 100), this.moarLabel.animate({
                    opacity: 0
                }, 100), e = 0, n = 200, s = this.dots, o = [];
                for (r = 0, i = s.length; r < i; r++) t = s[r], this.alternateDot(t, e), o.push(e += n);
                return o
            }, r.prototype.stopSpinning = function() {
                var e, t, n, r, i;
                this.clickForMore || this.$("#moar-posts").fadeOut(), this.moarAnimation.animate({
                    opacity: 0
                }, 100), this.moarLabel.animate({
                    opacity: 1
                }, 100), r = this.dots, i = [];
                for (t = 0, n = r.length; t < n; t++) e = r[t], e.stop(), i.push(e.css({
                    opacity: 1
                }));
                return i
            }, r.prototype.backToTop = function() {
                return $("html, body").animate({
                    scrollTop: 0
                }, "slow")
            }, r.prototype.ie8Background = function() {
                var e, t;
                if (!$.browser) return;
                if ($.browser.msie && $.browser.version.substring(0, 2) === "8." && $(".ie-bg").length) return e = $(".ie-bg"), t = function() {
                    var t, n, r, i, s, o;
                    return o = $(window).width(), s = $(window).height(), i = o / s, r = e.width(), n = e.height(), t = r / n, i > t ? e.css({
                        width: o,
                        height: "auto"
                    }) : e.css({
                        width: "auto",
                        height: s
                    })
                }, e.parent().imagesLoaded(t), $(window).resize(t)
            }, r
        }(Backbone.View)
    }.call(this), navigator.userAgent.indexOf("MSIE 9") != -1 && $("html").addClass("lt-ie10"), $(function() {
        new ThemeView
    });
