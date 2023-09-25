!function(e) {
    "use strict";
    function n(e) {
        function a(e, n) {
            var t, r, i, o, u, s, l = this;
            if (!(l instanceof a))
                return new a(e,n);
            if (null != n && V(n, 2, 64, C, "base")) {
                if (n = 0 | n,
                s = e + "",
                10 == n)
                    return l = new a(e instanceof a ? e : s),
                    I(l, B + l.e + 1, P);
                if ((o = "number" == typeof e) && 0 * e != 0 || !new RegExp("^-?" + (t = "[" + v.slice(0, n) + "]+") + "(?:\\." + t + ")?$",37 > n ? "i" : "").test(s))
                    return U(l, s, o, n);
                o ? (l.s = 0 > 1 / e ? (s = s.slice(1),
                -1) : 1,
                z && s.replace(/^0\.0*|\./, "").length > 15 && x(C, w, e),
                o = !1) : l.s = 45 === s.charCodeAt(0) ? (s = s.slice(1),
                -1) : 1,
                s = A(s, 10, n, l.s)
            } else {
                if (e instanceof a)
                    return l.s = e.s,
                    l.e = e.e,
                    l.c = (e = e.c) ? e.slice() : e,
                    void (C = 0);
                if ((o = "number" == typeof e) && 0 * e == 0) {
                    if (l.s = 0 > 1 / e ? (e = -e,
                    -1) : 1,
                    e === ~~e) {
                        for (r = 0,
                        i = e; i >= 10; i /= 10,
                        r++)
                            ;
                        return l.e = r,
                        l.c = [e],
                        void (C = 0)
                    }
                    s = e + ""
                } else {
                    if (!h.test(s = e + ""))
                        return U(l, s, o);
                    l.s = 45 === s.charCodeAt(0) ? (s = s.slice(1),
                    -1) : 1
                }
            }
            for ((r = s.indexOf(".")) > -1 && (s = s.replace(".", "")),
            (i = s.search(/e/i)) > 0 ? (0 > r && (r = i),
            r += +s.slice(i + 1),
            s = s.substring(0, i)) : 0 > r && (r = s.length),
            i = 0; 48 === s.charCodeAt(i); i++)
                ;
            for (u = s.length; 48 === s.charCodeAt(--u); )
                ;
            if (s = s.slice(i, u + 1))
                if (u = s.length,
                o && z && u > 15 && (e > y || e !== p(e)) && x(C, w, l.s * e),
                r = r - i - 1,
                r > G)
                    l.c = l.e = null;
                else if ($ > r)
                    l.c = [l.e = 0];
                else {
                    if (l.e = r,
                    l.c = [],
                    i = (r + 1) % b,
                    0 > r && (i += b),
                    u > i) {
                        for (i && l.c.push(+s.slice(0, i)),
                        u -= b; u > i; )
                            l.c.push(+s.slice(i, i += b));
                        s = s.slice(i),
                        i = b - s.length
                    } else
                        i -= u;
                    for (; i--; s += "0")
                        ;
                    l.c.push(+s)
                }
            else
                l.c = [l.e = 0];
            C = 0
        }
        function A(e, n, t, i) {
            var o, u, l, f, h, g, p, d = e.indexOf("."), m = B, w = P;
            for (37 > t && (e = e.toLowerCase()),
            d >= 0 && (l = W,
            W = 0,
            e = e.replace(".", ""),
            p = new a(t),
            h = p.pow(e.length - d),
            W = l,
            p.c = s(c(r(h.c), h.e), 10, n),
            p.e = p.c.length),
            g = s(e, t, n),
            u = l = g.length; 0 == g[--l]; g.pop())
                ;
            if (!g[0])
                return "0";
            if (0 > d ? --u : (h.c = g,
            h.e = u,
            h.s = i,
            h = L(h, p, m, w, n),
            g = h.c,
            f = h.r,
            u = h.e),
            o = u + m + 1,
            d = g[o],
            l = n / 2,
            f = f || 0 > o || null != g[o + 1],
            f = 4 > w ? (null != d || f) && (0 == w || w == (h.s < 0 ? 3 : 2)) : d > l || d == l && (4 == w || f || 6 == w && 1 & g[o - 1] || w == (h.s < 0 ? 8 : 7)),
            1 > o || !g[0])
                e = f ? c("1", -m) : "0";
            else {
                if (g.length = o,
                f)
                    for (--n; ++g[--o] > n; )
                        g[o] = 0,
                        o || (++u,
                        g = [1].concat(g));
                for (l = g.length; !g[--l]; )
                    ;
                for (d = 0,
                e = ""; l >= d; e += v.charAt(g[d++]))
                    ;
                e = c(e, u)
            }
            return e
        }
        function E(e, n, t, i) {
            var o, u, s, f, h;
            if (t = null != t && V(t, 0, 8, i, m) ? 0 | t : P,
            !e.c)
                return e.toString();
            if (o = e.c[0],
            s = e.e,
            null == n)
                h = r(e.c),
                h = 19 == i || 24 == i && q >= s ? l(h, s) : c(h, s);
            else if (e = I(new a(e), n, t),
            u = e.e,
            h = r(e.c),
            f = h.length,
            19 == i || 24 == i && (u >= n || q >= u)) {
                for (; n > f; h += "0",
                f++)
                    ;
                h = l(h, u)
            } else if (n -= s,
            h = c(h, u),
            u + 1 > f) {
                if (--n > 0)
                    for (h += "."; n--; h += "0")
                        ;
            } else if (n += u - f,
            n > 0)
                for (u + 1 == f && (h += "."); n--; h += "0")
                    ;
            return e.s < 0 && o ? "-" + h : h
        }
        function D(e, n) {
            var t, r, i = 0;
            for (u(e[0]) && (e = e[0]),
            t = new a(e[0]); ++i < e.length; ) {
                if (r = new a(e[i]),
                !r.s) {
                    t = r;
                    break
                }
                n.call(t, r) && (t = r)
            }
            return t
        }
        function F(e, n, t, r, i) {
            return (n > e || e > t || e != f(e)) && x(r, (i || "decimal places") + (n > e || e > t ? " out of range" : " not an integer"), e),
            !0
        }
        function _(e, n, t) {
            for (var r = 1, i = n.length; !n[--i]; n.pop())
                ;
            for (i = n[0]; i >= 10; i /= 10,
            r++)
                ;
            return (t = r + t * b - 1) > G ? e.c = e.e = null : $ > t ? e.c = [e.e = 0] : (e.e = t,
            e.c = n),
            e
        }
        function x(e, n, t) {
            var r = new Error(["new BigNumber", "cmp", "config", "div", "divToInt", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "precision", "random", "round", "shift", "times", "toDigits", "toExponential", "toFixed", "toFormat", "toFraction", "pow", "toPrecision", "toString", "BigNumber"][e] + "() " + n + ": " + t);
            throw r.name = "BigNumber Error",
            C = 0,
            r
        }
        function I(e, n, t, r) {
            var i, o, u, s, l, c, f, a = e.c, h = O;
            if (a) {
                e: {
                    for (i = 1,
                    s = a[0]; s >= 10; s /= 10,
                    i++)
                        ;
                    if (o = n - i,
                    0 > o)
                        o += b,
                        u = n,
                        l = a[c = 0],
                        f = l / h[i - u - 1] % 10 | 0;
                    else if (c = g((o + 1) / b),
                    c >= a.length) {
                        if (!r)
                            break e;
                        for (; a.length <= c; a.push(0))
                            ;
                        l = f = 0,
                        i = 1,
                        o %= b,
                        u = o - b + 1
                    } else {
                        for (l = s = a[c],
                        i = 1; s >= 10; s /= 10,
                        i++)
                            ;
                        o %= b,
                        u = o - b + i,
                        f = 0 > u ? 0 : l / h[i - u - 1] % 10 | 0
                    }
                    if (r = r || 0 > n || null != a[c + 1] || (0 > u ? l : l % h[i - u - 1]),
                    r = 4 > t ? (f || r) && (0 == t || t == (e.s < 0 ? 3 : 2)) : f > 5 || 5 == f && (4 == t || r || 6 == t && (o > 0 ? u > 0 ? l / h[i - u] : 0 : a[c - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)),
                    1 > n || !a[0])
                        return a.length = 0,
                        r ? (n -= e.e + 1,
                        a[0] = h[(b - n % b) % b],
                        e.e = -n || 0) : a[0] = e.e = 0,
                        e;
                    if (0 == o ? (a.length = c,
                    s = 1,
                    c--) : (a.length = c + 1,
                    s = h[b - o],
                    a[c] = u > 0 ? p(l / h[i - u] % h[u]) * s : 0),
                    r)
                        for (; ; ) {
                            if (0 == c) {
                                for (o = 1,
                                u = a[0]; u >= 10; u /= 10,
                                o++)
                                    ;
                                for (u = a[0] += s,
                                s = 1; u >= 10; u /= 10,
                                s++)
                                    ;
                                o != s && (e.e++,
                                a[0] == N && (a[0] = 1));
                                break
                            }
                            if (a[c] += s,
                            a[c] != N)
                                break;
                            a[c--] = 0,
                            s = 1
                        }
                    for (o = a.length; 0 === a[--o]; a.pop())
                        ;
                }
                e.e > G ? e.c = e.e = null : e.e < $ && (e.c = [e.e = 0])
            }
            return e
        }
        var L, U, C = 0, M = a.prototype, T = new a(1), B = 20, P = 4, q = -7, k = 21, $ = -1e7, G = 1e7, z = !0, V = F, j = !1, H = 1, W = 0, J = {
            decimalSeparator: ".",
            groupSeparator: ",",
            groupSize: 3,
            secondaryGroupSize: 0,
            fractionGroupSeparator: " ",
            fractionGroupSize: 0
        };
        return a.another = n,
        a.ROUND_UP = 0,
        a.ROUND_DOWN = 1,
        a.ROUND_CEIL = 2,
        a.ROUND_FLOOR = 3,
        a.ROUND_HALF_UP = 4,
        a.ROUND_HALF_DOWN = 5,
        a.ROUND_HALF_EVEN = 6,
        a.ROUND_HALF_CEIL = 7,
        a.ROUND_HALF_FLOOR = 8,
        a.EUCLID = 9,
        a.config = a.set = function() {
            var e, n, t = 0, r = {}, i = arguments, s = i[0], l = s && "object" == typeof s ? function() {
                return s.hasOwnProperty(n) ? null != (e = s[n]) : void 0
            }
            : function() {
                return i.length > t ? null != (e = i[t++]) : void 0
            }
            ;
            return l(n = "DECIMAL_PLACES") && V(e, 0, S, 2, n) && (B = 0 | e),
            r[n] = B,
            l(n = "ROUNDING_MODE") && V(e, 0, 8, 2, n) && (P = 0 | e),
            r[n] = P,
            l(n = "EXPONENTIAL_AT") && (u(e) ? V(e[0], -S, 0, 2, n) && V(e[1], 0, S, 2, n) && (q = 0 | e[0],
            k = 0 | e[1]) : V(e, -S, S, 2, n) && (q = -(k = 0 | (0 > e ? -e : e)))),
            r[n] = [q, k],
            l(n = "RANGE") && (u(e) ? V(e[0], -S, -1, 2, n) && V(e[1], 1, S, 2, n) && ($ = 0 | e[0],
            G = 0 | e[1]) : V(e, -S, S, 2, n) && (0 | e ? $ = -(G = 0 | (0 > e ? -e : e)) : z && x(2, n + " cannot be zero", e))),
            r[n] = [$, G],
            l(n = "ERRORS") && (e === !!e || 1 === e || 0 === e ? (C = 0,
            V = (z = !!e) ? F : o) : z && x(2, n + d, e)),
            r[n] = z,
            l(n = "CRYPTO") && (e === !0 || e === !1 || 1 === e || 0 === e ? e ? (e = "undefined" == typeof crypto,
            !e && crypto && (crypto.getRandomValues || crypto.randomBytes) ? j = !0 : z ? x(2, "crypto unavailable", e ? void 0 : crypto) : j = !1) : j = !1 : z && x(2, n + d, e)),
            r[n] = j,
            l(n = "MODULO_MODE") && V(e, 0, 9, 2, n) && (H = 0 | e),
            r[n] = H,
            l(n = "POW_PRECISION") && V(e, 0, S, 2, n) && (W = 0 | e),
            r[n] = W,
            l(n = "FORMAT") && ("object" == typeof e ? J = e : z && x(2, n + " not an object", e)),
            r[n] = J,
            r
        }
        ,
        a.max = function() {
            return D(arguments, M.lt)
        }
        ,
        a.min = function() {
            return D(arguments, M.gt)
        }
        ,
        a.random = function() {
            var e = 9007199254740992
              , n = Math.random() * e & 2097151 ? function() {
                return p(Math.random() * e)
            }
            : function() {
                return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
            }
            ;
            return function(e) {
                var t, r, i, o, u, s = 0, l = [], c = new a(T);
                if (e = null != e && V(e, 0, S, 14) ? 0 | e : B,
                o = g(e / b),
                j)
                    if (crypto.getRandomValues) {
                        for (t = crypto.getRandomValues(new Uint32Array(o *= 2)); o > s; )
                            u = 131072 * t[s] + (t[s + 1] >>> 11),
                            u >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)),
                            t[s] = r[0],
                            t[s + 1] = r[1]) : (l.push(u % 1e14),
                            s += 2);
                        s = o / 2
                    } else if (crypto.randomBytes) {
                        for (t = crypto.randomBytes(o *= 7); o > s; )
                            u = 281474976710656 * (31 & t[s]) + 1099511627776 * t[s + 1] + 4294967296 * t[s + 2] + 16777216 * t[s + 3] + (t[s + 4] << 16) + (t[s + 5] << 8) + t[s + 6],
                            u >= 9e15 ? crypto.randomBytes(7).copy(t, s) : (l.push(u % 1e14),
                            s += 7);
                        s = o / 7
                    } else
                        j = !1,
                        z && x(14, "crypto unavailable", crypto);
                if (!j)
                    for (; o > s; )
                        u = n(),
                        9e15 > u && (l[s++] = u % 1e14);
                for (o = l[--s],
                e %= b,
                o && e && (u = O[b - e],
                l[s] = p(o / u) * u); 0 === l[s]; l.pop(),
                s--)
                    ;
                if (0 > s)
                    l = [i = 0];
                else {
                    for (i = -1; 0 === l[0]; l.splice(0, 1),
                    i -= b)
                        ;
                    for (s = 1,
                    u = l[0]; u >= 10; u /= 10,
                    s++)
                        ;
                    b > s && (i -= b - s)
                }
                return c.e = i,
                c.c = l,
                c
            }
        }(),
        L = function() {
            function e(e, n, t) {
                var r, i, o, u, s = 0, l = e.length, c = n % R, f = n / R | 0;
                for (e = e.slice(); l--; )
                    o = e[l] % R,
                    u = e[l] / R | 0,
                    r = f * o + u * c,
                    i = c * o + r % R * R + s,
                    s = (i / t | 0) + (r / R | 0) + f * u,
                    e[l] = i % t;
                return s && (e = [s].concat(e)),
                e
            }
            function n(e, n, t, r) {
                var i, o;
                if (t != r)
                    o = t > r ? 1 : -1;
                else
                    for (i = o = 0; t > i; i++)
                        if (e[i] != n[i]) {
                            o = e[i] > n[i] ? 1 : -1;
                            break
                        }
                return o
            }
            function r(e, n, t, r) {
                for (var i = 0; t--; )
                    e[t] -= i,
                    i = e[t] < n[t] ? 1 : 0,
                    e[t] = i * r + e[t] - n[t];
                for (; !e[0] && e.length > 1; e.splice(0, 1))
                    ;
            }
            return function(i, o, u, s, l) {
                var c, f, h, g, d, m, w, v, y, O, R, S, A, E, D, F, _, x = i.s == o.s ? 1 : -1, L = i.c, U = o.c;
                if (!(L && L[0] && U && U[0]))
                    return new a(i.s && o.s && (L ? !U || L[0] != U[0] : U) ? L && 0 == L[0] || !U ? 0 * x : x / 0 : NaN);
                for (v = new a(x),
                y = v.c = [],
                f = i.e - o.e,
                x = u + f + 1,
                l || (l = N,
                f = t(i.e / b) - t(o.e / b),
                x = x / b | 0),
                h = 0; U[h] == (L[h] || 0); h++)
                    ;
                if (U[h] > (L[h] || 0) && f--,
                0 > x)
                    y.push(1),
                    g = !0;
                else {
                    for (E = L.length,
                    F = U.length,
                    h = 0,
                    x += 2,
                    d = p(l / (U[0] + 1)),
                    d > 1 && (U = e(U, d, l),
                    L = e(L, d, l),
                    F = U.length,
                    E = L.length),
                    A = F,
                    O = L.slice(0, F),
                    R = O.length; F > R; O[R++] = 0)
                        ;
                    _ = U.slice(),
                    _ = [0].concat(_),
                    D = U[0],
                    U[1] >= l / 2 && D++;
                    do {
                        if (d = 0,
                        c = n(U, O, F, R),
                        0 > c) {
                            if (S = O[0],
                            F != R && (S = S * l + (O[1] || 0)),
                            d = p(S / D),
                            d > 1)
                                for (d >= l && (d = l - 1),
                                m = e(U, d, l),
                                w = m.length,
                                R = O.length; 1 == n(m, O, w, R); )
                                    d--,
                                    r(m, w > F ? _ : U, w, l),
                                    w = m.length,
                                    c = 1;
                            else
                                0 == d && (c = d = 1),
                                m = U.slice(),
                                w = m.length;
                            if (R > w && (m = [0].concat(m)),
                            r(O, m, R, l),
                            R = O.length,
                            -1 == c)
                                for (; n(U, O, F, R) < 1; )
                                    d++,
                                    r(O, R > F ? _ : U, R, l),
                                    R = O.length
                        } else
                            0 === c && (d++,
                            O = [0]);
                        y[h++] = d,
                        O[0] ? O[R++] = L[A] || 0 : (O = [L[A]],
                        R = 1)
                    } while ((A++ < E || null != O[0]) && x--);
                    g = null != O[0],
                    y[0] || y.splice(0, 1)
                }
                if (l == N) {
                    for (h = 1,
                    x = y[0]; x >= 10; x /= 10,
                    h++)
                        ;
                    I(v, u + (v.e = h + f * b - 1) + 1, s, g)
                } else
                    v.e = f,
                    v.r = +g;
                return v
            }
        }(),
        U = function() {
            var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i
              , n = /^([^.]+)\.$/
              , t = /^\.([^.]+)$/
              , r = /^-?(Infinity|NaN)$/
              , i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
            return function(o, u, s, l) {
                var c, f = s ? u : u.replace(i, "");
                if (r.test(f))
                    o.s = isNaN(f) ? null : 0 > f ? -1 : 1;
                else {
                    if (!s && (f = f.replace(e, function(e, n, t) {
                        return c = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8,
                        l && l != c ? e : n
                    }),
                    l && (c = l,
                    f = f.replace(n, "$1").replace(t, "0.$1")),
                    u != f))
                        return new a(f,c);
                    z && x(C, "not a" + (l ? " base " + l : "") + " number", u),
                    o.s = null
                }
                o.c = o.e = null,
                C = 0
            }
        }(),
        M.absoluteValue = M.abs = function() {
            var e = new a(this);
            return e.s < 0 && (e.s = 1),
            e
        }
        ,
        M.ceil = function() {
            return I(new a(this), this.e + 1, 2)
        }
        ,
        M.comparedTo = M.cmp = function(e, n) {
            return C = 1,
            i(this, new a(e,n))
        }
        ,
        M.decimalPlaces = M.dp = function() {
            var e, n, r = this.c;
            if (!r)
                return null;
            if (e = ((n = r.length - 1) - t(this.e / b)) * b,
            n = r[n])
                for (; n % 10 == 0; n /= 10,
                e--)
                    ;
            return 0 > e && (e = 0),
            e
        }
        ,
        M.dividedBy = M.div = function(e, n) {
            return C = 3,
            L(this, new a(e,n), B, P)
        }
        ,
        M.dividedToIntegerBy = M.divToInt = function(e, n) {
            return C = 4,
            L(this, new a(e,n), 0, 1)
        }
        ,
        M.equals = M.eq = function(e, n) {
            return C = 5,
            0 === i(this, new a(e,n))
        }
        ,
        M.floor = function() {
            return I(new a(this), this.e + 1, 3)
        }
        ,
        M.greaterThan = M.gt = function(e, n) {
            return C = 6,
            i(this, new a(e,n)) > 0
        }
        ,
        M.greaterThanOrEqualTo = M.gte = function(e, n) {
            return C = 7,
            1 === (n = i(this, new a(e,n))) || 0 === n
        }
        ,
        M.isFinite = function() {
            return !!this.c
        }
        ,
        M.isInteger = M.isInt = function() {
            return !!this.c && t(this.e / b) > this.c.length - 2
        }
        ,
        M.isNaN = function() {
            return !this.s
        }
        ,
        M.isNegative = M.isNeg = function() {
            return this.s < 0
        }
        ,
        M.isZero = function() {
            return !!this.c && 0 == this.c[0]
        }
        ,
        M.lessThan = M.lt = function(e, n) {
            return C = 8,
            i(this, new a(e,n)) < 0
        }
        ,
        M.lessThanOrEqualTo = M.lte = function(e, n) {
            return C = 9,
            -1 === (n = i(this, new a(e,n))) || 0 === n
        }
        ,
        M.minus = M.sub = function(e, n) {
            var r, i, o, u, s = this, l = s.s;
            if (C = 10,
            e = new a(e,n),
            n = e.s,
            !l || !n)
                return new a(NaN);
            if (l != n)
                return e.s = -n,
                s.plus(e);
            var c = s.e / b
              , f = e.e / b
              , h = s.c
              , g = e.c;
            if (!c || !f) {
                if (!h || !g)
                    return h ? (e.s = -n,
                    e) : new a(g ? s : NaN);
                if (!h[0] || !g[0])
                    return g[0] ? (e.s = -n,
                    e) : new a(h[0] ? s : 3 == P ? -0 : 0)
            }
            if (c = t(c),
            f = t(f),
            h = h.slice(),
            l = c - f) {
                for ((u = 0 > l) ? (l = -l,
                o = h) : (f = c,
                o = g),
                o.reverse(),
                n = l; n--; o.push(0))
                    ;
                o.reverse()
            } else
                for (i = (u = (l = h.length) < (n = g.length)) ? l : n,
                l = n = 0; i > n; n++)
                    if (h[n] != g[n]) {
                        u = h[n] < g[n];
                        break
                    }
            if (u && (o = h,
            h = g,
            g = o,
            e.s = -e.s),
            n = (i = g.length) - (r = h.length),
            n > 0)
                for (; n--; h[r++] = 0)
                    ;
            for (n = N - 1; i > l; ) {
                if (h[--i] < g[i]) {
                    for (r = i; r && !h[--r]; h[r] = n)
                        ;
                    --h[r],
                    h[i] += N
                }
                h[i] -= g[i]
            }
            for (; 0 == h[0]; h.splice(0, 1),
            --f)
                ;
            return h[0] ? _(e, h, f) : (e.s = 3 == P ? -1 : 1,
            e.c = [e.e = 0],
            e)
        }
        ,
        M.modulo = M.mod = function(e, n) {
            var t, r, i = this;
            return C = 11,
            e = new a(e,n),
            !i.c || !e.s || e.c && !e.c[0] ? new a(NaN) : !e.c || i.c && !i.c[0] ? new a(i) : (9 == H ? (r = e.s,
            e.s = 1,
            t = L(i, e, 0, 3),
            e.s = r,
            t.s *= r) : t = L(i, e, 0, H),
            i.minus(t.times(e)))
        }
        ,
        M.negated = M.neg = function() {
            var e = new a(this);
            return e.s = -e.s || null,
            e
        }
        ,
        M.plus = M.add = function(e, n) {
            var r, i = this, o = i.s;
            if (C = 12,
            e = new a(e,n),
            n = e.s,
            !o || !n)
                return new a(NaN);
            if (o != n)
                return e.s = -n,
                i.minus(e);
            var u = i.e / b
              , s = e.e / b
              , l = i.c
              , c = e.c;
            if (!u || !s) {
                if (!l || !c)
                    return new a(o / 0);
                if (!l[0] || !c[0])
                    return c[0] ? e : new a(l[0] ? i : 0 * o)
            }
            if (u = t(u),
            s = t(s),
            l = l.slice(),
            o = u - s) {
                for (o > 0 ? (s = u,
                r = c) : (o = -o,
                r = l),
                r.reverse(); o--; r.push(0))
                    ;
                r.reverse()
            }
            for (o = l.length,
            n = c.length,
            0 > o - n && (r = c,
            c = l,
            l = r,
            n = o),
            o = 0; n; )
                o = (l[--n] = l[n] + c[n] + o) / N | 0,
                l[n] = N === l[n] ? 0 : l[n] % N;
            return o && (l = [o].concat(l),
            ++s),
            _(e, l, s)
        }
        ,
        M.precision = M.sd = function(e) {
            var n, t, r = this, i = r.c;
            if (null != e && e !== !!e && 1 !== e && 0 !== e && (z && x(13, "argument" + d, e),
            e != !!e && (e = null)),
            !i)
                return null;
            if (t = i.length - 1,
            n = t * b + 1,
            t = i[t]) {
                for (; t % 10 == 0; t /= 10,
                n--)
                    ;
                for (t = i[0]; t >= 10; t /= 10,
                n++)
                    ;
            }
            return e && r.e + 1 > n && (n = r.e + 1),
            n
        }
        ,
        M.round = function(e, n) {
            var t = new a(this);
            return (null == e || V(e, 0, S, 15)) && I(t, ~~e + this.e + 1, null != n && V(n, 0, 8, 15, m) ? 0 | n : P),
            t
        }
        ,
        M.shift = function(e) {
            var n = this;
            return V(e, -y, y, 16, "argument") ? n.times("1e" + f(e)) : new a(n.c && n.c[0] && (-y > e || e > y) ? n.s * (0 > e ? 0 : 1 / 0) : n)
        }
        ,
        M.squareRoot = M.sqrt = function() {
            var e, n, i, o, u, s = this, l = s.c, c = s.s, f = s.e, h = B + 4, g = new a("0.5");
            if (1 !== c || !l || !l[0])
                return new a(!c || 0 > c && (!l || l[0]) ? NaN : l ? s : 1 / 0);
            if (c = Math.sqrt(+s),
            0 == c || c == 1 / 0 ? (n = r(l),
            (n.length + f) % 2 == 0 && (n += "0"),
            c = Math.sqrt(n),
            f = t((f + 1) / 2) - (0 > f || f % 2),
            c == 1 / 0 ? n = "1e" + f : (n = c.toExponential(),
            n = n.slice(0, n.indexOf("e") + 1) + f),
            i = new a(n)) : i = new a(c + ""),
            i.c[0])
                for (f = i.e,
                c = f + h,
                3 > c && (c = 0); ; )
                    if (u = i,
                    i = g.times(u.plus(L(s, u, h, 1))),
                    r(u.c).slice(0, c) === (n = r(i.c)).slice(0, c)) {
                        if (i.e < f && --c,
                        n = n.slice(c - 3, c + 1),
                        "9999" != n && (o || "4999" != n)) {
                            (!+n || !+n.slice(1) && "5" == n.charAt(0)) && (I(i, i.e + B + 2, 1),
                            e = !i.times(i).eq(s));
                            break
                        }
                        if (!o && (I(u, u.e + B + 2, 0),
                        u.times(u).eq(s))) {
                            i = u;
                            break
                        }
                        h += 4,
                        c += 4,
                        o = 1
                    }
            return I(i, i.e + B + 1, P, e)
        }
        ,
        M.times = M.mul = function(e, n) {
            var r, i, o, u, s, l, c, f, h, g, p, d, m, w, v, y = this, O = y.c, S = (C = 17,
            e = new a(e,n)).c;
            if (!(O && S && O[0] && S[0]))
                return !y.s || !e.s || O && !O[0] && !S || S && !S[0] && !O ? e.c = e.e = e.s = null : (e.s *= y.s,
                O && S ? (e.c = [0],
                e.e = 0) : e.c = e.e = null),
                e;
            for (i = t(y.e / b) + t(e.e / b),
            e.s *= y.s,
            c = O.length,
            g = S.length,
            g > c && (m = O,
            O = S,
            S = m,
            o = c,
            c = g,
            g = o),
            o = c + g,
            m = []; o--; m.push(0))
                ;
            for (w = N,
            v = R,
            o = g; --o >= 0; ) {
                for (r = 0,
                p = S[o] % v,
                d = S[o] / v | 0,
                s = c,
                u = o + s; u > o; )
                    f = O[--s] % v,
                    h = O[s] / v | 0,
                    l = d * f + h * p,
                    f = p * f + l % v * v + m[u] + r,
                    r = (f / w | 0) + (l / v | 0) + d * h,
                    m[u--] = f % w;
                m[u] = r
            }
            return r ? ++i : m.splice(0, 1),
            _(e, m, i)
        }
        ,
        M.toDigits = function(e, n) {
            var t = new a(this);
            return e = null != e && V(e, 1, S, 18, "precision") ? 0 | e : null,
            n = null != n && V(n, 0, 8, 18, m) ? 0 | n : P,
            e ? I(t, e, n) : t
        }
        ,
        M.toExponential = function(e, n) {
            return E(this, null != e && V(e, 0, S, 19) ? ~~e + 1 : null, n, 19)
        }
        ,
        M.toFixed = function(e, n) {
            return E(this, null != e && V(e, 0, S, 20) ? ~~e + this.e + 1 : null, n, 20)
        }
        ,
        M.toFormat = function(e, n) {
            var t = E(this, null != e && V(e, 0, S, 21) ? ~~e + this.e + 1 : null, n, 21);
            if (this.c) {
                var r, i = t.split("."), o = +J.groupSize, u = +J.secondaryGroupSize, s = J.groupSeparator, l = i[0], c = i[1], f = this.s < 0, a = f ? l.slice(1) : l, h = a.length;
                if (u && (r = o,
                o = u,
                u = r,
                h -= r),
                o > 0 && h > 0) {
                    for (r = h % o || o,
                    l = a.substr(0, r); h > r; r += o)
                        l += s + a.substr(r, o);
                    u > 0 && (l += s + a.slice(r)),
                    f && (l = "-" + l)
                }
                t = c ? l + J.decimalSeparator + ((u = +J.fractionGroupSize) ? c.replace(new RegExp("\\d{" + u + "}\\B","g"), "$&" + J.fractionGroupSeparator) : c) : l
            }
            return t
        }
        ,
        M.toFraction = function(e) {
            var n, t, i, o, u, s, l, c, f, h = z, g = this, p = g.c, d = new a(T), m = t = new a(T), w = l = new a(T);
            if (null != e && (z = !1,
            s = new a(e),
            z = h,
            (!(h = s.isInt()) || s.lt(T)) && (z && x(22, "max denominator " + (h ? "out of range" : "not an integer"), e),
            e = !h && s.c && I(s, s.e + 1, 1).gte(T) ? s : null)),
            !p)
                return g.toString();
            for (f = r(p),
            o = d.e = f.length - g.e - 1,
            d.c[0] = O[(u = o % b) < 0 ? b + u : u],
            e = !e || s.cmp(d) > 0 ? o > 0 ? d : m : s,
            u = G,
            G = 1 / 0,
            s = new a(f),
            l.c[0] = 0; c = L(s, d, 0, 1),
            i = t.plus(c.times(w)),
            1 != i.cmp(e); )
                t = w,
                w = i,
                m = l.plus(c.times(i = m)),
                l = i,
                d = s.minus(c.times(i = d)),
                s = i;
            return i = L(e.minus(t), w, 0, 1),
            l = l.plus(i.times(m)),
            t = t.plus(i.times(w)),
            l.s = m.s = g.s,
            o *= 2,
            n = L(m, w, o, P).minus(g).abs().cmp(L(l, t, o, P).minus(g).abs()) < 1 ? [m.toString(), w.toString()] : [l.toString(), t.toString()],
            G = u,
            n
        }
        ,
        M.toNumber = function() {
            return +this
        }
        ,
        M.toPower = M.pow = function(e, n) {
            var t, r, i, o = p(0 > e ? -e : +e), u = this;
            if (null != n && (C = 23,
            n = new a(n)),
            !V(e, -y, y, 23, "exponent") && (!isFinite(e) || o > y && (e /= 0) || parseFloat(e) != e && !(e = NaN)) || 0 == e)
                return t = Math.pow(+u, e),
                new a(n ? t % n : t);
            for (n ? e > 1 && u.gt(T) && u.isInt() && n.gt(T) && n.isInt() ? u = u.mod(n) : (i = n,
            n = null) : W && (t = g(W / b + 2)),
            r = new a(T); ; ) {
                if (o % 2) {
                    if (r = r.times(u),
                    !r.c)
                        break;
                    t ? r.c.length > t && (r.c.length = t) : n && (r = r.mod(n))
                }
                if (o = p(o / 2),
                !o)
                    break;
                u = u.times(u),
                t ? u.c && u.c.length > t && (u.c.length = t) : n && (u = u.mod(n))
            }
            return n ? r : (0 > e && (r = T.div(r)),
            i ? r.mod(i) : t ? I(r, W, P) : r)
        }
        ,
        M.toPrecision = function(e, n) {
            return E(this, null != e && V(e, 1, S, 24, "precision") ? 0 | e : null, n, 24)
        }
        ,
        M.toString = function(e) {
            var n, t = this, i = t.s, o = t.e;
            return null === o ? i ? (n = "Infinity",
            0 > i && (n = "-" + n)) : n = "NaN" : (n = r(t.c),
            n = null != e && V(e, 2, 64, 25, "base") ? A(c(n, o), 0 | e, 10, i) : q >= o || o >= k ? l(n, o) : c(n, o),
            0 > i && t.c[0] && (n = "-" + n)),
            n
        }
        ,
        M.truncated = M.trunc = function() {
            return I(new a(this), this.e + 1, 1)
        }
        ,
        M.valueOf = M.toJSON = function() {
            var e, n = this, t = n.e;
            return null === t ? n.toString() : (e = r(n.c),
            e = q >= t || t >= k ? l(e, t) : c(e, t),
            n.s < 0 ? "-" + e : e)
        }
        ,
        M.isBigNumber = !0,
        null != e && a.config(e),
        a
    }
    function t(e) {
        var n = 0 | e;
        return e > 0 || e === n ? n : n - 1
    }
    function r(e) {
        for (var n, t, r = 1, i = e.length, o = e[0] + ""; i > r; ) {
            for (n = e[r++] + "",
            t = b - n.length; t--; n = "0" + n)
                ;
            o += n
        }
        for (i = o.length; 48 === o.charCodeAt(--i); )
            ;
        return o.slice(0, i + 1 || 1)
    }
    function i(e, n) {
        var t, r, i = e.c, o = n.c, u = e.s, s = n.s, l = e.e, c = n.e;
        if (!u || !s)
            return null;
        if (t = i && !i[0],
        r = o && !o[0],
        t || r)
            return t ? r ? 0 : -s : u;
        if (u != s)
            return u;
        if (t = 0 > u,
        r = l == c,
        !i || !o)
            return r ? 0 : !i ^ t ? 1 : -1;
        if (!r)
            return l > c ^ t ? 1 : -1;
        for (s = (l = i.length) < (c = o.length) ? l : c,
        u = 0; s > u; u++)
            if (i[u] != o[u])
                return i[u] > o[u] ^ t ? 1 : -1;
        return l == c ? 0 : l > c ^ t ? 1 : -1
    }
    function o(e, n, t) {
        return (e = f(e)) >= n && t >= e
    }
    function u(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
    function s(e, n, t) {
        for (var r, i, o = [0], u = 0, s = e.length; s > u; ) {
            for (i = o.length; i--; o[i] *= n)
                ;
            for (o[r = 0] += v.indexOf(e.charAt(u++)); r < o.length; r++)
                o[r] > t - 1 && (null == o[r + 1] && (o[r + 1] = 0),
                o[r + 1] += o[r] / t | 0,
                o[r] %= t)
        }
        return o.reverse()
    }
    function l(e, n) {
        return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (0 > n ? "e" : "e+") + n
    }
    function c(e, n) {
        var t, r;
        if (0 > n) {
            for (r = "0."; ++n; r += "0")
                ;
            e = r + e
        } else if (t = e.length,
        ++n > t) {
            for (r = "0",
            n -= t; --n; r += "0")
                ;
            e += r
        } else
            t > n && (e = e.slice(0, n) + "." + e.slice(n));
        return e
    }
    function f(e) {
        return e = parseFloat(e),
        0 > e ? g(e) : p(e)
    }
    var a, h = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, g = Math.ceil, p = Math.floor, d = " not a boolean or binary digit", m = "rounding mode", w = "number type has more than 15 significant digits", v = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_", N = 1e14, b = 14, y = 9007199254740991, O = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], R = 1e7, S = 1e9;
    a = n(),
    a["default"] = a.BigNumber = a,
    "function" == typeof define && define.amd ? define(function() {
        return a
    }) : "undefined" != typeof module && module.exports ? module.exports = a : (e || (e = "undefined" != typeof self ? self : Function("return this")()),
    e.BigNumber = a)
}(this);
;function GraphemeSplitter() {
    var e = 0
      , r = 1
      , t = 2
      , n = 3
      , i = 4
      , u = 5
      , f = 6
      , o = 7
      , a = 8
      , h = 9
      , l = 10
      , c = 11
      , d = 12
      , s = 13
      , v = 14
      , x = 15
      , g = 16
      , p = 17
      , m = 0
      , y = 1
      , O = 2
      , A = 3
      , C = 4;
    function G(e, r) {
        void 0 === r && (r = 0);
        var t = e.charCodeAt(r);
        if (55296 <= t && t <= 56319 && r < e.length - 1) {
            var n = t;
            return 56320 <= (i = e.charCodeAt(r + 1)) && i <= 57343 ? 1024 * (n - 55296) + (i - 56320) + 65536 : n
        }
        if (56320 <= t && t <= 57343 && r >= 1) {
            var i = t;
            return 55296 <= (n = e.charCodeAt(r - 1)) && n <= 56319 ? 1024 * (n - 55296) + (i - 56320) + 65536 : i
        }
        return t
    }
    function S(c, G, S) {
        var b = [c].concat(G).concat([S])
          , k = b[b.length - 2]
          , B = S
          , I = b.lastIndexOf(v);
        if (I > 1 && b.slice(1, I).every(function(e) {
            return e == n
        }) && -1 == [n, s, p].indexOf(c))
            return O;
        var j = b.lastIndexOf(i);
        if (j > 0 && b.slice(1, j).every(function(e) {
            return e == i
        }) && -1 == [d, i].indexOf(k))
            return b.filter(function(e) {
                return e == i
            }).length % 2 == 1 ? A : C;
        if (k == e && B == r)
            return m;
        if (k == t || k == e || k == r)
            return B == v && G.every(function(e) {
                return e == n
            }) ? O : y;
        if (B == t || B == e || B == r)
            return y;
        if (k == f && (B == f || B == o || B == h || B == l))
            return m;
        if (!(k != h && k != o || B != o && B != a))
            return m;
        if ((k == l || k == a) && B == a)
            return m;
        if (B == n || B == x)
            return m;
        if (B == u)
            return m;
        if (k == d)
            return m;
        var q = -1 != b.indexOf(n) ? b.lastIndexOf(n) - 1 : b.length - 2;
        return -1 != [s, p].indexOf(b[q]) && b.slice(q + 1, -1).every(function(e) {
            return e == n
        }) && B == v ? m : k == x && -1 != [g, p].indexOf(B) ? m : -1 != G.indexOf(i) ? O : k == i && B == i ? m : y
    }
    function b(m) {
        return 1536 <= m && m <= 1541 || 1757 == m || 1807 == m || 2274 == m || 3406 == m || 69821 == m || 70082 <= m && m <= 70083 || 72250 == m || 72326 <= m && m <= 72329 || 73030 == m ? d : 13 == m ? e : 10 == m ? r : 0 <= m && m <= 9 || 11 <= m && m <= 12 || 14 <= m && m <= 31 || 127 <= m && m <= 159 || 173 == m || 1564 == m || 6158 == m || 8203 == m || 8206 <= m && m <= 8207 || 8232 == m || 8233 == m || 8234 <= m && m <= 8238 || 8288 <= m && m <= 8292 || 8293 == m || 8294 <= m && m <= 8303 || 55296 <= m && m <= 57343 || 65279 == m || 65520 <= m && m <= 65528 || 65529 <= m && m <= 65531 || 113824 <= m && m <= 113827 || 119155 <= m && m <= 119162 || 917504 == m || 917505 == m || 917506 <= m && m <= 917535 || 917632 <= m && m <= 917759 || 918e3 <= m && m <= 921599 ? t : 768 <= m && m <= 879 || 1155 <= m && m <= 1159 || 1160 <= m && m <= 1161 || 1425 <= m && m <= 1469 || 1471 == m || 1473 <= m && m <= 1474 || 1476 <= m && m <= 1477 || 1479 == m || 1552 <= m && m <= 1562 || 1611 <= m && m <= 1631 || 1648 == m || 1750 <= m && m <= 1756 || 1759 <= m && m <= 1764 || 1767 <= m && m <= 1768 || 1770 <= m && m <= 1773 || 1809 == m || 1840 <= m && m <= 1866 || 1958 <= m && m <= 1968 || 2027 <= m && m <= 2035 || 2070 <= m && m <= 2073 || 2075 <= m && m <= 2083 || 2085 <= m && m <= 2087 || 2089 <= m && m <= 2093 || 2137 <= m && m <= 2139 || 2260 <= m && m <= 2273 || 2275 <= m && m <= 2306 || 2362 == m || 2364 == m || 2369 <= m && m <= 2376 || 2381 == m || 2385 <= m && m <= 2391 || 2402 <= m && m <= 2403 || 2433 == m || 2492 == m || 2494 == m || 2497 <= m && m <= 2500 || 2509 == m || 2519 == m || 2530 <= m && m <= 2531 || 2561 <= m && m <= 2562 || 2620 == m || 2625 <= m && m <= 2626 || 2631 <= m && m <= 2632 || 2635 <= m && m <= 2637 || 2641 == m || 2672 <= m && m <= 2673 || 2677 == m || 2689 <= m && m <= 2690 || 2748 == m || 2753 <= m && m <= 2757 || 2759 <= m && m <= 2760 || 2765 == m || 2786 <= m && m <= 2787 || 2810 <= m && m <= 2815 || 2817 == m || 2876 == m || 2878 == m || 2879 == m || 2881 <= m && m <= 2884 || 2893 == m || 2902 == m || 2903 == m || 2914 <= m && m <= 2915 || 2946 == m || 3006 == m || 3008 == m || 3021 == m || 3031 == m || 3072 == m || 3134 <= m && m <= 3136 || 3142 <= m && m <= 3144 || 3146 <= m && m <= 3149 || 3157 <= m && m <= 3158 || 3170 <= m && m <= 3171 || 3201 == m || 3260 == m || 3263 == m || 3266 == m || 3270 == m || 3276 <= m && m <= 3277 || 3285 <= m && m <= 3286 || 3298 <= m && m <= 3299 || 3328 <= m && m <= 3329 || 3387 <= m && m <= 3388 || 3390 == m || 3393 <= m && m <= 3396 || 3405 == m || 3415 == m || 3426 <= m && m <= 3427 || 3530 == m || 3535 == m || 3538 <= m && m <= 3540 || 3542 == m || 3551 == m || 3633 == m || 3636 <= m && m <= 3642 || 3655 <= m && m <= 3662 || 3761 == m || 3764 <= m && m <= 3769 || 3771 <= m && m <= 3772 || 3784 <= m && m <= 3789 || 3864 <= m && m <= 3865 || 3893 == m || 3895 == m || 3897 == m || 3953 <= m && m <= 3966 || 3968 <= m && m <= 3972 || 3974 <= m && m <= 3975 || 3981 <= m && m <= 3991 || 3993 <= m && m <= 4028 || 4038 == m || 4141 <= m && m <= 4144 || 4146 <= m && m <= 4151 || 4153 <= m && m <= 4154 || 4157 <= m && m <= 4158 || 4184 <= m && m <= 4185 || 4190 <= m && m <= 4192 || 4209 <= m && m <= 4212 || 4226 == m || 4229 <= m && m <= 4230 || 4237 == m || 4253 == m || 4957 <= m && m <= 4959 || 5906 <= m && m <= 5908 || 5938 <= m && m <= 5940 || 5970 <= m && m <= 5971 || 6002 <= m && m <= 6003 || 6068 <= m && m <= 6069 || 6071 <= m && m <= 6077 || 6086 == m || 6089 <= m && m <= 6099 || 6109 == m || 6155 <= m && m <= 6157 || 6277 <= m && m <= 6278 || 6313 == m || 6432 <= m && m <= 6434 || 6439 <= m && m <= 6440 || 6450 == m || 6457 <= m && m <= 6459 || 6679 <= m && m <= 6680 || 6683 == m || 6742 == m || 6744 <= m && m <= 6750 || 6752 == m || 6754 == m || 6757 <= m && m <= 6764 || 6771 <= m && m <= 6780 || 6783 == m || 6832 <= m && m <= 6845 || 6846 == m || 6912 <= m && m <= 6915 || 6964 == m || 6966 <= m && m <= 6970 || 6972 == m || 6978 == m || 7019 <= m && m <= 7027 || 7040 <= m && m <= 7041 || 7074 <= m && m <= 7077 || 7080 <= m && m <= 7081 || 7083 <= m && m <= 7085 || 7142 == m || 7144 <= m && m <= 7145 || 7149 == m || 7151 <= m && m <= 7153 || 7212 <= m && m <= 7219 || 7222 <= m && m <= 7223 || 7376 <= m && m <= 7378 || 7380 <= m && m <= 7392 || 7394 <= m && m <= 7400 || 7405 == m || 7412 == m || 7416 <= m && m <= 7417 || 7616 <= m && m <= 7673 || 7675 <= m && m <= 7679 || 8204 == m || 8400 <= m && m <= 8412 || 8413 <= m && m <= 8416 || 8417 == m || 8418 <= m && m <= 8420 || 8421 <= m && m <= 8432 || 11503 <= m && m <= 11505 || 11647 == m || 11744 <= m && m <= 11775 || 12330 <= m && m <= 12333 || 12334 <= m && m <= 12335 || 12441 <= m && m <= 12442 || 42607 == m || 42608 <= m && m <= 42610 || 42612 <= m && m <= 42621 || 42654 <= m && m <= 42655 || 42736 <= m && m <= 42737 || 43010 == m || 43014 == m || 43019 == m || 43045 <= m && m <= 43046 || 43204 <= m && m <= 43205 || 43232 <= m && m <= 43249 || 43302 <= m && m <= 43309 || 43335 <= m && m <= 43345 || 43392 <= m && m <= 43394 || 43443 == m || 43446 <= m && m <= 43449 || 43452 == m || 43493 == m || 43561 <= m && m <= 43566 || 43569 <= m && m <= 43570 || 43573 <= m && m <= 43574 || 43587 == m || 43596 == m || 43644 == m || 43696 == m || 43698 <= m && m <= 43700 || 43703 <= m && m <= 43704 || 43710 <= m && m <= 43711 || 43713 == m || 43756 <= m && m <= 43757 || 43766 == m || 44005 == m || 44008 == m || 44013 == m || 64286 == m || 65024 <= m && m <= 65039 || 65056 <= m && m <= 65071 || 65438 <= m && m <= 65439 || 66045 == m || 66272 == m || 66422 <= m && m <= 66426 || 68097 <= m && m <= 68099 || 68101 <= m && m <= 68102 || 68108 <= m && m <= 68111 || 68152 <= m && m <= 68154 || 68159 == m || 68325 <= m && m <= 68326 || 69633 == m || 69688 <= m && m <= 69702 || 69759 <= m && m <= 69761 || 69811 <= m && m <= 69814 || 69817 <= m && m <= 69818 || 69888 <= m && m <= 69890 || 69927 <= m && m <= 69931 || 69933 <= m && m <= 69940 || 70003 == m || 70016 <= m && m <= 70017 || 70070 <= m && m <= 70078 || 70090 <= m && m <= 70092 || 70191 <= m && m <= 70193 || 70196 == m || 70198 <= m && m <= 70199 || 70206 == m || 70367 == m || 70371 <= m && m <= 70378 || 70400 <= m && m <= 70401 || 70460 == m || 70462 == m || 70464 == m || 70487 == m || 70502 <= m && m <= 70508 || 70512 <= m && m <= 70516 || 70712 <= m && m <= 70719 || 70722 <= m && m <= 70724 || 70726 == m || 70832 == m || 70835 <= m && m <= 70840 || 70842 == m || 70845 == m || 70847 <= m && m <= 70848 || 70850 <= m && m <= 70851 || 71087 == m || 71090 <= m && m <= 71093 || 71100 <= m && m <= 71101 || 71103 <= m && m <= 71104 || 71132 <= m && m <= 71133 || 71219 <= m && m <= 71226 || 71229 == m || 71231 <= m && m <= 71232 || 71339 == m || 71341 == m || 71344 <= m && m <= 71349 || 71351 == m || 71453 <= m && m <= 71455 || 71458 <= m && m <= 71461 || 71463 <= m && m <= 71467 || 72193 <= m && m <= 72198 || 72201 <= m && m <= 72202 || 72243 <= m && m <= 72248 || 72251 <= m && m <= 72254 || 72263 == m || 72273 <= m && m <= 72278 || 72281 <= m && m <= 72283 || 72330 <= m && m <= 72342 || 72344 <= m && m <= 72345 || 72752 <= m && m <= 72758 || 72760 <= m && m <= 72765 || 72767 == m || 72850 <= m && m <= 72871 || 72874 <= m && m <= 72880 || 72882 <= m && m <= 72883 || 72885 <= m && m <= 72886 || 73009 <= m && m <= 73014 || 73018 == m || 73020 <= m && m <= 73021 || 73023 <= m && m <= 73029 || 73031 == m || 92912 <= m && m <= 92916 || 92976 <= m && m <= 92982 || 94095 <= m && m <= 94098 || 113821 <= m && m <= 113822 || 119141 == m || 119143 <= m && m <= 119145 || 119150 <= m && m <= 119154 || 119163 <= m && m <= 119170 || 119173 <= m && m <= 119179 || 119210 <= m && m <= 119213 || 119362 <= m && m <= 119364 || 121344 <= m && m <= 121398 || 121403 <= m && m <= 121452 || 121461 == m || 121476 == m || 121499 <= m && m <= 121503 || 121505 <= m && m <= 121519 || 122880 <= m && m <= 122886 || 122888 <= m && m <= 122904 || 122907 <= m && m <= 122913 || 122915 <= m && m <= 122916 || 122918 <= m && m <= 122922 || 125136 <= m && m <= 125142 || 125252 <= m && m <= 125258 || 917536 <= m && m <= 917631 || 917760 <= m && m <= 917999 ? n : 127462 <= m && m <= 127487 ? i : 2307 == m || 2363 == m || 2366 <= m && m <= 2368 || 2377 <= m && m <= 2380 || 2382 <= m && m <= 2383 || 2434 <= m && m <= 2435 || 2495 <= m && m <= 2496 || 2503 <= m && m <= 2504 || 2507 <= m && m <= 2508 || 2563 == m || 2622 <= m && m <= 2624 || 2691 == m || 2750 <= m && m <= 2752 || 2761 == m || 2763 <= m && m <= 2764 || 2818 <= m && m <= 2819 || 2880 == m || 2887 <= m && m <= 2888 || 2891 <= m && m <= 2892 || 3007 == m || 3009 <= m && m <= 3010 || 3014 <= m && m <= 3016 || 3018 <= m && m <= 3020 || 3073 <= m && m <= 3075 || 3137 <= m && m <= 3140 || 3202 <= m && m <= 3203 || 3262 == m || 3264 <= m && m <= 3265 || 3267 <= m && m <= 3268 || 3271 <= m && m <= 3272 || 3274 <= m && m <= 3275 || 3330 <= m && m <= 3331 || 3391 <= m && m <= 3392 || 3398 <= m && m <= 3400 || 3402 <= m && m <= 3404 || 3458 <= m && m <= 3459 || 3536 <= m && m <= 3537 || 3544 <= m && m <= 3550 || 3570 <= m && m <= 3571 || 3635 == m || 3763 == m || 3902 <= m && m <= 3903 || 3967 == m || 4145 == m || 4155 <= m && m <= 4156 || 4182 <= m && m <= 4183 || 4228 == m || 6070 == m || 6078 <= m && m <= 6085 || 6087 <= m && m <= 6088 || 6435 <= m && m <= 6438 || 6441 <= m && m <= 6443 || 6448 <= m && m <= 6449 || 6451 <= m && m <= 6456 || 6681 <= m && m <= 6682 || 6741 == m || 6743 == m || 6765 <= m && m <= 6770 || 6916 == m || 6965 == m || 6971 == m || 6973 <= m && m <= 6977 || 6979 <= m && m <= 6980 || 7042 == m || 7073 == m || 7078 <= m && m <= 7079 || 7082 == m || 7143 == m || 7146 <= m && m <= 7148 || 7150 == m || 7154 <= m && m <= 7155 || 7204 <= m && m <= 7211 || 7220 <= m && m <= 7221 || 7393 == m || 7410 <= m && m <= 7411 || 7415 == m || 43043 <= m && m <= 43044 || 43047 == m || 43136 <= m && m <= 43137 || 43188 <= m && m <= 43203 || 43346 <= m && m <= 43347 || 43395 == m || 43444 <= m && m <= 43445 || 43450 <= m && m <= 43451 || 43453 <= m && m <= 43456 || 43567 <= m && m <= 43568 || 43571 <= m && m <= 43572 || 43597 == m || 43755 == m || 43758 <= m && m <= 43759 || 43765 == m || 44003 <= m && m <= 44004 || 44006 <= m && m <= 44007 || 44009 <= m && m <= 44010 || 44012 == m || 69632 == m || 69634 == m || 69762 == m || 69808 <= m && m <= 69810 || 69815 <= m && m <= 69816 || 69932 == m || 70018 == m || 70067 <= m && m <= 70069 || 70079 <= m && m <= 70080 || 70188 <= m && m <= 70190 || 70194 <= m && m <= 70195 || 70197 == m || 70368 <= m && m <= 70370 || 70402 <= m && m <= 70403 || 70463 == m || 70465 <= m && m <= 70468 || 70471 <= m && m <= 70472 || 70475 <= m && m <= 70477 || 70498 <= m && m <= 70499 || 70709 <= m && m <= 70711 || 70720 <= m && m <= 70721 || 70725 == m || 70833 <= m && m <= 70834 || 70841 == m || 70843 <= m && m <= 70844 || 70846 == m || 70849 == m || 71088 <= m && m <= 71089 || 71096 <= m && m <= 71099 || 71102 == m || 71216 <= m && m <= 71218 || 71227 <= m && m <= 71228 || 71230 == m || 71340 == m || 71342 <= m && m <= 71343 || 71350 == m || 71456 <= m && m <= 71457 || 71462 == m || 72199 <= m && m <= 72200 || 72249 == m || 72279 <= m && m <= 72280 || 72343 == m || 72751 == m || 72766 == m || 72873 == m || 72881 == m || 72884 == m || 94033 <= m && m <= 94078 || 119142 == m || 119149 == m ? u : 4352 <= m && m <= 4447 || 43360 <= m && m <= 43388 ? f : 4448 <= m && m <= 4519 || 55216 <= m && m <= 55238 ? o : 4520 <= m && m <= 4607 || 55243 <= m && m <= 55291 ? a : 44032 == m || 44060 == m || 44088 == m || 44116 == m || 44144 == m || 44172 == m || 44200 == m || 44228 == m || 44256 == m || 44284 == m || 44312 == m || 44340 == m || 44368 == m || 44396 == m || 44424 == m || 44452 == m || 44480 == m || 44508 == m || 44536 == m || 44564 == m || 44592 == m || 44620 == m || 44648 == m || 44676 == m || 44704 == m || 44732 == m || 44760 == m || 44788 == m || 44816 == m || 44844 == m || 44872 == m || 44900 == m || 44928 == m || 44956 == m || 44984 == m || 45012 == m || 45040 == m || 45068 == m || 45096 == m || 45124 == m || 45152 == m || 45180 == m || 45208 == m || 45236 == m || 45264 == m || 45292 == m || 45320 == m || 45348 == m || 45376 == m || 45404 == m || 45432 == m || 45460 == m || 45488 == m || 45516 == m || 45544 == m || 45572 == m || 45600 == m || 45628 == m || 45656 == m || 45684 == m || 45712 == m || 45740 == m || 45768 == m || 45796 == m || 45824 == m || 45852 == m || 45880 == m || 45908 == m || 45936 == m || 45964 == m || 45992 == m || 46020 == m || 46048 == m || 46076 == m || 46104 == m || 46132 == m || 46160 == m || 46188 == m || 46216 == m || 46244 == m || 46272 == m || 46300 == m || 46328 == m || 46356 == m || 46384 == m || 46412 == m || 46440 == m || 46468 == m || 46496 == m || 46524 == m || 46552 == m || 46580 == m || 46608 == m || 46636 == m || 46664 == m || 46692 == m || 46720 == m || 46748 == m || 46776 == m || 46804 == m || 46832 == m || 46860 == m || 46888 == m || 46916 == m || 46944 == m || 46972 == m || 47e3 == m || 47028 == m || 47056 == m || 47084 == m || 47112 == m || 47140 == m || 47168 == m || 47196 == m || 47224 == m || 47252 == m || 47280 == m || 47308 == m || 47336 == m || 47364 == m || 47392 == m || 47420 == m || 47448 == m || 47476 == m || 47504 == m || 47532 == m || 47560 == m || 47588 == m || 47616 == m || 47644 == m || 47672 == m || 47700 == m || 47728 == m || 47756 == m || 47784 == m || 47812 == m || 47840 == m || 47868 == m || 47896 == m || 47924 == m || 47952 == m || 47980 == m || 48008 == m || 48036 == m || 48064 == m || 48092 == m || 48120 == m || 48148 == m || 48176 == m || 48204 == m || 48232 == m || 48260 == m || 48288 == m || 48316 == m || 48344 == m || 48372 == m || 48400 == m || 48428 == m || 48456 == m || 48484 == m || 48512 == m || 48540 == m || 48568 == m || 48596 == m || 48624 == m || 48652 == m || 48680 == m || 48708 == m || 48736 == m || 48764 == m || 48792 == m || 48820 == m || 48848 == m || 48876 == m || 48904 == m || 48932 == m || 48960 == m || 48988 == m || 49016 == m || 49044 == m || 49072 == m || 49100 == m || 49128 == m || 49156 == m || 49184 == m || 49212 == m || 49240 == m || 49268 == m || 49296 == m || 49324 == m || 49352 == m || 49380 == m || 49408 == m || 49436 == m || 49464 == m || 49492 == m || 49520 == m || 49548 == m || 49576 == m || 49604 == m || 49632 == m || 49660 == m || 49688 == m || 49716 == m || 49744 == m || 49772 == m || 49800 == m || 49828 == m || 49856 == m || 49884 == m || 49912 == m || 49940 == m || 49968 == m || 49996 == m || 50024 == m || 50052 == m || 50080 == m || 50108 == m || 50136 == m || 50164 == m || 50192 == m || 50220 == m || 50248 == m || 50276 == m || 50304 == m || 50332 == m || 50360 == m || 50388 == m || 50416 == m || 50444 == m || 50472 == m || 50500 == m || 50528 == m || 50556 == m || 50584 == m || 50612 == m || 50640 == m || 50668 == m || 50696 == m || 50724 == m || 50752 == m || 50780 == m || 50808 == m || 50836 == m || 50864 == m || 50892 == m || 50920 == m || 50948 == m || 50976 == m || 51004 == m || 51032 == m || 51060 == m || 51088 == m || 51116 == m || 51144 == m || 51172 == m || 51200 == m || 51228 == m || 51256 == m || 51284 == m || 51312 == m || 51340 == m || 51368 == m || 51396 == m || 51424 == m || 51452 == m || 51480 == m || 51508 == m || 51536 == m || 51564 == m || 51592 == m || 51620 == m || 51648 == m || 51676 == m || 51704 == m || 51732 == m || 51760 == m || 51788 == m || 51816 == m || 51844 == m || 51872 == m || 51900 == m || 51928 == m || 51956 == m || 51984 == m || 52012 == m || 52040 == m || 52068 == m || 52096 == m || 52124 == m || 52152 == m || 52180 == m || 52208 == m || 52236 == m || 52264 == m || 52292 == m || 52320 == m || 52348 == m || 52376 == m || 52404 == m || 52432 == m || 52460 == m || 52488 == m || 52516 == m || 52544 == m || 52572 == m || 52600 == m || 52628 == m || 52656 == m || 52684 == m || 52712 == m || 52740 == m || 52768 == m || 52796 == m || 52824 == m || 52852 == m || 52880 == m || 52908 == m || 52936 == m || 52964 == m || 52992 == m || 53020 == m || 53048 == m || 53076 == m || 53104 == m || 53132 == m || 53160 == m || 53188 == m || 53216 == m || 53244 == m || 53272 == m || 53300 == m || 53328 == m || 53356 == m || 53384 == m || 53412 == m || 53440 == m || 53468 == m || 53496 == m || 53524 == m || 53552 == m || 53580 == m || 53608 == m || 53636 == m || 53664 == m || 53692 == m || 53720 == m || 53748 == m || 53776 == m || 53804 == m || 53832 == m || 53860 == m || 53888 == m || 53916 == m || 53944 == m || 53972 == m || 54e3 == m || 54028 == m || 54056 == m || 54084 == m || 54112 == m || 54140 == m || 54168 == m || 54196 == m || 54224 == m || 54252 == m || 54280 == m || 54308 == m || 54336 == m || 54364 == m || 54392 == m || 54420 == m || 54448 == m || 54476 == m || 54504 == m || 54532 == m || 54560 == m || 54588 == m || 54616 == m || 54644 == m || 54672 == m || 54700 == m || 54728 == m || 54756 == m || 54784 == m || 54812 == m || 54840 == m || 54868 == m || 54896 == m || 54924 == m || 54952 == m || 54980 == m || 55008 == m || 55036 == m || 55064 == m || 55092 == m || 55120 == m || 55148 == m || 55176 == m ? h : 44033 <= m && m <= 44059 || 44061 <= m && m <= 44087 || 44089 <= m && m <= 44115 || 44117 <= m && m <= 44143 || 44145 <= m && m <= 44171 || 44173 <= m && m <= 44199 || 44201 <= m && m <= 44227 || 44229 <= m && m <= 44255 || 44257 <= m && m <= 44283 || 44285 <= m && m <= 44311 || 44313 <= m && m <= 44339 || 44341 <= m && m <= 44367 || 44369 <= m && m <= 44395 || 44397 <= m && m <= 44423 || 44425 <= m && m <= 44451 || 44453 <= m && m <= 44479 || 44481 <= m && m <= 44507 || 44509 <= m && m <= 44535 || 44537 <= m && m <= 44563 || 44565 <= m && m <= 44591 || 44593 <= m && m <= 44619 || 44621 <= m && m <= 44647 || 44649 <= m && m <= 44675 || 44677 <= m && m <= 44703 || 44705 <= m && m <= 44731 || 44733 <= m && m <= 44759 || 44761 <= m && m <= 44787 || 44789 <= m && m <= 44815 || 44817 <= m && m <= 44843 || 44845 <= m && m <= 44871 || 44873 <= m && m <= 44899 || 44901 <= m && m <= 44927 || 44929 <= m && m <= 44955 || 44957 <= m && m <= 44983 || 44985 <= m && m <= 45011 || 45013 <= m && m <= 45039 || 45041 <= m && m <= 45067 || 45069 <= m && m <= 45095 || 45097 <= m && m <= 45123 || 45125 <= m && m <= 45151 || 45153 <= m && m <= 45179 || 45181 <= m && m <= 45207 || 45209 <= m && m <= 45235 || 45237 <= m && m <= 45263 || 45265 <= m && m <= 45291 || 45293 <= m && m <= 45319 || 45321 <= m && m <= 45347 || 45349 <= m && m <= 45375 || 45377 <= m && m <= 45403 || 45405 <= m && m <= 45431 || 45433 <= m && m <= 45459 || 45461 <= m && m <= 45487 || 45489 <= m && m <= 45515 || 45517 <= m && m <= 45543 || 45545 <= m && m <= 45571 || 45573 <= m && m <= 45599 || 45601 <= m && m <= 45627 || 45629 <= m && m <= 45655 || 45657 <= m && m <= 45683 || 45685 <= m && m <= 45711 || 45713 <= m && m <= 45739 || 45741 <= m && m <= 45767 || 45769 <= m && m <= 45795 || 45797 <= m && m <= 45823 || 45825 <= m && m <= 45851 || 45853 <= m && m <= 45879 || 45881 <= m && m <= 45907 || 45909 <= m && m <= 45935 || 45937 <= m && m <= 45963 || 45965 <= m && m <= 45991 || 45993 <= m && m <= 46019 || 46021 <= m && m <= 46047 || 46049 <= m && m <= 46075 || 46077 <= m && m <= 46103 || 46105 <= m && m <= 46131 || 46133 <= m && m <= 46159 || 46161 <= m && m <= 46187 || 46189 <= m && m <= 46215 || 46217 <= m && m <= 46243 || 46245 <= m && m <= 46271 || 46273 <= m && m <= 46299 || 46301 <= m && m <= 46327 || 46329 <= m && m <= 46355 || 46357 <= m && m <= 46383 || 46385 <= m && m <= 46411 || 46413 <= m && m <= 46439 || 46441 <= m && m <= 46467 || 46469 <= m && m <= 46495 || 46497 <= m && m <= 46523 || 46525 <= m && m <= 46551 || 46553 <= m && m <= 46579 || 46581 <= m && m <= 46607 || 46609 <= m && m <= 46635 || 46637 <= m && m <= 46663 || 46665 <= m && m <= 46691 || 46693 <= m && m <= 46719 || 46721 <= m && m <= 46747 || 46749 <= m && m <= 46775 || 46777 <= m && m <= 46803 || 46805 <= m && m <= 46831 || 46833 <= m && m <= 46859 || 46861 <= m && m <= 46887 || 46889 <= m && m <= 46915 || 46917 <= m && m <= 46943 || 46945 <= m && m <= 46971 || 46973 <= m && m <= 46999 || 47001 <= m && m <= 47027 || 47029 <= m && m <= 47055 || 47057 <= m && m <= 47083 || 47085 <= m && m <= 47111 || 47113 <= m && m <= 47139 || 47141 <= m && m <= 47167 || 47169 <= m && m <= 47195 || 47197 <= m && m <= 47223 || 47225 <= m && m <= 47251 || 47253 <= m && m <= 47279 || 47281 <= m && m <= 47307 || 47309 <= m && m <= 47335 || 47337 <= m && m <= 47363 || 47365 <= m && m <= 47391 || 47393 <= m && m <= 47419 || 47421 <= m && m <= 47447 || 47449 <= m && m <= 47475 || 47477 <= m && m <= 47503 || 47505 <= m && m <= 47531 || 47533 <= m && m <= 47559 || 47561 <= m && m <= 47587 || 47589 <= m && m <= 47615 || 47617 <= m && m <= 47643 || 47645 <= m && m <= 47671 || 47673 <= m && m <= 47699 || 47701 <= m && m <= 47727 || 47729 <= m && m <= 47755 || 47757 <= m && m <= 47783 || 47785 <= m && m <= 47811 || 47813 <= m && m <= 47839 || 47841 <= m && m <= 47867 || 47869 <= m && m <= 47895 || 47897 <= m && m <= 47923 || 47925 <= m && m <= 47951 || 47953 <= m && m <= 47979 || 47981 <= m && m <= 48007 || 48009 <= m && m <= 48035 || 48037 <= m && m <= 48063 || 48065 <= m && m <= 48091 || 48093 <= m && m <= 48119 || 48121 <= m && m <= 48147 || 48149 <= m && m <= 48175 || 48177 <= m && m <= 48203 || 48205 <= m && m <= 48231 || 48233 <= m && m <= 48259 || 48261 <= m && m <= 48287 || 48289 <= m && m <= 48315 || 48317 <= m && m <= 48343 || 48345 <= m && m <= 48371 || 48373 <= m && m <= 48399 || 48401 <= m && m <= 48427 || 48429 <= m && m <= 48455 || 48457 <= m && m <= 48483 || 48485 <= m && m <= 48511 || 48513 <= m && m <= 48539 || 48541 <= m && m <= 48567 || 48569 <= m && m <= 48595 || 48597 <= m && m <= 48623 || 48625 <= m && m <= 48651 || 48653 <= m && m <= 48679 || 48681 <= m && m <= 48707 || 48709 <= m && m <= 48735 || 48737 <= m && m <= 48763 || 48765 <= m && m <= 48791 || 48793 <= m && m <= 48819 || 48821 <= m && m <= 48847 || 48849 <= m && m <= 48875 || 48877 <= m && m <= 48903 || 48905 <= m && m <= 48931 || 48933 <= m && m <= 48959 || 48961 <= m && m <= 48987 || 48989 <= m && m <= 49015 || 49017 <= m && m <= 49043 || 49045 <= m && m <= 49071 || 49073 <= m && m <= 49099 || 49101 <= m && m <= 49127 || 49129 <= m && m <= 49155 || 49157 <= m && m <= 49183 || 49185 <= m && m <= 49211 || 49213 <= m && m <= 49239 || 49241 <= m && m <= 49267 || 49269 <= m && m <= 49295 || 49297 <= m && m <= 49323 || 49325 <= m && m <= 49351 || 49353 <= m && m <= 49379 || 49381 <= m && m <= 49407 || 49409 <= m && m <= 49435 || 49437 <= m && m <= 49463 || 49465 <= m && m <= 49491 || 49493 <= m && m <= 49519 || 49521 <= m && m <= 49547 || 49549 <= m && m <= 49575 || 49577 <= m && m <= 49603 || 49605 <= m && m <= 49631 || 49633 <= m && m <= 49659 || 49661 <= m && m <= 49687 || 49689 <= m && m <= 49715 || 49717 <= m && m <= 49743 || 49745 <= m && m <= 49771 || 49773 <= m && m <= 49799 || 49801 <= m && m <= 49827 || 49829 <= m && m <= 49855 || 49857 <= m && m <= 49883 || 49885 <= m && m <= 49911 || 49913 <= m && m <= 49939 || 49941 <= m && m <= 49967 || 49969 <= m && m <= 49995 || 49997 <= m && m <= 50023 || 50025 <= m && m <= 50051 || 50053 <= m && m <= 50079 || 50081 <= m && m <= 50107 || 50109 <= m && m <= 50135 || 50137 <= m && m <= 50163 || 50165 <= m && m <= 50191 || 50193 <= m && m <= 50219 || 50221 <= m && m <= 50247 || 50249 <= m && m <= 50275 || 50277 <= m && m <= 50303 || 50305 <= m && m <= 50331 || 50333 <= m && m <= 50359 || 50361 <= m && m <= 50387 || 50389 <= m && m <= 50415 || 50417 <= m && m <= 50443 || 50445 <= m && m <= 50471 || 50473 <= m && m <= 50499 || 50501 <= m && m <= 50527 || 50529 <= m && m <= 50555 || 50557 <= m && m <= 50583 || 50585 <= m && m <= 50611 || 50613 <= m && m <= 50639 || 50641 <= m && m <= 50667 || 50669 <= m && m <= 50695 || 50697 <= m && m <= 50723 || 50725 <= m && m <= 50751 || 50753 <= m && m <= 50779 || 50781 <= m && m <= 50807 || 50809 <= m && m <= 50835 || 50837 <= m && m <= 50863 || 50865 <= m && m <= 50891 || 50893 <= m && m <= 50919 || 50921 <= m && m <= 50947 || 50949 <= m && m <= 50975 || 50977 <= m && m <= 51003 || 51005 <= m && m <= 51031 || 51033 <= m && m <= 51059 || 51061 <= m && m <= 51087 || 51089 <= m && m <= 51115 || 51117 <= m && m <= 51143 || 51145 <= m && m <= 51171 || 51173 <= m && m <= 51199 || 51201 <= m && m <= 51227 || 51229 <= m && m <= 51255 || 51257 <= m && m <= 51283 || 51285 <= m && m <= 51311 || 51313 <= m && m <= 51339 || 51341 <= m && m <= 51367 || 51369 <= m && m <= 51395 || 51397 <= m && m <= 51423 || 51425 <= m && m <= 51451 || 51453 <= m && m <= 51479 || 51481 <= m && m <= 51507 || 51509 <= m && m <= 51535 || 51537 <= m && m <= 51563 || 51565 <= m && m <= 51591 || 51593 <= m && m <= 51619 || 51621 <= m && m <= 51647 || 51649 <= m && m <= 51675 || 51677 <= m && m <= 51703 || 51705 <= m && m <= 51731 || 51733 <= m && m <= 51759 || 51761 <= m && m <= 51787 || 51789 <= m && m <= 51815 || 51817 <= m && m <= 51843 || 51845 <= m && m <= 51871 || 51873 <= m && m <= 51899 || 51901 <= m && m <= 51927 || 51929 <= m && m <= 51955 || 51957 <= m && m <= 51983 || 51985 <= m && m <= 52011 || 52013 <= m && m <= 52039 || 52041 <= m && m <= 52067 || 52069 <= m && m <= 52095 || 52097 <= m && m <= 52123 || 52125 <= m && m <= 52151 || 52153 <= m && m <= 52179 || 52181 <= m && m <= 52207 || 52209 <= m && m <= 52235 || 52237 <= m && m <= 52263 || 52265 <= m && m <= 52291 || 52293 <= m && m <= 52319 || 52321 <= m && m <= 52347 || 52349 <= m && m <= 52375 || 52377 <= m && m <= 52403 || 52405 <= m && m <= 52431 || 52433 <= m && m <= 52459 || 52461 <= m && m <= 52487 || 52489 <= m && m <= 52515 || 52517 <= m && m <= 52543 || 52545 <= m && m <= 52571 || 52573 <= m && m <= 52599 || 52601 <= m && m <= 52627 || 52629 <= m && m <= 52655 || 52657 <= m && m <= 52683 || 52685 <= m && m <= 52711 || 52713 <= m && m <= 52739 || 52741 <= m && m <= 52767 || 52769 <= m && m <= 52795 || 52797 <= m && m <= 52823 || 52825 <= m && m <= 52851 || 52853 <= m && m <= 52879 || 52881 <= m && m <= 52907 || 52909 <= m && m <= 52935 || 52937 <= m && m <= 52963 || 52965 <= m && m <= 52991 || 52993 <= m && m <= 53019 || 53021 <= m && m <= 53047 || 53049 <= m && m <= 53075 || 53077 <= m && m <= 53103 || 53105 <= m && m <= 53131 || 53133 <= m && m <= 53159 || 53161 <= m && m <= 53187 || 53189 <= m && m <= 53215 || 53217 <= m && m <= 53243 || 53245 <= m && m <= 53271 || 53273 <= m && m <= 53299 || 53301 <= m && m <= 53327 || 53329 <= m && m <= 53355 || 53357 <= m && m <= 53383 || 53385 <= m && m <= 53411 || 53413 <= m && m <= 53439 || 53441 <= m && m <= 53467 || 53469 <= m && m <= 53495 || 53497 <= m && m <= 53523 || 53525 <= m && m <= 53551 || 53553 <= m && m <= 53579 || 53581 <= m && m <= 53607 || 53609 <= m && m <= 53635 || 53637 <= m && m <= 53663 || 53665 <= m && m <= 53691 || 53693 <= m && m <= 53719 || 53721 <= m && m <= 53747 || 53749 <= m && m <= 53775 || 53777 <= m && m <= 53803 || 53805 <= m && m <= 53831 || 53833 <= m && m <= 53859 || 53861 <= m && m <= 53887 || 53889 <= m && m <= 53915 || 53917 <= m && m <= 53943 || 53945 <= m && m <= 53971 || 53973 <= m && m <= 53999 || 54001 <= m && m <= 54027 || 54029 <= m && m <= 54055 || 54057 <= m && m <= 54083 || 54085 <= m && m <= 54111 || 54113 <= m && m <= 54139 || 54141 <= m && m <= 54167 || 54169 <= m && m <= 54195 || 54197 <= m && m <= 54223 || 54225 <= m && m <= 54251 || 54253 <= m && m <= 54279 || 54281 <= m && m <= 54307 || 54309 <= m && m <= 54335 || 54337 <= m && m <= 54363 || 54365 <= m && m <= 54391 || 54393 <= m && m <= 54419 || 54421 <= m && m <= 54447 || 54449 <= m && m <= 54475 || 54477 <= m && m <= 54503 || 54505 <= m && m <= 54531 || 54533 <= m && m <= 54559 || 54561 <= m && m <= 54587 || 54589 <= m && m <= 54615 || 54617 <= m && m <= 54643 || 54645 <= m && m <= 54671 || 54673 <= m && m <= 54699 || 54701 <= m && m <= 54727 || 54729 <= m && m <= 54755 || 54757 <= m && m <= 54783 || 54785 <= m && m <= 54811 || 54813 <= m && m <= 54839 || 54841 <= m && m <= 54867 || 54869 <= m && m <= 54895 || 54897 <= m && m <= 54923 || 54925 <= m && m <= 54951 || 54953 <= m && m <= 54979 || 54981 <= m && m <= 55007 || 55009 <= m && m <= 55035 || 55037 <= m && m <= 55063 || 55065 <= m && m <= 55091 || 55093 <= m && m <= 55119 || 55121 <= m && m <= 55147 || 55149 <= m && m <= 55175 || 55177 <= m && m <= 55203 ? l : 9757 == m || 9977 == m || 9994 <= m && m <= 9997 || 127877 == m || 127938 <= m && m <= 127940 || 127943 == m || 127946 <= m && m <= 127948 || 128066 <= m && m <= 128067 || 128070 <= m && m <= 128080 || 128110 == m || 128112 <= m && m <= 128120 || 128124 == m || 128129 <= m && m <= 128131 || 128133 <= m && m <= 128135 || 128170 == m || 128372 <= m && m <= 128373 || 128378 == m || 128400 == m || 128405 <= m && m <= 128406 || 128581 <= m && m <= 128583 || 128587 <= m && m <= 128591 || 128675 == m || 128692 <= m && m <= 128694 || 128704 == m || 128716 == m || 129304 <= m && m <= 129308 || 129310 <= m && m <= 129311 || 129318 == m || 129328 <= m && m <= 129337 || 129341 <= m && m <= 129342 || 129489 <= m && m <= 129501 ? s : 127995 <= m && m <= 127999 ? v : 8205 == m ? x : 9792 == m || 9794 == m || 9877 <= m && m <= 9878 || 9992 == m || 10084 == m || 127752 == m || 127806 == m || 127859 == m || 127891 == m || 127908 == m || 127912 == m || 127979 == m || 127981 == m || 128139 == m || 128187 <= m && m <= 128188 || 128295 == m || 128300 == m || 128488 == m || 128640 == m || 128658 == m ? g : 128102 <= m && m <= 128105 ? p : c
    }
    return this.nextBreak = function(e, r) {
        if (void 0 === r && (r = 0),
        r < 0)
            return 0;
        if (r >= e.length - 1)
            return e.length;
        for (var t, n, i = b(G(e, r)), u = [], f = r + 1; f < e.length; f++)
            if (n = f - 1,
            !(55296 <= (t = e).charCodeAt(n) && t.charCodeAt(n) <= 56319 && 56320 <= t.charCodeAt(n + 1) && t.charCodeAt(n + 1) <= 57343)) {
                var o = b(G(e, f));
                if (S(i, u, o))
                    return f;
                u.push(o)
            }
        return e.length
    }
    ,
    this.splitGraphemes = function(e) {
        for (var r, t = [], n = 0; (r = this.nextBreak(e, n)) < e.length; )
            t.push(e.slice(n, r)),
            n = r;
        return n < e.length && t.push(e.slice(n)),
        t
    }
    ,
    this.iterateGraphemes = function(e) {
        var r = 0
          , t = {
            next: function() {
                var t, n;
                return (n = this.nextBreak(e, r)) < e.length ? (t = e.slice(r, n),
                r = n,
                {
                    value: t,
                    done: !1
                }) : r < e.length ? (t = e.slice(r),
                r = e.length,
                {
                    value: t,
                    done: !1
                }) : {
                    value: void 0,
                    done: !0
                }
            }
            .bind(this)
        };
        return "undefined" != typeof Symbol && Symbol.iterator && (t[Symbol.iterator] = function() {
            return t
        }
        ),
        t
    }
    ,
    this.countGraphemes = function(e) {
        for (var r, t = 0, n = 0; (r = this.nextBreak(e, n)) < e.length; )
            n = r,
            t++;
        return n < e.length && t++,
        t
    }
    ,
    this
}
"undefined" != typeof module && module.exports && (module.exports = GraphemeSplitter);
;function isWord(str) {
    if (/^[\s\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~«»·\\¡¿¬¦]*$/.test(str)) {
        return false;
    }
    return true;
}
function extractWordsAndPunct(text, opts) {
    var preserveApostrophe = opts.preserveApostrophe || false;
    var preserveHyphen = opts.preserveHyphen || false;
    var preserveNumberFormat = opts.preserveNumberFormat || false;
    var chars = splitIntoGraphemes(text);
    var prew = '';
    var next = chars[1] || '';
    var prewPos = 0;
    var textParts = [];
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];
        if (/['`´ʹʻʼʽʾʿˈˊʹ΄՚׳᾽᾿‘’‛′‵Ꞌꞌ＇]/.test(char) || /[\-‐‑֊־᠆﹣－⁃]/.test(char)) {
            var apostrophe = /['`´ʹʻʼʽʾʿˈˊʹ΄՚׳᾽᾿‘’‛′‵Ꞌꞌ＇]/.test(char) && !preserveApostrophe;
            var hyphen = /[\-‐‑֊־᠆﹣－⁃]/.test(char) && !preserveHyphen;
            if (apostrophe || hyphen || (!/^[a-zA-Z]$/.test(prew) || !/^[a-zA-Z]$/.test(next))) {
                var prewSlice = chars.slice(prewPos, i).join('');
                if (prewSlice.length > 0)
                    textParts.push(prewSlice);
                textParts.push(char);
                prewPos = i + 1;
            }
        }
        prew = char;
        next = chars[i + 2] || '';
    }
    var lastSlice = chars.slice(prewPos, i).join('');
    if (lastSlice.length > 0)
        textParts.push(lastSlice);
    var allWordsAndPunct = [];
    var number = '';
    for (var i = 0; i < textParts.length; i++) {
        var textPart = textParts[i];
        var wordsAndPunct = textPart.split(/([\s\u2000-\u206F\u2E00-\u2E7F\\!"#$%&()*+,.\/:;<=>?@\[\]^_`{|}~«»·\\¡¿¬¦]+)/);
        for (var j = 0; j < wordsAndPunct.length; j++) {
            var wordOrPunct = wordsAndPunct[j];
            var isDigit = /^[0-9]+$/.test(wordOrPunct);
            var isDot = /^[.]+$/.test(wordOrPunct);
            var nextIsDigit = wordsAndPunct[j + 1] ? /^[0-9]+$/.test(wordsAndPunct[j + 1]) : false;
            var isComma = /^[,]+$/.test(wordOrPunct);
            var prevIsDigit = wordsAndPunct[j - 1] ? /^[0-9]+$/.test(wordsAndPunct[j - 1]) : false;
            if (preserveNumberFormat && (isDigit || (isDot && nextIsDigit) || (isComma && prevIsDigit))) {
                number += wordOrPunct;
            } else if (wordOrPunct.length != 0) {
                if (preserveNumberFormat && number.length) {
                    allWordsAndPunct.push(number);
                    allWordsAndPunct.push(wordOrPunct);
                    number = '';
                } else {
                    allWordsAndPunct.push(wordOrPunct);
                }
            }
        }
        if (preserveNumberFormat && number.length) {
            allWordsAndPunct.push(number);
            number = '';
        }
    }
    return allWordsAndPunct;
}
function splitIntoGraphemes(text) {
    var splitter = new GraphemeSplitter();
    var chars = splitter.splitGraphemes(text);
    return chars;
}
;function entropy(chars) {
    var charsLength = chars.length;
    var symbolCount = {};
    for (var i = 0; i < charsLength; i++) {
        var symbol = chars[i];
        if (symbolCount[symbol] === undefined) {
            symbolCount[symbol] = 1;
        } else {
            symbolCount[symbol]++;
        }
    }
    var complexity = 0;
    var allCounts = Object.values(symbolCount);
    var allCountsLength = allCounts.length;
    for (var i = 0; i < allCountsLength; i++) {
        complexity = complexity - allCounts[i] / charsLength * Math.log2(allCounts[i] / charsLength);
    }
    return complexity;
}
;(function(f) {
    if (typeof exports === "object" && typeof module !== "undefined") {
        module.exports = f()
    } else if (typeof define === "function" && define.amd) {
        define([], f)
    } else {
        var g;
        if (typeof window !== "undefined") {
            g = window
        } else if (typeof global !== "undefined") {
            g = global
        } else if (typeof self !== "undefined") {
            g = self
        } else {
            g = this
        }
        g.tokenizer = f()
    }
}
)(function() {
    var define, module, exports;
    return function() {
        function e(t, n, r) {
            function s(o, u) {
                if (!n[o]) {
                    if (!t[o]) {
                        var a = typeof require == "function" && require;
                        if (!u && a)
                            return a(o, !0);
                        if (i)
                            return i(o, !0);
                        var f = new Error("Cannot find module '" + o + "'");
                        throw f.code = "MODULE_NOT_FOUND",
                        f
                    }
                    var l = n[o] = {
                        exports: {}
                    };
                    t[o][0].call(l.exports, function(e) {
                        var n = t[o][1][e];
                        return s(n ? n : e)
                    }, l, l.exports, e, t, n, r)
                }
                return n[o].exports
            }
            var i = typeof require == "function" && require;
            for (var o = 0; o < r.length; o++)
                s(r[o]);
            return s
        }
        return e
    }()({
        1: [function(require, module, exports) {
            var abbreviations;
            var englishAbbreviations = ["al", "adj", "assn", "Ave", "BSc", "MSc", "Cell", "Ch", "Co", "cc", "Corp", "Dem", "Dept", "ed", "eg", "Eq", "Eqs", "est", "est", "etc", "Ex", "ext", "Fig", "fig", "Figs", "figs", "i.e", "ie", "Inc", "inc", "Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep", "Sept", "Oct", "Nov", "Dec", "jr", "mi", "Miss", "Mrs", "Mr", "Ms", "Mol", "mt", "mts", "no", "Nos", "PhD", "MD", "BA", "MA", "MM", "pl", "pop", "pp", "Prof", "Dr", "pt", "Ref", "Refs", "Rep", "repr", "rev", "Sec", "Secs", "Sgt", "Col", "Gen", "Rep", "Sen", "Gov", "Lt", "Maj", "Capt", "St", "Sr", "sr", "Jr", "jr", "Rev", "Sun", "Mon", "Tu", "Tue", "Tues", "Wed", "Th", "Thu", "Thur", "Thurs", "Fri", "Sat", "trans", "Univ", "Viz", "Vol", "vs", "v"];
            exports.setAbbreviations = function(abbr) {
                if (abbr) {
                    abbreviations = abbr
                } else {
                    abbreviations = englishAbbreviations
                }
            }
            ;
            var isCapitalized = exports.isCapitalized = function(str) {
                return /^[A-Z][a-z].*/.test(str) || isNumber(str)
            }
            ;
            exports.isSentenceStarter = function(str) {
                return isCapitalized(str) || /``|"|'/.test(str.substring(0, 2))
            }
            ;
            exports.isCommonAbbreviation = function(str) {
                return ~abbreviations.indexOf(str.replace(/\W+/g, ""))
            }
            ;
            exports.isTimeAbbreviation = function(word, next) {
                if (word === "a.m." || word === "p.m.") {
                    var tmp = next.replace(/\W+/g, "").slice(-3).toLowerCase();
                    if (tmp === "day") {
                        return true
                    }
                }
                return false
            }
            ;
            exports.isDottedAbbreviation = function(word) {
                var matches = word.replace(/[\(\)\[\]\{\}]/g, "").match(/(.\.)*/);
                return matches && matches[0].length > 0
            }
            ;
            exports.isCustomAbbreviation = function(str) {
                if (str.length <= 3) {
                    return true
                }
                return isCapitalized(str)
            }
            ;
            exports.isNameAbbreviation = function(wordCount, words) {
                if (words.length > 0) {
                    if (wordCount < 5 && words[0].length < 6 && isCapitalized(words[0])) {
                        return true
                    }
                    var capitalized = words.filter(function(str) {
                        return /[A-Z]/.test(str.charAt(0))
                    });
                    return capitalized.length >= 3
                }
                return false
            }
            ;
            var isNumber = exports.isNumber = function(str, dotPos) {
                if (dotPos) {
                    str = str.slice(dotPos - 1, dotPos + 2)
                }
                return !isNaN(str)
            }
            ;
            exports.isPhoneNr = function(str) {
                return str.match(/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/)
            }
            ;
            exports.isURL = function(str) {
                return str.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)
            }
            ;
            exports.isConcatenated = function(word) {
                var i = 0;
                if ((i = word.indexOf(".")) > -1 || (i = word.indexOf("!")) > -1 || (i = word.indexOf("?")) > -1) {
                    var c = word.charAt(i + 1);
                    if (c.match(/[a-zA-Z].*/)) {
                        return [word.slice(0, i), word.slice(i + 1)]
                    }
                }
                return false
            }
            ;
            exports.isBoundaryChar = function(word) {
                return word === "." || word === "!" || word === "?"
            }
        }
        , {}],
        2: [function(require, module, exports) {
            module.exports = function sanitizeHtml(text, opts) {
                if ((typeof text == "string" || text instanceof String) && typeof document !== "undefined") {
                    var $div = document.createElement("DIV");
                    $div.innerHTML = text;
                    text = ($div.textContent || "").trim()
                } else if (typeof text === "object" && text.textContent) {
                    text = (text.textContent || "").trim()
                }
                return text
            }
        }
        , {}],
        3: [function(require, module, exports) {
            exports.endsWithChar = function ends_with_char(word, c) {
                if (c.length > 1) {
                    return c.indexOf(word.slice(-1)) > -1
                }
                return word.slice(-1) === c
            }
            ;
            exports.endsWith = function ends_with(word, end) {
                return word.slice(word.length - end.length) === end
            }
        }
        , {}],
        4: [function(require, module, exports) {
            "use strict";
            var sanitizeHtml = require("sanitize-html");
            var stringHelper = require("./stringHelper");
            var Match = require("./Match");
            var newline_placeholder = " @~@ ";
            var newline_placeholder_t = newline_placeholder.trim();
            var whiteSpaceCheck = new RegExp("\\S","");
            var addNewLineBoundaries = new RegExp("\\n+|[-#=_+*]{4,}","g");
            var splitIntoWords = new RegExp("\\S+|\\n","g");
            exports.sentences = function(text, user_options) {
                if (!text || typeof text !== "string" || !text.length) {
                    return []
                }
                if (!whiteSpaceCheck.test(text)) {
                    return []
                }
                var options = {
                    newline_boundaries: false,
                    html_boundaries: false,
                    html_boundaries_tags: ["p", "div", "ul", "ol"],
                    sanitize: false,
                    allowed_tags: false,
                    preserve_whitespace: false,
                    abbreviations: null
                };
                if (typeof user_options === "boolean") {
                    options.newline_boundaries = true
                } else {
                    for (var k in user_options) {
                        options[k] = user_options[k]
                    }
                }
                Match.setAbbreviations(options.abbreviations);
                if (options.newline_boundaries) {
                    text = text.replace(addNewLineBoundaries, newline_placeholder)
                }
                if (options.html_boundaries) {
                    var html_boundaries_regexp = "(<br\\s*\\/?>|<\\/(" + options.html_boundaries_tags.join("|") + ")>)";
                    var re = new RegExp(html_boundaries_regexp,"g");
                    text = text.replace(re, "$1" + newline_placeholder)
                }
                if (options.sanitize || options.allowed_tags) {
                    if (!options.allowed_tags) {
                        options.allowed_tags = [""]
                    }
                    text = sanitizeHtml(text, {
                        allowedTags: options.allowed_tags
                    })
                }
                var words;
                var tokens;
                if (options.preserve_whitespace) {
                    tokens = text.split(/(<br\s*\/?>|\S+|\n+)/);
                    words = tokens.filter(function(token, ii) {
                        return ii % 2
                    })
                } else {
                    words = text.trim().match(splitIntoWords)
                }
                var wordCount = 0;
                var index = 0;
                var temp = [];
                var sentences = [];
                var current = [];
                if (!words || !words.length) {
                    return []
                }
                for (var i = 0, L = words.length; i < L; i++) {
                    wordCount++;
                    current.push(words[i]);
                    if (~words[i].indexOf(",")) {
                        wordCount = 0
                    }
                    if (Match.isBoundaryChar(words[i]) || stringHelper.endsWithChar(words[i], "?!") || words[i] === newline_placeholder_t) {
                        if ((options.newline_boundaries || options.html_boundaries) && words[i] === newline_placeholder_t) {
                            current.pop()
                        }
                        sentences.push(current);
                        wordCount = 0;
                        current = [];
                        continue
                    }
                    if (stringHelper.endsWithChar(words[i], '"') || stringHelper.endsWithChar(words[i], "”")) {
                        words[i] = words[i].slice(0, -1)
                    }
                    if (stringHelper.endsWithChar(words[i], ".")) {
                        if (i + 1 < L) {
                            if (words[i].length === 2 && isNaN(words[i].charAt(0))) {
                                continue
                            }
                            if (Match.isCommonAbbreviation(words[i])) {
                                continue
                            }
                            if (Match.isSentenceStarter(words[i + 1])) {
                                if (Match.isTimeAbbreviation(words[i], words[i + 1])) {
                                    continue
                                }
                                if (Match.isNameAbbreviation(wordCount, words.slice(i, 6))) {
                                    continue
                                }
                                if (Match.isNumber(words[i + 1])) {
                                    if (Match.isCustomAbbreviation(words[i])) {
                                        continue
                                    }
                                }
                            } else {
                                if (stringHelper.endsWith(words[i], "..")) {
                                    continue
                                }
                                if (Match.isDottedAbbreviation(words[i])) {
                                    continue
                                }
                                if (Match.isNameAbbreviation(wordCount, words.slice(i, 5))) {
                                    continue
                                }
                            }
                        }
                        sentences.push(current);
                        current = [];
                        wordCount = 0;
                        continue
                    }
                    if ((index = words[i].indexOf(".")) > -1) {
                        if (Match.isNumber(words[i], index)) {
                            continue
                        }
                        if (Match.isDottedAbbreviation(words[i])) {
                            continue
                        }
                        if (Match.isURL(words[i]) || Match.isPhoneNr(words[i])) {
                            continue
                        }
                    }
                    if (temp = Match.isConcatenated(words[i])) {
                        current.pop();
                        current.push(temp[0]);
                        sentences.push(current);
                        current = [];
                        wordCount = 0;
                        current.push(temp[1])
                    }
                }
                if (current.length) {
                    sentences.push(current)
                }
                sentences = sentences.filter(function(s) {
                    return s.length > 0
                });
                var result = sentences.slice(1).reduce(function(out, sentence) {
                    var lastSentence = out[out.length - 1];
                    if (lastSentence.length === 1 && /^.{1,2}[.]$/.test(lastSentence[0])) {
                        if (!/[.]/.test(sentence[0])) {
                            out.pop();
                            out.push(lastSentence.concat(sentence));
                            return out
                        }
                    }
                    out.push(sentence);
                    return out
                }, [sentences[0]]);
                return result.map(function(sentence, ii) {
                    if (options.preserve_whitespace && !options.newline_boundaries && !options.html_boundaries) {
                        var tokenCount = sentence.length * 2;
                        if (ii === 0) {
                            tokenCount += 1
                        }
                        return tokens.splice(0, tokenCount).join("")
                    }
                    return sentence.join(" ")
                })
            }
        }
        , {
            "./Match": 1,
            "./stringHelper": 3,
            "sanitize-html": 2
        }]
    }, {}, [4])(4)
});
;